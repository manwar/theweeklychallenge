---
author:       Colin Crain
date:         2020-06-29T00:00:00
description:  "Colin Crain › Perl Weekly Review #065"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #065"
image:        images/blog/p5-review-challenge-065.jpg
type:         post
---

Welcome to the Perl review for Week 065 of the Weekly Challenge! For a quick overview, go through the [original tasks](/blog/perl-weekly-challenge-065/) and [recap](/blog/recap-challenge-065/) of the weekly challenge.

## Getting in Touch

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

We'd greatly appreciate any feedback you'd like to give.

## [BLOGS](#blogs)

***
# TASK #1 › Digits Sum

You are given two positive numbers $N and $S.

Write a script to list all positive numbers having exactly $N digits where sum of all digits equals to $S.

Example
Input:
    $N = 2
    $S = 4

Output:
    13, 22, 31, 40
***

## The STANDARD solution

Almost all members, myself included, submitted some variation on the same basic pattern:
- create a list of all possible candidate numbers
- iterate through that list
- use ```split //, $number``` to divide the digits into an array
- sum that array and check for equality agains the target value

## VARIATIONS

For each of the tasks outlined there was some variation. In constructing the candidate number list, it was common to establish a lower and upper bound, to create a range. There were two camps I will call 'string' and 'math'.

In the `string` camp, submissions assemble strings of 1s, 0s and 9s to physically create the numbers. An example of this is [**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-065/ulrich-rieke/perl/ch-1.pl)

```perl
my $lowest  = '1' . '0' x ( $N - 1 ) ;
my $highest = '9' . '9' x ( $N - 1 ) ;
```

Members who used this method were [**Bartosz Jarzyna**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-065/brtastic/perl/ch-1.pl), [**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-065/dave-jacoby/perl/ch-1.pl), [**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-065/e-choroba/perl/ch-1.pl), [**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-065/perlboy1967/perl/ch-1.pl), [**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-065/wanderdoc/perl/ch-1.pl), and [**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-065/mohammad-anwar/perl/ch-1.pl). My own solution [**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-065/colin-crain/perl/ch-1.pl) also follows this method.

Providing mathematical resolutions, like this example from [**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-065/arne-sommer/perl/ch-1.pl).

```perl
my $start = 10 ** ($N - 1);
my $stop  = (10 ** $N) - 1;
```

we have [**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-065/cheok-yin-fung/perl/ch-1.pl), [**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-065/duncan-c-white/perl/ch-1.pl), [**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-065/laurent-rosenfeld/perl/ch-1.pl) and [**Javier Luque**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-065/javier-luque/perl/ch-1.pl).

Most people used `List::Util` for its `sum()` function, but some rolled their own. Another variation was whether to use the implicit looping of grep or explicitly loop over the candidates and select.

Of all the solution styles, only **Niels van Dyke** chose to allow leading zeros by default, although Jorg Sommrey makes it an option. I find this idea dubious, as I think few would consider the number 04 to be somehow fundamentally different than 4, and this makes all numbers have an ambiguous number of digits. Perhaps I could see the point, but don't really consider it my call. YMMV.

## UNIQUE Approaches
***

There were also a number of unique approaches to the problem.

### [**Craig**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-065/craig/perl/ch-1.pl)

