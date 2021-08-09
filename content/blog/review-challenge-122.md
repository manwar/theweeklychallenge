---
author:       Colin Crain
date:         2021-08-08T00:00:00
description:  "Colin Crain › Perl Weekly Review #122"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #122"
image:        images/blog/p5-review-challenge-122.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-121/).* )

Welcome to the Perl review for **Week 122** of the Weekly Challenge! Here we will take the time to discuss the  submissions offered by the team, factor out the common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

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

**<big>For context</big>**  before we begin, you may wish to revisit either of the pages for the [**original tasks**](/blog/perl-weekly-challenge-122/) or the summary [**recap**](/blog/recap-challenge-122/) of the challenge. But don't worry, the challenges themselves will be briefly summarized, presented below as we progress from task by task. Oh, and one more thing before we get started:

### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

**So finally, without further ado...**

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC122TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC122TASK2)   &nbsp;  &nbsp;  &nbsp;       •   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC122BLOGS)    &nbsp;  &nbsp;  &nbsp;   	•

---

# TASK 1 {#PWC122TASK1}

# Average of Stream
*Submitted by: Mohammad S Anwar*<br>
You are given a stream of numbers, @N.

Write a script to print the average of the stream at every point.

**Example**
```

    Input: @N = (10, 20, 30, 40, 50, 60, 70, 80, 90, ...)
    Output:      10, 15, 20, 25, 30, 35, 40, 45, 50, ...

        Average of first number is 10.
        Average of first 2 numbers (10+20)/2 = 15
        Average of first 3 numbers (10+20+30)/3 = 20
        Average of first 4 numbers (10+20+30+40)/4 = 25 and so on.

```

## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/abigail/perl/ch-1.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/adam-russell/perl/ch-1.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/arne-sommer/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/athanasius/perl/ch-1.pl),
[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/bruce-gray/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/cheok-yin-fung/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/colin-crain/perl/ch-1.pl),
[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/cristian-heredia/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/dave-jacoby/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/polettix/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/jaldhar-h-vyas/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/james-smith/perl/ch-1.pl),
[**Jared Martin**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/jaredor/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/jo-37/perl/ch-1a.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/laurent-rosenfeld/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/lubos-kolouch/perl/ch-1.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/mattneleigh/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/perlboy1967/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/pete-houston/perl/ch-1.pl),
[**Peter Scott**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/peter-scott/perl/ch-1.sh),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/roger-bell-west/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/sgreen/perl/ch-1.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/stuart-little/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/ulrich-rieke/perl/ch-1.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/wlmb/perl/ch-1.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/wanderdoc/perl/ch-1.pl)


There were 28 submissions for the first task this past week.

I might as well start with the elephant in the room:

*"So what's up with that stream thing, anyway?"*

It's not, shall we say — clear — exactly what is expected for input in this task. This is interesting because it essentially opens up the field to make the input as exciting as one may want, from a simple fixed array to any of a number of more dynamic solutions. I like that the first task is generally significantly easier than the second, making the challenges more approachable to the less-experienced members among us, or perhaps the busiest, but I also like it when the phrasing is open enough that more complex interpretations also suggest themselves to those that want them. In this sense referring to a "stream" is ambiguously perfect.

I know laziness is prime virtue in this strange creed we have so fallen under the spell of, but I also feel in our own personal, exploratory pursuits we are free from this bondage to do as we please, as long as we keep up appearances to the outside world. We may *say* we're lazy, but secretly we don't really need to *be* lazy, and leave it to our hubris to presume the others don't notice.

So what strange fruit did this simple word — stream — bear?




## COUNT the elements, SUM the values and take the AVERAGE
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/adam-russell/perl/ch-1.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/arne-sommer/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/athanasius/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/cheok-yin-fung/perl/ch-1.pl),
[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/cristian-heredia/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/duncan-c-white/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/polettix/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/jaldhar-h-vyas/perl/ch-1.pl),
[**Jared Martin**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/jaredor/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/lubos-kolouch/perl/ch-1.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/mattneleigh/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/perlboy1967/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/pete-houston/perl/ch-1.pl),
[**Peter Scott**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/peter-scott/perl/ch-1.sh),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/roger-bell-west/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/sgreen/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/ulrich-rieke/perl/ch-1.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/wlmb/perl/ch-1.pl)

In the simplest form we go about this the most direct way possible: for each element processed from the command line, increment a counter, add it to a running sum, and obtain the average by dividing the sum by the count. That's what an average is, of course, the arithmetic mean value. I feel we're kind of talking in circles here, but sometimes a tautology is just a tautology. This was the most common approach we saw.

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/athanasius/perl/ch-1.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/athanasius/raku/ch-1.raku)

The monk will start us off with a general introduction to the method. We establish a few variables to keep track of the count of elements processed and a running sum, and take the input as an array from the command line.

Iterating over the list, each new element processed is added to the sum and ticks off the counter, and by dividing one with the other a new average is computed.

```perl
    my $sum   = 0;
    my $count = 0;

    for my $n (@N)
    {
        $sum += $n;

        my $average = $sum / ++$count;

        print ', ' if $count > 1;
        print $average;
    }
```

[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/cristian-heredia/perl/ch-1.pl)

**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/cristian-heredia/python/ch-1.py)

Cristina uses a dedicated iterator variable to extract the input list values by index, but the results are the same. The `$sentence` is an output string that lists the averages in sequential order.

```perl
    foreach (my $i = 0; $i <@N; $i++){
        $sum += $N[$i];
        if ($i == 0) {
            $sentence = $sum/$counter;
        }
        else {
            $sentence = $sentence.", ".$sum/$counter;
        }
        $counter++;
    }
    print("Output: $sentence");
```


[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/pete-houston/perl/ch-1.pl)

**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/pete-houston/awk/ch-1.awk)

Pete adds a `map` to perform his looping, producing a minimal solution.

```perl
    my $sum = 0;
    my $num = 1;

    my @avg = map { $sum += $_; $sum/$num++ } @ARGV;
```


[**Peter Scott**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/peter-scott/perl/ch-1.sh)

Ok, I stand corrected: Peter condenses the form even further, into a even shorter proper one-liner. There really isn't much to what we're doing here, after all.

