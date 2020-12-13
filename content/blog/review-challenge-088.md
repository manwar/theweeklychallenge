
---
author:       Colin Crain
date:         2020-12-13T00:00:00
description:  "Colin Crain › Perl Weekly Review #088"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #088"
image:        images/blog/p5-review-challenge-088.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-087/).* )

Welcome to the Perl review for **Week 088** of the Weekly Challenge! Here we will take the time to discuss the  submissions offered by the team, factor out the common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

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

**<big>For context</big>**  before we begin, you may wish to revisit either of the pages for the [**original tasks**](/blog/perl-weekly-challenge-088/) or the summary [**recap**](/blog/recap-challenge-088/) of the challenge. But don't worry, the challenges themselves will be briefly summarized, presented below as we progress from task by task. Oh, and one more thing before we get started:

### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.
**So finally, without further ado...**

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC088TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC088TASK2)   &nbsp;  &nbsp;  &nbsp;       •   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC088BLOGS)    &nbsp;  &nbsp;  &nbsp;       •

---

# TASK 1 {#PWC088TASK1}
## about the solutions

There were 32 submissions for the first task this past week. The pack broke along two basic approaches, to either actively construct the product for each element, or to create an intermediary value and derive the subproducts from this through division. There were also a few renegades, out there on the hoary fringes, blazing new paths across the uncharted wilderness. We'll get to them.

The question of overflows came up several times. By my thinking, I figure that if you're riding so close to the edge that a single multiplication will send you over it then likely your whole approach needs a rework. Not necessarily, mind you, but generally one should have a pretty good idea of the range of one's data, and whether the number 6x10^53 is liable to show up in a list of single-digit values. On the other hand if you were writing a general command line utility this case would need to be gracefully handled. So it really depends on how you choose to interpret the goal of the task. Me, I generally focus on the puzzle and the underlying logic more than constructing a robust app. Obviously others here have different priorities, which is as it should be. For a more thorough examination of this idea look down to the end where Abigail and Flavio address it.

## ADDITIVE or SUBTRACTIVE?

In sculpture, there is a basic dichotomy in method that generally holds: either to *add* stuff, like blobs of clay, to your creation until it looks like what you want, or to *remove* stuff, like marble chips, until you only want what's left. Michelangelo famously once stated:

>“The sculpture is already complete within the marble block, before I start my work. It is already there, I just have to chisel away the superfluous material.”

These particular terms, "additive" and "subtractive", are perhaps a little confusing to apply to the task at hand, not least because we aren't using addition but rather multiplication for our results. However the primal forms of the two strategies remain, and we can witness them here in this creative work as well. Either people actively *constructed* the product at each index from the values specified, or alternately the total product of *all* values was first obtained, and then the final products would be... *destructed?* from the larger by dividing out each individual element in turn. Yes, at some point each element is first mulitiplied into the total and later divided out again, but on the other hand the total product of the array need only be calculated once.

## CONSTRUCT a new array correctly formed
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/adam-russell/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/cheok-yin-fung/perl/ch-1.pl),
[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/cristian-heredia/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/dave-jacoby/perl/ch-1.pl),
[**Duane Powell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/duane-powell/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/e-choroba/perl/ch-1.pl),
[**Julio de Castro**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/juliodcs/perl/ch-1.pl),
[**Miguel Prz**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/miguel-prz/perl/ch-1.pl),
[**Nuno Vieira**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/nunovieira220/perl/ch-1.pl),
[**Samir Parikh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/samir-parikh/perl/ch-1.pl),
[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/walt-mankowski/perl/ch-1.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/wanderdoc/perl/ch-1.pl)

In the constructive paradigm, at each element of the input array a list of all the elements, save that one, is created and the product taken. Or each element of the is multiplied, but the target value is skipped over and excluded at the last minute. Either way, there proved to be a few ways to implement it, with the net result being the same.

Let's start with an example:

[**Duane Powell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/duane-powell/perl/ch-1.pl)

Duane lays out this method quite clearly. In the first loop we go through the input array and construct a sequence of arrays, each with one element spliced out, corresponding to successive indices in the input. In the followup, this list of array references is iterated over and the product of the subarrays are calculated.

```perl
foreach ( @N ) {
    my @temp = @N;
    splice @temp, $i, 1;
    push @M, \@temp;
    $i++;
}

my @total;
foreach my $array_ref ( @M ) {
    my $total = 1;
    $total *= $_ foreach (@{$array_ref});
    push @total, $total;
}
```

Another way to construct the sublist of required elements for each calculation is to create a complex array slice.


[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/adam-russell/perl/ch-1.pl)

demonstrates the form below. The array slice neatly selects the parts of the source array before and after each given element, which is then handed over to a subroutine to compute the product.

```perl
    sub list_product{
        my @numbers = @_;
        my $product = 1;
        map {$product *= $_ } @numbers;
        return $product;
    }


    for my $i (0 .. (@N - 1)){
        my @numbers = @N[0 .. $i - 1, $i+1 .. (@N - 1)];
        push @M, list_product(@numbers);
    }
```

A third way is to exclude individual indices from the product-taking.

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/dave-jacoby/perl/ch-1.pl)

shows us his method. Here Dave uses `grep` to filter the indices of the input array, then using `map` to convert the values into those of the array rather than the indices. Borrowing `product` from `List::Util` allows him to neatly preform the required calculation.

```perl
    sub array_of_products( $arrayref ) {
        my $end = -1 + scalar $arrayref->@*;
        my @output;
        for my $i ( 0 .. $end ) {
            push @output,
                product map { $arrayref->[$_] } grep { $_ != $i } 0 .. $end;
        }
        return @output;
    }
```

[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/wanderdoc/perl/ch-1.pl)

does nearly the same thing with an air of beautiful simplicity, using `reduce` instead of `product`, also taken from `List::Util`.

```perl
    sub aop
    {
         my @arr = @_;
         my @aop = map { my $n = $_;
                        reduce { $a * $b } @arr[grep { $_ != $n } 0 .. $#arr] }
                   0 .. $#arr;
         return @aop;
    }
```

I really like this layout for complex `map` functions. I find it the most readable formatting by far and encourage it's adoption.

