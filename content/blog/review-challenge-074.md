---
author:       Colin Crain
date:         2020-08-31T00:00:00
description:  "Colin Crain › Perl Weekly Review #074"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #074"
image:        images/blog/p5-review-challenge-074.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-073/).* )

Welcome to the Perl review for **Week 074** of the Weekly Challenge! Here we will take the time to discuss the  submissions offered by the team, factor out the common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

Or really, talk about pretty much anything that stands out as remarkable or noteworthy.

Every week there is an enormous global collective effort made by the team, analyzing and creatively coding the submissions, and that effort deserves credit due. And that's why I'm here, to try and figure out how to do that.

**It was a big week here on the Perl end of the PWC, with 28 submissions to Task 1, and 26 to Task 2. Let's have a look and see what we can find.**

---

**<big>For context</big>**  before we begin, you may wish to revisit either of the pages for the [**original tasks**](/blog/perl-weekly-challenge-074/) or the summary [**recap**](/blog/recap-challenge-074/) of the challenge. But don't worry, the challenges themselves will be briefly summarized, presented below as we progress from task by task. Oh, and one more thing before we get started:

### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

**So finally, without further ado...**

---

# •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC074TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC074TASK2)   &nbsp;  &nbsp;  &nbsp;       •   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC074BLOGS)    &nbsp;  &nbsp;  &nbsp;       •

---

# TASK #1 › Majority Element {#PWC074TASK1}
You are given an array of integers of size $N.
Write a script to find the majority element. If none found then print -1.
Majority element in the list is the one that appears more than floor(size_of_list/2).

Example 1

```
    Input : @A = (1, 2, 2, 3, 2, 4, 2)
    Output: 2, as 2 appears 4 times in the list which is more than floor(7/2).
```

Example 2

```
    Input : @A = (1, 3, 1, 2, 4, 5)
    Output: -1 as none of the elements appears more than floor(6/2).
```

## Solutions

In the wide field of submissions this week, a clear main pattern emerged, bifurcated with a couple of sub-versions of that form found about evenly split down the middle.

When confronted with the challenge of finding out whether one element in an array occurs more than all the other elements combined, it seems the first go-to idea was to count the frequency of all the elements to see where we stand. From there, one group proceeded by making a reverse sort of the array, according to the frequency data, to find the most common element, then checked to see if this count was greater than half the number of elements. The other half simply iterated through the keys to the counting hash, checking values against the cutoff until a match is found (or not).

### SORT BY FREQUENCY to find the MAXIMAL ELEMENT, then CHECK it for MAJORITY STATUS

[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/cristian-heredia/perl/ch-1.pl),
[**Javier Luque**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/javier-luque/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/laurent-rosenfeld/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/mohammad-anwar/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/perlboy1967/perl/ch-1.pl),
[**Nuno Vieira**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/nunovieira220/perl/ch-1.pl),
[**Pavel Kuptsov**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/pavel_kuptsov/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/ulrich-rieke/perl/ch-1.pl), and
[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/colin-crain/perl/ch-1.pl)

Going through the frequencies and pulling out the most common element struck me a sensible way to proceed, albeit the fact the there's seemingly no direct way to accomplish this act. `List::Util::max()` won't take an auxiliary function to make the determination, so one workaround was to `reverse` `sort` the array, which *can* be told to use the hashed count value, then take the leading value from there.

[**Pavel Kuptsov**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/pavel_kuptsov/perl/ch-1.pl) demonstrates the idea:

```perl
sub majority_el
{
  my $arr_ref = shift;
  my $o = {};
  map { $o->{$_}++ } @$arr_ref;
  my ($max) = sort { $o->{$b} <=> $o->{$a} } keys %$o;

  return $o->{$max} >= floor(@$arr_ref/2) ? $max : -1;
}
```

This approach was also taken by
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/mohammad-anwar/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/ulrich-rieke/perl/ch-1.pl), and
[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/colin-crain/perl/ch-1.pl), although I ended up taking a few different strategies to work around the problem space a bit.

If the `List::Util` version of `max` doesn't suit, another way would be write your own, as shown here by

