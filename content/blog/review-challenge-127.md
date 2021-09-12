---
author:       Colin Crain
date:         2021-09-12T00:00:00
description:  "Colin Crain › Perl Weekly Review #127"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #127"
image:        images/blog/p5-review-challenge-127.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-126/).* )

Welcome to the Perl review for **Week 127** of the Weekly Challenge! Here we will take the time to discuss the  submissions offered by the team, factor out the common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

---

### Why do we do these challenges?

I suppose any answers to that would be as wide ranging and varied as the people who choose to join the team. One thing is clear: it's not a competition, and there are no judges, even if there is a "prize" of sorts. About that -- I think of it more as an honorarium periodically awarded to acknowledge the efforts we make towards this strange goal. So there's no determination to find the *fastest*, or the *shortest*, or even, in some abstract way, the *best* way to go about things, although I'm certain the individuals have their own aspirations and personal drives. As Perl is such a wonderfully expressive language, this provides quite a bit of fodder to the core idea of TMTOWTDI, producing a gamut of wonderfully varied techniques and solutions.

Even the tasks themselves are often open to a certain amount of discretionary interpretation. What we end up with is a situation where each participant is producing something in the manner they find the most interesting or satisfying. Some team members focus on carefully crafted complete applications that thoroughly vet input data and handle every use case they can think up. Others chose to apply themselves to the logic of the underlying puzzle and making it work in the most elegant way they can. Some eschew modules they would ordinarily reach for, others embrace them, bringing to light wheels perhaps invented years ago that happen to exactly solve the problem in front of them today.

I've been considering this question for some time and have found one binding commonality between all of us solving these challenges each week, in that however we normally live our lives, the task in front of us more than likely has nothing to do with any of that . And I think this has great value. We all do what we do, out in the real world, and hopefully we do it well. The Weekly Challenge provides a opportunity to do something germane to that life yet distinctly different; if we only do the things we already know how to do we only do the same things over and over. This is where the "challenge" aspect comes into play.

So we can consider the Weekly Challenge as providing a problem space outside of our comfort zone, as far out from comfort as we wish to take things. From those reaches we can gather and learn things and bring what we want back into our lives. Personally, I think that's its greatest value of all.

---

Every week there is an enormous global collective effort made by the team, analyzing and creatively coding the submissions, and that effort deserves credit due. And that's why I'm here, to try and figure out how to do that.

Let's have a look and see what we can find.

---

**<big>For context</big>**  before we begin, you may wish to revisit either of the pages for the [**original tasks**](/blog/perl-weekly-challenge-127/) or the summary [**recap**](/blog/recap-challenge-127/) of the challenge. But don't worry, the challenges themselves will be briefly summarized, presented below as we progress from task by task. Oh, and one more thing before we get started:

### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

**So finally, without further ado...**

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC127TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC127TASK2)   &nbsp;  &nbsp;  &nbsp;   	•   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC127BLOGS)    &nbsp;  &nbsp;  &nbsp;   	•

---

# TASK 1 {#PWC127TASK1}

# Disjoint Sets
*Submitted by: Mohammad S Anwar*<br>
You are given two sets with unique integers.

Write a script to figure out if they are disjoint.

The two sets are disjoint if they don’t have any common members.

**Example**
```
    Input:  @S1 = (1, 2, 5, 3, 4)
            @S2 = (4, 6, 7, 8, 9)
    Output: 0 as the given two sets have common member 4.

    Input:  @S1 = (1, 3, 5, 7, 9)
            @S2 = (0, 2, 4, 6, 8)
    Output: 1 as the given two sets do not have common member.
```

## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/abigail/perl/ch-1.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/adam-russell/perl/ch-1.pl),
[**Andrezgz**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/andrezgz/perl/ch-1.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/arne-sommer/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/athanasius/perl/ch-1.pl),
[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/bruce-gray/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/cheok-yin-fung/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/colin-crain/perl/ch-1.pl),
[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/cristian-heredia/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/dave-jacoby/perl/ch-1.pl),
[**Duane Powell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/duane-powell/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/polettix/perl/ch-1.pl),
[**Ian Goodnight**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/iangoodnight/perl/ch-1.pl),
[**Ioannis Bourlakos**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/jbourlakos/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/james-smith/perl/ch-1.pl),
[**Jared Martin**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/jaredor/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/jo-37/perl/ch-1.pl),
[**Konstantinos Giannakakis**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/kostas-giannakakis/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/laurent-rosenfeld/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/lubos-kolouch/perl/ch-1.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/mattneleigh/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/perlboy1967/perl/ch-1.pl),
[**Olivier Delouya**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/olivier-delouya/perl/ch-1.sh),
[**Paul Fajman**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/paul-fajman/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/pete-houston/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/roger-bell-west/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/sgreen/perl/ch-1.pl),
[**Steven Wilson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/steven-wilson/perl/ch-1.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/stuart-little/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/ulrich-rieke/perl/ch-1.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/wlmb/perl/ch-1.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/wanderdoc/perl/ch-1.pl)

Welcome to the latest installment of the *lightning* version of the review pages. Here we will take a dozen examples randomly pulled from the pool of submissions and look them over, in the process getting a selected overview of the various methods used by the team.

We had 34 submissions for the first task this past week, up quite a bit after returning from the (here at least) summer months.


## the SUBMISSIONS — an incomplete SURVEY, a scattered SNAPSHOT
[**Andrezgz**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/andrezgz/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/colin-crain/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/perlboy1967/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/james-smith/perl/ch-1.pl),
[**Ian Goodnight**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/iangoodnight/perl/ch-1.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/mattneleigh/perl/ch-1.pl),
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/wanderdoc/perl/ch-1.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/stuart-little/perl/ch-1.pl),
[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/cristian-heredia/perl/ch-1.pl),
[**Ioannis Bourlakos**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/jbourlakos/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/pete-houston/perl/ch-1.pl), and
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/roger-bell-west/perl/ch-1.pl)






