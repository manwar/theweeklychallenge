---
author:       Colin Crain
date:         2022-01-16T00:00:00
description:  "Colin Crain › Perl Weekly Review #143"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #143"
image:        images/blog/p5-review-challenge-143.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-142/).* )

Welcome to the Perl review pages for **Week 143** of The Weekly Challenge! Here we will take the time to discuss the  submissions offered up by the team, factor out some common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

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

**<big>For context</big>**  before we begin, you may wish to revisit either of the pages for the [**original tasks**](/blog/perl-weekly-challenge-143/) or the summary [**recap**](/blog/recap-challenge-143/) of the challenge. But don't worry, the challenges themselves are repeated and presented below as we progress from task by task. Oh, and one more thing before we get started:

### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please feel free to email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

**So finally, without further ado...**

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC143TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC143TASK2)   &nbsp;  &nbsp;  &nbsp;   	•   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC143BLOGS)    &nbsp;  &nbsp;  &nbsp;   	•

---

# TASK 1 {#PWC143TASK1}

# Calculator
*Submitted by: Mohammad S Anwar*

You are given a string, $s, containing mathematical expression.

Write a script to print the result of the mathematical expression. To keep it simple, please only accept + - * ().

**Example 1:**
```
    Input: $s = "10 + 20 - 5"
    Output: 25
```
**Example 2:**
```
    Input: $s = "(10 + 20 - 5) * 2"
    Output: 50
```


## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/abigail/perl/ch-1.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/adam-russell/perl/ch-1.pl),
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/alexander-pankoff/perl/ch-1.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/arne-sommer/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/athanasius/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/colin-crain/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/dave-jacoby/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/polettix/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/james-smith/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/laurent-rosenfeld/perl/ch-1.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/mattneleigh/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/mohammad-anwar/perl/ch-1.pl),
[**Olivier Delouya**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/olivier-delouya/perl/ch-1.sh),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/paulo-custodio/perl/ch-1.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/peter-campbell-smith/perl/ch-1.pl),
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/robert-dicicco/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/roger-bell-west/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/sgreen/perl/ch-1.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/wlmb/perl/ch-1.pl)

The first task we're going to look at today could almost be considered a trick question. Which is to say, there's a fairly complex way to go about this and also a ridiculously easy way if you happen to see it.

There's a famous anecdote about John von Neumann that involves some combination of trains, bicycles, flies and bees that comes to mind. Loosely paraphrased, two bicycles converge along a path travelling at 10 kph. A bee alights from one and sets off to the other at 20 kph, and on arriving turns back towards the first, reversing again on its return. The bee, boxed in, continues to fly back and forth as long as it can. When the bicycles eventually meet, how far has the bee traveled?

The answer can either arrived at by the mathematically daunting method of summing the converging infinite series, or alternately by calculating the time until the bicyclists meet and multiplying by the speed of the fly. Neither method is more intrinsically correct than the other, but one is considerably simpler and requires only simple arithmetic.

Likewise, implementing a simple calculator involves at its core the idea of operator precedence, that in this instance meaning parenthesized blocks before multiplication, and multiplication before addition and subtraction. We address this by parsing and insolating various subunits of our given expression and applying the correct arithmetic operations in the correct order until we obtain a single value.

Or we could do it the other way.

There were 21 submissions for the first task this past week.

## FLIP a COIN - HEADS I WIN, TAILS YOU LOSE, it always WORKS OUT
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/arne-sommer/perl/ch-1.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/wlmb/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/dave-jacoby/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/james-smith/perl/ch-1.pl),
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/abigail/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/duncan-c-white/perl/ch-1.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/paulo-custodio/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/mohammad-anwar/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/athanasius/perl/ch-1.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/mattneleigh/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/polettix/perl/ch-1.pl), and
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/e-choroba/perl/ch-1.pl)

Of note division is not included in the simple subset of operations requested. However I won't be taking Mohammad's request as a command, per se, even with the request entreated as it was. I don't feel implementing division will cause him undue burden or anything, or for than matter expanding the scope to include any additional operators anyone may desire. If they're there they're there.

On the other hand, as the first task is theoretically easier than the second, I can see his reason for including the clause, to make the project less daunting.

Speaking of daunting, non-native-English speakers can revel in the string of four homonyms in a row in the previous paragraph. I honestly don't know how you guys do it. I obviously have fun with this crazy language, for what it's worth.

There's a perfectly valid, somewhat famous English sentence out there:

>"Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo."

This might be more clearly rephrased as "buffalo from the city of Buffalo, whom other buffalo from Buffalo bully, in turn bully buffalo from Buffalo". The cycle of violence is a terrible truth. This linguistic ambiguity is colloquially known as a "word avalanche".

I find English to be a very expressive language, much like Perl. This is of course by design on Larry Wall's part, about Perl that is, and it's quite interesting to note that English evolved by taking elements from several other distinct language families as needed. This produced a situation where we can end up with multiple synonyms for common words with wildly differing roots depending on who was King when. Combined with a particularly flexible word order owing to the same reasoning this allows a large number of degrees of freedom in saying what you mean. This deeper connection to "There's More Than One Way To Do It" is not in my eyes coincidental either.


