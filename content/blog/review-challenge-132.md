
---
author:       Colin Crain
date:         2021-10-24T00:00:00
description:  "Colin Crain › Perl Weekly Review #132"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #132"
image:        images/blog/p5-review-challenge-132.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-131/).* )

Welcome to the Perl review pages for **Week 132** of The Weekly Challenge! Here we will take the time to discuss the  submissions offered up by the team, factor out some common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

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

**<big>For context</big>**  before we begin, you may wish to revisit either of the pages for the [**original tasks**](/blog/perl-weekly-challenge-132/) or the summary [**recap**](/blog/recap-challenge-132/) of the challenge. But don't worry, the challenges themselves are repeated and presented below as we progress from task by task. Oh, and one more thing before we get started:

### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please feel free to email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

**So finally, without further ado...**

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC132TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC132TASK2)   &nbsp;  &nbsp;  &nbsp;   	•   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC132BLOGS)    &nbsp;  &nbsp;  &nbsp;   	•

---

# TASK 1 {#PWC132TASK1}

# Mirror Dates
*Submitted by: Mark Anderson*

You are given a date (yyyy/mm/dd).

Assuming, the given date is your date of birth. Write a script to find the mirror dates of the given date.

Dave Cross has built cool site that does something similar.

Assuming today is 2021/09/22:

**Example 1:**
```
    Input: 2021/09/18
    Output: 2021/09/14, 2021/09/26
```
On the date you were born, someone who was your current age, would have been born on 2021/09/14.<br>
Someone born today will be your current age on 2021/09/26.

**Example 2:**
```
    Input: 1975/10/10
    Output: 1929/10/27, 2067/09/05
```
On the date you were born, someone who was your current age, would have been born on 1929/10/27.<br>
Someone born today will be your current age on 2067/09/05.

**Example 3:**
```
    Input: 1967/02/14
    Output: 1912/07/08, 2076/04/30
```
On the date you were born, someone who was your current age, would have been born on 1912/07/08.<br>
Someone born today will be your current age on 2076/04/30.


## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/abigail/perl/ch-1.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/adam-russell/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/athanasius/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/cheok-yin-fung/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/dave-jacoby/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/polettix/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/jo-37/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/laurent-rosenfeld/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/lubos-kolouch/perl/ch-1.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/mattneleigh/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/mohammad-anwar/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/perlboy1967/perl/ch-1.pl),
[**Olivier Delouya**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/olivier-delouya/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/pete-houston/perl/ch-1.pl),
[**Rage311**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/rage311/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/roger-bell-west/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/ulrich-rieke/perl/ch-1.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/wlmb/perl/ch-1.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/wanderdoc/perl/ch-1.pl)

Welcome to the review pages for the 132rd Weekly Challenge. There were 22 submissions for the first task this past week.

Date math is a tricky thing. Due to the plethora of hidden gotchas that lurk silently beneath the surface it is almost always the wisest course of action to use an external module to provide the carefully-thought-out functions required to get accurate results. In this case leap-seconds will likely not affect our outcome, however added leap days nearly certainly will, so consequently nearly the entire field chose the module route. We'll demonstrate some of the techniques by taking a sampling from the submissions presented, having a look at some of the various methods employed.

## a SELECTED OFFERING, a SAMPLING, a TASTE
[**Olivier Delouya**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/olivier-delouya/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/mohammad-anwar/perl/ch-1.pl),
[**Rage311**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/rage311/perl/ch-1.pl),
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/wanderdoc/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/duncan-c-white/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/cheok-yin-fung/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/roger-bell-west/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/dave-jacoby/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/jo-37/perl/ch-1.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/adam-russell/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/james-smith/perl/ch-1.pl), and
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/abigail/perl/ch-1.pl)

The various modules presented deal with the date calculations in slightly different fashions, but the underlying logic was pretty consistent: we need to know the age of the subject, then subtract that time from the initial birthday to get the first value, and add that timespan to the current time to get the future date. How exactly that was done varied from technique to technique.


[**Olivier Delouya**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/olivier-delouya/perl/ch-1.pl)

Olivier starts us off and running with a straightforward solution using `Time::Local`. Using the `timelocal()` function, the number of seconds in computed between the input birthday and the start of the epoch: midnight, January 1, 1970 UTC. The span from the epoch to the current time is combined with this to compute the subject's age in seconds. Subtracting twice this number of seconds from now then finds the subject's current age reflected backwards from the birthday, and adding the subject's age to the current time finds the date in seconds for the forward reflection. The `localtime()` reverse function converts the seconds back into years, months and days, with specific time data appended, and the POSIX function `strftime()` is imported to format this into YYYY/MM/DD output.

```perl
    use Time::Local;
    use POSIX qw(strftime);

    my @Birth=split('/', $ARGV[0]);
    my $epoch_birth=timelocal(0, 0, 0, $Birth[2], $Birth[1]-1, $Birth[0]);
        # seconds between 1970 and birth

    my $epoch_today = time(); # (seconds between 1970 and today
    if(scalar(@ARGV) > 1)     # assuming today is another day -)
      {
      my @ref_day     = split('/', $ARGV[1]);
      my $h = (scalar(@ARGV) > 2)? $ARGV[2]:0;
      my $m = (scalar(@ARGV) > 3)? $ARGV[3]:0;
      my $s = (scalar(@ARGV) > 4)? $ARGV[4]:0;
      $epoch_today = timelocal($s, $m, $h, $ref_day[2], $ref_day[1]-1, $ref_day[0]);
        # at 1.30 AM..
      }

    my $age=$epoch_today-$epoch_birth; # in seconds
    print strftime("%Y/%m/%d, ", localtime($epoch_today - (2*$age)));
    print strftime("%Y/%m/%d\n", localtime($epoch_today +    $age));
```

[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/mohammad-anwar/perl/ch-1.pl)

Mohammad is back this week with a solution built of the `Date::Calc` module. This package provides functions, amongst others, for the current date, the number of days since Jan 1, year 1, and adding a span of days to a date.

