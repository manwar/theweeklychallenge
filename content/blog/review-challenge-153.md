---
author:       Colin Crain
date:         2022-03-28T00:00:00
description:  "Colin Crain › Perl Weekly Review #153"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #153"
image:        images/blog/p5-review-challenge-153.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-152/).* )

Welcome to the Perl review pages for **Week 153** of The Weekly Challenge! Here we will take the time to discuss the  submissions offered up by the team, factor out some common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

---

### ●︎ Why do we do these challenges?

I suppose any reasonable answer to that question would be from a field as wide ranging and varied as the people who choose to join the team. One thing, though, is clear: it's not a competition, and there are no judges, even if there is a "prize" of sorts. About that -- I think of it more as an honorarium periodically awarded to acknowledge the efforts we make towards this strange goal. So there's no determination to find the *fastest*, or the *shortest*, or even, in some abstract way, the *best* way to go about things, although I'm certain the participants have their own aspirations and personal drives. As Perl is such a wonderfully expressive language, this provides quite a bit of fodder to the core idea of TMTOWTDI, producing a gamut of varied techniques and solutions.

Even the tasks themselves are often open to a certain amount of discretionary interpretation. What we end up with is a situation where each participant is producing something in the manner they find the most interesting or satisfying. Some team members focus on carefully crafted complete applications, thoroughly vetting input data and handling every use case they can think up. Others choose to apply themselves to the logic of the underlying puzzle and making it work in the most elegant way they can. Some eschew modules they would ordinarily reach for, others embrace them, bringing to light wheels perhaps invented years ago that happen to exactly solve the problem in front of them today.

I've been considering this question for some time and have found one binding commonality between all of us out solving these challenges each week, in that however we normally live our lives, the task in front of us more than likely has nothing to do with any of that. And I think this has great value. We all do what we do, in the real world, and hopefully we do it well. The Weekly Challenge provides us with an opportunity to do something germane to that life yet distinctly different; if we only do the things we already know how to do then we will only do the same things over and over. This is where the "challenge" aspect comes into play.

So we can consider The Weekly Challenge as providing a problem space outside of our comfort zone, as far out from that comfort as we wish to take things. From those reaches we can gather and learn things, pick and choose and bring what we want back into our lives. Personally, I think that's what this whole thing is about. YMMV.

---

<strong><emp>Every week there is an enormous global collective effort made by the team, analyzing and creatively coding the submissions, and that effort deserves credit due.</emp></strong>

And that, my friends, is why I'm here, to try and figure out ways to do just that.

So, here we are then. I'm ready — let’s get to it and see what we can find.

---

### For Additional Context…

before we begin, you may wish to revisit either the pages for the [**original tasks**](/blog/perl-weekly-challenge-153/) or the summary [**recap**](/blog/recap-challenge-153/) of the challenge. But don't worry about it, the challenge text will be repeated and presented as we progress from task to task.

Oh, and one more thing before we get started:


### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please feel free to email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

<div align= center><strong>...So finally, without further ado...</strong></div>

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC153TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC153TASK2)   &nbsp;  &nbsp;  &nbsp;   	•   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC153BLOGS)    &nbsp;  &nbsp;  &nbsp;   	•

---

---

# TASK 1 {#PWC153TASK1}

# Left Factorials
*Submitted by: Mohammad S Anwar*

Write a script to compute Left Factorials of 1 to 10. Please refer OEIS A003422 for more information.

```
    Expected Output:
    1, 2, 4, 10, 34, 154, 874, 5914, 46234, 409114

```

## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/abigail/perl/ch-1.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/adam-russell/perl/ch-1.pl),
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/alexander-pankoff/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/athanasius/perl/ch-1a.pl),
[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/bruce-gray/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/colin-crain/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/dave-jacoby/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/polettix/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/jo-37/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/laurent-rosenfeld/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/lubos-kolouch/perl/ch-1.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/mattneleigh/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/mohammad-anwar/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/pete-houston/perl/ch-1.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/peter-campbell-smith/perl/ch-1.pl),
[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/pokgopun/perl/ch-1.pl),
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/robert-dicicco/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/roger-bell-west/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/ulrich-rieke/perl/ch-1.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/wlmb/perl/ch-1.pl)

When I first approached this problem, I had a little trouble visualizing exactly what it was about. After a few missteps, and a bit of additional confusion thrown on top over a conflicting and separate definition for a different concept using identical nomenclature, I ended up with my own rephrasing of the definition:

> **Consider the factorials as an ordered sequence of values starting at 0 and incrementing by 1. The Left Factorial is the sum of all values in this sequence for indices less than, but not including, the value in question.**

> **So L(4) = 3! + 2! + 1! + 0!**

The left factorial, then, for a given value is the sum of those factorials less than the given index.

On one level, we can compute the solutions for each of these relevant values and then add them up. However, the factorials, taken as a list, maintain relations to each other, with each increasing index adding one additional multiplicand to the growing value of the new factorial added. So there's room for more clever algorithms than this naive example.

There were 22 submissions for the first task this past week.

## there's MORE than ONE FACTOR to consider...
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/colin-crain/perl/ch-1.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/mattneleigh/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/roger-bell-west/perl/ch-1.pl),
[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/bruce-gray/perl/ch-1.pl),
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/abigail/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/mohammad-anwar/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/lubos-kolouch/perl/ch-1.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/wlmb/perl/ch-1.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/adam-russell/perl/ch-1.pl),
[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/pokgopun/perl/ch-1.pl), and
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/jo-37/perl/ch-1.pl)

There were quite a range of techniques brought to bear on the problem, however the most common, economical, approaches were to capitalize on the computation of previous elements in producing the next, as each can be developed into the following in a consistent way. Sometimes the production of values was embedded in the idea of producing the sequence, but we also saw structural separation, with the use of caches to avoid computational repetition. Of course the repetion itself is hardly the end of the world, amounting to hundred of operations rather than millions of billions, so the shortest solutions just recomputed whatever was required.

