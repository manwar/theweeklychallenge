
---
author:       Colin Crain
date:         2021-02-08T00:00:00
description:  "Colin Crain › Perl Weekly Review #097"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #097"
image:        images/blog/p5-review-challenge-097.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-096/).* )

Welcome to the Perl review for **Week 097** of the Weekly Challenge! Here we will take the time to discuss the  submissions offered by the team, factor out the common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

---

### Why do we do these challenges?

I suppose any answers to that would be as wide ranging and varied as the people who choose to join the team. One thing is clear: it's not a competition, and there are no judges, even if there is a "prize" of sorts. About that -- I think of it more as an honorarium periodically awarded to acknowledge the efforts we make towards this strange goal. So there's no determination to find the *fastest*, or the *shortest*, or even, in some abstract way, the *best* way to go about things, although I'm certain the individuals have their own aspirations and personal drives. As Perl is such a wonderfully expressive language, this provides quite a bit of fodder to the core idea of TMTOWTDI, producing a gamut of wonderfully varied techniques and solutions.

Even the tasks themselves are often open to a certain amount of discretionary interpretation. What we end up with is a situation where each participant is producing something in the manner they find the most interesting or satisfying. Some team members focus on carefully crafted complete applications that thoroughly vet input data and handle every use case they can think up. Others chose to apply themselves to the logic of the underlying puzzle and making it work in the most elegant way they can. Some eschew modules they would ordinarily reach for, others embrace them, bringing to light wheels perhaps invented years ago that happen to exactly solve the problem in front of them today.

I've been considering this question for some time and have found one binding commonality between all of us solving these challenges each week, in that however we normally live our lives, the task in front of us more than likely has nothing to do with any of that . And I think this has great value. We all do what we do, out in the real world, and hopefully we do it well. The Weekly Challenge provides a opportunity to do something germane to that life yet distinctly different; if we only do the things we already know how to do we only do the same things over and over. This is where the "challenge" aspect comes into play.

So we can consider the Weekly Challenge as providing a problem space outside of our comfort zone, as far out from comfort as we wish to take things. From those reaches we can gather and learn things and bring what we want back into our lives. Personally, I think that's its greatest value of all.

---

Every week there is an enormous global collective effort made by the team, analyzing and creatively coding the submissions, and that effort deserves credit due. And that's why I'm here, to try and figure out how to do that.

Let's have a look and see what we can find.

---

**<big>For context</big>**  before we begin, you may wish to revisit either of the pages for the [**original tasks**](/blog/perl-weekly-challenge-097/) or the summary [**recap**](/blog/recap-challenge-097/) of the challenge. But don't worry, the challenges themselves will be briefly summarized, presented below as we progress from task by task. Oh, and one more thing before we get started:

### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

**So finally, without further ado...**

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC097TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC097TASK2)   &nbsp;  &nbsp;  &nbsp;   	•   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC097BLOGS)    &nbsp;  &nbsp;  &nbsp;   	•

---

# TASK 1 {#PWC097TASK1}

# Caesar Cipher
*Submitted by: Mohammad S Anwar*

You are given string $S containing alphabets A..Z only and a number $N.

Write a script to encrypt the given string $S using Caesar Cipher with left shift of size $N.

**Example**
```
    Input: $S = "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG", $N = 3
    Output: "QEB NRFZH YOLTK CLU GRJMP LSBO QEB IXWV ALD"

    Plain:    ABCDEFGHIJKLMNOPQRSTUVWXYZ
    Cipher:   XYZABCDEFGHIJKLMNOPQRSTUVW

    Plaintext:  THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG
    Ciphertext: QEB NRFZH YOLTK CLU GRJMP LSBO QEB IXWV ALD
```

## about the solutions

There were 30 working submissions for the first task this past week, a sizable uptick in activity from the team. For such a simple cipher transformation, there was quite a range of approaches to the challenge.

Generally the idea was to somehow iterate over each character in the plaintext string, hold it up for examination and decide what to do with it. But even this generalization came in different flavors: we could break the string into an array of characters, requiring reassembly, or operate directly on the characters with an index iterator and `substr`. A regular expression is clearly defined to act from left-to-right across its target, but can the same be said about the translation operator? Well, yea, sort of, but the mechanics of that voodoo magic occur at such a far deeper level that simple "iteration" isn't particularly meaningful.

Left undefined was any mention of non-alphabetic characters and how they should behave under the cipher. The only guidance was through the example, which seemed to allow for spaces, which were retained unchanged in the ciphertext. There are no other punctuation, digits or non-alphabetic characters. Some people allowed and ignored these, passing them through. Others deleted them outright. One thing seems clear though: that because of the essentially cyclic nature of the transform, shifting these characters can make no sense, as they do not occupy a standard ordered place in the alphabet. So either retaining them intact or deleting them were each accepible choices.

It also was not specified whether the text was restricted to uppercase letters and spaces, only that the sole example was constructed this way. In the textual world of language, a letter is a letter and case is just an additional typographic attribute applied to it. As such the cipher itself doesn't care and should be able to handle either, theoretically. What to do *here*, though, is not defined, so either rejecting lowercase text or internally converting to produce an uppercase ciphertext seems reasonable. The only criteria is that an uppercase and lowercase version of a letter must transform to the same (correct) letter, however the output is presented.

This last case brought down several submissions, and I will not lie brought me no small anxiety when I applied the nefarious test string I had created to my own method. Apparently I had thought to uppercase everything so it all worked out.

In one submission we even had lowercase input converted to lowercase output and upper to upper, which makes no freaking cryptographic sense at all but was lovely to wander across. All actions in this world need not be sensical, as that would make everything a lot less fun.

## use a HASH MAPPING

[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/alexander-pankoff/perl/ch-1.pl),
[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/cristian-heredia/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/dave-jacoby/perl/ch-1.pl),
[**Lance Wicks**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/lance-wicks/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/roger-bell-west/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/sgreen/perl/ch-1.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/wlmb/perl/ch-1.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/wanderdoc/perl/ch-1.pl)


If we want to replace every character we see with some other character in a one-to-one mapping, the first thing to come to mind would probably be a hash. After all, the "association" part of "associative array" is exactly that: every key maps to an associated value. The question becomes how to construct the mapping — after that is done the iteration and replacement should be simple.

The most common manner of constructing the hash mapping was to create two arrays, one a standard alphabet, the other a matching ciphertext with the alignment offset and wrapped around. Then the two are read into the lookup hash as key / value pairs, index by index.

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/dave-jacoby/perl/ch-1.pl)

Dave mechanically shifts the ciphertext array, popping values off the end and reinserting them at the beginning until the correct offset is achieved. Once that is accomplished the actual encoding is done. We split the input string and use a `map` function to replace any characters found in the lookup with their ciphertext complement before rejoining the elements.

```perl
    sub caesar_cipher ( $s, $n ) {
        my @alpha = 'A' .. 'Z';
        my @bet   = @alpha;
        for ( 1 .. $n ) {
            unshift @bet, pop @bet;
        }

        my %cipher = map { $alpha[$_] => $bet[$_] } 0 .. $#alpha;

        $s = uc $s;
        my $t = join '', map { $cipher{$_} ? $cipher{$_} : $_ } split //, $s;
    }
```

[**Lance Wicks**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/lance-wicks/perl/ch-1.pl)

Lance, in his [Cipher.pm]() module, takes the same approach to creating his aligned cipher array.

```perl
    for ( 1 .. $args{n} ) {
        my $char = pop @cipher;
        unshift @cipher, $char;
    }
```



[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/roger-bell-west/perl/ch-1.pl)

Roger first duplicates his alphabet array twice, then does his mechanical realignment using `splice`, removing a sequence from the front of the double-length array to produce an offset alphabet. The tail of the cipher array remains long, but these values will never be accessed.

