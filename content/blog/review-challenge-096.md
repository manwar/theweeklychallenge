
---
author:       Colin Crain
date:         2021-02-07T00:00:00
description:  "Colin Crain › Perl Weekly Review #096"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #096"
image:        images/blog/p5-review-challenge-096.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-095/).* )

Welcome to the Perl review for **Week 096** of the Weekly Challenge! Here we will take the time to discuss the  submissions offered by the team, factor out the common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

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

**<big>For context</big>**  before we begin, you may wish to revisit either of the pages for the [**original tasks**](/blog/perl-weekly-challenge-096/) or the summary [**recap**](/blog/recap-challenge-096/) of the challenge. But don't worry, the challenges themselves will be briefly summarized, presented below as we progress from task by task. Oh, and one more thing before we get started:

### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

**So finally, without further ado...**

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC096TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC096TASK2)   &nbsp;  &nbsp;  &nbsp;       •   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC096BLOGS)    &nbsp;  &nbsp;  &nbsp;       •

---

# TASK 1 {#PWC096TASK1}

# Reverse Words

*Submitted by: Mohammad S Anwar*

You are given a string $S.

Write a script to reverse the order of words in the given string. The string may contain leading/trailing spaces. The string may have more than one space between words in the string. Print the result without leading/trailing spaces and there should be only one space between words.

**Example 1:**

```
    Input: $S = "The Weekly Challenge"
    Output: "Challenge Weekly The"
```

**Example 2:**

```
    Input: $S = "    Perl and   Raku are  part of the same family  "
    Output: "family same the of part are Raku and Perl"
```

## about the solutions

There were only 20 working submissions for the first task this past week.

You know, it was difficult to watch otherwise good, hardworking people brought down by a single space. It's hard to see. It hurts, you know? Inside.

*(shakes head, muttering unintelligibly)*

It's just not right.

Although a basic solution to the challenge might appear fairly trivial on the surface — to use `split`, then reverse and join up the resultant array — the problems arose with the normal behavior between `split` and matching the given delimiter right off the bat. Now normally, `split` matches and adds an element to the new array with whatever was before the delimiter, *whether or not there is anything to divide*. The function then continues, position by position, looking to match the next delimiter. Which is to say when we have whitespace as the delimiter and immediately match leading whitespace, an element is created nevertheless, with an undefined, empty value. If we `reverse` the array and `join` with a single space the undefined element will be joined alongside the others. Although the undefined element will itself produce no output, the `join` will leave an artifact of a trailing space.

Which we were quite clearly told not to do.

So the challenge transforms under us from reversing the words, the stated goal, to getting rid of those pesky spaces. The old switcheroo, you might say. Misdirection.

## TRIM
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/duncan-c-white/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/polettix/perl/ch-1.pl), and
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/lubos-kolouch/perl/ch-1.pl)

It makes perfect intuitive sense that a string composed of just words divided by spaces, when broken apart at the spaces, will produce an array of words that can be reversed without incident. So if we can trim the string to our ideal outlined above, we're good to go.

As an aside we're only looking out for *leading* whitespace. *Trailing* whitespace will always be deleted unless explicitly requested with a `LIMIT` value. Without a `LIMIT` specified for our `split`, as is found in all the cases before us today, [perldoc](https://perldoc.perl.org/functions/split) states:

>If LIMIT is omitted (or, equivalently, zero), then it is usually treated as if it were instead negative but with the exception that trailing empty fields are stripped (empty leading fields are always preserved); if all fields are empty, then all fields are considered to be trailing (and are thus stripped in this case).

So that's why we don't see those.

The simple insertion of a substitution regex to preclean the string will do the job.

[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/duncan-c-white/perl/ch-1.pl)

Duncan does the obvious thing, which is to trim the string of extra whitespace with a pair of substitutions anchored to the front and back. Trimming the tail neatens things up and ultimately causes no harm, of course.

```perl
    $s =~ s/^\s+//;
    $s =~ s/\s+$//;
    my @rw = reverse( split(/\s+/, $s ) );
    say join(' ', @rw);
```

[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/lubos-kolouch/perl/ch-1.pl)

Lubos realized that only the leading space was causing a problem, and we only need to address that aspect. Although I *would* argue that it's misattributed — that the extra space on the reversed string is actually left by the `join`, rather than the `split`. The `split` leaves an undefined element.

```perl
    # split leaves the initial space
    $what =~ s/^\s+//;

    return  join ' ', reverse split /\s+/, $what;
```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/polettix/perl/ch-1.pl)

Flavio takes a different approach to trimming. If the problem is an artifact of an extra trailing space in the result, why not just remove the space? The substitution we see at the end ot the line works on the string created by the `join`, trimming any trailing spaces found up until the end.

```perl
    sub reverse_words ($S) {
       join(' ', reverse split m{\s+}mxs, $S) =~ s{\s+\z}{}rmxs;
    }
```


## GREP
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/dave-jacoby/perl/ch-1.pl),
[**Gustavo Chaves**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/gustavo-chaves/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/james-smith/perl/ch-1.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/stuart-little/perl/ch-1.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/wlmb/perl/ch-1.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/wanderdoc/perl/ch-1.pl)

Another way to look at the situation is to focus on the undefined array element. Were it not there we'd have nothing to complain about, would we? So what would happen if it just... went away? You know, snicker-snack with the ol' vorpal blade? The only one to miss it would be our over-eager `join`.

