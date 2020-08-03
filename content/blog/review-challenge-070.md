
---
author:       Colin Crain
date:         2020-08-02T00:00:00
description:  "Colin Crain › Perl Weekly Review #070"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #070"
image:        images/blog/p5-review-challenge-070.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-069/).* )

Welcome to the Perl review for **Week 070** of the Weekly Challenge! Here we will take the time to **discuss** the  submissions offered by the team, **factor** out the common methodologies that came up in those solutions, and **highlight** some of the unique approaches and unusual code created.

Or really, talk about pretty much anything that stands out as remarkable or noteworthy.

Every week there is an enormous global collective effort made by the team, analyzing and creatively coding the submissions, and that effort deserves credit due. And that's why I'm here, to try and figure out how to do that.

Let's have a look and see what we can find.

---

For context, before we begin, you may wish to revisit either of the pages for the [**original tasks**](/blog/perl-weekly-challenge-070/) or the summary [**recap**](/blog/recap-challenge-070/) of the challenge. But don't worry, the challenges themselves will be briefly summarized, presented below as we progress from task by task. Oh, and one more thing before we get started:

### Getting in Touch with Us

<a href="mailto:pwc.perfectwave.com"><img src="http://ry.ca/misc/Email.svg" height="50" width="50"> Email</a> › Please email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="http://ry.ca/misc/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="http://ry.ca/misc/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

**So finally, without further ado...**

---

# •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC070TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC070TASK2)   &nbsp;  &nbsp;  &nbsp;       •   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC070BLOGS)    &nbsp;  &nbsp;  &nbsp;       •

---

# TASK #1 › Character Swapping {#PWC070TASK1}
Submitted by: Mohammad S Anwar
You are given a string $S of size $N.

You are also given swap count $C and offset $O such
that

$C >= 1,
$O >= 1,
$C <= $O and
$C + $O <= $N.


##### UPDATE: 2020-07-20 16:10:00
* Pete Houston suggested to put additional constraint
i.e. $C <= $O. He presented the use case $S =
'abcd', $C = 2, $O = 1.]

Write a script to perform character swapping like below:

```
$S[ 1 % $N ] <=> $S[ (1 + $O) % $N ]
$S[ 2 % $N ] <=> $S[ (2 + $O) % $N ]
$S[ 3 % $N ] <=> $S[ (3 + $O) % $N ]
...
...
$S[ $C % $N ] <=> $S[ ($C + $O) % $N ]
```
Example 1
Input:
```
    $S = 'perlandraku'
    $C = 3
    $O = 4
```
Character Swapping:
```
    swap 1: e <=> n = pnrlaedraku
    swap 2: r <=> d = pndlaerraku
    swap 3: l <=> r = pndraerlaku
```
Output:
```
    pndraerlaku
```

# Solution Types:
For the character swapping, the basic approaches divide out into two groups, those that first convert the string to an array, and those that just worked over the strings as strings, moving individual characters.

It's worth noting that more than one member evidently came to the conclusion that the modulo operator was a red herring, perhaps with intent at misdirection. To loosely quote: "The ... modulo N ... will never be triggered because ... $C + $O ≤ $S"

This idea *had* crossed my mind when I was sorting through the description, figuring out what the requested operations actually did. That is, until I thought it through. Less than **or equal to** means that when C + O = N, the remainder is 0, and in this way the 0 index position is occasionally switched out. I think I hear a distant sound of a few foreheads being smacked. I don't think I need to say anything more; you know who you are.

Also, because of this rollover in the indexing, the switched characters are not guaranteed to be contiguous. Were that to be the case, of course, the whole operation could be easily reduced to one operation of swapping out two blocks of characters, with the emphasis shifting to calculating the upper and lower bounds of those blocks. But it was not to be. Well, to be *easily* done that is. If this coy comment intrigues you, have a look at [**Pete Houston's**](#PETEHOUSTON1) submission, and especially the regex.

## isolate SUBSTRINGS

By far the most common method was to create a loop over the string indices, and use some combination of `substr()` functions to select out characters and move them where they need to be. Really the only variation in these versions was whether or not `substr()` is being used as an lvalue, and consequently whether or not a temporary variable need be employed.

Ten of the thirteen solutions used four `substr()` functions, but several people, myself included, were able to do it in three. This was possible because when using the four argument version of `substr()`, substituting replacement text for the identified substring, the original, replaced  text is returned. The statements can then be chained, as demonstrated by
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-070/e-choroba/perl/ch-1.pl)
```perl
for my $i (1 .. $count) {
    substr $string, $i % $length, 1,
        substr $string, ($i + $offset) % $length, 1,
            substr $string, $i % $length, 1;
}
```

