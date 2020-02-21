---
title: "My first date with Raku"
date: 2020-02-21T00:00:00+00:00
description: "How I solved task in Raku."
type: post
image: images/blog/perl-loves-raku.png
author: Mohammad S Anwar
tags: ["Perl", "Raku"]
---

Ever since I started the Perl Weekly challenge i.e. **25th March 2019**, I have been planning to take part in the weekly challenge. Because of lack of time, I couldn't take part in the past. In the **Week #046**, I finally took the plunge and contributed **Perl** solutions to the [**Perl Weekly Challenge - 046**](/blog/perl-weekly-challenge-046).

### Challenge #046 (Task #1)

```perl
#!/usr/bin/perl

use strict;
use warnings;

my @messages = (
    'P + 2 l ! a t o',
    '1 e 8 0 R $ 4 u',
    '5 - r ] + a > /',
    'P x w l b 3 k \\',
    '2 e 3 5 R 8 y u',
    '< ! r ^ ( ) k 0'
);

my $table = [];
foreach my $message (@messages) {
    my $column = 0;
    foreach my $char (split /\s/, $message) {
        $table->[$column++]->{$char}++;
    }
}

map { print [ sort { $_->{$b} <=> $_->{$a} } keys %$_ ]->[0] } @$table;
```

---

### Challenge #046 (Task #2)

```perl
#!/usr/bin/perl

use strict;
use warnings;

my @rooms = map { 1 } (0..500);
foreach my $employee (2 .. 500) {
    my $room_number = $employee;
    while ($room_number <= 500) {
        $rooms[ $room_number ] = ($rooms [ $room_number ]) ? 0 : 1;
        $room_number += $employee;
    }
}

map { print "$_\n" if $rooms[$_] } (1..500);
```

---

**Ryan Thompson**, member of **Team PWC**, who reviews **Perl** and **Raku** solutions every week. This is what he said about my first contributions.

> Mohammad, creator of the Perl Weekly Challenge, has finally entered the fray with a solution of his own! It may be a bit strange to welcome you to your own challenge, Mohammad, but I’m going to do it anyway. Welcome. :-)

Please checkout the [**reviews**](/blog/review-challenge-046) in detail.

---

I must admit, I was relieved to see my name in the contributors list. I am also now listed formally as member of **"Team PWC"** having contributed to the weekly challenge.

![Team PWC](/images/blog/team-pwc.png)

---

The following **Week #047**, I contributed just one solution in **Perl** for **Task #2**.

### Challenge #047 (Task #2)

```perl
#!/usr/bin/perl

use strict;
use warnings;

my $start = 99;
my $count = 0;

while ($count <= 20) {
    $start++;

    my ($d1, $d2, $d3) = split //, $start;
    my $divisor = sprintf("%d%d", $d1, $d3);

    if ($start % $divisor != 0) {
        next;
    }
    else {
        $count++;
        print sprintf("%d / %d\n", $start, $divisor);
    }
}
```

---

If you noticed, so far my contributions are only in **Perl**. Doing **Perl** challanges was not a big deal, finding time to do the challange was a big deal, which I happen to succeed.

## What next?

The title of my blog is **"My first date with Raku"** and I haven't talked about it yet. Well, here comes the climax. This **Week #048**, I had little extra time to do the weekly challenge. I did it in **Perl** first for obvious reason.

### Challenge #048 (Task #1)

```perl
#!/usr/bin/perl

use strict;
use warnings;

my @people = (1 ..50);
while (scalar(@people) > 1) {
    my $sword = shift @people;
    shift @people;
    push @people, $sword;
}

print "Survivor is at position $people[0]\n";
```

---

### Challenge #048 (Task #2)

```perl
#!/usr/bin/perl

use strict;
use warnings;
use Date::Tiny;

my $date = Date::Tiny->new(year => 2000, month => 1, day => 1);

while ($date->year <= 2299) {
    my $date_as_str = sprintf("%02d%02d%04d", $date->month, $date->day, $date->year);
    if ($date_as_str eq reverse($date_as_str)) {
        print "$date_as_str is a Palindrome date.\n";
    }
    my $datetime = $date->DateTime->add(days => 1);
    $date = Date::Tiny->new(year => $datetime->year, month => $datetime->month, day => $datetime->day);
}

END {
    my $time = time - $^T;
    my $mm   = $time / 60;
    my $ss   = $time % 60;
    my $hh   = $mm / 60;
    $mm = $mm % 60;

    print sprintf("The program ran for %02d:%02d:%02d.\n", $hh, $mm, $ss);
}
```
---

I shared it with my fellow **"Team PWC"** members on Twitter.

