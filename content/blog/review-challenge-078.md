
---
author:       Colin Crain
date:         2020-09-28T00:00:00
description:  "Colin Crain › Perl Weekly Review #078"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #078"
image:        images/blog/p5-review-challenge-078.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-077/).* )

Welcome to the Perl review for **Week 078** of the Weekly Challenge! Here we will take the time to discuss the  submissions offered by the team, factor out the common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

---

**Week over week the response to the Challenge has grown, which to all of us here is a wonderful thing. This week we have 33 submissions for the first task, 31 for the second, which I believe is a new record for this page.**

With the large upswing of submissions from new and returning members, I'm going to have to change the format somewhat, as I unfortunately will never have time to give each and every submission its proper due. I'd rather go further in depth with fewer techniques than gloss over everything, which to me doesn't sound very helpful in the end. With that said, I will do my best not let it become a judged competition for who can be the cleverest, but rather try and select examples from across the board, with perhaps a bit of randomness and whimsey guiding me as well. Cleverness isn't everything, and people choose their own reasoning when they choose how to realize their ideas. I'm open to suggestion on the subject, and of course if anyone wishes to opt out of being reviewed for whatever reason, by all means just let me know. And further, if any newcomers have specific questions on a submission or technique I will do my best to accommodate, just drop me a line. Really. It's cool.

---

Every week there is an enormous global collective effort made by the team, analyzing and creatively coding the submissions, and that effort deserves credit due. And that's why I'm here, to try and figure out how to do that.

Let's have a look and see what we can find.

---

**<big>For context</big>**  before we begin, you may wish to revisit either of the pages for the [**original tasks**](/blog/perl-weekly-challenge-078/) or the summary [**recap**](/blog/recap-challenge-078/) of the challenge. But don't worry, the challenges themselves will be briefly summarized, presented below as we progress from task by task. Oh, and one more thing before we get started:

### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

**So finally, without further ado...**

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC078TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC078TASK2)   &nbsp;  &nbsp;  &nbsp;       •   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC078BLOGS)    &nbsp;  &nbsp;  &nbsp;       •

---

# TASK #1 › Leader Element {#PWC078TASK1}

You are given an array @A containing distinct integers.
Write a script to find all leader elements in the array @A.
Print (0) if none found.

An element is leader if it is greater than all the elements to its right side.

Example 1:
```
    Input: @A = (9, 10, 7, 5, 6, 1)
    Output: (10, 7, 6, 1)
```
Example 2:
```
    Input: @A = (3, 4, 5)
    Output: (5)
```


## about the solutions

Among the 33 submissions to the first task, there seemed to be two basic forms: to traverse the array from left to right, or from right to left. These worked out to be  about evenly divided. For such a seemingly simple task there proved to be quite a few different ways of actually deciding whether a given element was a leader or not.



## working LEFT to RIGHT across the array
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/adam-russell/perl/ch-1.pl),
[**Andinus**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/andinus/perl/ch-1.pl),
[**Anton Fedotov**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/anton-fedotov/perl/ch-1.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/arne-sommer/perl/ch-1.pl),
[**Bob Lied**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/bob-lied/perl/ch-1.pl),
[**Dave Cross**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/dave-cross/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/dave-jacoby/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/mohammad-anwar/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/perlboy1967/perl/ch-1.pl),
[**Nuno Vieira**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/nunovieira220/perl/ch-1.pl),
[**Shawn Wagner**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/shawn-wagner/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/sgreen/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/ulrich-rieke/perl/ch-1.pl), and
[**Vinod Kumar K**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/vinod-k/perl/ch-1.pl)

a straightforward approach is to use an index iterator to examine the individual elements, using that index value to construct an array slice for the values to the right and determining the maximum value of the resultant list. If that maximum is larger than the given indexed value, that index contains a leader, and the result is pushed to an output array.

Well, that's **one** way at least.

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/sgreen/perl/ch-1.pl) shows us how:

```perl
for my $index ( 0 .. $#array - 1 ) {
    # Get the current value, and the maximum of the remaining values
    my $value = $array[$index];
    my $max   = max @array[ $index + 1 .. $#array ];
    push @leader, $value if $value > $max;
}
```