Pretty, isn't it? Both
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-070/cheok-yin-fung/perl/ch-1.pl), [**E. Choroba**](#ECHOROBA1), and
[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-070/colin-crain/perl/ch-1.pl) also employed this trick.

When using four `substr()` functions, it still wasn't necessary to use a temporary variable, as demonstrated by
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-070/duncan-c-white/perl/ch-1.pl)
```perl
my $dst = $o+1;
foreach my $i (1..$c)
{
    ( substr($s,$i,1), substr($s,$dst,1) ) =
        ( substr($s,$dst,1), substr($s,$i,1) );
    $dst++;
    $dst = 0 if $dst == $n;
}
```

Of further note here is how he has unrolled the modulo function, turning it into a simple check for when C + O = N; when that happens the index is manually reset to 0.

Not that there's anything wrong with temporary variables or anything, on a script this size. Sometimes I need to focus on small differences to find things to talk about.

Other submissions using `substr()` iterating over `(1..$C)` were made by
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-070/arne-sommer/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-070/athanasius/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-070/dave-jacoby/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-070/laurent-rosenfeld/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-070/sgreen/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-070/ulrich-rieke/perl/ch-1.pl),
[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-070/walt-mankowski/perl/ch-1.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-070/wanderdoc/perl/ch-1.pl)

## convert to ARRAY

Converting the string to a proper array allows swapping by index subscripts.
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-070/mohammad-anwar/perl/ch-1.pl)
gave an elegant demonstration of an in-place transformation:

```perl
foreach my $i (1..$count) {
    my $a = $i % $length;
    my $b = ($i + $offset) % $length;
    ($array[$a], $array[$b]) = ($array[$b], $array[$a]);
}
```

Simple, direct and to the point.

In other regards the solutions done this way reflected the same variations as the string versions; whether or not to use a temporary variable being the main one.

### [**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-070/roger-bell-west/perl/ch-1.pl)
produced perhaps the shortest, in his usual terse style:

```perl
foreach my $ci (1..$c) {
  ($s[$ci % $n],$s[($ci+$o) % $n]) = ($s[($ci+$o) % $n],$s[$ci % $n]);
}
```

### [**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-070/perlboy1967/perl/ch-1.pl)

Niels gives us a very creative way to get to swapping. First he creates a small array of the relevant positions being switched:
```perl
my @i = ($i % $N, ($i + $O) % $N);
```
then does the deed in-place using a pair of array slices:

```perl
@s[@i] = @s[reverse @i];
```

The power of assigning to array slices seems to be a real takeaway strategy from this challenge.

Other members choosing this general method were
[**Csaba Simandi**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-070/x1mandi/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-070/jaldhar-h-vyas/perl/ch-1.pl), and
[**Javier Luque**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-070/javier-luque/perl/ch-1.pl).

Csaba does provide us with the very relevant question: "Why is swapping not applied to the first character at index 0?" For that, however, I can provide no insight.

## UNIQUE approaches and other THINGS THAT CAUGHT MY EYE

### [**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-070/e-choroba/perl/ch-1.pl){#ECHOROBA1}

Choroba gives us two solutions: the first a "triple in-place substring substitution iteration" of the familiar type, and the second a whole block switching alternative, which he puts forth employing both Pete's additional constraint **C <= O** and a further requirement **C + O < L**. Under those constraints the modulo can never wrap around, and we can use a single large block swap:

```perl
sub swap_constrained {
    my ($string, $count, $offset) = @_;
    my $length = length $string;

    my $r = substr($string, 0, 1)
              . substr($string, $offset + 1, $count)
              . substr($string, $count + 1, $offset - $count)
              . substr($string, 1, $count)
              . substr($string, $offset + $count + 1);

    return substr $r, 0, $length
}
```