By placing an appropriate `grep` function to intercept the array after splitting we can filter out the undefind element and allow the others to pass through unchecked. Unfortuantely though this whole strategy was fraught with peril. Consider, though, that all these methods did pass my ad hoc definition of "working", as I will explain.

[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/stuart-little/perl/ch-1.pl)

```perl
    say join " ", (reverse grep /\w/, (split /\s+/, $ARGV[0]))
```

Stuart greps on the existence of a single word character, which includes digits and underscores. This should work pretty well. It brings to light an important lack of definition in the task as stated, however, in the question of: "What is a word"? It's not
clarified, so can we be certain there is no sentence where this would fail? After all, in Perl there are lots of special characters. For instance, the "$" sign is used as what is known as a "sigil". See what I did there?


Transmogrified: **"sigil". a as known is what as used is sign the instance, For**

...And our "$" is gone like it was never there.

In summary, there is nothing fundimentally wrong with the idea of filtering our array to extract the words, but we need to be very careful about our definitions and about craft our regex accordingly.


Alternately, it was more common to grep on `$_` to prove  existence:

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/james-smith/perl/ch-1.pl)

```perl
    sub rev_words {
      return join q( ), reverse grep {$_} split m{\s+}, $_[0];
    }
```

Again, I can't say this is *wrong*, per se, because again the definition of a word is left open. Anything with a character should resolve to TRUE.  But consider the appropriately self-defining input:

```perl
    @ARGV = ("   there are no longer 0 pathological test cases   ");
```

Do you see it? 0 is going to always be false. Which is itself another example sentence which will cause problems. The meta-referential text is gettting thick around here.

Yea. Sorry about that. I can't really stop myself from breaking things sometimes.

[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/wanderdoc/perl/ch-1.pl)

The intrepid doctor has the right idea, though, grepping not on any particular value, but on its *length*. Any defined string, whatever it is, will have some positive length, right?

```perl
    sub reverse_words
    {
         my $str = $_[0];
         my @words = grep length($_), split(/\s+/, $str);
         return join(' ', reverse @words);

    }
```

[**Gustavo Chaves**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/gustavo-chaves/perl/ch-1.pl)
also took this tack. It appears for all intents and purposes to be sound.

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/dave-jacoby/perl/ch-1.pl)

Dave goes to great length to grapple with these ideas I've brought up, and gives a well thought out analysis to the situation. He brings up the confounding case of an apostrophe, for instace, which is not a word character. To sidestep this he splits on [unicode word boundaries](https://www.effectiveperlprogramming.com/2016/06/perl-v5-22-adds-fancy-unicode-word-boundaries/) and then greps on *non-* space characters. This is in my mind a sneaky gambit and I approve.

```perl
    sub reverse_words ( $string ) {
        return join ' ', reverse grep /\S/, split /\b{wb}/, $string;
    }
```

It seems to do the trick. We will revisit that circuitous route to a word definition, as "those things that are not spaces", later. Do go and read Dave's commentary before you go, though. It's good.


## SPLIT
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/athanasius/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/e-choroba/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/jo-37/perl/ch-1.pl),
[**Kang-min Liu**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/gugod/perl/ch-1.pl),
[**Lance Wicks**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/lance-wicks/perl/ch-1.pl),
[**Nuno Vieira**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/nunovieira220/perl/ch-1.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/paulo-custodio/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/pete-houston/perl/ch-1.pl), and
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/roger-bell-west/perl/ch-1.pl)

Taking a step sideways from all this definition of what is and is not a word, there was another way to obtain the correct results, by utilizing a non-standard quirk of the `split` function. You see, Perl was originally created out of, amongst other things, `sed` and `awk`, two early Unix command line tools for text processing. It was meant to build on these tools and improve them, to make Larry's life easier, and as such inherits some behavior from its anticedents. Like for instance the alternate `y///` syntax for the translation operator `tr///`, which is shamelessly stolen from `sed`. In this case we're copying `awk`. From [perldoc](https://perldoc.perl.org/functions/split):

>As another special case, "split" emulates the default behavior of the command line tool awk when the PATTERN is either omitted or a string composed of a single space character (such as `' '` or `"\x20"`, but not e.g. `"/ /"`). In this case, **any leading whitespace in EXPR is removed before splitting occurs**, and the PATTERN is instead treated as if it were `"/\s+/"`; in particular, this means that *any* contiguous whitespace (not just a single space character) is used as a separator.

Emphasis mine. By stripping leading whitespace, this seems to do exactly what we need, which is does. No undefined element is created, so no trailing space is produced.

[**Kang-min Liu**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/gugod/perl/ch-1.pl)

Liu shows us just how easy it is:

```perl
    sub reverse_words ($S) {
        return join " ", reverse split " ", $S;
    }
```

Because of the special case behavior this version is fine, where

```perl
    join " ", reverse split / /, $S;
```

would fail.

A few more examples:

[**Nuno Vieira**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/nunovieira220/perl/ch-1.pl)

```perl
    my $res = join(" ", reverse(split(" ", $S)));
```

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/athanasius/perl/ch-1.pl)

```perl
    printf qq[Output: "%s"\n], join ' ', reverse split ' ', $S;
```

[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/pete-houston/perl/ch-1.pl)

```perl
    sub revstr {
        return join ' ', reverse split ' ', shift;
    }
```

As you can see there is quite a bit of self-similarity between the solutions, as they exist in a form that's about as terse as can be.