It's nice.
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/adam-russell/perl/ch-1.pl) and
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/mohammad-anwar/perl/ch-1.pl) also took this practical approach.

[**Anton Fedotov**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/anton-fedotov/perl/ch-1.pl)

gives us an unusual twist on this though, using `eval()` and a `state` variable to determine whether the element at an auto-incrementing index is the largest member of a sorted list from the sliced segment beyond:

```perl
eval {  state $i = 0;
        push @L, $_ if $_ == shift @{[ sort {$b <=> $a} @A[$i++..$#A] ]}
     } for @A;
```

It's certainly compact. I feel this could also be done with `do{ EXPR } for @A` and an external index, but you say tomato, I say tomato.

Of course a slice is not the only way to look to the right. As we know the index of a given element as we traverse, we can create a second interator to examine the remainder, as shown to us here by the Perlmonk

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/athanasius/perl/ch-1.pl)

```perl
OUTER_FOR: for my $i (0 .. $#A)
{
    for my $j ($i + 1 .. $#A)
    {
        next OUTER_FOR unless $A[$i] > $A[$j];
    }
    push @leaders, $A[$i];
}
```

See how that works? Here's another example by

[**Vinod Kumar K**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/vinod-k/perl/ch-1.pl)

```perl
foreach my $i(0..$length-1){
    foreach my $j($i+1..$length){
        last if($array_elements[$i] < $array_elements[$j]);
        push(@result, $array_elements[$i]) if($j == $length-1);
    }
}
my $max_from_right = $array_elements[$length-1];
push (@result, $max_from_right);
```

Yet another way is, if we're willing, to destroy the array as we work through it, shifting elements off one at a time. If done this way the remaining array will always comprise the elements to the right. This list can be then be evaluated using an imported listwise function like `max` or `all`.

[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/arne-sommer/perl/ch-1.pl) uses `all` from `List::Util`:

```perl
while (@A)
{
  my $a = shift @A;
  push(@B, $a) if $a > all(@A);
}
```

[**Dave Cross**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/dave-cross/perl/ch-1.pl)

takes a little more complicated route to the same goal using a `map`/`grep` combo to do the looping for him. I'm not sure if I've mentioned before how much I like his use of `$needle` and `@haystack` variables. He again uses `all` to do the comparison check.

```perl
my @leaders = map  { $ARGV[$_] }
              grep { is_leader($_, @ARGV) } 0 .. $#ARGV;

sub is_leader {
  my ($needle, @haystack) = @_;
  return 1 if $needle == $#haystack;

  return all { $haystack[$needle] > $_ } @haystack[$needle + 1 .. $#haystack];
}
```

Alternately,

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/dave-jacoby/perl/ch-1.pl),

employs a variation on the same sequence of events using `max`, again from `List::Util`:

```perl
while (@arr) {
    my $max = max @arr;
    push @output, $arr[0] if $max == $arr[0];
    shift @arr;
}
```







## traveling RIGHT to LEFT instead
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/abigail/perl/ch-1.pl),
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/alexander-pankoff/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/colin-crain/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/polettix/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/jo-37/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/laurent-rosenfeld/perl/ch-1.pl),
[**Markus Holzer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/markus-holzer/perl/ch-1.pl),
[**Myoungjin Jeon**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/jeongoon/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/pete-houston/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/roger-bell-west/perl/ch-1.pl),
[**Steven Wilson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/steven-wilson/perl/ch-1.pl),
[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/walt-mankowski/perl/ch-1.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/wanderdoc/perl/ch-1.pl)

If we traverse the array back to front, then every element we will need to know the value of to make our leadership decisions will have already been examined by the time we get to it. This is quite convenient.

To be a successful leader we already know it will be larger than any element to its right. All we need to do is keep track of a local maximum as we travel; if the element to be evaluated is larger than the running maximum, then it is both declared a leader and also becomes the updated maximum going forward.

[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/walt-mankowski/perl/ch-1.pl)

uses a descending iterator to pick out the individual elements:

```perl
for (my $i = $#a; $i >= 0; $i--) {
    if (!defined $max || $a[$i] > $max) {
        unshift @out, $a[$i];
        $max = $a[$i];
    }
}
```

This has the last-element initialization built in, as you see. But if we're willing to work destructively, we can remove the elements one-by-one. I do this in

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/colin-crain/perl/ch-1.pl)

```perl
my @output = my ($max) = (pop @input);

while (@input) {
    my $ele = pop @input;
    if ($ele > $max) {
        $max = $ele;
        unshift @output, $ele;
    }
}
```

I find this `pop`/`max`/`unshift` combination to be quite satisfying. It's clean and easy on the eyes.
[**Cheok-Yin Fung's**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/cheok-yin-fung/perl/ch-1.pl)
submission is quite similar.

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/james-smith/perl/ch-1.pl)

applies `reverse` to the array before starting, allowing a straight `for` loop across the data.

```perl
foreach ( reverse @_ ) {
    unshift @R, $max = $_ if $max < $_;
}
```

But several people noticed that keeping a separate `$max` variable wasn't really necessary, as the head of the `@leaders` array will always already hold that value. Ok, sure thing. Lets look to

[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/lubos-kolouch/perl/ch-1.pl)
to bring this all back home:

```perl
for my $elem (reverse @$arr) {
    unshift @leaders, $elem if $elem > $leaders[0];
}
```

### some FUNCTIONAL right-to-left solutions

the simplicity of the right-to-left mechanism lent itself well to a number of functional solutions, a machine inhaling arrays at one end and breathing out leaders at the other.

[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/alexander-pankoff/perl/ch-1.pl)

employs `reduce`, from over in `List::Util`, for the task:

```perl
my $leaders = reduce {
    my @leaders = @$a;
    my $current = $b;

    ( all { $current > $_ } @leaders ) ? [ $current, @leaders ] : $a
}
[], reverse @list;
```

Likewise

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/jo-37/perl/ch-1.pl)

```perl
sub leading {
    (@{(reduce {
        unshift @$a, $b if $b > ($a->[0] // '-inf');
        $a;
    } [], reverse @_)}, (0) x !@_) ;
}
```

I have to say I'm still struggling with finding the most readable formatting for these complex functions. I like Alexander's clear layout more but I think I'd drop down and indent the `reduce {` and following brackets, because I'm finding myself looking to the argument list, `[], reverse @list`, as a separate operation. Keen observers will have noticed I'm not above reformatting stuff for clarity, but for these I have left them as written.

For those of you wondering what's going on, in the list reduction the accumulator [] is unshifted with the argument if it passes the conditional for leadership status. The fiddly bit at the end of Jorg's code combines with the outer dereferencing to give an array containing `(0)` if the input array has no values. It's cool: if that's the case, then the reduction will yield [], dereferenced to the null set, and the fiddly bit (0) x 1, or a single 0, all listified by the outermost parens. If that's not the case, the fiddly bit evaluates to 0 x 0, and no extra zeros are added to the list.

This is all very cool, but Marcus, Pete and Abigail show us really all we need is `grep`. Because they're short, here we are served three ways:

[**Markus Holzer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/markus-holzer/perl/ch-1.pl)

```perl
sub leader_elements {
    my $first = my $max = pop @_;
    defined $first
        ? reverse $first, grep { $_ > $max ? [$max = $_] : 0 } reverse @_
        : 0 }
```

[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/pete-houston/perl/ch-1.pl)

```perl
my @out = reverse grep { $_ > $max and $max = $_, 1 } reverse @ARGV;
```

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/abigail/perl/ch-1.pl),

```perl
say reverse
    grep {!defined $max || $_ > $max ? do {$max = $_; 1} : 0}
    reverse @A;
```

I do very much like that last formatting, BTW.


