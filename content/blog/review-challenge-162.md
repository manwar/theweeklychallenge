---
author:       Colin Crain
date:         2022-06-13T00:00:00
description:  "Colin Crain › Perl Weekly Review #162"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #162"
image:        images/blog/p5-review-challenge-162.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-161/).* )

Welcome to the Perl review pages for **Week 162** of The Weekly Challenge! Here we will take the time to discuss the  submissions offered up by the team, factor out some common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

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

before we begin, you may wish to revisit either the pages for the [**original tasks**](/blog/perl-weekly-challenge-162/) or the summary [**recap**](/blog/recap-challenge-162/) of the challenge. But don't worry about it, the challenge text will be repeated and presented as we progress from task to task.

Oh, and one more thing before we get started:


### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please feel free to email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

<div align= center><strong>...So finally, without further ado...</strong></div>

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC162TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC162TASK2)   &nbsp;  &nbsp;  &nbsp;   	•   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC162BLOGS)    &nbsp;  &nbsp;  &nbsp;   	•

---

# TASK 1 {#PWC162TASK1}

# ISBN-13
*Submitted by: Mohammad S Anwar*

Write a script to generate the check digit of given ISBN-13 code.

Please refer [wikipedia](https://en.wikipedia.org/wiki/ISBN#ISBN-13_check_digit_calculation) for more information.

**Example**

```
    ISBN-13 check digit for '978-0-306-40615-7' is 7.
```

## about the solutions
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/adam-russell/perl/ch-1.pl),
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/alexander-pankoff/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/athanasius/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/cheok-yin-fung/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/colin-crain/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/dave-jacoby/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/polettix/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/jaldhar-h-vyas/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/jo-37/perl/ch-1.pl),
[**Julien Fiegehenn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/julien-fiegehenn/perl/ch-1.pl),
[**Kueppo Wesley**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/kueppo-wesley/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/laurent-rosenfeld/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/lubos-kolouch/perl/ch-1.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/mattneleigh/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/mohammad-anwar/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/perlboy1967/perl/ch-1.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/paulo-custodio/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/pete-houston/perl/ch-1.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/peter-campbell-smith/perl/ch-1.pl),
[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/pokgopun/perl/ch-1.pl),
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/robert-dicicco/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/roger-bell-west/perl/ch-1.pl),
[**Ryan Thompson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/ryan-thompson/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/ulrich-rieke/perl/ch-1.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/wlmb/perl/ch-1.pl)

The International Standard Book Number, ISBN, is labeling system designed to assign every book published a unique identifier, with separate assignments for alternate or updated editions and formats. The idea is that each distinct version of a text has its own number;  subsequent reprints of a unaltered publication retain the same label until substantial changes warrant the reclassification as a new edition, which is then given a new assignment.

The most modern version of this label, the ISBN-13, is a 13-digit classification system that when parsed descends in specificity as we travel from left to right: first we have broad language groups; then geographic areas like countries; next publishing houses within those locales; and then finally ending in a selection from serial block assignments for publishers to give to individual works. The actual digit positions within the various sections is not absolutely fixed, so parsing can be complicated, but at the end of the sequence a [check digit](https://en.wikipedia.org/wiki/Check_digit) is used to verify no step within the multi-stage process was mishandled, resulting in an incorrect ISBN.

The check digit occupies the 13th position of the ISBN, and can be calculated as an algorithmic product of the other digits and their position values.

There were 28 submissions for the first task this past week.

## a NUMBER of BOOKS
[**Ryan Thompson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/ryan-thompson/perl/ch-1.pl),
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/robert-dicicco/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/e-choroba/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/colin-crain/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/perlboy1967/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/cheok-yin-fung/perl/ch-1.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/peter-campbell-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/jo-37/perl/ch-1.pl),
[**Julien Fiegehenn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/julien-fiegehenn/perl/ch-1.pl),
[**Kueppo Wesley**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/kueppo-wesley/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/roger-bell-west/perl/ch-1.pl), and
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/james-smith/perl/ch-1.pl)


The precise definition of the check digit in an ISBN is the value a<sub>12</sub> such that, with the individual digits of the number indexed 0 through 12 for the 13 positions:

a<sub>0</sub> + 3a<sub>1</sub> + a<sub>2</sub> + 3a<sub>3</sub> + a<sub>4</sub> + 3a<sub>5</sub> + a<sub>6</sub> + 3a<sub>7</sub> + a<sub>8</sub> + 3a<sub>9</sub> + a<sub>10</sub> + 3a<sub>11</sub> + a<sub>12</sub> ≡ 0 (mod 10)

We saw validation techniques that either applied this equation directly, to see the result, or mathematically rearranged it, calculating a new check digit based on the first twelve digits and comparing the result to the existing thirteenth.

