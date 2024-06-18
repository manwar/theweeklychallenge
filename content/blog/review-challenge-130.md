---
author:       Colin Crain
date:         2021-10-03T00:00:00
description:  "Colin Crain › Perl Weekly Review #130"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #130"
image:        images/blog/p5-review-challenge-130.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-129/).* )

Welcome to the Perl review pages for **Week 130** of The Weekly Challenge! Here we will take the time to discuss the  submissions offered up by the team, factor out some common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

---

### Why do we do these challenges?

I suppose any collection of answers to that question would be as wide ranging and varied as the people who choose to join the team. One thing, though, is clear: it's not a competition, and there are no judges, even if there is a "prize" of sorts. About that -- I think of it more as an honorarium periodically awarded to acknowledge the efforts we make towards this strange goal. So there's no determination to find the *fastest*, or the *shortest*, or even, in some abstract way, the *best* way to go about things, although I'm certain the participants have their own aspirations and personal drives. As Perl is such a wonderfully expressive language, this provides quite a bit of fodder to the core idea of TMTOWTDI, producing a gamut of varied techniques and solutions.

Even the tasks themselves are often open to a certain amount of discretionary interpretation. What we end up with is a situation where each participant is producing something in the manner they find the most interesting or satisfying. Some team members focus on carefully crafted complete applications, thoroughly vetting input data and handling every use case they can think up. Others choose instead to apply themselves to the logic of the underlying puzzle and making it work in the most elegant way they can. Some eschew modules they would ordinarily reach for, others embrace them, bringing to light wheels perhaps invented years ago that happen to exactly solve the problem in front of them today.

I've been considering this question for some time and have found one binding commonality between all of us out solving these challenges each week, in that however we normally live our lives, the task in front of us more than likely has nothing to do with any of that. And I think this has great value. We all do what we do, in the real world, and hopefully we do it well. The Weekly Challenge provides us with an opportunity to do something germane to that life yet distinctly different; if we only do the things we already know how to do then we will only do the same things over and over. This is where the "challenge" aspect comes into play.

So we can consider The Weekly Challenge as providing a problem space outside of our comfort zone, as far out from that comfort as we wish to take things. From those reaches we can gather and learn things, pick and choose and bring what we want back into our lives. Personally, I think that's its greatest value of all.

---

Every week there is an enormous global collective effort made by the team, analyzing and creatively coding the submissions, and that effort deserves credit due.

And that's why I'm here, to try and figure out how to do that.

Let's get on with it then, have a look and see what we find.

---

**<big>For context,</big>**  before we begin you may wish to revisit either of the pages for the [**original tasks**](/blog/perl-weekly-challenge-130/) or the summary [**recap**](/blog/recap-challenge-130/) of the challenge. But don't worry, the challenges themselves are repeated and presented below as we progress from task by task.

Oh, and one more thing before we get started:

### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please feel free to email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC130TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC130TASK2)   &nbsp;  &nbsp;  &nbsp;   	•   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC130BLOGS)    &nbsp;  &nbsp;  &nbsp;   	•

---

# TASK 1 {#PWC130TASK1}

# Odd Number
*Submitted by: Mohammad S Anwar*<br>
You are given an array of positive integers, such that all the numbers appear even number of times except one number.

Write a script to find that integer.

**Example 1**
```
    Input: @N = (2, 5, 4, 4, 5, 5, 2)
    Output: 5 as it appears 3 times in the array where as all other numbers 2 and 4 appears exactly twice.
```
**Example 2**
```
    Input: @N = (1, 2, 3, 4, 3, 2, 1, 4, 4)
    Output: 4
```

## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/abigail/perl/ch-1.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/adam-russell/perl/ch-1.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/arne-sommer/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/athanasius/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/cheok-yin-fung/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/dave-jacoby/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/polettix/perl/ch-1.pl),
[**Ian Goodnight**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/iangoodnight/perl/ch-1.pl),
[**Ivan Dimitrov**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/ziruzavar/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/james-smith/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/laurent-rosenfeld/perl/ch-1.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/mattneleigh/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/mohammad-anwar/perl/ch-1.pl),
[**Olivier Delouya**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/olivier-delouya/perl/ch-1.sh),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/pete-houston/perl/ch-1.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/peter-campbell-smith/perl/ch-1.pl),
[**Rich Snyder**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/cybersnyder/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/roger-bell-west/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/sgreen/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/ulrich-rieke/perl/ch-1.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/wlmb/perl/ch-1.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/wanderdoc/perl/ch-1.pl)

There were 24 submissions for the first task this past week. We'll select an random assortment of submissions from the field and get some insight into how the team went about solving the problem.

