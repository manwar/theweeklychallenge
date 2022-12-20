---
title: "Advent Calendar - December 19, 2022"
date: 2022-12-19T00:00:00+00:00
description: "Advent Calendar - December 19, 2022."
type: post
image: images/blog/2022-12-19.jpg
author: Stephen G. Lynn
tags: ["Perl", "Raku", "Julia"]
---

## [**Advent Calendar 2022**](/blog/advent-calendar-2022)
### | &nbsp; [**Day 18**](/blog/advent-calendar-2022-12-18) &nbsp; | &nbsp; **Day 19** &nbsp; | &nbsp; [**Day 20**](/blog/advent-calendar-2022-12-20) &nbsp; |
***

The gift is presented by `Stephen G. Lynn`. Today he is talking about his solution to [**"The Weekly Challenge - 186"**](/blog/perl-weekly-challenge-186). This is re-produced for **Advent Calendar 2022** from the original [**post**](https://thiujiac.blogspot.com/2022/10/pwc-186.html) by him.

***

<br>

## Challenge 1 (Zip List)

<br>

Challenge 1 requires `"zipping"` two lists `a` and `b` say, by creating a combined list in which the elements are: `(a[0] b[0] a[1] b[1] a[2] b[2] ...).` The lists are of equal length.

There are ready-made functions to do this in all three languages I submit. In `Perl 5`, [**List::MoreUtils has a zip function**](https://metacpan.org/pod/List::MoreUtils#zip-ARRAY1-ARRAY2-[-ARRAY3-...-]) that does exactly this. `Raku` has the [**Z operator**](https://docs.raku.org/routine/Z), so it is as simple as `@a Z @b`. `Julia` has a zip function named `zip`, though the output is not quite what is requested. It returns an array of tuples: `[(a[0] b[0]), (a[1] b[1]), ...].`

I wrote my own function for the task, using straightforward logic. I just push the elements of the two arrays into a new array in the prescribed order. The key snippet:

<br>

### Perl 5

<br>

```perl
push @c, ($$ra_a[$_], $$ra_b[$_]) for (0 .. @$ra_a-1);
```

<br>

### Raku

<br>

```perl
@c.append(@a[$_], @b[$_]) for (0 .. @a-1);
```

<br>

### Julia

<br>

```perl
for i in 1:length(b)
    append!(c, a[i], b[i])
end
```

<br>

### [**Here is my Perl 5 script**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-186/steve-g-lynn/perl/ch-1.pl).
### [**Here is my Raku script**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-186/steve-g-lynn/raku/ch-1.p6).
### [**Here is my Julia script**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-186/steve-g-lynn/julia/ch-1.jl).

<br>

## Challenge 2 (Unicode makeover)

<br>

This challenge requires replacing a string of accented alphabets say `'âÊíÒÙ'` with the unaccented equivalent say `'aEiOU'`.

I was under the impression that accented alphabets were formed by two-character sequences where the second character was in the range `U+0300` to `U+036F`. If so, one could use a regex to strip the input string of characters in this range and we are through.

This is not how it works though, as I found out when I tried and failed with the regex, and peeked at the codes for the accented characters in the test string.

I finally wound up using a ready-made `UNIX` utility `iconv`. I embed a call to iconv in my `Perl 5` and `Raku `subroutines using the backtick quoting in `Perl 5`, and the equivalent qqx quotes in `Raku`.

The key snippet:

<br>

### Perl 5

<br>

```perl
return `echo $string | iconv -f utf-8 -t ascii//translit`;
```

<br>

### Raku

<br>

```perl
return qqx{echo $string | iconv -f utf-8 -t ascii//translit};
```

<br>

I tried to do the same in `Julia`, but could not get the piping to work correctly. `Julia` however has an easy way to do this via the `Unicode.normalize` function.

The key snippet from my `Julia` script:

<br>

```perl
return Unicode.normalize(str, stripmark=true)
```

<br>

`Raku` also has an instant built-in way to do this via the [**samemark**](https://docs.raku.org/routine/samemark) routine.

<br>

### [**Here is my Perl 5 script**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-186/steve-g-lynn/perl/ch-2.pl).
### [**Here is my Raku script**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-186/steve-g-lynn/raku/ch-2.p6).
### [**Here is my Julia script**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-186/steve-g-lynn/julia/ch-2.jl).

<br>

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

| &nbsp; [**Advent Calendar 2022**](/blog/advent-calendar-2022) &nbsp; |
