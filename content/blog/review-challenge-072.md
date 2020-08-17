
---
author:       Colin Crain
date:         2020-08-17T00:00:00
description:  "Colin Crain › Perl Weekly Review #072"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #072"
image:        images/blog/p5-review-challenge-072.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-071/).* )

Welcome to the Perl review for **Week 072** of the Weekly Challenge! Here we will take the time to discuss the  submissions offered by the team, factor out the common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

Or really, talk about pretty much anything that stands out as remarkable or noteworthy.

Every week there is an enormous global collective effort made by the team, analyzing and creatively coding the submissions, and that effort deserves credit due. And that's why I'm here, to try and figure out how to do that.

Let's have a look and see what we can find.

---

**<big>For context</big>**  before we begin, you may wish to revisit either of the pages for the [**original tasks**](/blog/perl-weekly-challenge-072/) or the summary [**recap**](/blog/recap-challenge-072/) of the challenge. But don't worry, the challenges themselves will be briefly summarized, presented below as we progress from task by task. Oh, and one more thing before we get started:

### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

**So finally, without further ado...**

---

# •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC072TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC072TASK2)   &nbsp;  &nbsp;  &nbsp;       •   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC072BLOGS)    &nbsp;  &nbsp;  &nbsp;       •

---

# TASK #1 › Trailing Zeroes {#PWC072TASK1}
You are given a positive integer $N (<= 10).
Write a script to print number of trailing zeroes in $N!.

Example 1
    Input: $N = 10
    Output: 2 as $N! = 3628800 has 2 trailing zeroes

Example 2
    Input: $N = 7
    Output: 1 as $N! = 5040 has 1 trailing zero

Example 3
    Input: $N = 4
    Output: 0 as $N! = 24 has 0 trailing zero



## Solution Types

There were a total of 26 submissions to the first task this week, rather a lot up from previous weeks. I believe Mohammad noted as such, that we'd passed the 100 mark in toto, and its nice to see an enthusiastic response from the team. Let's take a look and see what came in.

There ended up being two basic approaches to the task: the direct approach, to compute the factorials and count the zeros, and the mathematical approach, which focused on how a zero ends up at the end anyways, and calculates the total by computing factors.

## CALCULATING and COUNTING

Most of the field calculated the fatorial and counted the zeros. I did; it seemed a good way to go about things. From there, that breaks down the problem into two processes right away: **compute** and **count**. Lets' look at each side.

### Compute the Factorial

To compute the factorial, iteration was the most popular.

Looping through and multiplying up the factorial has much to say for it for speed and simplicity, although I ran some tests and found my own recursive solution ran within a few percentage points as fast within even large sizes of *n*.

Here is an example from [**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/jaldhar-h-vyas/perl/ch-1.pl). It's simple, direct and to the point.

```perl
my $factorial = 1;
for my $i (2 .. $N) {
    $factorial *= $i;
}
```

The factorial is a classic problem used to demonstrate recursion, as it is so well suited to this approach, here demonstrated by [**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/adam-russell/perl/ch-1.pl):

```perl
sub factorial{
    my($n) = @_;
    return 1 if $n == 1;
    return $n * factorial($n - 1);
}
```

It's worth noting that I did eventually choose to swap over and rewrote things this way, after completely abusing my recursive routine. YMMV.

Alternately, there's a nice functional way of constructing the factorial, using `reduce`, from `List::Util`, applying multiplication over the list 1, 2, 3, ... n.

This example is from
[**Lance Wicks**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/lance-wicks/perl/ch-1.pl):

```perl
reduce { $a * $b } 1 .. $n;
```

who decided to go out and make a separate Moo module to hold his logic;
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/dave-jacoby/perl/ch-1.pl) used an identical `reduce` as well.

I like `reduce`. It get the job done in a broad range of situations, and can be used to create a gamut of more specific operations, like `min`, `max` or `sum`. All of these functional listwise operators relate to the same core mathematical concepts, so as `sum` can be constructed from `reduce`, even `reduce` can be constructed in turn from parts. For example,

### [**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/ulrich-rieke/perl/ch-1.pl)

does the same thing using `map` to apply the function `{$product *= $_}`, while wrangling his own accumulator, `$product`:

```perl
map { $product *= $_ } (1..$n) ;
```

Rooted in Abstract Algebra and Container Theory, with functional programming there is often more than one way to go about things.


Even this list of methods is not exhaustive; as the range of the problem, from 1 to 10, was so limited it was quite easy to just provide a lookup table of 10 values. No one said to actually *compute* the factorial, after all. Or even compute the answer, for that matter.

