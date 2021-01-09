
---
author:       Colin Crain
date:         2021-01-09T00:00:00
description:  "Colin Crain › Perl Weekly Review #092"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #092"
image:        images/blog/p5-review-challenge-092.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-091/).* )

Welcome to the Perl review for **Week 092** of the Weekly Challenge! Here we will take the time to discuss the  submissions offered by the team, factor out the common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

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

**<big>For context</big>**  before we begin, you may wish to revisit either of the pages for the [**original tasks**](/blog/perl-weekly-challenge-092/) or the summary [**recap**](/blog/recap-challenge-092/) of the challenge. But don't worry, the challenges themselves will be briefly summarized, presented below as we progress from task by task. Oh, and one more thing before we get started:

### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

**So finally, without further ado...**

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC092TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC092TASK2)   &nbsp;  &nbsp;  &nbsp;       •   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC092BLOGS)    &nbsp;  &nbsp;  &nbsp;       •

---

# TASK 1 {#PWC092TASK1}

# Isomorphic Strings
*Submitted by: Mohammad S Anwar*

You are given two strings $A and $B.

Write a script to check if the given strings are Isomorphic. Print 1 if they are otherwise 0.

**Example 1:**
```
    Input : $A = "abc"; $B = "xyz"
    Output: 1
```

**Example 2:**
```
    Input : $A = "abb"; $B = "xyy"
    Output: 1
```
**Example 3:**
```
    Input : $A = "sum"; $B = "add"
    Output: 0
```

## about the solutions

There were 23 successful submissions for the first task this past week. A few folks seem to have made incorrect assumptions about the relationship between the strings, but most of the solutions were robust.


## using two hashes
[**Alexander Karelas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/alexander-karelas/perl/ch-1.pl),
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/alexander-pankoff/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/colin-crain/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/polettix/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/laurent-rosenfeld/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/lubos-kolouch/perl/ch-1.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/paulo-custodio/perl/ch-1.pl),
[**Phillip Hartfield Sr**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/kordaff/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/roger-bell-west/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/ulrich-rieke/perl/ch-1.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/wanderdoc/perl/ch-1.pl)

By far the most common method was to traverse the first string letter-by-letter, assigning a mapping of characters found to their complement in the second, bailing out if any inconsistency is found. A second hash is required to keep track of the reverse mapping, from the second string to the first, to make sure only one letter is mapped to each character found. There were a few ways to use this second hash, as we shall see.

To traverse the string people either used `split` to create arrays or created an iterator for the length and accessed individual characters using `substr`.

[**Phillip Hartfield Sr**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/kordaff/perl/ch-1.pl)

Slightly more folks chose to access the characters using `substr`, so we'll start there. Here Phillip lays out the general technique. Two characters are grabbed, and first the A-to-B hash is checked to see if a relationship has already been established, and if so then whether it's consistent. If the letter from the first string is newly seen, a key-value pair is set in that hash. Then we check a second, reverse mapping hash in the same manner: if a key exists for the character in the second string make sure it maps back to its complement in the first. Nice and symmetrical like, you know?

```perl
  foreach $x (1..$len)
    {
    $char1 = substr($var1,$x-1,1);
    $char2 = substr($var2,$x-1,1);
    if (exists $isomapAB{$char1} )
      {
      if ($char2 ne $isomapAB{$char1})
        { return 0 }
      }
    else
      {
      $isomapAB{$char1} = $char2;
      }
    if (exists $isomapBA{$char2} )
      {
      if ($char1 ne $isomapBA{$char2})
        { return 0 }
      }
    else
      {
      $isomapBA{$char2} = $char1;
      }
    }
```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/polettix/perl/ch-1.pl)

Flavio condenses the method, packing a lot of steps into a few lines. I can't say I've ever seen that particular construction for assigning both hashes in the same line before. Remember assignment returns the value assigned, so, indirectly, both assignments get made. Indirectly. We'll leave it at that.

```perl
   for my $i (0 .. length($A) - 1) {
      my ($cA, $cB) = map { substr $_, $i, 1 } ($A, $B);
      return 0
        if (exists($B_for{$cA}) && ($B_for{$cA} ne $cB))
        || (exists($A_for{$cB}) && ($A_for{$cB} ne $cA));
      $B_for{$A_for{$cB} = $cA} = $cB;
   } ## end for my $i (0 .. length(...))
```

[**Alexander Karelas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/alexander-karelas/perl/ch-1.pl)

Karelas condenses the two hash solution quite compactly, in a manner I still find clear.
I like how all the conditional logic is in all together, with any failure immediately exiting the program.

```perl
    while (@a) {
        my $x = shift @a;
        my $y = shift @b;

        if (exists $a_to_b{$x} or exists $b_to_a{$y}) {
            ($a_to_b{$x} // '') eq $y and ($b_to_a{$y} // '') eq $x or say(0), exit;
        }

        $a_to_b{$x} //= $y;
        $b_to_a{$y} //= $x;
    }
```

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/e-choroba/perl/ch-1.pl) and
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/lubos-kolouch/perl/ch-1.pl)
have similar examples in their solutions.



[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/alexander-pankoff/perl/ch-1.pl)

Pankoff delivers a slight variant on the algorithm, adding the detail that we only need check the reverse hash if a mapping isn't found, and in that the presence of a key means that character from the second string has already been assigned. Only if no key is found then we establish a relationship with new hash assignments. As the code is so well commented I have decided to leave them in to guide you.