### [**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-070/jo-37/perl/ch-1.pl)

Jorg appears to have definitively cracked the code to convert the many sequential swappings into a single bulk rearrangement of the input string. First converting to an array, he notes that moving the first element to the last position makes the entire arrangement 0-based. And here comes the clever part: all of the rearrangements can be performed using array slices. The first action, for example is `@S[1 .. $#S, 0]`

Once the action is 0-based, the main event is the slice

```perl
[$O .. $O + $C - 1, $C .. $O - 1, 0 .. $C - 1, $O + $C .. $#S]
```

There's a lot to unpack here, so here are the sections rephrased in English:

1. Offset to Offset + Count - 1 *the swapped in second block*
2. Count to Offset - 1 *what's left over between the blocks*
3. 0 to Count - 1  *the swapped in first block, here counting from 0*
4. Offset + Count to End *whatever is left after the blocks to the end of the string*

Once this slice is made, though, we're still not done, because we need to undo the original shift by moving the last character back from the end to the beginning of the string: `[$#S, 0 .. $#S - 1]`

We can apply these slices by simply nesting them; the first slice produces and array, which in turn can be sliced, and the resultant array can be sliced a third time. In the end, the line looks like:

```perl
join '', ((@S[1 .. $#S, 0])
    [$O .. $O + $C - 1, $C .. $O - 1, 0 .. $C - 1, $O + $C .. $#S])
    [$#S, 0 .. $#S - 1];
```

While daunting at first impression, this complicated series of actions breaks down nicely. To be clear, that line is pretty much the whole shebang:

```perl
sub swapit {
    my @S = split //, shift;
    my ($C, $O) = @_;

    join '', ((@S[1 .. $#S, 0])
        [$O .. $O + $C - 1, $C .. $O - 1, 0 .. $C - 1, $O + $C .. $#S])
        [$#S, 0 .. $#S - 1];
}
```

### [**Myoungjin Jeon**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-070/jeongoon/perl/ch-1.pl)

Jeon gives us a brace of answers: one, `charactersSwappedAsExplain()`, hidden under a --debug flag, solves the challenge in a conventional manner. Apparently unsatisfied with this answer, he seems to have been exploring a much more complicated deconstruction, reducing the result string to five parts:
1. the part before the first swap (postion [0])
2. the later block swapped in
3. any characters between the swaps
4. the earlier block swapped in
5. any characters left after the swaps

He then attempts to create a set of rules to simply construct the final result depending on the input criteria, with variable results. Whereas I do believe this is a valid approach that could produce a solution that works for every case, the task is seriously complicated by the wrap around to position [0] when C + O = N.

Although Jeon's brazen attempt at an alternate method still needs work, in order to debug himself he needed to calculate a correct output string to compare to. In doing this he did give us a viable solution based on an iterative use of substr(), moving one character at a time, which I'd call a success. I like how Jeon doesn't just add a few selectively placed `print` statements to peek into his code but builds a complete debugging framework that turns on with a command line switch. It certainly makes my job easier.


### [**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-070/pete-houston/perl/ch-1.pl) {#PETEHOUSTON1}
Pete chose to apply his effort into that if one did wish to reduce the sequence of individual position swappings into one grand sweeping gesture switching two blocks of characters, then how complicated would that be? As it turns out, not too bad. In the case C + O = N, the swap would occur at position array[N], or one beyond the last element. By concatenating element array[0] there this can accommodated for.

This trick part is after the swap, the extra character is now the *original* character at array[0], and a wrap was supposed to occur, putting the last character in the first position on the string. Rearranging the output string is accomplished with a regex and propriety is restored, and we are thankful that only one character need be adjusted, as things get quite complicated after that.

Here's his swapping function:
```perl
sub chswap {
    my ($str, $count, $offset) = @_;
    my $wrap = $count + $offset == length $str; # Special case
    $str .= substr ($str, 0, 1) if $wrap;
    substr ($str, $offset, $count,
        substr ($str, 1, $count,
        substr ($str, ++$offset, $count)));
    $str =~ s/^.(.*)(.)$/$2$1/ if $wrap;
    return $str;
}
```

