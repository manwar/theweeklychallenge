
---
author:       Colin Crain
date:         2020-10-12T00:00:00
description:  "Colin Crain › Perl Weekly Review #080"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #080"
image:        images/blog/p5-review-challenge-080.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-079/).* )

Welcome to the Perl review for **Week 080** of the Weekly Challenge! Here we will take the time to discuss the  submissions offered by the team, factor out the common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

Or really, talk about pretty much anything that stands out as remarkable or noteworthy.

Every week there is an enormous global collective effort made by the team, analyzing and creatively coding the submissions, and that effort deserves credit due. And that's why I'm here, to try and figure out how to do that.

Let's have a look and see what we can find.

---

**<big>For context</big>**  before we begin, you may wish to revisit either of the pages for the [**original tasks**](/blog/perl-weekly-challenge-080/) or the summary [**recap**](/blog/recap-challenge-080/) of the challenge. But don't worry, the challenges themselves will be briefly summarized, presented below as we progress from task by task. Oh, and one more thing before we get started:

### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

**So finally, without further ado...**

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC080TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC080TASK2)   &nbsp;  &nbsp;  &nbsp;       •   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC080BLOGS)    &nbsp;  &nbsp;  &nbsp;       •

---

---

# TASK 1 {#PWC080TASK1}
# Smallest Positive Number Bits
You are given unsorted list of integers @N.
Write a script to find out the smallest positive number missing.

Example 1:
```
    Input: @N = (5, 2, -2, 0)
    Output: 1
```
Example 2:
```
    Input: @N = (1, 8, -1)
    Output: 2
```
Example 3:
```
    Input: @N = (2, 0, -1)
    Output: 1
```


## about the solutions

The first task this week was a pretty straightforward operation, and consequently there were quite a few submissions, 36 in total. When looking for a missing number in a list, the strategies approached the problem from two directions: either to start with a complete sequence and compare the values in the list, or start with the list and look for abberations to the sequence. We'll breakdown our results into these two categories to start.

## HASH it!
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/abigail/perl/ch-1.pl),
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/alexander-pankoff/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/athanasius/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/cheok-yin-fung/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/colin-crain/perl/ch-1.pl),
[**Dave Cross**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/dave-cross/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/dave-jacoby/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/e-choroba/perl/ch-1.pl),
[**Kang-min Liu**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/gugod/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/roger-bell-west/perl/ch-1.pl),
[**Shawn Wagner**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/shawn-wagner/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/sgreen/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/ulrich-rieke/perl/ch-1.pl), and
[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/walt-mankowski/perl/ch-1.pl)

How does one go about looking for something that isn't there? A popular way of approaching this problem was to start with a list of items that *should* be there and checking off their existence one by one until we can't find a what we're looking for. In this case what we are looking for is the Natural numbers, that is to say the list of positive integers (we won't address whether 0 is a Natural number here, as that's up to debate).

To determine whether a specific value is located in an array, an easy and cheap way to go about this is to convert the values into hash keys, and then do lookups using `exists`. Scanning the array from the beginning for each value checked can add up and get expensive for large arrays, and Perl hashes take the same time for any lookup no matter the size of the hash, with seemingly only physical memory being the limiting factor. In any case through testing I haven't been able to find another correllation, even scaled to hundreds of millions of keys. With a hash there is no need to sort the array, and as we only care about existence, rather than position, multiple instances of the same value won't matter.

Hence the idea is to fill a hash with the values found in the array, then start counting upwards from 1, checking for existence until a lookup fails.

the Monk [**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/athanasius/perl/ch-1.pl)

follows this pattern exactly:

```perl
    my %N;                                # Make a dictionary of the
     ++$N{ $_ } for @N;                   #   listed integers

    my $num = 1;                          # Find the lowest integer >
     ++$num while exists $N{ $num };      #   0 not in the list

    print "Output: $num\n";
```

As the process is so simple there wasn't much room for variation. Several people filtered for only positive values before hashing the data, and this might have some effect in time spent allocating the hash.

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/roger-bell-west/perl/ch-1.pl)

choose to takes this step, as did
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/dave-jacoby/perl/ch-1.pl) and
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/ulrich-rieke/perl/ch-1.pl). Here's Roger's quite compact take on things.

```perl
    sub spn {
      my @list=@{shift @_};
      my %r=map {$_ => 1} grep {$_ > 0} @list;
      my $m=1;
      while (exists $r{$m}) {
        $m++;
      }
      return $m;
    }
```