The math is straightforward, first computing the age of the subject in days by subtracting the birthday total from the current total days, then first subtracting this number of days from the birthday and then adding it to the current day to look forward.

```perl
    use Date::Calc qw(Today Date_to_Days Add_Delta_Days);

    my $DATE = $ARGV[0];

    my ($c_year, $c_month, $c_day) = Today();
    my ($g_year, $g_month, $g_day) = split /\//, $DATE, 3;

    my $days = Date_to_Days($c_year, $c_month, $c_day)
               -
               Date_to_Days($g_year, $g_month, $g_day);

    print sprintf("%04d/%02d/%02d\n", Add_Delta_Days($g_year, $g_month, $g_day, -$days));
    print sprintf("%04d/%02d/%02d\n", Add_Delta_Days($c_year, $c_month, $c_day,  $days));
```

[**Rage311**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/rage311/perl/ch-1.pl)

Another voice we haven't heard from in awhile is Rage311, who is back with a solution using the venerable `DateTime` module. This provides functions to compute a delta of days between a DateTime object and a given date, and date addition and subtraction functions to subtract this delta from the birthday and add it to the current day to get the bracketing spans requested.

```perl
    use DateTime;

    my ($year, $month, $day) = split /\//, $ARGV[0];

    my $dt_now = DateTime->now();
    my $dt_in  = DateTime->new(
      year  => $year,
      month => $month,
      day   => $day,
    );

    my $diff = $dt_now->delta_days($dt_in);

    my $older   = $dt_in->subtract($diff)->ymd;
    my $younger = $dt_now->add($diff)->ymd;

    say join ', ', $older, $younger;
    print "\n";
    say 'On the date you were born, someone who was your current age, would have been born on ' . $older;
    say 'Someone born today will be your current age on ' . $younger;
```

[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/wanderdoc/perl/ch-1.pl)

The doctor regales us with tales from yet another module altogether, or rather two: `Time::Piece` and its companion `Time::Seconds`. `Time::Piece` objects can be directly added and subtracted, however the result is returned as a time in seconds encapsulated in a `Time::Sceonds` object, which in turn supplies a function to convert these seconds back into year-month-day format as requested.

```perl
    use Time::Piece;
    use Time::Seconds;

    my $FORMAT = '%Y/%m/%d';

    sub create_mirror_dates
    {
         my $date = Time::Piece->strptime($_[0], $FORMAT);
         my $today = Time::Piece->strptime('2021/10/16', $FORMAT); # or localtime
         my $difference = $today - $date; # seconds
         my $first = $date - $difference;
         my $second = $today + $difference;
         return $first->ymd('/'), $second->ymd('/');
    }
```

[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/duncan-c-white/perl/ch-1.pl)

...And further augmenting our outside-library sampling, Duncan brings us a fifth module option, `Date::Simple`. This module allows working with dates, but does not bother with times or timezones. Sounds like just what we need. Looking at the code it seems to live up to its name, with a clear, simple API. The configuration options are limited, but it does do what it does well and simply, which is the point.

As long as you like dashes, that is ;)

```perl
    use Date::Simple ('date', 'today');

    my $debug=0;
    die "Usage: mirror-dates YOUR_DOB\n" unless
        GetOptions( "debug"=>\$debug ) && @ARGV==1;
    my $dobstr = shift @ARGV;
    $dobstr =~ s|/|-|g;    	# Date::Simple likes YYYY-MM-DD not YYYY/MM/DD
    my $dob = date($dobstr) || die "bad date: $dobstr\n";

    my $today  = today();
    my $delta  = $today - $dob;

    my $before = $dob - $delta;
    my $after  = $today + $delta;

    say "$before, $after";
```

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/cheok-yin-fung/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/cheok-yin-fung/julia/ch-1.jl)

Circling around to the beginning, here CY brings us another method based around `Time::Local`. She does the calculations inside her `mirror()` routine, which itself is called by a `mirror_str()` wrapper. Instead of using `strftime()`, the wrapper has her own somewhat elaborate formatting method to turn the 7-value timelocal array into year-month-day output pairs.

