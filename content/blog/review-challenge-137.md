---
author:       Colin Crain
date:         2021-12-06T00:00:00
description:  "Colin Crain › Perl Weekly Review #137"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #137"
image:        images/blog/p5-review-challenge-137.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-136/).* )

Welcome to the Perl review pages for **Week 137** of The Weekly Challenge! Here we will take the time to discuss the  submissions offered up by the team, factor out some common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

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

**<big>For context</big>**  before we begin, you may wish to revisit either of the pages for the [**original tasks**](/blog/perl-weekly-challenge-137/) or the summary [**recap**](/blog/recap-challenge-137/) of the challenge. But don't worry, the challenges themselves are repeated and presented below as we progress from task by task. Oh, and one more thing before we get started:

### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please feel free to email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

**So finally, without further ado...**

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC137TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC137TASK2)   &nbsp;  &nbsp;  &nbsp;   	•   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC137BLOGS)    &nbsp;  &nbsp;  &nbsp;   	•

---

# TASK 1 {#PWC137TASK1}

# Long Year
*Submitted by: Mohammad S Anwar*

Write a script to find all the years between 1900 and 2100 which is a Long Year.

A year is Long if it has 53 weeks.

**Expected Output**
```
    1903, 1908, 1914, 1920, 1925,
    1931, 1936, 1942, 1948, 1953,
    1959, 1964, 1970, 1976, 1981,
    1987, 1992, 1998, 2004, 2009,
    2015, 2020, 2026, 2032, 2037,
    2043, 2048, 2054, 2060, 2065,
    2071, 2076, 2082, 2088, 2093,
    2099
```

## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/abigail/perl/ch-1a.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/arne-sommer/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/athanasius/perl/ch-1.pl),
[**Bob Lied**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/bob-lied/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/cheok-yin-fung/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/colin-crain/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/dave-jacoby/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/polettix/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/jaldhar-h-vyas/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/jo-37/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/laurent-rosenfeld/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/lubos-kolouch/perl/ch-1.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/mattneleigh/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/mohammad-anwar/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/perlboy1967/perl/ch-1.pl),
[**Olivier Delouya**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/olivier-delouya/perl/ch-1.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/paulo-custodio/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/pete-houston/perl/ch-1.pl),
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/robert-dicicco/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/roger-bell-west/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/sgreen/perl/ch-1.pl),
[**Steven Wilson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/steven-wilson/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/ulrich-rieke/perl/ch-1.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/wlmb/perl/ch-1.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/wanderdoc/perl/ch-1.pl)


Date and time manipulations are notoriously complicated. The crushing juggernaut of geopolitical and social problems in the real-world has inevitably compromised the integrity of every clever consistant solution our mere human minds have ever devised to keep everything from happening at once. Such has it always been, and to this day I don't completely understand how astrophysicists deal with leap-seconds in their atomic timeschemes. Like many real-world phenomena, it seems easy until you realize how much you're missing, and once you dive down that particular rabbit-hole everything is suddenly hairy and blurry at the same time and nothing makes sense anymore. How long *is* the coastline of Britain, anyway?

There were 28 submissions for the first task this past week. Most methods used one of a number of robust modules available to assist in the calculations; after all, that's what CPAN was designed to provide — a way for talented, tenacious and persistent guides to deliver us a path out of the badlands (see also: CSV). That said, a few intrepid, some might say reckless, souls went at it alone to solve the math. We should hold a moment of silence for those brave adventurers.

Done? Good? Well let's get on with it then.

## ROLL the DICE, TAKE your CHANCES, a DOZEN ways to WIN
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/jaldhar-h-vyas/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/perlboy1967/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/athanasius/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/sgreen/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/jo-37/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/dave-jacoby/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/polettix/perl/ch-1.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/arne-sommer/perl/ch-1.pl),
[**Bob Lied**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/bob-lied/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/colin-crain/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/e-choroba/perl/ch-1.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/wlmb/perl/ch-1.pl)


As we said there were a number of modules represented, principally the excellent `DateTime`, but we also had guest cameos from several others, providing various levels of assistance. Left unexplained but required for the challenge to even make logical sense is that we are discussing ISO weeks, a specific scheme of assigning a single whole week to every date in a year, fitted to the individual year-length pattern  by the occasional assignment of a whole 53rd week to a year, approximately once every 7 years.

Or so.

Very much "or so" as leap years confound any simple calculation. Resolving this confusion is what this challenge is about.



[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/jaldhar-h-vyas/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/jaldhar-h-vyas/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge: Week 137](https://www.braincells.com/perl/2021/11/perl_weekly_challenge_week_137.html)

Jaldhar will start the ball rolling with a solution culled from the Wikipedia article, which provides a succinct formula for calculating the day of the week of the 31st of December of a given year. From there we can extrapolate directly the number of ISO weeks, defined by the day of the week of January 4 and counting weeks forward, leading to a very compact solution. The formula is implemented in the `p()` subroutine:

```perl
    sub p {
        my ($year) = @_;
        return (($year + int($year / 4) - int($year / 100) +  int($year / 400)) % 7);
    }

    sub isLongYear {
        my ($year) = @_;
        return (p($year) == 4 || p($year - 1) == 3);
    }

    say join q{, }, grep { isLongYear($_); } (1900 .. 2100);
```

Some of you might notice something suspiciously similar to the leap-year equation buried within this formula, which is a good observation. We'll revisit this later.

[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/perlboy1967/perl/ch-1.pl)

Niels, wise soul that he is, does not play around with date manipulation code. He may be known for a cavalier attitude towards petrol and matches, but he clearly recognizes that with date manipulation there are way too many ways to get burned.

Instead he brings us the nice, safe, and notably fireproof `Date::Calc` module, which provides a prepared `Week_of_Year()` function waiting to be parametrized. From there we need only loop through the individual years and request the data.

```perl
    use Date::Calc qw(Week_of_Year);

    my @w53years;
    foreach my $y (1900 .. 2099) {
      push(@w53years,$y) if Week_of_Year($y,12,31) == 53;
    }

    printf "Years: %s\n", join(', ', @w53years);
```

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/athanasius/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/athanasius/raku/ch-1.raku)