```perl
    #!/bin/sh
    perl -E 'for (@ARGV){$s+=$_; print $s/++$n, ", "} say " ..."' $*
```

[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/mattneleigh/perl/ch-1.pl)

Breaking the reductionist pattern, Matthew presents us with yet another version, built around a C-style `for` loop. This one affixes a sobering metaphysical addendum: "Returns no meaningful value". I imagine we all feel like that sometimes.

```perl
    sub stream_average{

        my $i;
        my $accumulator = 0;

        for($i=0; $i<scalar(@ARG); $i++){
            $accumulator += $ARG[$i];
            print(
                $accumulator / ($i + 1),
                ($i == $#ARG) ? "\n" : ", "
            );
        }

    }
```

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/adam-russell/perl/ch-1.pl)

**additional languages:**
[Prolog](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/adam-russell/prolog/ch-1.p)

Adam adds the unusual technique of using `redo` to rerun the code instance of his `moving_average` subroutine, grabbing the next parameter from the subroutine stack until it's exhausted. Rather than making a new call for every new item processed, perhaps as one would do when processing streamed data, we can load the routine once and change the data out from underneath it.

```perl
    sub moving_average{
        my $n = 0;
        my $sum = 0;
        {
            $n += 1;
            $sum += shift;
            print $sum / $n;
            print ", " if @_;
            redo if @_;
        }
        print "\n";
    }
```

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/cheok-yin-fung/perl/ch-1.pl)

And in a final turn away from existential dread, CY switches things up in an entertaining way. She accepts data from STDIN, presaging visions of streams to come. Run without a dedicated data source, the program sits and waits for new data interactively, with nice verbose report after each new input.

```perl
    $num = <STDIN>;
    while ($num =~ m/$numeric/ ){
        $sum += $num;
        $n++;
        printf "Average of the first $n numbers is %.3f\n", $sum/$n;
        $num = <STDIN>;
    }
```

We saw several examples of this technique, with some providing much more elaborate stream generating functions, both integral and auxiliary. We will have a look into this idea further a little later in the program.

```

    [colincrain@boris:~/Code/PWC/122-Review/TASK1]$  perl 122-1-CheokYinFung-REVIEW.pl
    Keep entering a number and the average of the stream will be printed.
    10
    Average of the first number is 10.000
    20
    Average of the first 2 numbers is 15.000
    30
    Average of the first 3 numbers is 20.000
    23
    Average of the first 4 numbers is 20.750
    42
    Average of the first 5 numbers is 25.000
    3.1415926
    Average of the first 6 numbers is 21.357
    ^C

```


## implicit VARIABLES, COUNTS or SUMS
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/abigail/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/colin-crain/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/laurent-rosenfeld/perl/ch-1.pl), and
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/stuart-little/perl/ch-1.pl)

Comprising a subset of the above solutions where we try to avoid variables if we can. Interesting, as they say, it where you find it.

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/colin-crain/perl/ch-1.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/colin-crain/raku/ch-1.raku)

For my own solution I didn't get adventurous on the input, holding those efforts back for the Raku version. Here I just took the list from the command line and called it a day. However in processing that list I employed the services of `each` on the array, which now delivers index/value tuples. The index portion was used as the counter, as they are closely related, and we let the array do the incrementation.

```perl
    my $sum = 0;
    while ( my ($idx, $val) = each @stream ) {
        $sum += $val;
        $_ = sprintf "%.2f", $sum / ($idx+1);
        s/\.0*$//;
        say "average of first ", $idx+1, " numbers is ", $_;
    }
```

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/laurent-rosenfeld/perl/ch-1.pl)

**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/laurent-rosenfeld/awk/ch-1.awk), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/laurent-rosenfeld/c/ch-1.c), [D](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/laurent-rosenfeld/d/ch-1.d), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/laurent-rosenfeld/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/laurent-rosenfeld/raku/ch-1.raku), [Scala](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/laurent-rosenfeld/scala/ch-1.scala)

Laurent gave us an interesting take on doing away with a running sum by recomputing it at every stage, multiplying out the average by the previous count to arrive at the previous total, and then adding in the new data point. Something something... floating-point numbers... significant digits... I'll let it go. It does remove one variable from the state, only carrying the count and the previous average, which was the intent.

```perl
    my @n = (10, 20, 30, 40, 50, 60, 70, 80, 90, 100);
    my @mvg_avg = ($n[0]);
    for my $i (1..9) {
        $mvg_avg[$i] = ($mvg_avg[$i-1] * $i + $n[$i]) / ($i + 1);
    }
    say "@mvg_avg";
```

[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/stuart-little/perl/ch-1.pl)

**additional languages:**
[Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/stuart-little/haskell/ch-1.hs), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/stuart-little/lua/ch-1.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/stuart-little/node/ch-1.js), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/stuart-little/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/stuart-little/raku/ch-1.raku)

My reservations on compounding error notwithstanding, Stuart employs the same technique in his quite dense approach to the problem. In the first step he uses `zip`, imported from `List::Util` to produce a series of tuples of a 1-based position value paired with the input list value.

Then an elaborate `reduce` function is applied to take the last value from the list in the reduction product, multiply it by the first element in the next tuple minus 1 (the previous count), add the second value of the next tuple (`$b->[1]`) and, after taking the average `push` the result onto the growing `$a` array. This results in an array reference of all the averages, mirroring the input.

It's quite a clever way to get the job done in two listwise functions without side effects.

> **"Because it was there."**<br>
> — George Leigh Mallory

```perl
    use List::Util qw(reduce zip);

    sub runAvg($aref) {
        my @ar = zip [1..scalar @{$aref}], $aref;
        my $res = reduce { my @a = @{$a}; push @a, ($a[-1]*($b->[0]-1)+$b->[1])/$b->[0]; \@a } [0,], @ar;
        shift @{$res};
        return $res;
    }

    say qq!@{${\ do{runAvg(\@ARGV)}}}!;
```



[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/abigail/perl/ch-1.pl)