```perl
    sub is_isomorphic ( $a, $b ) {

        # there is no isomorphism if both strings have different lengths
        return 0 if length( $a ) != length( $b );

        # we will store the mapping from $a to $b in here
        my %a2b;

        # we use another hash to keep track of the inverse mapping
        my %b2a;

        # we will check each character in $a and $b for conflicts with the isomorphism coditions
        for my $i ( 0 ... length( $a ) ) {
            my $c_a = substr( $a, $i, 1 );
            my $c_b = substr( $b, $i, 1 );

            # there is already an entry for the current char from a
            if ( exists $a2b{$c_a} ) {

                # if the character from a was mapped to a different character from
                # $c_b before we have a conflict.
                return 0 if $a2b{$c_a} ne $c_b;
            }

            # no mapping for $c_a found
            else {

                # if $c_b was mapped to a different character before we have a conflict.
                return 0 if exists $b2a{$c_b};

                # no conflict found. Store the mappings.
                $a2b{$c_a} = $c_b;
                $b2a{$c_b} = $c_a;
            }
        }

        # no conflict could be found. $a and $b are isomorphic
        return 1;
    }
```

Of note here he nicely cites his sources:
>this algorithm was taken from the explanation link given in the challenge:
https://www.educative.io/edpresso/how-to-check-if-two-strings-are-isomorphic

I might add I generally avoid looking up algorithms myself for these challenges, preferring to go at the puzzles blind, but that is a personal preference, surely, and hardly the best way to go about things. Practically, researching knowledge is a valuable skill and to be lauded. After the fact, or sometimes before, I often spend absurd amounts of time researching rabbit-holes for the write-ups I make. Like, ridiculous, crazy time. It's fun, really. Don't look at me like that.

Back to the task at hand,

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/colin-crain/perl/ch-1.pl)

The thing about the second hash is that ultimately, we don't really need a hash at all, per se. We never need to actually *use* the reverse mapping. All we need to know is whether or not it *exists*.

What we really need is a set. When assigning a character from the *second* string, should we find a letter we've seen before we need to make sure it matches the mapping we made the last time we saw it. But to do that we only really need to know whether we've seen it before — if the mapping from the first set checks out we'll have already noticed that and moved on. So if we check *after* that verification and still recognize an already seen character, we know immediately something has gone wrong and we're done. A actual reverse lookup isn't required.

There isn't a built-in "Set" datatype in Perl, but the keys to a hash make a fine set model: an unordered collection where we can determine whether something is in the collection or not.  Using `exists` on the keys can make that determination quickly and easily, and so that was generally the tool people reached for. The values are unimportant, and the code below, assigning "undef" to the key, works just fine. Gets rid of some of the chaff, you know?

```perl
    for (0..length $str_A) {
        my $char_A = substr $str_A, $_, 1;
        my $char_B = substr $str_B, $_, 1;

        ## key already in invert
        return 0 if exists $invert{$char_B} and not exists $forward{$char_A};

        ## key in forward matches char B
        if (exists $forward{$char_A} ) {
            return 0 if $forward{$char_A} ne $char_B;
        }
        else {             ## make new key
            $forward{$char_A} = $char_B;
            $invert{$char_B}  = undef;
        }
    }
    return 1;
```

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/laurent-rosenfeld/perl/ch-1.pl)

Laurent treats the second hash as a set as well. I think it's clear that storing the reverse mapping value ultimately detracts from the purpose of the second hash in this form of the algorithm, where logically we no longer need it.

```perl
    sub is_isomorphic {
        my ($str1, $str2) = @_;
        return 0 if length $str1 != length $str2;
        my (%transcode, %seen);
        for my $i (0..length($str1) - 1) {
            my $char1 = substr $str1, $i, 1;
            my $char2 = substr $str2, $i, 1;;
            if (exists $transcode{$char1}) {
                return 0 if $transcode{$char1} ne $char2;
            } else {
                return 0 if exists $seen{$char2};
                $transcode{$char1} = $char2;
                $seen{$char2} = 1;
            }
        }
        return 1
    }
```

[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/paulo-custodio/perl/ch-1.pl)
also uses his second hash as a set.

### OTHER ideas for a SET
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/athanasius/perl/ch-1.pl) and
[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/cristian-heredia/perl/ch-1.pl)

This brings us to the next category, being other ideas for implementing a set to keep track of already assigned characters in the second string.

[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/cristian-heredia/perl/ch-1.pl)

Christina uses a Perl array for collecting allocated characters, and `grep` to determine existence.

```perl
    sub checkHash {
        if(!exists $hash{$C1}) {
            if(grep $_ eq $C2, @sets) {
                print "Output: 0\n";
                exit;
            }
            else {
                push @sets, $C2;
                addIntoHash();
            }
        }
        elsif ($hash{$C1} eq $C2) {
            addIntoHash();
        }
        else {
            print "Output: 0\n";
            exit;
        }
    }
```

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/athanasius/perl/ch-1.pl)

The monk Athanasius opts for a proper set, importing `Set::Scalar` to provide the functionality. Once that is done, the logic is quite clear:

```perl
    my $set = Set::Scalar->new;

    for my $i (0 .. $#A)
    {
        my $c1 = $A[$i];
        my $c2 = $B[$i];

        if (exists $map{$c1})
        {
            return 0 if $map{$c1} ne $c2;
        }
        else
        {
            return 0 if $set->has($c2);

            $map{$c1} =  $c2;
            $set->insert($c2);
        }
    }
```



## using a SINGLE HASH
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/abigail/perl/ch-1.pl),
[**Nuno Vieira**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/nunovieira220/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/pete-houston/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/sgreen/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/ulrich-rieke/perl/ch-1.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/wanderdoc/perl/ch-1.pl)

The problem with using a single hash to map the letters of the first string to the second, checking for consistency, is that a letter assigned from the second string could later be reassigned to another mapping, as "abc" -> "aba". Here each letter in the first string is mapped to only one letter, but more than one letter is mapped to "a" in the second.

This would be where a second hash would come in handy, but there are other ways to ensure there is no repetition in assignment for the characters in the second string.

For example,

[**Nuno Vieira**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/nunovieira220/perl/ch-1.pl)

Nuno will only assign a new key-value pair to his mapping if there is no current key and the value cannot be found among the existing values in the hash. To pull off this trick he imports `any` from `List::Util`. Didn't see that one coming.