The monk also abstains, looking to a higher power for all their calendrical needs, in this case the `DateTime` module. For every year in the block we are examining, a new `DateTime` object is created, set to January 1 of *the next year*. This fixes the position of the *last* day of the year we're looking at. From there we can quiz the object as to what day of the week we are on. If that day is Friday we will always have a long year, and if the day is Saturday we will have 53 weeks only if the year is also a leap year.

```perl
    for my $year ($START .. $END)
    {
        my $jan1 = DateTime->new( year => $year + 1, month => 1, day => 1 );
        my $dow  = $jan1->day_of_week;

        if    ($dow == $FRIDAY)
        {
            push @long_years, $year;
        }
        elsif ($dow == $SATURDAY)
        {
            my $dt = DateTime->new( year => $year );

            push @long_years, $year if $dt->is_leap_year;
        }
    }
```

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/sgreen/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Weekly Challenge 137](https://dev.to/simongreennet/weekly-challenge-137-3jon)

Simon primes the pump by declaring that January 1, 1900 was a Monday, and further that if a year starts on Thursday, or Wednesday in the case of a leap year, then it's going to be a long year.

From there he starts incrementing yearly, pushing the day up 1 per year, 2 in the case of a leap year. Run the whole thing modulo 7 and we have a quasi-periodic cycle. This is of course extremely dangerous, and I am concerned for his safety. But it's only 200m years, right? What's the worst thing that could possibly happen?

It's a shame about Simon, you know. I liked him. His code was clean, and well commented. I feel quite helpless, and can only wish him a safety and luck out beyond the wall. He'll need it.

> \# See you next year

I hope so Simon. We all do.

```perl
    while ( $year <= 2100 ) {
        my $leap = _is_leap_year($year);

        # It's a long year if January 1st was a Thursday or Wednesday if
        #   a leap year
        if ( $day_of_week == 4 or ( $leap and $day_of_week == 3 ) ) {
            push @long_years, $year;
        }

        # See you next year
        $year++;
        $day_of_week = ( $day_of_week + 1 + $leap ) % 7;
    }
```

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/jo-37/perl/ch-1.pl)

The beauty of using a carefully calibrated piece of software designed with a tightly-focused scope is that it often makes those things it does extremely easy.

Jorg has condensed the action of querying `DateTime` objects for the week of the last day of the year into a single straightforward line. No, I don't believe he's missed anything. One could perhaps argue that the 28th *defines* whether a year has 53 weeks, being the first day of the "extra" week. But that's just semantics; the last day will only be considered in the 53rd week if the first day of that week already is, which will only happen at the proper confluence of weekdays to create a leap week in the first place. By rights I suppose any of the days the 28th, 29th, 30th or 31st will do, as they will all be in the long week if one is present.

