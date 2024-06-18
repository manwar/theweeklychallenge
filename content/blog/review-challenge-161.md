---
author:       Colin Crain
date:         2022-05-30T00:00:00
description:  "Colin Crain › Perl Weekly Review #161"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #161"
image:        images/blog/p5-review-challenge-161.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-160/).* )

Welcome to the Perl review pages for **Week 161** of The Weekly Challenge! Here we will take the time to discuss the  submissions offered up by the team, factor out some common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

---

### ●︎ Why do we do these challenges?

I suppose any reasonable answer to that question would be from a field as wide ranging and varied as the people who choose to join the team. One thing, though, is clear: it's not a competition, and there are no judges, even if there is a "prize" of sorts. About that -- I think of it more as an honorarium periodically awarded to acknowledge the efforts we make towards this strange goal. So there's no determination to find the *fastest*, or the *shortest*, or even, in some abstract way, the *best* way to go about things, although I'm certain the participants have their own aspirations and personal drives. As Perl is such a wonderfully expressive language, this provides quite a bit of fodder to the core idea of TMTOWTDI, producing a gamut of varied techniques and solutions.

Even the tasks themselves are often open to a certain amount of discretionary interpretation. What we end up with is a situation where each participant is producing something in the manner they find the most interesting or satisfying. Some team members focus on carefully crafted complete applications, thoroughly vetting input data and handling every use case they can think up. Others choose to apply themselves to the logic of the underlying puzzle and making it work in the most elegant way they can. Some eschew modules they would ordinarily reach for, others embrace them, bringing to light wheels perhaps invented years ago that happen to exactly solve the problem in front of them today.

I've been considering this question for some time and have found one binding commonality between all of us out solving these challenges each week, in that however we normally live our lives, the task in front of us more than likely has nothing to do with any of that. And I think this has great value. We all do what we do, in the real world, and hopefully we do it well. The Weekly Challenge provides us with an opportunity to do something germane to that life yet distinctly different; if we only do the things we already know how to do then we will only do the same things over and over. This is where the "challenge" aspect comes into play.

So we can consider The Weekly Challenge as providing a problem space outside of our comfort zone, as far out from that comfort as we wish to take things. From those reaches we can gather and learn things, pick and choose and bring what we want back into our lives. Personally, I think that's what this whole thing is about. YMMV.

---

<strong><emp>Every week there is an enormous global collective effort made by the team, analyzing and creatively coding the submissions, and that effort deserves credit due.</emp></strong>

And that, my friends, is why I'm here, to try and figure out ways to do just that.

So, here we are then. I'm ready — let’s get to it and see what we can find.

---

### For Additional Context…

before we begin, you may wish to revisit either the pages for the [**original tasks**](/blog/perl-weekly-challenge-161/) or the summary [**recap**](/blog/recap-challenge-161/) of the challenge. But don't worry about it, the challenge text will be repeated and presented as we progress from task to task.

Oh, and one more thing before we get started:


### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please feel free to email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

<div align= center><strong>...So finally, without further ado...</strong></div>

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC161TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC161TASK2)   &nbsp;  &nbsp;  &nbsp;   	•   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC161BLOGS)    &nbsp;  &nbsp;  &nbsp;   	•

---

# TASK 1 {#PWC161TASK1}

# Abecedarian Words
*Submitted by: Ryan J Thompson*

An abecedarian word is a word whose letters are arranged in alphabetical order. For example, “knotty” is an abecedarian word, but “knots” is not. Output or return a list of all abecedarian words in the dictionary, sorted in decreasing order of length.

https://github.com/manwar/perlweeklychallenge-club
  /blob/master/data/dictionary.txt

Optionally, using only abecedarian words, leave a short comment in your code to make your reviewer smile.


## about the solutions
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/adam-russell/perl/ch-1.pl),
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/alexander-pankoff/perl/ch-1.pl),
[**Andrezgz**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/andrezgz/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/athanasius/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/cheok-yin-fung/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/colin-crain/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/dave-jacoby/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/polettix/perl/ch-1.pl),
[**Ildar Shaimordanov**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/ildar-shaimordanov/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/jaldhar-h-vyas/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/jo-37/perl/ch-1.pl),
[**Julien Fiegehenn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/julien-fiegehenn/perl/ch-1.pl),
[**Kueppo Wesley**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/kueppo-wesley/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/laurent-rosenfeld/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/lubos-kolouch/perl/ch-1.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/mattneleigh/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/mohammad-anwar/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/perlboy1967/perl/ch-1.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/paulo-custodio/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/pete-houston/perl/ch-1.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/peter-campbell-smith/perl/ch-1.pl),
[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/pokgopun/perl/ch-1.pl),
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/robert-dicicco/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/roger-bell-west/perl/ch-1.pl),
[**Ryan Thompson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/ryan-thompson/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/ulrich-rieke/perl/ch-1.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/wlmb/perl/ch-1.pl)

This opening task from the fertile mind of Ryan Thompson has all the makings of a top-notch thriller — intrigue, suspense, a twist and even a bumper nod to the producers  in the closing credits.

The core logic is to decide whether the letters in a word are ordered lexicographically — that is to say they are in ascending alphabetic order.

But wait! There's more! Thing is, there's a specific word list used to search. Which is all well and good, but the word list is on the web! Another obstacle in the path of our intrepid heroes.

After the denouement, resulting in a list of select words, there is a suggestion in passing to assemble them in a manner pleasing to yours truly. Considering my unusual sense of humor and deep love of wordplay I doubt this would be a particularly difficult task, should one wish to follow this tortuous scheme to its inevitable, logical end.

As usual, there was variable compliance with requirements of the task as written. Such is life. If there's one thing I have learned, it's that you can't control people. Guide them, bribe then, scold them or beat them with a koan stick — they will do what they do, and it's best to let that happen and hope it works out for you. If you stay flexible and  adaptable you can probably find a way out.

There were 30 submissions for the first task this past week.

## an AFFLUX of LOOPS
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/alexander-pankoff/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/lubos-kolouch/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/jo-37/perl/ch-1.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/adam-russell/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/e-choroba/perl/ch-1.pl),
[**Ildar Shaimordanov**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/ildar-shaimordanov/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/james-smith/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/colin-crain/perl/ch-1.pl), and
[**Ryan Thompson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/ryan-thompson/perl/ch-1.pl)


The varieties of solutions we saw were wide-ranging. As it turns out there are quite a few ways to compare adjacent characters in a string. But that remained the central action no matter the specific method — iterating across the word in some manner examining pairs and looking for any that are out-of-order.

[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/alexander-pankoff/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/alexander-pankoff/haskell/ch-1.hs)

It is a time-tested theatrical tradition to take complex real-world aspects of the story that in themselves don't relate directly to the plot and have that action occur off-camera. It's not super important *how* it happens, just that it *does*, and once we know that we can move on and stay focused on the drama of the moment.

Alexander parks his `real_dict()` routine off in a module of its own, returning an array of dictionary words. Which is the important part here.

The plot, if you will, is to filter this list for only the abecedarian words. To accomplish this he splits each word into a list of characters and sorts them before rejoining them. If the sorted word is identical to the original, it was ordered to begin with and hence abecedarian.

