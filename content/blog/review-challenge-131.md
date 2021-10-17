---
author:       Colin Crain
date:         2021-10-17T00:00:00
description:  "Colin Crain › Perl Weekly Review #131"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #131"
image:        images/blog/p5-review-challenge-131.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-130/).* )

Welcome to the Perl review pages for **Week 131** of The Weekly Challenge! Here we will take the time to discuss the  submissions offered up by the team, factor out some common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

---

### Why do we do these challenges?

I suppose any reasonable answers to that question would be as wide ranging and varied as the people who choose to join the team. One thing, though, is clear: it's not a competition, and there are no judges, even if there is a "prize" of sorts. About that -- I think of it more as an honorarium periodically awarded to acknowledge the efforts we make towards this strange goal. So there's no determination to find the *fastest*, or the *shortest*, or even, in some abstract way, the *best* way to go about things, although I'm certain the participants have their own aspirations and personal drives. As Perl is such a wonderfully expressive language, this provides quite a bit of fodder to the core idea of TMTOWTDI, producing a gamut of varied techniques and solutions.

Even the tasks themselves are often open to a certain amount of discretionary interpretation. What we end up with is a situation where each participant is producing something in the manner they find the most interesting or satisfying. Some team members focus on carefully crafted complete applications, thoroughly vetting input data and handling every use case they can think up. Others choose to apply themselves to the logic of the underlying puzzle and making it work in the most elegant way they can. Some eschew modules they would ordinarily reach for, others embrace them, bringing to light wheels perhaps invented years ago that happen to exactly solve the problem in front of them today.

I've been considering this question for some time and have found one binding commonality between all of us out solving these challenges each week, in that however we normally live our lives, the task in front of us more than likely has nothing to do with any of that. And I think this has great value. We all do what we do, in the real world, and hopefully we do it well. The Weekly Challenge provides us with an opportunity to do something germane to that life yet distinctly different; if we only do the things we already know how to do then we will only do the same things over and over. This is where the "challenge" aspect comes into play.

So we can consider The Weekly Challenge as providing a problem space outside of our comfort zone, as far out from that comfort as we wish to take things. From those reaches we can gather and learn things, pick and choose and bring what we want back into our lives. Personally, I think that's its greatest value of all.

---

Every week there is an enormous global collective effort made by the team, analyzing and creatively coding the submissions, and that effort deserves credit due.

And that's why I'm here, to try and figure out how to do that.

Let's get on with it then, have a look and see what we find.

---

**<big>For context</big>**  before we begin, you may wish to revisit either of the pages for the [**original tasks**](/blog/perl-weekly-challenge-131/) or the summary [**recap**](/blog/recap-challenge-131/) of the challenge. But don't worry, the challenges themselves are repeated and presented below as we progress from task by task. Oh, and one more thing before we get started:

### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please feel free to email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

**So finally, without further ado...**

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC131TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC131TASK2)   &nbsp;  &nbsp;  &nbsp;   	•   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC131BLOGS)    &nbsp;  &nbsp;  &nbsp;   	•

---

# TASK 1 {#PWC131TASK1}

# Consecutive Arrays
*Submitted by: Mark Anderson*

You are given a sorted list of unique positive integers.

Write a script to return list of arrays where the arrays are consecutive integers.

**Example 1:**
```
    Input:  (1, 2, 3, 6, 7, 8, 9)
    Output: ([1, 2, 3], [6, 7, 8, 9])
```
**Example 2:**
```
    Input:  (11, 12, 14, 17, 18, 19)
    Output: ([11, 12], [14], [17, 18, 19])
```
**Example 3:**
```
    Input:  (2, 4, 6, 8)
    Output: ([2], [4], [6], [8])
```
**Example 4:**
```
    Input:  (1, 2, 3, 4, 5)
    Output: ([1, 2, 3, 4, 5])
```

## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/abigail/perl/ch-1.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/adam-russell/perl/ch-1.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/arne-sommer/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/athanasius/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/cheok-yin-fung/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/colin-crain/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/dave-jacoby/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/polettix/perl/ch-1.pl),
[**Ian Goodnight**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/iangoodnight/perl/ch-1.pl),
[**Ivan Dimitrov**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/ziruzavar/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/jo-37/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/laurent-rosenfeld/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/lubos-kolouch/perl/ch-1.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/mattneleigh/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/mohammad-anwar/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/perlboy1967/perl/ch-1.pl),
[**Olivier Delouya**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/olivier-delouya/perl/ch-1.sh),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/pete-houston/perl/ch-1.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/peter-campbell-smith/perl/ch-1.pl),
[**Rich Snyder**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/cybersnyder/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/roger-bell-west/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/sgreen/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/ulrich-rieke/perl/ch-1.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/wlmb/perl/ch-1.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/wanderdoc/perl/ch-1.pl)

Welome to the review pages for The Weekly Challenge #131. There were 28 submissions for the first task this past week. A per the norm we shall draw a random sampling from the field and take a closer look at some of the solutions, to get a general feel for a variety of different ways to go about constructing the requested list of lists.


## a DOZEN DERIVATIONS DEPLOYED
[**Ivan Dimitrov**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/ziruzavar/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/colin-crain/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/perlboy1967/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/pete-houston/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/e-choroba/perl/ch-1.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/peter-campbell-smith/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/polettix/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/mohammad-anwar/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/dave-jacoby/perl/ch-1.pl),
[**Rich Snyder**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/cybersnyder/perl/ch-1.pl),
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/abigail/perl/ch-1.pl), and
[**Olivier Delouya**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/olivier-delouya/perl/ch-1.sh)