[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/arne-sommer/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/arne-sommer/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Stealthy Calculator with Raku and Perl](https://raku-musings.com/stealthy-calculator.html)

I suppose we should get this over with. After a little minimal input validation, Arne calls `eval()` on the string.

That's it. That's the trick. The Perl interpreter is more than capable of handling complex rules of precedence in arithmetic, and so we pass off that task to its capable hands.

There's no reason to reinvent the wheel here.

```perl
    my $s = $ARGV[0] // exit;

    $s =~ /^[0-9\(\)\+\-\*\s]+$/
        ? say eval($s)
        : say "Error";
```

Of course, that always remains an option, and can be a worthy exercise in itself.


[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/wlmb/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 143 – W. Luis Mochán](https://wlmb.github.io/2021/12/13/PWC143/)

After acknowledging the quick `eval` method, Luis comments "it feels like cheating". I don't think it is, but I can certainly understand the sentiment. Too easy. Boring.

So after a quick one-liner, he continues on to construct a tokenizer to parse the input and process it one unit at a time.

A token here is a two-element tuple, containing a type and a value. Numbers have type N and others are the type of their operator.

The tokens are defined as either expressions, terms, simple terms (which include parenthetical expressions) or numbers. In Luis terminology we have:
```
    e -> [t | e] + [t | e] - t
    t -> [s | t*s | t/s]
    s -> [n | -s | +s | (e)]
    with :
        e = expression,
        t = term,
        s = simple term,
        n = number and
        | separating alternatives.
```

Nesting is accomplished because simple terms can contain parentheses, which contain expressions to resolve, which contain terms, which contain simple terms. It's all very circular as to be expected from the requirements.

```perl
    sub token {
        $previous=$current;
        $token=[$1,$1], return if $current=~s{^\s*([()*/+-])}{}; # symbol
        $token=['N',$1], return
            if $current=~s{^\s*([^()*/+\-\t\n ]*)}{}
               and looks_like_number($1); # number?
        $token=[undef,undef], return if $current=~/^\s*$/; # nothing
        die "Unrecognizable input: $previous\n";
    }

    sub expression {
        my $result=term();
        while(1){
            my $op=$token->[0];
            last unless defined $op && $op=~m{[+-]};
            token();
            $result+=term(),next if $op eq '+';
            $result-=term(),next if $op eq '-';
        }
        return $result;
    }

    sub term {
        my $result=simple();
        while(1){
            my $op=$token->[0];
            last unless defined $op && $op=~m{[*/]};
            token();
            $result*=simple(),next if $op eq '*';
            $result/=simple(),next if $op eq '/';
        }
        return $result;
    }
    sub simple {
        my $op=$token->[0];
        my $val=$token->[1];
        die "Unrecognized expression: $previous\n" unless defined $op && $op=~/[-+(N]/;
        token();
        return -simple() if $op eq '-'; # unary -
        return simple() if $op eq '+';  # unary +
        return $val if $op eq 'N';      # number
        my $result=expression();        # parenthesized expression
        $op=$token->[0];                # closing parenthesis should follow
        die "Unbalanced parenthesis: $previous\n" unless defined $op and $op eq ')';
        token();
        return $result;
    }
```

For good measure a `try/catch` block is implemented to catch malformed expressions in a list of string input to resolve. I should try and remember to play around with this experimental feature, made possible using `Try::Tiny`.

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/dave-jacoby/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Ninja Numbers Hiding In Trees: The Weekly Challenge #143 | Committed to Memory](https://jacoby.github.io/2021/12/14/ninja-numbers-hiding-in-trees-the-weekly-challenge-143.html)

So we've looked at the easy way and the hard way at this point, and we'll get back to those, but there was a third option available using regular expressions. This could be considered tokenizing as well I suppose, without explicitly breaking those tokens out into discrete entities. [*Ed note: we'll generalize this later*]

The process works down the chain of precedence, first recursively resolving parenthetical statements, then multiplication, then addition and subtraction. The expressions are worked from left-to-right, and when a token (fine, they're tokens after all) is matched, it's substituted by an evaluated expression: the matched group `2 * 3` is simply replaced with `6` and we move on.

With greedy matching we'll grab the outermost bracketed component first, but then look again inside that when we pass it through recursively and pull out nested parentheses in the same manner until none remain. Each segment is completely evaluated before it is returned, mimicking the manual order of processing.

```perl
    sub calculator( $s) {

        # parens
        while ( $s =~ /\([\s\d\+\-\*]+\)/mix ) {
            $s =~ s/\(([\s\d\+\-\*]+\))/calculator( unbracket( $1 ))/e;
        }

        # multiplication

        while ( $s =~ / \d+ \s* \* \s* \d+ /mx ) {
            $s =~ s/( (\d+) \s* \* \s* (\d+) )/ $2 * $3 /emx;
        }

        # addition

        while ( $s =~ / \d+ \s* \+ \s* \d+ /mx ) {
            $s =~ s/( (\d+) \s* \+ \s* (\d+) )/ $2 + $3 /emx;
        }

        # subtraction
        while ( $s =~ / \d+ \s* \- \s* \d+ /mx ) {
            $s =~ s/( (\d+) \s* \- \s* (\d+) )/ $2 - $3 /emx;
        }
        return $s;
    }
```

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/james-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #143](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-143/james-smith)

James gives us a range of routines to compare, starting with a very similar regular expression solution, which incidentally proves to be the fastest computational method. Of course `eval()` is faster, but who didn't see that coming?

Again we match and process bracketed segments first, then, multiplication. Here addition and subtraction are processed by the same third loop.

```perl
    sub evaluate  {
      my $str = shift;
      1 while $str =~ s/\(\s*([^()]*?)\s*\)/       evaluate($1)             /e;
      1 while $str =~ s/(-?\d+)\s*\*\s*(-?\d+)/    $1 * $2                  /e;
      1 while $str =~ s/(-?\d+)\s*([-+])\s*(-?\d+)/$2 eq '+' ? $1+$3 : $1-$3/e;
      return $str;
    }
```

Another interesting albeit slower technique was to use RPN, and a very messy solutiojn is given to first convert the input to RPN and then process that.

```perl
    ## Code from hell... First for loop processes the infix into rpn
    ##                   Second for loop processes the rpn stream
    sub evaluate_rpn_hsh  {
      @o=(); @s=();
      ($f{$_}) ? (&{$f{$_}[1]}) : (push@o,$_) for $_[0] =~ m{(-?\d+|[-+*()])}g;
      ($f{$_}) ? (&{$f{$_}[2]}) : (push@s,$_) for @o, reverse splice @s,0;
      $s[0];
    }
```

The comment says it all.

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/abigail/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/abigail/bash/ch-1.sh), [Bc](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/abigail/bc/ch-1.bc), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/abigail/lua/ch-1.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/abigail/node/ch-1.js), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/abigail/python/ch-1.py), [R](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/abigail/r/ch-1.r), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/abigail/ruby/ch-1.rb), [Tcl](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/abigail/tcl/ch-1.tcl)

Abigail may well have the shortest solution submission this week. As `use 5.01` "restricts" us to absolutely any version of Perl 5, I can only ascribe it's inclusion to snark. Fair enough.

```perl
    use 5.01;say eval for <>
```

[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/duncan-c-white/perl/ch-1.pl)

Duncan walks the input string from left-to-right using a set of functions, switching between them depending on the first remaining character in the systematically devoured input. We first have `parseexpr()`, a wrapper that standardizes input in gets the ball rolling, handing the string over to `expr()`. This function handles leading `+/-` signs and passes the string reference to `term()`. This function in turn hands things over to `factor()`, and on return performs multiplication and division. `factor()` detects parenthetical openings, and if found calls `expr()` completing the nested evaluation as required. Like a pieced-apart recursive routine, at each step additional further processing is done on return, as detailed for `factor()` above.

The final processing pathway is determined by the parsed content, resulting in elaborate pathways, and it can be difficult to follow the control flow, as the actions are often, like in recursion, seemingly done in reverse.

```perl
    #
    # my $val = factor( $inputref );
    #    Parse the input string $$inputref, an integer expression factor,
    #    removing text from $$inputref as we consume it, calculating and
    #    returning the result as we go.
    #
    sub factor
    {
        my( $inputref ) = @_;
        my $orig = $$inputref;
        if( $$inputref =~ s/^\(// )
        {
        	$orig = $$inputref;
        	my $val = expr( $inputref );
        	die "factor: bad nested expression $orig\n" unless defined $val;
        	die "factor: ')' expected in $$inputref after expr\n"
        		unless $$inputref =~ s/\)//;
        	return $val;
        }
        return -$1 if $$inputref =~ s/^-(\d+)//;
        return $1  if $$inputref =~ s/^(\d+)//;
        die "factor: '(' or -n or n expected at $$inputref\n";
    }


    #
    # my $val = term( $inputref );
    #    Parse the input string $$inputref, an integer expression term, removing
    #     text from $$inputref as we consume it, and calculate and return the
    #    result.
    #
    sub term
    {
        my( $inputref ) = @_;
        my $val = factor( $inputref );
        while( $$inputref =~ m|^[*/]| )
        {
        	if( $$inputref =~ s/^\*// )
        	{
        		my $v2 = factor( $inputref );
        		$val *= $v2;
        	}
        	elsif( $$inputref =~ s|^/|| )
        	{
        		my $v2 = factor( $inputref );
        		die "term: can't divide by 0\n" if $v2==0;
        		$val = int($val/$v2);
        	}
        }
        return $val;
    }


    #
    # my $val = expr( $inputref );
    #    Parse the input string $$inputref, an integer expression, removing
    #     text from $$inputref as we consume it, and calculate and return the
    #    result.
    sub expr
    {
        my( $inputref ) = @_;
        my $val = term( $inputref );
        while( $$inputref =~ /^[+-]/ )
        {
        	if( $$inputref =~ s/^\+// )
        	{
        		my $v2 = term( $inputref );
        		$val += $v2;
        	}
        	elsif( $$inputref =~ s/^-// )
        	{
        		my $v2 = term( $inputref );
        		$val -= $v2;
        	}
        }
        return $val;
    }
```

[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/paulo-custodio/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/paulo-custodio/python/ch-1.py)

