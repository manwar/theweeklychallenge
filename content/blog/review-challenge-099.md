
---
author:       Colin Crain
date:         2021-03-01T00:00:00
description:  "Colin Crain › Perl Weekly Review #099"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #099"
image:        images/blog/p5-review-challenge-099.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-098/).* )

Welcome to the Perl review for **Week 099** of the Weekly Challenge! Here we will take the time to discuss the  submissions offered by the team, factor out the common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

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

**<big>For context</big>**  before we begin, you may wish to revisit either of the pages for the [**original tasks**](/blog/perl-weekly-challenge-099/) or the summary [**recap**](/blog/recap-challenge-099/) of the challenge. But don't worry, the challenges themselves will be briefly summarized, presented below as we progress from task by task. Oh, and one more thing before we get started:

### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

**So finally, without further ado...**

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC099TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC099TASK2)   &nbsp;  &nbsp;  &nbsp;   	•   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC099BLOGS)    &nbsp;  &nbsp;  &nbsp;   	•

---

# TASK 1 {#PWC099TASK1}

# Pattern Match
*Submitted by: Mohammad S Anwar*
You are given a string $S and a pattern $P.

Write a script to check if given pattern validate the entire string.

Print 1 if pass otherwise 0.

The patterns can also have the following characters:

     ? - Match any single character.
     * - Match any sequence of characters.

**Example 1:**
```
    Input: $S = "abcde" $P = "a*e"
    Output: 1
```
**Example 2:**
```
    Input: $S = "abcde" $P = "a*d"
    Output: 0
```
**Example 3:**
```
    Input: $S = "abcde" $P = "?b*d"
    Output: 0
```
**Example 4:**
```
    Input: $S = "abcde" $P = "a*c?e"
    Output: 1
```

## about the solutions

There were 25 working submissions for the first task this past week.

The almost unanimous decision in solving this task was to use the regular expression engine to do the final validation. This in turn required converting the toy wildcard patterns into proper Perl. This conversion was itself almost always done using regular expressions, although there were a few outliers. Ok one. One outlier. Variation did arise  from differing interpretations of the wildcards, which we'll address.

Kudos to Gustavo for bucking the trend and going his own way, building us a proper parser from scratch to do his validating. It's really not as complex as you might think and we'll of course examine it.

## a note on the WILDCARDS

The two pattern wildcards in our toy language were delivered with two directives:

1.  ? - Match any single character.
2. \* - Match any sequence of characters.

Although the patterns *resemble* shell wildcards it's not stated anywhere that the *are* this thing. As such there was a range of interpretation as to what, exactly, they meant. I'm sure every person looking at this now has an "obvious" understanding of the intent, but as anyone who has followed these pages should know by now, nothing is obvious. If there is any room at all for ambiguity the road less taken will be found and followed by *someone*.

There were some comments on the subject, mostly along the lines of noticing the differences between the wildcard *characters* given and their more familiar regular expression *quantifiers*. Only a couple mentioned any ambiguity in the interpretation, and then only to declare their decision on the matter.

What on Earth, you may ask, am I talking about? Well the larger variation came from the interpretation of the `*` wildcard.

As I said earlier, the wildcards given resemble shell metacharacters, but are not stated to be this, and instead are only given simple definitions. So myself, given the choice between suggestion and facts, took the definitions to heart, which led me in turn to consider the phrase "any sequence of characters". Now a sequence is a list of things, and a sequence of *no* things isn't a sequence at all, as there's nothing to list.  This led me to conclude that an asterisk was "a sequence of length one or more items, constructed from any characters".

I was not alone in this interpretation but had precious little company either, put solidly in the minority. As a shell metacharacter, `*` means zero or more of anything and that was the overwhelmingly popular choice we see here today. Going the other way, there were even a few who chose to define `?` as zero or one character as well, which to me sort of matches the `*` interpretation, although this diverges from the shell standards again.

None of these variations were a deal-breaker. I do find it interesting that something seemingly so clear can wind up with so much variation, though, and further that popular opinion was definitely against me on this one. That said I do maintain that I have a strong argument, and I'm also glad to have at least a little company with me, here on the outside looking in.

## building an EXPRESSION from a PATTERN
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/alexander-pankoff/perl/ch-1.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/arne-sommer/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/athanasius/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/cheok-yin-fung/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/colin-crain/perl/ch-1.pl),
[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/cristian-heredia/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/dave-jacoby/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/polettix/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/jaldhar-h-vyas/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/jo-37/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/laurent-rosenfeld/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/lubos-kolouch/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/perlboy1967/perl/ch-1.pl),
[**Nuno Vieira**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/nunovieira220/perl/ch-1.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/paulo-custodio/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/pete-houston/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/roger-bell-west/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/sgreen/perl/ch-1.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/stuart-little/perl/ch-1.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/wlmb/perl/ch-1.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/wanderdoc/perl/ch-1.pl)

As I said, this was the overwhelming choice. Most involved fairly simple substitutions, but some people did pursue and find more complex, rigorous transformations.

### a SIMPLE PLAN
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/arne-sommer/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/athanasius/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/cheok-yin-fung/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/colin-crain/perl/ch-1.pl),
[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/cristian-heredia/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/dave-jacoby/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/duncan-c-white/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/jaldhar-h-vyas/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/james-smith/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/laurent-rosenfeld/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/lubos-kolouch/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/perlboy1967/perl/ch-1.pl),
[**Nuno Vieira**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/nunovieira220/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/roger-bell-west/perl/ch-1.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/stuart-little/perl/ch-1.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/wanderdoc/perl/ch-1.pl)