---

# TASK #2 › Gray Code Sequence {#PWC070TASK2}
You are given an integer 2 <= $N <= 5.
Write a script to generate $N-bit gray code sequence.

**2-bit Gray Code Sequence**

`[0, 1, 3, 2]`

To generate the 3-bit Gray code sequence from the
2-bit Gray code sequence, follow the step below:

**2-bit Gray Code sequence**

        [0, 1, 3, 2]

### 1. Binary form of the sequence

        a) S1 = [00, 01, 11, 10]

### 2. Reverse of S1

        b) S2 = [10, 11, 01, 00]

### 3. Prefix all entries of S1 with '0'

        c) S1 = [000, 001, 011, 010]

### 4. Prefix all entries of S2 with '1'

        d) S2 = [110, 111, 101, 100]

### 5. Concatenate S1 and S2 gives 3-bit Gray Code sequence

        e) [000, 001, 011, 010, 110, 111, 101, 100]

**3-bit Gray Code sequence**

`[0, 1, 3, 2, 6, 7, 5, 4]`

**Example**

`Input: $N = 4`

`Output: [0, 1, 3, 2, 6, 7, 5, 4, 12, 13, 15, 14, 10, 11, 9, 8]`

# Solution Types:



## implement the GIVEN algorithm

The algorithm as given is a perfectly solid approach and the plurality of submissions stuck to it, with the principle variations lying in how certain steps were implemented, or perhaps consolidated. If one were to desire clarity of process as an overarching principle, systematically following the procedure step by step might be the result, as exemplified by
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-070/dave-jacoby/perl/ch-2.pl)

```perl
if ( $n > 2 ) {
    for my $i ( 3 .. $n ) {
        # s1 is sequence converted to binary
        # s2 is s1 reversed
        my @s1 = map { dec2bin( $_, $i ) } @sequence;
        my @s2 = reverse @s1;

        # we append 0 to all entries in s1
        # and 1 to all the s2 entries
        @s1 = map { '0' . $_ } @s1;
        @s2 = map { '1' . $_ } @s2;

        # and then we join the two into one,
        my @s3 = ( @s1, @s2 );
        @sequence = map { bin2dec($_) } @s3;
    }
}
```

Dave's solution offloads the logic for the base conversions into a pair of appropriately named subroutines.

Exceeding even Dave's very methodically laid out solution in terms of transparency in execution,
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-070/arne-sommer/perl/ch-2.pl)
provides a `--verbose` command line switch that will report exactly what the values are for S1, S2 and S3 throughout the process:

```perl
sub generate2bgcs ($level, $verbose, @in)
{
  my @S1a = map { sprintf('%0' . ($level-1)  . 'b', $_) } @in;
  my @S2a = reverse @S1a;
  my @S1  = map { "0$_" } @S1a;
  my @S2  = map { "1$_" } @S2a;
  my @S3  = (@S1, @S2);
  my @out = map { oct("0b$_") } @S3;

  if ($verbose)
  {
    say ": a) S1 = [" . join(", ", @S1a) ."]";
    say ": b) S2 = [" . join(", ", @S2a) ."]";
    say ": c) S1 = [" . join(", ", @S1)  ."]";
    say ": b) S2 = [" . join(", ", @S2)  ."]";
    say ": e) S3 = [" . join(", ", @S3)  ."]";
    say ": \$N=$level  = [" . join(", ", @out) . "]";
  }
  return @out;
}
```

Note that the algorithm implementation itself is nearly identical. With small variations,
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-070/jaldhar-h-vyas/perl/ch-2.pl),
[**Javier Luque**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-070/javier-luque/perl/ch-2.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-070/mohammad-anwar/perl/ch-2.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-070/wanderdoc/perl/ch-2.pl) also gave us solutions following this regular, systematic progression.



### [**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-070/athanasius/perl/ch-2.pl)

The Monk gives us a slight twist by using recursion to build the sequence from a kernel of (0, 1), then using two `map` functions to create S1 and S2, finally using the inherent list-flattening of the return to combine the two lists. Neat and practical, and to-the-point.