## ⎯→ Print (0) if none found.
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/abigail/perl/ch-1.pl),
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/alexander-pankoff/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/dave-jacoby/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/polettix/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/jo-37/perl/ch-1.pl),
[**Julio de Castro**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/juliodcs/perl/ch-1.pl),
[**Markus Holzer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/markus-holzer/perl/ch-1.pl),
[**Myoungjin Jeon**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/jeongoon/perl/ch-1.pl),
[**Shawn Wagner**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/shawn-wagner/perl/ch-1.pl), and
[**Steven Wilson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/steven-wilson/perl/ch-1.pl)

As the rightmost element of any array is by definition the leader of none, but a bona fide leader nonetheless, the only way for no solution to be found is in the pathological edge case where the empty array is input. It could be well argued that an empty @ARGV is the same as no input at all, which is to say no array at all, which should reasonably considered invalid input.  On the other hand, an array is a data structure distinct from the list of data it contains, and passing an array reference into a routine, perhaps in a module, that happened to contain no data makes perfect sense as a valid option. The reference pointer is certainly a real entity.

Returning 0 for the case of an empty array can also be considered a rather arbitrary response, as the only criteria listed in the definition is that the integers given be distinct; there is no qualification that the integers be positive or even non-zero. Without this qualification, the results for the two arrays `[]` and `[-2,-1,0]` are both 0, even though only one of these arrays contains real data. **Jorg Sommrey** gives us specific examples to point this ambiguity out, as does **Athanasius**, who goes to length to state why they specifically chose *not* to implement this. Thank you both for these notes, sometimes I feel like I'm getting outside the lines with this sort of reasoning. Data pollution makes me feel dirty, and not in a good way.

Depending on the specific context, this could be considered introducing spurious data, polluting the data set. Or perhaps, such as the case where all the data is in fact always greater than 0, it just indicates an error state, providing a known null value that can be flagged and dealt with.

This whole matter might well be regarded as a trick question, with a fair bit of disagreement on people implementing it. I didn't, for instance, as I hold a strong distrust of introducing spurious data. However, as noted by my hypothetical case studies, YMMV.







## SHINY OBJECTS in the CABINET of CURIOITIES



[**Julio de Castro**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/juliodcs/perl/ch-1.pl)

Julio gives us a unique methodology, to break down literally every logical unit he can find into its own anonymous subroutine. Thus subroutines are constructed in turn calling other routines descending in a tree-like structure some 4 levels deep. The result is... "interesting", if not exactly easy to follow. I see the impulse, and even agree with it to some degree. "Baroque" might be a better word, or perhaps "rococo". Or perhaps a simple "too far" will do, but I suspect Julio knows this already, and it is an interesting experiment, and it does in fact work. I say let the people decide:

```perl
sub get_leaders {
    my @A           =               ( 9, 10, 7, 5, 6, 1 );
    my $a_indexes   = sub           { 0 .. @A - 1 };
    my $is_last     = sub($i)       { $i == @A - 1 };
    my $current     = sub($i)       { $A[$i] };
    my $following   = sub($i)       { $A[$i + 1] };
    my $is_leading  = sub($i)       { $current->($i) > $following->($i) };
    my $is_leader   = sub($i)       { $is_last->($i) || $is_leading->($i) };
    my $if_leader   = sub($i)       { $is_leader->($i) ? $current->($i) : () };
    my $push_leader = sub($lst, $i) { push @{$lst}, $if_leader->($i); $lst };

    my $result = reduce { $push_leader->($a, $b) } [], $a_indexes->();

    @A == 0 ? (0) : $result->@*;
}
```

I am open to discussion here. At what point *does* functional abstraction go too far?

[**Nuno Vieira**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/nunovieira220/perl/ch-1.pl)

Nuno traverses the list from left to right, adding each element to a list of leaders, but also filtering that list on every pass to only elements larger than the element being added. Why does this work? Well one quality of the leader list is that leadership is recursive: every leader element to the left of any other element is larger. So filtering the list will never remove a true leader, but serves as a check to remove candidates added that later are superseded. The last element, which will always be a leader, is never questioned.

```perl
my @arr = ();
for my $item (@list) {
  @arr = grep { $_ > $item } @arr;
  push @arr, $item;
}
```
---

# TASK #2 › Left Rotation {#PWC078TASK2}