At it's heart this is a simple conversion from the given patterns to well-constructed expressions. Two things need to be done: we need to convert the wildcard characters into corresponding character-class/quantifier combinations, and we need to anchor the resultant expression to both ends of our target string. After this is done the new expression gets inserted into an `m//` operation and we see what happens.

The solutions had quite a bit of self-similarity. Let's visit a few to get an overview of the field.

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/colin-crain/perl/ch-1.pl)

I'll demonstrate the plain-vanilla version using my own submission. It's nothing fancy, and the steps are clearly laid out. We convert a `?` into a single `.`, and a `*` into a `.+` class and grouping (as discused above). After that we insert the expression between anchors and return the result.

```perl
    use feature qw(say signatures);
    no warnings 'experimental::signatures';

    sub validate ($str, $exp) {
        $exp =~ s/\?/./g;
        $exp =~ s/\*/.+/g;

        return $str =~ m/^$exp$/ ?  1
                                 :  0;
    }
```

[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/duncan-c-white/perl/ch-1.pl)

Here's another version of the conversion from Duncan. He takes the "dot star" approach to the wildcard, and affixes his anchors before returning the complete result to be matched.

```perl
    sub pat2regex
    {
        my( $p ) = @_;
        my $inner = $p;
        $inner =~ s/\*/.*/g;    # * -> .*
        $inner =~ s/\?/./g;        # ? -> .
        return '^'.$inner.'$';
    }
```

[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/lubos-kolouch/perl/ch-1.pl)

Lubos, coming from the direction of Test Driven Development, arranges things a little differently, but the same actions get accomplished in the end.

```perl
    is(pattern_match({'s' => 'abcde', 'p' => 'a*e'}), 1);

    sub pattern_match {
        my $what = shift;

        # convert the pattern to regex
        $what->{p} =~ s/\?/./g;
        $what->{p} =~ s/\*/.*/g;
        $what->{p} = '^'.$what->{p}.'$';

        my $match = $what->{s} =~ /$what->{p}/;
        return 0 unless $match;
        return 1;
    }
```

[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/perlboy1967/perl/ch-1.pl)

Niels makes the uncommon choice to allow the `?` to mean zero or one characters. This is neither here nor there, but as a side effect of this decision it allows him to make his conversion in a very compact manner, with a single substitution.

```perl
    $RE =~ s#([\*\?])#.$1#g;
```

Knowing how it feels to be in the minority, here's another version by

[**Nuno Vieira**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/nunovieira220/perl/ch-1.pl)

Nuno has come to the same conclusion over `?`, and consequently was able to construct a very similar expression.

```perl
    $P =~ s/(\?|\*)/\.$1/g;
```

It's nice to have company.

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/dave-jacoby/perl/ch-1.pl)

In a related vein, here's Dave's version, of the "dot plus" variety. See? There are *several* of us!

```perl
    sub pattern_match ( $S, $P ) {
        my $pattern = $P;

        $pattern =~ s/\*/.+/g;
        $pattern =~ s/\?/./g;
        $pattern = qq{^$pattern\$};
        return $S =~ /$pattern/mix ? 1 : 0;
    }
```


[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/cristian-heredia/perl/ch-1.pl)

Christina takes a very different approach to converting her wildcards into an expression. She first splits the pattern into an array of characters, then iterates through them one by one. If a wildcard is found, the value is replaced by the translation.

This is a good illustration of one quality of the `for` loop that, if casually disregarded, can produce strange behavior and bugs for the unwary. That is, when a `for` loop temporarily assigns its values, whether to the topic as seen here or any other variable, what it's doing is not copying the value but rather creating an *alias* to the original item in the array. Which is to say, if you alter the assigned variable, that change will be reflected in the original array because they are in fact the same thing. Here Christina assigns to `$_`, and when she's done the `@pattern` array retain the changes. All she need do is re-join the original array and send it to the next step.

```perl
    sub replaceCharacter {
        foreach ( @pattern ) {
            if ($_ eq '?') {
                $_ = '.';
            }
            elsif ($_ eq '*') {
                $_ = '.+';
            }
        }
        my $redex = join '', @pattern;
        printResult($redex);
    }

    sub printResult{
        my $redex = shift;
        if ($S =~ /^$redex$/){
            print "1\n";
        }
        else {
            print "0\n";
        }
    }
```

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/james-smith/perl/ch-1.pl)

As he explains, affixing the `/r` modifier to a substitution returns the completed, substituted string. James, being clever again, has chained several of these substitutions to first convert the `*` wildcards, then the `?`s, then concatenate the results between the anchors. The anchors he's chosen, `\A` and `\Z`, match at the end of the *string*, versus the end of the *line* as with `^` and `$`. The actions of these pairs only diverges with strings that actually contain a newline, so that's unlikely to make a difference here. But it is good to remember this distinction exists, should this version ever need to come into play. They're a lifesaver when you need them.

```perl
    sub file_name_match {
      ##    {use r modifier to return string with replacements in}
      my $re = '\A'.($_[1] =~ s{[*]}{.*}gr =~ s{[?]}{.}gr).'\Z';
      return $_[0] =~ m{$re} ? 1 : 0;
    }
```


### more COMPLEX considerations
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/alexander-pankoff/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/polettix/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/jo-37/perl/ch-1.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/paulo-custodio/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/pete-houston/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/sgreen/perl/ch-1.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/wlmb/perl/ch-1.pl)

