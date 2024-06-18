---
author:       Colin Crain
date:         2021-12-20T00:00:00
description:  "Colin Crain › Perl Weekly Review #138"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #138"
image:        images/blog/p5-review-challenge-138.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-137/).* )

Welcome to the Perl review pages for **Week 138** of The Weekly Challenge! Here we will take the time to discuss the  submissions offered up by the team, factor out some common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

---

### Why do we do these challenges?

I suppose any reasonable answers to that question would be as wide ranging and varied as the people who choose to join the team. One thing, though, is clear: it's not a competition, and there are no judges, even if there is a "prize" of sorts. About that -- I think of it more as an honorarium periodically awarded to acknowledge the efforts we make towards this strange goal. So there's no determination to find the *fastest*, or the *shortest*, or even, in some abstract way, the *best* way to go about things, although I'm certain the participants have their own aspirations and personal drives. As Perl is such a wonderfully expressive language, this provides quite a bit of fodder to the core idea of TMTOWTDI, producing a gamut of varied techniques and solutions.

Even the tasks themselves are often open to a certain amount of discretionary interpretation. What we end up with is a situation where each participant is producing something in the manner they find the most interesting or satisfying. Some team members focus on carefully crafted complete applications, thoroughly vetting input data and handling every use case they can think up. Others choose to apply themselves to the logic of the underlying puzzle and making it work in the most elegant way they can. Some eschew modules they would ordinarily reach for, others embrace them, bringing to light wheels perhaps invented years ago that happen to exactly solve the problem in front of them today.

I've been considering this question for some time and have found one binding commonality between all of us out solving these challenges each week, in that however we normally live our lives, the task in front of us more than likely has nothing to do with any of that. And I think this has great value. We all do what we do, in the real world, and hopefully we do it well. The Weekly Challenge provides us with an opportunity to do something germane to that life yet distinctly different; if we only do the things we already know how to do then we will only do the same things over and over. This is where the "challenge" aspect comes into play.

So we can consider The Weekly Challenge as providing a problem space outside of our comfort zone, as far out from that comfort as we wish to take things. From those reaches we can gather and learn things, pick and choose and bring what we want back into our lives. Personally, I think that's its greatest value of all.

---

Every week there is an enormous global collective effort made by the team, analyzing and creatively coding the submissions, and that effort deserves credit due.

And that's why I'm here, to try and figure out how to do that.

Let's get on with it then, have a look and see what we find.

---

**<big>For context</big>**  before we begin, you may wish to revisit either of the pages for the [**original tasks**](/blog/perl-weekly-challenge-138/) or the summary [**recap**](/blog/recap-challenge-138/) of the challenge. But don't worry, the challenges themselves are repeated and presented below as we progress from task by task. Oh, and one more thing before we get started:

### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please feel free to email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

**So finally, without further ado...**

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC138TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC138TASK2)   &nbsp;  &nbsp;  &nbsp;   	•   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC138BLOGS)    &nbsp;  &nbsp;  &nbsp;   	•

---

# TASK 1 {#PWC138TASK1}

# Workdays
*Submitted by: Mohammad S Anwar*

You are given a year, $year in 4-digits form.

Write a script to calculate the total number of workdays in the given year.

For the task, we consider, Monday - Friday as workdays.

**Example 1**
```
    Input: $year = 2021
    Output: 261
```

**Example 2**
```
    Input: $year = 2020
    Output: 262
```


## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/abigail/perl/ch-1.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/arne-sommer/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/athanasius/perl/ch-1.pl),
[**Bob Lied**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/bob-lied/perl/ch-1.pl),
[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/bruce-gray/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/cheok-yin-fung/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/colin-crain/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/dave-jacoby/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/polettix/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/jaldhar-h-vyas/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/jo-37/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/laurent-rosenfeld/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/lubos-kolouch/perl/ch-1.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/mattneleigh/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/mohammad-anwar/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/perlboy1967/perl/ch-1.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/paulo-custodio/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/pete-houston/perl/ch-1.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/peter-campbell-smith/perl/ch-1.pl),
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/robert-dicicco/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/roger-bell-west/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/sgreen/perl/ch-1.pl),
[**Steven Wilson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/steven-wilson/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/ulrich-rieke/perl/ch-1.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/wlmb/perl/ch-1.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/wanderdoc/perl/ch-1.pl)