[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/wanderdoc/perl/ch-1.pl) provided a trivial answer that amounts to a lookup table, before adding a counting solution, as does [**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/adam-russell/perl/ch-1.pl).

And since we're riffing here, another way was to import `Math::BigInt` or `Math::GMP`,  which gives you a `bfac` function and just call that. If you found yourself, as I did, wanting to explore the larger factorials (which get big fast), you'd have to at least use the `bigint` pragma anyways, which in turn uses `Math::BigInt`. Have we covered everything *now*? I think so. Let's just report in final form there were quite a few ways to do the same thing, for those who chose to compute the factorial.

In an aside, I also learned a linguistic oddity along the way, when I noticed both [**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/arne-sommer/perl/ch-1.pl) and [**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/ulrich-rieke/perl/ch-1.pl) landed on the variable name `$faculty` for their factorial. Once caught my eye, twice meant something was up. It seems the word la faculté, 'faculty' was a coinage of what we now know as the factorial by French mathematician Christian Kramp, the man who brought you the ! notation. The French, and Kramp, ultimately adopted 'la factorielle' a few years later, as being "more French", but Kramp's term lived on in translation in the Germanic languages. Although not, notably, English. Both the German word Fakultät and the Norwegian word Fakultet translate to the English word 'faculty' for the staff of an institution of learning, presumably leading our members, in turn, to choose this English word. A truly curious circle of translation; I wonder if Niels van Dijke would have picked it had he not sidestepped the discussion by using `bfac`. The truly global nature of our group is rarely so well highlighted. And I dearly hope I got that summary right because I'm certain there are folks out there who will notice any error.

Icelandic, incidentally, appears to have been out of the loop and now just uses the word 'factorial'. Any Icelanders out there are welcome to chime in on this.

And this, my friends, is the kind of rabbit hole that sucks up all my free time.

### Count the Zeros

The usual way to count the zeros was to capture them with a regex and measure the string with `length`. A few folks, included, chose to run `split //` on the string and evaluate the array as a scalar.  You say 'po-TAY-toe' I say 'po-TAH-toe'.

Here's
### [**Simon Green's**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/sgreen/perl/ch-1.pl) version:

```perl
# Strip out everything except the last zeros (if any)
# And display the length of the string
$total =~ /^.*?(0*)$/;
say length($1);
```

### [**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/cristian-heredia/perl/ch-1.pl)
did come up with her own version, clipping a single zeros off the end of the number recursively, and counting the calling loops. When finished the edge case is printing the count to output.

```perl
sub trailingZeros {
    if ($result =~ /0$/) {
        chop($result);
        $count++;
        trailingZeros();
    }
    else {
        #Output
        print "$count as ".$sentence." has $count trailing zero\n";
    }
}
```

[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/duncan-c-white/perl/ch-1.pl) and [**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/walt-mankowski/perl/ch-1.pl) both take a similar approach, dividing out 10s in a loop as long as the remainder is 0. This is Duncan's version:

```perl
while( $i % 10 == 0 )
{
    $i /= 10;
    $tz++;
}
say "trailing zeroes($fact) = $tz";
```

Walt leaves the dividend unaltered, but raises the divisor by a power of ten:

```perl
while ($n % $pwr == 0) {
    $cnt++;
    $pwr *= 10;
}
```

The other members who followed this calculate and count methodology were
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/arne-sommer/perl/ch-1.pl), [**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/colin-crain/perl/ch-1.pl), [**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/e-choroba/perl/ch-1.pl), as one of his two submissions, [**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/mohammad-anwar/perl/ch-1.pl), [**Myoungjin Jeon**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/jeongoon/perl/ch-1.pl), [**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/pete-houston/perl/ch-1.pl), [**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/roger-bell-west/perl/ch-1.pl), [**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/sgreen/perl/ch-1.pl), [**Simon Miner**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/simon-miner/perl/ch-1.pl) and [**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/wanderdoc/perl/ch-1.pl), for their second solution.

## USING the POWER of MATH

The alternative to counting the zeros is already knowing how many are there, and that can be done in turn by deconstructing the origins of how they got there in the first place. In essence, every 0 represents a factor of 10 somewhere, and each factor of 10 represents a factor of 2 and a factor of 5.

Let's let
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/jo-37/perl/ch-1.pl)
explain it:
>"Every trailing zero in any decimal number is produced by a pair of factors 2 and 5.  As there are many more factors 2 in a factorial than factors 5, the number of factors 5 give the number of trailing zeroes for the factorial. Every multiple of 5 in the product 2 * 3 * ... * n gives at least one such factor.  Higher powers of 5 give one additional factor. In summary, the number of trailing zeroes in a factorial is sum of the number of multiples of every power of 5 in 2 .. n. "