```perl
    sub cc {
        my $s = shift;
        my $n = shift;
        my @plain = ( 'A'..'Z' );
        my @cipher = ( @plain, @plain );
        splice @cipher, 0, ( 26 * 2-$n )%26;
        my %m = map { $plain[$_] => $cipher[$_] } ( 0..$#plain );
        return join( '', map { $m{ $_ } || $_ } split '', $s );
    }
```


[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/wanderdoc/perl/ch-1.pl)

In a deft feat of assignment bravado, our Meandering Medico creates their hash in one fell swoop, assigning an array slice to a hash slice. This is certainly one of my favorite things I've seen today. Both arrays are still there, albeit one anonymously spun up by the slice, and no iterative middle step is required. Nice!

```perl
     my @alphabet = 'A' .. 'Z';
     $encrypt{q( )} = q( );
     @encrypt{@alphabet} = @alphabet[   $#alphabet - $num + 1 .. $#alphabet,
                                        0 .. $#alphabet - $num];
     $str =    join '',
               map $encrypt{$_},
               split(//,$str);
```

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/sgreen/perl/ch-1.pl)

Simon eschews the use of arrays at all, but still follows the same general pattern, only holding his alignment data in a pair of strings instead, using `substr` to access the individual characters.

```perl
    # Work out the plain text cipher
    my $plain  = join '', ( 'A' .. 'Z' );
    my $cipher = substr( $plain, -$offset ) . substr( $plain, 0, 26 - $offset );

    # Create a mapping table
    my %mapping = ( ' ' => ' ' );
    for my $i ( 0 .. 25 ) {
        $mapping{ substr( $plain, $i, 1 ) } = substr( $cipher, $i, 1 );
    }

    # Translate
    my $ciphertext = join '', map { $mapping{$_} } split //, $string;
```

Of course constructing a pair of aligned lists wasn't the ony way to proceed. The assignments can also be calculated mathematically from the indices of a single array and directly loaded into a hash keys.

[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/cristian-heredia/perl/ch-1.pl)

The two parts of Christina's assignment can be viewed as analogous to the two parts of the array slice we saw above, loading first the upper part of the alphabet, then the lower remainder.

```perl
    foreach ($i = 0; $i < (26 - $N); $i++) {
        $hash{$plain[$counter]} = $plain[$i];
        $counter++;
    }

    foreach (my $j = 0; $j < $N; $j++) {
            $hash{$plain[$j]} = $plain[$i];
            $i++;
    }
```

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/wlmb/perl/ch-1.pl)

Finally Luis performes a bit of modulo math to create the whole shift in one expression:

```perl
    my @plain="A".."Z";
    my %translation_of = map { ($plain[$_] => $plain[($_-$displacement)%@plain]) 0..@plain-1;
```



## use ord() and some MATH
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/adam-russell/perl/ch-1.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/arne-sommer/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/cheok-yin-fung/perl/ch-1.pl),
[**Kai Burgdorf**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/kai-burgdorf/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/laurent-rosenfeld/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/lubos-kolouch/perl/ch-1.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/paulo-custodio/perl/ch-1.pl),
[**Robbie Hatley**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/LoneWolfiNTj/perl/ch-1.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/stuart-little/perl/ch-1.pl), and
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/ulrich-rieke/perl/ch-1.pl)

One recurring theme of constructing a character hash mapping is making parallel plaintext and ciphertext arrays to establish the alignment, then referring across them using a common index value. However, we can note that rather than assign a reference index to the letter, each letter *already* has a unique number attached to it, being the numerical representation stored in memory — the ASCII text value. By use of the two functions `ord()` and `chr()` we can effortlessly flip back and forth between the representations, and when we're in numerical form we can uses mathematics to perform our transformation directly, without the need for a lookup table.

Because we remove the steps to construct the intermediate hash mapping, these solutions had a tendency to be quite compact and to the point.


[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/adam-russell/perl/ch-1.pl)

In fact, Adam distills the essence into one crazy line:

```perl
    sub caesar_cypher{
        my($s, $n) = @_;
        my @cypher = map { unless(ord($_) == ord(' ')){
                               my $x = ((ord($_) - $n) < ord('A')?(ord($_) - $n + 26):(ord($_) - $n));
                               chr($x);
                           }
                           else{
                               $_
                           }
                     } split(//, $s);
        return join("", @cypher);
    }
```

This functional style may strike some as unnecessarily obtuse, but reading back to front the processing — from a string, `$s`, to characters, to ciphertext characters — flows naturally into the assignment.


[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/stuart-little/perl/ch-1.pl)

Stuart also manages to compress to a single line, making sure that only the uppercase letter set gets enciphered. Whereas Adam just adds 26 if we're out of bounds, Stuart takes a more robust route: subtract the offset to the letter A, does the subtraction modulo 26 and then adds the offset back to the uppercase letter range.

```perl
    sub rot($nr,$c) {
        return (ord $c >= 65 && ord $c <= 90) ? (chr(ord('A') + (ord($c) - ord('A') - ($nr % 26)) % 26)) : $c
    }
```


[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/paulo-custodio/perl/ch-1.pl)

For those of you uncomfortable with all this densely compressed action, Paulo breaks it down a bit into separate steps. First an array in the range 0 to 25 is created, then these values are adjusted to the character set, then later joined back into a string.


```perl
    sub caeser {
        my($n, @words) = @_;
        my @output;
        for my $word (@words) {
            $word =~ s/\W//g;
            my @codes  = map {(ord($_)-ord('A')+26-$n)%26} split //, uc($word);
            my @cipher = map {chr($_+ord('A'))} @codes;
            push @output, join "", @cipher;
        }
        return @output;
    }
```

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/laurent-rosenfeld/perl/ch-1.pl)

I found Laurent's functional mapping quite clearly stated, myself.

```perl
    sub rotate {
        my ($in, $shift) = @_;
        return join "",
            map { my $let = ord($_) - $shift;
                  $let +=  26 if $let < MIN;
                  $_ eq " " ? " " : chr $let
                } split "", $in;
    }
```

[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/arne-sommer/perl/ch-1.pl)

And perhaps even clearer is Arne's succinct condensation:

```perl
    say join("", map { caesar($_, $N) } split(//, $S));

    sub caesar ($char, $shift)
    {
      return $char if $char eq " ";

      my $code = ord($char);

      $code -= $shift;

      $code += 26 if $code < 65;  # 'A'
      $code -= 26 if $code > 90;  # 'Z'

      return chr($code);
    }
```

[**Robbie Hatley**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/LoneWolfiNTj/perl/ch-1.pl)

Before we move on, I'd like to give special attention to Robbie's submission, on two accounts. First, he has provided what is probably the finest example of a usage / error message I have seen since I started these reviews. I've mentioned before that after reading 50 to 60 scripts a week, I all too often find myself searching around trying just to figure out what input the script wants in what format. I've even given up a few times in extreme cases, with obscure stringified binary trees or whatnot. So for someone to go to this length for clarity, well it just pops right out for me. Thank you Robbie. Your efforts have not gone unnoticed.