[**Julio de Castro**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/juliodcs/perl/ch-1.pl)

Julio also gives us a complex mapping function, and I'm going to take a small liberty in formatting it along the same lines for clarity:

```perl
    sub array_of_product(@n) {
        [
            map {
                @{$_} == 0 ? 0 : reduce { $a * $b } @{$_}
            }
            map {
                my $idx = $_;
                [ map { $n[$_] } grep { $idx != $_ } 0 .. @n - 1 ]
            }
            0 .. @n - 1
        ]
    }
```

So, reading from the bottom up, in this multiple mapping function each index is first mapped to an array of every index in the input save that one. This list is then passed to a second mapping where it is reduced by multiplication. A special case is introduced for when the list length is is 0, to yield a 0 result. I'm not convivced the challenge has any meaning when given an empty list (I'm leaning toward NaN), but sure, why not? Just make sure to define it in the docs... What wew end up with is a very robust functional solution.

In a similar manner we can focus on the elements we wish to *exclude* and `next` right over them in the product calculation.

[**Miguel Prz**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/miguel-prz/perl/ch-1.pl)

demonstrates this approach:

```perl
    sub array_of_product {
        my @result;
        for( my $i=0; $i<@_; $i++ ) {
            my $product = 1;
            for( my $j=0; $j<@_; $j++ ) {
                next if $i == $j;
                $product *= $_[$j];
            }
            push @result, $product;
        }
        return @result;
    }
```

Finally,

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/e-choroba/perl/ch-1.pl)

avoids the issue of *excluding* individual values from the product-taking completely. Instead he uses a `local` copy to set individual values to 1 before applying the `product` function from `List::Util` we saw earlier. Sneaky! I like it.

```perl
    sub array_of_product {
        my (@n) = @_;
        return [map { local $n[$_] = 1; product(@n) } 0 .. $#n]
    }
```










## DIVIDE OUT the individual elements
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/alexander-pankoff/perl/ch-1.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/arne-sommer/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/athanasius/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/colin-crain/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/duncan-c-white/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/jaldhar-h-vyas/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/jo-37/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/laurent-rosenfeld/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/lubos-kolouch/perl/ch-1.pl),
[**Myoungjin Jeon**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/jeongoon/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/perlboy1967/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/pete-houston/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/roger-bell-west/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/sgreen/perl/ch-1.pl),
[**Tejas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/hstejas/perl/ch-1.pl), and
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/ulrich-rieke/perl/ch-1.pl)

In the divisive paradigm (yea, I'm just kind of making up words here, don't make too much of it), the product it taken for every every element in the input list, and then at each element this total is divided out again by the value, to produce the subproduct we are looking for. This approach requires us to first multiply and later divide out each element from the total, but this is balanced by the fact we need only multiply the complete list once.

Because the steps are so straightforward, there wasn't a tremendous amount of variety in this very popular choice of proceeding. There were variations in the control structures to do the looping, and the particular method of producing the product, but the core idea of dividing out individual elelments from a grand total remained consistent throughout.

[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/pete-houston/perl/ch-1.pl)

will start us off with a neat pure Perl rendition:

```perl
    my $prod = 1;
    $prod *= $_ for @in;

    my @out;
    push @out, $prod/$_ for @in;
```

That's really all there is to it.

[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/ulrich-rieke/perl/ch-1.pl)

here uses an explicit `for` loop to get the job done, after borrowing `product` from `List::Util` to reduce the list.

```perl
    use List::Util qw( product ) ;

    my $product = product @array ;
    my $len = scalar @array ;
    for my $i ( 0 .. $len - 1 ) {
        push @M , $product / $array[ $i ] ;
    }
```

Alternately,

[**Tejas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/hstejas/perl/ch-1.pl)

gives us a C-style `for` loop for the main iteration, but uses `map` in void context to create their product.

```perl
    map { $product *= $_ } @{$n};

    for(my $idx = 0; $idx < scalar @{$n}; $idx++) {
        push @m, $product / $n->[$idx];
    }
```

And

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/athanasius/perl/ch-1.pl)

has opted for using the more generic `reduce` with a multiplication function to create the initial product.

```perl
    my   $product = reduce { $a * $b } @N;                     # List reduction
    my   @M;
    push @M, $product / $N[$_] for 0 .. $#N;
```

Working on lists of data to output transformed versions of those lists naturally lends itself to functional paradigms, as in the `reduce` function above, where we apply a basic multiplication to the list as a data structure rather than a composite of parts. This in turn led to the widespread use of `map` to act on the list rather than crafting a more traditional loop. With the use of `map`, though, the already concise code becomes even more compact.

As the self-similarity between solutions is quite evident, I'll open the discussion with

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/colin-crain/perl/ch-1.pl)

It's pretty simple, really.

```perl
    my $product = 1;
    $product *= $_ for @input;

    my @output = map { $product / $_ } @input;
```

If we add `product` from `List::Util` things get even simpler, and faster as that's interfaced to compiled C code.

[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/alexander-pankoff/perl/ch-1.pl)

```perl
    my $total = product(@arr);
    my @out = map { $total / $_ } @arr;
```

Does it get any more compact than that? Not really.

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/jo-37/perl/ch-1.pl)

seems to have eliminated a few characters, while adding a bogus data clause. It's not always necessary to pass a proper block to `map`.

```perl
    sub prod_arr {
        my $prod = product @_;
        die "invalid data" unless $prod;

        map $prod / $_, @_
    }
```

[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/arne-sommer/perl/ch-1.pl)

went with `reduce`, instead of `product`, to the same effect:

```perl
    my $product = reduce { $a * $b } @N;

    my @M = map { $product / $_ } @N;
```


And

[**Myoungjin Jeon**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/jeongoon/perl/ch-1.pl)

wraps his `map` up directly into his output IO, like this:

```perl
    my $p = product @n;

    say "[",
        join( ",",
              map { $p / $_ } @n ),
        "]";
```

In a final note, we have a well-annotated submission from

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/sgreen/perl/ch-1.pl)

