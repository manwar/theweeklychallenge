
---
author:       Colin Crain
date:         2020-12-25T00:00:00
description:  "Colin Crain › Perl Weekly Review #090"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #090"
image:        images/blog/p5-review-challenge-090.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-089/).* )

Welcome to the Perl review for **Week 090** of the Weekly Challenge! Here we will take the time to discuss the  submissions offered by the team, factor out the common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

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

**<big>For context</big>**  before we begin, you may wish to revisit either of the pages for the [**original tasks**](/blog/perl-weekly-challenge-090/) or the summary [**recap**](/blog/recap-challenge-090/) of the challenge. But don't worry, the challenges themselves will be briefly summarized, presented below as we progress from task by task. Oh, and one more thing before we get started:

### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

**So finally, without further ado...**

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC090TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC090TASK2)   &nbsp;  &nbsp;  &nbsp;       •   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC090BLOGS)    &nbsp;  &nbsp;  &nbsp;   	•

---

# TASK 1 {#PWC090TASK1}

# DNA Sequence
*Submitted by: Mohammad S Anwar*

DNA is a long, chainlike molecule which has two strands twisted into a double helix. The two strands are made up of simpler molecules called nucleotides. Each nucleotide is composed of one of the four nitrogen-containing nucleobases cytosine (C), guanine (G), adenine (A) and thymine (T).

You are given DNA sequence,
```
    GTAAACCCCTTTTCATTTAGACAGATCGACTCCTTATCCATTCTCAGAGATGTGTTGCTGGTCGCCG.
```
Write a script to print nucleiobase count in the given DNA sequence. Also print the complementary sequence where Thymine (T) on one strand is always facing an adenine (A) and vice versa; guanine (G) is always facing a cytosine (C) and vice versa.

To get the complementary sequence use the following mapping:
```
    T => A
    A => T
    G => C
    C => G
```
## about the solutions

There were 27 submissions for the first task this past week.

First off, I'll open with an admission: when I first saw this challenge I did it very quickly. I looked at it and immediately assessed it was a job for the oft-neglected translation operator, `tr///`. As the translation operator returns the number of swaps it makes, this could provide the nucleotide base count and the translated string would be the complementary sequence. Done. Next!

But it seemed *too* easy. I mean, the first task is supposed to be easier than the second, sure, but the length of a string is, well, a pretty basic operation. Being clever and getting it for free instead of making an explicit call to `length()` did not seem enough to warrant a separate specification. A careful re-reading led me to the rather cryptic English in the phrase "Write a script to print nucleiobase count in the ... sequence". The missing definite article might well be masking a similarly missing plural in the word "count". If so, the phrase: "the  nucleiobase counts" changes everything, making for a much more realistic parsing. Oh. Well *that* makes sense. For want of an iota<sup>1</sup> indeed.

In any case I was hardly not alone in my confusion, as no less than nine solutions were submitted with the same reading. That's too many to just ignore, so we'll have a look into them. As for the more elaborate interpretation, counting the individual bases, there were an assortment of combinations of splitting and hashing, substitution and translation to get the various jobs done.

---

<sup>1</sup> On the origins of that colorful expression, I found this:

**George Langshaw, "The Hulsean prize essay for the year 1831 - The Evidences of the Truth of the Christian Revelation Are Not Weakened by Time"**

>Lord Bolingbroke in the Essay before quoted ... in allusion to the ancient dispute whether Christ were ομοουσιος or ομοιοουσιος - "Wherein the Arians were damned for want of an iota. If the decrees of councils, and the several creeds that were made, required so exact a precision of words and letters, and if the least mistake was of such fatal consequence, what must we think, what have we not reason to fear, concerning the text on which they have all pretended to be founded, and wherein, it is said, there are thirty thousand readings?"

It's amusing that although this appears to be the source of the expression as now known, Langshaw here is in fact misquoting Bolingbroke, who wrote in his 1754 essay "Concerning Authority in Matters of Religion":

>>"...Arians were all damned for *the difference* of an iota."

It's ironic that an essay on the subject of textual confusion should itself contain a textual confusion. On the other hand, I do think that for all the alliteration of "damned for the difference" it detracts from the subject, and  "for want of an iota" flows so much better off the tongue.

---

## The SIMPLE answer
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-090/abigail/perl/ch-1.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-090/adam-russell/perl/ch-1.pl),
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-090/alexander-pankoff/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-090/athanasius/perl/ch-1.pl),
[**Joel Crosswhite**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-090/jcrosswh/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-090/jo-37/perl/ch-1.pl),
[**Julio de Castro**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-090/juliodcs/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-090/perlboy1967/perl/ch-1.pl), and
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-090/roger-bell-west/perl/ch-1.pl)

