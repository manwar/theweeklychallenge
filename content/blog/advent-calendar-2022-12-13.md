---
title: "Advent Calendar - December 13, 2022"
date: 2022-12-13T00:00:00+00:00
description: "Advent Calendar - December 13, 2022."
type: post
image: images/blog/2022-12-13.jpg
author: Peter Campbell Smith
tags: ["Perl"]
---

## [**Advent Calendar 2022**](/blog/advent-calendar-2022)
### | &nbsp; [**Day 12**](/blog/advent-calendar-2022-12-12) &nbsp; | &nbsp; **Day 13** &nbsp; |
***

The gift is presented by `Peter Campbell Smith`. Today he is talking about his solution to [**"The Weekly Challenge - 190"**](/blog/perl-weekly-challenge-190). This is re-produced for **Advent Calendar 2022** from the original [**post**](https://pjcs-pwc.blogspot.com/2022/11/capital-test-and-ambiguous-encoding.html) by him.

***

<br>

## Capital test and ambiguous encoding

<br>

### Proper capitalisation

<br>

Task 1 this week gives us a string comprising capital and lower case letters and asks us to determine whether it follows one of these patterns of capitalisation: Challenge, challenge, CHALLENGE.

Generally I steer clear of hard-to-follow one-liners, but this one is fairly simple:

<br>

```perl
$test =~ m/^[A-Z]?([a-z]*|[A-Z]*)$/ ? 1 : 0;
```

<br>

In words, the string follows the rule if:

    - it starts with zero or one capital letter, and
    - it continues with either zero or more capital letters, or zero or more lower case letters.

<br>

```perl
#!/usr/bin/perl

# Peter Campbell Smith - 2022-11-07
# PWC 190 task 1

use v5.28;
use utf8;
use warnings;
binmode(STDOUT, ':utf8');

# You are given a string with alphabetic characters only: A..Z and a..z. Write a script to find out if the usage of
# capital letters is appropriate if it satisfies at least one of the following rules:
# 1) Only first letter is capital and all others are small.
# 2) Every letter is small.
# 3) Every letter is capital.

# Blog: https://pjcs-pwc.blogspot.com/2022/11/capital-test-and-ambiguous-encoding.html

my (@tests, $test);

@tests = qw[Perl PWC PyThon raku   Byron ShakesSpeare miltoN KEATS 123 6-fold Hello! a A];

# loop over tests
 while ($test = shift @tests) {
      say qq[\nInput:  $test\nOutput: ] . ($test =~ m/^[A-Z]?([a-z]*|[A-Z]*)$/ ? 1 : 0);
}
```

<br>

So that wasn't too hard, was it?

<br>

### A strange encoding

<br>

`Task 2` gives us a string of digits and asks us to decode it left to right, assuming `1 means A`, `2 means B` down to `26 means Z`. Of course this is ambiguous, because `11` could mean `AA` or it could be the `11th letter`, which is `L`. So we are to find all the possible decodings and present them in alphabetical order.

If we start at the beginning of the string, the first digit must be `1-9`, and that could correspond to `A-I`. But of course there is an alternative decoding if the first two digits are in the range `10` to `26`, that could mean `J to Z`.

So as we proceed along the string, at each step there are potentially two paths for us to explore, and for a long string that means a large, and initially unknown, answers.

The easy way to handle problem like this is recursion. Let's have a subroutine `'analyse'` that takes two arguments: `$so_far` and `$test`. `$so_far` contains the answer we have built up already, and `$test` is the rest of the input string that we haven't got to yet.

Our initial call is therefore `analyse('', $test)` - we haven't found anything so far and we have the whole of `$test` to examine.

Subroutine analyse does one of three things:

#### it takes the first digit off $test, converts it to a character,

    - appends it to $so_far
    - if there are still more characters in $test then it recursively calls analyse(the new $so_far, the new $test)
    - or if not, it's found an answer (the new $so_far) which it stores in a global hash, and returns

<br>

#### it then takes the first two digits of (the input value of) $test and

    - if they are in the range 10 to 26, it appends the corresponding character to (the input value of) $so_far, and
    - if there are still more characters in $test then it calls analyse(the new $so_far, the new $test),
    - or if $test is exhausted, it's found an answer (the new $so_far) which it stores in a global hash, and returns

<br>

```perl
#!/usr/bin/perl

# Peter Campbell Smith - 2022-11-07
# PWC 190 task 1

use v5.28;
use utf8;
use warnings;
binmode(STDOUT, ':utf8');

# You are given a string consisting of a sequence of numeric characters: 0..9.  The string is a concatenation
# of encoded letters A-Z, where A = 1, B = 2 ... Z = 26. Write a script to find the all valid different decodings
# in sorted order. Example: Input: $s = 11; Ouput: AA, K

# Blog: https://pjcs-pwc.blogspot.com/2022/11/capital-test-and-ambiguous-encoding.html

my (@tests, $base, $string, $answer, %answers, $test);

@tests = qw[11 1115 127 16518122051920];
$base = ord('A') - 1;   # so that we can convert a number to a character as $char = chr($base + $number)

# loop over tests
while ($test = shift @tests) {

    # analyse the input string
    say qq[\nInput:  $test];
    %answers = ();
    analyse('', $test);

    # format and output the answers
    $string = '';
    for $answer (sort keys %answers) {
    	$string .= $answer . ', ';
    }
    say qq[Output: ] . substr($string, 0, -2);
}

sub analyse {

    my ($so_far, $test, $test_length, $first_two);

    # recursively tries taking the first 1 or 2 digits off test and adding them as a character to $so_far

    $so_far = $_[0];  # the character string so far
    $test = $_[1];    # the remaining digit string
    $test_length = length($test);
    return if substr($test, 0, 1) eq '0';   # won't happen for a valid $test

    # take the first digit of $test and add the corresponding character to so_far
    $so_far .= chr($base + substr($test, 0, 1));

    # if anything remains in $test, analyse(the new $so_far, the rest of $test)
    if ($test_length > 1) {
    	analyse($so_far, substr($test, 1)) if length($test) > 1;

    # else we've exhausted $test and found an answer
    } else {
    	$answers{$so_far} = 1;
    	return;
    }

    # if $test is >= 2 digits and they are 10-26 then add them as a character to $so_far
    $so_far = $_[0];
    $first_two = substr($test, 0, 2);
    if ($test_length >= 2 and $first_two ge '10' and $first_two le '26') {
    	$so_far .= chr($base + $first_two);

    	# if anything remains in $test analyse(the new $so_far, the rest of $test)
    	if (length($test) > 2) {
    		analyse($so_far, substr($test, 2));

    	# else we've exhausted $test and found an answer
    	} else {
    		$answers{$so_far} = 1;
    		return;
    	}
    }
}
```

<br>

That will find all the possible decodings of the input string.  They are all stored as keys in the hash %answers, and all that remains is to sort the hash by key and output the answers.











<br>

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

| &nbsp; [**Advent Calendar 2022**](/blog/advent-calendar-2022) &nbsp; |