```perl
    sub error
    {
       print ((<<'   END_OF_ERROR') =~ s/^   //gmr);
       Input Error: \"caesar-cipher.pl\" requires exactly 1 command-line
       argument, which must be a positive integer in the closed interval
       [-26,26]. This will be used as a "rotate" value for performing a
       "Caesar Cipher" on the input. Positive values will perform a left
       rotate and Negative values will perform a right rotate.

       The input should be a string (or a series of strings) containing
       English letters (and perhaps some other characters). The letters
       will be alphabetically "rotated" to different letters and the other
       characters will be passed through unchanged.

       The input must be fed to this program through stdin,
       either from a file redirect:

          $ caesar-cipher.pl 17 < myfile.txt

       or via a pipe:

          $ echo 'Sullenly, sadly, silently he walked home.' | caesar-cipher.pl 8

       or via the keyboard:

          $ caesar-cipher.pl 17
          Seventeen times she smote her foe with her axe,[Enter]
          but each time he withstood her savage blows.[Enter][Ctrl-D]

          Bnenwcnnw crvnb bqn bvxcn qna oxn frcq qna jgn,
          kdc njlq crvn qn frcqbcxxm qna bjejpn kuxfb.

       END_OF_ERROR
       return 1;
    } # end sub error
```

But to speak to Robbie's code, he's gone through the trouble to handle both upper and lower case in a robust manner. From a cryptographic point of view this is a bit absurd, as codes and ciphers as enacted are generally designed to remove any externally identifiable information and homogenize the ciphertext. As an illogical extension of our already toy cipher here, though, it's a nice and welcome addition to observe the implementation.

```perl
    my @upper   = split //,'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    my @lower   = split //,'abcdefghijklmnopqrstuvwxyz';
    my @strings = <>;
    say '';
    foreach my $S (@strings)
    {
       foreach my $index (0..((length $S)-1))
       {
          my $ord = ord(substr($S,$index,1));
          if ($ord >= 65 && $ord <= 90)
             {substr($S,$index,1) = $upper[($ord-65-$N)%26];}
          if ($ord >= 97 && $ord <= 122)
             {substr($S,$index,1) = $lower[($ord-97-$N)%26];}
       }
       print $S;
    }
```


## use the TRANSLATION operator
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/athanasius/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/polettix/perl/ch-1.pl),
[**Gustavo Chaves**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/gustavo-chaves/perl/ch-1.pl),
[**Jan Hoogenraad**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/jan-perl/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/jo-37/perl/ch-1.pl), and
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/pete-houston/perl/ch-1.pl)

Although it may at first seem made-to-order, the translation operator `tr///` comes with one important caveat: it needs to construct its translation table at compile time, before the script is run. Producing a chicken-and-egg problem, we can't use the script to calculate the configuration of the translation string before we declare the operation. Practically, this means the operator works very fast, but only on string literals.

What to do? Well we can in fact use the operator with an interpolated string, it's just that we need to first use `eval` to construct the code to be executed. This form of the `eval` statement is known as "string eval".

[**Jan Hoogenraad**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/jan-perl/perl/ch-1.pl)

Jan shows us how it's done. We need to construct two aligned strings: a string to tranlate from, and a string to translate to. Once we have these ready, we can insert them into a *string* that when interpolated produces a line of code. This code is then executed with an `eval` statement. I don't know about you, but I have always loved writing code that writes code.

```perl
    sub inittrs($) {
        ...

        for my $t (0..25) {
             $p1 .= chr(ord('A')+$t);
             $p2 .= chr(ord('A')+($t-$shift)%26);
        }
        return ($p1,$p2);
    }

    ($plain,$cipher)= inittrs($N);

    eval ("\$S=~ tr/$plain/$cipher/");
```

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/e-choroba/perl/ch-1.pl)

Choroba uses a pair of nested `substr` statements to first remove the section of the string *n* elements from the end, replacing it with a null string, and then reinserting the returned value of that `substr` at the beginning of the remaining portion. This has the effect of reversing the order of the two halves in one swift motion.

I like this method myself. People sometimes forget that `substr` not only returns, but can also replace the selected section. It can even be an lvalue: `substr( $key, 0, 0 ) = substr( $key, -$n, $n, "" );` would also also work here. But I think I like it this way better.

```perl
    my $ALPHABET = join "", 'A' .. 'Z';
    sub caesar_cipher {
        my ($s, $n) = @_;
        $n %= 26;
        my $key = $ALPHABET;
        substr $key, 0, 0, substr $key, -$n, $n, "";
        eval "\$s =~ tr/$ALPHABET/$key/";
        return $s
    }
```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/polettix/perl/ch-1.pl)

Flavio also uses a pair of `substr` functions to reverse his alphabet string, selecting out the two halves and concatenating them. Yes, it's neat, clean and effective, yea, yea, and clearer and more practical, but I still think the nested substrings are more fun. And I believe Flavio might agree with me on the value of fun.

```perl
    sub caesar_cipher ($S, $N) {
       $N %= 26;
       my $to   = join '', 'A' .. 'Z';
       my $from = substr($to, $N) . substr($to, 0, $N);
       return eval "\$S =~ tr/$from/$to/r";
    }
```

[**Gustavo Chaves**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/gustavo-chaves/perl/ch-1.pl)
also takes this sensical, straightforward  approach, as does
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/duncan-c-white/perl/ch-1.pl)



[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/athanasius/perl/ch-1.pl)

The monk, using an array intermediary, uses `pop` and `unshift` to mechanically rotate the replacement side of the translation. We saw this trick before, in constructing aligned arrays to create a hash lookup table for the cipher.

```perl
    my @replace = ($N > 0) ? @ALPHABET : reverse @ALPHABET;

    unshift @replace, pop @replace for 1 .. $N;

    my $replacement = join '', ($N > 0) ? @replace : reverse @replace;

    $cipher = eval qq["$S" =~ tr/$ALPHABET/$replacement/r;];
```

In fact, any of the techniques first brought up for that similar task could be applied here, such as this mathematical shift by

[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/pete-houston/perl/ch-1.pl)

```perl
    my $src  = join '', 'A' .. 'Z';
    my $dest = join '', map { chr ($_ % 26 + 65) } -$key .. (25 - $key);

    eval "\$text =~ tr/$src/$dest/;";
```




## use a REGULAR EXPRESSION
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/abigail/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/colin-crain/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/james-smith/perl/ch-1.pl), and
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/perlboy1967/perl/ch-1.pl)

The regular expression parser provides a powerful way to scan across a string of text, identifying specific characters, capturing the matches and performing transformations. This certainly *sounds* up to the task, and several members took up this angle.

[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/perlboy1967/perl/ch-1.pl)

Niels creates a lookup hash from two array slices, the uses a global substitution capturing any character as a key to the lookup. Each character is either replaced by a cipher value or an undefined, empty string.

```perl
    my @cc = ('A' .. 'Z');
    my %cc = map {shift(@cc) => $_} (@cc[26-$N .. 25], @cc[0 .. 26-$N-1]);
    # Map space to space
    $cc{' '} = ' ';

    $s =~ s/(.)/$cc{$1}/g;
```

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/colin-crain/perl/ch-1.pl)

I opted to make a separate routine to hold my mathematical transformation. I match on a character class of both upper and lowercase letters, converting everything to upper before the ciphering.

```perl
    $str =~ s/([a-zA-Z])/encode($1,$n)/ge;
    say $str;

    sub encode {
        my $out = chr(((ord(uc $_[0])-65-$_[1])%26)+65);
    }
```

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/james-smith/perl/ch-1.pl)

James choses to inline the same expression rearranged:

```perl
    return $_[0] =~ s{([A-Z])}{chr 65+(-65-$_[1]+ord$1)%26}regex;
```

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/abigail/perl/ch-1.pl)


As does Abigail, acting on the default $_ topic variable and simplifying the equation to add 26 should the value fall out of range.

```perl
    s {([A-Z])}
      {   my $ch = ord ($1) - $shift;
          $ch += $NR_OF_LETTERS if $ch < $ORD_A;
          chr $ch
      }eg;
```



## UNIQUE approaches, ODDITIES and other DIVERSIONS