**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/abigail/awk/ch-1.awk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/abigail/bash/ch-1.sh), [Basic](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/abigail/basic/ch-1.bas), [Bc](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/abigail/bc/ch-1.bc), [Befunge-93](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/abigail/befunge-93/ch-1.bf93), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/abigail/c/ch-1.c), [Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/abigail/go/ch-1.go), [Java](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/abigail/java/ch-1.java), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/abigail/lua/ch-1.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/abigail/node/ch-1.js), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/abigail/pascal/ch-1.p), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/abigail/python/ch-1.py), [R](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/abigail/r/ch-1.r), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/abigail/ruby/ch-1.rb), [Scheme](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/abigail/scheme/ch-1.scm), [Tcl](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/abigail/tcl/ch-1.tcl)

I'm not entirely sure where I stand on shifting boilerplate to the command line to reduce the character count in what qualifies as a script, but I suppose I also find myself unable to care too much about that particular detail either. The result is entertaining so I say so be it; let's plunge right in.

What do we have here? Our "stream" is defined as a file containing one value per line. The `-p` flag requested reads a line and places it in the topic, applying the script to that line and keeping the line number updated in `$.`. The running sum, on the other hand, is stored as the otherwise unused `$;` the subscript separator for multidimensional array emulation, because why not? It's already there and initialized, and what else is it doing? Squat, that's what.

Ok, reality, as is its wont, is a little bit more difficult than that; the `-p` flag runs the script on each new line processed, so a lexical variable will, shall we say, produce unexpected behavior. If the variable is in the symbol table, though, we're fine, so `our $sum` or such would work, should we want to do that instead. Which leads us to a good reason to use something, for example `$;`, that's already there.

In their own words:

>We keep the running sum of the numbers read so far in the variable $;. Each number read will be added to it ($; += $\_); this sum we then divide with $. and assign back to $_, which is then printed due to the -p flag.

```perl
    #
    # Run as: perl -pl ch-1.pl < input-file
    #

    $_=($;+=$_)/$.
```

## OBJECTS and GENERATORS
[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/bruce-gray/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/dave-jacoby/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/e-choroba/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/jo-37/perl/ch-1a.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/wlmb/perl/ch-1.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/wanderdoc/perl/ch-1.pl)

The actual averaging of the values as they accrete proved to be not particularly challenging, on par for a first task. Because of this many members took it upon themselves to focus on implementing some sort of stream to feed the averaging machine they built, concentrating the bulk of their effort over there instead.

There were a variety of approaches we saw that, after quickly dispatching the counting and averaging part of the task, simulated, either directly or indirectly, an external data source producing a steam of numerical data.

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/wlmb/perl/ch-1.pl)

Luis takes his input from STDIN, which delivers the values one-by-one to the topic, `$_`,

```perl
    my $counter=0; # item counter
    my $total=0; # running total
    while(<>){
        chomp;
        ++$counter;
        $total += $_;
        my $average=$total/$counter;
        say "Input: $_ Output: $average";
    }
```

He then produces a few hard-coded examples of stream generators to feed it. Such as the example, a range of multiples of 10:

```perl
    perl -E '$i=1; say 10 * $i++ while $i<10;' | ./ch-1.pl
```

Or cubed values from 1:

```perl
    perl -E '$i=1; say +($i++)**3 while $i<10;' |./ch-1.pl
```

[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/wanderdoc/perl/ch-1.pl)

Here's another version from the doctor; reimagined as one one-liner feeding another through a straw. Or, you know, something like that but maybe not as unsettling.

```perl
    perl -E '$i=1; say 10 * $i++ while $i<10;' | # data source \
    perl -E 'while(<>){chomp; say "Input: ", $_, " Output:", ($T+=$_)/(++$N);}' # running average
```

[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/bruce-gray/perl/ch-1.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/bruce-gray/raku/ch-1.raku)

Bruce brings us a pair of functions, one to generate arithmetic progressions according to a list of given parameters, the other to accept this first function and use the data it produces to create a list of averages. The one function, you might say, is designed to serve the other, and is passed in as a code reference.

```perl
    sub make_arithmetic_generator ( $start, $increment ) {
        my $last = $start - $increment;
        return sub {
            return ( $last += $increment );
        };
    }
    sub running_average_generator ( $code_for_next_input ) {
        my ($sum, $count);
        return sub {
            return ( $sum += $code_for_next_input->() ) / ++$count;
        };
    }
```

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/james-smith/perl/ch-1.pl)

**additional languages:**
[Php](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/james-smith/php/ch-1.php)

James takes the abstraction of a stream a little bit further, establishing a stream-processing getter/setter subroutine that can either take values to populate a stream or return the next value it contains.

In an unusual twist, the `stream_average` routine, because we theoretically have no information on the stream duration, is run under `eval` in a loop to catch errors, specifically as to when the stream terminates.

```perl
    stream( map {$_*10} 1..50 );           ## Push values into stream...

    eval {say stream_average();} until $@; ## Use eval/$@ to repeat until stream dies.

    sub stream {
      state(@stream);
         @_      ? (push @stream,@_)       ## Parameters passed - push to stream
       : @stream ? shift @stream           ## We have entry in stream return it
       :           die;                    ## exhausted stream die....
    }

    sub stream_average {
      ## Use state variables for the total & count;
      state($n,$t);

      ## Take next element and add to total
      ## Increment the count, and return the ratio of the true values
      ## Note we need to do pre-increment rather than
      ## post increment so the incremement is done before use.

      return ($t+=stream)/++$n;
    }
```

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/e-choroba/perl/ch-1.pl)

Choroba then took this idea to its logical conclusion and used `Moo` to implement a `Stream` object framework, with a base class designed to be extended by specific subclasses, and offering up several examples. There's nothing very unusual about the averaging mechanism, so here are several of these `Stream` classes to examine, alongside the base class.

```perl
    {   package Stream;
        use Moo::Role;

        requires qw{ first next_state };

        has state => (is => 'rw', predicate => 1);
        sub next_value {
            my ($self) = @_;
            $self->state($self->has_state
                         ? $self->next_state($self->state) : $self->first);
            return $self->value
        }
        sub value { $_[0]->state }
    }

    {   package Stream::Sequence::Arithmetic;
        use Moo::Role;
        use MooX::Role::Parameterized;

        with 'Stream';
        role {
            my ($params, $mop) = @_;
            $mop->method(first      => sub { $params->{first} });
            $mop->method(next_state => sub { $_[1] + $params->{difference} });
        };
    }

    {   package Stream::Fibonacci;
        use Moo;
        with 'Stream';

        sub first      { [0, 1] }
        sub next_state { [$_[1][1], $_[1][0] + $_[1][1]] }

        around value => sub { $_[1]->state->[-1] }
    }
```