```perl
sub fac_trailing_zeroes {
    my ($n, $tz) = (shift, 0);
    for (my $f = 5; $f <= $n; $f *= 5) {
        $tz += int $n / $f;
    }
    $tz;
}
```

Got that? No? Ok, it is a little tricky before it comes clear. Because of the nature of the factorial, we already know the factorization of the number, at least on the first level. If every 5 we find in the list of factors will combine to make a 10, and hence a trailing 0, all we need to do is count the 5s. But be careful because 25 = 5 * 5 and that throws an additional 5 into the mix for every number over 24. Likewise when we get to 5<sup>3</sup>. In the end we count the integer division of of 5<sup>1</sup>, add the factors of 5<sup>2</sup>, then the factors of 5<sup>3</sup>, until our power of 5 exceeds our base number.

### [**Javier Luque**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/javier-luque/perl/ch-1.pl)
found us this phrasing, which makes the last part a little clearer:

> "Trailing 0s in n! = Count of 5s in prime factors of n!
  = floor(n/5) + floor(n/25) + floor(n/125) + …."

```perl
for (my $i = 5; int($N / $i) >= 1; $i *= 5) {
    $zeroes += int($N / $i);
}
```

This is a solid algorithm that works for any *N*. But several members scaled down their algorithm, because the challenge was constrained to *N* ≤ 10, which, obviously, is less than 25. So the robust correction part is superfluous, and we end up with this solution by

[**Bob Lied**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/bob-lied/perl/ch-1.pl)

```perl
sub trailingZero
{
    my ($n) = @_;
    return int($n/5);
}
```

Now there's nothing wrong with providing a routine that gives the correct response within a certain range. Unnecessary overengineering can be a real time sucker and can ultimately considered wasteful. Sometimes we need to remember we're designing an inexpensive children's toy and not a NATO bunker. One the other hand, neither of the solutions given validate their input either. Part of me is thinking this is a bit like saying "You can borrow my car — here's the keys. Oh, by the way, if you drive it over 24 miles per hour the wheels will fall off." Um, thanks? Be safe out there, folks.

In the end, as the oft quoted *Futurama* reference goes, **"Technically correct is the best kind of correct"**. As a joke. In a clever, animated television comedy. You can decide for yourselves what that means to you.

Filling out the field with (robust) mathematical solutions were [**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/athanasius/perl/ch-1.pl) (who nicely credits his sources), [**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/cheok-yin-fung/perl/ch-1.pl), and [**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/e-choroba/perl/ch-1.pl), who also provided a counting solution.

## on the SUBJECT of PLURALS

As the three examples given pluralize the expression "has *x* trailing zero[s]", several submissions addressed this task as well. In [**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/colin-crain/perl/ch-1.pl) I got a little bored with the simplicity of only using the numbers 1 through 10, so decided to print out a whole gamut of factorials, which put this issue into sharp relief. I made a little piece of logic to handle the cases:

```perl
my @plurals = $count == 1 ? ("is ", " ") : ("are", "s");

say "there $plurals[0] $count trailing zero${plurals[1]} on "
        . (sprintf "%2d! = ", $n) . $fact;
```

For one simple case this approach works perfectly well, but for anything larger but there does exist a robust, general purpose solution in Damian Conway's wonderful [`Lingua::EN::Inflexion`](https://metacpan.org/pod/Lingua::EN::Inflexion) (and earlier [`Lingua::EN::Inflect`](https://metacpan.org/pod/Lingua::EN::Inflect)) modules. I didn't feel like using it for a single line but several others did, and power to them. I cannot emphasize enough how brilliant it is. 10/10 would buy again.

[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/pete-houston/perl/ch-1.pl) shows us how it's done; he does quite a lot in these few lines of code. The validation works the way you think it does. [`Math::GMP`](https://metacpan.org/pod/Math::GMP) is comparable to the core Math::BigInt math library, but claims to be faster; `bfac` is a "big" factorial function. And you can have a look at how to properly pluralize the output, too. This isn't an excerpt, it's the whole shebang.

```perl
use Math::GMP;
use Params::Util '_POSINT';
use Lingua::EN::Inflexion;

for my $n (@ARGV) {
    next unless _POSINT ($n);
    my $z =()= Math::GMP->new($n)->bfac =~ /0(?=0*$)/g;
    print inflect ("$n! has <#n:$z> trailing <N:zero>\n");
}
```