[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/alexander-pankoff/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/jo-37/perl/ch-1.pl) and
[**Nuno Vieira**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/nunovieira220/perl/ch-1.pl)

[**Nuno Vieira**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/nunovieira220/perl/ch-1.pl)

Nuno's method was just so different I couldn't figure out where else to categorize it. In it he uses the familiar pair of aligned arrays we're see previously, only in this case when iterating across the plaintext characters, he uses `List::Util::first_index()` to look up the index of each one in the first array before reporting the character in the aligned cipher. `first_index` works on arrays much like `index` does on strings, providing the index to the first found occurence.

```perl
    my @plain = ("A"..."Z");
    my @cipher = ("A"..."Z");
    push @cipher, splice @cipher, 0, (26 - $N);

    foreach my $c (split //, $S) {
      if($c eq " ") {
        print $c;
      } else {
        my $i = first_index { $_ eq $c } @plain;
        print $cipher[$i];
      }
    }
```


[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/alexander-pankoff/perl/ch-1.pl)

Pankoff brings us a very unusual and interesting cipher object to do his work, holding two public methods to encrypt and decrypt strings. Both methods internally use the same `_char_map()` method, which takes a function and a string, with the difference being that each method defines its own anonymous routine to pass as a coderef to the method that performs the actual mapping.

One interesting quality to this object is that once passed in on creation, the $rotate_count variable is not kept as an attribute, but is immediately used to compute a transformation hash as we have seen before. This hash is them blessed and becomes the core of the object, rather than another piece of data.

This process of handing around first-class functions, to be in turn processed and handed to other functions (the `map` is the end the line here) is a product of the functional programming paradigm, where complex tasks are broken down into discreet components, with a  factoring out of common actions. In this case, the action of the string mapping is the same, defined not by the mapping per se but rather the function applied during the mapping.

```perl
    {
        my $cc = Caesar::Cipher->new( 3 );
        say $cc->encrypt( 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG' );
        say $cc->decrypt( $cc->encrypt( 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG' ) );
    }

    package Caesar::Cipher {
        sub new ( $class, $rotate_count ) {
            my @alphabet = reverse( 'A' .. 'Z' );
            my @rotated = ( @alphabet[ $rotate_count .. $#alphabet ], @alphabet[ 0 .. $rotate_count ] );
            my %mapping =
              map { $alphabet[$_] => $rotated[$_] } 0 .. $#alphabet;

            return bless \%mapping, $class;
        }

        sub encrypt ( $self, $plaintext ) {
            _char_map( sub($c) { $self->{$c} // $c }, $plaintext );
        }

        sub decrypt ( $self, $ciphertext ) {
            my %reversed = reverse %$self;
            _char_map( sub($c) { $reversed{$c} // $c }, $ciphertext );
        }

        sub _char_map ( $f, $str ) {
            join( '', map { $f->( $_ ) } split( '', $str ) );
        }
    }
```


[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/jo-37/perl/ch-1.pl)

Jorg takes this rather simple task to a new level with a generic cipher routine that, when called with an offset, returns a *coderef* for a translator with that offset. By calling this with value *n*, it returns an anonymous routine that encodes with a shift of *n*. When called with *-n*, it returns a matching decoder ring. These can be saved into a scalar container and called through reference with a stings, with a translated string returned.

```perl
    sub caesar ($n) {
        state $plain = join '', 'A' .. 'Z';

        $n %= length $plain;
        my $cipher = $n ?
                # last $n chars + first chars except last $n chars.
                substr($plain, -$n, $n) . substr($plain, 0, -$n) :
                $plain;

        say "Offset: $n\nPlain:  $plain\nCipher: $cipher" if $verbose;

        # Encode string(s) using Caesar Cipher. All characters outside plain
        # capital latin letters and SPACE are silently discarded.  The SPACE
        # character will be passed unencoded.  Does not rely on a contiguous
        # character encoding of letters. (EBCDIC!)
        sub (@s) {
            local $_ = "@s";

            # tr/// does not interpolate.
            eval "tr/ $plain//cd";
            eval "tr/ $plain/ $cipher/r";
        }
    }
```

---

---

# TASK 2 {#PWC097TASK2}

# Binary Substrings
*Submitted by: Mohammad S Anwar*

You are given a binary string $B and an integer $S.

Write a script to split the binary string $B of size $S and then find the minimum number of flips required to make it all the same.

**Example 1:**

    Input: $B = “101100101”, $S = 3
    Output: 1

    Binary Substrings:
        "101": 0 flip
        "100": 1 flip to make it "101"
        "101": 0 flip


**Example 2:**


    Input $B = “10110111”, $S = 4
    Output: 2

    Binary Substrings:
        "1011": 0 flip
        "0111": 2 flips to make it "1011"



## about the solutions

There were 30 submissions for the second task this past week.

Sometimes there is a well-established consensus among the team as to what, exactly, is being requested of them. There may be disagreement over the meaning of a word, sometimes leading to slightly different goals, but usually those goals are aligned. This week, however, the normal way went haywire.

As I began to process the submissions, the first thing I noticed was the wide variation in methodology. On closer look, reading through the blogs, and those scripts kind enough to provide commentary, it became apparent that people were looking for different things. Several people simply followed the examples and matched to the first segment. Most of the others looked at each segment formed and computed the sum of how many flips the others would take to match it, and found the minimum of that. However some members noticed that at no place does it say that the optimal positions flipped to need actually be one of segments — there may be some other new binary combination that every section can be formed into to equalize them with fewer total moves. In one case a maximum got involved, I'm not sure how. James went golfing and is now seemingly lost in the rough somewhere in the back 9. If you see him, he probably needs sandwiches by now.

The problem has grown legs and is currently running around like cake-fueled children at a birthday party. The problem for *me* is that with so many variations to the basic idea the solutions become rather difficult to categorize. With so many differing goals, I have little choice but to assume each does whatever their author thought they were supposed to.

It seems every time I get a good format figured out — to get a good through-narrative going, connect the dots, fill in some backstory, make it interesting, something like this happens and I have to toss it all to the wind. Ah well, maybe next time. This time it looks like I'm just going to have to wing it.

One loosely common format for the solutions was to tie together several smaller tasks into a cohesive whole. Each task in itself wasn't particularly complicated, but the different ways of doing each one, taken together through the process, created quite a lot of variety in the composite methods. Obviously not every goal required every task — Abigail, for instance, didn't even need to divide his string to make his computation, but did it anyway, with a regex, to be a good sport.

There were, sort of, four smaller sub-tasks:

1. divide the string into segements of length $B
    * make sure the division comes out even, or somehow pad the results, or, I don't know,  do something else.
    * (There were a lot of differing views here)
2. then for each segment, determine the bit difference to flip each other segment to match it
    * (or perhaps some other, ideal sequence)
3. create sums for the results using each segment as the model to be emulated
    * (or the first element, or, you know again, whatever)
4. determine the minimum from the summations among all the segment totals

As (3) and (4) here are similar jobs with different scaling, they can be perhaps considered one task: sorting through the data. So to paraphrase in even looser terms: create the segments, flip the bits, and keep track of the minimums.

To me it seemed obvious that the string needed to be evenly divided into segments of the same size for the rest of the task to make any sense. I mean, the task isn't exactly clear as to its purpose to begin with, so messing with the bit strings seemed to corrupt what little unknown knowledge we would be gleaning. Apparently, though, the group was of multiple minds on the subject, and several schemes arose to pad out or cull uneven data to make the comparisons align. I can't in good faith say any of these approaches is wrong because I have no idea what's right, which makes the whole thing interesting to me in itself. Puzzles within puzzles. Trimming I can see, but I still can't wrap my head around left-filling with zeros. I mean, it makes more sense than right-padding, but whatever.

