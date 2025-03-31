---
title: "Random in Perl"
date: 2025-03-25T00:00:00+00:00
description: "Discussion about the random in Perl v5.38."
type: post
image: images/blog/random-in-perl.png
author: Mohammad Sajid Anwar
tags: ["Perl"]
---

#### **DISCLAIMER:** Image is generated using `FREE` version of `ChatGPT`.
***

<br>

<div class="container">
    <div class="row">
        <div class="col-12 col-sm mb-4 p-2 text-center">
            <a href="/blog/slurp-in-perl" title="Slurp in Perl">
                <img src="/images/blog/slurp-mini.png" class="img-fluid">
            </a>
        </div>
        <div class="col-12 col-sm mb-4 p-2 text-center">
            <a href="/blog/scientist-in-perl" title="Scientist in Perl">
                <img src="/images/blog/scientist-in-perl-mini.png" class="img-fluid">
            </a>
        </div>
        <div class="col-12 col-sm mb-4 p-2 text-center">
            <a href="/blog/extraction-in-perl" title="Text Extraction in Perl">
                <img src="/images/blog/extraction-in-perl-mini.png" class="img-fluid">
            </a>
        </div>
        <div class="col-12 col-sm mb-4 p-2 text-center">
            <a href="/blog/subroutine-signatures" title="Subroutine Signatures in Perl">
                <img src="/images/blog/subroutine-signatures-mini.png" class="img-fluid">
            </a>
        </div>
        <div class="col-12 col-sm mb-4 p-2 text-center">
            <a href="/blog/perl-regex" title="Perl Regex">
                <img src="/images/blog/perl-regex-mini.png" class="img-fluid rounded-3 border border-3">
            </a>
        </div>
        <div class="col-12 col-sm mb-4 p-2 text-center">
            <a href="/blog/read-large-file" title="Read Large File">
                <img src="/images/blog/read-large-file-mini.png" class="img-fluid">
            </a>
        </div>
        <div class="col-12 col-sm mb-4 p-2 text-center">
            <a href="/blog/welcome-to-perl" title="Welcome to Perl">
                <img src="/images/blog/welcome-to-perl-mini.png" class="img-fluid">
            </a>
        </div>
    </div>
</div>

<br>

## Environment variable PERL_RAND_SEED in Perl v5.38
***

`NOTE`: All credit for this article goes to the book [**Perl New Features**](https://leanpub.com/perl_new_features) by `brian d foy`.

How many of you have generated random numbers in `Perl`?

I guess almost everyone.

Let me ask another question: What function do you use to generate random numbers in `Perl`?

Well, no prize for the correct answer.

The answer is `rand`. You all got it right.

Now for a trick question: How does `rand` generate a random number every time?

Do you think, there is another player in this game?

Once again, you guessed it right.

You're a smart audience!

The `partner in crime` is `srand`.

So what is `srand`?

Well it's a random seed generator.

Wait, what is this `seed` business now?

<br>

    In computer science and mathematics, a seed is an initial value used
    by a  pseudo-random number generator (PRNG) to produce a sequence of
    numbers that appear random but are actually deterministic.

<br>

This definition is loaded but makes it very clear what it is.

Remember, computers cannot generate truly random numbers without external entropy.

So, if you use the same seed, the `PRNG` will produce the exact same sequence of `random` numbers.

Enough talk, let's see some action.

As I mentioned earlier, we use `rand` to generate random numbers. Here's how it looks:

<br>

```perl
$ perl -Mv5.14 -e "print rand"
0.449823787975223

$ perl -Mv5.14 -e "print rand"
0.0417291764906658

$ perl -Mv5.14 -e "print rand"
0.0634949901877953
```

<br>

So we're getting random numbers every time. That means we're using a different seed each time, right?

I'm curious to find out which seed was used.

<br>

```perl
$ perl -Mv5.14 -e "print rand; print '---'; print srand;"
0.927663794792355---3368917688

$ perl -Mv5.14 -e "print rand; print '---'; print srand;"
0.894359557963075---3759042874

$ perl -Mv5.14 -e "print rand; print '---'; print srand;"
0.482739364569174---1623001244
```

<br>

## [2025-03-31] UPDATE
***

I noticed a comment by a reddit member, `scottchiefbaker`, with regard to the above one-liner to fetch the seed used.

You can find more information in this [**thread**](https://www.reddit.com/r/perl/comments/1jjluda/comment/mke3zzq/?context=3).

The proposed fix is below:

<br>

```perl
$ perl -E '$seed = srand(); say "$seed => " . rand();'
2479823586 => 0.943006580303521
```

<br>

Pretty cool, right?

By the way, the ability for `srand` to return the seed was added in `Perl v5.14`.

That was quite a while ago, not many of you might remember that, I guess.

In my opinion, it's one of the best feature added to `Perl`.

Want to see how?

Check this out: `random.pl`

<br>

```perl
use v5.14;

print "Random number : ", rand, "\n";
my $auto_seed = srand;
print "Used Auto Seed: $auto_seed\n";
print "Random number : ", rand, "\n";
# Reseed with the same seed used above
srand($auto_seed);
print "Random number : ", rand, "\n";
```

<br>

Run the code now:

<br>

```perl
$ perl random.pl
Random number : 0.97473596602595
Used Auto Seed: 3333813029
Random number : 0.483446575076417
Random number : 0.483446575076417
```

<br>

In `Perl v5.38`, we can set the seed value with the new environment variable: `PERL_RAND_SEED`

First without the use of environment variable:

<br>

``` perl
$ perl -Mv5.38 -E 'say rand'
0.796259729963825

$ perl -Mv5.38 -E 'say rand'
0.539082965188758
```

<br>

Now with environment variable:

<br>

```perl
$ PERL_RAND_SEED=1 perl -Mv5.38 -E 'say rand'
0.0416303447718782

$ PERL_RAND_SEED=1 perl -Mv5.38 -E 'say rand'
0.0416303447718782
```

<br>

Now no need to get your hand dirty, you got all the power in your hand.

***

<br>

`Happy Hacking!!`