```perl
    use DateTime;

    # Maybe I'm missing something: The year's last day's week number is the
    # year's week count.
    say join ' ', grep DateTime->new(year => $_, month => 12, day => 31,
        time_zone => 'floating')->week_number == 53, 1900 .. 2100;
```

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/dave-jacoby/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[2020 Was A LONG Year: The Weekly Challenge #137 | Committed to Memory](https://jacoby.github.io/2021/11/01/2020-was-a-long-year-the-weekly-challenge-137.html)

Dave has renown for quoting Rolsky, the author of `DateTime`, to not write your own date and time manipulation code. As such he follows this wisdom and, perhaps predictably, reaches to that module to help him solve his puzzle. He sets an object for the  31st of December of each year and queries its day of the week.

But... he also provides convincing analysis that he *really* only needs to know the day of January 1st and whether the year is a leap year to know whether it will contain a 53rd week. Which is true, on the face of it. Then again, I have been led into a false sense of complicity before. But then someone forgets to mention that timezones are involved, and Thailand is across the international date line, and havoc ensues, appointments are missed, face is not saved, deals fail and governments fall.

It's a slippery slope.

```perl
    for my $year ( 1900 .. 2100 ) {
        my $dt = DateTime->new(
            month => 12,
            day   => 31,
            year  => $year,
        );
        my ( undef, $week_of_year ) = $dt->week;
        push @years, $year if $week_of_year == 53;
    }
```


[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/polettix/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/polettix/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC137 - Long Year - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/11/03/pwc137-long-year/)

Flavio imports the `Time::Local` module to give him `timegm()`, which given a year, month and day will return a UNIX epoch time in seconds. This can then can be converted back using Perl's `gmtime()`, returning the familiar 7-element structure containing the day of the week as an element. It's this day of the week that we need.

From this he extrapolates whether a year is long by the day of the first of January, which is to say if it's any Thursday or perhaps also a Wednesday in the case of a leap year.

```perl
    use Time::Local 'timegm';

    sub dow ($y, $m, $d) { (gmtime(timegm(1, 1, 1, $d, --$m, $y)))[6] }
    sub is_long_year ($y) {
       my $dow = dow($y, 1, 1);
       return $dow == 4 || $dow == 3 && dow($y, 12, 31) == 4;
    } ## end sub is_long_year ($y)

    my @longs = grep { is_long_year($_) } (1900 .. 2100);
    while (@longs > 0) {
       my @slice = splice @longs, 0, 5;
       say join ', ', @slice, (@slice == 5 ? '' : ());
    }
```

[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/arne-sommer/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/arne-sommer/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Lychrel Longing with Raku and Perl](https://raku-musings.com/lychrel-longing.html)

Arne uses `DateTime` to build a compact loop, creating a new object for the last day of every year, and then querying that object for the week number. Done this way, like Jorg above, everything is quite compact.

```perl
    use DateTime;

    my $lower = 1900;
    my $upper = 2100;

    my @long_years;

    for my $year ($lower .. $upper)
    {
      push(@long_years, $year) if DateTime->new(year => $year, month => 12, day => 31)->week_number() == 53;
    }
```

[**Bob Lied**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/bob-lied/perl/ch-1.pl)

It's interesting to note that because the ISO labeling scheme we're referencing here assigns each date in a year to some single whole week unit, that by quirk of the system that week will sometimes be the last week of the previous year or the first week of the next. This is the price of avoiding partial weeks, but it in some select cases makes the week returned, an ordinal integer from 1 to 52, or possibly 53, indistinct on its own. At the extremities of this scale, without contextual information, we cannot be sure of the year. For example, without a date to fix us in either January or December, we cannot know whether week 1 is for this year or the next. To address this, the `DateTime` function `week()` returns a two-element list of year and week number; the `week_of_year()` function is in fact only a wrapper for this, returning the second element from this list.

Here Bob uses the `week()` form of the function.

```perl
    use DateTime;

    my @longYearList;

    for my $year ( 1900 .. 2100 )
    {
        my $dt = DateTime->new(year => $year, month => 12, day => 31);
        my ($year, $weeknum) = $dt->week();

        push @longYearList, $year if $weeknum == 53;
    }
```

[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/colin-crain/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/colin-crain/raku/ch-1.raku)

That, you may have noticed, was a whole lot of `DateTime`.

Sometimes I get bored and do things in unusual ways just because. Or maybe I just think differently; I've never been able to quite figure that one out. In any case for my own solution I bring to you a different way to approach the problem while still using `DateTime`. Rather than make 200 `DateTime` objects, instead I make only 1 and do some computation with it. Or perhaps to state it better, ask it to do some computation for me.

In addition to the `DateTime` object we've seen quite a bit of already, there also exists a parallel concept of a `DateTime::Duration` to play alongside it. This isn't a specific instant, or block of time — as, say, as date — but rather a span of time that can be added or subtracted from a `DateTime` object to alter it. So after setting up a date for December 28th (the first day of any theoretical 53rd week), 1900, instead of redeclaring the parameters directly we instead add a year and check the week number again. The module takes care of all the hinky bits, such as what is and what is not a leap year.


```perl
    use DateTime;
    use DateTime::Duration;

    my $dt  = DateTime->new (
                    year    => 1900 ,
                    month   => 12  ,
                    day     => 28   ) ;

    my $dur = DateTime::Duration->new (
                    years   => 1    );

    for (1..200) {
        if ($dt->week_number == 53) {
            push @years, $dt->year;
        }
        $dt->add( $dur );
    }
```

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/e-choroba/perl/ch-1.pl)

Getting away from the ubiquitousness of `DateTime`, Choroba brings us another module option to consider, `Time::Piece`, which once imported quietly applies an object framework over the familiar Perl date and time functions. These built-ins, `localtime` and `gmtime`, are overridden and will return `Time::Piece` objects, and a host of other functions are made available to any objects created. It's noteworthy that to start using this object interface you don't, strictly speaking, have to create new objects, as sometimes they are quietly and seamlessly created for you.

Here a new object is generated by the implementation of `strftime()` provided, and we can decide whether a year is long by the week number of December 31.

```perl
    use Time::Piece;

    sub long_year {
        my ($from, $to) = @_;
        my @long;
        for my $year ($from .. $to) {
            my $tp = 'Time::Piece'->strptime("$year-12-31", '%Y-%m-%d');
            push @long, $year if $tp->week == 53;
        }
        return \@long
    }
```

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/wlmb/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 137 – W. Luis Mochán](https://wlmb.github.io/2021/11/02/PWC137/)

Finally we come full circle with Luis, who returns us to the original equation that started this journey. Ok, not that equation exactly, but one very closely related.

To those who care about such things, one might have noticed that in that original equation Jaldhar presented there was a familiar series of clauses: the year over 4, minus the year over 100, plus the year over 400. This is the basis for the core corrective code in calculating a leap year. This logic might be expected to be found, as we have seen by now that the presence or absence of leap years is necessary knowledge in order to to trace the progression of start days across the years.

Here Luis joins Simon in calculating his own results forward from a deduced theoretical Gregorian year 0000, which apparently would start on a Sunday if it existed. Because our weeks start on Mondays, an offset of -1 is necessary to make things line up; if we do this we can extrapolate from this distant year and use the year number directly in our adjusted equation.

After computing the start day for January 1st, we still need to know whether it's a leap year, again, to know whether one or two days can start a long year.

```perl
    sub is_long_year {
        my $YY=shift;
        # Skip a day for every 'Gregorian' leap year extrapolating since 0000.
        my $first_weekday=( ($YY-1) + ($YY-1)/4 - ($YY-1)/100 + ($YY-1)/400 ) % 7; # 0=Monday
        my $leap=$YY%400==0||$YY%4==0&&$YY%100!=0;
        return $first_weekday==3 || $leap&&$first_weekday==2;
    }
```



## Blogs and Additional Submissions in Guest Languages for Task 1:


[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/abigail/perl/ch-1a.pl)

&nbsp;&nbsp;**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/abigail/awk/ch-1.awk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/abigail/bash/ch-1.sh), [Bc](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/abigail/bc/ch-1.bc), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/abigail/c/ch-1.c), [Erlang](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/abigail/erlang/ch-1.erl), [Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/abigail/go/ch-1.go), [Java](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/abigail/java/ch-1.java), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/abigail/lua/ch-1.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/abigail/node/ch-1.js), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/abigail/pascal/ch-1.p), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/abigail/python/ch-1.py), [R](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/abigail/r/ch-1.r), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/abigail/ruby/ch-1.rb), [Scheme](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/abigail/scheme/ch-1.scm), [Tcl](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/abigail/tcl/ch-1.tcl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 137: Long Year](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-137-1.html)

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/cheok-yin-fung/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/cheok-yin-fung/julia/ch-1.jl)