```perl
    sub run() {
        my @dict = read_dict();

        # filter abecedarian words and group them by length.
        my $abecedarian_by_length = group_by( sub($a) { return length $a },
            grep( is_abecedarian($_), @dict ) );

        # output them sorted by length (shortest first). Since the input dict is
        # sorted lexically, all words of them same length will be output in lexical
        # order as well.
        say
          for map { @{ $abecedarian_by_length->{$_} } }
          sort    { $a <=> $b } keys %{$abecedarian_by_length};
    }

    sub is_abecedarian($word) {

        # To find out if a word is abecedarian we sort it lexically and compare to
        # the input words.
        return join( '', sort ( split( //, $word ) ) ) eq $word;
    }
```

[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/lubos-kolouch/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/lubos-kolouch/python/ch-1.py)

Splitting and sorting proved to be a common choice for constructing a filter.

```perl
    sub is_abcd {
        my $what = shift;

        return $what eq join( '', sort( split //, $what ) );
    }

    open my $file, '<', 'dictionary.txt';

    while (<$file>) {
        chomp;

        print "$_ is abcdrian \n" if is_abcd($_);
    }
    close $file;
```

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/adam-russell/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Java](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/adam-russell/java/ch-1.java), [Prolog](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/adam-russell/prolog/ch-1.p)


&nbsp;&nbsp;**blog writeup:**
[RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2022/04/24/)

&nbsp;&nbsp;**blog writeup:**
[RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/prolog/2022/04/24/)

Lubos' code, above, gets the abecedarian part done, but seems to have blazed right past the requirement to present the results in decreasing order of length. Oh well. I *should* fail this, but...

On the other hand he brought me a present, so I'll look the other way on the matter and move on.

Adam, rigorous logician that he is, satisfies this requirement by creating an anonymous array for each entry that passes the sorting `grep` stage, of the word and its length. This is then used for a second sorting by size. Although string length is a a simple lookup of a known parameter in the Perl string data structure, doing things this way avoids repeated function calls during the sorting process which is *in general* a good thing. Here it certainly can't hurt, right

Ok, maybe a little bit. A teensy-tiny bit.

Some may noice the way word "logician" rhymes with "magician". I conject that this is not coincidence.

Here's the code — I added a few linefeeds for clarity:

```perl
    sub abecedarian{
        sort {$b->[1] <=> $a->[1]}
        map {[$_, length($_)]}
        grep{chomp; $_ eq join("", sort {$a cmp $b} split(//, $_))} @_;
    }

    MAIN:{
        open(DICTIONARY, "./dictionary.txt");
        for my $abc (abecedarian(<DICTIONARY>)){
            print $abc->[0] . " length: " . $abc->[1] . "\n";
        }
        close(DICTIONARY);
    }
```

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/jo-37/perl/ch-1.pl)

After breaking his word up into characters, Jorg processes is in a single pass with a clever `reduce` block, using the list-wise primitive function borrowed from `Lst::Util`.

The way it works is works is after assigning `$a` to the first value, successive list elements are slotted into `$b`, and the result of the block used to update `$a` for the next iteration. The ternary conditional is composed itself of two parts, the first that `a` is true, then that `$a` is less than or equal to `$b` using string comparison. The results are the new character `$b` if true, or a null string if false.

Thus on the first false result the null string becomes `$a` and no further result can ever be true. So we end up looking at pairs of successive characters, and the result goes to null if any are out-of-place.

```perl
    say for sort {length($b) <=> length($a) || $a cmp $b} gather {
        while (<>) {
            chomp;
            take $_ if reduce {$a && $a le $b ? $b : ''} split //;
        }
    };
```

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/e-choroba/perl/ch-1.pl)

Choroba, apparently not wishing to repeat his solution for PWC111-2, has come up with a new elaborate method using a carefully constructed regex to perform his filtering.

The regex in question matches any letter followed by any letter that alphabetically precedes it. How is this done? By having the code write the code, of course. The final regex is, shall we say, *non trivial*:

```perl
    (?:b[a])|(?:c[ab])|(?:d[abc])|(?:e[abcd])|(?:f[abcde])|(?:g[abcdef])|(?:h[abcdefg])|(?:i[abcdefgh])|(?:j[abcdefghi])|(?:k[abcdefghij])|(?:l[abcdefghijk])|(?:m[abcdefghijkl])|(?:n[abcdefghijklm])|(?:o[abcdefghijklmn])|(?:p[abcdefghijklmno])|(?:q[abcdefghijklmnop])|(?:r[abcdefghijklmnopq])|(?:s[abcdefghijklmnopqr])|(?:t[abcdefghijklmnopqrs])|(?:u[abcdefghijklmnopqrst])|(?:v[abcdefghijklmnopqrstu])|(?:w[abcdefghijklmnopqrstuv])|(?:x[abcdefghijklmnopqrstuvw])|(?:y[abcdefghijklmnopqrstuvwx])|(?:z[abcdefghijklmnopqrstuvwxy])
```

And how is that made? Let's consult the first lines of the script:

```perl
    my @disordered;
    my $previous = 'a';
    for my $char ('b' .. 'z') {
        push @disordered, "$char" . '[' . join("", 'a' .. $previous) . ']';
        $previous = $char;
    }

    my $disordered = join '|', map "(?:$_)", @disordered;
```

So an abecedarian word is one that does *not* match the regex. Simple, as long as we don't directly need to write the code.

Here's the subroutine that does the procedural work, which is pretty straightforward.

```perl
    sub abecedarian_words {
        my ($dictionary) = @_;
        my @abcd;
        open my $in, '<', $dictionary or die $!;
        while (my $word = <$in>) {
            chomp $word;
            push @abcd, $word if $word !~ /$disordered/;
        }
        @abcd = sort { length $b <=> length $a } @abcd;
        return @abcd
    }
```

[**Ildar Shaimordanov**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/ildar-shaimordanov/perl/ch-1.pl)

I feel regular expressions have been under-represented so far, so here's a different version of a regex from Ildar. Its operation is a little more cryptic, but soon reveals itself after a bit of study.

First of all, it's really two substitution regexes, with first an outer working left-to-right across letters (possibly repeated) of a copy of the original word. The second works on a copy of an ordered alphabet string.

In the outer regex, a character from the word copy is matched and captured. Duplicates are matched as well, moving the position counter forward over them. But what we're interested in is the capture. This is a substitution, now, using the `/e` switch, so the second part is evaluated as an expression and the result used for a replacement.

So, in the second half — the expression — we try and perform a second substitution on out alphabet, removing all characters to the left of, up to and including the letter in question. If this succeeds we return an empty string, but if it fails we return the thing matched in the first place.

What this means is that if we can truncate the alphabet string we then replace the letter in the word copy with a null string, but if it fails we don't. In this way the word copy is whittled away, but only if successive letters still allow more deletions from the alphabet string. If that action ever fail a letter will be skipped and not removed from the word copy.

In the end we look to see whether the word copy still exists, and it becomes clear why I've been carefully repeating that the word under study is a *copy* of the original. If the word exists the statement is true and the `or` short-circuits, but if it fails we `print`, which defaults to `$_`, the original match from the dictionary, which still includes the original linefeed.