The number of workdays in a given year varies. These are commonly considered the days Monday through Friday in each week, for those whose work schedule aligns with the norm — hardly a sure thing in this modern world. But here we are, and many still find the classification useful.

Closely related to, yet distinct from, the number of ISO weeks in a year problem that we just dealt with in [PWC137](/blog/perl-weekly-challenge-137/#TASK1), the number of workdays depends on the starting day of the year on January 1st, which will start a possibly incomplete week, and the ending day of the last day of the year, December 31st, which will end another possibly incomplete week. Between these bumpers will be a number of weeks comprising of 5 work days out of 7.

Additionally, to get the calculation right we we will also need to accomodate the possibility of an extra leap-day on February 29th.

It's all a bit of a mess, and this is why the Titans, a race of God-like beings came from beyond the stars and bestowed on humanity modules to help us mortals keep the math straight. Or something like that. The details are unclear. In any case however their provenance, mystical or material, we have the modules now to guide us through the darkness, and this was commonly accepted as the way to proceed.

There were 29 submissions for the first task this past week.

## A LOOK at the VITALS, a FEEL for the PULSE
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/ulrich-rieke/perl/ch-1.pl),
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/wanderdoc/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/duncan-c-white/perl/ch-1.pl),
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/robert-dicicco/perl/ch-1.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/peter-campbell-smith/perl/ch-1.pl),
[**Steven Wilson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/steven-wilson/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/roger-bell-west/perl/ch-1.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/mattneleigh/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/polettix/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/sgreen/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/cheok-yin-fung/perl/ch-1.pl), and
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/dave-jacoby/perl/ch-1.pl)

A very common method was to reach for a module with a `day_of_week()` function of some sort and examine each day in the year, counting the workdays as they arrive. The operation is bounded by the 366 maximum days in the year, so will never blow up on us and will always finish quickly.

With some modules it is possible to keep things abstract and add a day unit to a preexisting object or create an new object for each day of the year. However some members chose to go at the math themselves, keeping the year in relative epoch-seconds and translating to and from that format. There were even strategies that did the work manually and summed the day counts of the first and final  partial weeks with those of the intermediate period to come to a conclusion.

Finally, some members noted that there are only 7 days a year can start on and the year will either be a leap year or not. This means there are only 14 possible states for the system, with a precomputable result for each state. We need only discern the correct state for a given year and we will immediately know the answer.

So for a fairly straightforward task we saw quite a range of approaches.



[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/ulrich-rieke/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/ulrich-rieke/cpp/ch-1.cpp), [Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/ulrich-rieke/haskell/ch-1.hs), [Java](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/ulrich-rieke/java/Challenge138.java), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/ulrich-rieke/raku/ch-1.raku)

Ulrich will start us off with a solution using the `DateTime` module. As we can make no offhand assumptions on the day of the week of either January 1st or December 31st of the input year, we can similarly make no assumptions about the number of weekends that will fall, either completely or incompletely, within that year. This is where the `DateTime` module comes into play, as it knows all about this sort of thing — specifically which dates in a given years fall on which days of the week. So a very natural way to proceed is to count them, or at least the dates which fall on Monday through Friday.

To do this we initialize a new `DateTime` object for January 1st of the year and place it in a loop: if the day of the week is not a Saturday or Sunday, a counter is incremented, and then a span of a day is added. If we are still in the same year we loop around again. When the loop is done we've counted every weekday.