Or is it?

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/jo-37/perl/ch-1.pl)

Jorg gives us the same logic, only drawing on creative use of assigning to the topic and its default behavior for `split`:

```perl
say qq{"@{reverse_words(@ARGV)}"};

sub reverse_words {
    local $_ = "@_";
    [reverse split];
}
```

The default value of the list separator, `$"`, provides the space between the returned list elements when we put the array into the `qq()` double-quote operator. So many sneaky tricks in one place! Would `join ' '` work just as well in the place of odd construction we see? Sure, but then we'd still need to add the additional *printed* double quotes to exactly match the example output.





## REGEX
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/abigail/perl/ch-1.pl) and
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/colin-crain/perl/ch-1.pl)

I mentioned we'd revisit the idea of matching "those things that are not spaces" to find our words. Well here we are.

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/abigail/perl/ch-1.pl)

Abigail gives us a "fat comma" in his expression. The `/\S/g` construction matches everything that's not whitespace. What we are left with is the words, however they are constructed.

```perl
    say join " " => reverse /\S+/g for <>;
```

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/colin-crain/perl/ch-1.pl)

I came up with nearly the same form. By using a regular expression, we grab the blocks of characters that aren't the things between words, sidestepping any definitions of what exactly comprises a "word", and similarly making both leading and trailing whitespace irrelevant.

```perl
    sub rev_sentence {
        return join ' ', reverse $_[0] =~ m/(\S+)/g;
    }
```



---

---

# TASK 2 {#PWC096TASK2}

# Edit Distance
*Submitted by: Mohammad S Anwar*
You are given two strings $S1 and $S2.

Write a script to find out the minimum operations required to convert
$S1 into $S2. The operations can be insert, remove or replace a
character. Please check out Wikipedia page for more information.

[Edit_distance](https://en.wikipedia.org/wiki/Edit_distance)

**Example 1:**
```
    Input: $S1 = "kitten"; $S2 = "sitting"
    Output: 3

        Operation 1: replace 'k' with 's'
        Operation 2: replace 'e' with 'i'
        Operation 3: insert 'g' at the end
```
**Example 2:**
```
    Input: $S1 = "sunday"; $S2 = "monday"
    Output: 2

        Operation 1: replace 's' with 'm'
        Operation 2: replace 'u' with 'o'
```

## about the solutions

There were 23 functional submissions for the second task this past week.

### a note on the Levenshtein distance

In this task we speak often of the Levenshtein distance, being the edit distance allowing the three operations as specified. In the examples, each operation is tallied as one change: to either insert, delete of replace. One oddity I found researching this is that apparently Levenshtein himself, in his seminal 1965 paper, gave the substitution operation a cost of 2, as a deletion followed by an insertion. I was unable to find a translation of the original paper to verify for myself, but it's telling that in about half the examples I could find from academic sources the cost was given as 2, the other half 1. As a practical programming algorithm the cost was nearly always 1, but again in several cases 2. It's a puzzle. At some point the standard form of the calculation changed, and one cannot assume without looking whether one value or the other are used. Needless to say different effects will be produced, and different relative comparative indicators of absolute difference between sets of words will arise, so the values are not arbitrary and interchangeable.  It's also strange to me that not one of the sources I read acknowledged this difference, or allowed a configuration to be set. Each source picked one or the other for its definition, as the way things were, without compromise. As the metric only generally exists for comparisons within a given application this difference generally won't matter. But I find it very odd that I appear to be the only person making a big deal about it. It's strange, that's all, and after extensive research I seem to be at a standstill. If anyone might help to shed some light on the subject I'd be glad to hear it.


## use a MODULE that DOES WHAT WE WANT
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/pete-houston/perl/ch-2.pl) and
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/stuart-little/perl/ch-2.pl)

Holding the fundamental virtue of laziness, it is the Perl way not to reinvent the wheel. Not that we abide much to that rule around these parts, but out in the real world it just makes sense.

Do we really need an example? Sure, why not.

[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/pete-houston/perl/ch-2.pl)

Well, Pete does take the time to validate his input. So he's got that going on...

```perl
use Text::Levenshtein 'distance'; # CPAN is awesome

die "Usage: $0 STRING1 STRING2\n" unless 2 == @ARGV;
print distance(@ARGV) . "\n";
```


## the RECURSIVE method
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/adam-russell/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/duncan-c-white/perl/ch-2.pl),
[**Gustavo Chaves**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/gustavo-chaves/perl/ch-2.pl),
[**Kang-min Liu**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/gugod/perl/ch-2.pl), and
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/laurent-rosenfeld/perl/ch-2.pl)

In the basic recursive method, we build up an answer to our question by comparing the first two characters of our two strings. If they are the same, no action is required, and we immediately recurse with the remaining character segment. If they don't match, we need to add one change to our count, after which we are faced with three options in converting the old string to the new: to remove a character from the old, allowing the next position to slide into place, insert a new character into the new, pushing the current position forward to the next, or substitute a new character for the old, keeping the relative correspondance between the two strings unchanged. Because this is a naive algorithm, we recurse down after each of the three options with the remaining lengths of string, adjusted according to the rules we've stated. The base case is returned when we run out of one string or the other, which is the length of the remaining other string.

By choosing the minimum value returned by the three paths at each recursion, we walk the tree in all possible configurations. The final returned result after unwinding will be the smallest number of changes required to make the transformation.

Because every recursive node has three options and every option is always visited, we will end up with complexity of **O**(3<sup>min(*m*,*n*)</sup>).