You are given array @A containing positive numbers and @B containing one or more indices from the array @A.

Write a script to left rotate @A so that the number at the first index of @B becomes the first element in the array. Similary, left rotate @A again so that the number at the second index of @B becomes the first element in the array.

Example 1:
```
    Input:
        @A = (10 20 30 40 50)
        @B = (3 4)

    Output:
        [40 50 10 20 30]
        [50 10 20 30 40]
```

## solutions

There was a big boost in submissions this week, up to 31 for this challenge.

The first thing to note is that some people found surprise in that the rotations were to be applied sequentially, rather than consecutively; a quick read of the description seemed to suggest that that was where things were going. Carefully paying attention to the examples, however, proved that theory wrong, in that each index in the second list is clearly intended to be its own independant rotation from the base state. It does remain ambiguous how to get there, though.

This immediately breaks down into two parts to the task: to create a way to transform the array to a new state for output, and how to apply that function across the elements of the second array. Some took this to its furthest extension, supplying first one function to do the rotation, then another to call it for the members of the second array. Others went the other way and inlined both activities.

There were a few basic strategies that fell out:


## construct a ROTATE function
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/adam-russell/perl/ch-2.pl)
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/alexander-pankoff/perl/ch-2.pl)
[**Andinus**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/andinus/perl/ch-2.pl)
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/arne-sommer/perl/ch-2.pl)
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/dave-jacoby/perl/ch-2.pl)
[**Julio de Castro**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/juliodcs/perl/ch-2.pl)

A left rotation is the act of removing the leading element of an array and moving it to the end, as though the two ends were connected on a loop. So by applying `shift` to the array, immediately followed by `push` on the element produced, a single left rotation is enacted.

Place this structure in a loop and this single action can be repeated multiple times as required. Usually these actions were combined in their own function, although because the main control flow is so linear, inlining the loop is pretty basic. So we saw a bit of variety here.

For a nice example of a repeating rotation function, we can look to the submission provided by

[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/alexander-pankoff/perl/ch-2.pl)

```perl
for my $index (@B) {
    say '[' . join( ', ', left_rotate( $index, @A ) ) . ']';
}

sub left_rotate ( $index, @array ) {
    while ( $index-- ) {
        my $top = shift @array;
        push @array, $top;
    }

    return @array;
}
```

As you can see, it lays out pretty clearly. But as we mentioned, we don't *really* need a separate function, and can inline everything, as done here by

[**Andinus**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/andinus/perl/ch-2.pl)

```perl
foreach (@B) {
    my @tmp = @A;
    foreach (1 ... scalar @tmp - $_) {
        unshift @tmp, pop @tmp;
    }
    print join(', ', @tmp), "\n";
}
```

By creating a temporary array they can easily restart the process, here curiously done to the right to the same effect. As we will see, almost everyone focused on creating arrays holding the correct *results*, rather than creating a specifically *left* rotation.

Even the temporary array isn't strictly speaking required, as demonstrated here by

[**Julio de Castro**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/juliodcs/perl/ch-2.pl)

```perl
sub rotate {
    my @A = (7, 4, 2, 6, 3);
    my @B = (1, 3, 4);
    for my $rot (@B) {
        say join q(, ), map { $A[($_ + $rot) % @A] } 0 .. @A - 1;
    }
}
```

the `map` function re-rolls the array on the fly in this impressively compact derivation of the form. That sub's the whole thing.

But that, too, is not of course the only way to go about this task.

## MANUFACTURE the CORRECT SEQUENCE

By careful examination of the arrays constructed, it's plain to see the new, rotated array as a rearrangement of the original, now starting at the given new index, proceeding to the end, followed by the remaining segment starting at 0. Instead of explicitly shifting the elements in a skeuomorphic approximation of a spinning wheel counter, what if we just constructed an array composed in the correct fashion instead, by whatever means?

[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/mohammad-anwar/perl/ch-2.pl)

provides us an example of this philosophy, using two iterators to selectively copy the elements of the input to an output array. The first iterator loops through the tail, from the given index on, then a second iterator adds the rest of elements at the head, from index 0 up to the splice.