[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/colin-crain/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/colin-crain/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Facts Left on the Table by the Front Door - Programming Excursions in Perl and Raku](https://colincrain.com/2022/02/24/facts-left-on-the-table-by-the-front-door/)

We'll start us off today with my own submission. I make a random selection and it stands to reason that my number will come up sometimes.

I do my best not to play favorites. I do retain editorial discretion, but I also try to restrict my power to the service of the narrative. Keeping you engaged is, after all, the tricky bit.

So what did I do? As touched on in the introduction, each new element of the sequence adds one more factorial than the previous, and each new factorial added is the product of the previous factorial and the next higher number. So to compute the next element in the sequence, we need to keep track of only three numbers:
* the last value in our growing left factorial sequence
* the value of last factorial we calculated, and
* the base of the last factorial we calculated

At each step, working backwards up this list, we:

* increment the base by one
* multiply the factorial by that to make the next factorial
* add this new factorial to the last list value to create the new element

By keeping these values properly updated we can keep cranking out as many left factorials as we want. It's fun, for some definitions of fun, so I kept on going. The advantage of doing things this way is that each new element requires just a couple of additions and a product; we don't keep recomputing the individual factorials over and over.

One last note is because the factorials grow rapidly, we run out of integer at

! 22 = 2,561,327,494,111,820,314

However because we keep our step-wise computational footprint small, applying the `bigint` pragma to allow ourselves arbitrarily-sized integers has no great impact on the processing resources. We can effectively go as far as we want:

! 1000 =
402,790,454,
129,684,136,968,124,369,179,059,211,066,230,340,
814,333,875,534,732,490,137,389,971,453,530,257,
834,729,524,153,470,039,842,675,785,530,571,260,
496,816,973,897,917,840,067,466,731,231,090,427,
980,441,039,328,369,617,046,320,988,822,321,806,
331,297,934,459,170,543,661,198,500,120,585,035,
795,085,833,286,238,420,519,712,073,583,879,282,
425,846,829,094,851,665,019,998,848,816,833,714,
219,704,581,783,936,354,401,378,148,203,630,105,
398,875,606,581,189,836,855,161,843,667,260,953,
503,142,584,307,135,040,357,121,277,200,535,303,
489,725,839,621,761,048,442,907,072,978,722,502,
368,306,412,562,875,842,972,049,339,112,885,444,
775,909,503,613,257,263,083,390,264,455,593,922,
422,529,369,431,118,032,631,742,558,720,263,660,
260,357,267,951,709,605,570,340,190,346,083,442,
302,480,141,979,187,310,960,364,916,499,234,307,
663,742,207,632,736,413,034,131,830,360,882,630,
789,606,151,000,253,995,702,701,472,413,540,755,
707,390,554,304,190,944,220,951,290,300,194,050,
675,762,996,631,830,911,183,977,312,364,968,063,
270,503,097,427,155,877,640,454,977,001,850,018,
498,051,740,860,804,843,264,282,030,032,906,924,
527,877,925,200,098,028,474,723,686,264,644,145,
999,968,150,928,496,710,489,938,749,063,992,449,
766,833,677,942,475,821,619,414,972,298,916,924,
755,307,573,879,667,860,841,873,351,869,436,978,
785,662,395,165,750,834,518,536,598,933,216,551,
301,901,613,701,145,508,439,007,793,653,521,743,
174,685,254,160,699,597,470,819,070,584,174,650,
419,573,045,629,293,641,455,300,174,518,442,106,
252,839,984,409,630,689,586,721,196,818,371,427,
766,601,460,561,794,428,078,429,673,965,172,051,
532,376,738,477,699,052,199,414,493,694,104,140,
984,140,780,001,899,010,983,640,712,852,791,596,
815,502,175,604,362,639,462,613,053,790,808,551,
489,499,619,991,171,417,679,593,843,139,520,499,
236,340,414,154,312,436,880,445,631,367,852,091,
082,350,869,211,432,218,341,643,661,879,013,695,
558,309,745,157,747,990,568,149,431,396,636,644,
196,097,386,573,880,427,460,775,937,151,813,397,
945,493,074,474,467,361,685,630,041,394,331,320,
075,100,891,309,427,960,687,594,226,934,752,166,
115,243,023,149,507,421,484,619,854,636,959,105,
831,992,796,845,068,625,788,389,433,894,561,761,
146,077,133,713,010,208,565,214,943,081,088,637,
001,250,239,177,758,196,947,672,518,770,799,530,
274,826,787,510,343,915,001,221,410,554,763,665,
639,196,205,421,250,142,581,238,453,883,141,625,
528,016,903,824,365,818,537,640,384,724,208,223,
295,526,314,020,589,045,966,038,090,575,553,724,
635,424,608,550,152,158,398,375,634,012,908,507,
702,136,635,597,449,455,843,933,079,728,415,267,
858,875,601,801,690,397,170,990,588,719,648,531,
409,285,603,238,091,779,379,999,615,606,611,107,
074,183,840,614,496,825,002,697,607,509,211,067,
748,675,665,301,202,497,846,647,311,580,285,573,
814,429,018,177,249,160,844,484,259,841,012,592,
312,754,189,406,241,246,434,924,328,621,494,682,
022,198,137,725,427,915,769,382,167,943,955,038,
243,392,710,404,246,305,525,277,498,873,440,262,
772,727,601,626,407,542,504,985,981,593,086,850,
310,175,052,532,805,418,564,448,235,764,619,186,
683,198,802,218,861,893,243,574,080,688,558,756,
417,455,613,570,273,121,541,638,995,145,894,561,
079,999,213,500,076,101,248,781,500,642,979,091,
198,044,736,325,729,107,144,579,768,273,776,743,
716,439,557,581,557,253,878,204,647,391,176,582,
851,167,312,182,026,188,795,156,620,056,856,503,
340,092,247,479,478,684,738,621,107,994,804,323,
593,105,039,052,556,442,336,528,920,420,940,314

You know, if we wanted to know that.

```perl
    use bigint;

    my $num   = shift // 50;

    my @left  = (0,1);
    my $fact  = 1;
    my $count = 1;

    while ($count < $num) {
        $fact *= $count;
        push @left, $left[-1] + $fact;
        $count++;
    }

    say for @left;
```

[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/mattneleigh/perl/ch-1.pl)

Because the sum for an element in the sequence is those factorials less than but not equal to the value, at any given moment we're computing the factorial one *behind* the current index, constructed out of the factorial *two* behind and a counter *one* behind. The bookkeeping is not hard but can be a little confusing before you get it right. So in Matthew's code the counter `$i` is not the index for the left factorial, but rather that of the new factorial being added, one behind.

```perl
    sub n_left_factorials{
        my $n = int(shift());

        return(undef)
            unless($n > 0);

        my $i;
        my $factorial;
        my @left_factorials;

        # Initial setup
        push(@left_factorials, 1);
        $factorial = 1;

        for $i (1 .. ($n - 1)){
            # Multiply our running product by $i, then
            # store its sum with the previous sum
            $factorial *= $i;
            push(
                @left_factorials,
                $left_factorials[$#left_factorials] + $factorial
            );
        }

        return(@left_factorials);

    }
```

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/roger-bell-west/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/roger-bell-west/javascript/ch-1.js), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/roger-bell-west/kotlin/ch-1.kt), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/roger-bell-west/lua/ch-1.lua), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/roger-bell-west/postscript/ch-1.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/roger-bell-west/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/roger-bell-west/raku/ch-1.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/roger-bell-west/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/roger-bell-west/rust/ch-1.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: The Weekly Challenge 153: Factoriality](https://blog.firedrake.org/archive/2022/02/The_Weekly_Challenge_153__Factoriality.html)

Roger is a much more one-action-per-line kind of guy, and I respect that. The drama progreses downward in an unhurried style that also carries little fat to slow it down. Again we see the three variables: an iterator, the latest factorial, and a compounding sum which is the last value added to the left factorial list.

New values are simply pushed onto the list when constructed.

```perl
    sub leftfactorial {
      my $mx = shift;
      my @out;
      my $fact=1;
      my $sum=0;
      foreach my $i (0..$mx-1) {
        if ($i>0) {
          $fact *= $i;
        }
        $sum += $fact;
        push @out,$sum;
      }
      return \@out;
    }
```

[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/bruce-gray/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/bruce-gray/raku/ch-1.raku), [Webassembly](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/bruce-gray/webassembly/ch-1.wat)

Bruce has done something here that quite frankly I didn't know was even possible from a core module.

In functional programming, there is a basic operation on a list called reduction. In it, much like `map`, we take a function and a list and apply the function one-by-one to the list elements. In `reduce`, however, the process is structured in such a way that each newly processed element is incorporated by the function into a common aggregate total, which is returned at the end as a single value. The familiar function `sum` is like this, for instance, where we can view the process as taking the first list element and then adding each remaining element to it, one-by-one, until when we arrive at the end of the list we end up with a summation of all the values within it.

The `reduce` function, sometimes called `fold` or some variant, can be considered an archetype for that sort of stepwise list processing, turning a list into a single value. By careful selection of the applied function, one can, as we just described, construct a perfectly-good `sum` — or `product`, `minimum` or `concatenation` for that matter. The sky is the limit.

There is a large collection of such functions in the `List::Util` module, starting with the prototype `reduce`.

However there is a slight variation on this processing available as well, the function `reductions` which acts in the same way, but instead of returning a single value, returns a list of the the accumulating values at intermediate steps along the way. This `reductions` function, which in Raku is known as the "triangle reduction operator", is what I didn't realize we had available.

So in our `sum` example, for a list (1, 2, 3, 4) we would return the list (1, 3, 6, 10), which is composed piecemeal as ((1), ((1) + 2), ((1+2) + 3), ((1+2+3) + 4)). Now you can start to see where I'm going with all this backstory. If we use multiplication instead of addition, then that list of partial products looks a whole lot like a list of factorials. And if we take *that* list and make a similar list of partial sums on that, we're summing those factorials, adding one more value at each step.

Which is exactly what we want to do.

Check this out:

```perl
    use List::Util qw<reductions>;

    say join ', ', reductions { $a + $b }
                1, reductions { $a * $b } 1..9;
```

And that, my friends, is a piece of elegant functional programming.


[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/abigail/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/abigail/awk/ch-1.awk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/abigail/bash/ch-1.sh), [Basic](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/abigail/basic/ch-1.bas), [Bc](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/abigail/bc/ch-1.bc), [Befunge-93](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/abigail/befunge-93/ch-1.bf93), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/abigail/c/ch-1.c), [Cobol](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/abigail/cobol/ch-1.cb), [Csh](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/abigail/csh/ch-1.csh), [Erlang](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/abigail/erlang/ch-1.erl), [Forth](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/abigail/forth/ch-1.fs), [Fortran](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/abigail/fortran/ch-1.f90), [Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/abigail/go/ch-1.go), [Java](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/abigail/java/ch-1.java), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/abigail/lua/ch-1.lua), [M4](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/abigail/m4/ch-1.m4), [Mmix](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/abigail/mmix/ch-1.mms), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/abigail/node/ch-1.js), [Ocaml](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/abigail/ocaml/ch-1.ml), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/abigail/pascal/ch-1.p), [Php](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/abigail/php/ch-1.php), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/abigail/postscript/ch-1.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/abigail/python/ch-1.py), [R](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/abigail/r/ch-1.r), [Rexx](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/abigail/rexx/ch-1.rexx), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/abigail/ruby/ch-1.rb), [Scheme](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/abigail/scheme/ch-1.scm), [Sed](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/abigail/sed/ch-1.sed), [Sql](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/abigail/sql/ch-1.sql), [Tcl](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/abigail/tcl/ch-1.tcl)

