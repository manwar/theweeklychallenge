---
author:       Colin Crain
date:         2021-06-28T00:00:00
description:  "Colin Crain › Perl Weekly Review #116"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #116"
image:        images/blog/p5-review-challenge-116.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-115/).* )

Welcome to the Perl review for **Week 116** of the Weekly Challenge! Here we will take the time to discuss the  submissions offered by the team, factor out the common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

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

**<big>For context</big>**  before we begin, you may wish to revisit either of the pages for the [**original tasks**](/blog/perl-weekly-challenge-116/) or the summary [**recap**](/blog/recap-challenge-116/) of the challenge. But don't worry, the challenges themselves will be briefly summarized, presented below as we progress from task by task. Oh, and one more thing before we get started:

### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/theweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

**So finally, without further ado...**

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC116TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC116TASK2)   &nbsp;  &nbsp;  &nbsp;   	•   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC116BLOGS)    &nbsp;  &nbsp;  &nbsp;   	•

---

# TASK 1 {#PWC116TASK1}

# Number Sequence
*Submitted by: Mohammad S Anwar*<br>
You are given a number $N >= 10.

Write a script to split the given number such that the difference between two consecutive numbers is always 1 and it shouldn’t have leading 0.

Print the given number if it impossible to split the number.

**Example**
```
    Input : $N = 1234
    Output: 1,2,3,4

    Input : $N = 91011
    Output: 9,10,11

    Input : $N = 10203
    Output: 10203 as it is impossible to split satisfying the conditions.
```

## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/abigail/perl/ch-1.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/adam-russell/perl/ch-1.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/arne-sommer/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/athanasius/perl/ch-1.pl),
[**Bob Lied**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/bob-lied/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/cheok-yin-fung/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/colin-crain/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/dave-jacoby/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/polettix/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/jo-37/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/perlboy1967/perl/ch-1.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/paulo-custodio/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/pete-houston/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/roger-bell-west/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/sgreen/perl/ch-1.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/stuart-little/perl/ch-1.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/wlmb/perl/ch-1.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/wanderdoc/perl/ch-1.pl)


There were 21 working submissions for the first task this past week.

Let's begin with the ambiguities. Or wait, perhaps instead we'll take one step back from that and begin with something made clear: the example of the number 91011 decisively illustrates that the numbers generated don't need to be the same length, as we roll over a boundary in that case from single digit numbers into two digits. So right out of the gate we know we can't just split the number up along a clearly defined pattern, say into single digits to check the differences between. We will need a more complex method to select our breakpoints.

Ok, now to the ambiguous parts. For one, both of the working examples show ascending sequences. However two points can't determine a pattern, per se, only a correspondence. In fact, the directives only specify "difference between ... numbers is always 1". To me this means the sequence can ascend, descend or switch in any combination. It kind of hinges on the diference between a "difference" and maybe a "delta". One is an absolute value, the other a rate of change, and I don't think "difference" here is sufficiently well defined in this context. With this the case, not only can we cross that digit position boundary, but we can cross back again and even hover over it, say in the case of 9109109. Most of the submissions did not see things eye to eye with me on this point, however, so ascension ruled the day.

Treating the sequence as strictly ascending makes each sequence starting from a given value completely deterministic, and this fact worked itself in many ways into the solutions given. One popular method, for instance, was to produce the string from each sequence possibility according to the rules, and see whether any of them matched the input.

Allowing the sequence to rise or fall at any point, on the other hand, did complicate the solutions that implemented this distinction, leading to more looping thorough possibilities. Recursion was a common solution to this search of multiple pathways.

I found the prohibition against starting with 0 unusual but sure, why not, until I understood from the third example we should *not* break the number 10203 into "1" "02" and "03". This makes more sense than my first reading and could perhaps be better rephrased as "no element should have a leading zero". On the other hand I see no reason to exclude 0 itself from the list of possible values, if we allow ourselves to somehow arrive at it.

In a side note, an oddity popped up several times where people noted that the constraint of being greater than or equal to 10 wasn't really necessary. A single digit would fail to be broken up into a sequence, but by defaulting to the original number when a number cannot be broken up we have seemingly allowed a valid sequence to have 1 element, which is hardly an unrealistic call. After all, arrays and lists can have one element. So in a weird logical twist, by failing, a single digit ends up succeeding. Perhaps it is better to think that all numbers processed are "successful", only many can be only broken up into their own unity state. Looked at that way, we are looking for the *longest* sequence we can make.

Further, if we are to allow 0 as a valid element that can be moved to from either downward or upward movement in the line, we don't even need to place any constraints at all on the range of a number. You see, there exists one case for a prefix "-101..." that can be broken up into the sequence (-1, 0, 1, ...). This, and its accompanying degenerate forms, is the only valid way to start with a negative number, but it works in theory, if we chose to implement it:

    -1, -10, -101, -1010, -1012, -10101, -10121, -10123, ...

There are an infinite quantity of such valid numbers, as you can see. We do need to make an exclusion, but it's a simple and obvious one: our input must be a number. The string "-3-1-2", for example, is not a number, nor is "-2-101". So bringing the argument around full-circle, we don't need any restrictions on our input at all. Just make sure it's a number, or our "number theory" becomes "string theory", and that, well that changes everything.

Oh, and yes, I was seemingly the only person to include this possiblity for negative numbers. It was an exciting time; you had to be there.


## ASCENDING only

As it worked out almost all of the entries chose to interpret the directive as to build an ascending sequence. One quality of all such sequences is their deterministic essence: once an initial value is selected, the successive values are fixed.



### PICKING the number APART, using substr()
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/arne-sommer/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/athanasius/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/polettix/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/perlboy1967/perl/ch-1.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/paulo-custodio/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/roger-bell-west/perl/ch-1.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/wanderdoc/perl/ch-1.pl)


