---
author:       Colin Crain
date:         2021-02-02T00:00:00
description:  "Colin Crain › Perl Weekly Review #095"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #095"
image:        images/blog/p5-review-challenge-095.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-094/).* )

Welcome to the Perl review for **Week 095** of the Weekly Challenge! Here we will take the time to discuss the  submissions offered by the team, factor out the common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

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

**<big>For context</big>**  before we begin, you may wish to revisit either of the pages for the [**original tasks**](/blog/perl-weekly-challenge-095/) or the summary [**recap**](/blog/recap-challenge-095/) of the challenge. But don't worry, the challenges themselves will be briefly summarized, presented below as we progress from task by task. Oh, and one more thing before we get started:

### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!
I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

**So finally, without further ado...**

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC095TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC095TASK2)   &nbsp;  &nbsp;  &nbsp;       •   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC095BLOGS)    &nbsp;  &nbsp;  &nbsp;       •

---

# TASK 1 {#PWC095TASK1}

# Palindrome Number

*Submitted by: Mohammad S Anwar*

You are given a number $N.

Write a script to figure out if the given number is Palindrome. Print 1 if true otherwise 0.

**Example 1:**
```
    Input: 1221
    Output: 1
```
**Example 2:**
```
    Input: -101
    Output: 0, since -101 and 101- are not the same.
```
**Example 3:**
```
    Input: 90
    Output: 0
```

## about the solutions

There were 28 submissions for the first task this past week, up a bit from the ususal lately. Perhaps the uncomplicated nature of the task boosted the turnout, combined with the similarities to another string-wise palindrome problem in an earlier challenge.

In any account there were a variety of basic methods drawn on by to decide whether or not a given number was a palindrome. There was also a fair bit of analysis as to the differences between numbers and strings in this context.

## REVERSE and a STRING EQ
[**Ali Moradi**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/deadmarshal/perl/ch-1.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/arne-sommer/perl/ch-1.pl),
[**Bartosz Jarzyna**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/brtastic/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/e-choroba/perl/ch-1.pl),
[**Gustavo Chaves**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/gustavo-chaves/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/jo-37/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/laurent-rosenfeld/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/lubos-kolouch/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/perlboy1967/perl/ch-1.pl),
[**Nuno Vieira**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/nunovieira220/perl/ch-1.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/paulo-custodio/perl/ch-1.pl),
[**Pavel Kuptsov**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/pavel_kuptsov/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/pete-houston/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/roger-bell-west/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/sgreen/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/ulrich-rieke/perl/ch-1.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/wlmb/perl/ch-1.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/wanderdoc/perl/ch-1.pl)

By far the largest faction chose to treat the number as a string, reverse it and do a `eq` comparison. This sidesteps any considerations as to what constitutes a number, and for the most part this makes no difference.

[**Ali Moradi**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/deadmarshal/perl/ch-1.pl)

Ali demonstrates the basic idea. There really isn't a whole lot you need.

```perl
    my $N = $ARGV[0];
    say $N eq reverse($N) ? 1 : 0;
```

Don't believe me? There's a dozen more where that came from.

[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/wanderdoc/perl/ch-1.pl)

```perl
    my $rev = reverse $num;
    return ($num eq $rev ) ? 1 : 0;
```

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/laurent-rosenfeld/perl/ch-1.pl)

```perl
    my $num = shift // 1221;
    say "$num: ", $num eq (reverse $num) ? 1 : 0;
```

[**Gustavo Chaves**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/gustavo-chaves/perl/ch-1.pl)

```perl
    say $N eq reverse($N) ? 1 : 0;
```

[**Bartosz Jarzyna**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/brtastic/perl/ch-1.pl)

Bartosz takes the time to make sure the input is a number, using a handy routine from `Scalar::Util`, but the underlying logic remains the same.

```perl
    sub palindrome_number
    {
        my ($number) = @_;

        return 0 unless looks_like_number($number);
        return 0 unless $number eq scalar reverse $number;
        return 1;
    }
```


... I can do this all day you know. Oh, *now* you believe me? Ok then, moving on...

In a slight variation a number of submissions were determined to utilize `reverse` in list context, necessitating a conversion to an intermediate array and back:

[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/paulo-custodio/perl/ch-1.pl)

```perl
    join('', reverse split(//, $N)) eq $N ? 1 : 0;
```

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/roger-bell-west/perl/ch-1.pl)
```perl
    return (join('',reverse split '',$n) eq $n)?1:0;
```

[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/ulrich-rieke/perl/ch-1.pl)

```perl
    return $N eq join( '' , reverse split( // , $N ) ) ;
```

In contrast, Niels was contrarian in insisting his context to be scalar:

[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/perlboy1967/perl/ch-1.pl)

As always, Niels provides us with a well-formatted descriptive output.

```perl
    my $A = shift(@ARGV) // 12210;
    my $B = reverse scalar $A;
    my $C = ($A eq $B);

    printf "Input: %d\n", $A;
    printf "Output: %d%s\n",
           $C,($C ? '' : ", since $A and $B are not the same");
```


## ITERATE over the THINGS
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/athanasius/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/cheok-yin-fung/perl/ch-1.pl),
[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/cristian-heredia/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/polettix/perl/ch-1.pl), and
[**Joel Crosswhite**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/jcrosswh/perl/ch-1.pl)

An alternate way of comparing for symmetry is to look at the digits individually, working inward, comparing those from the beginning to their complement from the end. Using an external iterator as an index, this could be accomplished two ways: either by breaking the number into an array of characters and addressing them that way, or by using the index value to directly examine the digits using `substr`.

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/athanasius/perl/ch-1.pl)

