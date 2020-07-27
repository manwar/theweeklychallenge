---
author:       Colin Crain
date:         2020-07-27T00:00:00
description:  "Colin Crain › Perl Weekly Review #069"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #069"
image:        images/blog/p5-review-challenge-069.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-068/).* )

Welcome to the Perl review for **Week 069** of the Weekly Challenge! Here we will take the time to discuss the  submissions offered by the team, factor out the common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code we find.

Or really, talk about pretty much anything that stands out as remarkable or noteworthy.

Every week there is an enormous global collective effort made by the team, analyzing and creatively coding the submissions, and that effort deserves credit due. And that's why I'm here, to try and figure out how to do that.

Let's have a look and see what we can find.

---

For context, before we begin, you may wish to revisit either of the pages for the [**original tasks**](/blog/perl-weekly-challenge-069/) or the summary [**recap**](/blog/recap-challenge-069/) of the challenge. But don't worry, the challenges themselves will be briefly summarized, presented below as we progress from task by task. Oh, and one more thing before we get started:

### Getting in Touch with Us

<a href="mailto:pwc.perfectwave.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

**So finally, without further ado...**

---

# •   &nbsp;  &nbsp;  &nbsp;   [TASK #1](#PWC069TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [TASK #2](#PWC069TASK2)   &nbsp;  &nbsp;  &nbsp;       •   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC069BLOGS)    &nbsp;  &nbsp;  &nbsp;       •

---

# TASK #1 › Strobogrammatic Number {#PWC069TASK1}
A strobogrammatic number is a number that looks the same
when looked at upside down.

You are given two positive numbers $A and $B such that
    1 ≤ $A ≤ $B ≤ 10<sup>15</sup>.

Write a script to print all strobogrammatic numbers
between the given two numbers.

Example
    Input:  $A = 50, $B = 100
    Output: 69, 88, 96


## STROBOGRAMMATIC NUMBERS

One of the first things to notice about strobogrammatic numbers is how much they resemble palindromes — that turning a number upside down is much akin to reading it back-to-front. The difference being that aside from being positionally reversed the digits are also reflected on both the horizontal and vertical axis. So any number that doesn't still look like a number after having this done simply cannot be used. So what *can* be used? On the subject of those digits, everyone agreed that 0 and 8 were the same upside down, and that 6 became 9 and vice versa.

The digit 1 was mostly accepted but not universally. It's a funny case, because of that short stroke at the top. It isn't technically a serif, per se, and is usually found in examples from sans serif fonts. But nor is is strictly required in constructing the number, and is often omitted by fonts, leaving just the body stroke. I can't seem to find a proper name for this typographical figure, and put it in the same class as crossing one's sevens and slashing zeros. I believe this is because 1, like 0, is bound by outside forces to distinguish itself from a similar alphabetic character, in this case the lower case L, and that type designers must allow for this to avoid confusion. I notice that sometimes even a vestige of the serif at the bottom of the stroke sometimes survives on sans serif fonts, for, I believe again, this same reason. I myself chose to consider the optional nature of this stroke as indicating it was a flourish, non-essential, and as such this justified including the digit. Others did not. I can see it both ways.

Several people noticed that on a 7-segment LED display the 2 and 5 digits seemed to reverse, but only [**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-069/arne-sommer/perl/ch-1.pl) implemented it as a command line option.

One last note, I said several people noticed 2 and 5, from the 7-segment displays of a bygone era. When you think about it, it's impressive how the human brain can manipulate familiar text shapes around when reading, allowing us to read vertical book spines, or upside down documents, or even things, if sufficiently simple, reflected in a mirror. All this happens automatically, and your brain just reads it, without having to explain exactly what it did to get there. Such is the case with 2 and 5. I myself thought they mapped to each other when turned upside down. It was obvious. Every other person who commented did this too. But the thing is, they don't. They map to themselves. Try it. They get mapped to each other when reflected in a mirror, but that's not what we're doing here. So were they to be included, they should be be grouped with 1, 0 and 8, not 6 and 9. I find this case of mental shenanigans fascinating, much like an optical illusion, which I suppose it is.

## There were two basic Solution Types:

## 1. VALIDATE and filter

***In a nutshell***: like a palindrome, one could check to see if a number reads the same back-to-front as front-to-back, only in this case first swapping the 6s and 9s before the comparison. This in turn could be used to make a validator function. Then when scanning over the given input range only the succesful checks would be allowed to output.

Implementing this filter at it's simplest is a translation `tr///` and `reverse()` applied to a copy of the input string.
[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-069/walt-mankowski/perl/ch-1.pl) here
strips it down to its minimal moving parts:

```perl
sub is_strobogrammatic($n) {
    my $flipped = $n;
    $flipped =~ tr/0123456789/01xxxx9x86/;
    return $n eq scalar reverse $flipped;
}
```
I like the way he's rolled digit validation in with the translation function here.

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-069/dave-jacoby/perl/ch-1.pl) and
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-069/laurent-rosenfeld/perl/ch-1.pl) also took this method. Why not keep it simple?

Both

[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-069/arne-sommer/perl/ch-1.pl) and
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-069/ulrich-rieke/perl/ch-1.pl) do something very similar, first converting to an array so they can use `map` and then stringifying again using `join` before doing the comparison.

However, it wasn't necessary to reverse the string, alternately one could reverse the act of examining it.
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-069/roger-bell-west/perl/ch-1.pl), for instance, iterates through the string place by place by index, examining each digit and comparing it to the hashed equivalent for validation. Here's the core of his routine, with a few checks edited out for clarity:
```perl
OUTER:
 foreach my $n ($range[0]..$range[1]) {
   my $nl=length($n)-1;
   my %locs;
   foreach my $pos (0..$nl) {
     $locs{$nl-$pos}=$charges{substr($n,$pos,1)};
   }
   foreach my $pos (keys %locs) {
     if (substr($n,$pos,1) ne $locs{$pos}) {
       next OUTER;
     }
   }
   push @out,$n;
 }
```
The code is very tight, but $locs{$nl-$pos} is reversing the positions in the lookup.

### [**Javier Luque**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-069/javier-luque/perl/ch-1.pl)
also scans the number from both ends, physically removing pairs of numbers as it progresses. If there is nothing left of the number when done, the number is validated.
```perl
my $search_length = length($i) / 2;
for (my $j = 0; $j < $search_length; $j++) {
    my $p1 = substr $i, $j, 1;
    my $p2 = substr $i, length($i) - $j - 1, 1;

    if ( ($p1 == 6 && $p2 == 9) ||
         ($p1 == 9 && $p2 == 6) ||
         ($p1 == 0 && $p2 == 0) ||
         ($p1 == 8 && $p2 == 8) ||
         ($p1 == 1 && $p2 == 1)) {
        $i = substr $i, 1, length($i) - 2;
        $j--;
        $search_length--;
    } else {
        last;
    }
}
push @answers, $orig
    unless ($i);

```

### [**Bartosz Jarzyna**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-069/brtastic/perl/ch-1.pl)
does a similar indirect method for validating the digits in a number by counting the translations. If the count is the same as the number length, every digit was translated. His routine has more than a few unusual qualities to it:
```perl
sub is_strobogrammatic($number = $_) {
    my sub flip($string) {
        my $count;
        eval "\$count = \$string =~ tr/$tr_search/$tr_replace/";
        return $count == length $string ? scalar reverse $string : undef;
    }

    my $flipped = flip($number);
    return !!0 unless defined $flipped;
    return $number eq $flipped;
}
```

### Conversion to an array was convenient

Some people found it easier to convert the whole string into an array of characters to work on it. The method is essentially the same, iterating over and comparing each individual digit to a mapped counterpart.

### [**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-069/duncan-c-white/perl/ch-1.pl)
takes a very listwise approach, splitting to create an array, reversing a copy, then using List::SomeUtils pairwise() to compare the two using a lookup hash.
```perl
fun strobo( $x )
{
    return 0 if $x =~ /[2-57]/;
    my @d = split(//,$x);
    my @r = reverse @d;
    my @ok = pairwise {
        #say "debug: a=$a, b=$b, inverse(a)=$inverse{$a}";
        $inverse{$a} == $b ? 1 : 0
    } @d, @r;
    #say "debug: ok=", join(',',@ok);
    return 0 if any { $_ == 0 } @ok;
    return 1;
}
```

### [**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-069/mohammad-anwar/perl/ch-1.pl)

Iterating over the digits, Mohammad checks each to see if it has a corresponding complement. If all digits do, then `$found` will remain true. Then he can do a check to see whether it's strobogrammatic.

```perl
foreach my $i (split //, $n) {
    if (exists $digits{$i}) {
        push @match, $digits{$i};
    }
    else {
        $found = 0;
        last;
    }
}
if ($found) {
    push @strobogrammatic, $n
        if ($n == join('', reverse @match));
}
```

### [**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-069/perlboy1967/perl/ch-1.pl)
takes the unusual choice to separate out the parts for validation with a regex:

```perl
if ($len == 1) {
    $re = '(?<middle>.)';
} elsif ($len % 2 == 0) {
    $re = "^(?<left>.{$half})(?<right>.+)";
} else {
    $re = "^(?<left>.{$half})(?<middle>.)(?<right>.+)";
}
if ($i =~ /$re/) {
    ($left, $middle, $right) = ($+{left}, $+{middle}, $+{right});
}
```

### [**Rage311**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-069/rage311/perl/ch-1.pl)