```perl
    use Time::Local qw'timelocal timegm_nocheck';

    say mirror_str($ARGV[0]) if defined($ARGV[0]);

    sub mirror {
        my @arr_today = (22, 8, 2021); # Wed Sep 22 2021
        my $_today = timelocal(0, 0, 0, @arr_today);
        my @arr_birth = ($_[2], $_[1]-1, $_[0]);
        my $_birth = timelocal(0, 0, 0, @arr_birth);
        my $y1 = int (($_today - $_birth)/86400);
        my @d_senior = localtime timegm_nocheck 0, 0, 0, $arr_birth[0]-$y1, $arr_birth[1], $arr_birth[2];
        my @d_junior = localtime timegm_nocheck 0, 0, 0, $arr_today[0]+$y1, $arr_today[1], $arr_today[2];
        return [ [@d_senior], [@d_junior] ];
    }

    sub mirror_str {
        my ($byear, $bmonth, $bday) = split /\//, $_[0];
        $bmonth =~ s/^0//;  # remove leading zeros
        $bday =~ s/^0//;    # remove leading zeros
        my ($d_s, $d_j) = mirror($byear, $bmonth, $bday)->@*;

        return
             ($d_s->[5]+1900)."/"
            .($d_s->[4]<=8 ? 0 : "").($d_s->[4]+1)."/"
            .($d_s->[3]<10 ? 0 : "").($d_s->[3])
            .", "
            .($d_j->[5]+1900)."/"
            .($d_j->[4]<=8 ? 0 : "").($d_j->[4]+1)."/"
            .($d_j->[3]<10 ? 0 : "").($d_j->[3]);
    }
```

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/roger-bell-west/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/roger-bell-west/postscript/ch-1.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/roger-bell-west/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/roger-bell-west/raku/ch-1.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/roger-bell-west/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/roger-bell-west/rust/ch-1.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: Perl Weekly Challenge 132: Hash on the Mirror](https://blog.firedrake.org/archive/2021/10/Perl_Weekly_Challenge_132__Hash_on_the_Mirror.html)

Roger quickly dispatches the problem using `Time::Local` as well, with the addition of a pair of helper functions to convert back and forth between Unix time and YMD formats. The helper functions themselves internally wrap functions from the module.

```perl
    use Time::Local;

    sub mirdat {
      my $then=shift;
      my $thent=ymd2ut($then);
      my $now=shift;
      if ($now->[0]==0) {
        $now=ut2ymd(time);
      }
      my $nowt=ymd2ut($now);
      my $delta=$nowt-$thent;
      my @o;
      foreach my $targett ($thent-$delta,$nowt+$delta) {
        push @o,ut2ymd($targett);
      }
      return \@o;
    }

    sub ymd2ut {
      my $ta=shift;
      my ($y,$m,$d)=@{$ta};
      return timegm(0,0,0,$d,$m-1,$y);
    }

    sub ut2ymd {
      my $ut=shift;
      my @t=localtime($ut);
      return [$t[5]+1900,$t[4]+1,$t[3]];
    }

```

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/dave-jacoby/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Dates(!) and Hashes(?) and Names, Oh My!!: The Weekly Challenge #132 | Committed to Memory](https://jacoby.github.io/2021/09/27/dates-and-hashes-and-names-oh-my-the-weekly-challenge-132.html)

Dave starts with a [vital imperative](https://presentations.houseabsolute.com/a-date-with-perl/#3) — perhaps I should have led with this one.

Better late then never, though, because the advice is timeless:

```perl
    # Do Not Write Your Own Date and Time Manipulation Code!
    # Do Not Write Your Own Date and Time Manipulation Code!
    # Do Not Write Your Own Date and Time Manipulation Code!
    # Do Not Write Your Own Date and Time Manipulation Code!
    # Do Not Write Your Own Date and Time Manipulation Code!
```

What follows is another use of `DateTIme`, carefully laid-out and explained. Of note here is the `$obj->clone()` method to duplicate our birthday and present time before they get destructively modified to the requested past and future values.

```perl
    use DateTime;

    my @examples;
    push @examples, '2021/09/18';
    push @examples, '1975/10/10';
    push @examples, '1967/07/08';
    push @examples, '1970/01/01';

    for my $input (@examples) {
    my $output=    mirror_dates($input);
        say <<"END";
            Input:  $input
            Output: $output
    END
    }

    # takes the date as a string, in the ONE TRUE FORMAT: YYYY/MM/DD
    # That makes the epoch 1970/01/01
    # The program CAN handle non-padded days and months, but when you're
    # dealling with a LOT of dates, non-zero,padding makes you wonder if
    # 1970123 is Jan 23 or Dec 3.
    sub mirror_dates ( $date_str ) {

        # The default time zone for new DateTime objects, except where stated
        # otherwise, is the "floating" time zone. This concept comes from the
        # iCal standard. A floating datetime is one which is not anchored to
        # any particular time zone. In addition, floating datetimes do not
        # include leap seconds, since we cannot apply them without knowing the
        # datetime's time zone.
        my $now = DateTime->now()->set_time_zone('floating');

        my ( $y, $m, $d ) = split m{/}, $date_str;
        my $then = DateTime->new(
            year      => $y,
            month     => $m,
            day       => $d,
            time_zone => 'floating'
        );

        # the time difference between now and then, expressed in days
        my $diff   = $now->delta_days($then)->in_units('days');

        # add and subtract in a DateTime context act on the object, which
        # isn't the result I would expect from $semi_numerical_thing->add(number)
        # so we clone it and modify the clone.
        # I mean, we COULD, but for testing, I was printing now and then as well
        # as past and future, just to be sure I was right.
        my $past   = $then->clone;
        $past->subtract( days => $diff );

        my $future = $now->clone;
        $future->add( days => $diff );

        return join ', ', $future->ymd, $past->ymd;
    }
```

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/jo-37/perl/ch-1.pl)

Jorg uses `DateTime` as well, but specifically the `DateTime::Format::Strptime` module, which implements POSIX `strptime(3)`. I'll let his commentary do the explanation. I always enjoy Jorg's analyses.

```perl
    use DateTime::Format::Strptime;

    # How should we calculate the age of a person and how should "mirroring"
    # be performed?  A year is not a well defined time span due to leap
    # days.  Neither is a month.  The best we can do is take the age as the
    # number of days ignoring the time part.  Using DateTime math in the
    # 'floating' time zone and based on day deltas seems to be
    # (double-)safe.  At least this approach is consistent with the
    # examples.  For meaningful results the day of birth must not lie ahead.
    sub mirror_date ($dob, $today) {
        state $fmt = DateTime::Format::Strptime->new(
            pattern => '%Y/%m/%d', time_zone => 'floating');

        my $dob_dt = $fmt->parse_datetime($dob);
        my $today_dt = $today ? $fmt->parse_datetime($today) :
            DateTime->today(time_zone => 'floating');
        my $age = $today_dt->delta_days($dob_dt);

        ($fmt->format_datetime($dob_dt - $age),
            $fmt->format_datetime($today_dt + $age));
    }
```


[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/adam-russell/perl/ch-1.pl)

In Adam's submission, we revisit `Time::Piece`.

In addition to the `ymd()` function we saw before, `Time::Piece` has its own version of "string-format-time", `strftime()`, as well, for those familiar with the C library function. It strikes me that dealing with `Time::Piece` objects is very easy.

```perl
    use Time::Piece;
    use Time::Seconds;

    sub mirror_dates{
        my($date_string, $start_date_string) = @_;
        my $date = Time::Piece->strptime($date_string, q[%Y/%m/%e]);
        my $today;
        if($start_date_string){
            $today = Time::Piece->strptime($start_date_string, q[%Y/%m/%e]);
        }
        else{
            $today = localtime;
        }
        my $age = $today - $date;
        my $past = $date - $age;
        my $future = $today + $age;
        return $past->strftime(q[%Y/%m/%d]), $future->strftime(q[%Y/%m/%d]);
    }
```


[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/james-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #132](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-132/james-smith)

There was no broad consensus in modules used across the field. Here James gives us an alternate "Date::Calc" solution, illustrating how easy this module is to work with. We need only compute the delta in days for the subject's current age, the subtract that delta from their birthday, to get the prior date, and add it to today, to get the future one.

```perl
    use Date::Calc qw( Today Delta_Days Add_Delta_Days );

    my @TODAY = @ARGV ? split m{/}, $ARGV[0]: Today;

    sub mirror_days {
      my $d = Delta_Days( @TODAY, split m{/}, $_->[0] ); ## Days between today and birthday
      return  [
        sprintf( '%04d/%02d/%02d', Add_Delta_Days( @bd,     $d )),
        sprintf( '%04d/%02d/%02d', Add_Delta_Days( @TODAY, -$d )),
      ];
    }
```

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/abigail/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/abigail/awk/ch-1.awk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/abigail/bash/ch-1.sh), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/abigail/c/ch-1.c), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/abigail/lua/ch-1.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/abigail/node/ch-1.js), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/abigail/python/ch-1.py), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/abigail/ruby/ch-1.rb)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 132: Mirror Dates](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-132-1.html)

