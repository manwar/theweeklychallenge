---
author:       Colin Crain
date:         2022-09-12T00:00:00
description:  "Colin Crain › Perl Weekly Review #175"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #175"
image:        images/blog/p5-review-challenge-175.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-174/).* )

Welcome to the Perl review pages for **Week 175** of The Weekly Challenge! Here we will take the time to discuss the  submissions offered up by the team, factor out some common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

---

### ●︎ Why do we do these challenges?

I suppose any reasonable answer to that question would come from a field as wide ranging and varied as the people who choose to join the team. One thing, though, is clear: it's not a competition, and there are no judges, even if there is a "prize" of sorts. About that -- I think of it more as an honorarium periodically awarded to acknowledge the efforts we make towards this strange goal. So there's no determination to find the *fastest*, or the *shortest*, or even, in some abstract way, the *best* way to go about things, although I'm certain the participants have their own aspirations and personal drives. As Perl is such a wonderfully expressive language, this provides quite a bit of fodder to the core idea of TMTOWTDI, producing a gamut of varied techniques and solutions.

Even the tasks themselves are often open to a certain amount of discretionary interpretation. What we end up with is a situation where each participant is producing something in the manner they personally find the most interesting and satisfying. Some team members will focus on carefully crafted complete applications, thoroughly vetting input data and handling every use case they can think up. Others choose to apply themselves to the logic of the underlying puzzle and making it work in the most elegant way they can. Some eschew modules they would ordinarily reach for, others embrace them, bringing to light wheels perhaps invented years ago that happen to exactly solve the problem in front of them today.

I've been considering this question for some time and have found one binding commonality between all of us out solving these challenges each week, in that however we normally live our lives, the task in front of us more than likely has nothing to do with any of that. And I think this has great value. We all do what we do, in the real world, and hopefully we do it well. The Weekly Challenge provides us with an opportunity to do something germane to that life yet distinctly different; if we only do the things we already know how to do then we will only do the same things over and over. This is where the "challenge" aspect comes into play.

So we can consider The Weekly Challenge as providing a problem space outside of our comfort zone, as far out from that comfort as we wish to take things. From those reaches we can gather and learn things, pick and choose and bring what we want back into our lives. Personally, I think that's what this whole thing is about. YMMV.

---

<strong><emp>Every week there is an enormous global collective effort made by the team, analyzing and creatively coding the submissions, and that effort deserves credit due.</emp></strong>

And that, my friends, is why I'm here: to try and figure out ways to do just that.

So that's that... I'm ready now — let’s go in and see what we can find.

---

### For Added Context

Before we begin, you may wish to revisit either the pages for the [**original tasks**](/blog/perl-weekly-challenge-175/) or the summary [**recap**](/blog/recap-challenge-175/) of the challenge. But don't worry about it, the challenge text will be repeated and presented as we progress from task to task.

Oh, and one ***more*** thing before we finally get started:

<br>

### Getting in Touch with Us
***

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please feel free to email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

***

<br>

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

<br>

### Enough? Fine. So without even further ado...

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC175TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC175TASK2)   &nbsp;  &nbsp;  &nbsp;       •   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC175BLOGS)    &nbsp;  &nbsp;  &nbsp;       •

---

# TASK 1 {#PWC175TASK1}

# Last Sunday
*Submitted by: Mohammad S Anwar*

Write a script to list Last Sunday of every month in the given year.

For example, for year 2022, we should get the following:

```
    2022-01-30
    2022-02-27
    2022-03-27
    2022-04-24
    2022-05-29
    2022-06-26
    2022-07-31
    2022-08-28
    2022-09-25
    2022-10-30
    2022-11-27
    2022-12-25
```

## about the solutions
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/adam-russell/perl/ch-1.pl),
[**Ali Moradi**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/deadmarshal/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/athanasius/perl/ch-1.pl),
[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/bruce-gray/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/cheok-yin-fung/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/colin-crain/perl/ch-1.pl),
[**Dave Cross**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/dave-cross/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/dave-jacoby/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/polettix/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/jaldhar-h-vyas/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/jo-37/perl/ch-1.pl),
[**Kjetil Skotheim**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/kjetillll/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/laurent-rosenfeld/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/lubos-kolouch/perl/ch-1.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/mattneleigh/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/mohammad-anwar/perl/ch-1.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/peter-campbell-smith/perl/ch-1.pl),
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/robert-dicicco/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/roger-bell-west/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/sgreen/perl/ch-1.pl),
[**Stephen G Lynn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/steve-g-lynn/perl/ch-1.pl),
[**Steven Wilson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/steven-wilson/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/ulrich-rieke/perl/ch-1.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/wlmb/perl/ch-1.pl), and
[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/walt-mankowski/perl/ch-1.pl)

Dates and times are uniquely human constructions. Their measurements are a product of necessity, evolved over aeons, by generations of cultures that have risen only to fall again into the dustbin of history.

Dates and times, for all of that evolution, have retained a remarkable degree of similarity over the centuries due to the practicality of the divisions and inconvenience of altering them. A month is the cycle of the moon, give or take, and quadrisecting that into four weeks gives you half a month and half again, a simple concept apparently unaccounted for in some valiant yet doomed attempts to instill a decimal metric week of ten days.

Although unrelated to the challenge at hand, the current time divisions are descended from Babylonian sexagesimal numbering and have remained sililarly resistant to change. Sixty is a highly-divisible number, with divisors 30, 20, 15, 12, 10, 6, 5, 4, 3, and 2, allowing for a wealth of fractional options to approximate a short span of hours, minutes or seconds. The 24 hours in the day are similarly highly divisible, and I believe the many options these divisions make available is what makes this non-decimal terminology so useful despite the complications to performing calculations on the figures.

The last Sunday of every month is not exactly a trivial thing to figure out from scratch, as the assignment of days varies both between months and years according to arcane rules that have evolved over centuries. This is why it is generally regarded as wise when practicing the dark arts of computing dates to make use of the protection established in using libraries dedicated to the task, robustly constructed to navigate the forest of special cases that may arise.

Although some solutions provided more direct computation than others, all the solutions reviewed made use of one library or another.


There were 28 submissions for the first task this past week.