A quick digit check can be accomplished by grepping the list for illegal digits. After that negotiating the middle digit is the last small complexity:

```perl
sub strobotize ($number) {
  my @digits = split //, $_;
  return () if grep { !exists INVERTED->{$_} } @digits;

  my $odd_len = @digits % 2;
  my $middle = $digits[int @digits / 2];
  return () if $odd_len && $middle != 0 && $middle != 1 && $middle != 8;

  for (0 .. $#digits) {
    return () if $digits[$_] != INVERTED->{$digits[$#digits - $_]}
  }

  return $number;
}
```

### [**Simon Miner**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-069/simon-miner/perl/ch-1.pl)

Using an array, it's easy to use index math to compare from both ends simultaneously:

```perl
for ( my $i = 0; $i < scalar( @digits ); $i++ ) {
    last if $i >= $len / 2;
    next MAIN unless $digits[ $len - $i - 1 ] == $reverse{ $digits[$i] };
}
```

### [**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-069/wanderdoc/perl/ch-1.pl)

Wanderdoc implements a validation routine, but employs a unique optimization on the range that greatly increases the speed of traversal. When a number fails the valid digits test, each digit in the number is immediately increased as required until all digits are once again valid. In this way large swaths of the range can be excluded quickly and need not be iterated through. For example, all numbers starting with 3, of any length, will never be checked, and 1999 (which will fail, of course) will immediately jump to 6000 before resuming validation, saving quite a lot of wasted checking.

```perl
while ( $number =~ /[23457]/ )
{
    my @num_array = split(//,$number);
    @num_array = map {
         my $digit = $_;
         if ( $digit =~ /[23457]/ )
         {
              $digit++;
         };
         $digit; }
         @num_array;
    $number = join('', @num_array);
}
```

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-069/colin-crain/perl/ch-1.pl)

before we leave this section, I'll add that on first impulse, I thought about solving this problem using validation with a regex. Actually, I thought I couldn't do it, that it would be too complex. But, undeterred, I soldiered on, and ended up with a variation of the palindrome regex I had created for [PWC 065](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-065/colin-crain/perl/ch-2.pl). It's pretty, even if I ultimately abandoned it for a constructive approach. Here it is in its final form:

```perl
sub is_strobogrammatic {
    $_[0] =~ m/^([16890]*)[180]?((??{reverse($1=~tr[69][96]r)}))$/ ? 1 : 0
}
```

## 2. CREATE VALID NUMBERS ALGORITHMICALLY

The validate and filter approach is sound, and can be used to check any range of numbers to isolate the strobogrammatic ones. But there is one small problem, and that is the range defined in the challenge description:

>You are given two positive numbers $A and $B such that
    1 ≤ $A ≤ $B ≤ 10<sup>15</sup>.

The problem with checking every number for validity is that there are nine hundred thousand billion numbers between 10^14 and 10^15. We could, technically, check them all, so the validation schemes *will* work. But they also will, shall we say, take some time.

What to do?

Because of their palindrome-like nature, the second half of a strobogrammatic number is just a reversed and altered version of the front. Further, like a palindrome there may be a central pivot digit, only this digit cannot be 6 or 9. So a seven place number, with an optional pivot, gives us 7 + 1 + 7 = 15 digits. If we take the basic number set to be {0,1,6,8,9} and the pivot {∅, 0, 1, 8} (allowing for when the pivot is not present, when the length is even)

5<sup>7</sup> * 4 = 312500 valid numbers in the whole range.<sup>1</sup>

<sup>1</sup> actually 312499, because 00 and 000 are the same number.

As one might infer from the detail in my little analysis above, this is the strategy I took for
[**my own solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-069/colin-crain/perl/ch-1.pl) solving the problem. Starting with a kernel of the set of valid numbers, I create increasingly longer left-hand combinations, and from those construct first the right hand compliment and then the four final numbers, with either no central pivot or one of the three valid options. In this way every number of a given length is processed, the even-length combinations placed on one list, the odd-length on another. When this is done the even list, whose numbers being shorter will always be less than those on the odd list, is placed on the output first, followed by the odd list. A little careful management keeps the output list sorted, so we only need to filter this to select for our range. Once a combination list of a given length is processed, another digit is added to create a new set of all combinations one digit longer and the process is continued.

Because the output list can have at most 312500 entries, even very large ranges are dealt with in a reasonable amount of time. However there is one last pruning we can make, in that if every number for a given length of combinations is above the range requested, there is no need to continue and we gracefully bow out of our algorithm early and proceed straight to selecting the output for our range.
```perl
for (0..$order-1) {               ## the order is the upper bound
    my @evens = my @odds  = ();   ## reset holding arrays

    for my $left (@num) {
        my $right = reverse($left =~ tr/69/96/r);
            push @evens, "$left$right";

        for my $center (@center) {
            push @odds, "$left$center$right";
        }
    }

    push @stereo, @evens, @odds;    ## keeps things sorted

    ## add another digit to the working list
    @num = map { my $c = $_; map "$c$_", @list } @num;
}
```