[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/james-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #137](https://github.com/drbaggy/perlweeklychallenge-club/blob/master/challenge-137/james-smith/README.md)


[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/laurent-rosenfeld/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/laurent-rosenfeld/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 137: Long Year and Lychrel Number](http://blogs.perl.org/users/laurent_r/2021/11/perl-weekly-challenge-137-long-year-and-lychrel-number.html)


[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/lubos-kolouch/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/lubos-kolouch/python/ch-1.py)


[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/mohammad-anwar/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/mohammad-anwar/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/mohammad-anwar/raku/ch-1.raku)


[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/paulo-custodio/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/paulo-custodio/python/ch-1.py)


[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/roger-bell-west/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/roger-bell-west/postscript/ch-1.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/roger-bell-west/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/roger-bell-west/raku/ch-1.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/roger-bell-west/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/roger-bell-west/rust/ch-1.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: Perl Weekly Challenge 137: Long Cheryl](https://blog.firedrake.org/archive/2021/11/Perl_Weekly_Challenge_137__Long_Cheryl.html)


[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/ulrich-rieke/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/ulrich-rieke/cpp/ch-1.cpp), [Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/ulrich-rieke/haskell/ch-1.hs), [Java](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/ulrich-rieke/java/Challenge137.java), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/ulrich-rieke/raku/ch-1.raku)


------------------------------------------

---

# TASK 2 {#PWC137TASK2}

# Lychrel Number
*Submitted by: Mohammad S Anwar*

You are given a number, 10 <= $n <= 1000.

Write a script to find out if the given number is Lychrel number.

To keep the task simple, we impose the following rules:

* Stop if the number of iterations reached 500.
* Stop if you end up with number >= 10,000,000.

According to wikipedia:

A Lychrel number is a natural number that cannot form a palindrome through the iterative process of repeatedly reversing its digits and adding the resulting numbers.

**Example 1**
```
    Input: $n = 56
    Output: 0

    After 1 iteration, we found palindrome number.
    56 + 65 = 121
```
**Example 2**
```
    Input: $n = 57
    Output: 0

    After 2 iterations, we found palindrome number.
     57 +  75 = 132
    132 + 231 = 363
```
**Example 3**
```
    Input: $n = 59
    Output: 0

    After 3 iterations, we found palindrome number.
     59 +  95 =  154
    154 + 451 =  605
    605 + 506 = 1111
```

## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/abigail/perl/ch-2.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/arne-sommer/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/athanasius/perl/ch-2.pl),
[**Bob Lied**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/bob-lied/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/cheok-yin-fung/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/colin-crain/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/dave-jacoby/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/polettix/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/jaldhar-h-vyas/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/james-smith/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/laurent-rosenfeld/perl/ch-2.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/lubos-kolouch/perl/ch-2.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/mattneleigh/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/perlboy1967/perl/ch-2.pl),
[**Olivier Delouya**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/olivier-delouya/perl/ch-2.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/paulo-custodio/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/pete-houston/perl/ch-2.pl),
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/robert-dicicco/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/roger-bell-west/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/sgreen/perl/ch-2.pl),
[**Steven Wilson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/steven-wilson/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/ulrich-rieke/perl/ch-2.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/wlmb/perl/ch-2.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/wanderdoc/perl/ch-2.pl)

As an cautionary warning, let us begin by saying that in base-10, no Lychrel numbers have been *proven* to exist. The term "Lychrel" itself, coined in 2002, is predated by what became known as the *196 algorithm*, for an exploration among early microcomputer enthusiasts in the 1980s, based around perfecting methods to test the value 196 through multiple iterations. In 1985 there were 12,954 iterations published; in 2011 this surpassed 1,000,000,000 without resolving.

There were 26 submissions for the second task this past week.

## take a LEAP of FAITH: a DOZEN ways to SWIM, a DOZEN ways to FLY
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/roger-bell-west/perl/ch-2.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/lubos-kolouch/perl/ch-2.pl),
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/abigail/perl/ch-2.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/paulo-custodio/perl/ch-2.pl),
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/robert-dicicco/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/polettix/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/ulrich-rieke/perl/ch-2.pl),
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/wanderdoc/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/cheok-yin-fung/perl/ch-2.pl),
[**Olivier Delouya**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/olivier-delouya/perl/ch-2.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/mattneleigh/perl/ch-2.pl), and
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/james-smith/perl/ch-2.pl)