New member **Craig** has given us a solution from a completely different direction, using the module [**Integer::Partition**](https://metacpan.org/pod/Integer::Partition). As this module provides lists of integers that already sum to a given target it would seem an ideal place to start. He then identifies those partitions that are equal to or less than the target length and zero-fills the shorter partitions on the right to find solutions. A truly inventive and elegant way to approach the problem. One caveat I see though is that "integer partitions" are designated as *sets*, rather than *ordered sets*. So as-is this method will find the solution '31' but not '13', as only the partition set {3,1} is generated. The addition of a permutation step after zero-filling should be able to expand the solution space to find all the answers.

I wasn't previously aware of this module and enjoyed this unique approach. I look forward to what he comes up with for his next submission.

***

### [**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-065/jo-37/perl/ch-1.pl)

**Jorg** gives us another quite different approach. Providing a elegant recursive routine that uses two nested map functions, he constructs valid solutions using an additive method, concatenating new digits onto a growing pool of solutions. In the recursive calls the length and target sum is reduced by the sum of the digits aggregated already, until the length is 1, when the target defines the value of the last digit.

He also makes passing an optional third argument allow leading zeros, a notion I consider less dubious when presented as an interesting option.

Here's his `digit_sum()` routine:

```perl
sub digit_sum {
    my ($length, $sum, $leading_zero) = @_;

    return if $sum > 9 * $length;
    return $sum if $length == 1;

    my $min = max !$leading_zero, $sum - 9 * ($length - 1);
    my $max = min 9, $sum;

    map {
        my $d = $_;
        map $d . $_, digit_sum $length - 1, $sum - $d, 1;
    } ($min .. $max);
}
```

***

### [**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-065/wanderdoc/perl/ch-1.pl)

Although the core logic follows the standard method, over the span of an ever-increasing value within a range **Wanderdoc** adds two unusual short-circuits: if the first digit is already greater than the target sum, that number will never decrese so we exit out of the search entirely. On the other hand if any other single digit exceeds the target only that iteration is cut short. To accomplish this last part, they use the line:

```perl
$num++ and next if first { $_ > $opts{sum_of_digits} } @digits;
```

using `List::Util::first()` to find the first matching element in the block agains the `@digits` array. Of note `any()` could also be used here.

This is a good trick, if I'm not sure exactly *practical*. But who cares about that. It's cool.

***

### [**Yet Ebreo**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-065/yet-ebreo/perl/ch-1.pl)

For such a short little script, **Yet**'s submission packs a lot of unusual stylistic choices. In many ways the logic is the same as all the other submissions: create a list of candidate numbers of the right length, sum the digits, log the ones that add up correctly.

But for **Yet**, every aspect of these simple tasks are out-of-the-norm. To wit, to create the list of incremental numbers to iterate over, he pulls out this:

```perl
for my $x (glob "{1,2,3,4,5,6,7,8,9,0}" x $digits) { ... }
```

you may wish to consult the documentation on `glob` here to refresh on how this works, I certainly did. Essentially it constructs the cross-product of the set of items within the string against itself the requisite number of times, thus producing `10**$digits` strings that look a whole lot like numbers.

Then, to sum the digits, rather than some version of split and sum, oh no, that would be too easy. Or not easy enough. Or something. Instead we'll non-destructively look for the spaces between characters that *aren't* word boundaries and substitute in an addition '+' sign, then eval the result. That'll sum 'em!

```perl
my $s = eval $x =~ s/\B/\+/gr;
```

Of course the above glob trick will produce every combination of digits in the range, including those starting with a leading 0. So when validating we will need to make sure the length of the candidate is still equal to the target length:

```perl
(length (int $x) == $digits) && ($s == $sum) && say $x
```

That's it, three lines and the truth. I'm amused and impressed.

***

### [**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-065/jaldhar-h-vyas/perl/ch-1.pl)

**Jaldhar** has brought us a very interesting way to produce his number lists. He starts with with the list 1..9. Creating an iterator from the specified number of digits, he passes this and the anonymous array [0..9] to a special function `X`, which uses a couple of nested `map` functions to produce the cross product of the two. Every array in the array-of-arrays @digits is spawned into 10 new arrays, each with one of the digits 0 through 9 appended.

Each number at this point is an array of single digits, to sum them he includes an accumulator to sum within the familiar ```grep``` construction

```perl
grep { my $accum; map {$accum += $_; } @{$_}; $accum == $S; }
```

which filters the candidates before joining them back together to output.

***

### [**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-065/roger-bell-west/perl/ch-1.pl)

**Roger** has presented us with, as he puts it, `"*another* breadth-first search with a FIFO buffer."` Here he actively constructs viable numbers by creating arrays holding the digits;  with the running sum as the final element he keeps these arrays in a list. With each added digit he processes each array, creating new arrays as required to represent the new numbers. Along the way he performs two important optimizations. In constructing the numbers he first checks the running sum and constrains the range of each additional digit added so as to not exceed the required total, so he needn't bother with numbers that woud never work anyways. For the final digit he goes further, or, as he says, `"this is where we get sneaky"`.

For the final digit there can only be one solution that adds up correctly, so he simply subtracts the running sum from the target to find the correct value. Needless to say, by continuously restricting the option space, solving for the last digit, and removing the need to filter the results, quite a bit of unnecesary work is avoided. This is approach is consequently very fast.

After doing some back-of-the-envelope test runs, depending on the input criteria and the amount of optimization it can perform restricting the problem space, I'm observing this runs between one to three orders of magnitude faster than the filter method. A very nice solution indeed.

[**Read more on Roger's solution on his blog**](https://blog.firedrake.org/archive/2020/06/Perl_Weekly_Challenge_65__summing_digits_and_finding_palindromes.html)

***
# TASK #2 › Palindrome Partition

You are given a string $S. Write a script print all possible partitions that gives Palindrome. Return -1 if none found.

Please make sure, partition should not overlap. For example, for given string “abaab”, the partition “aba” and “baab” would not be valid, since they overlap.

    Example 1

    Input: $S = 'aabaab'
    Ouput:
     There are 3 possible solutions.
     a) 'aabaa'
     b) 'aa', 'baab'
     c) 'aba'

    Example 2

    Input: $S = 'abbaba'
    Output:
     There are 3 possible solutions.
     a) 'abba'
     b) 'bb', 'aba'
     c) 'bab'