[**Andrezgz**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/andrezgz/perl/ch-1.pl)

Andrezgz will start us off. The description uses set terminology, so set terminology is is. Both the union and intersection of the elements in the two arrays are created in a single clever and compact line. How does it work? Using the *post*-increment operator, the value of `$union{$_}` is first evaluated *and then* incremented. If the element had never been seen before, and hence uninitialized, the value will start as undefined and the logical AND operator will short-circuit, leaving the intersection hash untouched. In going through the contents of both arrays, only if no elements from one are present in the other will there be no duplication in the union hash. If this happens then the intersection will have no keys added, and as the intersection is null, the sets are disjoint.

```perl
    my (%union,%inter);
    for (@S1,@S2) {
        $union{$_}++ && $inter{$_}++
    }

    say keys %inter ? 0 : 1;
```

[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/colin-crain/perl/ch-1.pl)

&nbsp;&nbsp;**blog writeup:**
[Time Out-of-Joint — at Set Intervals - Programming Excursions in Perl and Raku](https://colincrain.com/2021/08/29/time-out-of-joint-at-set-intervals/)

For my own solution I broke the process into two loops, a `map` to load a hash from the first array, and then a second iteration through the second array to check the values against the hash keys. On the first instance of a duplicate element, that is to say the candidate element exists in the hash from the first array, the routine returns 0. If no elements trigger this action the routine returns 1.

```perl
    sub disjoint ($s1, $s2) {
        my %sethash = map { $_ => undef } $s1->@*;

        for my $member ( @S2 ) {
            return 0 if exists $sethash{"$member"};
        }
        return 1;
    }
```

[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/perlboy1967/perl/ch-1.pl)

Here is another very similar version from Niels. I myself never much use the `map EXPR,LIST` version of `map`, so it's interesting to be reminded it exists. This is similar to the alternate construction for `grep` with an expression instead of a block, which is more commonly seen out in the wild.

```perl
    sub areDisjointSets {
      my ($ar1,$ar2) = @_;

      my %h = map +($_,1),@$ar1;

      foreach my $i (@$ar2) {
        return 0 if exists $h{$i};
      }

      return 1;
    }
```


[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/james-smith/perl/ch-1.pl)

&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #127](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-127/james-smith/)

James too takes a similar path, alternately using a `grep` statement to filter the second array for values also present in the hash from the first. A ternary conditional returns either 0 for a duplicate element found, or a 1 otherwise. If a duplicate element is found the sets of the array elements cannot be disjoint.

```perl
    sub disjoint_sets {
      my %m = map { $_=>1 } @{$_[0]};
      return grep( { $m{$_} } @{$_[1]}) ? 0 : 1;
    }
```

[**Ian Goodnight**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/iangoodnight/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/iangoodnight/javascript/ch-1.js), [Test_cases](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/iangoodnight/test_cases/ch1)

writeup: [Perl Weekly Challenge Club - 127](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/iangoodnight/perl/README.md)

Ian provides a unique testing framework for his `assert_disjoint()` function, taking a directory of short files for input, each with a comment, the two arrays as comma-separated strings, and the expected return value. In as much as this mirrors the basic functionality of the several testing suites available, such as `Test::More`, or `Test2`, Ian provides bonus colored output using `Term::ANSIColor` which amuses me no end. As I often say, it's the little things in life.

```perl
    sub is_disjoint {
      my ($set1_ref, $set2_ref) = @_;
      my @test_set = @$set1_ref;
      my %haystack = map { $_ => 1 } @$set2_ref;
      my $disjoint = 1;
      while ($disjoint and scalar @test_set) {
        my $needle = pop(@test_set);
        $disjoint = 0 if exists($haystack{$needle});
      }
      return $disjoint;
    }

    sub assert_disjoint {
      my ($set1_ref, $set2_ref, $test) = @_;
      my $disjoint = is_disjoint($set1_ref, $set2_ref);
      if ($test eq $disjoint) {
        print color("green"), "Passed \x{2690}\n", color("reset");
      } else {
        print color("red"), "Failed \x{2715}\n", color("reset");
      }
    }
```


[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/mattneleigh/perl/ch-1.pl)

Matthew goes above and beyond in his solution to precisely mimic the output to the style of the given examples, with matching verbose explanations and a list of any duplicate members found. Of course this was not required but is certainly welcome.

```perl
    my @sets = (
        [
            [ 1, 2, 5, 3, 4 ],
            [ 4, 6, 7, 8, 9 ]
        ],
        ...
    );

    foreach $pair (@sets){
        printf("Input: \@S1 = (%s)\n", join(", ", @{$pair->[0]}));
        printf("       \@S2 = (%s)\n", join(", ", @{$pair->[1]}));

        @common = sets_disjoint($pair->[0], $pair->[1]);

        if(scalar(@common)){
            # There were common members
            printf(
                "Output: 0 as the given two sets have common member(s): %s.\n",
                join(", ", @common)
            );
        } else{
            # There were no common members
            print(
                "Output: 1 as the given two sets do not have a common member.\n"
            );
        }
        print("\n");
    }
```

[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/wanderdoc/perl/ch-1.pl)

In their `check_sets()` subroutine, the doctor brings in `uniq()` from `List::Util` to make short work of the task. This handy function filters the list it is given to remove duplicated items on recurrence. In a scalar context it returns the size of this list, and if the size is equal to the summed sizes of the two unaltered input lists then we conclude that nothing has been removed, and hence they are disjoint.

```perl
    use List::Util qw(uniq);

    sub check_sets
    {
         my ($aref_1, $aref_2) = @_;
         return (scalar @$aref_1 + scalar @$aref_2 == uniq(@$aref_1, @$aref_2)) ?
              1 : 0;
    }
```

[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/stuart-little/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/stuart-little/haskell/ch-1.hs), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/stuart-little/lua/ch-1.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/stuart-little/node/ch-1.js), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/stuart-little/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/stuart-little/raku/ch-1.raku)