Finally, Abigail was the only submitter who took on the task to do the actual day counting calculations themselves, rather than reaching for a module. The somewhat daunting equations used are evidently pulled from research, available to anyone who wishes to find them. It's certainly nice to see the computational underpinnings, to give a gleaning of what's required. I'm sure we could find similar arithmetic within the modules we've seen accessed.

It's good to to take a peak under the hood at the motor sometimes, to more fully understand the "why" behind [Dave Rolsky's quote  referenced above](https://presentations.houseabsolute.com/a-date-with-perl/#3). And it's [corollary, lest you doubt](https://presentations.houseabsolute.com/a-date-with-perl/#4).

Date math is messy. It just is, and there's nothing much to be done about that fact.

```perl
    # We'll take the date, calculate its Julian Day number (rounded down,
    # as we don't care about hours and minutes), compare it to the Julian
    # Day number of today, and then calculate the Julian Day numbers of the
    # target dates, after which we convert them back to dates.

    # Conversion functions from Wikipedia

    sub g2j ($Y, $M, $D) {
        use integer;
        (1461 * ($Y + 4800 + ($M - 14) / 12)) / 4  +
        (367 * ($M - 2 - 12 * (($M - 14) / 12))) / 12 -
        (3 * (($Y + 4900 + ($M - 14) / 12) / 100)) / 4 + $D - 32075
    }

    sub j2g ($J) {
        use integer;
        my $e = 4 * ($J + 1401 + (((4 * $J + 274277) / 146097) * 3) / 4 - 38) + 3;
        my $D =  ((5 * (($e % 1461) / 4) + 2) % 153) / 5 + 1;
        my $M = (((5 * (($e % 1461) / 4) + 2) / 153 + 2) % 12) + 1;
        my $Y = ($e / 1461) - 4716 + (12 + 2 - $M) / 12;
        ($Y, $M, $D)
    }


    my @TODAY = (2021, 9, 22);   # Use a fixed today, so we have expected
                                 # test results.

    my $julian_today = g2j @TODAY;

    while (<>) {
        my ($Y, $M, $D) = /[0-9]+/g;
        my $julian_then = g2j $Y, $M, $D;
        printf "%04d/%02d/%02d, %04d/%02d/%02d\n",
                 j2g (2 * $julian_then  - $julian_today),
                 j2g (2 * $julian_today - $julian_then);
    }
```






## Blogs and Additional Submissions in Guest Languages for Task 1:

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/athanasius/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/athanasius/raku/ch-1.raku)


[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/polettix/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/polettix/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC132 - Mirror Dates - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/09/29/pwc132-mirror-dates/)