## ONE-LINERS and a DIGRESSION into PERLGUTS

### [**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/laurent-rosenfeld/perl/ch-1.pl)

Laurent has been busy writing one-liners. As noted above,

>"technically correct is the best form of correct"

and he give us this pearl, which *does* work for 1 through 10, but the wheels come off after 24. He freely acknowledges this in his [blog](http://blogs.perl.org/users/laurent_r/2020/08/perl-weekly-challenge-72-one-liners-for-trailing-zeros-and-line-ranges.html), where he fleshes out his reasoning in greater detail.

```shell
    perl -E 'say int shift()/5;' 10
```

[**William West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/will-west/perl/ch-1.pl)

William West, once you get past the uniquely colorful subroutine naming and commentary, gives us a perfectly good solution from an iterated factorial, counted by splitting the capture of a regex.

```perl
sub numberoftrailingzeroesfrom{
   my $number = pop;
   print "$number has how many trailing zeroes?   ";
   $number =~ /(0*$)/;
   split '', $1
}
```

Idiosyncratic naming conventions aside, what really caught my eye was his use of `pop` to access parameter data in his subroutines, rather than the common Perl idiom `shift`. If that's the way he rolls, I see no immediate *practical* reason not to do this. I've never seen it, but if *does* work. It did get me to think about the practice for a moment, and this is where a little knowledge of the Perl internals comes in handy. What's the reasoning? Is `pop` faster or something? What's the deal with `shift` anyway?

In some programming languages, JavaScript for example, popping an array is considered by some to be preferable to shifting, as shifting requires reindexing the whole array one shorter. In Perl, however, an array is more than a just a list that knows its length. Under the hood, like other Perl variables, it's a much more sophisticated data structure that just pretends it's simple. Rather than knowing its length, it's more accurate to say it knows its *bounds*, that is, its starting index and ending.

Here's a relevant snippet from [perlguts](https://perldoc.perl.org/perlguts.html#Offsets):
>Something similar to the offset hack is performed on AVs to enable efficient shifting and splicing off the beginning of the array; while **AvARRAY points to the first element in the array that is visible from Perl, AvALLOC points to the real start of the C array.** These are usually the same, but a **shift operation can be carried out by increasing AvARRAY by one and decreasing AvFILL and AvMAX**.

Its a little bit alarming to me that I knew that was there; I just had to look up exactly where. Somewhere along the way I got comfortable in perlguts. Oh well. Somebody needs to be.

In other words, when a Perl array is allocated, the underlying C array is somewhat bigger, making appending  painless as far as `realloc` is concerned; the underlying C array only needs to be grown once a threshold is reached, and Perl always tries to size the C array to avoid the need to do that every time an element is added. `shift` is as easy as moving the pointer to the first element, AvARRAY. So no, there is no penalty at all. Still, I can't abide using `pop` on parameters, though. Nope. Just can't do it.

`shift` is remarkably clear at explicitly defining the moment of removing a parameter and putting it into play in a subroutine. As we read from left to right, the first element scanned will be the next element shifted off, so we know what it is and where it's going. The altering of @_ is rarely the point, and named assignment **from** and direct reference **to** the parameter list are always available as options<sup>1</sup>, so the use of `shift` really comes down to clarity of purpose. It seems mixing that up works against this, I'd say it's best to avoid it completely. But, you know, that's just like, my opinion, man.

---

<sup>1</sup> assigning like this:

```perl
    my ($first, $second) = @_;
```
or accessing directly:

```perl
    return $_[0] * $_[1];
```

---

# TASK #2 › Lines Range {#PWC072TASK2}
You are given a text file name $file and range $A - $B where $A <= $B. Write a script to display lines range $A and $B in the given file.

#### Example

Input:

```
    $ cat input.txt
    L1
    L2
    L3
    L4
    ...
    ...
    ...
    ...
    L100
```

$A = 4 and $B = 12

Output:

```
    L4
    L5
    L6
    L7
    L8
    L9
    L10
    L11
    L12
```

## Solution Types

When Larry Wall first hobbled together Perl back in 1987, he did so to improve his own workflow. It was a practical hack, freely borrowing and bringing together elements of other tools in his workbox — like the UNIX utilities, the ```awk``` programming language or the `sed` stream editor — under one blanket. A such it it has a very useful well-rounded base of operators, but is also full of special-case syntax to either directly emulate these tools in action or otherwise facilitate common tasks.

I once was taught that Perl works so well manipulating text files because UNIX is made of text files. "It's all text." As such when working in a *NIX environment, one such action would be filtering text files down into more manageable chunks: stripping headers or such. This challenge draws directly on that application.

Larry designed two operators to address this particular task, for reading a file and selecting lines by line numbers; these are the angle-bracket readline operator and the flip-flop range operator. And each of these in turn has a special mode to make this common job even easier. If we were to know our parameters in advance and take advantage of the full power of these  hacks, the task could be reduced to

```
    while (<>) {
        print if 4..10;
    }
```

Unfortunately this super-condensed form doesn't satisfy the specific requirements of the challenge, so the solutions submitted incorporated a number of variations to achieve the same end.

### The Basic Pattern

Almost all solutions followed the same basic pattern:

+ open the file, then
+ in a loop:
    + read a line,
    + increment a counter
    + apply conditionals to determine whether to print it.

[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/jaldhar-h-vyas/perl/ch-2.pl) demonstrates this succinctly, without bells or whistles

```perl
open my $fn, '<', $file or die "$OS_ERROR\n";
while (my $line = <$fn>) {
    $linenumber++;
    if ($linenumber > $B) {
        last;
    }
    if ($linenumber < $A) {
        next;
    }
    print $line;
}
close $fn;
```

[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/arne-sommer/perl/ch-2.pl), [**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/athanasius/perl/ch-2.pl), [**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/cheok-yin-fung/perl/ch-2.pl), [**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/cristian-heredia/perl/ch-2.pl), [**Myoungjin Jeon**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/jeongoon/perl/ch-2.pl), [**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/roger-bell-west/perl/ch-2.pl), and [**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/sgreen/perl/ch-2.pl) also took this "no frills" approach.

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/dave-jacoby/perl/ch-2.pl) and [**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/ulrich-rieke/perl/ch-2.pl) make only the slightest variation, slurping down all the lines to a temporary variable before iterating through that array.