### Everyone else grappled with this task using a variety of methods

### [**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-069/athanasius/perl/ch-1.pl)

```perl
const my %MIDDLE => (0 => 1, 1 => 8, 8 => undef);
const my %OUTER  => (1 => 6, 6 => 8, 8 => 9, 9 => undef);
const my %INNER  => (0 => 1), %OUTER;
const my %PAIRS  => (0 => 0, 1 => 1, 6 => 9, 8 => 8, 9 => 6);
```

The Monk gives us a set of hashes defining the progression from one digit to another as he constructs the `next_strobogrammatic_number()` from the previous. As such his script is much like a state machine, with the previous number defining both the state and the actions to take to progress to the next. It's a *really* interesting way to go about this task.

For example:
```perl
    if ($size % 2 == 1)                                   # odd number of digits
    {
        if (defined(my $next = $MIDDLE{ $digits[$middle] }))
        {
            $digits[$middle] = $next;
            return join('', @digits);
        }
        $digits[$middle] = 0;
    }
```

This can be parsed as: If there are an odd number of digits and
1. if there is a defined next MIDDLE digit in the sequence, set the middle digit to that number and return it as a string, or
2. otherwise set the middle digit to 0 and and continue on to other routines ... (that either increment the INNER digits or OUTER digit according to those progressions.)

Digits are incremented symmetrically, with the right hand side defined by the PAIRS lookup. A very methodical, systematic and orderly way to go about things. I like it. Please proceed...

### [**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-069/cheok-yin-fung/perl/ch-1.pl)

CY pulls out our familiar friend Algorithm::Combinatorics to get to its `variations_with_repetition` function, which she uses to compute numbers from the digits {0,1,6,8,9}. As she's computing all of the numbers of up to a given length, she still needs to filter the output;  she does this with a variation on the now-familiar substitute and reverse check.

```perl
for my $s ($sbegin .. $send) {
    foreach my $r (qw/1 6 8 9/) {
        my $o = variations_with_repetition([0, 1, 6, 8, 9],$s-1);
        while (my $y = $o->next) {
            my $string = $r.(join '', @{$y});
            push @ans, $string if $string eq rt180($string);
        }
    }
}
```

Since she still needs to create ~3 * 10<sup>10</sup> numbers to check the whole range up to 10<sup>15</sup>, her method will bog down as the range gets very large, as she notes: "not very satisfactory". While 30 billion is a lot of numbers to get through, it's still far superior to having to filter a *million* billion candidates. Implementing the connection between the left and right halves of the constructed number, while more complicated, would address that, drastically reducing the absolute number of combinations created.

### [**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-069/e-choroba/perl/ch-1.pl)
Choroba gives us two routines, one 'slow' one using simple validation, and one 'fast' one to constructively create valid numbers out of parts. The simple validation uses the familiar translation and reverse motif we've seen before. Of note I did some testing myself and found that `tr///` is by far the fastest way to do the swapping, by several orders of magnitude. I mean, it is *why* that particular function exists, after all. One would think it would be well tuned.

Starting with a kernel list of 8, 69, 88, 96 (Because they have chosen to disallow the digit 1), Choroba iterates over it to make a new batch of valid numbers. There are only two choices for a central digit, 0 and 8, so those numbers are constructed first. Here's the interesting part: after dividing a number into a beginning and end  parts, they add new *pairs* of numbers from the middle, maintaining the strobogrammatic nature. Again because of the limited combinations, these pairs can only be 00, 69, 88 and 96. So these numbers are created and placed on the combinations for the next loop through. Finally the entirely of the iteration list of combinations is pushed to the final strobogrammatic list, the iteration list is replaced and the loop is passed through again. This continues until the upper limit is exceeded; for output the final list is grepped to be within the given bounds.

```perl
sub get_strobogrammatic {
    my ($from, $to) = @_;
    my @s = (8, 69, 88, 96);
    my @last = (69, 88, 96);
    while ($s[-1] < $to) {
        my @next;
        for my $last (@last) {
            my ($begin, $end) = (substr($last, 0, length($last) / 2),
                                 substr($last, length($last) / 2));
            push @s, "${begin}0$end", "${begin}8$end";
            push @next, "${begin}00$end", "${begin}69$end", "${begin}88$end", "${begin}96$end";
        }
        push @s, @next;
        @last = @next;
    }
    return grep $from <= $_ && $_ <= $to, @s
}
```


### [**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-069/jo-37/perl/ch-1.pl)