## a SURVEY of the LANDSCAPE
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/athanasius/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/duncan-c-white/perl/ch-1.pl),
[**Ian Goodnight**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/iangoodnight/perl/ch-1.pl),
[**Ivan Dimitrov**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/ziruzavar/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/laurent-rosenfeld/perl/ch-1.pl),
[**Olivier Delouya**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/olivier-delouya/perl/ch-1.sh),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/pete-houston/perl/ch-1.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/peter-campbell-smith/perl/ch-1.pl),
[**Rich Snyder**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/cybersnyder/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/roger-bell-west/perl/ch-1.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/wlmb/perl/ch-1.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/wanderdoc/perl/ch-1.pl)

As the element selection was based on the frequency of occurrences within the list, a common direction taken was to produce a frequency hash of the incidence. This hashing of items against their quantity is also known as a bag data structure. We saw this enacted in a variety of ways, utilizing the same underlying logic.

A the end, though, an alternate method did unexpectedly pop up, so we didn't have 100% consistency, which was nice from this reviewer's point of view.


[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/peter-campbell-smith/perl/ch-1.pl)

Peter will start us off. After a brief analysis of the problem, he lands on a two-pass solution over the input list: once to construct a histogram hash of array values found against their frequency counts, and a second partial pass over the hash keys to find the first count that is not divisible by two.

The divisibility check is noteworthy as well, using a bitwise AND with 1, which will return true if the last bit is set, or in other words the number is odd.


```perl
    # get $count{$j} == number of instances of $j
    for $j (@N) {
        $count{$j}++;
    }

    # look for the first instance of $count{$j} being odd
    for $j (keys %count) {
        if ($count{$j} & 1) {
        	print qq[The answer is $j\n];
        	last;
        }
    }
```

[**Ivan Dimitrov**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/ziruzavar/perl/ch-1.pl)

We see the the same pattern in the submission from Ivan, in two `foreeach` loops. In the first we create the frequency hash, in the second we search for the odd-man-out.

Perl's autovivification of hash keys would certainly take care of the need to explicitly create a new key with value 1, but then again there's nothing wrong with this, and it always remains a valid option of course. Altering the value of elements that don't, technically, exist yet can be confusing in more complex cases and it does sometimes make more sense to explicitly create them. See Ian's, or Matthew's, submissions below for more examples.

Here Ivan checks for oddness by calculating the frequency count modulo 2 to look for a remainder.

```perl
    sub find_odd{
        my $n = shift;
        my @arr = @$n;
        my %h;

        foreach my $i (@arr){
        	if (exists($h{$i})){
        		$h{$i}++ ;
        	}else{
        		$h{$i} = 1;
        	}
        }
        foreach my $key (keys %h){
        	if ($h{$key} % 2 != 0){
        		return $key;
        	}
        }
    }
```

[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/pete-houston/perl/ch-1.pl)

Pete throws some input data validation into the mix, only allowing through positive integer values. This creates the possibility of a key being an empty string, which, being a string, albeit empty, is a perhaps unexpected yet valid hash key. This empty key needs to be explicitly removed.

```perl
    my %freq;
    # Count up the occurrences of each positive integer
    $freq{$_}++ for map { s/[^0-9]+//g; $_ } @ARGV;
    # Remove the entry for bad data, if present
    delete $freq{''};
    # Extract those integers with odd frequencies
    my @odds = grep { $freq{$_} % 2 } keys %freq;
```

[**Olivier Delouya**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/olivier-delouya/perl/ch-1.sh)

The idea of filtering a histogram by the divisibility of its counts can be implemented in a variety of ways.

Here Oliver reduces the logic to a simple one-liner, using a pair of `foreach` loops, one to create the histogram hash and a second to find those keys with odd values.

```perl
    perl -se "@N=eval($N); $hash{$_}++ foreach(@N); foreach(keys %hash) {if($hash{$_} % 2) {print $_; exit; }} ; " -- -N="(2, 5, 4, 4, 5, 5, 2)"
```

[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/duncan-c-white/perl/ch-1.pl)

Duncan dispatches the algorithm in a simple `map`/`grep` 1-2 combo, compiling a list of odd-count elements to report. If these is only one result it is printed, otherwise the list is joined with commas before being presented. I do like using chains of listwise operators to get the job done, and this is an excellent example.

