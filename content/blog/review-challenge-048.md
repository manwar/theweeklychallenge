---
author:       Ryan Thompson
date:         2020-03-01T00:00:00
description:  "Ryan Thompson › Perl Weekly Review #048"
tags:         ["perl"]
title:        "Ryan Thompson › Perl Weekly Review #048"
type:         post
image:        /images/blog/p5-review-challenge-048.jpg
---

Continues from [previous week](/blog/review-challenge-047/).

Welcome to the Perl review for Week 048 of the Weekly Challenge! For a quick overview, go through the [original tasks](/blog/perl-weekly-challenge-048/) and [recap](/blog/recap-challenge-048/) of the weekly challenge.

## Getting in Touch

<a href="mailto:rjt@cpan.org"><img src="http://ry.ca/misc/Email.svg" height="50" width="50"> Email</a> › Email me (Ryan) with any feedback about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="http://ry.ca/misc/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="http://ry.ca/misc/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

We'd greatly appreciate any feedback you'd like to give.

## Table of Contents

### [Task 1](#task1)

[ [Alexander Karelas](#alexander-karelas1)  | [Alicia Bielsa](#alicia-bielsa1)  | [Andrezgz](#andrezgz1)  | [Cheok-Yin Fung](#cheok-yin-fung1)  | [Colin Crain](#colin-crain1)  | [Dave Cross](#dave-cross1)  | [Dave Jacoby](#dave-jacoby1)  | [Duane Powell](#duane-powell1)  | [Duncan C. White](#duncan-c-white1)  | [E. Choroba](#e-choroba1)  | [Ian Rifkin](#ianrifkin1)  | [Jaldhar H. Vyas](#jaldhar-h-vyas1)  | [Javier Luque](#javier-luque1)  | [Laurent Rosenfeld](#laurent-rosenfeld1)  | [Lubos Kolouch](#lubos-kolouch1)  | [Markus Holzer](#markus-holzer1)  | [Mohammad S Anwar](#mohammad-anwar1)  | [Phillip Harris](#phillip-harris1)  | [Roger Bell West](#roger-bell-west1)  | [Ruben Westerberg](#ruben-westerberg1)  | [Ryan Thompson](#ryan-thompson1)  | [Saif Ahmed](#saiftynet1)  | [Jen Guerra](#southpawgeek1)  | [Steven Wilson](#steven-wilson1)  | [Ulrich Rieke](#ulrich-rieke1)  | [User Person](#user-person1)  | [Walt Mankowski](#walt-mankowski1)  | [Wanderdoc](#wanderdoc1)  ]

### [Task 2](#task2)

[ [Alexander Karelas](#alexander-karelas2)  | [Alicia Bielsa](#alicia-bielsa2)  | [Andrezgz](#andrezgz2)  | [Cheok-Yin Fung](#cheok-yin-fung2)  | [Colin Crain](#colin-crain2)  | [Dave Cross](#dave-cross2)  | [Dave Jacoby](#dave-jacoby2)  | [Duane Powell](#duane-powell2)  | [Duncan C. White](#duncan-c-white2)  | [E. Choroba](#e-choroba2)  | [Ian Rifkin](#ianrifkin2)  | [Jaldhar H. Vyas](#jaldhar-h-vyas2)  | [Javier Luque](#javier-luque2)  | [Laurent Rosenfeld](#laurent-rosenfeld2)  | [Lubos Kolouch](#lubos-kolouch2)  | [Mohammad S Anwar](#mohammad-anwar2)  | [Peter Scott](#peter-scott2)  | [Phillip Harris](#phillip-harris2)  | [Roger Bell West](#roger-bell-west2)  | [Ruben Westerberg](#ruben-westerberg2)  | [Ryan Thompson](#ryan-thompson2)  | [Saif Ahmed](#saiftynet2)  | [Jen Guerra](#southpawgeek2)  | [Steven Wilson](#steven-wilson2)  | [User Person](#user-person2)  | [Walt Mankowski](#walt-mankowski2)  | [Wanderdoc](#wanderdoc2)  ]

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

The [`splice`](https://perldoc.perl.org/functions/splice.html) builtin will remove element(s) at the given position if a `LIST` argument is not given. Thus some solutions start with an array containing 1..50 and loop until that array has one element, using `splice` to remove the correct element.

Since this method requires explicit array indexing, it can be a bit error prone to implement, as evidenced by a couple of solutions that arrived at the wrong result. In particular, it's important to pay careful attention to the index wrap-around; since the sword skips one person, the index sometimes needs to be reset to 1, other times 0. Using the modulo (`%`) operator is a common trick for handling this.

## Circular linked list

[Circular linked lists](https://en.wikipedia.org/wiki/Linked_list) are a very natural way to solve this problem. Perl does not have a built-in linked list type, but that's perhaps the fun of it: there are a few good ways to make a linked list for this problem. References work, of course, but it's also possible to make an O(1) linked list from a humble array of integers.

[My blog](http://www.ry.ca/2020/02/survivor-josepheus-problem/) has more discussion on circular linked lists and their use in this problem.

## Looping with `shift`/`push`

A clever Perlish way to solve the problem involves storing the values 1..50 in an array, and then looping until the array has one element, with the following loop body:

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

***

## Alexander Karelas {#alexander-karelas1}

This is Alexander's first time contributing to the Challenge. Welcome, Alexander!

[Alexander Karelas's solution](https://github.com/manwar/perlweeklychallenge-club/blob/mastera/challenge-048/alexander-karelas/perl/ch-1.pl) uses `splice` with no `LIST` argument to remove elements from the `@people` list one at a time as they are "killed", until the array only contains one element: the number of the survivor.

```perl
my @people = (1 .. 50);
my $sword_at = 0; # array index
while (@people > 1) {
    if ($sword_at < $#people) {
        splice @people, $sword_at + 1, 1;
        $sword_at++;
    } else {
        splice @people, 0, 1;
        $sword_at = 0;
    }
}
say $people[0];
```

## Alicia Bielsa {#alicia-bielsa1}

[Alicia Bielsa's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/alicia-bielsa/perl/ch-1.pl) first initializes an array, `@aPeople` that is a singly-linked list, with an entry for each person. The `$swordPosition` is then tracked until `$numberPeopleAlive` is 1. The loop deletes one entry, and advances `$swordPosition`, just as the problem demands.

```perl
my $numberPeople = 50;
my $numberPeopleAlive = $numberPeople;
my @aPeople = ();
foreach my $position (1..$numberPeople){
    my $nextPosition = $position == $numberPeople ? 1 : $position +1;
    my %hTmp = (  'nextPosition' => $nextPosition);
    push (@aPeople, \%hTmp);
}
my $swordPosition  = 1;
while ($numberPeopleAlive > 1){
    my $killPosition = $aPeople[ $swordPosition - 1 ]->{'nextPosition'};
    $aPeople[ $swordPosition - 1 ]->{'nextPosition'}  = $aPeople[ $killPosition - 1 ]->{'nextPosition'};
    $swordPosition = $aPeople[ $killPosition - 1 ]->{'nextPosition'};
    $numberPeopleAlive--;
}
print "Last Position Alive : $swordPosition\n";
```

This is a good, explicit example of a linked list implementation using an array of hash refs.

## Andrezgz {#andrezgz1}

[Andrezgz's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/andrezgz/perl/ch-1.pl) works with an array of ints and also uses `splice` to remove victims of the sword.

```perl
my @people = (1..50);
my $killed = 0;
while (@people > 1) {
    $killed -= @people if ++$killed > $#people;
    printf '%2d kills %-2d'.$/, $people[$killed-1], $people[$killed];
    splice @people, $killed, 1;
}
# The Highlander, there can be only one
printf $/.'%d is the survivor',@people;
```

I remove most code comments in these reviews, but the "Highlander" comment was too good to omit.

## Cheok-Yin Fung {#cheok-yin-fung1}

[Cheok-Yin Fung's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/cheok-yin-fung/perl/ch-1.pl) stores an array of 1s, one for every person who is alive. The `nextalive` sub skips over all zeroes and returns the index of the first 1 found:

```perl
my $n = 50;
my @ppl = (1) x $n;
my $swordposition;
$swordposition = 0;
sub nextalive {
    my $temp = $_[0];
    do {
        $temp = ($temp+1) % $n;
    } until ($ppl[$temp] == 1);
    $temp;
}
```

The `killing` sub is efficient in its brutality:


```perl
sub killing {
    $ppl[&nextalive($_[0])] = 0;
}

for my $i (1..$n-1) {
    my $soldier = $swordposition;
    &killing($swordposition); # print "one man has been killed. \n";
        $swordposition = &nextalive($soldier);
}
print &nextalive+1;
```

## Colin Crain {#colin-crain1}

[Colin Crain's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/colin-crain/perl/ch-1.pl) opens with a heavy dose of Colin's colourful commentary I've come to appreciate. I'm not going to spoil it with excerpts; please click on the source link to see the whole thing. That being said, the comments I've left in (below) might give you a taste:

```perl
my $victims = 50;  ## I think the last person standing still qualifies as a victim in this
                   ## psychopath's fever-dream battle royal
my @circle = (0..$victims-1);
say join ", ", @circle;
my $next = 0;
while ( scalar @circle > 1 ) {
    $next = ++$next % scalar @circle;    ## find the next target position
    splice @circle, $next, 1;            ## do the dirty deed and the next person slide into that spot
    say join "  ", @circle;              ## not necessary but makes the progression visible
}
say "survivor: ", $circle[0], "\n";
```

Oh, right. I'm supposed to be reviewing the code. Colin's code is great. We've got the `splice` approach again, here, with some modulo arithmetic to keep the `$next` index within the circle.

Colin then packaged the `while` loop and `@circle`, above, into a `survivor` sub (not shown, but very similar to above code), and explored who the survivor is for circle sizes of 2..100 people:

```perl
for (2..100) {
    printf "%2d --> %d\n", $_, survivor($_);
}
```

## Dave Cross {#dave-cross1}

[Dave Cross' solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/dave-cross/perl/ch-1.pl) is both highly modular and about as self-documenting as it gets:

```perl
my @people            = ( undef, (1) x 50 );
my $person_with_sword = 1;
while () {
    kill_someone( $person_with_sword, \@people );
    last unless more_than_one_person(@people);
    $person_with_sword = hand_over_sword( $person_with_sword, \@people );
}
say "Last living person is #$person_with_sword";
```

`@people` is an array of 1s, and people who are killed are changed to zero.  Dave passes around a ref to `@people` to avoid using a global, while allowing the subs to mutate the contents:

```perl
sub more_than_one_person {
    my $count = grep { $_ } @_;
    return $count > 1;
}

sub get_next_living_person {
    my ( $curr_person, $people ) = @_;
    while (1) {
        ++$curr_person;
        $curr_person = 1 if $curr_person > $#$people;
        return $curr_person if $people->[$curr_person];
    }
}

sub kill_someone {
    my ( $curr_person, $people ) = @_;
    my $person_to_kill = get_next_living_person( $curr_person, $people );
    $people->[$person_to_kill] = 0;
    return $person_to_kill;
}

sub hand_over_sword {
    my ( $curr_person, $people ) = @_;
    return get_next_living_person( $curr_person, $people );
}
```

## Dave Jacoby {#dave-jacoby1}

[Dave Jacoby's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/dave-jacoby/perl/ch-1.pl) is the first example we will see that uses `push` and `shift`:

```perl
my @x = 1 .. 50;
my $i = 0;
while ( scalar @x > 1 ) {
    push @x, shift @x; # move killer to the end
    shift @x; # killer gets next
}
say join ',', @x;
```

Note that the `push @x, shift @x` line simply moves the first element to the end. For example, `(1, 2, 3, 4, 5)` would become `(2, 3, 4, 5, 1)`, a rotation.

The next line then `shift`s the first element, removing `2` in this case.

This is a great Perlish solution to the problem.

## Duane Powell {#duane-powell1}

[Duane Powell's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/duane-powell/perl/ch-1.pl) uses a circular linked list:

```perl
my $SWORDSMAN = shift || 50;
use constant {
    KILL     => undef,
        NO_SWORD => 0,
        SWORD    => 1,
};
# Swordsman constructor
sub new_swordsman {
    my $name  = shift;
    my $armed = shift;
    return {name => $name, armed => $armed, next => undef};
}
# Create a set of swordsman and arrange them in a cirle
my $first_swordsman = new_swordsman(1, SWORD);
my $swordsman = $first_swordsman;
foreach my $s (2 .. $SWORDSMAN) {
    my $next = new_swordsman($s, NO_SWORD);
    # expand the circle and continue
    $swordsman->{next} = $next;
    $swordsman = $next;
}
# Complete the cirle by linking last swordsman to the first
$swordsman->{next} = $first_swordsman;
```

With that set up, Duane uses what basically amounts to a "last person standing" loop:

```perl
$swordsman = $first_swordsman;
until ($swordsman->{next} == $swordsman) {
    my $condemned = $swordsman->{next}; # ID the condemned
    my $next = $condemned->{next};      # ID who gets the SWORD next
    $condemned = KILL;                  # execute the condemned
    $swordsman->{armed} = NO_SWORD;     # pass the sword, not needed but fun to simulate
    $next->{armed} = SWORD;
    # contract the circle and continue
    $swordsman->{next} = $next;
    $swordsman = $next;
}
say "$SWORDSMAN Swordsman arranged in a circle, the last man standing is Swordsman " . $swordsman->{name};
```

This is a fairly standard linked list implementation using hash refs as elements, with `next =>` refs to other elements. Perl makes this easy.

## Duncan C. White {#duncan-c-white1}

[Duncan C. White's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/duncan-c-white/perl/ch-1.pl) starts with an integer array and then loops through using `splice` as the "slice" method.

```perl
use Function::Parameters;
fun survivor( $n ) {
    my @alive = ( 1..$n );  # @alive list of person numbers still alive
    my $pos = 0;            # position in @alive
    my $nalive = $n;        # number of people still alive
    while( $nalive>1 ) {
        # person at pos $pos kills person next to him
        my $i = $alive[$pos];
        my $nextpos = $pos+1;
        $nextpos = 0 if $nextpos>$#alive;
        my $j = $alive[$nextpos];
        splice( @alive, $nextpos, 1 );
        $nalive--;
        # hand sword on
        $pos++;
        $pos = 0 if $pos>$#alive;
        my $k = $alive[$pos];
    }
    return $alive[0];
}
```

## E. Choroba {#e-choroba1}

[E. Choroba's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/e-choroba/perl/ch-1.pl) also uses `splice`, but presents a compact solution thanks to taking advantage of modulo arithmetic:

```perl
my @people = 1 .. 50;
my $sword = 0;
while (@people > 1) {
    $sword = (1 + $sword) % @people;
    splice @people, $sword, 1;
    $sword %= @people;
}
say $people[0];
```
**Blog** › [Survivor and Palindrome Dates](http://blogs.perl.org/users/e_choroba/2020/02/perl-weekly-challenge-048-survivor-and-palindrome-dates.html)

## Ian Rifkin {#ianrifkin1}

**Ian Rifkin** is a new member of the Challenge. Welcome, Ian!

[Ian Rifkin's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/ianrifkin/perl/ch-1.pl) uses the `push`/`shift` and `shift` method:

```perl
my $num_people = 50;
my @people;
for (1..$num_people) {
    $people[$_] = $_;
}
my $curr = shift @people;
while (scalar(@people) > 1) {
    my $curr = shift @people;
    push @people, $curr;
    my $curr = shift @people;
    next;
}
print "\n***** The lone survivor is @people *****\n\n";
```

As Ian's first submission, I'm impressed. The code has all the markers I look for in using the language, while being comprehensible and styled in a way that is easy to look at.

## Jaldhar H. Vyas {#jaldhar-h-vyas1}

[Jaldhar H. Vyas's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/jaldhar-h-vyas/perl/ch-1.pl) stores the `@people` in an array. If person `$n` is alive, `$people[$n] == $n - 1`. If that person is dead, `$people[$n] == undef`. To find the next person, Jaldhar simply loops until `$people[$next]` is defined:

```perl
my @people = (0 .. 49);
my $remaining = scalar @people;
my $next = 0;
my $victim = 1;
while ($remaining > 1) {
    $people[$victim] = undef;
    $remaining--;
    do {
        $next = ($next + 1) % 50;
    } until defined $people[$next];
    $victim = $next;
    do {
        $victim = ($victim + 1) % 50;
    } until defined $people[$victim];
}
say +(grep { defined $_; } @people)[0] + 1;
```

With the 0-based indexing, Jaldhar simply adds 1 to the result to get the proper 1-based answer.

## Javier Luque {#javier-luque1}

[Javier Luque's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/javier-luque/perl/ch-1.pl) stores 1..50 in `@people` and then leaves their fate to `kill_and_switch`, which uses the `push`/`shift`, `shift` technique:

```perl
my @people;
$people[$_] = $_ + 1 for (0..49);
kill_and_switch(\@people) while (scalar(@people > 1));
say $people[0] . " is still alive";

sub kill_and_switch {
    my $people = shift;
    # switch
    push @$people, shift @$people;
    # kill
    shift @$people;
}
```

**Blog** › [048 – Perl Weekly Challenge](https://perlchallenges.wordpress.com/2020/02/17/perl-weekly-challenge-048/)

## Laurent Rosenfeld {#laurent-rosenfeld1}

[Laurent Rosenfeld's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/laurent-rosenfeld/perl/ch-1.pl) uses the `push`/`shift`, `shift` technique as well:

```perl
my $number = shift // 50;
my @persons = 1 .. $number;
for (1.. $number - 1) {
    push @persons, shift @persons;
    shift @persons;
}
say "Person @persons is the survivor.\n";
```

**Blog** › [Survivor and Palindrome Dates](http://blogs.perl.org/users/laurent_r/2020/02/perl-weekly-challenge-48-survivor-and-palindrome-dates.html)

## Lubos Kolouch {#lubos-kolouch1}

[Lubos Kolouch's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/lubos-kolouch/perl/ch-1.pl) has a `get_last_man_standing` sub that sets up a `%people` hash (`exists $people{$i}` *iff* person `$i` is alive):

```perl
sub get_last_man_standing {
    my $count = shift;
    my %people;
    for ( 1 .. $count ) {
        $people{$_} = 1;
    }
    my $last   = 0;
    my $switch = 0;
    while (%people) {
        for my $key ( sort { $a <=> $b } keys %people ) {
            delete $people{$key} if $switch;
            $last   = $key;
            $switch = $switch == 0 ? 1 : 0;
        }
    }
    return $last;
}
my $people_count = $ARGV[0];
say get_last_man_standing($people_count);
```

The `while` loop keeps going until `%people` is empty (so even the survivor is killed! But fortunately their spirit remains, in `$last`). The inner loop works on a numerically `sort`ed list of `keys %people`. The `$switch` variable is the key, here: by toggling `$switch`, Lubos ensures that only every other person is killed, each time through the loop, which is exactly how the Josepheus/survivor problem works, if you try it out for yourself.

## Markus Holzer {#markus-holzer1}

[Markus Holzer's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/markus-holzer/perl/ch-1.pl) uses `splice` and `push` together in an interesting way:

```perl
my @men = 1 .. 50;
while ( @men > 1 ) { push @men, my ($d,) = splice @men, 0, 2 }
print "Survivor: @men";
```

First, notice `splice @men, 0, 2` removes the first *two* elements from `@men`, replacing them with nothing.

Next, in `push @men, my ($d,) = `, the `my ($d)` takes the first element (effectively gobbling up the second), so only the first element is pushed to the end of the array. (The comma after `$d` does nothing.)

This is probably easier to understand in motion. For *n* = 5, it results in the following sequence:

```
1,2,3,4,5
3,4,5,1
5,1,3
3,5
3
```

You may have noticed that this is exactly the same sequence you get with the `shift`/`push`, `shift` method, just written with different builtins.

## Mohammad S Anwar {#mohammad-anwar1}

[Mohammad S Anwar's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/mohammad-anwar/perl/ch-1.pl) uses `shift` and `push`:

```perl
use warnings;
my @people = (1 ..50);
while (scalar(@people) > 1) {
    my $sword = shift @people;
    shift @people;
    push @people, $sword;
}
print "Survivor is at position $people[0]\n";
```

*I am really glad to see Mohammad not only participating in the challenge, but now blogging about his solutions as well! His first blog post (below) covers the past three weeks (Weeks 046, 047, and 048), and is a good introspective look at Mohammad's experience contributing solutions in Perl and his early steps in translating those solutions (and, I think, parts of his brain!) to Raku:*

**Blog** › [My first date with Raku](https://perlweeklychallenge.org/blog/my-first-date-with-raku)

## Phillip Harris {#phillip-harris1}

[Phillip Harris's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/phillip-harris/perl/ch-1.pl) uses a brute force looping method to iterate over the `@ppl` array, which is filled with the following symbols:

```
K - The killer      P - Living person       V - Victim
```

Here is the loop (with some `print` statements trimmed out):

```perl
while () {
    #Find next victim
    until ( $ppl[$x] eq "P" ) {
        $x++;
        if ( $x > $numppl ) { $x = 0 }
    }
    $ppl[$x] = "V";
    $ppl[$x] = "_";

    #Find next killer
    until ( $ppl[$x] eq "P" ) {
        $x++;
        if ( $x == $killer ) {    # only the killer remains
            print $x + 1 . " survives\n";
            exit;
        }
        if ( $x > $numppl ) { $x = 0 }
    }
    $ppl[$x]      = "K";
    $ppl[$killer] = "P";
    $killer       = $x;
}
```

Phillip's solution not only finds the survivor, it provides an ASCII visualization of each step of the result (shown here for 11 people):

```
KVPPPPPPPPP
P_KVPPPPPPP
P_P_KVPPPPP
P_P_P_KVPPP
P_P_P_P_KVP
V_P_P_P_P_K
__K_V_P_P_P
__P___K_V_P
__V___P___K
______K___V
1234567890
Person 7 survives
```

## Roger Bell West {#roger-bell-west1}

[Roger Bell West's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/roger-bell-west/perl/ch-1.pl) `splice`s its way to a final victim:

```perl
my @list = ( 1 .. 50 );
my $n    = 0;
while ( scalar @list > 1 ) {
    $n++;
    if ( $n > $#list ) {
        $n = 0;
    }
    splice @list, $n, 1;
}
print $list[0], "\n";
```

Unfortunately, the wrong person comes away a survivor (the result of a conspiracy, perhaps?). This is because there is an off-by-one error in the index wrap-around code:

```perl
    $n++;
    if ( $n > $#list ) {
        $n = 0;
    }
```

This correctly sets the index back to 0 if we hit the end of the list, but if we were already at the end of the list, the index should be 1, not 0. Changing `$n = 0` to `$n -= @list` fixes the problem. `$n = ($n + 1) % @list` also works.

## Ruben Westerberg {#ruben-westerberg1}

[Ruben Westerberg's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/ruben-westerberg/perl/ch-1.pl) also uses `splice`, but is really crunched down into compact form, with some help from the modulo operator:

```perl
my @sur=1..50;
my $i=0;
splice @sur, $i=($i+1)%@sur,1 while @sur > 1;
print "Survivor: $sur[0]\n"
```

## Ryan Thompson {#ryan-thompson1}

[My solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/ryan-thompson/perl/ch-1.pl) is in two parts. First, a circular linked list version:

```perl
my @ll = (undef, 2..$N, 1); # Circular linked list
my $cur = 1;
$ll[$cur] = $ll[$ll[$cur]], $cur = $ll[$cur] until $ll[$cur] == $cur;
say $cur;
```

A linked list is a high level description of a data structure. The underlying implementation can vary, and in this case, I'm using an array of numbers. The array *index* is the current person, and the *value* at that index is the *next* person in the linked list. I'm using two linked list operations, here (`$cur` is the "cursor", or index of the current element):

```perl
$ll[$cur] = $ll[$ll[$cur]]  # "delete" -- Delete element to the right
    $cur  = $ll[    $cur ]  # "next"   -- Go to next element in list
```

***

For my second solution, I went ahead and derived a constant-time formula:

```perl
2 * ($N - 2**int( log($N) / log(2) )) + 1;
```

(This analytic version ran nearly 30x faster than the linked list version, which is actually good news for the linked list version; I thought it'd be slower!)

**Blog** › [Survivor (Josepheus problem)](http://www.ry.ca/2020/02/survivor-josepheus-problem/)

## Saif Ahmed {#saiftynet1}

[Saif Ahmed's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/saiftynet/perl/ch-1.pl) really went above and beyond this week. The solution uses `shift`/`push` to get the survivor, which is all well and good, but then Saif decided to animate it by using `clear`/`cls` and then redrawing, plotting all of the victims in an ever-shrinking circle. Here's one "frame":

```
                          13    11    9    7    5    3
                17  15                                      1
            19                                                    50
                                                                    49
        21                                                              48
      23                                                                  47
    25
                                                                          46
    27                                                                    45
    28
      29                                                                  44
        30                                                              43
                                                                    42
          31                                                    41
                32  33                                      40
                          34    35    36    37    38    39

27 killed 28 and passed sword to 29
```

Unfortunately, I can't show the animation here, so I encourage you to try his solution yourself.

We've seen the `shift`/`push` method to find the survivor already, so I'll show Saif's `circle` sub instead, which plots all of the living victims in an ellipsoid:

```perl
sub circle {
    my $circleList = shift;
    my @plotArea   = ();      # reset plot area
    push @plotArea, [ ("  ") x 40, "\n" ]
      foreach ( 0 .. 16 );    # two spaces per point
    my $center = [ 9, 20 ];   # adjust for different console sizes
    my $radius = [ 8, 18 ];   # adjust for different console sizes
    foreach my $angle ( 0 .. @$circleList - 1 ) {
        $plotArea[ $$center[0] +
          $$radius[0] * sin( $angle * 6.28 / @$circleList ) ]
          [ $$center[1] - $$radius[1] * cos( $angle * 6.28 / @$circleList ) ] =
          $$circleList[$angle];
    }
    print @{$_} foreach (@plotArea);    # the plot area
}
```

## Jen Guerra {#southpawgeek1}

Jen Guerra is new to the Challenge. Welcome, Jen!

[Jen Guerra's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/southpawgeek/perl/ch-1.pl) uses `push`/`shift` and `shift`:

```perl
my $peons = 50;
my @peon;
for my $i (1..$peons) {
    push @peon, $i;
}
while (scalar @peon > 1) {
    push @peon, shift @peon;
    shift @peon;
}
say "@peon wins";
```

This is a very solid opening submission from Jen. I look forward to seeing more!

## Steven Wilson {#steven-wilson1}

[Steven Wilson's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/steven-wilson/perl/ch-1.pl) uses `splice`:

```perl
my @circle   = 1 .. 50;
my $position = 1;
while ( scalar @circle > 1 ) {
    if ( $position > scalar @circle ) {
        $position = 0;
    }
    splice @circle, $position, 1;
    $position++;
}
say "Survivor is at position $circle[0]";
```

However, the solution gives the wrong answer, due to an off-by-one error in the index wrap code:

```perl
    if ( $position > scalar @circle ) {
        $position = 0;
    }
```

The problem is that `@circle`'s length changes throughout the loop, so there are actually two possible states: we hit the end of the circle exactly, or we end up one index past the end, depending on whether we were on odd or even indexes. One way to fix this is to subtract the length of `@circle` from `$position`, so that `$position` will be 0 or 1:

```perl
    if ( $position >= @circle ) {
        $position -= @circle;
    }
```

Another way is to use modulo arithmetic. Combined with the increment step, we can use: `$position = ($position + 1) % @circle;`

## Ulrich Rieke {#ulrich-rieke1}

[Ulrich Rieke's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/ulrich-rieke/perl/ch-1.pl) uses an array of `@people = 1..50`, who gradually become `'dead'`. The `findNextAlive` sub iterates through to find the position of the next living person in the list:

```perl
sub findNextAlive {
    my $pos   = shift;
    my $array = shift;

    #we have to do one step to the right to get away from the last position
    #important to wrap around the end of the array if necessary!
    $pos++;
    if ( $pos > 49 ) {
        $pos = $pos % 50;
    }
    while ( ${$array}[$pos] !~ /\d+/ ) {
        $pos++;
        if ( $pos > 49 ) {
            $pos = $pos % 50;
        }
    }
    return $pos;
}
```

The main loop then keeps looping, [Highlander](https://en.wikipedia.org/wiki/Highlander_(film)) style, until only one remains:

```perl
my @people   = ( 1 .. 50 );
my $sword_at = 0;
my $size     = 50;
while ( $size != 1 ) {
    my $victimpos = findNextAlive( $sword_at, \@people );
    $people[$victimpos] = "dead";
    $sword_at           = findNextAlive( $victimpos, \@people );
    $size               = scalar grep { $_ =~ /\d+/ } @people;
}
my @survivors = grep { $_ =~ /\d+/ } @people;
print "The last survivor is $survivors[0] !\n";
```

## User Person {#user-person1}

[User Person's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/user-person/perl/ch-1.pl) provides a complete solution along with `Getopt::Long` commandline arguments:

```perl
use Getopt::Long;
GetOptions(\my %option, 'verbose|v') or die "Bad options\n";
my @circle = ( 1 .. 50 );
for (my $i = 1; scalar @circle > 1 ; ++$i) {
    print "i: $i\n" if $option{verbose};
    my $victim = splice(@circle, $i, 1);
    if ($option{verbose}) {
        print $circle[$i-1] . " killed " . $victim . "\n";
        print "@circle\n\n";
    }
    if ( $#circle - $i == 0) {
        $i = -1;
    } elsif ( $#circle - $i == -1) {
        $i = 0;
    }
}
print "@circle survives\n";
```

Note the last `if .. elsif`: if you recall the problem that a few people had with odd/even indexes resulting in off-by-one errors when circling around to the start of the array, User Person solves this uniquely by adding logic to look for that exact scenario, and setting the index appropriately.

## Walt Mankowski {#walt-mankowski1}

[Walt Mankowski's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/walt-mankowski/perl/ch-1.pl) uses `splice`, and the modulo operator to wrap the index around:

```perl
my @person = 1..50;
my $i = 0;
while (@person > 1) {
    my $j = ($i + 1) % @person;
    splice(@person, $j, 1);
    $i = ($i + 1) % @person;
}
say "The survivor is @person";
```

This solution gives the wrong answer (17, expecting 37), because `@person`'s length changes between the `$i` and `$j` assignments, so the index wrap ends up being off by 1 some of the time. (In general, it's really easy to make mistakes like this when you are indexing over a list that changes its length.) Here is how I would fix Walt's solution:

```perl
# Ryan's fix
my @person = 1..50;
my $i = 0;
while (@person > 1) {
    $i = ($i + 1) % @person;
    splice(@person, $i, 1);
}
```

## Wanderdoc {#wanderdoc1}

[Wanderdoc's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/wanderdoc/perl/ch-1.pl) uses `vec` to make a bit vector of living people. First up is the `rotate` sub:

```perl
sub rotate {
     ${$_[0]} %= $par{h} if ( ${$_[0]} > $par{h} );
}
```

This is called with a scalar ref (`rotate(\$sword)`), and mutates `$sword` to contain the remainder of `$sword / 50` (default). Here is the loop that finds the survivor:

```perl
my %par = (h => 50, w => 2, s => 1);
my $people = '';
vec($people, $_, 1) = 1 for 1 .. $par{h};
my $sword = 1; # 1-indexed by specification.
while ( unpack ('%32b*', $people) > $par{s} ) {
     my $counter = 0;
     while ( $counter < $par{w} - 1 ) {
          $sword++;
          rotate(\$sword);
          $counter++ if  1 == vec($people, $sword, 1);
     }
     vec($people, $sword, 1) = 0;
     print $sword, ' '; # To comment out on big numbers!
     $sword++ and rotate(\$sword) while ( 0 == vec($people, $sword, 1) );
}
my @survived = grep 1 == vec($people, $_, 1), 1 .. $par{h};
print "$/Survived: ", join(" ", @survived), $/;
```

Aside from using `vec` instead of array accesses, this solution is similar to the solutions we've seen that use fixed-length arrays.

***

***

# Task #2 - Palindrome Dates {#task2}

Write a script to print all Palindrome Dates between 2000 and 2999. The format of date is **mmddyyyy**. For example, the first one was on October 2, 2001 as it is represented as `10022001`.

***

The solutions from this task can be broken into the following main categories:

### Solutions using date libraries

Many people used one of the various date libraries on CPAN (or core `Time::Local`) to help them iterate through and/or validate dates they obtained.

### Solutions that did not use date libraries

Others realized that, in fact, the dates meeting the specification can be validated very easily without using a date library, if you are careful with how you set up your loops.

***

## Alexander Karelas {#alexander-karelas2}

[Alexander Karelas's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/alexander-karelas/perl/ch-2.pl) uses `Time::Local` to reject invalid dates:

```perl
use Time::Local;
for (my $year = 2000; $year <= 2999; $year++) {
    my ($day, $month) = (reverse $year) =~ /(..)(..)/;
    eval { timegm(0, 0, 0, $day, $month - 1, $year - 1900) };
    if (! $@) {
        say reverse($year) . $year;
    }
}
```

Alexander flipped `my ($day, $month)`, so the results are not correct, but simply changing that to `my ($month, $day)` gives the right results for the required `mmddyyyy` dates.

## Alicia Bielsa {#alicia-bielsa2}

[Alicia Bielsa's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/alicia-bielsa/perl/ch-2.pl) uses `DateTime` and [`Try::Tiny`](https://metacpan.org/pod/Try::Tiny) to validate dates, trying each year:

```perl
use DateTime;
use Try::Tiny;
use English;
foreach my $date (2000..2999){
    my $palindromeDate = reverse($date).$date;
    if (isValidDate ($palindromeDate )){
            print "Palindrome Date $palindromeDate \n";
    }
}
sub isValidDate {
    my $dateToValidate = shift;
    my $validDate = 1;
    my $dt = try {
         DateTime->new(
        year       => substr($dateToValidate, 4,4),
        month      => substr($dateToValidate, 0,2),
        day        => substr($dateToValidate, 2,2));
    } catch {
        if ($ARG){
            $validDate = 0;
        }
    };
    return $validDate;
}
```

## Andrezgz {#andrezgz2}

[Andrezgz's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/andrezgz/perl/ch-2.pl) validates dates, but does so with a custom `is_valid_dom` (day of month) sub, that handles days in every month, including leap days:

```perl
sub is_valid_dom {
    my ($y, $m, $d) = @_;
    return if $d < 1 || $d > 31 || $m < 1 || $m > 12; # impossible days/months
    return if $d > 30  && grep {$m == $_} (4,6,9,11); # 30-day months
    return if $d > 29  && $m == 2;                    # 28-day February
    return if $d == 29 && $m == 2                     # 29-day February
              && ! ($y % 4 == 0 && ($y % 100 != 0 || $y % 400 == 0) ); # not a leap year
    return 1; # valid day for the month and year
}
```

The code to check each date, then, just iterates through the years:

```perl
my $y = 1999;
my @months = qw/Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec/;
while ( ++$y < 3000 ) {
    # year is inverted and divided to get month and day
    my ($m, $d) = scalar(reverse $y) =~ m/../g ;
    next unless is_valid_dom($y, $m, $d);
    print $months[$m-1] . ' ' . $d . ', ' . $y .$/;
}
```

Andrezgz also pretty-prints the dates with the 3-letter month names, such as `Sep 22, 2290`.

## Cheok-Yin Fung {#cheok-yin-fung2}

[Cheok-Yin Fung's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/cheok-yin-fung/perl/ch-2.pl) is the first we'll see to realize that only certain days of the month will ever occur, so date validation is unnecessary:

```perl
my @dd = ("02", 12, 22);
my @ddr = (20, 21, 22);
my @mm;
for my $i (0..11) {
    if ($i <= 8) {
               $mm[$i] = "0"; $mm[$i] .=($i+1) ;
    } else {$mm[$i] = $i+1;}
}
my @temp;
foreach my $i (@mm) {
    $temp[$i] = scalar reverse $i;
}
@temp = sort {$a cmp $b} @temp;
```

With the valid days and months pre-calculated, the valid dates can be printed with a simple nested loop:

```perl
for my $i (0..2) {
    for my $j (0..11) {
        my $ttemp = scalar reverse $temp[$j];
        print $ttemp.$dd[$i].$ddr[$i].$temp[$j]."\n";
    }
}
```


## Colin Crain {#colin-crain2}

[Colin Crain's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/colin-crain/perl/ch-2.pl) has a custom `validate` sub that checks for valid day of month and month numbers, recognizing that leap years need not be considered as that would be the year 9220, outside our range.

```perl
sub validate {
    my $test = shift;
    my @mlen  = ( 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
    my ($m, $d) = map {substr($test, $_, 2)} (0, 2);
    return 0 if ( $m > 12           || $m == 0 );
    return 0 if ( $d > $mlen[$m-1]  || $d == 0 );
    return 1;
}
```

The main loop then just iterates through the year range and prints the valid
palindromes, with hyphens separating the `mm-dd-yyyy` parts:

```perl
for ( 2000..2999 ) {
    my $pal = (reverse $_) . $_;
    if ( validate($pal) ) {
        substr($pal, $_, 0, "-") for (2,5);
        say $pal;
    }
}
```

## Dave Cross {#dave-cross2}

[Dave Cross's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/dave-cross/perl/ch-2.pl) makes a deliberate decision to use `ddmmyyyy` dates instead:

```perl
# The original question appears to contain a typo as it suggests we use
# the illogical 'mmddyyyy' date format. My solution uses 'ddmmyyyy' instead.
```

Dave uses the core [`Time::Piece`](https://perldoc.perl.org/Time/Piece.html) module to iterate through every *day* between January 1, 2000 and Dec 31, 2999, printing out the palindromes:

```perl
use Time::Piece;
use Time::Seconds;
my $fmt = '%d%m%Y';
my ( $y, $m, $d ) = ( 2000, 1, 1 );
my $str_date = sprintf '%02d%02d%d', $d, $m, $y;
my $date     = Time::Piece->strptime( $str_date, $fmt );

while ( $date->year <= 2999 ) {
    $str_date = $date->strftime($fmt);
    if ( $str_date eq reverse $str_date ) {
        say $date->ymd, " is a palindrome ($str_date)";
    }
    $date += ONE_DAY;
}
```

`Time::Seconds` exports the `ONE_DAY` constant, which I choose to assume without verification, is equal to 86400.

I like the direct approach Dave has taken, here. It does take 3.5 seconds to run on my system, but since this isn't the sort of thing you'd need to re-run, that's not really an issue.

## Dave Jacoby {#dave-jacoby2}

[Dave Jacoby's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/dave-jacoby/perl/ch-2.pl) iterates through the years, and does a quick inline validation to throw out the invalid dates:

```perl
for my $year ( 2000 .. 2999 ) {
    my $month = reverse substr $year, 2, 2;
    my $day   = reverse substr $year, 0, 2;
    next if $day < 1;
    next if $month < 1;
    next if $day > 31;
    next if $month > 12;
    say join '-', $month, $day, $year;
}
```

This validation works, because the day will never exceed 22. Dave sums this up by saying "the day of the month can only be a number ending in 2, and there are no months having 32 days".

## Duane Powell {#duane-powell2}

[Duane Powell's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/duane-powell/perl/ch-2.pl) uses [`DateTime`](https://metacpan.org/pod/DateTime) and [`DateTime::Duration`](https://metacpan.org/pod/DateTime::Duration) to iterate through each day, and validate those dates:

```perl
use DateTime;
use DateTime::Duration;
my $year_end = shift || 3000;
my $dt  = DateTime->new('year' => 2000, 'month' => 1, 'day' => 1);
my $day = DateTime::Duration->new('days' => 1);
until ($dt->year == $year_end) {
    my @pali = split('',$dt->mdy);
    # @pali is a 10 element array MM-DD-YYYY
    say $dt->mdy() if ($pali[0] == $pali[9] and $pali[1] == $pali[8] and $pali[3] == $pali[7] and $pali[4] == $pali[6]);
    $dt->add( $day );
}
```

This took 47 seconds to run on my machine.

## Duncan C. White {#duncan-c-white2}

[Duncan C. White's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/duncan-c-white/perl/ch-2.pl) allows the user to choose between `UK` (**ddmmyyyy**), `ISO` (**yyyymmdd**), and `US` (**mmddyyyy**) date formats, which I quite like.

The `palindromic` function is rather self-explanatory:

```perl
fun palindromic( $s ) {
    return $s eq reverse($s) ? 1 : 0;
}
```

`formdate` (not shown) simply takes in a `$day, $month, $year` and a `$format`
and returns the date formatted to that specification.

The `palindromicdates` function loops over every day in the date range:

```perl
fun palindromicdates( $startyear, $endyear, $format ) {
    my @palindrome;
    foreach my $year ($startyear..$endyear) {
        foreach my $month (1..12) {
            my $ndays = Date_DaysInMonth($month,$year);
            foreach my $day (1..$ndays) {
                my $date = formdate(
                    $day, $month, $year, $format );
                push @palindrome, $date if palindromic($date);
            }
        }
    }
    return @palindrome;
}
```

## E. Choroba {#e-choroba2}

[E. Choroba's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/e-choroba/perl/ch-2.pl) uses `Time::Piece` to validate the dates, iterating one day at a time:

```perl
#! /usr/bin/perl
use Time::Piece;
my $date = 'Time::Piece'->strptime('2000-01-01', '%Y-%m-%d');
while ($date->year < 3000) {
    my $formatted = $date->strftime('%m%d%Y');
    say $date->strftime('%B %-d, %Y') if $formatted eq reverse $formatted;
    $date += Time::Seconds::ONE_DAY;
    # Optimisation.
    $date = 'Time::Piece'->strptime(($date->year + 1) . '-01-01', '%Y-%m-%d')
        if reverse(int($date->year / 100)) > 31
        || reverse($date->year % 100) > 12;
}
```

**Blog** › [Survivor and Palindrome Dates](http://blogs.perl.org/users/e_choroba/2020/02/perl-weekly-challenge-048-survivor-and-palindrome-dates.html)

## Ian Rifkin {#ianrifkin2}

[Ian Rifkin's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/ianrifkin/perl/ch-2.pl) uses [`Date::Simple`](https://metacpan.org/pod/Date::Simple) to validate each date, one day at a time:

```perl
use Date::Simple;
my $check_date = Date::Simple->new('2000-01-01');
my $end_date = Date::Simple->new('2999-12-31');
print "\nThe following dates from $check_date to $end_date are palindromes assuming the format mmddyyy:\n";
while ($check_date <= $end_date) {
    my $forwards = $check_date->format('%m%d%Y');
    my $backwards = reverse $forwards;
    print "$forwards (" . $check_date->format('%m-%d-%Y') . ")\n" if $forwards == $backwards;
    $check_date++
}
```

## Jaldhar H. Vyas {#jaldhar-h-vyas2}

[Jaldhar H. Vyas's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/jaldhar-h-vyas/perl/ch-2.pl) uses a hard-coded list of reversed months to shorten the search space. He then uses a regex with named captures to make it easy to split out the month and day from the `reverse $year`:

```perl
my @years =
    grep {
        / (?<year> \d\d) $ /gmx;
        grep { $_ == $+{year}} (10, 20, 30, 40, 50, 60 , 70, 80, 90, 1, 11, 21)
    } (2000 .. 2999);
for my $year (@years) {
    (reverse $year) =~ / \A (?<month> \d\d) (?<day> \d\d) \z /gmx;
    if ($+{day} < 23) {
        say join q{/}, ($+{month}, $+{day}, $year);
    }
}
```

## Javier Luque {#javier-luque2}

[Javier Luque's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/javier-luque/perl/ch-2.pl) is another using `Time::Piece`, iterating 86400 seconds at a time:

```perl
use Time::Piece;
use Time::Seconds;
use feature qw /say/;
my $current_date = Time::Piece->strptime('01-01-2000', '%m-%d-%Y');
my $end_date     = Time::Piece->strptime('12-31-2999', '%m-%d-%Y');
while ($current_date < $end_date) {
    my $date_string = $current_date->strftime('%m%d%Y');
    say $date_string if ($date_string eq reverse($date_string));
    $current_date = $current_date + ONE_DAY;
}
```

**Blog** › [048 – Perl Weekly Challenge](https://perlchallenges.wordpress.com/2020/02/17/perl-weekly-challenge-048/)

## Laurent Rosenfeld {#laurent-rosenfeld2}

[Laurent Rosenfeld's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/laurent-rosenfeld/perl/ch-2.pl) iterates through the years, with a quick inline validation:

```perl
for my $year (2000 .. 2300) {
    my ($month, $day) = (reverse $year) =~ /(\d\d)(\d\d)/;
    next if $month > 12 or $month < 1 or $day > 31 or $day < 1;
    say "$month/$day/$year is a palindromic date.";
}
```

**Blog** › [Survivor and Palindrome Dates](http://blogs.perl.org/users/laurent_r/2020/02/perl-weekly-challenge-48-survivor-and-palindrome-dates.html)

## Lubos Kolouch {#lubos-kolouch2}

[Lubos Kolouch's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/lubos-kolouch/perl/ch-2.pl) uses `DateTime` to iterate one day (`60 * 60 * 24` seconds) at a time, printing out anything that passes the `is_palindrome` test:

```perl
use DateTime;
sub is_palindrome {
    my $dt = shift;
    return 1 if $dt->mdy('') eq reverse $dt->mdy('');
    return 0;
}
my $dt_start = DateTime->new( year => 2000, month => 1, day => 1 );
my $epoch_test = $dt_start->epoch;
my $dt_end = DateTime->new( year => 2999, month => 12, day => 31 );
my $epoch_end = $dt_end->epoch;
while ($epoch_test < $epoch_end) {
    my $dt = DateTime->from_epoch( epoch => $epoch_test);
    say $dt->mdy if is_palindrome($dt);
    $epoch_test += 60 * 60 * 24;
}
```


## Mohammad S Anwar {#mohammad-anwar2}

[Mohammad S Anwar's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/mohammad-anwar/perl/ch-2.pl) uses [`Date::Tiny`](https://metacpan.org/pod/Date::Tiny), yet another contender in date/time modules I did not have installed before starting this review!

```perl
use Date::Tiny;
my $date = Date::Tiny->new(year => 2000, month => 1, day => 1);
while ($date->year <= 2299) {
    my $date_as_str = sprintf("%02d%02d%04d", $date->month, $date->day, $date->year);
    if ($date_as_str eq reverse($date_as_str)) {
        print "$date_as_str is a Palindrome date.\n";
    }
    my $datetime = $date->DateTime->add(days => 1);
    $date = Date::Tiny->new(year => $datetime->year, month => $datetime->month, day => $datetime->day);
}
```

Mohammad's code iterates through one day at a time, checking for palindromes with `reverse`). The code takes 23 seconds to run on my system, but the results are correct.

**Blog** › [My first date with Raku](https://perlweeklychallenge.org/blog/my-first-date-with-raku)

## Peter Scott {#peter-scott2}

[Peter Scott's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/peter-scott/perl/ch-2.pl) uses `DateTime` to advance day by day. Interestingly, Peter uses a regex with backrefs instead of `reverse` to check for palindromes.

```perl

#!/usr/local/bin/perl
use 5.016;
use warnings;
use DateTime;
my $dt=DateTime->new(year=>2000, month=>1, day=>1);
my $dt_end = DateTime->new(year=>2999,month=>12, day=> 31);
while ( DateTime->compare( $dt, $dt_end ) <= 0 ) {
    local $_ = $dt->strftime("%m%d%Y");
    /(\d)(\d)(\d)(\d)\4\3\2\1/ and say;
    $dt->add( days => 1 );
}
```

`DateTime` isn't a particularly fast library, which is why the runtime here is quite long at 57 seconds on my system.

## Phillip Harris {#phillip-harris2}

[Phillip Harris's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/phillip-harris/perl/ch-2.pl) has a 3-nested loop for every `$year`, `$month`, and `$day` within the range, using [`Date::Calc`](https://metacpan.org/pod/Date::Calc)'s `check_date` function to validate the dates:

```perl
use Date::Calc qw(check_date);

$year  = 2000;
$month = 1;
$day   = 1;

for ( $year = 2000 ; $year <= 2999 ; $year++ ) {
    for ( $month = 1 ; $month <= 12 ; $month++ ) {
        for ( $day = 1 ; $day <= 31 ; $day++ ) {
            $md = sprintf( "%02d%02d", $month, $day );
            if ( $md eq reverse($year) ) {
                if ( check_date( $year, $month, $day ) ) {
                    print "$md$year\n";
                }
            }
        }
    }
}
```

`Date::Calc` is doing a lot less, so this solution runs in about 1/4 second on my system, underscoring the vast differences between libraries with differing design goals.

## Roger Bell West {#roger-bell-west2}

[Roger Bell West's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/roger-bell-west/perl/ch-2.pl) uses `strftime` from `POSIX`, along with some magic numbers for day numbers (days past the epoch, Jan 1, 1970):

```perl
use strict;
use warnings;
use POSIX qw(strftime);
my $format='%m%d%Y';
foreach my $d (10957..376199) {
  my $u=strftime($format,gmtime($d*86400));
  if ((scalar reverse $u) eq $u) {
    print "$u\n";
  }
}
```

## Ruben Westerberg {#ruben-westerberg2}

[Ruben Westerberg's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/ruben-westerberg/perl/ch-2.pl) uses the by-now familiar `Time::Piece` and `Time::Seconds` modules to iterate and check for palindromes:

```perl
use Time::Piece;
use Time::Seconds;
my $s=Time::Piece->strptime("2000-01-01","%Y-%M-%D");
my $e=Time::Piece->strptime("2999-01-01","%Y-%M-%D");
my $d=$s;
while ($d < $e) {
    my $str= $d->strftime("%m%d%Y");
    print "Date is a palindrone: ".$d->strftime."\n" if ($str eq reverse $str );
    $d+=ONE_DAY;
}
```

## Ryan Thompson {#ryan-thompson2}

[My solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/ryan-thompson/perl/ch-2.pl) started with a bit of analysis, to figure out which months and days would come up. [My blog](http://www.ry.ca/2020/02/palindrome-dates/) goes into the details, but the key points are:

1. Because the date is the reverse of the century, which varies from 20..29, all dates must therefore end in 2. Thus, the date (`$dd`) can only be `02`, `12`, or `22`.

2. The 2-digit year (`$yy`) is also the reverse of the month, which must be 01..12. I assemble `@yy` so that the dates will be in sorted order.

After this, I just need the cross product of `qw<02 12 22>` and `@yy`, so a simple nested loop will suffice:

```perl
my @yy = sort map { chop . ($_||0) } 1..12;
for my $dd (qw<02 12 22>) {
    for my $yy (@yy) {
        printf "%02d-%02d-%02d%02d\n",
            scalar reverse($yy), $dd, scalar reverse($dd), $yy;
    }
}
```

Note that no validation is needed with this method! It runs in around 3ms, most of which is `perl` startup. `Benchmark` tells me it runs in 40μs if I change the `printf` to `sprintf`, as terminal output becomes a bottleneck.

**Blog** › [Palindrome Dates (mm/dd/yyyy)](http://www.ry.ca/2020/02/palindrome-dates/)

## Saif Ahmed {#saiftynet2}

[Saif Ahmed's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/saiftynet/perl/ch-2.pl) is another that allows the user to choose their preferred date format, in this case `MDY`, `DMY`, or `YMD`.

Saif iterates over each year, and then uses `reverse` with `substr` to pull out the `$mm` and `$dd` from that, swapping them if the date format needs it:

```perl
foreach my $yyyy (2000..2999){
   my $mm   =  reverse substr($yyyy,2,2);
   my $dd   =  reverse substr($yyyy,0,2);
   ($mm,$dd)=($dd,$mm) if $format eq "DMY";    # Swap if DDMMYYY required
   next if ($mm >12 or $mm ==0);               # Discard invalid months
   if ($mm =~/02/){                            # February is special case
       $notLeapYear=($y % 4)||(!($y%100)&&($y%400));
       my $FebDays=(28+($notLeapYear?0:1))."";
       next if ($dd gt $FebDays or $dd eq "00")
   }
   elsif ($mm=~/^01|03|05|07|08|10|12/){       # months with 31 days
       next if ($dd gt "31"     or $dd eq "00");
   }
   else{                                       # all the rest have 30 days
       next if ($dd gt "30"     or $dd eq "00");
  }
   print "M $mm, D $dd, Y $yyyy :  $mm$dd$yyyy \n" if $format eq "MDY";
   print "D $dd, M $mm, Y $yyyy :  $dd$mm$yyyy \n" if $format eq "DMY";
   print "Y $yyyy, M $mm, D $dd :  $yyyy$mm$dd \n" if $format eq "YMD";
}
```

Saif then checks for the correct number of days in the month, and if the date passes all of those checks, it is printed in the requested format.

## Jen Guerra {#southpawgeek2}

[Jen Guerra's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/southpawgeek/perl/ch-2.pl) uses `Date::Calc`'s `check_date`:

```perl
use Date::Calc qw/check_date/;
my $yyyy = 2000;
my $ymax = 3000;
while ($yyyy < $ymax) {
    my $mm = reverse(substr($yyyy, 2, 2));
    $yyyy++ and next if $mm > 12 || !$mm;
    my $dd = reverse(substr($yyyy, 0, 2));
    $yyyy++ and next if $dd > 31 || !$dd;
    say "$mm$dd$yyyy is a palindrome" if check_date($yyyy, $mm, $dd);
    $yyyy++;
}
```

Jen also uses `reverse` and `substr` to pull out the `$mm` and `$dd` components of the date, and prints out the palindromes that pass `check_date`. Even with the external validation, this solution runs in a mere 35ms.

## Steven Wilson {#steven-wilson2}

[Steven Wilson's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/steven-wilson/perl/ch-2.pl) uses `DateTime` to iterate through each year, pulling it apart to get the month and day. Steven wraps the `DateTime->new` call in an `eval` to catch invalid dates:

```perl
use DateTime;
my $year = 2000;
while ( $year < 3000 ) {
    eval {
        my $dt = DateTime->new(
            year  => $year,
            month => substr( $year, -1, 1 ) . ( substr $year, -2, 1 ),
            day   => substr( $year, -3, 1 ) . ( substr $year, -4, 1 ),
        );
        my $reay = reverse $year;
        say "$reay$year";
    };
    $year++;
}
```

If `DateTime->new` dies, the `say` statement will not be reached, thus only palindromic dates will be printed.

## User Person {#user-person2}

[User Person's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/user-person/perl/ch-2.pl) did some analysis of their own to optimize their solution. I've left the comments in, as they are more or less required reading:

```perl
#  M   M   D   D  Y   Y   Y   Y
# [01][*][012][2][2][012][*][01]
#  $k $j  $i         $i  $j  $k
#
# $k - Months can only begin with 0 or 1.
# $j - The second months digit needs all numbers e.g. January 01 to October 10 (and of course beyond).
# $i - Days begin with 0,1,2,3, However all years begin with 2 so the cooresponding number
# means all days end in 2. 32 is not a valid day so the 3 is not needed.
for ( my $i=0; $i < 3; ++$i ){
    for ( my $j=0; $j < 10; ++$j ){
      EDGES:
        for ( my $k=0; $k < 2; ++$k ){
            if (( $k == 1 and $j > 2 ) or ( $k == 0 and $j == 0 )) { # Months cannot be > 12 or 00
                next EDGES;
            }
            print "$k$j-${i}2-2$i$j$k\n";
        }
    }
}
```

User Person's nested loops iterate over the 10s digit of the day (`$i`), 1s digit of the month (`$j`), and 10s digit of the month (`$k`). The `if` statement handles the bit of validation required.

## Walt Mankowski {#walt-mankowski2}

[Walt Mankowski's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/walt-mankowski/perl/ch-2.pl) uses `DateTime`, looping through each day to find the palindromes:

```perl
use DateTime;
for my $year (2000..2999) {
    my $month = reverse(substr($year, 2, 2));
    if ($month >= 1 && $month <= 12) {
        my $dt = DateTime->new(year => $year, month => $month);
        for my $day (1..$dt->month_length()) {
            my $date = sprintf("%02d%02d%d", $month, $day, $year);
            say $date if $date eq reverse($date);
        }
    }
}
```

Using `month_length` method, this solution runs in just 175ms on my system, which is orders of magnitude faster than other `DateTime` solutions which iterate day by day like this one.

## Wanderdoc {#wanderdoc2}

[Wanderdoc's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/wanderdoc/perl/ch-2.pl) is another example of `Time::Piece`:

```perl
use Time::Piece;
use Time::Seconds;
my $START = "01.01.2000";
my $STOP  = "12.31.2999";
my $INPUT_FORMAT = "%m.%d.%Y";
my $t1 = Time::Piece->strptime($START, $INPUT_FORMAT);
my $t2 = Time::Piece->strptime($STOP , $INPUT_FORMAT);
my $counter;
while ( $t1 <= $t2  ) {
     ((reverse $t1->yy) + 0) > 12 and
          $t1 = Time::Piece->strptime("12.31." . $t1->year , $INPUT_FORMAT);
     my $output_mdy = $t1->mdy('');
     print join("\t", ++$counter, $output_mdy), $/
          if $output_mdy eq reverse $output_mdy;
     $t1 += ONE_DAY;
}
```



***

***

## See Also {#blogs}

### Blogs this week:

**E. Choroba** › [Survivor and Palindrome Dates](http://blogs.perl.org/users/e_choroba/2020/02/perl-weekly-challenge-048-survivor-and-palindrome-dates.html)

**Javier Luque** › [048 – Perl Weekly Challenge](https://perlchallenges.wordpress.com/2020/02/17/perl-weekly-challenge-048/)

**Laurent Rosenfeld** › [Survivor and Palindrome Dates](http://blogs.perl.org/users/laurent_r/2020/02/perl-weekly-challenge-48-survivor-and-palindrome-dates.html)

**Mohammad S Anwar** › [My first date with Raku](https://perlweeklychallenge.org/blog/my-first-date-with-raku)

**Ryan Thompson** › [Survivor (Josepheus problem)](http://www.ry.ca/2020/02/survivor-josepheus-problem/) | [Palindrome Dates (mm/dd/yyyy)](http://www.ry.ca/2020/02/palindrome-dates/)