In addition to some basic input validation, Simon has chosen to include a special case for when @N only has one element, deciding this should return 0. Hmmm... Ok, he says... As with Julio, above, I'm not convinced such a case can even be considered to be meaningful in the context of the challenge as given. I mean, if you have one element, what *is* the product of the list excluding that element, being the entirety of the list? I find contemplating the whole idea of calculating the product of «nothing» immediately leads me into deeply vague ontological territory. I've written here before in a similar vein about leading zeros and placeholders for nothingness, but this takes that discussion to a whole new level. There's even a seemingly mystical resonance to this particular instance as well, much like the sound of one hand clapping. I don't think a solid answer is within the scope of this report, so, as I said before, make sure it makes it to the documentation.

In other remarks I must applaud his commenting. Code may well be self-explanatory, but it's hubris to *assume* it is, and a little guidance and consideration can go a long way in this world. So be like Simon. Simon's got it going on.

```perl
    # Special case if there is only one number
    if ( scalar(@N) == 1 ) {
        say '0';
        return;
    }

    # Calculate the product of all numbers
    my $product = product(@N);

    # The solution for each number is product divided by the number
    say join ', ', map { $product / $_ } @N;
```



























## off the BEATEN PATH, into the WILDERNESS! ONWARD!
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/abigail/perl/ch-1.pl) and
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/polettix/perl/ch-1.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/wlmb/perl/ch-1.pl), and
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/cheok-yin-fung/perl/ch-1.pl)

There were two submissions explicitly grappling with the idea of overflowing integers, coming to essentially the same unusual methodology.

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/abigail/perl/ch-1.pl)

Abigail has given us an interesting strategy to avoid possible overflows by calculating each successive instance of @M from the previous. First he calculates $M[0] from multiplying out the array slice following the first element, using `product` from `List::Util`. Then for the following value, he takes this product, divides out $N[$i] (which will compose part of it), then multiplies back in $N[$i-1], the part previously left out. Each successive value is then calculated from the previous in this manner. The active principle here being to never exceed the maximum value contained in the result @M at any intermediate point within the calculation.

```perl
    while (<>) {
        # Read in a line of data.
        my @N = /[1-9][0-9]*/g;
        # Calculate M [0], and print it.
        printf "%d", my $P = product @N [1 .. $#N];
        # For each i > 0, calculate M [i] from M [i - 1], N [i] and N [i - 1],
        # and print it.
        printf ", %d", $P = $P / $N [$_] * $N [$_ - 1] for 1 .. $#N;
        print "\n";
    }
```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/polettix/perl/ch-1.pl)

Flavio has, alternately, given us three solutions, running the full gamut of approaches. These are two submissions expressing both of the archetypical additive and subtractive solutions, with their faults noted, as well as an overflow protective method that closely aligns with Abigail's. I have to say combining the mathematical efficiency of the divisive solution while avoiding the overhead required makes a convincing case for the method.

```perl
    sub array_of_product (@N) {
       my $p = 1;
       $p *= $_ for @N[0 .. $#N - 1];
       return map {$p = $N[$_ - 1] * ($p / $N[$_]) } 0 .. $#N;
    }
```

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/cheok-yin-fung/perl/ch-1.pl)

CY has given us a unique version of a filtered constructive solution, in the form of one-liner:

```bash
perl -e 'for $j (0..scalar @ARGV-1) {$a = 1; eval {$a *= $ARGV[$_] if $_ != $j} for (0..scalar @ARGV-1); print "$a "; }' 5 2 1 4 3
```

It's nice. I like it.

And finally, someone has brought us a solution using the Perl Data Language!

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/wlmb/perl/ch-1.pl)

I'm always excited when the enormous power of the PDL is brought to bear on our little tasks. Somewhat akin to putting advanced rocket fuels in a go-kart, or perhaps bringing a hand grenade to a knife-fight, the PDL appears to be able to make short work of arbitrarily complex problems in a seemingly effortless manner.

```perl
    sub array_of_products {
        use PDL;                                        #use the perl data language
        use PDL::NiceSlice;
        my $input = pdl(@_);                            #input piddle (PDL array)
        my $matrix = $input(:,*$input->dim(0))->copy;   #replicate row to produce a matrix
        $matrix->diagonal(0,1) .= 1;                    #replace diagonal by 1's
        my $output = $matrix->prodover;                 #multiply elements row-wise
        return $output->list;                           #convert to perl list
    }
```

I think interested parties should be able to follow the action quite nicely. Replacing the diagonal with 1s is an amazing piece of functionality that eliminates one value from the product of each row in a progressive manner, being exactly what we want. It's a beautiful thing to behold.


For a more detailed introduction to and description of advanced rocket fuels, poke around and locate a copy of  *Ignition! An Informal History of Liquid Rocket Propellants* by John D. Clark (Rutgers University Press, 1972), which contains many passages like the following tidbit:

>”It [chlorine trifloride, ClF<sub>3</sub>] is, of course, extremely toxic, but that’s the least of the problem. It is hypergolic with every known fuel, and so rapidly hypergolic that no ignition delay has ever been measured. It is also hypergolic with such things as cloth, wood, and test engineers, not to mention asbestos, sand, and water — with which it reacts explosively. It can be kept in some of the ordinary structural metals — steel, copper, aluminium, etc. — because of the formation of a thin film of insoluble metal fluoride which protects the bulk of the metal, just as the invisible coat of oxide on aluminium keeps it from burning up in the atmosphere. If, however, this coat is melted or scrubbed off, and has no chance to reform, the operator is confronted with the problem of coping with a metal-fluorine fire. For dealing with this situation, I have always recommended a good pair of running shoes.”


---

# TASK 2 {#PWC088TASK2}
## about the solutions

There were 31 submissions for the second task this past week. With that many variations it's unfortunately not possible to review each and every one, but on examination some broader categories emerged.

The basic progression, as specified, was to read along the top, down the right side, reversed along the bottom and then up the left side to complete one looping of the spiral. At that point, once one complete ring was circumnavigated, the process could then be repeated on the inner matrix remaining. The cycling could be tracked to constrict by means of an offset to the edges, or a dummy parallel matrix identifying boundaries, or in some methods the cells were physically removed. In any case the process is repeated, either through a loop or recursion, until there are no more cells to be read.