```perl
    my %freq;
    map { $freq{$_}++ } @ARGV;

    my @odd = grep { $freq{$_} % 2 == 1 } sort keys %freq;

    my $n = @odd;
    if( $n == 1 )
    {
        my $odd = shift @odd;
        say $odd;
    } else
    {
        die "odd-frequency: $n odd-frequency values: ". join(',',@odd) ."\n";
    }

```

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/laurent-rosenfeld/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/laurent-rosenfeld/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 130: Odd Number and Binary Search Tree |aurent_r](http://blogs.perl.org/users/laurent_r/2021/09/perl-weekly-challenge-130-odd-number-and-binary-search-tree.html)

Alternately just joining the list works fine for a list only having one value, as demonstrated here by Laurent.

```perl
    my %histo;
    $histo{$_}++ for (2, 5, 4, 4, 5, 5, 2);
    say join " ", grep { $histo{$_} % 2 } keys %histo;
```

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/wlmb/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 130 – W. Luis Mochán](https://wlmb.github.io/2021/09/15/PWC130/)

Here's yet another simple version from Luis. Should more than one element be presented an odd number of times he concludes that something has gone horribly, horribly wrong, and so reports the error instead of an element.

```perl
    my %repetitions_of;
    map {++$repetitions_of{$_}} @ARGV;
    my @output=grep {$repetitions_of{$_}%2} keys %repetitions_of;
    say "Input: ", join " ", @ARGV;
    say "Output: ", @output==1?$output[0]:"Wrong input";
```

[**Rich Snyder**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/cybersnyder/perl/ch-1.pl)

Rich demonstrates how efficiantly the process can be implemented with a nice, compact solution. There really isn't any more required.

```perl
    my %count;
    foreach (@N) { $count{$_}++; }
    foreach (keys %count) { ($count{$_} % 2) ? print "$_\n" : undef }
```


[**Ian Goodnight**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/iangoodnight/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/iangoodnight/javascript/ch-1.js)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge Club - 130](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/iangoodnight/perl/README.md)

In an interesting twist, Ian delivers us a quite verbose version of the same by-now familiar algorithm in his solution, full of commentary and augmented with a full-on test suite of utilities. Quite a contrast from two lines for two actions.

On the other hand we still go back to those two actions, flushed out in quite a bit of extra detail. To wit:

```perl
    foreach my $entry (@$input_ref) {
      # If entry exists, increment count
      if (exists $mapped{$entry}) {
        $mapped{$entry}++;
        next;
      }
      # Else, initialize count
      $mapped{$entry} = 1;
    }
    # Technically, our challenge states that there will only ever be one odd input
    # count, but, just for fun, we'll design it to return all odd counts in case
    # we get improperly validated input.
    my @odd;
    foreach my $key (keys %mapped) {
      # Iterate through, pushing values with odd counts to our `odd` array
      if ($mapped{$key} % 2 != 0) {
        push(@odd, $key);
      }
    }
    my $result_count = scalar @odd;
    # Handle our possible results:
    if ($result_count == 0) {
      # Tricky input, no correct answer.
      return 'No odd counts found';
    }
    if ($result_count == 1) {
      # Input as expected, return correct answer
      return $odd[0];
    }
```



[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/roger-bell-west/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/roger-bell-west/postscript/ch-1.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/roger-bell-west/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/roger-bell-west/raku/ch-1.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/roger-bell-west/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/roger-bell-west/rust/ch-1.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: Perl Weekly Challenge 130: An Odd Tree](https://blog.firedrake.org/archive/2021/09/Perl_Weekly_Challenge_130__An_Odd_Tree.html)

Roger gives us a novel and quite clever way of implementing the processing in a single pass over the data, by instead of counting the element frequencies simply deleting any hash keys found on a second occurance. This removes any even-number counts and resets the process of each individual value found. After the pass, only odd-number counts will remain in the hash. After all, we don't really care *how* many times an element is presented, only that it is found an odd number of times. Gathering the full count is unnecessary and requires further processing to filter, so why do it?

```perl
    sub on {
      my ($list)=@_;
      my %k;
      foreach my $n (@{$list}) {
        if (exists $k{$n}) {
          delete $k{$n};
        } else {
          $k{$n}=1;
        }
      }
      return (keys %k)[0];
    }
```

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/athanasius/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/athanasius/raku/ch-1.raku)

The monk takes an unusually explicit route for filtering their frequency hash, constructing a second hash of odd results. Along with the usual immediate input validation, not shown, a full gamut of cases is considered and properly addressed.

```perl
    my %dict;
     ++$dict{ $_ } for @N;

    my %odd;

    while (my ($key, $value) = each %dict)
    {
        $odd{ $key } = $value if $value % 2 == 1;
    }

    my $count = scalar keys %odd;

    if    ($count == 0)
    {
        error( 'No entries appear an odd number of times' );
    }
    elsif ($count == 1)
    {
         printf "Output: %s\n", (keys %odd)[ 0 ];
    }
    else
    {
        error( "$count entries appear an odd number of times" );
    }
```

[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/wanderdoc/perl/ch-1.pl)

Finally, the doctor delivers us... something different. In this method, a bit vector is constructed using `vec` to flip bits at specific positions corresponding to the values of the list elements, using the same flip-flop technique we saw earlier when deleting hash keys. In other words each recurrence of a specific value will flip the corresponding bit position from 0 to 1 or 1 back to 0, so only odd-numbered counts will remain set.

To extract the data from the vector we iterate over the range of bits and examine each, in a manner analogous to using `substr` to examine individual characters in a string. If a set bit is found, the corresponding index is printed out.

How nice to be able to conclude with a completely different way of finding the solution.