[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/laurent-rosenfeld/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/laurent-rosenfeld/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 132: Mirror Dates and Hash Join](http://blogs.perl.org/users/laurent_r/2021/10/perl-weekly-challenge-132-mirror-dates-and-hash-join.html)



[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/ulrich-rieke/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/ulrich-rieke/haskell/ch-1.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/ulrich-rieke/raku/ch-1.raku)


[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/wlmb/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 132 – W. Luis Mochán](https://wlmb.github.io/2021/09/28/PWC132/)







------------------------------------------





---

# TASK 2 {#PWC132TASK2}

# Hash Join

*Submitted by: Mohammad S Anwar*

Write a script to implement Hash Join algorithm as suggested by wikipedia.

1. For each tuple r in the build input R
    1. Add r to the in-memory hash table
    2. If the size of the hash table equals the maximum in-memory size:
        1. Scan the probe input S, and add matching join tuples to the output relation
        2. Reset the hash table, and continue scanning the build input R
2. Do a final scan of the probe input S and add the resulting join tuples to the output relation

**Example**

Input:
```
    @player_ages = (
        [20, "Alex"  ],
        [28, "Joe"   ],
        [38, "Mike"  ],
        [18, "Alex"  ],
        [25, "David" ],
        [18, "Simon" ],
    );

    @player_names = (
        ["Alex", "Stewart"],
        ["Joe",  "Root"   ],
        ["Mike", "Gatting"],
        ["Joe",  "Blog"   ],
        ["Alex", "Jones"  ],
        ["Simon","Duane"  ],
    );
```

Output:
```
    Based on index = 1 of @players_age and index = 0 of @players_name.

    20, "Alex",  "Stewart"
    20, "Alex",  "Jones"
    18, "Alex",  "Stewart"
    18, "Alex",  "Jones"
    28, "Joe",   "Root"
    28, "Joe",   "Blog"
    38, "Mike",  "Gatting"
    18, "Simon", "Duane"
```

## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/abigail/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/dave-jacoby/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/duncan-c-white/perl/ch-2a.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/polettix/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/james-smith/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/jo-37/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/laurent-rosenfeld/perl/ch-2.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/mattneleigh/perl/ch-2.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/mohammad-anwar/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/perlboy1967/perl/ch-2.pl),
[**Olivier Delouya**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/olivier-delouya/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/pete-houston/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/roger-bell-west/perl/ch-2.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/wlmb/perl/ch-2.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/wanderdoc/perl/ch-2.pl)


There were only 16 submissions for the second task this past week. I have to admit I myself found the directives a bit confusing, with the referenced Wikipedia article digressing into memory management strategies in RDBMS architectures that I found hard to conceptually map over into Perl-space.

The memory management side of the puzzle thus received mixed responses — commonly ignored completely, but also producing some quite creative modeling and simulation, and even one presumed proper, albeit untested, implementation of catching an out-of-memory error in Perl. I'll leave you with that teaser to build anticipation.

## a SPREAD laid out ACROSS THE TABLE, a DOZEN SELECTIONS

As noted we saw a wide range of techniques for joining array data around a common key field, producing one new output row for each possible combination arising from the action. As suggested most of these techniques worked using an intermediate hashing mechanism, but not all.

We also saw various approaches to the memory management aspect, usually but not exclusively coupled to rebuilding the intermediate hash structure.

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/polettix/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/polettix/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC132 - Hash Join - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/09/30/pwc132-hash-join/)

We'll start the sampling today with Flavio.

Flavio performs his inner join by constructing a hash using the first table's designated column, the first name, for hash keys. These keys are not unique, so the values for this hash each point to an array of references, each element containing a copy of the record using that key. The second set of records is then iterated over, with each record key extracted from the tuple. If a lookup using the key is successful, the data from the joined record is appended to each instance in the value list from the original hash, and the list of all such records created is the join returned.

```perl
    sub hash_join ($one, $kone, $two, $ktwo) {
       # make sure ($one, $kone) deal with the shorter of the two relations
       ($one, $kone, $two, $ktwo) = ($two, $ktwo, $one, $kone)
          if $one->@* > $two->@*;

       # hash phase, build a hash from ($one, $kone)
       my %hash_one;
       push $hash_one{$_->[$kone]}->@*, $_ for $one->@*;

       # scan phase
       return map {
          my @record = $_->@*;
          my $key = splice @record, $ktwo, 1;
          next unless exists $hash_one{$key};
          map { [$_->@*, @record] } $hash_one{$key}->@*;
       } $two->@*;
    }

    my @player_ages = (
            [20, "Alex"  ],
            [28, "Joe"   ],
            [38, "Mike"  ],
            [18, "Alex"  ],
            [25, "David" ],
            [18, "Simon" ],
        );

    my @player_names = (
            ["Alex", "Stewart"],
            ["Joe",  "Root"   ],
            ["Mike", "Gatting"],
            ["Joe",  "Blog"   ],
            ["Alex", "Jones"  ],
            ["Simon","Duane"  ],
        );

    say join ', ', $_->@* for hash_join(\@player_ages, 1, \@player_names, 0);
```

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/e-choroba/perl/ch-2.pl)

Choroba addresses some of the ideas mentioned in the reference article on memory exhaustion by introducing an *n*-at-a-time processing scheme, simulating a maximum number of rows that can be simultaneously held in memory. A hash is constructed from key field information in the build records, and an anonymous `$out` routine effectively dumps, or flushes, the contents of this hash to the output. A limit is established for the number of keys allowed at a time, an on reaching this limit the `$out` routine is called, and the hash flushed, the count is reset and the hash cleared for the next set of data.

This plan seems to keep very close to the strategy outlined in the referenced article.