Which is to say, the length of the base string and it's complement.

I'm not going to make any attempt at explaining *why* any particular team member read the discription in either way, other than to acknowlege that I did it myself at first and a solid third of the submissions came up with the simple interpretation. *Que sera, sera.* That said, there did seem to be a soft correlation with calling the translation operator by its `sed` antecedent, `y///`, and this reading, for what it's worth.

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-090/adam-russell/perl/ch-1.pl)

Adam gives us a hash table and a simple mapping to create his complement:

```perl
    my %nucleotide_map = (
        "T" => "A",
        "A" => "T",
        "G" => "C",
        "C" => "G"
    );

    sub complementary_sequence{
        my($sequence) = @_;
        my @complement = map { $nucleotide_map{$_} } split(//, $sequence);
        return @complement;
    }
```

[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-090/alexander-pankoff/perl/ch-1.pl)

Alexander follows the same mapping philosophy, but emphasizes the symmetrical nature of the binding using a singular way to define his table:

```perl
    my %complements = ( T => 'A', G => 'C' );
    %complements = ( %complements, reverse %complements );
```

[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-090/perlboy1967/perl/ch-1.pl)

Niels harnesses a regular expression to do his substitution:

```perl
    my %dnaMapping = (qw(T A A T G C C G));
    $D =~ s#(.)#$dnaMapping{$1}#g;

    printf "Output: %s\n", $D;
```

and
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-090/abigail/perl/ch-1.pl),

terse and succinct as usual, lets the translation operator, here seen in its `y///` form, do all the work at once.

```perl
    print y/TAGC/ATCG/, "\n", $_ while <>;
```


## SPLIT and SORT
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-090/arne-sommer/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-090/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-090/e-choroba/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-090/jaldhar-h-vyas/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-090/laurent-rosenfeld/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-090/lubos-kolouch/perl/ch-1.pl),
[**Nuno Vieira**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-090/nunovieira220/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-090/sgreen/perl/ch-1.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-090/wlmb/perl/ch-1.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-090/wanderdoc/perl/ch-1.pl)

The most common way to count the individual bases proved to be a "tag and bag" approach, splitting the stringified DNA sequence into an array and divvying those elements up into hash buckets, one for each base. This could either be iterated in discreet steps with an intermediate variable or combined into a `map` construct.

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-090/laurent-rosenfeld/perl/ch-1.pl)

demonstrates the basic counting method of converting a list into a histogram:

```perl
    my %histogram;
    $histogram{$_}++ for split '', $dna;
    say "$_: $histogram{$_}" for keys %histogram;
```

One advantage of using an explicit loop to iterate through the bases is the ability to construct the complementary base sequence at the same time.

[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-090/lubos-kolouch/perl/ch-1.pl)

explains in coded form:

```perl
    my %compl = (
        'T' => 'A',
        'A' => 'T',
        'G' => 'C',
        'C' => 'G',
    );

    for my $item (split //, $seq) {
        $counter{$item}++;
        $comp_seq .= $compl{$item};
    }
```

as did
[**Nuno Vieira**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-090/nunovieira220/perl/ch-1.pl)

```perl
    for (split('', $sequence)) {
        $counters{$_}++;
        $complementary .= $convert{$_};
    }
```


There were several other examples using the same combined form.

[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-090/wanderdoc/perl/ch-1.pl)

The good doctor was even able to place the two steps within a `map` function block, combining the logic and control even further.


```perl
    my $strand_2 = join('', map { $count{$_}++; $compl{$_}} split(//, $strand_1));
```





## TRANSLATE all the way, baby
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-090/colin-crain/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-090/polettix/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-090/james-smith/perl/ch-1.pl), and
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-090/pete-houston/perl/ch-1.pl)

I'll let the words of James Smith do the talking here:

>Ah! The day job....
>Both these we've always used `tr` for as the fastest way to compute the
>DNA count and to get reverse complement of sequence

Well there you have it. I believe that perhaps because of its syntax the translation operator gets tossed in with the regular expression functions it so much resembles, and then gets relegated to being substitution's less capable sibling. As everything you can do with `tr///` you can do with `s///`, what's the use of using it? Aside from the factual incorrectness of that statement, there is a very real use case: speed. The thing is that translation really only *looks* like a regular expression tool. In fact it doesn't spin up the complex regular expression engine at all, and consequently its overhead is considerably smaller compared to the bringing out the big guns of regex. The difference between s/// in speed ranges from smallish to vast depending on the use case, but in tests I've done it was about 10x faster. YMMV.

So that is why it's useful.

Oh, and it returns the number of transformations it makes, which makes it quite convenient to count things, like nucleotide bases. So that's another reason to keep it around.