In other respects they follow the pattern.

A remarkable little piece of code is submitted by

[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/duncan-c-white/perl/ch-1.pl)

who encapsulates all the logic insde a C-style `for` definition, leaving nothing left for the loop block. Kind of like a `while (1) {...}` inverted. Intriguing.

```perl
my %set = map { $_ => 1 } @ARGV;

for( $n=1; $set{$n}; $n++ )
{
}
say $n;
```

[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/alexander-pankoff/perl/ch-1.pl)

ALexander gives us a functional twist on the idea, using the listwise function `first`, borrowed from `List::Util`, to find the first instance where the condition given is true.

```perl
    sub smallest_positive_number_missing( @xs) {
        my %lookup = map { $_ => 1 } @xs;
        return first { !$lookup{$_} } 1 .. ( @xs + 1 );
    }
```

Notice he needs to explicitly state the range to do things this way, and as Perl does not suport infinite lists in this manner he gives the size of the array plus 1. Thus if the array is composed of nothing but the continuous natural number sequence without gaps, the number found will be the next higher number outside the sequence.
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/e-choroba/perl/ch-1.pl)
also uses `first` here. I like it.

Which leads us to

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/colin-crain/perl/ch-1.pl)

```perl
    my %lookup = map { $_ => 1 } @input;

    while ( ++$num ) {  ## @input is finite so this will end eventually
        say "output:  $num" and exit if ! exists $lookup{$num};
    }
```

I chose an infinite loop instead to get my infinite list of sorts, with the reasoning that because no matter its length, the input list is finite, so eventually the next number outside the list will be found and the loop will always terminate.

## STUDY the list and LOOK for IRREGULARITIES
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/arne-sommer/perl/ch-1.pl) ,
[**Bob Lied**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/bob-lied/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/polettix/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/jaldhar-h-vyas/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/jo-37/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/laurent-rosenfeld/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/mohammad-anwar/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/perlboy1967/perl/ch-1.pl), and
[**Ted Leahy**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/ted-leahy/perl/ch-1.pl)

To study the list properly, it's first necessary to sort it and filter for positive values. This will give us a list that will superficially resemble ℕ, the Natural numbers.

From that point there are a few options to determine whether an element is missing from the list.

 * find a gap between elements of more than 1
 * compare element values to an incrementing counter
 * compare the element value to its index


[**Bob Lied**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/bob-lied/perl/ch-1.pl)

starts us off with a nicely documented example that looks at the gaps between elements:

```perl
    # Put a lower bound and upper bound on the list.
    unshift @n, 0;
    push @n, ($n[-1] + 2);

    # Calculate differences between pairs.
    my @delta = map { $n[$_+1] - $n[$_] } ( 0 .. $#n-1 );

    # Find the first difference that isn't 1.  We rigged the list
    # to have a +2 at the right end, so there must be one.
    my $place = firstidx { $_ > 1 } @delta;
```

The driver is the line comparing each element value to that of the following index. If it's greater than 1 then something has happened, which we determine using the `firstidx` function from `List::MoreUtils`. He has, as is his wont, wrapped up all the logic into a separate [SmallestPositive.pm](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/bob-lied/perl/lib/SmallestPositive.pm) module, located in a separate file.

Several other people used this method, including
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/polettix/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/jaldhar-h-vyas/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/jo-37/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/laurent-rosenfeld/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/perlboy1967/perl/ch-1.pl),
[**Ted Leahy**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/ted-leahy/perl/ch-1.pl), and
[**Vinod Kumar K**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/vinod-k/perl/ch-1.pl).

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/jo-37/perl/ch-1.pl)

really ties the room together with his version.

```perl
    foreach (sort {$a <=> $b} grep $_ > 0, @_) {
        last if $_ - $prev > 1;
        $prev = $_;
    }
```


Because our sorted and grepped list is counting upwards from 1, in theory if we increment a counter for each value checked, this counter should keep in sync with the element values being checked, and we can validate by checking for this status.

[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/mohammad-anwar/perl/ch-1.pl)

gives us an example of this approach:

```perl
    my @positive_numbers = sort(grep $_ > 0, @$arrayref);
    return 1 unless (@positive_numbers);

    my $i = 0;
    for my $n (1 .. $positive_numbers[-1]) {
        return $n if ($n < $positive_numbers[$i++]);
    }

    return ++$positive_numbers[-1];
```
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/arne-sommer/perl/ch-1.pl),
[**Steven Wilson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/steven-wilson/perl/ch-1.pl), and
[**Vinod Kumar K**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/vinod-k/perl/ch-1.pl)
also gave us comparison against a counter, as did