```perl
    for my $i (0..$len - 1) {
      my $cA = substr($A, $i, 1);
      my $cB = substr($B, $i, 1);

      $map{$cA} = $cB if(!defined $map{$cA} && !(any { $_ eq $cB } values %map));
      next if (defined $map{$cA} && $map{$cA} eq $cB);

      $res = 0;
      last;
    }
```

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/sgreen/perl/ch-1.pl)

Simon, on the other hand uses only a single function, `is_isomorphic()`, which only establishes a single hash mapping from the letters of the first string to the second, an injective function. Then to establish reciprocity he calls the same routine again with the parameters switched, to determine whether the reverse is injective as well. If true, then the mapping is bijective and the strings are isomorphic.

One could say this is like the 2 hash solution, restructured as doing one hash twice in two ways. The single mapping is much as we've seen. The unusual part is the parameter swap to check the viability in the other direction.

```perl
    sub main {
        my ( $A, $B ) = @_;
        say _is_isomorphic( $A, $B ) && _is_isomorphic( $B, $A ) ? 1 : 0;
    }
```

[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/pete-houston/perl/ch-1.pl)
single hash

Pete gives us an interesting twist by only establishing a single, injective association from the characters in the first string to the second. Should that test succeed, that is each letter is only mapped to one character, he then *reverses* the hash using a `map` function and applies the mapping to the second string using a regular expression.

If the remapped string is equal to the first the mapping is one-to-one onto, or bijective, and the two strings are isomorphic. On the other hand if multiple characters from the first get mapped to the same character in the second things will go south quickly as the reversed hash will only reflect one of the values.

```perl
    for my $i (0 .. length ($str[0]) - 1) {
        my $x = substr ($str[0], $i, 1);
        my $y = substr ($str[1], $i, 1);
        print "1 = $x   2 = $y $seen{$x}\n";
        return 0 if exists $seen{$x} && $seen{$x} ne $y;
        next if exists $seen{$x};
        $seen{$x} = $y;
    }
    %seen = map { $seen{$_} => $_ } keys %seen;
    $str[1] =~ s/(.)/$seen{$1}/sg;
    print "str1 $str[0]   str2 $str[1]\n";
    return $str[0] eq $str[1] ? 1 : 0;
```

This leads us to the final form down this road, as demonstrated by

[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/wanderdoc/perl/ch-1.pl)

So what we have here a really nice, compact solution from the Wandering Doctor.

First off, love the hash slice assignment. That's inspired.

I wasn't sure where to put these solutions because they do use two hashes, but not in the conventional sense we've seen before. The second hash only enters the picture at the very end, as a value-key reversal of the original. In such a case duplicates — once values, now keys — will be overwritten, and the number of keys in the two hashes will no longer match. And that's all we need to know.

In Set Theory, the keys of the first hash are the domain, the keys of the second, the codomain. To prove the mapping is "one-to-one onto", or bijective, the size of the domain and codomain must be equal, and this little trick accomplishes that test beautifully.


The whole routine:

```perl
    sub is_isomorphic
    {
         my ($str_1, $str_2) = @_;
         return 0 if length($str_1) != length($str_2);
         my %hash_1;

         @hash_1{split(//,$str_1)} = split(//,$str_2);
         my %hash_2 = reverse %hash_1;

         return scalar keys %hash_1 == scalar keys %hash_2 ? 1 : 0;
    }
```

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/abigail/perl/ch-1.pl)

provides a very similar solution, with a little added mathematical commentary:

> What we want is to show there is a bijection f between the letters
> of $A and the letters of $B.
>
> For a bijection, we need to show that:
>     f and f^-1 (the inverse of f) are total
>     f (x) == f (y)  <=> x == y
>
> 1) we check that $A and $B have the same length, otherwise either
>    f or f^-1 isn't total.
> 2) x == y => f (x) == f (y)
> 3) |dom (f)| = |img (f)|  (Size of the domain of f is the
>                            size of the image of f)
>

```perl
    sub solve ($A, $B) {
        return 0 unless length ($A) == length ($B);      # 1)
        my @A = split // => $A;
        my @B = split // => $B;
        my %mapping;
        foreach my $i (keys @A) {
            my $A = $A [$i];
            my $B = $B [$i];
            return 0 if $B ne ($mapping {$A} //= $B);    # 2)
        }
        my %reverse = reverse %mapping;
        keys %reverse == keys %mapping;                  # 3)
    }
```

as did

[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/ulrich-rieke/perl/ch-1.pl)

```perl
  for my $i (0 .. $len - 1 ) {
      $mapped_from{ substr( $A, $i , 1 ) } = substr( $B , $i , 1 ) ;
      $mapped_to{ substr( $B, $i , 1 ) }++ ;
  }
  if ( scalar keys %mapped_from == scalar keys %mapped_to ) {
      print "1\n" ;
  }
  else {
      print "0\n" ;
  }
```


## create a CANONICAL intermediate form
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/cheok-yin-fung/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/jo-37/perl/ch-1.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/wlmb/perl/ch-1.pl)

There was another was to go about this affair, and that was to reduce the stings to their essential natures and directly compare them. Which is to say create a transformation function that takes a string and normalizes it to a canonical form. Rather than attempt to find a mapping from one string to the other directly, we can see whether both strings in canonical form are the same.

The canonical form identifies each character by its first appearance: the first character is given the first token, the second the second, if the third should be the same as the first it would get the first token again as expected. The tokens are assigned sequentially in some predefined, easily identifiable pattern, such as sequential letters of the alphabet, picking sucessive letters starting with "a".

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/james-smith/perl/ch-1.pl)

James and Luis both demonstrate the idea with nearly identical methods in a functional pardigm. In it two `map` routines are nested, the outer processing each of the two strings, the inner mapping each of the split letters of the string in question to eather an already identified character or the next squential alphabetic choice.