As it worked out, there was one basic way we consistently saw to produce the requested breakdown, with a great variety in actual implementations of the pattern. The task description asks to "return [a] list of arrays", implying a list returned from a subroutine, which if written out for assignment would be constructed as per the examples. The majority of submissions produced either this list as described, or an array of arrays, but a few, using similar underlying logic, skipped directly to constructing the output string as shown. Some even considered the construction of the multidimensional array the goal, with the output incidental. I think all of these interpretations satisfy the spirit of the challenge.


[**Ivan Dimitrov**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/ziruzavar/perl/ch-1.pl)

Ivan will start us out today with his `group_ints()` routine. In it an `@output` array is initiated with the first element from the input list enclosed in its own anonymous sub-array, and then an iterator loop is established over the indices of the input.

As each element indexed is examined, one of two things can happen. If its value is subsequent to the last value placed in the output, it's added to the last array. If this is not the case, a new array containing the rogue element is created and pushed onto the output. This becomes the new last array and subsequent elements are either added to it or destined to start their own sub-array. The indices of the arrays in the output are maintained by use of a counter variable.

Note the index math is complicated a bit in that we are always looking at the *next* index position to compare to, but the underlying process is as described.

```perl
    sub group_ints{
        my (@array) = @_;
        my @output = ([$array[0]]);
        my $counter = 0;
        for (my $i=0; $i<@array-1; $i++){
        	if ($array[$i]+1 == $array[$i+1]){
        		push(@{$output[$counter]}, $array[$i+1]);
        	}else{
        		$counter++;
        		push(@output, [$array[$i+1]]);
        	}
        }
        return \@output;
    }
```