To do the initial dividing, `substr` was the popular choice, although regular expressions also reared their collective head, as did `split`. And `unpack`. We'll make sure to provde an overview as best we can.

As for the bit flipping, an XOR product will reveal all differing bits, and summing these will produce a total. However this requires a certain amount of overhead, as we don't start with *real* bit strings, only literal strings of 1 and 0 characters that we might wish to look at this way. In any case some version this showed up fairly often, as coercion into the correct format proved not too complicated in the end. Alternately, doing a direct comparison between positions, iterating over the strings with `substr` was a quite direct way of determining equivalency, and won the day for ease of use.

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/abigail/perl/ch-2.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/adam-russell/perl/ch-2.pl),
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/alexander-pankoff/perl/ch-2.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/arne-sommer/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/athanasius/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/cheok-yin-fung/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/colin-crain/perl/ch-2.pl),
[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/cristian-heredia/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/dave-jacoby/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/polettix/perl/ch-2.pl),
[**Gustavo Chaves**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/gustavo-chaves/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/james-smith/perl/ch-2.pl),
[**Jan Hoogenraad**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/jan-perl/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/jo-37/perl/ch-2.pl),
[**Kai Burgdorf**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/kai-burgdorf/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/laurent-rosenfeld/perl/ch-2.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/lubos-kolouch/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/perlboy1967/perl/ch-2.pl),
[**Nuno Vieira**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/nunovieira220/perl/ch-2.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/paulo-custodio/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/pete-houston/perl/ch-2.pl),
[**Robbie Hatley**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/LoneWolfiNTj/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/roger-bell-west/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/sgreen/perl/ch-2.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/stuart-little/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/ulrich-rieke/perl/ch-2.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/wlmb/perl/ch-2.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/wanderdoc/perl/ch-2.pl)


## DIVISION choices

### using unpack()
[**Jan Hoogenraad**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/jan-perl/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/jo-37/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/perlboy1967/perl/ch-2.pl),
[**Nuno Vieira**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/nunovieira220/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/sgreen/perl/ch-2.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/stuart-little/perl/ch-2.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/wanderdoc/perl/ch-2.pl)

[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/perlboy1967/perl/ch-2.pl)

Niels gracefully treats our input string as raw data to be processed, and shows us how to use `unpack` to dice it up into segments of the required length:

```perl
    my @bitStringChunks = unpack("(A$s)*", $b);
```

The format expression used asks `unpack` to return a list of `$s`-length text strings from `$b`, proceeding until we run out of input. Using `unpack` on raw data with a specified format is very powerful, but also a bit profoundly weird and alienating. There is, fortunately, an [entire tutorial devoted to its oddities](https://perldoc.perl.org/perlpacktut). Wherever there are bits and data streams, these can be directly decoded (or encoded, with `pack`), should one be so inclined. A real-world example of the this might be examining metadata in an image file header, something I recall having done before. It's quite fun to be able to just go in there an look for yourself.

In any case this format, `"(A$s)*"` determines the output segments here. A small variation is provided by

[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/wanderdoc/perl/ch-2.pl)

where the individual chunks are specified, as many as are needed.

```perl
     my $format = "a${int}" x ($length/$int);
     my @arr = unpack $format, $str;
```

[**Jan Hoogenraad**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/jan-perl/perl/ch-2.pl)

Jan unpacks his input string quickly, using the same technique:

```perl
    my @sa = unpack( "(a$S)*", $B );
```

But that's just the tip of the iceberg. He takes the time to provide a very nice verbose report for his processing:

    111011011011,4
    Output: 4
    Reference: 0: 1110
    Binary Substrings:
    "1110": 0 flips
    "1101": 2 flips tot make it "1110"
    "1011": 2 flips tot make it "1110"

Which of course requires accumulating myriad additional pieces of information along the way.

There's quite a bit of unusual activity around these parts. Of particular note are his use of subroutine prototypes to automatically reference two arrays for the `nflip2()` routine. Or, for that matter, the use of prototypes throughout, which we don't often see. The `nflip2()` routine itself is a repeat performance solely for the verbose output; there is also an `nflip()` routine that does the heavy lifting inside.

```perl
    sub nflip2( \@\@ ) {
        local ( *p0arr, *saarr ) = @_;
             my $nftot = 0;
             for my $l ( 0.. $#p0arr ) {
                     $nftot += ( $p0arr[$l] != $saarr[$l] );
             }
        return $nftot;
    }
```

All in all it's entirely worth a more in-depth look.



### using substr()
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/adam-russell/perl/ch-2.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/arne-sommer/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/cheok-yin-fung/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/colin-crain/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/polettix/perl/ch-2.pl),
[**Robbie Hatley**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/LoneWolfiNTj/perl/ch-2.pl), and
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/ulrich-rieke/perl/ch-2.pl)

[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/ulrich-rieke/perl/ch-2.pl)

Ulrich lays out a very clear mathematical approach to extracting subsequences from the input string.

```perl
    my $chunknumber = $len / $S ;
    my $chunklength = $len / $chunknumber ;
    for  my $i ( 0 .. $chunknumber - 1 ) {
      push (@chunks , substr( $B, $i * $chunklength , $chunklength ) ) ;
    }
```

Another version, provided by

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/cheok-yin-fung/perl/ch-2.pl)

is a little tighter, albeit less verbose.

```perl
    for my $k (0..$num_of_substrings-1) {
        push @substring, substr( $B , $k*$S , $S );
    }
```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/polettix/perl/ch-2.pl)

Flavio takes this to its logical conclusion:

```perl
   my @parts = map { substr $B, $_ * $S, $S } 0 .. ($len / $S) - 1;
```


[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/colin-crain/perl/ch-2.pl)

For my variation, I just systematically consume the string *(nom nom nom)*. As I'll be comparing them using an XOR operator, I'll convert them to numeric values at this point as well.

```perl
    push @sections, oct('0b'.substr($bin, 0, $size, '')) while length $bin > 0;
```

[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/arne-sommer/perl/ch-2.pl)

Arne constructs his own version of Raku's `comb` routine, which divides a string into a list of *n* sized segments, just as requested here.

```perl
    sub comb ($string, $length = 1)
    {
      my @result;

      while ($string)
      {
        push(@result, substr($string, 0, $length));
        $string = substr($string, $length);
      }
      return @result;
    }
```





### use a REGEX
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/abigail/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/athanasius/perl/ch-2.pl),
[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/cristian-heredia/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/e-choroba/perl/ch-2.pl),
[**Gustavo Chaves**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/gustavo-chaves/perl/ch-2.pl), and
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/pete-houston/perl/ch-2.pl)

A regular expression is a natural choice to divide a string into parts.

[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/pete-houston/perl/ch-2.pl)

Pete demonstrates the core using method:

```perl
    my @strings = $bstring =~ /(.{$len})/g;
```

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/athanasius/perl/ch-2.pl)

As they plan on using an exclusive-or bitwise operation later, the monk converts their substrings into numbers by affixing a `0b` prefix. In memory, of course, these numbers will be binary bit sequences mirroring the string representations.

```perl
    my @substrings = map { oct '0b' . $_ } $B =~ / .{$S} /gx;
```

[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/cristian-heredia/perl/ch-2.pl)

Christina switches it up a bit and modifies her expression to allow for a match of irregular length at the end of the input string. The match is greedy, so will always grab as the maximum number of characters allowed when it can, but will also also match any smaller quantity if that is all that is provided.

```perl
    sub splitBinary {
        @cutBinary = $B =~ /\d{1,$S}/g;
    }
```

[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/duncan-c-white/perl/ch-2.pl)