```perl
sub gray_codes_binary
{
    my ($N) = @_;
    return @ONE_BIT_SEQ if $N == 1;             # Base case

    my @seq = gray_codes_binary($N - 1);        # Recursive call
    my @s1  = map { "0$_" }         @seq;
    my @s2  = map { "1$_" } reverse @seq;

    return (@s1, @s2);                          # Concatenate the arrays
}
```


### [**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-070/colin-crain/perl/ch-2.pl)

For my own solution I wanted do some functional programming and implement some of the `map` constructs I've been seeing a lot of these past few weeks. As such, we build a routine recursing down *s* bits to a kernel of the listref `[0, 1]`. On return we use a `map` to translate to binary and then apply a concatenation over the list `(0, 1)` with either the binary list or the list reversed, depending on $_ in the `map` block. In this way we've created S1 and S2. We apply another `map` to convert back into decimal and let the two lists flatten out in the listref returned.

Here it is with the formatting improved a bit from what I originally submitted. I'm still working on how to present these dense code structures in the most readable fashion. I think this works pretty well; read from the bottom up.

```perl
sub grey_code {
    my $s = shift;
    return [0, 1] if $s == 1;       ## base case
    return [ map { oct("0b".$_) }
             map {
                my $n = $_;
                my $fmt = '%0' . ($s-1) . "b";
                my @gc = map {sprintf $fmt, $_}
                    grey_code($s-1)->@*;
                    map { $n . $_ }
                    $_ ? reverse @gc : @gc;
                } (0,1)
           ];
}
```

### [**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-070/perlboy1967/perl/ch-2.pl)

Niels gives us a pair of sucessive maps to produce S1 and S2 in situ:

```perl
for my $i (2 .. $N) {
    map { $_ = "0$_" } @g;
    map { m/^.(.*)/; push(@g, "1$1") } reverse @g;
}
```

The first map modifies the list itself by assigning to $_, the second uses a regex to capture the element from the reversed @g without the leading 0 we just added, prepends a 1 instead and pushed the result on to @g. This works because the @g inside the `map` function is an lvalue, and the result is evaluated much like assignment. The @g returned by the function replaces the list in the @g container only after the `map` is applied over the entire list.


### [**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-070/ulrich-rieke/perl/ch-2.pl)

Ulrich switches up the order of the algorithm, changing the steps slightly yet arriving at the same place. First the sequence is appended with a reversed version of itself. Then a pair of `for` loops is used to to prepend a 0 to the first half of the combined array, and a 1 to the second half.

```perl
for my $i (0..$len / 2 - 1 ) {
    $current[ $i ] = "0" . $current[ $i ] ;
}
for my $i ( $len / 2 .. $len - 1 ) {
    $current[ $i ] = "1" . $current[ $i ] ;
}
```

## a SHORT, ALGEBRAIC SOLUTION

The explanation for second basic method of constructing an n-bit Gray sequence begins with a deconstruction of the given algorithm for analysis at a bitwise level.

In the series of steps to convert an *n*-bit sequence to an (*n*+1)-bit sequence, we prepend a new digit onto each previous binary number, a 0 for the first half of the sequence, which does not immediately change the value, and a 1 for the second. A binary representation of a number can be considered to already have as many leading 0s as used to store the number in memory, so the first step can be safely ignored for now. So what happens when we prepend that 1?

Each digit placement in a binary number expresses the value 2<sup><i>n</i>-1</sup>; calculating the value of the number represented is accomplished by summing these powers of 2. Hence the 3rd digit placement in the number 0100 represents 4, as does the number itself because that is the only 1 present. So prepending a single 1 on a 2-digit binary number is the same as adding 4 to it. As we know that all of the other digits of a power of 2 will be 0s, and every digit beyond the second in a 2-digit binary number is also 0, we can use a bitwise OR to do the operation, knowing only the one bit will be affected. For adding a bit in position *n* this can be generalized as `$binary | 2**($n-1)`.

So jumping to the end of the given algorithm, to construct S1 + S2 we need only to append a copy of the reversed array OR'ed with 2<sup><i>n</i>-1</sup>.