## A SELECTION of SUBMISSIONS
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/mohammad-anwar/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/dave-jacoby/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/ulrich-rieke/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/lubos-kolouch/perl/ch-1.pl),
[**Ali Moradi**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/deadmarshal/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/roger-bell-west/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/colin-crain/perl/ch-1.pl),
[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/walt-mankowski/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/duncan-c-white/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/sgreen/perl/ch-1.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/peter-campbell-smith/perl/ch-1.pl), and
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/mattneleigh/perl/ch-1.pl)


The `DateTime` module was by far the most commonly imported, although we did see others more closely selected for the specific needs of the task. Every solution reviewed required a module of some sort, if only to acquire a base of seconds from the epoch to perform its arithmetic alterations on.


[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/mohammad-anwar/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/mohammad-anwar/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/mohammad-anwar/raku/ch-1.raku), [Swift](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/mohammad-anwar/swift/ch-1.swift)

Mohammad will start us off with an approach using a `DateTime` object to hold the last Sunday in question, repeated for each of the twelve months of the year.

In his `last_sunday_of()` routine a new     `DateTime` object is built for the month and year entered, with computational steps at instantiation to move the date selected forward one month and backwards one day, to select the last day of the month. So far so good. He then employs a little modular arithmetic trick: the day of the week runs from 1 to 7, with 7 being Sunday. So if the day is not already Sunday, he subtracts the number of days of the day of the week from the `DateTime` object. This would produce a day_of_week equal to 0, which via the particular version of modular arithmetic used for weekday numbering rolls over to become 7, and you can see how this is the correct number of days to look back.

```perl
    sub all_last_sunday_of($year) {
        my @ls = ();
        push @ls, last_sunday_of($_, $year) for (1..12);
        return \@ls;
    }

    sub last_sunday_of($month, $year) {
        my $dt = DateTime->new(year => $year, month => $month, day => 1)
                         ->add(months => 1)
                         ->subtract(days => 1);

        my $dow = $dt->day_of_week;
        $dt->subtract(days => $dow) if $dow != 7;

        return $dt->ymd('-');
    }
```

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/dave-jacoby/perl/ch-1.pl)

Dave rolls all of the logic into a single loop over all of the months for his solution, while taking a slightly different tack in the date arithmetic. After instantiating to the first day of the month he then adds 32 days, more than enough for any month. He then starts subtracting days, first until he is back within the frame of the month being searched, and then until the `day_of_week` value equals 7, indicating Sunday.

```perl
    use DateTime;

    my $year = 2022;

    for my $month ( 1 .. 12 ) {
        my $dt = DateTime->new(
            year      => $year,
            month     => $month,
            day       => 1,
            time_zone => 'floating'
        );
        $dt->add( days => 32 );

        # Remember that days of week are 1-7, and 0 doesn't match
        # this isn't crontab
        while (1) {
            $dt->subtract( days => 1 );
            next unless $dt->month == $month;
            last if $dt->day_of_week == 7;
        }
        say $dt->ymd;
    }
```

[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/ulrich-rieke/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/ulrich-rieke/haskell/ch-1.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/ulrich-rieke/raku/ch-1.raku)

I find it interesting how many slightly different approaches we saw to homing in on the last day of the month, before moving backwards to find the last Sunday.

Here Ulrich uses a hard list of month spans, with alteration made for leap years, to instantiate a new DateTime object at the last day of each month. Once we have adjusted the day by subtracting until Sunday this object is stored in an array until we ultimately report the 12 last  Sundays.

```perl
    use DateTime ;

    my $year = $ARGV[0] ;
    my @lastDays = ( 31 , 28 , 31 , 30 , 31 , 30 , 31 , 31 , 30 , 31 , 30 , 31) ;
    my $dt1 = DateTime->new( year => $year , month => 12 , day => 10 ) ;
    if ( $dt1->is_leap_year ) {
      $lastDays[1] = 29 ;
    }
    my @lastSundays ;
    for my $month( 1 .. 12 ) {
      my $dt = DateTime->new( year => $year , month => $month , day =>
        $lastDays[ $month - 1 ] ) ;
      while ( $dt->day_of_week != 7 ) {
          $dt->subtract( days => 1 ) ;
      }
      push @lastSundays , $dt ;
    }
    map { say $_->ymd} @lastSundays ;
```

[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/lubos-kolouch/perl/ch-1.pl)

`DateTime`, as it turns out, does actually just come with a `last_day_of_month()` constructor, which Lubos used to determine the day number for each month. He then uses this to start making and looking at new `DateTime` objects until he finds the Sunday he is looking for.

```perl
    use DateTime;

    sub get_last_sunday {
        my ( $year, $month ) = @_;

        my $day =
          DateTime->last_day_of_month( year => $year, month => $month )->day;

        while (1) {
            my $dt = DateTime->new(
                year  => $year,
                month => $month,
                day   => $day
            );

            if ( $dt->day_of_week == 7 ) {
                return $dt->ymd;
            }

            $day--;
        }
        return 1;
    }
```

[**Ali Moradi**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/deadmarshal/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/deadmarshal/cpp/ch-1.cpp), [D](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/deadmarshal/d/ch1.d), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/deadmarshal/lua/ch-1.lua), [Modula-3](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/deadmarshal/modula-3/ch1), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/deadmarshal/pascal/ch1.pas)

My takeaway from this little foray is that not only are date and time calculations confusing, but even using the `DateTime` module has more than its share of complexity. I believe this is because the module, aiming to be general purpose, is required to perform so many different types of calculations.

As mentioned above, `last_day_of_month` is a *constructor*. Meaning that it *already* returns a perfectly good `DateTime` object for that day. We can then simply subtract single days from that object until the `day_of_week` attribute reads 7.