## Additional Submissions in Guest Languages

[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/arne-sommer/perl/ch-1.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/arne-sommer/raku/ch-1.raku)

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/polettix/perl/ch-1.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/polettix/raku/ch-1.raku)

[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/jaldhar-h-vyas/perl/ch-1.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/jaldhar-h-vyas/raku/ch-1.raku)

[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/lubos-kolouch/perl/ch-1.pl)

**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/lubos-kolouch/python/ch-1.py)

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/roger-bell-west/perl/ch-1.pl)

**additional languages:**
[Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/roger-bell-west/postscript/ch-1.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/roger-bell-west/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/roger-bell-west/raku/ch-1.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/roger-bell-west/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/roger-bell-west/rust/ch-1.rs)

[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/ulrich-rieke/perl/ch-1.pl)

**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/ulrich-rieke/cpp/ch-1.cpp), [Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/ulrich-rieke/haskell/ch-1.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/ulrich-rieke/raku/ch-1.raku)



------------------------------------------






---

# TASK 2 {#PWC122TASK2}

# Basketball Points
*Submitted by: Mohammad S Anwar*<br>
You are given a score $S.

You can win basketball points e.g. 1 point, 2 points and 3 points.

Write a script to find out the different ways you can score $S.

**Example**

```

    Input: $S = 4
    Output: 1 1 1 1
            1 1 2
            1 2 1
            1 3
            2 1 1
            2 2
            3 1

    Input: $S = 5
    Output: 1 1 1 1 1
            1 1 1 2
            1 1 2 1
            1 1 3
            1 2 1 1
            1 2 2
            1 3 1
            2 1 1 1
            2 1 2
            2 2 1
            2 3
            3 1 1
            3 2

```

## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/abigail/perl/ch-2.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/adam-russell/perl/ch-2.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/arne-sommer/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/athanasius/perl/ch-2.pl),
[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/bruce-gray/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/cheok-yin-fung/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/colin-crain/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/dave-jacoby/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/polettix/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/jaldhar-h-vyas/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/james-smith/perl/ch-2.pl),
[**Jared Martin**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/jaredor/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/jo-37/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/laurent-rosenfeld/perl/ch-2.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/lubos-kolouch/perl/ch-2.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/mattneleigh/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/perlboy1967/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/pete-houston/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/roger-bell-west/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/sgreen/perl/ch-2.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/stuart-little/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/ulrich-rieke/perl/ch-2.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/wlmb/perl/ch-2.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/wanderdoc/perl/ch-2.pl)


There were 26 submissions for the second task this past week.

several people noted the similarities to "Find possible paths", challenge 117, or "climb stairs", challenge 112. Well, after issuing more than 248 tasks (some early challenges had an optional third task) there are bound to be self-similarities popping up everywhere as we poke around the various problem spaces. I myself worked it as a problem of partitions, oops, no *compositions* — being *ordered* partitions — which was a different mathematical abstraction for what amounts to the same stuff everyone else was talking about. Only Jorg shared this view with me, and he took a very different approach.

I found one of the upshots of all this is getting a really interesting overview of a large number of ways to mathematically and computationally approach the same end: the requested list of lists.

In its most essential form, we need to take lists of partial sums and keep adding 1s, 2s and 3s to them until they sum up correctly. In practice, there were a multitude of ways to get there. We could even count the ways, and the ways to rearrange the process steps... You get the idea.




## DEPTH-FIRST RECURSION
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/arne-sommer/perl/ch-2.pl),
[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/bruce-gray/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/dave-jacoby/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/e-choroba/perl/ch-2.pl),
[**Jared Martin**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/jaredor/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/laurent-rosenfeld/perl/ch-2.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/mattneleigh/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/perlboy1967/perl/ch-2.pl), and
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/sgreen/perl/ch-2.pl)

A recursive, depth-first approach to finding compositions was a good choice, and a fan favorite. One practical benefit of proceeding this way was allowing completed solutions to be output once completed rather than kept, improving memory requirements.

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/sgreen/perl/ch-2.pl)

Simon starts us off with a fine example of depth-first recursive search. The two parameters passed are the sum to be totaled to and a growing partial solution. At each cycle through the new values 1, 2, and 3 are added to new versions ot the partial and the function is called again with the new list and the previous total minus the new value.

The base case is when the remaining total goes to less than 3, when the last point score to make up the final difference is added and the solution printed. The way the sums are augmented, a solution ending with 3 will always have parallel solutions requiring a 2 and a 1 to complete, so in the end all compositions are covered.

```perl
    sub _score {
        my ( $remaining, $these_shots ) = @_;

        if ( $remaining <= 3 ) {
            # Display this score
            say join ' ', @$these_shots, $remaining;
        }

        foreach my $shot ( 1, 2, 3 ) {
            # Call the recursive function again
            _score( $remaining - $shot, [ @$these_shots, $shot ] ) if $remaining > $shot;
        }
    }
```

[**Jared Martin**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/jaredor/perl/ch-2.pl)
Jared wraps his algorithm in an additional loop to gather the solutions in a list before presenting them. Rather than being passed around by reference, the partial solutions are returned, constructing the complete configuration as the recursion collapses.

```perl
    sub main_algo {

        my @bb_points = (1, 2, 3);

        my $target = $_[0];
        my @scores = ();
        if ($target > 0) {
            for my $bb_pnt (@bb_points) {
                if ($bb_pnt < $target) {
                    for my $partial (@{&main_algo($target - $bb_pnt)}) {
                        push @scores, [ $bb_pnt, @{$partial} ];
                    }
                } elsif ($bb_pnt == $target) {
                    push @scores, [ $bb_pnt, ];
                }
                # Could use an "else last" here if @bb_points is assumed to
                # always be ascending sort and you want to save a cycle or two.
            }
        }
        return \@scores;
    }
```

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/laurent-rosenfeld/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/laurent-rosenfeld/raku/ch-2.raku)