We'll follow that hit with a piece of astonishing brevity from Abigail.

Abigail has an uncanny ability to strip away artifice to reveal the essential logical core required to implement a solution. Here they use the fact that assignments return the thing being assigned to chain several operations.

A factorial is multiplied by an iterator value, which is returned to be added to a compounding sum which is the current left factorial to be printed. Progressing through a `for` loop produces the required number of values, with a trailing newline to finish the report.

```perl
    print   my $sum  = my $fac  = 1;
    print ' ', $sum +=    $fac *= $_ for 1 .. 9;
    print "\n";
```

[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/mohammad-anwar/perl/ch-1.pl)

As clever as these acts of technical virtuosity are, there is a competing force, a drive to return to Earth and clearly present well-grounded logic in a clear framework. Two loops and a linear data flow do the job quite well.

Here's Mohammad's no-frills method:

```perl
    sub left_factorials {
        my ($i, $j) = @_;

        my $lf = [foo];
        foreach my $n ($i .. $j) {
            my $s = 0;
            foreach my $n (0 .. $n) {
                my $f = 1;
                $f = $f * $_ for 1..$n;
                $s = $s + $f;
            }

            push @$lf, $s;
        }

        return $lf;
    }
```

[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/lubos-kolouch/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Php](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/lubos-kolouch/php/ch-1.php), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/lubos-kolouch/python/ch-1.py)