But there are a variety of means available to shortcut and streamline from this base format. Lets walk through them and see where we end up.

### use the $INPUT_LINE_NUMBER

also known as **$.** and defined as “Current line number for the last filehandle accessed.” Here's the thing about Perl special variables: it's generally safe to assume that when thinking through the mechanics of an internal process, any parameter Perl may need to carry out that process is going to be made accessable to us in the form of some sort of special variable. I by no means have the whole list of sigilled punctuation memorized, but I know enough to think it through: if Perl is reading a file line-by-line, it needs to keep track of the line number for that file. So I looked it up and there we were. As it's automatically there for the taking, some people utilized this as their self-incrementing counter.

So keeping the basic pattern but adding $. we come up with, as per [**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/wanderdoc/perl/ch-2.pl):

```perl
 open my $in, "<", $tempfile or die "$!";
 while ( my $line = <$in> )
 {
      next if $. < $FROM;
      last if $. > $TO;
      print $line;
 }
```

[**Bob Lied**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/bob-lied/perl/ch-2.pl) and [**Simon Miner**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/simon-miner/perl/ch-2.pl) also used $. in a comparable way.

[**Javier Luque**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/javier-luque/perl/ch-2.pl) and [**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/perlboy1967/perl/ch-2.pl) did as well, and in addition both consolidated the comparisons into a single line, something we will see more of later.

Here's Javier's example:

```perl
open my $fh, '<', $input_file or die "$input_file: $!";
while( <$fh> ) {
    if( $. >= $A && $. <= $B ) {
        print $_;
    }
}
```

As you can see the code becomes increasingly compact.

This leads to a natural segue into the next trick,

### use the Flip-Flop Operator

[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/walt-mankowski/perl/ch-2.pl) gives us the following code:

```perl
open my $f, '<', $fname;
while (<$f>) {
    print if $a == $. .. $b == $.;
}
```

as you can see, it's nice and clean and compact, and although it's not necessarily *shorter* than

```perl
print if $. >= $A && $. <= $B;
```

it works at least just as well. By the way, that rewritten line of Javier's code from just above works fine, as print will act on $_ if nothing else is specified. Which is yet *another* example of the shortcuts we're highlighting.

What looks like the more familiar list range operator is in fact a more generalized, boolean form of that same idea; instead of evaluating to a list of numbers or strings from the lower bound to the upper, it evaluates to true from the lower bound to the upper, and decides when those bounds are reached when they it turn evaluate to true. In other words, it becomes true when the left hand value is true and stays that way until *after* the right hand value becomes true. In this manner it includes both bounds in the truth table.