Instead of decreasing the target sum at each cycle Laurent adds the latest value to a running total before recursing, with a base case of matching the original target.

```perl
    sub find_dist  {
        my ($sum, @seq) = @_;
        for my $i (@vals) {
            my $new_sum = $sum + $i;
            # if $new_sum > $target, then we don't
            # need to test other values of @vals and
            # can use return instead of next
            # since these values are in ascending order
            return if $new_sum > $target;
            my @new_seq = (@seq, $i);
            if ($new_sum == $target) {
                say "@new_seq";
                return;
            } else {
                find_dist($new_sum, @new_seq);
            }
        }
    }
```


### ... and a DIFFERENT SORT of RECURSION

[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/lubos-kolouch/perl/ch-2.pl)

**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/lubos-kolouch/python/ch-2.py)

A different form of recursion gave the function a choice of actions: to either plunge in depth-first, adding 1s until the desired value is met, or alternately increment the last value, using a system of carrying much like what we saw in CY's sequence without 11s, from PWC 119. Essentially we create a unique kernel backfilled with 1s, then increment that value according to a set of rules to create related combinations

```perl
    sub iterate {

        my ($arr, $target_sum) = @_;
        my $arr_sum = sum(@$arr) || 0;

        if ($arr_sum == $target_sum) {
            print "*********** SCORE: ";
            say join " ", @$arr;
            $iter_count++;
        }

        return if $arr_sum >= $target_sum;

        # expand the array and try again
        my @new_arr = @$arr;
        push @new_arr, 1;
        print join " ", @$arr;
        print " > ";
        say join " ", @new_arr;
        iterate((\@new_arr, $target_sum));

        # cannot expand, try increasing the last point
        my @new_arr = @$arr;
        if ( (@new_arr) and ($new_arr[-1] < $target_sum) and ($new_arr[-1] < 3) ) {
            $new_arr[-1]++;
            print join " ", @$arr;
            print " ^ ";
            say join " ", @new_arr;
            iterate((\@new_arr, $target_sum));
        }

    }
```



## ITERATION ON A QUEUE
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/adam-russell/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/colin-crain/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/roger-bell-west/perl/ch-2.pl), and
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/stuart-little/perl/ch-2.pl)

By keeping a list of partial lists, we can keep adding 1s, 2s, and 3s to each member, expanding the possible point configurations, until we arrive at the correct sum. By shifting a configuration off a queue, creating new lists from it and replacing them back on the other end if they remain unfinished we can continue this until all possible combinations have been developed. As we will see in Adam's submission, there's nothing uniquely inherent to a queue data structure required to make this method work, but that form does provide a handy framework for systematically adding new point score options in each position when building up solutions.

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/roger-bell-west/perl/ch-2.pl)

**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/roger-bell-west/python/ch-2.py), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/roger-bell-west/ruby/ch-2.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/roger-bell-west/rust/ch-2.rs)

Roger refers to this as his "standard loop search pattern". His implementation is short and precise. Notice his method of only adding additional point scores that keep the sum below the total.

```perl
    sub bp {
      my $n=shift;
      my @o;
      my @p=([]);
      while (my $s=pop @p) {
        my $t=sum0(@{$s});
        if ($t==$n) {
          push @o,$s;
        } else {
          foreach my $i (1..min(3,$n-$t)) {
            push @p,[@{$s},$i];
          }
        }
      }
      @o=reverse @o;
      return \@o;
    }
```

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/colin-crain/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/colin-crain/raku/ch-2.raku)

In my own version I always add each possibility and then decide to add it back to the queue, add is to a list of solutions, or do nothing further with a solution that has exceeded its bounds.

```perl
    my @points = ( 1, 2, 3 );

    my @queue = map { [$_] } grep { $_ <= $score } (1..3);
    my @parts;

    while ( my $seq = shift @queue ) {
        for my $next (  @points ) {
            my $sum = sum $seq->@*, $next;
            if ( $sum <= $score ) {
                $sum == $score ? push @parts, [$seq->@*, $next]
                               : push @queue, [$seq->@*, $next] ;
            }
        }
    }
    say "$_->@*" for @parts;
```

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/adam-russell/perl/ch-2.pl)

**additional languages:**
[Prolog](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/adam-russell/prolog/ch-2.p)

As mentioned earlier, Adam performs what is essentially the same operation slightly differently. Here he keeps his partial solutions stringified as keys in an hash, which is then progressively iterated over using `keys`. After a new score is added to a partial solution it's evaluated and either abandoned for being over, moved to temporary hash if it's under, or moved to a list of solutions if its just right.

Of note each time `keys` is called an new temporary list is made to to instantiate the loop, and adding elements to the hash will not change this list. So even if we add the newly extended partials back to the original `%points` hash the progression will continue systematically, item by item, the same as a queue without actually being that structure. Granted this behavior is not obvious, but it will work just fine. In other regards additional point scores are added one at a time in each configuration just as we've seen in the previous examples, augmenting each partial list until the desired sum is reached.

Adam also brings us another tidbit, a different way to sum the values, using `pack` and `unpack`.

With all this discussion of late on those two functions I knew it was only a matter of time before we saw this curious method of producing a `sum` function. Here in prefixing the unpack template with `%`, as in `"%32I*"` we are requesting, in this case a 32-bit checksum of the integers produced by the previous `pack` operation, which is computed by summing the values and returning the sum. It's fast, too, nearly as much so as the `List::Util` XS `sum` routine. Neat, huh?

```perl
    sub basketball_points{
        my($total) = @_;
        my %points;
        my @valid_points;
        $points{"1"} = "1";
        $points{"2"} = "2";
        $points{"3"} = "3";
        while((keys %points) > 0){
            my %updated_points = ();
            for my $points (keys %points){
                my @points = split(/,/, $points);
                for my $point (1 .. 3){
                    my $point_sum = unpack("%32I*", pack("I*",  (@points, $point)));
                    push @valid_points, [@points, $point] if $point_sum == $total;
                    $updated_points{join(",", (@points, $point))} = $point_sum if $point_sum < $total;
                }
            }
            %points = %updated_points;
        }
        return @valid_points;
    }
```



## THE TRIBONACCI SEQUENCE
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/abigail/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/james-smith/perl/ch-2.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/wlmb/perl/ch-2.pl)

