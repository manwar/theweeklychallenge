---
title: "BLOG: The Weekly Challenge #060"
date: 2020-05-16T00:00:00+00:00
description: "Blog for the weekly challenge #060."
type: post
image: images/blog/weekly-challenge-060.jpg
author: Mohammad S Anwar
tags: ["Perl", "Raku"]
---

# HEADLINE

I am not sure about you guys but I found writing blog is very nice feeling. I get nice ideas to clean up the code. This week, I even found a bug that even unit test couldn't catch. I would rather not share it, quite embarassing. The bug was in my **Perl** solutions to the **"Find Numbers"** task. My git commit tree might disclose it, if you really want to know.

Back to the weekly challenges, I liked both tasks and I finished the **Perl** solutions to both task on day one i.e.**Monday** itself. Generally I go slow on **Monday** and **Tuesday** to recover from the weekend hangover, the most busiest time of the week because of **Perl Weekly Challenge** and **Perl Weekly Newsletter**. When I am editing the **Perl Weekly Newsletter** then it is double whammy for me. I am glad that I only edit alternate week. So I get a breather in between.

Once I am done with **Perl** solutions, I find myself little relax as I know I can easily get the **Raku** version quickly. Because of my fasting, I find it hard to do any coding during the day. After breaking the fast, I feel sleepy and take quick couple of hours of nap break. I then wake up midnight to perform night prayer and eat the **Sehar**. It is the time after morning prayer, I find myself full of energy. On saturday morning after prayer at **3:20 am**, I started preparing the ground for **Raku** solutions. By **10:00 am**, I had both the tasks done. Not a bad attempt. I did throw few questions when I was struck at one point. I will talk about it in detail later.