It's not often I see character postfix incrementation, either. Every call on the inner map function returns either the hashed mapping or if undefined completes the assignment (returning the letter assigned) and increments the character for the next time it's required. It's simple and powerful.

Because the transforming function acts in the same way on each string, the same result will be produced from different strings with the same underlying structure, in this case isomorphism. I find this a very clever application of functional programming.

```perl
    sub iso {
        my ( $a, $b ) = map {
            ## Initialise letter cache and "counter"
            my ( $x, %m ) = 'a';
            join '',                                ## Stitch back the word and return it....
                map {  $m{ $_ } ||= $x++  }         ## Return letter from cache ( or next letter )
                    split m{}, $_                   ## Split into individual characters
        } @_;
        return $a eq $b || 0;                       ## Check to see if generated words are isomorphic
    }
```

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/wlmb/perl/ch-1.pl)

Luis's method is nearly identical, as I noted, using the "defined OR" operator instead of OR assignment but otherwise the same. Because I like these two solutions so much I've left them in, but my seemingly compulsive need to break things seems unable to leave well enough alone.

So I got to thinking: "What happens after we use 26 tokens?" Well, the incrementation simply begins again with "aa", "ab", "ac"... Which actually works fine... well, most of the time.

What about the two strings "abcdefghijklmnopqrstuvwxyzABC" (29 letters) and "abcdefghijklmnopqrstuvwxyzaaabac" (32 letters)? Yea, about that... both solutions, Luis' and James', succumb to this rather extreme case, creating the same canonical form: "abcdefghijklmnopqrstuvwxyzaaabac" (notice this is the same as the second string, which I know because I copied and pasted it in). By checking for string length, as was standard elsewhere, this could have been avoided, as any jumping to two-character tokens will always find itself at the end of the canonical string, and thus the token delineation will remain in sync. Only by substituting two characters from the original mapping can we duplicate the pattern, which necessarily throws off the character count.

This might demonstrate an oversight in the purely functional paradigm — in a quest for a compact wholeness we have overlooked a simple check not easily rolled into a single pure function, and a little imperitive framework might help us out here. I've been finding a functional core logic within an imperitive wrapper to be a nice compromise, and often easier to read. Just an idea. YMMV.

But with that caviat, I love this solution. It's beautiful.

```perl
sub canonical_form_of {
    my %map;
    my $current_letter="a";
    my $canon=join '', map {$map{$_}//($map{$_}=$current_letter++)} split //, shift;
}
```


[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/jo-37/perl/ch-1.pl)

>The task appears to be very easy, especially because the specification
comes along with a detailed description of an optimal implementation.
This invites to go the extra mile.

There's alot going on in Jorg's method. He avoids the sequence overflow complexity (and its trip-ups) by numbering his tokens and keeping them in an array, and creating a message digest form to compare results.

The extra mile taken here is to incorporate [Unicode Grapheme Clusters](https://www.unicode.org/reports/tr29/#Grapheme_Cluster_Boundaries) into the model of isomorphism, specifically tackling the complexity that grapheme components can sometimes be grouped in multiple ways to produce the same character. By using Extended Grapheme Cluster Boundaries as the basis for letter constructions, and then applying a common transformative function to the strings to make a canonical version. Then these canonical versions can be compared and if equivalent the strings are isomorphic.

Here's the bulk of it, a little edited for clarity. There's more commentary in the original. As I said, there's a lot going on.

```perl
    use Unicode::Normalize;
    use Digest;
    use constant DIGEST => 'SHA-1';

    sub uni_iso_digest {
        # Normalize input (Normalization Form D - canonical decomposition)
        local $_ = NFD shift;

        my $digest = Digest->new(DIGEST);
        my $n = 0;
        my %chars;
        my @canon;

        # Assign an ascending number to every new character appearing in the
        # string and append the current number's bits to the message.
        # Use \X to grab for a grapheme cluster.
        while (s/(\X)//) {
            $chars{$1} = $n++ unless exists $chars{$1};
            $digest->add_bits(pack('L', $chars{$1}), 32);
            push @canon, $chars{$1};
        }

        # Return the canonicalization and the message digest in list
        # context.  Returns solely the digest in scalar context.
        (\@canon, $digest->hexdigest);
    }
```

To give a better idea of what this does, he compared the teo isomorphic strings "xxyy" and

```perl
my $str =
    "\N{LATIN CAPITAL LETTER A WITH DIAERESIS}" .

    "\N{LATIN CAPITAL LETTER A}" .
    "\N{COMBINING DIAERESIS}" .

    "\N{LATIN CAPITAL LETTER A}" .
    "\N{COMBINING DIAERESIS}" .
    "\N{COMBINING LONG STROKE OVERLAY}" .

    "\N{LATIN CAPITAL LETTER A}" .
    "\N{COMBINING LONG STROKE OVERLAY}" .
    "\N{COMBINING DIAERESIS}";
```

which is two complex characters described each two ways. Neat.

---

<p> &nbsp; </p>
<p> &nbsp; </p>
<p> &nbsp; </p>
<p> &nbsp; </p>

---

# TASK 2 {#PWC092TASK2}

# Insert Interval
*Submitted by: Mohammad S Anwar*
You are given a set of sorted non-overlapping intervals and a new interval.

Write a script to merge the new interval to the given set of intervals.

**Example 1:**
```
    Input $S = (1,4), (8,10); $N = (2,6)
    Output: (1,6), (8,10)
```
**Example 2:**
```
    Input $S = (1,2), (3,7), (8,10); $N = (5,8)
    Output: (1,2), (3,10)
```
**Example 3:**
```
    Input $S = (1,5), (7,9); $N = (10,11)
    Output: (1,5), (7,9), (10,11)
```

## about the solutions

There were 21 successful submissions for the second task this past week.

The requirement that the given list of intervals be sorted and non-overlapping greatly simplified the insertion process and was universally capitalized on. Because of this, any element whose upper bound was below that of the newly inserted element could be immediately, safely excluded from the calculation. Likewise the grou[ of overlapped intervals has a clear boundary as well, when the lower bound of the next interval lies above that of the inserted. Because of the ordering, no interval above that point can be affected.

So the mission became to insert the bull into the china shop, then fix any damage it caused. Even though the actions were highly similar, the specific method for bringing them about varied greatly. Wildly, one might say.

I found a few mistakes as well, large and small.

I'm afraid this became another one of those moments where my febrile mind takes charge over the cool, analytical component and just needs to break things. I don't hate the team, I swear - I care about each and every one of you, I really do. It's just sometimes I look at something and find myself saying: "What happens when we do this? Doen't it fail if we do that?" And once started I can't seem to stop getting more and more Baroque in my pathological data constructions. What can I say? I have a knack for it.

Sometimes adding a `use lib '.'` is all it took and I just hand-wave those away. Other times, well, there weren't may of them, but the bookkeeping could get complicated, and the cases, though easy to accommodate, were manyfold.

But lets just get on to it.


## Categories? CATEGORIES? What is this THING you speak of?
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/abigail/perl/ch-2.pl),
[**Alexander Karelas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/alexander-karelas/perl/ch-2.pl),
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/alexander-pankoff/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/athanasius/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/cheok-yin-fung/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/colin-crain/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/polettix/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/james-smith/perl/ch-2.pl),
[**Joel Crosswhite**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/jcrosswh/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/jo-37/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/laurent-rosenfeld/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/perlboy1967/perl/ch-2.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/paulo-custodio/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/pete-houston/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/roger-bell-west/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/sgreen/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/ulrich-rieke/perl/ch-2.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/wlmb/perl/ch-2.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/wanderdoc/perl/ch-2.pl)