```perl
    sub find_odd
    {
         my @arr = @_;
         my $max = 0;
         my $str = '';
         for my $num ( @arr )
         {
              vec($str, $num, 1) = vec($str, $num, 1) == 1 ? 0 : 1;
              $max = $num > $max ? $num: $max;

         }
         my @output;
         for my $i ( 0 .. $max )
         {
              push @output, $i if vec($str, $i, 1) == 1;
         }
         return @output;
    }
```


## Blogs and Additional Submissions in Guest Languages for Task 1:

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/abigail/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/abigail/awk/ch-1.awk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/abigail/bash/ch-1.sh), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/abigail/c/ch-1.c), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/abigail/lua/ch-1.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/abigail/node/ch-1.js), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/abigail/python/ch-1.py), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/abigail/ruby/ch-1.rb)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 130: Odd Number](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-130-1.html)


[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/adam-russell/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[These Binary Trees are Odd — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2021/09/19)


[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/arne-sommer/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Graphviz](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/arne-sommer/Graphviz/example1.dot), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/arne-sommer/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[The Odd Tree with Raku and Perl](https://raku-musings.com/odd-tree.html)


[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/dave-jacoby/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[A First Pass at Object::Pad | Committed to Memory](https://jacoby.github.io/perl,oop,corinne/2021/09/08/a-first-pass-at-objectpad.html)


[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/polettix/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/polettix/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC130 - Odd Number - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/09/15/pwc130-odd-number/)


[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/james-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #130](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-130/james-smith)

[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/ulrich-rieke/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/ulrich-rieke/cpp/ch-1.cpp), [Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/ulrich-rieke/haskell/ch-1.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/ulrich-rieke/raku/ch-1.raku)







------------------------------------------






---

# TASK 2 {#PWC130TASK2}

# Binary Search Tree
*Submitted by: Mohammad S Anwar*<br>
You are given a tree.

Write a script to find out if the given tree is Binary Search Tree (BST).

According to wikipedia, the definition of BST:

>A binary search tree is a rooted binary tree, whose internal nodes each store a key (and optionally, an associated value), and each has two distinguished sub-trees, commonly denoted left and right. The tree additionally satisfies the binary search property: the key in each node is greater than or equal to any key stored in the left sub-tree, and less than or equal to any key stored in the right sub-tree. The leaves (final nodes) of the tree contain no key and have no structure to distinguish them from one another.

**Example 1**
```
    Input:
            8
           / \
          5   9
         / \
        4   6

    Output: 1 as the given tree is a BST.
```

**Example 2**
```
    Input:
            5
           / \
          4   7
         / \
        3   6

    Output: 0 as the given tree is a not BST.
```

## about the solutions
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/adam-russell/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/athanasius/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/dave-jacoby/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/polettix/perl/ch-2.pl),
[**Ian Goodnight**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/iangoodnight/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/james-smith/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/laurent-rosenfeld/perl/ch-2.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/mattneleigh/perl/ch-2.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/peter-campbell-smith/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/roger-bell-west/perl/ch-2.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/wlmb/perl/ch-2.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/wanderdoc/perl/ch-2.pl)


There were only 14 submissions for the second task this past week. Because of this we'll have a chance to look at almost all of them, according to my completely arbitrary selection criteria of picking a dozen submissions at random.



## a QUICK SCAN of the HORIZON
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/wlmb/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/polettix/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/e-choroba/perl/ch-2.pl),
[**Ian Goodnight**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/iangoodnight/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/james-smith/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/roger-bell-west/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/duncan-c-white/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/laurent-rosenfeld/perl/ch-2.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/peter-campbell-smith/perl/ch-2.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/mattneleigh/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/athanasius/perl/ch-2.pl), and
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/dave-jacoby/perl/ch-2.pl)

The basic idea that we saw was to validate each individual node of the tree; if the subtree under each node was a valid binary search tree then the larger structure would also satisfy the conditions. This led to a large number of recursive solutions, descending to the lower leaves and working upwards, but that was by no means the only technique we saw.

Implementing the trees themselves was, as always, a sub-problem in its own right, and we saw varied solutions to that one too, from the extremely simple to instances of quite complex objects.


[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/wlmb/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 130 – W. Luis Mochán](https://wlmb.github.io/2021/09/15/PWC130/)

Luis will start us off today with a novel input method, YAML, for his tree, using the `YAML::Tiny` module as a framework. This appears to work quite well for both human readability and data access:

```
        8
       / \
      5   9
     / \
    4   6
```

becomes

```
    v: 8
    l:
      v: 5
      l:
        v: 4
      r:
        v: 6
    r:
      v: 9
```

I think this formatting deserves further attention.

As far as the determination of whether or not we have a proper binary search tree, Luis comes to us with a recursive function that looks down to determine whether the child nodes root a BST, returning a validation check and the lowest and highest values represented. On collapse of the depth-first traversal these high-low values can be used to evaluate the parent node values to see whether the a valid BST state is continued. If a child is not found valid then the process short-circuits and the parent cannot be a binary searchg tree either.

```perl
    use YAML::Tiny;
    $/=''; #slurp
    my $tree=YAML::Tiny->read_string(my $data=<>);
    my ($result)=is_bst($tree->[0]);
    say "Input:\n$data\nOutput: ", $result->[0];
    sub is_bst { # returns [0] on failure, [1, smallest, largest] on success
        my $tree=shift;
        return [1, undef, undef] unless defined $tree; # I consider empty trees as bst
        my $value=$tree->{v};
        die "Malformed tree" unless defined $value;
        my ($left, $right)=map {is_bst($tree->{$_})} qw(l r);
        return [0] unless $left->[0] && $right->[0]; # any children not bst=> not bst
        # set default values to $value
        my ($left_smallest, $left_largest, $right_smallest, $right_largest)
        = map {$_//$value} ($left->[1], $left->[2], $right->[1], $right->[2]);
        return [0] if $left_largest > $value || $right_smallest < $value;
        return [1, $left_smallest, $right_largest];
    }
```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/polettix/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/polettix/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC130 - Binary Search Tree - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/09/16/pwc130-binary-search-tree/)

Flavio, too, gives us an entirely-too-clever recursive implementation based around an anonymous subroutine that calls itself using the `__SUB__` reference token. Names? We don't need names where we're going.

The logic remains the same: if and only if the a child nodes are valid the range of high and low values from each can then be used to determine whether the parent is also valid, and if so that state is returned to be propograted up the chain.

The tree itself is implemented by a chain on nested unblessed hash references.

```perl
    sub check_bst ($root) {
       state $checker = sub ($node) {
          return 1 unless $node;
          my $key = $node->{key};
          my ($lsub, $lmin, $lmax) = __SUB__->($node->{left});
          return 0 unless $lsub;
          ($lmin, $lmax) = ($key, $key - 1) unless defined $lmin;
          my ($rsub, $rmin, $rmax) = __SUB__->($node->{right});
          return 0 unless $rsub;
          ($rmin, $rmax) = ($key + 1, $key) unless defined $rmin;
          return 0 if $key < $lmax || $key > $rmin;
          return (1, $lmin, $rmax);
       };
       return ($checker->($root))[0];
    }

    sub n ($k, $l = undef, $r = undef) {{key => $k, left => $l, right => $r}}
```

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/e-choroba/perl/ch-2.pl)

Choroba designs a proper `Node` object to construct his tree under the `Moo` framework. These nodes contain attributes for left and right child references, along with minimal and maximal subtree values. A `is_bst` method handles the binary search tree validation. Because the `lazy` flag is set for the `subtree_min` and `subtree_max` attributes, these are only computed when required, and a pair of private `_build_subtree_min()` and `_build_subtree_max` constructors are provided for this purpose, that will in turn force construction of any uncalculated child nodes required for their valuation. It's an elegant solution.

```perl
    sub is_bst {
        my ($self) = @_;

        return 0 if $self->has_left  && $self->left->subtree_max  > $self->key
                 || $self->has_right && $self->right->subtree_min < $self->key;

        return (all { $_->is_bst } $self->_children) ? 1 : 0
    }

    sub _children {
        my ($self) = @_;
        my @children;
        push @children, $self->left  if $self->has_left;
        push @children, $self->right if $self->has_right;
        return @children
    }

    sub _build_subtree_min {
        my ($self) = @_;
        my @children = $self->_children;

        return $self->key unless @children;
        return min(map $_->subtree_min, @children)
    }
```

[**Ian Goodnight**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/iangoodnight/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/iangoodnight/javascript/ch-2.js)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge Club - 130](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/iangoodnight/perl/README.md)