```perl
    sub hash_join {
        my ($build, $probe, $limit) = @_;
        my @out;
        my %hash;
        my $size = 0;
        my $out = sub {
            for my $s (@$probe) {
                push @out, [$_, $s->[0], $s->[1]]
                    for @{ $hash{ $s->[0] } // []};
            }
            %hash = ();
            $size = 0;
        };
        for my $r (@$build) {
            push @{ $hash{ $r->[1] } }, $r->[0];
            $out->() if ++$size >= $limit;
        }
        $out->();
        return \@out
    }
```

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/laurent-rosenfeld/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/laurent-rosenfeld/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 132: Mirror Dates and Hash Join |aurent_r](http://blogs.perl.org/users/laurent_r/2021/10/perl-weekly-challenge-132-mirror-dates-and-hash-join.html)

Laurent also constructs an intermediate hash, establishing what will become a familiar pattern that mimics the reference example.

He first assembles a hash from the player names. For each first name, used as the hash key, a value array is constructed and associated, containing one or more last names in relation to that key. Then the row instances of the probe data are traversed, the key field extracted, and the key looked up in the name hash. Lookup misses are skipped, but a hit generates a new tuple output row merging the key, the joined data and one element from the name values for each element present in the build table.

```perl
    my @player_ages = (
        [20, "Alex"  ],
        [28, "Joe"   ],
        [38, "Mike"  ],
        [18, "Alex"  ],
        [25, "David" ],
        [18, "Simon" ]
        );

    my @player_names = (
        ["Alex", "Stewart"],
        ["Joe",  "Root"   ],
        ["Mike", "Gatting"],
        ["Joe",  "Blog"   ],
        ["Alex", "Jones"  ],
        ["Simon","Duane"  ],
        );

    my %names;
    for my $name (@player_names) {
        push @{$names{$name->[0]}}, $name->[1];
    }

    for my $pl_age (@player_ages) {
        my ($age, $first_name) = @$pl_age;
        next unless exists $names{$first_name};
        for my $name (@{$names{$first_name}}) {
            say "$age $first_name $name";
        }
    }
```

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/wlmb/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 132 – W. Luis Mochán](https://wlmb.github.io/2021/09/28/PWC132/)

Of note Luis uses YAML to input his record arrays, which appears to be a pretty good way to go about that. Most of the other submissions opted instead to hard-code the example and call it a day. But using the `YMAL_XS` module, the process is straightforward, human-readable and easy.

```
    -
      - [ 20, Alex ]
      - [ 28, Joe ]
      - [ 38, Mike ]
      - [ 18, Alex ]
      - [ 25, David ]
      - [ 18, Simon ]
    -
      - [Alex, Stewart]
      - [Joe,  Root]
      - [Mike, Gatting]
      - [Joe,  Blog]
      - [Alex, Jones]
      - [Simon, Duane]
```

Once has has his data installed, a hash is constructed from the keys of the build records, pointing to an array of the appropriately keyed records themselves. The probe data records are then sequentially analysed, extracting the key field. If this key can be successfully looked up in the hash, a new record is made from each record found in the value array, appending the probe record data. These new records are immediately output as they are created.

```perl
    my $input = Load( my $data = <> ); # Parse input
    my @build = $input->[0]->@*; # Array of build tuples
    my @probe = $input->[1]->@*; # Array of probe tuples
    my %build; # Build hash. Each entry is array of tuples.

    # Build complete 'build' hash. I assume it fits in memory.
    push $build{ $_->[$index_build] }->@*, $_ foreach( @build );

    foreach my $tuple( @probe ){  # Iterate over probe tuples
        my $key = splice @$tuple, $index_probe, 1; # remove and assign key
        # Array of all matching build tuples. Empty if none
        my @matching = defined $build{ $key }?$build{ $key }->@*:(  ); # first parts of
        say join ", ", $_->@*, @$tuple foreach @matching; # Join one build one probe tuple
    }
```

[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/pete-houston/perl/ch-2.pl)

Pete does a couple of noteworthy things in his solution. First is that he encodes his input records as CSV files, one for the ages data and a second for the last names. As noted earlier, few submissions made the input data records actually configurable. The second, more interesting thing we saw was a modeling of a restricted memory situation using the `Devel::Size` module, and its function `total_size`.

The first record sets, the ages, is taken in one record at a time and fitted into a hash, with the key field associated with an array of values using that key. After each new record is added, though, the `total_size()` of the `%ages` hash is determined, and if the memory limit value is surpassed, the hash is delivered to a `dump_out()` routine, where the probe records are cycled through and matching keys are used to produce new join records.

As its name implies, `Devel::Size` allows one to find out the actual memory footprint of individual populated Perl data structures.

```perl
    my %ages;
    while (my $row = $csv->getline ($afh)) {
        push @{$ages{$row->[1]}}, $row->[0];
        if (total_size (\%ages) >= $mem_limit) {
        	print "Limit hit!\n" if $DEBUG;
        	dump_out (\@names, \%ages, $out);
        	%ages = ();
        }
    }
    close $afh;

    print "At end\n" if $DEBUG;
    dump_out (\@names, \%ages, $out);

    sub dump_out {
        my ($names, $ages, $csv) = @_;
        for my $name (@$names) {
        	for my $age (@{$ages->{$name->[0]}}) {
        		$csv->combine ($age, @$name);
        		print $csv->string, "\n";
        	}
        }
    }
```

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/abigail/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 132: Hash Join](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-132-2.html)

Abigail has chosen to focus as well on the the particularly confusing loose-end that most others waved their hands over, of database strategies for out-of-memory situations in returning very large joins. In this, contrary to Choroba's and Pete's modeling approach, Abigail takes a very different tack.

Perl is constructed on the idiom that it will handle memory management for the user, with automatic allocation and garbage collection. As such when a Perl program needs more memory it will simply request more and more memory from the system until there is no more to allocate, at which point its failure mode is to crash. Catching fire is very rare with modern systems. So in short, we cannot generally know we have run out of memory until it is too late, as by that time there is no longer any Perl to catch the exception.

The theoretical solution to this predicament that is presented, untested, is to to recompile Perl using the `-DPERL_EMERGENCY_SBRK` option, which allows manual memory allocation through `malloc`. Thus the program primarily deals with trapping an "Out of memory" event, and reallocating, theoretically, more memory through the special variable `$^M`. Whether the program will remain in a recoverable state after this occurs is anyone's guess.

I'm with Abigail on this one and am not going to recompile Perl to test it, but find this effort fantastic. Here it is complete — the only changes I made were to tighten up the comments a bit.