Lubos assembles each left factorial independently, but employs a cache of hashed factorial values to avoid repeating the computations.

Practically there is little difference in the processing, with only a variation in how exactly and where the intermediate data steps are stored.

```perl
    sub calculate_factorial {
        my $what = shift;

        return $fact_cache{$what} if $fact_cache{$what};

        # let's utilize the fact that we are processing the numbers in sequence
        $fact_cache{$what} = $what * $fact_cache{$what-1};

        return $fact_cache{$what};
    }

    sub calculate_left_fact {
        my $what = shift;

        return $left_fact_cache{$what} if $left_fact_cache{$what};

        # let's utilize the fact that we are processing the numbers in sequence
        $left_fact_cache{$what} = calculate_factorial($what-1) + $left_fact_cache{$what-1};

        return $left_fact_cache{$what};
    }

    sub get_left_factorials {
        my $what = shift;

        my @output;

        for (1..$what) {
           push @output, calculate_left_fact($_);
        }

        return \@output;
    }
```

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/wlmb/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 153 – W. Luis Mochán](https://wlmb.github.io/2022/02/21/PWC153/)

Luis employs a similar organizational technique, constructing the next left factorial from the previous, and using the `Memoize` module to cache the return values from the two subroutines to avoid recalculating values when possible.

`Memoize` will remember the parameters in a subroutine call, and if it is called a second time with the same will simply return the same value without re-executing the code.

```perl
    use Memoize;
    use bigint;
    use Text::Wrap qw(wrap $columns $break);

    memoize qw(left_factorial factorial);
    die "Usage: ./ch-1.pl N\nto get the first N left factorials" unless @ARGV;
    my $N=shift;
    $columns=62; $break=qr/\s/;
    say wrap("", "    ", "The first $N left factorials are: ",
        join ", ", map {left_factorial($_)} (0..$N-1));
    sub left_factorial{
        my $n=shift;
        return factorial(0) if $n<=0;
        return factorial($n)+left_factorial($n-1);
    }
    sub factorial{
        my $k=shift;
        return 1 if $k<=0;
        return $k*factorial($k-1);
    }
```





[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/adam-russell/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Finding the Factorials and Factorions That Are Left](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2022/02/27)

Adam has dredged up a [very interesting *sieve* technique](https://oeis.org/A003422) to produce the left factorials which is... different. The upper bound, he notes, is arbitrary and large enough to get the job done.


```perl
    use POSIX;
    use constant UPPER_BOUND => INT_MAX/1000;

    sub left_factorials_sieve{
        my($n) = @_;
        my @sieve = (0 .. UPPER_BOUND);
        my $x = 2;
        {
            my @sieve_indices = grep { $_ <= $x || $_ % $x == 0 } 0 .. @sieve - 1;
            @sieve = map{ $sieve[$_] } @sieve_indices;
            $x++;
            redo if $x <= $n;
        }
        return @sieve[1 .. @sieve - 1];
    }

    MAIN:{
        print join(", ", left_factorials_sieve(10)) . "\n";
    }
```


[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/pokgopun/perl/ch-1.pl)

PokeGoPun wisely points out the confusing status of having competing definitions in the real-world namespace for "left factorial" — the other being for an unrelated idea also known as the [subfactorial, or derangement](https://en.wikipedia.org/wiki/Derangement). But having cleared that up presents a quite unusual method for creating a *string* for the multiple products to manufacture a given factorial and then applying `eval` to treat the string as code. There truly is more than one way to do it, and this certainly is one of them.

```perl
    foreach my $n (1..10) {
        ### Left factorial which is known by the other name as subfactorial but it does not produce output similar to the example
        #$res .= sprintf "%s, ", eval(join(" + ", map{ &factorial($n) / &factorial($_) * (-1)**$_ } 0..$n ));
        ### The below seems to produce output similar to the example
        $res .= sprintf "%s, ", eval( join( " + ", map{&factorial($_)} 0..$n-1 ) );
    }
    $res =~ s/\D+$//;
    printf "%s\n", $res;

    sub factorial {
        my $n = shift;
        return $n==0 ? 1 : eval(join(" * ", 1..$n));
    }
```


[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/jo-37/perl/ch-1.pl)

Finally, we'll wrap up with a strange little companion courtesy of Jorg.

Coroutines are a bit like subroutines you can step in an out of, preserving their own independant state whilst they patiently wait for you to require the next thing from them. In this code the generator coderef is returned like a closed iterator and on first calling execution travels to the first `yield` statement, where the preloaded first value for `$left-factorial` is returned, along with passing execution back to the main script. On the second and subsequent calls the coroutine picks up where it left off before, inside the `while` loop. Because we `yield` from inside the loop, when we return the next time it's called we're still in the loop, and will remain there on all subsequent calls. Each time we come back a new left factorial is assembled and returned.

These coroutines seem terribly interesting, but require thinking about processing in a very different way. They do not, for instance, run in on different processors, merely handing off processing from one execution space to another and back. Ultimately it might  be nice to be able to park them over in a separate processor, sure, but again the that isn't the central idea: execution is linear, but multiple states of separate processes maintain themselves independently and simultaneously.

```perl
    use bigint;
    use Coro::Generator;

    main: {
        my $left_factorial = gen_left_factorial();
        say $left_factorial->() for 1 .. $ARGV[0];
    }

    # Build a generator for left factorials
    sub gen_left_factorial {
        my ($index, $factorial, $left_factorial) = (0, 1, 1);

        generator {
            yield $left_factorial;
            yield $left_factorial += ($factorial *= ++$index) while 1;
        }
    }
```


## Blogs and Additional Submissions in Guest Languages for Task 1:


[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/alexander-pankoff/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/alexander-pankoff/haskell/ch-1.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/alexander-pankoff/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Challenge 153 Task #1 - Factorials left, factorials right, factorials everywhere!](https://pankoff.net/pages/perl-weekly-challenge/challenge-153-task-1.html)


[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/athanasius/perl/ch-1a.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/athanasius/raku/ch-1.raku)


[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/dave-jacoby/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Luck is not a Factor!: Weekly Challenge #153 | Committed to Memory](https://jacoby.github.io/2022/02/21/luck-is-not-a-factor-weekly-challenge-153.html)


[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/polettix/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/polettix/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC153 - Left Factorials - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/02/23/pwc153-left-factorials/)


[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/laurent-rosenfeld/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/laurent-rosenfeld/awk/ch-1.awk), [Bc](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/laurent-rosenfeld/bc/ch-1.bc), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/laurent-rosenfeld/c/ch-1.c), [Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/laurent-rosenfeld/go/ch-1.go), [Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/laurent-rosenfeld/julia/ch-1.jl), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/laurent-rosenfeld/kotlin/ch-1.kt), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/laurent-rosenfeld/lua/ch-1.lua), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/laurent-rosenfeld/pascal/ch-1.p), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/laurent-rosenfeld/python/ch-1.py), [R](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/laurent-rosenfeld/r/ch-1.r), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/laurent-rosenfeld/raku/ch-1.raku), [Ring](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/laurent-rosenfeld/ring/ch-1.ring), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/laurent-rosenfeld/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/laurent-rosenfeld/rust/ch-1.rs), [Scala](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/laurent-rosenfeld/scala/ch-1.scala), [Tcl](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/laurent-rosenfeld/tcl/ch-1.tcl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 153: Left Factorials and Factorions](http://blogs.perl.org/users/laurent_r/2022/02/perl-weekly-challenge-153-left-factorials-and-factorions.html)


[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/peter-campbell-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[!Task one is quite easy. Factorions are quite rare.](https://pjcs-pwc.blogspot.com/2022/02/task-one-is-quite-easy-factorions-are.html)


[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/robert-dicicco/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/robert-dicicco/raku/ch-1.raku), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/robert-dicicco/ruby/ch-1.rb), [Tcl](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/robert-dicicco/tcl/ch-1.tcl)


[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/ulrich-rieke/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/ulrich-rieke/cpp/ch-1.cpp), [Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/ulrich-rieke/haskell/ch-1.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/ulrich-rieke/raku/ch-1.raku)


------------------------------------------





---

# TASK 2 {#PWC153TASK2}

# Factorions
Submitted by: Mohammad S Anwar
You are given an integer, $n.

Write a script to figure out if the given integer is factorion.

A factorion is a natural number that equals the sum of the
factorials of its digits.

**Example 1:**
```
    Input: $n = 145
    Output: 1
    Since 1! + 4! + 5! => 1 + 24 + 120 = 145
```

**Example 2:**
```
    Input: $n = 123
    Output: 0
    Since 1! + 2! + 3! => 1 + 2 + 6 <> 123
```




## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/abigail/perl/ch-2.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/adam-russell/perl/ch-2.pl),
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/alexander-pankoff/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/athanasius/perl/ch-2.pl),
[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/bruce-gray/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/colin-crain/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/dave-jacoby/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/polettix/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/jo-37/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/laurent-rosenfeld/perl/ch-2.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/lubos-kolouch/perl/ch-2.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/mattneleigh/perl/ch-2.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/mohammad-anwar/perl/ch-2.pl),
[**Olivier Delouya**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/olivier-delouya/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/pete-houston/perl/ch-2.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/peter-campbell-smith/perl/ch-2.pl),
[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/pokgopun/perl/ch-2.pl),
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/robert-dicicco/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/roger-bell-west/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/ulrich-rieke/perl/ch-2.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/wlmb/perl/ch-2.pl)