Perl, as we know, does not have any sort of built-in set type. Hash keys work pretty well mind you, but hashes are not on their own the same as sets, and the limited functions available to hash keys do not implement the full expected feature set from set theory. I mean, that's sort of obvious, becase that's why we're here, aren't we? Because there is no built-in `disjoint` operator we can reach for?

If there were this challenge would be moot.

Of course that's where the extensible framework aspect comes into play: of course there's a module that provides Set Theory for us, or likely several options. Here Stuart uses `Set::Scalar` to provide us with two new Set objects, which have a `disjoint` function that can be applied. The result is returned.

```perl
    use List::AllUtils qw(before after);
    use Set::Scalar;

    my $s1=Set::Scalar->new(before {$_ eq "-"} @ARGV);
    my $s2=Set::Scalar->new(after {$_ eq "-"} @ARGV);

    say int($s1->is_disjoint($s2));
```


[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/cristian-heredia/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/cristian-heredia/python/ch-1.py)

Christina has chosen to use a C-style `for` loop to do her iteration through the indices of the first array, applying a `grep` filter to see whether any of the elements in the second array coincide with each value found. It's straightforward and gets the job done.

```perl
    foreach(my $i=0;$i<@S1;$i++){
        my $value = $S1[$i];
        if ( grep( /^$value$/, @S2 ) ) {
            print"Output: 0\n";
            exit;
        }
    }
    print"Output: 1\n";
```


[**Ioannis Bourlakos**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/jbourlakos/perl/ch-1.pl)

Ioannis shares a rather full-featured application implementation, with robust input validation and the specific output states abstracted to a list of constants before any processing is done. The disjoint-arrays function itself first hashes one array, and then uses a     `grep` filter to find common values between the second array and the hash keys from the first. A ternary operation based on the scalar value of this common list is used to decide which value, 1 o r0, to return.

```perl
    sub disjoint_arrayref {
        my ( $arr1, $arr2 ) = @_;
        my %set1 = map { $_ => 1 } @$arr1;
        my @common_values = grep { $set1{$_} } @$arr2;
        return scalar(@common_values) > 0 ? 0 : 1;
    }
```

[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/pete-houston/perl/ch-1.pl)

Pete provides yet another example of using a hash and `grep` combination to check each value in one array against a lookup created from the other. As he notes, anything can be used to separate the integer values in the input lines. Well, except for a digit I suppose. That would make it all one number and wouldn't work at all. So *almost* anything.

```perl
    print "Input the first set of integers on one line:\n";
    $_ = <STDIN>;
    my %first = map { $_ => 1 } /(-?[0-9]+)/g;

    print "Input the second set of integers on one line:\n";
    $_ = <STDIN>;
    my @matches = grep { $first{$_} } /(-?[0-9]+)/g;

    printf "%i\n", $#matches > -1 ? 0 : 1;
```

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/roger-bell-west/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/roger-bell-west/postscript/ch-1.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/roger-bell-west/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/roger-bell-west/raku/ch-1.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/roger-bell-west/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/roger-bell-west/rust/ch-1.rs)

&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: Perl Weekly Challenge 127: Disjoint Conflict](https://blog.firedrake.org/archive/2021/08/Perl_Weekly_Challenge_127__Disjoint_Conflict.html)

Finally, Roger gives us another example of using `exists` to determine whether a hash key is present for each integer element as we iterate through the second array. As the value assigned is inconsequential, we don't even bother to perform the actual lookup, settling for just the key to determine an overlap.

Here it is in Roger's usual terse and compact style:


```perl
    sub ds {
      my ($a,$b)=@_;
      my %h=map {$_ => 1} @{$a};
      foreach my $n (@{$b}) {
        if (exists $h{$n}) {
          return 0;
        }
      }
      return 1;
    }
```










## Blogs and Additional Submissions in Guest Languages for Task 2:

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/abigail/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/abigail/awk/ch-1.awk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/abigail/bash/ch-1.sh), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/abigail/c/ch-1.c), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/abigail/lua/ch-1.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/abigail/node/ch-1.js), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/abigail/python/ch-1.py), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/abigail/ruby/ch-1.rb)

&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 127: Disjoint Sets](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-127-1.html)blog writeup: [Perl Weekly Challenge 127: Conflict Intervals](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-127-2.html)


[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/adam-russell/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Cxx](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/adam-russell/cxx/ch-1.cxx), [Prolog](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/adam-russell/prolog/ch-1.p)

&nbsp;&nbsp;**blog writeup:**
[RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2021/08/29)blog writeup: [RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/prolog/2021/08/29)


[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/arne-sommer/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/arne-sommer/raku/ch-1.raku)