[**Ryan Thompson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/ryan-thompson/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[PWC 162 › ISBN-13 - Ryan J Thompson](https://ry.ca/2022/04/isbn-13/)

&nbsp;&nbsp;**blog writeup:**
[PWC 162 › Wheatstone–Playfair Cipher - Ryan J Thompson](https://ry.ca/2022/04/playfair-cipher/)

Ryan will start us off today applying a rearrangement of the definition equation, that the checksum is that value that when added to the result of the equation on the first twelve values in turn results in 0 (mod 10). That is to say, 10 minus the application of the expansion of the first 12 digits mod 10 equals the check digit.

To get going he starts with a rephrasing of the expression, as the "sum of every odd number plus 3 x every even number".  He accomplishes this eloquently using the function `pairmap` imported from `List::Util`. This grabs *pairs* of values from a split array of digits composing the original number and applies a mapping function to both of them, assigning to the special variables `$a` and `$b`, to produce a single value that is returned. The `map` array is then summed.

Note that `pairmap` removes two values from `@digits` at every iteration, making it fundamentally different than `reduce`. Perl, it may be noted, is bringing this n-at-a-time interation into the interpreter directly — on an experimental basis — starting in Perl 5.36. This new functionality is currently implemented  for `for` loops, not `map`, but you get te idea. It's all very exciting.

```perl
    use List::Util qw< sum pairmap >;

    # We use a relaxed interpretation of an ISBN 13 here, because the parts are
    # not fixed lengths, so as long as we have 13 digits, we don't care where (or
    # if) the dashes are placed.
    sub valid_isbn13 {
        local $_ = shift;
        croak "Invalid ISBN" unless /^[0-9-]+$/;
        my @digits = grep { /\d/ } split //;
        croak "Only 13 digit ISBNs are supported" if @digits != 13;
        my $check = pop @digits;

        # Sum of every odd number plus 3 x every even number
        10 - (sum pairmap { $a + 3*$b } @digits) % 10 == $check;
    }
```

[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/robert-dicicco/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/robert-dicicco/raku/ch-1.raku)

Robert demonstrates unrolling the algorithm to act on specific digits in specific places. He first uses a substitution regex to strip out non-numeric characters and then employs `split` to turn the ISBN string into an array of digits.

This calculates the checksum digit, which is then compared to the given value.


```perl
    sub makeCheckDigit {
      my $n = shift;

      my @arr = split(//,$n);
      my $evensum = $arr[0] + $arr[2] + $arr[4] + $arr[6] + $arr[8] + $arr[10];
      my $oddsum = ($arr[1] + $arr[3] + $arr[5] + $arr[7] + $arr[9] + $arr[11]) * 3;
      my $presum = ($evensum + $oddsum) % 10;
      my $checkdigit = 10 - $presum;

      return $checkdigit;
    }
```

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/e-choroba/perl/ch-1.pl)

Alternately, Choroba takes the evaluation to the other extreme, where by using an incrementing variable within a `map` block, by careful construction of a modulo formula he makes a cyclic pattern, alternately multiplying by 1 or 3. After clipping the last element off the string using `substr`, the head is processed with `split` and the resulting list has our oscillating block applied across it. This is then summed modulo 10.

```perl
    sub isbn_13_check_digit {
        my ($isbn) = @_;
        $isbn =~ s/-//g;
        substr $isbn, -1, 1, "" if 13 == length $isbn;
        my $i = 0;
        return 10 - ((sum(map $_ * (1 + 2 * ($i++ % 2)),
                          split //, $isbn)
                      % 10) || 10);
    }
```
The only thing remaining is to subtract the result from 10 or subtract 10 if the result is 0, to return a single digit in all cases. This should match our check digit.


[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/colin-crain/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Fair Play with Your Nose to the Grindstone - Programming Excursions in Perl and Raku](https://colincrain.com/2022/05/01/fair-play-with-your-nose-to-the-grindstone/)

&nbsp;&nbsp;**blog writeup:**
[Magic Spell Books, or 13 Revisited - Programming Excursions in Perl and Raku](https://colincrain.com/2022/04/29/magic-spell-books-or-13-revisited/)

For my own solution I came up with a very similar bistable function to jump between coefficients, this one modulo 4. Instead of using two operations to clean and then split, I just use a singular affirmative global match and capture on a single digit to produce an array of results to work with. A statement modifier crates the loop and an array slice excludes the last digits, grabbing only the first 12.

Array slices are just such wonderfully powerful tools.


```perl
    my @arr = $isbn =~ /(\d)/g;
    my $c   = 1;
    my $sum = 0;

    $sum += $_ * (++$c * 2 % 4 + 1) for @arr[0..11];
    my $ck = 10 - $sum % 10;
    $ck == 10 and $ck = 0;          ## correct 10 -> 0

    say <<~"END";
        input      $isbn
        checksum   $ck
    END
```

[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/perlboy1967/perl/ch-1.pl)

The function `pairwise`, from `List::MoreUtils`, fundamentally differs in its selection process from the `pairmap` function we saw earlier, in that it incrementally takes the *next* single element from two lists; these two elements are then assigned to `$a` and `$b` inside a block and evaluated, to return a list of single result values. The second list contains the multiplier coefficients.

```perl
    use List::Util qw(sum0);
    use List::MoreUtils qw(pairwise);

    my @isbnDigits = (grep/\d/,split//,shift // '978-0-306-40615-7')[0..11];
    my @factors = split//,1313131313131;
    say -(sum0 pairwise {$a*$b} @isbnDigits,@factors) % 10;
```

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/cheok-yin-fung/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/cheok-yin-fung/julia/ch-1.jl)


&nbsp;&nbsp;**blog writeup:**
[CY's Take on The Weekly Challenge #162 ](https://e7-87-83.github.io/coding/challenge_162.html)

The `pairmap` solution we saw earlier is also quite compact and elegant in its simplicity. Looking at these solutions side-by-side nicely illustrates the choices available in designing a function for iterating through multiple pieces of list data at once: do we take successive elements one list or the same index from multiple lists? Or even some combination of the two? It turns out the closer you look, the less obvious the "correct" answer is, and in fact there is, simply put, more than one way to do it.

```perl
    sub valid {
        my $code = $_[0];
        my @d = grep { /\d/ } split "", $code;
        die "Invalid ISBN-13 code!\n" if scalar @d != 13;
        return !( ($d[12] + sum pairmap {$a + 3*$b} @d[0..11]) % 10);
    }
```

[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/peter-campbell-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Checksums and early encryption](https://pjcs-pwc.blogspot.com/2022/04/checksums-and-early-encryption.html)

Peter starts with a parallel hardcoded list of multiplier coefficients indexed to the first 12 positions in the ISBN. The digits themselves he grabs incrementally using a global pattern match and capture. Using a capture, we need to go through the assigned special variable `$1`, which we then repeatedly gather from to create the digit array. In doing this this way non-word spacer and delineator characters are quietly skipped over wituout needing to be explicitly removed.

To create his sum he iterates through one common set of indices for both lists.

```perl
    @multipliers = qw(1 3 1 3 1 3 1 3 1 3 1 3);

    for $test (@tests) {

        # eliminate non-digits
        @digits = ();
        push @digits, $1 while $test =~ m|(\d)|g;

        # create weighted sum of first 12 digits
        $sum = 0;
        $sum += $digits[$_] * $multipliers[$_] for (0 .. 11);

        # and the 13th digit is 10 minus the sum, mod 10
        say qq[ISBN-13 check digit for '$test' is ] . (10 - $sum % 10) . '.';
    }
```


[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/jo-37/perl/ch-1.pl)

Jorg makes an interesting assumption in his solution, that the code as written will have 17 characters: 13 digits demarked into groups with 4 separators. I know calculating the check digit should not require us to suddenly each become experts in publishing logistics, but my careful reading of the literature does not find the division to be an actual requirement, only a quite sensible convention.

The groups composing a number are: one of two standardized barcode prefixes; a language/country group element; a publishing house code; a published item code; and finally a check digit for all of these. To complicate things the number of digits is fixed but the divisions are not: large imprints get large blocks of codes for their items and short identifiers, and small houses the opposite, so decoding a number is decidedly complicated.

But then again, decoding a number is largely unnecessary. The code uniquely identifies an edition of a product for tracking and then sale. The details are generally not important to that role.

As such sometimes there are dashes, or spaces, and sometimes not. The encoding defines the 13 ordered digits, and not how they are displayed. Delimiting the groups only makes it easier for a human to read and not make errors when copying.

So again I'll say I don't think that specific knowledge should be required to complete the challenge in good faith, so I'm going to look the other way and focus instead on Jorg's impressive use of `reduce_0` from `List::MoreUtils` to a perform the entire coeficient assignment cycle and summation in a single regex match.

It's kind of amazing.

The regex computes the check digit as part of the evaluation of the expression; if the nested evaluation does not match the expression fails and the subroutine returns false.

Sometimes I wonder whether Jorg says to himself "how can I do this as weirdly complicated as possible?" But then again I think I already know the answer to that one. But it works and well too, which is important. This is not golf; this has its own internally consistent raison d'être.

```perl
    sub check_isbn13 ($isbn) {
        $isbn =~ m{
            # 4 nonempty elements plus check digit separated by hyphens
            ^\d+-\d+-\d+-\d+-\d\z
            (?(?{
                length != 17 ||     # not 13 digits and 4 separators
                # weighted digit sum not a multiple of 10
                (reduce_0 {$a + $b * (($_ % 2) * 2 + 1)} split /-*/) % 10;
            }) (*FAIL))     # not an ISBN code
        }x;
    }
```

[**Julien Fiegehenn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/julien-fiegehenn/perl/ch-1.pl)

Julien, in his submission, provides us with a refreshingly systematic breakdown of the steps he takes to arrive at his solution. I'll let the comments speak for themselves.

Of note is after collecting an array of the first 12 digits, he cleverly uses a slice to modify the odd-indexed elements, multiplying those in-place by 3. Once this is done all that is needed is to compound a sum and divide it modulo 10.

I like this slice trick. Again let us raise our glass to the power of array magic.

```perl
    sub isbn_13 {
        my $number = shift;

        die 'Input required' unless $number;

        # clean up the number
        $number =~ s/\D//g;

        # we need to do maths on each digit
        my @digits = split //, $number;

        # discard the check digit
        pop @digits if @digits == 13;

        # do we have the right amount of digits?
        die 'This does not look like an ISBN-13' unless @digits == 12;

        # triple all the even digits
        $_ *= 3 for @digits[1, 3, 5, 7, 9, 11];

        # and do the maths
        return 10 - sum(@digits) % 10;
    }
```

[**Kueppo Wesley**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/kueppo-wesley/perl/ch-1.pl)

Kueppo has come up with a novel manner of producing his variable coeeficient, as a subroutine with its own state variable, toggling between either returning 1 or 3 based on the previous result. I suppose the next step would be returning a proper closure coderef, to fire up as many independant checkers as we may want.

```perl
    $ps += $_ * &oot foreach (split /-|/, $ARGV[0]);
    $ps %= 10;
    $ps =~ s/[^0]/10 - $ps/e;

    say "$ARGV[0]-$ps";

    sub oot { state $x = 3; $x = ($x == 3 ? 1 : 3) }
```

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/james-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[perlweeklychallenge-club/challenge-162/james-smith at master · drbaggy/perlweeklychallenge-club · GitHub](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-162/james-smith)

Because the code length is known to be fixed at 12 digits before the checksum, then processing these digits two at a time, multiplying one and leaving the next alone, accumulating a sum — this seems like a reasonable path to validate the last value. This is the essence of the `pairmap` solutions we saw earlier.

Here James eschews bringing in outside help from a module to make the steps, preferring a pair of `shift` operations to gather first one element and then, in the same statement, the next.

```perl
    sub validate_isbn13 {
      my @p = ( my $s = 0, grep {/\d/} split //, $_[0] );
      $s += 3*shift(@p) + shift @p while @p;
      !($s%10);
    }

    sub checksum_isbn13 {
      my($s,@p) = ( 0, @{[grep {/\d/} split //, $_[0]]}[0..11] );
      $s -= shift(@p) + 3*shift @p while @p;
      $s%10;
    }
```

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/roger-bell-west/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/roger-bell-west/javascript/ch-1.js), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/roger-bell-west/kotlin/ch-1.kt), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/roger-bell-west/lua/ch-1.lua), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/roger-bell-west/postscript/ch-1.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/roger-bell-west/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/roger-bell-west/raku/ch-1.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/roger-bell-west/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/roger-bell-west/rust/ch-1.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: The Weekly Challenge 162: Playing Fair with ISBNs](https://blog.firedrake.org/archive/2022/04/The_Weekly_Challenge_162__Playing_Fair_with_ISBNs.html)

Finally we have Roger's submission, which completely sidesteps the overhead of explicitly making a new array variable holding the ISBN component digits by instead directly examining them in-place. After all, beneath the surface a Perl string is a C string with a few extra pieces of data, stored away in a `struct`. And a C string is itself an array of characters in structured memory. We already need to know where everything is in order for Perl to work its magic.

So why not just address the digits directly?

In fact, using `substr`, this is remarkably fast. For some reason I always felt this would be more complex than it is, and be more computationally complex, but as everything we need to perform it is already precomuputed as kept in the data structure, waiting there for us to use. There's no need to scan the string looking for the 8th position, for example — we can just immediately go there and examine the character we find. And if it looks like a number, it is a number. That's Perl for you.

Not to put too fine a point on it, but this is way faster than allocating a new array variable and using `slice`.

As I have taken the time on many occasions to relate, `substr` is a speed demon when properly used.

```perl
    sub generate {
      my $in = shift;
      $in =~ s/[^0-9]+//g;
      if (length($in) < 12) {
        return 99;
      }
      my $s=0;
      my $m=1;
      foreach my $i (0..11) {
        $s += substr($in,$i,1) * $m;
        $m = 4 - $m;
      }
      return (10-($s % 10)) % 10;
    }
```





## Blogs and Additional Submissions in Guest Languages for Task 1:


[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/adam-russell/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Java](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/adam-russell/java/ch-1.java), [Prolog](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/adam-russell/prolog/ch-1.p)


&nbsp;&nbsp;**blog writeup:**
[The Weekly Challenge 162 — Perl  — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2022/05/01)

&nbsp;&nbsp;**blog writeup:**
[The Weekly Challenge 162 — Prolog  — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/prolog/2022/05/01)


[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/alexander-pankoff/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/alexander-pankoff/haskell/ch-1.hs)


[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/athanasius/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/athanasius/raku/ch-1.raku)


[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/dave-jacoby/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Play Fair and By The Book: Weekly Challenge #162 | Committed to Memory](https://jacoby.github.io/2022/04/26/play-fair-and-by-the-book-weekly-challenge-162.html)


[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/duncan-c-white/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/duncan-c-white/C/ch-1.c)


[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/polettix/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/polettix/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC162 - ISBN-13 - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/04/26/pwc162-isbn-13/)

&nbsp;&nbsp;**blog writeup:**
[PWC162 - Wheatstone-Playfair - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/04/27/pwc162-wheatstone-playfair/)


[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/jaldhar-h-vyas/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/jaldhar-h-vyas/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge: Week 162](https://www.braincells.com/perl/2022/05/perl_weekly_challenge_week_162.html)


[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/laurent-rosenfeld/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/laurent-rosenfeld/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 162: ISBN-13 and Wheatstone-Playfair](http://blogs.perl.org/users/laurent_r/2022/04/perl-weekly-challenge-162-isbn-13-and-wheatstone-playfair.html)


[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/pokgopun/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/pokgopun/go/ch-1.go)


[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/ulrich-rieke/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/ulrich-rieke/cpp/ch-1.cpp), [Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/ulrich-rieke/haskell/ch-1.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/ulrich-rieke/raku/ch-1.raku)


[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/wlmb/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 162 – W. Luis Mochán](https://wlmb.github.io/2022/04/25/PWC162/)


------------------------------------------





---

# TASK 2 {#PWC162TASK2}

# Wheatstone-Playfair
*Submitted by: Roger Bell_West*

Implement encryption and decryption using the Wheatstone-Playfair cipher.

**Examples:**
```
    (These combine I and J, and use X as padding.)

    encrypt("playfair example", "hide the gold in the tree stump") = "bmodzbxdnabekudmuixmmouvif"

    decrypt("perl and raku", "siderwrdulfipaarkcrw") = "thewexeklychallengex"
```

## about the solutions
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/alexander-pankoff/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/athanasius/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/cheok-yin-fung/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/colin-crain/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/dave-jacoby/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/polettix/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/james-smith/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/jo-37/perl/ch-2.pl),
[**Julien Fiegehenn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/julien-fiegehenn/perl/ch-2.pl),
[**Kueppo Wesley**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/kueppo-wesley/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/laurent-rosenfeld/perl/ch-2.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/mattneleigh/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/perlboy1967/perl/ch-2.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/paulo-custodio/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/pete-houston/perl/ch-2.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/peter-campbell-smith/perl/ch-2.pl),
[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/pokgopun/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/roger-bell-west/perl/ch-2.pl),
[**Ryan Thompson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/ryan-thompson/perl/ch-2.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/wlmb/perl/ch-2.pl)

I've always been interested in codes and codebreaking, so this challenge provided a welcome respite from the usual fare of number-theoretical weirdness. Don't get me wrong — I have gained no small amount of pleasure and knowledge manipulating numbers and the digits that compose them in ways I would never in a million years think to pursue. I don't regret any of that. Implementing code to explore number theory relationships is frankly just the sort of things computers are really, really good at.

But then again, so is cryptography. And the use of computational resources in the field has in the past decades dramatically upped the stakes in the game.

Modern cryptography involves some impressively complex math. Combining many-to-one one-way functions and breathtaking amounts of computational churning and leveling, the aim is to provide a smooth sea of apparent randomness that defies reversal. Considering that in cryptography the computational resources available for a decryption attack are always assumed to be far greater than the resources required for the basic operation of the scheme, computational complexity cannot be equated simply to security. However much as a mountain has one top yet an infinite number of ways down we can rely on mathematical complexity of a well-defined system to provide security within known, calculable parameters. The result is an arms race testing the limits of resources, with faster computational architectures both allowing and requiring more complexity in the cryptologic techniques used, always trying to keep the time required for unauthorized decryption many orders of magnitude greater than the time available.

Millions of years is a nice buffer, but hard to keep as hardware and techniques improve.

There were 22 submissions for the second task this past week.

## a SMATTERING of CLUES
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/wlmb/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/dave-jacoby/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/athanasius/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/pete-houston/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/polettix/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/laurent-rosenfeld/perl/ch-2.pl),
[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/pokgopun/perl/ch-2.pl),
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/alexander-pankoff/perl/ch-2.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/paulo-custodio/perl/ch-2.pl), and
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/james-smith/perl/ch-2.pl)

One of the more interesting aspects of implementing the cipher was the means to locate the paired letters in the lookup grid to determine exactly what we should do with them. This led to a variety of creative solutions. A common and very perlish method here was to build a parallel lookup hash recording the locations of each letter as it is placed in the first place, but we saw others too, based on flattening the table to a linear array.

As for the transformation, there are three basic cases to deal with, with the grid coordinate information from the key-table required to determine which to use. But this, and the specific details of the cipher itself, will hopefully become clear.

The decryption function, many noticed, was quite similar to the encryption, enough that almost all the code could be reused from one to the other, resulting in many submissions combining the two into a single universal translator. The exact method for this reversal also had a large number of specific implementations.

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/wlmb/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 162 – W. Luis Mochán](https://wlmb.github.io/2022/04/25/PWC162/)

Let's get the ball rolling with Luis, and a description of the cipher itself. The Playfair cipher starts with a custom rearrangement of the alphabet into a 5x5 square matrix, constructed using a specified password or passphrase. Working left to right and ratcheting downward through the rows in a raster scan-line pattern, the unique letters in the passphrase are placed first. followed by the remaining letters in the alphabet in their existing order. Because the grid we are using has 25 locations and the English alphhabet 26 letters, the common "i" and uncommon "j" are considered to be the same letter, to make 25 positions.

This tablature is performed in `make_tables()`.

The enciphering in done by selecting pairs of successive letters from the plaintext. Duplicate letters are not allowed, and so are separated using a predetermined dummy character, "x" in this case. Further, as we require an even number of letters in the plaintext, an additional dummy character is appended to the end if necessary.

Once taken we locate the characters in the pair on the matrix, where have three basic cases that can arise:

1. if the characters are in different rows and different columns, the column positions of the two are exchanged, with the row for each left unchanged, and the new characters read.
2. if the two share a single row, we select the next position rightward in the row for each character, wrapping around to the left when we get to the right boundary.
3. if the two share a single column, we select the next position downward in the column for each character, wrapping around to the top when we get to the lower boundary.

We've already separated duplicate characters, so the two cannot occupy the same position. The selected characters make up the ciphertext. These are commonly grouped into sets of four or five characters, but this is just convention.

There are several loose ends in the definition, namely which letters to condense together — in this case "i" and "j" — and the selection of the dummy character, here "x". These decisions need to be made between the parties by prearrangement. Sometimes other letters are chosen, such as Q or Z; uncommon letters work best.

There is one other edge-case that Luis brings up though, which is what to do when the dummy character itself is duplicated in the plaintext? If we have "xx" in the plaintext, then inserting another "x" to separate them obviously won't work. As this letter formation never naturrally occurs in English, the behavior in this instance is not well defined, and again is left to some predetermined rule decided on by the parties involved. Here Luis just returns "xx"; it's not at all clear what to do. Perhaps the dummy letter could be selected optimally to match the data, or the data itself modified to avoid this outcome: "xx" would be encoded as "ex-ex". The encoding-decodong process is, it should be stressed, inherently "lossy" — information is both both destroyed and and new spurious data is added in the process, resulting in an imperfect duplication of the plaintext.

It's good to put these inherent translation problems forward at the beginning. The code was originally envisioned for rapid battlefield communication, not the perfect secure transmission of complex data. For another example, notice there is no cipher-space allocation to numbers, which presumably would be spelled out. Inserting the digits 0 through 9 into a 6 x 6 grid neatly solves this problem, and eliminates the need to merge i and j; sometimes this variant is known as Playfair 6.

```perl
    sub make_tables {
        my $key=shift; # only letters a-z and without j's and
        my @letters=((split '', $key),('a'..'i', 'k'..'z')); # complete alphabet
        my (@table, %table);
        my $i=0;
        foreach(@letters){
            my ($row, $col)=(floor($i/5), $i%5);
            $table[$row][$col]=$_, $table{$_}=[$row,$col], ++$i unless defined $table{$_};
        }
        return (\@table, \%table);
    }

    sub encrypt {
        my ($key, $message)=@_;
        map {s/[^a-z]//g; s/j/i/g;} ($key, $message); # only letters, j=i
        my ($table_a, $table_h)=make_tables($key); # map coordinates to letters and viceversa
        my @message=split '', $message;
        my @encrypted;
        while(@message){
            my $first=shift @message;
            my $second;
            $second=@message && $message[0] ne $first # check availability, repetitions
                ?shift @message
                :'x'; # dummy x to avoid repetitions
            my ($row1, $col1)=@{$table_h->{$first}}; # get coordinates
            my ($row2, $col2)=@{$table_h->{$second}};
            push(@encrypted, $table_a->[$row1][$col2],
                 $table_a->[$row2][$col1]), next # exchange corners
                if $row1!=$row2 && $col1 != $col2; # rectangle
            push(@encrypted, $table_a->[$row1][($col1+1)%5],
                 $table_a->[$row2][($col2+1)%5]), next # rotate right
                if $row1==$row2 && $col1 != $col2; # single row
            push(@encrypted, $table_a->[($row1+1)%5][$col1],
                 $table_a->[($row2+1)%5][$col2]), next # rotate down
                if $row1!=$row2 && $col1 == $col2; # single column
            # I can only arrive here if there are two consequtive x's. Not
            # sure what to do, so I'll just return them
            push @encrypted, 'x', 'x'; # repeated x
        }
        return join '', @encrypted;
    }
```

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/dave-jacoby/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Play Fair and By The Book: Weekly Challenge #162 | Committed to Memory](https://jacoby.github.io/2022/04/26/play-fair-and-by-the-book-weekly-challenge-162.html)

In both a theoretical and crypto-analytical point of view a deep rigorous understanding of the limitations of the cipher is necessary, but to quickly transfer the message: "The unit will move westward at dawn" according to a conventional set of rules known to both parties it is not.

Dave concentrates his efforts in this more practical area. For many messages it doesn't matter if a spurious "x" is inserted between two duplicate letters; in almost every case a simple direct message can be properly inferred from context. For this reason "q" is another common dummy letter used, as an alternative to "x", as any "q" not followed by "u" is obviously inserted. The few words that this might cause a problem with are easily exempted:  "vacuqum" and "continuqum" are easily determined to not be words.

Dave makes short work of the matrix construction, starting with a more easily constructed linear array and then folding it into a 2-dimensional shape.

```perl
    sub make_playfair_square( $key ) {
        my %h;
        my @array = grep { !$h{$_}++ } grep { /\w/ } ( split //, lc $key ),
            'a' .. 'i', 'k' .. 'z';
        @array = @array[ 0 .. 24 ];
        my @square;
        for my $i ( 0 .. 24 ) {
            my $x = $i % 5;
            my $y = int $i / 5;
            $square[$y][$x] = uc $array[$i];
        }
        return @square;
    }
```

A separate routine divides the plaintext into digrams, and from there it's a matter of implementing the three basic cases.

```perl
    sub encrypt ( $key, $plaintext ) {
        my @square = make_playfair_square($key);
        my @input  = make_digrams($plaintext);
        my @output;
        for my $digram (@input) {
            my ( $m,  $n )  = split //, $digram;
            my ( $mx, $my ) = find_position( $m, @square );
            my ( $nx, $ny ) = find_position( $n, @square );
            if    (0) { 'NO-OP' }
            elsif ( $mx == $nx ) {
                my $mm = $square[$mx][ ( $my + 1 ) % 5 ];
                my $nn = $square[$nx][ ( $ny + 1 ) % 5 ];
                push @output, $mm . $nn;
            }
            elsif ( $my == $ny ) {
                my $mm = $square[ ( $mx + 1 ) % 5 ][$my];
                my $nn = $square[ ( $nx + 1 ) % 5 ][$ny];
                push @output, $mm . $nn;
            }
            else {
                my $mm = $square[$mx][$ny];
                my $nn = $square[$nx][$my];
                push @output, $mm . $nn;
            }
        }
        my $zed = '';
        return lc join '', @output;
    }
```

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/athanasius/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/athanasius/raku/ch-2.raku)

The monk provides us with a quite systematic breakdown of the processes, to either encode or decode a text input. For each basic action a top-level function serves as a wrapper, which cleans the text and calls a routine to divide it into digrams units. Then either a `encode_digram()` or `decode_digram()` function translatees each letter pair.

It's all very orderly and well laid-out. The `%l2re` hash being consulted is a lookup of letters to their row and column coordinates, constructed simultaniously alongside the master letter array.

I found this version particularly easy to read.

```perl
    sub encode_digram
    {
        my ($digram, $table, $l2rc)   = @_;
        my  $code                     = '';
        my ($first_row,  $first_col)  = @{ $l2rc->{ $digram->[ 0 ] } };
        my ($second_row, $second_col) = @{ $l2rc->{ $digram->[ 1 ] } };

        if    ($first_row == $second_row)
        {
            my $i = $first_col  + 1;
               $i = 0 if $i > 4;

            my $j = $second_col + 1;
               $j = 0 if $j > 4;

            $code = $table->[ $first_row  ][ $i ] .
                    $table->[ $second_row ][ $j ];
        }
        elsif ($first_col == $second_col)
        {
            my $i = $first_row  + 1;
               $i = 0 if $i > 4;

            my $j = $second_row + 1;
               $j = 0 if $j > 4;

            $code = $table->[ $i ][ $first_col  ] .
                    $table->[ $j ][ $second_col ];
        }
        else
        {
            $code = $table->[ $first_row  ][ $second_col ] .
                    $table->[ $second_row ][ $first_col  ];
        }

        return $code;
    }
```

[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/pete-houston/perl/ch-2.pl)

One defining quality of the Playfair cipher is its highly symmetrical nature: the encryption and decryption phases are nearly identical, with only the direction of the shifting reversed. In the rectangular pattern, we could even consider the action the same way, as a swap among only two elements is the same reversing a swap already made. There are only two relevant positions to the pattern.

Pete uses this symmetry to provide one common transmutation function that is configurable to act as either an encryptor or decryptor.

He also wraps the whole thing up in its own package, creating a general purpose object, instantiated with the key, that provides both methods. This is a handy way of masking the details of the individual function configurations from the end-user. After all, we don't need to know *how*, we only need the result.

There are a lot of interesting parts to this package, but here is the logical translation core. The digram pairs are removed from the input string using `substr`, whittling down the source until no more letters remain.

```perl
    sub encrypt {
        my ($self, $in) = @_;
        $self->crypto ($in, 1, [0, 1]);
    }

    sub decrypt {
        my ($self, $in) = @_;
        $self->crypto ($in, -1, [1, 0]);
    }

    sub crypto {
        my ($self, $in, $dir, $order) = @_;

        my $out = '';
        $in = lc $in;
        $in =~ tr /a-z//cd;
        $in =~ tr/j/i/;
        while (length $in) {
        	my $buf = substr $in, 0, 2, '';
        	my @bc = split //, $buf;
        	$bc[1] //= $self->{split_char};
        	if ($bc[0] eq $bc[1]) {
        		$in = $bc[1] . $in;
        		$bc[1] = $self->{split_char};
        	}

        	if ($self->{pos}{$bc[0]}[0] == $self->{pos}{$bc[1]}[0]) {
        		# Same row
        		my $r = $self->{grid}[$self->{pos}{$bc[0]}[0]];
        		$bc[$_] = $r->[($self->{pos}{$bc[$_]}[1] + $dir) % 5] for 0, 1;
        	} elsif ($self->{pos}{$bc[0]}[1] == $self->{pos}{$bc[1]}[1]) {
        		# Same col
        		my $cn = $self->{pos}{$bc[0]}[1];
        		$bc[$_] = $self->{grid}[($self->{pos}{$bc[$_]}[0] + $dir) % 5][$cn]
        			for 0, 1;
        	} else {
        		# Copy the old one to avoid clobbering
        		my @obc = @bc;
        		$bc[$_] = $self->{grid}[
        			$self->{pos}{$obc[$_]   }[0]]
        			[$self->{pos}{$obc[1 - $_]}[1]] for @$order;
        	}
        	$out .= $bc[0] . $bc[1];
        }
        return $out;
    }
```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/polettix/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/polettix/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC162 - ISBN-13 - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/04/26/pwc162-isbn-13/)