The factorions are defined as the numbers equal to the sum of the factorials of their individual digits. As we're talking about base-10 here — Wait, we are talking about base-10 here, aren't we? We could extend the concept in other bases, but there is no suggestion that we do so in the task description — then the largest factorial we will be dealing with is for the digit 9.

9! = 362,880

This suggests there is an upper limit on the possible values for a factorion in base-10:
there can be no factorials above 7 digits because the smallest 8-digit number — 10,000,000 — is larger than the factorial-digit-sum of the largest 8-digit number, 99,999,999.

9! + 9! + 9! + 9! + 9! + 9! + 9! + 9! = 2,903,040

So we can definitively say above 10 million we can stop looking, and in fact we can further modify this bound downward, as we shall see.

There were a total of 23 submissions for the second task this past week.

## SEARCHING HAYSTACKS for NEEDLES
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/robert-dicicco/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/polettix/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/athanasius/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/laurent-rosenfeld/perl/ch-2.pl),
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/alexander-pankoff/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/dave-jacoby/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/pete-houston/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/e-choroba/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/jo-37/perl/ch-2.pl), and
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/peter-campbell-smith/perl/ch-2.pl)


There does not seem to be any way to predict the locations of the factorions, so it appears the only thing to do is break apart the candidate and sum up the parts as specified to see what happens. Call it experimental math. There was a large degree of self-similarity in the techniques.