&nbsp;&nbsp;**blog writeup:**
[Disjoint Conflict with Raku and Perl](https://raku-musings.com/disjoint-conflict.html)


[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/athanasius/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/athanasius/raku/ch-1.raku)


[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/bruce-gray/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/bruce-gray/raku/ch-1.raku)


[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/dave-jacoby/perl/ch-1.pl)

&nbsp;&nbsp;**blog writeup:**
[Multiple Setsf Interval Training: The Weekly Challenge #127 | Committed to Memory](https://jacoby.github.io/2021/08/24/multiple-sets-of-interval-training-the-weekly-challenge-127.html)


[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/polettix/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/polettix/raku/ch-1.raku)

&nbsp;&nbsp;**blog writeup:**
[PWC127 - Disjoint Sets - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/08/25/pwc127-disjoint-sets/)blog writeup: [PWC127 - Conflict Intervals - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/08/26/pwc127-conflict-intervals/)


[**Jared Martin**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/jaredor/perl/ch-1.pl)

&nbsp;&nbsp;**blog writeup:**
[TWC 127: Intersectionn a Sunday Afternoon | Jared Martin](http://blogs.perl.org/users/jared_martin/2021/08/twc-127-intersection-on-a-sunday-afternoon.html)


[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/laurent-rosenfeld/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/laurent-rosenfeld/raku/ch-1.raku)

&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 127: Disjoint Sets and Conflict Intervals |aurent_r](http://blogs.perl.org/users/laurent_r/2021/08/perl-weekly-challenge-127-disjoint-sets-and-conflict-intervals.html)


[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/lubos-kolouch/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/lubos-kolouch/python/ch-1.py)


[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/sgreen/perl/ch-1.pl)

&nbsp;&nbsp;**blog writeup:**
[Weekly Challenge 127](https://dev.to/simongreennet/weekly-challenge-127-4k6j)


[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/ulrich-rieke/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/ulrich-rieke/haskell/ch-1.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/ulrich-rieke/raku/ch-1.raku)


[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/wlmb/perl/ch-1.pl)

&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 127 – W. Luis Mochán](https://wlmb.github.io/2021/08/23/PWC127/)



---

# TASK 2 {#PWC127TASK2}

# Conflict Intervals
*Submitted by: Mohammad S Anwar*
You are given a list of intervals.

Write a script to find out if the current interval conflicts with any of the previous intervals.

**Example**
```
    Input: @Intervals = [ (1,4), (3,5), (6,8), (12, 13), (3,20) ]
    Output: [ (3,5), (3,20) ]
```

- The 1st interval (1,4) do not have any previous intervals to compare with, so skip it.
- The 2nd interval (3,5) does conflict with previous interval (1,4).
- The 3rd interval (6,8) do not conflicts with any of the previous intervals (1,4) and (3,5), so skip it.
- The 4th interval (12,13) again do not conflicts with any of the previous intervals (1,4), (3,5) and (6,8), so skip it.
- The 5th interval (3,20) conflicts with the first interval (1,4).

```
    Input: @Intervals = [ (3,4), (5,7), (6,9), (10, 12), (13,15) ]
    Output: [ (6,9) ]
```

- The 1st interval (3,4) do not have any previous intervals to compare with, so skip it.
- The 2nd interval (5,7) do not conflicts with the previous interval (3,4), so skip it.
- The 3rd interval (6,9) does conflict with one of the previous intervals (5,7).
- The 4th interval (10,12) do not conflicts with any of the previous intervals (3,4), (5,7) and (6,9), so skip it.
- The 5th interval (13,15) do not conflicts with any of the previous intervals (3,4), (5,7), (6,9) and (10,12), so skip it.


## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/abigail/perl/ch-2.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/adam-russell/perl/ch-2.pl),
[**Andrezgz**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/andrezgz/perl/ch-2.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/arne-sommer/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/athanasius/perl/ch-2.pl),
[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/bruce-gray/perl/ch-2_even_more_haskell-ish.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/cheok-yin-fung/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/colin-crain/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/dave-jacoby/perl/ch-2.pl),
[**Duane Powell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/duane-powell/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/polettix/perl/ch-2.pl),
[**Ian Goodnight**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/iangoodnight/perl/ch-2.pl),
[**Ioannis Bourlakos**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/jbourlakos/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/james-smith/perl/ch-2.pl),
[**Jared Martin**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/jaredor/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/jo-37/perl/ch-2.pl),
[**Konstantinos Giannakakis**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/kostas-giannakakis/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/laurent-rosenfeld/perl/ch-2.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/lubos-kolouch/perl/ch-2.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/mattneleigh/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/perlboy1967/perl/ch-2.pl),
[**Paul Fajman**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/paul-fajman/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/pete-houston/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/roger-bell-west/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/sgreen/perl/ch-2.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/stuart-little/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/ulrich-rieke/perl/ch-2.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/wlmb/perl/ch-2.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/wanderdoc/perl/ch-2.pl)

Well that went well. Let's try another.

There were a total 31 submissions for the second task this past week. There was a little air, so to speak, in the description, allowing some ambiguities room to breathe. Such as: do intervals *sharing* a point conflict? Such as when one immediately picks up where another leaves off? Does a conflict have to *cross* a boundary, or does it include one interval being completely enveloped by another, with its outer perimeter unmolested? What exactly does "conflict" even mean, technically?

With regard to the first point mentioned, I chose to consider that the 4 to 6 time slot is not normally said to conflict with the following 6 to 8 two-hour window, so no, sharing the 6 point does not in itself involve a conflict. Points are infinitesimal, so can contain no area to overlap. There *were* positions taken the other way on the subject — many, actually —  but I can hardly consider this a breakdown in the moral fiber of society. I say: Live and let live. Can't we all just get along?

Especially, I feel obligated to note, that I seem to be quite far in the minority in my opinion on the matter.

The directive to determine the conflicts against the previous intervals in the list I regard as a wonderful bit of confusion — of course if two intervals overlap then each overlaps the other and the interference is commutative. What this directive does do, however, is to tell us *which* interval is to be labeled the interloper: given two conflicting spans arranged left-to-right, even though both conflict with each other, we are here only concerned that the one further towards the right conflicts with the one to the left. It adds chirality to an otherwise symmetric operation.

## a SELECTIONS from the SUBMISSIONS
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/sgreen/perl/ch-2.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/adam-russell/perl/ch-2.pl),
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/abigail/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/polettix/perl/ch-2.pl),
[**Paul Fajman**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/paul-fajman/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/laurent-rosenfeld/perl/ch-2.pl),
[**Duane Powell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/duane-powell/perl/ch-2.pl),
[**Jared Martin**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/jaredor/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/jo-37/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/e-choroba/perl/ch-2.pl),
[**Konstantinos Giannakakis**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/kostas-giannakakis/perl/ch-2.pl), and
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/cheok-yin-fung/perl/ch-2.pl)






[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/sgreen/perl/ch-2.pl)

&nbsp;&nbsp;**blog writeup:**
[foo](https://dev.to/simongreennet/weekly-challenge-127-4k6j)


Simon imports `any` from `List::Util` to compare the bounds of each new interval against the list of every interval previously processed. If, for each comparison made, the lower bound of the candidate is found to be less than the upper being compared to and the upper of the new is greater then the lower of the previous than there is a conflict.

Here `@numbers` is a list-ified condensation of the input intervals: lower, upper, lower, upper, in adjacent pairs.

```perl
    while (@numbers) {
        my $first = shift @numbers;
        my $last  = shift @numbers;

        if ( any { $first <= $_->[1] and $last >= $_->[0] } @sets ) {
            # This interval intersects with a previous one
            push @match, [ $first, $last ];
        }
        # Add this interval to a list of previous intervals
        push @sets, [ $first, $last ];
    }

    say '[ ', join( ', ', map { "($_->[0],$_->[1])" } @match ), ' ]';
```

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/adam-russell/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/adam-russell/cxx/ch-2.cxx), [Prolog](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/adam-russell/prolog/ch-2.p)

&nbsp;&nbsp;**blog writeup:**
[RabbitFarm - Conflicting Lists and Intervals](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2021/08/29)

Adam capitalizes on the sorting of the input intervals by last value as in the examples; not assuming this he adds a step to make sure it is so. The intervals themselves are stored as a list of array references of pairs, lower and upper bounds.

He proceeds by removing the *last* interval pair from the list using `pop`, and then comparing the bounds of this against each other pair down the line. Done this way the remaining list comprises all the values to be compared to as it gradually shrinks.

```perl
    sub conflicts{
        my @intervals = @_;
        my @conflicts;
        @intervals = sort { $a->[1] <=> $b->[1] } @intervals;
        {
            my $interval = pop @intervals;
            my($i, $j) = @{$interval};
            for $interval (@intervals){
                my($m, $n) = @{$interval};
                do { unshift @conflicts, [$i, $j]; last } if $i >= $m && $i <= $n;
            }
            redo if @intervals;
        }
        return @conflicts;
    }
```


[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/abigail/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/abigail/awk/ch-2.awk)

&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 127: Conflict Intervals](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-127-2.html)