[**Julio de Castro**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/juliodcs/perl/ch-1.pl)

```perl
for my $number ( uniq sort {$a - $b} grep {$_ > 0} @ARGV ) {
    return --$expected if $expected++ != $number;
}
```

who wrapped the whole idea up quite nice and cleanly. He does seem to have taken the view that the smallest number missing is missing from *inside* the list, returnng 0 if there are no gaps. I think this is a valid interpretation, and I'm quite surprised there weren't more people that chose to see things this way. Although I personally did not, there were several others, but not many. In any case I find his code above quite clearly phrased. There's no overstating the value of a well-named variable.

Finally we have a variant on the counter method that somewhat mirrors that of Duncan White, above, in harnessing the power of a C-style `for` loop to hold quite complicated logic.

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/james-smith/perl/ch-1.pl)

demonstrates this technique:

```perl
sub smallest_number_sort {
  my @q = sort { $a <=> $b } grep {$_>0} @_; ## Need +ve in order!
  return 1 unless @q;                        ## No positive integers - avoids warn in next line
  for( $_=1; $_ == shift @q; $_++  ) {}      ## Loop through from 1.. exit loop if the array
                                             ##   value isn't equal to index (1-based)
  return $_;                                 ## return value...
}
```





## apply brutal FORCE
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/adam-russell/perl/ch-1.pl),
[**Andinus**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/andinus/perl/ch-1.pl), and
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/lubos-kolouch/perl/ch-1.pl)

One last way we haven't previouly addressed is using copious amounts of brutal force.

In this way we check for list continuity by counting upwards from 1 and searching the list for each sucessive element. This involves a lot of iterating over the data, but will certainly work in the end.

[**Andinus**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/andinus/perl/ch-1.pl)
demonstrates with a couple of nested loops. He does remove found items fromthe search as he goes, constraining the search space as the algorithm progresses.

```perl
    MAIN: foreach my $num (2 ... $sorted[$#sorted] + 1) {
        foreach (@sorted) {
            shift @sorted and next MAIN if $num == $_;
            print "$num\n" and last MAIN;
        }
        # Print the last element if it was a continous series of positive
        # numbers.
        print "$num\n";
    }
```

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/adam-russell/perl/ch-1.pl)

ends up in a similar place, using `grep` to do the second internal looping.

```perl
    sub least_missing{
        my(@numbers) = @_;
        @numbers = sort @numbers;
        for my $i ($numbers[0] .. $numbers[@numbers - 1]){
            my @a = grep { $_ == $i } @numbers;
            return $i if(!@a && $i > 0);
        }
        return undef;
    }
```

[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/lubos-kolouch/perl/ch-1.pl) also took the `grep` angle.












## UNIQUE approaches and other THINGS THAT CAUGHT MY EYE

[**Myoungjin Jeon**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/jeongoon/perl/ch-1.pl) and
[**Nuno Vieira**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/nunovieira220/perl/ch-1.pl)

These two members submitted an unusual variant type that somewhat defies categorization. In this they both set up a parallel array alongside the input, then iterate through the input, setting a flag in that array for every value found in the input. Once finished, the index of the first value in the flag array that has not been set is the missing value.

Here's Myoungjin's version to peruse.

```perl
sub smallestPositiveNumber {
    my @unsignedOnly =
        sort grep { $_ >= 0 } 0, @_; # add zero(0) to better indexing
    say join (", ", @unsignedOnly ) if$d;

    my @set;
    $set[$_] = 'set' for @unsignedOnly;
    push @set, undef;
    if ($d) {
        say join(", ", map { "$_ => ".($set[$_] // 'gap') } 0..$#set );
    }

    defined $set[$_] or return $_ for 1..@set;
}
```

[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/wanderdoc/perl/ch-1.pl)

Breaking from the ranks and going his own way is, true to form, the Wandering Doctor, who gives us a quite singular and unique solution to the problem. After first filtering the input for positive integers, they use the `vec` function to create a bit vector in a string, with each position set as it shows up in the input values. In a sense this is similar to Myoungjin and Nuno's solutions, above, only using the bit vector instead of an array, and the offset of the array rather than the indices.

It's necessary to unpack the bit vector into a binary representation to view it, but be aware this is not a binary number, but rather more akin to unary, with a number represented by its position in the list. Thus the array (1,5,8) is rendered by the string 100010010000000. Using `index` to find the first index of a 0 in the binary string gives a 0-based answer, which we need to add 1 to to produce the number missing, in the example above 2.