Here's the real trick though, which is that none of this manipulation of bits need be expressly done in a binary notation. As well, in a decimal notation the bitwise OR can be done with simple addition (although | still works fine). With all this manipulation, the original algorithm is almost unrecognizable but could still be found in disassembled parts rearranged, and has ultimately become quite simple. **Cheok-Yin Fung** provides a demonstration:

```perl
for my $i (2..$N) {
    push @a, reverse (map {$_ + 2**($i-1)} @a);
}
```

I call this the **"short, algebraic solution"**. It's a remarkable transformation. The second half of the sequence is the reversed first half plus 2^(N-1). It really is that simple.

Other examples of this method were provided by

### [**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-070/pete-houston/perl/ch-2.pl)

```perl
while ($i < $n) {
    push @gc, map {$_ + 2**$i} reverse @gc;
    $i++;
}
```

### [**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-070/roger-bell-west/perl/ch-2.pl)

Roger uses bitwise OR for calculation, identical in practice to decimal addition

```perl
foreach (2..$depth) {
  $k*=2;
  my @o=@s;
  push @o,map {$_ | $k} reverse @s;
  @s=@o;
}
```

### [**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-070/sgreen/perl/ch-2.pl)

```perl
for my $bit ( 1 .. $bits ) {
    my $half = 2**( $bit - 1 );
    push @values, reverse map { $half + $_ } @values;
}
```

and

### [**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-070/walt-mankowski/perl/ch-2.pl)

```perl
for my $i (3..$n) {
    @S = gray_code($i, @S);
}

sub gray_code($n, @S) {
    return @S, reverse map { 2**($n-1) + $_ } @S;
}
```

## UNIQUE concoctions and STRANGE BREWS

### [**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-070/duncan-c-white/perl/ch-2.pl)

Duncan makes the astute observation that in decimal, the first half of the n-bit sequence is the n-1-bit sequence unmodified, so only creates the back half, appending that to the running sequence. This can be repeated indefinitely. The actual transformation is compressed to a single line, assigned here to the aptly named @mutate variable. His comments lay out the process quite succinctly:

```perl
foreach my $i (2..$n)
{
    # the core of the method:
    #    - reverse:        @x = reverse @seq
    #    - cvt to binary (i-1 digits long, leading zeroes):
    #              @x = map { sprintf( "%0*b", i-1, $_ ) } @x
    #    - prepend 1:      @x = map { "1$_" } @x
    #    - cvt to decimal: @x = map { eval "0b$_" }  @x )
    my @mutate = map { eval sprintf( "0b1%0*b", $i-1, $_ ) } reverse @seq;
    push @seq, @mutate;
}
```

### [**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-070/e-choroba/perl/ch-2.pl)

Choroba gives us another brace of solutions, working variations on the arithmetic solution two ways using bitwise operators. The first, a recursive solution, follows the pattern of the **short, algebraic solution**, with the noteworthy addition of a bit shift to create the correct power of two:

```perl
sub greycode_recursive {
    my ($size) = @_;
    return [0, 1] if 1 == $size;

    my $seq = greycode_recursive($size - 1);
    my $highbit = 1 << $size - 1;
    my @revhi = map { $highbit | $_ } reverse @$seq;
    return [ @$seq, @revhi ]
}
```

There's a humorous amount of circular indirection in using a bit shift on a decimal number to recreate the [0001, 0010, 0100, 1000] patterning required for the algorithm; thinking of the number as a grapheme, we aren't so much computing 2<sup><i>n</i>-1</sup> as we're literally pushing that 1 over to the left. Anyways, it amuses me.

For Choroba's second solution, they give us a completely different, even shorter method of computing Gray Codes.
```c
return n ^ (n >> 1)
```

this gives the n-th Gray Code immediately. How does this work? It's less easy to unroll, and the best explanation I could find was provided by [Henning Makholm](https://math.stackexchange.com/questions/651940/why-does-this-particular-algorithm-work) on the Mathematics StackExchange (scroll down to the last).

>n^(n>>1) xors each bit of n with the bit immediately to its left. The result is a collection of bits that encode the positions where the bits of n change from 0 to 1 or vice versa as we read them aloud from left to right.