```perl
    # So, we're not asked to implement the classic hash join algorithm when
    # everything neatly fits into memory, but the case where it doesn't.
    #
    # There is a way out of this, but it requires a special compiled perl.
    # If your Perl has been compiled with the -DPERL_EMERGENCY_SBRK option,
    # and if it is using Perl's own malloc, then you can allocate some
    # emergency memory using $^M. So, we check if those conditions are set,
    # and allocate some emergency memory.
    #
    # Whenever we run out of memory, this is trapped, and we flush the
    # output so far, using the given algorithm.
    #
    # NOTE: This is a very flimsy algorithm, and will most likely result
    #       in losing some data. But hey, if you want us to implement an
    #       algorithm in Perl which deals with running out of memory, this
    #       is the best you can get.
    #       This is also gambling the state of the program is such that
    #       we can actually continue after running out of memory. This
    #       is not very likely.
    #
    # NOTE: This is completely untested. I couldn't be bothered to recompile
    #       my perl.

    use Config;
    use List::Util 'max';

    # First check if we can define emergency memory. If not, no hash join for you.
    # Else, define some emergency memory.
    BEGIN {
        die "No hash join for you -- recompile first!\n" unless
            $Config::Config {malloc_cflags} =~ /-DPERL_EMERGENCY_SBRK\b/ &&
            $Config::Config {usemymalloc} eq 'y';

        $^M = " " x (1 << 20);  # 1 Mb.
    }

    my @R = (
        [20, "Alex" ],
        [28, "Joe"  ],
        [38, "Mike" ],
        [18, "Alex" ],
        [25, "David"],
        [18, "Simon"],
    );

    my @S = (
        ["Alex", "Stewart"],
        ["Joe",  "Root"   ],
        ["Mike", "Gatting"],
        ["Joe",  "Blog"   ],
        ["Alex", "Jones"  ],
        ["Simon","Duane"  ],
    );

    my $idx_R_njk = 0;
    my $idx_R_jk  = 1;  # Join key
    my $idx_S_jk  = 0;  # Join key
    my $idx_S_njk = 1;

    #
    # To pretty print.
    #
    my $max_width = 3 + max map {length $$_ [$idx_R_jk]} @R;

    my %output;

    #
    # Whenever we run out of memory, we trap this, and flush the output.
    # This ought to release memory.
    #
    $SIG {__DIE__} = sub {
        if ("@_" =~ /Out of memory/) {
            flush (\@S, $idx_S_jk, \%output)
        }
        else {
            die @_;  # Propagate
        }
    };

    sub flush ($S, $idx_S_jk, $output) {
        undef $^M;  # Release memory.
                    # Does this actually work this way? Or is $^M the only
                    # memory we can use? In that case, this entire program
                    # is not going to work.

        #
        # Scan $S. For each match in $output, output a line.
        #
        foreach my $entry (@$S) {
            if ($$output {$$entry [$idx_S_jk]}) {
                for (my $i = 0; $i < @{$$output {$$entry [$idx_S_jk]}}; $i ++) {
                    printf qq [%2d, %-${max_width}s "%s"\n],
                                     $$output {$$entry [$idx_S_jk]} [$i],
                               '"' . $$entry [$idx_S_jk] . '",',
                                     $$entry [$idx_S_njk];
                }
            }
        }

        #
        # Reset output table
        #
        %$output = ();

        #
        # Claim emergency memory again
        #
        $^M = " " x (1 << 20);
    }

    #
    # Main loop.
    #
    foreach my $r (@R) {
        push @{$output {$$r [$idx_R_jk]}} => $$r [$idx_R_njk];
    }


    flush (\@S, $idx_S_jk, \%output);
```

[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/duncan-c-white/perl/ch-2a.pl)

Back from the difficult terrain of simulating, or actually creating real, memory management problems, we have Duncan, who provides us with a brace of solutions. In the first, he demonstrates the technique for the join using hardwired data, in the second,  he broadens that base to [allow configurable input records using CSV files]((https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/duncan-c-white/perl/ch-2a.pl)).

In his `hashjoin()` function, we see the now-familiar scheme of creating a hash from the age dataset, keyed on the first name field. The probe data records are then examined and for each hash match each record in the values is aligned with the probe data to produce a new output record.

Duncan likes to use `Function::Parameters` for his subroutine signatures, hence the `fun` keyword, rather than `sub`. I always find Duncan's code quite readable.

```perl
    fun hashjoin( $relation1, $fieldno1, $relation2, $fieldno2 )
    {
        my %hash;
        foreach my $ref (@$relation1)
        {
        	my @r = @$ref;
        	my $aref = ($hash{$r[$fieldno1]}//=[]);
        	push @$aref, $r[1-$fieldno1];
        }
        #die Dumper \%hash;

        my @result;

        foreach my $ref (@$relation2)
        {
        	my @r = @$ref;
        	my $key = $r[$fieldno2];
        	my $other = $r[1-$fieldno2];
        	foreach my $val (@{$hash{$key}})
        	{
        		push @result, [ $val, $key, $other ];
        	}
        }

        return @result;
    }


    my @result = hashjoin(
        \@player_ages, 1,
        \@player_names, 0,
        );
    say join(', ',@$_) for @result;
```

[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/mohammad-anwar/perl/ch-2.pl)

Mohammad makes an anonymous hash from the names table, first and last, and then joins with the ages table, switching the common ordering. Ultimately, this does not matter to the computational complexity, but notice in Flavio's submission he explicitly makes the hash the smaller of the two datasets. I suppose that's something to consider. In the memory-management simulations we're limiting the size of the hash at any given moment so the row count of records becomes largely irrelevant. It's just an interesting detail which dataset is hashed and why, that's all.

The hashing is efficiently dispatched with a `map` function and the iteration algorithm is neatly and clearly constructed.

```perl
    sub hash_join {
        my ($table_1, $key_1, $table_2, $key_2) = @_;

        my $names = {
            map {
                join(", ", @$_) => $_->[$key_2]
            } @$table_2
        };

        foreach my $player (@$table_1) {
            my $key = $player->[$key_1];
            my $age = $player->[0];
            foreach my $n (keys %$names) {
                if ($names->{$n} eq $key) {
                    print "$age, $n\n";
                }
            }
        }
    }
```

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/dave-jacoby/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Dates(!) and Hashes(?) and Names, Oh My!!: The Weekly Challenge #132 | Committed to Memory](https://jacoby.github.io/2021/09/27/dates-and-hashes-and-names-oh-my-the-weekly-challenge-132.html)

David constructs a rather different hash to create his join, gathering all of the related information under one roof before reporting the results. An anonymous hash is created, with its reference assigned to the `$hash` variable. Then the "age" record dataset is iterated over, and the fields extracted. The data is added to the hash, keyed on the "firstname" field, as sub-hashes keyed as under "age". The same process is completed for the "lastname" records. The large data structure is then dumped, iterating through the keys and skipping any that do not have both an "age" and "lastname" value, as these will not be present in the join. For the remaining keys, the value sets for the "age" and "lastname" subkeys are gathered, and a pair of nested loops are used to produce the combinations of the two datasets for the output records.


```perl
    sub hash_join ( $array1, $array2 ) {
        my @output;
        my $hash = {};
        for my $e ( $array1->@* ) {
            my ( $age, $firstname ) = $e->@*;
            push $hash->{$firstname}->{age}->@*, $age;
        }
        for my $e ( $array2->@* ) {
            my ( $firstname, $lastname ) = $e->@*;
            push $hash->{$firstname}->{lastname}->@*, $lastname;
        }
        for my $firstname ( sort keys $hash->%* ) {
            next unless defined $hash->{$firstname}{age};
            next unless defined $hash->{$firstname}{lastname};
            my @ages      = $hash->{$firstname}{age}->@*;
            my @lastnames = $hash->{$firstname}{lastname}->@*;

            for my $age ( reverse sort @ages ) {
                for my $lastname ( reverse sort @lastnames ) {
                    push @output, join ",\t", '   ' . $age, $firstname, $lastname;
                }
            }
        }
        return join "\n", @output;
    }
```