The steps to enact the Lychrel transformation are prescribed in the defintion, and so were quite consistent: take a number, reverse its digits and sum the original and the reverse. If that number is a palindrome we are done, or else repeat until we find one or give up. As testing for a palindrome also requires a reverse examination there were a few ways to carefully structure the logic to avoid one flip step, but the most common techniques kept the summing and palindrome tests separate.



[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/roger-bell-west/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/roger-bell-west/postscript/ch-2.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/roger-bell-west/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/roger-bell-west/raku/ch-2.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/roger-bell-west/ruby/ch-2.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/roger-bell-west/rust/ch-2.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: Perl Weekly Challenge 137: Long Cheryl](https://blog.firedrake.org/archive/2021/11/Perl_Weekly_Challenge_137__Long_Cheryl.html)

Roger initiates the discussion by observing that as no Lychrel numbers are known to exist we can can't analyse these values to perceive a pattern. Without saying the broader case is also true, that due to their unknown status we can't possibly produce any proven results — or if we did it would be groundbreaking. As such the only thing we can do is stick to the rules as stated and satisfy those to produce the results requested, without regard to the larger context.

The steps are staightforward: we reverse the number, here using the listwise form of the `reverse` function, and check to see whether it matches its nonreversed original. If yes we are done, but if not we sum the values and loop around again.

Although not stated, it appears Roger has twigged to the idea that any progression, even in the worst case, will exceed the 1000000 value long before it arrives at 500 iterations. As such he only includes a single escape clause, as the other will never be realized.

```perl
    sub lychrel {
      my $n=shift;
      foreach (1..100) {
        my $m=join('',reverse split '',$n);
        if ($m==$n) {
          return 0;
        }
        $n+=$m;
        if ($n>=10000000) {
          last;
        }
      }
      return -1;
    }
```

[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/lubos-kolouch/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/lubos-kolouch/python/ch-2.py)

Lubos gives us another version of the same steps, slightly reordered. Of note he here uses the scalar version of `reverse`, which works perfectly well without all the splitting.

On observation, I feel the choice of usage for `reverse` seems to be down to personal preference, reenforced by the ease in accidently producing the wrong results. Although the function can always be given a list of arguments, this doesn't determine the behavior: the *assignment* determines context, and furthermore `say` defaults to list context, often producing hard-to-trace bugs.

So for example, whereas

```perl
    my $rev = reverse "Hello world"
    say $rev;
```

will give you the expected "dlrow olleH",

```perl
    say reverse "Hello world"
```

will probably not do what you want, outputting just "Hello world" unchanged. This is because context is making `reverse` look at its argument as a list of one element, and so reversing the order of the elements returns the list unaltered.

So consequently after being burned many people learn one form and stick with it.

Of note we can always *force* context in various ways and still be nearly as compact:

```perl
    say scalar reverse $t1;
```
works, as does

```perl
    say my $rev = reverse $t1;
```

if we want to be clever. This works because the `=` assignment operator returns the rvalue being assigned.


```perl
    sub is_lychrel_number {
      my $what = shift;

      my $iter_count = 0;

      while ($iter_count < 500) {
        $iter_count++;

        $what += reverse $what;

        last if $what >= 10_000_000;

       return 0 if $what == reverse $what;

      }

      return 1;
    }
```

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/abigail/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/abigail/awk/ch-2.awk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/abigail/bash/ch-2.sh), [Bc](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/abigail/bc/ch-2.bc), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/abigail/c/ch-2.c), [Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/abigail/go/ch-2.go), [Java](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/abigail/java/ch-2.java), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/abigail/lua/ch-2.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/abigail/node/ch-2.js), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/abigail/pascal/ch-2.p), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/abigail/python/ch-2.py), [R](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/abigail/r/ch-2.r), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/abigail/ruby/ch-2.rb), [Scheme](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/abigail/scheme/ch-2.scm), [Tcl](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/abigail/tcl/ch-2.tcl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 137: Lychrel Number](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-137-2.html)

In their extensive [writeup](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-137-2.html) of the problem, a deep data analysis is made of the parameters given and how they relate to the larger problem of determining whether a number is Lychrel, and whether it at any particular number of iterations is known to *not* be Lychrel. The takeaway is of course that the cutoff at 10 million includes several values that are known to be ultimately resolve as Lychrel. Thus the arbitrary cutoff is an obvious kludge that allows us to easily prepare our toy demos. Such is life.

I did some back-of-the-envelope calculations concluding that 10 million will be exceeded in every case within 24 iterations, but here Abigail asserts that only 11 are actually required, which I find quite interesting and lower than I expected. But then again I was only looking to be convinced we would never need 500, without actually looking, which certainly is the case.

As such there is no check for this clause.

```perl
    sub l ($n) {$n >= 10_000_000 ? 1 : $n eq reverse ($n) ? 0 : l ($n + reverse $n)}
    say l s/\n//r while <>;
```

[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/paulo-custodio/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/paulo-custodio/python/ch-2.py)

Paulo brings us a couple of treats: one, the `Modern::Perl` pragma — I suppose technically a module but one when imported automatically engages various pragmas so I'll use that term. It's a very handy way user chromatic has devised to automatically engage modern best practices in a single statement: `use strict` and `use warnings` for instance are applied.

