---
title: "Advent Calendar - December 12, 2020"
date: 2020-12-20T00:00:00+00:00
description: "Advent Calendar - December 12, 2020."
type: post
image: images/blog/2020-12-12.jpg
author: Javier Luque
tags: ["Perl","Raku"]
---

[**Advent Calendar 2020**](/blog/advent-calendar-2020)
***

The gift is presented by [**Cheok-Yin Fung**](https://perlweeklychallenge.org/blog/meet-the-champion-2020-08). Today she is talking about her solution to the task `Smallest Multiple` of **["The Weekly Challenge - 049"](/blog/perl-weekly-challenge-049)**.

***

**Smallest Multiple**

Write a script to accept a positive number(integer) as command line argument and print the smallest multiple of the given number consists of digits 0 and 1.

For example:
For given number 55, the smallest multiple is 110 consisting of digits 0 and 1.

---
## Table of Contents

1. Code
2. Modulo Arithmetic
3. Algorithms
    1. Naive Brute Force
    2. "Result-oriented" Brute Force
    3. Modulo Arithmetic Again
4 Benchmarking Comparison
5. Pitfalls
6. Final Words and Acknowledgements

## 1. Code

The Optimized Solution to Be Discussed:

```perl
    use strict;
    use warnings;

    sub max {
        return $_[0]>$_[1] ? $_[0] : $_[1];
    }

    sub mult_nt {
        my $z = $_[0];
        my $pow_two = 0;
        my $pow_five = 0;

        while ( $z % 2 == 0) {
            $z /= 2;
            $pow_two++;
        }

        while ( $z % 5 == 0) {
            $z /= 5;
            $pow_five++;
        }

        # let $x = max($pow_two,$pow_five)
        # answer = 10**$x * $z * something
        # Now we are going to calculate what "$z*something" should be

        my $key = undef;

        if ($z != 1) {
            my $k = 0;
            my $temp = 10 % $z;
            my @RMNDER = (undef);
            do {
                $RMNDER[2**$k] = $temp;
                for ( 1 .. 2**$k-1 ) {
                    $RMNDER[2**$k + $_] = ( $RMNDER[$_] + $temp) % $z ;
                    if ($RMNDER[2**$k + $_] == 0) {
                        $key = 2**$k + $_;
                        last;
                    }
                }
                $temp = (10*$RMNDER[2**$k]) % $z;
                $k++;
            } while (!$key);
        }

        # Now we get all integers ready for the answer

        my $ans = ($z == 1)? 1 : sprintf( "%0b", $key);
        $ans .= "0" x max($pow_two,$pow_five);

        return $ans;
    }

    print mult_nt($ARGV[0]), "\n";
```

## 2. Basic Modulo Arithmetic

The math level, especially the modulo arithmetic required, to solve this problem is not complicated.

We need to know:

    odd_number × odd_number == odd_number

    odd_number × even_number == even_number

    even_number × odd_number == even_number

Oh, you must have known this pattern in the primary school. In addition, you can complain the expression above is not rigorous enough! Let us have a modulo-two version:

```perl
    (a % 2) × (b % 2) == 1   if and only if  a % 2 == 1 and b % 2 == 1 .
```

Identities in modulo arithmetic which come naturally from its definition:

```perl
    (a % c + b % c) % c == (a + b) %c

    ((a % c) × t ) % c == (a × t) % c
```

Hope you can remember them as we are going to use them to understand the solution going-to-be-discussed.

---
After seeing the task statement, I dabbled on my notebooks.


> How many trailing zeros in the product A×B×...×X×Y×Z in base 10?

This is a typical question in junior high school math competiton. The key for these kinds of problems is counting how many powers of 5's and powers of 2's in the products. (In Week #072, we encounter Task 1 asking for the number of the trailing zeros of factorials.)

> factorization of 10<sup>m</sup> + 1

Some problems or rapid calculations which can be used to get the answer by being familiar with following factorizations:

    101 == 101
    1001 == 7×11×13
    10001 == 73×137

Having these on mind, the task should be related to factorization and modulo arithmetic - I quickly decided.



If n is an odd number without factors of 5, what are the possible <code>/^[01]+$/</code> multiples of it?

Suppose the wanted multiple of n is smaller than or equal to 11111, we have:

    a = 10000 % n
    b = 1000 % n
    c = 100 % n
    d = 10 % n
    e = 1 % n = 1

The candidates modulo n are in the set {a, b, c, d, 1 , a+b, a+b+c, a+b+c+d, a+b+c+d+1, a+c, a+c+d, ... c+d+1, c+1, d, d+1}.

Realized that a = (b×10) % n, and similarly b = (c×10) % n, c = (d×10) % n, etc., we can both save computing time and allow larger numbers solution (need not explicit use 10<sup><em>something</em></sup>) in coding.

Before seeing more math hidden, let us see two direct implementations first.

---

## 3. Implementations

If we directly look at the multiplication/modulo process, we can get two brute force algorithms, and they are specially nice in Perl, can be put as oneliners - with the carol of dynamic typing and regex in Perl. (This is a retrospective overview stemmed from the [team Perl review](https://perlweeklychallenge.org/blog/review-challenge-049/).)

## 3.i Naive Brute Force

The first way is checking each multiple of the input positive integer against a regular expression until we hit <code>$multiple =~ /^[01]+$/</code> or <code>$multiple !~ /[2-9]/</code> equivalently.

Full oneliner:

```perl
    $ perl -e ' $m = $ARGV[0]; while (!($m =~ /^[01]+$/)) {$m += $ARGV[0];} print $m' 2
    10
```

However, this solution is not efficient.

```perl
    $ time perl -e ' $m = $ARGV[0]; while (!($m =~ /^[01]+$/)) {$m += $ARGV[0];} print $m' 18
    1111111110
    real    0m12.543s
    user    0m12.530s
    sys    0m0.004s
```

Here is an informal analysis for a simple explanation:

May we use the [Benford's law](https://en.wikipedia.org/wiki/Benford%27s_law) in mathematical statistics.

    Distribution of a random sample of numbers with the leading digit are: (From Wikipedia)

    digit 1: 30.1%
    digit 2: 17.6%
    digit 3: 12.5%
    digit 4:  9.7%
    digit 5:  7.9%
    digit 6:  6.7%
    digit 7:  5.8%
    digit 8:  5.1%
    digit 9:  4.6%

As every multiple wanted having leading digit 1, we can have a probability of roughly 30%~40% each trial getting a multiple starting with 1 for a random input. (Somebody may argue it is better than 11.1% ≈ 1/9 .)
Hey! We haven't counted the second leading digit, the third leading digit... 0 appears as the second leading digit with a probability of 12.0%, third leading 10.2%; and 1 appears as the second leading digit with a probability of 11.4%, third leading 10.1%.

For benchmarking,

```perl
    $ time perl -e 'for (2..50) {
    > $m = $_;
    > while (!($m =~ /^[01]+$/)) {$m += $_;}
    > print $m, "\n"}'

    10
    111
    ...
    1110000
    1100001
    100

    real    1m3.899s
    user    1m3.814s
    sys    0m0.012s
```

## 3.ii "Result-Oriented" Brute Force

Given the undesireable running time of the previous script, we try to check the integers composing of 1 and/or 0, and try whether it is a multiple of the input via <code>%</code>.

```perl
    $ perl -e '$biny=1;
    > while ( sprintf("%0b", $biny) % $ARGV[0] != 0)
    > {$biny++} printf("%0b", $biny);
    > print "\n"' 27
    1101111111
```

(Later we can see the modulo arithmetic solution, actually, is a variation based on this solution.)

```perl
    $ time perl -e 'for (2..50) {$biny=1;
    > while ( sprintf("%0b", $biny) % $_ != 0) {$biny++}
    > printf("%0b", $biny); print "\n"}'
    10
    111
    ...
    1110000
    1100001
    100

    real    0m0.007s
    user    0m0.007s
    sys    0m0.000s
```

Calculating for 49 integers, but the total computing time is even much more smaller than the 12 seconds for input = 18 in the naive brute force implementation!

## 3.iii Modulo Arithmetic Solution

Now we will save more time using modulo arithmetic.

The leading digits of the multiples must be 1, how about the last digits? It can be 0 or 1, of course from the task statement... Okay, for odd numbers except multiples of 5, the corresponding multiples must end with 1. For even numbers and multiples of 5, the corresponding multiples must end with 0.

Hey, the converse of the above two statements is also valid:

> For an integer ends with 0, it must have a factor of 2 and 5.
> For an integer ends with 1, it must be a multiple of some odd numbers except 5 and 5's multiples.

Targetting with multiples of 2 and 5, we can go further for the trailing zeros. Since 2 and 5 are coprime, we have

<blockquote>m % (10<sup>n</sup>) == 0    if and only if     m % (2<sup>n</sup>) == 0  and  m % (5<sup>n</sup>) == 0 .</blockquote>

Now we are getting to implement a solution using all knowledge of modulo arithmetic mentioned. Extracting the factors of 2 and 5:

```perl
    sub mult_nt {
        my $z = $_[0];
        my $pow_two = 0;
        my $pow_five = 0;

        while ( $z % 2 == 0) {
            $c /= 2;
            $pow_two++;
        }

        while ( $z % 5 == 0) {
            $z /= 5;
            $pow_five++;
        }
        #...
```

Let <code>$x = max($pow_two,$pow_five)</code> , answer = <code> 10<sup>$x</sup> × $z × something </code>.

As what we explored, "<code>$z × something</code>" must be odd - in the context of the task, end with digit 1.

Let us finish all the math hidden not yet explored in Section 2.

> Suppose the wanted multiple of z is smaller than or equal to 11111, we have:

    a = 10000 % z
    b = 1000 % z
    c = 100 % z
    d = 10 % z
    e = 1 % z = 1

> The candidates __(the multiple(s) possible)__ modulo z are in the set {a, b, c, d, 1 , a+b, a+b+c, a+b+c+d, a+b+c+d+1, a+c, a+c+d, ... c+d+1, c+1, d, d+1}.

To check whether these elements are multiples of <code>$z</code>, arrrrrr... Producing all of them at once and checking, should not be efficient.

How does this algorithm save time from that of Section 3.ii? It will use an array to store the remainders of all failed candidates; for each operation of increasing length of the binary numbers from m to m+1, we just check each sum between the remainder of 10<sup>m</sup> % $z and those "failed" candidates. Failure teaches success! Here is the first trial of Perlish-pseudocode:

```perl
    my $success = undef;
    my $k = 0;
    my $temp = 10 % $z;            # must be non-zero as $z having no factors of 2 or 5
    my @the_set_of_candidates = (1);
    do {
        $RMNDER_of_10_pow_to_k = $temp;
        for my $a_failed_candidate ( @the_set_of_candidates ) { # Line[I]
            #Line[I]: we will change the set of candidates as an array soon
            $RMNDER_of_10_pow_to_k_plus_a_failed_candidate = ( $a_failed_candidate + $temp) % $z ; #Line[II]
            if ($RMNDER_of_10_pow_to_k_plus_a_failed_candidate == 0) {
                $success = 1;
                last;
            }
            push @the_set_of_candidates, $RMNDER_of_10_pow_to_k_plus_a_failed_candidate;          #Line[III]
        }
        $temp = (10*$temp) % $z;                                                                   #Line[IV]
        $k++;
    } while (!$success);

    #Remarks for Line[IV]:
    # $temp = (10*$temp) % $c  instead of  $temp = 10**($k+1) % $c
    # save time (see the above rules of modulo arithmetic) and also avoid early overflow
    # $temp must be non-zero because $z having no factors of 2 or 5
```

How should we store the set of candidates as an array? As we are asking THE smallest multiple, why not put them in the order of the "smallest before modulo operation"? If you read the pseudocode above, you know Line[III] has already been working.

Before each increment of <code>$k</code>, what is the size of the set of candidates? Again back to Section 2, and observe the pattern:

    a = 10000 % n
    b = 1000 % n
    c = 100 % n
    d = 10 % n
    e = 1 % n = 1

    For k = 0, set: {1};
    For k = 1, set: {1, 1+d};
    For k = 2, set: {1, 1+d, 1+c, 1+d+c};
    For k = 3, set: {1, 1+d, 1+c, 1+d+c, 1+b, 1+d+b, 1+c+b, 1+d+c+b};

For k = 4, I think you got it already: the size of the sets of candidates are the powers of 2.

We now have better layout:

```perl
    do {
        $RMNDER[2**$k] = $temp;
        for ( 1 .. 2**$k-1 ) {
            $RMNDER[2**$k + $_] = ( $RMNDER[$_] + $temp) % $z ; #Remark[I]
            if ($RMNDER[2**$k + $_] == 0) {
                $success = 1;
                last;
            }
        }
        $temp = (10*$RMNDER[2**$k]) % $z;
        $k++;
    } while (!$success);
```

    # Remark[I]: The line does the work of Line[II] and Line[III] in previous pesudocode at the same time.

This is not the end of game. We haven't get THE NUMBER - the smallest multiple required! (And, a math consideration: Does it always exist such a multiple?) Let us have a pattern observation again:

    (If the input n is large enough, before the loop starts, we have:)
    a = 10000 ,
    b = 1000 ,
    c = 100 ,
    d = 10 ,
    e = 1 .
    For k = 0, set: {undef};
    For k = 1, set: {undef, 1};
    For k = 2, set: {undef, 1, 10, 11};
    For k = 3, set: {undef, 1, 10, 11, 100, 101, 110, 111}
    For k = 4, set: {undef, 1, 10, 11, 100, 101, 110, 111,
                              1000, 1001, 1010, 1011, 1100, 1101, 1110, 1111} .

The are exactly the binary numbers. Moreover, if we look at them as arrays, <code>$RMNDER[$index] = $<em>index_in_binary_form</em> % $z</code>.

We can skip the boolean variable <code>$success</code> by setting a numeric variable <code>$key</code> <code>undef</code>, and then have the following lines:

```perl
    my $key = undef;

    if ($z != 1) {
        my $k = 0;
        my $temp = 10 % $z;
        my @RMNDER = (undef);
        do {
            $RMNDER[2**$k] = $temp;
            for ( 1 .. 2**$k-1 ) {
                $RMNDER[2**$k + $_] = ( $RMNDER[$_] + $temp) % $z ;
                if ($RMNDER[2**$k + $_] == 0) {
                    $key = 2**$k + $_;
                    last;
                }
            }
            $temp = (10*$RMNDER[2**$k]) % $z;
            $k++;
        } while (!$key);
    }
```

The full code is on Section 1.

## 4. Benchmarking

```perl
    $ time perl mod-arith_smallest_multiple_list.pl # from 2 to 50
    ...
    real    0m0.011s
    user    0m0.011s
    sys    0m0.000s
```

Arrrrrr, it is not faster than the "result-oriented" script. Actually, this occurs sometimes even for large number.

```perl
    $ time perl -e '$biny=1; while ( sprintf("%0b", $biny) % $ARGV[0] != 0) {$biny++} printf("%0b", $biny); print "\n"' 9631
    110010100110001

    real    0m0.017s
    user    0m0.016s
    sys    0m0.000s

    $ time perl mod-arith_smallest_multiple.pl 9631
    110010100110001

    real    0m0.021s
    user    0m0.022s
    sys    0m0.000s
```

Let us see some other comparisons. Here I borrow the scripts by **E. Choroba** and **Ryan Thompson**. The <code>sprintf</code> function is not used in their scripts selected; Ryan has noticed that the performance of a script using <code>sprintf</code> is notablely faster. For codes, one may follow their blogposts at the bottom of this Advent post.

```perl
    $ time perl -e 'for $x (102..998) {$biny=1; while ( sprintf("%0b", $biny) % $x != 0)
    > {$biny++} printf("%0b", $biny); print "\n"}' > 3-digit_list.txt

    real    0m2.238s
    user    0m2.226s
    sys    0m0.008s

    $ time perl echoroba_smallest_multiple_list.pl > echoroba_list.txt

    real    0m6.540s
    user    0m6.488s
    sys    0m0.021s

    $ time perl rjt_smallest_multiple_list.pl > rjt_3-digit.txt

    real    0m7.726s
    user    0m7.659s
    sys    0m0.052s

    $ time perl mod-arith_smallest_multiple_list.pl > mod-arith_list-3-digit.txt

    real    0m1.535s
    user    0m1.516s
    sys    0m0.016s


    $ time perl -e 'for $x (1002..1997) {$biny=1; while ( sprintf("%0b", $biny) % $x != 0)
    > {$biny++} printf("%0b", $biny); print "\n"}' > 4-digit_list.txt

    real    0m3.140s
    user    0m3.128s
    sys    0m0.000s


    $ time perl echoroba_smallest_multiple_list.pl > echoroba_list_4-digit.txt

    real    0m9.386s
    user    0m9.364s
    sys    0m0.009s

    $ time perl rjt_smallest_multiple_list.pl > rjt_4-digit.txt

    real    0m14.127s
    user    0m14.010s
    sys    0m0.088s

    $ time perl mod-arith_smallest_multiple_list.pl > mod-arith_list_4-digit.txt

    real    0m2.273s
    user    0m2.264s
    sys    0m0.008s
```

## 5. Pitfalls

* 9's multiples test our patience. From the divisiblity rule of 9, the number of 1's in the output must be a multiple of 9 .
* Solution always exists. This math fact can be proved by the pigeonhole principle, and that proof, shows that for every positive integer n, there must be a multiple of consisting of the consecutive 1's leading and some(or none) trailing zeros -- which is the reason why every rational number has a recurring or terminating decimal representation.
* For time-consuming cases, I have just learnt from a 6-year-ago Perl Advent post that we can use [Time::Limit](http://perladvent.org/2014/2014-12-07.html) to handle our impatience.

## 6. Final Words and Acknowledgements

The script discussed is a rewrite of [my old script](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-049/cheok-yin-fung/perl/ch-1.pl) submitted in Week #049. I started submitting solutions to The Weekly Challenge tasks from Week #048 (February this year). Except for <code>sprintf</code>, both scripts can be understood just using knowledge included in introductory textbooks of Perl, but the new script shows improvement.

Thanks the generosity of E. Choroba([post and code](http://blogs.perl.org/users/e_choroba/2020/03/perl-weekly-challenge-048-smallest-multiple-and-lru-cache.html)) and Ryan Thompson([post and code](http://ry.ca/2020/03/smallest-multiple/)), allowing me to use their codes and ideas in this Advent post.

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

[**Advent Calendar 2020**](/blog/advent-calendar-2020)