```perl
    sub last_sunday{
      my ($year) = @_;
      foreach(1..12){
        my $dt = DateTime->last_day_of_month(year => $year, month => $_);
        while($dt->day_of_week != 7){
          $dt = $dt->subtract(days => 1);
        }
        my $date = $dt->date;
        print "$date\n";
      }
    }
```

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/roger-bell-west/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/roger-bell-west/javascript/ch-1.js), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/roger-bell-west/kotlin/ch-1.kt), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/roger-bell-west/postscript/ch-1.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/roger-bell-west/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/roger-bell-west/raku/ch-1.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/roger-bell-west/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/roger-bell-west/rust/ch-1.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: The Weekly Challenge 175: Perfect Sunday](https://blog.firedrake.org/archive/2022/07/The_Weekly_Challenge_175__Perfect_Sunday.html)

Roger presents us with another version of this nicely compact form. Notice we have some options to for output formatting methods.

```perl
    sub lastsunday($year) {
      my @o;
      foreach my $month (1..12) {
        my $dt = DateTime->last_day_of_month(year => $year,
                                             month => $month);
        my $dl = $dt->day_of_week();
        if ($dl != 7) {
          $dt->subtract(days => $dl);
        }
        push @o,$dt->strftime('%Y-%m-%d');
      }
      return \@o;
    }
```

[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/colin-crain/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[I Know What You Did Last Sunday - Programming Excursions in Perl and Raku](https://colincrain.com/2022/07/30/i-know-what-you-did-last-sunday)

For my own solution I used the Unicode Common Locale Data Repository formatting option for the output, which aims to handle anything you might throw at it.

```perl
    use DateTime ;
    my $year = shift @ARGV // 2022;

    for my $month ( 1..12 ) {
        my $dt = DateTime->last_day_of_month( year => $year, month => $month );
        $dt->subtract( days => 1 ) until $dt->day_of_week == 7;
        say $dt->format_cldr( "MMM dd, YYYY" );
    }
```



[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/walt-mankowski/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/walt-mankowski/c/ch-1.c)

Now let's wrap up our examination of the `DateTime` module. Walt also used the `last_day_of_month` constructor, but then does his own arithmetic in a similar way to what Mohammad started us off with in the first example above. As it works out, the `day_of_week` attribute is the offset from the last Sunday, with the caveat we take it modulo 7. So simply subtracting this offset directly calculates the date we want. Now we have a year, month and day, so we can use `printf` to format our output string.

```perl
    my $year = $ARGV[0];
    for my $month (1..12) {
        my $dt = DateTime->last_day_of_month(year => $year, month => $month);
        my $days_to_sunday = $dt->day_of_week % 7;
        my $final_sunday = $dt->day - $days_to_sunday;
        printf "%d-%02d-%02d\n", $year, $month, $final_sunday;
    }
```

[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/duncan-c-white/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/duncan-c-white/C/ch-1.c)

I suggested the size and complexity of the `DateTime` module may have contributed to the wide range of approaches we saw homing on the dates for each month. The `DateTime` module, as it is, desires to be all things to all jobs, and hace by necessity contains a large number of options to handle various contingencies. The downside of this is that it can be hard to navigate and find the optimal solution to a problem.

Duncan avoids this by bringing in a much more lightweight package, in the form of the `Date::Simple` module, importing the constructor `ymd`.

With each month, he then proceeds with a single C-style `for` loop. After creating a new object using `ymd`, the loop advances, adding a day at a time, until the month attribute on the object changes. At every turn, though, the day of the week is checked to see if it is Sunday, and if it is the date is recorded. When the loop finishes the last recorded Sunday will be the last Sunday.

Nice.

```perl
    use Date::Simple ('ymd');


    my $debug=0;
    die "Usage: last-sunday-in-every-month [--debug] YYYY\n"
        unless GetOptions( "debug"=>\$debug ) && @ARGV==1;
    my $y = shift;

    foreach my $m (1..12)
    {
        my $sunday;
        for( my $d = ymd($y, $m, 1); $d->month == $m; $d++ )
        {
            $sunday = $d if $d->day_of_week() == 0;
        }
        say $sunday;
    }
```

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/sgreen/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/sgreen/python/ch-1.py)


&nbsp;&nbsp;**blog writeup:**
[Totient numbers on a Sunday](https://dev.to/simongreennet/totient-numbers-on-a-sunday-5fnc)

Simon also brings us a more focused module to assist, this the aptly named `Date::Calc`. This module does not even create an object to be worked on, instead providing a variety of functions to perform calculations on dates kept as (year, month, day) data.

After querying the last day of the month, the day of the week for that day is delivered as a number from 1 to 7, as in `DateTime`. The modular subtraction we saw with Walt above can then be done and the values formatted using `sprintf`.


```perl
    use Date::Calc (qw(This_Year Days_in_Month Day_of_Week));

    # Use the year provided or the current year if it wasn't
    sub main ( $year = This_Year() ) {

        foreach my $month ( 1 .. 12 ) {
            # Get the number of days in a month
            my $last_day = Days_in_Month( $year, $month );

            # Get the day of week of the last day (Monday is 1, Sunday is 7)
            my $dow = Day_of_Week( $year, $month, $last_day );

            # Take off the number of days to get last Sunday
            say sprintf '%d-%02d-%02d', $year, $month, $last_day - $dow % 7;
        }
    }
```

[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/peter-campbell-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Dates, and more recursively defined numbers](https://pjcs-pwc.blogspot.com/2022/07/dates-and-more-recursively-defined.html)

In the same general vein of reasoning, Peter uses `Time::Local` to convert a data array onto a number of seconds since the epoch. Starting with a list of months from 1 to 12, a time to epoch for these values gives us the first day of the *following* month, as `localtime` months are indexed 0-11. He can then work backwards, subtracting the number of seconds in a day, which is 60 times 60 times 24, or 86400, times the computed number of days backward until we reach Sunday.

Once we've found our day in seconds, we an use `localtime` to get back to a array of associated date data.

```perl
    use Time::Local qw(timelocal_posix);

       for $m (1 .. 12) {

           # last time reset year and month
           $year ++ if $m == 12;
           $month = $m % 12;

           # unix time on 1st of month
           $time = timelocal_posix(0, 0, 12, 1, $month, $year - 1900);
           @t = localtime($time);

           # move back 7 days if Sunday, 6 if Saturday ...
           $back = $t[6] == 0 ? 7 : $t[6];
           $time -= $back * 86400;

           # and get the date
           @t = localtime($time);
           say sprintf('%04d-%02d-%02d', $t[5] + 1900, $t[4] + 1, $t[3]);
       }
```

[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/mattneleigh/perl/ch-1.pl)

Finally we have Matthew, who meticulously follows a similar route, manipulating seconds from the epoch. His scheme is to locate the first Sunday after New Years Day, then advance by weeks, recording the seconds and noting when we change months. The last record made then will be the last Sunday in that month, which is immediately converted into string form and output using `sprintf` for formatting. We stop when the year changes.



```perl
    sub last_sundays_in_year{
        use Time::Local;
        use constant SECONDS_PER_DAY  => 86400;
        use constant SECONDS_PER_WEEK => 604800;

        my $year = int(shift());

        # Not dealing with anything earlier than 1000
        # due to the vagaries of timegm();
        # timegm_modern() doesn't seem to be available
        # on most of my systems, so eh...
        return(undef)
            if($year < 1000);

        my $time;
        my @time_fields;
        my @dates;

        # Seconds since the start of the epoch at
        # 00:01:00 GMT on January 1 in the specified
        # year
        $time = timegm(0, 1, 0, 1, 0, $year);
        @time_fields = gmtime($time);

        # Advance $time to the first Sunday AFTER
        # New Year's Day (even if NYD is itself a
        # Sunday)
        $time += (7 - $time_fields[6]) * SECONDS_PER_DAY;

        # Loop until we've passed the end of the
        # specified year
        $year -= 1900;
        while($time_fields[5] == $year){
            my @prev_time_fields = @time_fields;

            # Advance the time by a week
            $time += SECONDS_PER_WEEK;
            @time_fields = gmtime($time);

            if($time_fields[4] != $prev_time_fields[4]){
                # We changed months... store the previous
                # Sunday
                push(
                    @dates,
                    sprintf(
                        "%04d-%02d-%02d",
                        $prev_time_fields[5] + 1900,
                        $prev_time_fields[4] + 1,
                        $prev_time_fields[3],
                    )
                );
            }
        }

        return(@dates);

    }
```


## Blogs and Additional Submissions in Guest Languages for Task 1:


[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/adam-russell/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Fortran](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/adam-russell/fortran/ch-1.f), [Java](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/adam-russell/java/ch-1.java)


&nbsp;&nbsp;**blog writeup:**
[Sunday Was Perfectly Totient   - RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2022/07/30)

&nbsp;&nbsp;**blog writeup:**
[The Weekly Challenge 175: Last Sunday (Fortran Solution): adamcrussell — LiveJournal](https://adamcrussell.livejournal.com/37064.html)


[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/athanasius/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/athanasius/raku/ch-1.raku)


[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/bruce-gray/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/bruce-gray/raku/ch-1.raku)


[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/cheok-yin-fung/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/cheok-yin-fung/julia/ch-1.jl), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/cheok-yin-fung/raku/ch-1.raku)


[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/polettix/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/polettix/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC175 - Last Sunday - ETOOBUSY](https://etoobusy.polettix.it/2022/07/27/pwc175-last-sunday/)


[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/jaldhar-h-vyas/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/jaldhar-h-vyas/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge: Week 175](https://www.braincells.com/perl/2022/07/perl_weekly_challenge_week_175.html)


[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/james-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #175](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-175/james-smith)


[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/laurent-rosenfeld/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/laurent-rosenfeld/julia/ch-1.jl), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/laurent-rosenfeld/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/laurent-rosenfeld/raku/ch-1.raku), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/laurent-rosenfeld/ruby/ch-1.rb)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 175: Last Sunday and Perfect Totient Numbers](http://blogs.perl.org/users/laurent_r/2022/07/perl-weekly-challenge-175-last-sunday-and-perfect-totient-numbers.html)


[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/robert-dicicco/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/robert-dicicco/julia/ch-1.jl), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/robert-dicicco/raku/ch-1.raku), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/robert-dicicco/ruby/ch-1.rb)


[**Stephen G Lynn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/steve-g-lynn/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/steve-g-lynn/julia/ch-1.jl), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/steve-g-lynn/raku/ch-1.p6)


&nbsp;&nbsp;**blog writeup:**
[PWC 175](https://thiujiac.blogspot.com/2022/07/pwc-175.html)


[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/wlmb/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 175 – W. Luis Mochán](https://wlmb.github.io/2022/07/25/PWC175/)


------------------------------------------





---

# TASK 2 {#PWC175TASK2}

# Perfect Totient Numbers
*Submitted by: Mohammad S Anwar*

Write a script to generate first 20 Perfect Totient Numbers. Please checkout [wikipedia page](https://en.wikipedia.org/wiki/Perfect_totient_number) for more informations.


**Output**

```
        3,    9,    15,   27,  39,   81,   111,  183,  243,  255,
        327,  363,  471,  729, 2187, 2199, 3063, 4359, 4375, 5571
```



## about the solutions
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/adam-russell/perl/ch-2.pl),
[**Ali Moradi**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/deadmarshal/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/athanasius/perl/ch-2.pl),
[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/bruce-gray/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/cheok-yin-fung/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/colin-crain/perl/ch-2.pl),
[**Dave Cross**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/dave-cross/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/polettix/perl/ch-2.pl),
[**Gurunandan Bhat**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/bhat_gurunandan/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/jaldhar-h-vyas/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/james-smith/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/jo-37/perl/ch-2.pl),
[**Kjetil Skotheim**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/kjetillll/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/laurent-rosenfeld/perl/ch-2.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/mattneleigh/perl/ch-2.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/mohammad-anwar/perl/ch-2.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/peter-campbell-smith/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/roger-bell-west/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/sgreen/perl/ch-2.pl),
[**Stephen G Lynn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/steve-g-lynn/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/ulrich-rieke/perl/ch-2.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/wlmb/perl/ch-2.pl), and
[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/walt-mankowski/perl/ch-2.pl)

The definition for a totient number is the count of positve integer values less than a given number that are also coprime with it: that is to say the two numbers do not share a common prime factor. A little analysis from this starting point might lead us to relationships between this function and prime factoring in general, and the totient's most visible practical application is in constructing the public and private key pairs in the well-known RSA encryption scheme.

To find a "perfect totient number" we apply the totient function iteratively to a value — reapplying the function to the result of the previous application — until a value of 1 is reached. As the number of coprime values for number will always be less than the number itself this iterative chain of values always converges with downward pressure towards 1.

If we keep around the intermediate values of this totient chain, we have a descending sequence from the first result to 1. We then sum this sequence and if it is equal to the original input than that numbers is a perfect totient.

The process parallels that of finding a perfect number, where the factors that evenly divide a number are summed, only in this case we use a constructed list of related coprime counts. Yes the two are not completely analogous, but there are distinct similarities — enough that someone thought to carry over the name "perfect" without too much ridicule from their peers. The name stuck and here we are.

There were 25 submissions for the second task this past week.

## A SELECTION of SUBMISSIONS
[**Kjetil Skotheim**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/kjetillll/perl/ch-2.pl),
[**Stephen G Lynn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/steve-g-lynn/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/cheok-yin-fung/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/athanasius/perl/ch-2.pl),
[**Gurunandan Bhat**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/bhat_gurunandan/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/laurent-rosenfeld/perl/ch-2.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/adam-russell/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/jo-37/perl/ch-2.pl),
[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/bruce-gray/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/e-choroba/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/colin-crain/perl/ch-2.pl), and
[**Dave Cross**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/dave-cross/perl/ch-2.pl)

Testing for perfect totient numbers involves both calculating totients and iterating that function, gathering the intermediate steps and producing an aggregate sum. We saw thses steps preformed in a variety of ways, either directly through Perl code or indirectly through a module function. We even had some even more indirect methods that effectively use higher-level programming to produce code that produced the perfect totient values. The world of first-class functions is a wild place.

Wheels within wheels, turtles all the way down. Take your pick.



[**Kjetil Skotheim**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/kjetillll/perl/ch-2.pl)

Kjetil will be happy to guide us into the morass today, boldly leading the way, while also pointing out a few alternate paths that with the right equipment could also lead us in the right direction.

The test for totient perfection involves three essential components: a process for counting the totients themselves, which inside requires a test for being coprime, and outside an iterative wrapper to apply the function and sum until we reach 1.

Note the final 1 is included in the sum, for perhaps less-than-obvious reasons that are outside the scope of our discussion.

In Kjetil's solution two helper functions are created, `gcd` to create a filter allowing only coprimes, and `totient` to count the values this filter allows through. An outermost `while` loop is established to count the 20 requested values.

Inside that wrapper the main work is done by an aggregate summation, where totient values are added until 1 is reached. The final 1 is then added and the sum compared to test for perfection.

Totient values themselves are always even, for reasons again outside the scope here (the values always step in pairs). But given this (provable) fact the sum of any list of even numbers plus 1 will always be odd. Thus when Kjetil tries his next candidate value he can go ahead and add 2, as perfect totient numbers will always be odd.

One more observation on Kjetil's solution is that if you notice he has memoized his totient function to speed multiple requests for the same value, but commented out a similar memoization for the gcd. This is because when evaluating a his totients the paired values sent to obtain the gcd will always differ, so once the totient in memoized those gcd calculations will never be repeated. Hence the memoization is useless overhead.

Lastly, reference is made in the comments to two functions from `Math::Prime::Util::GMP` for the gcd and the totient itself, which, although Kjetil does not use them, I imagine we'll be seeing more of going forward, or the equivalent functions from `Math::Prime::Util`.


```perl
    # use Math::Prime::Util::GMP 'gcd';     # ...is faster, but not a core module
    # use Math::Prime::Util::GMP 'totient'; # ...is screamingly fast!

    use strict; use warnings;
    use Memoize;
    memoize('totient');  #good idea, unless using GMP
    #memoize('gcd');     #bad idea, runs slower

    sub totient { my $n=shift; 0+grep gcd($_,$n)==1, 1..$n-1 }

    sub gcd { my($a,$b)=@_;($a,$b)=($b,$a)if$a>$b;($a,$b)=($b%$a,$a)while$a;$b }

    my $want = shift() // 20;
    my $try = 1;
    while( $want > 0 ){
        my $sum = 0;
        my $n = $try;
        $sum += $n = totient($n) while $n>1;
        print "$try\n" and $want-- if $sum == $try;
        $try+=2;
    }
```

[**Stephen G Lynn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/steve-g-lynn/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/steve-g-lynn/julia/ch-2.jl), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/steve-g-lynn/raku/ch-2.p6)


&nbsp;&nbsp;**blog writeup:**
[PWC 175](https://thiujiac.blogspot.com/2022/07/pwc-175.html)

Leading the, er, "modular" demonstration we have Stephen, who brings us the function `euler_phi()` from `Math::Prime::Util`. The totient function, without further qualification, refers to Euler's Totient Function, and this value is common enough to be given the greek letter phi: φ(*n*). Hence the name. There is also a generalized form of the function, Jordan's Totient function, which is why the distinction is sometimes made.

With totient function in hand, Stephen writes a little recursive routine to call itself
until the result equals 1, gathering an aggregate sum as the recursion collapses.

From there we just need to test for equality.

```perl
    use Math::Prime::Util qw(euler_phi);

    my $ctr=0;
    for my $i (2 .. 10_000) {
        if ($i == &iterated_totient($i)){
            print "$i ";
            $ctr++;
        }
        last if $ctr >= 20;
    }
    print "\n";


    # referred to perl 5 code in https://oeis.org/A082897
    sub iterated_totient {
        my ($n)=@_;

        my $totient=euler_phi($n);

        return 1 if $totient == 1;

        return $totient + iterated_totient($totient);
    }
```

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/cheok-yin-fung/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/cheok-yin-fung/raku/ch-2.raku)

Here's a slightly different example from CY. She sets up a C-style `for` loop to make only sampling odd numbers a breeze, saving on half the trials. An arbitrarily large number is set of an upper bound on searches, but the loop exits well before we get that large.

```perl
    for (my $n0 = 3; $n0 < 1_000_000_000; $n0 += 2) {
        my $n = $n0;
        my $sum = 0;
        do {
            $n = euler_phi($n);
            $sum += $n;
        } until ($sum > $n0 || $n == 1);
        if ($sum == $n0) {
            say $n0;
            $p++;
        }
        last if $p >= ($ARGV[0] || 42);
    }
```

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/athanasius/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/athanasius/raku/ch-2.raku)

Breaking the problem down, we are the main logical complexity in this task is in deriving the iterated totient sum. This requires a totient function and a way to gather a sequence of results and total them.

Using the `euler_phi` function takes care of the totient function, and here the monk creates an intermediate `iterated_totient_sum()` routine to gather the accumulated sum.

Noice the `for` loop reappears to facilitate counting by 2s.

```perl
    {
        my $count = 1;

        for (my $n = 5; $count < $TARGET; $n += 2)
        {
            if (iterated_totient_sum( $n ) == $n)
            {
                print ", $n";
                ++$count;
            }
        }

        print "\n";
    }

    sub iterated_totient_sum
    {
        my ($n)  = @_;
        my  $sum = 0;

        while ($n > 2)
        {
            $n    = euler_phi( $n );
            $sum += $n;
        }

        return ++$sum;      # euler_phi(2) = 1
    }
```

[**Gurunandan Bhat**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/bhat_gurunandan/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/bhat_gurunandan/go/ch-2.go)

But lets go back to directly calculating the totient values. Gurunandan gives us a `totient()` function, which accesses its own `_gcd()` helper. Of note he adds a short-circuiting check that first performs a basic check against divisibility for each value less than the target — if it divides out evenly then there is no point in checking the gcd and we move on.

```perl
    sub _gcd ($a , $b) {

        while ($b != 0) {
            ($a, $b) = ($b, $a % $b);
        }

        return $a;
    }

    sub totient ($n) {

        my $this = $n;
        my $totient = 1;

        while (--$this > 1) {
            #
            # if we have no remainder, then the number is NOT relative
            # prime and no need to calculate the gcd so decrement $this
            # and move on
            #
            next if !($n % $this) ||
                    _gcd ($n, $this) > 1;

            ++ $totient;
        }

        return $totient;
    }
```

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/laurent-rosenfeld/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/laurent-rosenfeld/awk/ch-2.awk), [Bc](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/laurent-rosenfeld/bc/ch-2.bc), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/laurent-rosenfeld/c/ch-2.c), [D](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/laurent-rosenfeld/d/ch-2.d), [Dart](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/laurent-rosenfeld/dart/ch-2.dart), [Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/laurent-rosenfeld/go/ch-2.go), [Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/laurent-rosenfeld/javascript/ch-2.js), [Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/laurent-rosenfeld/julia/ch-2.jl), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/laurent-rosenfeld/kotlin/ch-2.kt), [Nim](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/laurent-rosenfeld/nim/ch-2.nim), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/laurent-rosenfeld/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/laurent-rosenfeld/raku/ch-2.raku), [Ring](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/laurent-rosenfeld/ring/ch-2.ring), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/laurent-rosenfeld/ruby/ch-2.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/laurent-rosenfeld/rust/ch-2.rs), [Scala](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/laurent-rosenfeld/scala/ch-2.scala), [Tcl](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/laurent-rosenfeld/tcl/ch-2.tcl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 175: Last Sunday and Perfect Totient Numbers](http://blogs.perl.org/users/laurent_r/2022/07/perl-weekly-challenge-175-last-sunday-and-perfect-totient-numbers.html)

Here's another example of the technique from Laurent. I have always found the Euclidean GCD algorithm to be the most elegant thing: based in a simple geometric principle it gracefully maps over into a repeated division process that quickly resolves.

Here `grep` is used to filter a list of all possible values less than the target.


```perl
    sub gcd {
        my ($i, $j) = sort { $a <=> $b } @_;
        while ($j) {
            ($i, $j) = ($j, $i % $j);
        }
        return $i;
    }
    sub is_perfect_totient {
        my $num = shift;
        my $n = $num;
        my $sum = 0;
        while ($n >= 1) {
            $n = scalar grep { gcd( $n, $_) == 1 } 1..$n-1;
            $sum += $n;
        }
        return $num == $sum;
    }
```

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/adam-russell/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Java](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/adam-russell/java/ch-2.java)