The monk demonstrates the array approach, iterating across the first half of the array and comparing each to its mathematically derived mirror converging from the end.

```perl
    for my $i (0 .. int($#chars / 2))
    {
        if ($chars[$i] ne $chars[$#chars - $i])
        {
            $is_pal = 0;
            last;
        }
    }
```

[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/cristian-heredia/perl/ch-1.pl)

Christina also walks an array, only using a separate decrementing counter to find her complementary element.

```perl
    my $lastField = @array - 1;

    for (my $i = 0; $i<@array; $i++) {
        if ($array[$i] != $array[$lastField]) {
            print "Output: 0\n";
            exit;
        }
        $lastField = $lastField - 1;

    }
```

Using `substr`, of course, we can directly look into the numbers-viewed-as-strings, and so breaking the original apart isn't strictly required.

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/polettix/perl/ch-1.pl)

Flavio demonstrates the technique in a nice compact manner:

```perl
    sub is_palindrome ($s) {
       for my $i (0 .. length($s) / 2 - 1) {
          return 0 if substr($s, $i, 1) ne substr($s, -1 - $i, 1);
       }
       return 1;
    }
```

as does

[**Joel Crosswhite**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/jcrosswh/perl/ch-1.pl)

Joel gives us a separate `is_palindrome()` routine in his `Palindrome.pm` module.
```perl
    printf("%s\n", (Palindrome->is_palindrome($input)) ? 1 : '`');
    foreach my $index (0..int(length($N) / 2)) {
        return 0
            if (substr($N, $index, 1) != substr($N, length($N) - 1 - $index, 1));
    }
```




## SHIFT and POP
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/adam-russell/perl/ch-1.pl) and
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/james-smith/perl/ch-1.pl)

A destructive way to scan the digits without using iterators is to apply `shift` and `pop` on a number transformed into an array. In this way the actual elements can be held up and directly compared.

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/james-smith/perl/ch-1.pl)

James gives us two solutions, the first a string reverse-and-equals style as we saw above, and the second a more numerical method using `shift` and `pop`.

Of note is his use a mathematical expansion to construct his array from successive divisions to the *number*, rather than treating it as a string, which I find a nice touch.

```perl
    sub is_palindrome_array {
      my $n = shift;
      return 0 if $n < 0;
      my @digits  = $n%10;
      push @digits, $n%10 while $n = int ($n/10);
      while( @digits>1 ) {
        return 0 if shift @digits != pop @digits;
      }
      return 1;
    }
```

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/adam-russell/perl/ch-1.pl)

Adam breaks his structure down into two cases — those numbers whose number of digits is evenly divisible by 2, and, well, the others:

```perl
    if(@digits % 2 == 0){
        do {
            my $a = shift @digits;
            my $b = pop @digits;
            return false if $a != $b;
        } while(@digits);
        return true;
    }
    while(@digits != 1){
        my $a = shift @digits;
        my $b = pop @digits;
        return false if $a != $b;
    };
    return true;
```




## use a REGEX
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/abigail/perl/ch-1.pl) and
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/colin-crain/perl/ch-1.pl)

To me it just seemed a natural thing to make a regex to match a palindrome. There is one available in the [perl regular expression tutorial](https://perldoc.perl.org/perlretut),
but here are two others to join the party:

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/abigail/perl/ch-1.pl)

Abigail has given us a recursive definition of a palindrome to guide his regex:

>A recursive definition of a palindrome:
> - Empty, but followed by a digit          (1)
> - A decimal dot, but followed by a digit  (1)
> - A single digit
> - A digit, followed by a palindrome, followed by the same digit

and here is the result:

```perl
    /^(*sr:            # Start a script run
        (?<PAL>        # Start a group named "PAL"
           \.?(?=\d)   # Empty string, or a dot, followed by a digit
         | \d          # Or a single digit
         | (\d)        # Or a digit
           (?&PAL)     # ... followed by a palindrome
           \g{-1}      # ... and the same digit again
        )              # End of the "PAL" group
     )$/x              # End of the script run.
```

The `*sr:`  is a [script run assertion](https://perldoc.perl.org/perlre#Script-Runs) which guarantees that all characters within the expression matched are from the same unicode script. Mixing multiple scripts within a normal word is generally not done, and as such this is most commonly seen in URL homograph spoofing. In those cases where it is ordinary for certain scripts to be intermixed exceptions are made, but those shouldn't apply here to our numbering systems.

I just want to add that I find recursive regular expressions fascinating.

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/colin-crain/perl/ch-1.pl)

For my own solution I took the position that a leading zero is not part of the essential "number nature" of a written representaion, and thus should not be considered in evaluating whether it's a palindrome in base-10. To this end I numify the input string by adding 0 before handing it to a regex. I've rolled the reversing of the capture into a pattern code expression, which is a code evaluation expression where the result is immediately inserted into the regular expression and evaluated as if it were originally written there. Obviously writing code that writes code in this way is a very powerful tool to have in one's kit.

```perl
    my $num = shift @ARGV;
    $num += 0;

    say 1 and exit if $num =~  m/^(.*).?(??{reverse($1)})$/;
    say 0;