Secondly we have the `constant` pragma, which is singular in that it is configured in its import declaration. Because of the way modules are imported, `use constant` establishes a `BEGIN {}` block that is executed immediately during compilation, so the pseudo-constants inititalized are created and inserted into the symbol table before the script is run. At least I'm pretty sure that's how it does what it does, creating subroutines that return the given values. There are no "real" constants in Perl, of course, and several schemes to create quacks-like-a-duck implementations. This one works well and is very fast.

```perl
    use Modern::Perl;

    use constant {
        MAX_ITER    => 500,
        MAX_NUM     => 10_000_000,
    };

    sub is_lychrel {
        my($n) = @_;
        for (1 .. MAX_ITER) {
            last if $n > MAX_NUM;
            my $rev_n = 0+reverse($n);
            return 0 if $n == $rev_n;
            $n += $rev_n;
        }
        return 1;
    }
```

[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/robert-dicicco/perl/ch-2.pl)

New member Robert has given us a nice little application that delivers a blow-by-blow report of the processing performed:

```perl
    $ perl 137-2-RobertDiCicco-REVIEW.pl
    Enter the first number: 1775
    1775 + 5771 = 7546
    7546 + 6457 = 14003
    14003 + 30041 = 44044
    Palindrome found after 3 iterations
```

The steps follow the usual pattern, here eliciting user input using `<STDIN>` and then processing a single value. A loop is established with three clauses: either a palindrome-found flag is set, the iteration count runs above 500, or the growing numeric value exceeds 10,000,000. An update is provided at every reversal and summing made, and when one of the exit conditions is met, one of three final report statements follows.

I'll note that from the rules it's unclear whether a number that *goes in* as a palindrome is allowed to satisfy the conditions after 0 transformations, and apparently there is no common agreement on the subject, or even whether to allow palindromes at all. Robert processed them like any other number, always performing the transformation at least once. I am inclined to agree with this interpretation, but the whole idea is just made-up anyway and there can be no singular "correct" answer. I will say outright exclusion does seem both mathematically unnecessary and cruel. What did palindromes ever do to these people? Yet again, it is humanity who are the real monsters.

This is a nice little progam, covering all the bases with a clear reporting of results.

```perl
    print("Enter the first number: ");
    my $fnum = <STDIN>;
    chomp($fnum);

    my $found = 0;
    my $iterations = 0;
    my $snum = 0;

    while (( $found == 0) and ($iterations < 500) and ($snum < 10_000_000)) {
        $iterations++;
        $snum = reverse("$fnum");
        my $mysum = $fnum + $snum;
        my $revsum = reverse($mysum);
        $snum =~ s/^\s+//;   #remove leading spaces
        print  "$fnum + $snum = $mysum\n";

        if ( $mysum == $revsum) {
            print("Palindrome found after $iterations iterations\n");
            $found++;
        } else {
            $fnum = $mysum;
        }
    }

    if ($iterations == 500 ) {
        print("Reached total iteration limit of 500\n");
    }

    if ($snum >= 10_000_000) {
        print("Value has exceeded limit of 10_000_000\n");
    }
```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/polettix/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/polettix/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC137 - Lychrel Number - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/11/04/pwc137-lychrel-number/)

Flavio, on the other hand, takes a much more taciturn approach, accomplishing the goal with a minimum of fuss. Perhaps to emphasize the string nature of the reversal step he uses the string equality operator `eq`. Then again we are adding those strings immediately again as numbers so I'm not sure how much it matters. It's Perl, and numbers are strings are numbers. It is the way, and a gift that should be treasured.

```perl
    sub maybe_lychrel ($n) {
       while ($n < 10_000_000) {
          my $r = reverse $n;
          return 0 if $n eq $r;
          $n += $r;
       }
       return 1;
    }
```

[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/ulrich-rieke/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/ulrich-rieke/cpp/ch-2.cpp), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/ulrich-rieke/raku/ch-2.raku)

Ulrich provides us with another example of the `split/reverse/join` idiom for flipping the digits in a number. As I said before, there really seem to be two camps on how to do this, without much consensus.

```perl
    while ( $iterations < 500 ) {
      $number += (join ('' , reverse split( // , $number )) + 0 ) ;
      if ( isPalindrome ( $number ) ) {
          $output = 0 ;
          last ;
      }
      if ( $number > 10000000 ) {
          last ;
      }
      $iterations++ ;
    }
    if ( $iterations >= 500 ) {
      $output = 1 ;
    }
    say $output ;
```


[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/wanderdoc/perl/ch-2.pl)

The doctor chooses to make a far more thorough exploration into the thousand or so numbers in the designated range. Keeping the maximum iteration count at 500, he imports the `bigint` pragma, set to preserve 50 digits, and ups the maximum allowable value to 1e50. Even allowing these huge numbers the maximum number of iterations for resolved calculations was 24, and the maximum until exceeding the upper limit was 111. In the end 13 Lychrel candidates are found using these expanded parameters:
```
    196, 295, 394, 493, 592,
    689, 691, 788, 790,
    879, 887, 978, 986
```

I'm sure these numbers have been studied to death, but notice how the first 5 values differ by 99, the next are two pairs differing each by 2 and the pairs offset by 99 again, and then we skip by 97, then back to 99s. Or looked at another way there's a lot of  99*n*-2 for *n*>2 but that isn't the whole picture. It's like there's a quasi-periodic pattern in there taunting us.