## take a WALK
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/dave-jacoby/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/e-choroba/perl/ch-2.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/lubos-kolouch/perl/ch-2.pl),
[**Miguel Prz**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/miguel-prz/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/perlboy1967/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/pete-houston/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/roger-bell-west/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/ulrich-rieke/perl/ch-2.pl),
[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/walt-mankowski/perl/ch-2.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/wanderdoc/perl/ch-2.pl)

Perhaps the most true to vision version of spiralling enacted by the group was to walk the matrix, so to speak: stepping one step forward and reading a value, turning right whenever we get to a border, closing in those borders as we turn corners and read cells. It's somewhat akin to a simple recursion: we don't necessarily need to know exactly where we are, we only need to know how to take the next step forward and when to stop. We start moving left-to-right across the first row, turn right at the end, and continue turning right at an edge or an already visited cell, stopping when we run out of cells. Think of it like a game of snake, if you will.

[**Miguel Prz**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/miguel-prz/perl/ch-2.pl)

To keep track of border detection and visited cells, Miguel constructs an auxiliary matrix of 0s, bounded by a ring of 1s, filling in cells on this matrix with 1s as they are read on the original. Constructing this parallel matrix was a common method, as was the exit case of counting the steps to completion, evaluating against the computed cell count of (rows) × (columns).

```perl
    push $aux_matrix->@*, [ (1) x ($size_x+2)   ];
    push $aux_matrix->@*, [ 1, (0) x $size_x, 1 ] for ( 1 .. $size_y );
    push $aux_matrix->@*, [ (1)  x ($size_x+2)  ];

    my $direction = 0;
    my $visits = 0;
    my ($cx, $cx_1) = (0, 0);
    my ($cy, $cy_1) = (1, 1);

    while( $visits < $nodes ) {

        $direction == 0 && $cx++;
        $direction == 1 && $cy++;
        $direction == 2 && $cx--;
        $direction == 3 && $cy--;

        if( $aux_matrix->[$cy][$cx] ) {
            $direction = ++$direction % 4;
            ($cx, $cy) = ($cx_1, $cy_1);
        }
        else {
            $aux_matrix->[$cy][$cx] = 1;
            ($cx_1, $cy_1) = ($cx, $cy);
            push @result, $matrix[$cy-1][$cx-1];
            $visits++;
        }
    }
```

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/sgreen/perl/ch-2.pl)

Simon again has delivered a well-commented example, laying out the steps as he moves forward, spiraling in.

```perl
    my $rows = scalar(@array);
    my $cols = scalar( @{ $array[0] } );

    # Right, down, left and up
    my @directions = ( [ 0, 1 ], [ 1, 0 ], [ 0, -1 ], [ -1, 0 ] );

    # Map out the values we've used
    my @used = ( map { [ (0) x $cols ] } ( 1 .. $rows ) );

    # We start at the top left, moving right
    my $x         = 0;
    my $y         = 0;
    my $direction = 0;
    my @solutions = ();

    # Loop until we've found all the numbers
    while ( scalar(@solutions) < $rows * $cols ) {
        push @solutions, $array[$x][$y];
        $used[$x][$y] = 1;

        my $next_x = $x + $directions[$direction][0];
        my $next_y = $y + $directions[$direction][1];

        # If we've reached the bounds of our grid, or found a value
        #  we've already used, we need to switch direction
        if (   $next_x == $cols
            or $next_y == $rows
            or $next_x < 0
            or $next_y < 0
            or $used[$next_x][$next_y] )
        {
            $direction = ++$direction % 4;
            $next_x    = $x + $directions[$direction][0];
            $next_y    = $y + $directions[$direction][1];
        }

        $x = $next_x;
        $y = $next_y;
    }
```

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/roger-bell-west/perl/ch-2.pl)

Roger does a fine job of condensing his movement into a tight set of steps.

```perl
    my @dir = (
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
             );
    my ( $x, $y, $d ) = ( 0, 0, 0 );
    foreach ( 2..$mx * $my ) {
        $v[$x][$y]=1;
        my ( $nx, $ny );
        while ( 1 ) {
            ( $nx, $ny ) = ( $x + $dir[$d][0], $y + $dir[$d][1] );
            if ( $nx < 0 || $nx >= $mx || $ny < 0 || $ny >= $my || $v[$nx][$ny]==1 ) {
                $d++;
                $d%=4;
            } else {
                last;
            }
        }
        ( $x, $y ) = ( $nx, $ny );
        push @o, $m->[$x][$y];
    }
```

As does

[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/pete-houston/perl/ch-2.pl)

```perl
    my @turns = ([0, 1], [1, 0], [0, -1], [-1, 0]);
    my @out;

    # Start at top left, moving right
    my ($r, $c) = ($rmin, $cmin);
    my $move = 0;

    while ($rmin <= $rmax && $cmin <= $cmax) {
        push @out, $matrix->[$r][$c];
        my ($rnext, $cnext) = ($r + $turns[$move][0], $c + $turns[$move][1]);
        if ($rnext < $rmin ||
            $rnext > $rmax ||
            $cnext < $cmin ||
            $cnext > $cmax) {
            # Turn right
            if    ($rnext < $rmin) { $cmin++; }
            elsif ($rnext > $rmax) { $cmax--; }
            elsif ($cnext > $cmax) { $rmin++; }
            else                   { $rmax--; }
            $move = ($move + 1) % 4;
            ($r, $c) = ($r + $turns[$move][0], $c + $turns[$move][1]);
        } else {
            ($r, $c) = ($rnext, $cnext);
        }
    }
```


[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/perlboy1967/perl/ch-2.pl)

Niels avoids the complications of switching movement between row-wise and column-wise paths by converting his matrix into a hash reference data structure. By deleting keys once read, he can know when to change direction and when he has completed the read.

He takes an uncommon approach to changing directions as well, rather than ratcheting the index modulo 4 on a fixed array he continuously cycles through the directions to the next cell by shifting and pushing members of a common direction list, always reading the first element.

```perl
    my @dirVector = (
        [ 0, 1],
        [ 1, 0],
        [ 0, -1],
        [-1, 0]
     );

    LOOP:
    while ( 1 ) {
        push( @O, delete( $hrM->{ $r }{ $c } ) );

        my $rot = 0;
        while ( !exists(  $hrM->{ $r + $dirVector[0][0] }{ $c + $dirVector[0][1] } )  ) {
            push( @dirVector, shift( @dirVector ) );
            $rot++;
            last LOOP if ( $rot > 1 );
        }

        $r += $dirVector[0][0];
        $c += $dirVector[0][1];
    }
```