Abigail runs headlong into the ambiguities of the task as defined, providing a rather thorough breakdown of the vagaries found, with a certain emphasis on what appears to be the semantic difference between intervals *intersecting* versus *conflicting*. Again I'd think that sharing a point wouldn't cause a conflict, per se. But I didn't write the task; I'm only here to report on the results as best I can. In any case conclusions are drawn, decisions made and a suitable solution is demonstrated.

```perl
    my sub intersects ($x, $y) {($$x [1] >= $$y [0]) && ($$x [0] <= $$y [1])}

    MAIN: while (<>) {
        my @intervals = map {[split /[^0-9]+/]} /[1-9][0-9]*[^0-9]+[1-9][0-9]*/g;

        #
        # Make sure the intervals are all in order, that is, have their
        # first vertex < second vertex.
        #
        foreach my $interval (@intervals) {
            @$interval = reverse @$interval if $$interval [1] < $$interval [0];
        }

        #
        # Compare each pair of intervals
        #

        for (my $i = 1; $i < @intervals; $i ++) {
            for (my $j = 0; $j < $i; $j ++) {
                if (intersects $intervals [$i], $intervals [$j]) {
                    say 1;
                    next MAIN;
                }
            }
        }
        say 0;
    }
```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/polettix/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/polettix/raku/ch-2.raku)

&nbsp;&nbsp;**blog writeup:**
[PWC127 - Conflict Intervals - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/08/26/pwc127-conflict-intervals/)

Flavio takes a very different approach by inverting problem: removing the *leftmost* interval he then makes comparisons rightward, against intervals that may in the future be found to conflict with it. If a conflict is found, then the bounds of the removed selection are expanded by merging with the conflict as we proceed to the end. The conflicting intervals are removed from the list to a list of conflicts when they are absorbed.

When the end of the list is reached, the remaining list is shifted again and the process repeated.

```perl
    sub conflict_intervals (@intervals) {
       my @conflicting; # keep the answer
       while (@intervals) {

          # if there is a "first" one, it's safe because it has not been
          # eliminated by its predecessors. Its endpoints will be used to
          # possibly eliminate successors, we keep them in two convenience
          # variables.
          my ($X, $Y) = shift(@intervals)->@*;

          # we filter the remaining intervals ditching all those that
          # conflict with ($X, $Y) or whatever it becomes on the way. In
          # particular, at every conflict we expand ($X, $Y) to also
          # include the conflicting item, because we will ditch it from
          # the candidate "clean" intervals and put it in @conflicting.
          @intervals = grep {
             my ($A, $B) = $_->@*;

             # this is a general check to see if the two intervals are
             # disjoint. It assumes that touching intervals are conflicting.
             ($A - $Y) * ($B - $X) > 0 or do {
                push @conflicting, $_;
                $X = $A if $X > $A;  # "eat" the ($A, $B) interval in ($X, $Y)
                $Y = $B if $Y < $B;
                0; # this interval conflicted and does not get passed along
             }
          } @intervals;
       }
       return @conflicting;
    }
```

