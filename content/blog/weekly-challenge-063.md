---
title: "BLOG: The Weekly Challenge #063"
date: 2020-06-03T00:00:00+00:00
description: "Blog for the weekly challenge #063."
type: post
image: images/blog/weekly-challenge-063.jpg
author: Mohammad S Anwar
tags: ["Perl", "Raku"]
---

# HEADLINE

After the most difficult week (**Week #062**), it was very satisfying. I found both the tasks this week (**Week #063**) fun and challenging. The best part was that I could do both tasks in **an hour**, which is rare. I liked the **"Rotate String"** task very much. Thanks to **Ryan**, we already had test cases handy for the **"Last Word"** task. I will talk about each in detail down below.

Let me share my solutions to the **[Perl Weekly Challenge - 063](/perl-weekly-challenge-063)**.

***
## TASK #1 › Last Word
#### Submitted by **[Mohammad S Anwar](http://www.manwar.org)**
#### Reviewed by **[Ryan Thompson](https://ry.ca)**
***

Define sub `last_word($string, $regexp)` that returns the last word matching `$regexp` found in the given string, or `undef` if the string does not contain a word matching `$regexp`.

***

For the first time, I wanted to do it in **one-liner** as there is plenty of scope for it in this task. First I started with the aim to get the desired the result. Then I started merging lines to a point when it became **one-liner**. I am not sure if this is correct approach as I have never done it before. I found it easier to do this way, anyway.

```perl
sub last_word {
    my ($string, $regex) = @_;

    return [ grep /$regex/, reverse ( split /\s/, $string ) ]->[0];
}
```

<br>

Having done the **sub last_word()** in **one-liner**, as it was easier to do **one-liner** in **Raku**.

Luckily, I knew about **split()**, **reverse()** and **grep()** in **Raku**. It was just a matter of chaining it together. In my experience so far, **Raku** is ideal for chaining.

The best part was `$_ ~~ $regex`.

I am pretty sure there must be better way of doing the same. But I am satisfied with my effort, so far.

```perl6
sub last-word(Str $string, Regex $regex) {
    return ($string.split(" ").reverse.grep: { $_ ~~ $regex }).[0];
}
```

<br>

As soon I posted this solution on my **Twitter** handle `@cpan_author`, I had improvement suggestion by `@HrBollermann`

`grep: { $_ ~~ $regex}` can be replaced with `grep($regex)`

also `.[0]` became `.head`.

So the improved **sub last-word()** looks like below:

```perl6
sub last-word(Str $string, Regex $regex) {
    return $string.split(" ").reverse.grep($regex).head;
}
```
<br>

Building standalone app using the above helper **sub last_word()** was way too easy to create. In theory, the app itself became one-liner.

```perl
my $string = $ARGV[0] || '  hello world';
my $regex  = $ARGV[1] || qr/[ea]l/;

print last_word($string, $regex), "\n";
```

<br>

For **Raku** counter, I always try to explore the power of **sub MAIN()**. I have used **Regex** type for the first time. Also I had to lookup up web for how to set the default regex. After a quick lookup, I ended up with this `rx / /`. The only other bit that is different from **Perl** regex was that it was surrounded by `<` and `>`. So this `qr/[ea]l/` becomes `rx/ <[ea]>l /`.

```perl6
sub MAIN(Str :$string = '  hello world', Regex :$regex = rx/ <[ea]>l /) {
    last-word($string, $regex).say;
}
```

<br>

Doing unit test becomes easier with the given test cases. Looks like **poetry** to me.

```perl
use Test::More;

is(last_word('  hello world',                qr/[ea]l/),      'hello');
is(last_word("Don't match too much, Chet!",  qr/ch.t/i),      'Chet!');
is(last_word("spaces in regexp won't match", qr/in re/),      undef);
is(last_word( join(' ', 1..1e6),             qr/^(3.*?){3}/), '399933');

done_testing;
```

<br>

**Raku** unit test is no different except the following variance of **Raku** regex:

1) `qr/ch.t/i` in **Perl** is same as `rx:i/ ch.t /`  in **Raku**.

2) `qr/in re/` in **Perl** is same as `rx:s/ in re /` in **Raku**.

3) `qr/^(3.*?){3}/` in **Perl** is same as `rx/^^(3.*?)**3/` in **Raku**.

Did you notice something else?

I didn't use `join(' ', 1..1e6)` in **Raku** even though I knew it would work without any issue.