The specific challenge here, though, does present a certain "chicken and egg" problem. One convenient aspect of the translation operator is the simultaneity of action: if you translate tr/AB/BA/ then all As will be changed to Bs and Bs to As in-place at once, without the parser getting confused by the changes being made as it proceeds. So tr/TAGC/ATCG/ works to make the complement sequence. But if you break that into 4 separate translations to count the bases, then suddenly your new As are getting mixed in with your old As and everything goes haywire.

Of course there are a variety of ways to circumvent this. Myself, I chose an intermediate placeholder:

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-090/colin-crain/perl/ch-1.pl)

```perl
    say "seq:    ", $seq;

    say "length  : ", length $seq;
    say "thymine : ", $seq =~ tr/T/1/;
    say "adenine : ", $seq =~ tr/A/2/;
    say "guanine : ", $seq =~ tr/G/3/;
    say "cytosine: ", $seq =~ tr/C/4/;

    $seq =~ tr/1234/ATCG/;

    say "comp:   ", $seq;
```

Because the operator builds a translation table at compile time and applies it to do the work, the exact nature of the swap is unimportant. The operator sees the character, looks up the new value and makes the change without judgement; if we change T to A or 1 makes no difference. We can, in fact, change T to T, sidestepping the issue here completely. The output remains unchanged yet the swap is made, returning the count. It doesn't save any computation, but perhaps is clearer.


[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-090/james-smith/perl/ch-1.pl)

James give a pair of functions to return the results, the count portion contained in an anonymous hash.

```perl
    sub counts {
      return { 'T' => $_[0] =~ tr/T/T/, 'A' => $_[0] =~ tr/A/A/,
               'C' => $_[0] =~ tr/C/C/, 'G' => $_[0] =~ tr/G/G/, };
    }

    sub revcomp {
      return reverse $_[0] =~ tr/ATCG/TAGC/r;
    }
```

Of note he also goes out of his way to both discuss and provide the *reverse* complement base string, which I will take to mean that that is the actually practical form of this little transformation. After all, he did say it was his day job. I am a bit curious as to exactly why, bit I'm too busy to go down that rabbit hole right this moment.

Both of these forms contain 5 separate operations. Aggressive refactorers will find this repetition troublesome, no doubt. Indeed, both Pete and Flavio grappled with this particular perturbation in the force. At minimum the four base-counting steps could be encapsulated in a loop, no?

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-090/polettix/perl/ch-1.pl)