[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/colin-crain/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/colin-crain/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Consequential Pairings and SECRET CUTS - Programming Excursions in Perl and Raku](https://colincrain.com/2021/09/26/consequential-pairings-and-secret-cuts/)

For my own solution, I broke the problem down similarly, but did away with absolute indexing by processing the element sequence directly. The first value is shifted off to initiate the first working anonymous array, and subsequent values are compared to the last value. If they are incrementally one greater, the element is added to the woking array. If they are any other value, the working array is placed on the output array and a new working array is created from the value. As the `for` loop assigns to the topic, we can just use that as our holding pen for each value as it's processed.

```perl
    sub consequential ( @input ) {
        my @out;
        my $subarray = [ shift @input ];
        for (@input) {
            $_ == $subarray->[-1] + 1
                ? push $subarray->@*, $_
                : do {
                    push @out, $subarray;
                    $subarray = [ $_ ];
                  }
        }
        return @out, $subarray;
    }
```

[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/perlboy1967/perl/ch-1.pl)

Niles brings us a solution based around one of my favorite new additions to the `List::MoreUtils` package, [`slide()`](https://metacpan.org/pod/List::MoreUtils#slide-BLOCK-LIST). This handy little function — at the time of this writing less than a year old — allows us to process an array one element at a time, but at the same time gives us access to the element and the element previously looked at in the block. The sequencing starts with the first two elements from the array and assigns them to `$a` and `$b`.

From the docs:

> "...a kind of magnifying glass that is moved along a list and calls BLOCK every time the next list item is reached."

Here `$a` is always inserted at the end of the last subarray in the output, and if the pair are non-consecutive a new empty array is added as well, so `$b`, now  `$a` on the next step, is placed into the new array.

It's elegant and I really like it.

```perl
    use List::MoreUtils qw(slide);

    sub consecutiveArrays {
      my @r = ([]);

      no warnings 'once';
      slide {
        push(@{$r[-1]}, $a);
        push(@r, []) if ($a != $b - 1);
      } @_;

      push(@{$r[-1]}, $_[-1]);

      return \@r;
    }
```

[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/pete-houston/perl/ch-1.pl)

Pete takes an amusingly sideways approach to the problem, constructing his list of arrays as a *string* in written output. This is a decidedly different take, I must say. I suppose if we really needed a Perl array-of-arrays we could `eval` the output. But on the other hand the output does match the examples.

Internally, the process is very similar to what we've seen elsewhere, but in this case a variable holds the current working subarray values, and new consecutive elements are added to it. When the sequence is broken, however, the `@out` array is joined with commas ab=nd printed out within brackets, and the working array reset.

Another interesting note is that Pete has decided to input his array as a run-together string, which is parsed apart into a list of single digits. Consequently the values can only range from 0-9. This doesn't exactly match the spec but the logic would work on a Perl array if we gave it that, so who cares? Look around the room. Anyone? Good, then it's settled.

```perl
    print '(';
    for my $n (map { s/[^0-9]//; $_ } @ARGV) {
        if ($#out == -1 || $n == $out[-1] + 1) {
        	push @out, $n;
        } else {
        	print '[' . join (', ', @out) . '], ';
        	@out = $n;
        }
    }
    print '[' . join (', ', @out) . "])\n";
```

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/e-choroba/perl/ch-1.pl)

As stated immediately above, we concluded the logic would work if given a Perl array instead of a string to parse, and in Choroba's solution, coincidentally selected next, we have the proof presented. Doing a side-by-side comparison we can see the algorithm is nearly identical. Some different operator choices are made, and here Choroba uses a multidimensional reference to hold his output, but the steps are the same.

```perl
    sub consecutive_arrays {
        my @input = @_;
        my @results = ([]);
        for my $i (@input) {
            if (! @{ $results[-1] } || $results[-1][-1] + 1 == $i) {
                push @{ $results[-1] }, $i;
            } else {
                push @results, [$i];
            }
        }
        return \@results
    }
```

[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/peter-campbell-smith/perl/ch-1.pl)

Like our other Pete previously, Peter Campbell Smith has also constructed a nice compact method focused of producing output to match the examples. In other words, there seems to be a renegade cabal of Petes determined to build strings that properly describe their solution arrays. I mean, UNIX is text, right? It's text all the way down, baby...

Perhaps that's more poetic than accurate but you get the idea. Noteworthy here is the inclusion of comma delimiters in the input strings, allowing multi-character numbers in the sequence, and the use of a ternary operator to keep the decision step compact.

```perl
    sub do_task {

        my ($prev, $output);

        # loop over list
        $prev = -1;
        while ($input =~ m|(\d+)|g) {          # consecutive  # non-consecutive
        	$output .= ($1 == ($prev + 1)) ?   ", $1" :       "], [$1";
        	$prev = $1;
        }
        $output =~ s|...|(|;   # tidy the start of $output
        say "\nInput:  ($input)\nOutput: $output])";
    }
```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/polettix/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/polettix/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC131 - Consecutive Arrays](https://github.polettix.it/ETOOBUSY/2021/09/22/pwc131-consecutive-arrays/)

Although we did see some cases of using an explicit iterator to address the array elements by index, it was far more common to use relative indexing by examining the input sequentially and comparing it to the last element placed — using the index for the end of the array, wherever that may lie, at `[-1]`. Here Flavio uses a working variable, `$previous` to hold the last value for comparison, and an end-of-array index to properly insert it into the multidimensional output,
`@retval`.

```perl
    sub consecutive_arrays (@args) {
       return unless @args;
       my $previous = $args[0];
       my @retval;
       for my $n (@args) {
          push @retval, [] if $n != $previous + 1;
          push $retval[-1]->@*, $n;
          $previous = $n;
       }
       return @retval;
    }
```

[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/mohammad-anwar/perl/ch-1.pl)

It's always nice to see Mohammad contribute to the submissions himself, on top of the substantial time commitment required to keep this site running. Here he breaks down the algorithm steps in a remarkably clear fashion, with no indexing of either the input nor output required — the previously examined value is preserved in a working variable for comparison, and that is all that is required. I like this one. It's all very neat and clear.

```perl
    sub consecutive_arrays {
        my @numbers = @_;

        my @arrays    = ();
        my $sub_array = [];
        my $i;
        foreach my $number (@numbers) {
            $i = $number unless defined $i;
            if ($i + 1 == $number) {
                push @$sub_array, $number;
                $i = $number;
            }
            else {
                push @arrays, $sub_array if scalar @$sub_array;;
                $sub_array = [$number];
                $i = $number;
            }
        }

        push @arrays, $sub_array if scalar @$sub_array;;

        return @arrays;
    }
```

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/dave-jacoby/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Consecutive Limits: The Weekly Challenge 131 | Committed to Memory](https://jacoby.github.io/2021/09/21/consecutive-limits-the-weekly-challenge-131.html)

Up to this point I've focused, as I usually do, on the underlying logic behind the algorithms we've seen. But in this task, due to the fairly consistent self-similarity in the solutions across the board, perhaps we should break away from that and take a look to the bigger picture of displaying the results. We've seen a few constructions that outright assemble string output as it's computed, but the large majority of solutions first produce a proper array-of-arrays and then find a way to pretty-print that data structure.

Here Dave uses a `map` between a couple of `join` statements to first join the inner sub-arrays with commas, enclosing them in square brackets, and then in turn join those bracketed strings with more commas, and enclosing everything within parentheses. A heredoc is then used to format the input and output for display.

I do like the attention to detail when someone goes to great length to produce the output exactly as described in the examples. It's not necessary in my book, but the effort is admirable. And adding that extra space after "Input: " to get the data to line up gives me a warm fuzzy feeling inside. Data visualization is so often overlooked, and I find too often that presenting data is viewed as synonymous with having ones audience comprehend it, the onus landing on the user to make sense of what is in front of them.

```
    Input:  ( 1, 2, 3, 6, 7, 8, 9 )
    Output: ( [1, 2, 3], [6, 7, 8, 9] )

    Input:  ( 11, 12, 14, 17, 18, 19 )
    Output: ( [11, 12], [14], [17, 18, 19] )

    Input:  ( 2, 4, 6, 8 )
    Output: ( [2], [4], [6], [8] )

    Input:  ( 1, 2, 3, 4, 5 )
    Output: ( [1, 2, 3, 4, 5] )
```


```perl
    for my $e (@examples) {
        my $input  = join ', ', $e->@*;
        my $o      = consecutive_arrays( $e->@* );
        my $output = join ', ', map { qq{[$_]} }
            map { join ', ', $_->@* } $o->@*;

        say <<"END";
        Input:  ( $input )
        Output: ( $output )
    END
    }

    sub consecutive_arrays( @array ) {
        my $output = [];
        while (@array) {
            my $n = shift @array;
            push $output->@*, []
                unless scalar $output->@*
                && $n == $output->[-1][-1] + 1;
            push $output->[-1]->@*, $n;
        }
        return $output;
    }
```

[**Rich Snyder**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/cybersnyder/perl/ch-1.pl)

And, because nothing in this world is simple, in direct contrast to what I just said, we have this minimalist example from Rich. Noteworthy is the inversion of the usual comparisons we've seen, using the `if` to select the new-sub-array case and defaulting to adding to the existing sequence. The array-of-arrays is constructed, as requested, and to verify it the `@results` array is examined with the `Data::Dumper` module:

```
    $VAR1 = [
              [
                1,
                2,
                3
              ],
              [
                6,
                7,
                8,
                9
              ]
            ];
```

`Data::Dumper` exists to make data structures comprehensible, so I can't say this doesn't follow the rules. Life is made up of many things, not one thing. I often feel I could use a Data::Dumper of my own for the Real World. It would make a lot of things a lot easier.

```perl
    foreach my $num (@input) {
        croak "Numbers should be positive integers" unless ($num > 0);
        if ( ($num - $lastnum) > 1 ) {
            push @results, $working;
            $working = [$num];
        } else {
            push @{$working}, $num;
        }
        $lastnum = $num;
    }
    push @results, $working if scalar(@{$working});

    # Acceptable output?
    print Dumper(\@results);
```

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/abigail/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/abigail/awk/ch-1.awk), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/abigail/c/ch-1.c)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 131: Consecutive Arrays](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-131-1.html)