```


## a note on the subject of LEADING ZEROS

An oddity in the positional numbering systems that came up a few times (and conspicuously didn't come up in another), is the concept of the leading zero. Although not outright incorrect, the use of leading zeros on positional numbers is meaningless to the numeric identity of what is being represented, and thus is normally removed as spurious — the value being referred to remains the same *number*. In practice on our palindrome tests this has very little effect — 1210 is not palindromic as neither 0121 nor 121 equal the original so whether to consider the zero is moot. But given 0121 what should we do? Or 01210, for that matter?

I don't think there is one correct answer to this conundrum. We are specifically asked about a *number*, not a *string*. As a Perl-specific question this is interesting as well because internally deep within the guts a scalar value can either be a number or a pointer to to a C-string, with the interpreter quietly converting behind the scenes as required. Under exceptional circumstances a scalar can hold a number *and* a string at the same time.

A leading zero is valid in positional numbering, but implicit: those positions contain no value but continue to exist, and are always there. Thus there's generally no reason to record them, and obviously inking in an infinite number of zeros every time one wished to write out a number would render the whole system useless. The zero is unique among the digits as it is not so much a number but more of an idea of absence notated.

Further complicating the issue are cases when leading, and trailing digits behind a decimal, hold numerical meaning, such as preserving significant digits in scientific data. In these cases the extra, explicit nulls are not artifacts of textual convenience but hold real mathematical data.

So ultimately, when we are asking about palindrome numbers using a base-10 positional system, are  are we being asked about a theoretical number or a physical, notational representation of that number? I don't really know. We're working in the hairy interface between number and text and I don't think the line can be so easily drawn.

## UNIQUE approaches and other THINGS THAT CAUGHT MY EYE
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/cheok-yin-fung/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/jo-37/perl/ch-1.pl) and
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/lubos-kolouch/perl/ch-1.pl)


[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/cheok-yin-fung/perl/ch-1.pl)

CY breaks her number into an array of digits, using an iterator to traverse the first half and compare the values to the second, walking in from the end.

```perl
    for my $i (0..int (scalar @digit / 2) ) {
        if ($digit[$i] != $digit[-$i-1]) {$n = undef; last;}
    }
    if ($n) {return 1;} else {return 0;}
```

This is not unlike the technique used by Athanasius, above. However from there she goes well above and beyond, using the underlying recurrence pattern to deduce the *position* of any palindrome found in the sequence:

```perl
    1221 is the 112th palindrome.
```

Nice! Her `order` routine calculates the count:

```perl
    sub order {
        my $a = $_[0];
        my $o;
        if ((length $a) % 2 == 1) {
            my $p = ((length $a) - 1) / 2 ;
            my $hr = substr($a, 0, $p+1);
            $o = 2 * ("9" x $p)
                + ($hr - ("1" . ("0" x ($p)) )) + 1;
        } else {
            my $r = (length $a) / 2 ;
            my $temp = "9". "0" x ( (length $a)/2 - 1 );
            my $temp2 = ( "1". "0" x ( (length $a)/2 - 1 ) ) - 1;
            $o = "9" x ( (length $a)/2 - 1 );
            $o = 2*$o + $temp - $temp2 + substr($a, 0, $r) ;
        }

        $o += 1;   # include "0" in the counting.
        return $o;
    }
```

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/jo-37/perl/ch-1.pl)

Jorg goes the route of reversing the number as a string and checking string equality on it, but transcends the simple case, making a serious attempt to grapple with the vagaries surrounding applying what is essentially a string patterning to a number. What is a number in this context anyway?

As he explains his reasoning:
>The concept of "number palindromes" needs further specifications to be well defined because "palindromic" is a string property and there is no unique string representation of a number.  Following the examples I'll take the decimal representation of a number that has to form a palindrome. Though there seems to be some consensus on considering integer numbers only, *any* numeric value is allowed here.
>
>A string shall be considered as palindromic number, iff the transformation chain
>
>    numify->stringify->reverse->numify->stringify
>
>resembles the input string. (All transformations from a Perl view.)
>
>This sub uses different false return values to signal the failed test:
>- undef for a non-numeric input string
>- the empty string for a non-numeric reversed numified input string
>- zero for a numeric forward and backward value that is not a palindrome
>  number

To this end he constructs a veritable battery of tests to examine every various case he can come up with, many of them quite exotic.

I find it interesting that he and I diverge on the idea of leading zeros, or perhaps it never occurred to him (a perfectly reasonable thing to do; he didn't test fot it). In any case for him the number 0121 is *not* palindromic, and the number 01210 *is*. I would argue the opposite on both counts, as the *number* 0121 is just 121, and the number 01210 would be 1210. But this whole discussion is pretty fringy and strongly dependent on definitions on the input data. As I said elsewhere, I can't see a single  correct  answer for this case and can see it both ways.

But that said he does do some forced numification in his solution:

```perl
    sub palindrome_number ($str) {
        return unless looks_like_number $str;
        my $reverse = reverse $str + 0;
        return '' unless looks_like_number $reverse;

        0 + ($str eq $reverse + 0);
    }
```

[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/lubos-kolouch/perl/ch-1.pl)

Finally, the last submission we will look at to grapple with the idea of leading zeros is Lubos'. In company with Jorg and myself, Lubos gives us yet another variant  on the string reverse method, however choosing to cast *his* input explicitly as an integer:

```perl
    sub is_palindrome {
        my $what = shift;

        # int to cover cases like 00010
        return 1 if int($what) eq reverse int($what);
        return 0;
    }