as Flavio explores in his [excellent blog post](https://github.polettix.it/ETOOBUSY/2020/12/11/pwc090-dna-sequence/), this doesn't work. In fact, the documentation stats quite clearly that this doesn't work. At least not as-is.

>Because the transliteration table is built at compile time, neither the *SEARCHLIST* nor the *REPLACEMENTLIST* are subjected to double quote interpolation.

So what to do? We must use `eval`. And not block `eval` either, but string eval, or [evil eval](https://perlmaven.com/string-eval) as it is sometimes known.

```perl
    sub dna_sequence ($s) {
       my $complementary = $s =~ tr{ACGT}{TGCA}r;
       my %cf = map { $_ => eval "\$s =~ tr{$_}{}d" } qw< A C G T >;
       return (\%cf, $complementary);
    }
```

Note we need to escape the sigil on `$s`, because we need the variable name there when we `eval` the string, not the contents of `$s`. Also note that to facilitate counting, by not even providing a replacement list the tr/// operator duplicates the search list, substituting each character for itself, which is handy.

[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-090/pete-houston/perl/ch-1.pl)

Utilizes the same trick in a slightly more compact manner.

```perl
    for my $base (qw/A C G T/) {
        printf "Count of $base is %i\n", eval "\$dna =~ tr/$base/$base/;";
    }
    print "Original sequence is $dna\n";
    $dna =~ tr/ACGT/TGCA/;
    print "Complementary sequence is $dna\n";
```








## UNCLASSIFIABLE MAVERICKS and FREE THINKERS

Each of these fine individuals set off to find their own way, arriving at unique solutions to the puzzles before them.

[**Alexander Karelas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-090/alexander-karelas/perl/ch-1.pl)

Alexander uses what we shall call the [Saturn operator](https://metacpan.org/pod/distribution/perlsecret/lib/perlsecret.pod) to force list context on a global match to count his individual bases, which he can then evaluate as a scalar to get the count of the matches.

```perl
    foreach my $letter (qw/ G A T C /) {
        $numbers{$letter} = () = $input =~ /$letter/g;
    }
```

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-090/cheok-yin-fung/perl/ch-1.pl)

CY has a unique manner of counting, by acting on duplicate copies, removing everything that's *not* the base we're looking for, then counting the length of what's left.

```perl
    my ($seqC, $seqG, $seqA, $seqT, $seqtemp) = ($seq) x 5;
    $seqC =~ s/[GAT]//g;
    $seqG =~ s/[CAT]//g;
    $seqA =~ s/[GCT]//g;
    $seqT =~ s/[GAC]//g;
    print "C: ", length $seqC, "\n", "G: ", length $seqG, "\n";
    print "A: ", length $seqA, "\n", "T: ", length $seqT, "\n";
```


[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-090/dave-jacoby/perl/ch-1.pl)

Dave accomplishes a similar end, using `grep` to filter character lists and counting the elements.

```perl
    for my $i ( qw( A T C G ) ) {
        my $n = scalar grep {/$i/} split // , $sequence;
        say qq(    $i: $n );
    }
```


[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-090/ulrich-rieke/perl/ch-1.pl)

Ulrich sets up an iterator for the indices of the initial sequence, allowing him to use `substr` to examine the individual characters within it. He can then count the bases and concatenate a hash mapping to build up the complement sequence.

```perl
    for my $i (  0 .. length $sequence  ) {
        my $let = substr(  $sequence , $i , 1  ) ;
        $basefrequencies{ $let }++ ;
        $complementary .= $pairings{  $let  } ;
    }
```

---

# TASK 2 {#PWC090TASK2}

# Ethiopian Multiplication
*Submitted by: Mohammad S Anwar*

You are given two positive numbers $A and $B.

Write a script to demonstrate Ethiopian Multiplication using the given numbers.

## about the solutions

There were 28 submissions for the second task this past week, and reviewing the work has presented unique challenges and opportunities, which results in our diverging a bit from our usual format.

A cloud of open-ended vagueness hovers around this challenge: before we begin there is a certain unfixed air as to what the technique is even called. Certainly with no disrespect to any Ethoipion cultural heritage out there, the technique, of enacting binary multiplication through steps of halving and doubling, has been alternately called Ethiopean Multiplication, Ancient Egyptian Multiplication or even Russian Peasant Multiplication, which I find to be an oddly specific attribution. Despite minor differentiations of style these all describe the same technique, which has wound its way through time to the current day, where it lives on in aspects of [modern computing.](https://en.wikipedia.org/wiki/Multiplication_algorithm#Binary_or_Peasant_multiplication)

And again, in what has become a not-uncommon scenario, there was some difference in interpretation as to what the challenge, as stated, was actually asking of us.

Modeling the steps taken in what we shall continue to call Ethiopian Multiplication can be done quickly and efficiently, as we shall see. The largest difference in opinion on the  task goals seemed to be over the word "demonstrate" in the description. Thus the output, consequently, fell into three categories: simply listing the product, presenting a proper expression out of the output, such as "149 x 127 = 18923", or tabulating out each step as it is taken — indicating the columns of numbers, which ones are to be added, the summation and possibly even running commentary along the way. In other words, a proper demonstration.

There were a number of these made, and not to give short shrift to anyone's handiwork, I do feel the extra efforts undertaken by those members who went the extra mile should be preferentially highlighted. For my own part I found the whole business fascinating, and ended doing an extensive [writeup on the subject](https://colincrain.com/2020/12/13/dna-fragments-are-multiplying-exponentially-in-north-east-africa/) in an effort to figure out what was going on, composing a [variety of solutions to producing the algorithm along the way](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-090/colin-crain/perl/ch-2.pl). As I've already written that particular screed, I think I'll leave out my own solutions here, instead allowing the demonstrations to take the microphone and as we progress through the submissions explore the ideas behind this singular technique.

## DEMONSTRATIONS
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-090/abigail/perl/ch-2.pl),
[**Alexander Karelas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-090/alexander-karelas/perl/ch-2.pl),
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-090/alexander-pankoff/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-090/athanasius/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-090/cheok-yin-fung/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-090/colin-crain/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-090/dave-jacoby/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-090/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-090/e-choroba/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-090/james-smith/perl/ch-2.pl),
[**Joel Crosswhite**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-090/jcrosswh/perl/ch-2.pl),
[**Julio de Castro**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-090/juliodcs/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-090/pete-houston/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-090/roger-bell-west/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-090/sgreen/perl/ch-2.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-090/wlmb/perl/ch-2.pl)

Before we begin, a quick summary: to perform the multiplication, the two input values are listed at the top of two columns. The two columns are extended downwards,  at each row dividing the left by 2, ignoring any remainder, and doubling the right. This continues until the left-hand result is 1. At that point those rows where the left-hand side is even are discarded. The product is now the sum of the right-hand values in the remaining rows.

Stylistic variations abound. Some versions place a tick mark next to the odd rows to single them out, others cross out the even values. Obviously there is no difference there. However all of the demonstrations delivered some version of this tabulation.

[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-090/alexander-pankoff/perl/ch-2.pl) describes the process:

```
    halving 149, doubling 127, till 149 becomes 1
    149 & 127
    74 & 254
    37 & 508
    18 & 1016
    9 & 2032
    4 & 4064
    2 & 8128
    1 & 16256
    taking right values where left value is odd
    127
    508
    2032
    16256
    product is 18923

```

Alexander uses bitwise operations, avoiding explicit multiplication and division. I've taken the liberty of stripping out the `verbose()` code that provides the commentary, as it makes the underlying mechanics harder to see. I think I'll be doing that elsewhere, too.

The three lines in the `ethopian_mul` sub do the work. To start, `ethopian_mul_chain()` is a recursive routine that generates a list of 2-tuples, the rows of the table, which is printed. Then list is filtered to those whose first element is odd, determined by bitwise ANDing the value with 1, and only the second value is kept. Lastly the transformed list is summed to derive the product.

```perl
    sub ethopian_mul ( $a, $b ) {
        my @chain = ethopian_mul_chain( $a, $b );
        my @filtered = map { $_->[1] } grep { odd( $_->[0] ) } @chain;
        my $product = sum0( @filtered );
        return $product;
    }

    sub ethopian_mul_chain ( $a, $b ) {
        return [ $a, $b ] if $a <= 1;
        return ( [ $a, $b ], ethopian_mul_chain( $a >> 1, $b << 1 ) );
    }

    sub odd($x) {
        $x & 1;
    }

```

[**Julio de Castro**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-090/juliodcs/perl/ch-2.pl)

```
    Ethiopian multiplication of 149 and 127

    Steps:
    149, 127
    74, 254
    37, 508
    18, 1016
    9, 2032
    4, 4064
    2, 8128
    1, 16256

    Keep odd numbers:
    149, 127
    37, 508
    9, 2032
    1, 16256

    Keep right values:
    127
    508
    2032
    16256

    Add the numbers:
    18923

```

Julio also places his multiplicand and multiplier into 2-tuple array, and then acts on this container until the first element is 1. It's a nice way to go about things, keeping these related values together:

```perl
    sub operate(@items) {
        my $last = @items[@items - 1];

        $last->[0] == 1
            ? @items
            : operate (@items, [int($last->[0] / 2), $last->[1] * 2])
    }

    my @steps = operate([$first, $second]);

```

[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-090/pete-houston/perl/ch-2.pl)

Pete provides a nice commentary of the action as it progresses.

```
    Starting with 149 and 127 we iterate by halving and doubling

      149,   127       149 is odd so add this value of 127 to give a running total of 127
       74,   254       74 is even so ignore this value of 254
       37,   508       37 is odd so add this value of 508 to give a running total of 635
       18,  1016       18 is even so ignore this value of 1016
        9,  2032       9 is odd so add this value of 2032 to give a running total of 2667
        4,  4064       4 is even so ignore this value of 4064
        2,  8128       2 is even so ignore this value of 8128
        1, 16256       1 is odd so add this value of 16256 to give a running total of 18923

      n is 1, so we are finished and the result is 18923

    149 * 127 = 18923

```

Again with the commentary code removed, we can see the method is quite simple:

```perl
    while (1) {
        verbose (sprintf "%5i, %5i     ", $n, $m);
        if ($n % 2) {
            $tot += $m;
        }
        if ($n == 1) {
            print "$prodstr = $tot\n";
            exit;
        }
        $n = int ($n / 2);
        $m *= 2;
    }

```

[**Joel Crosswhite**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-090/jcrosswh/perl/ch-2.pl)

Joel also comments on his process, but his method is a a little different:

```
    The initial twos table looks like:
    2^0 = 1
    2^1 = 2
    2^2 = 4
    2^3 = 8
    2^4 = 16
    2^5 = 32
    2^6 = 64
    2^7 = 128

    Decomposition looks like:
    149-128 = 21
    21-16 = 5
    5-4 = 1
    1-1 = 0

    The table of the second multiplicand times powers of 2 (* values will be used):
    * 1 127
    2 254
    * 4 508
    8 1016
    * 16 2032
    32 4064
    64 8128
    * 128 16256

    The solution using Ethiopian Multiplication looks like:
    16256+2032+508+127=18923

```

Here in his "decomposition" step refers to a binary decomposition, and in it he carries out a series of subtractions, in each identifying the largest power of two less than the current total — in this case 128, 16, 4 and 1. These powers of two are those that make up the multiplicand, 149. These bits are also those expressed by 1s in the binary representation of that number, 10010101. Remember this detail. Multiplying these values by the multiplier, 127, gives a list that when summed yields the product.

I'm not sure we're still doing *Ethiopian* multiplication here per se, but we *are* doing binary long multiplication, which, as we shall see, is the same thing.

Joel's code contains many different parts to perform the various tasks, but here is his code to build and print the third table:

```perl
    my @second_twos_table = ($second_input);
    map { push(@second_twos_table, $second_twos_table[-1] * 2) }
        (2..scalar(@twos_table));
    print_second_twos_table(\@second_twos_table, \@decomposition_places);

    sub print_second_twos_table{
        my ($second_table, $decomposition_places) = @_;
        print "The table of the second multiplicand times powers of 2 (* values "
            . "will be used):\n";
        for (my $i = 0; $i < scalar(@{$second_table}); $i++) {
            print '* ' if (grep( /^$i/, @{$decomposition_places}));
            printf("%d %d\n", 2 ** $i, $second_table->[$i]);
        }
        print "\n";
    }

```

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-090/cheok-yin-fung/perl/ch-2.pl)