[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/perlboy1967/perl/ch-1.pl)

A pattern we see repeatedly is to deconstruct the input number piecemeal using `substr`.

For every possible width for a first value, working upward from a single digit, we take the value of that many digits at the front of the number as our first sequence element. From there we take the remaining string tail, using `substr`, and after incrementing the value look for it at the beginning of that. Rinse and repeat until clean.

Niels uses a regex anchored to the front of the string to match the next value, and if successful sets a position counter to its length to slice off the matched portion for the next iteration.

If we match perfectly to the end of the string we have found success.

```perl
    do {
      my ($startNumber,$l) = (substr($n,0,$len),$len);
      my ($next,$s) = ($startNumber+1);
      while ($s = substr($n,$l) and $s =~ m#^$next#) {
        return 1 if ($' eq '');
        $l += length($next++);
      }
      $len++;
    } while ($len <= ceil(length($n)/2));
```

[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/wanderdoc/perl/ch-1.pl)

The doctor gives us a little twist: after portioning out a possible match for the next number from the remaining string, 1 is subtracted from this to see whether it matches the last previously catalogued value. So here instead of adding 1 to the last value, we subtract 1 from the next. At each juncture a range of digits is examined so rolling over from, say, 2-digit to 3-digit values is not a problem.

```perl
    for my $i ( 1 .. $length / 2 )
    {
         my $copy = $int;

         my @numbers;
         $numbers[0] = substr($copy, 0, $i);
         $copy = substr($copy, $i);
         for my $j ( $i .. $i + 1 )
         {
              while ( substr($copy, 0, $j) - 1 == $numbers[-1] and substr($copy, 0, 1) != 0 )
              {
                   push @numbers, substr($copy, 0, $j);
                   $copy = substr($copy, $j);
                   return join(",",@numbers) unless length($copy);
              }
         }


    }
```

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/athanasius/perl/ch-1.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/athanasius/raku/ch-1.raku)


Athanasius starts with a well thought out refutation to my idea that the difference by one should be an absolute value.

>(2) Let N's digits be grouped as numbers: n0|n1|n2|...; then "the difference
    between two consecutive numbers" is defined as (n1 - n0), (n2 - n1), etc.
    That is, the grouped numbers must *increase* by exactly one from left to
    right; N = 987 cannot be split into 9|8|7, even though successive numbers
    in this grouping might be said to "differ by one."

Fair enough. Me and Abigail seem to be in the minority here, but at least I've got good company. I do believe I will stand by my decision, if only for the aesthetics of the answer.

The parsing between "difference" and "differ" seems to be the crux of the matter, and whether we are using the word mathematically or more generally. But I have to acknowledge before even thinking about a counter argument that this guy clerked for Bishop Alexander at Nicaea. He knows a thing or two about parsing an iota. Those Arians? Never saw it coming.

Considering this I think it prudent to withdraw from further discussion on the matter.

In their solution the monk implements a scheme of matching out sections of the input number portioned out by the chosen size of the initial segment. They note that they can continue to use the initial digit width without error until the value last matched is composed entirely of 9s, at which point the digit width need to be incremented by 1. A very shrewd analysis.

```perl
    DIGITS: for my $digits (1 .. int( $len_N / 2 ))
    {
           @sequence = ();
        my $number0  = substr $N, 0, $digits;
        my $length1  = $digits;
        my $offset   = $digits;
        my $number1;

        while ($offset < $len_N)
        {
            ++$length1  if $number0 =~ / ^ 9+ $ /x;
            next DIGITS if $offset + $length1 > $len_N;

            $number1 = substr $N, $offset, $length1;

            next DIGITS if $number1 - $number0 != 1;

            push @sequence, $number0;

            $offset += $length1;
            $number0 = $number1;
        }

        push @sequence, $number1;

        last DIGITS;
    }
```


### BUILD A SEQUENCE AND JOIN IT, THEN COMPARE
[**Bob Lied**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/bob-lied/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/e-choroba/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/james-smith/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/pete-houston/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/sgreen/perl/ch-1.pl), and
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/stuart-little/perl/ch-1.pl)

One quality of an increasing sequence, as we have noted, it that the values are predetermined. As such, we can work the other way and, given a starting point, construct a string from concatenating the associated sequence values and see whether it matches the input. Again we need to try this for the range of possible start values; 1-digit, 2-digits, etc up to half the input number width.

[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/pete-houston/perl/ch-1.pl)

Pete gives us a clear demonstration of the technique. Nice, clear, sensible variable naming, well spaced and formatted... you get the idea. I like these things. They make my job easier, and my brain happier. We examine incrementing numbers of digits to start the process at each pass, but once we have that kernel value we can just build a loop to add to our string construction. If we meet or exceed the target length we stop adding and compare the result to the input number.

```perl
    for my $power (1 .. $halflen) {
        my $parts = my $target = my $x = substr ($n, 0, $power);
        do {
        	$target .= ++$x;
        	$parts  .= ',' . $x;
        } until $target >= $n;
        if ($target == $n) {
        	print "$parts\n";
        	exit;
        }
    }
```

[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/stuart-little/perl/ch-1.pl)

**additional languages:**
[Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/stuart-little/haskell/ch-1.hs), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/stuart-little/node/ch-1.js), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/stuart-little/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/stuart-little/raku/ch-1.p6)

In contrast to Pete's direct, imperative approach, Stuart comes to the same place in a more circuitous, functional manner. Using a trio of functions, we construct a lists of possible sequences, starting with `inits()`, which generates the list of starting possibilities, with 1 digit, 2, 3 etc. These each get turned into a sequence with enough elements to cover the possibilites. Joining these sequences, we end up grabbing the first of these that match our input. Our method of derivation is different, but overall the method is the same, viewed through a different lens. We build a number of valid strings that *could* work, then see if they fit.

