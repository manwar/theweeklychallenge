---
title: "Advent Calendar - December 17, 2019"
date: 2019-12-16T00:00:00+00:00
description: "Advent Calendar - December 17, 2019"
type: post
image: images/blog/2019-12-17.jpg
author: Yozen Hernandez
tags: ["Perl", "Raku"]
---

[**Advent Calendar 2019**](/blog/advent-calendar-2019)
***

The gift is presented by [**Athanasius**](/blog/meet-the-champion-023). Today he is talking about his solutions to **Task #2: Bitcoin Validation** of [**"The Weekly Challenge - 016"**](/blog/perl-weekly-challenge-016).

#### Write a script to validate a given bitcoin address. Most Bitcoin addresses are 34 characters. They consist of random digits and uppercase and lowercase letters, with the exception that the uppercase letter “O”, uppercase letter “I”, lowercase letter “l”, and the number “0” are never used to prevent visual ambiguity. A bitcoin address encodes 25 bytes. The last four bytes are a checksum check. They are the first four bytes of a double SHA-256 digest of the previous 21 bytes. For more information, please refer [wiki page](https://en.bitcoin.it/wiki/Address).

***

Prior to this task I knew nothing about **Bitcoin**; now, I still don’t know much! But I found a useful introduction, [**Learn Me a Bitcoin**](https://learnmeabitcoin.com/), which explains the technology basics quite well. (But not the rationale behind the technology. I now understand what Bitcoin mining is, but not why it’s needed; and I know how the difficulty is adjusted to keep the average mining time around 10 minutes, but not why that target is important in the first place.)

From this [**site**](https://allprivatekeys.com/bitcoin-address-format) it appears that valid Bitcoin addresses can take 3 forms:

##### 1) Pubkey hash (P2PKH address) with prefix 1

##### 2) Script hash (P2SH address) with prefix 3

##### 3) SegWit mainnet (P2WPKH address) with prefix bc1

However, for this exercise I’ve assumed that only **P2PKH** and **P2SH** addresses are included. For the record, details of **P2WPKH** (or **Bech32**) validation can be found [**here**](https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki#Bech32).

## PERL SOLUTION

CPAN’s [**Digest::SHA**](https://metacpan.org/pod/Digest::SHA) module has a nice OO interface and supports many SHA variants including **SHA-256**. For decoding **Base58** using the **Bitcoin alphabet**, module [**Crypt::Misc**](https://metacpan.org/pod/Crypt::Misc) has the **function decode_b58b()**. After that, it’s just a question of applied logic.

The trickiest part for me was the code to verify the checksum, which required disentangling all the different encodings. The details are given in the comments to **function validate_checksum()**, below:

```perl
use strict;
use warnings;
use Const::Fast;
use Crypt::Misc qw( decode_b58b );
use Digest::SHA;

const my $DEFAULT_ADDR  => '1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2';
const my %ADDR_FORMATS  => (1   => 'P2PKH', 3 => 'P2SH',
                            bc1 => 'Bech32');
const my $INVALID_CHARS =>  qr{([^1-9A-HJ-NP-Za-km-z])};
const my $MAX_CHARS     =>  35;
const my $MIN_CHARS     =>  26;
const my $SHA_ALGORITHM => 256;
const my $TAB           => '  ';

MAIN:
{
    my $address = $ARGV[0] // $DEFAULT_ADDR;

    print "\nBitcoin address: \"$address\"\n";

    if (my $error = validate_format($address, \my $format))
    {
        print "${TAB}Format validation FAILED: $error\n";
    }
    elsif ($format eq 'Bech32')
    {
        print "${TAB}Bech32 format not currently supported\n";
    }
    else
    {
        print "${TAB}Format is \"$format\"\n";

        if ($error = validate_chars($address))
        {
            print "${TAB}Character validation FAILED: $error\n";
        }
        elsif (validate_checksum($address))
        {
            print "${TAB}Checksum validation PASSED\n";
        }
        else
        {
            print "${TAB}Checksum validation FAILED\n";
        }
    }
}

sub validate_format
{
    my ($address, $format) = @_;
    my  $error;

    for my $prefix (keys %ADDR_FORMATS)
    {
        if ($address =~ qr/^$prefix/)
        {
            $$format = $ADDR_FORMATS{$prefix};
            last;
        }
    }

    unless (defined $$format)
    {
        my $len = substr($address, 0, 1) eq 'b' ?
                  substr($address, 1, 1) eq 'c' ? 3 : 2 : 1;
        $error  = 'invalid prefix "' . substr($address, 0, $len) .
                  '", unknown format';
    }

    return $error;
}

sub validate_chars
{
    my ($address) = @_;
    my  $chars    = length $address;
    my  $error;

    if    ($chars < $MIN_CHARS)
    {
        $error = "invalid length $chars (minimum is $MIN_CHARS)";
    }
    elsif ($chars > $MAX_CHARS)
    {
        $error = "invalid length $chars (maximum is $MAX_CHARS)";
    }
    elsif ($address =~ $INVALID_CHARS)
    {
        $error = "invalid character \"$1\"";
    }

    return $error;
}

sub validate_checksum
{
    my ($address)  = @_;
    my  $rawdata   = decode_b58b($address);      # Base58 to bytes
    my  $hexdata   = unpack 'H*', $rawdata;      # Bytes  to hex
    my  $checksum1 = substr  $hexdata, -8;       # Checksum 1 in hex
    my  $payload   = substr  $hexdata,  0, -8;   # Payload in hex
    my  $sha_obj   = Digest::SHA->new($SHA_ALGORITHM);
        $sha_obj->add(pack 'H*', $payload);      # Hex to bytes
    my  $digest1   = $sha_obj->hexdigest;        # 1st digest in hex
        $sha_obj->add(pack 'H*', $digest1);      # hex to bytes
    my  $digest2   = $sha_obj->hexdigest;        # 2nd digest in hex
    my  $checksum2 = substr  $digest2,  0,  8;   # Checksum 2 in hex

    return $checksum1 eq $checksum2;             # Compare checksums
}
```
## RAKU SOLUTION

I was surprised to find that pack and unpack are still considered experimental in **Raku**. Fortunately, the functionality I needed was available. I found [**Digest::SHA256::Native**](https://modules.perl6.org/dist/Digest::SHA256::Native:cpan:BDUGGAN) as a replacement for **Perl**’s **Digest::SHA**, but had to re-use the **Perl** module **Crypt::Misc** here.

Note: I created **$decode_b58b** as an alias for **Crypt::Misc::decode_b58b** only to keep Comma happy! This worked (it removed the error message), but I couldn’t find any way to make Comma happy with the call to pack, which is a function only and so can’t be called as a method.

As usual, my approach to **Raku** coding is to use functional-style method calls and explicity-declared variable types wherever possible. This is overkill for a script like this, but it helps me to learn. **Blob[uint8]** was a type I hadn’t come across before. Note also the regex:

    rx{ ( <-[1..9A..HJ..NP..Za..km..z]> ) }

which uses a negated character class **(<-[...]>)** to match any character outside the allowed Bitcoin address alphabet.

```perl6
use v6;
use experimental :pack;
use Crypt::Misc:from<Perl5> <decode_b58b>;
use Digest::SHA256::Native;

my Sub $decode_b58b := &Crypt::Misc::decode_b58b;

my       constant %ADDR-FORMATS  =
                  (1 => 'P2PKH', 3 => 'P2SH', bc1 => 'Bech32');
my Str   constant $DEFAULT-ADDR  =
                  '1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2';
my Regex constant $INVALID-CHARS =
                  rx{ ( <-[1..9A..HJ..NP..Za..km..z]> ) };
my UInt  constant $MAX-CHARS     =  35;
my UInt  constant $MIN-CHARS     =  26;
my Str   constant $TAB           = '  ';

sub MAIN(Str:D $address = $DEFAULT-ADDR)
{
    print "\nBitcoin address: \"$address\"\n";
    my Str:D $format = '';

    if my $error = validate-format($address, $format)
    {
        print "{$TAB}Format validation FAILED: $error\n";
    }
    elsif $format eq 'Bech32'
    {
        print "{$TAB}Bech32 format not currently supported\n";
    }
    else
    {
        print "{$TAB}Format is \"$format\"\n";

        if $error = validate-chars($address)
        {
            print "{$TAB}Character validation FAILED: $error\n";
        }
        elsif validate-checksum($address)
        {
            print "{$TAB}Checksum validation PASSED\n";
        }
        else
        {
            print "{$TAB}Checksum validation FAILED\n";
        }
    }
}

sub validate-format(Str:D $address, Str:D $format is rw)
{
    my Str $error;

    for keys %ADDR-FORMATS -> Str $prefix
    {
        if $address ~~ /^$prefix/
        {
            $format = %ADDR-FORMATS{$prefix};
            last;
        }
    }

    unless $format
    {
        my UInt $len = $address.substr(0, 1) eq 'b' ??
                       $address.substr(1, 1) eq 'c' ?? 3 !! 2 !! 1;

        $error = 'invalid prefix "' ~ $address.substr(0, $len) ~
                 '", unknown format';
    }

    return $error;
}

sub validate-chars(Str:D $address)
{
    my $chars = $address.chars;
    my Str $error;

    if $chars < $MIN-CHARS
    {
        $error = "invalid length $chars (minimum is $MIN-CHARS)";
    }
    elsif $chars > $MAX-CHARS
    {
        $error = "invalid length $chars (maximum is $MAX-CHARS)";
    }
    elsif $address ~~ $INVALID-CHARS
    {
        $error = "invalid character \"$0\"";
    }

    return $error;
}

sub validate-checksum(Str:D $address)
{
    my Blob[uint8] $raw-data      = $decode_b58b($address);
    my Str         $hex-data      = $raw-data.unpack('H*');
    my Str         $hex-checksum1 = $hex-data.substr(*-8);
    my Str         $hex-payload   = $hex-data.substr(0, *-8);
    my Blob[uint8] $raw-payload   = pack('H*', $hex-payload);
    my Str         $hex-digest1   = sha256-hex($raw-payload);
    my Blob[uint8] $raw_digest1   = pack('H*', $hex-digest1);
    my Str         $hex-digest2   = sha256-hex($raw_digest1);
    my Str         $hex-checksum2 = $hex-digest2.substr(0, 8);

    return $hex-checksum1 eq $hex-checksum2;
}
```
***
If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

[**Advent Calendar 2019**](/blog/advent-calendar-2019)