[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/perlboy1967/perl/ch-2.pl)

In an unexpected twist, Niels uses subroutine prototypes to hand in the two Perl arrays `@player_ages` and `@player_lastname` to his `hashJoin()` routine, which processes the join in one line, without using a hash at all. Using two `map` statements, we iterate over every row in the lastname table, and for each row found, in the inner loop a `grep` filter selects only those rows from the ages table that share a key, and for each filtered row the age is prepended to the lastname record, producing the desired ordering in the join returned.

```perl
    sub hashJoin(\@\@) {
      return
        [map { my $r = $_; map { [$_->[0], @$r] } grep { $_->[1] eq $r->[0] } @{$_[0]} } @{$_[1]}];
    }
```

[**Olivier Delouya**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/olivier-delouya/perl/ch-2.pl)

Appropriately grouped with Niels' submission, Oliver performs a similar procedure, only this time going forwards using `foreach` loops. Using two nested structures, each record from the first array is compared to each record from the second, and if their keys concord, then a new output record is constructed and printed on the spot.

```perl
    outerloop: foreach my $pn (@player_ages)
       {
       foreach(@player_names)
          {
          if(${$pn}[1] eq ${$_}[0]) # join!
                {
                print ${$pn}[0], ${$pn}[1], ${$_}[1], "\n";
                next outerloop;
                }
          }
        }
```

[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/mattneleigh/perl/ch-2.pl)

Finally, we return to the suggested hashing method with Matthew's submission, who lays out his steps in clearly annotated blocks.

Of special note here is Matthew's `print_table_row()` routine to pretty-print his output using `printf`, resulting in a satisfying set of right-aligned columnar data.


```perl
    sub hash_join{
        my $build = shift();
        my $build_index = shift();
        my $probe = shift();
        my $probe_index = shift();

        my $row;
        my $key;
        my %table = ();
        my $joined = [];

        # Build phase- build a table of things
        # from the build rows, using the specified
        # field as the key; make each entry in the
        # table a list of rows, in case more than
        # one thing matches the key
        foreach $row (@{$build}){
            # Copy the row from the build list, then
            # remove the key from the row before
            # adding to that key's list in the table
            $row = [ @{$row} ];
            $key = splice(@{$row}, $build_index, 1);
            push(@{$table{$key}}, $row);
        }

        # Probe phase- loop over the probe list,
        # examining the table for occurances of the
        # specified key...
        foreach $row (@{$probe}){
            $key = $row->[$probe_index];

            if($table{$key}){
                # The key from this row appears in the build
                # table- copy the row and delete the key
                $row = [ @{$row} ];
                splice(@{$row}, $probe_index, 1);

                # Loop over everything in the table for this
                # key and merge the built row with the probe
                # row, storing the combination in the joined
                # list
                foreach my $built_row (@{$table{$key}}){
                    push(@{$joined}, [ @{$built_row}, $key, @{$row} ]);
                }
            }
        }

        return($joined);

    }

    sub print_table_row{

        printf(
            "%s\n",
            join(
                "    ",
                map(
                    { sprintf("%8s", $_); }
                    @{$ARG[0]}
                )
            )
        );

    }

```


## Blogs and Additional Submissions in Guest Languages for Task 2:

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/james-smith/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #132](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-132/james-smith)


[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/roger-bell-west/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/roger-bell-west/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/roger-bell-west/raku/ch-2.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-132/roger-bell-west/ruby/ch-2.rb)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: Perl Weekly Challenge 132: Hash on the Mirror](https://blog.firedrake.org/archive/2021/10/Perl_Weekly_Challenge_132__Hash_on_the_Mirror.html)






---

# BLOGS {#PWC132BLOGS}

---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, I somehow continue to maintain my bearings. Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC132BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *READ* these *BLOG* *LINKS*:

**( *don't think, trust your training, you're in the zone, just do it ...* )**


**Abigail**

 * [Perl Weekly Challenge 132: Mirror Dates](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-132-1.html) ( *Perl* )
 * [Perl Weekly Challenge 132: Hash Join](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-132-2.html) ( *Perl* )

**Arne Sommer**

 * [Mirrored Hash with Raku](https://raku-musings.com/mirrored-hash.html) ( *Raku* )

**Dave Jacoby**

 * [Dates(!) and Hashes(?) and Names, Oh My!!: The Weekly Challenge #132 | Committed to Memory](https://jacoby.github.io/2021/09/27/dates-and-hashes-and-names-oh-my-the-weekly-challenge-132.html) ( *Perl* )

**Flavio Poletti**

 * [PWC132 - Mirror Dates - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/09/29/pwc132-mirror-dates/) ( *Perl & Raku* )
 * [PWC132 - Hash Join - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/09/30/pwc132-hash-join/) ( *Perl & Raku* )

**James Smith**

 * [Perl Weekly Challenge #132](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-132/james-smith) ( *Perl* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 132: Mirror Dates and Hash Join](http://blogs.perl.org/users/laurent_r/2021/10/perl-weekly-challenge-132-mirror-dates-and-hash-join.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 132: noto clear... – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2021/09/27/PerlWeeklyChallenge132.html#task1) ( *Raku* )

**Roger Bell_West**

 * [RogerBW's Blog: Perl Weekly Challenge 132: Hash on the Mirror](https://blog.firedrake.org/archive/2021/10/Perl_Weekly_Challenge_132__Hash_on_the_Mirror.html) ( *Perl & Raku* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 132 – W. Luis Mochán](https://wlmb.github.io/2021/09/28/PWC132/) ( *Perl* )