[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/cristian-heredia/perl/ch-1.pl)

```perl
my $maxValue = List::Util::reduce { $count{$b} > $count{$a} ? $b : $a } keys %count;
```

The `reduce` function here applies the hash criteria to the list, finding the element with the maximum hash value in the same way the simple `max` could not. Very nice.

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/laurent-rosenfeld/perl/ch-1.pl)

```perl
$histogram{$_}++ for @A;
my $max = 0;
for my $key (keys %histogram) {
    $max = $key unless $max;
    $max = $key if $histogram{$key} > $histogram{$max};
}
say $histogram{$max} > ( @A / 2) ? $max : -1;
```

does not even need to make his max function a separate routine, but by any other name that is what is going on here.

When I said before there was no direct way to find the max via the hashed count, I left out a curious simple twist that was noticed by
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/athanasius/perl/ch-1.pl) and
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/roger-bell-west/perl/ch-1.pl).
Generally speaking, reversing a hash is an unsafe way to find the key to a given value; as there is no requirement for values to be unique key collisions seem inevitable. But by definition the count of our Majority Element is larger than half the array, so no other element can have that value. Knowing this we really can just reverse the hash and let the smaller values step on each other, as we only need one reverse lookup.

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/athanasius/perl/ch-1.pl) shows us nicely:

```perl
my $output  = -1;
my %count;
 ++$count{$_} for @A;

if ((my $max = max values %count) > $mean_fl)
{
    my %rev = reverse %count;
    $output = $rev{$max};
}
```

Just use `max` and reverse the hash. It really can be that easy.

In a last expression of this pre-counting technique, I'll mention a variation I came up with that no one else seems to have hit on. Remember when I described the challenge as "finding out whether one element in an array occurs more than all the other elements combined"? Once I had the frequencies hashed, I decided I could implement this directly. It's a little longer than the other versions, but I do like the logic.

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/colin-crain/perl/ch-1.pl)

```perl
my %count;
$count{$_}++ for @A;
my @sorted = sort {$count{$b} <=> $count{$a}} @A;

## is maximum count greater than the sum for all other values?
use List::Util qw(sum);
my ($candidate, $count) = ($sorted[0], $count{$sorted[0]});
delete $count{$sorted[0]};
my $others = sum values %count;
say $count > $others ? $candidate : -1;

```

### HASH the FREQUENCIES, then ITERATE over the keys

[**Bob Lied**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/bob-lied/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/dave-jacoby/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/duncan-c-white/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/jaldhar-h-vyas/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/jo-37/perl/ch-1.pl),
[**Lance Wicks**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/lance-wicks/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/pete-houston/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/sgreen/perl/ch-1.pl),
[**Steven Wilson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/steven-wilson/perl/ch-1.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/wanderdoc/perl/ch-1.pl).

Once we have a frequency hash, though, it takes work to sort it. Why not just iterate directly through the key/value pairs in some way and check to see if any of them fit the criteria? This reasoning guided the solutions to a host of answers, like this on by

[**Bob Lied**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/bob-lied/perl/ch-1.pl)

```perl
my $majorityThreshold = int(scalar(@arr)/2);

# Count the repetitions.
$presence{$_}++ foreach @arr;

# Select the one that passes the threshold.  There can only be one or none.
$result = (grep { $presence{$_} > $majorityThreshold } keys %presence)[0] // -1;
```

[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/jaldhar-h-vyas/perl/ch-1.pl) used `grep` to do the iteration for him, filtering the keys and checking the to see if anything made it thorough:

```perl
my @majority = grep { $count{$_} > $N; } keys %count;
if (!scalar @majority) {
    @majority = (-1);
}
```

and

[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/wanderdoc/perl/ch-1.pl) uses `List::Util::first`:

```perl
sub majority
{
     my @array = @_;
     my $level = int((scalar @array)/2);
     my %count;

     $count{$_}++ for @array;
     return (first { $count{$_} > $level } keys %count) // -1;
}
```


Alternately, if you want to get gussied up all fancy like,

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/jo-37/perl/ch-1.pl)