Paulo gives us another, alternative, trifold breakdown into the functions `expr()`, which initiates the parsing, `factor()` and `term()`. This was a common pattern.

```perl
    # ($input, $value) = expr($input)
    sub expr {
        my($input) = @_;
        ($input, my $value) = factor($input);
        while (1) {
            if ($input =~ s/^\s*\*//) {
                ($input, my $b) = factor($input);
                $value *= $b;
            }
            elsif ($input =~ s/^\s*\///) {
                ($input, my $b) = factor($input);
                $value /= $b;
            }
            elsif ($input =~ /^\s*(?:\)|$)/) {
                return ($input, $value);
            }
            else {
                die "expected / or * at: $input\n";
            }
        }
    }

    # ($input, $value) = factor($input)
    sub factor {
        my($input) = @_;
        ($input, my $value) = term($input);
        while (1) {
            if ($input =~ s/^\s*\+//) {
                ($input, my $b) = term($input);
                $value += $b;
            }
            elsif ($input =~ s/^\s*\-//) {
                ($input, my $b) = term($input);
                $value -= $b;
            }
            else {
                return ($input, $value);
            }
        }
    }

    # ($input, $value) = term($input)
    sub term {
        my($input) = @_;
        while (1) {
            if ($input =~ s/^\s*([-+]?\d+)//) {
                return ($input, $1);
            }
            elsif ($input =~ s/^\s*\(//) {
                ($input, my $value) = expr($input);
                $input =~ s/^\s*\)// or die "expected ) at: $input\n";
                return ($input, $value);
            }
            else {
                die "expected ( or number at: $input\n";
            }
        }
    }
```

[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/mohammad-anwar/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/mohammad-anwar/python/ch-1.py)