It seems that everyone had their own take on implementing the same basic steps, defying easy categorization this time. I mean, two people using an object does not a category make.

And here I thought I might finally have gotten this format finally figured out. Oh well.

So instead I submit to you a semi-random, non-exhaustive sampling of approaches we saw, with a slight emphasis toward the well explained and unusual. I can try and draw a bit of a through-narrative as we go, but I guarantee it won't be as tight as usual. Perhaps something will develop. Welcome to my mind.

Let's try and start from a position of clarity:

[**Joel Crosswhite**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/jcrosswh/perl/ch-2.pl)

Joel has given us what is perhaps the most thorough and systematic breakdown of the steps required to properly resolve any conflicts surrounding an insertion.

 1. Does the new interval just go to the beginning of the set.
 2. Does the new interval just go to the end of the set.
 3. Does the new interval span all other intervals, so it just becomes the new
interval.
 4. The new interval needs to go into the existing set, so starts looping
through existing intervals:
    - Checks if the new interval lands in between the current and the next
interval.
    - Checks if the start of the new interval is before the existing interval, if
so, then set the current interval start to the new interval start.
    - Checks if the end of the new interval is after the existing interval, if so,
then set the end of the current interval to the new interval end.
    - If the new interval connects two intervals, then set the correct beginning
and end, then delete the second interval from the current set.

So following the rules laid out, he gives us his solution:

```perl
    # if new interval is before all others....
    if ($new_interval_end < $intervals_ds[0][0]) {
        splice(@intervals_ds, 0, 0, [$new_interval_start, $new_interval_end]);

    # if new inteval is after all others....
    } elsif ($new_interval_start > $intervals_ds[-1][1]) {
        splice(@intervals_ds, scalar(@intervals_ds), 0,
            [$new_interval_start, $new_interval_end]);

    # if new interval spans all intervals....
    } elsif ($new_interval_start < $intervals_ds[0][0]
        && $new_interval_end > $intervals_ds[-1][1]) {
        @intervals_ds = [$new_interval_start, $new_interval_end];
    } else {

        # go through all existing intervals to see where new one should land
        for (my $i = 0; $i < scalar(@intervals_ds) - 1; $i++) {

            # new interval falls in between existing intervals
            if ($new_interval_start > $intervals_ds[$i][1]
                && $new_interval_end < $intervals_ds[$i + 1][0]) {
                splice(@intervals_ds, $i + 1, 0,
                    [$new_interval_start, $new_interval_end]);
                last;
            }

            # new interval will extend existing interval forward
            if ($new_interval_start < $intervals_ds[$i][0]
                && $new_interval_end > $intervals_ds[$i][0]) {
                $intervals_ds[$i][0] = $new_interval_start;
            }

            # new interval will extend existing interval further back
            if ($new_interval_end > $intervals_ds[$i][1]
                && $new_interval_end < $intervals_ds[$i + 1][0]) {
                $intervals_ds[$i][1] = $new_interval_end;
            }

            # new interval 'connects' two intervals, requiring the removal of one
            if ($new_interval_start < $intervals_ds[$i][1]
                && $new_interval_end > $intervals_ds[$i + 1][0]) {
                $intervals_ds[$i][1] = $intervals_ds[$i + 1][1];
                splice(@intervals_ds, $i + 1, 1);
            }
        }
    }
```

So far so good. Now let's do me:

[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/colin-crain/perl/ch-2.pl)

For my own solution, I broke the process into two steps, the first locating the proper spot to splice in the new interval, the second to resolve any conflicts that may have arisen. This resulted in two routines, one to walk the list looking for the correct opening, and a second, enclosed in a loop, that expands the interval, absorbing the one following, until the lower bound of the next interval is beyond the upper bound of the new.