![Challenge #048](/images/blog/pwc-048-t1.png)

Having done both task in **Perl**, I thought why not do it in **Raku** as well?

I thought I could easily translate my **Perl** solution into **Raku**.

Easy, right? No, it wasn't easy as my brain isn't trained to do it so.

So I started with **Task #1**. This is what I got in my first attempt.

```perl6
#!/usr/bin/env perl6

use v6;

my @people = (1..50);
while (@people.elems > 1) {
    my $sword = @people.shift;
    @people.shift;
    @people.push($sword);
}

say "Survivor is at position @people[0]";
```

Do you see any issues? No, hang on, this is **Raku**, so everything has to be in **MAIN()**.

So this is what I have now:

```perl6
#!/usr/bin/env perl6

use v6;

sub MAIN() {
    my @people = (1..50);
    while (@people.elems > 1) {
        my $sword = @people.shift;
        @people.shift;
        @people.push($sword);
    }

    say "Survivor is at position @people[0]";
}
```

Is it all good now?

Technically yes, it does the job. But hang on, it still doesn't look like **Raku** code.

Lets get rid off extra parenthesis this time.

```perl6
#!/usr/bin/env perl6

use v6;

sub MAIN() {
    my @people = 1..50;
    while @people.elems > 1 {
        my $sword = @people.shift;
        @people.shift;
        @people.push($sword);
    }

    say "Survivor is at position @people[0]";
}
```

Now it looks like **Raku** code.

What did I learn from this exercise?

I have read a lot about list manipulation in **Raku** but never got the opportunity to actually use it. While doing this task, I got to used it. Now, I think I will remember how to play with list in **Raku**.

Having done the **Task #1** in **Raku**, I thought why not do the **Task #2** as well. Whatever little I learnt during **Task #1**, I now have this for **Task #2**.

Since the task was related to **Date**, I looked into the [**documentation**](https://docs.raku.org/type/Date) first.

```perl6
#!/usr/bin/env perl6

use v6;

use Date;

sub MAIN() {
    my $fmt  = { sprintf "%02d%02d%04d", .month, .day, .year };
    my $date = Date.new(2000, 1, 1, formatter => $fmt);
    while $date.year <= 2299 {
        my $date_as_str = $date.Str;
        if $date_as_str eq $date_as_str.flip {
            say "$date_as_str is a Palindrome date.";
        }
        $date.later(days => 1);
    }
}
```

Do you see any issue in the code?

First run, gave a nice warning **Date** is a built-in module, no need to import. It was **humiliating**.

**Scimon Proctor**, pointed out that *$date.later()* returns new **Date** object, so I have to catch the return value.

```perl6
#!/usr/bin/env perl6

use v6;

sub MAIN() {
    my $fmt  = { sprintf "%02d%02d%04d", .month, .day, .year };
    my $date = Date.new(2000, 1, 1, formatter => $fmt);
    while $date.year <= 2299 {
        my $date_as_str = $date.Str;
        if $date_as_str eq $date_as_str.flip {
            say "$date_as_str is a Palindrome date.";
        }
        $date = $date.later(days => 1);
    }
}
```

All good? No, still something missing.

If you noticed, I named the variable **"$date_as_str"** which is **Perlish**. So I changed it to **"$date-as-str"**, more like **Raku**.

```perl6
#!/usr/bin/env perl6

use v6;

sub MAIN() {
    my $fmt  = { sprintf "%02d%02d%04d", .month, .day, .year };
    my $date = Date.new(2000, 1, 1, formatter => $fmt);
    while $date.year <= 2299 {
        my $date-as-str = $date.Str;
        if $date-as-str eq $date-as-str.flip {
            say "$date-as-str is a Palindrome date.";
        }
        $date = $date.later(days => 1);
    }
}
```

Now it looks proper **Raku** code.

What did I learn this time?

Well, I learnt how to use Date class.

After sharing the code on Twitter, **Elizabeth Mattijsen**, suggested I could use **++$date** instead of doing **$date.later()**.

Here is the final version as of today.

```perl6
#!/usr/bin/env perl6

use v6;

sub MAIN() {
    my $fmt  = { sprintf "%02d%02d%04d", .month, .day, .year };
    my $date = Date.new(2000, 1, 1, formatter => $fmt);
    while $date.year <= 2299 {
        my $date-as-str = $date.Str;
        if $date-as-str eq $date-as-str.flip {
            say "$date-as-str is a Palindrome date.";
        }
        ++$date;
    }
}
```

---

So for the first time, I have solved both tasks in **Perl** and **Raku**. To make it complete, I wrote this blog as well.

I may not be able to do this every week but it gave me confidence to at least give it a try.

Thanks for reading my story, talk to you soon with another story.
