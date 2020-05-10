---
title: "BLOG: The Weekly Challenge #059"
date: 2020-05-10T00:00:00+00:00
description: "Blog for the weekly challenge #059."
type: post
image: images/blog/weekly-challenge-059.jpg
author: Mohammad S Anwar
tags: ["Perl", "Raku"]
---

# HEADLINE

This week, I changed the format of my weekly blog slightly. Why? Well, I wanted to keep the **Perl** and **Raku** solutions next to each other so that it is easier for reader (**me, mostly**) to see the difference. It gives me immense pleasure to see the end result when I am done translating **Perl** solutions into **Raku**. It looks lot cleaner and precise. The only thing it is behind is performance when I do comparison. For that I would blame myself partly as I am still learning the magic of **Raku**. For now, my objective is to wire my brain according to the rules of **Raku**. Once it is wired properly and stable then I would start playing the trick with it. That is the plan, how far I am going to succeed is another matter. I am not in rush to be honest. The central **[GitHub Repository](https://github.com/manwar/perlweeklychallenge-club)** is the collection of many gems by so many **Raku** experts. I know for sure, if I struggle in future then I can easily look for better solutions in the bank.

I noticed more and more **Team PWC** members blogging about their solutions these days. For me it is a bonus as I could easily find the explanation if I don't understand any bit. In fact, I read the blog first before checking out the solutions. I enjoy the story behind each solutions and the journey itself. Everyone has a unique style, I don't get bored reading the blog. There are a bunch of **Raku** experts active on official **[Twitter handle](https://twitter.com/PerlWChallenge)** who share top of the range solutions. I must confess that I don't understand everything in the first attempt. If I am still struggling after a while, I just throw the question back and get an instant answer. The best part of this conversation is that I get different solutions by other experts as well. I am so grateful to all of them (you know who I am talking about).

Let me share my solutions to the **Perl Weekly Challenge - 059**.

***

## TASK #1 › Linked List

#### Reviewed by Ryan Thompson

You are given a linked list and a value *k*. Write a script to partition the linked list such that all nodes less than *k* come before nodes greater than or equal to *k*. Make sure you preserve the original relative order of the nodes in each of the two partitions.

***

It is considered that **Task #1** is for the beginners and should be easier than **Task #2**. But the reality is that I struggled very badly for one reason, I didn't want to write **Linked List** code. I was looking for shortcut so that I could just process the list by applying brute force method. If you look at the **sub split_list()**, it is obvious that it came from text book straight away. I am happy that it is simple and does the job.

```perl
sub split_list {
    my ($L, $K) = @_;

    my $before = [];
    my $after  = [];
    foreach my $i (@$L) {
        if ($i < $K) {
            push @$before, $i;
        }
        else {
            push @$after, $i;
        }
    }

    return [ @$before, @$after ];
}
```

Now it is time to translate the above **Perl** subroutine into **Raku**. With the **Raku** knowledge I have gathered so far, it was quick and easy to get it done. However, I would like to point out few bits for my own sake, if I ever re-visit my own blog for some explanation.

Please excuse me if my explanation is not quite there. I am happy to correct myself, if you could please point out any error.

I used `|$L` to expand the list of numbers so that I can easily loop through. I know there are other ways of doing this but I like `|$L` as it looks different. Also I used new style of push elements to an array. Before I used to do `$array.push($element)` but now I do `$array.push: $element`. Doesn't it look nicer?


```perl6
sub split-list($L, $K) {

    my $before = [];
    my $after  = [];
    for |$L -> $i {
        if $i < $K {
            $before.push: $i;
        }
        else {
            $after.push: $i;
        }
    }

    return [ |$before, |$after ];
}
```

Now time to build standalone app to test the code. To keep it simple, I have harded code the input in the source code as given in the task description.Once the input sorted then it just becomes simple call to the **sub split_list()** and you have the result.

```perl
my $L = [ 1, 4, 3, 2, 5, 2 ];
my $K = 3;
my $O = split_list($L, $K);

print sprintf("Input:  [ %s ]\n", join (" -> ", @$L));
print sprintf("Output: [ %s ]\n", join (" -> ", @$O));
```

For **Raku**, I always put everything inside the **sub MAIN()**. To display the result, I just used the method `join()` on the list. I just love it. Did you notice, I didn't have to end the result with newline character? `say` does it automatically for me. I love you **Raku**.

```perl6
sub MAIN($L = [ 1, 4, 3, 2, 5, 2 ], $K = 3) {

    my $O = split-list($L, $K);
    say sprintf("Input:  [ %s ]", $L.join(" -> "));
    say sprintf("Output: [ %s ]", $O.join(" -> "));
}
```

To complete the task, let us do basic unit test. I do it so that it becomes my habit to write unit test for every solutions. With the help of **CPAN** modules like `Test::More` and `Test::Deep`, it becomes so lightweight, with just one use case. I know I am being very very lazy. If you really want to see the full scale of unit test then please follow the solutions by **[E. Choroba](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-059/e-choroba/perl/ch-1.pl)**.

```perl
use Test::More;
use Test::Deep;

is_deeply(split_list([ 1, 4, 3, 2, 5, 2 ], 3), [ 1, 2, 2, 4, 3, 5 ]);

done_testing;
```
If you thought, **Perl** unit test was light weight solution then what would you say about **Raku** solution below?

I didn't have to import any external library other than the standard `Test`. I could have avoided the `done-testing` by adding line `plan 1;` just after `use Test;`. But I liked `done-testing` way of closing the test as I can add more and more test cases in future without having to edit the plan.

```perl6
use Test;

is-deeply split-list([ 1, 4, 3, 2, 5, 2 ], 3), [ 1, 2, 2, 4, 3, 5 ];

done-testing;
```

***

## TASK #2 › Bit Sum

#### Reviewed by Ryan Thompson

***

For this task, you will most likely need a function f(*a,b*) which returns the count of different bits of binary representation of *a* and *b*.

You script should accept *n* positive numbers. Your script should sum the result of f(*a,b*) for every pair of numbers given.

***

I found this task easier than the **Task #1**, odd isn't it?

I would say my brain quickly found the way around the task so I jumped on it to get it done and dusted. Once again, **CPAN** module `Algorithm::Combinatorics` helped me generating possible pairs from the given list. For this task I created **sub s()** and **sub f()**. Although **sub s()** wasn't necessary as task only required to define **sub f()**. I did it any way so that I can use it when testing the code.

```perl
sub s {
    my ($A) = @_;

    my $sum = 0;
    foreach my $pair (combinations($A, 2)) {
        $sum += f(@$pair);
    }

    return $sum;
}
```

```perl
sub f {
    my ($a, $b) = @_;

    $a = sprintf("%b", $a);
    $b = sprintf("%b", $b);

    my $m = length($a) > length($b) ? length($a) : length($b);
    my $f = '%0'.$m.'d';
    my @a = split //, sprintf $f, $a;
    my @b = split //, sprintf $f, $b;

    my $bits = 0;
    foreach (0..$m-1) {
        $bits += 1 if ($a[$_] != $b[$_]);
    }

    return $bits;
}
```

For **Raku**, no need for external library, we already have builtin method `combinations()`. I must tell you this is not the only way you can do it. If you are keen to know other ways of dealing with it, then please follow fellow **Team PWC** members **[solutions](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-059)**.

```perl6
sub s($A) {

    my $sum = 0;
    for $A.combinations(2) -> $pair {
        $sum += f($pair[0], $pair[1]);
    }

    return $sum;
}
```

In the **sub f()**, I have used `base()` for the first time. It is cleaner and readable. I also used `max()` to find the longer binary string. I loved it. Then another magic `comb()` to spit out individual bits from the binary string. Rest is just a plain smooth ride.

```perl6
sub f(Int $a, Int $b) {
    my Str $a_binary = $a.base(2);
    my Str $b_binary = $b.base(2);

    my $m = max($a_binary.chars, $b_binary.chars);
    my $f = '%0' ~ $m ~ 'd';
    $a_binary = sprintf($f, $a_binary);
    $b_binary = sprintf($f, $b_binary);
    my @a = $a_binary.comb;
    my @b = $b_binary.comb;

    my $bits = 0;
    for 0..$m-1 -> $i {
        if @a[$i] !== @b[$i] {
            $bits += 1;
        }
    }

    return $bits;
}
```

Lets create the standalone app for the task. Technically it is one liner with  the help of **sub s()**.

```perl
use Algorithm::Combinatorics qw(combinations);

print &s([2, 3, 4]);
```

Even **Raku** is not far behind either.

```perl6
sub MAIN($A = [2, 3, 4]) {
    say s($A);
}
```

I would get the unit test as well now with just couple of use cases, sorry :-(

```perl
use Test::More;

use Algorithm::Combinatorics qw(combinations);

my $unit_tests = [
    { in => [1, 2, 3], out => 4 },
    { in => [2, 3, 4], out => 6 },
];

foreach my $unit_test (@$unit_tests) {
    is (&s($unit_test->{in}), $unit_test->{out});
}

done_testing;
```

Here is **Raku** equivalent.

```perl6
use Test;

my $unit_tests = [
    { in => [1, 2, 3], out => 4 },
    { in => [2, 3, 4], out => 6 }
];

for |$unit_tests -> $unit_test {
    is s($unit_test.{"in"}), $unit_test.{"out"};
}

done-testing;
```

***

That's it for this week. Speak to you soon.