In direct analogy to the 2-component recurrence relation of the Fibonacci sequence,

**F**(*n*) = **F**(*n*-1) + **F**(*n*-2)

what is known as the *tribonacci* recurrence relation is based on the *three* previous values in the sequence:

**T**(*n*) = **T**(*n*-1) + **T**(*n*-2) + **T**(*n*-3)

In this instance the actions differ slightly, with a constant, one of the three possible scores required to bring the sum back to equality, added to each list from the earlier sequence sets at each recalculation. The new lists all then become members of the current sequence set, with no arithmetic operations. However the *quantities* of the lists at every step does precisely follow the formula above, which we can therefore use to calculate just how large our sets of values grow.

Which, in fact, is quite large, with only 40 points already having 23,837,527,729 configurations.

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/abigail/perl/ch-2.pl)

**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/abigail/awk/ch-2.awk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/abigail/bash/ch-2.sh), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/abigail/c/ch-2.c), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/abigail/lua/ch-2.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/abigail/node/ch-2.js), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/abigail/python/ch-2.py), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/abigail/ruby/ch-2.rb)

Abigail presents us with a remarkably concise solution based around the recurrence relation of the Tribonacci sequence. As they have been so kind as to provide a commentary of their method, I'll let them explain it themselves.

> $s [n] will contain the possible ways to get to a score of n - 2:
>
> * `$s [0]` is empty, as there is no way to get to a score of -2 <br>
> * `$s [1]` is empty, as there is no way to get to a score of -1 <br>
> * `$s [2]` contains the empty string, as there is only one way to get to a score of 0 (not scoring).
>
> To calculate $s [k], k > 2, we take the union of:
>
> * The scores from `$s [k - 1]`, prepended by "1"; <br>
> * the scores from `$s [k - 2]`, prepended by "2"; <br>
> * the scores from `$s [k - 3]`, prepended by "3"; <br>

Here is the implementation in all its compact glory. But then again, it's only as big as it need to be, and no more.

```perl
    my @s = ([], [], [""]);
    map {push @s => [map {my $s = $_; map {"$s $_"} @{$s [-$s]}} 1 .. 3]} 1 .. <>;
    say for @{$s [-1]}
```

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/wlmb/perl/ch-2.pl)

You can see the same pattern in Luis' code, adding an additional element to each member of a previous value's solutions. No summing is required as we already know the result through comprehensive bookkeeping. Notice Luis memoizes his `points` routine, resulting in a substantial speedup.

```perl
    use Memoize;
    memoize( "points" );

    foreach ( @ARGV ){
        say "Input: $_\nOutput:\n\t", join "\n\t", map { join " ", @$_ } points( $_ );
    }
    sub points{
        my $s = shift;
        return (  )    if $s <= 0;
        # Append a 1, 2 or 3 point throw to the previous points
        my @result = ( ( map { my @x = @$_; push @x, 1; [@x] } points( $s - 1 ) ),
                       ( map { my @x = @$_; push @x, 2; [@x] } points( $s - 2 ) ),
                       ( map { my @x = @$_; push @x, 3; [@x] } points( $s - 3 ) ) );
        push @result, [$s] i f $s <= 3;
            return @result;
    }
```


## MULTISET PERMUTATIONS
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/athanasius/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/polettix/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/jaldhar-h-vyas/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/pete-houston/perl/ch-2.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/wanderdoc/perl/ch-2.pl)

In the field of combinatorics, as I mentioned when I first came in, the requested result is technically known as the restricted compositions of the value, with a maximum value of 3. This is an ordered set of all possible configurations of the integers 1, 2 and 3 that sum to the value, which make the idea similar to integer partitions, with the added requirement that the order of the integers matter in the distinct solutions.

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/polettix/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/polettix/raku/ch-2.raku)

Flavio reuses several pieces of code he'd previously constructed in his example. First he gives us `int_sums_iterator($S, 3)` which will produce the integer *partitions* of a number, with a maximum partition size of 3. Partitions, though, are defined to be distinct without specific ordering; that is the partitions are multisets, with repetition allowed, but any multiset with all of the same elements as another is considered the same.

In compositions, however, the orderings are themselves distinct, and {1,1,2} is no longer the same as {1,2,1}. So he brings out a second routine, `permutations_iterator(items => $arrangement)` to construct all permutations of each partition, producing all combinations of points yielding the desired total score.

```perl
    sub basketball_points ($S) {
       # $isi keeps track of iterating through all partitions of the
       # input integer $S with 1, 2, or 3
       my $isi = int_sums_iterator($S, 3);

       # $pi allows iterating through all partitions of a specific
       # partition of $S. %seen allows filtering out duplicates.
       my ($pi, %seen);

       return sub {
          while ('necessary') {
             if (!$pi) { # no more permutations? Start next cycle
                # if $isi->() does not return anything meaningful, we
                # exhausted the partitions of $S and can stop here.
                my $arrangement = $isi->() or return;

                # otherwise, $pi will help us move through the
                # permutations
                $pi = permutations_iterator(items => $arrangement);
                %seen = ();
             }
             if (my @candidate = $pi->()) {
                # %seen is used to filter out duplicates. As a hash, it
                # is indexed via a string, which is $key in our case
                my $key = join ' ', @candidate;
                return @candidate unless $seen{$key}++;

                # if $seen[$key} was already greater than 0 we arrive here.
                # The external loop "while ('necessary')..." takes care
                # to move on to the next candidate
             }
             else {
                # we arrive here if the permutations iterator is exhausted.
                # We set $pi to undef, so that the test at the beginning
                # of the loop will generate a new permutations iterator.
                $pi = undef;
             }
          }
       };
    }
```

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/athanasius/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/athanasius/raku/ch-2.raku)

The monk takes a very methodical approach to constructing their list of 1, 2, and 3 combinations, with a series of loops:

* outside, we find and loop over every multiple of 3 less than the requested total
* next, with the total minus the value of the 3s, every multiple of 2 is found and looped over in a similar fashion, with
* the total minus the 3 product and the 2 product passed on and backfilled with 1s to produce the required sum.