&nbsp;&nbsp;**blog writeup:**
[PWC162 - Wheatstone-Playfair - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/04/27/pwc162-wheatstone-playfair/)

Many members noticed this parallel structure between the encryption and decryption cycles, and produced one main processing routine for both actions. Flavio does it this way, but also adds a new twist to the solution with his version of the cipher square.

The square itself is nominally constructed linearly, filled from left to right and then shifting down a row and resetting to the left again. For a human cryptographer this makes the pattern and resulting construction much easier to follow, but computers don't generally care about things like that. Given a reasonable way to get there, arithmetic complexity ins't much of an issue to a machine. Machines are less concerned with visual cues, choosing simply to cut to the underlying mathematical chase in selecting the right bin containing the correct letter.

So because of this Flavio doesn't bother with a multidimensional array at all, keeping the keypad lookup as linear arrays — created specifically for the en/decryption action — of letters in positions corresponding to the indices of the translated letters, or to use the technical language, a "bijection in two arrays".

The translation actions then become the calculation of a series of positive and negative offsets to the indices.

I'm not sure exactly how much is gained from this scheme, as the modulo math is simply shifted over to the offset calculation steps, but it's certainly fun and diferent, that's for sure, albeit more than a bit confusing for a human to scan. You can see the familiar logical center within the `while()` loop, within the chained ternary operation. Sans commentary, it is decidedly compact.