Any constraints on the input strings are left undefined, so we really have no idea which characters they may contain beyond our wildcards. Thus, should we indiscriminately plop our translated expressions into the regex engine we may wind up in trouble. To remedy this some members took the aditional step of escaping various other, difficult characters.

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/sgreen/perl/ch-1.pl)

Simon builds a custom character class of various brackets, braces and characters with special meaning to the regular expression parser.

Once that is done things proceed in the usual manner.

```perl
    # Escape regexp meta characters, except ? and *
    $pattern =~ s/([\{\}\[\]\(\)\^\$\.\|\+\\])/\\$1/g;

    # Replace ? and *
    $pattern =~ s/\?/./g;
    $pattern =~ s/\*/.+/g;

    # Ensure entire match
    $pattern = "^$pattern\$";

    say $string =~ $pattern ? 1 : 0;
```

[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/paulo-custodio/perl/ch-1.pl)

Paulo takes it a little further, escaping every non-word character.

One thing to notice here is that using the `for` loop on a scalar, far from being pointless, is not duplicating but rather aliasing the actual variable `$rx` to the default topic `$_`. In effect this performs the multiple substitutions on that value directly without needing to copy it. This is very clean and in my eyes a very cool trick, a less uncertain version of the ["highly experimental"](https://perldoc.perl.org/perlsyn#Switch-Statements) `given` statement. I'll have to remember use this more often.

```perl
    my $rx = $P;
    for ($rx) {
        s/(\W)/\\$1/g;      # escape all non-word chars
        s/\\\*/.*/g;        # replace * (now \*) by .*
        s/\\\?/./g;         # replace ? (now \?) by .
    }

    say $S =~ /^$rx$/ ? 1 : 0;
```



[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/e-choroba/perl/ch-1.pl)

But wait, while we're quoting all of the non-word characters, isn't there a function for that? Why yes, yes there is, and anyone processing user input in a regular expression should be familiar with it. This function, `quotemeta`, will escape, as expected, all non-word characters in a given string. Sounds perfect.

Which is it, but notice that used this way it will indiscriminately escape our wildcards as well, replacing them with `\*` and `\?`, respectively. In order to refer to these constructs literally, we need to escape the backslashes and the original character, resulting in the rather monstrous `\\\*` and `\\\*` in our substitutions. Such is life, it can't be helped.

```perl
    sub pattern_match {
        my ($string, $pattern) = @_;
        $pattern = quotemeta $pattern;
        s/\\\?/./g, s/\\\*/.*/g for $pattern;
        return $string =~ /^$pattern$/ ? 1 : 0
    }
```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/polettix/perl/ch-1.pl)

Flavio gives us quite an unusual way of going about the translation using `map`. The target pattern is split, translated and then reassembled, not unlike Christina's solution above. Notice the cascading ternary operators culminating in a `quotemeta`, avoiding some backslashing.

```perl
    sub pattern_match ($S, $T) {
       $T = join '',
          map { $_ eq '*' ? '.*' : $_ eq '?' ? '.' : quotemeta($_) }
          split m{([*?])}mxs, $T;
       return $S =~ m{\A$T\z}mxs ? 1 : 0;
    }
```

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/wlmb/perl/ch-1.pl)

If we stop to consider backslashes in our pattern, all this quoting and escaping can get quite ungainly. For example have a look at Luis' solution. As more and more cases are allowed for, we end up looking like... amber waves of grain? Picket fences? ASCII art? You get the idea.

```perl
    my ($S, $P0)=@ARGV;
    my $P=quotemeta $P0;        # quote anything suspicious
    $P=~s/^\\\*/.*/;            # Replace originally unquoted asterisks
    $P=~s/([^\\])\\\*/$1.*/g;
    $P=~s/\\\\\*/\*/g;          # Replace originally quoted asterisks
    $P=~s/^\\\?/./;             # Replace originally unquoted question marks
    $P=~s/([^\\])\\\?/$1./g;
    $P=~s/\\\\\?/\?/g;          # Replace originally quoted question marks
    say "Input: \$S=\"$S\" \$P=\"$P0\"\nOutput: ", $S=~/^$P$/?1:0;
```


[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/jo-37/perl/ch-1.pl)

Culminating the series, Jorg lays out his reasoning with extensive comments on his actions. He extends the original spec, explicitly allowing a backslash to escape the following character to produce a literal. Instead of basic substitution, a rather complex upgrade match is performed and the captures fed to a function to be converted. By performing string interpolation with the `qr//` quotes, the array is joined using the `$OUTPUT_LIST_SEPARATOR`, requiring an `/x` switch to ignore whitespace. In the end a complied regular expression is returned and assigned to the `$re` variable, and it is run against the input string.

```perl
    # Convert pattern part to regex:
    # *  -> .*
    # ?  -> .
    # \x -> x
    # other: quote if necessary
    #
    # Processes $_.
    sub convmeta {
        return '.*?' if /^\*$/;
        return '.' if /^\?$/;
        return quotemeta $1 if /^\\(.)$/;
        # else:
        quotemeta;
    }

    # Match string against pattern.  Pattern meta characters are:
    # ? : match one character
    # * : match any number of characters
    # \ : use next character literally
    # The special treatment of quoted characters is beyond the specification
    # of this task but it seems to be useful and needful.
    sub patmatch ($str, $pat) {

        # Convert pattern to regex.
        my $re =  sub {qr/^ @_ $/x}->(
            map convmeta,
            $pat =~ m{
                \G              # start at previous end-of-match position and
                (               # capture
                    [^*?\\]+    # a group of non-meta chars
                  |             # or
                    [*?]        # a meta-char
                  |             # or
                    \\.         # a quoted char
                )
            }gx);
        # Reject incomplete patterns.
        die "invalid pattern: '$'' in '$pat'" if $';

        say "pattern: '$pat'\nregex:   $re" if $verbose;

        $str =~ $re;
    }
```