[**Kang-min Liu**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/gugod/perl/ch-2.pl)

Kang-min demonstrates the technique for us:

```perl
    sub lev {
        my ($s1, $s2) = @_;

        return length($s1) if length($s2) == 0;
        return length($s2) if length($s1) == 0;

        my $s1_tail = substr($s1, 1);
        my $s2_tail = substr($s2, 1);
        return lev($s1_tail, $s2_tail) if substr($s1, 0, 1) eq substr($s2, 0, 1);
        return 1 + min(
            lev($s1, $s2_tail),
            lev($s1_tail, $s2),
            lev($s1_tail, $s2_tail),
        );
    }
```

Here's another example from

[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/ulrich-rieke/perl/ch-2.pl)

```perl
    sub levenshtein_dist {
      my $A = shift ;
      my $B = shift ;
      if ( length $A == 0 ) {
          return length $B ;
      }
      elsif ( length $B == 0 ) {
          return length $A ;
      }
      elsif ( substr( $A , 0 , 1 ) eq substr( $B, 0 , 1 ) ) {
          return levenshtein_dist( substr( $A , 1 ) , substr( $B, 1 ) ) ;
      }
      else {
          my $tailA = substr( $A , 1 ) ;
          my $tailB = substr( $B , 1 ) ;
          my @results ;
          push( @results , levenshtein_dist( $tailA, $B ) ) ;
          push( @results, levenshtein_dist( $A , $tailB ) ) ;
          push( @results, levenshtein_dist( $tailA , $tailB ) ) ;
          return 1 + min @results ;
      }
    }
```

[**Gustavo Chaves**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/gustavo-chaves/perl/ch-2.pl)

Gustavo provides the same basic algorithm, but adds a nice feature, compiling a blow-by-blow methodology for the transformation. When asked to convert "kitten" to "sitting", this is his output:

```bash
Operation 1: replace 'k' at 0 with 's'
Operation 2: replace 'e' at 4 with 'i'
Operation 3: insert 'g' at 6
```

Nice, isn't it? Here's his code:

```perl
    sub distance {
        my ($i, $j) = @_;

        if ($i < 0 && $j < 0) {
            return;
        } elsif ($j < 0) {
            return map {"delete '$S1[$_]'"} 0 .. $i;
        } elsif ($i < 0) {
            return map {"delete '$S2[$_]'"} 0 .. $j;
        } elsif ($S1[$i] eq $S2[$j]) {
            return distance($i-1, $j-1);
        } else {
            my @del = (distance($i-1, $j), "delete '$S1[$i]' from $i");
            my @ins = (distance($i, $j-1), "insert '$S2[$j]' at $j");
            my @sub = (distance($i-1, $j-1), "replace '$S1[$i]' at $i with '$S2[$j]'");
            return @{(sort {scalar(@$a) <=> scalar(@$b)} \@del, \@ins, \@sub)[0]};
        }
    }
```

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/adam-russell/perl/ch-2.pl)

When following every option at every node, many of the recursions will end up being called with identical arguments. To speed things up we can check to see whether that computation has already been done, and if so return instead a cached result. This method, called memoization, is easily accomplished using the `Memoize` module. All we need to do is declare the routine to be memoized and the rest magically falls into place.

```perl
    use Memoize;
    memoize("edit_distance");

    sub edit_distance{
        my($s, $t) = @_;
        if(length($s) == 0){
            return length($t);
        }
        if(length($t) == 0){
            return length($s);
        }
        my($s0, $t0) = (substr($s, 0, 1), substr($t, 0, 1));
        if($s0 eq $t0){
            return edit_distance(substr($s, 1), substr($t, 1));
        }
        my @sorted_distances = sort {$a <=> $b} (
            edit_distance($s, substr($t, 1)),
            edit_distance(substr($s, 1), $t),
            edit_distance(substr($s, 1), substr($t, 1)),
        );
        return 1 + $sorted_distances[0];
    }
```

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/laurent-rosenfeld/perl/ch-2.pl)

Laurent ups the game on the memoizing part of the recursion, creating his own wrapper function to cache the results from his main routine. Checking the arguments given against previously computed values, either the cached result is returned or the routine is run and the result added to the cache.

What's different here is that Laurent has embraced the "decorator" design pattern to implement this. Now Perl doesn't *have* decorator functions out of the box, say like Python. So for the uninitiated, a decorator is a function designed to non-destructively change the behavior of another function, without directly altering its code. So Laurent here gives us a `decorate` function, which takes another function as a coderef argument. It then creates an anonymous modified version of this function, in this case enacting the memoization cache check, then returns a coderef to this new anonymous routine. Then the *really* cool part comes in, where he patches the symbol table with this coderef so that calls to the original function are silently rerouted to the decorated, memoized version. Now that, *that* is really cool.

```perl
    sub decorate {
        my $coderef = shift;
        my %cache;
        return sub {
            my ($l, $r) = @_;
            $cache{"$l;$r"} = $coderef->(@_) unless exists $cache{"$l;$r"};
            return $cache{"$l;$r"};
        }
    }

    {
        # local scope for the deactivation of the redefine warning
        no warnings 'redefine';
        # we replace the edit-distance subrouytine by its
        # decorated version in the main symbol table
        *main::edit_distance = decorate(\&edit_distance);
    }
```