He continues to prove that every time n increases by 1, exactly one bit of **G**<sub>*n*</sub> changes as well. There's more and I encourage others to go read the whole rigorous post.

We know the length of a binary sequence of *n* bits is 2<sup><i>n</i></sup>. So by mapping over this range we can immediately compute the Gray Code sequence by selecting how long we wish to continue.

```perl
sub greycode_iterative {
    my ($size) = @_;
    my @seq = map $_ ^ ($_ >> 1), 0 .. (1 << $size) - 1;
    return \@seq
}
```

### [**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-070/jo-37/perl/ch-2.pl)

Jorg opens with a comment on how impressed he was with the ease with which [E. Choroba](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-068/e-choroba/perl/ch-1.pl) dispatched the matrix zeroing problem in PWC #068 using PDL, the Perl Data Language module. Inspired, he then goes on to solve the Gray Code series using linear algebra.

And he's not wrong; I am impressed on how very easy it is to do myself. Without much familiarity with PDL at all I went headlong into the task of following this code and found it remarkably easy to figure out. Printing a matrix is as easy as `say @g`, so having a look to follow the logic was dead simple. Rather than just pointing you to look into it yourselvs I'm going to take a minute and explain it.

The first of two parts is an *n* x *n* encoder matrix, with n being the bit length of the Gray Code required. We will use 5 bits for this example. The matrix G has the diagonal filled with 1s, as well as the superdiagonal, the diagonal row immediately above the diagonal. If this is unclear, our example G looks like this:
```
    [1 1 0 0 0]
    [0 1 1 0 0]
    [0 0 1 1 0]
    [0 0 0 1 1]
    [0 0 0 0 1]
```

For a given position in the sequence, take the position number in binary and turn the bits into a bit vector.

For example for the 3rd position, 3 in binary is 00011, which becomes

```
    [0 0 0 1 1]
```

The Gray Code is the linear transformation b ⋅ G (modulo 2).

```perl
my $out = ($in x $g) % 2;
```

with 'x' being the matrix product. The output here is

```
    [0 0 0 1 0]
```

or, after we turn it back into a binary number and then a decimal one, 2. Which is what we expected.

Do that for all the numbers from 1 to 2<sup><i>n</i>-1</sup> and we have computed the entire sequence. Neat. I like PDL.

```perl
sub gray_encoder {
    my $len = shift;

    # Construct G.
    my $g = PDL->zeroes(byte, $len, $len);
    # Set main and super diagonal to ones.
    $g->diagonal(0, 1) .= 1;
    $g->slice('1:,:-2')->diagonal(0,1) .= 1;

    sub {
        # Create a row vector from the bits of the given number.
        my $in = pdl split //, sprintf "%0${len}b", shift;

        die "arg not valid for encoder" unless $in->dim(0) == $len;

        # Calculate the bits of the Gray encoded number.
        # Note: with PDL, the 'x' operator represents the usual matrix
        # product, not the vector cross product.
        my $out = ($in x $g) % 2;

        # Return the Gray encoded number.
        # Note: $out is not a row vector, but a 1 x N matrix
        # where the two dimensions need to be flattened into one.
        local $" = '';
        oct "0b@{unpdl $out->squeeze}";
    }
}
```

Notice how `gray_encoder()` returns a subroutine to calculate the n-th Gray Code in the sequence when given the position. The cool tricks just keep on coming with this guy.

### [**Myoungjin Jeon**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-070/jeongoon/perl/ch-2.pl)

Jeon gives a completely original take on a solution, after noticing a deep patterning in the variance of the output progression. After noticing the **G**<sub>2</sub> pattern (0, 1, 3, 2) repeating itself throughout, he constructs a method to form **G**<sub>*n*</sub> from **G**<sub>*n*-2</sub>, by directly manipulating the numbers of the previous sequence.

He determines that every octet of 8 numbers follows the same pattern of deltas from a base, and the sequence of multipliers for the base follows the same  ( 0, 1, 3, 2 ) progression.

Here's a demonstration with g4. To get the sequence:
```
[ 0,  1,  3,  2,    6,  7,   5, 4,    12, 13, 15, 14,    10, 11,  9,  8 ]
```