Jorg resurrects his artful nested maps combination function `prod()` from [challenge 067](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-067/jo-37/perl/ch-2.pl), and here adds three more listwise processes to accomplish the entire job of creating and selecting the strobogrammatic numbers in what amounts to essentially four lines.

```perl
sub prod {
    my ($left, $right) = @_;
    [map {my $l = $_; map $l . $_, @$right} @$left];
}

sub all_for_length {
    my $length = shift;
    return (0, 1, 8) if $length == 1;

    my $heads = reduce {prod $a, [0, 1, 6, 8, 9]}
        [1, 6, 8, 9], (1 .. $length/2 - 1);

    map y/X//dr, map {$_ . substr reverse(y/69/96/r), 1}
        @{prod $heads, $length % 2 == 0 ? ['X'] : [0, 1, 8]};
}

sub strobogrammatic_numbers {
    my ($from, $to) = @_;

    grep {$_ >= $from && $_ <= $to}
        map {all_for_length $_} (length($from) .. length($to));
}
```

Here edited out for brevity, his comments explain his process, so please do go and have a look. I really enjoy listwise processing of data, finding the logic process dense but very satisfying.


### [**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-069/sgreen/perl/ch-1.pl)

Simon thoroughly comments his process as well, something I will always encourage to anyone who will listen. He uses the method of creating half-numbers that satisfy the digit constraints, then using each left-hand side to create a corresponding right-hand component.

Here he creates a half number list, by using each number to create a new set of combinations using `map`, then passes the items in the `_generate_number( $item, $length )` routine to get a number of the requested length. That routine does a clever trick, and creates odd-numbered lengths by sloughing off the lead digit on the right side, discarding the number unless that digit is 0 or 8. In this manner the left hand 80 is transformed into 808.

```perl
for my $length ( 1 .. length($b) ) {
    if ( length( $list[0] ) < _half_length($length) ) {
        my @new_list = ();
        foreach my $old_list (@list) {
            push @new_list, map { $old_list . $_ } @d;
        }
        @list = @new_list;
    }

    for my $item (@list) {
        my $number = _generate_number( $item, $length );
        next if !$number or $number < $a;
        last if $number > $b;

        push @numbers, $number if $number;
    }
}

sub _generate_number ($$) {
    my ( $number, $length ) = @_;
    my %switch = ( 0 => 0, 6 => 9, 8 => 8, 9 => 6 );
    my @digits = reverse( split //, $number );

    return 0 if $length % 2 and shift(@digits) !~ /[08]/;    <-- this is clever

    foreach my $digit (@digits) {
        $number .= $switch{$digit};
    }

    return $number;
}
```

---

# TASK #2 › 0/1 String {#PWC069TASK2}

A 0/1 string is a string in which every character is either 0 or 1.

Write a script to perform switch and reverse to generate S30 as described below:

switch
: Every 0 becomes 1 and every 1 becomes 0. For example, “101” becomes “010”.

reverse
: The string is reversed. For example, "001” becomes “100”.

Please follow the rule as below:

    S0 = “”
    S1 = “0”
    S2 = “001”
    S3 = “0010011”
    …
    SN = SN-1 + “0” + switch(reverse(SN-1))

## Solution Types:

After the strobogrammatic numbers challenge the construction of the mysterious sequence S prompts a sense of déja vu: we have a kernel base that is transformed, reversed and suffixed to itself, glued together with a 0 digit. Sound familiar? Of course it does. That description is the generalization of a strobogrammatic number, or in a trivial extreme, a palindrome.

In the strobogrammatic challenge, we we only told what the result needed to be, producing a wide range of solution variants. In this task, the description can be read as aset of instructions to completely lay out the method:
1. switch,
2. reverse and
3. concatinate

Consequently there was a lot less variation in the solutions, and those variations that were found were more attributable to style and personal convention over anything else.


## TRANSLATE, REVERSE and CONCATINATE

With the method just sitting there, spelled out like that, almost every answer, including my own, just followed the directives to produce S<sub>n</sub>. Amongst those solutions, almost every person chose to use tr/// to do the bit switch. This is a good choice, because tr/// is very fast. As one might imagine that to be so; it is, after all, what this function exists to do. Of all the submissions done this way, the one by
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-069/e-choroba/perl/ch-2.pl)
stood out to me as an elegantly terse example:
```perl
sub next_s {
    $_[0] . '0' . reverse($_[0]) =~ tr/01/10/r;
}

my $s = "";
$s = next_s($s) for 1 .. 30;
say $s;
```

That's the whole thing.

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-069/athanasius/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-069/duncan-c-white/perl/ch-2.pl),
[**Javier Luque**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-069/javier-luque/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-069/laurent-rosenfeld/perl/ch-2.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-069/mohammad-anwar/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-069/perlboy1967/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-069/pete-houston/perl/ch-2.pl),
[**Rage311**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-069/rage311/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-069/sgreen/perl/ch-2.pl),
[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-069/walt-mankowski/perl/ch-2.pl),
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-069/wanderdoc/perl/ch-2.pl), and
[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-069/colin-crain/perl/ch-2.pl) also employed the `tr///` + `reverse()` method. It really is pretty straightforward.