## DYNAMIC programming: the WAGNER-FISCHER algorithm
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/arne-sommer/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/athanasius/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/cheok-yin-fung/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/colin-crain/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/dave-jacoby/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/jo-37/perl/ch-2.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/lubos-kolouch/perl/ch-2.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/paulo-custodio/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/roger-bell-west/perl/ch-2.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/wlmb/perl/ch-2.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/wanderdoc/perl/ch-2.pl)

The [Wagner-Fischer algorithm](https://en.wikipedia.org/wiki/Wagner–Fischer_algorithm) is a neat little dynamic programming improvement over naive recursion, where increasingly longer substrings between the two inputs are compared, with the shorter results memoized and used to compute the longer. Constructing the matrix of partial results has much in common with the recursive method, exploring every possible pathway, the difference being that at every juncture we can selectively make a decision and chose to only follow the shortest path, reducing the complexity to **O**(*m*+*n*).


[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/wanderdoc/perl/ch-2.pl)

The learned one gives us the essence of the technique. In it we build a matrix through a nested iteration, choosing at each cell the minimum from the three options available to determine the shortest distance.

```perl
    sub LevenshteinDistance
    {
         my ($str_1, $str_2) = @_;
         my $mtr;

         my @first  = split(//,$str_1);
         my @second = split(//,$str_2);

         do { my $ch1 = $_;
              do { $mtr->[$ch1][$_] = 0 } for 0 .. scalar @second }
         for 0 .. scalar @first;

         $mtr->[$_][0] = $_ for 0 .. scalar @first;
         $mtr->[0][$_] = $_ for 0 .. scalar @second;

         for my $i ( 1 .. scalar @first )
         {
              for my $j ( 1 .. scalar @second )
              {
                   my $distance = $first[$i-1] eq $second[$j-1] ? 0 : 1;
                   $mtr->[$i][$j] = min
                                  (
                                       $mtr->[$i-1][$j] + 1,          # deletion.
                                       $mtr->[$i][$j - 1] + 1,        # insertion.
                                       $mtr->[$i-1][$j-1] + $distance # substitution.
                                  );
              }
         }
         return $mtr->[-1][-1];
    }
```

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/colin-crain/perl/ch-2.pl) is very similar to this implementation.

For those of you who prefer a little more room to breathe in their code,

[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/arne-sommer/perl/ch-2.pl)
will be happy to provide:

```perl
    sub wagner_fischer ($s, $t)
    {
      my $m = length $s;
      my $n = length $t;

      my @s = ( "", split("", $s) );
      my @t = ( "", split("", $t) );

      my @d;

      for my $i (1 .. $m)
      {
        $d[$i][0] = $i;

        for my $j (1 .. $n)
        {
          $d[$i][$j] = 0;
        }
      }

      for my $j (0 .. $n)
      {
        $d[0][$j] = $j;
      }

      for my $i (1 .. $m)
      {
        for my $j (1 .. $n)
        {
          my $cost = $s[$i] eq $t[$j]
            ? 0
        : 1;

          $d[$i][$j] = min( $d[$i-1][$j] +1,        # Deletion
                            $d[$i][$j-1] +1,        # Insertion
                            $d[$i-1][$j-1] +$cost); # Deletion
        }
      }

      return $d[$m][$n];
    }
```

This is directly contrasted by

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/roger-bell-west/perl/ch-2.pl)

```perl
    sub ed {
      my ($s,$t)=@_;
      my @s=(0,split '',$s);
      my @t=(0,split '',$t);
      my @d;
      foreach (0..$#s) {
        push @d,[(0) x ($#t+1)];
      }
      map {$d[$_][0]=$_} 1..$#s;
      map {$d[0][$_]=$_} 1..$#t;
      foreach my $j (1..$#t) {
        foreach my $i (1..$#s) {
          my $sc=0;
          if ($s[$i] ne $t[$j]) {
            $sc=1;
          }
          $d[$i][$j]=min(
            $d[$i-1][$j]+1,
            $d[$i][$j-1]+1,
            $d[$i-1][$j-1]+$sc,
              );
        }
      }
      return $d[$#s][$#t];
    }
```

One of the most common extensions to the task given was to backtrack on the completed table from the solution to find *which* changes were required to get there. Algorithmically, one does this by finding the way back through the matrix to the first cell with value zero.

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/athanasius/perl/ch-2.pl)

The monk provides us with a beautifully illuminated representation of the process:

```shell
    Challenge 096, Task #2: Edit Distance (Perl)

    Input:  $S1 = "kitten"; $S2 = "sitting"
    Output: 3 (Levenshtein distance)

    +---+---+---+---+---+---+---+---+
    |   | # | k | i | t | t | e | n |
    +---+---+---+---+---+---+---+---+
    | # | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
    +---+---+---+---+---+---+---+---+
    | s | 1 | 1 | 2 | 3 | 4 | 5 | 6 |
    +---+---+---+---+---+---+---+---+
    | i | 2 | 2 | 1 | 2 | 3 | 4 | 5 |
    +---+---+---+---+---+---+---+---+
    | t | 3 | 3 | 2 | 1 | 2 | 3 | 4 |
    +---+---+---+---+---+---+---+---+
    | t | 4 | 4 | 3 | 2 | 1 | 2 | 3 |
    +---+---+---+---+---+---+---+---+
    | i | 5 | 5 | 4 | 3 | 2 | 2 | 3 |
    +---+---+---+---+---+---+---+---+
    | n | 6 | 6 | 5 | 4 | 3 | 3 | 2 |
    +---+---+---+---+---+---+---+---+
    | g | 7 | 7 | 6 | 5 | 4 | 4 | 3 |
    +---+---+---+---+---+---+---+---+

    Operation 1: replace 'k' with 's'
    Operation 2: replace 'e' with 'i'
    Operation 3: insert 'g'
```