&nbsp;&nbsp;**blog writeup:**
[Sunday Was Perfectly Totient   - RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2022/07/30)

&nbsp;&nbsp;**blog writeup:**
[The Weekly Challenge 175: Last Sunday (Fortran Solution): adamcrussell — LiveJournal](https://adamcrussell.livejournal.com/37064.html)

In the examples we have seen so far the totient has been determined by checking each value less than the number in question using the gcd, or greatest common divisor, to verify whether or not it is coprime. However the totient can be calculated directly using a mathematical product of a number's prime factors. Adam demonstrates this:


Because of the repeated floating point values in the product an epsilon value is required to check that the totient gathered is in fact 1, or alternately some sort of rounding function. Adam uses an epsilon of 10<sup>-7</sup>.

```perl
    use constant EPSILON => 1e-7;

    sub distinct_prime_factors{
        my $x = shift(@_);
        my %factors;
        for(my $y = 2; $y <= $x; $y++){
            next if $x % $y;
            $x /= $y;
            $factors{$y} = undef;
            redo;
        }
        return keys %factors;
    }

    sub n_perfect_totients{
        my($n) = @_;
        my $x = 1;
        my @perfect_totients;
        {
            $x++;
            my $totient = $x;
            my @totients;
            map {$totient *= (1 - (1 / $_))} distinct_prime_factors($x);
            push @totients, $totient;
            while(abs($totient - 1) > EPSILON){
                map {$totient *= (1 - (1 / $_))} distinct_prime_factors($totient);
                push @totients, $totient;
            }
            push @perfect_totients, $x if unpack("%32I*", pack("I*", @totients)) == $x;
            redo if @perfect_totients < $n;
        }
        return @perfect_totients;
    }
```

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/jo-37/perl/ch-2.pl)