```perl
foreach my $i (@$index) {
    my $array = [];
    foreach my $j ($i .. $#$source) {
        push @$array, $source->[$j];
    }
    if ($i > 0) {
        foreach my $k (0 .. $i-1) {
            push @$array, $source->[$k];
        }
    }
    push @$left_rotation, $array;
}
```

Pretty easy, right? The back goes to the front, the front to the back. Easy peasy.

If only we had a tool for that... I kid, of course we do; a few in fact. What we described just now is splicing an array, so why not use that? When we described Mohammad's discreet iterators, we even used the word "splice", right there at the end.

### use SPLICE

[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/lubos-kolouch/perl/ch-2.pl)

does just that, supplying the following tidbit:

```perl
@new_arr = (splice(@arr_copy, $first), @arr_copy);
```

This is the driver for the action, with `$first` being the given index. `splice` cuts the array before `$first`, removing and returning the segment from that index to the end. That is paired in a new array followed by the remains of the original `@arr_copy` to make the

[**Shawn Wagner**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/shawn-wagner/perl/ch-2.pl)

does much the same thing with his `rotate_left()`:

```perl
sub rotate_left :prototype(\@$) {
  my ($A, $idx) = @_;
  my @A = @$A;
  my @left = splice @A, 0, $idx;
  push @A, @left;
  return \@A;
}
```

He follows with a `rotate_left_multi()` function, that applies `rotate_left()` to the input using each element of @B in turn.


### REARRANGE the array using one or more SLICES
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/abigail/perl/ch-2.pl),
[**Anton Fedotov**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/anton-fedotov/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/athanasius/perl/ch-2.pl),
[**Bob Lied**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/bob-lied/perl/ch-2.pl),
[**Dave Cross**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/dave-cross/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/polettix/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/james-smith/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/laurent-rosenfeld/perl/ch-2.pl),
[**Markus Holzer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/markus-holzer/perl/ch-2.pl),
[**Myoungjin Jeon**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/jeongoon/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/perlboy1967/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/pete-houston/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/roger-bell-west/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/sgreen/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/ulrich-rieke/perl/ch-2.pl),
[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/walt-mankowski/perl/ch-2.pl),
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/wanderdoc/perl/ch-2.pl), and
[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/colin-crain/perl/ch-2.pl)

Which brings us finally to the star of the show. When dealing with rearranging array elements, or taking views of arrays if you will, there is a very powerful tool available in the form of array slices. By simply establishing a sequence of indices within brackets, any arbitrary list rearrangements are possible. The only requirement is that the expression within the brackets resolves to a list of indexes.

For many people, myself included, this was the go-to method.

Simply put, the two parts of the `splice` methods above can be replaced with slices instead. Here

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/e-choroba/perl/ch-2.pl)

wraps the whole thing up in a `map` to do everything in one statement

```perl
sub left_rotation {
    my ($list, $rotations) = @_;
    return [ map {
        [ @$list[$_ .. $#$list], @$list[0 .. $_ - 1] ]
    } @$rotations ]
}
```


It really does make things easy. In another example

[**Anton Fedotov**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/anton-fedotov/perl/ch-2.pl)

reduces the logic to a single line:

```perl
for (@B) { say join ' ', (@A[$_..$#A],@A[0..$_-1]) };
```

After this, you may wonder where else we can go? Well one point worthy of reiterating is that whatever goes in the index brackets need only resolve to a list of indices. This not only includes ranges as we see above, but also lists, single values, list of ranges, and even calculated values and all listy combinations of these. Which is turn means there's no reason to use two slices at all.

Have a look at
[**Abigail's**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/abigail/perl/ch-2.pl)
version:

```perl
foreach my $index (@B) {
    local $, = " ";
    say @A [$index .. @A - 1, 0 .. $index - 1];
}
```

Oh, and that little trick he's pulling there with `$,` is messing with the "output field separator"; setting it to a single space inserts that character between each element in the array being printed. Nice.

While we're on the subject,

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/james-smith/perl/ch-2.pl)