## building a PARSER from SCRATCH
[**Gustavo Chaves**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/gustavo-chaves/perl/ch-1.pl)

Gustavo breaks from the pack and does something completely different: he builds a little match-engine parser to walk the string and the pattern using a pair of position locators.

As each position is compared, obviously any character is expected to match itself in both strings, and we will need special cases to deal with the two wildcard operators. Because the `?` wildcard always matches anything, it can be scooted across without comparison — leaving the only complexity to the variable-length wildcard matches with `*`. This is dealt with by recursively calling the validator on the remaining tails of the string and pattern. It's a neat little method and works well.

```perl
    sub match {
        my ($pattern, $string) = @_;

        my ($s, $p) = (0, 0);

      CHAR:
        while ($p < length($pattern) && $s < length($string)) {
            my $c = substr($pattern, $p, 1);

            if ($c eq '?') {
                ++$s;
                ++$p;
            } elsif ($c eq '*') {
                my $patterntail = substr($pattern, $p+1);
                for (my $i=$s; $i < length($string); ++$i) {
                    return 1 if match($patterntail, substr($string, $i));
                }
                return 0;
            } elsif ($c eq substr($string, $s, 1)) {
                ++$s;
                ++$p;
            } else {
                return 0;
            }
        }

        return $p == length($pattern) && $s == length($string);
    }
```

---

---

# TASK 2 {#PWC099TASK2}

# Unique Subsequence
*Submitted by: Mohammad S Anwar*
You are given two strings $S and $T.

Write a script to find out count of different unique subsequences matching $T without changing the position of characters.

**UPDATE:** 2021-02-08 09:00AM (UK TIME) suggested by Jonas Berlin,
missing entry [5].

**Example 1:**
```
    Input: $S = "littleit', $T = 'lit'
    Output: 5

        1: [lit] tleit
        2: [li] t [t] leit
        3: [li] ttlei [t]
        4: litt [l] e [it]
        5: [l] ittle [it]
```
**Example 2:**
```
    Input: $S = "london', $T = 'lon'
    Output: 3

        1: [lon] don
        2: [lo] ndo [n]
        3: [l] ond [on]
```

## about the solutions

There were 23 working submissions for the second task this past week. The most common approach was to build a recursive routine to traverse the subject string looking for sequential characters in the target. Nextmost we had those who grappled with the ideas surrounding matching out sequences with a regular expression, and then the hard part, figuring out how to count them. Finally, we had a few completely different approaches: applying brute force; assembling valid positional combinations from subgroups; and applying dynamic programmning analysis to the decision making process as the two strings are compared.

## the RECURSIVE solution
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/alexander-pankoff/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/athanasius/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/cheok-yin-fung/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/colin-crain/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/dave-jacoby/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/polettix/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/james-smith/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/laurent-rosenfeld/perl/ch-2.pl),
[**Nuno Vieira**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/nunovieira220/perl/ch-2.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/paulo-custodio/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/pete-houston/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/sgreen/perl/ch-2.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/stuart-little/perl/ch-2.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/wlmb/perl/ch-2.pl)

In the recursive solution, we start at the beginning of both strings. We take the first character from the target substring and start scanning left to right across the other, examining each character in turn for a match. The `index` function came in handy here, but there were other ways to do it. If the character is found, two things happen: the routine recurses, with the remaining rightward portions of both strings, and the original search continues down the line for another occurence of the first character. The original search could  either  be placed in a loop that continues, or descend in another recursion, with the remaining string and the  substring passed through unchanged.

The routine when called in recursion then scoops off the first character of the remaining substring, being the second character this time, which it then attempts to find. The edge case is when an incidence of the last character of the substring is found, causing another complete set of ordered characters to be chalked up.

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/dave-jacoby/perl/ch-2.pl)

Dave demonstrates the steps. Here he uses two recursion paths based on whether the initial characters of the two strings match or do not match. If the do not, we continue looking for the same initial character. If they do, then we begin looking for the next character.

```perl
    sub unique_sub ( $S, $T, $p = 0, $q = 0, $done = undef ) {
        if ( $p > length $S ) { return }
        $done //= [];
        my @output;
        my $l   = length $T;
        my $l1  = substr $S, $p, 1;
        my $l2  = substr $T, $q, 1;
        my $key = join '.', $done->@*;

        # THE CASE OF NO MATCH
        my $copy->@* = $done->@*;
        push @output, unique_sub( $S, $T, $p + 1, $q, $copy );

        # THE CASE OF MATCH
        if ( $l1 eq $l2 ) {    # is a match
            if ( $q < $l ) {    # is not a complete match
                push $copy->@*, $p;
                push @output, unique_sub( $S, $T, $p + 1, $q + 1, $copy );
            }
            elsif ( $l == $q ) {    # is a complete match
                push @output, $key;
            }
        }
        return sort @output;
    }
```

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/colin-crain/perl/ch-2.pl)

My own `descend` routine uses `index` to rapidly move forward to the next position of the  character in question. A counter is incremented if the last character is found, and these increments are gathered and returned to produce the final tally.

```perl
    sub descend ($str, $target) {
            my $count = 0;
            return 0 unless length $str > 0 and length $target > 0;

            my $t   = substr( $target, 0, 1 );
            my $idx = index $str, $t;

            if ($idx > -1) {
                $count++ if length $target == 1;
                $count += descend( substr($str, $idx+1), $target);
                $count += descend( substr($str, $idx+1), substr( $target, 1 ));
            }

            return $count;
    }
```