The matrix itself is an object defined in an accompanying [module](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/athanasius/perl/Matrix.pm). The pretty-printing display is provided there. To do the backtracking, they use a `trace_path()` routine. It
's rather hard to summarize, so here it is in all its glory:

```perl
sub trace_path
{
    my ($matrix) = @_;
    my  $row     = $matrix->height - 1;
    my  $col     = $matrix->width  - 1;
    my  $min     = $matrix->element($row, $col);
    my  @path    = [ $row, $col, $min ];

    until ($row == 0 && $col == 0)
    {
        if    ($col == 0)
        {
            $min = $matrix->element(--$row,   $col);        # Move up:   insert
        }
        elsif ($row == 0)
        {
            $min = $matrix->element(  $row, --$col);        # Move left: delete
        }
        else
        {
            my $up   = $matrix->element($row - 1, $col    );
            my $left = $matrix->element($row,     $col - 1);
            my $diag = $matrix->element($row - 1, $col - 1);

            if    ($diag <= $up   && $diag <= $left)
            {                                               # Move up and left:
                $min = $matrix->element(--$row, --$col);    #           replace
            }
            elsif ($up   <= $diag && $up   <= $left)
            {
                $min = $matrix->element(--$row,   $col);    # Move up:   insert
            }
            else
            {
                $min = $matrix->element(  $row, --$col);    # Move left: delete
            }
        }

        push @path, [ $row, $col, $min ];
    }

    return [ reverse @path ];
}
```


## the above ITERATIVE solution using only TWO ROWS
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/abigail/perl/ch-2.pl) and
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/polettix/perl/ch-2.pl)

When constructing the matrix for the dynamic solution, the cells are filled in a methodical manner, left to right and top to bottom, with the calculation for each successive placement determined only by one of the three cells adjacent above, to the left and diagonally up and back. As such only two rows are ever in play at any one time, the row currently being constructed and the row previous. The dynamic algorithm can be altered to only retain these rows, drastically reducing memory requirements without otherwise affecting the calculation.

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/abigail/perl/ch-2.pl)

Abigail accomplishes this memory saving with a very standard-looking version of the Wagner-Fischer algorithm, with the additional step of undefining rows no longer needed. All of the indexing remains unchanged, however those parts of the matrix no longer needed will now take up minimal memory.

```perl
    sub LevenshteinDistance ($first, $second) {
        my $distance;
        for (my $i = 0; $i <= length ($first); $i ++) {
            for (my $j = 0; $j <= length ($second); $j ++) {
                $$distance [$i] [$j] =
                    $i == 0 || $j == 0 ? $i + $j
                  : min ($$distance [$i - 1] [$j]     + 1,
                         $$distance [$i]     [$j - 1] + 1,
                         $$distance [$i - 1] [$j - 1] +
                            (substr ($first,  $i - 1, 1) eq
                             substr ($second, $j - 1, 1) ? 0 : 1))
            }
            #
            # We only need the previous row; this reduces the memory
            # from Theta (N * M) to O (N + M), where N and M are the
            # lengths of the input strings.
            #
            undef $$distance [$i - 1] if $i;
        }
        $$distance [-1] [-1];
    }
```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/polettix/perl/ch-2.pl)

Flavio uses two arrays, one for the row being constructed and the other for the one previous. At the end of each row, the previous is swapped for the current and the process is repeated again.

```perl
    sub levenshtein {
       my ($v, $s, $t) = ([0 .. length($_[0])], @_);
       for my $i (1 .. length($t)) {
          my $w = [$i];              # first "column" of full matrix
          for my $j (1 .. length($s)) {
             my ($D, $I, $S) = ($v->[$j] + 1, $w->[$j - 1] + 1, $v->[$j - 1]);
             $S++ if substr($s, $j - 1, 1) ne substr($t, $i - 1, 1);
             my $mDI = $I < $D ? $I : $D;    # min($D, $I);
             push @$w, ($S < $mDI ? $S : $mDI);    # min($S, min($D, $I))
          } ## end for my $j (1 .. length(...))
          $v = $w;    # "swap" and prepare for nest iteration
       } ## end for my $i (1 .. length(...))
       return $v->[-1];
    } ## end sub levenshtein ($s, $t)
```



## UNIQUE approaches and other THINGS THAT CAUGHT MY EYE
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/e-choroba/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/james-smith/perl/ch-2.pl), and
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/jo-37/perl/ch-2.pl)


[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/e-choroba/perl/ch-2.pl)

What the dynamic programming matrix is accomplishing is basically doing a flood fill from the upper left-hand corner to the lower right, following the path of minimal values to populate each cell.

Using this as his model, Choroba constructs his decision tree in a slightly different manner, but winds up in the same place.