***

In start contrast to the relative consistency amongst the solutions for the Digit Sum, the Palindrome Partition produced, shall we say, a cacophonous uproar. The initial question was deemed by many to be insufficiently specific in its definition. Words were said, apologies given, but the end result is that each member needed to decide for themselves exactly what the problem was that they were going to solve. Hence we have a gamut of solutions, from the fairly simple to quite complex.

## The STANDARD Solution

Despite the myriad interpretations over exactly what was requested, one basic form arose repeatedly, which is to loop over the string much as one would to find all substrings. With an incrementing index for a start point, substrings of increasing length are selected out and tested for palindrome status. When a palindrome is found it is added to a storage list and the remaining string, along with the list is recursively fed back into the routine to look for additional matches. The selection of substrings can be done with either a `substr()` function or a `regex`, but the underlying principle is similar. I'm calling this idiom 'ratcheting' through the string, for the inexorable forward motion of the starting position to exhaustively examine every possibility.

[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-065/arne-sommer/perl/ch-2.pl), [**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-065/jaldhar-h-vyas/perl/ch-2.pl), [**Javier Luque**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-065/javier-luque/perl/ch-2.pl), [**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-065/wanderdoc/perl/ch-2.pl), [**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-065/perlboy1967/perl/ch-2.pl) and [**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-065/e-choroba/perl/ch-2.pl) used this basic pattern. I found Javier Luque's implementation particularly clean and straightforward.

For a more thorough example, my own submission uses one variation on this method, using regexes:

### [**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-065/colin-crain/perl/ch-2.pl)