## TARGET, CIRCLE and CLOSE IN

Because of the discreet, two-dimensional nature of a matrix, what we normally think of when we consider the continuous function of a spiral doesn't really map over very well. We can visualize the motion as moving along each face of the matrix in turn: top, right, bottom and left, and once finished in this circumnavigation we have something more resembling a circle than a spiral. Moving inward one square and repeating, the result is easily viewed as a group of discreet concentric rings rather than a continuous function.

### using an OFFSET
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/abigail/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/cheok-yin-fung/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/colin-crain/perl/ch-2.pl),
[**Duane Powell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/duane-powell/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/polettix/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/jaldhar-h-vyas/perl/ch-2.pl),
[**Myoungjin Jeon**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/jeongoon/perl/ch-2.pl), and
[**Tejas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/hstejas/perl/ch-2.pl)

The upshot of this modeling is that if we know how to scribe a ring, and keep track of the count as we move inwards, we can read all of the data in an orderly fashion.

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/polettix/perl/ch-2.pl)

Flavio has a triplet of functions to grab either a single row, a single column, or a 'frame' — being an encircling set of cells, which in  turn uses the other two functions in successive reads. By incrementing  the start values by 1 and shrinking the total lengths by 2 at each encirclement, he keeps track of the offset until the unread matrix remaining is a single row or column, or vanishes completely.

```perl
    sub get_row ($M, $r, $c, $n) { $M->[$r]->@[$c .. $c + $n - 1] }
    sub get_col ($M, $r, $c, $n) { map { $M->[$r + $_][$c] } 0 .. $n - 1 }
    sub get_frame ($M, $r, $c, $nr, $nc) {
       ($nr, $nc) = ($nr - 1, $nc - 1); # more useful like this
       return (
          get_row(        $M, $r      , $c      , $nc),
          get_col(        $M, $r      , $c + $nc, $nr),
          reverse(get_row($M, $r + $nr, $c +   1, $nc)),
          reverse(get_col($M, $r +   1, $c      , $nr)),
       );
    }

    sub spiral_matrix ($M) {
       my ($rows, $cols) = (scalar($M->@*), scalar($M->[0]->@*));
       my ($sr, $sc) = (0, 0);
       my @v;
       while ($rows > 0 && $cols > 0) {
          if ($rows == 1)    { push @v, get_row($M, $sr, $sc, $cols) }
          elsif ($cols == 1) { push @v, get_col($M, $sr, $sc, $rows) }
          else {               push @v, get_frame($M, $sr, $sc, $rows, $cols) }
          ($sr, $sc, $rows, $cols) = ($sr + 1, $sc + 1, $rows - 2, $cols - 2);
       }
       return @v;
    }
```

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/colin-crain/perl/ch-2.pl)

For my own solution I march around the perimeter in ever tightening rings, keeping track of the offsets with a single `$rank` paremeter that gets incremented at every iteration. For those wondering, the unary negation on `-spiraling` turns the bareword into a number before the compiler can choke on it. It's a way to be more informative than `while (1) { ... }`, as whatever that number is, it won't be 0, and I think it reads well. I'm open to input on whether this hack is good practice.

```perl
    sub spiralize {
        my ($mat) = @_;
        my $cols  = $mat->[0]->@*;
        my $rows  = $mat->@*;
        my $rank  = 0;           ## loop count of spiral, 0-based
        my $out   = [];

        while (-spiraling) {
            ## upper - left to right
            return $out if $rank > ceil( $rows / 2 - 1);
            push $out->@*, $mat->[$rank]->@[$rank..$cols-$rank-1];

            ## right - top to bottom
            return $out if $rank > ceil( $cols / 2 - 1);
            for my $row ( $rank+1..$rows-$rank-2 ) {
                push $out->@*, $mat->[$row][$cols-$rank-1];
            }

            ## lower - right to left
            return $out if $rank > floor( $rows / 2 - 1);
            push $out->@*, reverse $mat->[$rows-$rank-1]->@[$rank..$cols-$rank-1] ;

            ## left - bottom to top
            return $out if $rank > floor( $cols / 2 - 1);
            for my $row ( reverse $rank+1..$rows-$rank-2 ) {
                push $out->@*, $mat->[$row][$rank];
            }
            $rank++
        }
    }
```

[**Duane Powell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/duane-powell/perl/ch-2.pl)

Duane gives us a nicely commented solution, with a 'bounding box' comprising four separate variables to constrict the rings.

```perl
    sub matrix_spiral {
        my $matrix = shift;

        # Spiral around the matrix by traversing: east, south, west and then north.
        # We will contract the bounding box when we turn north.
            # Determine dimensions of this matrix and its bounding box.
        my ($a, $b, $c, $d) = (0, 0, scalar( @{$matrix} )-1, scalar( @{$matrix->[0]} )-1);

        my $out; # printed output
        my $element_max = ($c + 1) * ($d + 1); # total possible element of the spiral
        my $element_count = 0;

        # (x,y) are the current element.
        # Start traversing from just outside the matrix at north-west corner (-1, d+1)
        my ($x, $y) = (-1, $d+1);
        LAST: while (1) {
            # traverse east
            ($x, $y) = ($x+1, $y-1); # (x,y) = (0,d) if this is the very first element
            while ($x <= $c) {
                $out .= $matrix->[$y][$x] . ",";
                last LAST if (++$element_count == $element_max);
                $x++;
            }
            # traverse south
            ($x, $y) = ($c, $y-1);
            while ($y >= $b) {
                $out .= $matrix->[$y][$x] . ",";
                last LAST if (++$element_count == $element_max);
                $y--;
            }
            # traverse west
            ($x, $y) = ($x-1, $y+1);
            while ($x >= $a) {
                $out .= $matrix->[$y][$x] . ",";
                last LAST if (++$element_count == $element_max);
                $x--;
            }

            # tighten the spiral's bounding box
            $a++; $b++, $c--; $d--;

            # traverse north
            ($x, $y) = ($x+1, $y+1);
            while ($y <= $d) {
                $out .= $matrix->[$y][$x] . ",";
                last LAST if (++$element_count == $element_max);
                $y++;
            }
        }
        $out = join(', ',split(/,/,$out));
        say "\t[$out]";
    }
```