As we've seen, the steps to produce the arrays, although the specific implementations may vary, are pretty consistent and not overly complex: each element of the input is examined in course, and placed either within the most recently added sub-array or used to start its own new subarray.

As such the algorithm can be reduced to a quite compact form. Here Abigail, with the parsimony of action we have come to expect from them, has taken the processing to essentially a single line with a bit of infrastructure to back it up.

```perl
    while (<>) {
        my $prev = 0;
        print $prev ? $prev + 1 == $_ ? " " : "\n" : "", $prev = $_ for /[0-9]+/g;
        print "\n";
    }
```

[**Olivier Delouya**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/olivier-delouya/perl/ch-1.sh)

And finally, Oliver realizes the natural extension of this trend, submitting four versions of a the same one-liner to demonstrate the four examples. Here is the second of those:

```shell
    perl -se "@N=eval($N); $_prev=$N[0]-1; print '(['; foreach(@N) {if($_ != $_prev+1) {print \"\b],[\"}; print \"$_,\"; $_prev=$_;}; print \"\b])\" " -- -N="(11, 12, 14, 17, 18, 19)"
```

As you can see it has it all — the drama, the excitement, the emotional depth — in a single short act.


## Blogs and Additional Submissions in Guest Languages for Task 1:

[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/arne-sommer/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/arne-sommer/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Con Se Pair with Raku and Perl](https://raku-musings.com/con-se-pair.html)

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/athanasius/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/athanasius/raku/ch-1.raku)

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/cheok-yin-fung/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/cheok-yin-fung/julia/ch-1.jl)


&nbsp;&nbsp;**blog writeup:**
[CY's Taken The Weekly Challenge #131 ](https://e7-87-83.github.io/coding/challenge_131.html)

[**Ian Goodnight**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/iangoodnight/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/iangoodnight/javascript/ch-1.js)


&nbsp;&nbsp;**blog writeup:**
[perlweeklychallenge-club/README.md at master · manwar/perlweeklychallenge-club · GitHub](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/iangoodnight/perl/README.md)

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/james-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #131](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-131/james-smith)

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/laurent-rosenfeld/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/laurent-rosenfeld/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 131: Consecutive Arrays |aurent_r](http://blogs.perl.org/users/laurent_r/2021/09/perl-weekly-challenge-131-consecutive-arrays.html)

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/roger-bell-west/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/roger-bell-west/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/roger-bell-west/raku/ch-1.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/roger-bell-west/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/roger-bell-west/rust/ch-1.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: Perl Weekly Challenge 131: Splitting and Splitting More](https://blog.firedrake.org/archive/2021/09/Perl_Weekly_Challenge_131__Splitting_and_Splitting_More.html)

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/sgreen/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Weekly Challenge 131](https://dev.to/simongreennet/weekly-challenge-131-1fl1)

[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/ulrich-rieke/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/ulrich-rieke/haskell/ch-1.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/ulrich-rieke/raku/ch-1.raku)

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/wlmb/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 131 – W. Luis Mochán](https://wlmb.github.io/2021/09/21/PWC131/)













------------------------------------------

---

# TASK 2 {#PWC131TASK2}

# Find Pairs
*Submitted by: Yary*

You are given a string of delimiter pairs and a string to search.

Write a script to return two strings, the first with any characters matching the “opening character” set, the second with any matching the “closing character” set.

**Example 1:**
```
    Input:
        Delimiter pairs: ""[]()
        Search String:
            "I like (parens) and the Apple ][+" they said.

    Output:
        "(["
        ")]"
```
**Example 2:**
```
    Input:
        Delimiter pairs: **//<>
        Search String:
            /* This is a comment (in some languages) */ <could be a tag>

    Output:
        /**/<
        /**/>
```

## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/abigail/perl/ch-2.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/arne-sommer/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/athanasius/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/cheok-yin-fung/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/colin-crain/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/dave-jacoby/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/polettix/perl/ch-2.pl),
[**Ian Goodnight**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/iangoodnight/perl/ch-2.pl),
[**Ivan Dimitrov**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/ziruzavar/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/james-smith/perl/ch-2.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/lubos-kolouch/perl/ch-2.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/mattneleigh/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/perlboy1967/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/pete-houston/perl/ch-2.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/peter-campbell-smith/perl/ch-2.pl),
[**Rich Snyder**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/cybersnyder/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/roger-bell-west/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/sgreen/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/ulrich-rieke/perl/ch-2.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/wlmb/perl/ch-2.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/wanderdoc/perl/ch-2.pl)


There were only 23 submissions for the second task this past week, down a bit from the first challenge. If I were to speculate, I might consider people thought this was, as it first appears, a task of pairing up sets of delimiters. That task, involving nesting delineated subtexts, can get very messy very quickly when we address ideas of overlapping focus and order of opening and closing the frames. Much like CSV, the special cases soon take over the conversation, requiring increasing levels of definition to explain exactly what it is we want and have. It's a veritable thicket.

Fortunately for us, this is not that puzzle.

## an ASSORTMENT of TECHNIQUES for your PERUSAL
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/duncan-c-white/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/roger-bell-west/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/sgreen/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/james-smith/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/athanasius/perl/ch-2.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/lubos-kolouch/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/cheok-yin-fung/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/ulrich-rieke/perl/ch-2.pl),
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/wanderdoc/perl/ch-2.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/mattneleigh/perl/ch-2.pl),
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/abigail/perl/ch-2.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/wlmb/perl/ch-2.pl)