[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/robert-dicicco/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/robert-dicicco/raku/ch-2.raku), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/robert-dicicco/ruby/ch-2.rb), [Tcl](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/robert-dicicco/tcl/ch-2.tcl)

Robert will start us off today with a verbose solution of the the task as given. A number is input, broken into its digital components, the factorials taken with the help of the `factorial` function from `ntheory`, and summed. A comparison is made to the input and reported. Along the way, the various components of the process are collected to make a proper explanation of the reasoning, analogous to the examples given in the description.

```
    Input $n = 145
    1! + 4! + 5!  = 145
    Output: 1
```

Robert's solution:

```perl
    my $ret = is_factorion($num);
    chop $outstr for 1..2;

    print "$outstr = $sumdigits\n";
    print "Output: $ret\n";

    sub is_factorion {
      my $n = shift;
      my @digits = split(//,$n);
      foreach my $x (@digits){

          $outstr .= "$x\! + ";
          $sumdigits += factorial($x);

      }

      ($sumdigits == $n) ?  1 :  0;
    }
```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/polettix/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/polettix/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC153 - Factorions - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/02/24/pwc153-factorions/)

Flavio provides two solutions to the task. Or rather, he provides a perfectly good solution to the task at hand — a simple query — and then goes on to expand this technique to search for all of the factorions.

```perl
    say is_factorion(shift // 145) ? 1 : 0;

    sub is_factorion ($n) {
       state $f = [ 1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880 ];
       $n == sum map { $f->[$_] } split m{}mxs, $n;
    }
```

This will satisfy the conditions of the challenge. Because there are only 10 factorials in play, he hard codes them into a list, and can access them by index. Reading from the right leftward, the number is split, mapped to its factorial, summed with the rest of the digit results, and finally compared to the original value, with the result of the comparison returned.

Neat.

But unsatisfied he goes on the find the rest. In his [analysis in the writeup](https://github.polettix.it/ETOOBUSY/2022/02/24/pwc153-factorions/), he comes to the same conclusions I did above, narrowed down even more: that if the largest 7-digit value is 2540160 then no number larger need ever be considered. So he sets up a loop and tries them all. Computationally a few million values is peanuts in this modern world.

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/athanasius/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/athanasius/raku/ch-2.raku)

The monk also chooses a lookup for their 10 factorials, this time as a hash of constants, courtesy of `Const::Fast`. The values along the way are also, governed by a `$VERBOSE` switch, gathered and reported as in the examples given.