[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/jaldhar-h-vyas/perl/ch-2.pl)

Jaldhar similarly uses a set of top, right, bottom and left variables to establish his offsets.

```perl
while ($top < scalar @matrix / 2) {
    if ($top == $bottom) {
        push @spiral, @{$matrix[$top]}[$left];
    } else {

        for my $i ($left .. $right) {
            push @spiral, @{$matrix[$top]}[$i];
        }

        for my $i ($top + 1 .. $bottom - 1) {
            push @spiral, @{$matrix[$i]}[$right];
        }

        for my $i (reverse ($left .. $right)) {
            push @spiral, @{$matrix[$bottom]}[$i];
        }

      for my $i (reverse ($top + 1 .. $bottom - 1)) {
            push @spiral, @{$matrix[$i]}[$left];
        }
    }

    $top++;
    $right--;
    $bottom--;
    $left++;
}
```


[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/cheok-yin-fung/perl/ch-2.pl)

CY gives us another circle and offset solution, but adds two interesting variations no one else thought to provide: in one she makes allowance to spiral in the anticlockwise direction, in the other, she provides an undoing function that will take a spiralized list and roll it back up (clockwise) into a multidimensional matrix. In this case, to misquote Lady Macbeth, what's done *can* be undone.

Her methodology is somewhat different than the pack as well; this is the reverse version, which accepts an unwound matrix and coils it back up. The spiralizing complement function, `flat`, works in a very similar fashion.

```perl
    sub matrixize {
        my @list = @{$_[0]};
        my $M = $_[1];
        my $N = $_[2];
        my @mat;
        my @helper_mat;
        push @helper_mat, [("0") x $N] for (0..$M-1);

        my @row_dir = (  0, +1,  0, -1 );
        my @col_dir = ( +1,  0, -1,  0 );

        my ($r, $c) = ( 0 , 0 );
        ${$mat[$r]}[$c] = $list[0];
        ${$helper_mat[$r]}[$c] = 1;

        my @numbering = (
            [1..$N-1],
            [$N..$N+$M-2],
            [$N+$M-1..$N+$M+$N-3],
            [$N+$M+$N-2..($M-1)*2+($N-1)*2-1]
        );

        my $count = 1;
        for my $q (0..3) {
            for (@{$numbering[$q]}) {
                $r += $row_dir[$q];
                $c += $col_dir[$q];
                ${$mat[$r]}[$c] = $list[$count];
                ${$helper_mat[$r]}[$c] = 1;
                $count++;
            }
        }

        my $time_now = 3;
        my $success_click = undef;
        while ($count < $M*$N) {
            if ($success_click) {
                $r += $row_dir[$time_now];
                $c += $col_dir[$time_now];
                if (${$helper_mat[$r]}[$c] == 0) {
                    ${$mat[$r]}[$c] = $list[$count];
                    ${$helper_mat[$r]}[$c] = 1;
                    $success_click = 1;
                    $count++;
                } else
                {
                    $success_click = undef;
                    $r -= $row_dir[$time_now];
                    $c -= $col_dir[$time_now];
                }
            } else
            {
                $time_now = ($time_now+1) % 4;
                $success_click = 1;
            }
        }
        return @mat;
    }
```



### REMOVING values as we READ THEM
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/adam-russell/perl/ch-2.pl),
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/alexander-pankoff/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/athanasius/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/duncan-c-white/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/james-smith/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/laurent-rosenfeld/perl/ch-2.pl),
[**Nuno Vieira**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/nunovieira220/perl/ch-2.pl), and
[**Samir Parikh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/samir-parikh/perl/ch-2.pl)

After examining many variants, I appears that physically removing elements after reading led to quite a bit of simplification. To wit: there's no danger of accidentally reading the wrong ring of cells if they quite literally aren't present. Perl arrays always know their own length, so removing cells as they are read essentially offloads the bookkeeping for an offset onto the data structure itself, which is nice and clean.

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/james-smith/perl/ch-2.pl)

James demonstrates how simple the 'destructive method' as he puts it, can be.

```perl
    sub spiral_matrix {
      my @rows = map { [@{$_}] } @_;
      ## Note this is a destructive method... So we take a copy of the elements of the array ## o/w we will blow contents of sub-arrays away.
      my @res;
      while( @rows && @{$rows[0]} ) {
        ## We work around the square.....
        ## TOP      >>>> we just push to the answers... (and remove them from the array!)
        ## RIGHT    vvvv Remaining rows we take off the last element... and push to the answer array
        ## BOTTOM   <<<< (if there is one) we add it to the answers in reverse and remove from the array
        ## LEFT     ^^^^ Finally we push the first element of each row into the answers {note we go up the array
        ## Repeat until the array is empty (either has no rows or no columns [entries in first row])
        push @res,         @{shift @rows};
        push @res, pop     @{$_         } foreach grep { @{$_} }         @rows;
        push @res, reverse @{pop   @rows} if                             @rows;
        push @res, shift   @{$_         } foreach grep { @{$_} } reverse @rows;
      }
      return \@res;
    }
```

[**Samir Parikh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/samir-parikh/perl/ch-2.pl)

Samir gives us a recursive `return_spiral` variation with exit cases when the matrix is reduced to a either a single row or column, or nothing at all. The commentary gives us the blow-by-blow action.