[**Paul Fajman**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/paul-fajman/perl/ch-2.pl)

Paul goes to great length to precisely duplicate the verbose text given in the examples, enumerating the intervals being compared left-to-right and for each case detailing either a list of all the other intervals it does not conflict with or the first example of a conflict found.

```
    The 1st interval (1,4) do not have any previous intervals to compare with, so skip it.
    The 2nd interval (3,5) does conflict with the previous interval (1,4).
    The 3rd interval (6,8) do not conflict with any of the previous intervals (1,4), (3,5) so skip it.
    The 4th interval (12,13) do not conflict with any of the previous intervals (1,4), (3,5), (6,8) so skip it.
    The 5th interval (3,20) does conflict with the previous interval (1,4).
```

The bookkeeping required to compile this report adds complexity to the code, with separate output cases for whether there was or was not a conflict. A small optimization can be applied though, with a special case for the first interval, which can by definition never conflict, as it has nothing to conflict with.

Here is the section that determined the conflicts, if any:

```perl
    # Need to compare current coordinates against all previous coordinates.
    # I do this by going backwards from current coordinates.
    for ($j=$i; $j > 0; $j-=2) {
      if ($ivals[$i] > $ivals[$j-2] && $ivals[$i] < $ivals[$j-1]) {
         # I use the @conflicts to track coordinates that matched or didn't match.
         # If conflict hasn't been flagged as yes, it'll track the non-matches
         # As soon as there is a conflict, we need to forget the non-matches and
         # only track the conflict coordinates.
         undef(@conflicts) if $conflict eq "no";
         $conflict="yes";
         unshift @conflicts, $ivals[$j-2], $ivals[$j-1];
      }
      elsif ($ivals[$i+1] > $ivals[$j-2] && $ivals[$i+1] < $ivals[$j-1]) {
         undef(@conflicts) if $conflict eq "no";
         $conflict="yes";
         unshift @conflicts, $ivals[$j-2], $ivals[$j-1];
      }
      else {
         # No matches, track the non-matching conflicts.
         # If we previous had a match, next.
         next if $conflict eq "yes";
         unshift @conflicts, $ivals[$j-2], $ivals[$j-1];
      }
    }
```

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/laurent-rosenfeld/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/laurent-rosenfeld/raku/ch-2.raku)