```perl
    sub firstOver($s1,$s2) {
        my @runs = map { my $l = $_; my @run = map { $_ + $s1 } (0..$l); \@run } (0..length($s2));
        return first { length(join "", @{$_}) >= length($s2) } @runs;
    }

    sub inits($s) {
        my @inits=map { substr($s,0,$_) } (1..length $s);
        return \@inits;
    }

    sub consecSplit($s) {
        return first { join("", @{$_}) eq $s } map {firstOver($_,$s)} @{inits($s)};
    }

    my @split=@{consecSplit($ARGV[0])};
```

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/sgreen/perl/ch-1.pl)

At the risk of creating a [self-referential wormhole punching a hole in fabric of space and time itself](https://dev.to/simongreennet/weekly-challenge-116-1mf7), I'm going to simply state: "There's always one..."

Simon has decided that because we have not explicitly excluded real numbers, we're going to bring those into the mix. Ok, fine. If I'm not going to exclude negative numbers, against the clearly stated wishes of the directives, I can hardly fault him for this. Real numbers, with their decimal points bring with them their own special cases.

Fortunately he has commented his fevered efforts, and walks us through it step-by-step.

```perl
    # Try for different lengths of first numbers
  L: for my $length ( 1 .. length($number) ) {

        # Seed the sequence with the number of this length
        my @sequence = ( substr( $number, 0, $length ) );

        # Skip if the last character is the period. This prevents '10.11'
        #  as a solution
        next if $sequence[-1] =~ /\.$/;

        # Keep adding the sequence until we have enough numbers
        while ( length( join( '', @sequence ) ) < length($number) ) {
            push @sequence, $sequence[-1] + 1;

            my $seq = join '', @sequence;

            # Handle edge case where there is a trailing .0 in there
            $sequence[-1] .= $1 if $number =~ /^$seq(\.0+)/;

            # ... but solutions with two dots aren't numbers
            next L if $seq =~ /\..*\./;
        }

        if ( join( '', @sequence ) == $number ) {
            say join ',', @sequence;
            return;
        }
    }

    say $number;
```



### DEMOLISH the number using SUBSTITUTION
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/cheok-yin-fung/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/duncan-c-white/perl/ch-1.pl), and
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/jo-37/perl/ch-1.pl)

What we are doing here is chopping up numbers, surely, but looked at another way we're identifying strings contained within other strings. Perl has it's own side-language just for such tasks, so it seems quite reasonable to suggest that we could use the regular expression engine to help us find an answer.

[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/duncan-c-white/perl/ch-1.pl)

Duncan verifies a sequence constructed from a specific starting width in a novel and quite elegant form. After initially removing and recording the number `$w` digits wide from the leading edge of the input, the sequential values going upwards are matched and removed by a substitution expression. If the entire string is neatly removed we have a winner.

I find this quite similar to the `substr` methods we saw earlier, only the RE engine both matches and removes the sequential numbers as they are found. As I said, elegant.

```perl
    fun splitn_width_w( $w, $n )
    {
        my @x;
        my $next = substr($n,0,$w,'');
        push @x, $next;
        while( length($n) > 0 )
        {
        	$next++;
        	return () unless $n =~ s/^$next//;
        	push @x, $next;
        }
        return @x;
    }
```

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/cheok-yin-fung/perl/ch-1.pl)

We can see the same core logic in CY's solution. Here `$f` is the sequence element being matched.

```perl
    while ($bool_next && $yN ne "") {
        $yN =~ s/^$f//;
        push @arr, $f;
        $f_i = $f+1;

        $bool_next_i = $yN =~ /^$f_i/;

        $bool_next = $bool_next_i;
        $f = $f_i if $bool_next_i;
    }
```

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/jo-37/perl/ch-1.pl)

Ok, while not actually destroying the input number string, Jorg still lets a regular expression do the work for him, matching a number of digits of a given length and then incrementing that value and matching again. This really does closely mirror what we've just seen, only here using the position counter of a global search to keep track of where we are physically in the input. We just need to look, and don't need to touch.

```perl
    sub succ_seq {
        local $_ = shift;
        # As the input is taken as a string, leading zeros must be excluded,
        # since    ++($_ = '01') eq '02'   is true.  Luckily this is a
        # prerequisite in the task.
        die "not valid\n" unless /^[1-9][0-9]+\z/;

        # Try first parts that have half of the string's length at most.
        for my $len (1 .. length() / 2) {
            # Accept any first part having the current length.
            my $part = qr/.{$len}/;
            my @split;
            while (/\G($part)/g) {
                # Collect the matched part and take its successor as the
                # next expected match.
                push @split, ($part = $1)++;

                # If the current match extends to the end of the string, the
                # collected parts represent a solution.
                return \@split if pos() == length();
            }
        }

        # Default:
        [$_];
    }
```


## venture UP AND DOWN
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/abigail/perl/ch-1.pl), and
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/colin-crain/perl/ch-1.pl),

As explained previously the initial directives could be considered to allow an absoute difference of 1 between elements, either rising or descending. This complicates matters as we need to allow a string veer in two potential directions.

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/abigail/perl/ch-1.pl)

**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/abigail/awk/ch-1.awk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/abigail/bash/ch-1.sh), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/abigail/lua/ch-1.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/abigail/node/ch-1.js), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/abigail/python/ch-1.py), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/abigail/ruby/ch-1.rb)

In exploring multiple possibilities, recursion is a good choice. We can initially extract a number of digits from the front of our number, and then taking this value as a base compute values one higher and one lower, recursing with the remaining tail of the string and that value as a target. Abigail uses `index` to see whether the target value is at the front of the input fragment we are handed, and if it is we go around again.

One nice this about this technique is that it doesn't blow up exponentially, even though there are two options, as at most only one path will ever be pursued. A successive value will always be either one more or one less, and never both.

