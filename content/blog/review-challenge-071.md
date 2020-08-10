
---
author:       Colin Crain
date:         2020-08-09T00:00:00
description:  "Colin Crain › Perl Weekly Review #071"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #071"
image:        images/blog/p5-review-challenge-071.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-070/).* )

Welcome to the Perl review for **Week 071** of the Weekly Challenge! Here we will take the time to discuss the  submissions offered by the team, factor out the common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

Or really, talk about pretty much anything that stands out as remarkable or noteworthy.

Every week there is an enormous global collective effort made by the team, analyzing and creatively coding the submissions, and that effort deserves credit due. And that's why I'm here, to try and figure out how to do that.

Let's have a look and see what we can find.

---

**<big>For context</big>**  before we begin, you may wish to revisit either of the pages for the [**original tasks**](/blog/perl-weekly-challenge-071/) or the summary [**recap**](/blog/recap-challenge-071/) of the challenge. But don't worry, the challenges themselves will be briefly summarized, presented below as we progress from task by task. Oh, and one more thing before we get started:

### Getting in Touch with Us

<a href="mailto:pwc.perfectwave.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

**So finally, without further ado...**

---

# •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC071TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC071TASK2)   &nbsp;  &nbsp;  &nbsp;       •   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC071BLOGS)    &nbsp;  &nbsp;  &nbsp;       •

---

# TASK #1 › Peak Element {#PWC071TASK1}
You are given positive integer $N (>1).
Write a script to create an arr of size $N with random unique elements between 1 and 50.
In the end it should print peak elements in the arr, if found.
An arr element is called peak if it is bigger than it’s neighbour.

Example 1
```
    Array: [ 18, 45, 38, 25, 10, 7, 21, 6, 28, 48 ]
    Peak:  [ 48, 45, 21 ]
```
Example 2

```
    Array: [ 47, 11, 32, 8, 1, 9, 39, 14, 36, 23 ]
    Peak:  [ 47, 32, 39, 36 ]
```


## Solution Types:

Comparing an individual array element to its neighbors is a very basic action when we have full access to its index and those around it; indexed addressing is perhaps *the* fundamental quality of a Perl array. One might say an array is a list that knows its length -- this is a fine summary of the distinction but the ideas of length and indexing are fundimentally linked. Once we have the index of an element we can apply mathematical operations to determine the relative locations of the elements around it, and for the comparative act an element is the same as any other scalar container, holding either a scalar value or a reference to another variable. Once we can address an element there is no difference.

As such the logic behind

(A<sub>n-1</sub> < A<sub>n</sub>) ∧ (A<sub>n</sub> > A<sub>n+1</sub>)

is pretty fixed. Not that some of you weren't unable to come up with some pretty creative ways to go about it, but on the whole there was a lot of self-similarity in the submissions. The differentiation came mostly in two areas: the creation of the unique list itself, and the manner in which the endmost elements were dealt with. And of course there were a few completely unique approaches, and we'll be sure to talk about them.

Not too many bugs on this one. A minor indexing count error here, a forgotten line there. Pretty basic stuff and not worth mentioning. But they're there.

I completed this task once and on review noticed repeat values in my output. Thinking about this I decided why did it matter whether the values were unique? What does that have to do with whether it's peak or not? Well it doesn't of course, at all. But then I did re-read the challenge and noticed the directive was there, and had to go back and make it so, because, well, sometimes I don't have to know *why*, only *what*. Why is good, mind you. Why is very, very good. But sometimes we just don't get a reason for things. We can't hold up life waiting for things that might never happen.

## creating a UNIQUE, RANDOM LIST

The most common way to create a random list was to create an array of elements from 1 to 50 and apply `List::Util`'s `shuffle()` function, then extract an array of the requested size using either `splice` or an array slice. This is directly analogous to taking a deck of cards, shuffling them, and then dealing out a hand, and is shown here typified by
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-071/wanderdoc/perl/ch-1.pl):

```perl
my @array = 1 .. 50;
my @selection = (shuffle @array)[0 .. $N - 1];
```

An interesting twist on using this module is that List::Util provides an all-in-one solution right out of the box, in the form of the perhaps little-known `sample()` routine.

>Randomly select the given number of elements from the input list. Any given position in the input list will be selected at most once.

Here
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-071/athanasius/perl/ch-1.pl)
provides an example,

```perl
my @array = sample $N, 1 .. $MAX;
```
One can see it does the job quite well. I say 'little-known' because they were the only one to use it.

To each their own. Seems to me it might be quite handy. All told,
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-071/e-choroba/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-071/jo-37/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-071/roger-bell-west/perl/ch-1.pl), and
[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-071/walt-mankowski/perl/ch-1.pl)
all went to List::Util for their shuffling and sampling needs.