[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/duncan-c-white/perl/ch-2.pl)

Duncan wlll start off our journey into the second task. Whereas at first reading one might think this is a complex process requiring pairing of opening and closing delimiters, in fact the puzzle is much simpler: we need only to determine and then match instances of the opening and closing characters as designated, without thought to what these framings might indicate, or whether they in fact even pair.

One might [go as far as to what Abigail has said on the subject](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-131-2.html), that calling them delimiters at all is just a [red herring](https://en.wikipedia.org/wiki/Red_herring) — an accurate assessment. I myself rather enjoy these small acts of misdirection — much in life, it turns out, is not what it seems, and cutting through the distractions to the real underlying problem is a good talent to hone. So bring it on.

Here the action is broken into two phases. First, the delimiter pairs are processed and divided into two groups, for openers and closers, and these groups are used as keys in separate hashes. The input string is then split into an array of characters, and  iterating across this list each character is matched as a key to each of the two hashes. Successful lookups indicate instances; output strings are compiled from each of the hash comparison steps and the results reported.


```perl
    my %open =
        map { substr($pairlist,$_,1) => 1 }
        grep { $_ % 2 == 0 } 0..$len-1;

    my %close =
        map { substr($pairlist,$_,1) => 1 }
        grep { $_ % 2 == 1 } 0..$len-1;

    #say "open=".Dumper(\%open).", close=".Dumper(\%close) if $debug;

    my $first = my $second = '';
    foreach my $letter (split(//,$searchstring))
    {
        $first .= $letter if $open{$letter};
        $second .= $letter if $close{$letter};
    }

    say "$first\n$second";
```

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/roger-bell-west/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/roger-bell-west/postscript/ch-2.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/roger-bell-west/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/roger-bell-west/raku/ch-2.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/roger-bell-west/ruby/ch-2.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/roger-bell-west/rust/ch-2.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: Perl Weekly Challenge 131: Splitting and Splitting More](https://blog.firedrake.org/archive/2021/09/Perl_Weekly_Challenge_131__Splitting_and_Splitting_More.html)

Roger uses `substr` to directly address the characters within the input delimiter string, compactly distributing them within two anonymous hashes in a single `@d` array, at indices `[0]` and `[1]`. The string to be examined is then split into an array of characters and a lookup performed for each element, with matches pushed to output arrays. Joining the output arrays we arrive at the results.

```perl
    sub fp {
      my ($delims,$sample)=@_;
      my @d;
      foreach my $i (0..length($delims)-1) {
        $d[$i % 2]->{substr($delims,$i,1)}=1;
      }
      my @o;
      foreach my $s (split '',$sample) {
        foreach my $x (0,1) {
          if (exists $d[$x]->{$s}) {
            push @{$o[$x]},$s;
          }
        }
      }
      return [map {join('',@{$_})} @o];
    }
```

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/sgreen/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Weekly Challenge 131](https://dev.to/simongreennet/weekly-challenge-131-1fl1)

Simon, in his usual clear style, neatly breaks the problem in halves, first separating the delimiter pairs and then fining them in the input sting. He employs a different technique, however, using a regular expression to concatenate all of the input delimiters into one string, and the closers in another.  Then the input is copied for each of the two cases and a second regular expression, using the strings we created as character classes, is used to destructively substitute away instances of matching characters until none are left to remove. I find the combined assignment and subsequent substitution steps at the end delightful.


```perl
    # Build regexp of characters we want to remove
    my $open = my $close = '[^';
    while ( $D =~ /(.)(.)/g ) {
        my ( $o, $c ) = ( $1, $2 );
        # If it's not a alphanumeric character, we can safely escape it
        $open  .= $o =~ /[a-z0-9]/i ? $o : "\\$o";
        $close .= $c =~ /[a-z0-9]/i ? $c : "\\$c";
    }

    $open  .= ']';
    $close .= ']';

    # Apply the regexp, and display the results
    ( my $opening = $S ) =~ s/$open//g;
    ( my $closing = $S ) =~ s/$close//g;
    say $opening;
    say $closing;
```

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/james-smith/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #131](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-131/james-smith)

James uses one line. One line, three `map` functions and two regex quote constructs, and the topic variable array from the subroutine stack.

I'll let him describe the inner working himself:

* Working backwards we define two regex (.). & .(.) these when combined with /g return alternate characters in the string either starting from the first char or the 2nd.
* We then join these together to get two lists of characters.
* We convert them into a regex by using quotemeta to remove the "specialness" and then wrapping them in "([ ])" to capture them
* We just run this regex against our original string (with /g again) to get results.

As we now see, this is novel, but essentially similar to Simon's regex solution we just saw. Just, you know, denser. A lot denser.

I'm in the end of two minds on these functional list-wise processing constructs. Like a Tarantino film, they tell the story backwards and forwards at the same time: we need to start at the end and follow the data through the chain in reverse, but then read the individual statements left-to-right. This can, obviously, be confusing. On the other hand using an entire list of data as a fundamental processing unit is awesome.

And I have always been a big fan of awesome.

```perl
    sub find_pairs {
      map { join '', $_[1] =~m{$_}g }
      map { '['.quotemeta( $_ ).']' }
      map { join '', $_[0] =~ /$_/g }
          qr((.).?), qr(.(.?));
    }
```

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/athanasius/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/athanasius/raku/ch-2.raku)