```perl
    use bigint accuracy => 50;

    sub lychrel
    {
         my $num = $_[0];
         $num += 0;
         my $palindrome = scalar reverse $num;
         return $num + $palindrome;
    }

    for my $i ( 10 .. 1_000 )
    {
         print "$i "; # , $/;
         print "is palindrome itself.$/" and next if (is_palindrome($i));

         my $counter;
         my $break_flag = 0;
         my $num = $i;

         while ( not is_palindrome($num) )
         {
              $num = lychrel($num);
              $counter++;

              if (500 == $counter)  { $break_flag = 1; last; };
              if (1e50 <= $num) { $break_flag = 2; last; };
         }

         my $statement = $break_flag > 0 ? ": stopped after " : ": palindrome $num after ";
         $statement .= $break_flag == 1 ? "the number reached  $num." :
                   "$counter iterations.";
         print $statement, $/;
         if ( not is_palindrome($num) ) { push @candidates, [$i, $counter, $num]; }
    }
```

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/cheok-yin-fung/perl/ch-2.pl)

I found CYs solution to have a certain elegant grace to it. Combining all of her clauses into the conditional of the `while` loop, the looped action is only one line: the summing of the number with its reverse. On exit she decides what has happened to produce the appropriate true or false response. It's clean, simple, straightforward and I like it.

```perl
    sub lych {
        my $itor = 0;
        my $num = $_[0];

        while (   (reverse $num) ne $num
                && $itor < 500
                && $num < 10_000_000
              ) {
            $num = $num + reverse $num;
        }

        return( ((reverse $num) eq $num )? 0 : 1 );
    }
```

[**Olivier Delouya**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/olivier-delouya/perl/ch-2.pl)

Olivier also brings in the `Math::BigInt` module for his comprehensive search of the range provided, but chooses by default to remain within the prescribed parameters, 500 iterations or 10,000,000 which ever comes occurs before a palindrome is found. This, after all, is the task. However his solution allows configuration of both the range examined, iterations and maximum value.

```perl
    num: for (; $LowerBound < $UpperBound; $LowerBound++)
        {
        for (my $time0=time(), my $iter=0, my $basenum=Math::BigInt->new($LowerBound); ; $iter++)
        	{
        	my $munesab = reverse_num($basenum);
        	if($basenum->beq($munesab)) # ($basenum == $munesab)
        		{
        		print "$LowerBound is *not* a Lychrel number ($munesab after ", !$iter? 0 : $iter-1, " iterations in ", time()-$time0, "s)\n";
        		next num;
        		}
        	if(++$iter > $MaxIter)
        		{
        		print "$LowerBound appears still to be a Lychrel number, after ", !$iter? 0 : $iter-1, " sum iterations in ", time()-$time0, "s)\n";
        		next num;
        		}
        	if($munesab->bgt($BIMaxTerm))
        		{
        		print "$LowerBound appears still to be a Lychrel number below $BIMaxTerm sum iterations in $iter iterations and ", time()-$time0, "s)\n";
        		next num;
        		}
        	if(defined($MaxTime) && time()-$time0 >= $MaxTime)
        	    {
        		print "$LowerBound appears still to be a Lychrel number: reached $basenum within $MaxTime$TimeUnit, $iter iterations)\n";
        		next num;
        	    }
        	$basenum->badd($munesab);
        	if($basenum !~ /^\d+$/ || $basenum->is_inf() || $basenum->is_nan())
        	    {
        		print "$LowerBound appears still to be a Lychrel number: overflow ($basenum) within ", time()-$time0, "s and $iter iterations)\n";
        		next num;
        	    }
        	}
        }
```

After plugging in some ridiculously large numbers for allowed values and number of iterations, it appears there is is quite a large expanse between the largest palindrome from much smaller allowed cycles, 8813200023188, and the next to surface, whatever that may be. The previously located 13 candidate Lychrels remain candidates through 1e118 and 50,000 allowed iterations, of which 541 were required to surpass that unimaginable quantity. For reference there are estimated to be only 1e81 protons in the universe, to give perhaps a sense of the absurd scales we're discussing.

[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/mattneleigh/perl/ch-2.pl)

Here's another example from Matthew carefully explaining the various steps taken. Of note he passes in a reference to a scalar to be updated as a counter, avoiding having to access a global from within the subroutine or otherwise keep the count synchronized. I don't ever find much call for scalar references but this is a good use.

```perl
    sub is_lychrel_number{
        my $n = int(shift());
        my $iter = shift();

        $$iter = 0 if(defined($iter));

        # Establish a range of valid inputs
        return(undef) unless(($n > 9) && ($n < 1001));

        my $i = 0;
        my $reversed = 0;

        while($i <= 500){
            # Swap digits around and compare...
            $reversed = reverse(split("", $n));
            if($reversed == $n){
                # Found a palindrome- this is not a
                # Lychrel number
                $$iter = $i if(defined($iter));
                return(0);
            }

            # Add the reversed number to the total,
            # and bail if the number is too large
            $n += $reversed;
            last if($n >= 10000000);

            $i++;
        }

        # If we got here, either the total got
        # too large, or we ran out of
        # iterations; we'll assume this is a
        # Lychrel number
        $$iter = $i if(defined($iter));
        return(1);

    }

```