Ian delivers us us a thorough and nicely commented recursive algorithm, built on some provided packages, `Binary_tree` and `Binary _node`. An outside function, `is_BST` performs validation on the tree object by traversing the nodes, ascertaining that eachg individual node's value is not less the left child maximum nor greater than the right side's minimum.

Again a test suite is provided, with utilities, along with an elaborate constructor to parse the input, `tree_from_strings()`, which contains the following line:

```perl
    # Shallow copy so we can be destructive without feeling bad
    my @data = @$tree_data[0 .. $#$tree_data];
```

This is good.

>**“I speak for the trees, for the trees have no tongues.”**<br>
> &nbsp;&nbsp;― Dr. Seuss, The Lorax

```perl
    sub is_BST {
      my ($tree, $node, $min, $max) = @_;

        ...

      # Testing conveniences
      my $test = $node->{'data'};
      my $num = $test =~ /^-?\d*\.?\d+$/;
      # exceeds $max.  fail
      if (defined $max) {
        if ($num and $test >= $max) {
          return 0;
        }
        if (not($num) and $test ge $max) {
          return 0;
        }
      }
      # less then $min.  fail
      if (defined $min) {
        if ($num and $test <= $min) {
          return 0;
        }
        if (not($num) and $test le $min) {
          return 0;
        }
      }
      # recurse
      if (
        is_BST($tree, $node->{'left'}, $min, $node->{'data'}) &&
        is_BST($tree, $node->{'right'}, $node->{'data'}, $max)
      ) {
        # pass
        return 1;
      }
      # something unexpected happened, fail for safety
      return 0;
    }
```

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/james-smith/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #130](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-130/james-smith)