Careful construction here will produce all the total numbers of 3s, 2s and 1s in each partition. These partitions are physically assembled as we go as partial lists, so when we finish we have a completed list of lists.

Then these lists are each permuted into all arrangements of their elements to produce the final compositions. Here are the routines used to construct the "combinations" component of the result:

```perl
    sub get_combinations
    {
        my ($S)    = @_;
        my  @combs = fill_with_2s( $S );          # Includes zero 2s (i.e., all 1s)

        for my $threes (1 .. int( $S / 3 ))
        {
            for my $partition (fill_with_2s( $S - 3 * $threes ))
            {
                push @combs, [ @$partition, (3) x $threes ];
            }
        }

        return @combs;
    }

    sub fill_with_2s
    {
        my ($s) = @_;
        my  @partitions;

        for my $twos (0 .. int( $s / 2 ))
        {
            push @partitions, [ (1) x ($s - 2 * $twos), (2) x $twos ];
        }

        return @partitions;
    }
```

[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/pete-houston/perl/ch-2.pl)

Pete sees the combinations portion of the problems as a special case of a more generalized [Knapsack Problem](https://en.wikipedia.org/wiki/Knapsack_problem), wherein one is tasked to find all ways to fill a theoretical knapsack with items of real weights so as not to exceed a specified total weight capacity.

In the standard definition of the problem, the carrying capacity of the pack must not be exceeded, but also need not be met, with the minimal remaining space considered the best solution. In this case however, with one of the options being 1, any positive integer can be constructed so that is not an issue, and the solutions to the knapsack problem will be the same as the integer partitions of the value.

To this end Pete calls in a module, a favorite of his, [`Algorithm::Knapsack`](https://metacpan.org/pod/Algorithm::Knapsack) to do the heavy lifting. After first arriving on the scene back on PWC 075, apropos to the Knapsack Problem challenge, we've seen this tool brought out several times since then.

From there permuting each partition will result in the list of compositions.

```perl
    sub combos {
        my ($tot, $level) = @_;
        my @solutions;
        my @scores;
        my @fs;
        push @scores, ($_) x ($tot / $_) for 1 .. 3;
        my $sack = Algorithm::Knapsack->new (
            capacity => $tot,
            weights  => \@scores,
        );
        $sack->compute;
        my $combos = 0;
        my %seen;
        for my $fit ($sack->solutions) {
            next unless sum (@scores[@$fit]) == $tot;
            my $res = join (' + ', @scores[@$fit]) . " = $tot\n";
            next if $seen{$res};
            $seen{$res} = 1;
            # Count frequencies
            my %freqs;
            $freqs{$_}++ for @scores[@$fit];
            push @fs, [map { $freqs{$_} || 0 } 1 .. 3];
            push @solutions, [@scores[@$fit]];
            $combos++;
        }
        return @fs;
    }
```

[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/wanderdoc/perl/ch-2.pl)

With yet another way to arrive a set of properly summing combinations, the doctor brings us `Math::Combinatorics`, which provides a number of useful combinatorics functions. Here we start with `subsets()` returning subset combinations of the possible scores: 1, 2, and 3. Iterating through these subsets, we first look for solutions composed of the values 3, 2 and 1, then only the values 3 and 2, then 3 and 1.

From there a scheme is devised using `next_multiset()` nested around `next_string()` (producing mutisets stringified for output) to produce the final permutations.

```perl
    sub multiset_permutations
    {
         my @arr = @_;
         return if exists $SEEN{join(" ", sort {$a <=> $b} @arr)};
         $SEEN{join(" ", sort {$a <=> $b} @arr)} = undef;


         my %freq;
         $freq{$_}++ for @arr;
         print "@arr$/" and return
              if ( exists $freq{1} and $freq{1} == scalar @arr);
         my $o = Math::Combinatorics->new(
                        count=> scalar @arr ,
                        data=>[sort {$a <=> $b} keys %freq] ,
                        frequency=>[@freq{sort {$a <=> $b} keys %freq}] );


         while ( my @x = $o->next_multiset )
         {
              my $p = Math::Combinatorics->new(
                        data=>\@x,
                        frequency=>[map{1} @x] );
              while ( my @y = $p->next_string )
              {
                   print "@y$/";

              }
         }
    }
```


## the UNCLASSIFIABLE chasing the INFINITE
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/cheok-yin-fung/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/jo-37/perl/ch-2.pl), and
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/ulrich-rieke/perl/ch-2.pl)

[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/ulrich-rieke/perl/ch-2.pl)

**additional languages:**
[Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/ulrich-rieke/haskell/ch-2.hs)

Ulrich puts a unique twist on his version of the search: after determining a lower and upper bound on the number of point scores that will make up a solution, he uses the `Algorithm::Combinatorics` function `variations_with_repetition` to find all variations of the numbers 1, 2 and 3 within that space that sum to the required value.

As there are *3*<sup>*k*</sup> values for each quantity of scores this computation is going to blow up quickly, but will work quite well up to *n* = 20 or so.

```perl
    my @basketballPoints = ( 1 , 2 , 3 ) ;
    my $maxtimes = $S ; #we can gather that many 1's from @basketballPoints
    my $mintimes ; #the minimum number of 3 to arrive at $S points
    if ( $S % 3 == 0 ) {
      $mintimes = $S / 3 ;
    }
    else {
      $mintimes = floor( $S / 3 ) + 1 ;
    }
    my $i = $maxtimes ;
    while ( $i > $mintimes - 1 ) {
      my $iter = variations_with_repetition(\@basketballPoints , $i ) ;
      while ( my $c = $iter->next ) {
          if ( sum( @$c ) == $S ) {
        push @allCombis , $c ;
          }
      }
      $i-- ;
    }
    for my $sequence( @allCombis ) {
      say join( ' ' , @$sequence ) ;
    }
```

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/cheok-yin-fung/perl/ch-2.pl)

I don't know where to put this one, but CY has a decidedly different take on a solution, considering it as a variant on the "climb stairs" problem from PWC 112. In that task we needed compositions of 1 and 2 that summed to a given number representing the top of a flight of stairs, which obviously holds certain similarities to what we need to do here today.