```perl
    use DateTime ;

    my $year = $ARGV[ 0 ] // 2020; ##


    while ( $year !~ /\A\d{4}\z/ ) {
      say "Please enter a year with 4 digits!" ;
      $year = <STDIN> ;
      chomp $year ;
    }
    my $weekdays = 0 ;
    my $dt = DateTime->new(
          year => $year ,
          month => 1 ,
          day => 1
          ) ;
    while ( $dt->year == $year ) {
      unless ( $dt->day_of_week == 6 || $dt->day_of_week == 7 ) {
          $weekdays++ ;
      }
      $dt->add( days => 1 ) ;
    }
    say $weekdays ;
```

[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/wanderdoc/perl/ch-1.pl)

The doctor, on the other hand, brings in `Time::Piece` for their desired date-to-day lookup requirements. A new object id defined using a module-specific implementation of the C-library `strptime` function, parsing a string using a given YYYYMMDD format template. From there, though, the process  continures similarly to the method above: while the object's `year()` attribute remains unchanged, the object is checked for its day of the week and unless that day is a weekend a counter is ticked to count the business days. Note that in this module weeks start on Sundays, so the weekends are days 1 and 7.

```perl
    use Time::Piece;
    use Time::Seconds;

    sub workdays
    {
         my $year = $_[0];
         my $workdays;
         my $day = Time::Piece->strptime("${year}0101", "%Y%m%D");
         while ( $day->year == $year )
         {
              $workdays++ unless ( $day->wday == 1 or $day->wday == 7 );
              $day += ONE_DAY;
         }
         return $workdays;
    }
```

[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/duncan-c-white/perl/ch-1.pl)

A third option for the procedure, presented here by Duncan, is to use the `Date::Simple` module. A C-style `for` loop holds the initializer, the conditional and incrementing steps all together in one place for a nice, clean process. Again here weeks start on Sunday, as is common in North America.

```perl
    use Date::Simple (':all');

    my $year = shift;

    my $weekdays = 0;
    for( my $day = date("$year-01-01"); $day->year == $year; $day++ )
    {
        my $dow = $day->day_of_week;
        $weekdays++ if $dow >= 1 && $dow <= 5;
    }
    say $weekdays;
```

[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/robert-dicicco/perl/ch-1.pl)

Right out of the gate we're cutting a broad swath through the field of available date manipulation libraries — now Robert brings us `Date::Calc`. A fully-featured API is implemented, accommodating all manner of transformations among formats and intervals, and arithmetic operations without requiring the construction of a specific mutable object. As seems to be the common theme here we obtain the day count by counting the days, in this case first aquiring the length of the year to establish the correct range starting at January 1 and going forward from there.

```perl
    use Date::Calc qw(:all);
    use IO::Prompter;

    my $input_yr = prompt 'Input year = ', -num;
    my $numyr = Days_in_Year($input_yr,12);

    my ($count, $dow) = 0;
    for my $offset (1 .. $numyr){
        #Starting with last day of previous year
        # add 1, then calculate date
        my ($year,$month,$day) = Add_Delta_Days(($input_yr - 1),12,31,$offset);
        $dow = Day_of_Week($year,$month,$day);  # then, get its day of week
        if(($dow > 0 ) && ($dow < 6)){   ## 0 = Sunday,  6 = Saturday
            $count++;
        }
    }
```

[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/peter-campbell-smith/perl/ch-1.pl)

In a welcome divergence from the norm, we now have Peter, who starts with an analysis that concludes that any year will, according to a set of conditionals, have either 260, 261 or 262 working days. According to his logic, he needs only to figure out the location of the end of the scale, the day for December 31, and whether or not the year is a leap year.

The `Time::Local` module proivides a function `timelocal()` and a reverse for the built-in `localtime()`, allowing him to initialize a moment in elapsed seconds from the epoch for December 31, and then translate that back into a complete 7-element array containing a day-of-week value.