```perl
    sub make_sequence ($string, $start) {
        if ($string eq $start) {
            return [$start]
        }
        if (index ($string, $start) == 0) {
            my $tail = substr $string, length $start;
            my $rest;
            if (($rest = make_sequence ($tail, $start + 1)) ||
                ($rest = make_sequence ($tail, $start - 1))) {
                push  @$rest => $start;
                return $rest;
            }
        }
        return;
    }
```



[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/colin-crain/perl/ch-1.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/colin-crain/raku/ch-1.raku)

For my own solution I set up the two options in a loop with a common, configurable function call. Again either the next value can only be greater or less than the current, never both.

```perl
    sub match_next_segment ($num, $start = 0, $len = 1, $part = []) {
        my $seg = substr $num, $start, $len;
        return if $seg eq '-';
        my @part = ($part->@*, $seg);
        return \@part if $start+$len == length $num;
        for my $next ( $seg+1, $seg-1 ) {
            my $len2 = length $next;
            if ( substr($num, $start+$len, $len2) == $next ) {
                my $sol = match_next_segment($num, $start+$len, $len2, \@part);
                return $sol if defined $sol;
            }
        }
        return undef;
    }
```



## UNIQUE approaches and other THINGS THAT CAUGHT MY EYE
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/adam-russell/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/dave-jacoby/perl/ch-1.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/wlmb/perl/ch-1.pl),

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/adam-russell/perl/ch-1.pl)

Adam hardwires in the cases for when the first number is composed by a single digit, or two digits, or three, or four. While this looks rathery hacky out-of-the gate, we give him a pass because these `get_*()` functions aren't what they first seem: they are genes in a genetic algorithm processor, `AI::Genetic`. He freely admits the gene pool could be constructed by a function generator instead, creating as many cases as a given string could require, but we're quite happy with his efforts given.

Adam does go a little further [in his writeup](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2021/06/13), so interested parties should look there.

```perl
    sub fitness{
        my($genes) = @_;
        my $s = NUMBERS;
        my $fitness = -1 * (length($s) -1);
        my @operands;
        for my $gene (@{$genes}){
            if(my($i) = $gene->() =~ m/get_([1-4])/){
                push @operands, $gene->($s);
                return -1 * NUMBERS if length($s) < $i;
                $s = substr($s, $i) if length($s) >= $i;
            }
        }
        $s = NUMBERS;
        for(my $i = 0; $i < @operands - 1; $i++){
            if(substr($operands[$i], 0, 1) != 0 && substr($operands[$i + 1], 0, 1) != 0){
                if($operands[$i] == ($operands[$i + 1] - 1)){
                    $fitness++;
                    my $chars = length($operands[$i]);
                    $s = substr($s, $chars);
                }
            }
        }
        if($operands[@operands - 1] && $operands[@operands - 2]){
            if($operands[@operands - 1] == ($operands[@operands - 2] + 1)){
                my $chars = length($operands[@operands - 1]);
                $s = substr($s, $chars);
            }
        }
        $fitness *= length($s);
        return $fitness;
    }
```


[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/dave-jacoby/perl/ch-1.pl)

In an unusual twist, Dave takes a very physical approach to recursively dissecting the number. He does this by inserting commas directly into the input string; first at single digit spacing, then two digit, increasing in a loop and recursing, until all the various partitionings are worked through. It's, uh, a different way to think about it. Oh, and yes it does seem to work just fine. Commas. Who'd've thought?

```perl
    sub get_sequence ( $n ) {
        my $t = test($n);
        return $n if $t;

        my $output;
        my @n = split /,/, $n;
        my $flag = 0;
        map { $flag += 1 if $_ > 10 } @n;
        if ( $flag > 0 ) {
            for my $i ( 0 .. length $n ) {
                my $cp = $n;
                my $l = substr( $cp, $i, 1 );
                substr( $cp, $i, 1 ) = ',' . $l;
                next if $cp =~ m{^\,|\,\,|\,$};
                my $x = get_sequence($cp);
                return $x if $x;
            }
        }
        return undef;
    }
```

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/wlmb/perl/ch-1.pl)

Luis gives us a rather complicated method involving iterators, and, well, seems to have answered his own version of the problem. In his world, the segments no longer need to be in the right order. That's certainly a unique take. This, in his own words, make the problem "unnecessarily difficult, but more interesting". So be it, I say.

I'm not sure where to begin with this one. Perhaps I should immediately refer you directly to his [writeup in the subject](https://wlmb.github.io/2021/06/11/PWC116/).