```perl
    sub encrypt ($key, $message) { wheatstone_playfair($key, $message, 1) }
    sub decrypt ($key, $message) { wheatstone_playfair($key, $message, 5 - 1) }

    ## The main workhorse is then the following function, I hope the comments are sufficient!

    sub wheatstone_playfair ($key, $message, $off) {

       # pre-massage the input, go uppercase and remove all j:s
       $_ = lc($_) =~ s{j}{i}rgmxs for $key, $message;

       # we don't need no stinkin' matrix, a bijection in two arrays is OK
       my %flag;
       my @letter_at = grep { $flag{$_}++ == 0 }
         split(m{[^a-z]?}imxs, $key), 'a' .. 'i', 'k' .. 'z', 'j';

       # the "go back" might be a hash but we are C nostalgic
       my $oA = ord('a');          # used to turn lc letters into array indexes
       my @pos_of = map { $_->[0] }   # get indexes
         sort { $a->[1] cmp $b->[1] } # sorted by letter position
         map { [$_, $letter_at[$_]] } 0 .. $#letter_at;

       # take only letters into consideration, split on everything else
       my @message = split m{[^a-z]?}imxs, $message;
       my @output;
       while (@message) {

          # first letter is whatever, second letter might be an X
          my $A = shift @message;
          my $B = @message && $message[0] ne $A ? shift @message : 'x';

          # get positions, $A and $B are spoiled on the way but it's OK
          my ($Ax, $Ay, $Bx, $By) = map {
             my $v = $pos_of[ord($_) - $oA];
             ($v % 5, int($v / 5))
          } ($A, $B);

          # apply Wheatstone-Playfair mapping
          ($Ax, $Ay, $Bx, $By) =
              $Ax == $Bx ? ($Ax, ($Ay + $off) % 5, $Bx, ($By + $off) % 5)
            : $Ay == $By ? (($Ax + $off) % 5, $Ay, ($Bx + $off) % 5, $By)
            :              ($Bx, $Ay, $Ax, $By);

          push @output, @letter_at[$Ax + 5 * $Ay, $Bx + 5 * $By];
       } ## end while (@message)
       return join '', @output;
    } ## end sub wheatstone_playfair
```

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/laurent-rosenfeld/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/laurent-rosenfeld/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 162: ISBN-13 and Wheatstone-Playfair](http://blogs.perl.org/users/laurent_r/2022/04/perl-weekly-challenge-162-isbn-13-and-wheatstone-playfair.html)

Laurent returns us to the realm of using a two-dimensional matrix for his translation grid, and demonstrates how simple using one function that reverses the direction of the offset shifts can provide both ends of the coding. All we need to do for Laurent's versionis to pass it either 1 or -1.

This is quite compact as well, I should point out.

```perl
    sub encrypt {
        my $msg = lc $_[0];
        $msg =~ s/j/i/g;
        $msg =~ s/\W//g; # remove non alphanumecicals chars
        $msg =~ s/(.)\1/$1x$1/;  # adding 'x' between two identical letters
        $msg =~ "x" if length($msg) % 2;  # padding
        return convert(1, $msg);
    }

    sub decrypt {
        return convert(-1, $_[0]);
    }

    sub convert {
        my ($d, $msg) = @_;
        # $d (direction) = 1 for encrypting and -1 for decrypting
        my $out = "";
        my @letters = split //, $msg;
        while (@letters) {
            my ($first, $second) = splice @letters, 0, 2;
            # my ($row1, $row2) = (%l2c{$first}[0], %l2c{$second}[0]);
            # my ($col1, $col2) = (%l2c{$first}[1], %l2c{$second}[1]);
            if ($l2c{$first}[0] == $l2c{$second}[0]) {           # same row
                $out .= ($c2l[$l2c{$first }[0]][($l2c{$first }[1] + $d)%5]) .
                        ($c2l[$l2c{$second}[0]][($l2c{$second}[1] + $d)%5]);
            } elsif ($l2c{$first}[1] == $l2c{$second}[1]) {        # same column
                $out .= ($c2l[($l2c{$first }[0] + $d) %5][$l2c{$first}[1]]) .
                        ($c2l[($l2c{$second}[0] + $d) %5][$l2c{$second}[1]]);
            } else {                                             # rectangle
                $out .= ($c2l[$l2c{$first }[0]][$l2c{$second}[1]]) .
                        ($c2l[$l2c{$second}[0]][$l2c{$first }[1]]);
            }
        }
        return $out;
    }
```

[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/pokgopun/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/pokgopun/go/ch-2.go)

Pokgopun mixes it up, giving us the novel technique of returning a common encoding/decoding *code reference* that can be called to perform whatever action required, and then reused if further desired for another. The decision of which direction to perform the translation is determined by a true value in an optional second parameter.

```perl
    $msg2encrypt    = lc($msg2encrypt);
    my $converter   = genConverter($key);
    my $msg2decrypt = &$converter($msg2encrypt);

    sub genConverter{
        my $key = shift;
        my %seen;
        my @c;
        my ($i,$j) = (0,0);
        foreach ( ( $key =~ /(\w)/g, 'a'..'z') ) {
        	next if $seen{$_};
        	if ( $_ eq 'i' || $_ eq 'j') {
        		$seen{i}=[$i,$j];
        		$seen{j}=[$i,$j];
        	} else {
        		$seen{$_}=[$i,$j];
        	}
        	$c[$i][$j] = $_;
        	$j++;
        	unless ($j < 5) {
        		$j = 0;
        		$i++;
        	}
        	last unless $i < 5;
        }
        if ($debug){
        	print join(" ", @$_)."\n" foreach @c;
        	printf("%s => (%s)\n", $_, join(", ",@{$seen{$_}})) foreach sort{$a cmp $b} keys %seen;
        	printf "%d\n", scalar(keys %seen);
        }
        return sub{
        	my $msg = shift;
        	my $o = -1;
        	unless (@_){
        		$msg =~ s/\s//g;
        		$msg =~ s/(\w)(\1)/$1x$2/g;
        		$msg .= 'x' if length($msg) % 2;
        		$o = 1;
        	}
        	my @res;
        	foreach my $pair ($msg =~ /(\w\w)/g){
        		my($a,$b) = @seen{$pair =~ /(\w)(\w)/};
        		#printf "$pair => (%s),(%s)\n", join(", ",@$a), join(", ",@$b);
        		my($w,$h) = ($a->[1] - $b->[1], $a->[0] - $b->[0]);
        		#printf "$pair => %s\n", $w==0 ? "column" : $h==0 ? "row" : "rectangle";
        		if ($w==0){
        			push @res, $c[($a->[0]+$o)%5][$a->[1]], $c[($b->[0]+$o)%5][$b->[1]];
        		} elsif ($h==0){
        			push @res, $c[$a->[0]][($a->[1]+$o)%5], $c[$b->[0]][($b->[1]+$o)%5];
        		} else {
        			push @res, $c[$a->[0]][$a->[1]-$w], $c[$b->[0]][$b->[1]+$w];
        		}
        		#printf "$pair => %s\n", join("",@res[-2,-1]);
        	}
        	return join("",@res);
        }
    }
```

[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/alexander-pankoff/perl/ch-2.pl)

Remember when we said that the encryption and decryption could be considered completely symmetrical, as the rectangular swap action is its own inverse function? Ok, sure I didn't exactly use that language but you have to admit that's a better way to say it. In any case Alexander's solution highlights this relationship by using the exact same code for both actions, only reversing the lookup *table* to make the switch.

The table itself is an array of letter-translation pairs, themselves kept as 2-element arrays. To do the reversal we need to reverse the pairs and then reverse the array they reside in. The keytable is, like Flavio's submission, a single-dimensional array, and a function is used to calculate the offset to find a given character.

Alexander calls on the services of quite a few library functions from his own collection. These are mostly self-evidentiary from their names and context, with the possible exception of the colorfully cast `implode()` and `explode()`: the first concatenates an array of characters into a string, like `join '', @list`, and the second tears a string apart, like `split //, $str`.

```perl
    use List::Util qw(uniq);
    use My::String::Util qw(implode explode);
    use My::List::Util qw(flatten zip chunks_of without);

    sub _transform_bigram ( $bigram, $keytable ) {
        my ( $first, $second ) = @$bigram;

        my %positions =
          flatten( zip( [ flatten( @{$keytable} ) ], [ 0 .. 24 ] ) );
        $positions{'j'} = $positions{'i'};

        my $real_pos = sub($x) { ( int( $x / 5 ), $x % 5 ) };

        my ( $first_row,  $first_col )  = $real_pos->( $positions{$first} );
        my ( $second_row, $second_col ) = $real_pos->( $positions{$second} );

        if ( $first_row == $second_row ) {
            return [
                $keytable->[$first_row][  ( $first_col + 1 ) % 5 ],
                $keytable->[$second_row][ ( $second_col + 1 ) % 5 ],
            ];
        }

        if ( $first_col == $second_col ) {
            return [
                $keytable->[ ( $first_row + 1 ) % 5 ][$first_col],
                $keytable->[ ( $second_row + 1 ) % 5 ][$second_col],
            ];
        }

        return [
            $keytable->[$first_row][$second_col],
            $keytable->[$second_row][$first_col],
        ];

    }
```

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/james-smith/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #162](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-162/james-smith)

Finally we'll close with James, who gives us a pair of solutions to the problem. The two  work on the same general principle: we digest pairs of characters from the input string in a loop, first adding padding xs as required before applying a ternary conditional to decide which of the three actions to take, with all this done in a direction configurable as a subroutine argument. It's a quite compressed version of the algorithm, undeniably.

The second method is notable as it caches the lookup step for mapping letters to their coded pairings, which speeds the whole procedure up over 100%. That's quite an optimization.

```perl
    sub encrypt { return _crypt  1, @_; }
    sub decrypt { return _crypt -1, @_; }

    sub _crypt_cache {
      my( $o, $key, $p, $out, @r, %l ) = ( shift, shift, 0, '' );               ## Initialise variables and get mapping...
      state $cache = {};
      if( exists $cache->{$key} ) {
        @r = @{$cache->{$key}[0]};
        %l = %{$cache->{$key}[1]};
      } else {
        exists $l{$_} || ( $l{$_}=[int $p/5,($p++)%5] )                           ## %l maps letter to position
          for grep { /[a-z]/ } split ( //, $key =~s/j/i/gr ), 'a'..'i', 'k'..'z'; ## values are ["row no", "column no"]
        $r[ $l{$_}[0] ] [$l{$_}[1] ] = $_ for keys %l;                            ## @r maps position to letter, first
        $cache->{$key} = [ \@r, \%l ]
      }
      my @seq = grep {/[a-z]/} split //, lc shift =~ s{j}{i}gr;                 ## Prep sequence, remove non-letters,
                                                                                ## lower case, convert "j" to "i"
      while( my($m,$n) = splice @seq,0,2 ) {                                    ## Loop through letter pairs
        unshift(@seq,$n), $n='x' if $n && $n eq $m && $o == 1;                  ## Deal with case when both letters the same
                                                                                ## (Only do when encrypting..)
        $n ||= 'x';                                                             ## Pad if required...

        $out.= $m eq 'x' && $n eq 'x' ? 'xx'                                    ## Can still have a pair if first value is
                                                                                ## "x" because this is then padded by "x"
             : $l{$m}[0] eq $l{$n}[0] ? $r[ $l{$m}[0]      ][($l{$m}[1]+$o)%5]. ## Same row    - shift down  (or up)
                                        $r[ $l{$n}[0]      ][($l{$n}[1]+$o)%5]
             : $l{$m}[1] eq $l{$n}[1] ? $r[($l{$m}[0]+$o)%5][ $l{$m}[1]      ]. ## Same column - shift right (or left)
                                        $r[($l{$n}[0]+$o)%5][ $l{$n}[1]      ]
             :                          $r[ $l{$m}[0]      ][ $l{$n}[1]      ]. ## o/w - other corners of square
                                        $r[ $l{$n}[0]      ][ $l{$m}[1]      ]
             ;
      }
      $out;
    }
```



## Blogs and Additional Submissions in Guest Languages for Task 2:

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/cheok-yin-fung/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/cheok-yin-fung/julia/ch-2.jl)