CY takes a routine from that previous work and applies it here, considering the difference between that that problem and this to be that placement of any 3s in the solutions. To this end she creates a loop that creates templates for all the various patterns of 3s that could be present, from none to the integer component of the total divided by 3. Each partial composition of only 3s will sum to some number less than the total, with a length made of the allocated 3s and the maximum remaining digits to make the total as 1s. The template compositions have placeholders around the 3s to define the patterns, and then the 1 and 2 assigning subroutine is used to fill in all the patterns of 1 and 2 to these placeholders.

This results in a pretty efficient way to produce valid compositions and only valid compositions that do not need further filtering.

The meat of the matter is around these two sections, where in the top block the various combinations and permutations of 3s are created as templates, and below the `expand()` routine is shown that fills the wildcards in. The `oneortwo_str()` routine referenced creates the 1 and 2 compositions for the stair problem.

```perl
    {
        push @ans, reverse oneortwo_str($S)->@*;
        for my $k (1..int $S/3) {
            my @ans_three333;
            my $iter = combinations([0..$S-1-2*$k], $k);
            while (my $c = $iter->next) {
                my $str_t = "*" x $S;
                my $len = $S-2*$k;
                substr($str_t, $c->[0], 3) = "3";
                if ($k > 1) {
                  for my $t (reverse 1..$k-1) {
                      substr($str_t, 2*($t-1)+$c->[$t], 3) = "3";
                  }
                }
                push @ans_three333, $str_t;
            }
            push @ans, @{expand($_)} for (reverse @ans_three333);
        }
    }

    sub expand {
        my $str = $_[0];
        my @expand_arr;
        if ($str =~ /\*/) {
            my $pos = index($str,"*");
            my $next_3 = index($str, "3", $pos+1);
            my $len_of_stars =
                               $next_3 == -1 ?
                               (length $str) - $pos :
                               $next_3-$pos;

            for my $onetwo (oneortwo_str($len_of_stars)->@*) {
                my $temp_str = $str;
                substr($temp_str, $pos, $len_of_stars) = $onetwo;
                push @expand_arr, @{expand($temp_str)};
            }
        }
        else {
            push @expand_arr, $str;
        }
        return [@expand_arr];
    }
```




[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/jo-37/perl/ch-2.pl)

As I said Jorg took a very different approach to constructing compositions, and that was to have his latest love — `Math::Prime::Util` — do the work for him. Amongst the couple of hundred functions that module provides, there's a specially tailored version that not only provides compositions restricted to values 3 or less, but also including a built-in iterator to loop over them, avoiding the need to keep them all in memory as they wait to be printed out.

```perl
    use Math::Prime::Util 'forcomp';

    # The task is to list all compositions of N where each part is limited
    # to p <= 3.

    forcomp {say "@_"} $ARGV[0], {amax => 3};
```



## Additional Submissions in Guest Languages
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/arne-sommer/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/arne-sommer/raku/basketball-points-ifs-2)

[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/bruce-gray/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/bruce-gray/raku/ch-2.raku)

[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/jaldhar-h-vyas/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/jaldhar-h-vyas/raku/ch-2.raku)

[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/stuart-little/perl/ch-2.pl)

**additional languages:**
[Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/stuart-little/haskell/ch-2.hs), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/stuart-little/lua/ch-2.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/stuart-little/node/ch-2.js), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/stuart-little/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/stuart-little/raku/ch-2.raku)

---

# BLOGS {#PWC122BLOGS}

---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, I somehow continue to maintain my bearings. Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC122BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *READ* these *BLOG* *LINKS*:

**( *don't think, trust your training, you're in the zone, just do it ...* )**


**Abigail**

 * [Perl Weekly Challenge 122: Average of Stream](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-122-1.html) ( *Perl* )
 * [Perl Weekly Challenge 122: Basketball Points](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-122-2.html) ( *Perl* )

**Adam Russell**

 * [Average of Stream / Basketball Points — Perl — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2021/07/25) ( *Perl* )
 * [Average of Stream / Basketball Points — Prolog — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/prolog/2021/07/25) ( *Perl* )

**Andinus**

 * [Challenge 122](https://andinus.tilde.institute/pwc/challenge-122/) ( *Raku* )

**Arne Sommer**

 * [Of Points with Raku and Perl](https://raku-musings.com/of-points.html) ( *Perl & Raku* )

**Colin Crain**

 * [Keeping Up the Average Number of Trips From the Line — Programming Excursions in Perl and Raku](https://colincrain.com/2021/07/24/keeping-up-the-average-number-of-trips-from-the-line/) ( *Perl & Raku* )

**Dave Jacoby**

 * [Streams and Scores: The Weekly Challenge #121 | Committed to Memory](https://jacoby.github.io/2021/07/19/streams-and-scores-the-weekly-challenge-121.html) ( *Perl* )

**Flavio Poletti**

 * [PWC122 - Average of Stream - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/07/21/pwc122-average-of-stream/) ( *Perl & Raku* )
 * [PWC122 - Basketball Points - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/07/22/pwc122-basketball-points/) ( *Perl & Raku* )

**Jaldhar H. Vyas**

 * [Perl Weekly Challenge: Week 122](https://www.braincells.com/perl/2021/07/perl_weekly_challenge_week_122.html) ( *Perl & Raku* )

**James Smith**

 * [Perl Weekly Challenge #122](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-122/james-smith) ( *Perl* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 122: Average of Stream and Basketball Points | laurent_r](http://blogs.perl.org/users/laurent_r/2021/07/perl-weekly-challenge-122-average-of-stream-and-basketball-points.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 122: mangling numbers – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2021/07/20/PerlWeeklyChallenge122.html#task1) ( *Raku* )
 * [Perl Weekly Challenge 122: mangling numbers – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2021/07/20/PerlWeeklyChallenge122.html#task2) ( *Raku* )

**Roger Bell_West**

 * [RogerBW's Blog: Perl Weekly Challenge 122: Basketball Stream](https://blog.firedrake.org/archive/2021/07/Perl_Weekly_Challenge_122__Basketball_Stream.html) ( *Perl & Raku* )

**Simon Green**

 * [Weekly Challenge 122](https://dev.to/simongreennet/weekly-challenge-122-4np8) ( *Perl* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 122 – W. Luis Mochán](https://wlmb.github.io/2021/07/19/PWC122/) ( *Perl* )