```perl
    while (1) {
        if (defined $S->[$idx+1] and $S->[$idx][1] >= $S->[$idx+1][0]) {
            merge($S, $idx);
        }

        last if $idx == $S->@* - 1;
        last if $S->[$idx][1] < $S->[$idx+1][0];
    }

    sub insert_and_find_merge {
        my ($list, $new) = @_;
        my $idx = 0;
        my $merge;
        while ($idx < $list->@*) {
            last if $list->[$idx][0] >= $new->[0];
            $idx++;
        }
        splice $list->@*, $idx, 0, $new;

        return 0 if $idx == 0;
        return $idx-1 if $list->[$idx-1][1] >= $new->[0];
        return $idx;
    }

    sub merge {
    ## given list ref and index, merges index and index + 1
        my ($list, $idx) = @_;
        $list->[$idx][1] = $list->[$idx][1] > $list->[$idx+1][1] ? $list->[$idx][1]
                                                                 : $list->[$idx+1][1];
        splice $list->@*, $idx+1, 1;
    }
```

[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/paulo-custodio/perl/ch-2.pl)

Paulo takes a similar course, adding his new interval and later merging to resolve conflicts.

Here is his merging routine:

```perl
    sub merge_intervals {
        for (my $i = 0; $i+1 < @intervals; $i++) {
            while ($i+1 < @intervals) {
                my $this = $intervals[$i];
                my $next = $intervals[$i+1];
                if ($this->[1] < $next->[0]) {                	# not overlapping
                    last;                						# next interval
                }
                else {
                    splice(@intervals, $i, 2, [$this->[0], $next->[1]]);    # merge and test again
                }
            }
        }
    }
```

[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/pete-houston/perl/ch-2.pl)
Let's start with saying Pete gets points for providing a usage example for input. You'd be surprised at how many people forget this simple step. I already spend *way* too much time dissecting these scripts, and little things like this endear you to me. On rare occations I have even given up on reviews because I couldn't figure out how to feed data into the thing from the command line. Seriously. Matrices, binary trees — I'm looking at **you**.

Anyway, Pete gives us a nicely commented and broken up procedure to find the insertion point, then propagate through a sequence of logical decisions to expand the intervals around the newcomer to accommodate it. Using a call-and-response running commentary (*can I get an ay-men!*) he brings us through each choice as it is made. Here he is after insertion, resolving overlap issues:

```perl
    unless ($finished) {
        my $this = $pair;
        # Pick off more entries until we don't finish after the
        # upper bound
        while (defined ($this) && $new[1] > $this->[1]) {
            $this = shift @old;
        }
        # Are we beyond the very last pair?
        unless (defined $this) {
            $pair->[1] = $new[1];
            push @ranges, $pair;
            $finished = 1;
            last;
        }
        # Do we finish before the next pair starts?
        if ($new[1] < $this->[0]) {
            $pair->[1] = $new[1];
            push @ranges, $pair, $this, @old;
            $finished = 1;
            last;
        }
        # Nothing more to do, just append the rest
        $pair->[1] = $this->[1];
        push @ranges, $pair, @old;
        $finished = 1;
        last;
    }
```



[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/perlboy1967/perl/ch-2.pl)

Niels provides an Interval object type, with accessor methods and handy boolean functions governing containment and overlapping with others of its kind.

He make his amalgamated insertion with two passes on the array. The first, using a `map` function, identifies any overlapping intervals and expands their boundaries as required to the limits of the added interval. Then a second pass is made to extract any absorbed intervals using a loop and `splice`. Quite clear and neat in execution.

```perl
while(<DATA>) {
    chomp;
    next if /#/;
    my @d = split(/\s+/);
    my @i = map { Interval->new(split(/,/,$_)) } @d;
    my $n = pop(@i);

  Print('Input', @i, $n);

  my $ext = 0;
    my @o = map {
        # Extend when overlaps
        if ($_->overlaps($n)) {
            $_ = Interval->new(min($_->min,$n->min), max($_->max,$n->max));
            $ext++;
        }
        $_;
    } @i;

  push(@o, $n) unless $ext;

  @o = sort { $a->cmp($b) } @o;

  my $i = 0;
    while ($i <= scalar(@o) - 2) {
        # splice overlapping entries
        if ($o[$i]->overlaps($o[$i+1])) {
            splice(@o, $i, 2,
                     Interval->new(min($o[$i]->min,$o[$i+1]->min),  max($o[$i]->max,$o[$i+1]->max)));
        } else {
            $i++;
        }
    }

  Print('Output', @o);
}
```

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/athanasius/perl/ch-2.pl)

The monk also uses an Interval object type to handle all things interval, like where it starts, stops, whether it overlaps with another and how to handle reverse mitosis should the need arise.

His algorithm makes a single pass, however, building the output array from first unaltered preliminary elements, then the inserted element with all others absorbed, followed by the remaining portion of the original array that remained out of harm's way. We will see this three part construct again later.

```perl
    for my $interval (@$S)
    {
        if ($merged || $interval->precedes($N))
        {
            push @out, $interval;
        }
        elsif ($N->precedes($interval))
        {
            push @out, $N, $interval;
            $merged = 1;
        }
        else
        {
            $N = $N->merge($interval);
        }
    }

    push @out, $N unless $merged;

    return @out;
```

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/abigail/perl/ch-2.pl)

Abigail uses a series of `grep` functions to divide the interval list into segments, those before, those overlapping, and those after the new interval. The overlapping conflicts are resolved and the list reassembled. I'll let his excellent commentary speak for itself.

```perl
    #
    # Partition the intervals into three sets:
    #    - Intervals completely to the left of $N
    #    - Intervals intersecting $N
    #    - Intervals completely to the right of $N
    #
    # Each set my be empty. The first and last set will be unmodified.
    #
    my @pre  = grep {$$_ [1] <  $$N [0]} @intervals;
    my @mid  = grep {$$_ [0] <= $$N [1] &&
                     $$_ [1] >= $$N [0]} @intervals;
    my @post = grep {$$_ [0] >  $$N [1]} @intervals;

    #
    # Merge the middle set will be with $N, the result is a single interval:
    #    - If the middle set is not empty, and the start of the
    #      first interval in the set is to the left of the start
    #      of $N, the start point of the merged interval is the start
    #      point of the merged interval, else it's the start point of $N.
    #    - For the endpoint, we compare the end points of last interval
    #      in the middle set with the end point of $N.
    #
    my $mid  = [@mid && $mid  [0] [0] < $$N [0] ? $mid  [0] [0] : $$N [0],
                @mid && $mid [-1] [1] > $$N [1] ? $mid [-1] [1] : $$N [1]];
```