imported a couple of handy module functions to help him perform pretty much the same actions, but in a nicely condensed form, to what ends up to be a single powerful line:

```perl
use List::MoreUtils qw(frequency);
use List::Util qw(pairfirst);

sub majority_element {

    # As there can be at most one element with a frequency
    # above floor(size_of_list / 2), only the first matching
    # value/frequency-pair may have the result.
    (pairfirst {$b > floor(@_ / 2)} frequency @_)[0] // -1;
}
```

As you can see we're getting progressively shorter and terser. `frequency` makes our counting hash right out of the box, and `pairfirst` give us the first found key/value pair that satisfies the condition, of which we then take the first element. It's worth mentioning that although not clearly stated, `pairfirst` has no problem taking a hash as input, rather than an explicit array constructed from a hash, as implied in the documentation.

There is, however, one last step we can streamline.

### PROGRESSIVELY BUILD the COUNT as we go

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/e-choroba/perl/ch-1.pl),
[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/walt-mankowski/perl/ch-1.pl),
[**Shawn Wagner**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/shawn-wagner/perl/ch-1.pl), and
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/lubos-kolouch/perl/ch-1.pl)

The final step along our walk to minimalism is when we realize that there's no need to even loop through the array more than once. The nature of the Majority Element means that any element with a count beyond the threshold is the one and only, so if we both increment the count and validate for each element when we first see it, if there is a Majority Element eventually it will regester as found. Look at
[**E. Choroba's**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/e-choroba/perl/ch-1.pl)
submission. Simplicity itself. The others listed saw this too and followed a similar path.

```perl
for my $e (@arr) {
    return $e if ++$count{$e} > int(@arr / 2);
}
```


## on the subject of the FLOOR

Most everyone, on seeing the equation for determining the Majority Element, moved straight in to implementing it without further fuss. To rephrase that definition, it's the quantity one needs to exceed to guarantee that the partition is more than half, irrespective of whether the list has an even or odd number of elements.

Almost everyone focused on implementing the formula at face value, without closely examining that rephrasing of what the formula actually means. Only a few people did notice, though, that in the end, for the purposes of evaluating the formula given, the "floor()" aspect was completely superfluous. On the one hand, many people realized that the size of an array can never be negative, so in this case the floor is identical to integer truncation. But on the other hand, we are specifically asking for a value *greater* than ⎣size/2⎦, and because what we are referencing here are array indices, we are constrained to using integer arithmetic. So what we are looking for is to be at least the value of the next *integer* greater than the physical midpoint, (size/2). As this is by definition greater than size/2, any fractional component to that quantity will have no effect on the value we are looking to reach, and can be safely ignored. So there is no harm to truncate it to an integer, or take the floor(), but the values for the count of the majority will always be greater than the simple quotient, be it 3 or 3.5 makes no difference. So curiously, none of that matters in the end; what matters is that we reach our mark. Huh. *(scratches head, nods and moves on)*

Oh, and for those thinking about setting the limit to the ceiling, remember that when the value is whole, the ceiling equals the floor, so that doesn't help us when the size of the array is even. What we need is that the value, an integer, is greater than the the midpoint, a rational number.

## UNIQUE approaches and other THINGS THAT CAUGHT MY EYE

[**Bartosz Jarzyna**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/brtastic/perl/ch-1.pl)

[Quantum::Superpositions::Lazy](https://metacpan.org/pod/distribution/Quantum-Superpositions-Lazy/lib/Quantum/Superpositions/Lazy/Manual.pod)

Wow. After seeing Arne Sommer use the lightweight Perl6::Junction module to validate his arrays, I've been thinking about the "big" version of that concept, quantum superpositions. Bartosz has obviously been thinking about this too, longer and more thoroughly than I have, because he's written a rather complex collection of modules to address it.

The core idea here is to treat an array not as a collection of discreet elements, but rather as one thing, composed simultaneously of varying amounts of other things, with its composition able to be described statistically rather than concretely.

The capabilities of the entire module suite is beyond the scope of this review, but it contains concepts of states and superimpositions and the calculations one can do with them, and the operators to do it. It's an impressive work.

In the context of the task at hand, viewed through the lens of `Quantum::Superpositions::Lazy` an array can be considered a complex object that can be evaluated for truth by a Bayesian weighted model built from its components. In essence, a ten element array containing two 2s can be said to be equal to 2 with a probability of 20%. So what Bartosz does here is set up the array as a superimposition, finds the most probable state from that composition, then checks to see if that state has a probability of over 0.5, which in turn means the value of that state is that of the majority element.

```perl
sub get_majority
{
# a superposition will automate all the counting for us
my $list = superpos(@_);

# superpositions have a built in statistics module
# the result of most_probable is actually a new superposition, it can have multiple states
my ($state) = $list->stats->most_probable->states->@*;

# we now know that this element is certainly most frequent, but does it have proper weight?
return $state->weight > 0.5 ? $state->value : -1;
}
```


[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/cheok-yin-fung/perl/ch-1.pl)

Although she wrote a version of the familiar pattern to verify her results, CY wanted more and so here gives us an implementation of the ["Boyer–Moore majority vote algorithm"](https://en.wikipedia.org/wiki/Boyer–Moore_majority_vote_algorithm). This little jewel will find the majority because it's frequency is larger than all of the other elements combined. Thus if we increase a counter every time it is observed, and decrement the counter every time anything else is found, if the counter is positive we have found the majority element. If there is no majority element, on the other hand, we get garbage, but it still has uses.

From the wiki page:

* Initialize an element m and a counter i with i = 0
* For each element x of the input sequence:
    * If i = 0, then assign m = x and i = 1
    * else if m = x, then assign i = i + 1
    * else assign i = i − 1
* Return m

Here's CY's version:

```perl
sub bm_majority_vote_alg {
    my @array = @{$_[0]};
    my $i = 0;
    my $m;
    for (@array) {
        if ($i == 0) {
            $m = $_;
            $i++
        }
        else {
            $m == $_ ? $i++ : $i--;
        }
    }


    return ( verify(\@array, $m) ? $m : -1 );
}
```

[**Myoungjin Jeon**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/jeongoon/perl/ch-1.pl)

Jeon has his usual unusual take on this problem, first sorting the array to bring equal elements adjacent, then shifting the array elements off one by one. If the current element is equal to the previous, a counter is incremented; if this counter ever exceeds the half-way point of the array (the floor is ignored, rightly so), then the majority element has been found. Elegant.

```perl
sub get_major (@) {
    @_ == 0 and return -1;
    @_ == 1 and return $_[0];

    my @sorted  = sort @_;
    my $halflen = int .5 * @sorted;     # (halflen)gth
    my $pnum    = shift @sorted;        # (p)revious (num)ber
    my $pcnt    = 1;                    # (p)revious (c)ou(nt)

    my $result = -1;
    for my $cnum ( @sorted ) {
        if ( $pnum == $cnum ) {
            ++$pcnt > $halflen and ( $result = $cnum, last );
        }
        else {
            ( $pnum, $pcnt ) = ( $cnum, 1 );
        }
    }
    $result
}
```
---

# TASK #2 › FNR Character {#PWC074TASK2}
You are given a string $S.
Write a script to print the series of first non-repeating character for the given string.  Print # if none found.

Example 1
Input: $S = ‘ababc’
Output: ‘abb#c’

    Pass 1: “a”, the FNR character is ‘a’
    Pass 2: “ab”, the FNR character is ‘b’
    Pass 3: “aba”, the FNR character is ‘b’
    Pass 4: “abab”, no FNR found, hence ‘#’
    Pass 5: “ababc” the FNR character is ‘c’

Example 2
Input: $S = ‘xyzzyx’
Output: ‘xyzyx#’

    Pass 1: “x”, the FNR character is “x”
    Pass 2: “xy”, the FNR character is “y”
    Pass 3: “xyz”, the FNR character is “z”
    Pass 4: “xyzz”, the FNR character is “y”
    Pass 5: “xyzzy”, the FNR character is “x”
    Pass 6: “xyzzyx”, no FNR found, hence ‘#’


## About the Solutions and the Question

There was quite a bit of discussion on the directives for this challenge, with the general consensus amongst those who saw fit to comment that "***Last*** Non-Repeating Character" would be a more apt name. Although there was also a smaller yet not insignificant faction who rebelled against this idea and implemented an algorithm for the first character as named. One soul even did both. Another apparently did neither. All in all everyone was a good sport about it and simply decided what problem they wished to solve and went about it with clarification rather than complaint. This is all well and good, but it does make my job here more complicated. Ah, well, such is life.

The count is up this week, with 26 submissions. So rather that think through a couple of dozen different approaches to the *same* problem, I get to analyse a couple of dozen different approaches to related, but *slightly different* problems. Of course a wide-ranging diversity in solutions is a *good* thing, and I will do my best to explore and explain what we produced.



## the LNR

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/athanasius/perl/ch-2.pl),
[**Bob Lied**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/bob-lied/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/cheok-yin-fung/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/colin-crain/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/dave-jacoby/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/e-choroba/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/jaldhar-h-vyas/perl/ch-2.pl),
[**Javier Luque**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/javier-luque/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/jo-37/perl/ch-2.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/lubos-kolouch/perl/ch-2.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/mohammad-anwar/perl/ch-2.pl),
[**Myoungjin Jeon**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/jeongoon/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/perlboy1967/perl/ch-2.pl)
[**Nuno Vieira**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/nunovieira220/perl/ch-2.pl)
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/pete-houston/perl/ch-2.pl)
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/roger-bell-west/perl/ch-2.pl)
[**Shawn Wagner**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/shawn-wagner/perl/ch-2.pl)
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/sgreen/perl/ch-2.pl)
[**Steven Wilson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/steven-wilson/perl/ch-2.pl)
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/ulrich-rieke/perl/ch-2.pl)
[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/walt-mankowski/perl/ch-2.pl)
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/wanderdoc/perl/ch-2.pl)