Conceptually, I'm a big fan of what are known as list comprehensions: to be able to define a list by saying something like "give me a list of integers squared, starting at 2". Being able to add additional qualifiers like "make as many as I need" only sweeten the deal.

Jorg and I seems to be at least somewhat on the same page here, as he pretty consistently, given the option, prefers not to deliver a list of numbers but rather some *thing* that delivers the numbers one after another until you politely ask it to stop. Or stop asking it to start. Or, you know, whatever.

In the spirt of this making-machines-to-build-machines spirit, he brings us today the `List::Gen` module, which is chock-full of tools to do things like this. A veritable list-generating, comprehending toolkit, or perhaps workshop would be a better analogy.

```perl
    perfect_totient()->say(shift);

    sub perfect_totient {
        # Build a generator for perfect totient numbers.  Here we use two
        # nested generators to accomplish the task.

        # Build a non-caching generator for odd numbers N starting with 3
        # and filter for perfect totient numbers.
        iterate_stream {$_ + 2}->from(3)->filter_stream(sub {
            # Build a generator for the iterative sequence of totients for N
            # and sum over the sequence's elements.  The generated sequence
            # will start with N because of "from($_)" and will not include 1
            # according to the chained "until" method.  Therefore the
            # expected sum needs to be adjusted: There is an extra "N" and 1
            # is missing. Thus we expect a sum of 2 * N - 1 for a perfect
            # totient number.
            iterate {euler_phi($_)}->from($_)->until('== 1')->sum == 2 * $_ - 1;
        });
    }
```