[**Nuno Vieira**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/nunovieira220/perl/ch-2.pl)

Nuno also descends on both options after finding a letter match, calling `counter` with first the target string unchanged, then with the first letter removed, to begin searching for the following letter. When constructed this way the routing can be very compact.

```perl
    sub counter {
      my ($S, $T) = @_;

      return 0 if(!length($T) || !length($S));

      my $index = index($S, substr($T, 0, 1));
      my $last = length($T) == 1 ? 1 : 0;

      return 0 if($index == -1);
      return $last + counter(substr($S, $index + 1), $T) + counter(substr($S, $index + 1), substr($T, 1));
    }
```

[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/pete-houston/perl/ch-2.pl)

Pete introduces the idea of putting the search for the initial character in a loop, so recursion only starts when a match is found, descending and searching for the following letter. After the recursion is spawned, the loop continues across the string, looking for the next incidence of the initial letter.

```perl
    sub count_seqs {
        my ($str, $sub) = @_;
        say  "str $str   sub $sub";

        my $tot = 0;
        my $pos = index ($str, substr ($sub, 0, 1));
        my $len = 1 == length $sub;

        while ($pos > -1) {
            $tot += $len ?
                1 :
                count_seqs (substr ($str, $pos + 1), substr ($sub, 1));
            $pos = index ($str, substr ($sub, 0, 1), $pos + 1);
        }
        return $tot;
    }

```

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/laurent-rosenfeld/perl/ch-2.pl)

Laurent gives us another version of using a loop to continue searching for a letter across the given string:

```perl
    sub search_substr {
        my ($in, $searched) = @_;
        my $start = substr $searched, 0, 1;
        my $index = 0;
        while (1) {
            $index = index $in, $start, $index;
            return if $index < 0;
            $index++;
            ++$count and next  if length $searched == 1;
            search_substr (substr($in, $index), substr($searched, 1));
        }
    }
```



[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/cheok-yin-fung/perl/ch-2.pl)

Cy's recursive `check` routine returns stringified lists of offsets, with one offset for each of the characters in the target string, one list per working solution. She can then decode these into the bracketed output strings displayed in the example:

The internal strings look like this:
```
    0,0,0
    0,0,1
    0,0,5
    0,5,0
    4,1,0
```

This translates to the positional offsets for the characters "l", "i" and "t". The strings are decoded and reused to create this lovely output:
```
    1: [lit]tleit
    2: [li]t[t]leit
    3: [li]ttlei[t]
    4: [l]ittle[it]
    5: litt[l]e[it]
```

```perl
    for $i (@ices) {
        my @poss = @{check( substr($s_rightsub, $i+1)
                     , substr($t_pattern,1) , [""] )};
        for my $s (@app) {
            for my $t (@poss) {
                if (substr($t, -1, 1) ne "#") {
                    push @new_app, $s.$i.",".$t;
                }
            }
        }
    }

```

[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/alexander-pankoff/perl/ch-2.pl)

Pankoff states that he started with Dave Jacoby's recursive solution, and extends it with a  custom `StringIterator` class that knows how to, well, iterate across strings of course. Now the ideas of a string and removing and holding up the first character of that string have been encapsulated into a single object. The recursive routine itself is also broken off into an anonymous subroutine, so that after dissection and compartmentalization the actual running of the program is initiated by one line: calling `$go` (a coderef to our anonymous routine) with the two strings as `StringIterator` objects.

The indirect action can be confusing at first but the functional programming paradigm of breaking procedures down into discreet, self-contained parts is a very powerful technique with large and complex structures. By isolating the actions and removing interwoven side-effects each step can be refined and examined without requiring adjustment to the whole unit.

He has clearly documented his steps. Notice how if you disregard the comment text how small the control flow really is.

```perl
    sub count_subsequences ( $string, $target ) {

        # create a recurisve helper routine that works on StringIterator objects
        my $go;
        $go = sub ( $string_iterator, $target_iterator ) {
            my $current = $string_iterator->next;

            # we're at the end of the string
            return 0 if !defined $current;

            # recurse into the non matching case. here we have to clone our
            # iterators to prevent modifications inside of the nested calls from
            # affecting us here
            # the $string_iterator has already been advanced by our call to next
            # whereas the target_iterator is still in its original state
            my $count = $go->( $string_iterator->clone, $target_iterator->clone );

            # advance the target_iterator and get the current target char
            my $target_char = $target_iterator->next;
            if ( $current eq $target_char ) {

                # we have a full match if the target_iterator is exhausted. We can
                # increment the count and stop here.
                if ( $target_iterator->is_at_end ) {
                    $count += 1;
                }

                # if we don't have a full match we have to recurse. both iterators
                # have been advanced by now and won't be used anymore. we can pass
                # them as is.
                else {
                    $count += $go->( $string_iterator, $target_iterator, );
                }
            }

            return $count;
        };

        # create the Iterator objects and go!
        $go->( StringIterator->new($string), StringIterator->new($target) );
    }

    package StringIterator {

        sub new ( $class, $string ) {
            my $self = {
                string   => $string,
                position => 0,
                size     => length($string),
            };

            return bless $self, $class;
        }

        # returns the current char and advances the iterator
        # returns `undef` if the iterator is exhausted
        sub next($self) {
            return undef if $self->is_at_end();
            my $char = substr( $self->{string}, $self->{position}, 1 );
            $self->{position}++;
            return $char;
        }

        # returns 1 if the iterator is at the end
        #         0 otherwise
        sub is_at_end($self) {
            return 1 if $self->{position} >= $self->{size};
            return 0;
        }

        # returns a clone of the iterator object
        sub clone($self) {
            return bless {%$self}, ref $self;
        }
    }
```

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/james-smith/perl/ch-2.pl)