```

Like I said, more than one way to look at it.

---

<p> &nbsp; </p>
<p> &nbsp; </p>
<p> &nbsp; </p>
<p> &nbsp; </p>

---


# TASK 2 {#PWC095TASK2}

# Demo Stack

*Submitted by: Mohammad S Anwar*

Write a script to demonstrate Stack operations like below:

* push($n) - add $n to the stack
* pop() - remove the top element
* top() - get the top element
* min() - return the minimum element

Example:

```
    my $stack = Stack->new;
    $stack->push(2);
    $stack->push(-1);
    $stack->push(0);
    $stack->pop;       # removes 0
    print $stack->top; # prints -1
    $stack->push(0);
    print $stack->min; # prints -1
```

## about the solutions

There were 24 submissions for the second task this past week. The task proved an unusual challenge to interpret, not the least because the primary functionality of a stack is already rolled into Perl's built-in array data structure. Using `push` and `pop` on a standard Perl array gets you half-way there right out of the box, and several people took this path.

The most popular interpretation held the created Stack to be demonstrated as a defined object with methods; a thing to be held up and examined, even if internally it still used the available core functionality for its operations. Such an object would appear like the example given. Exactly how the object was constructed varied.

Then there were a few of us who seemed to consider that if we're doing this odd task (building a stack from scratch) we should progress as though Perl dynamic arrays didn't already do what we wanted; the spirit of the thing would be to implement the structure without them. Restricting one's toolbox can be a very enlightening creative exercise.

## use a PERL ARRAY
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/abigail/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/laurent-rosenfeld/perl/ch-2.pl), and
[**Pavel Kuptsov**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/pavel_kuptsov/perl/ch-2.pl)

Perl, of course, provides all of the functionality we need for a stack structure, so several people chose this sensible, correct route. If you needed to do this out in the world, this would be the perlish way to go.

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/abigail/perl/ch-2.pl)

Abigail is having none of reinventing the wheel, delivering a fine *demonstration* of stack behavior from the command line. Enter `push 2` and 2 gets pushed on the stack. It's practical and functional.

```perl
    my @stack;
    while (<>) {
        if (/^push\s+(.*)/) {push @stack => $1}
        if (/^pop/)         {pop  @stack}
        if (/^top/)         {say  $stack [-1]  // $ERROR}
        if (/^min/)         {say  min (@stack) // $ERROR}
    }
```

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/laurent-rosenfeld/perl/ch-2.pl)

Laurent uses a simple array for his stack, devising a set of subroutines to enact his functionality, passing in the stack as a reference. He uses the core `push` and `pop`, but implements his own `top` and `minimum` functions.

```perl
    sub top {
        my $stack = shift;
        return undef if is_empty $stack;
        return $stack->[-1];
    }
    sub minimum {  # assuming stack of numeric values
        my $stack = shift;
        return undef if is_empty $stack;
        my $min = $stack->[0];
        for my $item (@$stack) {
            $min = $item if $item < $min;
        }
        return $min;
    }
```

[**Pavel Kuptsov**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/pavel_kuptsov/perl/ch-2.pl)

Pavel similarly uses existing functions and methods, drawing on the core routines and `min` borrowed over from `List::Util`. He reuses the `push` and `pop` names for his subroutines, fully qualifying the internal functions as `CORE::push` and `List::Util::min` to avoid namespace collisions and avoid confusion. `@stack` is a package variable.

```perl
    sub push
    {
      CORE::push @stack, $_[0];
    }

    sub min
    {
      return List::Util::min @stack;
    }
```






















## use a blessed ARRAY OBJECT
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/polettix/perl/ch-2.pl),
[**Gustavo Chaves**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/gustavo-chaves/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/james-smith/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/jo-37/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/perlboy1967/perl/ch-2.pl),
[**Nuno Vieira**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/nunovieira220/perl/ch-2.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/paulo-custodio/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/pete-houston/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/roger-bell-west/perl/ch-2.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/wanderdoc/perl/ch-2.pl)

Given the example, most interpreted the model stack they were building to mean some sort of Stack object. Because the primary functionality is all based on a linear sequence of items, a straight-to-the-point start for an object would be a blessed array.


[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/e-choroba/perl/ch-2.pl)

Here's Choroba with a nice compact demonstration of how straightforward the definition can be.

```perl
    {   package Stack;
        use List::Util;

        sub new  { bless [], $_[0] }
        sub push { push @{ $_[0] }, $_[1] }
        sub top  { $_[0][-1] }
        sub min  { List::Util::min(@{ $_[0] }) }
        sub pop  { die "Can't pop empty stack" unless @{ $_[0] }; pop @{ $_[0] } }
    }
```

All the components are there as methods, with `min` borrowed from `List::Util` and a fatal error should we try and `pop` a stack without anything in it.
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/paulo-custodio/perl/ch-2.pl) applies the same format as well, with short routines on a single line. I believe whether to throw a fatal exception or silently return undef on popping a nonexistent value is ultimately an implementation decision and can go either way, as long as it's well defined.

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/roger-bell-west/perl/ch-2.pl)

Roger lays it out a little differently, but provides the same mechanisms. `min` is again brought over from `List::Util`.

```perl
    package Local::Stack;
    use List::Util;

    sub new {
      my $class=shift;
      my $self=[];
      bless $self,$class;
    }

    sub push {
      my $self=shift;
      my $op=shift;
      push @{$self},$op;
    }

    ...

    sub min {
      my $self=shift;
      if (scalar @{$self} == 0) {
        die "insufficient elements for min\n";
      }
      return List::Util::min(@{$self});
    }
```
This pattern shows up again and again, for example with the submission from
[**Gustavo Chaves**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/gustavo-chaves/perl/ch-2.pl),
which is nearly identical. However small differences arose, such as a hand-made `min` function rather than importing from `List::Util`, as in this example from

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/james-smith/perl/ch-2.pl)

```perl
    sub min {
      my $self = shift;
      return unless @{$self};
      my $min = $self->[0];
      foreach (@{$self}) {
        $min = $_ if $_ < $min;
      }
      return $min;
    }
```

James give us an appropriately named `Stack.pm` module to hold his object. There were no less than three modules using this name among the submissions.

Sometimes additional functions were defined to augment those required. For instance, when importing a `min` from `List::Util`, why not implement a `max` at the same time?

[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/perlboy1967/perl/ch-2.pl)

gives us an example of how easy this can be:

```perl
    package Stack;
    use List::Util;

    sub new {
     my ($class) = @_;

      bless [], $class;
    }

    sub push {
      my ($this, $value) = @_;

      CORE::push(@$this, $value);
    }

    ...

    sub min {
      my ($this) = @_;

      return List::Util::min(@$this);
    }

    sub max {
      my ($this) = @_;

      return List::Util::max(@$this);
    }
```

Other added functions seen included `size`, `is_empty` and even a more assertive `empty` command to just reset and flush the whole thing.

[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/wanderdoc/perl/ch-2.pl)

The doctor demonstrates some of these new features:

```perl
    package MyStack
    {
         use strict;
         use warnings FATAL => qw(all);

         sub new
         {
              my ($class,@data) = @_;
              bless [@data], $class;
         }

         sub push { push @{$_[0]}, $_[1] }
         sub pop  { pop @{$_[0]} }
         sub top  { return ${$_[0]}[-1] }
         sub min
         {
              my $min = ${$_[0]}[0];
              for (@{$_[0]})
              {
                   $min = $_ if $_ < $min;
              }
              return $min;
         }
         sub empty { @{$_[0]} = () }
         sub size { return scalar @{$_[0]} }

         sub print_me { print join("", "<<'", join("' '", @{$_[0]}), "'<<"), $/; }
         1;
    }
```

Notice that warnings are set to fatal so any attempts to pop an undefined value will result in termination. Seems a bit harsh to me, but it's not my call.



[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/polettix/perl/ch-2.pl)

Flavio comes to us with no less than two new packages, a Stack object to implement the desired functionality and a VerboseStack wrapper that knows how to report what's going on below. He then remains busy, providing us with an interactive shell to play around in the sandbox.

The `Stack` itself uses a blessed array as a base, with a number of subroutines to provide the functionality, much as many examples we have seen today. The `VerboseStack`, on the other hand, is a very interesting development. A wrapper for a Stack object that can report on the status of the stack as actions are taken, the VerboseStack adds a few functions, to `echo` the commands given and pretty `print` the contents. All other commands, though, are delegated to the internal Stack object subroutines using `AUTOLOAD`. If an unrecognized method is called on the VerboseStack, internally `$stack->can($mname)` is called on the `Stack` within and if the method exists there a reference to the routine is returned and executed.

`AUTOLOAD` is a feature we don't see too often around here, and it can lead to some messy complexity in object inheritance, but in certain situations it can be very useful.

```perl
    package VerboseStack;
    use 5.024;
    use experimental qw< postderef signatures >;
    sub AUTOLOAD ($self, @as) {
       my ($stack, $echo) = $self->@{qw< stack echo >};
       (my $mname = our $AUTOLOAD) =~ s{\A.*::}{}mxs;
       say "\n$mname @as" if $echo;
       my $method = $stack->can($mname) or die "no method '$mname'\n";
       my @r = wantarray ? $stack->$method(@as) : scalar $stack->$method(@as);
       $self->print;
       return wantarray ? @r : defined(wantarray) ? $r[0] : ();
    }
    sub DESTROY {}
    sub echo ($s) { $s->{echo} = 1 }
    sub new ($pk, @as) { bless {echo => 1, @as, stack => Stack->new}, $pk }
    sub noecho ($s) { $s->{echo} = 0 }
    sub print ($self) {
       my $stack = $self->{stack};
       my ($n, $dump, $siz_ind) = ($stack->size, '', 'empty');
       ($dump, $siz_ind) = ("$stack\n", $n == 1 ? '1 item' : "$n items") if $n;
       print {*STDOUT} "---\n$dump------- ($siz_ind)\n";
    }
    sub stack ($self) { return $self->{stack} }
```

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/jo-37/perl/ch-2.pl)

In an unusual and seemingly unrelated twist, Jorg also brings `AUTOLOAD` into the picture. His approach to delegation is a little different though, defining a `%method` hash of anonymous subroutines to hold his functions. When an unidentified method is called on the `Stack` object, `AUTOLOAD` is called as usual, but Jorg has decided to override the `UNIVERSAL::` object method `can` to locate the relevant key in the `%method` hash and return the coderef to execute.

It's a quite indirect way to go about this, resembling a dispatch table, but as Jorg states:

>Taking this task as an opportunity to practice AUTOLOADing methods and
overriding "can".  Though this is highly flexible and extensible it
comes with some overhead.

The code is so intertwined it becomes difficult to extract just one piece, so here's the whole `Stack` object for examination:

```perl
    package Stack;

    use Carp 'croak';
    use List::Util;

    our ($verbose, @stack, $arg);

    BEGIN {
        # The %method hash maps the name of a method to a subref providing
        # its "base" functionality.  The subs will be called with the
        # variables @stack and $arg set to the current stack and the
        # optional method argument respective.
        my %method = (
            push => sub {push @stack, $arg}, # returns new stack size
            pop => sub {pop @stack},         # returns removed element
            top => sub {$stack[$#stack]},
            min => sub {List::Util::min @stack},
            max => sub {List::Util::max @stack},
            size => sub {@stack},            # returns current stack size
            clear => sub {splice @stack},    # returns top element
        );

        # Wrapping the "base" functionality in an object.  For this purpose
        # override "can" to return an existing or generated $method.  Must
        # be available at compile time.
        sub can ($self, $method) {
            # Retrieve parent methods as well as the defined methods
            # of this class.
            my $can = $self->SUPER::can($method);
            return $can if $can;

            my $call = $method{$method};
            return unless $call;

            # Generate a method to perform the configured call.
            sub ($self, $val=undef) {
                # Provide variables and call method sub.
                local $arg = $val;
                local *stack = $self; # make @$self available as @stack
                my $result = &$call();

                # Benefit from method generation: single code for every
                # method.
                no warnings 'uninitialized';
                say "$method($val): $result" if $verbose;

                $result;
            }
        }
    }

    # Autoload dynamic methods
    our $AUTOLOAD;
    sub AUTOLOAD ($self, @args) {
        my $called = $AUTOLOAD =~ s/.*:://r;
        my $method = $self->can($called);
        croak qq{Can't locate object method "$called" via package "}
            . __PACKAGE__ . '"' unless $method;

        $self->$method(@args);
    }

    # Creates an empty Stack.
    sub new ($class) {
        bless [], $class;
    }
```


## use some OTHER OBJECT thingy...
### like a HASH...
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/arne-sommer/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/athanasius/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/cheok-yin-fung/perl/ch-2.pl), and
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/sgreen/perl/ch-2.pl)

Objects in Perl are almost always blessed hashes — keys naturally correspond to attributes and serve to hold metadata unique to the instance. Here the dynamic data, the stack model itself, is an array value with its own key.

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/athanasius/perl/ch-2.pl)

The monk gives us a thorough work-up of the problem, even making an allowance with a command line switch to either fail silently or throw a fatal exception should we try certain operations on an empty stack. His `Stack.pm` module holds a hash object with the actual stack model an array held under the `{items}` key.

The implementation of `top()` is interesting here. Rather than simply returning the last element of the `items` array, an internal counter attribute is maintained, appropriately named `{top}`. Starting at -1, every time an element is added or removed the counter is adjusted, so that it doubly serves as an index to the last element in the the `items` array. Doing things this way also allows an immediate answer to the number of items in the stack, to determine when it is empty.

```perl
    use Regexp::Common qw( number );

    sub new
    {
        my ($class, $throw) = @_;

        my  %self = ( throw => $throw // 1,
                      top   => -1,
                      items => [] );

        return bless \%self, $class;
    }

    sub push
    {
        my ($self, $item) = @_;

        $item =~ / ^ $RE{num}{real} $ /x or die qq[ERROR: "$item" is not a number];
        push @{ $self->{items} }, $item;

        ++$self->{top};
    }

    sub pop
    {
        my ($self) = @_;
        my  $item;

        if ($self->{top} >= 0)
        {
            $item = pop @{ $self->{items} };
            --$self->{top};
        }
        elsif ($self->{throw})
        {
            die "ERROR: Cannot pop() an empty stack\n";
        }
        return $item;
    }

    sub top
    {
        my ($self) = @_;
        my  $item;

        if ($self->{top} >= 0)
        {
            $item = $self->{items}->[ $self->{top} ];
        }
        elsif ($self->{throw})
        {
            die "ERROR: There is no top() on an empty stack\n";
        }
        return $item;
    }
```

[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/arne-sommer/perl/ch-2.pl)

Arne gives us a proper demonstration in his submission, providing a shell prompt where the user can input commands, such as `push 35`,  `pop` or `min`. The state of the stack can be viewed at any time by typing `all`, which prints an arrow-connected list from bottom to top.

The actual implementation is done within a blessed hash Stack object, in an array stored as `{values}`. There is one little oddity in interpretation I have to bring up, and that is over the meaning of the `top` operation. Defined only as "get the top element" this is, perhaps surprisingly, apparently ambiguous. In any case Arne has deliberately chosen to deliver unto us the *first* element added, what might commonly be considered the "bottom", rather than the *last* element. Relative terms, like left and right, or physical terms applied to abstract ideas are never as well defined as we think they are and always ripe for miscommunication. A physical stack of plates intrinsically has a "top" plate, but a data structure we have skeuomorphically titled a "stack" does not. It's an important thing to remember in communicating ideas.

With this caveat I'm going to let this one go.

```perl
    my $stack = stack->new();

    my $input;

    while (1)
    {
      print 'stack> '; $input = <STDIN>; chomp($input);

      if    ($input =~ /^push\s+(.*)$/)            { $stack->push($_) for split(/\s+/, $1); }
      elsif ($input eq 'pop')                      { $stack->pop; }
      elsif ($input eq 'top')                      { say $stack->top; }
      elsif ($input eq 'min')                      { say $stack->min; }
      elsif ($input eq 'all')                      { say $stack->all; }
      elsif ($input eq 'exit' || $input eq 'quit') { exit; }
    }
```


### or a MODULE...
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/adam-russell/perl/ch-2.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/lubos-kolouch/perl/ch-2.pl) and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/wlmb/perl/ch-2.pl)

The cpan module object frameworks were also represented, as might be expected.

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/adam-russell/perl/ch-2.pl)

Adam draws on `Class::Struct`, which documents itself as able to "declare struct-like datatypes as Perl classes". The actual stack is in a field called `data`, with a pointer to a Perl array (a reference, of course, in Perl, but as we're in the land of C it thought it best to use the language of the locals).

Having the module do the housekeeping makes for a compact design:

```perl
    package StackAdam {
        use boolean;
        use Class::Struct;

        struct(
            data => q/@/
        );

        sub push{
            my($self, $n) = @_;
            push @{$self->data()}, $n;
        }

        sub pop{
            my($self, $n) = @_;
            pop @{$self->data()};
        }

        sub top{
            my($self, $n) = @_;
            @{$self->data()}[@{$self->data()} - 1];
        }

        sub min{
            my($self, $n) = @_;
            my @sorted = sort {$a <=> $b} @{$self->data()};
            return $sorted[0];
        }
        true;
    }
```

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/wlmb/perl/ch-2.pl)

Luis delivers us a fully featured stack demonstration in an interactive shell, with a prompt for command inputs. He creates his masterpiece using the `Moo` framework.

The four required functions apparently proved insufficient to Luis' liking, so he adds a veritable raft of extra functionality: `exch` swaps the two top items; arithmetic operations pop off the two top items, compute and  and push back on the result; a "change sign" operation multiplies the top value by -1; and he even gives us an `inv` <sup>1</sup>/<sub>*x*</sub> function.

```perl
    use Scalar::Util qw(looks_like_number);
    my $s=Stack->new;
    while(<>){
        chomp;
        $s->push($_), next if looks_like_number($_);
        $s->pop, next if lc $_ eq "pop";
        $s->top, next if lc $_ eq "top";
        $s->exch, next if lc $_ eq "exch";
        $s->min, next if lc $_ eq "min";
        $s->max, next if lc $_ eq "max";
        $s->add, next if $_ eq "+";
        $s->sub, next if lc $_ eq "-";
        $s->mul, next if lc $_ eq "*";
        $s->div, next if lc $_ eq "/";
        $s->cs, next if lc $_ eq "cs"; # change sign
        $s->inv, next if lc $_ eq "inv"; # invert
        $s->show, next if lc $_ eq "show";
        die "Unrecognized op";
    }
```

Here are a few example subs to get an idea of the implementation:

```perl
    sub push {
        my $self=shift;
        my $x=shift;
        say "Push:\t$x";
        my $s=$self->_stack;
        push @$s, $x;
        $self->show;
    }
    sub exch {
        my $self=shift;
        my $x=$self->pop;
        my $y=$self->pop;
        say "Exch:\t$x <-> $y";
        $self->push($x);
        $self->push($y);
    }
    sub mul {
        my $self=shift;
        my ($x, $y)=($self->pop,$self->pop);
        my $res=$x*$y;
        say "Mul:\t$x * $y -> $res";
        $self->push($res);
    }
    sub cs {
        my $self=shift;
        my $x=$self->pop;
        my $res=-$x;
        say "CS:\t$x -> $res";
        $self->push($res);
    }
```


It's quite involved, so much so that I'd rather it would default to a usage directive rather than dying on finding an unrecognized input. Overall I find it just the kind of over-the-top ridiculousness that brightens my day around here.


[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/lubos-kolouch/perl/ch-2.pl)

Lubos brings us a full-blown `Moose` offering, which makes the implementation quite compact. The stack itself is held in an array under the `values` attribute. Of notable difference is that the actual stack data is ordered from last to first, so that new items are placed on the list using `unshift` and removed using `shift`. This keeps track of the the top of the stack, as it is always located at index 0.

When Perl creates a new array data structure, internally it uses an `AV` typedef, which holds metadata about the array and a pointer to a C array of scalars (`SV`s) that holds the data. When memory for the array of scalars is allocated, Perl always tries to add a little extra on either end of the underlying C array and notes the bounds at both the beginning and the end. Hence Perl arrays are intrinsically dynamic.

As such, unlike many languages, there is no penalty for using `unshift`, as it only involves assigning to the lower end of this array, into existing memory space, and moving a pointer, `xav_array`.

So keeping the top of the stack at index 0 is arguably not just okay, but a *better* way to do it, as it handles the bookkeeping.

```perl
    package Stack;
    use Moose;
    use List::Util qw/min/;
        has 'values' => (is => 'rw', isa=>'ArrayRef', default=>sub{ [] });

        sub push {
            my $self = shift;
            my $what = shift;
            unshift @{$self->values}, $what;
        }

        sub pop {
            my $self = shift;
            my $what = shift;
            return shift @{$self->values} if @{$self->values};
            return;
        }

        sub top {
            my $self = shift;
            return ${$self->values}[0] if @{$self->values};
            return;
        }

        sub stack_min {
            my $self = shift;
            return min(@{$self->values});
        }
    }
```

## AVOID using an ARRAY at ALL
[**Bartosz Jarzyna**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/brtastic/perl/ch-2.pl) and
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/colin-crain/perl/ch-2.pl)

[**Bartosz Jarzyna**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/brtastic/perl/ch-2.pl)

First, have a look at this:

```perl
    use Scalar::Util qw(refaddr blessed);
```

Bartosz does something really interesting and truly different with both the task and his `Stack` object, which does not keep the items in the stack in an internal array. Rather, on calling `push` to add a new item, a new instance of the `Stack` object itself is created with that item at the top, essentially creating a nested list structure that operates as a linked list. The linkage is implicit to the nested structure and the values are held elsewhere in a lookup hash, keyed on a integer representation of the relevant node reference provided by `Scalar::Util::refaddr()`. The layers of indirection make it complex yet sublime.

Peaking inside with `Data::Dumper` after adding three items you can see the nested structure:

```perl
    $VAR1 = bless(
                do{\(my $o = bless(
                    do{\(my $o = bless(
                        do{\(my $o = bless(
                            do{\(my $o = undef)}, 'Stack' ))}, 'Stack' ))}, 'Stack' ))}, 'Stack' );
```


Here are his `new` and `push` routines, and you can see how the new instances are created.
```perl
    sub new {
        my ($self) = @_;
        my $package = blessed $self || $self;
        my $last = blessed $self ? $self : undef;

        return bless \$last, $package;
    }

    sub push {
        my ($self, $value) = @_;

        my $new = $self->new;
        addval($new, $value);
        $_[0] = $new;
        return;
    }
```

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-095/colin-crain/perl/ch-2.pl)

For my own solution I chose to do things he hard way, as I often do. Given that Perl already has quite capable dynamic arrays with built-in functions to mimic a stack, there seemed little challenge in using those excellent tools to just get the job done and move on. No, that would be too easy by far — too sensible. So instead I pretended those things didn't exist and built my stack as one might do in a lower-level language, using a linked list. On the other hand, I did draw on the `Moo` framework for my object model, because frankly I enjoy using it. As Emerson said: "Consistency is the hobgoblin of small minds".

So after whipping up some simple Moo objects for a `Stack` and each `Node` within it, with each newly added item linking to the previous we can produce all of the functionality required. All we need for bookkeeping is to keep track of the top node.

`push` becomes adding and linking in a new top node. `pop` removes the top node, returning its value, and setting its link to be the new top. `top` returns the value of the top node.

`min` only requires a single traversal from top to bottom, looking at the values at each node and updating a running minimum value. The whole thing is implemented without using an array nor any of the relevant inbuilt functions.

```perl
    sub min {
        my $self = shift;
        my $node = $self->last;
        my $min  = $node->value;
        while ( defined $node->down ) {
            $min = $node->down->value if $node->down->value < $min;
            $node = $node->down;
        }
        return $min;
    }
```

Make no mistake this is not be best way to do this, nor even particularly Perlish. But it is likely to be reasonably efficient and serves as a good study, bringing a new and entirely unrelated meaning to the term "constraint programming".


---

# BLOGS {#PWC095BLOGS}

---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, I somehow continue to maintain my bearings. Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC093BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *READ* these *BLOG* *LINKS*:

**( *don't think, trust your training, you're in the zone, just do it ...* )**


**Aaron Smith**

 * [Perl Weekly Challenge 95 - Aaron Smith](https://aaronreidsmith.github.io/blog/perl-weekly-chellanege-095/) ( *Raku* )

**Abigail**

 * [Perl Weekly Challenge 95, Part 1 &#8211; Abigail&#039;s Programming Blog](https://wp.me/pcxd30-kq) ( *Perl* )
 * [Perl Weekly Challenge 95, Part 2 &#8211; Abigail&#039;s Programming Blog](https://wp.me/pcxd30-ld) ( *Perl* )

**Adam Russell**

 * [Perl Weekly Challenge 095 - Perl - RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2021/01/17) ( *Perl* )
 * [Perl Weekly Challenge 095 - Prolog - RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/prolog/2021/01/17) ( *Prolog* )

**Arne Sommer**

 * [Palindromic Stack with Raku and Perl](https://raku-musings.com/palindromic-stack.html) ( *Perl & Raku* )

**Colin Crain**

 * [Judging Jenga Symmetries &#8211; Programming Excursions in Perl and Raku](https://colincrain.com/2021/01/16/judging-jenga-symmetries/) ( *Perl & Raku* )

**Flavio Poletti**

 * [PWC095 - Palindrome Number - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/01/13/pwc095-palindrome-number/) ( *Perl* )
 * [PWC095 - Demo Stack - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/01/14/pwc095-demo-stack/) ( *Perl* )

**James Smith**

 * [Perl weekly challenge 95 - James Curtis-Smith](http://blogs.perl.org/users/james_curtis-smith/2021/01/perl-weekly-challenge-95.html) ( *Perl* )

**Kang-min Liu**

 * [Solving Perl Weekly Challenge 095 -- Palindrome Number and Stack](https://gugod.org/2021/01/pwc-095-en/) ( *Raku* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 95: Palindrome Numbers and Demo Stack](http://blogs.perl.org/users/laurent_r/2021/01/perl-weekly-challenge-95-palindrome-numbers-and-demo-stack.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 95: palindrome numbers and stacks – Luca Ferrari](https://fluca1978.github.io/2021/01/11/PerlWeeklyChallenge95.html) ( *Raku* )

**Roger Bell_West**

 * [RogerBW&#39;s Blog: Perl Weekly Challenge 95: Palindrome Stack](https://blog.firedrake.org/archive/2021/01/Perl_Weekly_Challenge_95__Palindrome_Stack.html) ( *Perl & Raku* )

**Simon Green**

 * [Weekly Challenge 095](https://dev.to/simongreennet/weekly-challenge-095-2jkl) ( *Perl* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 95 – W. Luis Mochán](https://wlmb.github.io/2021/01/11/PWC95/) ( *Perl* )