Duncan seems to have taken a rather different interpretation of the given criteria, and come up with a unique perspective: of all the various pairs with a particular subset as the model, find the **maximum** bit flips amongst its peers to construct it and assign it that value, then find the minimum of those calculated maximums as the answer. As I said before, I'm just going to toss my hand up and say: "Why not?". Obviously the core logic for this plan is going to be a little different than the others. But variety is the spice of life, after all.

```perl
    foreach my $goal (@distinct)
    {
    	# find @flips: nflips(goal,chunk) forall chunks
    	my @flips = map { nflips( $goal, $_ ) } @chunk;
    	print "#flips of all chunks to goal $goal are: ",
    		join(',',@flips) if $debug;
    	# add max( flips ) to @maxflips
    	my $maxflips = max @flips;
    	say ", max $maxflips" if $debug;
    	push @maxflips, $maxflips;
    }

    say "maximum #flips for all goal chunks are: ",
    	join(',',@maxflips) if $debug;

    # now calculate min( @maxflips)
    my $min = min(@maxflips);
    say "minimum maximum #flips = $min" if $debug;
```


### using split()
[**Kai Burgdorf**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/kai-burgdorf/perl/ch-2.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/paulo-custodio/perl/ch-2.pl) ,
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/roger-bell-west/perl/ch-2.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/wlmb/perl/ch-2.pl)

There we a couple of ways to preform the division using `split`.

[**Kai Burgdorf**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/kai-burgdorf/perl/ch-2.pl)

In one form of using `split` to divide the initial binary string, the digits are separated into an array, which is pieced back together in correctly sized chunks:

```perl
    my @digits = split //, $b;

    my @substrings;
    while (@digits) {
        my $sequence;
        for ( my $i = 0 ; $i < $S ; $i++ ) {
            $sequence .= shift @digits;
        }
        push @substrings, $sequence;
    }
```

After that things get odd, when they bring in `Algorithm::Permute` to provide permutations to find an optimal string to equalize to, whether or not it's one of the segments. Go have a look for yourself, it's wild. We'll have a more in depth look at optimum string targets later.

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/wlmb/perl/ch-2.pl)

Luis gives us and example of the other use of `split` to divide his initial string. By providing a capture group in the match expression, the delimiters are also returned, which themselves are groups of digits of the correct length. In this scheme the segment length does not need to evenly divide the string length, but incomplete segments from the end will be silently discarded. It's a novel approach.

```perl
    my @substrings=grep {length $_ == $length} split /(\d{$length})/, $string;

```

The segments are then split into arrays for comparison. His `cost` routine, which determined the count of flipped bits, iterates across  the arrays comparing positions individually.

```perl
    sub cost {
        my @first=split '',shift;
        my @second=split '',shift;
        my $cost=0;
        $cost += $first[$_]!=$second[$_]?1:0 foreach 0..@first-1;
        return $cost;
    }
```

Of note he memoizes `cost`, because, you know, why not? Given the limited range of available binary sub-sequences, some repetition of parameters seems reasonably likely.



##  FLIP counting

### ITERATE and COMPARE
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/arne-sommer/perl/ch-2.pl),
[**Kai Burgdorf**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/kai-burgdorf/perl/ch-2.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/paulo-custodio/perl/ch-2.pl) ,
[**Robbie Hatley**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/LoneWolfiNTj/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/roger-bell-west/perl/ch-2.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/wlmb/perl/ch-2.pl)

As the binary input provided is in string form, that is to say simply sequences of 1 and 0 characters written out, rather that real numbers, a simple approach to comparing individual digits would be to iterate across the positions and directly determine whether they were the same or different. Differing values require a flip to equalize them.

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/sgreen/perl/ch-2.pl)

Simon demonstrates the idea using an index iterator and pulling out individual characters using `substr`. The result is clean and straightforward code:

```perl
    foreach my $chunk (@chunks) {
        foreach my $i ( 0 .. $S - 1 ) {
            ++$flips if substr( $chunk, $i, 1 ) ne substr( $most_used, $i, 1 );
        }
    }
```

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/roger-bell-west/perl/ch-2.pl)

In the alternate form, given two strings, Roger's `diff` function first converts them into arrays then iterates across the elements to make the individual comparisons.

```perl
    sub diff {
      my ($a,$b)=@_;
      my @ac=split '',$a;
      my @bc=split '',$b;
      my $d=0;
      foreach my $i (0..$#ac) {
        if ($ac[$i] ne $bc[$i]) {
          $d++;
        }
      }
      return $d;
    }
```

[**Robbie Hatley**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/LoneWolfiNTj/perl/ch-2.pl)

Robbie gives us another example, similar to Simon's, of using nested iteration to find the minimum number of flips matching any one existing subsequence. Starting with a list of subsequences, each is taken in turn as the candidate, and all the others are iterated through to compare against it. In each comparison, an iterator is set up along the length of the strings, and `substr` is used to compare the digits at each position and counting the differences. In a homemade minimum function we work downward from some Very Large® number (I might suggest trying "+Inf" here; people seem to forget it exists), updating the assignment whenever a smaller value is found.

In other notes, lovely verbose output is provided once more, and there's also a very interesting trick involving the use of a substitution operator to trim leading whitespace in each line of his usage heredoc. This allows proper indentation in the script that is not carried through to the output, which is a nice touch you don't often see. Go have a look, there's more then a few gems in there.

```perl
    foreach my $index ( 0 .. $L/$S - 1 )
    {
       foreach my $group ( 0 .. $L/$S - 1 )
       {
          next if $group == $index;
          foreach my $digit ( 0 .. $S - 1 )
          {
             ++$flips[$index] if substr($substrs[$group], $digit, 1)
                              != substr($substrs[$index], $digit, 1);
          }
       }
    }
    my $best_idx = 0;
    my $best_fls = 1987654321;
    foreach my $index ( 0 .. $L/$S - 1 )
    {
       if ($flips[$index] < $best_fls)
          {$best_fls = $flips[$index]; $best_idx = $index;}
    }
```


### XOR - a very *exclusive* or
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/adam-russell/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/colin-crain/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/perlboy1967/perl/ch-2.pl),
[**Nuno Vieira**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/nunovieira220/perl/ch-2.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/stuart-little/perl/ch-2.pl)
and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/wanderdoc/perl/ch-2.pl)



The strings provided, being just 1s and 0s, rather than bits, can be easily converted into numbers, where their representations will match these bits in memory. Once that is done, an exclusive-or operation will reveal which bits differ between two compared sequences. This result is itself a sequence of bits, and various schemes are available to count the 1s to find out how many places differ.

[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/perlboy1967/perl/ch-2.pl)

Here Niels uses `sprinf` to convert his values back into strings after doing the XOR bitwise operation on the numbers. The binary representation string is then split and the values summed.

```perl
    for (my $i = 0; $i < scalar(@bitStringChunks); $i++) {
        my $bitFlips = sum(split(//, sprintf('%b', $intValues[$i] ^ $bestValue)));
        push(@f, sprintf(qq("%s": %d flip(s)), $bitStringChunks[$i], $bitFlips));
        $f += $bitFlips;
    }
```

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/colin-crain/perl/ch-2.pl)

I took the same approach, breaking apart the process in a slightly different manner.

```perl
    for my $sect (@sections) {
        my $xored = sprintf "%b", $sections[$idx] ^ $sect;  ## sections are numbers here
        $flips += $_ for split //, $xored;
    }
```


[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/wanderdoc/perl/ch-2.pl)

The expression `unpack '%32b*', $bin` can be used to efficiently count the number of set bits in a bit string, not unlike the venerable `popcount` function.

The doctor combines the xor bitwise operator with this construction to immediately count the set bits in the result of his calculations and sum them, making for a very compact function.