Finally, James uses a regular expression to scan across his string looking for the target character. There's quite a bit of extra code added to produce his fancy bracketed output as per the challenge example. He provides several versions of his method, with and without the verbose output, and also adding a cache to the recursive routine which speed things up by several orders of magnitude. Stripped of the extended functionality the routine is reduced to only three lines.

Here is the fancy display version, with his very helpful commentary preserved intact:

```perl
    sub display_uniq_subseq {
      my( $haystack, $prev, $regexp, $needle, @result ) = (
        $_[0],          ## haystack (first string)
        @_>2?$_[2]:q(), ## previous string (3rd parameter if it exists)
        $_[1] =~ m{(.)(.*)} ? ('\A(.*?)('.$1.')',$2) : (q(),q()),
        ## The regex for finding matches + the remainder of needle
        ## Slightly more complex than the previous version as we
        ## remove the "optimization" step in the other two functions
      );

      ## If we have exhausted the substring we return the previous part
      ## along with what is left of the haystack.
      ## Note individual mapped letters are surrounded by individual
      ## brackets - to collapse these down to clusters of matched
      ## characters - We collapse adjacent []s by stripping "][".
      ## We again use the "r" modifier to just return the result
      ## of the replacement.
      return ($prev =~s{\]\[}{}gr).$haystack if $regexp eq q();

      ## regex collects anything before the matched letter &
      ## the matched letter
      while( $haystack =~ s{$regexp}{} ) {
        my( $pre_match, $match ) = ($1,$2);
        push @result, display_uniq_subseq(
          $haystack, $needle, $prev.$pre_match.'['.$match.']',
        );
        ## add the match onto the previous string, and
        ## continue to the next match
        $prev .= $pre_match.$match;
      }
      return @result;
    }
```


## match with a REGEX
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/polettix/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/jaldhar-h-vyas/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/jo-37/perl/ch-2.pl), and
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/perlboy1967/perl/ch-2.pl)



Several people tried solving the problem with a regex, with varying results. This is certainly a non-trivial task, and I applaud anyone for the effort. Sometimes a match was used in a recursive solution, to scan across the string. But in others the regular expression is the star of the show, doing all the work.

[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/jaldhar-h-vyas/perl/ch-2.pl)

Jaldar  takes a novel approach where he applies conbinatorics to a model regular expression to match the target substring. By creating a set of patterns that match all combinations of spacings within the larger string he can try them all and find those that match. Each match represents one unique solution.

Internally, for the example "littleit" and "lit", the patterns look like this:

```
    lit
    l.{1}it
    l.{2}it
    l.{3}it
    l.{4}it
    l.{5}it
    li.{1}t
    li.{2}t
    li.{3}t
    li.{4}t
    li.{5}t

```

Here is the code to do the matches:

```perl
    my @patterns = ( $T );
    for my $i (0 .. (length $T) - 2) {
        for my $j (1 .. (length $S) - (length $T)) {
            my @t = split //, $T;
            $t[$i] .= ".{$j}";
            my $pattern = join q{}, @t;
            push @patterns, $pattern;
        }
    }

    my $count = 0;

    for my $pattern (@patterns) {
        if ($S =~ /($pattern)/) {
            $count++;
        }
    }

```

[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/perlboy1967/perl/ch-2.pl)

Niels takes a quite different route to get where he's going. He first uses `Algorithm::Combinatorics::variations_with_repetition` to, in circuitous fashion, determine all the various ways to partition the target sequence into different groupings: "lit"; "l" and "it"; "li" and "t"; or "l", "i" and "t". He then passes these lists to a second routine which shifts off the first term in the first list and searches for it in a regular expression. On finding a match he recursively starts searching for the next term in the list. Sound familiar? Is a recursive solution or a regular expression? Who knows? These categories of mine always seem to break down eventually.

As Niels is really getting dirty down in the guts of the RE engine I'd say it belongs over on this side with us weirdos and masochists who enjoy this sort of thing. Remember: with great power comes great responsibility. And madness, and megalomania, and possibly the urge to take over the world. We'll have to watch for that.

Anyway, let's do some internal snooping on the regexes and subsequent groupings formed:

```
    ^(.{3})$
    lit
    ^(.{1})(.{2})$
    l it
    ^(.{2})(.{1})$
    li t
    ^(.{1})(.{1})(.{1})$
    l i t

```

This method, however, will still find adjacent target subsequences, equivalent to larger groupings, so a little clever filtering removes all the duplicate sequences before producing a nice verbose output.

```
[
    [0] "[l]ittle[it]",
    [1] "[li]t[t]leit",
    [2] "[li]ttlei[t]",
    [3] "[lit]tleit",
    [4] "litt[l]e[it]"
]

```

Here's the initial substring component:

```perl
    sub getSubstrings($) {
     my ($t) = @_;

      my @r;

      my $l = length($t);
      my @L = (1 .. $l);

      # I admit... difficult way to find substrings of '$t'
      # but its cool, so why not?
      foreach my $cCount (1 .. $l) {
        my $v = variations_with_repetition(\@L,$cCount);

        while (my $a = $v->next) {
          next unless sum(@$a) == $l;

          my $re1 = sprintf('^(%s)$', join(')(', map { ".{$_}" } @$a));
          $T =~ m#$re1#;

          push(@r, [map {substr($T, $-[$_], $+[$_]-$-[$_]) } (1 .. scalar(@+) - 1)]);
        }
      }

      return @r;
    }
```