[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/james-smith/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #137](https://github.com/drbaggy/perlweeklychallenge-club/blob/master/challenge-137/james-smith/README.md)

Finally, where some have focused un the size of the numbers being considered, others, like James here, chose to optimize for the speed of the calculations necessary to compute them. It's kind of his M.O., after all. So what does his solution do? The first thing is to devise a method of adding digit-arrays with carry bits, so by adding one place at a time integer overflow is sidestepped. On the other hand, although allowing larger numbers to be checked, the process isn't very fast. The second optimization, which I'm a little surprised we haven't seen elsewhere, is to memoize the intermediate values, with the reappearance of terms known to lead ultimately to palindromes allowed to short-circuit the processing. The speedup for this is quite significant, up to 180-fold.

Here's the final form:

```perl
    sub lychrel_large_seed {
      my ( $c, $n, @n ) = ( $COUNT, $_[0], split //, $_[0] );
      while( $c-- ) {
        my @r = reverse @n;
        my $rn = join '', @r;
        my $nn = join '', @n;
        return exists $lychrel{$seeds{$rn}} if $r[0] && defined $seeds{$rn};
        return exists $lychrel{$seeds{$nn}} if          defined $seeds{$nn};
        $seeds{ $rn } = $n if $rn < $S_MAX*$MULT && $r[0];
        $seeds{ $nn } = $n if $nn < $S_MAX*$MULT;
        return 0 if $rn eq $nn; ## Check if palindromic
        ## Add the arrays as if numbers - note this is compact - but does the job!
        ( $n[$_] += $r[$_] ) > 9  && ($n[$_] -= 10, $_ ? ($n[$_-1]++) : (unshift @n, 1) ) for reverse 0 .. @n-1;
      }
      1;
    }
```



## Blogs and Additional Submissions in Guest Languages for Task 2:

[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/arne-sommer/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/arne-sommer/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Lychrel Longing with Raku and Perl](https://raku-musings.com/lychrel-longing.html)


[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/athanasius/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/athanasius/raku/ch-2.raku)

[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/colin-crain/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/colin-crain/raku/ch-2.raku)

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/dave-jacoby/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[2020 Was A LONG Year: The Weekly Challenge #137 | Committed to Memory](https://jacoby.github.io/2021/11/01/2020-was-a-long-year-the-weekly-challenge-137.html)


[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/jaldhar-h-vyas/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/jaldhar-h-vyas/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge: Week 137](https://www.braincells.com/perl/2021/11/perl_weekly_challenge_week_137.html)


[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/laurent-rosenfeld/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/laurent-rosenfeld/awk/ch-2.awk), [Bc](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/laurent-rosenfeld/bc/ch-2.bc), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/laurent-rosenfeld/c/ch-2.c), [Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/laurent-rosenfeld/julia/ch-2.jl), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/laurent-rosenfeld/lua/ch-2.lua), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/laurent-rosenfeld/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/laurent-rosenfeld/raku/ch-2.raku), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/laurent-rosenfeld/ruby/ch-2.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/laurent-rosenfeld/rust/ch-2.rs)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 137: Long Year and Lychrel Number](http://blogs.perl.org/users/laurent_r/2021/11/perl-weekly-challenge-137-long-year-and-lychrel-number.html)


[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/pete-houston/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/pete-houston/awk/ch-2.awk)

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/sgreen/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Weekly Challenge 137](https://dev.to/simongreennet/weekly-challenge-137-3jon)


[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/wlmb/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 137 – W. Luis Mochán](https://wlmb.github.io/2021/11/02/PWC137/)






---

# BLOGS {#PWC137BLOGS}

---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, by some miracle I somehow continue to maintain my bearings.**

**Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your Unquenchable *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC136BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *FOLLOW* these *BLOG* *LINKS*:

**( ...*don't think, trust your training, you're in the zone, just do it ...* )**

**Abigail**

 * [Perl Weekly Challenge 137: Long Year](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-137-1.html) ( *Perl* )
 * [Perl Weekly Challenge 137: Lychrel Number](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-137-2.html) ( *Perl* )

**Arne Sommer**

 * [Lychrel Longing with Raku and Perl](https://raku-musings.com/lychrel-longing.html) ( *Perl & Raku* )

**Dave Jacoby**

 * [2020 Was A LONG Year: The Weekly Challenge #137 | Committed to Memory](https://jacoby.github.io/2021/11/01/2020-was-a-long-year-the-weekly-challenge-137.html) ( *Perl* )

**Flavio Poletti**

 * [PWC137 - Long Year - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/11/03/pwc137-long-year/) ( *Perl & Raku* )
 * [PWC137 - Lychrel Number - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/11/04/pwc137-lychrel-number/) ( *Perl & Raku* )

**Jaldhar H. Vyas**

 * [Perl Weekly Challenge: Week 137](https://www.braincells.com/perl/2021/11/perl_weekly_challenge_week_137.html) ( *Perl & Raku* )

**James Smith**

 * [Perl Weekly Challenge #137](https://github.com/drbaggy/perlweeklychallenge-club/blob/master/challenge-137/james-smith/README.md) ( *Perl* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 137: Long Year and Lychrel Number](http://blogs.perl.org/users/laurent_r/2021/11/perl-weekly-challenge-137-long-year-and-lychrel-number.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 137: palindrome sums on long years – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2021/11/01/PerlWeeklyChallenge137.html#task1) ( *Raku* )


**Roger Bell_West**

 * [RogerBW's Blog: Perl Weekly Challenge 137: Long Cheryl](https://blog.firedrake.org/archive/2021/11/Perl_Weekly_Challenge_137__Long_Cheryl.html) ( *Perl & Raku* )

**Simon Green**

 * [Weekly Challenge 137](https://dev.to/simongreennet/weekly-challenge-137-3jon) ( *Perl* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 137 – W. Luis Mochán](https://wlmb.github.io/2021/11/02/PWC137/) ( *Perl* )