```perl
    my $min = $length;
    for my $idx ( 0 .. $#arr )
    {
         my $comparing = $arr[$idx];
         my $sum = sum( map { unpack '%32b*', $comparing ^ $_ }
                        @arr[grep $_ != $idx, 0 .. $#arr] );
         $min = $sum if $sum < $min;
    }
```

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/adam-russell/perl/ch-2.pl)

Adam gives us another version using `unpack` to examine, this one drawing on an old sort trick to find the minimum:

```perl
    for my $digits (@substrings){
        my $flip_count = 0;
        map { $flip_count += unpack("%32b*", $digits ^. $_) } @substrings;
        push @flips, $flip_count;
    }
    return [sort {$a <=> $b} @flips]->[0];
```



## OPTIMIZING EACH BIT POSITION to a common setting
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/abigail/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/e-choroba/perl/ch-2.pl),
[**Kai Burgdorf**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/kai-burgdorf/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/laurent-rosenfeld/perl/ch-2.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/lubos-kolouch/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/perlboy1967/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/pete-houston/perl/ch-2.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/stuart-little/perl/ch-2.pl), and
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/ulrich-rieke/perl/ch-2.pl)

These solutions involve flipping to some equal state, whether or not that string is an existing segment. I'll explain using Abigail's example:

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/abigail/perl/ch-2.pl)

Abigail does not need to *explicitly* divide his string at all, as he mathematically looks at the indices for each successive digit in every sequence as though he has already done this. Taking each position in the size in turn, he calculates the minimum number of flips required to equalize each digit to either a 1 or a 0. Summing these values in turn produces our minimum value.

When first reading this I thought that there's no assurance that the final, minimally equalized segment flipped to will match one of our divided segments. Following up in his blog posting, it he acknowledges and addresses this, even providing an example.

Which made me look back and notice that nowhere in the challenge description is this in fact specified.

>Write a script to split the binary string $B of size $S and then find the minimum number of flips required to make it all the same.

Well ok then.

```perl
    for my $i (0 .. $size - 1) {
        my $zeros = 0;
        for my $j (0 .. $sections - 1) {
            my $index = $j * $size + $i;
            $zeros ++ if substr ($_, $index, 1) eq "0";
        }
        my $ones = $sections - $zeros;
        $sum += min ($zeros, $ones);
```

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/e-choroba/perl/ch-2.pl)

Choroba pulls off the same trick, twice. As Abigail's example covers examining each digit positionally, here's Choroba's brute force version for your perusal. It's about 1/3 as fast as his positional version, by his own benchmarks.

```perl
    sub brute_force {
        my ($binary, $size) = @_;
        my @strings = $binary =~ /(.{$size})/g;
        die "Can't split evenly" unless @strings * $size == length $binary;

        my $same = 0 x $size;
        my $best = $size * @strings;
        until ($size < length $same) {
            my $flips = sum(map { ($_ ^ $same) =~ tr/\x01// } @strings);
            $best = $flips if $flips < $best;
            $same = sprintf "%0${size}b", 1 + oct "b$same";
        }
        return $best
    }
```

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/laurent-rosenfeld/perl/ch-2.pl)

Laurent gives another positional version. Notice that this approach can deliver quite compact results.

```perl
    my ($in_string, $size) = @ARGV;
    my $sub_str_len = length($in_string) / $size;
    my $flips = 0;
    for my $i (0 .. $sub_str_len - 1) {
        my $ones = 0;
        for my $j (0 .. $size - 1) {
            my $idx = $j * $sub_str_len + $i;
            $ones++ if substr ($in_string, $idx, 1) == 1;
        }
        my $zeroes = $size - $ones;
        $flips += $zeroes > $ones ? $ones : $zeroes;
    }
    say $flips;
```

[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/stuart-little/perl/ch-2.pl)

Right off the bat, Stuart gives us a new way to divide the initial string I had not noticed before, using `List::MoreUtils::part` to partition the split characters into groups of the first character of every segment, then the second, the third, etc.

```perl
    my @crossbins = map {join '', @{$_}} (part { $i++ % $nr } (split //, $bin));
```

Of course this does not segment the string in the same manner the other methods do, but rather it creates collections of digits to be equalized. If all the digits in each group are made the same, then recombining the new normalized group values produces an optimized string target.

```perl
    sub mostfreqchar($str) {
        my %freqs;
        my $chr;
        for (split //, $str) {
        $freqs{$_}++;
        ((! $chr) || ($freqs{$chr} < $freqs{$_})) && do {$chr=$_};
        }
        return $chr;
    }

    my $tgt = join "", (map {mostfreqchar $_} @crossbins);
```

Once the optimal target is determined, which you will notice is still in string form, the following little bit of madness is executed:

```perl
    sub toflip($tgt,$strs) {
        my $sum=0;
        for (@{$strs}) {
        $sum += length (($tgt ^ $_) =~ s/\0//gr);
        }
        return $sum;
    }
```

In it the *strings* are compared using the bitwise operator, returning a *string* composed of the two ASCII characters \0 and \1. The nulls are matched and removed, returning a string of \1 characters, representing digit mismatches. The length of this string is the number of mismatches.

And that little bit of wizardry is very cool indeed.




## UNIQUE approaches and other THINGS THAT CAUGHT MY EYE
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/alexander-pankoff/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/dave-jacoby/perl/ch-2.pl),
[**Gustavo Chaves**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/gustavo-chaves/perl/ch-2.pl), and
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/james-smith/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/jo-37/perl/ch-2.pl)




[**Gustavo Chaves**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/gustavo-chaves/perl/ch-2.pl)

Gustavo uses a variety of imported list functions we haven't seen elsewhere.

After first using a regular expression to divide his input, he brings in a trio of  functions from `List::AllUtils` to help him with further processing. Further splitting his substrings into arrays, he uses `pairwise` to make the element comparisons, then employing `sum0` to add the results up. Later, `reduce` is used to create his own minimum function.

```perl
    my @substrings = $B =~ /(.{$S})/g;

    my (@distance, @flips);

    # Calculate the distances between each pair of substrings and the total number
    # of flips to change all of them to be equal to each one.
    for my $i (0 .. $#substrings) {
        my @from = split //, $substrings[$i];
        for my $j (0 .. $#substrings) {
            my @to = split //, $substrings[$j];
            $distance[$i][$j] = sum0 pairwise {$a != $b} @from, @to;
        }
        $flips[$i] = sum0 @{$distance[$i]};
    }

    # Find the index of the substring which requires the minimum number of flips.
    my $i = reduce {$flips[$a] < $flips[$b] ? $a : $b} 0 .. $#flips;
```


[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/james-smith/perl/ch-2.pl)

James', er, *unique* submission is presented here in full so that it may be studied by future generations. Readers are encouraged to try and figure out whatever is going on here on their own, however be aware there is a legend available both within the source file and externally on [his blog](http://blogs.perl.org/users/james_curtis-smith/2021/01/perl-weekly-challenge-97.html).

```perl
    sub min_flips {
      ## Golf mode on...
      [
        local$/,
        local$\=length($_[0])/$_[1],
        map{$/=!$_->[0]||$_->[1]<$/?$_->[1]:$/}
        map{[$_->[0],($_[0]^$_->[1])=~y/\1/\1/]}
        map{[$_->[0],$_->[1]x$\]}
        map{[$_,substr$_[0],$_,$_[1]]}
        map{$_*$_[1]}
        0..$\-1
      ]->[-1]
    }
```

This is the middle-road version of three formats provided. One consists of everything on one line, all 213 characters, but frankly my eyes are glazing over just thinking about that one. Enjoy. Or, you know, whatever.


[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/alexander-pankoff/perl/ch-2.pl)