Since I started working from home, my daily routine has gone upside down. During the **Ramadan**, my office working hours is **8:00 am** to **3:30 pm** without lunch break, obviously. From **3:30 pm** to **8:50 pm** (time of breaking fast), is for me to perform regular prayer and relax. Sometimes I watch movie on **Netflix**. Couple of days ago, I watched **[6 Days](https://www.imdb.com/title/tt4703048/)**, nice movie. Before that I watched **[Bodyguard](https://www.imdb.com/title/tt7493974/)**. I am new to **Netflix** and therefore most of the movies are new to me.

Enough of my story, let me share my solutions to the **[Perl Weekly Challenge - 060](/blog/perl-weekly-challenge-060)**.

***

## TASK #1 › Excel Column

#### Reviewed by Ryan Thompson

Write a script that accepts a number and returns the Excel Column Name it represents and vice-versa.

Excel columns start at A and increase lexicographically using the 26 letters of the English alphabet, A..Z. After Z, the columns pick up an extra “digit”, going from AA, AB, etc., which could (in theory) continue to an arbitrary number of digits. In practice, Excel sheets are limited to 16,384 columns.

***

For this task, I was tempted to find a solution on **CPAN**. But then I changed my mind and decided to bring the kid inside me to do the hard way. It reminded me of my early days of learning **Perl5**, I think it was in the year **1998**. I kept the logic simple and easy to follow. I applied the pattern, I learnt during my college days when we were asked to convert **Decimal** to **Binary** and vice-versa.

I read some of the blogs by fellow **Team PWC** members, I don't remember who, talking about the complexity dealing with it. I didn't come across any during my investigation. May be, my solution has some hidden bugs that I am not aware of it. If you do come across please let me know.

During the initial draft, I decided to have two subroutines **sub from_excel()** and **sub to_excel()**. But then I changed my mind after completing the **Raku** solution for the same task where I just defined one **sub excel-column()**. It wasn't difficult to merge the two. Just added the parameter checking regex then everything was in place.

I would like to point out one mystery that I came across when trying to reverse the string i.e. `reverse(uc $arg)`. It wasn't giving me the expected result for some unknown reason. I had to do `scalar(reverse(uc $arg))` to get the desired result. It could be I am missing something very basic. Please do share with me if you know the reason.

```perl
sub excel_column {
    my ($arg) = @_;

    if ($arg =~ /^\d+$/) {
        my $name = '';
        my @name = (0, 'A' .. 'Z');
        while ($arg > 26) {
            my $i = int $arg / 26;
            $name .= $name[$i];
            $arg  -= ($i * 26);
        }
        $name .= $name[$arg];

        return $name;
    }
    elsif ($arg =~ /^[A-Z]+$/i) {
        my $i = 0;
        my $b = 26;
        my $d = 0;
        foreach my $c (split //, scalar(reverse(uc $arg))) {
            $d += (ord($c) - ord("A") + 1) * ($b ** $i++);
        }

        return $d;
    }
    else {
        die "ERROR: Invalid column [$arg].\n";
    }
}
```

Time to do some **Raku** magic, when I defined two subs for **Perl** solution, I thought I would use `multi sub` feature of **Raku**. It is one of my favourite features of **Raku**. So when I said *"I defined one **sub excel-column()** earlier ..."*, techically I defined two with `multi sub`, so in a way it is cheating.

The benefit of having the solution ready, It is easier to think of **Raku** way of dealing with it. It didn't take long to convert the following line in **Perl**:

```perl
foreach my $c (split //, scalar(reverse(uc $arg))) {
```

to **Raku** equivalent like below:

```perl6
for $name.uc.flip.comb -> $c {
```

Don't you think, it is beautiful?

I did this in my head, for a change. Normally I do hit and run process. When it works, I make a note of it for future.

```perl6
multi sub excel-column(Str $name) {

    my $i = 0;
    my $b = 26;
    my $d = 0;

    for $name.uc.flip.comb -> $c {
        $d += ($c.ord - "A".ord + 1) * ($b ** $i++);
    }

    return $d;
}
```

Let us talk about the other half. Couple of things, I struggled here.

First, I tried to convert the following line in **Perl**:

```perl
my @name = (0, 'A' .. 'Z');
```

I am sure, there are plenty of ways dealing with it in **Raku**. With my limited knowledge, I thought the same line would work in **Raku**. Guess what, like always, I was wrong.

When I did the same in **Raku**, the second element of `@name` had all the alphabets instead of one in each cell. So I decided to take the shortcut, I know it is not nice but does the job. If you know better way then please do let me know.

```perl6
my @name = 'A'..'Z';
@name.unshift(0);
```

The second hurdle I faced when trying to convert the following line in **Perl**:

```perl
my $i = int $arg / 26;
```

Again, I thought the same line would work in **Raku**. I was wrong once again. Looked around documentation and I found this.

```perl6
my $i = $number div 26;
```

Is it correct way of dealing with it?

Rest of the solution was simple straight forward.

```perl6
multi sub excel-column(Int $number is copy) {

    my $name = '';
    my @name = 'A'..'Z';
    @name.unshift(0);

    while $number > 26 {
        my $i = $number div 26;
        $name   ~= @name[$i];
        $number -= $i * 26;
    }
    $name ~= @name[$number];

    return $name;
}
```

After doing all the hard work, the end result becomes a matter of few lines.

Don't you love thin wrapper?

```perl
my $arg = $ARGV[0];
die "ERROR: Please provide parameter e.g. AA or 27.\n"
    unless defined $arg;

print sprintf("%s => %s\n", $arg, excel_column($arg));
```

**Raku** with `multi sub MAIN()` is elegant as well.

I also love the `<cond> ?? <exp> !! <exp>` construct. I use it whenever I get the opportunity.

```perl6
use v6.d;

multi sub MAIN(*@) is hidden-from-USAGE {
    say $*USAGE;
}

multi sub MAIN(Str :$name?, Int :$number?) {
    die "ERROR: Missing --name=<Str> or --number=<Int>.\n"
        unless defined $name or defined $number;

    defined $name
    ??
    say sprintf("%s => %s", $name, excel-column($name))
    !!
    say sprintf("%s => %s", $number, excel-column($number.Int));
}
```

The benefit of having just one **sub excel_column**, the unit test code looks cleaner.

```perl
use Test::More;

is (excel_column("Z"),  26,  "Z  => 26");
is (excel_column("AB"), 28,  "AB => 28");
is (excel_column(28),  "AB", "28 => AB");

done_testing;
```

The same applied to **Raku** as well. They both look so identical. I am amazed.

```perl6
use Test;

is excel-column('Z'),  26, 'Z  => 26';
is excel-column('AB'), 28, 'AB => 28';
is excel-column(28), 'AB', '28 => AB';

done-testing;
```

***

## TASK #2 › Find Numbers

#### Reviewed by Ryan Thompson

***

Write a script that accepts list of positive numbers (@L) and two positive numbers $X and $Y.

The script should print all possible numbers made by concatenating the numbers from @L, whose length is exactly $X but value is less than $Y.

***

For this task, once again, I took the help from **CPAN** module `Algorithm::Combinatorics`. But this time I used `sub variations_with_repetition()` because we wanted variations with repetition. After that there wasn't anything left to do, to be honest.

```perl
use Algorithm::Combinatorics qw(variations_with_repetition);

sub find_numbers {
    my ($n, $x, $y) = @_;

    my @numbers = ();
    foreach my $number (variations_with_repetition($n, $x)) {
        $number = join("", @$number) + 0;
        next unless ((length($number) == $x) && ($number < $y));
        push @numbers, $number;
    }

    return @numbers;
}
```

But for **Raku**, I was not aware of any such module. So I decided to get my hand dirty and in the process learnt few tricks. Not a bad choice.

First I tried `@numbers.combinations(2)` which didn't give me the expected pairs:

```perl6
> say <0 1 2 5>.combinations(2);
((0 1) (0 2) (0 5) (1 2) (1 5) (2 5))
>
```

I was specially interested in pairs like `(1 1) (2 2) (3 3)`.

Once again after trying all the tricks from my notes, I wasn't going anywhere. So I decided to throw the questions at the `@PerlWChallenge` twitter handle. While I was waiting for the response, I kept trying few things.

Then suddenly it clicked and got the solution.

```perl6
> say <0 1 2 5> X <0 1 2 5>;
((0 0) (0 1) (0 2) (0 5) (1 0) (1 1) (1 2) (1 5) (2 0) (2 1) (2 2) (2 5) (5 0) (5 1) (5 2) (5 5))
>
```

I did receive different solutions from the **experts** but I liked mine. It is simple and easy to remember.

The next challenge was to join both integers from the pair and deal with pair having `0` as first integer.

To join the pair elements, my note came handy this time.

```perl6
my $number = [~] @x;
```

To get rid of `0`, I simply used the trick from **Perl**.

```perl6
my $number = ([~] @x) + 0;
```

Rest of the code was nothing new to me.

```perl6
sub find-numbers(@n, $x, $y) {

    my @numbers = ();
    for @n X @n -> @x {
        my $number = ([~] @x) + 0;
        next unless $number.chars == $x && $number < $y;
        @numbers.push: $number;
    }

    return @numbers;
}
```

Now the fun part, creating standalone app becomes piece of cake.

```perl
my @numbers = find_numbers([0, 1, 2, 5], 2, 21);
print join(", ", @numbers), "\n";
```

**Raku** solution has some default parameters and type checking for fun.

Other than that, it is pretty straight forward.

```perl6
sub MAIN(:@n where .all ~~ Int = <0 1 2 5>, Int :$x = 2, Int :$y = 21) {

    my @numbers = find-numbers(@n, $x, $y);
    say @numbers.join(", ");
}
```

To make it complete solution, here is basic unit test. Nothing great.

```perl
use Test::More;

my @numbers = find_numbers([0, 1, 2, 5], 2, 21);
is (join(", ", @numbers), "10, 11, 12, 15, 20");

done_testing;
```

**Raku** is even slimmer as always.

```perl6
use Test;

is-deeply find-numbers(<0 1 2 5>, 2, 21), [10, 11, 12, 15, 20];

done-testing;
```

***

That's it for this week. Speak to you soon.
