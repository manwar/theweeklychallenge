---
title: "Advent Calendar - December 13, 2020"
date: 2020-12-20T00:00:00+00:00
description: "Advent Calendar - December 13, 2020."
type: post
image: images/blog/2020-12-13.jpg
author: Bartosz Jarzyna
tags: ["Perl"]
---

[**Advent Calendar 2020**](/blog/advent-calendar-2020)
***

The gift is presented by **Bartosz Jarzyna**. Today he is talking about his solution to the task `Majority Element` of **["The Weekly Challenge - 074"](/blog/perl-weekly-challenge-074)**. This is re-produced for **Advent Calendar 2020** from the original [**post**](https://brtastic.xyz/blog/article/perl-weekly-74) by **Bartosz Jarzyna**.

***

I've spotted this week as a great opportunity to test my own [**Quantum::Superpositions::Lazy**](https://metacpan.org/pod/Quantum::Superpositions::Lazy) module while doing some coding challenges. The module has just been released to CPAN this month and I'm eager to dogfood it as much as possible to ensure the quality. A little spoiler: the results are much better than expected.

Read on to see why.

An easy enough task on its own - we just have to find out if there's an element in the array that occurs more often than 50% of times. The actual equation given is over `floor(size_of_list / 2)` times, but that is irrelevant because even for uneven list it has to simply be above 50% and math will work the same. Why not make it easier with some quantum-like magic?

A superposition is more or less just a multi-value container. In my take on this, that container has also two important characteristics which are going to be very helpful:

##### it handles weights and probabilities
##### it has its own statistics module bundled up

So, how would you implement the task with no modules?

Simple! Just grab the array, set up a hash to count the occurrences of elements, loop through the array and fill up the hash, get the biggest value from the hash and return its key if it passes the threshold.

No, wait, that seems a bit too imperative and "raw", let's think of something different.

How about sorting the array so that the elements of same value are adjacent and then replacing the X adjacent elements with a single element containing the count and the value, sorting again by count and getting the first element's value?

That's certainly clever, but sounds like a lot more work for such a simple task.

In the end, with the right tool, all you need is this:

```perl
my $list = superpos(@_);
my ($state) = $list->stats->most_probable->states->@*;

return $state->weight > 0.5 ? $state->value : -1;
```

After creating the superposition from the input data, we can immediately access its most probable outcomes via the stats object. Superpositions automatically merge the outcomes of same value, summing their probabilities, so if one element is more frequent it will have a higher probability.

The $state value now contains the first of the states which have the same most probability. The result of the `most_probable` is not as an array but a new superposition object. Probabilities of its states will have a sum equal to the calculated probability they had in the original superposition. We actually don't need this object in this setup, so we can immediately call `->states->@*` to get all of its states as an actual **Perl** array.

We don't even have to check the number of elements in this setup, since it's impossible for an element to have over 0.5 weight if both of them are more probable. But to be fair, this is the perfect example for the usage of `Quantum::Superpositions::Lazy` module, so it really shines here.

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

[**Advent Calendar 2020**](/blog/advent-calendar-2020)