```perl
    use Time::Local;

    @years = (2010 .. 2030);

    for $year (@years) {
        $working_days = 5 * 52;
        $working_days++ if is_working_day($year, 12, 31);
        $working_days++ if (is_leap($year) and is_working_day($year, 12, 30));
        say qq[Input: \$year = $year\nOutput: $working_days\n];
    }

    sub is_working_day {  # ($year, $month, $day)

        # returns 1 if date is a working day, else returns 0
        #                           s  m  h   d      m         y
        my @t = localtime(timelocal(0, 0, 12, $_[2], $_[1] - 1, $_[0] - 1900));
        return ($t[6] >= 1 and $t[6] <= 5) ? 1 : 0;
    }

    sub is_leap {

        # returns 1 if given year is leap or 0 if not
        my ($test);

        $test = $_[0];
        $test = $test / 100 if $test % 100 == 0;  # xx00 years
        return $test % 4 == 0 ? 1 : 0;
    }
```

[**Steven Wilson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/steven-wilson/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/steven-wilson/python/ch-1.py)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge Week 138 - Workdays](https://tilde.town/~wlsn/pwc138.html)

Extending the previous analysis, it stands to reason that if we know the start day of the year, we know the end day if we also know whether it's a leap year or not. So that's the same two pieces of information Peter had concluded we needed, just looked at through the mirror.

Taken to the next level, though, we only have 7 possible days and a boolean condition, leading to only 14 possible states. So a lookup table can answer for any year.


```perl
    use DateTime;

    my $year              = $ARGV[0];
    my $dt                = DateTime->new( year => $year, month => 1, day => 1 );
    my $start_day_of_week = $dt->day_of_week();
    my $is_leap_year      = $dt->is_leap_year();
    my %workdays          = (
        10 => 261,
        11 => 262,
        20 => 261,
        21 => 262,
        30 => 261,
        31 => 262,
        40 => 261,
        41 => 262,
        50 => 261,
        51 => 261,
        60 => 260,
        61 => 260,
        70 => 260,
        71 => 261,
    );

    say $workdays{"$start_day_of_week$is_leap_year"};
```

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/roger-bell-west/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/roger-bell-west/postscript/ch-1.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/roger-bell-west/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/roger-bell-west/raku/ch-1.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/roger-bell-west/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/roger-bell-west/rust/ch-1.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: Perl Weekly Challenge 138: Split Work](https://blog.firedrake.org/archive/2021/11/Perl_Weekly_Challenge_138__Split_Work.html)

I quite like how our random selection is following such a natural progression between techniques. Here Roger extends the previous logic with two hand-built implementations of formulae to calculate first the day-of-week for December 31, and then for the presence of a leap year condition. As both of these can be computed from a single year parameter, there's no real need to bring in a module for the calculation. Note the anonymous array lookup, which is certainly an interesting device. Perl hashes are already ridiculously fast so I question the necessity of this trick, but it's cool, no doubt about that.


```perl
    sub p {
      my $y=shift;
      return ($y+int($y/4)-int($y/100)+int($y/400))%7;
    }

    sub leapyear {
      my $y=shift;
      return ($y%4==0 && ($y%100 !=0 || $y%400==0));
    }

    sub workdays {
      my $y=shift;
      my $i=p($y);
      if (leapyear($y)) {
        $i+=7;
      }
      return 260+[0,1,1,1,1,0,0,1,2,2,2,2,1]->[$i];
    }
```

[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/mattneleigh/perl/ch-1.pl)

Matthew breaks down his process in an extremely well-defined, precise manner. Nothin' wrong with that, especially as he annotates everything with comments along the way. Although one might not get the impression from my rather freewheeling review style, I am a firm believer in the importance of precision in language — when required, of course. In other places — well life is a crap shoot, isn't it? So let's use language in a way that properly reflects that. It's certainly more colorful that way.

Matthew starts from a single data point, the given year. From there he implements the commonly available formula for calculating the day of December 31 we've seen before, which in turn gives him the ability to compute the number of ISO weeks, as we saw in last week's challenge. This number will be either 52 or 53, and from this we can count 5 days for every complete week, plus those working days for the first week, and then those for the last. Piece of cake.

```perl
    sub workdays_per_year{
        my $year = shift();

        # Shamelessly borrow from a solution
        # to a previous PWC problem, with a
        # few modifications...
        my $nye_curr = new_years_eve_weekday($year);
        my $nye_prev = new_years_eve_weekday($year - 1);
        my $weeks = weeks_in_year($year, $nye_curr, $nye_prev);


        return(
            # Number of workdays in the first
            # partial week of the year
            (5 - ($nye_prev == 6 ? 5 : $nye_prev))
            +
            # Number of workdays in the full
            # weeks ofthe year
            (($weeks - ($weeks == 53 ? 2: 1)) * 5)
            +
            # Number of workdays in the last
            # partial week of the year
            ($nye_curr == 6 ? 5 : $nye_curr)
        );

    }

    sub weeks_in_year{
        my $year = shift();
        my $nye_curr = shift();
        my $nye_prev = shift();

        # Did this year end on Thursday or the
        # previous year end on Wednesday?
        if(
            ($nye_curr == 4)
            ||
            ($nye_prev == 3)
        ){
            # Yes...
            return(53);
        } else{
            # No...
            return(52);
        }

    }
```


[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/polettix/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/polettix/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC138 - Workdays - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/11/10/pwc138-workdays/)

Flavio also breaks his final computation into three parts, the first week, the last week and then those complete weeks in the middle that fill out the year. Defining weeks to start on Monday, then, the first week will always contain one Sunday, a non-working day. He expands on this logic to create maxima and minima for those weeks. From this premise manages to showhorn all the good bits into a creative conditional to perform the sum in one action, creating an impressively compact package.

```perl
    sub dow ($y, $m, $d) { (gmtime(timegm(1, 1, 1, $d, --$m, $y)))[6] }
    sub workdays ($y) {
       my $bdow = dow($y, 1, 1);
       my $edow = dow($y, 12, 31);
       my $bdays = 8 - $bdow; # 1 - 7
       my $ydays = 365 + ($bdow == $edow ? 0 : 1) - $bdays - $edow;
       return max($bdays - 2, 0) + ($ydays / 7 * 5) + min($edow, 5);
    }
```

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/sgreen/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Weekly Challenge 138](https://dev.to/simongreennet/weekly-challenge-138-dh1)

Simon is back from the wilds of *computing his own date manipulation code*, having apparently survived the ordeal to code another day. Perhaps the experience changed him, as this time he reaches for `Date::Calc` to calc his dates. Some say they make them out of tougher stuff down in Australia, and Simon's speedy return certainly adds credence to that conjecture. I hope he is well in mind as well as body. I'm sure he's seen things, out beyond the wall. Terrible things.

I, um, don't like it out there.

(*fixes thousand yard stare and says nothing for an unsettling period of time*)

Huh? Oh, right:

Here is his solution, methodically laid out and explained step-by-step:

```perl
    use Date::Calc ( 'Day_of_Week', 'leap_year' );

    sub main {
        my $year = shift;

        # Sanity check
        die "You must specify the year"       unless defined $year;
        die "Year must be four digits > 1752" unless $year =~ /^[0-9]{4}$/ and $year > 1752;

        # Get the day of week of January 1st, and leap year flag
        my $day_of_week = Day_of_Week( $year, 1, 1 );    # 1 - Monday, 7 - Sunday
        my $leap        = leap_year($year);

        # If the 1st of January is Saturday or Sunday, then the Dec 31st (or
        # Dec 30th in a leap year) isn't a work day.
        my $workdays = ( $day_of_week != 6 and $day_of_week != 7 ) ? 261 : 260;

        # In a leap year, the Dec 31st is two days later than Jan 1st.
        ++$workdays if $leap and $day_of_week != 5 and $day_of_week != 6;

        say $workdays;
    }
```

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/cheok-yin-fung/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/cheok-yin-fung/julia/ch-1.jl)