For those who didn't feel the need to bring in a module that day, the next most common method was to randomly draw out indices from a diminishing pool of options. I thought I had made up this trick myself back in PWC 52, but who knows? I sure don't. In any case it's a cool trick. The idea is to randomly select an index from 0 to the size of the pool, then use splice to remove that element and attach it to the output array. The pool shrinks to contain only unpicked elements and the range of the random pick is shrunk alongside. As the pool always only contains unpicked elements, uniqueness is guaranteed throughout.

### [**Bob Lied**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-071/bob-lied/perl/ch-1.pl)
here demonstrates the technique quite nicely:

```perl
for my $n ( 1..$size )
{
    push @result, splice(@chooseFrom, int(rand(@chooseFrom)), 1)
}
```

[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-071/perlboy1967/perl/ch-1.pl) and
[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-071/colin-crain/perl/ch-1.pl) both also employ this trick.

A very common idiom for selecting unique items from a list is to grep the list for elements not already seen in a hash, all while building the hash of seen elements as we go. From the [Perl Cookbook](https://www.oreilly.com/library/view/perl-cookbook/1565922433/ch04s07.html):

```perl
%seen = ();
@uniqu = grep { ! $seen{$_} ++ } @list;
```

Extending this idea to the current task we can randomly select elements from a pool of options and pass over elements that we have already picked.
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-071/laurent-rosenfeld/perl/ch-1.pl)
uses this technique,

```perl
while (%unique < $n) {
    my $element = int(rand(50) + 1);
    push @items, $element unless exists $unique{$element};
    $unique{$element} = 1
}
```

as do
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-071/cheok-yin-fung/perl/ch-1.pl) and
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-071/mohammad-anwar/perl/ch-1.pl)

One could also consider
[**Dave Jacoby's**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-071/dave-jacoby/perl/ch-1.pl) solution, using grep instead of a hash, and
[**Jaldhar H. Vyas's**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-071/jaldhar-h-vyas/perl/ch-1.pl), which `undef`s the elements as they are picked,
to be variants on this technique.

The only problem I have in proceeding this way in general is that for large pools and picks that approach the pool size, the odds steadily decrease as the exclusion group increases. Take for example drawing 1000 lots from a pool of 1000.  As we get closer to finishing the draw, the odds of randomly selecting the last remaining elements steadily decline until we're drawing over and over looking for that last 1 in 1000 chance to win.

On the other hand, in less pathological scenarios I'm sure that drawing 10 picks from a pool of 50 will only have a slightly more than even chance of requiring a single redraw. So this method really is just fine for our task here, and saves any overhead from shuffling.



2. making COMPARISONS at the ends of the array

Iterating through the array by index, comparing each element to its neighbors above and below is only really complicated by the two ends of the array; in these boundary cases there is only one element to compare to. For the end of the array, autovivification will give us an undefined element if we ask for the end index plus one, but for index 0 subtracting 1 will give us index -1, the end of the array, which is not what we want at all.

The most common way, quick and easy, would be to make three cases:

* `a[0] > a[1]` for the beginning
* `a[end-1] < a[end]` for the end

and

* `a[n-1] < a[n] < a[n+1]`

for all the rest.

Here
[**Javier Luque**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-071/javier-luque/perl/ch-1.pl)
implements things this way:

```perl
# Check left most peak
push @peaks, $values[$i - 1]
    if ( $i == 1 &&
         $values[$i - 1] >  $values[$i] );

# Check middle peaks
push @peaks, $values[$i - 1]
    if ( $i > 1 &&
         $values[$i - 1] >  $values[$i] &&
         $values[$i - 1] >  $values[$i - 2]);

# Check last peaks
push @peaks, $values[$i]
    if ( $i == $N - 1 &&
       $values[$i] > $values[$i - 1]);
```

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-071/athanasius/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-071/dave-jacoby/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-071/e-choroba/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-071/laurent-rosenfeld/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-071/mohammad-anwar/perl/ch-1.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-071/wanderdoc/perl/ch-1.pl) did as well.

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-071/roger-bell-west/perl/ch-1.pl)
could be considered to have an elegant variation on the three cases option, wrapping up his edge cases with logical ORs in a single combined comparison he can apply to every index. Here it is, spread out a bit for clarity.

```perl
foreach my $n ( 0..$#list ) {
    if ( ( $n == 0 || $list[$n]>$list[$n - 1] )
                &&
                ( $n == $#list || $list[$n]>$list[$n + 1] ) ) {
        push @out, $list[$n];
    }
}
```


But that was not the only way to do it. The range of the elements is well defined, so by bracketing our array in less-than-minimum values we need only use one comparison over all the original values in our array. The comparisons to the newly added elements will always succeed and we can go about our way.