&nbsp;&nbsp;**blog writeup:**
[The Weekly Challenge - 143 (Task #1: Calculator) - YouTube](https://youtu.be/Ch1C1HYytdU)

Then again, depending on how you look at it Mohammad may have beaten out Abigail on brevity, if we choose to not consider the testing portions of a script as *part* of the script.

Tests are generally considered more metaphysical, being *about* the script, as it is first required to have a complete thing to test. Perhaps when viewed as *system*...

Using this logic it's difficult to see any "script" at all.

In any case this isn't a competition per se, but, well, you get the idea. We don't need to build a parser because Perl already has an excellent one built-in.

```perl
    use strict;
    use warnings;
    use Test::More;

    is(eval qq|10 + 20 - 5|, 25, 'Example 1');
    is(eval qq|(10 + 20 - 5) * 2|, 50, 'Example 2');

    done_testing;
```


[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/athanasius/perl/ch-1.pl)

But back to the hard way, which is considerably more interesting, if not more efficient.

The monk brings us a completely different 3-step method:
* Tokenize the input using `HOP::Lexer`
* Parse the tokenized input into a version of RPN, resulting in a queue of values followed by a list of operations
* evaluate the parsed list by removing the numbers to their own stack, then stepwise applying the operations in the remaining queue to the stack data.

The tokenizer requires a set of descriptors, which is handed to the `HOP::Lexer::string_lexer()` routine. The `parse()` routine then takes these tuples of labels and data and converts the required flow into RPN. Using this notation the unwound expressions can be expressed without parenthetical statements, as nested portions are   placed earlier in the processing queue. The process used, invented by Dijkstra, is known as the [`shunting-yard algorithm`](https://en.wikipedia.org/wiki/Shunting-yard_algorithm).

```perl
    sub tokenize
    #------------------------------------------------------------------------------
    {
        my ($s) = @_;

        my @input_tokens =
        (
            [ NUMBER   => qr/ $RE{num}{real} /x             ],
            [ OPERATOR => qr/ [+\-*]         /x             ],
            [ L_PAREN  => qr/ \(             /x             ],
            [ R_PAREN  => qr/ \)             /x             ],
            [ SPACE    => qr/ \s*            /x, sub { () } ],
        );

        my $lexer = string_lexer( $s, @input_tokens );
        my @tokens;

        while (my $token = $lexer->())
        {
            ref $token eq 'ARRAY' or error( qq[Unrecognized token "$token"] );
            push @tokens, $token;
        }

        return \@tokens;
    }

    #------------------------------------------------------------------------------
    # See https://en.wikipedia.org/wiki/Shunting-yard_algorithm
    #
    sub parse
    #------------------------------------------------------------------------------
    {
        my ($tokens) = @_;
        my  @output_queue;
        my  @op_stack;

        for my $token (@$tokens)
        {
            if    ($token->[ 0 ] eq 'NUMBER')
            {
                push @output_queue, $token->[ 1 ];
            }
            elsif ($token->[ 0 ] eq 'OPERATOR')
            {
                push @output_queue, pop @op_stack
                    while exists $op_stack[ -1 ]               &&
                                 $op_stack[ -1 ] eq 'OPERATOR' &&
                          $PREC{ $op_stack[ -1 ] } >= $PREC{ $token->[ 1 ] };

                push @op_stack, $token->[ 1 ];
            }
            elsif ($token->[ 0 ] eq 'L_PAREN')
            {
                push @op_stack, $token->[ 0 ];
            }
            elsif ($token->[ 0 ] eq 'R_PAREN')
            {
                scalar @op_stack > 0
                    or die 'ERROR: Mismatched parentheses';

                while ($op_stack[ -1 ] ne 'L_PAREN')
                {
                    push @output_queue, pop @op_stack;

                    scalar @op_stack > 0
                        or die "ERROR: Mismatched parentheses";
                }

                $op_stack[ -1 ] eq 'L_PAREN'
                    or die 'ERROR: Left parenthesis missing';

                pop @op_stack;    # Discard left parenthesis
            }
            else
            {
                die qq[ERROR: Unrecognized token "$token"];
            }
        }

        while (scalar @op_stack > 0)
        {
            $op_stack[ 0 ] eq 'L_PAREN'
                and die 'ERROR: Mismatched parentheses';

            push @output_queue, pop @op_stack;
        }

        say "@output_queue";

        return \@output_queue;
    }
```

[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/mattneleigh/perl/ch-1.pl)

Matthew tokenizes and parses using a very similar process, but writes his own tokenizer step. Because the parsing is fairly simple, with only 4 operator characters: `+-*/` and parentheses to recognize, we break the string up into a list of numbers and recognized special characters. A lookup table is made for the operators:

```perl
    %Evaluator::op_table = (
        # Add
        "+" => {
            prec => 2,
            assoc => 'L',
            rpn_exec => sub{
                my $stack = shift();

                push(@{$stack}, pop(@{$stack}) + pop(@{$stack}));

            }
        },

        # Multiply
        "*" => {
            prec => 3,
            assoc => 'L',
            rpn_exec => sub{
                my $stack = shift();

                push(@{$stack}, pop(@{$stack}) * pop(@{$stack}));

            }
        },

        ...

    );
```

Some useful attributes are assigned, like how to process them. We then proceed directly to the shunting-yard algorithm again:

```perl
    sub tokens_to_rpn{
        my $tokens = shift();

        my $token;
        my @out_queue;
        my @op_stack;

        # Assignment in condition is
        # deliberate; loop until we run out of
        # tokens to process
        while($token = shift(@{$tokens})){
            if($token eq '('){
                # Left paren- push it onto the op stack
                push(@op_stack, $token);
            } elsif($token eq ')'){
                # Right paren- pop the op stack and add
                # to the output queue until we find a
                # left paren
                while($op_stack[$#op_stack] && ($op_stack[$#op_stack] ne '(')){
                    push(@out_queue, pop(@op_stack));
                }
                # Discard the left paren
                pop(@op_stack);
            } elsif($Evaluator::op_table{$token}){
                # Math operator
                while(
                    # While there is an operator on the op
                    # stack...
                    $op_stack[$#op_stack]
                    # AND...
                    &&
                    # The operator is not a left paren...
                    ($op_stack[$#op_stack] ne '(')
                    # AND...
                    &&
                    (
                        # The new operator is left-associative
                        # and has a precedence less than or
                        # equal to what's on top of the op
                        # stack...
                        (
                            ($Evaluator::op_table{$token}{assoc} eq 'L')
                            &&
                            (
                                $Evaluator::op_table{$token}{prec}
                                <=
                                $Evaluator::op_table{$op_stack[$#op_stack]}{prec}
                            )
                        )
                        # OR...
                        ||
                        # The new operator is right-associative
                        # and has a precedence less than what's
                        # what's on top of the op stack...
                        (
                            ($Evaluator::op_table{$token}{assoc} eq 'R')
                            &&
                            (
                                $Evaluator::op_table{$token}{prec}
                                <
                                $Evaluator::op_table{$op_stack[$#op_stack]}{prec}
                            )
                        )
                    )
                ){
                    # Pop an operator from the op stack and
                    # push it into the output queue
                    push(@out_queue, pop(@op_stack));
                }
                # Push the new operator onto the op
                # stack
                push(@op_stack, $token);
            } else{
                # Presumably a number... add it to the
                # output queue
                push(@out_queue, $token);
            }
        }

        # Pop all remaining operators and push
        # them into the output queue
        while(@op_stack){
            push(@out_queue, pop(@op_stack));
        }

        # Transfer all contents of the output
        # queue back to the original token
        # list
        while(@out_queue){
            push(@{$tokens}, shift(@out_queue));
        }

        return($tokens);

    }
```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/polettix/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/polettix/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC143 - Calculator - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/12/15/pwc143-calculator/)

&nbsp;&nbsp;**blog writeup:**
[PWC143 - Stealthy Number](https://github.polettix.it/ETOOBUSY/2021/12/16/pwc143-stealthy-number/)

Flavio has, at one time in his life, for reasons of his own, already written a parser and kept it around in his `cglib-perl` library. That stands for "Coding Game" for anyone curious. In any case he raids that heavily for today's solution, copying over as required.

As such Flavio's tools are presumably more refined and robust than some here, having had more time to get worked over and smoothed out. We get the same fundamental tripartite understructure that keeps showing up: `expression`, `term`, `factor`, with a `parse()` wrapper (of sorts), but after that point this implementation is much more general-purpose. The main workers are the routines mentioned, and the rest of the engine is included as well, including some parts, such as `pf_list()`, that don't come into play at all.

Here is the main logic; you can still see the nesting required to evaluate parenthetical subunits first:

```perl
    # main entry point, useful for extracting the return value
    sub parse ($exp) { return pf_PARSE(expression())->($exp)->[0] }

    # <term> [+/- <term> [+/- <term> [...]]] | <group>
    sub expression { pf_alternatives(canned_ops(term(), '-', '+'), group()) }

    # <factor> [* <factor> [* <factor> [...]]]
    sub term { canned_ops(factor(), '*') }

    # <value> | <group>
    sub factor { pf_alternatives(value(), group()) }

    # '(' <expression> ')'
    sub group {
       return sub {
          state $matcher = pf_sequence('(', expression(), ')');
          my $match = $matcher->(@_) or return;
          return $match->[1];
       }
    }

    # some integer without sign
    sub value { pf_regexp(qr{\s*(0|[1-9]\d*)\s*}) }

    # implementation of operand [op operand [op operand [...]]]
    sub canned_ops ($operand, @operators) {
       my $ops = join '|', map { quotemeta } @operators ;
       my $op_opd = pf_sequence(pf_regexp(qr{\s*($ops)\s*}), $operand);
       my $matcher = pf_sequence($operand, pf_repeated($op_opd));
       return sub {
          my $match = $matcher->(@_) or return;
          my $retval = $match->[0][0];
          for my $opv ($match->[1]->@*) {
             my ($op, $val) = map { $_->[0] }$opv->@*;
             if    ($op eq '*') { $retval *= $val }
             elsif ($op eq '+') { $retval += $val }
             elsif ($op eq '-') { $retval -= $val }
          }
          return [ $retval ];
       }
    }


    # parsing facilities
    sub pf_alternatives {
       my (@A, $r) = @_;
       return sub { (defined($r = $_->($_[0])) && return $r) for @A; return };
    }

    sub pf_PARSE {
       my ($expression) = @_;
       return sub {
          my $rtext = ref $_[0] ? $_[0] : \$_[0]; # avoid copying
          my $ast = $expression->($rtext) or die "nothing parsed\n";
          my $pos = pos($$rtext) || 0;
          my $delta = length($$rtext) - $pos;
          return $ast if $delta == 0;
          my $offending = substr $$rtext, $pos, 72;
          substr $offending, -3, 3, '...' if $delta > 72;
          die "unknown sequence starting at $pos <$offending>\n";
       };
    }

```

Oh, and yes he does include an `eval()` method. Just sayin'.


[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/e-choroba/perl/ch-1.pl)

Finally, Choroba wraps us up with pair of solutions. In the first he gives us a set of regular expressions to break down, piece out and gradually evaluate the expression one nested unit at a time until we obtain a single remaining value.

```perl
    sub calculator {
        my ($expression) = @_;
        while ($expression =~ m{[ ()]}) {
            $expression =~ s/(-?\d+) (\*) (-?\d+)/$1 * $3/e;
            $expression =~ s/(-?\d+) ([-+]) (-?\d+)/"$1 $2 $3"/ee;
            $expression =~ s/\((-?\d+)\)/$1/g;
        }
        return $expression
    }
```

I really like these regular expression methods, having used one myself. They're clean in their way and strike me as very perlish. I've always been a big fan of Perl's regular expressions since, well, I learned Perl.

Nut lets take that abstraction further, shall we?

The subunits being matched here within a given expression can be considered anonymous tokens that are immediately processed. This can be taken further into more standardized grammars, such as Flavio does in his Raku solution, as that language provides those capabilities out-of-the-box. Similarly, we can still perform the abstraction conceptually as a [Domain-Specific Language](https://en.wikipedia.org/wiki/Domain-specific_language), that we can in turn describe using [Backus–Naur form](https://en.wikipedia.org/wiki/Backus–Naur_form) notation.

This is a more generalized version of some of the tokenizing we saw earlier, with rules attached to the tokens: "this token is of type operator and is processed by multiplying the associated data stored here, with the result placed there".

It all goes back to computing fundamentals, doesn't it?

Here Choroba brings in the `Marpa::R2` module to parse a grammar described as a set of BNF rules and definitions to implementing the broader abstraction mentioned earlier. He's not reinventing the wheel but rather defining and describing precisely how it should be used.

```perl
    use Marpa::R2;
    my $dsl = << '__DSL__';

        lexeme default = latm => 1
        :default ::= action => ::first

        Expression ::= Number
                     | ('(') Expression (')')   assoc => group
                    || Expression (ws asterisk ws) Expression  action => multiply
                    || Expression (ws plus ws) Expression      action => add
                     | Expression (ws minus ws) Expression     action => subtract
        Number     ::= Negative | positive
        Negative   ::= minus positive                          action => neg

        ws       ~ [\s]+
        asterisk ~ '*'
        plus     ~ '+'
        positive ~ [\d]+
        minus    ~ '-'

    __DSL__

    sub add      { $_[1] + $_[2] }
    sub subtract { $_[1] - $_[2] }
    sub multiply { $_[1] * $_[2] }
    sub neg      { -$_[2] }
    sub second   { $_[2] }

    my $grammar = 'Marpa::R2::Scanless::G'->new({source => \$dsl});

    sub calculate {
        my ($input) = @_;
        return ${ $grammar->parse(\$input, 'main') }
    }
```



## Blogs and Additional Submissions in Guest Languages for Task 1:


[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/adam-russell/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Prolog](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/adam-russell/prolog/ch-1.p)


&nbsp;&nbsp;**blog writeup:**
[Stealthy Calculations - Perl - RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/2021/12/19/perl)

&nbsp;&nbsp;**blog writeup:**
[Stealthy Calculations - Prolog - RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/2021/12/19/prolog)


[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/laurent-rosenfeld/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/laurent-rosenfeld/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 143: Calculator and Stealthy Numbers | laurent_r](http://blogs.perl.org/users/laurent_r/2021/12/post.html)


[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/roger-bell-west/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/roger-bell-west/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/roger-bell-west/raku/ch-1.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/roger-bell-west/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/roger-bell-west/rust/ch-1.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: The Weekly Challenge 143: Stealthy Calculator](https://blog.firedrake.org/archive/2021/12/The_Weekly_Challenge_143__Stealthy_Calculator.html)


[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/sgreen/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Weekly Challenge 143](https://dev.to/simongreennet/weekly-challenge-143-36f6)


------------------------------------------





---

# TASK 2 {#PWC143TASK2}

# Stealthy Number
*Submitted by: Mohammad S Anwar*

You are given a positive number, $n.

Write a script to find out if the given number is Stealthy Number.

A positive integer N is stealthy, if there exist positive integers a, b, c, d such that a * b = c * d = N and a + b = c + d + 1.

**Example 1**
```
    Input: $n = 36
    Output: 1

    Since  36 =     4 (a) * 9 (b) = 6 (c) * 6 (d)
            and     4 (a) + 9 (b) = 6 (c) + 6 (d) + 1.
```
**Example 2**
```
    Input: $n = 12
    Output: 1

    Since           2 * 6 = 3 * 4
            and     2 + 6 = 3 + 4 + 1
```
**Example 3**
```
    Input: $n = 6
    Output: 0

    Since           2 * 3 = 1 * 6
                but 2 + 3 != 1 + 6 + 1
```

## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/abigail/perl/ch-2.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/adam-russell/perl/ch-2.pl),
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/alexander-pankoff/perl/ch-2.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/arne-sommer/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/athanasius/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/colin-crain/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/dave-jacoby/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/polettix/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/james-smith/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/laurent-rosenfeld/perl/ch-2.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/paulo-custodio/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/pete-houston/perl/ch-2.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/peter-campbell-smith/perl/ch-2.pl),
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/robert-dicicco/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/roger-bell-west/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/sgreen/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/ulrich-rieke/perl/ch-2.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/wlmb/perl/ch-2.pl)

In the art of programming, identifying and qualifying the problem to be solved is often the most skilled task. In this challenge, we are given two equations requiring a simultaneous solution for 4 variables, which honestly sounds pretty hairy. However there is additional information to draw on by examining exactly what those 4 variables are, namely that they multiply in two pairs to produce the target. In other words, they are factors of the target, and specifically factor pairs: the value and the complement required to reach the product. And more so, we want two of these pairs, so for instance primes are out from the get-go.

So what this search for "stealthy" numbers is really about is the relationships between factor-complement pairs for a given number. If we look at the problem that way, we should find it more approachable.


There were 20 submissions for the second task this past week.


## CUTTING a BROAD SWATH through the FIELD OF SUBMISSIONS
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/e-choroba/perl/ch-2.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/adam-russell/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/laurent-rosenfeld/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/roger-bell-west/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/polettix/perl/ch-2.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/peter-campbell-smith/perl/ch-2.pl),
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/alexander-pankoff/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/athanasius/perl/ch-2.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/paulo-custodio/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/colin-crain/perl/ch-2.pl),
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/robert-dicicco/perl/ch-2.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/wlmb/perl/ch-2.pl)

We've been working with factors quite a bit over the last few weeks, producing a gamut of responses from groans to excited chirping that I will assume to be favorable. Many members, consequently, had immediately available routines that could be modified to produce factor pairs. From there it was a matter of finding sets that fit the equality.

It's not clear exactly where the term "stealthy" originates with respect to the sequence. The OEIS lists them as

>A053990
>Numbers of the form x*(x + 1)*y*(y + 1) ("bipronics") where x and y are distinct.

Pronic numbers are those of the form *x*(*x*+1), and apparently "pronic" itself seems to be a [now-ubiquitous mispelling of the word "promic"](https://mathworld.wolfram.com/PronicNumber.html), from the Greek root for rectangular.

Of note there is no explicit exclusion that the values within the pairs. Some submissions did take this as implicit and disallowed them, but it appears this is unnecessary. The name "stealthy" seems exclusively attached to this particular problem and its variants and I can offer no further insight into the matter.

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/e-choroba/perl/ch-2.pl)

Choroba starts us off with a succinct distillation of the steps required. First we obtain a list of factors by looking at the range of values from 1 to the square root, and filtering for those that evenly divide the target. He converts these to a descending list of complement factors  and stores them. Then for each of these, the original is resurrected to produce the A/C pair, and the list is searched again for a C/D pair that slots into the predicate equation — two pairs of values whose sums differ by 1.

```perl
    sub stealthy_number {
        my ($n) = @_;
        my @divisors = (map $n / $_, grep 0 == $n % $_, 1 .. sqrt $n);
        for my $A (@divisors) {
            for my $C (@divisors) {
                my $B = $n / $A;
                my $D = $n / $C;
                return 1 if $A + $B == $C + $D + 1;
            }
        }
        return 0
    }
```

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/adam-russell/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Prolog](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/adam-russell/prolog/ch-2.p)


&nbsp;&nbsp;**blog writeup:**
[Stealthy Calculations - Perl - RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/2021/12/19/perl)

&nbsp;&nbsp;**blog writeup:**
[Stealthy Calculations - Prolog - RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/2021/12/19/prolog)

Adam again constructs a list of factor pairs in the range from 1 to the square root, with each factor found matched with its complement.

A simple pair of nested loops over the indices of this list is then used to create the set of complete combinations with duplicates for the range, the cross product of the set with itself. The combinations matching each pair with itself are ultimately filtered out.

With two sets of pairs for each combination, the elements are inserted into the validation equation and tested; those coefficients that fit immediately return true from the subroutine.

```perl
    sub factor{
        my($n) = @_;
        my @factors = ();
        for  my $j (2 .. sqrt($n)){
            push @factors, [$j, $n / $j] if $n % $j == 0;
        }
        return @factors;
    }

    sub stealthy{
        my($n) = @_;
        my @factors = factor($n);
        for(my $i = 0; $i < @factors; $i++){
            for(my $j = 0; $j < @factors; $j++){
                unless($i == $j){
                    my($s, $t) = @{$factors[$i]};
                    my($u, $v) = @{$factors[$j]};
                    return true if $s + $t == $u + $v + 1;
                }
            }
        }
        return false;
    }
```


[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/laurent-rosenfeld/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/laurent-rosenfeld/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 143: Calculator and Stealthy Numbers | laurent_r](http://blogs.perl.org/users/laurent_r/2021/12/post.html)

Laurent brings us his own separate cross product routine, to match up all combinations of factor pairs with each other. These are the compared using their element sums to look for the qualifying quad of quantifiers queried.

[ed note: I know the world didn't *need* me to write that last line, and the world is categorically *not* a better place having written it. But I'm going to leave it as a warning against hubris and overreach for those that follow me.]

But this isn't about me, so back to Laurent: in two routines he matches up all the possible arrangements, short-circuiting out of the loop if a set is found that fits the equality.

```perl
    sub cross {
        my @nums = @_;
        my @num_pairs;
        for my $i (@nums) {
            for my $j (@nums) {
                next if $j > $i; # filter out duplicates such as [12, 3] and [3, 12]
                push @num_pairs, [$i, $j];
            }
        }
        return @num_pairs;
    }

    sub stealthy_nums  {
        my $n = shift;
        my @divisors = grep {$n % $_ == 0} 1..$n;
        my @div_pairs = grep { $_->[0] * $_->[1] == $n } cross @divisors;
        for my $c (@div_pairs) {
            for my $d (@div_pairs) {
                return "@$c and @$d" if abs($c->[0] + $c->[1] - $d->[0] - $d->[1]) == 1;
            }
        }
        return 0;
    }
```



[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/roger-bell-west/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/roger-bell-west/kotlin/ch-2.kt), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/roger-bell-west/postscript/ch-2.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/roger-bell-west/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/roger-bell-west/raku/ch-2.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/roger-bell-west/ruby/ch-2.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/roger-bell-west/rust/ch-2.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: The Weekly Challenge 143: Stealthy Calculator](https://blog.firedrake.org/archive/2021/12/The_Weekly_Challenge_143__Stealthy_Calculator.html)

Roger provides a nice further distillation of the cut-to-the-chase approach we've come up with to solve this problem. We don't, after all, care *what* our factors are; what we're really concerned with here is the sum of the pairs. So in processing, when finding a factor he determines its complement, sums them and only stores *that*.

Keep your eye on the ball, folks.

This list is prepared by by `factorpairs()`. Once that is done all we need to do is compare these sums, and if we find two that differ by 1 we're good.

```perl
    sub factorpairs {
      my $n=shift;
      if ($n==1) {
        return [2];
      }
      my @ff;
      my $s=int(sqrt($n));
      if ($s*$s == $n) {
        push @ff,$s*2;
        $s--;
      }
      foreach my $pf (2..$s) {
        if ($n % $pf == 0) {
          push @ff,$pf+$n/$pf;
        }
      }
      push @ff,1+$n;
      return \@ff;
    }

    sub is_stealthy {
      my $n=shift;
      my $p=factorpairs($n);
      if (scalar @{$p}==1) {
        return 0;
      }
      foreach my $ix (0..scalar @{$p}-2) {
        foreach my $iy ($ix+1..scalar @{$p}-1) {
          if (abs($p->[$ix]-$p->[$iy])==1) {
            return 1;
          }
        }
      }
      return 0;
    }
```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/polettix/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/polettix/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC143 - Calculator - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/12/15/pwc143-calculator/)

&nbsp;&nbsp;**blog writeup:**
[PWC143 - Stealthy Number](https://github.polettix.it/ETOOBUSY/2021/12/16/pwc143-stealthy-number/)

Flavio noticeably speeds up the step of looking for a matching factor pair by storing the sums of each pair found as keys in a lookup hash. As each pair is located, this hash is queried for the values one above and one below the current sum. If the factor pair has already been located it will be in the lookup, but if it has not, then when it is finally found the first pair will be in to lookup instead. Looking for a net difference of one means we are trying to fit either side of the predicate equation. As Roger noted we don't care what the other pair of coefficients actually are, only what they sum to.

```perl
    sub is_stealthy ($n) {
       my %match;
       for my $k (1 .. sqrt($n)) {
          next if $n % $k;
          my $sum = $k + $n / $k;
          return 1 if $match{$sum - 1} || $match{$sum + 1};
          $match{$sum} = 1;
       }
       return 0;
    }
```


[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/peter-campbell-smith/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Being stealthy is a fourfold property
](https://pjcs-pwc.blogspot.com/2021/12/being-stealthy-is-fourfold-property.html)

Peter provides a nice little mathematical analysis [at his writeup](https://pjcs-pwc.blogspot.com/2021/12/being-stealthy-is-fourfold-property.html) on why stealthy numbers are always divisible by 4, which some folks may find interesting. To solve the challenge he first imports `divisors` from `Math::Prime::Util` to provide a list, then `variations` from `Algorithm::Combinatorics` to provide matchups between the various divisors presented.


```perl
    use Math::Prime::Util qw(divisors);
    use Algorithm::Combinatorics qw(variations);

    # You are given a positive number, $n.
    # Write a script to find out if the given number is Stealthy Number.
    # A positive integer N is stealthy, if there exist positive integers a, b, c, d
    # such that a * b = c * d = N and a + b = c + d + 1.

    my ($test, @tests, @divisors, $variations, $v, $good, $half);

    # inputs
    @tests = (36, 12, 6, 22, 23, 24, 8424, 7200, 4);

    # eval will do it
    for $test (@tests) {
        $good = 0;
        @divisors = divisors($test);
        $variations = variations(\@divisors, 2);
        $half = sqrt($test);
        while ($v = $variations->next) {
        	next unless ($v->[0] <= $half and $v->[1] <= $half);
        	if ($v->[0] + $test / $v->[0] == $v->[1] + $test / $v->[1] + 1) {
        		say qq[\nInput:  $test\nOutput: 1] if $good == 0;
        		say qq[$v->[0] + ] . ($test / $v->[0]) . qq[ == $v->[1] + ] . ($test / $v->[1]) . qq[ + 1];
        		$good ++;
        	}
        }
        say qq[\nInput:  $test\nOutput: 0] unless $good;
    }
```





[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/alexander-pankoff/perl/ch-2.pl)

Alexander breaks the problem down into small discrete functional units, systematically processing the target number first into a list of factor pairs lists, then pairing up these pairs in combinations, then flattening those combinations into ordered sets of 4 coefficients, then finding the first such set that satisfies the equality

>  *a* + *b* = *c* + *d* + 1

Functional Programming is such an interesting way to look at data.

```perl
    sub stealthy($n) {
        my @divisors = find_divisors_pairs($n);
        my @pairs    = pairs(@divisors);

        my $stealthy = first {
            my ( $a, $b, $c, $d ) = flatten($_);
            $a * $b == $c * $d && $a + $b == $c + $d + 1;
        }
        @pairs;

        return $stealthy;
    }

    sub pairs(@xs) {
        my @out;
        for my $i ( 0 .. $#xs - 1 ) {
            push @out, map { [ $xs[$i], $xs[$_] ] } ( $i + 1 .. $#xs );
        }
        return @out;
    }

    sub flatten($xs) {
        map { @$_ } @$xs;
    }

    sub find_divisors_pairs($x) {
        my @out;
        my $max = sqrt($x);
        for my $i ( 1 .. $max ) {
            if ( $x % $i == 0 ) {
                push @out, [ $i, $x / $i ];
            }
        }
        return @out;
    }
```

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/athanasius/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/athanasius/raku/ch-2.raku)

Alternately, the monk gives us a different paradigm lens, this one Object-Oriented Programming. Here a routine iterating over the numbers from 1 to the square root of the target returns a list of `FactorPair` objects, which have two values and a `sum` attribute built on instantiation thats adds them together. Now two loops iterate through lists of the objects, comparing the `sum` attributes. When two are found that differ by 1 we report as stealthy and exit.

```perl
    package FactorPair
    {
        sub new                                                       # Constructor
        {
            my ($class, $p, $q) = @_;
            my %self =
            (
                p   => $p,
                q   => $q,
                sum => $p + $q,
            );
            return bless \%self, $class;
        }

        sub p   { $_[ 0 ]->{ p   }; }
        sub q   { $_[ 0 ]->{ q   }; }
        sub sum { $_[ 0 ]->{ sum }; }
    }

    MAIN:
    {
        my $n = parse_command_line();
        print "Input:  \$n = $n\n";

        my $pairs = get_factors( $n );
          @$pairs = sort { $a->sum <=> $b->sum } @$pairs;

        my  $is_stealthy = 0;
        my ($factor1, $factor2);

        L_OUTER:
        for my $idx_i (0 .. $#$pairs - 1)
        {
            for my $idx_j ($idx_i + 1 .. $#$pairs)
            {
                if ($pairs->[ $idx_i ]->sum + 1 == $pairs->[ $idx_j ]->sum)
                {
                    $factor1     = $pairs->[ $idx_j ];
                    $factor2     = $pairs->[ $idx_i ];
                    $is_stealthy = 1;
                    last L_OUTER;
                }
            }
        }

        printf "Output: %d\n", $is_stealthy ? 1 : 0;
    }

    sub get_factors
    {
        my ($n) = @_;
        my  @pairs;

        for my $i (1 .. int sqrt $n)
        {
            if ($n % $i == 0)
            {
                push @pairs, FactorPair->new( $i, $n / $i );
            }
        }

        return \@pairs;
    }
```

[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/paulo-custodio/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/paulo-custodio/python/ch-2.py)

I have noticed a basic dichotomy in this world between the twin primal urges to break things apart and to put things together. We could disassociate the actions into discrete steps as Alexander, or perhaps go the other way and combine our control flow into a single complex structure. From the outside of this giant wedge: as each value from 1 to `$n` is tested as a possible factor, if successful its complement is then computed. Now we have the `$a` and `$b` terms. We then loop over the range again and search for a similar pair `$c` and its complement `$d` that fit the conditional.
```perl
    sub is_stealthy {
        my($n) = @_;
        for my $a (1..$n) {
            if ($n % $a == 0) {
                my $b = $n / $a;            # a*b=n
                for my $c (1..$n) {
                    if ($n % $c == 0) {
                        my $d = $n / $c;    # c*d=n
                        if ($a+$b==$c+$d+1) {
                            return 1;
                        }
                    }
                }
            }
        }
        return 0;
    }
```


[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/colin-crain/perl/ch-2.pl)

When given these challenges, I generally refrain from researching any sort of analysis or solutions. I like to look at exactly what I have and try and make sense of it. Sometimes I'll read the establishing paragraph of a Wikipedia article if the language seems unclear. It's not a hard-and-fast rule or anything, but it generally makes the tasks more interesting.

In this case the parameters seem straightforward as given and there's no article to be found, so I just went at it from first principles. For my process I copy over the problem to the top of a blank script and start writing observations and notes. These notes in turn form the basis of a blog post should I have the time for it. This week there is no blog, so the notes are what I've got. They're a pretty systematic analysis of pairs of number factors, much of which I've now been raiding to write this review. It's an organic flow between the notes and the script, but I usually don't go back and rewrite the notes in-place, so they script remains the final word.

The analysis I made transforms the problem as given into the now-familiar pairs of factors, and ultimately concludes that the difference between the sums of various pairs of factors generally increases as we diverge from the square root. The number and 1 factor pair are a maximum value when summed, and the square root and itself a minumum value. As the difference between summed pairs we a re looking for, 1, is also a minimum value, we might conclude that the pairs we are looking for will be those closest to the square root. If the number has two such pairs, including or next to the root, and they differ by 1 then we're stealthy and don't need to look elsewhere.

Almost.

Annoyingly, this doesn't hold true in every case, as sometimes there is a bump in the jump closest to the square root before things descend a step and proceed in an orderly fashion. Take for instance the number 2964:

```
    2964 :
        factors: 1 2 3 4 6 12 13 19 26 38 39 52 57 76 78 114 156 228 247 494 741 988 1482 2964
        	1 + 2964 = 2965
        	2 + 1482 = 1484
        	3 + 988 = 991
        	4 + 741 = 745
        	6 + 494 = 500
        	12 + 247 = 259
        	13 + 228 = 241
        	19 + 156 = 175
        	26 + 114 = 140
        	38 + 78 = 116         <--- stealthy here
        	39 + 76 = 115
        	52 + 57 = 109         <--- but not here
```

The vast majority of cases do fall next to the square root, but this is not consistent. The number 85680 is even more annoying, with a stealthy pair at the root, then a jump in the difference, then a difference reset to 1. And then it goes on to do it *again*, before continuing. The nerve!

```perl
    85680 :
        factors: 1 2 3 4 5 6 7 8 9 10 12 14 15 16 17 18 20 21 24 28 30 34 35 36 40 42 45 48 51 56 60 63 68 70 72 80 84 85 90 102 105 112 119 120 126 136 140 144 153 168 170 180 204 210 238 240 252 255 272 280 306 315 336 340 357 360 408 420 476 504 510 560 595 612 630 680 714 720 765 816 840 952 1008 1020 1071 1190 1224 1260 1360 1428 1530 1680 1785 1904 2040 2142 2380 2448 2520 2856 3060 3570 4080 4284 4760 5040 5355 5712 6120 7140 8568 9520 10710 12240 14280 17136 21420 28560 42840 85680
        	1 + 85680 = 85681
        	2 + 42840 = 42842
        	3 + 28560 = 28563

            ...

            180 + 476 = 656
        	204 + 420 = 624
        	210 + 408 = 618
        	238 + 360 = 598         <--- and also here!
        	240 + 357 = 597         <---    and a +5 jump
        	252 + 340 = 592         <--- but also stealthy here
        	255 + 336 = 591         <---    and a +4 jump
        	272 + 315 = 587         <--- stealthy here
        	280 + 306 = 586
```

I found the research for this analysis much more interesting than the actual challenge as stated, so I decided to present that information instead. So here is a script showing all stealthy numbers less than 100,000, and a breakdown of each as to *why* they are stealthy.

Put another way we're really demonstrating the properties they have that fit the assigned definition. I still have no idea why we call those numbers "stealthy" though. That one is still anyone's guess.

```perl
    sub nd_brute ( $num, @div ) {
        $num % $_ or push @div, $_ for 2..$num/2 ;
        return 1, @div, $num;
    }

    my @seq;

    for my $num ( 1..100000)
    {
        my @facts = nd_brute( $num );
        my $res = stealthy_sum_pairs( @facts );
        defined $res
            ? say $res
            : next;
        push @seq, $num;
    }

    say "\n", "sequence of stealthy numbers:";
    say join ",", @seq;

    sub stealthy_sum_pairs ( @f ) {
        my $out = "$f[-1] :\n\tfactors: @f\n";
        my $prev = 0;
        my $found = 0;
        while ( @f ) {
            my ($l, $r);
            $l = shift @f;
            $r = pop @f || $l;
            $out .= join '', "\t\t", "$l + $r = ", $l + $r, "\n";
            $found += 1 if $l + $r == $prev - 1;
            $prev = $l + $r;
        }
        return $out if $found;
        return;
    }
```

The results look lke this:

```
    4 :
        factors: 1 2 4
        	1 + 4 = 5
        	2 + 2 = 4

    12 :
        factors: 1 2 3 4 6 12
        	1 + 12 = 13
        	2 + 6 = 8
        	3 + 4 = 7

    24 :
        factors: 1 2 3 4 6 8 12 24
        	1 + 24 = 25
        	2 + 12 = 14
        	3 + 8 = 11
        	4 + 6 = 10

    36 :
        factors: 1 2 3 4 6 9 12 18 36
        	1 + 36 = 37
        	2 + 18 = 20
        	3 + 12 = 15
        	4 + 9 = 13
        	6 + 6 = 12

    ...

    540 :
        factors: 1 2 3 4 5 6 9 10 12 15 18 20 27 30 36 45 54 60 90 108 135 180 270 540
        	1 + 540 = 541
        	2 + 270 = 272
        	3 + 180 = 183
        	4 + 135 = 139
        	5 + 108 = 113
        	6 + 90 = 96
        	9 + 60 = 69
        	10 + 54 = 64
        	12 + 45 = 57
        	15 + 36 = 51
        	18 + 30 = 48
        	20 + 27 = 47

    ...

    9940 :
        factors: 1 2 4 5 7 10 14 20 28 35 70 71 140 142 284 355 497 710 994 1420 1988 2485 4970 9940
            1 + 9940 = 9941
            2 + 4970 = 4972
            4 + 2485 = 2489
            5 + 1988 = 1993
            7 + 1420 = 1427
            10 + 994 = 1004
            14 + 710 = 724
            20 + 497 = 517
            28 + 355 = 383
            35 + 284 = 319
            70 + 142 = 212
            71 + 140 = 211

    ...

```

[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/robert-dicicco/perl/ch-2.pl)

It appears that Robert may have twigged to this concept as well, although it isn't clearly stated.

Robert imports `divisors` from `ntheory`, an alias for `Math::Prime::Util` to provide a list of divisors. He then, through an unusual combination of inverting the factor/complement pairs and a conditional, jumps forward to the half-way point — the square root — to start checking. He sets the target to the sum at this point and checks the sum of the following divisor pairs, short-circuiting out if the sum is `$target + 1`.

Conspicuously the target is never updated, suggesting he feels we will match the centermost pairs or none at all. In any case we don't scan every combination of factor pairs, only the center pair against all those following, which will find most stealthy values. But we will get into trouble with, say, 2964.

I propose we call these "deceptively sneaky and insincere" numbers instead. They'll break your heart.

```perl
    # array to hold list of divisors
    my @final = ();

    # sum of initial set of divisors
    my $target = 0;

    # Get number from user
    my $inp = prompt 'Input the number : ', -integer => [ 1 .. 999 ];
    chomp($inp);
    $inp = int($inp);

    # calculate list of divisors
    my @d = divisors($inp);

    # get divisors and their sums
    foreach(@d){
        my $val = $inp / $_;
        # skip the opposite pair (e.g. 3,4  but skip 4,3)
        next if ($val > $_);
        my $digit_sum = $val + $_;

        if($target == 0){
            $target = $digit_sum;
            push(@final,$val,$_);
        }

        if($digit_sum == ($target + 1)){
            push(@final,$val,$_);
            last;
        }
    }

    # if we have 4 divisors that meet the criteria, print
    if(scalar(@final) == 4){
        print("$final[2] x $final[3] = $final[0] x $final[1] and $final[2] + $final[3] = $final[0] + $final[1] + 1");
    } else {
        print("Not Stealthy!\n");
    }
```



[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/wlmb/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 143 – W. Luis Mochán](https://wlmb.github.io/2021/12/13/PWC143/)

Finally we have Luis with another welcome dose of the Perl Data Language. The syntax of the language extension is perlesque, but varies enough to require a little work to figure out what's happening. Fortunately Luis has commented to help us along.

We start with a sequence, which is a range from 0 up to but not including the value, which is why we use the square root + 1, to be inclusive. Then we select from that sequence using `where()`, analogous to filtering using `grep`, or a list comprehension in some languages.

We then make a new list of the Cartesian products of the filtered list, and filter that list yet again, using a variant of `where()` with a predicate mask. Then if the final filtered list has any elements left in it we have a stealthy number. Same actions, slightly different wrapper.

```perl
    use PDL;
    use PDL::NiceSlice;
    foreach my $N(@ARGV){
        my $Q=sqrt($N); # largest possible small divisor
        my $s=(sequence($Q)+1);
        my $d=$s->where($N % $s == 0); # list of divisors<=$Q
        my $c=$d->cat($d(*)); # cartesian product of divisors
        my $mask=$d+$N/$d==($d+$N/$d+1)->(*);
        # Get pairs of divisors that obey the stealthy condition
        my $d2=$c->whereND(($d+$N/$d)==($d+$N/$d+1)->(*));
        my $out=$d2->nelem?1:0;
        say "\nInput: $N Output: ", $out;
        say "since ", $_((0)),"+",$N/$_((0)),
            "==",$_((1)),"+",$N/$_((1)),"+1"
            foreach $d2->transpose->dog;
    }
```




## Blogs and Additional Submissions in Guest Languages for Task 2:

[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/arne-sommer/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/arne-sommer/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Stealthy Calculator with Raku and Perl](https://raku-musings.com/stealthy-calculator.html)


[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/dave-jacoby/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Ninja Numbers Hiding In Trees: The Weekly Challenge #143 | Committed to Memory](https://jacoby.github.io/2021/12/14/ninja-numbers-hiding-in-trees-the-weekly-challenge-143.html)


[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/james-smith/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #143](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-143/james-smith)


[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/sgreen/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/sgreen/python/ch-2.py)


&nbsp;&nbsp;**blog writeup:**
[Weekly Challenge 143](https://dev.to/simongreennet/weekly-challenge-143-36f6)


[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/ulrich-rieke/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/ulrich-rieke/haskell/ch-2.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-143/ulrich-rieke/raku/ch-2.raku)







---

# BLOGS {#PWC143BLOGS}

---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, by some miracle I somehow continue to maintain my bearings.**

**Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your Unquenchable *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC136BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *FOLLOW* these *BLOG* *LINKS*:

**( ...*don't think, trust your training, you're in the zone, just do it ...* )**


**Adam Russell**

 * [Stealthy Calculations - Perl - RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/2021/12/19/perl) ( *Perl* )
 * [Stealthy Calculations - Prolog - RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/2021/12/19/prolog) ( *Prolog* )

**Arne Sommer**

 * [Stealthy Calculator with Raku and Perl](https://raku-musings.com/stealthy-calculator.html) ( *Perl & Raku* )

**Dave Jacoby**

 * [Ninja Numbers Hiding In Trees: The Weekly Challenge #143 | Committed to Memory](https://jacoby.github.io/2021/12/14/ninja-numbers-hiding-in-trees-the-weekly-challenge-143.html) ( *Perl* )

**Flavio Poletti**

 * [PWC143 - Calculator - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/12/15/pwc143-calculator/) ( *Perl & Raku* )
 * [PWC143 - Stealthy Number](https://github.polettix.it/ETOOBUSY/2021/12/16/pwc143-stealthy-number/) ( *Perl & Raku* )

**James Smith**

 * [Perl Weekly Challenge #143](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-143/james-smith) ( *Perl* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 143: Calculator and Stealthy Numbers | laurent_r](http://blogs.perl.org/users/laurent_r/2021/12/post.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 143: stealthing the grammars! – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2021/12/13/PerlWeeklyChallenge143.html#task1) ( *Raku* )

**Mark Senn**

 * [Stealthy Number Test](https://engineering.purdue.edu/~mark/twc-143-2.pdf) ( *Raku* )

**Mohammad S Anwar**

 * [The Weekly Challenge - 143 (Task #1: Calculator) - YouTube](https://youtu.be/Ch1C1HYytdU) ( *Perl* )

**Peter Campbell Smith**

 * [Being stealthy is a fourfold property
](https://pjcs-pwc.blogspot.com/2021/12/being-stealthy-is-fourfold-property.html) ( *Perl* )

**Roger Bell_West**

 * [RogerBW's Blog: The Weekly Challenge 143: Stealthy Calculator](https://blog.firedrake.org/archive/2021/12/The_Weekly_Challenge_143__Stealthy_Calculator.html) ( *Perl & Raku* )

**Simon Green**

 * [Weekly Challenge 143](https://dev.to/simongreennet/weekly-challenge-143-36f6) ( *Perl* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 143 – W. Luis Mochán](https://wlmb.github.io/2021/12/13/PWC143/) ( *Perl* )