James returns to his `BinaryTree.pm` module again this week, which conveniently has an "in-order", LSR, traversal method already available. He applies this to a `flatten()` method, which uses it to create an array representation of the tree from an inorder traversal. If this array is sorted the tree was a binary search tree.

Once the infrastructure is in place, the actual task is quite straightforward, which is marvelous.

from the `BinaryTree` package:

```perl
    sub walk_in {
      my( $self, $fn, $global, $local, $dir ) = @_;
      $self->left->walk_in(  $fn, $global, $local, 'left'  ) if $self->has_left;
      $local = $fn->( $self, $global, $local, $dir||'' );
      $self->right->walk_in( $fn, $global, $local, 'right' ) if $self->has_right;
      return;
    }

    sub flatten {
      my( $self,$dump_fn, $method ) = @_;
      $dump_fn ||= sub { $_[0] };
      $method  = $self->can( 'walk_'.($method||'pre') ) || 'walk';
      my $arrayref = [];
      $self->$method( sub {
        my($node,$global) = @_;
        push @{$global}, $dump_fn->( $node->value );
      }, $arrayref );
      return @{$arrayref};
    }
```

and the validation code, artful in its simplicity:


```perl
    sub is_bst {
      my( $p, @nodes ) = shift->flatten( sub { return $_[0]; }, 'in' );
      ( $nodes[0] < $p ) ? (return 0) : ( $p = shift @nodes ) while @nodes;
      return 1;
    }
```

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/roger-bell-west/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/roger-bell-west/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/roger-bell-west/raku/ch-2.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/roger-bell-west/ruby/ch-2.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/roger-bell-west/rust/ch-2.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: Perl Weekly Challenge 130: An Odd Tree](https://blog.firedrake.org/archive/2021/09/Perl_Weekly_Challenge_130__An_Odd_Tree.html)

Once again Roger inputs and works on his trees in his preferred serialized format, where each node in a theoretical complete tree is assigned a sequential position in an array along a breadth-first traversal. The actual tree is superimposed on this base, with empty node positions simply left unassigned. Roger chooses to simplify things further by assigning these nodes the excluded value 0. This might not always be a valid option, but here it works.

Practically this means the child nodes can be found for any given index *n* at the indices 2*n* + 1 and 2*n* + 2, and so navigating the tree can be done with straightforward arithmetic. Roger can thus check his validity by walking the tree backwards from the furthest leaf node, at the end of the array.

```perl
    sub bst {
      my ($tree)=@_;
      my @limit;
      for (my $s=int(($#{$tree})/2)-1;$s>=0;$s--) {
        my $child=$s*2+1;
        foreach my $sb (0,1) {
          my $ac=$child+$sb;
          unless (defined $limit[$ac]) {
            $limit[$ac]=[$tree->[$ac],$tree->[$ac]];
          }
          if ($sb==0 && $tree->[$s]!=0 && $limit[$ac][1] > $tree->[$s]) {
            return 0;
          }
          if ($sb==1 && $limit[$ac][0] != 0 && $limit[$ac][0] < $tree->[$s]) {
            return 0;
          }
        }
        $limit[$s]=[min($tree->[$s],$limit[$child][0] || $tree->[$s]),max($tree->[$s],$limit[$child+1][1])];
      }
      return 1;
    }
```

[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/duncan-c-white/perl/ch-2.pl)

When evaluating the parameters of a single node to see whether it properly fits into a binary search tree we need the node value and two others: the maximum value contained in the left-child subtree, and the minimum value of the right-child subtree. Duncan abstracts this additional data into a list of constraints that need to be satisfied; the constraints take the form of a string composed of a value and a comparison operation and are parsed apart before validation.

Duncan also includes a [variation of this processing](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/duncan-c-white/perl/ch-2-with-constraintfunctions.pl) where instead of a *list* of constraint-defining strings a *function* is passed around, which is a delightfully higher-order way of going about things.

```perl
    # my $isbst = is_bst( $tree, $constraintfunc );
    #    Determine whether $tree is a BST that obeys $constraintfunc - return
    #    1 iff yes, 0 otherwise.
    #
    fun is_bst( $tree, $constraintfunc )
    {
        my( $kind, @pieces ) = $tree->breakapart();
        return 1 if $kind eq "nil";

        if( $kind eq "leaf" )
        {
        	return $constraintfunc->( $pieces[0] ) ? 1 : 0;
        }

        # node, pieces are: nodeval,l,r
        my( $nodeval, $l, $r ) = @pieces;
        return 0 unless $constraintfunc->( $nodeval );
        return 0 unless is_bst( $l,
        	fun ($v) { return $constraintfunc->( $v ) && $v <= $nodeval } );
        return 0 unless is_bst( $r,
        	fun ($v) { return $constraintfunc->( $v ) && $v >= $nodeval } );
        return 1;
    }


    my $isbst = is_bst( $tree, fun ($v) { return 1 } );
    say $isbst;
```

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/laurent-rosenfeld/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/laurent-rosenfeld/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 130: Odd Number and Binary Search Tree |aurent_r](http://blogs.perl.org/users/laurent_r/2021/09/perl-weekly-challenge-130-odd-number-and-binary-search-tree.html)

Laurent initiates his verification by immediately diving down the left side of his tree to the bottom in a depth-first-traversal, using any appropriately-named routine, `dft()`.

Through careful selection of the traveral sequence and comparison he can perform the validation with a single additional variable, a minimum for the node value to be compared against.

```perl
    sub dft {
        my ($t, $min) = @_;
        my $value = $t->{val};
        my $new_min = $value < $min ? $value : $min ;
        # say " $min $value $new_min";
        if (exists $t->{lc}) {
            # say "%t<lc><val> $min";
            return 0 if $t->{lc}{val} > $value;
            return 0 if $t->{lc}{val} > $min;
            return 0 unless dft($t->{lc}, $new_min);
        }
        if (exists $t->{rc}) {
            # say "%t<rc><val> $max $min";
            return 0 if $t->{rc}{val} < $value;
            return 0 if $t->{rc}{val} > $min;
            return 0 unless dft($t->{rc}, $new_min);
        }
        return 1;
    }
    my %tree1 = (
        val => 8,
        lc => { val => 5,
                lc => {val => 4},
                rc => {val => 6}
              },
        rc => {val => 9}
    );
    #       8
    #      / \
    #     5   9
    #    / \
    #   4   6
    say "tree1: ", dft(\%tree1, 1e9), "\n";
```

[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/peter-campbell-smith/perl/ch-2.pl)

Peter makes the interesting decision to *invert* his tree definition, building a structure with child nodes connected upwards to their parent, with an additional attribute for which side of the relationship is being described, left or right.

The nodes are given labels in a breadth-first manner, and these are iterated through to check each nodes' relationship between its value and that of its parent. By having the parent link already established we can avoid a depth-first recursion and do this processing with a simple iteration.

```perl
    sub check_nodes {

        my ($node_id, $node, $key, $this_node, $parent);

        # loop over nodes
        for $node_id (1 .. $#nodes) {
        	$node = $nodes[$node_id];
        	$key = $node->{key};

        	# need to check against every node back up to the root
        	$this_node = $node;
        	while (1) {
        		$parent = $this_node->{parent};
        		if ($this_node->{side} eq 'L') {
        			is_bad(qq[node $node_id->$key > node $nodes[$parent]->{id}->$nodes[$parent]->{key}])
        				if $key > $nodes[$parent]->{key};
        		} elsif ($this_node->{side} eq 'R') {
        			is_bad(qq[node $node_id->$key < node $nodes[$parent]->{id}->$nodes[$parent]->{key}])
        				if $key < $nodes[$parent]->{key};
        		}
        		last if $parent == 0;
        		$this_node = $nodes[$parent];
        	}
        }
    }
```

[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/mattneleigh/perl/ch-2.pl)

Matthew works out his logic in a particularly structured and methodical manner. Here he outlines his process for the `_BST_verification_recursor()` routine. I think the title of the function says it all:

> *Recurse through a binary tree, to determine if it is a proper Binary Search
Tree (BST)*

> *Takes three arguments:*
> * A ref to a node of the binary tree; it and deeper nodes will be examined
> * The minimum value below which this node will not be considered part of a
>   valid BST
> * The maximum value above which this node will not be considered part of a
>   valid BST

> *Returns:*
> * 1 if the node and all sub-nodes meet the requirements of a BST
> * 0 if the node or any sub-node does not meet the requirements of a BST

```perl
    sub _BST_verification_recursor{
        my $node = shift();
        my $min = shift();
        my $max = shift();

        # If this node is undef, just
        # return a true value
        return(1) unless($node);

        # If the value of this node is out
        # of established bounds, return
        # false
        return(0) if($node->{d} < $min || $node->{d} > $max);

        # Dig deeper to the left and to
        # the right
        return(0) unless(
            _BST_verification_recursor(
                $node->{l}, $min, $node->{d} - 1
            )
        );
        return(0) unless(
            _BST_verification_recursor(
                $node->{r}, $node->{d} + 1, $max
            )
        );

        return(1);

    }
```

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/athanasius/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/athanasius/raku/ch-2.raku)

