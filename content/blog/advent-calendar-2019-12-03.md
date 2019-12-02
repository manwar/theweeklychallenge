---
title: "Advent Calendar - December 3, 2019"
date: 2019-12-03T00:00:00+00:00
description: "Advent Calendar - December 3, 2019"
type: post
image: images/blog/2019-12-03.jpg
author: Joelle Maslak
tags: ["Raku"]
---

[**Advent Calendar 2019**](/blog/advent-calendar-2019)
***

The gift is presented by [**Joelle Maslak**](https://perlweeklychallenge.org/blog/meet-the-champion-015). Today she is talking about her solutions to **Task #1: Decimal to Roman** of [**"The Weekly Challenge - 010"**](/blog/perl-weekly-challenge-010).

#### Write a script to encode/decode Roman numerals. For example, given Roman numeral CCXLVI, it should return 246. Similarly, for decimal number 39, it should return XXXIX. Checkout [wikipedia](https://en.wikipedia.org/wiki/Roman_numerals) page for more informaiton.

***

To start with, I read the Wikipedia page referenced in the challenge, and realized there were several different systems for writing Roman numerals – it wasn’t as standardized as I thought! That said, I stuck with the style used in the description of the challenge, specifically **“subtractive”** notation.  Essentially, the symbols are written from the largest value to the smallest value, left to right, with no more than **3** of any symbol used.  When four of a symbol would normally be used (for instance, **IIII** to mean **4**), instead it would be written as **IV**, meaning one less than **4** (you see this because the smaller number is before the bigger number).

So that’s what I’ll talk about below – the part of the code that converts an integer to a Roman number.

```perl6
 1 sub decimal-to-roman(UInt:D $decimal is copy -->Str:D) {
 2    my $str = '';
 3
 4    my @conversions =
 5        M  => 1000,
 6        CM =>  900,
 7        D  =>  500,
 8        CD =>  400,
 9        C  =>  100,
10        XC =>   90,
11        L  =>   50,
12        XL =>   40,
13        X  =>   10,
14        IX =>    9,
15        V  =>    5,
16        IV =>    4,
17        I  =>    1,
18    ;
19
20    for @conversions -> $pair {
21        while $decimal ≥ $pair.value {
22            $decimal -= $pair.value;
23            $str     ~= $pair.key;
24        }
25    }
26
27    return $str;
28 }
```

I haven’t talked about a lot of the syntax of the basic language in [past](https://digitalbarbedwire.com/2019/05/23/solving-the-sparkpost-challenge/) [posts](https://digitalbarbedwire.com/2019/04/27/anagrams-in-on/) about the **Perl Weekly Challenge**, but I’ll mention a bit here.

In **line 1** above, we define a function named decimal-to-roman. Yes, you can use “-” in function names, which is probably anxiety provoking to most people familiar with Algol-based languages, but is unambiguous in **Raku** syntax – and thus allowed (indeed, **Lisp**, among many others allow hyphens too).

This function takes one parameter, _$decimal_. This variable has a type – UInt:D.  The **UInt** part is relatively straightforward to most developers, whether or not they use **Raku** – must be an unsigned integer.  The **:D** part is unusual to most non-Raku developers, but is simple – it simply indicates the **UInt** passed must be defined, I.E. it has to be an actual value.  This **line 1** also makes this parameter, _$decimal_, a copy. By default, **Raku** parameters are read only, so they can’t be modified. This saves the overhead of making a copy when calling functions. Finally, the function returns a **Str:D** – a defined string.

You don’t have to define types in **Raku** – but when you do, you get some automatic error checking, so it’s sometimes a good thing to do. For instance, if I tried to return a **UInt** rather than a String, or returned an undefined variable, I would get an error that indicating where the assignment happened, not some far away module that expected a String and didn’t get it.

We’re using _$str_ to build a string that will be returned by this function, so we initialize it to zero character long string. We’ll be building this string left to right later in the function.

We then build an array of **Pair**. In **Raku**, pairs are built-in to the language. **Pairs** are simply two values stored together, typically referred to as a key and a value.  We use these pairs to represent some symbols and their decimal values.  You can define a pair with the **X => Y** notation (X is the key, Y is the value).

We start with the largest values – for instance, **“M”**, which represents 1,000 (this is the largest symbol in widespread usage.

The next value is **“CM”**. **“C”** means **100**, so **“CM”** means **100** less than **1000**, or **900**.

We then represent the rest of the pairs of Roman numeral **“digits”** and their associated decimal values.

The loops are where it gets interesting. For each pair, we see if that pair is less than the current value of _$decimal_.  For instance, if _$decimal_ is **8**, the first time through this outer loop we have the pair representing **“M”** and **1000**. The inner loop only runs while _$decimal_ is equal or greater than **1000** (my editor automatically changes >= to ≥, a Unicode character, to save characters on my screen – and let me keep more state on the screen).  Of course, it’s not ≥ 1000, so we go on to the next symbol, **“CM”**, which is still bigger than **8**, etc.

Eventually we get to **“V”**, representing **5**. So the first (and only) time through the inner loop with a pair of **V => 5**, we subtract 5 from _$decimal_ (so _$decimal_ is now 3), and add the symbol **“V”** to the end of _$str_ (which now contains **“V”**).

We then move to **“IV”**, representing **4**, which is not ≥ the value of _$decimal_ (3).

Then we get to I => 1. The inner loop runs 3 times, subtracting 1 from _$decimal_ each time and appending an **“I”** to _$src_ each time. After the **3rd** run through this inner loop, _$decimal_ is 0, which is no longer greater or equal to 1.  So we’re done.

***
***
If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

[**Advent Calendar 2019**](/blog/advent-calendar-2019)