CY gathers the selected values to add up separately below, but to do this she needs to keep lists of the two inputs as they evolve through time.

```
        149    127   *
         74    254
         37    508   *
         18   1016
          9   2032   *
          4   4064
          2   8128
          1  16256   *

    SUMMATION from:
        127
        508
       2032
      16256
    _______
      18923

```

This ends up complicating things, but makes the demonstration possible.

```perl
    while ($em_a[-1] != 1) {
        printf "%7d", $em_a[$i];
        printf "%7d", $em_b[$i];
        print "   *" if $em_a[$i] % 2 == 1;
        $em_a[$i+1] = int ($em_a[$i]/2);
        $em_b[$i+1] = $em_b[$i]*2;
        $i++;
        print "\n";
    }

    printf "%7d%7d   *\n\n", $em_a[$i], $em_b[$i];

    my $sum = 0;
    print "SUMMATION from:\n";
    for (0..$i) {
        if ($em_a[$_] % 2 == 1) {
            $sum += $em_b[$_];
            printf "%7d\n", $em_b[$_];
        }
    }
```

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-090/roger-bell-west/perl/ch-2.pl)

```
      149   127 ->   127
       74   254
       37   508 ->   508
       18  1016
        9  2032 ->  2032
        4  4064
        2  8128
        1 16256 -> 16256
                   -----
                   18923

```