```perl
    use enum qw( SAME DIFFERENT );

    sub fill_directions {
        my ($self) = @_;
        for my $j (reverse 0 .. $self->height - 1) {
            for my $i (reverse 0 .. $self->width - 1) {
                $self->dir($i, $j, (
                    substr($self->s1, $i, 1) eq substr($self->s2, $j, 1)
                ) ? SAME : DIFFERENT);
            }
        }
    }

    sub fill_distances {
        my ($self) = @_;
        my $start = 1;
        for my $j (reverse 0 .. $self->height - 1) {
            for my $i (reverse 0 .. $self->width - 1) {
                if ($start) {
                    undef $start;
                    $self->dist($i, $j,
                                DIFFERENT eq $self->dir($i, $j) ? 1 : 0);
                    next;
                }
                my @acc = sort { $a->[0] <=> $b->[0] }
                               $self->accessible($i, $j);
                $self->dist($i, $j, $acc[0][0] + $acc[0][3]);
            }
        }
    }
```

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/james-smith/perl/ch-2.pl)

James opens with:

>I'm just going to add "Another day job challenge!"

We're not sure *exactly* what James' job description is, so we'll just go with the term "geneticist" for now. Comparing long strings of the letters G, T, C and A comes part and parcel to that territory, and coming from that direction he brings us a different way to do things, the [Smith–Waterman](https://en.wikipedia.org/wiki/Smith–Waterman_algorithm) algorithm.

The focus of Smith–Waterman is not to find a path of transformation from one string to the other, but rather to pair up common nucleotide runs, and note differences between them. The output shows these correspondences, along with other notation signifying mismatches and the addition and deletion of elements.

For example, 'boat riding' to 'bat ridding':
```
    boat rid-ing
    |^||||||v||| (2)
    b-at ridding
```

or 'kitten' to 'sitting':
```
    kitten-
     ||| |v (3)
    sitting
```

The goal here is not to *alter* the data, only to align it to find common sections and make them visible. As such we are delivered essentially a descriptive alignment map between the two. To convert from this to an edit distance we need only count the characters that *aren't* a vertical pipe, being a space, carat or vee. In his output above he includes this count in the parenthesized numbers after the alignment string.

James also provides an abridged version. Notice how when put it like this how similar it appears to the memoized recursive Levenshtein distance we saw earlier.

```perl
    sub edit_distance_simple {
      my( $s, $t ) = @_;
      return $cache_x{"$s\t$t"}||=
         $t eq q()          ? length $s
       : $s eq q()          ? length $t
       : (ord $s == ord $t) ? edit_distance(substr($s,1),substr($t,1))
       :                      1+(sort { $a <=> $b }
                                edit_distance(substr($s,1),$t),
                                edit_distance($s,substr$t,1),
                                edit_distance(substr($s,1),substr $t,1)
                              )[0]
       ;
    }

```

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-096/jo-37/perl/ch-2.pl)

Jorg delivers unto us another sampling of the awesomeness that is the PDL, the Perl Data Language.

```
    kitten -> sitting:
    repl(k,s) keep(i) keep(t) keep(t) repl(e,i) keep(n) ins(g)
    Levenshtein distance = 3
    Wagner-Fischer distance matrix:
    [
     [0 1 2 3 4 5 6]
     [1 1 2 3 4 5 6]
     [2 2 1 2 3 4 5]
     [3 3 2 1 2 3 4]
     [4 4 3 2 1 2 3]
     [5 5 4 3 2 2 3]
     [6 6 5 4 3 3 2]
     [7 7 6 5 4 4 3]
    ]

    3
```
By this point you should be familiar with the basic components of the Wagner-Fischer dynamic programming algorithm: building the array of partial results and taking the minimum pathway from the options calculated by earlier, smaller substring comparisons. In the well commented PDL version presented you should be able to observe and follow the same processes. The 2x2 matrix, for example, represents the cell and the three options — to the left, above and diagonal, representing insertion, deletion and substitution, with substitution of the same letter costing nothing.

I find this a wonderful way to familiarize myself with the power of this exotic data-processing extension to the language. Although the syntax may at times be mysterious, after examining the algorithm elsewhere (with a little helpful commentary), we can glean the internal workings of the process.

I'll leave you with the whole thing here for you unabridged, to encourage everyone to gaze upon its radient splendor. I think it's fascinating.