```perl
sub smallest_positive_missing
{
     my @arr = @_;

     my $str = '';
     my @positives = grep $_ > 0, @arr;

     return "No positives!" unless  @positives;
     vec($str, $_, 1) = 1 for @positives;
     my $bits = substr(unpack("b*", $str), 1);
     return index($bits, 0) + 1;
}
```


---

# TASK 2 {#PWC080TASK2}
# Count Candies
You are given rankings of $N candidates.
Write a script to find out the total candies needed for all candidates. You are asked to follow the rules below:

a) You must given at least one candy to each candidate.
b) Candidate with higher ranking get more candies than their immediate neighbors on either side.

Example 1:
```
Input: $N = (1, 2, 2)
Explanation:
Applying rule #a, each candidate will get one candy. So total candies
needed so far 3. Now applying rule #b, the first candidate do not get
any more candy as its rank is lower than it's neighbours. The second
candidate gets one more candy as it's ranking is higher than it's
neighbour. Finally the third candidate do not get any extra candy as
it's ranking is not higher than neighbour. Therefore total candies
required is 4.

Output: 4
```

Example 2:
```
Input: $N = (1, 4, 3, 2)
Explanation:
Applying rule #a, each candidate will get one candy. So total candies
needed so far 4. Now applying rule #b, the first candidate do not get
any more candy as its rank is lower than it's neighbours. The second
candidate gets two more candy as it's ranking is higher than it's both
neighbour. The third candidate gets one more candy as it's ranking is
higher than it's neighbour. Finally the fourth candidate do not get
any extra candy as it's ranking is not higher than neighbour.
Therefore total candies required is 7.

Output: 7
```
#

## a TALE of TROUBLE and WOE

The stack of submissions for task number two this week left me, to say the least, perplexed and astonished. No lie on that, nor exaggeration.

Ok, with that bold statement, a little background: Generally the first thing I do when processing these reviews is to quickly scan through all the submissions to get a feel for the general types of method used before delving in deeper. Usually this involves giving them whatever complexly crafted data I last used when testing my own work, to establish a baseline.

In this case I used the input array

```perl
@ARGV = qw(1 9 5 2 6 8 9 10 2 5 1);
```

As you can see, this is more complicated that the examples, containing a bevy of interesting elements: an ascending sequence, a descending sequence, a quick reversal and a hard shelf. For my own solution, I get the result:

```
input:  1 9 5 2 6 8 9 10 2 5 1
output: 1 3 2 1 2 3 4  5 1 2 1
total:  25
```

As you can see, I first crafted the output array and then summed it. This will become important, as you will see.

So I started administering this data to the pile of scripts in front of me. Picking one at random, I got the answer... **21**. Ok, fine. Double-check and try another. Also **21**. Concerning. Third try, also **21**. Took me until Athanasius to get **25**. What was happening? A methodical, systematic application was in order at this point, so I did this, and after a short while began to doubt my own work. There was a remarkable consistency in finding **21**, but it was by no means exclusive.

After tabulating the results as hash data, I applied the frequency counter I'd just written for my "Bag of Words" solution for 081 and this is what I found:

```
total | submissions
------+------------
  1   |   1
  17  |   1
  18  |   2
  21  |   17
  23  |   1
  25  |   13
```

The names have been removed to protect the guilty. So out of the 35 solutions submitted, 22 produced what I can only assume to be the "wrong" answer. At this point I realize I have some company, but am still doubting my own, minority, result.

It's worth noting that I applied an additional constraint to produce the *smallest* possible solution, as this was not specified, so presumably the **25** result I had obtained was indeed the minimum, and looking at it it certainly appears to be so. Almost no one else, and it appears none of the many **21** answers, actually *computed* the candy assignments, rather they came up with values that the assignments *should* be, according to some formula or process. In any case if **25** is a theoretical minimum, I was very curious as to what this mythical **21** answer would actually look like. What were people thinking to consistently come up with this number, by a wide margin more than any other?

Now, as an aside, since I started writing these reviews I have been loath to call out people for errors and bugs, considering it ultimately discouraging and non-productive. It's not a competition and I'm not a judge. I *have* spoken to folks off-line about their submissions, and encourage others to feel free do so. Drop me an email at the address above. I don't see a need to alter that policy now so if mention need be made, I'll leave things at implications and hints. You yourselves can decide whether any advice applies to you.