I rather enjoyed the visual simpicity in Roger's demonstration. It's uncluttered and quite clear what's going on. In his code we can see the familiar elements: bit-shifting and ANDing with 1 to determine oddness.

So what, exactly, is happening with all this shifting and ANDing? Well glad you asked.

When we shift to the right, two things happen. Or really one thing happens and that thing has two visible effects. At its most literal level, the binary bits, and hence those in the binary representation, are moved to the right one. Practically, this results in the number being divided by two, with any fractional component shifted off into the void, discarded. Sound familiar? Another effect is that the second-least significant digit becomes the least significant digit, taking the 1s place. Having a 1 in this position will mean that the number is odd, and performing a bitwise AND on this number with 1 will return 1 if and only if there is also a 1 in that position. So the bitwise AND is a check for oddness.

Conversely, when we ask whether a number is odd, we are also determining whether there is a 1 in that last place, and combined with the ability to shift the register, by looping we can successively determine the identity of each bit in a binary representation. We will see the importance of this when we do a distributive expansion of the number. In light of this explanation the rather cryptic directives to halve and toss the remainder and check for oddness begin to gain a larger mathematical context.

```perl
    sub em {
        my ( $a, $b )=@_;
        my $s = 0;
        my @demo;
        while ( $a > 0 ) {
            my $line = sprintf( '%5d %5d', $a, $b );
            if ( $a & 1 == 1 ) {
                $s += $b;
                $line .= sprintf( ' -> %5d', $b );
            }
            $a >>= 1;
            $b <<= 1;
            push @demo, $line;
        }
        push @demo, '               -----';
        push @demo, sprintf('               %5d',$s);
        print map { "$_\n" } @demo;
        return $s;
    }
```


[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-090/dave-jacoby/perl/ch-2.pl)

Dave is lighter on commentary, but adds more information to his table, which would benefit the uninitiated with a legend header. But I can provide:

```
        m 149
        n 127

    0       1       1       149     127
    127     0       2       74      254
    127     1       4       37      508
    635     0       8       18      1016
    635     1       16      9       2032
    2667    0       32      4       4064
    2667    0       64      2       8128
    2667    1       128     1       16256
    18923
    18923

```