### [**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-071/walt-mankowski/perl/ch-1.pl)
gives us a few things to look at. Notice the bracketing with 0s in `make_array`, and the clean lines of the comparison in `peaks`. Be aware this chaining of comparison operators is only newly available in Perl 5.32, but I for one welcome the addition. Sometimes just the little things can brighten up your day.

```perl
sub make_array($N) {
    my @a = shuffle 1..50;
    return (0, @a[0..$N-1], 0);
}

sub peaks(@a) {
    my @p;
    for my $i (1..$#a-1) {
        push @p, $a[$i] if $a[$i-1] < $a[$i] > $a[$i+1];
    }

    return @p;
}
```

[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-071/arne-sommer/perl/ch-1.pl) and
[**Bob Lied**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-071/bob-lied/perl/ch-1.pl) also bracketed their arrays.


One of the nice things about consolidating the comparisons into a single operation is that it makes it easy to apply them as a function over the list of values. For
[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-071/colin-crain/perl/ch-1.pl)
I use `grep` to apply the comparison block across the indices of the array as a filter, then use `map` to convert the indices back into values.

```perl
my @output = map  { $arr[$_] }
             grep { ($arr[$_-1] < $arr[$_] && $arr[$_] > $arr[$_+1]) }
             (1..@arr-2);
```