The solution began to become clearer when I read all the [blogs](#PWC080BLOGS). One team member did me the kindness (thank you!) of including the following summary:

"In this task we’re given an array of numbers which represent candidate rankings, and we need to give them candy. Each candidate gets 1 piece of candy. They get an extra piece if their ranking is higher than the candidate to their right, and another if their ranking is higher than the candidate to their left. Thus every candidate can end up with 1, 2, or 3 pieces of candy. We need to print out the total number of pieces of candy required."

It seems applying this philosophy leads to the answer **21** in the sample data. It is also, unfortunately, wrong.

Let's construct the allotments according to this reasoning in an array alongside the initial data and have a look.

```
in    1 9 5 2 6 8 9 10 2 5 1
out    1 3 2 1 2 2 2  3 1 3 1  =  21
```

A quick look at this list shows directive (b) is obviously violated right in the middle: 9 is greater than 8 which is greater than 6, yet all three values get the same number of candies: 2.

To review:

```
a) You must given at least one candy to each candidate.
b) Candidate with higher ranking get more candies than their immediate neighbors on either side.
```

I'm at a loss as to why so many people came up with this common reading of the text. I understand that in a global community language issues can arise both coming and going, and consequently the problems are usually ambiguous or in some way unclearly stated, but this does not appear to apply here as directive (b) seems quite unambiguous. If one is more than the other, it needs to have more candy. That's all it says. I suppose the inference comes from the second example, which give the correct result but is arguably confusing in the reasoning stated. But actually looking at the allocations of this method will quickly reveal the contradictions with (b), the only non-trivial rule.

Some team members choose to lay out exactly what they're doing and define terms in comments, something I alway try to do and encourage. In sense, it doesn't really matter exactly which parameters are picked if they're well defined. For example, it was noted that the rules state if one position is higher ranking than its neighbor it gets more candy, but there is nothing that says two neighbors of equal ranking have to receive the *same* number of candies. Another vagueness noted is the undefined status of the ranking system. It was even observed by Simon Green that "ranking" might not be the best wording, substituting "scoring" instead. The rating numbers may well be reals, rather than integers, or include zeros or negatives; at no point is it stated they must only be positive; the only criteria is they can be ordered.

On this last point, if we decide on the reasonable assumption that the rating system uses ordinal numbering, and hence positive integers, there is one solution that no one chose to submit, but is certainly valid: give each position a number of candies equal to its rating. This will not generally be a minimal solution, but again, that requirement is not actually stated. Alternately, if we assume integers but not positivity, there exists an offset that will bring the smallest value to 1; applying this adjustment indiscriminately to every rating also produces a valid solution without further calculation.

I suppose the contradiction with rule (b) cannot be ignored. Although it gives me no pleasure I'm just going to have to call a spade a spade (or σκαφη "trough" in the classical Greek), say the "**21**" solution doesn't satisfy the criteria and move on. It's really a solution to a different puzzle and I'm not even sure what that puzzle is.

I think the take-away here is to do a sanity check on your intermediate data before using it to draw conclusions. Obviously failure to do this can lead good people to ruin. My heart goes out to the fallen and I do so hope they have found peace at last.



## MORE than the LARGEST SMALLER NEIGHBOR

All of the viable solutions given hinged around the idea of the setting the candy count to one more than the maximum count of its smaller neighbors. With the count value for the neighbors in turn possibly contingent on *their* neighbors, though, ascertaining those values became the challenge. Four strategies emerged.

### make PASSES until NO MORE CHANGES are made
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/athanasius/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/cheok-yin-fung/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/polettix/perl/ch-2.pl), and
[**Steven Wilson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/steven-wilson/perl/ch-2.pl)

After constructing a matching array for the number of candies at each position, the first method is to make successive passes over the data indices, comparing the input array values using rule (b), assessing and increasing individual counts to satisfy the rule. When increments are found necessary and changes are made, that action in turn could cause conflicts requiring a further resolution so a flag is set and the cycle is repeated. This continues until a pass is finished without further changes. At that point the system is stable and the sum, and if desired the array created, is output.

The loop will always eventually exit in, at maximum, a number of cycles equal to the length of the input list.

[**Steven Wilson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/steven-wilson/perl/ch-2.pl)

chose this method. Here you can see how his `$candies_changed` variable serves as an exit to his basic incrementing loop.