```perl
    printf "Input:  \$n = %d\n", $n_abs * $sign;

    my @digits   = split '', $n_abs;
    my $sum      = 0;
       $sum     += $_ for map { $FACTORIAL{ $_ } } @digits;
    my $is_factn = $sum == $n;

    printf "Output: %d\n", $is_factn ? 1 : 0;
```

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/laurent-rosenfeld/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/laurent-rosenfeld/awk/ch-2.awk), [Bc](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/laurent-rosenfeld/bc/ch-2.bc), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/laurent-rosenfeld/c/ch-2.c), [Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/laurent-rosenfeld/julia/ch-2.jl), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/laurent-rosenfeld/kotlin/ch-2.kt), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/laurent-rosenfeld/lua/ch-2.lua), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/laurent-rosenfeld/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/laurent-rosenfeld/raku/ch-2.raku), [Ring](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/laurent-rosenfeld/ring/ch-2.ring), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/laurent-rosenfeld/ruby/ch-2.rb), [Scala](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/laurent-rosenfeld/scala/ch-2.scala)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 153: Left Factorials and Factorions](http://blogs.perl.org/users/laurent_r/2022/02/perl-weekly-challenge-153-left-factorials-and-factorions.html)

I like that Laurent went through the trouble of actually computing the factorials from 0 to 9 before caching the results in a lookup array. From a programing point of view this is not a best practice, but then from a programming point of view neither is recomputing the search for the factorions in the first place. Here at the challenge we live in a strange world not-quite grounded in everyday reality. Sometimes the constructs matter more than the particulars, as is the case here. We will choose to pretend, just for the moment, that we don't just know the values for the factorials or have them easily available. However once computed we will make it so we don't have to calculate them twice.

I like that people chose certain constraints to self-impose, according to their own purposes and preferences. It gives variety and allows us to explore different aspects to the challenge.


```perl
    sub fact {
        my $i = shift;
        my $prod = 1;
        $prod *= $_ for 2..$i;
        return $prod;
    }

    my @digit_fact = map {fact $_} 0..9;

    sub is_factorion {
        my $in = shift;
        my $sum = 0;
        $sum += $_ for map { $digit_fact[$_] } split //, $in;
        return $sum == $in;
        #say $sum;
    }
    for (1..50000) {
        say $_ if is_factorion($_)
    }
```

[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/alexander-pankoff/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/alexander-pankoff/haskell/ch-2.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/alexander-pankoff/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Challenge 153 Task #2 - Even more factorials and what the fuck are factorions?](https://pankoff.net/pages/perl-weekly-challenge/challenge-153-task-2.html)

Speaking of structure, Alexander takes things somewhat to the next level, as he builds two routines, one to manually check a number and the other to check whether it's within the list of all factorions. I mean, there are only four, after all, and there can never be any other. Having solved the problem two ways he tests all candidate values from 1 to 100,000 using one of the two methods, selected at random.

It's kind of  a ridiculous Rube-Goldberg machine in the end, but I feel that technical sensibility wasn't exactly Alexander's highest priority.

It is, importantly, logically sound beneath the surface.

```perl
    sub run() {
        my $max = 100000;
        say "Factorions <= $max:";
        for ( 1 .. $max ) {
            my $fn = ( \&is_factorion, \&is_factorion_a014080 )[ int( rand(2) ) ];
            say $_ if $fn->($_);
        }
    }

    sub is_factorion($n) {
        my @digits                      = split( m//, $n );
        my $sum_of_factorials_of_digits = sum0( map { fac($_) } @digits );

        return $n == $sum_of_factorials_of_digits;
    }

    sub fac($n) {
        product( 1 .. $n );
    }

    sub is_factorion_a014080($n) {
        ## complete list of all factorians - see https://oeis.org/A014080
        state @A014080 = ( 1, 2, 145, 40585 );
        first { $n == $_ } @A014080;
    }
```

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/dave-jacoby/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Luck is not a Factor!: Weekly Challenge #153 | Committed to Memory](https://jacoby.github.io/2022/02/21/luck-is-not-a-factor-weekly-challenge-153.html)

In a side note, I'm always pleased to read the notes whenever we so these factorial problems, because everyone always seems to be super-excited about the numbers. Then I end up inevitably deflated a bit because it's just the notation pulling the old switcharoo.

On the other hand Dave does seem genuinely excited by numbers, and this week brings to our attention that for challenge number 153 we have 5! + 4! + 3! + 2! + 1! = 153 and blastoff!

Now that's the spirit!

Ok, fine, I added that blastoff stuff myself but I don't think he'll mind.

With helpers `sum0()` and `product()` from `List::Util` the logic flow is straighforward — the heavy lifting, if you want to call it that, is done for computing the factorial sum in `factorion()`.

```perl
    for my $i (@ARGV) {
        my $f = is_factorion($i);
        say join "\t", '', $i, $f;
    }

    sub is_factorion ( $n ) {
        my $f = factorion($n);
        return $f == $n ? 1 : 0;
    }

    sub factorion ( $n ) {
        return sum0 map { factorial($_) } split //, $n;
    }

    sub factorial ( $n ) {
        return 1 if $n == 0;
        state $factorials ;
        if ( !$factorials->{$n} ) {
            $factorials->{$n} = product 1 .. $n;
        }
        return $factorials->{$n};
    }
```

[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/pete-houston/perl/ch-2.pl)

Pete makes a point of noting the module functions he *isn't* using, preferring to write his own: `List::Util::sum()` and `Math::Prime::Util::factorial()`. That said the solutions we're seeing to this task all have a quite a bit of self-similarity, and one of the larger variances we have is in the methods for aquiring and accessing the required factorials. Here Pete creates a `state` hash within the `fac()` function to either quickly return precomputed factorials or create new ones as required. To *produce* the factorials the definition is recursive, calling `fac()` for the previous value and multiplying it by the new factor. Which is novel, and neat.

```perl
    sub is_factorion {
        my $n = shift;
        return 0 unless defined ($n) && $n =~ /^[1-9][0-9]*$/;
        return $n == sum map { fac ($_) } split //, $n;
    }

    # Instead of List::Util::sum
    sub sum (@) {
        my $tot = shift;
        $tot += $_ for @_;
        return $tot;
    }

    # Instead of Math::Prime::Util::factorial
    sub fac {
        state $have = { 0 => 1 };
        my $i = shift;
        return $have->{$i} if $have->{$i};
        my $fac = $i * fac ($i - 1);
        $have->{$i} = $fac;
        return $fac;
    }
```

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/e-choroba/perl/ch-2.pl)

Choroba uses a similar recurrence relation to generate his factorials, here placing the operation within a `for` loop. Starting with a kernal, each factorial created is then used as a base product to calculate the next. The products are hashed for constant-time access to the values. Slightly rearranged this time, again we see the actual factorion validation massaged into a single chained sequence of operations.

```perl
    use List::Util qw{ sum };

    {   my %factorial = (0 => 1);
        $factorial{$_} = $factorial{ $_ - 1 } * $_ for 1 .. 10;

        sub is_factorion ($n) {
            sum(@factorial{ split //, $n }) == $n
        }
    }
```

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/jo-37/perl/ch-2.pl)

Jorg returns again this week to the sweet embrace, the seductive snare, of [`Math::Prime::Util`](https://metacpan.org/pod/Math::Prime::Util), this time bringing in four functions: `vecsum()`, `factorial()`, `vecnone()` and `todigits()`. These are all somewhat familiar operations with unfamiliar names, specially tuned for number theory problems.

* `vecsum()` is like `sum0()` for an an array of integers. Because a signed `Int` type is used under the hood larger values can be stored without a floating-point error
* `factorial()` does what you think
* `vecnone {BLOCK}` returns true if the BLOCK expression never evaluates to true for any of the list values, which again are required to be integers.
* `todigits()` breaks a number up into an array of digits, much as `split //` has been used here elsewhere today.

The functions may change, but the essential processing remains the same.

```perl
    say 0 + factorion($ARGV[0], $base);

    sub factorion($n, $base=10) {
        $n == vecsum map factorial($_), todigits $n, $base;
    }
```

[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/peter-campbell-smith/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[!Task one is quite easy. Factorions are quite rare.](https://pjcs-pwc.blogspot.com/2022/02/task-one-is-quite-easy-factorions-are.html)

I was musing earlier today about the scarcity of the factorions, and that for a script that spot-checks individual values how unlikely it would be to find one. Even taking into account the upper boundary and clearly stating that it was pointless to inquire about values over 2,540,160,  a guess within that range would have only a 0.00016% chance of success. Those aren't big-lottery prize odds, but certainly are well into the range of the smaller ones.

Apparently the same idea occured to Peter, as he notes:

> I was tempted to submit

> &nbsp;&nbsp;&nbsp;&nbsp;`say 'no';`

> which is nearly always correct

However he does go on to not only compute the factorions but to reproduce the formatting of the examples. The operations are all lovingly hand-made and inlined into the control flow. Of note his production of a lookup array of factorials computes only exactly what needs to be done, only making a single further multiplication from the previous value.

```perl
    for $n (1 .. 9) {
        $fac[$n] = $n * $fac[$n - 1];
    }
```

No waste, no fuss.

Here's the remainder of his process:

```perl
       $sum = 0;
       $string1 = $string2 = '';

       # test for being a factorion
       while ($test =~ m|(\d)|g) {
       	$sum += $fac[$1];
       	$string1 .= qq[$1! + ];
       	$string2 .= qq[$fac[$1] + ];
       }

       # format output
       say qq[\nInput:  $test];
       $string1 =~ s|...$||;
       $string2 =~ s|...$||;
       if ($sum == $test) {
       	say qq[Output: 1 since $string1 => $string2 = $test];
       } else {
       	say qq[Output: 0 since $string1 => $string2 = $sum <> $test];
       }
```


## Blogs and Additional Submissions in Guest Languages for Task 2:


[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/abigail/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/abigail/awk/ch-2.awk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/abigail/bash/ch-2.sh), [Bc](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/abigail/bc/ch-2.bc), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/abigail/c/ch-2.c), [Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/abigail/go/ch-2.go), [Java](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/abigail/java/ch-2.java), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/abigail/lua/ch-2.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/abigail/node/ch-2.js), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/abigail/pascal/ch-2.p), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/abigail/python/ch-2.py), [R](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/abigail/r/ch-2.r), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/abigail/ruby/ch-2.rb), [Scheme](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/abigail/scheme/ch-2.scm), [Tcl](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/abigail/tcl/ch-2.tcl)