Clever, clever, clever.

```perl
    my $A = join "", "a".."z";

    while ( <> ) {
        my $a = $A;

        chomp( my $word = $_ );

        $word =~ s/(.)\1*/ $a =~ s|.*$1|| ? "" : $& /eg;

        $word or print;
    }
```



[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/james-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[The Weekly Challenge 161](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-161/james-smith)

You know, whenever I see a big "O" (for Outer, presumably) used as a block label, it always seems so surprised. Something to ponder, that.

James is a master at compressing code into tight blocks, and this presentation is no exception. The validator, in the second line, works in a loop controlled by a statement modifier: `for split //, $w`. Perhaps parentheses around the ternary conditional would help parsing, but that adds its own noise to the party.

So for each new letter in the word, we check to see its ordered above the previous, and either skip to the next word or set the previous letter to the current and check the next letter. It we survive the ordeal we write the word being tested to a hash keyed on word-length, with a array to hold the individual words under each key.


```perl
    O:while( my $f = '', chomp( my $w = <$d> // '' ) ) {
      $f gt $_ ? next O : ( $f = $_ ) for split //, $w;
      push @{$a{ length $w }}, $w;
    }

    say "$_: ", join ', ', @{$a{$_}} for sort { $a<=>$b } keys %a;
```

[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/colin-crain/perl/ch-1.pl)

Sorting the *whole* word, you know, can be quite wasteful. I mean, if it starts with "z" there is literally no way with this dictionary for it to be abecedarian. Once we hit the first two letters of "zymurgy" we should just be out, right?

I do a couple of things here. One is I leave the dictionary where it is, using `LWP` to create the lightest of lightweight web browsers to `get` the data from the related raw data file at GitHub.

Parsing the returned file with a regular expression we pull out the word and apply a subroutine filter, adding it to an results array if it qualifies. And to qualify? In the `abc()` routine we create a maximum index within the word, then use `substr` to examine adjacent pairs of letters inside the word, working backwards from the end. By hiding the index decrement inside the statement conditional, we lower the value on `$i` by 1 at every iteration until it reaches 0, at which point the statement modifier fails.

The `substr` function is a very fast and efficient way to examine the interior components of a string, and the search short-circuits on failure, just the way we said it should.

```perl
    use LWP::Simple qw( get ) ;

    my $url = 'https://raw.githubusercontent.com/manwar/perlweeklychallenge-club/master/data/dictionary.txt';
    my $dict = get($url);

    my @abcs;
    while ( $dict =~ /(.*)\n/g ) {
            push @abcs, $1 if abc( $1 );
    }

    say for sort {  length $b <=> length $a
                        ||
                    $a cmp $b } @abcs;


    sub abc ($word, $i = 0) {
        $i = (length $word) - 1;
        substr ($word, $i, 1) lt substr ($word, --$i, 1) and return 0 while $i;
        return 1;
    }
```

[**Ryan Thompson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/ryan-thompson/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[PWC 161 › Abecedarian Words - Ryan J Thompson](https://ry.ca/2022/04/abecedarian-words/)

&nbsp;&nbsp;**blog writeup:**
[PWC 161 › Pangrams - Ryan J Thompson](https://ry.ca/2022/04/pangrams/)

As this challenge was designed by Ryan, one might expect a quality effort from his camp, and it does not disappoint, providing no less than six versions of the winnowing for comparison.

Here they are ordered by increasing speed. The four pure-Perl functions all remained within about 35% of each other from slowest to fastest, but the inline-C code, once compiled, gained first one and then a second order of magnitude over the fastest Perl function, `is_abcd_loop()`.

Notice his regex is a pretty straightforward third way to do this.

```perl
    sub is_abcd_sort   { $_ eq join '', sort split // }

    sub is_abcd_reduce { '~' ne reduce { $a gt $b ? '~' : $b } split // }

    sub is_abcd_regex  { /^a*b*c*d*e*f*g*h*i*j*k*l*m*n*
                           o*p*q*r*s*t*u*v*w*x*y*z*$/x }

    sub is_abcd_loop   {
        my $last;
        for my $ch (split //) {
            return if $last gt $ch;
            $last = $ch;
        }
        $_;
    }

    # Two different C versions, for fun

    use Inline 'C' => <<'END'
    /* This does the actual checking, used by the next two functions */
    int __is_abcd(unsigned char *s) {
        unsigned char last = 0;
        for (unsigned char *p = s; *p; last = *p, p++ )
            if (last > *p)
                return 0;

        return 1;
    }

    /* Boolean, works on $_ */
    int is_abcd_inline() {
        SV *var = get_sv("_", GV_ADD);
        unsigned char *s = SvPVutf8_nolen(var);

        return __is_abcd(s);
    }

    /* Process the entire list */
    void abcd_words(SV *word, ...) {
        Inline_Stack_Vars;

        Inline_Stack_Reset;
        for (int i = 0; i < Inline_Stack_Items; i++) {
            if (__is_abcd(SvPV(Inline_Stack_Item(i), PL_na)))
                Inline_Stack_Push(Inline_Stack_Item(i));
        }
        Inline_Stack_Done;
    }
    END
    ;

```


## LINTY FLOSSY AIRS

Being a collection of snippets members collected for my amusement, in no particular order. I may have missed some, and for that I will apologize and thank all the creators in advance.

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/wlmb/perl/ch-1.pl)

&nbsp;&nbsp; Lost chimp, deer in hill, forty chilly beers below. Mossy empty box in first floor, beg him for best gin, add a berry, cry...

[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/lubos-kolouch/perl/ch-1.pl)

&nbsp;&nbsp; Glory for best belly boy!

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/james-smith/perl/ch-1.pl)

&nbsp;&nbsp; Accept it - best film is "Hot Fuzz".

&nbsp;&nbsp; Glory begins for forty deft aces!

[**Ryan Thompson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/ryan-thompson/perl/ch-1.pl)

&nbsp;&nbsp; Most DOS floppy bit errs abort boot.

&nbsp;&nbsp; Best bet for a fix now is to beg for a copy of my floppy!

&nbsp;&nbsp; Or, go for almost any beer or gin. Any buzz, not choosy.

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/roger-bell-west/perl/ch-1.pl)

&nbsp;&nbsp; I do not pry: a chin hit is not a dirty blow, bell or not.

[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/peter-campbell-smith/perl/ch-1.pl)

&nbsp;&nbsp; Oh no, a bent hoop, a gory bus, a dirty floor, all beg for deep effort.

[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/robert-dicicco/perl/ch-1.pl)

&nbsp;&nbsp; Bees bellow in bop cellos!

[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/perlboy1967/perl/ch-1.pl)

&nbsp;&nbsp; A hot dirty messy hippy chills at empty glossy films.

[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/jaldhar-h-vyas/perl/ch-1.pl)

&nbsp;&nbsp; Boy abhors forty cent eggs; cost is crux. Cops chip in, buy a box for him.

&nbsp;&nbsp; Hippy most ably aces dirty cello ditty.  Accept or boo?

[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/duncan-c-white/perl/ch-1.pl)

(a pun on a lyric from Roxy Music, *Jealous Guy*)


&nbsp;&nbsp; "I am not a cellos guy"

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/dave-jacoby/perl/ch-1.pl)