uses the ["babycart"](https://metacpan.org/pod/distribution/perlsecret/lib/perlsecret.pod) operator to much the same end, to force list interpolation of the array before printing.

```perl
print "  [@{[ @{$a}[ $_..(@{$a}-1), 0..($_-1) ] ]}]\n" foreach @_;
```

It does end up a little noisy, with all that referencing and dereferencing going on, I must admit. He's taking a complex slice of an array reference, then referencing that list in an anonymous array, then dereferencing that again (forcing list interpolation), then, just to add an extra level of prettiness and confusion, surrounds the result in a pair of square brackets that are literally just a pair of square brackets. Ahh, prettiness and confusion. Sounds like a band I was in once. Good times.

There were even a few more noteworthy related variants on the basic idea of slices, working around the idea of selecting an offset list.

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/roger-bell-west/perl/ch-2.pl)

Roger uses a single slice, but in his case he's first doubled a copy of the input array to draw from, concatenating them one after the other. Now all he need do is select the correct number of elements starting at a specified offset. The `my @t=(@{$a},@{$a});` line is a cool trick that avoids introducing bugs from any index calculations.

```perl
sub leftrot {
    my $a = shift;
    my $b = shift;
    my $l = scalar( @{ $a } )-1;
    my @t = ( @{ $a }, @{ $a } );
    my @o;
    foreach my $c ( @{ $b } ) {
        push @o, [@t[$c..$c+$l]];
    }
    return \@o;
}
```

and finally

[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/wanderdoc/perl/ch-2.pl)

addresses this idea as well, but constructing his list of indexes for the slice by adding the offset and applying a modulo to the array length, accomplishing the same end.

```perl
sub rotate_left
{
     my ( $aref, $num) = @_;
     return @$aref[ map { ($_ + $num) % @$aref} 0 .. $#$aref ];
}
```





## UNIQUE approaches and other THINGS THAT CAUGHT MY EYE



[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/cheok-yin-fung/perl/ch-2.pl)

CY appears to have taken this potentially rather simple challenge as an excuse to pursue a little adventure in data modeling. That is, given the task of "rotating" a list, well that list should be circular, no? So she has opted to use `Struct::Dumb` to help her construct a circular linked list. Ok. It's kind of taking the long way around but why not? It is circle in the end...

Once she's constructed her list, rotation is as simple as traversing it up to the offset and printing the elements starting from that point. I  think the more interesting code chunk here is the creation of the circular list in the first place:

```perl
sub create_circ_list {

    my @v = @_;
    my $sizev = scalar @v;

    my $head = Node( val => $v[0], next => undef );
    my $coming = \($head->next);
    my $node;

    for (1..$sizev-2) {
        $node = Node( val => $v[$_], next => undef );
        $$coming = $node;
        $coming = \($node->next);
    }

    my $endnode = Node( val => $v[$sizev-1], next => undef);
    $$coming = $endnode;
    $coming = \($endnode->next);
    $$coming = $head;

    return \$head;
}
```



[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/jo-37/perl/ch-2.pl)

In another victory for the PDL, Jorg provides us a three line solution bulked up by extensive commenting.

I always approve of commenting. I'll let him explain things.

```perl
use PDL;

sub multi_rotate {
    # convert 1st arg to a piddle
    my $a = long(shift);
    # 2nd arg: pack the array elements into arrays of length one.
    my $b = [map [$_], @{(shift)}];

    # The range method returns rectangular parts of the input piddle
    # starting at the given positions.  With the full length of $a as
    # the parts' length and periodic boundary conditions it actually
    # performs multiple rotations just as required by this task.  The
    # source dimension needs to be moved to the front.
    $a->range($b, $a->dim(0), 'periodic')->reorder(1, 0)->unpdl;
}
```

I remain impressed by Perl's grand data language project. Munge away, Jorg, munge away.


[**Nuno Vieira**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/nunovieira220/perl/ch-2.pl)