```perl
    sub return_spiral {
        my @array = @_;
        my @spiral;
    # handle special cases
    # just one row
        if (scalar(@array) == 1) {
            return ( @{$array[0]} );
    # just one column
        } elsif ( scalar ( @{$array[0]} ) == 1 ) {
            for (my $i = 0; $i < scalar(@array); $i++) {
                push ( @spiral, @{$array[$i]}[0] );
            }
            return ( @spiral );
    # we have at least a 2 x 2 array
        } else {
    # get first row
            push ( @spiral, @{$array[0]} );
    # get right column
            my $right_ci = scalar ( @{$array[0]} ) - 1;
            for (my $y = 1; $y < scalar ( @array ); $y++) {
                push ( @spiral, @{$array[$y]}[$right_ci] );
            }
    # remove last element from last row
            pop ( @{$array[$#array]} );
    # get last row in reversed order
            push ( @spiral, reverse ( @{$array[$#array]} ) );
    # get left column
            for (my $i = ($#array - 1); $i > 0; $i--) {
                push ( @spiral, @{$array[$i]}[0] );
            }
    # check if resulting array is empty (i.e. we were originally sent
    # just a two-row or two-column array to begin with
            if (scalar( @array ) == 2 || scalar ( @{$array[0]} ) == 2) {
                return ( @spiral );
            } else {
    # trim array
    # trim top row:
                shift @array;
    # trim bottom row:
                pop @array;
    # remove first and last element from remaining rows
                for (my $i = 0; $i < scalar(@array); $i++) {
                    shift ( @{$array[$i]} );
                    pop   ( @{$array[$i]} );
                }
                return ( @spiral, &return_spiral(@array) );
            }
        }
    }
```

[**Nuno Vieira**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/nunovieira220/perl/ch-2.pl)

Nuno chooses a recursive method as well, using `splice` to do his butchering.

```perl
    sub handleMatrix {
        my @matrix = @_;
        my @res = (  );

        return @res if( scalar @matrix == 0 );

        my $firstRow = splice( @matrix, 0, 1 );
        push @res, @{ $firstRow };

        if( scalar @matrix > 0 ) {
            for( my $i = 0; $i < scalar @matrix - 1; $i++ ) {
                my $lastElem = splice( @{ $matrix[$i] }, scalar( @{ $matrix[$i] } ) - 1, 1 );
                push @res, $lastElem;
            }

            my $lastRow = splice( @matrix, scalar( @matrix ) - 1, 1 );
            push @res, reverse @{ $lastRow };

            for( my $i = scalar @matrix - 1; $i >= 0; $i-- ) {
                my $firstElem = splice( @{ $matrix[$i] }, 0, 1 );
                push @res, $firstElem;
            }
        }

        push @res, handleMatrix( @matrix );

        return @res;
    }
```

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/adam-russell/perl/ch-2.pl)

Adam creates four helper functions to lop off parts of the matrix as they are processed, yielding a very simple core control structure that directly prints the results as they are gathered. His helper functions use a combination of `splice` and assignment to array slices to remove parts of his matrix once read.

```perl
    sub spiral_print{
        my(@matrix) = @_;
        print "[";
        {
            @matrix = print_remove_top(@matrix) if @matrix;
            @matrix = print_remove_right(@matrix) if @matrix;
            @matrix = print_remove_bottom(@matrix) if @matrix;
            @matrix = print_remove_left(@matrix) if @matrix;
            redo if @matrix;
        }
        print "\b\b]\n";
    }
```


[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/alexander-pankoff/perl/ch-2.pl)

Alexander does his trimming out-of-order, first the whole of the top and bottom, followed by the sides, while saving the values to temporary arrays. This simplifies things quite a bit, and at the end of every looping the snatched component parts are reassembled in the correct order before assignment to the return value. Recursion completes the looping until the matrix is consumed.

I found in my own solution that the symmetries of taking complete rows and inset columns made reversing the bottom and left sides much cleaner and easier to follow.

```perl
    sub spriral_matrix($matrix) {
        my @matrix = @$matrix;

        return () if !@matrix;

        # get top and bottom row  an remove them from the input
        my ( $top, $bot );
        ( $top, @matrix ) = @$matrix;
        ( $bot, @matrix ) = ( $matrix[-1], @matrix[ 0 ... ( $#matrix - 1 ) ] );

        # get left and right side from the remaining rows
        my @left_side  = map { $_->[0] } @matrix;
        my @right_side = map { $_->[-1] } @matrix;

        # remove left and right side from the matrix
        @matrix = map { [ @{$_}[ 1 ... ( $#$_ - 1 ) ] ] } @matrix;

        return ( @$top, @right_side, reverse( @{ $bot // [] } ),
            reverse(@left_side), spriral_matrix( \@matrix ) );
    }
```

## manipulate the MATRIX
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/arne-sommer/perl/ch-2.pl), and
[**Julio de Castro**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/juliodcs/perl/ch-2.pl)

A truly novel approach that worked out quite well is to read and remove the top row of the matrix, then, instead of changing our read direction, simply rotating the matrix underneath our feet one step counterclockwise.

[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/arne-sommer/perl/ch-2.pl)

Arne reached for a matrix module to do the transformation, in this case `Math::Matrix`. From that point the actual manipulation is quite simple. He reads the top row, adds it to the output, deletes it from the matrix, then rotates the matrix 90°. Repeat until the matrix is consumed.
Very nice.

```perl
    my $m = Math::Matrix->new(@rows);
    my @spiral;

    while ($m->nrow())
    {
      my $row = $m->getrow(0);

      push(@spiral, @{@{$row}[0]});
      $m = $m->delrow(0);
      $m = $m->rot90();
    }
```

[**Julio de Castro**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/juliodcs/perl/ch-2.pl)

Julio came to the same conclusion for his process, but uses his own routine to perform the transformation. As it turns out, this action, rotating a matrix, can be executed in a few short lines of code. His `rotator` function does the work.

The team visited the idea of rotating matrices back in [PWC 053](https://perlweeklychallenge.org/blog/review-challenge-053/), for those interested in more examples on how to go about this.

```perl
sub spiral_matrix($matrix, $acc = []) {
    return $acc if $matrix->@* == 0;
    my @new_acc = ($acc->@*, (shift $matrix->@*)->@*);

    spiral_matrix(rotator($matrix), \@new_acc);
}

sub rotator($matrix) {
    return [] if $matrix->@* == 0;
    my $w = $matrix->[0]->@*;

    [map {my $i = $_;[ map {$_->[$i]} $matrix->@* ]} reverse 0 .. $w - 1]
}
```


## RENEGADES, REVELATIONS and WANDERING ASCETIC VISIONARIES

### unleash the PDL!
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/jo-37/perl/ch-2.pl) and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/wlmb/perl/ch-2.pl)