```perl
while ($candies_changed) {
    $candies_changed = 0;
    for my $i ( 0 .. ( scalar @rankings - 2 ) ) {
        if ( $rankings[$i] > $rankings[ $i + 1 ]
            && !( $candies[$i] > $candies[ $i + 1 ] ) )
        {
            $candies[$i]++;
            $candies_changed = 1;
        }
        elsif ( $rankings[$i] < $rankings[ $i + 1 ]
            && !( $candies[$i] < $candies[ $i + 1 ] ) )
        {
            $candies[ $i + 1 ]++;
            $candies_changed = 1;
        }
    }
}
```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/polettix/perl/ch-2.pl)

gives us another version, in his case he's added "pads" to each end of his array to simplify examining the neighboring indices without requiring special cases. As you can see, the loop continues until `$something_changed` comes through as false.

```perl
sub candies_for_candidates (@N) {
   return unless @N;

   my @candies = (1) x @N; # everybody gets a candy!
   push @N, max($N[0], $N[-1]) + 1; # add "edge" value to simplify loops

   while ('necessary') {
      my $something_changed = 0;
      for my $i (0 .. $#candies) {
         for my $delta (-1, 1) {
            next if $N[$i] <= $N[$i + $delta];
            next if $candies[$i] > $candies[$i + $delta];
            $candies[$i] = $candies[$i + $delta] + 1;
            $something_changed = 1;
         }
      }
      last unless $something_changed;
   }
   return sum @candies;
}
```

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/e-choroba/perl/ch-2.pl)

Choroba names his flag `$solved` and works until the loop no longer advances it, combining all of the logic into one grand conditional below the comment:

```perl
    while ($solved_before != $solved) {
        $solved_before = $solved;
        for my $pos (0 .. $#$n) {
            for my $neighbour ($pos - 1, $pos + 1) {
                next if $neighbour < 0 || $neighbour > $#$n;

                # Derive the candies for the current candidate on their
                # neighbour. If the candidate has a higher rank, it should get
                # one more than the neighbour. If the other neighbour has a
                # lower rank than the candidate but gets more candies, the
                # candidate should get one more.
                ++$solved, $candies[$pos] = $candies[$neighbour] + 1
                    if defined $candies[$neighbour]
                    && $n->[$neighbour] < $n->[$pos]
                    && (! defined $candies[$pos]
                        || $candies[$pos] <= $candies[$neighbour]);
            }
        }
    }
    return @$n + sum @candies;
```

One should note that the loop code above does not calculate the number of candies allocated directly, but rather an offset of *additional* candies starting from 0. As we have required a baseline of one candy per setting, that number still needs to be added to obtain the correct sum. In this case we add the count of the candidates to sum of the additional candies distributed to obtain our final total.

### sweep once FORWARD then BACK
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/jo-37/perl/ch-2.pl), and
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/mohammad-anwar/perl/ch-2.pl)

Making successive passes over the data and correcting until no more candies need be added makes a natural intuitive sense, mimicking the way a person would go about manually solving the problem. Somewhat less intuitively, though, some people figured out that by applying a rule the changes can be made in one forward iteration followed by a reverse iteration backwards. The rule applied is that should a position be higher the one preceding it in the iteration, it gets the greater of its current value or one more than the previous. Here

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/jo-37/perl/ch-2.pl)

demonstrates the technique. His comments explain the actions.

```perl
sub candies {

    # Initially all candidates get one candy.
    my @candies = (1) x @_;

    # Forward: If the candidate has a higher ranking than her left
    # neighbor, she gets one more candy than he.
    foreach (1 .. $#_) {
        $candies[$_] = $candies[$_ - 1] + 1
            if $_[$_] > $_[$_ - 1];
    }

    # Backward: If the candidate has a higher ranking than his right
    # neighbor, he gets at least one more candy than she.
    # The usage of negative subscrips might be confusing but achieves
    # symmetry to the forward block.
    foreach (2 .. @_) {
        $candies[-$_] = max $candies[-$_], $candies[-$_ + 1] + 1
            if $_[-$_] > $_[-$_ + 1];
    }

    sum @candies;
}
```

I wouldn't immediately think that would be enough but it does make sense.

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/james-smith/perl/ch-2.pl)
discovered this as well, alongside
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/mohammad-anwar/perl/ch-2.pl).
Here's James version to compare:

```perl
sub candies {
  my @ranks = @_;
  my $prev_count = my @candies = map { 1 } @ranks; ## First pass we set everything to 1!
  my $flag;
  ## Sweep left first...
  foreach( 0..(@ranks-2) ) {
    $candies[$_+1] = $candies[$_]+1 if $ranks[$_] < $ranks[$_+1] && $candies[$_] >= $candies[$_+1];
  }
  ## Then sweep right... we have to go right to left otherwise you don't get the right answer
  ## at the end...
  foreach( reverse 1..(@ranks-1) ) {
    $candies[$_-1] = $candies[$_]+1 if $ranks[$_] < $ranks[$_-1] && $candies[$_] >= $candies[$_-1];
  }
  my $t = 0;
  $t+= $_ foreach @candies;
  return $t;
}
```

### work the SMALLEST VALUES FIRST
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/arne-sommer/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/colin-crain/perl/ch-2.pl), and
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/roger-bell-west/perl/ch-2.pl)

For

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/colin-crain/perl/ch-2.pl),

when I first solved things I used repeated adjustments, nudging counts upward in successive passes much like the first set of examples above. But it nagged me that I'd somehow missed the point. I had some time to revisit the script a little later in the week, after thinking about things, and by that time had a reworked and updated analysis.

If we're to find a minimal solution, then what we're doing when we allocate candies is two things. We're both flattening the histogram while preserving the shape, and at the same time pulling the counts as close to 1 as possible when doing this. Practically what this means is if a value is *smaller* than both of its neighbors, it gets set to 1. This sets the baseline. If it's larger than one or both, its count is set to one more than the larger of the counts of those smaller. It doesn't matter what the difference is in the ratings, only that one is greater than another, or not.

The way this plan works is by setting the smallest values first, which establishes the baseline before the others. To do that we need a list of the indices sorted by array values. Once the 1s are laid in (which may span several values; they only need to be local minima), then those counts that need to be 2 are set, then 3, for 1 more again, etc, until in the end every element has been set in its proper place in a single iteration through the array. Dependency collisions are avoided because higher valued candidates are always placed after those requiring fewer candies.

The conditional mentioned above can be seen toward the end of this code block:

```perl
sub normalize {
## starting from the smallest value, if the given index value is
## larger than either of its neighbors, then it is
## revalued in the output to be the larger of its neighbors' output plus one. If it is
## smaller than both it is 1.
    my ($in, $out) = @_;

    my @order = sort { $in->[$a] <=> $in->[$b] } keys $in->@*;
    for my $i (@order) {
        my $min = 1;
        for (1,-1) {
            next if ( $i + $_ < 0 or not defined $in->[$i+$_]) ;
            if ($in->[$i] > $in->[$i+$_]) {
                $min = max($out->[$i+$_] + 1, $min);
            }
        }
        $out->[$i] = $min;
    }
}
```

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/roger-bell-west/perl/ch-2.pl)
and
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/arne-sommer/perl/ch-2.pl)
figured this out as well. I'm glad they did, because I'm quite fond of it and it's nice to have company. Here's Roger's to compare, in his usual terse style. It's a little harder to follow, but you can see he's inlined the left and right examinations and everything is in there.

```perl
sub cc {
  my @list=@{shift @_};
  my @n=sort {$list[$a] <=> $list[$b]} (0..$#list);
  my @k;
  foreach my $i (@n) {
    my @nr=(1);
    if ($i > 0 && $list[$i-1] < $list[$i]) {
      if (defined $k[$i-1]) {
        push @nr,$k[$i-1]+1;
      }
    }
    if ($i < $#list && $list[$i+1] < $list[$i]) {
      if (defined $k[$i+1]) {
        push @nr,$k[$i+1]+1;
      }
    }
    $k[$i]=max(@nr);
  }
  return sum(@k);
}
```

## keep tabs with BOOKKEEPING

The correct number of candies can be determined in a single left to right pass if we keep looking over ahead to the right as we go, counting the number of sucessive adjustments will be required for those elelments. There's a little linguistic confustion of terms here, as you may have noticed there has been thoughout this discussion, between values of numbers of candies and values of the ratings that determine them.

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/sgreen/perl/ch-2.pl)

explains his reasoning well, although note he is referring to increases of the candy count rather than the rating value:

```perl
    foreach my $col ( 0 .. $#scores ) {
        # If this score is higher than the previous score, add one to it.
        # Otherwise, start with 1.
        my $left = $col != 0
          && $scores[$col] > $scores[ $col - 1 ] ? $lollies[ $col - 1 ] + 1 : 1;

        # Likewise, calculate the number of successive increases to the
        # right (or 1 if there are none).
        my $right = 1;
        foreach my $col_right ( $col .. $#scores - 1 ) {
            last if $scores[$col_right] <= $scores[ $col_right + 1 ];
            ++$right;
        }

        # The number of lollies, is the greater of the two values.
        push @lollies, max( $left, $right );
    }
```