[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/adam-russell/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Finding the Factorials and Factorions That Are Left](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2022/02/27)


[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/bruce-gray/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/bruce-gray/raku/ch-2.raku), [Webassembly](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/bruce-gray/webassembly/ch-2.wat)


[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/colin-crain/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/colin-crain/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Factory People in a Factory World - Programming Excursions in Perl and Raku](https://colincrain.com/2022/02/25/factory-people-in-a-factory-world/)

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/polettix/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/polettix/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC153 - Factorions - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/02/24/pwc153-factorions/)

[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/lubos-kolouch/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Php](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/lubos-kolouch/php/ch-2.php), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/lubos-kolouch/python/ch-2.py)

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/roger-bell-west/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/roger-bell-west/javascript/ch-2.js), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/roger-bell-west/kotlin/ch-2.kt), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/roger-bell-west/lua/ch-2.lua), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/roger-bell-west/postscript/ch-2.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/roger-bell-west/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/roger-bell-west/raku/ch-2.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/roger-bell-west/ruby/ch-2.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/roger-bell-west/rust/ch-2.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: The Weekly Challenge 153: Factoriality](https://blog.firedrake.org/archive/2022/02/The_Weekly_Challenge_153__Factoriality.html)

[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/ulrich-rieke/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/ulrich-rieke/cpp/ch-2.cpp), [Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/ulrich-rieke/haskell/ch-2.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/ulrich-rieke/raku/ch-2.raku)

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-153/wlmb/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 153 – W. Luis Mochán](https://wlmb.github.io/2022/02/21/PWC153/)









------------------------------------------





---

<p> &nbsp; </p>
<p> &nbsp; </p>
<p> &nbsp; </p>
<p> &nbsp; </p>

<center>
<h1 id="PWC153BLOGS">_________ THE BLOG PAGES _________</h1>
</center>


---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, by some miracle I somehow continue to maintain my bearings.**

**Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your Unquenchable *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC153BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *FOLLOW* these *BLOG* *LINKS*:

**( ...*don't think, trust your training, you're in the zone, just do it ...* )**


**Adam Russell**

 * [Finding the Factorials and Factorions That Are Left](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2022/02/27) ( *Perl* )

**Alexander Pankoff**

 * [Challenge 153 Task #1 - Factorials left, factorials right, factorials everywhere!](https://pankoff.net/pages/perl-weekly-challenge/challenge-153-task-1.html) ( *Perl & Raku* )
 * [Challenge 153 Task #2 - Even more factorials and what the fuck are factorions?](https://pankoff.net/pages/perl-weekly-challenge/challenge-153-task-2.html) ( *Perl & Raku* )

**Arne Sommer**

 * [Just the Fact with Raku](https://raku-musings.com/just-the-fact.html) ( *Raku* )

**Colin Crain**

 * [Facts Left on the Table by the Front Door - Programming Excursions in Perl and Raku](https://colincrain.com/2022/02/24/facts-left-on-the-table-by-the-front-door/) ( *Perl & Raku* )
 * [Factory People in a Factory World - Programming Excursions in Perl and Raku](https://colincrain.com/2022/02/25/factory-people-in-a-factory-world/) ( *Perl & Raku* )

**Dave Jacoby**

 * [Luck is not a Factor!: Weekly Challenge #153 | Committed to Memory](https://jacoby.github.io/2022/02/21/luck-is-not-a-factor-weekly-challenge-153.html) ( *Perl* )

**Flavio Poletti**

 * [PWC153 - Left Factorials - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/02/23/pwc153-left-factorials/) ( *Perl & Raku* )
 * [PWC153 - Factorions - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/02/24/pwc153-factorions/) ( *Perl & Raku* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 153: Left Factorials and Factorions](http://blogs.perl.org/users/laurent_r/2022/02/perl-weekly-challenge-153-left-factorials-and-factorions.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 153: take it easy – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2022/02/21/PerlWeeklyChallenge153.html#task1) ( *Raku* )

**Peter Campbell Smith**

 * [!Task one is quite easy. Factorions are quite rare.](https://pjcs-pwc.blogspot.com/2022/02/task-one-is-quite-easy-factorions-are.html) ( *Perl* )

**Roger Bell_West**

 * [RogerBW's Blog: The Weekly Challenge 153: Factoriality](https://blog.firedrake.org/archive/2022/02/The_Weekly_Challenge_153__Factoriality.html) ( *Perl & Raku* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 153 – W. Luis Mochán](https://wlmb.github.io/2022/02/21/PWC153/) ( *Perl* )