[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/polettix/perl/ch-2.pl)

The real challenge to constructing a regular expression to solve the task is not so much to simply match the letters within the string, but to determine *how many ways* the letters can be matched within the string.

Flavio provides us with solutions done two ways. First he gives us a lovely recursive solution to give us the subsequence count that closely follows many of the solutions we have seen today. On the other hand, he also gives us a marvelous little regular expression that not only finds every match, but *counts the matches as it makes them*. I had forgotten this trick and am pleasantly reminded.

```perl
    sub unique_subsequence_rx ($S, $T) {
       $T = join '.*', split m{}mxs, $T;
       my $count = 0;
       1 while $S =~ m{$T(?{++$count})(?!)};
       return $count;
    }
```


How does it work? The target string is broken apart into letters, which are joined together again with `.*`, for any number of interstitial characters, including none. The RE engine is set to matching. When this, the first part of the match, is found, the engine then attempts to continue matching the rest of the expression. That is comprised first of the zero-width code block `(?{++$count})` which is evaluated, ratcheting the counter, and as a code block always evaluates to true. The next part, a zero-width negative lookahead with no content, will always match the nothingness preceding whatever follows, and hence always fails. Remember it succeeds when it does *not* match whatever follows. The engine, unhappy, returns back to the beginning to try another version. As the last part of the expression will always fail, the engine will continue to examine every  combination, looking for a positive outcome, before giving up after exhausting the possibilities. However, along the way the counter will be incremented after every successful match of the subsequence portion of the expression.

As we will see next, the `(?!)` construct can also be written `(*FAIL)`, which might be a bit clearer as to what's happening.

And that, my friends, might be the shortest, easiest way to get this job done.


[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/jo-37/perl/ch-2.pl)

Jorg's submission is quite a bit longer, but only because he has opted to recreate the extended explanation of the output from the challenge example. His generated form of an expression for the pair "littleit" and "lit" is

```perl
    (?^u:(l).*?(i).*?(t))
```

Here the three letters are placed into capture groups, with a standard set of flags applied at the beginning: i, m, s, and x. Then using a counting construction similar to what we just saw, the Perl special variable `@-`, `@LAST_MATCH_START` is pushed on to the `@match` array at every completed match. This array holds the start position of the last completed match, followed by the positions of the capture groups, `$1`, `$2`, etc. Notice here that rather than taking a direct reference to the variable, a new anonymous array is created from the contents. Taking a reference just doesn't work, for a variety of reasons. He can then use these position lists to construct a display of the individual sequence matched within the string. As mentioned earlier, the `(*FAIL)` construct always fails.

The number of matches is the element count for the `@match` array.

```
    sequence: 'lit'
    matcher:  (?^u:(l).*?(i).*?(t))
    littleit
    lit•••••
    li•t••••
    li•••••t
    l•••••it
    ••••l•it

```


```perl
    # Count occurences of a character sequence within a string.
    sub matchseq ($str, $seq) {

        # Create a regex that matches the character sequence and captures
        # all of its characters individually.
        # Example transformation chain:
        # 'x*' -> ('x', '*') -> ('x', '\\*') -> (?:(x).*?(\*))
        my $seqmatch = sub {
            local $" = ').*?(';
            qr{(@_)};
        }->(map quotemeta, split //, $seq);

        # Find all sequence matches and collect the character match offsets.
        my @match;
        $str =~ m{ $seqmatch (?{push @match, [@-]}) (*FAIL) }x;

        explainseq($str, $seq, $seqmatch, \@match) if $verbose;

        # Return the number of matches.
        scalar @match;
    }

    # Show the locations of the character sequence within the string.
    sub explainseq ($str, $seq, $re, $matches) {

        say "sequence: '$seq'";
        say "matcher:  $re";
        say $str;

        for my $match (@$matches) {

            # Discard match offset, keeping submatches only. (See @-)
            shift @$match;

            # Prepare a string having the same length as $str.
            my $seqloc = "\N{MIDDLE DOT}" x length $str;

            # Overwrite the string at match offsets with chars from the
            # sequence.
            while (my ($idx, $offs) = each @$match) {
                substr($seqloc, $offs, 1) = substr($seq, $idx, 1);
            }
            say $seqloc;
        }
    }
```






## UNIQUE approaches and GRANDIOSE SCHEMES
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/arne-sommer/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/roger-bell-west/perl/ch-2.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/wanderdoc/perl/ch-2.pl)

[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/arne-sommer/perl/ch-2.pl)

Arne brute forces the solution by looking at all binary numbers counting up to `0b111...`, with the number of 1s being the length of the searched string. Allowing only those whose count of 1s is equal to the target string the every possible combination of letters from the string can be evaluated, choosing the letter signified by a 1 in the binary mask.

```perl
    my $binary   = '1' x $S_length;
    my $max      = oct('0b' . $binary);

    for my $current (1 .. $max)
    {
      my $mask = sprintf("%0" . $S_length ."b", $current);

      if (sum(split(//, $mask)) != $T_length)
      {
        say ":   Skipped binary mask '{ $mask }' - wrong number of 1s" if $verbose;
        next;
      }

      my $candidate = join("", map { substr($mask, $_, 1) eq '1' ? substr($S, $_,1) : '' } (0 .. $S_length -1));

      if ($candidate eq $T)
      {
        $matches++;
        say ": + Match found with binary mask '$mask'." if $verbose;
      }
      else
      {
        say ":   Considering binary mask ' $mask' - no match" if $verbose;
      }
    }
```

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/roger-bell-west/perl/ch-2.pl)