Several generator functions are being used: `iterate`, `filter_stream` and `iterate_stream`, the last two both being variants of what the module calls "stream generators". The generators are constructed with functions chained to add further qualifying statements, and furthermore all the functions from `List::Util` are also available for massaging the data produced.

So the flow is, starting at the left, that we want to take a list of values that start at 3 and increase by 2 at every step, but are then filtered according to an anonymous coderef that qualifies the value as a perfect totient. Sounds easy when you put it like that. The coderef uses another iterator that constructs a list from the totient repeatedly, starting at the value and stopping when the totient is 1, then applying `sum` to the list. So fudging of the expected sum for a perfect totient is used, as explained, and we are left with a equality comparison, which is handed back to our filter (remember that?).

Sort of like an industrial-strength `grep`, if you will, but that doesn't really do it justice.

[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/bruce-gray/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/bruce-gray/raku/ch-2.raku)

Bruce is back, and brings us `List::Lazy` for our entertainment. I think it fitting to place this alongside Jorg's solution. List generators are the real deal, you know? I like 'em.

```perl
    use ntheory    qw<euler_phi  vecsum>;
    use List::Lazy qw<lazy_range lazy_list>; # Just for fun, to mimic Raku

    sub totients_sum ( $n ) {
        my $totients = lazy_list { $_ > 1 ? $_ = euler_phi $_ : () } $n;

        return vecsum $totients->all;
    }

    sub is_perfect_totient () { $_ == totients_sum($_) }

    my $perfect_totients = lazy_range(1, undef)->grep(\&is_perfect_totient);

    say join ' ', $perfect_totients->next(20);
```

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/e-choroba/perl/ch-2.pl)