&nbsp;&nbsp;**blog writeup:**
[CY's Taken The Weekly Challenge #138 Task 1 and Some Previous Tasks on Calendar Date](https://e7-87-83.github.io/coding/challenge_138t1.html)

CYdelivers us two solutions, using one to check the results of the other. In one, she counts the days in the manner we have commonly seen, using `localtime` to extract the day of the week. In the second, novel approach however, she develops a method of constructing the entire year in epoch-seconds. From there she ascertains the number of complete weeks in the span; each of these contribute 5 days to the total. Then additional bumpers are calculated for the span up until the first complete week and the span after the last, and these are added to the sum from the complete weeks. The result is the number of workdays throughout the year span.


```perl
    sub count_work_days {
        my $y = $_[0];

        my $_01Jan = localtime timelocal_nocheck 0, 0, 0, 1, 0, $y;
        my $d_01Jan = $_01Jan->wday();
        my $diff = (1 - $d_01Jan) % 7;

        my $firstMonday = timelocal_nocheck 0, 0, 0, 1+$diff, 0, $y;

        my $_31Dec = localtime timelocal_nocheck 0, 0, 0, 31, 11, $y;

        my $d_31Dec = $_31Dec->wday();

        my $back_diff = ($d_31Dec - 5) % 7;


        my $MondayAfterLastFriday
            = timelocal_nocheck 0, 0, 0, 3-$back_diff, 0, $y+1;

        my $ans
            = 5 * int (
                ($MondayAfterLastFriday
                -$firstMonday)
                    /86400/7
              );


        $ans += 6-$d_01Jan if $d_01Jan > 1;
        $ans += $d_31Dec if $d_31Dec < 5;

        return $ans;
    }
```

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/dave-jacoby/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[I Thank You For The Days: The Weekly Challenge #138 | Committed to Memory](https://jacoby.github.io/2021/11/08/i-thank-you-for-the-days-the-weekly-challenge-138.html)

Finally, Dave presents us with two solutions as well, again using one to validate the other, with the first one counting through the days and examining each to see where it falls in the week, building an aggregate total.

In the second, though, he has come to the conclusion that there are only so many combinations of start days and leap years, and a lookup table can be constructed and hardcoded to produce an answer for every case. I'll leave you with hs own words:

>But there are ONLY 14 years. Leap year or not = 2. Days of week = 7.
2 * 7 == 14. So it's perfectly reasonable to know that, if the year
is a leapyear and starts on a Saturday, or starts on a Sunday, leap year
or no, that's going to be a 260-workday year, and if it's a leap year
and starts on Monday, Tuesday, Wednesday or Thurday, there will be
262, and otherwise, there will be 261.

```perl
    sub workdays2( $year ) {
        my $table = {};
        $table->{0}{1} = 261;
        $table->{0}{2} = 261;
        $table->{0}{3} = 261;
        $table->{0}{4} = 261;
        $table->{0}{5} = 261;
        $table->{0}{6} = 260;
        $table->{0}{7} = 260;
        $table->{1}{1} = 262;
        $table->{1}{2} = 262;
        $table->{1}{3} = 262;
        $table->{1}{4} = 262;
        $table->{1}{5} = 261;
        $table->{1}{6} = 260;
        $table->{1}{7} = 261;
        my $day = DateTime->new(
            day       => 1,
            month     => 1,
            year      => $year,
            time_zone => 'floating'
        );
        return $table->{ $day->is_leap_year }{ $day->dow };
    }
```






## Blogs and Additional Submissions in Guest Languages for Task 1:


[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/abigail/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/abigail/awk/ch-1.awk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/abigail/bash/ch-1.sh), [Bc](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/abigail/bc/ch-1.bc), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/abigail/c/ch-1.c), [Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/abigail/go/ch-1.go), [Java](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/abigail/java/ch-1.java), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/abigail/lua/ch-1.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/abigail/node/ch-1.js), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/abigail/pascal/ch-1.p), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/abigail/python/ch-1.py), [R](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/abigail/r/ch-1.r), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/abigail/ruby/ch-1.rb), [Scheme](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/abigail/scheme/ch-1.scm), [Tcl](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/abigail/tcl/ch-1.tcl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 138: Workdays](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-138-1.html)