Nuno's vision caught my eye because they were the only soul who braved the problem in the most literal way possible: that is to say keeping track of the bookkeeping to rotate the original starting list, then rotate that same list again the correct number of times to reorient the leading element. Something inside me says that that very literal interpretation may have been the intent all along, I don't know. Rather than start again with a fresh copy of the array, with this approach we need only carry over a second offset between transformations. The math isn't particularly hard or anything, but it's a clever solution keeping track of the `$jump` value; it's noteworthy no one else tried this.

It's all contained in a single loop, over the `@B` array; in this method we rotate the array, print it, and then rotate it again until done.

```perl
for my $i ( @B ) {
    my $jump = $i - $index;

    for( my $j = 0; $j < $jump; $j++ ) {
        my $val = shift @A;
        push @A, $val;
    }

    $index += $jump;

    # Output
    my $res = join ", ", @A;
    print $res."\n";
}
```

---

<br>

# BLOGS {#PWC078BLOGS}

***

**That's it for me this week, people! Undaunted, I have maintained. Looking forward to when next massive influx, I am your humble servant.**

## But if Your *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC078BLOGS}
## then *RUN* *(dont walk!)* to the *WATERING HOLE*
## and *READ* these *BLOG* *LINKS*:

***( don't think, trust your training, you're in the zone, just do it ... )***


**Adam Russell**

 * [Perl Weekly Challenge 078 - RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/2020/09/20#pwc078) ( *Perl* )

**Andinus**

 * [Challenge 078 - Task 1 - Leader Element](https://andinus.tilde.institute/pwc/challenge-078/#org6981fcd) ( *Perl* )
 * [Challenge 078 - Task 2 - Left Rotation](https://andinus.tilde.institute/pwc/challenge-078/#org473ab7c) ( *Perl* )

**Andrew Shitov**

 * [The weekly challenge 078: Leader element and Left rotation](https://andrewshitov.com/2020/09/14/the-weekly-challenge-078/) ( *Raku* )

**Arne Sommer**

 * [Rotating Leader with Raku and Perl](https://raku-musings.com/rotating-leader.html) ( *Perl & Raku* )

**Colin Crain**

 * [Follow the Leader and Swing to the Left - Programming Excursions in Perl and Raku](https://colincrain.wordpress.com/2020/09/18/follow-the-leader-and-swing-to-the-left/) ( *Perl & Raku* )

**Flavio Poletti**

 * [Leader element - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2020/09/18/pwc078-leader-element/) ( *Perl* )
 * [PWC - Left Rotation - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2020/09/19/pwc078-left-rotation/) ( *Perl* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 78: Leader Element and Left Rotation](http://blogs.perl.org/users/laurent_r/2020/09/perl-weekly-challenge-leader-element-and-left-rotation.html) ( *Perl & Raku* )

**Mohammad S Anwar**

 * [BLOG: The Weekly Challenge #078](https://perlweeklychallenge.org/blog/weekly-challenge-078/) ( *Perl & Raku* )
 * [Perl Weekly Challenge - 078 (Task #1: Perl) - YouTube](https://www.youtube.com/watch?v=EmZ8rzgLXp0) ( *Perl & Raku* )
 * [Perl Weekly Challenge - 078 (Task #2: Perl) - YouTube](https://www.youtube.com/watch?v=zXvirywoA58) ( *Perl & Raku* )

**Richard Park**

 * [Perl Weekly Challenge - Week 78 in APL - YouTube](https://www.youtube.com/watch?v=hRKRT3wCLrA) ( *APL* )

**Roger Bell_West**

 * [RogerBW&#39;s Blog: Perl Weekly Challenge 78: Leaders and Rotation](https://blog.firedrake.org/archive/2020/09/Perl_Weekly_Challenge_78__Leaders_and_Rotation.html) ( *Perl & Raku* )

**Shahed Nooshmand**

 * [The Weekly Challenge: week 78](https://rafraichisso.ir/2020/09/16/pwc-78) ( *Raku* )

**Simon Green**

 * [The Weekly Challenge 078](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/sgreen/README.md) ( *Perl* )

**Walt Mankowski**

 * [Perl Weekly Challenge #78](http://www.mawode.com/blog/blog/2020/09/14/perl-weekly-challenge-78/) ( *Perl* )