```perl
    my @digits=@ARGV;
    die "Usage ./ch-1.pl digits1 [digits2...]" unless @digits;
    foreach(@digits){
        warn("Expected >=10"), next unless $_>=10;
        my @sequence=find_sequence($_);
        say "Input: $_";
        say "Output: ", @sequence? join ",", @sequence:$_;
    }
    sub find_sequence {
        my $digits=shift;
        my $max=ceil length($digits)/2;
        foreach(reverse 1..$max){ #from large to small starting numbers
        my @result=find_sequence_initial_size($digits, $_);
        return @result if @result;
        }
        return;
    }
    sub find_sequence_initial_size {
        my ($digits, $size)=@_;
        my $first=substr $digits,0,$size,"";
        #Search upwards first and downwards next
        my $result=increasing([$first],[$digits]);
        return @$result if $result;
        return;
    }

    sub increasing {
        my ($current, $rest)=@_;  # current sequence and remaining fragments
        my $next=$current->[-1]+1; # next number in sequence
        my @next=(@$current, $next); # next sequence if succesful
        my $iterator=try_many($next, @$rest); #find $next number in @rest
        while(my $remaining=$iterator->()){ # match?
             my @remaining=@$remaining;
             return [@next] if @remaining==0; #exhausted digits?
         my $attempt=increasing([@next], [@$remaining]); # recurse
         return $attempt if defined $attempt; #finished?
         $attempt=decreasing([@next],[@$remaining]); #grow in opposite dir.
         return $attempt if defined $attempt; #success?
        }
        return decreasing($current, $rest); # backtrack and try opposite dir.
    }

    sub decreasing {
        my ($current, $rest)=@_;  # current sequence and remaining fragments
        my $previous=$current->[0]-1; # previous number in sequence
        return if $previous < 0; # failure. No negatives.
        my @next=($previous, @$current); #next sequence if succesful
        my $iterator=try_many($previous, @$rest);
        while(my $remaining=$iterator->()){ #match?
             my @remaining=@$remaining;
             return [@next] if @remaining==0; #finished
         my $attempt=decreasing([@next], [@remaining]); #recurse
         return $attempt if defined $attempt; #success
        }
        return; #failure
    }

    sub try_many { # returns iterator to search $target within @numbers in all possible ways
        my ($target, @numbers)=@_;
        die "Expected one or more numbers" unless @numbers>=1;
        my $current=0;
        my $iterate=try_one($target, $numbers[$current]);
        sub {
        while($current<@numbers){
            my @next=$iterate->();
            #return array of remaining fragments, filtering out empty strings
            return [grep {$_ ne ""} (@numbers[0..$current-1],@next, @numbers[$current+1..@numbers-1])] if @next;
            ++$current;
            $iterate=try_one($target, $numbers[$current]) if $current < @numbers;
        }
        return;
        }
    }

    sub try_one {
        my ($target, $digits)=@_; # iterator to split target from $digits in all possible ways
        my $length=length $target;
        die "Expect positive length" unless $length > 0;
        my $index=-1; #index of $target in $digits
        sub {
        $index=index $digits, $target, $index+1;
        return unless $index >=0;
        return (substr($digits,0,$index), substr($digits, $index+$length));
        }
    }

```

## Additional Submissions in Guest Languages

**Arne Sommer**

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/arne-sommer/raku/ch-1.raku)

**Flavio Poletti**

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/polettix/raku/ch-1.raku)

**Roger Bell_West**

**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/roger-bell-west/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/roger-bell-west/raku/ch-1.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/roger-bell-west/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/roger-bell-west/rust/ch-1.rs)
---

# TASK 2 {#PWC116TASK2}

# Sum of Squares
*Submitted by: Mohammad Meraj Zia*<br>
You are given a number $N >= 10.

Write a script to find out if the given number $N is such that sum of squares of all digits is a perfect square. Print 1 if it is otherwise 0.

**Example**
```
    Input: $N = 34
    Ouput: 1 as 3^2 + 4^2 => 9 + 16 => 25 => 5^2

    Input: $N = 50
    Output: 1 as 5^2 + 0^2 => 25 + 0 => 25 => 5^2

    Input: $N = 52
    Output: 0 as 5^2 + 2^2 => 25 + 4 => 29
```

## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/abigail/perl/ch-2.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/adam-russell/perl/ch-2.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/arne-sommer/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/athanasius/perl/ch-2.pl),
[**Bob Lied**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/bob-lied/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/cheok-yin-fung/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/colin-crain/perl/ch-2.pl),
[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/cristian-heredia/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/dave-jacoby/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/polettix/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/jaldhar-h-vyas/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/james-smith/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/jo-37/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/laurent-rosenfeld/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/perlboy1967/perl/ch-2.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/paulo-custodio/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/pete-houston/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/roger-bell-west/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/sgreen/perl/ch-2.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/stuart-little/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/ulrich-rieke/perl/ch-2.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/wlmb/perl/ch-2.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/wanderdoc/perl/ch-2.pl)


There were 25 submissions for the second task this past week.

In a rare showing of unity amongst the throng, all of the submissions followed the same general pattern. There were variations in syntax and control flow, within limits, but whether the procedure for checking for squareness was broken off into its own subroutine was inconsequential to the overall big-picture structure.

There were a few cases where after one basic solution was brought other ways to accomplish the goal were presented, but every submitter did start with some variation on the one plan. I'm not sure whether this has happened before, to be honest; certainly not on my watch.

The principle divergence came in the method for determining whether a number was a perfect square, which itself mainly came down to one's degree of uncertainly in processing floating point number variables — checking for an integer value, and such things as implementing safeguards against rounding errors mucking everything up.


## SPLIT SUM for SQUARES
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/abigail/perl/ch-2.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/adam-russell/perl/ch-2.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/arne-sommer/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/athanasius/perl/ch-2.pl),
[**Bob Lied**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/bob-lied/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/cheok-yin-fung/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/colin-crain/perl/ch-2.pl),
[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/cristian-heredia/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/dave-jacoby/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/polettix/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/jaldhar-h-vyas/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/james-smith/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/jo-37/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/laurent-rosenfeld/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/perlboy1967/perl/ch-2.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/paulo-custodio/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/pete-houston/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/roger-bell-west/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/sgreen/perl/ch-2.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/stuart-little/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/ulrich-rieke/perl/ch-2.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/wlmb/perl/ch-2.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/wanderdoc/perl/ch-2.pl)

In the common pattern the number is first `split` into its component digits, then this list is iterated through using either `map` or `for`. Each number is squared and then either immediately summed to a running tally or stored to an intermediate array which is then in turn summed. This is the sum-of-the-digits-squared portion of the festivities

To determine whether a number is a perfect square we saw a variety of methods that we'll have a closer look at. The most common was to check to see whether the square root was an integer by comparison using truncation.

[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/pete-houston/perl/ch-2.pl)

**additional languages:**
[C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/pete-houston/c/ch-2.c), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/pete-houston/lua/ch-2.lua)