```perl
    sub levenshtein_distance ($source, $target) {

        # Split words into arrays and (un)shift by one to match matrix
        # dimensions.
        my @source = (undef, split //, $source);
        my @target = (undef, split //, $target);

        # Prepare distance matrix holding BAD values only.
        my $dist = zeros(long, @source + 0, @target + 0)->setvaltobad(0);

        # Fill first row and column with ascending sequences as the costs of
        # removing or inserting a prefix of that length.
        $dist->slice(',(0)') .= sequence $dist->dim(0);
        $dist->slice('(0),') .= sequence $dist->dim(1);

        # To fill the remaining fields, loop over the indices of all BAD
        # values.  With the index order provided by "whichND" the required
        # "flood filling" is achieved.
        for my $idx ($dist->isbad->whichND->dog) {

            # Character pair for index position.
            my $cs = $source[$idx->at(0)];
            my $ct = $target[$idx->at(1)];

            # 2x2 neighborhood matrix preceeding index.
            my $nb = $dist->range($idx - 1, 2);

            # 2x2 transition cost matrix.
            my $trans = cost $cs ne $ct;

            # The cost to reach the new field is the minimum of the sums of
            # the previous cost and the transition cost.
            $dist->indexND($idx) .= min $nb + $trans;
        }

        explain_edit(\@source, \@target, $dist) if $verbose;

        # The requested Levenshtein distance is the bottom right matrix
        # element.
        $dist->indexND($dist->shape - 1);
    }

    # Backtrack the steps that led to the lower right corner of the distance
    # matrix and describe the corresponding edit operations.
    sub explain_edit ($source, $target, $dist) {

        # Collect edit operations.
        my @edit;

        # Start at bottom right corner.
        my $idx = $dist->shape - 1;

        # Stop at upper left corner.
        while (any $idx) {

            # Character pair for index position.
            my $cs = $source->[$idx->at(0)];
            my $ct = $target->[$idx->at(1)];

            # 2x2 neighborhood matrix preceeding index, truncated to BAD
            # values across the matrix' borders.
            my $nb = $dist->range($idx - 1, 2, 'truncate');

            # The field preceeding the current field holds the minimum
            # within the neighborhood.  Find the minimum and the
            # corresponding index.  On a non-unique minimum, this will
            # prefer the diagonal "replace" move.
            my ($min, $pred) = min_ind $nb;

            # Record the edit operation.
            unshift @edit,
                any($pred) ?
                    $pred->at(0) ?
                        "ins($ct)" :
                        "del($cs)" :
                    $dist->indexND($idx) == $min ?
                        "keep($cs)" :
                        "repl($cs,$ct)";

            # Move to predecessor field.
            $idx = $idx - 1 + $pred;
        }

        {
            no warnings 'uninitialized';
            say @$source, ' -> ', @$target, ':';
        }
        say "@edit";
        say "Levenshtein distance = ", $dist->indexND($dist->shape - 1);
        say "Wagner-Fischer distance matrix:", $dist;
    }

    # Cost matrix for a single insert, delete and keep/replace.
    sub cost ($repl) {
        long([0, 1], [1, 0])->setvaltobad(0)->set(0, 0, $repl);
    }

    # Find the minimum in an N-dim piddle together with the corresponding
    # index.
    sub min_ind ($pdl) {
        my $min = min $pdl;
        my $index = whichND($pdl == $min)->slice(',(0)');

        ($min, $index);
    }
```

---

# BLOGS {#PWC096BLOGS}

---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, I somehow continue to maintain my bearings. Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC093BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *READ* these *BLOG* *LINKS*:

**( *don't think, trust your training, you're in the zone, just do it ...* )**


**Aaron Smith**

 * [Perl Weekly Challenge 96 - Aaron Smith](https://aaronreidsmith.github.io/blog/perl-weekly-challenge-096/) ( *Raku* )

**Abigail**

 * [Perl Weekly Challenge 96: Reverse Words &#8211; Abigail&#039;s Programming Blog](https://wp.me/pcxd30-mj) ( *Perl & Many Others* )
 * [Perl Weekly Challenge 96: Edit Distance &#8211; Abigail&#039;s Programming Blog](https://wp.me/pcxd30-n7) ( *Perl & Many Others* )

**Adam Russell**

 * [Perl Weekly Challenge 096 - RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2021/01/24) ( *Perl* )

**Arne Sommer**

 * [Reversed Distance with Raku and Perl](https://raku-musings.com/reversed-distance.html) ( *Perl & Raku* )

**Colin Crain**

 * [The Wagner–Fischer-Price, Backwards &#8211; Programming Excursions in Perl and Raku](https://colincrain.com/2021/01/25/the-wagner-fischer-price-backwards/) ( *Perl & Raku* )

**Dave Jacoby**

 * [Going The Distance: Perl Weekly Challenge #96 | Committed to Memory](https://jacoby.github.io/2021/01/19/going-the-distance-perl-weekly-challenge-96.html) ( *Perl* )

**Flavio Poletti**

 * [PWC096 - Reverse Words - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/01/20/pwc096-reverse-words/) ( *Perl* )
 * [PWC096 - Edit Distance - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/01/21/pwc096-edit-distance/) ( *Perl* )

**Joan Mimosinnet**

 * [Perl weekly challenge 096 - Raku  | Joan Mimosinnet](http://blogs.perl.org/users/joan_mimosinnet/2021/01/perl-weekly-challenge-096---raku.html) ( *Raku* )

**Kang-min Liu**

 * [Solving Perl Weekly Challenge 096 -- Reverse Words and Edit distance](https://gugod.org/2021/01/pwc-096-en/) ( *Perl & Raku* )

**Lance Wicks**

 * [Perl Weekly Challenge - Perl🐪.🥝 Kiwi](https://perl.kiwi/tales/2021/01/22/perl-weekly-challenge/) ( *Perl* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 96: Reverse Words and Edit Distance (and Decorators in Perl)](http://blogs.perl.org/users/laurent_r/2021/01/perl-weekly-challenge-96-reverse-words-and-edit-distance-and-decorators-in-perl.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 96: Levenshtein distance – Luca Ferrari - Task 1](https://fluca1978.github.io/2021/01/18/PerlWeeklyChallenge96.html#task1) ( *Raku* )
 * [Perl Weekly Challenge 96: Levenshtein distance – Luca Ferrari - Task 2](https://fluca1978.github.io/2021/01/18/PerlWeeklyChallenge96.html#task2) ( *Raku* )

**Roger Bell_West**

 * [RogerBW&#39;s Blog: Perl Weekly Challenge 96: Reverse Distance](https://blog.firedrake.org/archive/2021/01/Perl_Weekly_Challenge_96__Reverse_Distance.html) ( *Perl & Raku* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 96 – W. Luis Mochán](https://wlmb.github.io/2021/01/18/PWC096/) ( *Perl* )