I imagine that now I have 5.32 installed (to check on Walt's solution), I should update that grep comparison with chained operators. That would make it even cleaner.

### [**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-071/perlboy1967/perl/ch-1.pl)
does something similar, but seems to have left off a line of his comparisons as written. I'm going to chalk it up to running with scissors and leave it at that.

Finally, a mention must be made of
### [**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-071/cheok-yin-fung/perl/ch-1.pl)
who does not need to address the ends of the list because she explicitly chooses to exclude those elements. It's not a mistake, as she purposefully avoids those indices:

```perl
for (1..$N-2) {
    checkpeak($_);
}

sub checkpeak {
    my $p = $_[0];
    if ($seq[$p-1] < $seq[$p] and $seq[$p+1] < $seq[$p]) {
        push @peak_eles, $seq[$p];
    }
}
```

I don't want to put words in her mouth, but where a comparison cannot be made, it cannot by definition be known, and thus it makes no sense to even check the end elements as the outcome is undefined. Although one of the examples appears to preclude it, I can see the case to be made to not assume that data beyond the array bounds to be *any* particular value. If we were examining a window in a data stream, for instance, this would be the correct assumption.

I've said it here before but I'm quite fascinated by communication and way different people can look at the same thing and walk away with such different perspectives.



## UNIQUE treasures and other SHINY OBJECTS

### [**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-071/jo-37/perl/ch-1.pl)

Taking the functional programming paradigm to the next level, Jorg has written his own version of `map`, `map3`, which reads on three elements of the input array at a time, while only advancing the index one at a time. In other words, it acts the same as the standard map, but also accesses the elements immediately before and after $_, so he can make the necessary comparisons.

```perl
sub map3 (&@) {
    my $code = shift;

    my ($prev, $current, $next, $i);
    map {
        ($prev, $current, $next) = ($current, $next, $_);
        ++$i > 2 ?
            do {local ($a, $_, $b) = ($prev, $current, $next); $code->()} :
            ();
    } @_;
}
```

### [**Myoungjin Jeon**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-071/jeongoon/perl/ch-1.pl)

Not content to simply make a series of simple comparisons, Jeon has decided to only look at the direction of change as he iterates across the list. He keeps a running tally of the movement up or down, determining that if delta that was ascending is followed by a delta descending, that element must be a local maximum.

He also makes his own shuffling for the random array, picking pairs randomly and switching them n^2 times. With 50 elements that means each element would be switched about 2/50 * 2500 = 100 times, which seems reasonable. We aren't rolling our own crypto function here, just shuffling an array.

 ---

# TASK #2 › Trim Linked List {#PWC071TASK2}
You are given a singly linked list and a positive integer $N (>0).
Write a script to remove the $Nth node from the end of the linked list and print the linked list.
If $N is greater than the size of the linked list then remove the first node of the list.
Please use pure linked list implementation.

Example

    Given Linked List: 1 -> 2 -> 3 -> 4 -> 5

    when $N = 1
    Output: 1 -> 2 -> 3 -> 4

    when $N = 2
    Output: 1 -> 2 -> 3 -> 5

    when $N = 3
    Output: 1 -> 2 -> 4 -> 5

    when $N = 4
    Output: 1 -> 3 -> 4 -> 5

    when $N = 5
    Output: 2 -> 3 -> 4 -> 5

    when $N = 6
    Output: 2 -> 3 -> 4 -> 5


# Solution Types:

There was a certain amount of pushback over the very idea of implementing a singly linked list in Perl, or if that idea was acceptable, then the idea of selecting a node by its positional aspect in the list. And all the more so to use a *singly*-linked list for this action.

I think there are very valid points to be made here, on all counts. There are undisputedly better ways to go about this task. Well certainly there are undisputedly *other* ways to go about things. But then again, we weren't called here to do other things, that will be for next week. This week we play with linked lists again, and take from it whatever we wish.

Considering that it was explicitly requested to use a "pure" linked list to do the job, and the obvious truth that Perl doesn't provide an integral data structure for it, there were as many different ways to implement this as there were submissions. Most, although not all, used some sort of object to abstract the idea, either their own or as provided by one of a number of modules. For modules we saw examples from [LinkedList::Single](https://metacpan.org/pod/LinkedList::Single), [Data::LinkedList](https://metacpan.org/pod/release/LLOYDG/Data-LinkedList-0.01/lib/Data/LinkedList.pm), and [Struct::Dumb](https://metacpan.org/pod/Struct::Dumb). For objects we saw the gamut of framework options: Moose, Mouse and Moo, in addition to the normal package definitions.

I mention not all submissions used a object, as a perfectly good list node can be created from a hash with two keys, for a data value and the next node reference. After all, pretty much every Perl object is just a hash with added magic, right? Right?
[**E. Choroba**](#ECHOROBATASK2) has entered the chat.

## Implementation of the Linked List Data Structure

The abstraction of the singly linked list requested was generally composed of a series of
Node objects, nominally contained within a LinkedList of some sort. Node objects know their data and a link, with methods to manipulate them. LinkedList objects know their start node, and have methods to add or remove nodes and whatever else a list might be expected to do.

This hierarchical structure is by no means required —
[**Dave Jacoby**](#DJACOBYTASK2),
[**E. Choroba**](#ECHOROBATASK2),
[**Mohammad S Anwar**](#MANWARTASK2) and
[**Walt Mankowski**](#WALTMANTASK2) got by with just a simple Node object.

[**Cheok-Yin Fung**](#CYFUNGTASK2) went even further, and did everything herself with just a series of small hashes.

## Calculation of Location of Node for Deletion, and Removing the Node

The fundamental quality of a singly linked list is that once can only look ahead, not back. As such to unlink a node one must know the location of the node one before the target node and link that to the node one after. In this way the target is patched around and has been set adrift without references.

Locating the node to be removed can be calculated by taking the list length and subtracting the position to be removed; this difference can be used to compute the number of steps down the list required to get to the right spot, be that the node or the node before the node, depending on the algorithm you are using. This was by far the most common method but there were alternate ways of going about this.

Removing the start node requires a bit of trickery as there is no node proceeding it; this is where having a Linked List container structure can really come in handy. The List object attribute pointing to the start node effectively becomes Node[0] in the list, and unlinking the first node becomes pointing that attribute to bypass this element, making the second node the first. This can be done without a LIst object of course, and a variety of schemes arose to accomplish this. Further, when the position to be removed is larger than the list length, some sort special case is needed to handle this behavior. Any position greater than the list length is treated as equal to the list length, triggering the removal of the head node.

There are a few contingency cases to be dealt with to get the desired behavior, but nothing too complicated, all in all.

There exists one more thing left undefined by the challenge as stated, and that is what to do with the unlinked node. Most everyone did nothing, but while unlinked, no thing is left linking to the node, unchanged this node will still point into the the list where it came out. Even unlinked completely is remains a bit of a memory leak until the script terminates. There were different existential approaches to this dilemma as well.





## A Brief Summary of Approaches with Color Commentary and Highlights

### [**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-071/athanasius/perl/ch-2.pl)

The monk Athanasius crafts us a nice minimal implementation of a linked list using Moose, augmented with Moose::Util::TypeConstraints to add some basic type checking, and some syntactic sugar with MooseX::LvalueAttribute, which simply allows one to write

    $obj->name = "new name"

to assign an attribute. I welcome this myself, as I always found

    $obj->name("new name")

awkward to scan, especially in a block with other assignments. I can see that [`MooX::LvalueAttribute`](https://metacpan.org/pod/MooX::LvalueAttribute) exists as well, and I'm totally having that. Sometimes it's the little things.

To determine the node to be removed, a running tally is kept as nodes are added or removed, so a little subtraction is all that is required to find the right position.

```perl
my $diff  = $list->elems - $N;
my $count = $diff < 0 ? 0 : $diff;
my $prev  = $list->head;
   $prev  = $prev->next for 1 .. $count;

$list->remove($prev)
     ->print("N = $N\nOutput");
```

There was a lot of the technique of methods returning the self object employed throughout people's solutions, which allows the nice method chaining we see in the last line above.



[### **Bob Lied**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-071/bob-lied/perl/ch-2.pl)

Bob gives us a pair of Moo objects, a Node, for data and links, and a SLList to keep track of metadata and methods it might want to perform, including keeping a running tally of the number of list elements as the list grows and shrinks. This value is essential to computing the location of the node we wish to remove.

```perl
sub trim
{
    my $self = shift;
    my ($n) = @_;

    my $walkThisFar = $self->size - $n;
    if ( $walkThisFar <= 0 )
    {
        $self->{head} = $self->head->next();
        $self->_smaller(1);
        return;
    }

    my $node = $self->head();
    while ( $walkThisFar-- > 1 )
    {
        $node = $node->next();
    }
    $self->removeNodeAfter($node);
}
```

`removeNodeAfter()` does what you think it should, bypassing around the designated node, but its noteworthy that the removed node is returned by the function. As you can see this is passed through `trim` as well, although from that point nothing is done with it. I like the ideal of designing beyond the immediate task at hand like this. It probably shouldn't be the function's job to decide what to do with the removed node, and this way the node can be repurposed elsewhere or explicitly destroyed as required.


### [**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-071/cheok-yin-fung/perl/ch-2.pl){#CYFUNGTASK2}

CY breaks from the pack and implements her entire list with linked hashes. After all, that and a little bookkeeping is all you need.

Once she has an input array converted into a series of hashes, each with a key pointing to the next hash, she takes this structure and loads the references into an array to determine the node to be deleted.

```perl
sub remove_ref_as_req {
    if ( $N > 1 ) {
        if ($N < $size) {
            undef ${$last_np1th_ref[1]};
            ${$last_np1th_ref[0]}->{_next} = ${$last_np1th_ref[2]};
        }
        else {
            undef $list->{_next};
            $list->{_next} = ${$last_np1th_ref[1]};
        }
    }
    else {
        undef ${$last_np1th_ref[1]};
        ${$last_np1th_ref[0]}->{_next} = undef;
    }
}
```

Knowing the reference to the node allows her to rewire around it, patching the list. The perl array is only used for the aforementioned bookkeeping.

### [**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-071/dave-jacoby/perl/ch-2.pl){#DJACOBYTASK2}

Dave gets around having to be one in front of the node to be removed by keeping track of the parent node as well as the next node. Correct me if I'm wrong, but I'm pretty sure we've just invented the doubly linked list. But no mind. "Starting with a singly linked list" and then immediately adding an additional parent link seems a perfectly reasonable way to proceed to me.

His `trim_list` does the heavy lifting of finding the length, walking to correct node and calling `remove` on it. Because he knows the parent node he can remove nodes in-place.

```perl
sub remove ( $self ) {
    my $parent = $self->{parent};
    my $next   = $self->{next};

    if ( defined $parent && defined $next ) {
        $parent->{next} = $next;
        $next->{parent} = $parent;
    }
    elsif ( defined $parent ) {
        $parent->{next} = undef;
    }
    elsif ( defined $next ) {
        $self->{value} = $next->{value};
        $next->remove;
    }
}
```

As he does not have a Linked List container for his Node objects, removing the first node is a little complicated. He gets around not having a parent node by replacing the value of the first node to that of the second, in essence redefining the node, then removing the second. Sneaky.


### [**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-071/e-choroba/perl/ch-2.pl){#ECHOROBATASK2}

Choroba gives us a brace of interesting objects, a base class `package My::PureNode` and a subclass `package My::Node::Trimmable` that adds a `trim()` method. The immediate unusual aspect of this object is that it's instantiated as a blessed array reference rather than a hash. It has only two attributes, a value and a next node, which although given accessor methods are internally stored as $obj->[0] and $obj->[1]. This is slightly faster on the lookup, albeit nothing spectacular, but significant. Small amounts do add up; directly referencing the parameters passed to a method also produces a small speedup, albeit at the cost of clarity. Here's his accessors:

```perl
    sub next  { $_[0][1] }
    sub value { $_[0][0] }
```

As you can see they are stripped to the bone. The core functionality is performed by this `trim()` function:

```perl
sub trim {
    my ($self, $n) = @_;
    my @buffer;
    my $w = $self;
    while ($w) {
        push @buffer, $w;
        shift @buffer if @buffer > $n + 1;
        $w = $w->next;
    }
    if (@buffer == $n + 1) {
        $buffer[0][1] = $buffer[2];
        undef $buffer[1][1];  # no memory leak
    } else {
        $_[0] = $buffer[1];
        undef $buffer[0][1];  # no memory leak
    }
}
```

Notice the care he takes to undef the removed nodes. I can't argue it's necessary in this limited scope, but in a larger environment this sort of thinking is very important.

### [**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-071/jaldhar-h-vyas/perl/ch-2.pl)

Jaldhar gives us a nice Moo-based LinkedList/LinkedList::Node combination. The business logic is laid out in a `trim` routine:

```perl
sub trim {
    my ($self, $n) = @_;
    my $i = $n > $self->{_count} ? 0 : $self->{_count} - $n; ## n larger than list

    if ($self->{_head} && $i == 0) {                ## remove head
        my $temp = $self->{_head};
        $self->{_head} = $self->{_head}->{_next};
        $temp = undef;
    } else {
        my $v = $self->{_head};
        my $c = 0;

        while ($v) {
            $c++;
            if ($c == $i) {                         ## at one ahead
                if ($v->{_next}) {
                    $v->{_next} = $v->{_next}->{_next};
                } else {
                    $v = undef;
                }
                last;
            }
            $v = $v->{_next};
        }
    }
}
```

where we determine the case to decide what to do: either remove the head or move forward length - n nodes and remove the next node, which is explicitly set to `undef`.

### [**Javier Luque**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-071/javier-luque/perl/ch-2.pl)

Despite a rather inexplicable choice to apply a `mod` operator on the list length to the input position, which takes values for N larger than the list length into cycles of rotation rather than landing on the first node, Javier has given us a nice solution based around a data structure of a `LinkedList` composed of `LinkedList::Node` objects, built on the `Mouse` framework.

The functionality is enabled by methods in the `LinkedList` object, specifically the `remove_node` method, which contains a loop that walks to the position in front of the target and removes it.

```perl
while ($node && $i <= $n) {
    if ($i == $n) {
        # First node
        ($last_node) ?
            $last_node->next($node->next) :
            $self->first($node->next);

        # Next node
        $node->next( ($node->next) ? $node->next->next : undef);
        last;
    }

    $last_node = $node;
    $node = $node->next;
    $i++;
}
```

Still not sure where he was going with that `mod` that but it's certainly too purposeful to be a bug; more like an adventure. Anyone have any ideas, I'm all ears.


### [**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-071/jo-37/perl/ch-2.pl)

Jorg starts us off with an off-the-shelf `LinkedList::Single` object — the challenge is about removing the n-th node, not so much about making the list itself. To determine node to be eliminated, he constructs a cool parallel list of the nodes in the original list as data. As the `LinkedList::Single::node` method is a setter/getter, this provides access to set the current node to be the one determined by the lookup. Then he can use the provided `cut` method to splice out the offending node.

A very slick method indeed. I've left in the comments to help follow the action.

```perl
sub remove_from_end {
    my ($list, $n) = @_;

    # Create a new singly linked list that will hold at most $n
    # "position pointers" into the original list.
    # The root node is special and is stored in the new
    # list's first node.
    my $record = LinkedList::Single->new($list->root_node);
    my $len = 1;

    # Process all nodes but the last from the original list.
    for ($list->head; $list->has_next; $list->next) {

        # Record the position.
        $record->push($list->node);

        # Discard the first recorded position if the maximum length
        # is exceeded.
        $record->shift if ++$len > $n;
    }

    # Retrieve the cut-node position from the first node of the record
    # list, reposition the original list and cut the next node.
    # If $n is large enough, the root_node is still the first node
    # of the record list causing the first node of the original list
    # to be cut.
    $list->node($record->head->node_data->[0]);
    $list->cut;

    $list;
}
```

### [**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-071/mohammad-anwar/perl/ch-2.pl){#MANWARTASK2}

Mohammad gives us a list of `Node` objects made using the `Moo` framework.

When traversing this list, Mohammad keeps track of both the current node and the node that brought him here, which he calls the tail. So his list is not doubly linked *per se*, as he only keeps this information for the currently looked at node and updates it as he moves along.  Thus all his logic is based around removing the current node in place, by linking its "tail" to the following node.

This `while` loop inside his `trim` routine lays out the logic well:

```perl
while ($tail->p) {
    if ($position > $count) {
        $node = $tail;
    }
    elsif ($position == $count) {
        if (defined $node) {
            # Remove current node by making the
            # parent of  current node as parent
            # of previous node
            $node->p($tail->p);
        }
        else {
            # If you're taking first from the end
            # then return the parent of last node
            return $tail->p;
        }
    }
    $tail = $tail->p;
    $count++;
}
# Take the first node off if and only if:
# a) you reached the first node or
# b) given position is more than the total nodes
$node->p(undef) if ($count <= $position);
```

### [**Myoungjin Jeon**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-071/jeongoon/perl/ch-2.pl)

Jeon obviously is having some fun with his linked list. He starts with a couple of packages, a `LinkedList` (I've take the liberty of capitalizing to CamelCase here, Jeon you might take note of the convention for readability) and a `LinkedList::Iterator`, what might more commonly called a `Node`.

I'm not sure if I can easily summarize his quite complicated solution; I think I'm going to have to punt on this one. It's... complicated, but it does work. The removal is done with this somewhat confusingly named `pop` function:

```perl
sub pop ( $;$ ) {
    return if scalar @_ == 1;

    my $class = blessed $_[-1];

    if ( defined $class and $class eq __PACKAGE__ ) {
        # pop the end
        return $_[0]->pop( $_[0]->count - 1 );
    }
    if ( defined $class and $class eq node_class_str ) {
        ::dprint "find the node and pop it from the list.\n";
        my $node;
        for ( $node = $_[0]->begin; defined $node; $node = $node->next ) {
            last if ( $node->next eq $_[-1] );
        }
        if ( not defined $node ) {
            warn "could not find the $_[-1] in the list: return undef";
            return undef;
        }
        my $bye   = delete $node->[1];
        $node->[1] = delete $bye->[1];
        return $bye;
    }
    elsif ( $_[-1] =~ /^(\+|-)?[0-9]+$/ ) {
        ::dprint "pop the node at index of $_[-1] from the list.\n";
        my $before;
        my $count = $_[0]->count;
        my $round = 0;

        if ( $_[-1] < 0 ) {
            my $idx = $_[-1];
            ::dprint ">>  this is a task2 solution\n";

            if ( -$idx > $count ) {
                ::dprint ">>>  always remove first node when index is".
                  " more than length of list.\n";

                $before = $_[0]->[0];
                ::dprint ">>>>  and I have shortcut:".$before->value.$/;
            }
            else {
                ::dprint ">>>  we have to find index before the node".
                  " which will be removed.\n";
                $round = -$idx;
                ::dprint ">>>>  index would be: $round\n";
            }
        }
        if ( not defined $before ) {
            $before = $_[0]->before_begin_;
            ( $before = $before->next ) while $round--;
        }
        my $bye = delete $before->[1];
        $before->[1] = delete $bye->[1];
        return $bye;
    }
    else {
        warn "invalid arguemnt for poping: ".($_[-1]//'<not given>');
        return undef;
    }
    die "this is a bug" if $::debugging;
}
```

Again he provides a very convenient --debug option at the command line that details verbose progress as he goes along.

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-071/colin-crain/perl/ch-2.pl)

For my own solution, I expanded the `Node`-based linked list I had been using earlier into a more robust `Moo` implementation with a `LinkedList` wrapper class. The node and List manipulation routines are now methods.

I was toying around with the idea of a linked list as an accesable data structure that doesn't need to know its length; one can manipulate the elements is a relative rather than an absolute fashion. As such just counting the nodes, doing a bit of subtraction and counting again from the beginning seemed an awkward solution that borders on cheating. I kept going back to the idea of using Perl's built in dynamic arrays for things like that. I know, I know, and I'll stop harping on it. Que sera sera.

If looked at the right way, counting from the end of the list could be considered a relative act as well, although finding the end and counting to the end seem pretty inextricably intertwined. The solution I landed on was an effort to resolve these self-imposed constraints.

Rather than explicitly count the nodes, I created a `lookahead` routine that, given the node and the input position, will look forward n number of nodes and report back what it finds: either the end of the list, more list continuing, or that the list has run out before n places can be traversed. As I put it elsewhere:

>"We ran out of road before looking far enough, and are now sailing headlong off into the Grand Canyon like Thelma and Louise."

Like the Perl comparison equality operators, the routine returns 1, 0, or -1. Given the result, we can determine whether to move forward a node and try again, remove the following node, or remove the head node.

```perl
sub lookahead {
## looks forward n nodes in list
## returns:  1 if node is not last node
##           0 if node is last node
##          -1 if list not long enough
    my ($self, $distance) = @_;
    if (! defined $self->next && $distance > 0) {
        return -1;
    }
    if ($distance == 0) {
        return $self->next ? 1 : 0;
    }
    return lookahead($self->next, $distance - 1);
}

my $node = $list->start_node;
while ( -looking_ahead ) {
    my $res = $node->lookahead( $n ) ;
    if ( $res < 1 ) {
        $res ==  0 && $list->remove_next($node);
        $res == -1 && $list->remove_head;
        last;
    }
    $node = $node->next;
}
```


### [**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-071/perlboy1967/perl/ch-2.pl)

The linked list package Niels is using, `Data::LinkedList`, is an implementation of the GNU Classpath LinkedList, and as such already comes with goodies like a `size` attribute. Being rather full-featured, it also comes with a `remove_at()` function which takes a 0-based index from the front of the list. Thus a little arithmetic is all we need to calculate the index of the offending node scheduled for termination.

```perl
sub removeAt ($$) {
  my ($myLL, $i) = @_;

  my $size  = $myLL->size;
  my $index = $size - $i > 0 ? $size - $i : 0;
  $myLL->remove_at($index);
}
```

The `remove_at()` method returns the data from the removed node, but in this case nothing is done with it.

### [**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-071/walt-mankowski/perl/ch-2.pl){#WALTMANTASK2}

Walt does not overly complicate things here, which to me can come as a breath of fresh air. With a minimum of fuss he establishes a Node object, links together a list of them while keeping track of the starting node, locates and unlinks the target node, and gets out.

```perl
make_list($head, 1..5);
print_list($head);
remove_from_end($head, $N);
print_list($head);
```

Just like that. The central routine is simplicity itself:

```perl
sub remove_from_end($head, $n) {
    # get to the position before the node to delete
    my $pos = list_length($head);
    my $node = $head;
    while ($pos > $n) {
        $node = $node->next;
        $pos--;
    }

    # remove it
    $node->set_next($node->next->next);
}
```

Don't get me wrong, I do enjoy piecing through some of the more obtuse methods, but it's also nice to see something just clearly, effectively laid out. It's a balance thing I suppose. And to the rest of you, remember comments are good (*thank you Jorg).

### [**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-071/wanderdoc/perl/ch-2.pl)

The Wanderdoc enjoys the lightweight simplicity of importing the `Struct::Dumb` module, which, as might be expected, provides a C-like `struct` data object. Apparently it uses arrays internally and so is quite fast, and does what it does and only what it does, which is to provide an object with named fields, not unlike a hash. Really, when it comes down to it, not very unlike a hash at all. But whatever, structs are cool, so if they want to use them, who am I to say anything?

To calculate the node to remove, the list is traversed and the nodes are unshifted onto a storage array as they come. This leaves the Node references in reverse order in the array. Allowing contingencies for removing the first node, the location of the node before the node to be removed is the index on this reversed array. The node reference is extracted and handed to a `_splice_node()` routine where the following link is bypassed and explicitly set to undef.

```perl
sub _splice_node
{
     my $node       = $_[0];
     my $first_node = $_[1] || 0;
     my $node_to_splice = $node->next;
     $node->val = $node_to_splice->val if $first_node;
     $node->next = $node_to_splice->next;
     $node_to_splice = undef;
}
```

The target node location is done in a Perl array, but the actual linked list manipulation is all effected within that data structure.

## BLOGS {#PWC071BLOGS}

***

**That's it for me this week, people!**

## If any of you need more to know more *RIGHT NOW*,
## then HURRY UP and read these BLOG LINKS:

***( don't think, trust your training, go in the zone, just do it ... )***


### Andrew Shitov
#### [Raku challenge week 71 &#8211; Andrew Shitov](https://andrewshitov.com/2020/08/01/raku-challenge-week-71/) ( *Raku* )

### Arne Sommer
#### [Peaked Trim with Raku & Perl](https://raku-musings.com/peaked-trim.html) ( *Perl* )

### Colin Crain
#### [Traversing Peaks for the Missing Link &#8211; Programming Excursions in Perl and Raku](https://colincrain.wordpress.com/2020/07/31/traversing-peaks-for-the-missing-link/) ( *Perl* )

### Dave Jacoby
#### [Perl Weekly Challenge #71: Peaks and Links | Committed to Memory](https://jacoby.github.io/2020/07/27/perl-weekly-challenge-71-peaks-and-links.html) ( *Perl* )

### Jaldhar H. Vyas
#### [Perl Weekly Challenge: Week 71](https://www.braincells.com/perl/2020/07/perl_weekly_challenge_week_71.html) ( *Perl* )

### Javier Luque
#### [PERL WEEKLY CHALLENGE &#8211; 071 &#8211; Perl Weekly Challenge](https://perlchallenges.wordpress.com/2020/07/27/perl-weekly-challenge-071/) ( *Perl* )

### Laurent Rosenfeld
#### [Perl Weekly Challenge 71: Peak Elements and Trim Linked List](http://blogs.perl.org/users/laurent_r/2020/08/perl-weekly-challenge-71-peak-elements-and-trim-linked-list.html) ( *Perl* )

### Luca Ferrari
#### [Perl Weekly Challenge 71: linked lists and peaking arrays - Task 1](https://fluca1978.github.io/2020/07/27/PerlWeeklyChallenge71.html#task1) ( *Raku* )
#### [Perl Weekly Challenge 71: linked lists and peaking arrays - Task 2](https://fluca1978.github.io/2020/07/27/PerlWeeklyChallenge71.html#task2) ( *Raku* )

### Mohammad S Anwar
#### [BLOG: The Weekly Challenge #071](https://perlweeklychallenge.org/blog/weekly-challenge-071/) ( *Perl* )

### Roger Bell_West
#### [RogerBW&#39;s Blog: Perl Weekly Challenge 71: peak elements (and Rallyman tracks)](https://blog.firedrake.org/archive/2020/07/Perl_Weekly_Challenge_71__peak_elements__and_Rallyman_tracks_.html) ( *Perl* )

### Walt Mankowski
#### [Perl Weekly Challenge #71 - Walt Mankowski](http://www.mawode.com/blog/blog/2020/07/31/perl-weekly-challenge-71/) ( *Perl* )