After an appropriate aside on the definition of the word "delimiter", the monk Athanasius addresses the problem as written, constructing two hashes and then matching the individual input characters against the keys.

Of note here is the ternary operator construct that nicely divides alternating characters into two groups, assigning first to one hash, then the other.

```perl
    for my $delim (split '', $delims)
    {
        (++$i % 2 == 1) ? ++$open_chars{ $delim }
                        : ++$clse_chars{ $delim };
    }

    my $open_str = '';
    my $clse_str = '';

    for my $char (split '', $search)
    {
        $open_str .= $char if exists $open_chars{ $char };
        $clse_str .= $char if exists $clse_chars{ $char };
    }
```

[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/lubos-kolouch/perl/ch-2.pl)

Lubos creates the flip-flop more explicitly, with a designated `$switch` flag that is set on any action to take the alternate path on the next iteration. This easy to follow, and can be used to wrangle much more complicated constructs.

```perl
    # load the dicts with the opening and closing chars
    for my $char (split //, $pairs) {
        if ($switch == 0) {
            # opening
            $opening{$char} = 1;
            $switch = 1;
        } else {
            # closing
            $closing{$char} = 1;
            $switch = 0;
        }
    }

    my $out_opening = '';
    my $out_closing = '';

    for my $char (split //, $test_str) {
        $out_opening .= $char if $opening{$char};
        $out_closing .= $char if $closing{$char};
    }
```

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/cheok-yin-fung/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[CY's Taken The Weekly Challenge #131 ](https://e7-87-83.github.io/coding/challenge_131.html)

CY takes it up a notch, taking it on herself not to simply answer the problem as stated, but to add further analysis in matching up pairs of opening and closing delimiters in the given text. This is a far more complicated task, as we don't need just lists of openers and closers, but need to be able to associate specific pairings — so once we've found an opener we know to look for its matching closer — and in addition keep a list of open sets to be closed. Unmatched pairs result in a warning, as so some other anomalous states.

The code, as we said, is considerably more complex for this version of events.

```perl
    sub find_pair {

    ...

        for my $pair (@{$_[0]}) {
            my $s_head = substr($pair, 0, 1);
            my $s_tail = substr($pair, 1, 1);
            $open_found{$s_head} = []
                if any { $_ eq $s_head } (map {substr($_, 0, 1)} @open_uni);
            $close_found{$s_tail} = []
                if any { $_ eq $s_tail } (map {substr($_, -1, 1)} @close_uni);
            $neutral_found{$s_head} = []
                if any { $_ eq $s_head } (map {substr($_, 0, 1)} @neutral_uni);
        }

        for my $i (0..$#char) {
            my $c = $char[$i];
            push $open_found{$c}->@*, $i if defined($open_found{$c});
            push $close_found{$c}->@*, $i if defined($close_found{$c});
            push $neutral_found{$c}->@*, $i if defined($neutral_found{$c});
        }

    ...

        for (values %open_found, values %neutral_found) {
            push @open_positions, $_->@*;
        }
        for (values %close_found, values %neutral_found) {
            push @close_positions, $_->@*;
        }
        for (values %open_found, values %close_found, values %neutral_found) {
            push @all_positions, $_->@*;
        }

    ...

        for my $p (@all_positions) {
            my $c = $char[$p];
            if (defined($open_found{$c})) {
                push @stack, $c;
                push @waiting_to_be_closed, $p;
            }
            if (defined($close_found{$c})) {
                if (scalar @stack > 0 && $stack[-1] eq $partner{$c}) {
                    pop @stack;
                    pop @waiting_to_be_closed;
                }
                elsif (!defined($neutral_found{$c})) {
                    say("Warning: $stack[-1] at position ",
                        $waiting_to_be_closed[-1],
                        " may not close appropriately.");
                    say("Warning: $c at position ", $p,
                        " may not be corresponding to an opening delimiter.");
                    $early_warn = 1;
                    last;
                }
                else {
                    say("Warning: $stack[-1] at position ",
                        $waiting_to_be_closed[-1],
                        " does not open or close appropriately.");
                    $early_warn = 1;
                    last;
                }
            }
            if (defined($neutral_found{$c})) {
                if (scalar @stack == 0 || $stack[-1] ne $c) {
                    push @stack, $c;
                    push @waiting_to_be_closed, $p;
                }
                elsif (scalar @stack != 0 && $stack[-1] eq $c) {
                    pop @stack;
                    pop @waiting_to_be_closed;
                }
                else {
                    say("Warning: $stack[-1] at position ", $p,
                        " does not open or close appropriately." );
                    $early_warn = 1;
                    last;
                }
            }
        }
        if (!$early_warn && scalar @stack != 0
            && !defined($close_found{$stack[-1]})
           ) {
            say "Warning: delimiter(s) do not open or close appropriately:";
            say "Delimiters: @stack";
            say "Positions: ", "@waiting_to_be_closed";
        }
        if ($early_warn) {
            say "Feedback: It is recommended that you check other ",
                "delimiters as well.";
        }
    }
```

[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/ulrich-rieke/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/ulrich-rieke/cpp/ch-2.cpp), [Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/ulrich-rieke/haskell/ch-2.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/ulrich-rieke/raku/ch-2.raku)

Ulrich gives us a more fully-featured mini-app, prompting for the delimiter and search strings from `STDIN`.

Once the data is taken in, the delimiter string is parsed using `substr` and the opening and closing characters selected are divided into two hashes in a manner similar to what we have seen before. Then similarly, a second iterator is set up to examine each of the characters in the search string using a second `substr`. Although the internal string data type differs fundamentally from that of a Perl array, the two structures are similar, and accessing the individual characters this way, using `substr`, is very fast.

This is the first example we've seen so far of using `substr` to select the individual characters in the search string to do the hash lookups.

```perl
    for my $i (0 .. (length $delimiters) - 1 ) {
      if ( $i % 2 == 0 ) {
          $openingChars{ substr( $delimiters , $i , 1 ) }++ ;
      }
      else {
          $closingChars{ substr( $delimiters, $i , 1 ) }++ ;
      }
    }
    my $firstOutput ;
    my $secondOutput ;
    my $len = length $searchstring ;
    for my $i (0 .. $len - 1 ) {
      my $letter = substr( $searchstring , $i , 1 ) ;
      if ( exists ( $openingChars{ $letter } ) ) {
          $firstOutput .= $letter ;
      }
      if ( exists ( $closingChars{ $letter } ) ) {
          $secondOutput .= $letter ;
      }
    }
    say $firstOutput ;
    say $secondOutput ;
```

[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/wanderdoc/perl/ch-2.pl)

The doctor first addressed the cyclically existential question: "What if the string delimiter for the string of delimiters matches one of the delimiters contained in the string?", and, perhaps in a tip-of-the-hat to the [matryoshka doll](https://en.wikipedia.org/wiki/Matryoshka_doll) conceptualization of the problem, chooses a rarely-used Cyrillic character, твёрдый знак, or "tvjórdyy znak", for that job. Although the soft sign, the мягкий знак, "miakyi znak" is relatively common in modern Russian, the hard sign is nearly archaic.

Mmmm. Snacks. Now I want snacks.

Anyway, after setting up constructs like `q Ъ""[]()Ъ` to get the data in safely, a pair of clever hash slice assignments are used to deftly place alternating letters into a pair of `%opening` and `%closing` hashes. I love hash slice assignments. A pair of `grep` statements filter the listified input string into matches against the opening and closing set hash keys.

```perl
    sub find_delimiter
    {
         my ($del_pairs, $string) = @_;
         my @delimiter = split(//, $del_pairs);
         my (%opening, %closing);
         @opening { @delimiter[ grep $_ % 2 == 0, 0 .. $#delimiter ] } = undef;
         @closing { @delimiter[ grep $_ % 2 == 1, 0 .. $#delimiter ] } = undef;
         my @characters = split(//, $string);

         my @this_opening = grep exists $opening{$_}, @characters;
         my @this_closing = grep exists $closing{$_}, @characters;
         return join('', @this_opening), join('', @this_closing);
    }
```

[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/mattneleigh/perl/ch-2.pl)

If anyone is still having trouble following the basic process, I will point you to Matthew's code below, which is extensively commented in a blow-by-blow to the very end. Which, I will reenforce again, is always very welcome in these demonstrations.

This technique differs by using a regular expression to select individual letters matched from the undifferentiated input delimiter string taken as a character class using a global search, capturing any match of any delimiter. As each capture is made, it is then compared to the stringified list of opening characters using a second regex, with the same action repeated for the closing.

```perl
    # Break the delimiter string into even
    # and odd characters
    foreach(split("", $ARG[0])){
        if($i++ % 2){
            # Odd character
            $closing .= $_;
        } else{
            # Even character
            $opening .= $_;
        }
    }

    # Escape metacharacters in the
    # delimiter string
    $ARG[0] = quotemeta($ARG[0]);

    # Keep searching through the string
    # while specified delimiter characters
    # are still found
    while($ARG[1] =~ m/([$ARG[0]])/gc){
        my $chr = $1;

        # Store a copy of the character for
        # searching, with metacharacter
        # escaped as needed
        $_ = quotemeta($chr);

        # Determine which sets should
        # contain this character (it may
        # appear in both)
        if($opening =~ m/$_/){
            # Opening delimiter found
            $opening_found .= $chr;
        }
        if($closing =~ m/$_/){
            # Closing delimiter found
            $closing_found .= $chr;
        }
    }
```

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/abigail/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/abigail/awk/ch-2.awk)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 131: Find Pairs](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-131-2.html)