&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 127: Disjoint Sets and Conflict Intervals |aurent_r](http://blogs.perl.org/users/laurent_r/2021/08/perl-weekly-challenge-127-disjoint-sets-and-conflict-intervals.html)

Laurent takes the uncommon approach of hashing the integers contained in the processed intervals as he moves from left to right across the list. As each new interval is brought up for examination, the integers contained within it are first checked against the lookup and then added to it, updating the hash for the next examination.

Hashes in Perl perform their associations in constant time, independant of the size of the data set. This approach makes the tradeoff of potentially a very large lookup in memory against a very quick process of actually performing that lookup.

```perl
    for my $interv (@intervals) {
        my $overlap = 0;
        my ($st, $end) =  @$interv[0..1];
        for my $i ($st..$end) {
            $overlap = 1, next if exists $vals{$i};
            $vals{$i} = 1;
        }
        push @conflicts, $interv if $overlap;
    }
    say join ", ", @$_ for @conflicts;
```

[**Duane Powell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/duane-powell/perl/ch-2.pl)

Duane also takes this approach of hashing the integer values bracketed within the intervals being considered into a master lookup, `%seen`. This allows a quick scan of the span of each new interval considered to be checked, value-by-integral-value, against this lookup. As we said before, space is traded for speed of execution.

```perl
    my $pair = shift @{$in};
    my %seen = map { $_ => 1 } @{$pair};

    my @out;
    while ( @{$in} ) {
        $pair = shift @{$in};
        my ($c, $d) = @{$pair};
        my $hit = 0;
        foreach ( $c .. $d ) {
            $hit = 1 if (defined($seen{$_}));
            $seen{$_} = 1;
        }
        push @out, $pair if ($hit);
    }
    say "Output:";
```


[**Jared Martin**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/jaredor/perl/ch-2.pl)

&nbsp;&nbsp;**blog writeup:**
[TWC 127: Intersectionn a Sunday Afternoon | Jared Martin](http://blogs.perl.org/users/jared_martin/2021/08/twc-127-intersection-on-a-sunday-afternoon.html)

Jared is very thorough in his submissions, providing a proper application complete with command line flags and documentation in POD format. This week's example is no exception. Because we're only looking to see whether a conflict exists, we can short-circuit the search at the first interval found.

```perl
    use List::Util qw(all first min max);

    sub interval_intersections {

        my ( @ovals, @ivals );

        for my $ival (@_) {
            push @ovals, $ival if first { $ival->[1] >= $_->[0] }
                                  grep { $ival->[0] <= $_->[1] } @ivals;
            push @ivals, $ival;
        }

        return @ovals;
    }
```


[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/jo-37/perl/ch-2.pl)

Jorg actively grapples analytically with the idea of an interval including its endpoints, introducing the mathematical terms "open" and "closed" to denote the states: "closed" for inclusion, "open" for exclusion. Based on a detailed examination of the examples, he comes to the somewhat surprising conclusion that the intervals are "half-open", including the lower bound but excluding the upper, and that completely enclosed subsets do not conflist either. This is consistant with the data presented. So be it.

To work the line of intervals, he starts at the end on the list, using `pop` to remove a set of points, then comparing the start and end-points to those pairs in the remaining list.

```perl
    # There is a conflict between [i0, i1) and [k0, k1) if
    # i0 < k0 < i1 < k1 or
    # k0 < i0 < k1 < i1
    sub conflicting ($i, $k) {
        $_->[0][0] < $_->[1][0] &&
        $_->[1][0] < $_->[0][1] &&
        $_->[0][1] < $_->[1][1] &&
        return 1 for [$i, $k], [$k, $i];
    }

    # Traversing backwards seems to be a bit easier to handle.
    sub conflicting_intervals (@intervals) {
        my @conflicts;
        while (defined (my $i = pop @intervals)) {
            unshift @conflicts, $i if any {conflicting($_, $i)} @intervals;
        }
        @conflicts;
    }
```

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/e-choroba/perl/ch-2.pl)

Choroba brings us a couple of solution options this week, providing two classes that solve the problem in differing ways using the same API. In the first, `Interval::Conflict::Naive`, we check each interval against all the others against a growing list of previously processed intervals. In the second version, `Interval::Conflict::Binary` a binary search is implemented to quickly identify potential conflicts in a sorted list of intervals, and only validate against those selections.

A nice and thorough test suite is provided using `Test2:V0`, assigning the package to be used and duplicating the cases, and following with a benchmark comparison.

```perl
    {   package Interval::Conflict::Binary;
        use parent -norequire => 'Interval::Conflict::Naive';

        sub add {
            my ($self, $interval) = @_;
            my $i = $self->_locate($interval->[0]);
            splice @$self, $i, 0, @$interval;
        }

        sub is_conflicting {
            my ($self, $interval) = @_;
            my $i = $self->_locate($interval->[0]);
            return 0 if $i > $#$self;

            $i -= $i % 2;
            return 1
                if $interval->[0] <= $self->[$i]
                && $self->[$i] <= $interval->[1];

            my ($start, $edge) = @{ ([$i, 0], [$i - 1, 1])[$i % 2] };
            return 1
                if $self->[$start] <= $interval->[$edge]
                && $interval->[$edge] <= $self->[ $start + 1 ];

            return 0
        }

        sub _locate {
            my ($self, $value) = @_;

            my ($from, $to) = (0, $#$self);
            while ($to - $from > 1) {
                my $middle = int(($from + $to) / 2);
                if ($value < $self->[$middle]) {
                    $to = $middle;
                } else {
                    $from = $middle;
                }
            }

            my $r;
            if (@$self && $value <= $self->[$from]) {
                $r = $from;
            } else {
                $r = $to < 0 ? 0
                             : $to + ($self->[-1] < $value);
            }

            return $r
        }
    }

    sub conflict_intervals {
        my ($class, @intervals) = @_;
        my $il = $class->new;
        my @conflicts;
        for my $interval (@intervals) {
            if ($il->is_conflicting($interval)) {
                push @conflicts, $interval;
            } else {
                $il->add($interval);
            }
        }
        return \@conflicts
    }
```

[**Konstantinos Giannakakis**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/kostas-giannakakis/perl/ch-2.pl)

Konstantinos, in  working across the input list, adds each new interval he finds to a set of processed intervals, then checks the interval against those gathered in the set for conflicts. This works because he does not include the endpoints in his intervals, so an interval will never interfere with itself. In an aside, I'm glad to finally find someone who shared my interpretation of "conflict" in their solution. In any case this makes for a compact algorithm essentially based around a pair of nested loops, albeit one of these is broken off into its own subroutine.

```perl
    foreach (@Intervals) {
        $count++;
        push @sets, $_;
        conflict($count, $_, @sets);
    }

    sub conflict {
        my $count = shift;
        my $set   = shift;
        my @arr   = @_;

        my @sort_tmp;

       if (scalar(@arr) == 1) {
           print "- The $count interval ($set->[0],$set->[1]) do not have any previous intervals to compare with, so skip it.\n";
           return 0;
       }

        foreach (@arr) {
            if ($set->[0] > $_->[0] && $set->[0] < $_->[1]) {
                print "- The $count interval ($set->[0],$set->[1]) does conflict with some of the previous intervals.\n";
                push @conflicts, $set;
                return;
            }
        }
        print "- The $count interval ($set->[0],$set->[1]) do not conflicts with any of the previous intervals so skip it.\n";
    }
```





[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/cheok-yin-fung/perl/ch-2.pl)

And finally, we have CY. She also choses to work left-to-right against the complete list, rewriting it between passes, comparing each interval in turn against all the intervals to the right that may conflict with it later. When a conflict is found, the conflicting rightward interval is replaced by a new interval merged with the one under examination, and then added to the reconstructed list for the next pass.

```perl
    sub conflict_intervals {
        my @intervals = @_;
        my @pre_intervals;
        my @new_intervals;
        my @ans;
        push @new_intervals, $intervals[0];

        for my $i (1..$#intervals) {
            my $bool_cf = undef;
            @pre_intervals = @new_intervals;
            @new_intervals = ();
            for my $interv (@pre_intervals) {
                if (conf( $intervals[$i], $interv)) {
                    push @new_intervals, merge($intervals[$i], $interv);
                    $bool_cf = 1;
                }
                else {
                    push @new_intervals, $interv;
                }
            }
            push @new_intervals, $intervals[$i] if !$bool_cf;
            push @ans, $intervals[$i] if $bool_cf;
        }
        return [@ans];
    }

    sub merge {
        return [
          min($_[0]->[0], $_[1]->[0]),
          max($_[0]->[1], $_[1]->[1])
        ];
    }

    sub conf {
        my $i1;
        my $i2;
        if ($_[0]->[0] < $_[1]->[0]) {
            $i1 = $_[0];
            $i2 = $_[1];
        }
        elsif ($_[0]->[0] > $_[1]->[0]) {
            $i1 = $_[1];
            $i2 = $_[0];
        }
        else {
            return 1;
        }
        return 1 if $i1->[1] > $i2->[0];
        return 0;
    }
```


## Blogs and Additional Submissions in Guest Languages for Task 2:

[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/arne-sommer/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/arne-sommer/raku/ch-2.raku)

&nbsp;&nbsp;**blog writeup:**
[Disjoint Conflict with Raku and Perl](https://raku-musings.com/disjoint-conflict.html)


[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/athanasius/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/athanasius/raku/ch-2.raku)


[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/bruce-gray/perl/ch-2_even_more_haskell-ish.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/bruce-gray/raku/ch-2.raku)


[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/colin-crain/perl/ch-2.pl)

&nbsp;&nbsp;**blog writeup:**
[Time Out-of-Joint — at Set Intervals - Programming Excursions in Perl and Raku](https://colincrain.com/2021/08/29/time-out-of-joint-at-set-intervals/)


[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/dave-jacoby/perl/ch-2.pl)

&nbsp;&nbsp;**blog writeup:**
[Multiple Setsf Interval Training: The Weekly Challenge #127 | Committed to Memory](https://jacoby.github.io/2021/08/24/multiple-sets-of-interval-training-the-weekly-challenge-127.html)


[**Ian Goodnight**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/iangoodnight/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/iangoodnight/javascript/ch-2.js),

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/james-smith/perl/ch-2.pl)

&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #127](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-127/james-smith/)


[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/lubos-kolouch/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/lubos-kolouch/python/ch-2.py)

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/roger-bell-west/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/roger-bell-west/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/roger-bell-west/raku/ch-2.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/roger-bell-west/ruby/ch-2.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/roger-bell-west/rust/ch-2.rs)

&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: Perl Weekly Challenge 127: Disjoint Conflict](https://blog.firedrake.org/archive/2021/08/Perl_Weekly_Challenge_127__Disjoint_Conflict.html)


[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/stuart-little/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/stuart-little/haskell/ch-2.hs), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/stuart-little/lua/ch-2.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/stuart-little/node/ch-2.js), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/stuart-little/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/stuart-little/raku/ch-2.raku)


