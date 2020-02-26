---
title: "BLOG: The Weekly Challenge #049"
date: 2020-02-26T00:00:00+00:00
description: "Blog for the weekly challenge #049."
type: post
image: images/blog/blog-challenge-049.jpg
author: Mohammad S Anwar
tags: ["Perl", "Raku"]
---

This is my second blog for **The Weekly Challenge**. I am only able to participate, thanks to **Ryan Thompson** for helping me with the **[Perl](/p5-reviews)** and **[Raku](/p6-reviews)** reviews. I am going for **Perl** solutions first then will try to translate it into **Raku** next. I believe in coding to learn the language. With so many **Raku** experts around, I am not shy throwing questions up. I am now going to share my experience doing **["The Weekly Challenge - 049"](/blog/perl-weekly-challenge-049)**.


## Challenge #049 (Task #1)

```perl
#!/usr/bin/perl

use strict;
use warnings;

my $num = $ARGV[0];
die "Missing number.\n" unless defined $num;

my ($res, $i);
do { $res = $num * ++$i; } until ($res =~ /^[01]+$/);
print "$num => $res\n";
```

---

## Challenge #049 (Task #2)

Technically I cheated and took the help of **CPAN** module **[Cache::LRU](https://metacpan.org/pod/Cache::LRU)**. However it makes the end result so clean and tidy. It just worked out of the box. I just had to hack to handle the missing key return value. By design **Cache::LRU** returns *undef*, if it can't find the key. As per the task, I had to print **-1** instead, hence the hack came in action. Otherwise it is self explanatory.

```perl
#!/usr/bin/perl

use strict;
use warnings;

use Cache::LRU;

my $cache = Cache::LRU->new(size => 3);

$cache->set(1 => 3);
$cache->set(2 => 5);
$cache->set(3 => 7);

print "get(2) => ", $cache->get(2), "\n";
print "get(1) => ", $cache->get(1), "\n";

print "get(4) => ", $cache->get(4)||-1, "\n";

$cache->set(4 => 9);

print "get(3) => ", $cache->get(3)||-1, "\n";
```

---

Now the fun part to translate the **Perl** solution to **Task #1**.

Here is my first draft in **Raku**

```perl
#!/usr/bin/env perl6

use v6;

sub MAIN($num) {
    my (Int $res, Int $i);
    repeat { $res = $num * ++$i } until $res ~~ /^[01]+$/;
    $res.say;
}
```

Now running the script gets the following response:

```perl
$ perl6 ch-1.p6
Usage:
  ch-1.p6 <num>
$
```

What if we pass **non-integer** command line parameter:

```perl
$ perl6 ch-1.p6 dummy
Cannot convert string to number: base-10 number must begin with valid digits or '.' in '⏏a' (indicated by ⏏)
  in sub MAIN at ch-1.p6 line 7
  in block <unit> at ch-1.p6 line 5
```

Lets force the data type of command line parameter:

```perl
#!/usr/bin/env perl6

use v6;

sub MAIN(Int $num) {
    my (Int $res, Int $i);
    repeat { $res = $num * ++$i } until $res ~~ /^[01]+$/;
    $res.say;
}
```

Now lets check what difference it made:

```perl
$ perl6 ch-1.p6 dummy
Usage:
  ch-1.p6 <num>
```

I am now happy with the response. I am now ready for real test.

```perl
$ perl6 ch-1.p6 5


```

It just goes into the wild without giving any result. I am confused what's goind on here. I started looking for reason and found out that my regex is causing this behaviour. So I modified it like below.

```perl
#!/usr/bin/env perl6

use v6;

sub MAIN(Int $num) {
    my (Int $res, Int $i);
    repeat { $res = $num * ++$i } until $res ~~ /^<[01]>+$/;
    $res.say;
}
```

Now running the script again:

```perl
$ perl6 ch-1.p6 5
10
$
```

## What did I learn today?

a) Command line parameter data type handling.

b) The loop construct *repeat {  } until* as per the **[documentation](https://docs.raku.org/language/control#index-entry-control_flow_repeat-repeat/while,_repeat/until)**.

c)  Regex using with **<** and **>**.

I don't think I can do the **Task #2** in **Raku** yet. May be next time.