The monk delivers us his tree from the command line as a pipe-separated string in breadth-first ordering, "8|5|9|4|6", as specified in his `BinTree.pm` module. This can be considered a stringified variant on the serialized array format propounded by Roger that we saw above — I'm also a big fan of this linear format of assigned array indices, for what it's worth. It really is easy to work with.

Once Athanasius' tree structure is input, however, it's instantiated as a nested hash-based object. Traversing it to check its nodes is done by a recursive function `_isBST()` througbh its wrapper `is_bst()`. A pair of minimum and maximum values for the child nodes under it are carried along to mind the comparisons.

```perl
    use POSIX qw( INT_MIN INT_MAX );

    #------------------------------------------------------------------------------
    sub is_bst
    #------------------------------------------------------------------------------
    {
        my ($self) = @_;

        return _isBST( $self->root, INT_MIN, INT_MAX );
    }

    #------------------------------------------------------------------------------
    sub _isBST                                                       # Not a method
    #------------------------------------------------------------------------------
    {
        my ($node, $min, $max) = @_;

        return 1 if !defined $node;
        return 0 if  $node->value < $min || $node->value > $max;

        return _isBST( $node->left,  $min, $node->value - 1 ) &&
               _isBST( $node->right, $node->value + 1, $max );
    }
```

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/dave-jacoby/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[A First Pass at Object::Pad | Committed to Memory](https://jacoby.github.io/perl,oop,corinne/2021/09/08/a-first-pass-at-objectpad.html)

Dave gives us a tree built of Node objects, which is all you really need. Each has a method `is_bst()` that returns either undef or an array of the node values processed so far. At each stage the left and right lists of nodes visited are filtered against the current node value, and if any are determined to have been removed the tree is out-of-order an not a valid binary search tree.

```perl
    # if a node is a leaf, it's balanced
    # otherwise, we get the values from the left and right
    # we then filter them to remove any that would not be
    # in that list if the tree wasn't bst
    # if the arrays aren't of equal size, return undef
    # if the next level of nodes returns undef, return undef
    # ultimate output will either be a sorted list of
    # values or undef, and that's basically true or false
    sub is_bst( $self ) {

        if ( $self->is_leaf ) {
            my $out = [];
            push $out->@*, $self->value;
            return $out;
        }

        my @left;
        my @right;
        if ( defined $self->left ) {
            my $local = $self->left()->is_bst();
            return undef if !defined $local;
            push @left, $local->@*;
        }
        if ( defined $self->right ) {
            my $local = $self->right()->is_bst();
            return undef if !defined $local;
            push @right, $local->@*;
        }
        my @left2  = grep { $_ < $self->value } @left;
        my @right2 = grep { $_ > $self->value } @right;

        return undef if scalar @left != scalar @left2;
        return undef if scalar @right != scalar @right2;
        return [ @left, $self->value, @right ];
    }
```


## Blogs and Additional Submissions in Guest Languages for Task 2:

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/adam-russell/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[These Binary Trees are Odd — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2021/09/19)


------------------------------------------

---

# BLOGS {#PWC130BLOGS}

---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, I somehow continue to maintain my bearings. Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC130BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *READ* these *BLOG* *LINKS*:

**( *don't think, trust your training, you're in the zone, just do it ...* )**


**Abigail**

 * [Perl Weekly Challenge 130: Odd Number](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-130-1.html) ( *Perl* )

**Adam Russell**

 * [These Binary Trees are Odd — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2021/09/19) ( *Perl* )

**Arne Sommer**

 * [The Odd Tree with Raku and Perl](https://raku-musings.com/odd-tree.html) ( *Perl & Raku* )

**Dave Jacoby**

 * [A First Pass at Object::Pad | Committed to Memory](https://jacoby.github.io/perl,oop,corinne/2021/09/08/a-first-pass-at-objectpad.html) ( *Perl* )

**Flavio Poletti**

 * [PWC130 - Odd Number - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/09/15/pwc130-odd-number/) ( *Perl & Raku* )
 * [PWC130 - Binary Search Tree - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/09/16/pwc130-binary-search-tree/) ( *Perl & Raku* )

**Ian Goodnight**

 * [Perl Weekly Challenge Club - 130](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-130/iangoodnight/perl/README.md) ( *Perl* )

**James Smith**

 * [Perl Weekly Challenge #130](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-130/james-smith) ( *Perl* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 130: Odd Number and Binary Search Tree |aurent_r](http://blogs.perl.org/users/laurent_r/2021/09/perl-weekly-challenge-130-odd-number-and-binary-search-tree.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 130: quick – Luca Ferrari – Open Source advocate, humaneing](https://fluca1978.github.io/2021/09/13/PerlWeeklyChallenge130.html) ( *Raku* )

**Roger Bell_West**

 * [RogerBW's Blog: Perl Weekly Challenge 130: An Odd Tree](https://blog.firedrake.org/archive/2021/09/Perl_Weekly_Challenge_130__An_Odd_Tree.html) ( *Perl & Raku* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 130 – W. Luis Mochán](https://wlmb.github.io/2021/09/15/PWC130/) ( *Perl* )