I don't hold back on my pleasure in discovering solutions utilizing the Perl Data Language. Every opportunity dissecting them teaches me a little more about the data processing power of this amazing tool.

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/jo-37/perl/ch-2.pl)

In our opening argument, Jorg takes his matrix and sections off parts using the PDL `slice` function, advancing around in a clockwise fashion and reconstructing the matrix along the way from the remaining sections after slicing. This is akin to the archetypical encircle and remove after reading method.

```perl
    # Instructions for the unrolling engine:
    # - edge (as slice arg)
    # - remaining matrix (as slice arg)
    # - affected dimension (row or column)
    # by direction.
    my @instr = (
        ['X,(0)', 'X,1:-1', 1],        # first row, east
        ['(-1),X', '0:-2,X', 0],    # last column, south
        ['-1:0,(-1)', 'X,0:-2', 1],    # last row, west
        ['(0),-1:0', '1:-1,X', 0]);    # first column, north

    # Unroll given matrix, i.e. return the elements as a 1-d list in
    # spiral form.
    sub unroll {
        # Input matrix, starting direction and result.
        my ($m, $dir, $unrolled) = (long(shift), 0, PDL->null);

        say $m;
        die "not a matrix" unless $m->ndims == 2;

        while (1) {
            # Get the instructions.
            my ($edge, $remaining, $dim) = $instr[$dir]->@*;

            # Append current edge to the result.
            $unrolled = $unrolled->append($m->slice($edge));

            # Stop if the current edge was the last remaining dimension.
            last if $m->dim($dim) == 1;

            # Take the remaining matrix.
            $m = $m->slice($remaining);

            # Switch direction.
            $dir = ($dir + 1) % 4;
        }

        say $unrolled;
        $unrolled->unpdl;
    }
```

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/wlmb/perl/ch-2.pl)

Welcoming Luis to the party, we find him bringing us a PDL analogue to the slice and rotate method, reading the top row, removing it, rotating the matrix underfoot and repeating until the matrix is consumed.

```perl
    sub spiral_matrix {
        use PDL;                                    # use the perl data language
        use PDL::NiceSlice;
        my $input = pdl(@_);                        # input piddle (PDL 2D array)
        my @output;
        return if $input->dim(1) == 0;              # 0 rows no elements
        while ($input->dim(0) > 0) {                # until no more columns
            push @output, $input->(:,(0))->list;    # walk through row
            last if $input->dim(1) == 1;            # no more rows
            $input = $input->(-1:0,1:-1)            # reflect rows, remove one row
                ->transpose;                        # rotate
        }
        return @output
    }
```

<br>

# BLOGS {#PWC080BLOGS}

***

**That's it for me this week, people! Resolute and unbroken by the torrential influx, I have maintained my bearings. Looking forward to next wave, the perfect wave, I am: your humble servant.**

## But if Your *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC088BLOGS}
## then *RUN* *(dont walk!)* to the *WATERING HOLE*
## and *READ* these *BLOG* *LINKS*:

***( don't think, trust your training, you're in the zone, just do it ... )***


**Abigail**

 * [Perl Weekly Challenge 88, Part 1 &#8211; Abigail&#039;s Programming Blog](https://wp.me/pcxd30-7I) ( *Perl* )
 * [Perl Weekly Challenge 88, Part 2 &#8211; Abigail&#039;s Programming Blog](https://wp.me/pcxd30-8Z) ( *Perl* )

**Adam Russell**

 * [Perl Weekly Challenge 088 - RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2020/11/29) ( *Perl* )
 * [Perl Weekly Challenge 088 - RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/prolog/2020/11/29) ( *Prolog* )

**Arne Sommer**

 * [Arrayed Spiral with Raku and Perl](https://raku-musings.com/arrayed-spiral.html) ( *Perl & Raku* )

**Cheok-Yin Fung**

 * [CY's Take on PWC#088 | Moments on Perl or other Programming Issues](http://blogs.perl.org/users/c_y_fung/2020/11/cys-take-on-pwc088.html) ( *Perl* )

**Colin Crain**

 * [The Product of the Absence &#8211; Spiralize the Day Away &#8211; Programming Excursions in Perl and Raku](https://colincrain.com/2020/11/29/the-product-of-the-absence-spiralize-the-day-away/) ( *Perl & Raku* )

**Flavio Poletti**

 * [PWC088 - Array of Product - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2020/11/26/pwc088-array-of-product/) ( *Perl* )
 * [PWC088 - Spiral Matrix - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2020/11/27/pwc088-spiral-matrix/) ( *Perl* )

**Jaldhar H. Vyas**

 * [Perl Weekly Challenge: Week 88](https://www.braincells.com/perl/2020/11/perl_weekly_challenge_week_88.html) ( *Perl & Raku* )

**Kang-min Liu**

 * [Solving Perl Weekly Challenge 088 -- Array of Prodict vs Spiral Matrix.](https://gugod.org/2020/11/pwc-088-en/) ( *Raku* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 88: Array of Products and Spiral Matrices](http://blogs.perl.org/users/laurent_r/2020/11/perl-weekly-challenge-88-array-of-products-and-spiral-matrices.html) ( *Perl & Raku* )

**Lubos Kolouch**

 * [Lubos Kolouch](https://v.kolouch.org/nextcloud/index.php/apps/cms_pico/pico/lubos/20201128_perl_weekly_088) ( *Perl* )

**Roger Bell_West**

 * [RogerBW&#39;s Blog: Perl Weekly Challenge 88: Spiral Product](https://blog.firedrake.org/archive/2020/11/Perl_Weekly_Challenge_88__Spiral_Product.html) ( *Perl & Raku* )

**Samir Parikh**

 * [Perl Weekly Challenge 088](https://samirparikh.com/blog/perl-weekly-challenge-088.html) ( *Perl* )

**Simon Green**

 * [Weekly Challenge 088](https://dev.to/simongreennet/weekly-challenge-088-5c5f) ( *Perl* )

**W. Luis Mochán**

 * [Perl Weekly Challenge 88](https://wlmb.github.io/PWC/) ( *Perl* )

**Walt Mankowski**

 * [Weekly Challenge 088](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/walt-mankowski/README.md) ( *Perl* )