Pankoff gives us a very methodical functional breakdown of his steps, starting with a fascinating little routine, `chunks_of`, that, when given a string broken apart into individual characters, reassembles these elements into segments of the proper length, *using recursion*. Huh. Quite worth a study in itself.

```perl
    sub chunks_of ( $size, @xs ) {
        return if !@xs;
        my $chunk = [ @xs[ 0 .. min( ( $size - 1 ), $#xs ) ] ];
        return ( $chunk, chunks_of( $size, @xs[ $size .. $#xs ] ) );
    }
```

More functional goodness comes our way throughout the rest of the creation, as exemplified in his flip-counting calculations:

```perl
    my @total_flipping_distances =
      map {
        sum0( map { flip_distance( @{$_} ) } @$_ )
      } @pairing_groups;

    sub flip_distance ( $a, $b ) {
        sum0( map { $a->[$_] != $b->[$_] } 0 .. $#{$a} );
    }
```

You can see within that he gets his numbers by comparing individual bit positions.


[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/dave-jacoby/perl/ch-2.pl)

Dave came to the conclusion that the first substring of length S was to be the target to match. I will note he wasn't alone in this interpretation, and we can't really just disqualify this point of view. In any case I've officially washed my hands of any judgement in that area. He does kindly lay out his reasoning in comments for finding the flips required and summing them to provide an answer, which is always good for a gold star.

What makes his presentation unique is that in comparing the binary strings he noticed that a bit-flip, as defined, is making a substitution of one character for another. This in turn can be measured with... *(dramatic pause)*... the Levenshtein distance! So we see, remarkably, a return visit from that venerable algorithm:

```perl
    sub levenshtein_distance {
        my ( $f, $g ) = @_;
        my @a = split //, $f;
        my @b = split //, $g;

        # There is an extra row and column in the matrix. This is the
        # distance from the empty string to a substring of the target.
        my @d;
        $d[$_][0] = $_ for ( 0 .. @a );
        $d[0][$_] = $_ for ( 0 .. @b );

        for my $i ( 1 .. @a ) {
            for my $j ( 1 .. @b ) {
                $d[$i][$j] = (
                      $a[ $i - 1 ] eq $b[ $j - 1 ]
                    ? $d[ $i - 1 ][ $j - 1 ]
                    : 1 + min(
                        $d[ $i - 1 ][$j],
                        $d[$i][ $j - 1 ],
                        $d[ $i - 1 ][ $j - 1 ]
                    )
                );
            }
        }
        return $d[@a][@b];
    }
```

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-097/jo-37/perl/ch-2.pl)

On a final note, Jorg brings us another excellent submission from the manifold matrices for the PDL — the Perl Data Language.

After bringing in his segments using `unpack` and the familiar format, he hands the array of subsequences off the land of matrix manipulation:

```perl
sub minimum_flips (@bitstring) {

    # Create 2-d byte piddle as bit matrix from bitstrings.
    my $bits = byte map [split //], @bitstring;

    # Calculate the target bitstring: Set a target bit to one if the bit
    # is set at this position in more than half the bitstrings.
    my $target = $bits->transpose->sumover > $bits->dim(1) / 2;

    explain_bits($bits, $target) if $verbose;

    # The total number of bits to be flipped is the number of bits that
    # deviate from the target over all bitstrings.
    sum $bits ^ $target;
}
```

I don't think this one is too terribly hard to get the gist of, even if you don't exactly speak the dialect. Remember we're working on the matrix a whole here, as `$bits`. The `transpose` function swaps the rows and columns, so the first column becomes the top row, etc. `sumover` then adds the rows values to reduce the row to a single value. After that, the obvious next step is "magic". Perhaps a look at the output under the `-verbose` flag will help assist. For the bitsting `111011011011` and size 4:

    bitstrings:
    [
     [1 1 1 0]
     [1 1 0 1]
     [1 0 1 1]
    ]

    target:
     [1 1 1 1]

    flipbits:
    [
     [0 0 0 1]
     [0 0 1 0]
     [0 1 0 0]
    ]

    total flips: 3
    3

Piece of cake, in what amounts to 4 lines of processing. I do believe this sort of bit manipulation goes to the core of the PDL's design spec. It's really quite amazing to see it in its element.




---

# BLOGS {#PWC097BLOGS}

---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, I somehow continue to maintain my bearings. Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC093BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *READ* these *BLOG* *LINKS*:

**( *don't think, trust your training, you're in the zone, just do it ...* )**


**Aaron Smith**

 * [Perl Weekly Challenge 97 - Aaron Smith](https://aaronreidsmith.github.io/blog/perl-weekly-challenge-097/) ( *Raku* )

**Abigail**

 * [Perl Weekly Challenge 97: Ceasar Cipher - Abigail&#039;s Programming Blog](https://wp.me/pcxd30-nW) ( *Perl* )
 * [Perl Weekly Challenge 97: Binary Substrings - Abigail&#039;s Programming Blog](https://wp.me/pcxd30-pi) ( *Perl* )

**Adam Russell**

 * [Perl Weekly Challenge 097 - RabbitFarm - Perl](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2021/01/31) ( *Perl* )
 * [Perl Weekly Challenge 097 - RabbitFarm - Prolog](http://www.rabbitfarm.com/cgi-bin/blosxom/prolog/2021/01/31) ( *Prolog* )

**Arne Sommer**

 * [Caesarean Substrings with Raku and Perl](https://raku-musings.com/caesarean-substrings.html) ( *Perl & Raku* )

**Colin Crain**

 * [Et tu Brute? Mit dem Ausflippen? - Programming Excursions in Perl and Raku](https://colincrain.com/2021/01/29/et-tu-brute-mit-dem-ausflippen/) ( *Perl & Raku* )

**Dave Jacoby**

 * [Binary Substrings and Caesar ciphers: Perl Weekly Challenge 97 | Committed to Memory](https://jacoby.github.io/2021/01/25/binary-substrings-and-caesar-cyphers-perl-weekly-challenge-97.html) ( *Perl* )

**Flavio Poletti**

 * [PWC097 - Caesar Cipher - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/01/27/pwc097-caesar-cipher/) ( *Perl* )
 * [PWC097 - Binary Substrings - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/01/28/pwc097-binary-substrings/) ( *Perl* )

**James Smith**

 * [Perl weekly challenge 97](http://blogs.perl.org/users/james_curtis-smith/2021/01/perl-weekly-challenge-97.html) ( *Perl* )

**Lance Wicks**

 * [Perl Weekly Challenge 097 - Perl🐪.🥝 Kiwi](https://perl.kiwi/tales/2021/01/30/perl-weekly-challenge-097/) ( *Perl* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 97: Caesar Cipher and Binary Substrings](http://blogs.perl.org/users/laurent_r/2021/01/perl-weekly-challenge-97-caesar-cypher-and-binary-substrings.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 97: flipping and swapping – Luca Ferrari](https://fluca1978.github.io/2021/01/25/PerlWeeklyChallenge97.html#task1) ( *Raku* )
 * [Perl Weekly Challenge 97: flipping and swapping – Luca Ferrari](https://fluca1978.github.io/2021/01/25/PerlWeeklyChallenge97.html#task2) ( *Raku* )

**Roger Bell_West**

 * [RogerBW&#39;s Blog: Perl Weekly Challenge 97: Caesar Substrings](https://blog.firedrake.org/archive/2021/01/Perl_Weekly_Challenge_97__Caesar_Substrings.html) ( *Perl & Raku* )

**Simon Green**

 * [Weekly Challenge 097](https://dev.to/simongreennet/weekly-challenge-097-3ag8) ( *Perl* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 97 – W. Luis Mochán](https://wlmb.github.io/2021/01/25/PWC097/) ( *Perl* )