There were a few other ways to do the transformation:

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-069/dave-jacoby/perl/ch-2.pl)
follows much the same logic, only he rolls up his own translate function, `_switch()` out of a tertiary operator:

```perl
for my $c ( split //, $string ) {
    $output .= $c ? '0' : '1';
}
```

In a similar vein,
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-069/ulrich-rieke/perl/ch-2.pl) crafts a transformation function out of `substr` functions:
```perl
sub mySwitch {
  my $num = shift ;
  for my $i (0..length( $num ) - 1) {
      if ( substr( $num, $i , 1 ) eq "1" ) {
          substr( $num, $i , 1 ) = "0" ;
      }
      else {
          substr( $num, $i , 1 ) = "1" ;
      }
  }
  return $num ;
}
```

and
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-069/arne-sommer/perl/ch-2.pl)
employs a `map` to do the job.
```perl
return join("", map { $_ eq "1" ? 0 : 1 } split("", $string));
```



## a NOTE on the SIZE of the STRING

As several members have noted, both here and in the blogosphere, the size of of the string S<sub><i>n</i></sub> is directly proportional to *n*. This relationship is

 **L**(S<sub><i>n</i></sub>) = 2<sup><i>n</i></sup> - 1

The exponential growth of the string means the string does gets very big very fast. I myself never got around to calculating the full gig of S<sub>30</sub>, instead opting to just display the first 400 or so digits. How did I do that? Well the front half of the string never changes; transformation and addition only occurs at the end. S<sub>10</sub> has 1023 digits, and we can be certain that every longer string will start with those same 1023 digits + 0. So there is some predictability about S, and more careful examination suggests a deep structure to it. Look at [**Athanasius's**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-069/athanasius/perl/ch-2.pl) printout of S<sub>11</sub>. There is a large amount of order, with small variances occurring along a pattern. I expect one could algorithmically deconstruct the shape of S<sub><i>n</i></sub>, so as to reveal the value of specific digits in very large values of *n*. In fact, Roger Bell_West has done exactly this, but we'll get to that.

When this challenge was first posted, the request was to compute S<sub>1000</sub>. So how big is S<sub>1000</sub>? Well first of all, it's going to have 10<sup>301</sup> digits. That's an astonishingly large number in itself, and it's only being used here to *describe* S<sub>1000</sub>.

Of course, any number with 10<sup>301</sup> digits is a *really* big number. So big, in fact, that there aren't enough protons in the universe to make the ink to print it. There aren't enough *electrons* in the universe to hold the number in memory. There isn't enough *volume* in the universe to contain the transistors to calculate it. There aren't even enough photons in the universe to look at it all at once. Even with an **error of a hundred *orders of magnitude*** over best estimates there isn't enough *anything* to actually create S<sub>1000</sub>.

>"Space," it says, "is big. Really big. You just won't believe how vastly, hugely, mindbogglingly big it is. I mean, you may think it's a long way down the road to the chemist, but that's just peanuts to space."
>&mdash; <cite>Douglas Adams, The Hitchhiker's Guide to the Galaxy (1979), chapter 8</cite>


## UNIQUE approaches and other THINGS THAT CAUGHT MY EYE


### [**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-069/cheok-yin-fung/perl/ch-2.pl)

CY's submission displays a certain indefatigable grit. She solves the basic logic with a single, combined function to listify the string, transform the elements using a mod 2 operator and unshift them back on to a result array, to be rejoined and returned.

```perl
sub sr {
    my @digits = split // , $_[0];
    my @newdigits;
    for (@digits) {
        unshift @newdigits, (1+$_) % 2;
    }
    return join "", @newdigits;
}
```

This is all well and good until she gets up towards S<sub>30</sub>. She runs out of memory, she says. You know, because it has a billion digits and all. Undaunted, she unrolls the algorithm an additional step, allowing her to create S<sub>28</sub> from S<sub>26</sub>, and then painstakingly prints out S<sub>30</sub> from S<sub>28</sub>. True grit indeed.

```perl
$S[$d] = $S[$d-2] . "0" . $R[$d-2]. "0" . $S[$d-2]. "1". $R[$d-2];
```



### [**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-069/jo-37/perl/ch-2.pl)

Jorg does an impressive job of deconstructing the given creation process for S, allowing him to efficiently construct very large values for S<sub><i>k</i></sub> out of smaller pieces. In a manner not unlike CY's unrolling the basic algorithm to allow two steps at a time, the first thing Jorg does is create a generalized form of this unrolling, allowing the construction of S<sub><i>k+m</i></sub> from S<sub><i>k</i></sub> by repeating either the forward or transformed version of S<sub><i>k</i></sub>. In this manner he need only apply the switch and reverse functions once per unrolling.

```perl
sub sn_extend {
    # first arg: ref to S(k)
    # make $_ an alias to sk
    local $_;
    *_ = shift;
    # second arg: l
    # get loop limit from l
    my $upper = int 2**(shift() - 1) - 1;

    # reversed switched S(k)
    my $rsw = reverse y/01/10/r;

    my $sl;
    for my $i (0 .. $upper) {
        $sl .= $_ . ($i % 2) . $rsw;
        $sl .= substr $sl, $i, 1 if $i < $upper;
    }
    # avoid copying the result
    \$sl;
}
```

The second part of the deconstruction is a wrapper that can apply the extend function with optimal values of *k* to grow S to the required size. Generating S<sub><i>k</i></sub> → S<sub><i>k+k</i></sub> is very efficient, so the function doubles *k* as many times as it can without exceeding the target and then makes up the difference.

```perl
sub sn_build (&$$) {
    # first arg: subref returning next order step, with $_ set
    # to the current step
    my $iterate = shift;
    # second arg: start order for sn_extend
    local $_ = shift;
    # third arg: desired order n for building S(n)
    my $n = shift;

    # perform parametrized extension of S(k) -> S(k+l)
    # until the next step would exceed the target order
    my ($cum, $next, $s) = (0, $iterate->(), \'');
    while ($cum + $_ <= $n) {
        $s = sn_extend($s, $_);
        $cum += $_;
        $_ = $next;
        $next =  $iterate->();
    }

    # get missing part of S(n) if necessary and dereference the result
    $cum == $n ? $$s : ${sn_extend $s, $n - $cum}
}
```

Jorg extensively comments his code (thank you!) and walks you through it very well. Definitely deserving further study.

### [**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-069/perlboy1967/perl/ch-2.pl)

Niels gives us a what amount to now fairly standard, practical solution using `tr///` and `reverse()`. I suppose that was not enough for him that day, for he then went on to import

```perl
use Digest::SHA1 qw(sha1_hex);
```

to deliver the bit sequence in SHA1 Digest form. Ok. I suppose one could argue it is a unique graphical representation of the string. I'm not sure what to do now. Some people... *(shakes head and walks away)*

```bash
[colincrain:~/PWC/69-Review/TASK2]$  perl 69-2-NielsvanDijke.pl
..............................
S30: length=1,073,741,823, SHA1=7ad613b3b0023886d381a9b3a42386177a9c3494
```

### [**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-069/roger-bell-west/perl/ch-2.pl)

Roger has done this whole thing in a *completely* different manner. Remember I spoke of the hints of an underlying pattern when large values of S are printed? Roger first wrote a tool to generate S using the given algorithm, modifying the code to enumerate the positions of the 1 digits in the final string:

```bash
[colincrain:~/PWC/69-Review/TASK2]$  perl RBW-task2-generator-code.pl
S0 = ""

S1 = "0"

S2 = "001"
3
S3 = "0010011"
3,6,7
S4 = "001001100011011"
3,6,7,11,12,14,15
S5 = "0010011000110110001001110011011"
3,6,7,11,12,14,15,19,22,23,24,27,28,30,31
S6 = "001001100011011000100111001101100010011000110111001001110011011"
3,6,7,11,12,14,15,19,22,23,24,27,28,30,31,35,38,39,43,44,46,47,48,51,54,55,56,59,60,62,63
```

From there he takes the sequence 3,6,7,11,12,14,15... and feeds it to the [Online Encyclopedia of Integer Sequences](https://oeis.org/search?q=3%2C6%2C7%2C11%2C12%2C14%2C15%2C19%2C22%2C23%2C24%2C27%2C28%2C30%2C31%2C35%2C38%2C39%2C43%2C44%2C46%2C47%2C48%2C51%2C54%2C55%2C56%2C59%2C60%2C62%2C63&language=english&go=Search) and sure enough, finds a match, A091067. The OEIS is an amazing resource. There is no algorithm posted for this exact sequence, but there is one for a related sequence, [A060833](https://oeis.org/A060833). He then implements this algorithm to locate the positions that are 1s, filling the other positions with 0s.  Remember that the front of the strings never change once set, so if we just keep generating more digits, we can create arbitrarily large values of S. Because we know that a given S<sub><i>n</i></sub> has length 2<sup><i>n</i></sup> - 1, we know when to stop.

This doesn't exactly crack the code of *why* this sequence pops up, but this method does allow us to directly look inside the strings we are creating. It's really nice work.

Here'e my local copy of his code utilizing the A060833 algorithm to place the 1s. Yes, I wrote a filter to spread out the code to make it a little easier to follow:

```perl
my $s = 30;
my $l = 2**$s-1;

my $pos = 1;
my $seq = 4;
while ( 1 ) {
    my $p1 = $seq-1;
    my $n0 = min( $p1-$pos, $l-$pos );
    print '0' x $n0;
    $pos +=  $n0;
    if ( $p1 <= $l ) {
        print '1';
        $pos++;
    }
    if ( $pos>$l ) {
        last;
    }
    $seq = nextseq( $seq );
}
print "\n";

sub nextseq {
    my $prev = shift;
    my $c = $prev;
    while ( 1 ) {
        $c++;
        my $t = $c-1;
        while ( 1 ) {
            my $r = int( $t/2 );
            if ( $t % 2 != 0 ) {
                last;
            }
            $t = $r;
        }
        if ( $t % 4 == 3 ) {
            last;
        }
    }
    return $c;
}
```

[Roger does a complete writeup on his blog](https://blog.firedrake.org/archive/2020/07/Perl_Weekly_Challenge_69__invertible_numbers_and_very_long_strings.html), which I highly recommend you go right now and have a look at; this is just a quick summary. There he includes the initial generator code and lengthy commentary.

***In a last note:*** creating the strings this way, as a semi-continuous stream of just-computed digits, introduces a new variable to our discussion of the size of S<sub>1000</sub>, that of **time**. Introducing the time dimension leads us to the question: Is there enough space *and time* to compute S<sub>1000</sub>, if we never need to look at the whole thing at once? Could it be computed using a machine the size of the universe, using all of the energy of the universe, before the heat-death of that universe? I'm inclined to think we still miss by a factor of about 10<sup>200</sup>, but it remains an interesting problem to estimate. I'll have to think about it.


## BLOGS {#PWC069BLOGS}

***

**That's it for me this week, people!**

## For those who need to know more RIGHT NOW,
## well *HURRY UP* and READ these BLOG LINKS:

***( don't think,  just do it ... )***

### Andrew Shitov
#### [Raku challenge Week 69, issue 1 &#8211; Andrew Shitov](https://andrewshitov.com/2020/07/13/raku-challenge-week-69-issue-1/) (*Raku*)
#### [Raku challenge Week 69, issue 2 &#8211; Andrew Shitov](https://andrewshitov.com/2020/07/13/raku-challenge-week-69-issue-2/) (*Raku*)

<br>

### Arne Sommer
#### [Binary Strobe with Raku & Perl](https://raku-musings.com/binary-strobe.html) (*Perl*)

<br>

### Colin Crain
#### [Strobelight: One-Zero-One-Zero &#8211; Programming Excursions in Perl and Raku](https://colincrain.wordpress.com/2020/07/18/strobelight-one-zero-one-zero/) (*Perl*)

<br>

### Javier Luque
#### [PERL WEEKLY CHALLENGE &#8211; 069 &#8211; Perl Weekly Challenge](https://perlchallenges.wordpress.com/2020/07/13/perl-weekly-challenge-069/) (*Perl*)

<br>

### Laurent Rosenfeld
#### [Perl Weekly Challenge 69:  Strobogrammatic Numbers and 0/1 Strings ](http://blogs.perl.org/users/laurent_r/2020/07/perl-weekly-challenge-69-strobogrammatic-numbers-and-01-strings.html) (*Perl*)

<br>

### Luca Ferrari
#### [Perl Weekly Challenge 69: Strobogrammatic and 0-1 numbers – Luca Ferrari ](https://fluca1978.github.io/2020/07/13/PerlWeeklyChallenge69.html#task1) (*Raku*)

<br>

### Mohammad S Anwar
#### [Perl Weekly Challenge - 069 (Task #1: Perl) - YouTube](https://www.youtube.com/watch?v=GZNgsB6Bplc) (*Perl*)
#### [Perl Weekly Challenge - 069 (Task #2: Perl) - YouTube](https://www.youtube.com/watch?v=Sp7dko3Q5sQ) (*Perl*)
#### [BLOG: The Weekly Challenge #069](http://blogs.perl.org/users/mohammad_s_anwar/2020/07/blog-the-weekly-challenge-069.html) (*Perl*)

<br>

### Roger Bell_West
#### [RogerBW&#39;s Blog: Perl Weekly Challenge 69: invertible numbers and very long strings](https://blog.firedrake.org/archive/2020/07/Perl_Weekly_Challenge_69__invertible_numbers_and_very_long_strings.html) (*Perl*)

<br>

### Shahed Nooshmand
#### [Perl Weekly Challenge: week 69 ― Rafraîchissoir](https://rafraichisso.ir/2020/07/18/pwc-69) (*Raku*)

<br>

### Simon Green
#### [Perl Weekly Challenge 069](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-069/sgreen/README.md) (*Perl*)