For my own solution, I first decided that the task was to find `"all sets of non-overlapping palindromes that can be found within the string."` My reasoning for this decision is more fully explained in the script comments, or, with slightly improved proofreading, in [**my blog**](https://colincrain.wordpress.com/2020/06/19/digital-value-at-the-palindrome-thunderdome/). To accomplish this I decided to find *every* palindrome present in the string, then create a recursive routine to isolate all possible combinations.

To find the palindromes, I ratcheted through the string finding subtrings from $start to $end variables, checking each against a regex

```perl
$target =~ m/^(.+).?(??{reverse($1)})$/)
```

The idea here is to match one or more characters and capture, then possibly a central pivot character, then reverse the captured string to check the match.

The `get_lists()` routine creates a global exhaustive search by iterating through every element in the palindrome list, then if found, noting the match to a list and passing $' and the list to the next recursion, until there are no more matches to be made.

This general logic seemed to find its way into most answers.

## UNIQUE Approaches

### [**Bartosz Jarzyna**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-065/brtastic/perl/ch-2.pl)

Bartosz first uses a `finder()` routine to locate every palindrome is the string, returning a list of pairs, index and length. He finds palindromes by ratcheting through the string, pulling out pairs of substrings and their immediate following sequence, which he reverses to compare.

```perl
my $part_size = int($size / 2);
my $part1 = substr $string, $pos, $part_size;
my $part2 = substr $string, $pos + $part_size + $size % 2, $part_size;

push @found, [$pos, $size]
    if $part1 eq scalar reverse $part2;
```

As the list returned is sorted by index, he can start looking for palindrome sets  starting from the leftmost found pair, calculating the remaining string and looking for more palindromes by incrementing the search position. As the pairs are placed back over the string the underlying text is isolated and saved, sets to an array and arrays to a final list.

***

### [**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-065/cheok-yin-fung/perl/ch-2.pl)

**Fung** does a lot of converting strings to arrays, and working from there. Her `is_pali()` routine takes a given substring and coverts it into an array, then uses indexes and list operations to determine the left and right are mirrored. Returning a `0|1` result, it's used to filter a list of string partitionings.

The partitioning itself is very interesting, being based on creating a list of binary numbers the length of the original string, with characters being selected out by the presence of a 1.

**Blog** [**CY's take on PWC#065**](http://blogs.perl.org/users/c_y_fung/2020/06/cys-take-on-pwc065.html)

***

### [**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-065/duncan-c-white/perl/ch-2.pl)

**Duncan** made quite an effort to nail down exactly what could be gleaned from the wording of the task posed and the examples, and provides a lengthy comment on his method. He came to some interesting conclusions, and I see no reason to fault anyone who went through that much effort trying to figure out the ambiguities of the challenge as stated.

As such he came up with two routines, one to find all single palindromes, and another to find palindrome pairs within a string. Both work on testing the substring between incrementing start and end points; the second performs the act twice.

His palindrome test --> boolean routine is simplicity itself:

```perl
my $r = reverse($string);
return $string eq $r ? 1 : 0;
```

***

### [**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-065/e-choroba/perl/ch-2.pl)

Several people, myself included, regarded the absence of the answer `['aa','aa']` for the first example as an inconsistancy; that this option should not have been subsumed in the `['aa','baab']` answer and both are valid. It seems Choroba shares this view, and his `palindrome_partition()` routine ratchets through the base string with incrementing start and length dimensions, testing for palindromes and if found, continuing the search forward from there. This exhaustive approach will find *every* combination of internal palindromes, not just the greediest matches.

***

### [**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-065/jo-37/perl/ch-2.pl)

A thing of beauty:

```perl
sub palindromes {
    local $_ = shift;
    (m/
        ( . {2,} )
        (?(?{ $1 ne reverse $1 }) (*FAIL))
     /gx, (-1) x !$1);
}
```

That's it. There's a lot going on in what amounts to one line, broken up for clarity.

Consider the string `'aabaab'`. We're starting at the left of the string, matching 2 or more characters and capturing. Matching is greedy, so initially the engine will grab the **whole string** `'aabaab'`. Then it evaluates the conditional logical expression, which is does the capture **not equal** its own reverse? In this case it is true, the `(*FAIL)` is then evaluated, the match fails, and the engine backtracks. It next tries `'aabaa'`. In this case the test fails, and the `(*FAIL)` is not executed. The match position is incremented, and another match is tried. Of note is that if all the matches for `.{2,}` fail down to length 2, the engine will ratchet the match position forward one and repeat, to avoid an infinite loop. Also, the addition of a question mark to `(.{2,}?)` makes the match not greedy, and will find `['aa','baab']`, which is more like my understanding of the rules. But who am I to say?

I always enjoy a good regex.

***

### [**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-065/mohammad-anwar/perl/ch-2.pl)

**Mohammad**'s (and **Yet Ebreo**'s, above) submission utilises `Algorithm::Combinatorics qw(partitions)`, which when given an array, returns `"a set of subsets of @data which are non-empty, disjoint, and whose union is @data"`. The input string is divided into a array of characters, which are then grouped into partition sets. One thing is that these groupings of the array elements many not actually occur in the input string, so a call to `index()`, to make sure it's there, needs to be made. All groupings longer than 1 char and shorter than the whole string are stashed in a hash, with their index for a value. With this hash all the searching is done, and the finding of sets of palindromes can be done mathematically.

Later, this hash is iterated over, checking each partition to see whether it is a palindrome, and if so placing it in the output hash. The list is then iterated again to see whether a second palindrome was found past the end of the first.

**Blog:** [**BLOG: THE WEEKLY CHALLENGE #065**](https://perlweeklychallenge.org/blog/weekly-challenge-065/)

***

### [**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-065/perlboy1967/perl/ch-2.pl)

**Niels** uses regular expressions to match, in fact he precalulates a whole battery of expressions to match varying lengths of palindromes and holds them in a hash, one for every palindrome length. The hash is iterated through, looking for increasingly longer palindromes, and if one is found the remaining string is recursively processed along the familiar pattern. Dynamically creating the regexes to fit the string given is a unique take on the problem.

***

### [**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-065/ulrich-rieke/perl/ch-2.pl)

Using `Algorithm::Combinatorics::subsets` as the basis of his divisioning, Ulrich chose a rather constrained definition to work with. In his own words,

`"if a palindromic substring occurs only once it is only taken account of if it appears at the start of the string. Whenever there are 2 and more consecutive palindromic substrings they are considered as a solution".`

As such, he derives two ways of finding answers, one for a single word, the other for two consecutive ones.

Using a somewhat indirect approach, he uses `subsets()` to create sets of numeric length combinations, then uses those sets to create groups of substrings, which are then checked for palindrome status.

***

### [**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-065/wanderdoc/perl/ch-2.pl)

**Wanderdoc** takes the ratcheting aproach, but with perhaps the most complete range of interpretations to the task definition, offering two command line switches. The first is  to optionally allow single letter palindromes, which you may notice do technically fit the definition of being the same backwards and forwards, if only in a pathlogically degenerate sort of way; the second  to constrict the sets of solutions to only those that completely use all the characters in the input string.

***

### [**Yet Ebreo**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-065/yet-ebreo/perl/ch-2.pl)

```perl
my @arr = $string =~/./g;

for my $arr ( partitions(\@arr) ) {
    for my $elem (@{$arr}) {
        my $w = join "", @{$elem};
        if ($w =~ /^((.)(?1)\2|.?)$/ && $string =~/$w/) {
            (length $w > 1) && !$hash{$w} && say $w;
        }
        $hash{$w}++;
    }
}
```

**Yet** chose a simpler definition, and parsed the string repeatedly for palindrome character combinations, logging them to a hash for output. Not exhaustive, but not wrong either. I like his regex.

***

Whew! That's it. You know, I need to not say the word **'palindrome'** for a while. I think I've used my ration for the month.

Oh, but before I go, one last thing: in the rules of palindromes, as I understand it, all punctuation, spaces and capitalization are to be ignored; so the first thing I did was strip out all of this, allowing me to input the string

`"A man, a plan, a canal -- Panama!"`

No one else seems to have bothered with this step, which I will be the first to regard as completely frivolous. But it was fun, so I did it. Palindromes are wordplay, and wordplay is at its essence frivolous. It needs no excuse to exist, it is its own raison d'être.

***

## Follow Up and Read More at these Blog Links: {#blogs}

<br>

**Cheok-Yin Fung** [**CY's take on PWC#065**](http://blogs.perl.org/users/c_y_fung/2020/06/cys-take-on-pwc065.html)

**Arne Sommer** [**The Palin Digits with Raku**](https://raku-musings.com/palin-digits.html)

**Javier Luque** [**PERL WEEKLY CHALLENGE – 065**](https://perlchallenges.wordpress.com/2020/06/15/perl-weekly-challenge-065/)

**Laurent Rosenfeld** [**Perl Weekly Challenge 65: Digit Sum**](http://blogs.perl.org/users/laurent_r/2020/06/perl-weekly-challenge-65-digit-sum.html)

**Mohammad S Anwar** [**BLOG: THE WEEKLY CHALLENGE #065**](https://perlweeklychallenge.org/blog/weekly-challenge-065/)

**Roger Bell_West** [**Perl Weekly Challenge 65: summing digits and finding palindromes**](https://blog.firedrake.org/archive/2020/06/Perl_Weekly_Challenge_65__summing_digits_and_finding_palindromes.html)

**Colin Crain** [**Digital Value at the Palindrome Thunderdome**](https://colincrain.wordpress.com/2020/06/19/digital-value-at-the-palindrome-thunderdome/)