In it his first column is a running output total, the second seemingly a flag for oddness, the third successive powers of two, the fourth and fifth the halving and doubling. So what's with the 2nd and 3rd columns? For the 2nd, that could be considered the tick marks, right? Yes, but the choice of 1s ans 0s is not coincidental. Reading upwards from the bottom we get the digits 10010101, which, incidentally, is 149 in binary. Ohhhhh... you say. It's coming together more. And as for the third column, that number times 127, the multiplier, yields the fifth column. Ok. So if we take the 1 or 0 and use that to add or not add the power of two times the multiplier, because that's what multiplying by either 1 or 0 will result in... we get something, right? Yes. We're doing the multiplication on a distributive expansion that we talked about earlier.

So do this for every line and put these parts together and you can now make the equation:

1 × (2<sup>0</sup> × 127) + 0 × (2<sup>1</sup> × 127) + 1 × (2<sup>2</sup> × 127) + 1 × (2<sup>3</sup> × 127) + 0 × (2<sup>4</sup> × 127) + 1 × (2<sup>5</sup> × 127) + 1 × (2<sup>6</sup> × 127) + 0 × (2<sup>7</sup> × 127) = 18923

Ok *now* I wish I'd picked smaller numbers for the example. But what we're looking at, in base 2, is the same as saying, in base 10:

9 × (10<sup>0</sup> × 127) + 4 × (10<sup>1</sup> × 127) + 1 × (10<sup>2</sup> × 127) = 18923

Which if you look at it right you will recognize is just grade-school multiplication drawn out into explicit steps:
```
      127
    x 149
    -----
     1143   9 x 1   x 127
     5080   4 x 10  x 127
  + 12700   1 x 100 x 127
  -------
    18923
```
So Ethiopian Multiplication is just grade school, or *long* multiplication, done in binary. And that is why it works.<sup>2</sup> Q.E.D.

Here's Dave's routine. It's not hard to follow the logic. I'm still impressed that this method and what we did on a chalkboard in whatever early grade that was are logically equivalent.


```perl
    sub egyptian ( $m, $n ) {
        my $o = 0;
        my $i = 1;
        do {
            my $e = $m % 2 != 0 ? 1 : 0;
            say join "\t", $o, $e, $i, $m, $n;
            $o += $n if $e;
            $i *= 2;
            $m = int $m / 2;
            $n = $n * 2;
        } while ( $m > 0 );
        return $o;
    }

```


***

<sup>2</sup> Ok, yes I know there's a certain amount of hand-waving here, because obviously the number "127" isn't in binary. The thing is, it's a lot harder to see written down that way, and I feel this captures the essence and carefully walks a line. The thing to remember is that even in this odd hybrid of base-2 and base-10 the underlying *numbers* being represented are always the same, and the distributive expansion works no matter the base. Call it 127 or 01111111 or even 127+0i, they all express the same *meaning* if you will. If you wish to see the pure binary long multiplication demonstrated, [I did a more through write-up of it elsewhere](https://colincrain.com/2020/12/13/dna-fragments-are-multiplying-exponentially-in-north-east-africa/), and I will direct interested parties to it.

***



[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-090/abigail/perl/ch-2.pl)

```
    149    127 ✓
     74    254
     37    508 ✓
     18   1016
      9   2032 ✓
      4   4064
      2   8128
      1  16256 ✓
         ----- +
         18923

```

Abigail's demonstration brings to light to some interesting philosophical ramifications that had occurred to me earlier. The thing is, we have observed that there is no trick here — multiplication is multiplication, whatever base we perform it in, and the algorithm is simply working through long multiplication. Dividing by two and checking for oddness is the same as shifting right 1 and performing a bitwise AND with 1, which will tell us the value of each bit in a binary representation of a number. In binary the multiplication tables are quite simple, but it's still multiplication: the only options are 1 times or 0 times, which is the same as keep the number or scratch it out.

So if the algorithm isn't just *like* multiplication, but actually *is* multiplication, what exactly is the difference between using it versus calling
```
    $A*$B ?
```
I mean, depending on what hardware you're using, the computer may in fact be [using the same algorithm to compute the result](https://en.wikipedia.org/wiki/Multiplication_algorithm#Binary_multiplication_in_computers).

So he has produced for us a beautiful demonstration of the table of halving and doubling. It reformats itself to fit the data automatically, sizing the columns and keeping everything aligned. He has gone above and beyond to provide unicode checkmarks to indicate the rows to be kept. And then, at the bottom, he uses the buil-in multiplication operator to provide the correct product. Because we know the product is correct, because the math tells us so. We've *proved* it to be right. The purpose is the demonstration, which is delivered beautifully.

```perl
    while (<>) {
        use integer;
        my ($A, $B) = /([0-9]+) \s+ ([0-9]+)/x or next;
        #
        # Max width of the left and right columns.
        #
        my $w1 = length $A;
        my $w2 = length (my $product = $A * $B);
        while ($A) {
            #
            # Print a line, add a tick mark if the left column is odd
            #
            printf "%${w1}d  %${w2}d %s\n" => $A, $B, $A % 2 ? $TICK : "";
            #
            # Divide and double
            #
            $A /= 2;
            $B *= 2;
        }
        #
        # Print the sum
        #
        say " " x $w1, "  ", "-" x $w2, " +";
        say " " x $w1, "  ", $product;
    }

```