There is even a further, special-case hack on this "flip-flop" mode of the range operator, which is that when a constant is present in either the left or right position, that contant is evaluated for equality against $. Now you can see how the connections between these tricks begin to form. This automatic assignment, however, will only take place when there is a constant, so for our purposes here we will still need to make an explicit boolean expression against $. It took me a little while to figure this one out, as I'll explain in a minute.

This variant on the "normal" range operator is usually found in situations like these, in combination with the `<$filehandle>` form of the `readline()` function. But it's a handy thing to remember and has a valid role to play elsewhere from time to time when playing with booleans. But its true colors really shine when combined with a special variant of that readline operator.

Which brings us finally to our last shortcut, which is to

### use the Diamond Operator

I'm not sure exactly what the angle-brackets operator that calls readline() is officially called. [*Learning Perl*](https://docstore.mik.ua/orelly/perl3/lperl/ch06_01.htm) calls it the "line-input operator". [*Programming Perl*](https://docstore.mik.ua/orelly/perl2/prog/ch02_11.htm) gives this and alternate names the "angle operator" or "readline function". [Some](https://perlmaven.com/open-and-read-from-files) refer to it as the \<readline> operator, which works for me. I've spent way too much time going through the [perldocs](https://perldoc.perl.org/5.32.0//perlop.html#I%2fO-Operators) looking for an answer; of course they refer to it, but as far as I can see don't actually *name* it.

In any case we have seen a lot of this operator throughout, reading either a single line or a whole array of them at a time as determined by context. Less known, apparently, is the plain angle brackets without a filehandle specified in between. This is colloquially known as the "diamond operator" and is designed to mimic the input behavior of UNIX command line utilities. In the absence of a stated filehandle, the operator will look for a file name specified from @ARGV, and if nothing is found there, a data stream from STDIN. If a file is found, however, it will magically open it to read and begin delivering lines immediately. As this is exactly what we want to do in this challenge, its use seems a natural.

Combining all these techniques lead to the following construction, by

### [**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/e-choroba/perl/ch-2.pl)

```perl
my ($from, $to) = (shift, shift);
while (<>) {
    print if ($. == $from) .. ($. == $to);
}
```

that is in fact the whole logic. Note that by using `shift` twice on @ARGV the input file is the only thing remaining. It's magically opened, and the flip-flop determines the range of action on the `print` statement, which itself acts on `$_`.

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/colin-crain/perl/ch-2.pl) works almost exactly the same way, and in the course of looking to figure out why `$from .. $to` *doesn't* work, I found a five year old post on Perl Monks explaining what was happening, penned by one "Choroba". So credit where credit is due, and thanks for the tip! Unless of course there is more than one Choroba out there, our own "E. Choroba" and a different, plain old "Choroba". If that is the case, as I said elsewhere, we need to watch out, as they may someday meet up and try to take over the world. The primordial condensed form doesn't leave much room for style variation so the solutions do end up looking nearly identical, but I will note, for the golfers, that

```perl
    print if $. == $from .. $. == $to;
```

works just fine without the second set of parens.

My little incremental progression, adding one trick at a time, breaks a bit here as [**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/duncan-c-white/perl/ch-2.pl) gives us another very similar solution, using a comparison line:

```perl
while( <> )
{
    print if $. >= $from && $. <= $to;
}
```

as does

### [**Yary Hluchan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/yary-h/perl/ch-2.pl)

who explains that he is choosing *not* to use the flip-flop, preferring to exit after the upper bound. Honestly this is probably the best way to really implement this, allowing to clip out the minimal reading from possibly monster files.

```perl
my ($begin_line, $end_line)=splice @ARGV,0,2;

# Not using flip-flop .. want to simply exit on the end line
while (<>) {
    next if $. < $begin_line;
    print;
    exit if $. >=$end_line;
}
```

### Honorable Mention for Completeness

Several people went the extra mile and went ahead and wrote the $index.txt file to make sure it was there to open and process.
[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/cristian-heredia/perl/ch-2.pl) provides a handy routine should we wish to wire it in, but [**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/wanderdoc/perl/ch-2.pl) eschews the input file altogether and creates a demonstration file automatically.

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/laurent-rosenfeld/perl/ch-2.pl), in addition to his solution one-liner, provides us with a companion *creation* one-liner:
```shell
    perl -E 'say "L$_" for 1..100' > input.txt
```


## One Liners, Unique Thinking and Other Shiny Objects

### [**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/adam-russell/perl/ch-2.pl)

Adam give us this,

```shell
perl -s -n -e 'print if $. >= $A && $. <= $B' -- -A=4 -B=12  < input.txt
```

being a one-liner version of the shorthand form. Nice.