[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/alexander-pankoff/perl/ch-2.pl)

on the other hand, is counting descending values of the ratings to keep track of how may candies to add.

```perl
sub count_candies(@candidates) {
    my $descending;
    my @candies;
    for my $i ( 0 .. $#candidates ) {

        if ( $i > 0 && $candidates[ $i - 1 ] < $candidates[$i] ) {
            $candies[$i] = $candies[ $i - 1 ] + 1;
        }
        else {
            $candies[$i] = 1;
        }

        if ( $i < $#candidates && $candidates[$i] > $candidates[ $i + 1 ] ) {
            $descending++;
        }
        else {
            while ($descending) {
                my $candies = $descending + 1;
                if ( $candies[ $i - $descending ] < $candies ) {
                    $candies[ $i - $descending ] = $candies;
                }
                $descending--;
            }
        }
    }
    return sum0(@candies);
}
```
<br>

# BLOGS {#PWC080BLOGS}

***

**That’s it for me this week, people! Unbroken by the torrential influx, I have maintained my bearings. Looking forward to next wave, I am, your humble servant.**

## But if Your *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC080BLOGS}
## then *RUN* *(dont walk!)* to the *WATERING HOLE*
## and *READ* these *BLOG* *LINKS*:

***( don't think, trust your training, you're in the zone, just do it ... )***


**Adam Russell**

 * [Perl Weekly Challenge 080 - RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/2020/10/04#pwc080) ( *Perl* )

**Andinus**

 * [Challenge 080](https://andinus.tilde.institute/pwc/challenge-080/#org54c0be2) ( *Perl* )
 * [Challenge 080](https://andinus.tilde.institute/pwc/challenge-080/#orgaf148fd) ( *Perl* )

**Arne Sommer**

 * [Positively Candy with Raku and Perl](https://raku-musings.com/positively-candy.html) ( *Perl & Raku* )

**Colin Crain**

 * [Dinner for a Tiny Number of Dictators &#8211; Programming Excursions in Perl and Raku](https://colincrain.wordpress.com/2020/10/03/dinner-for-a-tiny-number-of-dictators/) ( *Perl & Raku* )

**Dave Jacoby**

 * [Challenge 80](https://jacoby.github.io/2020/09/30/challenge-80.html) ( *Perl* )

**Flavio Poletti**

 * [PWC080 - Smallest Positive Number - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2020/09/30/pwc080-smallest-positive-number/) ( *Perl* )
 * [PWC080 - Count Candies - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2020/10/02/pwc080-count-candies/) ( *Perl* )

**Jaldhar H. Vyas**

 * [Perl Weekly Challenge Week 80](https://www.braincells.com/perl/2020/10/perl_weekly_challenge_week_80.html) ( *Perl & Raku* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 80: Smallest Positive Number Bits and Count Candies](http://blogs.perl.org/users/laurent_r/2020/09/perl-weekly-challenge-80-smallest-positive-number-bits-and-count-candies.html) ( *Perl & Raku* )

**Mohammad S Anwar**

 * [BLOG: The Weekly Challenge #080](https://perlweeklychallenge.org/blog/weekly-challenge-080/) ( *Perl & Raku* )

**Myoungjin Jeon**

 * [Weekly Challenge #080 Task #1 :: Raku](https://dev.to/jeongoon/weekly-challenge-080-2kg9) ( *Raku* )
 * [Weekly Challenge #080 Task #2 :: Raku](https://dev.to/jeongoon/weekly-challenge-080-task-2-kkj) ( *Raku* )

**Roger Bell_West**

 * [RogerBW&#39;s Blog: Perl Weekly Challenge 80: missing numbers and jealous neighbours](https://blog.firedrake.org/archive/2020/09/Perl_Weekly_Challenge_80__missing_numbers_and_jealous_neighbours.html) ( *Perl & Raku* )

**Simon Green**

 * [The Weekly Challenge 080](https://dev.to/simongreennet/the-weekly-challenge-080-2if0) ( *Perl* )

**Walt Mankowski**

 * [Perl Weekly Challenge #80](http://www.mawode.com/blog/blog/2020/09/28/perl-weekly-challenge-80/) ( *Perl* )