Abigail brings lots of unusual variations (as usual, the unusual is the norm) in a simple, compact solution.

First we are presented with chained regexes to selectively isolate strings from the input containing only odd and even positioned characters, and then these two substrings are then modified again by an inspired bit of magic involving the translation operator, `y///`.

To explain: using the `/c`, `/d` and `/r` modifiers we are, in the first example, making a list of any character not found in the `$odds` string, deleting it because it is not replaced, and then returning a *copy* of the newly translated string to be printed without altering the original. Then the same action can be performed again using the `$even` string.

Nice.

```perl
    chomp (my $chars = <>);
    $_ = <>; # String to search

    #
    # Extract the characters on the odd and even positions;
    # replace / with \/, and \ with \\.
    #
    my $odds = $chars =~ s/(.)./$1/gr =~ s!([/\\])!\\$1!r;
    my $even = $chars =~ s/.(.)/$1/gr =~ s!([/\\])!\\$1!r;

    #
    # Use y///dc to get rid of the characters which don't match, and
    # print the remainder.
    #
    say eval "y/$odds//dcr";
    say eval "y/$even//dcr";
```


[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/wlmb/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 131 – W. Luis Mochán](https://wlmb.github.io/2021/09/21/PWC131/)


Finally, Luis gives us a pair of `map` functions to first first parcel out the opens and closes, using a novel scheme to arithmetically generate the even and odd indices from a single range of half the length of the delimiter list. Then a pair of output arrays are assigned to, `@open` and `@close`, for those respective delimiters that are found.

```perl
    my ($delims, $string)=@ARGV;
    my @delims = split '', $delims;
    die "Unbalanced delims $delims" unless @delims%2==0; # need even number
    my (%open_delim, %close_delim);
    map { $open_delim{$delims[2*$_]} = 1;
          $close_delim{$delims[2*$_+1]} = 1 } 0..@delims/2-1;
    my (@open,  @close);
    map { push @open, $_ if $open_delim{$_};
          push @close, $_ if $close_delim{$_}; } split '', $string;
    say "Input:\n\tDelimiter pairs: $delims\n",
        "\tSearch string: $string\nOutput:\n\t",
         @open, "\n\t", @close;                     # avoid interpolated spaces
```



## Blogs and Additional Submissions in Guest Languages for Task 2:


[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/arne-sommer/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/arne-sommer/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Con Se Pair with Raku and Perl](https://raku-musings.com/con-se-pair.html)


[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/colin-crain/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/colin-crain/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Consequential Pairings and SECRET CUTS - Programming Excursions in Perl and Raku](https://colincrain.com/2021/09/26/consequential-pairings-and-secret-cuts/)


[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/dave-jacoby/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Consecutive Limits: The Weekly Challenge 131 | Committed to Memory](https://jacoby.github.io/2021/09/21/consecutive-limits-the-weekly-challenge-131.html)


[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/polettix/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/polettix/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC131 - Find Pairs](https://github.polettix.it/ETOOBUSY/2021/09/23/pwc131-find-pairs/)


[**Ian Goodnight**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/iangoodnight/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/iangoodnight/javascript/ch-2.js)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge - 131](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/iangoodnight/perl/README.md)




---

# BLOGS {#PWC131BLOGS}

---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, I somehow continue to maintain my bearings. Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC131BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *READ* these *BLOG* *LINKS*:

**( *don't think, trust your training, you're in the zone, just do it ...* )**


**Abigail**

 * [Perl Weekly Challenge 131: Consecutive Arrays](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-131-1.html) ( *Perl* )
 * [Perl Weekly Challenge 131: Find Pairs](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-131-2.html) ( *Perl* )

**Arne Sommer**

 * [Con Se Pair with Raku and Perl](https://raku-musings.com/con-se-pair.html) ( *Perl & Raku* )

**Cheok-Yin Fung**

 * [CY's Taken The Weekly Challenge #131 ](https://e7-87-83.github.io/coding/challenge_131.html) ( *Perl* )

**Colin Crain**

 * [Consequential Pairings and SECRET CUTS - Programming Excursions in Perl and Raku](https://colincrain.com/2021/09/26/consequential-pairings-and-secret-cuts/) ( *Perl & Raku* )

**Dave Jacoby**

 * [Consecutive Limits: The Weekly Challenge 131 | Committed to Memory](https://jacoby.github.io/2021/09/21/consecutive-limits-the-weekly-challenge-131.html) ( *Perl* )

**Flavio Poletti**

 * [PWC131 - Consecutive Arrays](https://github.polettix.it/ETOOBUSY/2021/09/22/pwc131-consecutive-arrays/) ( *Perl & Raku* )
 * [PWC131 - Find Pairs](https://github.polettix.it/ETOOBUSY/2021/09/23/pwc131-find-pairs/) ( *Perl & Raku* )

**Ian Goodnight**

 * [Perl Weekly Challenge - 131](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/iangoodnight/perl/README.md) ( *Perl* )
 * [Perl Weekly Challenge - 131](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/iangoodnight/javascript/README.md) ( *Javascript* )

**James Smith**

 * [Perl Weekly Challenge #131](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-131/james-smith) ( *Perl* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 131: Consecutive Arrays](http://blogs.perl.org/users/laurent_r/2021/09/perl-weekly-challenge-131-consecutive-arrays.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 131: no coffee, nolegance – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2021/09/20/PerlWeeklyChallenge131.html#task1) ( *Raku* )

**Roger Bell_West**

 * [RogerBW's Blog: Perl Weekly Challenge 131: Splitting and Splitting More](https://blog.firedrake.org/archive/2021/09/Perl_Weekly_Challenge_131__Splitting_and_Splitting_More.html) ( *Perl & Raku* )

**Simon Green**

 * [Weekly Challenge 131](https://dev.to/simongreennet/weekly-challenge-131-1fl1) ( *Perl* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 131 – W. Luis Mochán](https://wlmb.github.io/2021/09/21/PWC131/) ( *Perl* )