## Just tell me the answer!

If we eschew all the commentary, the actual calculation can become quite compact. The method really is simplicity itself, which explains its persistence over the millennia. Here are a just a few examples to show just how compact things can get.

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-090/laurent-rosenfeld/perl/ch-2.pl)

```perl
    my ($c, $d) = @ARGV;
    my $result = $c % 2 ? $d : 0;
    while ($c > 1) {
        $c = $c >> 1; # right shift 1 bit = div by 2
        $d *= 2;
        $result += $d if $c % 2;
    }
    say $result;
```

[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-090/perlboy1967/perl/ch-2.pl)

```perl
    sub ethiopianMultiply {
        my ($m, $n) = @_;
        my $r;

        while ($m) {
            ($r, $m, $n) = ($r += ($m & 1 ? $n : 0), $m >> 1, $n << 1);
        }

        return $r;
    }
```

[**Nuno Vieira**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-090/nunovieira220/perl/ch-2.pl)

```perl
    while($A > 1) {
        $A = floor($A / 2);
        $B = $B * 2;
        $res += $B;
    }
```

**So there you have it, Ethiopian Multiplication, demonstrated and explained, with code samples in a variety of styles.**

---

# BLOGS {#PWC090BLOGS}

---

**That’s it for me this week, people! Resolute and unbroken by the torrential influx, I have maintained my bearings. Looking forward to next wave, the perfect wave, I am: your humble servant.**

## But if Your *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC090BLOGS}
## then *RUN* *(dont walk!)* to the *WATERING HOLE*
## and *READ* these *BLOG* *LINKS*:

***( don't think, trust your training, you're in the zone, just do it ... )***


**Aaron Smith**

 * [Perl Weekly Challenge 90 - Aaron Smith](https://aaronreidsmith.github.io/blog/perl-weekly-challenge-090/) ( *Raku* )

**Abigail**

 * [Perl Weekly Challenge 90, Part 1 - Abigail's Programming Blog](https://wp.me/pcxd30-gf) ( *Perl* )
 * [Perl Weekly Challenge 90, Part 2 - Abigail's Programming Blog](https://wp.me/pcxd30-gV) ( *Perl* )

**Adam Russell**

 * [Perl Weekly Challenge 090](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2020/12/13) ( *Perl* )

**Andinus**

 * [Challenge 090](https://andinus.tilde.institute/pwc/challenge-090/) ( *Raku* )

**Arne Sommer**

 * [Sequenced Multiplication with Raku and Perl](https://raku-musings.com/sequenced-multiplication.html) ( *Perl & Raku* )

**Colin Crain**

 * [DNA Fragments Are Multiplying Exponentially in North-East Africa - Programming Excursions in Perl and Raku](https://colincrain.com/2020/12/13/dna-fragments-are-multiplying-exponentially-in-north-east-africa/) ( *Perl & Raku* )

**Dave Jacoby**

 * [Multiplication and DNA: Perl Weekly Challenge #90 | Committed to Memory](https://jacoby.github.io/2020/12/08/multiplication-and-dna-perl-weekly-challenge-90.html) ( *Perl* )

**Flavio Poletti**

 * [PWC090 - DNA Sequence - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2020/12/11/pwc090-dna-sequence/) ( *Perl* )
 * [PWC090 - Ethiopian Multiplication - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2020/12/12/pwc090-ethiopian-multiplication/) ( *Perl* )

**Jaldhar H. Vyas**

 * [Perl Weekly Challenge: Week 90](https://www.braincells.com/perl/2020/12/perl_weekly_challenge_week_90.html) ( *Perl & Raku* )

**Kang-min Liu**

 * [解 Perl Weekly Challenge 090 -- DNA 序列與衣索比亞乘法](https://gugod.org/2020/12/pwc-090/) ( *Raku* )
 * [Solving Perl Weekly Challenge 090 -- DNA Sequence and Ethiopian Multiplication](https://gugod.org/2020/12/pwc-090-en/) ( *Raku* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 90: DNA Sequence and Ethiopian Multiplication](http://blogs.perl.org/users/laurent_r/2020/12/perl-weekly-challenge-90-dna-sequence-and-ethiopian-multiplication.html) ( *Perl & Raku* )

**Simon Green**

 * [Weekly Challenge 090](https://dev.to/simongreennet/weekly-challenge-090-41) ( *Perl* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 90](https://wlmb.github.io/2020/12/07/PWC90/) ( *Perl* )