In a more, perhaps, er, "comprehensible" vein, Choroba brings us back to iterating our totients by hand, without so many first-class function being bandied about. Which is not to say in any way those methods aren't totally cool. Because they are.

Here, though, we use our new friend `euler_phi` inside a combined function to both calculate the iterated totient sum and compare it to the original value, returning an up/down verdict as to whether the sum is perfect.

```perl
    use Math::Prime::Util qw{ euler_phi };

    sub is_perfect_totient ($x) {
        my $sum = 0;
        my $phi = $x;
        $sum += $phi = euler_phi($phi) while $phi != 1;
        return $sum == $x
    }

    sub perfect_totient_numbers ($size) {
        my @numbers;
        my $candidate = 1;
        while (@numbers < $size) {
            push @numbers, $candidate if is_perfect_totient($candidate);
            ++$candidate;
        }
        return \@numbers
    }
```

[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/colin-crain/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[No Touchy, No Totient - Programming Excursions in Perl and Raku](https://colincrain.com/2022/07/31/no-touchy-no-totient)

For my own solution I chose to make the totient iteration the outboard routine, performing the comparison in the calling statement. This emphasizes the logic in the `iterate_phi` function, which is quite compact. Assignment as an operation returns the value being assigned, in this case the next totient, which is assigned to `$n` and added to the running sum. However if the result is 1 the `while` condition fails and we exit the loop. We never end up adding the trailing 1 that caused us to exit the loop, but because we know it will always be there we simply start with 1 instead, adding it in at the beginning.

```perl
    use ntheory qw ( euler_phi );

    ## input
    my $limit = shift @ARGV // 20;
    my $count = 0;
    my $i = 0;
    my @out;

    while (++$i and $count < 20) {
        $count++ and push @out, $i if $i == iterate_phi($i);
    }

    ## output
    say "@out";


    sub iterate_phi ( $n, $s = 1 ) {
    ## given a value we iterate Euler's totient function on it
    ## until we arrive at a totient of 1, compounding an aggregate sum of the results
    ## this technique skips the final totient, 1, so we add it at the beginning
    ## - it will always be there.
        $s += $n while ($n = euler_phi($n)) != 1;
        return $s;
    }
```




[**Dave Cross**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/dave-cross/perl/ch-2.pl)

With a notable absence of snark, Dave touts the essential Perl virtue of laziness in his solution: others have calculated the list, so the correct way to reference it would be to look it up.

Well he's not wrong, certainly. Although I will argue this does somewhat miss the point — that statement could be evaluated true for really most of what we do around here. One could argue that it's not likely that a single person solving this challenge really cares *what* the specific perfect totient numbers are, and seriously are unlikely to  actually ever need this knowledge. So it's not about the numbers, *per se*, but rather the journey acquiring them. Which in this case involves venturing into the aether and fetching a page from a the OEIS.

```perl
    use HTTP::Tiny;

    # Laziness is good, right? Other people have calculated the sequence.
    my $url = 'https://oeis.org/';
    my $seq_code = 'A082897';
    my $resp = HTTP::Tiny->new->get("$url$seq_code");
    my ($seq) = $resp->{content} =~ /<tt>([\d,\s]+)/;
    my @seq = $seq =~ /(\d+)/g;

    # Truncate to 20.
    $#seq = 19;
    say join ', ', @seq;
```

Alternately I've decided to go with a competing theory, that Dave was very busy that day.

Note that this is completely unsupported by any actual evidence.




## Blogs and Additional Submissions in Guest Languages for Task 2:

[**Ali Moradi**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/deadmarshal/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/deadmarshal/cpp/ch-2.cpp), [D](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/deadmarshal/d/ch2.d), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/deadmarshal/lua/ch-2.lua), [Modula-3](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/deadmarshal/modula-3/ch2), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/deadmarshal/pascal/ch2.pas)