&nbsp;&nbsp; Accept chintz effort.

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/athanasius/perl/ch-1.pl)

&nbsp;&nbsp; An abbot in an abbey abhors a bossy boor.

[**Andrezgz**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/andrezgz/perl/ch-1.pl)

&nbsp;&nbsp; As loops allow flow, it aims no glory at all, fizz-buzz is my joy.




## Blogs and Additional Submissions in Guest Languages for Task 1:


[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/athanasius/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/athanasius/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Pangram challenge: greed and Scrabble](https://www.perlmonks.com/index.pl?node_id=11143246)

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/dave-jacoby/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[The Lazy Dog Had It Coming: Weekly Challege #161 | Committed to Memory](https://jacoby.github.io/2022/04/18/the-lazy-dog-had-it-coming-weekly-challege-161.html)


[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/duncan-c-white/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/duncan-c-white/C/ch-1.c)


[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/polettix/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/polettix/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC161 - Abecedarian Words - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/04/19/pwc161-abecedarian-words/)

&nbsp;&nbsp;**blog writeup:**
[PWC161 - Pangrams - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/04/20/pwc161-pangrams/)


[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/jaldhar-h-vyas/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/jaldhar-h-vyas/raku/ch-1.raku)


[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/laurent-rosenfeld/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/laurent-rosenfeld/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 161: Abecedarian Words and Pangrams](http://blogs.perl.org/users/laurent_r/2022/04/perl-weekly-challenge-161-abecedarian-words-and-pangrams.html)


[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/paulo-custodio/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/paulo-custodio/python/ch-1.py)


[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/peter-campbell-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Abecedarian words and pangrams](https://pjcs-pwc.blogspot.com/2022/04/abecedarian-words-and-pangrams.html)


[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/pokgopun/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/pokgopun/go/ch-1.go)


[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/roger-bell-west/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/roger-bell-west/javascript/ch-1.js), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/roger-bell-west/kotlin/ch-1.kt), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/roger-bell-west/lua/ch-1.lua), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/roger-bell-west/postscript/ch-1.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/roger-bell-west/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/roger-bell-west/raku/ch-1.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/roger-bell-west/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/roger-bell-west/rust/ch-1.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: The Weekly Challenge 161: Words and More Words](https://blog.firedrake.org/archive/2022/04/The_Weekly_Challenge_161__Words_and_More_Words.html)


[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/ulrich-rieke/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/ulrich-rieke/cpp/ch-1.cpp), [Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/ulrich-rieke/haskell/ch-1.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/ulrich-rieke/raku/ch-1.raku)


[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/wlmb/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 161 – W. Luis Mochán](https://wlmb.github.io/2022/04/18/PWC161/)


------------------------------------------





---

# TASK 2 {#PWC161TASK2}

# Pangrams
*Submitted by: Ryan J Thompson*

A pangram is a sentence or phrase that uses every letter in the English alphabet at least once. For example, perhaps the most well known pangram is:

the quick brown fox jumps over the lazy dog Using the provided dictionary, so that you don’t need to include individual copy, generate at least one pangram.

Your pangram does not have to be a syntactically valid English sentence (doing so would require far more work, and a dictionary of nouns, verbs, adjectives, adverbs, and conjunctions). Also note that repeated letters, and even repeated words, are permitted.

BONUS: Constrain or optimize for something interesting (completely up to you), such as: Shortest possible pangram (difficult) Pangram which contains only abecedarian words (see challenge 1) Pangram such that each word "solves" exactly one new letter. For example, such a pangram might begin with (newly solved letters in bold):

    a ah hi hid die ice tea ...

What is the longest possible pangram generated with this method? (All solutions will contain 26 words, so focus on the letter count.)

Pangrams that have the weirdest (PG-13) Google image search results Anything interesting goes!

## about the solutions
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/adam-russell/perl/ch-2.pl),
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/alexander-pankoff/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/athanasius/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/cheok-yin-fung/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/dave-jacoby/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/polettix/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/james-smith/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/jo-37/perl/ch-2.pl),
[**Julien Fiegehenn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/julien-fiegehenn/perl/ch-2.pl),
[**Kueppo Wesley**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/kueppo-wesley/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/laurent-rosenfeld/perl/ch-2.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/lubos-kolouch/perl/ch-2.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/paulo-custodio/perl/ch-2.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/peter-campbell-smith/perl/ch-2.pl),
[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/pokgopun/perl/ch-2.pl),
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/robert-dicicco/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/roger-bell-west/perl/ch-2.pl),
[**Ryan Thompson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/ryan-thompson/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/ulrich-rieke/perl/ch-2.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/wlmb/perl/ch-2.pl)

In the first challenge we had a very linear, direct validation: that each successive letter should be further along in the alphabet than the previous. The actual ways to produce this validation varied, but at the root of all was comparing letters one against another.

In the pangram challenge things are much less well defined. We need a collection of words that include at least one instance of every letter in the alphabet. That's it, no rules on how many words are required to get there, but A to Z we need them all accounted for. How we get there is anyone's guess.

Oh, and we're supposed to use the limited dictionary again. It has only about one-tenth of the English language in it so does that make the challenge easier or harder? Easier, presumably as the requirements do not include coherency. Sounds like some people I've known along the way, you know?

Although the base challenge is limited in its requirements to the one, members were also encouraged to add their own ideas to spice things up, so from the opening gambit the solutions spread out quickly and wildly.

There were 22 submissions for the second task this past week.

## A DORKY PROJECT IS MAYBE A VEXING QUIZ WELL FOUGHT

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/wlmb/perl/ch-2.pl),
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/robert-dicicco/perl/ch-2.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/paulo-custodio/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/duncan-c-white/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/ulrich-rieke/perl/ch-2.pl),
[**Julien Fiegehenn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/julien-fiegehenn/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/athanasius/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/cheok-yin-fung/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/polettix/perl/ch-2.pl), and
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/adam-russell/perl/ch-2.pl)


The open-ended, almost sandbox definition of this challenge led to again a wide range of strategies to complete the mission. Many searched for the shortest pangram they could generate, but the challenge could also be theoretically completed by printing the dictionary — a method no one pursued, thankfully. I always enjoy these reviews more when people put some effort into it. Unless the lack of effort is artful in itself, of course.

There really aren't any fixed rules, you know. Especially so in a task such as this.