you sum the elements of each quad of numbers with a base multiplier x 4.
The quads can be seen themselves to derive from **G**<sub>3</sub> and before that **G**<sub>2</sub>
```
[ 0,  1,  3,  2 ] [ 2,  3,  1,  0 ]  [ 0,  1,  3,  2 ]  [ 2,  3,  1,  0 ]
+(0)*4 = 0        +(1)*4 = 4         +(3)*4 = 12        +(2)*4 = 8
```

the multiplier increases as the bit count increases. I find the fractal nature underlying the sequence fascinating. In case anyone is wondering, here's a semi-random octet from a the middle of **G**<sub>30</sub>:

```
8392176, 8392177, 8392179, 8392178, 8392182, 8392183, 8392181, 8392180,
```

One can see the last digits increment in the same (0, 1, 3, 2, 2, 3, 1, 0) pattern.


## BLOGS {#PWC070BLOGS}

***

**That's it for me this week, people!**

## For those who need more to know more *RIGHT NOW*,
## HURRY UP and read these BLOG LINKS:

***( don't think, just do it ... )***

<br>

### Andrew Shitov
#### [Raku challenge Week 70, issue 1 &#8211; Andrew Shitov](https://andrewshitov.com/2020/07/20/raku-challenge-week-70-issue-1/) ( *Raku* )
#### [Gray code in Raku &#8211; Andrew Shitov](https://andrewshitov.com/2020/07/20/gray-code-in-raku/) ( *Raku* )

<br>

### Arne Sommer
#### [Gray Swapping with Raku & Perl](https://raku-musings.com/gray-swapping.html) ( *Perl* )

<br>

### Colin Crain
#### [&#8230;Exhibiting Gray Areas in Character &#8211; Programming Excursions in Perl and Raku](https://colincrain.wordpress.com/2020/07/27/exhibiting-gray-areas-in-character/) ( *Perl* )

<br>

### Jaldhar H. Vyas
#### [Perl Weekly Challenge: Week 70](https://www.braincells.com/perl/2020/07/perl_weekly_challenge_week_70.html) ( *Perl* )

<br>

### Javier Luque
#### [PERL WEEKLY CHALLENGE &#8211; 070 &#8211; Perl Weekly Challenge](https://perlchallenges.wordpress.com/2020/07/20/perl-weekly-challenge-070/) ( *Perl* )

<br>

### Laurent Rosenfeld
#### [Perl Weekly Challenge 70: Character Swapping and Gray Code Sequence | laurent_r [blogs.perl.org]](http://blogs.perl.org/users/laurent_r/2020/07/perl-weekly-challenge-70-character-swapping-and-gray-code-sequence.html) ( *Perl* )

<br>

### Luca Ferrari
#### [Perl Weekly Challenge 70: flipping and greying - Task 1](https://fluca1978.github.io/2020/07/23/PerlWeeklyChallenge70.html#task1) ( *Raku* )
#### [Perl Weekly Challenge 70: flipping and greying - Task 2](https://fluca1978.github.io/2020/07/23/PerlWeeklyChallenge70.html#task2) ( *Raku* )

<br>

### Mohammad S Anwar
#### [Perl Weekly Challenge - 070 (Task #1: Perl) - YouTube](https://www.youtube.com/watch?v=sJyOV_o73zs) ( *Perl* )
#### [Perl Weekly Challenge - 070 (Task #2: Perl) - YouTube](https://www.youtube.com/watch?v=el3ri9s1eDc) ( *Perl* )
#### [BLOG: The Weekly Challenge #070](https://perlweeklychallenge.org/blog/weekly-challenge-070/) ( *Perl* )


<br>

### Roger Bell_West
#### [RogerBW&#39;s Blog: Perl Weekly Challenge 70: character swaps and Gray code](https://blog.firedrake.org/archive/2020/07/Perl_Weekly_Challenge_70__character_swaps_and_Gray_code.html) ( *Perl* )

<br>

### Shahed Nooshmand
#### [Perl Weekly Challenge: week 70](https://rafraichisso.ir/2020/07/24/pwc-70) ( *Raku* )

<br>

### Simon Green
#### [Perl Weekly Challenge 070](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-070/sgreen/README.md) ( *Perl* )