[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/duncan-c-white/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/duncan-c-white/C/ch-2.c)


[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/polettix/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/polettix/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC175 - Perfect Totient Numbers - ETOOBUSY](https://etoobusy.polettix.it/2022/07/28/pwc175-perfect-totient-numbers/)


[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/jaldhar-h-vyas/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/jaldhar-h-vyas/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge: Week 175](https://www.braincells.com/perl/2022/07/perl_weekly_challenge_week_175.html)



[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/james-smith/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #175](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-175/james-smith)


[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/mohammad-anwar/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/mohammad-anwar/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/mohammad-anwar/raku/ch-2.raku), [Swift](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/mohammad-anwar/swift/ch-2.swift)


[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/peter-campbell-smith/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Dates, and more recursively defined numbers](https://pjcs-pwc.blogspot.com/2022/07/dates-and-more-recursively-defined.html)


[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/roger-bell-west/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/roger-bell-west/javascript/ch-2.js), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/roger-bell-west/kotlin/ch-2.kt), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/roger-bell-west/lua/ch-2.lua), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/roger-bell-west/postscript/ch-2.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/roger-bell-west/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/roger-bell-west/raku/ch-2.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/roger-bell-west/ruby/ch-2.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/roger-bell-west/rust/ch-2.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: The Weekly Challenge 175: Perfect Sunday](https://blog.firedrake.org/archive/2022/07/The_Weekly_Challenge_175__Perfect_Sunday.html)


[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/sgreen/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/sgreen/python/ch-2.py)


&nbsp;&nbsp;**blog writeup:**
[Totient numbers on a Sunday](https://dev.to/simongreennet/totient-numbers-on-a-sunday-5fnc)


[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/ulrich-rieke/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/ulrich-rieke/cpp/ch-2.cpp), [Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/ulrich-rieke/haskell/ch-2.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/ulrich-rieke/raku/ch-2.raku)


[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/wlmb/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 175 – W. Luis Mochán](https://wlmb.github.io/2022/07/25/PWC175/)


[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/walt-mankowski/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-175/walt-mankowski/c/ch-2.c)

------------------------------------------





---

<p> &nbsp; </p>
<p> &nbsp; </p>
<p> &nbsp; </p>
<p> &nbsp; </p>

<center>
<h1 id="PWC175BLOGS">_________ THE BLOG PAGES _________</h1>
</center>


---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, by some miracle I somehow continue to maintain my bearings.**

**Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your Unquenchable *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC175BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *FOLLOW* these *BLOG* *LINKS*:

**( ...*don't think, trust your training, you're in the zone, just do it ...* )**


**Adam Russell**

 * [Sunday Was Perfectly Totient   - RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2022/07/30) ( *Perl* )
 * [The Weekly Challenge 175: Last Sunday (Fortran Solution): adamcrussell — LiveJournal](https://adamcrussell.livejournal.com/37064.html) ( *Fortran* )

**Arne Sommer**

 * [Perfect at Last with Raku - Arne Sommer](https://raku-musings.com/perfect-at-last.html) ( *Raku* )

**Colin Crain**

 * [I Know What You Did Last Sunday - Programming Excursions in Perl and Raku](https://colincrain.com/2022/07/30/i-know-what-you-did-last-sunday) ( *Perl* )
 * [No Touchy, No Totient - Programming Excursions in Perl and Raku](https://colincrain.com/2022/07/31/no-touchy-no-totient) ( *Perl* )

**Flavio Poletti**

 * [PWC175 - Last Sunday - ETOOBUSY](https://etoobusy.polettix.it/2022/07/27/pwc175-last-sunday/) ( *Perl & Raku* )
 * [PWC175 - Perfect Totient Numbers - ETOOBUSY](https://etoobusy.polettix.it/2022/07/28/pwc175-perfect-totient-numbers/) ( *Perl & Raku* )

**Jaldhar H. Vyas**

 * [Perl Weekly Challenge: Week 175](https://www.braincells.com/perl/2022/07/perl_weekly_challenge_week_175.html) ( *Perl & Raku* )

**James Smith**

 * [Perl Weekly Challenge #175](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-175/james-smith) ( *Perl* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 175: Last Sunday and Perfect Totient Numbers](http://blogs.perl.org/users/laurent_r/2022/07/perl-weekly-challenge-175-last-sunday-and-perfect-totient-numbers.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 175: Sunday Math! – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2022/07/25/PerlWeeklyChallenge175.html#task1) ( *Raku* )
 * [Perl Weekly Challenge 175: Sunday Math! – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2022/07/25/PerlWeeklyChallenge175.html#task1plperl) ( *PL/Perl* )
 * [Perl Weekly Challenge 175: Sunday Math! – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2022/07/25/PerlWeeklyChallenge175.html#task1plpgsql) ( *PL/PgSQL* )

**Peter Campbell Smith**

 * [Dates, and more recursively defined numbers](https://pjcs-pwc.blogspot.com/2022/07/dates-and-more-recursively-defined.html) ( *Perl* )

**Roger Bell_West**

 * [RogerBW's Blog: The Weekly Challenge 175: Perfect Sunday](https://blog.firedrake.org/archive/2022/07/The_Weekly_Challenge_175__Perfect_Sunday.html) ( *Perl & Raku* )

**Simon Green**

 * [Totient numbers on a Sunday](https://dev.to/simongreennet/totient-numbers-on-a-sunday-5fnc) ( *Perl* )

**Stephen G Lynn**

 * [PWC 175](https://thiujiac.blogspot.com/2022/07/pwc-175.html) ( *Perl & Raku* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 175 – W. Luis Mochán](https://wlmb.github.io/2022/07/25/PWC175/) ( *Perl* )