[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/wlmb/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 161 – W. Luis Mochán](https://wlmb.github.io/2022/04/18/PWC161/)

Luis will start us off with a particularly scattershot approach. Once fed a dictionary through STDIN, the program takes the word-list and prepares a master lookup hash of letters associated with every word containing the letter. A separate array is constructed of all the letters in the alphabet and and hash is readied to hold the letters found in the pargram under construction.

Now the randomness is injected. The alphabet is shuffled and the first letter found that isn't already accounted for in the pangram is selected. The shuffling is the first randomization. Then from the associated list of words containing the missing letter one word is chosen by luck of the draw. That's the second random act. The word is added to the pangram string and each letter is added to the hash of letters in the pangram.

By continuously updating the pool of letters not-yet found (the alphabet minus those letters already used), the resulting pangram is not optimal length but is nonetheless fairly efficient.

```perl
    my @dictionary=map {chomp; $_} <>; # read the dictionary
    my @abecedarian=grep {$_ eq join "", sort {$a cmp $b} split "", $_} @dictionary;
    my %words_with; # maps letters to words containing them
    for my $word(@abecedarian){
        push @{$words_with{$_}},$word for uniq split "", $word;
    }
    my %letters;
    my $pangram;
    my @all_letters='a'..'z';
    while(notall {$letters{$_}} @all_letters){
        my $letter=first {!$letters{$_}} shuffle @all_letters; # random missing letter
        my @possible_words=@{$words_with{$letter}}; # words containing letter
        my $word=$possible_words[rand @possible_words]; # choose a random one
        $pangram.=" ".$word; # add to output phrase
        ++$letters{$_} for split "", $word; # update used letters
    }
    say $pangram;
```

Note that because the algorithm works on a given word list, Luis has, in his final version here, further filtered that list to only abecedarian words, producing an abecedarian pangram. Fortunately all the letters in the alphabet are contained in this subset.

[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/robert-dicicco/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/robert-dicicco/raku/ch-2.raku)

Robert takes the randomness further, reading random lines from the input file and hashing the letters found until all 26 letters have been found.

An interesting twist is Robest's scheme for noting when to add a selected word to the pangram. Words, as we said, are selected at random and their letters noted, but with the use of a second hash of letter-count sizes he can keep track of those words that increase the number of letters found. Only if this increase happens do we add the word to the pangram. It's a slick trick.



```perl
    sub ReadRandomLine {

      open(FH ,'<', $file)  or die $!;

      my $size = -s FH;
      seek FH, rand($size) , 0;
      <FH>; # throw away current line;

      my $randomline = <FH>;

      if($randomline){
        $randomline =~ s/^\s+|\s+$//g;   # trim left and right
        return($randomline);
        close FH;
      }

      close FH;
    }

    while(1) {

      my $new = ReadRandomLine();
      if($new){
        analyze($new);
      }

      my $size = keys %alphabet;          # how many letters we have used

      if (! exists($lettercnt{$size})) {
        $lettercnt{$size} = 1;
        print "$new ";
      }

      last if( $size == 26 );      # we have them all
    }
```

[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/paulo-custodio/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/paulo-custodio/python/ch-2.py)

Paulo wants to make every word count, and so adopts a strategy of scanning the entire input word list with each new word added to the pangram, to find the next word composed of the maximum number of unused letters.

Instead of building a letter list he choses a subtractive approach, where a hash is populated by the entire alphabet as keys, and letters are deleted from hash as they are used. When the letter hash is empty we are done.

This technique produces spectacular results when fed from `/usr/share/dict/words`:

```
    blepharoconjunctivitis semioxygenized afterknowledge absquatulate
```

Of these I am not familiar with what is obviously an eye disease, and as for "absquatulate" it seems it's a portmanteau of "squattle" and "perambulate" that means "to leave abruptly". But four words is nice!

```perl
    while (keys %pending) {
        my $word = next_word(\%pending);
        push @words, $word;
        for (split //, $word) { delete $pending{$_}; }
    }
    say "@words";

    sub next_word {
        my($pending) = @_;

        my $max_word;
        my $max_letters = 0;
        for my $word (@dict) {
            # get new letters
            my %letters;
            for (split //, $word) {
                if ($pending->{$_}) {
                    $letters{$_}=1;
                }
            }
            # save max letters
            my $letters = scalar(keys %letters);
            if ($letters > $max_letters) {
                ($max_word, $max_letters) = ($word, $letters);
            }
        }

        return $max_word;
    }
```

[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/duncan-c-white/perl/ch-2.pl)

Duncan refines this minimal approach further in his second stab at a solution, not just finding the next word utilizing the most unused letters but also finding the shortest such word available. Given several otherwise equal options the final selection is random.

This strategy, I might add, is considerably more computationally intensive, doing quite a bit of sorting and resorting.

It is also sometimes quite effective, producing the following 43-letter pangram from `usr/share/dict/words`:


```perl
    blepharoconjunctivitis demark frowzy quag x
```

I do question whether the single letter "x" counts as a proper word, but I do notice it's in Ryan's dictionary as well. Why is another question.

Let's say I remain skeptical.

If single letters without proper definitions — this is excepting "I" and "a" — can be words, can't we just cheat and make a 26-letter pangram out of the individual letters of the alphabet? Scrabble does not accept x as a word, but that's a sophisticated game with its own requirements of gameplay.

I reject the premise that everything in the dictionary is a word, using a variant of Gödel's reasoning: you need letters to construct words, and so they require definition and belong in the dictionary, but they themselves are not words (unless they happen to be, of course). They exist as true statements yet outside of the system.

Bertrand Russell might physically attack me for that logic, I don't know, but let's move on.

Duncan is using `Function::Parameters` which gives him `fun` statements with signatures replacing `sub`.

```perl
    fun pick_random_word2( $ustr )
    {
        my @lp = map { [ nunused($_,$ustr), $_ ] } @dict;
        #die Dumper \@lp;

        # find max(number_unused_letters) in list of pairs
        my $maxul = max( map { $_->[0] } @lp );

        #die "maxul = $maxul";

        # now select all words with $maxul unused letters in them
        my @wm = map { $_->[1] } grep { $_->[0] == $maxul } @lp;

        #die Dumper \@wm;

        # now select the shortest of those
        my $minlen = min( map { length($_) } @wm );
        @wm = grep { length($_) == $minlen } @wm;

        #die Dumper \@wm;

        # pick a random one of those words
        my $randomword = $wm[int rand @wm];
        say "picked random word $randomword with $maxul unused letters" if $debug;
        return $randomword;
    }
```

[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/ulrich-rieke/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/ulrich-rieke/cpp/ch-2.cpp), [Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/ulrich-rieke/haskell/ch-2.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/ulrich-rieke/raku/ch-2.raku)

Ulrich brings us a less-random, system approach to filling out the alphabet: work from letter-to-letter and choose the shortest word available. Using words from 1 to 2 letters in length, he completes a pangram in 55 characters:

```
    If each word solves one letter and contains every letter only once ,
     a possible short solution is:
    a,be,cs,do,eh,fad,go,ha,id,jab,keg,lab,m,no,of,pa,qt,re,so,to,up,vi,we,x,yak,zip
    the total length of this pangram would be 55!
```

Here's his method:

```perl
    sub isOneLetterWord {
      my $word = shift ;
      my %letters ;
      for my $letter( split ( // , $word ) ) {
          $letters{$letter}++ ;
      }
      return all { $_ == 1 } values %letters ;
    }

    my $file = "dictionary.txt" ;
    my @oneLetterWords ;
    open( FH , "< $file") or die "Can't open $file!\n" ;
    while ( my $line = <FH> ) {
      chomp $line ;
      if ( isOneLetterWord( $line ) ) {
          push @oneLetterWords, $line ;
      }
    }
    close( FH ) ;
    my %letterFrequencies ;
    my @possibleSolutionShort ;
    my @possibleSolutionLong ;
    for my $letter( 'a' .. 'z') {
      my @sorted = sort { length $a <=> length $b } grep { $_ =~ /\A$letter/ }
        @oneLetterWords ;
        push @possibleSolutionShort , $sorted[0] ;
        push @possibleSolutionLong , $sorted[-1] ;
    }
```



[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/athanasius/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/athanasius/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Pangram challenge: greed and Scrabble](https://www.perlmonks.com/index.pl?node_id=11143246)

The monk Athanasius delivers first a version of what they refer to as "the greedy algorithm", which is to successively select words to maximize the use of remaining letters in the alphabet pool, and minimizing the length of the word given equivalent choices. We've seen versions of this approach before but not yet by name.

The process gives good results, in the 40-50 character range, but this reasonable success left them unsatisfied.

The monk, deft at the wheel, pressed on.

One so-far overlooked quality in these algorithms is letter frequency, where words with xs and zs are much less common, so any word sought out to utilize them will likely contain duplicate letters to those already seen. To mitigate this inefficiency, they create a scheme to draw on Scrabble game tile values, assigning increasing values to infrequent letters. This allows the computation of a weighted comparative total. When this value is used first in word selection, the phrase length decreases dramatically.

```
    Challenge 161, Task #2: Pangrams (Perl)

    (1) sympathized: a d e h i m p s t y z
    (2) unblock:     b c k l n o u
    (3) xv:          v x
    (4) jaw:         j w
    (5) qt:          q
    (6) frog:        f g r

    Pangram of 29 letters using words drawn from dictionary.txt:

      sympathized unblock xv jaw qt frog

    1.89 seconds
```

The whole structure is quite well thought out; a real piece of art. You should consult [their blog writeup](https://www.perlmonks.com/index.pl?node_id=11143246) for a proper walkthrough.

```perl
    sub get_next_word
    {
        state  $word_count = 0                                          if VERBOSE;
        my     @sorted     = sort by_size keys %Word2letters;
        scalar @sorted         or  die 'No words left, stopped';

        my     $best_word  = $sorted[ 0 ];

        $Word2letters{ $best_word }[ 0 ]->is_empty
                               and die 'The best word has no new letters, stopped';

        my     $best_letters = $Word2letters{ $best_word }[ 0 ];
        state  $width        = length( $best_word ) + 1                 if VERBOSE;

        printf "(%d) %-*s", ++$word_count, $width, "$best_word:"        if VERBOSE;

        delete $Word2letters{ $best_word };

        for my $word (keys %Word2letters)
        {
            my $letters = $Word2letters{ $word }[ 0 ]->difference( $best_letters );
            my $weight  = 0;
               $weight += $ALPHABET{ $_ } for $letters->elements;

            for (split '', $word)
            {
               $weight -= $DUP_WEIGHT unless $letters->contains( $_ );
            }

            $Word2letters{ $word } = [ $letters, $weight ];
        }

        return ($best_word, $best_letters);
    }

    sub by_size
    {
        # - First, prefer words with the greatest weight;
        # - then prefer words with the greatest number of unused letters;
        # - then prefer shorter words;
        # - then sort alphabetically (ascending)

        return $Word2letters{ $b }[ 1 ] <=> $Word2letters{ $a }[ 1 ]
                                        ||
         $Word2letters{ $b }[ 0 ]->size <=> $Word2letters{ $a }[ 0 ]->size
                                        ||
                              length $a <=> length $b
                                        ||
                                     $a cmp $b;
    }

```

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/cheok-yin-fung/perl/ch-2.pl)

CY took it upon herself to solve the optional problem of adding exactly one new letter per word, which is an interesting task. We are now looking for a list of 26 words, each successively selected from a growing pool of candidate characters.

As the pool of letter choices available increases with each word added, and there being no penalty for length, the word length will generally grow as more words are added.

To start, without a letter pool at all, the first selection is limited to single-letter words: "a" or "I". On the other hand, we're dealing with Ryan's freaky word list here so the real choices are "a", "m" and "x", and individual self-direction seems to be off the table if one subscribes to the [Sapir–Whorf hypothesis](https://en.wikipedia.org/wiki/Linguistic_relativity) in some form. (to wit: there is no "I").

In any case she simplifies initial selection by using the starting 4-word pattern "a ah hi hid" from the example text. As you can see we are adding the letters "a", "h", "i" and "d" to the pool with each new word.

From here a random element is introduced, shuffling the wordlist and selecting the first candidate that satisfies the condition that exactly one new letter is used. The progress continues until we have all 26 letters.

```perl
    sub next_pan {
        my $new_word;
        my $fine = 0;
        for my $w (shuffle (@words)) {
            if ((scalar grep { !$found_alphabet{$_} } split "", $w) == 1) {
                $new_word = $w;
                $fine = 1;
                last;
            }
        }
        warn "Cannot find new words\n" if !$fine;
        return $new_word if $fine;
    }
```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/polettix/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/polettix/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC161 - Abecedarian Words - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/04/19/pwc161-abecedarian-words/)

&nbsp;&nbsp;**blog writeup:**
[PWC161 - Pangrams - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/04/20/pwc161-pangrams/)

As previously mentioned, there are no constraints required on making out pangram short, or really in any way efficient at all in collecting letters. They just need to be there in the end. With this knowledge in hand Flavio lets his mind wander and as a result chooses his words not randomly but through the actions of a Markov chain generator, this in turn based off the conncetions in the comedic literary classic "Three Men in a Boat (To Say Nothing of the Dog)" by English author Jerome K. Jerome.

Ok, *less* random is more accurate, as the Markov chain generator is a probabilistic decision tree in the end, weighted towards some results over others, as learned from the model text. Words are noted to be followed by other words, and these connections once learned are used as a model for new sentence constructions.

It makes for a delicious and opaque wordly mess.

```
    the steady torrent and that way there softly and while he first feel as
    a little place but the feeble old wall paper yes it to go no
    restrictions whatsoever you roar wishing to fidget very bad as they
    were rats and the bridge with merely peep at the fields talking about
    pretty clear that it back of he said he said do with fishing and it he
    said he was an unusual thing in law pressing the other but we had kept
    my head or incidental damages costs and epitaphs not nearly nine tenths
    us to tell them it with all the roman walls they started back at last
    fifteen years before how many workmen the girls it far from them away
    from boyhood there none of five on to one day with laughter were going
    with forty seven of water he wished he likes to sweet smile and left
    the pink shepherds and by the very melancholy work how we settled down
    the boys that that we discovered an evident pride of hers and they had
    been looking for its chief one and prayer and crockery and black in the
    lawyers and gentlemen good two idiots a minute and said he said it
    nervous about a can sleep with the lot of compliance for the excitement
    than they answered not to die of being on about in a minute ago when
    his feet of a relation or bright light and always the sun had about it
    will not to laugh his head outside he went to get into the face was it
    was a week caused the man a good thought or as she said he not expect
    that of brandy neat nor anything had just when we hand that there was
    certainly had weighed twenty minutes wants knowledge of strong stream
    on the sight of water over on the shop twice where you bring it live
    for the work electronically the river and death to fall back into one
    night at when thinking of how to do most extraordinary fits of us if he
    should be all except of a particularly gloomy gates creak and the
    exertion of the ground beneath you come and returned and took
    everything and reading the boat there we were going over the proprietor
    of that do a patent liver that comes to have said what had been done
    without breaking them and talking about it and they were not creak and
    you keep pace by the young men and rugs and the evening to live here
    sir replied beginning and played himself with the boat by people used
    these parts you have his head ached so that person with him quite
    nervous state of them to wake seven he would slip off with toothache
    and hindering it well and we therefore in the nearest wax works may
    well again until we were fighting as a dream of the project innocents
    authority kenneling crispy gladdened impresses pills does not quite
    absorbed in the gates of the appearance after breakfast to bring them
    and that is not a jerk out of squires around us then handed over and a
    chance of those three other by a lot of that it to feel that day summer
    morning then they got the engine driver and after supper we could not
    try when they are able to those new guinea where we could not had
    directed they do come come and as we had a fashionable and noble
    resolve our then virtue and brought them a huge wave comes down to pity
    said he is passed and he had heard such like a nice quiet moonlight
    hour the difference and tries to show for supper we prize
```

Note the presence of uncommon character "z" in the last word, filling the pangram. It just took that long to get there.

```perl
    sub random_word_draw ($weighted_candidates) {
       my $total = sum values $weighted_candidates->%*;
       my $draw = rand $total; # definitely space for improvement...
       for my $word (keys $weighted_candidates->%*) {
          $draw -= $weighted_candidates->{$word};
          return $word if $draw < 0;
       }
       die "unreached, hopefully\n";
    }

    sub read_dictionary ($filename) {
       open my $fh, '<:encoding(utf-8)', $filename or die "open(): $!\n";
       return { map {chomp; $_ => 1} readline $fh };
    }

    sub get_stuff ($url) {
       my $response = HTTP::Tiny->new->get($url);
       die "$response->{status} $response->{reason}\n"
          unless $response->{success};
       return $response->{content};
    }

    sub markov_model ($text, $dictionary) {
       my $previous = undef;
       my %successors_for;
       for my $word (split m{[^a-z]+}mxs, lc $text) {
          if ($dictionary->{$word}) {
             $successors_for{$previous}{$word}++ if defined $previous;
             $previous = $word;
          }
          else {
             $previous = undef; # restart
          }
       }
       return \%successors_for;
    }
```

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/adam-russell/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Are Abecedarians from Abecedaria? - Perl - RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2022/04/24/)

&nbsp;&nbsp;**blog writeup:**
[Are Abecedarians from Abecedaria? - Prolog - RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/prolog/2022/04/24/)

This venturing into the territory of not so much focusing on the words selected but rather how they relate to each other opens up a new area of complexity to the problem, as open-ended as language itself.

Such is the inherent nature of natural language programming. As soon as we start letting the computer decide what to say things get weird quickly.

Flavio's Markov chain generator relates words on how they have been previously used and matches them in similar ways. An alternate path is to somehow identify words as parts of sentences: nouns, verbs, adjectives or adverbs, or any of a number of connectives and declaritives. Then we could assemble sentences based on a subject-verb-object structure. Or to get a pangram, perhaps something more complicated, with some adjectives, to get some more words in.

This is where the module `Lingua::EN::Tagger` comes into play, indentifying and slotting words into their correct categories, or at least that's how it's supposed to work.

Constructing actual grammatical sentences is complex. It involves matching quantities to verb conjugation and adjective forms, with many other fittings and rules to abide by to get everything just right. But word-tagging is a good start.

Natural Language Programming code becomes basically as complex as you can make it, chasing down these endless hairy edges, but the results can be impresive. Adam has constructed a pangram sentence machine built around these principles, using the aforementioned module for tagging. Here is one such result, only editorially modified by the addition of a single "s", a capital letter and a period.

```
    Some unjust narrowness modernizes every audible expenditure or half conflicting quirk.
```

Neat, huh?

```perl
    use Lingua::EN::Tagger;

    sub pangram{
        my %tagged_words;
        my $tagger = new Lingua::EN::Tagger;
        for my $word (@_){
            chomp($word);
            my $tagged_text = $tagger->add_tags($word);
            $tagged_text =~ m/<([a-z]*)>([a-z]*<)/;
            my $tag = $1;
            if($tagged_words{$tag}){
                push @{$tagged_words{$tag}}, $word;
            }
            else{
                $tagged_words{$tag} = [$word];
            }
        }
        ##
        # generate sentences from random words in a (somewhat) grammatical way
        ##
        my $sentence;
        my @dets = @{$tagged_words{det}};
        my @adjs = @{$tagged_words{jj}};
        my @nouns = @{$tagged_words{nn}};
        my @verbs = @{$tagged_words{vb}};
        my @cons = @{$tagged_words{cc}};
        my @adverbs = @{$tagged_words{vb}};
        do{
            my $det0 = $dets[rand @dets];
            my $adj0 = $adjs[rand @adjs];
            my $noun = $nouns[rand @nouns];
            my $verb = $verbs[rand @verbs];
            my $det1 = $dets[rand @dets];
            my $adj1 = $adjs[rand @adjs];
            my $object0 = $nouns[rand @nouns];
            my $conj = $cons[rand @cons];
            my $det2 = $dets[rand @dets];
            my $adj2 = $adjs[rand @adjs];
            my $object1 = $nouns[rand @nouns];
            my $adverb = $adverbs[rand @adverbs];
            my %h;
            for my $c (split(//, "$det0$adj0$noun$verb$det1$adj1$object0$conj$det2$adj2$object1")){
                $h{$c} = undef;
            }
            $sentence = "$det0 $adj0 $noun $verb $det1 $adj1 $object0 $conj $det2 $adj2 $object1" if keys %h == 26;
        }while(!$sentence);
        return $sentence;
    }

    MAIN:{
        open(DICTIONARY, "./dictionary.txt");
        print pangram(<DICTIONARY>) . "\n";
        close(DICTIONARY);
    }
```

[**Julien Fiegehenn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/julien-fiegehenn/perl/ch-2.pl)

Finally, Julien gives us two submissions today — and I almost missed the second one, but it's a doozy.

The first is pretty basic: with the deft use of `notall` from `List::Util`, Julien picks words at random from the dictionary, skipping over any that don't add to a growing pool of letters already used.

This really cuts to the core of the problem of identifying words that grow the pangram effectively. It's not very optimized, true, but that was not a requirement, and `List::Util` can always be assumed to be there waiting for us in the core distribution.

```perl
    use List::Util 1.33 qw/shuffle notall/;

    my @dictionary
      = do { open my $fh, '<', './dictionary.txt' or die $!; <$fh>; };
    chomp @dictionary;

    my %letters_seen;
    my @sentence;
    for my $word (shuffle @dictionary) {
      my @letters = split //, $word;
      next unless notall { exists $letters_seen{$_} } @letters;
      push @sentence, $word;
      $letters_seen{$_}++ for @letters;
      last if keys %letters_seen == 26;
    }

    say join ' ', @sentence;
```

The second method, on the other hand, searches for word collections that are pangrams in English, and when translated into German remain pangrams in that alphabet.

Ok. We're just going to go with this.

It uses a deep-learning translation module, first finding English pangrams and then translating them, and repeating this process until a set of conditions for the German pangram have been met.

```perl
    use List::Util 1.33 qw/shuffle notall/;

    use lib "$FindBin::Bin/lib";
    use DeepL ();

    # This script attempts to produce an English pangram
    # that when translated to German is still a pangram.
    # It uses DeepL to do the translation.

    # You need to make an account for the free DeepL API to
    # use it.

    # See https://www.deepl.com/docs-api/translating-text/.

    my @dictionary
      = do { open my $fh, '<', 'data/dictionary.txt' or die $!; <$fh>; };
    chomp @dictionary;

    my $translator
      = DeepL->new(auth_key => '«--REDACTED--»');

    while () {
      my @sentence   = get_pangram();
      my $english    = join ' ', @sentence;
      my $translated = $translator->translate($english);

      if (is_german_pangram($translated)) {
        say "English: " . $english;
        say "German:  " . $translated;
        last;
      }
    }

    # For the German pangram we are bending the rules a little. Very few words
    # in German have Q, X or Y, so we allow umlauts instead. To make this stricter,
    # increase the 26 to 29.
    sub is_german_pangram {
      26 <= length(lc(join('', @_)) =~ s/[^a-zäöü]//gr =~ s/(.)(?=.*\1)//gr);
    }

    sub get_pangram {
      my %letters_seen;
      my @sentence;
      for my $word (shuffle @dictionary) {
        my @letters = split //, $word;
        next unless notall { exists $letters_seen{$_} } @letters;
        push @sentence, $word;
        $letters_seen{$_}++ for @letters;
        last if keys %letters_seen == 26;
      }

      return @sentence;
    }

```

And here's an example of the result:

```
    English: emission sedans proclaimed duskier choppering phobia
    familiarity newborn convulsion sympathize jetted quells appendixes

    German:  Emission Limousinen verkündet düsterer Zerhackungsphobie
    Vertrautheit neugeborener Krampf Sympathie gejettet quellt Anhängsel
```

Told you things get weird, didn't I?


## Blogs and Additional Submissions in Guest Languages for Task 2:


[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/dave-jacoby/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[The Lazy Dog Had It Coming: Weekly Challege #161 | Committed to Memory](https://jacoby.github.io/2022/04/18/the-lazy-dog-had-it-coming-weekly-challege-161.html)


[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/james-smith/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[The Weekly Challenge 161](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-161/james-smith)


[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/laurent-rosenfeld/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/laurent-rosenfeld/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 161: Abecedarian Words and Pangrams](http://blogs.perl.org/users/laurent_r/2022/04/perl-weekly-challenge-161-abecedarian-words-and-pangrams.html)


[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/lubos-kolouch/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/lubos-kolouch/python/ch-2.py)


[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/peter-campbell-smith/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Abecedarian words and pangrams](https://pjcs-pwc.blogspot.com/2022/04/abecedarian-words-and-pangrams.html)


[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/pokgopun/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/pokgopun/go/ch-2.go)



[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/roger-bell-west/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/roger-bell-west/javascript/ch-2.js), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/roger-bell-west/kotlin/ch-2.kt), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/roger-bell-west/lua/ch-2.lua), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/roger-bell-west/postscript/ch-2.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/roger-bell-west/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/roger-bell-west/raku/ch-2.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/roger-bell-west/ruby/ch-2.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/roger-bell-west/rust/ch-2.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: The Weekly Challenge 161: Words and More Words](https://blog.firedrake.org/archive/2022/04/The_Weekly_Challenge_161__Words_and_More_Words.html)


[**Ryan Thompson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-161/ryan-thompson/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[PWC 161 › Abecedarian Words - Ryan J Thompson](https://ry.ca/2022/04/abecedarian-words/)

&nbsp;&nbsp;**blog writeup:**
[PWC 161 › Pangrams - Ryan J Thompson](https://ry.ca/2022/04/pangrams/)


------------------------------------------





---

<p> &nbsp; </p>
<p> &nbsp; </p>
<p> &nbsp; </p>
<p> &nbsp; </p>

<center>
<h1 id="PWC161BLOGS">_________ THE BLOG PAGES _________</h1>
</center>


---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, by some miracle I somehow continue to maintain my bearings.**

**Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your Unquenchable *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC161BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *FOLLOW* these *BLOG* *LINKS*:

**( ...*don't think, trust your training, you're in the zone, just do it ...* )**


**Adam Russell**

 * [Are Abecedarians from Abecedaria? - Perl - RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2022/04/24/) ( *Perl* )
 * [Are Abecedarians from Abecedaria? - Prolog - RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/prolog/2022/04/24/) ( *Prolog* )

**Arne Sommer**

 * [Panabecedarian Grams with Raku - Arne Sommer](https://raku-musings.com/panabecedarian-grams.html) ( *Raku* )

**Athanasius**

 * [Pangram challenge: greed and Scrabble](https://www.perlmonks.com/index.pl?node_id=11143246) ( *Perl & Raku* )

**Dave Jacoby**

 * [The Lazy Dog Had It Coming: Weekly Challege #161 | Committed to Memory](https://jacoby.github.io/2022/04/18/the-lazy-dog-had-it-coming-weekly-challege-161.html) ( *Perl* )

**Flavio Poletti**

 * [PWC161 - Abecedarian Words - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/04/19/pwc161-abecedarian-words/) ( *Perl & Raku* )
 * [PWC161 - Pangrams - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/04/20/pwc161-pangrams/) ( *Perl & Raku* )

**James Smith**

 * [The Weekly Challenge 161](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-161/james-smith) ( *Perl* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 161: Abecedarian Words and Pangrams](http://blogs.perl.org/users/laurent_r/2022/04/perl-weekly-challenge-161-abecedarian-words-and-pangrams.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 161: words – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2022/04/20/PerlWeeklyChallenge161.html#task1) ( *Raku* )
 * [Perl Weekly Challenge 161: words – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2022/04/20/PerlWeeklyChallenge161.html#task1plperl) ( *Pl/Perl* )
 * [Perl Weekly Challenge 161: words – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2022/04/20/PerlWeeklyChallenge161.html#task1plpgsql) ( *Pl/PgSQL* )


**Peter Campbell Smith**

 * [Abecedarian words and pangrams](https://pjcs-pwc.blogspot.com/2022/04/abecedarian-words-and-pangrams.html) ( *Perl* )

**Roger Bell_West**

 * [RogerBW's Blog: The Weekly Challenge 161: Words and More Words](https://blog.firedrake.org/archive/2022/04/The_Weekly_Challenge_161__Words_and_More_Words.html) ( *Perl & Raku* )

**Ryan Thompson**

 * [PWC 161 › Abecedarian Words - Ryan J Thompson](https://ry.ca/2022/04/abecedarian-words/) ( *Perl* )
 * [PWC 161 › Pangrams - Ryan J Thompson](https://ry.ca/2022/04/pangrams/) ( *Perl* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 161 – W. Luis Mochán](https://wlmb.github.io/2022/04/18/PWC161/) ( *Perl* )