[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/polettix/perl/ch-2.pl)

Both Flavio and James make a single pass through list to find their insert point, shifting elements off one list and pushing them onto another.

For his go at it, Flavio immediately destroys the abstraction of the new interval, breaking it apart into isolated low and high boundary values. After shifting over all intervals that end before the lower value, then the problem is resolving the lower and upper boundaries to fit cleanly within the new array. The $l and $h variables are adjusted and any absorbed intervals are again shifted and not transferred to remove them.

The resultant array becomes a concatenation of those intervals before the insert, a newly reconstructed interval from the low and high values, and anything from the remaining input array untouched by the changes.

```perl
    sub insert_interval ($S, $N) {
       my @S = map { [$_->@*] } $S->@*;
       my ($l, $h) = $N->@*;
       my @retval;

       # first of all, "transfer" all preceding intervals
       push @retval, shift(@S) while @S && $S[0][1] < $l;
       if (! @S) { # all intervals were preceding, easy
          push @retval, [$l, $h];
          return \@retval;
       }

       # now $S[0] might be after the new interval
       if ($S[0][0] > $h) {
          push @retval, [$l, $h], @S;
          return \@retval;
       }

       # now there is some overlap between $S[0] and $N. We can fix the start
       $l = min($l, $S[0][0]);

       # ... and look for the end...
       while (@S && $h >= $S[0][0]) {
          $h = max($h, $S[0][1]);
          shift @S;
       }

       push @retval, [$l, $h], @S;
       return \@retval;
    }
```

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/james-smith/perl/ch-2.pl)

In James' example the lower bound of the new element is moved to absorb a single element before if required (there will be at max one), then the upper element is adjusted from the upper bounds of the remaining elements. Instead of splicing, completely absorbed elements can be shifted off the old for examination and simply not pushed on the new to remove them.

```perl
  while(my $e = shift @list) {
    return [ @new_list, $new, $e, @list ] if $e->[0] > $new->[1];
          ## The start of the next element is after the end of the new element - so we can safely
          ## push the new element and the rest of the list (and return it)
    if( $e->[1] < $new->[0] ) { ## Next element is to the left of the new element so push
      push @new_list,$e;        ## and continue
      next;
    }
    $new->[0] = $e->[0] if $e->[0] < $new->[0];
    $new->[1] = $e->[1] if $e->[1] > $new->[1];           ## Get start/end of first overlap...
    while( @list && $new->[1] >= $list[0][0] ) {          ## this also overlaps the next list element
      $new->[1] = $list[0][1] if $list[0][1] > $new->[1]; ## If goes beyond next list element we extend new
      shift @list;                                        ## Remove element from list;
    }
    return [ @new_list, $new, @list ];                    ## The rest of the list will be after the "new" element now
  }                                                         ## So we can safely push and return it....
  return [ @new_list, $new ];                             ## The new element must be after the list so we just
                                                            ## return it on the end of the list...
```

[**Alexander Karelas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/alexander-karelas/perl/ch-2.pl)

Karelas sorts his interval list by the lower bound, and then uses `redo LABEL` inside a block to produce a  structure that loops over all pairs to see if they overlap. Should he find a conflict it is then resolved.

```perl
    LOOP:
    {
        # check all pairs of intervals, whether they merge
        for (my $i = 0; $i < @S - 1; $i++) {
            for (my $j = $i + 1; $j < @S; $j++) {
                my $pair_a = $S[$i];
                my $pair_b = $S[$j];

                # do they touch?
                if ($pair_a->[1] >= $pair_b->[0] and $pair_a->[0] <= $pair_b->[1]) {
                    # merge the two intervals and start over
                    my $min = min($pair_a->[0], $pair_b->[0]);
                    my $max = max($pair_a->[1], $pair_b->[1]);
                    splice @S, $j, 1;
                    splice @S, $i, 1;
                    push @S, [$min, $max];

                    redo LOOP;
                }
            }
        }
    }
```

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/sgreen/perl/ch-2.pl)

Not using an object *per se*, Simon takes an unusual course to regard intervals as mappings in a hash, with the lower bound as key pointing to the upper as value. This works of course because we know the existing list is non-overlapping, so no two lower bounds can be the same. There's no need (or meaning) to keep the hash keys sorted until we output, and so instead of splicing and array we only need to `delete` keys. Here's the section that handles the overlaps:

```perl
    # Get all intervals that intersect the new interval
    my @grab = grep { $_ >= $start && $_ <= $new_end }  sort { $a <=> $b } keys %intervals;

    # This interval ends at the greater of the new interval or the
    #  end of the last interval we used.
    $intervals{$start} = max( $new_end, $intervals{ $grab[-1] } );

    if ( scalar(@grab) > 1 ) {
        # We subsumed some other intervals, so delete them
        shift @grab;
        delete $intervals{$_} foreach @grab;
    }
```

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/jo-37/perl/ch-2.pl)

After shifting off the new interval, Jorg uses `map` to sequence through the remaining interval list, applying a deciding function `pass_merge` that either passes through an unchanged pair-array, the new interval or a new array segment comprising the topic and merged interval. I don't believe we see this approach elsewhere; it's quite interesting.