For all the range in opinion on the directives, most people didn't mention any misgivings and just followed the examples as a guide, creating a solution for what we will call the Last Non-Repeating Character, or LNR.

There was a common recurring strategy, which starts with processing the string one character at a time, from left to right. With each new character,

* add it to an aggregate counting hash as a key by incrementing the value by one.
* if the value for that character is 1, it is the new last non-repeating character.
* if the value is not one, search backwards through the string looking for a value that is 1 and output that
* if no value is found, output #

There were some variations on implementing these tasks. Actually pretty much every solution comprised its own variation: on referencing the previously visited letter, on searching through the collection, either as a string or an array, on iterating through the letters themselves, or even whether to proceed forwards or backwards at any given time.

### the ARCHITYPE

the archetypical form walks through the steps notated above, as demonstrated here by

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/cheok-yin-fung/perl/ch-2.pl)

```perl
for my $char (@characters) {
    if (!exists $charcount{$char} ) {
        push @uniquestack , $char;
        $charcount{$char} = 1;
        $ans .= $char;
    }
    else {
        $charcount{$char}++;
        @uniquestack = grep { $charcount{$_} == 1 } @uniquestack;
        $ans .= (scalar @uniquestack != 0) ? $uniquestack[-1]  : "#";
    }
}
```

CY makes the choice to maintain an array of unique letters, that is elements whose count is 1. The upper `if` handles the case that the letter has never been seen, hashing it and outputting it; the lower `else` removes it from the unique list and instead takes the last member of that list for the output letter.

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/athanasius/perl/ch-2.pl)