Pete will start us off today with a nice succint example of the technique. Chaining the steps of `split`, `map` — applying the square — and `sum` to the resultant list was a very common idiom that we saw over and over; here Pete has added a `sqrt` to extend this. Now that he has the square root of the sum of squares, he can use the `int` function to strip any decimal component and see whether the two numbers remain equal.

```perl
    my $root = sqrt sum map { $_ * $_ } split //, shift;
    print $root == int $root ? "1\n" : "0\n";
```

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/e-choroba/perl/ch-2.pl)

Here's another example from Choroba. It's neat and to-the-point. There are small sytlistic choices in the syntax but the steps are the same.

```perl
    use List::Util qw{ sum };

    sub sum_of_squares {
        my ($n) = @_;
        my $s = sqrt sum(map $_ * $_, split //, $n);
        return $s == int $s ? 1 : 0
    }
```

[**Bob Lied**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/bob-lied/perl/ch-2.pl)

For those who prefer their processing steps nice and discrete, and perhaps discreet as to who they get too close to, we have Bob, who breaks up the chains we've seen into separate steps.

```perl
    sub sumOfSquares($N)
    {
        my @digit = split(//, $N);

        my @square = map { $_ * $_ } @digit;

        my $sum = 0;
        $sum += $_ foreach @square;

        my $root = sqrt($sum);

        return ( $root == int($root) ? 1 : 0 );
    }
```

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/roger-bell-west/perl/ch-2.pl)

**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/roger-bell-west/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/roger-bell-west/raku/ch-2.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/roger-bell-west/ruby/ch-2.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/roger-bell-west/rust/ch-2.rs)

Roger chooses a `for` loop instead of the common `map`, again breaking the processing  down vertically into separate lines.

```perl
    sub sos {
      my $n=shift;
      my $t=0;
      foreach (split '',$n) {
        $t+=$_*$_;
      }
      my $s=int(sqrt($t));
      if ($s*$s==$t) {
        return 1;
      }
      return 0;
    }
```


[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/paulo-custodio/perl/ch-2.pl)

Paulo introduces a few points of variation. First, like Roger, he uses a `for` loop for his iteration. Then he squares his truncated square root to see if it matches the original sum.

```perl
    sub sum_of_squares_is_perfect_square {
        my($num) = @_;
        return 0 if $num < 10;
        my $sum = 0;
        for my $digit (split(//, $num)) {
            $sum += $digit*$digit;
        }
        my $sqrt_int = int(sqrt($sum));
        return $sqrt_int*$sqrt_int==$sum;
    }
```

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/laurent-rosenfeld/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/laurent-rosenfeld/raku/ch-2.raku)

And another slight rearrangement from Laurent. All of these different versions, though, follow the same master plan.

```perl
    sub sum_squares {
        my $n = shift;
        my $sum_sq = 0;
        $sum_sq += $_ ** 2 for split //, $n;
        my $sqrt_int = int sqrt $sum_sq;
        return $sqrt_int ** 2 == $sum_sq ? 1 : 0;
    }
```

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/james-smith/perl/ch-2.pl)

There really doesn't need to be a lot to it.

```perl
    sub sum_square {
      my $sum = 0;                            ## Initialize sum
      $sum += $_*$_ foreach split //, shift;  ## Sum digits..
      return $sum == (int sqrt $sum)**2 || 0; ## Check is squared
    }
```

[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/ulrich-rieke/perl/ch-2.pl)

**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/ulrich-rieke/cpp/ch-2.cpp), [Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/ulrich-rieke/haskell/ch-2.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/ulrich-rieke/raku/ch-2.raku)

Ulrich introduces the idea of using something other than integer truncation to prep his square root for testing. Mathematically we would call this the floor function in this context, and here Ulrich brings one in from the core POSIX module.

I really like the lines of his formatting, and find it particularly easy on the eyes.

```perl
    my @squarenums = map { $_ ** 2 } split (// , $N ) ;
    my $squaresum = sum @squarenums ;
    if ( floor( sqrt( $squaresum ) ) == sqrt( $squaresum ) ) {
      say 1 ;
    }
    else {
      say 0 ;
    }

```

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/wlmb/perl/ch-2.pl)

And here Luis brings another POSIX function,  a proper `round()` , alleviating any need to add a small fraction to smear out floating point errors. I'm really unsure how big a number here would have to be for this case to come up, but I imagine quite large. Or alternately, we're doing our number theory on a Sinclair ZX81 and somehow got Perl to compile. In any case it's good to remember we have a proper `round` right there within reach, in the core distribution. This serves well in a more general purpose way, say if we don't know whether a value will be positive or negative. The POSIX standard say to round half-way values away from 0, so 0.5 goes up to 1 and -0.5 goes down to -1.

```perl
    use POSIX qw(round);
    use v5.12;

    foreach(@ARGV){
        my $x=sqrt(sum0 map {$_**2} split '',$_);
        say "Input: $_\nOutput: ", $x==round($x)?1:0;
    }
```

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/adam-russell/perl/ch-2.pl)

Adam takes this mathematical approach to its logical conclusion, where a number can be an integer if and only if its ceiling function is equal to its floor function. With the POSIX module both of these are available.

```perl
    use POSIX;

    sub sum_squares{
        my($n) = @_;
        my @digits = split(//, $n);
        my $sum = 0;
        map { $sum += ($_ ** 2) } @digits;
        return (ceil(sqrt($sum)) == floor(sqrt($sum)));
    }
```

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/cheok-yin-fung/perl/ch-2.pl)

In contrast, CY breaks far from the model we have made so far, where she determines the integer nature of the square root graphically, not by its value but rather the way it is written. In short, the square root will always be internally stored as a float, or more specifically an `SV_NV`, Perl's data type for this, but Perl is also aware enough to not keep a decimal point attached to a number with no decimal component. Oh, and it is always an `SV_NV`, even when the result is whole. I checked, using `Devel::Peek`. Just to be sure.