```perl
    sub pass_merge {
        my ($base, $insert) = @_;

        # No insertion: just pass the base.
        return [$base] unless $insert;

        # Base below insertion: pass the base and keep the insertion.
        return ([$base], $insert) if $base->[1] < $insert->[0];

        # Insertion below base: pass insertion and base, clear insertion.
        return [$insert, $base] if $insert->[1] < $base->[0];

        # Overlapping intervals: pass nothing and use merged intervals as
        # new insertion.
        ([], [minmax $base->@*, $insert->@*]);
    }

    # Insert the new interval (1st arg) into the list of given intervals by
    # sliding the insertion over the list of intervals and performing the
    # operations as provided by pass_merge.
    sub insert {
        my $insert = shift;

        ((map {
                (my $pass, $insert) = pass_merge $_, $insert;
                $pass->@*;
                } @_),
            # Append the insertion if it still exists.
            ($insert) x !!$insert);
    }
```

[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/wanderdoc/perl/ch-2.pl)

The Wanderdoc gives us a rather profoundly weird algorithm, importing the `Bit::Vector` module to abstract his intervals a sort of unary notation: a single string of bits in a vector the size of the whole range spanned. In other words a quite literal model of an interval. He can then use a bitwise OR from the module to map the intervals to a result vector, with any overlaps accounted for.

```perl
    sub insert_interval
    {
         my @intervals = @_;

         @intervals = sort { $a->[0] <=> $b->[0] } @intervals;
         my $max = max(map @$_, @intervals);

         my @veclist = Bit::Vector->new($max + 1, scalar @intervals);
         $veclist[$_]->Interval_Fill(@{$intervals[$_]}) for 0 .. $#veclist;

         my @results;
         my $res = $veclist[0]->Shadow();

         for my $v ( @veclist )
         {
              if ($res->is_empty())
              {
                   $res->Or($res, $v);
              }
              else
              {
                   if ( $v->Min() <= $res->Max() )
                   {

                        $res->Or($res, $v);
                   }
                   else
                   {
                        my $res_p = $res->Clone();
                        push @results, [$res_p->Min(), $res_p->Max()];
                        $res->Empty();
                        $res->Or($res, $v);

                   }
              }
         }
         push @results, [$res->Min(), $res->Max()];

         return @results;
    }
```

and finally,

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-092/e-choroba/perl/ch-2.pl)

On seeing his short submission, I was initially intrigued by Choroba's seeming ability for concise distillation of complex processes, only to find he has reused PWC 050 as-is. Well, that *is* one way to do it, and an entirely correct allocation of resources. My hat is off to you sir — I have done this myself. I usually take the time to refactor some details or even rework everything from a different angle. Other times I don't. This appears to be one of those times for Choroba.

```perl
    do "$FindBin::Bin/../../../challenge-050/e-choroba/perl/ch-1.pl";

    sub insert_interval {
        my ($intervals, $new) = @_;
        my $skip = 'MyInterval'->new;
        $skip->insert(@$_) for @$intervals, $new;
        return $skip->out
    }
```



---

# BLOGS {#PWC092BLOGS}

---

**That’s it for me this week, people! Resolute and unbroken by the torrential influx, I have maintained my bearings. Looking forward to next wave, the perfect wave, I am: your humble servant.**

## But if Your *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC092BLOGS}
## then *RUN* *(dont walk!)* to the *WATERING HOLE*
## and *READ* these *BLOG* *LINKS*:

***( don't think, trust your training, you're in the zone, just do it ... )***


**Aaron Smith**

 * [Perl Weekly Challenge 92 - Aaron Smith](https://aaronreidsmith.github.io/blog/perl-weekly-challenge-092/) ( *Raku* )

**Abigail**

 * [Perl Weekly Challenge 92, Part 1 &#8211; Abigail&#039;s Programming Blog](https://wp.me/pcxd30-jK) ( *Perl* )
 * [Perl Weekly Challenge 92, Part 2 &#8211; Abigail&#039;s Programming Blog](https://wp.me/pcxd30-ka) ( *Perl* )

**Andrew Shitov**

 * [Raku Challenge, Week 92, Issue 1 &#8211; Andrew Shitov](https://andrewshitov.com/2020/12/22/raku-challenge-week-92-issue-1/) ( *Raku* )

**Arne Sommer**

 * [Isomorphic Insertation with Raku](https://raku-musings.com/isomorphic-insert.html) ( *Perl & Raku* )

**Colin Crain**

 * [My Lava Lamp Pulsates in Harmony with the String Section &#8211; Programming Excursions in Perl and Raku](https://colincrain.com/2020/12/27/my-lava-lamp-pulsates-in-harmony-with-the-string-section/) ( *Perl & Raku* )

**Flavio Poletti**

 * [PWC092 - Isomorphic Strings - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2020/12/22/pwc092-isomorphic-strings/) ( *Perl* )
 * [PWC092 - Insert Interval - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2020/12/23/pwc092-insert-interval/) ( *Perl* )

**James Smith**

 * [Perl weekly challenge 92 | James Curtis-Smith](http://blogs.perl.org/users/james_curtis-smith/2020/12/perl-weekly-challenge-92.html) ( *Perl* )

**Kang-min Liu**

 * [解 Perl Weekly Challenge 092 -- 同構字串與合併範圍](https://gugod.org/2020/12/pwc-092/) ( *Raku* )
 * [Solving Perl Weekly Challenge 092 -- Isomorphic Strings and Insert Interval](https://gugod.org/2020/12/pwc-092-en/) ( *Raku* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 92: Isomorphic Strings and Insert Intervals](http://blogs.perl.org/users/laurent_r/2020/12/perl-weekly-challenge-92-isomorphic-strings-and-insert-intervals.html) ( *Perl & Raku* )

**Roger Bell_West**

 * [RogerBW&#39;s Blog: Perl Weekly Challenge 92: Isomorphic Interval](https://blog.firedrake.org/archive/2020/12/Perl_Weekly_Challenge_92__Isomorphic_Interval.html) ( *Perl & Raku* )

**Simon Green**

 * [Weekly Challenge 092](https://dev.to/simongreennet/weekly-challenge-092-1kim) ( *Perl* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 92](https://wlmb.github.io/2020/12/22/PWC92/) ( *Perl* )