Roger starts his solution by creating a hash of letters in the searched string, pointing to lists of their location positions. Armed with this, he then proceeds to convert the target string into a sequence of arrays of the various positions the individual characters are found at in the searched. Once this is done he need only to create a nest of iterations to find all increasing sequences that can be generated.

The three steps:

```perl
    {
        my $i = 0;                                      ## [1]
        foreach my $c ( split '', $text ) {
            push @{ $s{ $c } }, $i;
            $i++;
        }
    }
    my @j;
    foreach my $c ( split '', $match ) {                ## [2]
        if ( exists $s{ $c } ) {
            push @j, $s{ $c };
        } else {
            return 0;
        }
    }
    my @o = ( 1 ) x scalar @{ $j[0] };                  ## [3]
    foreach my $m ( 1..$#j ) {
        my @n;
        foreach my $bi ( 0..$#{ $j[$m] } ) {
            my $t = 0;
            foreach my $ai ( 0..$#{ $j[$m - 1] } ) {
                if ( $j[$m - 1][$ai] < $j[$m][$bi] ) {
                    $t += $o[$ai];
                }
            }
            push @n, $t;
        }
        @o = @n;
    }
    return sum( @o );
```

[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-099/wanderdoc/perl/ch-2.pl)

The doctor gives us a dynamic programming solution, essentially tracking the alignments between the characters in the subject and the target as we work across the letters. LIke we saw in the recursive solutions, either a pair can correspond or not. The sum of the various valid pathways is counted up as a matrix of partial solutions is built up, and the ultimate tally is found in the lower right-hand cell.

```perl
    sub find_subsequence
    {
         my ($str_1, $str_2) = @_;
         my $mtr;

         my @first  = split(//,$str_1);
         my @second = split(//,$str_2);

         do { my $ch1 = $_;
              do { $mtr->[$ch1][$_] = 0 } for 0 .. scalar @second }
              for 0 .. scalar @first;
         $mtr->[$_][0] = 1 for 0 .. scalar @first;

         for my $i ( 1 .. scalar @first )
         {
              for my $j ( 1 .. scalar @second )
              {
                   if($first[$i-1] eq $second[$j-1])
                   {
                        $mtr->[$i][$j] += $mtr->[$i-1][$j] + $mtr->[$i-1][$j-1];
                   }
                   else
                   {
                        $mtr->[$i][$j] += $mtr->[$i-1][$j];
                   }
              }
         }

         return $mtr->[-1][-1];
    }

```

---

# BLOGS {#PWC099BLOGS}

---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, I somehow continue to maintain my bearings. Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC093BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *READ* these *BLOG* *LINKS*:

**( *don't think, trust your training, you're in the zone, just do it ...* )**


**Aaron Smith**

 * [Perl Weekly Challenge 99 - Aaron Smith](https://aaronreidsmith.github.io/blog/perl-weekly-challenge-099/) ( *Raku* )

**Arne Sommer**

 * [Subsequently Matched with Raku and Perl](https://raku-musings.com/subsequently-matched.html) ( *Perl & Raku* )

**Colin Crain**

 * [Diffraction Gratings Producing a Wildcard Wonderland — Programming Excursions in Perl and Raku](https://colincrain.com/2021/02/13/diffraction-gratings-producing-a-wildcard-wonderland/) ( *Perl & Raku* )

**Dave Jacoby**

 * [London Patterns: Perl Weekly Challenge #99 | Committed to Memory](https://jacoby.github.io/2021/02/11/london-patterns-perl-weekly-challenge-99.html) ( *Perl* )

**Flavio Poletti**

 * [PWC099 - Pattern Matching - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/02/10/pwc099-pattern-match/) ( *Perl* )
 * [PWC099 - Unique Subsequence - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/02/11/pwc099-unique-subsequence/) ( *Perl* )

**Jaldhar H. Vyas**

 * [Perl Weekly Challenge: Week 99](https://www.braincells.com/perl/2021/02/perl_weekly_challenge_week_99.html) ( *Perl & Raku* )

**James Smith**

 * [Perl weekly challenge 99 | James Curtis-Smith](http://blogs.perl.org/users/james_curtis-smith/2021/02/perl-weekly-challenge-99.html) ( *Perl* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 99: Pattern Match and Unique Subsequence](http://blogs.perl.org/users/laurent_r/2021/02/perl-weekly-challenge-99-pattern-match-and-unique-subsequence.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 99: overlapping searches - Task 1 – Luca Ferrari](https://fluca1978.github.io/2021/02/08/PerlWeeklyChallenge99.html#task1) ( *Raku* )
 * [Perl Weekly Challenge 99: overlapping searches – Task 2 - Luca Ferrari](https://fluca1978.github.io/2021/02/08/PerlWeeklyChallenge99.html#task2) ( *Raku* )

**Roger Bell_West**

 * [RogerBW&#39;s Blog: Perl Weekly Challenge 99: Unique Match](https://blog.firedrake.org/archive/2021/02/Perl_Weekly_Challenge_99__Unique_Match.html) ( *Perl & Raku* )

**Simon Green**

 * [Weekly Challenge 099](https://dev.to/simongreennet/weekly-challenge-099-ncp) ( *Perl* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 99 – W. Luis Mochán](https://wlmb.github.io/2021/02/08/PWC099/) ( *Perl* )