### [**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/jo-37/perl/ch-2.pl)

Jorg sends us a wonderfully bent solution, being simultaneously by now comfortably  familiar and yet oddly puzzling:

```perl
sub print_range {
    my $file = shift;
    my ($A) = shift =~ /^(\d+)/;
    my ($B) = shift =~ /^(\d+)/;

    return if !$file || $A < 1 || $B < $A;

    open my $fh, '<', $file or die "$file: $!\n";

    eval <<EOS;
    while (<\$fh>) {
        print if $A .. $B;
    }
EOS

    die $@ if $@;
    close $fh or warn "$file: $!\n";
}
```

Wait, why would he `eval` that? What exactly is going on here? Then the penny dropped: after the eval the expression is in the ideal shortcut form. The flip-flop now has constants and will magically work on $. without the need to specify anything. I find this solution deeply metaphysically satisfying.

```perl
while (<$fh>) {
    print if 3 .. 10;
}
```

In all this dancing around getting closer and closer I'm glad someone actually achieved the final form. Bravo, sir, bravo. *(slow clap to crescendo)*


### [**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/laurent-rosenfeld/perl/ch-2.pl)

Laurent is working on one-liners this week, and has come up with this:

```shell
perl -ne 'print if 7..10' input.txt
```

I will surmise Laurent is working under the theory that if you can type in literal constants on the command line, you can type them into the one-liner. Sounds reasonable to me.

### [**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/mohammad-anwar/perl/ch-2.pl)

Mohammad, much like Ulrich, uses the array return option for the \<readline> operator to immediately slurp down the contents of his filehandle, but diverges from there in a new and exciting way

```perl
sub lines_range {
    my ($file, $a, $b) = @_;

    open(my $F, "<", $file) || die "ERROR: Failed to open [$!]\n";
    my @lines = <$F>;
    close($F);

    print $lines[$_] for $A-1..$B-1;
}
```

I must admit seeing a different approach to the comparison step got me a bit lightheaded and giddy. The trick here is that once all the lines are stored in a temporary holding array, there is no longer any need to do any comparison checks to decide what to do; we can just go ahead and print those indices requested. This got me thinking, and could be done with an array slice (I have array slices on my mind this week for some reason):

```perl
print for @lines[$A-1..$B-1];
```

Or, to take this to its extreme, we could even eliminate the variable completely and insert

```perl
print for (<$F>)[$A-1..$B-1];
```

before we close the file. The tricky part is forcing the array context on `<$F>` without explicit assignment, but indexing the parens gets around this. No comparisons required. Sweet.


### [**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/pete-houston/perl/ch-2.pl)

*"I'm built for comfort, I ain't built for speed"*

Ok, that's not *exactly* what Pete wrote at the top of his script. I believe the term he used was "Optimized for memory" but I choose to believe both he and Willie Dixon were working the same territory.

```perl
my $start = shift @ARGV;
my $end   = shift @ARGV;
print "start = $start, end = $end\n";
for my $file (@ARGV) {
    open my $in, '<', $file;
    <$in> for 2 .. $start;
    print '' . <$in> for ($start .. $end);
    close $in;
}
```

This has a few interesting tidbits. For one, on opening the file the first course of action is to read `$start - 1` lines and immediately throw them away. There's no need to check any line numbers as we know exactly how many to pitch out. Then we print a number of lines. How many? One might be tempted to quickly blurt out `$end - $start`, and that person would be wrong, because we wish to specify inclusive boundries, so it's one more than this. Sidestepping this arithmetic entirely Pete uses the much less confusing `($start..$end)` range. And what of the `print '' . <$in>` part? Well this is because of the polymorphic return policy on `<$in>`. Assigned to a scalar, it delivers one line. Assigned to an array, it's slurpy and delivers an array of all lines. `print` is perfectly happy taking an array, and so a single call to `print <$in>` will immediately print all lines. To get around this, he starts printing an empty string and concatenates the return of <$in> to it, forcing scalar context. Sneaky. And very clever.


## in CONCLUSION

It seems a simple text-processing task has descended into a study of the many customized operations lurking beneath the surface in Perl. The Camel book proudly proclaims

>Making Easy Things Easy and Hard Things Possible

and these little hacks exist solely to feed the Laziness, Impatience and Hubris of Perl programmers everywhere. So use them, that's why they're there.

<br>

## BLOGS {#PWC072BLOGS}

***

**That's it for me this week, people!**

## If any of you need more to know more *RIGHT NOW*,
## then HURRY UP and read these BLOG LINKS:

***( don't think, trust your training, you're in the zone, just do it ... )***


