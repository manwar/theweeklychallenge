---
title: "Advent Calendar - December 16, 2019"
date: 2019-12-14T00:00:00+00:00
description: "Advent Calendar - December 16, 2019"
type: post
image: images/blog/2019-12-16.jpg
author: Yozen Hernandez
tags: ["Perl"]
---

[**Advent Calendar 2019**](/blog/advent-calendar-2019)
***

The gift is presented by [**Yozen Hernandez**](/blog/meet-the-champion-017). Today he is talking about his solutions to **Task #2: Vigenère Cipher** of [**"The Weekly Challenge - 015"**](/blog/perl-weekly-challenge-015).

#### Write a script to implement Vigenère cipher. The script should be able encode and decode. Checkout [**wiki page**](https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher) for more information.

***

This seemed like a cool challenge to tackle. Knowing next to nothing about encryption, I was worried that this would take me all week. I actually spent less time on this challenge than I did on part 1!

The idea behind the **Vigenère Cipher** (which should probably be called the **Bellaso Cipher** as **Giovan Battista Bellaso** was the first one to describe it), is that a message is encrypted using a key and each letter in the key changes the **“alphabet”** of each letter of the message. The simplest form of such a cipher is the **Caesar Cipher**, where a message is **“encrypted”** (because it can hardly be called encryption by today’s standards) by picking a fixed shift length and then **“rotating”** the alphabet. Say you picked a left shift of **10**, then **“A”** would be represented by **“Q”, “B”** by **“R”**, and so on. The **Vigenère Cipher** uses a key to change the shift every letter.

Wikipedia’s example gives a message of **“ATTACKATDAWN”** and a key **“LEMON”**. The key is shorter than the message, so it will need to be repeated, cycling around as many times as needed to cover the message. Then, each corresponding letter in the key determines the alphabetic **“shift”** to **encode** the message. Since the key is needed to determine the shift of every letter, this cipher was long held as being **“indecipherable”** (though nothing lasts forever).

    Plaintext:  ATTACKATDAWN
    Key:        LEMONLEMONLE
    Ciphertext: LXFOPVEFRNHR

The first **“L”** in **“LEMON”** indicates a **shift of 11**, since **“L”** is eleven letters away from **“A”**. The **“E”** indicates a **shift of 4**, and so on. Looking at the **“ciphertext”** above, you might notice that **“A”**s always **shift to the letter** in the key, but this turns out not to be relevant to the solution, at least not my solution.

By now it becomes immediately obvious what must be done: using the numeric values for each letter in the alphabet, do some simple arithmetic to convert each letter in the message into a different letter determined by the numeric value of the key at a position. Since keys can be shorter than the message, you need to use modulo to wrap around the key when processing long messages.

Let’s look at the code to see what I mean:

```perl
use v5.24;
use strict;
use warnings;
use feature qw(say state signatures);
no warnings "experimental::signatures";
use Carp;

my %tabula;
@tabula{ "A" .. "Z" } = ( 0 .. 25 );

sub encode_vigenere {
    my %args = @_;
    croak "Must supply the 'message' and 'key' arguments to this function.\n"
        unless ( exists $args{message} && exists $args{key} );

    my @message = split //, uc($args{message});
    my @key  = split //, uc($args{key});
    return join "", map {
        ( "A" .. "Z" )
            [ ( $tabula{ $message[$_] } + $tabula{ $key[ $_ % @key ] } ) %
            keys %tabula ]
    } ( 0 .. @message - 1 );
}

sub decode_vigenere {
    my %args = @_;
    croak "Must supply the 'message' and 'key' arguments to this function.\n"
        unless ( exists $args{message} && exists $args{key} );

    my @message = split //, uc($args{message});
    my @key  = split //, uc($args{key});
    return join "", map {
        ( "A" .. "Z" )
            [ ( $tabula{ $message[$_] } - $tabula{ $key[ $_ % @key ] } ) %
            keys %tabula ]
    } ( 0 .. @message - 1 );
}

my $message = $ARGV[0] // "ATTACKATDAWN";
my $key  = $ARGV[1] // "LEMON";

# Encrypt
my $encrypted = encode_vigenere( message => $message, key => $key );
say "Encrypted: $encrypted";

# Decrypt
my $decoded = decode_vigenere( message => $encrypted, key => $key );
say "Decrypted: $decoded";
```
I built a hash which mapped uppercase **Latin letters** to a numeric equivalent, and called that **%tabula** after the term **tabula recta** used by the people actually using this cipher. Now I’ve got a mapping between letters and numbers which matches the actual mapping used.

Next each function takes it’s **input**, **a message** and **a key**, and splits each of these into arrays so we can iterate over them. A loop iterates over the message, and for each letter in the message we subtract (in the case of encryption) the value of the corresponding letter in the key. Again, since the key is usually shorter, we must use **modulo arithmetic** dependent on the length of the key to let us wrap around and reuse letters in the key. The new **“shifted”** value is used as an index into a list of uppercase letters from **“A”-“Z”**, same as when we built the **tabula**. Another **modulo** is used, with the **length of the alphabet** (the keys in the tabula) as the **divisor**, to make sure the the result of the shift is a valid index. This works even for **negative shift values**.

**Decryption** works much the same, except that instead of subtracting the value obtained from the key, we add it. Knowing that, we could make the code even simpler, at the risk of making the interface a bit clunkier:

```perl
sub vigenere (%args) {
    croak "Must supply the 'message' and 'key' arguments to this function.\n"
        unless ( exists $args{message} && exists $args{key} );

    my @message = split //, uc($args{message});
    my @key  = split //, uc($args{key});
    my $decode = ( exists $args{decode} && $args{decode} != 0 ) || -1;
    return join "", map {
        ( "A" .. "Z" )[
            ( $tabula{ $message[$_] }
                    + ( ( -1 * $decode ) * $tabula{ $key[ $_ % @key ] } ) ) %
            keys %tabula
        ]
    } ( 0 .. @message - 1 );
}

my $message = $ARGV[0] // "ATTACKATDAWN";
my $key  = $ARGV[1] // "LEMON";

# Encrypt
my $encrypted = vigenere( message => $message, key => $key );
say "Encrypted: $encrypted";

# Decrypt
my $decoded = vigenere( message => $encrypted, key => $key, decode => 1 );
say "Decrypted: $decoded";
```
Supply any **non-0** value to the **decode option** in the **vigenere function** to **decode** rather than **encode**. I think I would be happy with that, and we could always add wrapper functions to hide that away from the user and still cut down on code repetition:

```perl
sub encode_vigenere {
    my %args = @_;
    vigenere(%args, decode => 0);
}

sub decode_vigenere {
    my %args = @_;
    vigenere(%args, decode => 1);
}
```
Now, even if the user supplies some other value for decode, as long as they use the correct wrapper function, they will get the result they wanted.

See the full solution, [**here**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-015/yozen-hernandez/perl5/ch-2.pl).

***
If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

[**Advent Calendar 2019**](/blog/advent-calendar-2019)
