---
author:       Ryan Thompson
date:         2020-03-01T00:00:00
description:  "Ryan Thompson › Raku Weekly Review #048"
tags:         ["raku"]
title:        "Ryan Thompson › Raku Weekly Review #048"
type:         post
image:        /images/blog/p6-review-challenge-048.jpg
---

Continues from [previous week](/blog/review-challenge-047/).

Welcome to the Raku review for Week 048 of the Weekly Challenge! For a quick overview, go through the [original tasks](/blog/perl-weekly-challenge-048/) and [recap](/blog/recap-challenge-048/) of the weekly challenge.

## Getting in Touch

<a href="mailto:rjt@cpan.org"><img src="http://ry.ca/misc/Email.svg" height="50" width="50"> Email</a> › Email me (Ryan) with any feedback about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="http://ry.ca/misc/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="http://ry.ca/misc/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

We'd greatly appreciate any feedback you'd like to give.

## Table of Contents

### [Task 1](#task1)

[ [Alicia Bielsa](#alicia-bielsa1)  | [Arne Sommer](#arne-sommer1)  | [Colin Crain](#colin-crain1)  | [Jaldhar H. Vyas](#jaldhar-h-vyas1)  | [Javier Luque](#javier-luque1)  | [Kevin Colyer](#kevin-colyer1)  | [Laurent Rosenfeld](#laurent-rosenfeld1)  | [Luca Ferrari](#luca-ferrari1)  | [Mark Anderson](#mark-anderson1)  | [Markus Holzer](#markus-holzer1)  | [Mohammad S Anwar](#mohammad-anwar1)  | [Noud Aldenhoven](#noud1)  | [Roger Bell West](#roger-bell-west1)  | [Ruben Westerberg](#ruben-westerberg1)  | [Ryan Thompson](#ryan-thompson1)  | [Simon Proctor](#simon-proctor1)  | [Jonas Berlin](#xkr471)  ]

### [Task 2](#task2)

[ [Alicia Bielsa](#alicia-bielsa2)  | [Arne Sommer](#arne-sommer2)  | [Colin Crain](#colin-crain2)  | [Jaldhar H. Vyas](#jaldhar-h-vyas2)  | [Javier Luque](#javier-luque2)  | [Kevin Colyer](#kevin-colyer2)  | [Laurent Rosenfeld](#laurent-rosenfeld2)  | [Luca Ferrari](#luca-ferrari2)  | [Mark Anderson](#mark-anderson2)  | [Markus Holzer](#markus-holzer2)  | [Mohammad S Anwar](#mohammad-anwar2)  | [Noud Aldenhoven](#noud2)  | [Roger Bell West](#roger-bell-west2)  | [Ruben Westerberg](#ruben-westerberg2)  | [Ryan Thompson](#ryan-thompson2)  | [Simon Proctor](#simon-proctor2)  | [Ulrich Rieke](#ulrich-rieke2)  | [Jonas Berlin](#xkr472)  ]

### [Blogs](#blogs)

***

***

# Task #1 - Survivor {#task1}

Here is the original task description:

*There are 50 people standing in a circle in position 1 to 50. The person standing at position 1 has a sword. He kills the next person i.e. standing at position 2 and pass on the sword to the immediate next i.e. person standing at position 3. Now the person at position 3 does the same and it goes on until only one survives.*

*Write a script to find out the survivor.*

***

This is a classic problem in computer science otherwise known as the [Josepheus problem](https://en.wikipedia.org/wiki/Josephus_problem). There are several ways to tackle the problem, ranging from brute force methods all the way to the constant-time analytical solutions.

## Looping with `splice`

The [`splice`](https://docs.perl6.org/routine/splice) routine will remove element(s) at the given position if a `@replacement` argument is not given. Thus some solutions start with an array containing 1..50 and loop until that array has one element, using `splice` to remove the correct element.

Since this method requires explicit array indexing and the array changes length, it can be a bit error prone to implement, as evidenced by a couple of solutions that arrived at the wrong result. In particular, it's important to pay careful attention to the index wrap-around; since the sword skips one person, the index sometimes needs to be reset to 1, other times 0. Using the modulo (`%`) operator is a common trick for handling this.

## Circular linked list

[Circular linked lists](https://en.wikipedia.org/wiki/Linked_list) are a very natural way to solve this problem. Raku does not have a built-in linked list type, but that's perhaps the fun of it: there are a few good ways to make a linked list for this problem. References work, of course, but it's also possible to make an O(1) linked list from a humble array of integers.

[My blog](http://www.ry.ca/2020/02/survivor-josepheus-problem/) has more discussion on circular linked lists and their use in this problem.

## Looping with `shift`/`push`

A clever way to solve the problem involves storing the values 1..50 in an array, and then looping until the array has one element, with the following loop body (which also works in Perl):

```perl
    push @a, shift @a;  # Rotation ("Next")
    shift @a;           # Kill
```

As to why this works, the rotation is what essentially moves the cursor along. It does not change the relative positions of each element. Then the next `shift` (kill) just removes the person at that position.

Here is an example for five people:

```
Start              Rotation     Killed
1 2 3 4 5       -> 2 3 4 5 1 -> 3 4 5 1
    3 4 5 1     -> 4 5 1 3   -> 5 1 3
        5 1 3   -> 1 3 5     -> 3 5
            3 5 -> 5 3       -> 3 -> DONE
```

## Brute force loops

Yet another way to solve this challenge involves putting all of your people into an array of 1s (1 = alive, 0 = dead), and whenever you need to kill someone or pass the sword along, you simply advance the cursor until you find a 1.

It's a little inefficient, especially in the later rounds when most everyone is dead, but it certainly runs quickly enough for small problem sizes.


## Alicia Bielsa {#alicia-bielsa1}

[Alicia Bielsa's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/alicia-bielsa/raku/ch-1.p6) continues her foray into Raku submissions this week with the following:

```raku
my $numberPeople = 50;
my $numberPeopleAlive = $numberPeople;
my @aPeople;
for 1..$numberPeople {
    my $nextPosition = $_ == $numberPeople ?? 1 !! $_ +1;
    @aPeople.push({'nextPosition' =>  $nextPosition});
}
my $swordPosition  = 1;
while $numberPeopleAlive > 1 {
    my $killPosition =  @aPeople[ $swordPosition-1 ]<nextPosition>;
    @aPeople[ $swordPosition-1 ]<nextPosition>  = @aPeople[ $killPosition-1 ]<nextPosition>;
    $swordPosition = @aPeople[ $killPosition-1 ]<nextPosition>;
    $numberPeopleAlive--;
}
print "Last Position Alive : $swordPosition\n";
```

Alicia has come up with a circular linked list implementation. The explicit variable names make it easy to follow.

## Arne Sommer {#arne-sommer1}

[Arne Sommer's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/arne-sommer/raku/ch-1.p6) uses `splice`:

```raku
unit sub MAIN (:$verbose);
my @people = 1 .. 50;
my $next = 1;
say ": @people[] [Index: $next]" if $verbose;
while @people.elems > 1 {
  my $killed = @people.splice($next, 1);
  $next++;
  $next = 0 if $next > @people.end;
  say ": @people[] [K:$killed] [Next:$next]" if $verbose;
}
say "Living: @people[]";
```

Unfortunately, the solution returns 31, but the correct answer is 37. As seems to be typical with these `splice` implementations on both Perl and Raku, it's really easy to get the indexing wrong, since `splice` requires an explicit index, and also changes the length of the array.

Fortunately, the fix is simple: change `$next = 0` to `$next -= @people.elems`. Or, replace the `$next++` and `$next = 0 ...` lines with `$next = ($next + 1) % @people.elems`.

**Blog** › [Surviving Dates with Raku](https://raku-musings.com/surviving-dates.html)

## Colin Crain {#colin-crain1}

[Colin Crain's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/colin-crain/raku/ch-1.p6), as with his Perl version, has some hilariously colourful commentary on the problem in an extended comment at the top, which is well worth a read. The code itself uses `splice`, deftly dodging any indexing errors with the modulo operator:

```raku
sub survivor (Int:D $size where {$size > 0}){
    my @circle = (0..$size-1);
    my $next = 0;
    while (  @circle.elems > 1 ) {
        $next = ++$next % @circle.elems;
        @circle.splice($next, 1);
    }
    return @circle[0];
}
```

Colin explicitly documents his choice to use 0-based indexing, so his result of 36 instead of 37 is expected.

## Jaldhar H. Vyas {#jaldhar-h-vyas1}

[Jaldhar H. Vyas's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/jaldhar-h-vyas/raku/ch-1.p6) uses a brute force method to iterate over a fixed length array:

```raku
multi sub MAIN() {
    my @people = (0 .. 49);
    my $remaining = @people.elems;
    my $next = 0;
    my $victim = 1;
    while $remaining > 1 {
        @people[$victim] = Nil;
        $remaining--;
        repeat {
            $next = ($next + 1) % 50;
        } until defined @people[$next];
        $victim = $next;
        repeat {
            $victim = ($victim + 1) % 50;
        } until defined @people[$victim];
    }
    say @people.grep({ defined $_; })[0] + 1;
}
```

**Blog** › [048 – Perl Weekly Challenge](https://perlchallenges.wordpress.com/2020/02/17/perl-weekly-challenge-048/)


## Javier Luque {#javier-luque1}

[Javier Luque's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/javier-luque/raku/ch-1.p6) uses `push`/`shift` and `shift` to rotate the array and then remove the first person:

```raku
sub MAIN() {
    my @people = 1..50;
    kill-and-switch(@people) while (@people.elems > 1);
    say @people[0] ~" is still alive";
}
# Kill and Switch
sub kill-and-switch(@people) {
    # switch
    push @people, shift @people;
    # kill
    shift @people;
}
```

**Blog** › [048 – Perl Weekly Challenge](https://perlchallenges.wordpress.com/2020/02/17/perl-weekly-challenge-048/)

## Kevin Colyer {#kevin-colyer1}

[Kevin Colyer's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/kevin-colyer/raku/ch-1.p6) uses a fixed-length array in `@circle`, and then uses a brute force method to choose the next victim:

```raku
# fill the circle with 50 alive people = 1's
my @circle = 1 xx 50;
# helper function to loop around the circle looking for the next living person
sub nextAlive($i) {
    my $j=$i;
    loop {
        # choose next person
        $j++;
        # loop back if reached end of array
        $j=0 if $j>= @circle.elems;
        # return index if that person is living...
        return $j if @circle[$j]==1;
        # prevent infinite loop check
        die "No-one alive in circle" if $i==$j;
        # and loop
    }
}
```

To find the ultimate survivor, a simple `loop` does the trick:

```raku
my $i=0;
my $j=-1;
say "1 has the sword...";
loop {
    # choose victim
    $j=nextAlive($i);
    # kill them
    @circle[$j]=0;
    say "{$i+1} killed {$j+1}";
    # pass the sword on
    my $k=nextAlive($j);
    # check exit the loop if we have just passed sword to ourselves - we are the only living one left
    last if $i == $k;
    # pass the sword on
    $i=$k;
    say " and gave sword to {$i+1}";
}
say "So the survivor is {$i+1}";
```

## Laurent Rosenfeld {#laurent-rosenfeld1}

[Laurent Rosenfeld's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/laurent-rosenfeld/raku/ch-1.p6) uses the `push`/`shift`, `shift` technique:

```raku
my $number = @*ARGS ?? @*ARGS[0] !! 50;
my $number = 50;
my @persons = 1 .. $number;
for (1.. $number - 1) {
    push @persons, shift @persons;
    shift @persons;
}
say "Person @persons[] is the survivor.\n";
```

**Blog** › [Survivor and Palindrome Dates](http://blogs.perl.org/users/laurent_r/2020/02/perl-weekly-challenge-48-survivor-and-palindrome-dates.html)

## Luca Ferrari {#luca-ferrari1}

[Luca Ferrari's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/luca-ferrari/raku/ch-1.p6) also uses a fixed-length array, and has a `next-alive` sub to find the next victim:

```raku
# Implements the list rotation.
sub next-alive( @people, $current-person ) {
    my $next = $current-person;
    loop {
        $next++;
        $next = $next >= @people.elems ?? $next % @people.elems !! $next;
        return $next if @people[ $next ].defined;
    }
}
```

The semantics of `@people` are a bit different: `False` means the person is alive but does not have the sword. `True` means the person has the sword.  `Nil` means the person is dead. The main loop iterates through and kills each person in turn:

```raku
sub MAIN( Int :$how_many_people = 50 ) {
    my @people = False xx $how_many_people;
    @people[ 0 ] = True;
    while ( @people.grep( *.defined ) > 1 ) {
        # find out who has the sword
        my $killer      = @people.first: *.so, :k;
        # then find out the next person to kill
        my $killed      = next-alive( @people, $killer );
        @people[ $killed ] = Nil;  # killed!
        @people[ $killer ] = False; # pass the sword
        # now get the next person that will hold the sword
        my $next-killer = next-alive( @people, $killed );
        @people[ $next-killer ] = True; # the next killer
    }
    "The person who survives is { $_ + 1 }".say given @people.first: *.so, :k;
}
```

**Blog** › [Survivors and Palindrome Dates](https://fluca1978.github.io/2020/02/17/PerlWeeklyChallenge48.html#task1)

## Mark Anderson {#mark-anderson1}

[Mark Anderson's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/mark-anderson/raku/ch-1.p6) has a unique solution:

```raku
my @people = 1 .. 50;
while @people > 1 {
    my $last = @people[*-1];
    @people  = @people[@people.keys.grep(* %% 2)];
    shift @people if @people[*-1] == $last;
}
put @people;
```

While algorithmically, this is a brute force solution, it is rather refined: Mark has no doubt realized that every time the sword goes around the circle, it kills every other person. So he coded that explicitly, with `@people = @people[@people.keys.grep(* %% 2)]`.

## Markus Holzer {#markus-holzer1}

[Markus Holzer's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/markus-holzer/raku/ch-1.p6) shows a few different methods.

First, a concise solution using `splice`:

```raku
given my @men = 1..50 { .push( .splice(0,2).first ) while .elems > 1 };
say @men.first;
```

***

Next, Markus had a go with a circular linked list implemenetation, and also lit up some pathways in my brain that I haven't used since I took that Latin class in university a long time ago:

```raku
role Concatenationem { has $.vicinus is rw; }
class Moribunda is Int does Concatenationem { };
sub bicimare-sine-fine( Int $homines where * > 1 ) {
    my $armis = my $primus = Moribunda.new(1);
    for 2..$homines
    {
        my $homine = Moribunda.new($_);
        $armis.vicinus = $homine;
        $armis = $homine;
    }
    $armis = $armis.vicinus = $primus;
    while $armis != $armis.vicinus
    {
        $armis = $armis.vicinus = $armis.vicinus.vicinus;
    }
    $armis;
}
say bicimare-sine-fine( 50 );
```

***

Finally, Markus provided a solution that uses `rotor(2)` to split up the people into "killer/victim tuples" (obviously recognizing that every other person is killed, each time around the circle). It requires a special case for even/odd sized groups:

```raku
sub rotor-kill( $n ) {
    my @men = 1..$n;
    while @men.elems > 1 {
        if @men.elems %% 2 {
            # When the number of men is even, we know the very last man
            # in line will die and we can start the next round at the beginning.
            @men = @men.rotor(2).map: *.first;
        }
        else
        {
            # When the number of men is odd, the last man survives and will
            # kill the first in the next round, so we need to skip over the
            # poor fellow.
            @men = @men.rotor(2, :partial).skip.map: *.first;
        }
    }
    @men.first;
}
say rotor-kill( 50 );
```

## Mohammad S Anwar {#mohammad-anwar1}

[Mohammad S Anwar's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/mohammad-anwar/raku/ch-1.p6) uses the `shift`/`push` technique:

```raku
sub MAIN() {
    my @people = 1..50;
    while @people.elems > 1 {
        my $sword = @people.shift;
        @people.shift;
        @people.push($sword);
    }
    say "Survivor is at position @people[0]";
}
```

**The following comment is copied from my Perl review:**

*I am really glad to see Mohammad not only participating in the challenge, but now blogging about his solutions as well! His first blog post (below) covers the past three weeks (Weeks 046, 047, and 048), and is a good introspective look at Mohammad's experience contributing solutions in Perl and his early steps in translating those solutions (and, I think, parts of his brain!) to Raku:*

**Blog** › [My first date with Raku](https://perlweeklychallenge.org/blog/my-first-date-with-raku)

## Noud Aldenhoven {#noud1}

[Noud Aldenhoven's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/noud/raku/ch-1.p6) uses recursion, with the well-known recurrence relation `f(n, k) = (f(n - 1, k) + k - 1) mod n + 1.`

```raku
multi sub f(1, $k) { 1; }
multi sub f($n, $k) { (f($n - 1, $k) + $k - 1) % $n + 1; }
say "Survivor: ", f(50, 2);
```

The code comments contain a paraphrasing of [Wikipedia](https://en.wikipedia.org/wiki/Josephus_problem#The_general_case), which has additional background that might be of interest.

## Roger Bell West {#roger-bell-west1}

[Roger Bell West's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/roger-bell-west/raku/ch-1.p6) uses `splice`:

```raku
my @list=(1..50);
my $n=0;
while (@list.elems > 1) {
    $n++;
    if ($n>@list.end) {
        $n=0;
    }
    splice @list,$n,1;
}
say @list[0];
```

As with his similar solution in Perl, Roger's solution here arrives at the wrong answer (31, instead of 37). This can be fixed by changing `$n = 0` to `$n -= @list.elems`, or by replacing the top two lines of the loop body with `$n = ($n + 1) % @list.elems`.

## Ruben Westerberg {#ruben-westerberg1}

[Ruben Westerberg's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/ruben-westerberg/raku/ch-1.p6) also uses splice, but uses modulo arithmetic to ensure the index wrap works correctly:

```raku
my @sur=1..50;
my $i=0;
@sur.splice($i=($i+1)%@sur,1)  while @sur > 1;
put "Survivor: @sur[]";
```

## Ryan Thompson {#ryan-thompson1}

[My solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/ryan-thompson/raku/ch-1.p6) is a circular linked list implementation:

```raku
my Int @ll = 0, |[1..$N].rotate;
my Int $cur = 1;
@ll[$cur] = @ll[ @ll[$cur] ] and $cur = @ll[$cur] until @ll[$cur] == $cur;
say $cur;
```

A linked list is a high level description of a data structure. The underlying implementation can vary, and in this case, I'm using an array of numbers. The array *index* is the current person, and the *value* at that index is the *next* person in the linked list. I'm using two linked list operations, here (`$cur` is the "cursor", or index of the current element):

```perl
@ll[$cur] = @ll[@ll[$cur]]  # "delete" -- Delete element to the right
    $cur  = @ll[    $cur ]  # "next"   -- Go to next element in list
```

My blog also discusses an analytic O(1) solution to the problem, if you are interested.

**Blog** › [Survivor (Josepheus problem)](http://www.ry.ca/2020/02/survivor-josepheus-problem/)

## Simon Proctor {#simon-proctor1}

[Simon Proctor's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/simon-proctor/raku/ch-1.p6) has two `MAIN` methods; one using `splice`:

```raku
#| Calculate the survior of the swordsmen suicide pact
multi sub MAIN(
    UInt $swords = 50, #= Number of swordsmen (default 50)
) {
    my @men = [1..$swords];
    while ( @men.elems > 1 ) {
        my ( $alive, $dead ) = @men.splice(0,2);
        @men.push($alive);
    }
    say "Survivor of $swords is number {@men[0]}";
}
```

And the other uses math:

```raku
# Find p where p ** 2 < s (swordsmen)
# The survior is the nth odd number where n = s - p
#| Calculate mathematically
multi sub MAIN(
    "math",
    UInt $swords = 50, #= Number of swordsmen
) {
    my $low-power = (1,* * 2...*).first(* > $swords) div 2;
    say "Survivor of $swords is number {(1,3,5...*)[$swords - $low-power]}";
}
```

Simon's math solution still loops, to find the power of 2 less than `$swords`.  It's possible to do this in constant time with `log($swords, 2).floor`. I bet Simon knows this, as his blog talks about "fun uses of Raku sequences," which I can absolutely relate to.

**Blog** › [Perl Weekly Challenge : Week 48](https://dev.to/scimon/perl-weekly-challenge-week-42-2oo2)

## Jonas Berlin {#xkr471}

[Jonas Berlin's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/xkr47/raku/ch-1.p6) uses a custom class, extending `Array`, with a custom `Iterator`:

```raku
#!/usr/bin/env perl6
class Pwc048_1 is Array {
    method iterator {
        class :: does Iterator {
            has $.index is rw = 0;
            has $.array is required;
            method pull-one {
                my $val = $.array.AT-POS($.index++);
                $.index %= $.array.elems;
                $.array.splice($.index, 1);
                if ($.array.elems) {
                    $.index %= $.array.elems;
                    $val;
                } else {
                    IterationEnd;
                }
            }
        }.new(array => self)
    }
}
my $arr = Pwc048_1.new();
$arr.append(1...50);
say "Survivors, in order: ", $arr;
```

Internally the `Iterator` uses `splice` to remove the victims. Iterating through the array results in the following sequence:

```
[1 3 5 7 9 11 13 15 17 19 21 23 25 27 29 31 33 35 37 39 41 43 45 47 49 1 5 9 13 17 21 25 29 33 37 41 45 49 5 13 21 29 37 45 5 21 37 5 37]
```

I like to see solutions like this, that showcase different language features.

***

***

# Task #2 - Palindrome Dates {#task2}

Write a script to print all Palindrome Dates between 2000 and 2999. The format of date is **mmddyyyy**. For example, the first one was on October 2, 2001 as it is represented as `10022001`.

***

The solutions from this task can be broken into the following main categories:

### Solutions using `Date`

Many people used Raku's included `Date` class to help them iterate through and/or validate dates they obtained.

### Solutions that did not use `Date`

Others realized that, in fact, the dates meeting the specification can be validated very easily, or, if you are careful with how you set up your loops, don't need to be validated at all.

***

## Alicia Bielsa {#alicia-bielsa2}

[Alicia Bielsa's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/alicia-bielsa/raku/ch-2.p6) uses the `Date` class to validate palindromic strings generated by flipping and splitting the year:

```raku
for 2000..2999 {
    my $mmdd = $_.flip;
    my $date = Date.new($_,  $mmdd.substr(0,2), $mmdd.substr(2,2));
    CATCH {
        default {  }
    }
    say $mmdd ~ $_;
}
```

## Arne Sommer {#arne-sommer2}

[Arne Sommer's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/arne-sommer/raku/ch-2.p6) uses nested loops to build up candidate strings that he then validates with his own code:

```raku
for 0..2 -> $y2 {
  for 0..9 -> $y3 {
    for 0..1 -> $y4 {
      for 0..1 -> $m1 {
        for 0..9 -> $m2 {
          for 0..2 -> $d1 {
            next unless $m1 == $y4 && $m2 == $y3 && $d1 == $y2;
            next if $m1 == 0 == $m2;
                next if $m1 == 1 && $m2 > 2;
            say $m1 ~ $m2 ~ $d1 ~ '22' ~ $y2 ~ $y3 ~ $y4;
          }
        }
      }
    }
  }
}
```

Due to the careful setup of the nested loops, Arne only needs to do some very basic filtering of the dates.

**Blog** › [Surviving Dates with Raku](https://raku-musings.com/surviving-dates.html)

## Colin Crain {#colin-crain2}

[Colin Crain's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/colin-crain/raku/ch-2.p6) generates candidates by looking at each year and its `flip`ped counterpart:

```raku
sub MAIN () {
    ## make a list of valid candidates
    my @candidates = (2000..2999).map({$_.flip ~ $_}).grep({validate($_)});
    ## a little prettification and output
    .map({S/^(..)(..)/$0-$1-/}).put for @candidates;
}
```

The `validate` sub then rejects any invalid dates:

```raku
sub validate ($candidate) {
## returns true is the given string represents a valid mmddyyyy date
## does not consider leap years, in this case they are logically irrelevant
    my @mlen  = 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31;
    my ($m, $d ) = $candidate.comb(2);
    return      $m > 12
             || $m == 0
             || $d > @mlen[$m-1]
             || $d == 0             ?? 0 !! 1;
}
```

## Jaldhar H. Vyas {#jaldhar-h-vyas2}

[Jaldhar H. Vyas's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/jaldhar-h-vyas/raku/ch-2.p6) uses a hard-coded list of (reversed) months and checks that against the two-digit year to get a list of valid `@years`:

```raku
my @years = (2000 .. 2999).grep({
    / $<year> = (\d\d) $ /;
    (10, 20, 30, 40, 50, 60 , 70, 80, 90, 1, 11, 21).grep({ $_ == $/<year>})
});
```

With that, he can now `flip` the year to get the `$<month>` and `$<day>` with
a regex, and print out any dates where the day is less than 23:

```raku
for @years -> $year {
    $year.flip ~~ / ^ $<month> = (\d\d) $<day> = (\d\d) $ /;
    if $/<day> < 23 {
        ($/<month>, $/<day>, $year).join(q{/}).say;
    }
}
```

## Javier Luque {#javier-luque2}

[Javier Luque's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/javier-luque/raku/ch-2.p6) solution uses the `Date` class, and goes through every day between 2000-01-01 and 2999-12-31:

```raku
sub MAIN () {
    my $current_date  = Date.new(2000, 1, 1);
    my $end_date = Date.new(2999, 12, 31);
    while ($current_date < $end_date) {
        # Format month and day
        my $month = ($current_date.month < 10) ??
            '0' ~ $current_date.month !!
            $current_date.month;
        my $day   = ($current_date.day < 10) ??
            '0' ~ $current_date.day !!
            $current_date.day;
        # Date String
        my $date_string = $month ~ $day ~ $current_date.year;
        # Output the datestring if it's a palindrome
        say $date_string
            if ($date_string eq $date_string.flip);
        # Next Day
        $current_date = $current_date + 1;
    }
}
```

This returns the correct results in about 7.5 seconds on my system.

**Blog** › [048 – Perl Weekly Challenge](https://perlchallenges.wordpress.com/2020/02/17/perl-weekly-challenge-048/)

## Kevin Colyer {#kevin-colyer2}

[Kevin Colyer's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/kevin-colyer/raku/ch-2.p6) uses a code ref to format the date per the specification:

```raku
my $pwcformat= sub ($self) { sprintf "%02d%02d%04d", .month, .day, .year given $self;};
```

This formatter is one of the optional arguments when creating a new [`Date`](https://docs.perl6.org/type/Date#(Dateish)_method_formatter) object:

```raku
my $date=Date.new(year => 2001,month=>10,day=>2, formatter => $pwcformat);
my $end=Date.new(year => 3000,month=>1,day=>1);
```

Finally, Kevin simply loops over every day, printing the ones that are palindromic:

```raku
while $date < $end {
    my $d=$date.Str;
    say $date.yyyy-mm-dd ~ " is palindrome: $d" if $d eq $d.flip;
    $date.=succ;
}
```

## Laurent Rosenfeld {#laurent-rosenfeld2}

[Laurent Rosenfeld's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/laurent-rosenfeld/raku/ch-2.p6) loops over every year from 2000..2300 (see his blog, below, for the rationale for not needing to go all the way to 2999):

```raku
for 2000 .. 2300 -> $year {
    my ($month, $day) = ($year.flip ~~ /(\d\d)(\d\d)/)[0, 1];
    next if $month > 12 or $month < 1 or $day > 31 or $day < 1;
    say "$month/$day/$year is a palindromic date.";
}
```

Laurent `flip`s each `$year`, and then pulls out the `$month` and `$day` with a capturing regex. He then prints every date that passes a simple validity check.

**Blog** › [Survivor and Palindrome Dates](http://blogs.perl.org/users/laurent_r/2020/02/perl-weekly-challenge-48-survivor-and-palindrome-dates.html)

## Luca Ferrari {#luca-ferrari2}

[Luca Ferrari's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/luca-ferrari/raku/ch-2.p6) iterates over the year range, `flip`s the year, and skips any dates that fail a basic validity check:

```raku
sub MAIN( Int :$year-start? = 2000,
          Int :$year-end?   = 2999 ) {
    for $year-start .. $year-end {
        $_ ~~ / ^ $<day>=\d ** 2 $<month>=\d ** 2 $ /;
        my $month = $/<month>.flip;
        my $day   = $/<day>.flip;
        next if  $month > 12 || $month == 0;
        next if $day > 31 || $day == 0;
        "Palindrome date %02d%02d%04d".sprintf( $month, $day, $_ ).say if try Date.new( :year( $_),
                                                                                    :month( $month),
                                                                                    :day( $day ) );
    }
}

```

**Blog** › [Survivors and Palindrome Dates](https://fluca1978.github.io/2020/02/17/PerlWeeklyChallenge48.html#task2)

## Mark Anderson {#mark-anderson2}

[Mark Anderson's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/mark-anderson/raku/ch-2.p6) is self-described as "just brute force", and it lives up to that description!

It also uses a custom formatter:

```raku
my $mdy = sub ($self) {
              sprintf "%02d%02d%04d", .month, .day, .year given $self;
          }
my $dt = Date.new(
    year      => 2000,
    month     => 1,
    day       => 1,
    formatter => $mdy
);
while ($dt.year < 3000) {
    my $str = sprintf "%s", $dt;
    if ($str eq $str.flip) {
        printf "%02d/%02d/%04d\n", .month, .day, .year given $dt;
    }
    #$dt += 1; # Formatting may be lost with this line
               # so I'm doing the below hack for now.
               # (The issue has been fixed in Rakudo Star RC-1)
    $dt = $dt.succ.clone(formatter => $mdy);
}
```

This solution runs in about 4.5 minutes on my system.

## Markus Holzer {#markus-holzer2}

[Markus Holzer's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/markus-holzer/raku/ch-2.p6) also uses a formatter, but iterates over each year, rather than each day:

```raku
my $formatter = sub { sprintf '%02d%02d%04d', .month, .day, .year given $^date };
.say for (2000..2999)
    # filter out most of the impossible years
    .grep({
        0 < .substr(2,2).flip < 13 &&
        0 < .substr(0,2).flip < 32 })
    # Try making a date, this fails sometimes, eg for the year 1311 -> 11311311
    # which is not a valid date. That doesn't happen for 2000 to 29999 though.
    .map({
        try Date.new($_, |.flip.comb(2), :$formatter ) })
    # So we need to filter these out
    .grep({
        .so });
```

## Mohammad S Anwar {#mohammad-anwar2}

[Mohammad S Anwar's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/mohammad-anwar/raku/ch-2.p6) uses `Date` with a custom formatter, checking the `flip`ped version for palindromes:

```raku
sub MAIN() {
    my $fmt  = { sprintf "%02d%02d%04d", .month, .day, .year };
    my $date = Date.new(2000, 1, 1, formatter => $fmt);
    while $date.year <= 2299 {
        my $date-as-str = $date.Str;
        if $date-as-str eq $date-as-str.flip {
            say "$date-as-str is a Palindrome date.";
        }
        ++$date;
    }
}
```

This solution requires Rakudo Star RC-1 or newer.

**Blog** › [My first date with Raku](https://perlweeklychallenge.org/blog/my-first-date-with-raku)

## Noud Aldenhoven {#noud2}

[Noud Aldenhoven's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/noud/raku/ch-2.p6) realizes that palindromic dates within this range can be found directly, without the need to validate them at all, provided the range is carefully chosen:

```raku
for 1..12 X ^3 -> ($m, $d) {
    say ($m div 10), ($m % 10), $d, 2, 2, $d, ($m % 10), ($m div 10);
}
```

A minor issue is that this solution prints the dates out of order.

## Roger Bell West {#roger-bell-west2}

[Roger Bell West's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/roger-bell-west/raku/ch-2.p6) has a nested loop to check each year, month, and day:

```raku
for 2000..2999 -> $y {
  for 1..12 -> $m {
    for 1..31 -> $d {
      if ($d==31 && ($m==4 || $m==6 || $m==9 || $m==11)) {
        next;
      } elsif ($m==2 && $d==30) {
        next;
      } elsif ($m==2 && $d==29 && ($y % 4 != 0 || ($y % 100 == 0 && $y % 400 != 0))) {
        next;
      }
      my $u=sprintf('%02d%02d%04d',$m,$d,$y);
      if ($u eq $u.flip) {
        say $u;
      }
    }
  }
}
```

Each candidate date is then passed through a quick validator, before it is `flip`ped and compared, to see if it is a palindrome.

## Ruben Westerberg {#ruben-westerberg2}

[Ruben Westerberg's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/ruben-westerberg/raku/ch-2.p6) uses `Date` with a custom formatter:

```raku
my $f={sprintf "%02d%02d%04d", .month,.day,.year};
put (Date.new("2000-01-01",formatter=>$f)..Date.new("2999-01-01"))
    .grep({my $str= .Str;$str.flip eq $str})
    .map({ "Date is a palindrone: "~Date.new($_)~"\n"}).join;
```

This will not work in Rakudo Star versions prior to RC-1.

## Ryan Thompson {#ryan-thompson2}

[My solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/ryan-thompson/raku/ch-2.p6) relies on a little analysis (see blog, below) to loop over only the valid palindromic dates:

```raku
for (<02 12 22> X (1..12)».fmt('%02d')».flip.sort).flat -> $dd, $yy {
    say "{$yy.flip}-$dd-{$dd.flip}$yy";
}
```

The results are in sorted order. (Note the `.sort` you see only sorts the 12 months. It could be moved outside the loop to avoid two unnecessary calls, but it didn't make any measurable difference, so I left it.)

**Blog** › [Palindrome Dates (mm/dd/yyyy)](http://www.ry.ca/2020/02/palindrome-dates/)

## Simon Proctor {#simon-proctor2}

[Simon Proctor's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/simon-proctor/raku/ch-2.p6) uses `Date` with a custom formatter to both validate and format the dates, before `.flip`ping them to check for palindromes:

```raku
#| Find the palendromic numbers (writen mmddyyy) between 2000-01-01 and 2999-01-01
sub MAIN() {
    my sub df( Date $d) {
        # Bleh American dates
        sprintf "%02d%02d%04d", .month, .day, .year given $d;
    }
    constant START = Date.new(2000,1,1,formatter => &df);
    constant END = Date.new(2999,12,31, formatter => &df);
    my @out;
    for (1..12) -> $month {
        for (1..31) -> $day {
            my $date;
            my $year = sprintf( "%02d%02d", $month, $day ).flip;
            try {
                $date = Date.new($year,$month,$day,formatter => &df);
            }
            next unless $date;
            next unless START <= $date <= END;
            @out.push($date);
        }
    }
    .say for @out.sort;
}
```

**Blog** › [Perl Weekly Challenge : Week 48](https://dev.to/scimon/perl-weekly-challenge-week-42-2oo2)

## Ulrich Rieke {#ulrich-rieke2}

[Ulrich Rieke's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/ulrich-rieke/raku/ch-2.p6) uses `Date` as well, iterating one day at a time with a capturing regexp to pull out the date parts for reordering into mm/dd/yyyy format. He then checks for a palindrome with `.flip`:

```raku
my $currentDate = Date.new( 1999 , 12 , 31 ) ;
my $reordered ;
my @palindromedates ;
repeat {
  $currentDate += 1 ;
  my $datestr = $currentDate.Str ;
  $datestr ~~ /(\d ** 4) '-' (\d+ ) '-' (\d+)/ ;
  $reordered = ~$2 ~ ~$1 ~ ~$0 ;
  if ( $reordered eq $reordered.flip ) {
      @palindromedates.push( $reordered ) ;
  }
} until ( $currentDate.year == 2999 && $currentDate.month == 12 &&
      $currentDate.day == 31 ) ;
.say for @palindromedates ;
```

## Jonas Berlin {#xkr472}

[Jonas Berlin's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/xkr47/raku/ch-2.p6) uses `Date` in a `try { ... }` block to validate dates he generates by `flip`ping and `match`ing each year and pulling out the `mm` and `dd` parts, to reduce the search space by a factor of 365:

```raku
(2000...2999)
        .map({
            try {
                    Date.new(($_, $_.flip.match(/^(..)(..)/).map(*.Str)).flat.join("-"))
            }
        })
        .grep(*.defined)
        .map({ sprintf "%02d%02d%04d", .month, .day, .year })
        .say
```

***

***

## See Also {#blogs}

### Raku Blogs this week:

**Arne Sommer** › [Surviving Dates with Raku](https://raku-musings.com/surviving-dates.html)

**Javier Luque** › [048 – Perl Weekly Challenge](https://perlchallenges.wordpress.com/2020/02/17/perl-weekly-challenge-048/)

**Laurent Rosenfeld** › [Survivor and Palindrome Dates](http://blogs.perl.org/users/laurent_r/2020/02/perl-weekly-challenge-48-survivor-and-palindrome-dates.html)

**Luca Ferrari** › [Survivors and Palindrome Dates](https://fluca1978.github.io/2020/02/17/PerlWeeklyChallenge48.html)

**Mohammad S Anwar** › [My first date with Raku](https://perlweeklychallenge.org/blog/my-first-date-with-raku)

**Ryan Thompson** › [Survivor (Josepheus problem)](http://www.ry.ca/2020/02/survivor-josepheus-problem/) | [Palindrome Dates (mm/dd/yyyy)](http://www.ry.ca/2020/02/palindrome-dates/)

**Simon Proctor** › [Perl Weekly Challenge : Week 48](https://dev.to/scimon/perl-weekly-challenge-week-42-2oo2)