[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/ulrich-rieke/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/ulrich-rieke/haskell/ch-2.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/ulrich-rieke/raku/ch-2.raku)


[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/wlmb/perl/ch-2.pl)

&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 127 – W. Luis Mochán](https://wlmb.github.io/2021/08/23/PWC127/)

---

# BLOGS {#PWC127BLOGS}

---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, I somehow continue to maintain my bearings. Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC127BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *READ* these *BLOG* *LINKS*:

**( *don't think, trust your training, you're in the zone, just do it ...* )**


**Abigail**

 * [Perl Weekly Challenge 127: Disjoint Sets](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-127-1.html) ( *Perl* )
 * [Perl Weekly Challenge 127: Conflict Intervals](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-127-2.html) ( *Perl* )

**Adam Russell**

 * [RabbitFarm - Conflicting Lists and Intervals - Perl ](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2021/08/29) ( *Perl* )
 * [RabbitFarm - Conflicting Lists and Intervals - Prolog](http://www.rabbitfarm.com/cgi-bin/blosxom/prolog/2021/08/29) ( *Perl* )

**Arne Sommer**

 * [Disjoint Conflict with Raku and Perl](https://raku-musings.com/disjoint-conflict.html) ( *Perl & Raku* )

**Colin Crain**

 * [Time Out-of-Joint — at Set Intervals - Programming Excursions in Perl and Raku](https://colincrain.com/2021/08/29/time-out-of-joint-at-set-intervals/) ( *Perl* )

**Dave Jacoby**

 * [Multiple Sets of Interval Training: The Weekly Challenge #127 | Committed to Memory](https://jacoby.github.io/2021/08/24/multiple-sets-of-interval-training-the-weekly-challenge-127.html) ( *Perl* )

**Flavio Poletti**

 * [PWC127 - Disjoint Sets - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/08/25/pwc127-disjoint-sets/) ( *Perl & Raku* )
 * [PWC127 - Conflict Intervals - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/08/26/pwc127-conflict-intervals/) ( *Perl & Raku* )

**Ian Goodnight**

 * [Perl Weekly Challenge Club - 127 - Perl](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-127/iangoodnight/perl/README.md) ( *Perl* )
 * [Perl Weekly Challenge Club - 127 - Javascript](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-127/iangoodnight/javascript) ( *Javascript* )

**James Smith**

 * [Perl Weekly Challenge #127](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-127/james-smith/) ( *Perl* )

**Jared Martin**

 * [TWC 127: Intersectionn a Sunday Afternoon | Jared Martin](http://blogs.perl.org/users/jared_martin/2021/08/twc-127-intersection-on-a-sunday-afternoon.html) ( *Perl* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 127: Disjoint Sets and Conflict Intervals |aurent_r](http://blogs.perl.org/users/laurent_r/2021/08/perl-weekly-challenge-127-disjoint-sets-and-conflict-intervals.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 127: no need for coffee! – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2021/08/23/PerlWeeklyChallenge127.html#task1) ( *Raku* )
 * [Perl Weekly Challenge 127: no need for coffee! – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2021/08/23/PerlWeeklyChallenge127.html#task2) ( *Raku* )

**Roger Bell_West**

 * [RogerBW's Blog: Perl Weekly Challenge 127: Disjoint Conflict](https://blog.firedrake.org/archive/2021/08/Perl_Weekly_Challenge_127__Disjoint_Conflict.html) ( *Perl & Raku* )

**Simon Green**

 * [Weekly Challenge 127](https://dev.to/simongreennet/weekly-challenge-127-4k6j) ( *Perl* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 127 – W. Luis Mochán](https://wlmb.github.io/2021/08/23/PWC127/) ( *Perl* )