```perl
for my $i (0 .. $#chars)
{
    my $fnr = '#';

    if (++$count{ my $chr = $chars[$i] } == 1)
    {
        $fnr = $chr;
    }
    else
    {
        INNER: for my $j (reverse 0 .. $i - 1)
        {
            if ($count{ $chr = $chars[$j] } == 1)
            {
                $fnr = $chr;
                last INNER;
            }
        }
    }
    $FNR .= $fnr;
}
```

The Monk proceeds in much the same manner, only on finding replication instead chooses to iterate back down from the current index to zero, checking each letter along the way. The output for that index is the first unique candidate found.

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/roger-bell-west/perl/ch-2.pl)

Roger in his usual efficient way stripped off the chaff from the problem to reveal the simplicity of the form beneath:

* take a char and count it, put it on processed list
* grep processed list for unique counts
* take rightmost char from end of list, or #

Here i is spread out for clarity, comments are mine:

```perl
foreach my $c ( split '', $in ) {
    push @s, $c;
    $s{ $c }++;                         ## %s is count hash
    @s = grep { $s{ $_ }<2 } @s;        ## keeps @s unique characters
    if ( @s ) {
        push @o, $s[-1];                ## get rightmost
    } else {
        push @o, '#';
    }
}
```


### the SLICE