&nbsp;&nbsp;**blog writeup:**
[CY's Take on The Weekly Challenge #162 ](https://e7-87-83.github.io/coding/challenge_162.html)


[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/colin-crain/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Fair Play with Your Nose to the Grindstone - Programming Excursions in Perl and Raku](https://colincrain.com/2022/05/01/fair-play-with-your-nose-to-the-grindstone/)

&nbsp;&nbsp;**blog writeup:**
[Magic Spell Books, or 13 Revisited - Programming Excursions in Perl and Raku](https://colincrain.com/2022/04/29/magic-spell-books-or-13-revisited/)


[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/peter-campbell-smith/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Checksums and early encryption](https://pjcs-pwc.blogspot.com/2022/04/checksums-and-early-encryption.html)


[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/roger-bell-west/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/roger-bell-west/javascript/ch-2.js), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/roger-bell-west/kotlin/ch-2.kt), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/roger-bell-west/lua/ch-2.lua), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/roger-bell-west/postscript/ch-2.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/roger-bell-west/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/roger-bell-west/raku/ch-2.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/roger-bell-west/ruby/ch-2.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/roger-bell-west/rust/ch-2.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: The Weekly Challenge 162: Playing Fair with ISBNs](https://blog.firedrake.org/archive/2022/04/The_Weekly_Challenge_162__Playing_Fair_with_ISBNs.html)


[**Ryan Thompson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-162/ryan-thompson/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[PWC 162 › ISBN-13 - Ryan J Thompson](https://ry.ca/2022/04/isbn-13/)

&nbsp;&nbsp;**blog writeup:**
[PWC 162 › Wheatstone–Playfair Cipher - Ryan J Thompson](https://ry.ca/2022/04/playfair-cipher/)


------------------------------------------





---

<p> &nbsp; </p>
<p> &nbsp; </p>
<p> &nbsp; </p>
<p> &nbsp; </p>

<center>
<h1 id="PWC162BLOGS">_________ THE BLOG PAGES _________</h1>
</center>


---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, by some miracle I somehow continue to maintain my bearings.**

**Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your Unquenchable *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC162BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *FOLLOW* these *BLOG* *LINKS*:

**( ...*don't think, trust your training, you're in the zone, just do it ...* )**


**Adam Russell**

 * [The Weekly Challenge 162 — Perl  — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2022/05/01) ( *Perl* )
 * [The Weekly Challenge 162 — Prolog  — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/prolog/2022/05/01) ( *Prolog* )

**Arne Sommer**

 * [Thirteen Wheatstones with Raku - Arne Sommer](https://raku-musings.com/thirteen-wheatstones.html) ( *Raku* )

**Cheok-Yin Fung**

 * [CY's Take on The Weekly Challenge #162 ](https://e7-87-83.github.io/coding/challenge_162.html) ( *Perl* )

**Colin Crain**

 * [Fair Play with Your Nose to the Grindstone - Programming Excursions in Perl and Raku](https://colincrain.com/2022/05/01/fair-play-with-your-nose-to-the-grindstone/) ( *Perl* )
 * [Magic Spell Books, or 13 Revisited - Programming Excursions in Perl and Raku](https://colincrain.com/2022/04/29/magic-spell-books-or-13-revisited/) ( *Perl* )

**Dave Jacoby**

 * [Play Fair and By The Book: Weekly Challenge #162 | Committed to Memory](https://jacoby.github.io/2022/04/26/play-fair-and-by-the-book-weekly-challenge-162.html) ( *Perl* )

**Flavio Poletti**

 * [PWC162 - ISBN-13 - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/04/26/pwc162-isbn-13/) ( *Perl & Raku* )
 * [PWC162 - Wheatstone-Playfair - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/04/27/pwc162-wheatstone-playfair/) ( *Perl & Raku* )

**Jaldhar H. Vyas**

 * [Perl Weekly Challenge: Week 162](https://www.braincells.com/perl/2022/05/perl_weekly_challenge_week_162.html) ( *Perl & Raku* )

**James Smith**

 * [Perl Weekly Challenge #162](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-162/james-smith) ( *Perl* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 162: ISBN-13 and Wheatstone-Playfair](http://blogs.perl.org/users/laurent_r/2022/04/perl-weekly-challenge-162-isbn-13-and-wheatstone-playfair.html) ( *Perl & Raku* )

**Peter Campbell Smith**

 * [Checksums and early encryption](https://pjcs-pwc.blogspot.com/2022/04/checksums-and-early-encryption.html) ( *Perl* )

**Roger Bell_West**

 * [RogerBW's Blog: The Weekly Challenge 162: Playing Fair with ISBNs](https://blog.firedrake.org/archive/2022/04/The_Weekly_Challenge_162__Playing_Fair_with_ISBNs.html) ( *Perl & Raku* )

**Ryan Thompson**

 * [PWC 162 › ISBN-13 - Ryan J Thompson](https://ry.ca/2022/04/isbn-13/) ( *Perl* )
 * [PWC 162 › Wheatstone–Playfair Cipher - Ryan J Thompson](https://ry.ca/2022/04/playfair-cipher/) ( *Perl* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 162 – W. Luis Mochán](https://wlmb.github.io/2022/04/25/PWC162/) ( *Perl* )