I wanted to do it differently, so I decided to do it this way `(1..1e6).join(' ')` instead.

Also `undef` became `Nil` for fun.

```perl6
use Test;

is last-word('  hello world',                rx  / <[ea]>l   /), 'hello';
is last-word("Don't match too much, Chet!",  rx:i/ ch.t      /), 'Chet!';
is last-word("spaces in regexp won't match", rx:s/ in re     /), Nil;
is last-word( (1..1e6).join(' '),            rx  /^^(3.*?)**3/), '399933';

done-testing;
```

***
## TASK #2 › Rotate String
#### Submitted by **[Mohammad S Anwar](http://www.manwar.org)**
#### Reviewed by **[Ryan Thompson](https://ry.ca)**
***

Given a word made up of an arbitrary number of `x` and `y` characters, that word can be rotated as follows: For the *i*th rotation (starting at *i* = 1), *i* % length(*word*) characters are moved from the front of the string to the end. Thus, for the string `xyxx`, the initial (*i* = 1) % 4 = 1 character (`x`) is moved to the end, forming `yxxx`. On the second rotation, (*i* = 2) % 4 = 2 characters (`yx`) are moved to the end, forming `xxyx`, and so on. See below for a complete example.

Your task is to write a function that takes a string of `x`s and `y`s and returns the minimum non-zero number of rotations required to obtain the original string. You may show the individual rotations if you wish, but that is not required.

***
<br>

The core of this task depends on **substr()**. My approach for the task may not be ideal but it is easier to read and follow.

The catch line in the **sub rotate()** is below:

```perl
$i = 1 if ($i > $size);
```
<br>

The complete definition is as below:

```perl
sub rotate {
    my ($string, $verbose) = @_;

    die "ERROR: Missing string.\n"
        unless defined $string;
    die "ERROR: Invalid string [$string].\n"
        unless ($string =~ /^[xy]+$/i);

    my $size = length($string);
    my $temp = $string;
    my $i = 1;
    my $c = 1;
    while ($i <= $size) {
        my $part_a = substr($temp, 0, $i);
        my $part_b = substr($temp, $i);
        $temp = sprintf("%s%s", $part_b, $part_a);
        print "[$c]: [$temp]\n" if ($verbose);
        last if ($temp eq $string);

        $i++; $c++;
        $i = 1 if ($i > $size);
    }

    return $c;
}
```
<br>

Let's get the **Perl** translated into **Raku**.

```perl
my $size = length($string);
```
became this

```perl6
my $size = $string.chars;
```

and the following

```perl
$temp = sprintf("%s%s", $part_b, $part_a);
```
became

```perl6
$temp = ($part_b, $part_a).join;
```
<br>

Rest of the code is same as before.

```perl6
sub rotate(Str $string where { $_ ~~ rx:i/^ <[xy]>+ $/ }, Bool $verbose?) {

    my $size = $string.chars;
    my $temp = $string;
    my $i = 1;
    my $c = 1;
    while $i <= $size {
        my $part_a = substr($temp, 0, $i);
        my $part_b = substr($temp, $i);
        $temp = ($part_b, $part_a).join;
        say "[$c]: [$temp]" if $verbose;
        last if $temp eq $string;

        $i++; $c++;
        $i = 1 if $i > $size;
    }

    return $c;
}
```

I received another improvement suggestion by `@khalidelboray` like below:

`Str $string where { $_ ~~ rx:i/^ <[xy]>+ $/ }`

can be shortened to

`Str $string where rx:i/^ <[xy]>+ $/`

Here is one-liner **Perl** standalone app. No brainer though.

```perl
my $count = rotate($ARGV[0], 1);
print "Rotation: $count\n";
```

<br>

**Raku** counterpart with optional `--verbose`.

```perl6
sub MAIN(Str :$string = 'xyxx', Bool :$verbose?) {
    rotate($string, $verbose).say;
}
```

<br>

Fun with unit test using couple of standard test cases.

```perl
use Test::More;

is (rotate('xyxx'), 7, 'xyxx');
is (rotate('xyxy'), 3, 'xyxy');

done_testing;
```
<br>

Same applied here as well.

```perl6
use Test;

is rotate('xyxx'), 7, 'xyxx';
is rotate('xyxy'), 3, 'xyxy';

done-testing;
```

***

That's it for this week. Speak to you soon.