While still incrementally processing the string one letter at a time, as each letter came up for consideration some preferred to carve out a slice from the beginning of the string up to the current position; it stands to reason would hold all required information to determine the output letter. This proved an effective way of going about things.

[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/jaldhar-h-vyas/perl/ch-2.pl)

Jaldhar uses `substr` to section the original string, then later divides the slice into an array and examines each character. If a letter is only found once, he updates a $fnr variable; the last updated value will be the last non-repeating character.

```perl
for my $i (1 .. length $S) {
    my $slice = substr $S, 0, $i;
    my $fnr = '#';

    for my $c (split //, $slice) {
        my @matches = ($slice =~ /$c/g);
        if (scalar @matches == 1) {
            $fnr = $c;
        }
    }

    push @output, $fnr;
}
```

[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/wanderdoc/perl/ch-2.pl)

on the other hand, divided his string first, and selected a proper array slice to work on. He can then call `'grep` on the slice for elements with count 1 and select the last element, or `#` if none found.

```perl
 for my $i ( 0 .. $#letters )
 {
      my @pass = @letters[0 .. $i];
      my %count;
      $count{$_}++ for @pass;


      my $fnr = (grep {1 == $count{$_}} @pass)[-1] || '#';
      $output .= $fnr
 }
```

The slice method was popular,
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/duncan-c-white/perl/ch-2.pl),
[**Lance Wicks**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/lance-wicks/perl/ch-2.pl), and
[**Myoungjin Jeon**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/jeongoon/perl/ch-2.pl) used it as well.

### a more COMPLEX DATA structure

Although I didn't, in the end, wind up doing this, my first thought was to construct a hash of hashes to store all the frequency data, much as

[**Bob Lied**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/bob-lied/perl/ch-2.pl)

has done here. By keeping both the count and the last index found in a more complex version of the frequency hash, he can construct a list of unique characters from the frequency hash keys, and order it correctly by index to find the last element. As is all these examples, there are no non-repeating characters found, `#` is written to output.

Bob stashed jis firstNonRepeat() function off in its own FNR.pm namespace. Here's a selection from it:

```perl
for my $i ( 0 .. length($s)-1 )
{
    my $char = substr($s, $i, 1);
    $charData{$char}{cnt}++;
    $charData{$char}{pos} = $i unless exists $charData{$char}{pos};

    # Select non-repeating characters and sort by position
    my @nr = sort { $charData{$a}{pos} lt $charData{$b}{pos} }
                grep { $charData{$_}{cnt} == 1 } keys %charData;

    $result .= $nr[0] // '#';
}
```

[**Steven Wilson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/steven-wilson/perl/ch-2.pl)

Steven adds a different unique twist, keeping the frequency data in a pair of arrays instead of a hash, one for repeating characters, another for non-repeating. When a letter is examined, it's determined to be either in one or another of these arrays or uncategorized. If it's never been seen before it's obviously the output character, but if shows up in the non-repeating list it must be first moved to the repeating list, then the last element of the non-repeating list is the selection. A slightly more complicated but i find very elegant solution.