[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/arne-sommer/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/arne-sommer/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[The Workdays are Numbered with Raku (and Perl)](https://raku-musings.com/workdays-numbered.html)


[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/athanasius/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/athanasius/raku/ch-1.raku)


[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/jaldhar-h-vyas/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/jaldhar-h-vyas/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge: Week 138](https://www.braincells.com/perl/2021/11/perl_weekly_challenge_week_138.html)


[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/james-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #138](https://github.com/drbaggy/perlweeklychallenge-club/blob/master/challenge-138/james-smith/README.md)


[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/laurent-rosenfeld/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/laurent-rosenfeld/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 138: Workdays and Split Number |aurent_r](http://blogs.perl.org/users/laurent_r/2021/11/perl-weekly-challenge-138-workdays-and-split-number.html)


[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/lubos-kolouch/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/lubos-kolouch/python/ch-1.py)


[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/mohammad-anwar/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/mohammad-anwar/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/mohammad-anwar/raku/ch-1.raku), [Swift](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/mohammad-anwar/swift/ch-1.swift)


[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/paulo-custodio/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/paulo-custodio/python/ch-1.py)


[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-138/wlmb/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 138 – W. Luis Mochán](https://wlmb.github.io/2021/11/09/PWC138/)

------------------------------------------





---

# BLOGS {#PWC138BLOGS}

---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, by some miracle I somehow continue to maintain my bearings.**

**Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your Unquenchable *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC136BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *FOLLOW* these *BLOG* *LINKS*:

**( ...*don't think, trust your training, you're in the zone, just do it ...* )**


**Abigail**

 * [Perl Weekly Challenge 138: Workdays](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-138-1.html) ( *Perl* )
 * [Perl Weekly Challenge 138: Split Number](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-138-2.html) ( *Perl* )

**Arne Sommer**

 * [The Workdays are Numbered with Raku (and Perl)](https://raku-musings.com/workdays-numbered.html) ( *Perl & Raku* )


**Cheok-Yin Fung**

 * [CY's Taken The Weekly Challenge #138 Task 1 and Some Previous Tasks on Calendar Date](https://e7-87-83.github.io/coding/challenge_138t1.html) ( *Perl* )

**Dave Jacoby**

 * [I Thank You For The Days: The Weekly Challenge #138 | Committed to Memory](https://jacoby.github.io/2021/11/08/i-thank-you-for-the-days-the-weekly-challenge-138.html) ( *Perl* )

**Flavio Poletti**

 * [PWC138 - Workdays - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/11/10/pwc138-workdays/) ( *Perl & Raku* )
 * [PWC138 - Split Number - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/11/11/pwc138-split-number/) ( *Perl & Raku* )

**Jaldhar H. Vyas**

 * [Perl Weekly Challenge: Week 138](https://www.braincells.com/perl/2021/11/perl_weekly_challenge_week_138.html) ( *Perl & Raku* )

**James Smith**

 * [Perl Weekly Challenge #138](https://github.com/drbaggy/perlweeklychallenge-club/blob/master/challenge-138/james-smith/README.md)
 ( *Perl* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 138: Workdays and Split Number |aurent_r](http://blogs.perl.org/users/laurent_r/2021/11/perl-weekly-challenge-138-workdays-and-split-number.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 138: split working days – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2021/11/08/PerlWeeklyChallenge138.html#task1) ( *Raku* )

**Roger Bell_West**

 * [RogerBW's Blog: Perl Weekly Challenge 138: Split Work](https://blog.firedrake.org/archive/2021/11/Perl_Weekly_Challenge_138__Split_Work.html) ( *Perl & Raku* )

**Simon Green**

 * [Weekly Challenge 138](https://dev.to/simongreennet/weekly-challenge-138-dh1) ( *Perl* )

**Steven Wilson**

 * [Perl Weekly Challenge Week 138 - Workdays](https://tilde.town/~wlsn/pwc138.html) ( *Perl* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 138 – W. Luis Mochán](https://wlmb.github.io/2021/11/09/PWC138/) ( *Perl* )