This actually makes me wonder about keeping track of precision, that is to say *significant* trailing zeros, in Perl, which is something I've never tried to do. I imagine if I was doing experimental science where this was necessary I'd be using the PDL to, say, calculate

    4.000000 + 0.10 = 4.10

Gotta mind that precision. But I digress. The point here is that if the number is an integer, without a fractional component, Perl will present it as such, and it will not have a decimal place. So we can look for the decimal, and if we don't find one we're whole.

```perl
    sub sum_of_sq {
        my $num = $_[0];
        my $sum = 0;
        for (split "", $num) {
            $sum += $_*$_;
        }
        return $sum;
    }


    sub is_a_square_num {
        my $a = sqrt $_[0];
        return ($a !~ /\./ ? 1 : 0) ;
    }
```

[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/cristian-heredia/perl/ch-2.pl)

**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/cristian-heredia/python/ch-2.py)

Christina also takes this approach, only she looks for only digits anchored at both ends of the regex, leaving no room for a stray decimal.

```perl
    my @arrayA = split(//, $input);
    my $suma = 0;

    foreach(my $i = 0; $i < @arrayA; $i++) {
        $suma += $arrayA[$i]**2
    }

    my $result = sqrt $suma;
    if ($result =~ /^\d+$/) {
        print "Ouput: 1";
    }
    else {
        print "Ouput: 0";
    }
```

[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/jaldhar-h-vyas/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/jaldhar-h-vyas/raku/ch-2.raku)

So, checking a number as integer value by using a regular expression proved to be a somewhat popular method. Jaldhar here is using the `[[:digit:]]` POSIX character class.

For a more in-depth explanation I refer you to the the [perlrecharclass](https://perldoc.perl.org/perlrecharclass#POSIX-Character-Classes) reference. For now we can consider the POSIX class equivalent to `\d`.

```perl
    use English qw/ -no_match_vars /;

    my @digits = map { $_ * $_} split //, $N;
    my $total = 0;
    for my $digit (@digits) {
        $total += $digit;
    }

    say sqrt($total) =~ / ^ [[:digit:]]+ $ /x ? 1 : 0;
```

[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/duncan-c-white/perl/ch-2.pl)

Finally, Duncan brings us something different, a third way, counting upward from 1 until the square of the value meets or exceeds the target sum. It's an effective way to sidestep any reference to floating point ambiguities entirely.

```perl
    fun isperfectsquare( $n )
    {
        for( my $i=0; $i*$i<=$n; $i++ )
        {
        	return 1 if $i*$i==$n;
        }
        return 0;
    }

    fun issumsq( $n )
    {
        my $ssq = sum( map { $_ * $_ } split(//,$n) );
        return 1 if isperfectsquare($ssq);
        return 0;
    }
```


## ABOVE and into the BEYOND, like a FIREWORK on the FOURTH OF JULY

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/athanasius/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/athanasius/raku/ch-2.raku)

The monk starts with an interesting observation:

>Although it is probably intended that $N be an integer, this is not explicitly
stated in the Task Description and is not really necessary. This script accepts
any real number >= 10, and includes any digits following the decimal point
along with the digits that come before. The decimal point (if any) is ignored.
For example:

>    Input:  $N = 14.22
>    Output: 1 as 1^2 + 4^2 + 2^2 + 2^2 = 1 + 16 + 4 + 4 = 25 = 5^2

That is interesting indeed and had never occurred to me to implement. Or anyone else, for that matter. But that is no mind, the example is more than welcome.

For the processing, any decimal point is removed with a filter. Here we have the familiar `split/map/sum` pattern, with a variation in the perfect square validation, where we add a fraction, 0.5, before truncation to make the truncation more correctly match a proper rounding function, in the event some significant floating point error is introduced by the square root function.

```perl
    my @digits  = grep { !/\./ } split //, $N;
    my @squares = map { $_ * $_ } @digits;
    my $sum     = 0;
       $sum    += $_ for @squares;
    my $root    = perfect_square_root( $sum );

    sub perfect_square_root
    {
        my ($N)   = @_;
        my  $root = int( sqrt( $N ) + 0.5 );

        # Return the square root if $N is a perfect square, or undef otherwise

        return ($root * $root) == $N ? $root : undef;
    }
```




[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/abigail/perl/ch-2.pl)

**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/abigail/awk/ch-2.awk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/abigail/bash/ch-2.sh), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/abigail/c/ch-2.c), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/abigail/lua/ch-2.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/abigail/node/ch-2.js), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/abigail/python/ch-2.py), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/abigail/ruby/ch-2.rb)

Abigail always brings some interesting new observations to the table, and here they bring several. First they avoid `split`, instead matching the digits 1 through 9 with a regex character class. Ok. Although not explicitly stated this serves to allow internal decimal points as they will simply be ignored, as will 0s, which are a no-op when squared.

From there a choice of one of four options is given to determine whether a number was a perfect square. The first, checking against the square root, we've seen several times already; here the fraction 0.5 is added to compensate for floating point errors, as we saw with Athanasius.

Second, we count up from one, until we meet or exceed the target square, as brought to as well by Duncan White. Another fine method that avoids any floating point math, which is nice.

In the third way we do a binary search of the number space below the number, refining around a potential square root value. This is much like the previous solution without the sledgehammer.

In the fourth solution all squares are computed up from 1 to 9000. Once these 9000 calculations are done, however, we can validate any number up to 1,000,000 digits long before the sum of the digits squared becomes too large. That's thinking outside the box.

Here are the third and fourth options for your perusal:

```perl
    if ($type == $TYPE_SEARCH) {
        my $root_min = 0;
        my $root_max = 1;
        $root_max *= 2 while $root_max * $root_max < $sum_of_squares;
        while ($root_min < $root_max) {
            my $root_mid = int (($root_min + $root_max) / 2);
            my $square_mid = $root_mid * $root_mid;
            if ($square_mid == $sum_of_squares) {
                $is_square = 1;
                last;
            }
            if ($square_mid < $sum_of_squares) {
                $root_min = $root_mid + 1;
            }
            else {
                $root_max = $root_mid;
            }
        }
    }
    if ($type == $TYPE_PREPROCESS) {
        $is_square = $squares {$sum_of_squares};
    }
```


[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/jo-37/perl/ch-2.pl)

In my so-far long and undeniably many-storied life I have received quite a number of years of training in studio art along the way. Despite the derision this stereotypically gathers from many in the STEM community, this training has served me well, and continues to serve me to this day. Too much knowledge is always better than not enough, and creativity is never a bad thing, as real world problems never quite seem to map to the perfect models we want them to be.

One technique that I find myself coming back to often is the idea of applying constraints on one's toolkit to spurn creative solutions. I have found that experimenting this way will invariably produce new techniques that you can take with you going forward (or learn to stay away from, being another way saying the same thing). These new approaches may come in handy should you find yourself in a situtation in the future where either you don't have your usual kit available, or more subtly and to the point here, to apply the tools you know in new ways to utilise capabilities you didn't at first realize they had. If you learn this now, you don't need to figure it out in a hurry later.

There was a while where Jorg was systematically exploring the PDL, using it to solve every type of problem imaginable. Lately, he seems to be applying a similar tight focus on the module `Math::Prime::Util`, and its some 200+ component functions.

It's good practice, because `Math::Prime::Util` is amazing. Beyond being a collection of routines for prime numbers, as one might reasonably expect, it deals with any number of other common and uncommon number theory ideas, so it's particularly well suited to this challenge. The function `is_prime()` does what you think it would, and `vecsum()` is very much like `sum0`, but promises greater accuracy for very large numbers.

```perl
    use Math::Prime::Util qw(vecsum is_square);

    sub sum_of_squares_is_square {
        local $_ = shift;
        # Input is restricted to N >= 10:
        die "not valid\n" unless /^[1-9][0-9]+\z/;

        # The digits are subject to integer operations only, therefore there
        # are no rounding issues.  Takes a string, not an (internal)
        # integer.
        is_square vecsum map $_ * $_, split //;
    }
```

## Additional Submissions in Guest Languages

[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/arne-sommer/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/arne-sommer/raku/ch-2.raku)

[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/colin-crain/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/colin-crain/raku/ch-2.raku)

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/polettix/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/polettix/raku/ch-2.raku)

[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/stuart-little/perl/ch-2.pl)

**additional languages:**
[Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/stuart-little/haskell/ch-2.hs), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/stuart-little/node/ch-2.js), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/stuart-little/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-116/stuart-little/raku/ch-2.p6)







---

# BLOGS {#PWC116BLOGS}

---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, I somehow continue to maintain my bearings. Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC093BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *READ* these *BLOG* *LINKS*:

**( *don't think, trust your training, you're in the zone, just do it ...* )**


**Aaron Smith**

 * [Perl Weekly Challenge 116 - Aaron Smith](https://aaronreidsmith.github.io/blog/perl-weekly-challenge-116/) ( *Raku* )

**Abigail**

 * [Perl Weekly Challenge 116: Number Sequence](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-116-1.html) ( *Perl* )
 * [Perl Weekly Challenge 116: Sum of Squares](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-116-2.html) ( *Perl* )

**Adam Russell**

 * [Evolving a Sequence with a Functional Genome: The Weekly Challenge 116 — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2021/06/13) ( *Perl* )

**Arne Sommer**

 * [Sequential Squares with Raku and Perl](https://raku-musings.com/sequential-squares.html) ( *Perl & Raku* )

**Colin Crain**

 * [Shhh — We're Squaring Sequet Numbers — Programming Excursions in Perl and Raku](https://colincrain.com/2021/06/12/shhh-were-squaring-sequet-numbers/) ( *Perl & Raku* )

**Dave Jacoby**

 * [Hip To Be Square: Perl Weekly Challenge #116 | Committed to Memory](https://jacoby.github.io/2021/06/08/hip-to-be-square-perl-weekly-challenge-116.html) ( *Perl* )

**Flavio Poletti**

 * [PWC116 - Number Sequence - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/06/09/pwc116-number-sequence/) ( *Perl & Raku* )
 * [PWC116 - Sum of Squares - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/06/10/pwc116-sum-of-squares/) ( *Perl & Raku* )

**Jaldhar H. Vyas**

 * [Perl Weekly Challenge: Week 116](https://www.braincells.com/perl/2021/06/perl_weekly_challenge_week_116.html) ( *Perl & Raku* )

**James Smith**

 * [Perl Weekly Challenge #116](https://github.com/drbaggy/perlweeklychallenge-club/blob/master/challenge-116/james-smith/) ( *Perl* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 116: Number Sequence and Sum of Squares | laurent_r](http://blogs.perl.org/users/laurent_r/2021/06/perl-weekly-challenge-116-number-sequence-and-sum-of-squares.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 116: numbers – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2021/06/08/PerlWeeklyChallenge116.html#task1) ( *Raku* )
 * [Perl Weekly Challenge 116: numbers – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2021/06/08/PerlWeeklyChallenge116.html#task2) ( *Raku* )

**Roger Bell_West**

 * [RogerBW's Blog: Perl Weekly Challenge 116: Square Sequence](https://blog.firedrake.org/archive/2021/06/Perl_Weekly_Challenge_116__Square_Sequence.html) ( *Perl & Raku* )

**Simon Green**

 * [Weekly Challenge 116](https://dev.to/simongreennet/weekly-challenge-116-1mf7) ( *Perl* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 116 – W. Luis Mochán](https://wlmb.github.io/2021/06/11/PWC116/) ( *Perl* )