```perl
sub first_non_repeating_characters {
    my $string = shift;
    my @non_repeating;
    my @repeating;
    my $result;
    for my $char ( split //, $string ) {
        my $in_repeating     = grep { $_ eq $char } @repeating;
        my $in_non_repeating = grep { $_ eq $char } @non_repeating;
        if ($in_non_repeating) {
            my $index = first_index { $_ eq $char } @non_repeating;
            splice @non_repeating, $index, 1;
            push @repeating, $char;
        }
        elsif ( !$in_repeating && !$in_non_repeating ) {
            push @non_repeating, $char;
        }
        scalar @non_repeating > 0
          ? ( $result .= $non_repeating[-1] )
          : ( $result .= qw/ # / );
    }
    return $result;
}
```

### an ORDERED HASH: Tie::IxHash

In the spirit of Bob Lied's submission detailed above, it'd be nice if the frequency hash and the list of characters already seen could be held in the same data structure, and this can be done with the `Tie::IxHash` module, which supplies an indexed associative array. Cool. Internally it contains a hash where the keys point not immediately to the value but to an index in a pair of matching arrays, and overrides the standard hash behavior to return the value indexed in the array.  In this way the keys retain the order in which they are assigned, and unlike a normal hash can be iterated through sequentially.

[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/perlboy1967/perl/ch-2.pl)

```perl
tie my %cf, 'Tie::IxHash';

foreach my $c (split(//, $S)) {
  $cf{$c}++;
  my @c = grep { $_ if $cf{$_} == 1 } keys %cf;
  $O .=  (scalar @c ? $c[-1] : '#');
}
```

As each letter is accessed, it's added to the indexed count hash. An array is constructed of elements with count 1 from the keys, and the LNR is the last value on that list.

[**Shawn Wagner**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/shawn-wagner/perl/ch-2.pl) also uses an IxHash.

### do EVERYTHING

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/jo-37/perl/ch-2.pl)

Jorg has given us a rather novel, complete solution that although unusual looking, works in basically the same way as the others mentioned here. Using `map` to iterate over the divided array made from the string, he does three things to each `$_` letter as it is processed. First he increments a counting hash with the incidence, then, depending on a `$lnr` switch passed in, adds that character to either the front or rear of a running `@head` array. The result of obtaining either the first or last non-repeating character list in the end depends on the direction in which the list of previous characters is accessed; from the first in or the last in. Alternately instead of reversing the viewing, we can reverse the construction, as Jorg has done here. Depending on a flag, the list of previous characters is added to either from the beginning or the end, and the behavior can be selected by passing a second parameter. Finally the first instance of a character with frequency 1 is returned by the mapped function for the letter, or `#` if none present.

```perl
sub nr_char {
    my @arr = split //, shift;
    # mode: fnr or lnr
    my $lnr = shift;
    my (%freq, @head);

    join '', map {
        # While traversing the input string character-wise,
        # count frequencies and collect the (reversed) head.
        $freq{$_}++;

        # Emulate unshift (lnr, reversed) or push (fnr, forward)
        # to augment the head.
        splice @head, $lnr ? 0 : @head, 0, $_;

        # The first singleton character from the (reversed) head
        # is the requested output character.
        (first {$freq{$_} == 1} @head) // '#';
    } @arr;
}
```












## A TRULY ORIGINAL method

You can't get more original than using your own brand-new cpan module to help you out.

[**Bartosz Jarzyna**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/brtastic/perl/ch-2.pl)

Bartosz again pulls out his impressive `Quantum::Superpositions::Lazy` module to help him find the *first* non-repeating character. He quite specifically chooses this behavior, bucking the trend, but the whole solution is bucking the trend, so why do something half -way? He discusses the whole thing is his **blog** in a manner more thorough than I can do here, so I recommend going there to hear him explain things himself, on the two tasks he has presented to us and further comments of the creation of the modules themselves.

```perl
sub first_non_repeating
{
    my sub find_fnt
    {
        my @split = split "", shift;

        # a superposition will automate some of the counting for us
        my $split_pos = superpos(@split);

        # the default weight for an element is 1, and weights are merged by values
        my @non_repeating = grep { $_->weight == 1 } $split_pos->states->@*;

        return "#" if @non_repeating == 0;
        return (shift @non_repeating)->value if @non_repeating == 1;

        # since we have a couple of non-repeating characters, we get the first one
        # (the superposition here helps so that we solve this by a simple eq)
        my $alternatives = superpos(@non_repeating);
        return first { $_ eq $alternatives } @split;
    }

    my ($string) = @_;
    my $result = "";
    for (1 .. length $string) {
        $result .= find_fnt(substr $string, 0, $_);
    }
    return $result;
}
```