### [Adam Russell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/adam-russell/perl/ch-2.pl)
#### [Using -s with Perl One Liners](https://adamcrussell.livejournal.com/16759.html) ( *Perl* )
#### [n! has how many trailing zeroes?](https://adamcrussell.livejournal.com/17058.html) ( *Perl* )

<br>

### [Andrew Shitov](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/ash/perl/ch-2.pl)
#### [Raku challenge week 72](https://andrewshitov.com/2020/08/04/raku-challenge-week-72/) ( *Raku* )

<br>

### [Arne Sommer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/arne-sommer/perl/ch-2.pl)
#### [Zero Lines with Raku & Perl](https://raku-musings.com/zero-lines.html) ( *Perl & Raku* )

<br>

### [Colin Crain](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/colin-crain/perl/ch-2.pl)
#### [Flip-Flops Leaving a Trail of Zeros &#8211; Programming Excursions in Perl and Raku](https://colincrain.wordpress.com/2020/08/07/flip-flops-leaving-a-trail-of-zeros/) ( *Perl & Raku* )

<br>

### [Dave Jacoby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/dave-jacoby/perl/ch-2.pl)
#### [Committed to Memory | Perl Weekly Challenge #72](https://jacoby.github.io/2020/08/03/perl-weekly-challenge-72.html) ( *Perl* )

<br>

### [Jaldhar H. Vyas](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/jaldhar-h-vyas/perl/ch-2.pl)
#### [Perl Weekly Challenge: Week 72](https://www.braincells.com/perl/2020/08/perl_weekly_challenge_week_72.html) ( *Perl & Raku* )

<br>

### [Javier Luque](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/javier-luque/perl/ch-2.pl)
#### [PERL WEEKLY CHALLENGE &#8211; 072 &#8211; Perl Weekly Challenge](https://perlchallenges.wordpress.com/2020/08/03/perl-weekly-challenge-072/) ( *Perl & Raku* )

<br>

### [Lance Wicks](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/lance-wicks/perl/ch-2.pl)
#### [Live Programming today. #Perl... Perl Weekly Challenge #72](https://www.twitch.tv/videos/702391523) ( *Perl* )

<br>

### [Laurent Rosenfeld](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/laurent-rosenfeld/perl/ch-2.pl)
#### [Perl Weekly Challenge 72: One-Liners for Trailing Zeros and Line Ranges](http://blogs.perl.org/users/laurent_r/2020/08/perl-weekly-challenge-72-one-liners-for-trailing-zeros-and-line-ranges.html) ( *Perl & Raku* )

<br>

### [Luca Ferrari](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/luca-ferrari/perl/ch-2.pl)
#### [Perl Weekly Challenge 72: trailing zeros](https://fluca1978.github.io/2020/08/03/PerlWeeklyChallenge72.html#task1) ( *Raku* )
#### [Perl Weekly Challenge 72: line filter](https://fluca1978.github.io/2020/08/03/PerlWeeklyChallenge72.html#task2) ( *Raku* )

<br>

### [Mohammad S Anwar](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/mohammad-anwar/perl/ch-2.pl)
#### [BLOG: The Weekly Challenge #072](https://perlweeklychallenge.org/blog/weekly-challenge-072/) ( *Perl & Raku* )

<br>

### [Roger Bell_West](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/roger-bell-west/perl/ch-2.pl)
#### [RogerBW&#39;s Blog: Perl Weekly Challenge 72: factorial zeroes and line ranges](https://blog.firedrake.org/archive/2020/08/Perl_Weekly_Challenge_72__factorial_zeroes_and_line_ranges.html) ( *Perl & Raku* )

<br>

### [Simon Green](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/sgreen/perl/ch-2.pl)
#### [Perl Weekly Challenge 072](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/sgreen/README.md) ( *Perl* )

<br>

### [Simon Proctor](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/simon-proctor/perl/ch-2.pl)
#### [The Weekly Challenge in Raku : Week 72 (Part 1)](https://dev.to/scimon/the-weekly-challenge-in-raku-week-72-part-1-2i0g) ( *Raku* )
#### [The Weekly Challenge in Raku : Week 72 (Part 2)](https://dev.to/scimon/the-weekly-challenge-in-raku-week-72-part-2-12oh) ( *Raku* )

<br>

### [Walt Mankowski](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/walt-mankowski/perl/ch-2.pl)
#### [Perl Weekly Challenge #72 - Walt Mankowski](http://www.mawode.com/blog/blog/2020/08/04/perl-weekly-challenge-72/) ( *Perl* )