<br>

# BLOGS {#PWC074BLOGS}

***

**That's it for me this week, people!**

## *But if Your THIRST for KNOWLEDGE is not SLAKED*,
## then *RUN (dont walk!)* to the WATERING HOLE
## and READ these BLOG LINKS:

***( don't think, trust your training, you're in the zone, just do it ... )***



**Andrew Shitov**

 * [The weekly challenge nr 74](https://andrewshitov.com/2020/08/18/the-weekly-challenge-for-74/) ( *Raku* )

**Arne Sommer**

 * [Majority Character with Raku](https://raku-musings.com/majority-character.html) ( *Raku* )

**Bartosz Jarzyna**

 * [Perl Weekly Challenge 74 solution](https://brtastic.xyz/blog/article/perl-weekly-74) ( *Perl* )

**Cheok-Yin Fung**

 * [Self Challenge and Weekly Challenge (CY's Take on #074 Task 1)](http://blogs.perl.org/users/c_y_fung/2020/08/self-challenge-and-weekly-challenge.html) ( *Perl* )

**Colin Crain**

 * [When Majority Rule Plays Finders Keepers](https://colincrain.wordpress.com/2020/08/21/when-majority-rule-plays-finders-keepers/) ( *Perl & Raku* )

**Jaldhar H. Vyas**

 * [Perl Weekly Challenge: Week 74](https://www.braincells.com/perl/2020/08/perl_weekly_challenge_week_74.html) ( *Perl & Raku* )

**Javier Luque**

 * [PERL WEEKLY CHALLENGE &#8211; 074](https://perlchallenges.wordpress.com/2020/08/17/perl-weekly-challenge-074/) ( *Perl & Raku* )

**Lance Wicks**

 * [#Perl Weekly Challenge #74](https://lancewicks.com/2020/08/22/perl-weekly-challenge-74/) ( *Perl* )
 * [Live Programming today. Perl Weekly Challenge #74 - YouTube](https://www.youtube.com/watch?v=uM0TTQZaZ2Q) ( *Perl* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 74: Majority Element and FNR Character](http://blogs.perl.org/users/laurent_r/2020/08/perl-weekly-challenge-74-majority-element-and-fnr-character.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 74: Task 1](https://fluca1978.github.io/2020/08/17/PerlWeeklyChallenge74.html#task1) ( *Raku* )
 * [Perl Weekly Challenge 74: Task 2](https://fluca1978.github.io/2020/08/17/PerlWeeklyChallenge74.html#task2) ( *Raku* )

**Mohammad S Anwar**

 * [BLOG: The Weekly Challenge #074](https://perlweeklychallenge.org/blog/weekly-challenge-074/) ( *Perl & Raku* )
 * [Perl Weekly Challenge - 074 (Task #1: Perl) - YouTube](https://www.youtube.com/watch?v=_-vOF9C7WRQ) ( *Perl & Raku* )
 * [Perl Weekly Challenge - 074 (Task #2: Perl) - YouTube](https://www.youtube.com/watch?v=p2yL2Fy-KXw) ( *Perl & Raku* )

**Roger Bell_West**

 * [RogerBW&#39;s Blog: Perl Weekly Challenge 74: more songs about lists](https://blog.firedrake.org/archive/2020/08/Perl_Weekly_Challenge_74__more_songs_about_lists.html) ( *Perl & Raku* )

**Shahed Nooshmand**

 * [Perl Weekly Challenge: week 74](https://rafraichisso.ir/2020/08/20/pwc-74) ( *Raku* )

**Simon Green**

 * [Perl Weekly Challenge 074](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/sgreen/README.md) ( *Perl* )

**Walt Mankowski**

 * [Perl Weekly Challenge #74](http://www.mawode.com/blog/blog/2020/08/23/perl-weekly-challenge-74/) ( *Perl* )
