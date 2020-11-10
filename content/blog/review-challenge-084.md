---
author:       Colin Crain
date:         2020-11-10T00:00:00
description:  "Colin Crain › Perl Weekly Review #084"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #084"
image:        images/blog/p5-review-challenge-084.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-083/).* )

Welcome to the Perl review for **Week 084** of the Weekly Challenge! Here we will take the time to discuss the  submissions offered by the team, factor out the common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

---

### Why do we do these challenges?

I suppose any answers to that would be as wide ranging and varied as the people who choose to join the team. One thing is clear: it's not a competition, and there are no judges, even if there is a "prize" of sorts. About that -- I think of it more as an honorarium periodically awarded to acknowledge the efforts we all make towards this strange goal. So there's no determination to find the *fastest*, or the *shortest*, or even, in some abstract way, the *best* way to go about things, although I'm certain the individuals have their own aspirations and personal drives. As Perl is such a wonderfully expressive language, this provides quite a bit of fodder to the core idea of TMTOWTDI, producing a gamut of wonderfully varied techniques and solutions.

Even the tasks themselves are often open to a certain amount of discretionary interpretation. What we end up with is a situation where each participant is producing something in the manner they find the most interesting or satisfying. Some team members focus on carefully crafted complete applications that thoroughly vet input data and handle every use case they can think up. Others chose to apply themselves to the logic of the underlying puzzle and making it work in the most elegant way they can. Some eschew modules they would ordinarily reach for, others embrace them, bringing to light wheels perhaps invented years ago that happen to exactly solve the problem in front of them today.

I've been considering this question for some time and have found one binding commonality between all of us solving these challenges each week, in that however we normally live our lives, the task in front of us more than likely has nothing to do with any of that . And I think this has great value. We all do what we do, out in the real world, and hopefully we do it well. The Weekly Challenge provides a opportunity to do something germane to that life yet distinctly different; if we only do the things we already know how to do we only do the same things over and over. This is where the "challenge" aspect comes into play.

So we can consider the Weekly Challenge as providing a problem space outside of our comfort zone, as far out from comfort as we wish to take things. From those reaches we can gather and learn things and bring what we want back into our lives. Personally, I think that's its greatest value of all.

---

Every week there is an enormous global collective effort made by the team, analyzing and creatively coding the submissions, and that effort deserves credit due. And that's why I'm here, to try and figure out how to do that.

Let's have a look and see what we can find.

---

**<big>For context</big>**  before we begin, you may wish to revisit either of the pages for the [**original tasks**](/blog/perl-weekly-challenge-084/) or the summary [**recap**](/blog/recap-challenge-084/) of the challenge. But don't worry, the challenges themselves will be briefly summarized, presented below as we progress from task by task. Oh, and one more thing before we get started:

### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

**So finally, without further ado...**

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC084TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC084TASK2)   &nbsp;  &nbsp;  &nbsp;       •   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC084BLOGS)    &nbsp;  &nbsp;  &nbsp;       •

---

# TASK 1 {#PWC084TASK1}

# Reverse Integer
*Submitted by: Mohammad S Anwar*
You are given an integer $N.

Write a script to reverse the given integer and print the result. Print 0 if the result doesn’t fit in 32-bit signed integer.

The number 2,147,483,647 is the maximum positive value for a 32-bit signed binary integer in computing.

Example 1:

    Input: 1234
    Output: 4321

Example 2:

    Input: -1234
    Output: -4321

Example 3:

    Input: 1231230512
    Output: 0


## about the solutions

There were 34 submissions for the first task this past week.

## reverse the STRING
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/abigail/perl/ch-1.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/arne-sommer/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/athanasius/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/colin-crain/perl/ch-1.pl),
[**Dave Cross**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/dave-cross/perl/ch-1.pl),
[**Dieter Dobbelaere**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/ddobbelaere/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/polettix/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/jo-37/perl/ch-1.pl),
[**Jose Luis**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/jluis/perl/ch-1.pl),
[**Kai Burgdorf**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/kai-burgdorf/perl/ch-1.pl),
[**Kang-min Liu**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/gugod/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/laurent-rosenfeld/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/lubos-kolouch/perl/ch-1.pl),
[**Myoungjin Jeon**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/jeongoon/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/perlboy1967/perl/ch-1.pl),
[**Nuno Vieira**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/nunovieira220/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/pete-houston/perl/ch-1.pl),
[**Samir Parikh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/samir-parikh/perl/ch-1.pl),
[**Shawn Wagner**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/shawn-wagner/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/sgreen/perl/ch-1.pl),
[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/walt-mankowski/perl/ch-1.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/wanderdoc/perl/ch-1.pl)

Reversing a number isn't really a very mathematical concept per se. It's a manipulation of the base 10 representation of a number, not the number itself, and as such it's more like the reflection of a photograph, or a rearrangement of the typography. It's indirect -- a function on a view of the thing, not on the thing itself. As put so well by Alfred Korzybski: [The map is not the territory](https://en.wikipedia.org/wiki/Map–territory_relation).

Or if you prefer, Magritte: [Ceci n'est pas une pipe](https://en.wikipedia.org/wiki/The_Treachery_of_Images).

Which isn't to say this goal cannot be achieved mathematically, of course, but we'll get to that. Reversing is a textual thing -- something that might be done to the letters in words, which, like their numeric counterparts, aren't really the words themselves, but just the way we've decided to write them down. Spelling conventions come and go, but the ideas are there waiting for us centuries later. If like Leonardo we write the words right-to-left, the meaning still remains to those who want to read it, and our [cuff remains unstained](https://en.wikipedia.org/wiki/Mirror_writing#Notable_examples). So much is just a matter of style, and inky cuffs is just not a good look.

But that's not perhaps the best example, because here we do want to actually change the numbers via a base-10 positional rearrangement. Which is to assign new values based on what they *look like*, rather than by something more purely mathematical.

My, things got really heady in here rather quickly. But no mind, this is all an elaborate introduction to the idea of treating the numbers as strings, and using the `reverse` function on them to invert the characters back to front. Not that we needed a justification or anything.

[**Samir Parikh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/samir-parikh/perl/ch-1.pl)

```perl
    if ($number < 0) {
        $number = $number * -1;
        print "-", scalar reverse($number), "\n";
    } else {
        print scalar reverse($number), "\n";
    }
```

See? This works just fine.

The only (arguable) problem with this approach as-is is in the case of numbers that end in one or more zeros. Those numbers, when reversed, will end up with *leading* zeros. While not quite wrong -- the numerical value remains unchanged -- this is at best non-standard. I don't want to single out Samir here, by any means. Only a few people even thought this warranted a fix, although there isn't a lot of evidence it was even noticed. I'm of two minds myself; considering the structural basis of the problem itself, leaving the zeros intact maintains the position count and could be considered more correct for this particular case. I don't know: I took them out. Whacked 'em. In any case there were a couple of ways of going about this, either by substitution or explicit numification of the string.

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/e-choroba/perl/ch-1.pl)

Choroba did his primary manipulations as a string, and at one point strips the leading zeros with a regular expression:

```perl
    sub inverse_integer {
        my ($int) = @_;
        my $r = reverse $int;
        $r =~ s/^0+//;
        substr $r, 0, 0, '-' if $r =~ s/-$//;

        return 0
            if $r > MAX_INT32 || $r < MIN_INT32;

        return $r
    }
```

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/colin-crain/perl/ch-1.pl)

For my own part, I chose to remove any *trailing* zeros, before the reverse:

```perl
    my $out = $num =~ s/0+$//r;   ## strip trailing 0s before reversing
    my $rev = $sign . reverse abs $out;
```

the `/r` modifier returns the *result* of the substitution, without actually applying it to `$num`, freeing me to use that value unchanged later. For some reason I don't see this modifier much out in the wild. It's a good trick to keep around, and super handy when you need it.

Really all that's required here is to force evaluating the results of our manipulations as a number rather than a string:

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/laurent-rosenfeld/perl/ch-1.pl)

```perl
my $positive = 1;
if ($input < 0) {
    $positive = 0;
    $input = -$input;
}
my $output = reverse $input;

# No specification for inputs ending with 0
# We numify $output and negate it if needed
$output = $positive ? $output + 0 : -$output;
say $output;
```

This process of adding 0 to obtain something assuredly a number is known as *numification*. The expression `+0` is commonly called the ["Venus operator"](https://metacpan.org/pod/distribution/perlsecret/lib/perlsecret.pod#Venus).






## reverse as an ARRAY
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/adam-russell/perl/ch-1.pl),
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/alexander-pankoff/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/dave-jacoby/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/james-smith/perl/ch-1.pl),
[**Julio de Castro**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/juliodcs/perl/ch-1.pl),
[**Lars Thegler**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/lars-thegler/perl/ch-1.pl),
[**Rage311**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/rage311/perl/ch-1.pl), and
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/roger-bell-west/perl/ch-1.pl)

Ok, the `reverse` function work perfectly fine on a list as well, of course.

[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/alexander-pankoff/perl/ch-1.pl)

gives us an example. The meat of the matter:

```perl
    my $reversed =
      join( '', ( $is_negative ? '-' : '' ), reverse( split( //, $n ) ) );
```

And
[**Lars Thegler**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/lars-thegler/perl/ch-1.pl)

gives us another. Note the use of the 'Venus operator' again to force numification.

```perl
    my $Nr = 0 + join '', reverse split '', $N;
```

Because of the multifold nature of the `reverse` function, operating on both scalars and lists, if scalar context is required it was usually explicitly added with `scalar`, even when that keyword wasn't strictly necessary. By defaulting to list context, I think some people were more comfortable processing things this way. It is less confusing and easier to be sure of the result. Outside of this, I can see neither benefit nor downside to choosing one way over the other.

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/roger-bell-west/perl/ch-1.pl)

Roger gave us a nice way of rearranging the sign with a regex:

```perl
sub ri {
    my $s=shift;
    my $r=join('',reverse split '',$s);
    if ($r =~ /([0-9]+)-$/) {
        $r="-$1";
    }
    if (unpack('l',pack('l',$r)) != $r) {
        return 0;
    }
    return $r;
}
```



## use CONTROL FLOW to guide you
[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/cristian-heredia/perl/ch-1.pl) and
[**Kai Burgdorf**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/kai-burgdorf/perl/ch-1.pl)

By converting the number into an array of digits using `split` and then iterating through that array, unshifting the elements on to second array will serve to reverse the ordering. Assigning things very systematically like this has something to say for it, as that at some point every element will be in-hand for examination and processing, which of course includes any sign found.

[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/cristian-heredia/perl/ch-1.pl)

Christina takes advantage of this opportunity to remove the negative sign if present and set a flag. Then when finished the flag is checked and the sign is restored.

```perl
sub reverseNumber {

    @array = split //, $N;
    foreach (my $i =0; $i < @array; $i++) {
        if ($array[$i] eq '-') {
            $flagNegative = 'S';
        }
        else {
            unshift(@result, $array[$i]);
        }
    }
    if ($flagNegative eq 'S') {
        unshift(@result, '-');
    }
    $reverse = join( '', @result );
    checkInteger($reverse);
}
```

[**Kai Burgdorf**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/kai-burgdorf/perl/ch-1.pl)

Kai, on the other hand, shifts off the sign should any be found, then pops the array off and concatenates it to an output string to reverse it.

```perl
    my @numbers = split( "", $N );

    my $sign = "";
    if ( $numbers[0] eq "-" ) {
        $sign = shift @numbers;
    }

    while ( scalar @numbers != 0 ) {
        $output .= pop @numbers;
    }

    $output = $sign . $output;
```

One builds from the front, the other the back, but both end up in the same place.


## use the power of MATH
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/jaldhar-h-vyas/perl/ch-1.pl) and
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/colin-crain/perl/ch-1.pl)

I mentioned earlier the rearrangement could be made arithmetically.

[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/jaldhar-h-vyas/perl/ch-1.pl)

Jaldhar gives us simplicity itself, multiplying up the number while adding the remainder modulo 10. That's all you really need.

```perl
    while ($num > 0) {
        $reversed = $reversed * 10 + $num % 10;
        $num = int ($num / 10);
    }

    say $sign ? q{-} : q{}, $reversed;
```

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/colin-crain/perl/ch-1.pl)

I solved this challenge several ways, and one of these was a mathematical solution.

For this scheme to work, I first needed to know the order of the highest digit, so I could multiply the remainder by the correct power as I divided out the input. I'd already built a solution building the reversed number up positionally from the left, so I wanted to mix it up a bit and work from the right:

```perl
    my $power = 0;
    $power++ while int $num / 10 ** $power > 0;

    while ($power--) {
        $output += $num % 10 * 10 ** $power ;
        say $output;
        $num = int $num/10;
    }
    $output *= $sign;
```



## "...if the result doesn’t fit in 32-bit signed integer"

One could well argue that this was a bit of a trick question. The directives list one relevant prescription: "Print 0 if the result doesn’t fit in 32-bit signed integer", but then follow that up with an observation that the *largest* value is 2,147,483,647. Some people read that as "nothing greater than *x*", which is wrong, but understandable. I mean, I did it, and had to go back and fix it. It happens.

Consequently, for that interpretation checking is a simple less than comparison. Others went with a comparison to *plus or minus* 2,147,483,647 in some form, perhaps by validation against the absolute. And that's the trick part: we're misdirected by the given value in the example, because the *negative* side of a signed 32-bit integer is -2,147,483,64*8*, not 7. I'd say a fair number of folks missed this detail. The only important part, the defined part, is the result fitting in a 32-bit signed integer type, and -2,147,483,648 fits just fine.

Here are some of the myriad ways chosen to type validate the result:

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/dave-jacoby/perl/ch-1.pl)

```perl
    if ( $num > 2147483647 || $num < -2147483648 ) {
        say 0;
        return;
    }
```

[**Dave Cross**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/dave-cross/perl/ch-1.pl)

```perl
    my $max = int( 0xffffffff / 2 );
```

[**Dieter Dobbelaere**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/ddobbelaere/perl/ch-1.pl)

```perl
    sub reverse_integer($N) {
        my $M = reverse abs $N, '-'x($N<0);
        $M*(-2**31<=$M<2**31);
    }
```

[**Shawn Wagner**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/shawn-wagner/perl/ch-1.pl)

```perl
    use POSIX qw/:limits_h/;
    ...
    if ( $s > INT_MAX || $s < INT_MIN ) {
        say 0;
    }
```

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/roger-bell-west/perl/ch-1.pl)

```perl
    if (unpack('l',pack('l',$r)) != $r) {
        return 0;
    }
```

## oh look! A shiny object! CORVID POWERS ACTIVATE!

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/abigail/perl/ch-1.pl)

Abigail true to form pulls out a regex to accomplish the job in a uniquly efficiant manner: to reverse the digit portion of the number while leaving the sign, if present, as-is.

The fitting into a 32-bit integer aspect is handled in a more usual fashion, with a pair of comparison operators and an accompanying note to the asymmetry of the maximum and minimum values.

```perl
my $MAX = 2_147_483_647;  # Maximum value which fits in a 32-bit signed integer.
my $MIN = - $MAX - 1;     # Minimum value which fits in a 32-bit signed integer.

while (<>) {
    chomp;
    #
    # Reverse the numeric part; this keeps the sign as is.
    #
    s/[0-9]+/reverse $&/e;

    #
    # Either print 0, or the result.
    #
    say $_ > $MAX || $_ < $MIN ? 0 : $_;
}
```

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/james-smith/perl/ch-1.pl)

I had to include this presentation by James Smith, for, well, obvious reasons.

```perl
    sub n_rev {
      my $n = shift;
      return @_>0                         ? 0
           : ! defined $n                 ? 0
           : $n !~ m{\A-?\d+\Z}           ? 0
           : $n <= -(1<<31) || $n > 1<<31 ? 0
           : $n < 0                       ? -reverse split m{}, -$n
           :                                1*reverse split m{}, $n
           ;
    }
```

lets break this down, shall we?

if:
* there was nothing lets in @ARGV
* something was input
* that input was just maybe a sign and two digits
* input wasn't less than -2<sup>31</sup> or greater than 2<sup>31</sup> - 1 <sup>(1)</sup>
* input was negative then return minus the reverse of the positive version of the number
* input was not negative then return reverse of the number numified

---

<sup>1</sup> Ok, not to be a drag but the operators are backwards as written. The condition should be true for `$n < -(1<<31) || $n >= 1<<31`. I told you people got confused. Now go back and appreciate the beauty of the cascading layout.

---

# TASK 2 {#PWC084TASK2}

# Find Square
*Submitted by: Mohammad S Anwar*
You are given matrix of size m x n with only 1 and 0.

Write a script to find the count of squares having all four corners
set as 1.

Example:

    Input: [ 1 1 0 1 ]
           [ 1 1 0 0 ]
           [ 0 1 1 1 ]
           [ 1 0 1 1 ]

Output: 4

Explanation:

* There is one square (4x4) in the given matrix with four corners as 1
starts at r=1;c=1.
* There is one square (3x3) in the given matrix with four corners as 1
starts at r=1;c=2.
* There are two squares (2x2) in the given matrix with four corners as 1
First starts at r=1;c=1 and second starts at r=3;c=3.


## about the solutions

There were 32 submissions for the second task this past week. These overwhelmingly modeled themselves around a single base pattern, with the main variation in the order of the loops within it, and some consequent optimizations that made available.

In the broad pattern, we need to evaluate every point in the matrix as potentially one corner of a square of 1s. We will need at least three loops to pull this off: two to loop through the rows for a y-coordinate, and the columns for an x, and we will also need to loop through every potential square size, where we can obtain the corners by mathematical offset to ascertain whether they all hold 1s.

## the ARCHETYPICAL pattern
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/james-smith/perl/ch-2.pl),
[**Jose Luis**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/jluis/perl/ch-2.pl),
[**Julio de Castro**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/juliodcs/perl/ch-2.pl),
[**Kang-min Liu**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/gugod/perl/ch-2.pl),
[**Lars Thegler**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/lars-thegler/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/laurent-rosenfeld/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/perlboy1967/perl/ch-2.pl),
[**Samir Parikh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/samir-parikh/perl/ch-2.pl), and
[**Shawn Wagner**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/shawn-wagner/perl/ch-2.pl)


It seems that in thinking about how to solve this problem, almost eveyone first tackled the complex part: how to identify a square of 1s. Lets break it down: For a square of edge length 2, for instance, we take a given point *(x, y)*, check to see if it contains a 1, then check *(x+1, y)*, *(x, y+1)* and *(x+1, y+1)* to see if they do too. Once we've done that, we can continue to look for the square elsewhere --  we move the validation through our x and y coordinates with a couple of nested loops. Then we go back and check the next larger size set of squares. We only need to check those squares the fit within the matrix, so as the squares get larger, the number of looped-over values decreases.

At least that was basically how I went about things, at first.

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/james-smith/perl/ch-2.pl)

```perl
    sub squares {
        my $grid = shift @_;
        my $m    = @{ $grid };
        my $n    = @{ $grid->[0] };
        my $ms = $m < $n ? $m : $n;
        my $count = 0;
        for my $s ( 1..( $ms - 1 ) ) {
            foreach my $i ( 0..( $m - $s - 1 ) ) {
                foreach my $j ( 0..( $n - $s - 1 ) ) {
                    $count+= $grid->[$i][$j]
                             * $grid->[$i + $s][$j]
                             * $grid->[$i][$j + $s]
                             * $grid->[$i + $s][$j + $s];
                }
            }
        }
        return $count;
    }
```

It's all there laid out: for every square size $s, iterate over the matrix coordinates for squares that fit, then in this case add the product of the four corners to the count. No conditional is required because any zero found will set the product to 0 and the sum will remain unchanged. I like this little product trick.


[**Jose Luis**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/jluis/perl/ch-2.pl)

Jose makes short work out of the same process by inputting the matrix rows as strings of 1s and 0s, then directly referencing those rows in @ARGV using `substr`. Note those results are all bitwise ANDed to yield a 1/0 result.


```perl
    for my $order (1..$bigest_square - 1) {
        for my $row ( 0..$m - $order - 1) {
            for my $col (0..$n - $order -1 ) {
                $output += substr($ARGV[$row],$col,1) &
                           substr($ARGV[$row+$order],$col,1) &
                           substr($ARGV[$row],$col+$order,1) &
                           substr($ARGV[$row+$order],$col+$order);
            }
        }
    }
```

[**Samir Parikh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/samir-parikh/perl/ch-2.pl)

Samir makes a good choice by connecting the comparisons with logical AND operators. Should any of these validations fail the expression will short-circuit and further evaluation immediately stops.

```perl
    if (
        $matrix[$r][$c]                                       == 1 &&
        $matrix[$r + $square_size - 1][$c]                    == 1 &&
        $matrix[$r][$c + $square_size - 1]                    == 1 &&
        $matrix[$r + $square_size - 1][$c + $square_size - 1] == 1
        ) {
        $match++;
        say "Found one square (${square_size}x${square_size}) " .
        "in the given matrix with four corners as 1 " .
        "starts at r=", $r + 1, "; c=", $c + 1, ".";
    }
```

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/laurent-rosenfeld/perl/ch-2.pl)

```perl
    for my $square_size (2..$max_square_size) {
        for my $j (0..$nb_col - $square_size) {
            for my $i (0..$nb_lines - $square_size) {
                next if $matrix[$i][$j] == 0;
                next if $matrix[$i][$j+$square_size-1] == 0;
                next if $matrix[$i+$square_size-1][$j] == 0;
                next if $matrix[$i+$square_size-1][$j+$square_size-1] == 0;
                say "Value in position $i, $j is the top left corner of a square of size $square_size";
                $nb_squares++;
            }
        }
    }
```

Laurent accomplishes the same short-circuiting through a series of `next` control statements on the square size loop, jumping out to the next iteration on any failure.

The actual order of the loops is not fixed, either. Many people put the matrix traversal on the outside. This opens up a few opportunities for further optimization to the process.

## the archetypical solution, OPTIMIZED
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/abigail/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/athanasius/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/colin-crain/perl/ch-2.pl),
[**Dave Cross**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/dave-cross/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/dave-jacoby/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/polettix/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/jaldhar-h-vyas/perl/ch-2.pl),
[**Kai Burgdorf**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/kai-burgdorf/perl/ch-2.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/lubos-kolouch/perl/ch-2.pl),
[**Nuno Vieira**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/nunovieira220/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/pete-houston/perl/ch-2.pl),
[**Rage311**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/rage311/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/roger-bell-west/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/sgreen/perl/ch-2.pl),
[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/walt-mankowski/perl/ch-2.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/wanderdoc/perl/ch-2.pl)


[**Dave Cross**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/dave-cross/perl/ch-2.pl)

Dave demonstrates an inversion of the process described previously -- the code is functionally equivalent to Laurent's algorithm, above. But rather than restraining the traversal space, he instead limits the sizes of the squares evaluated to only those that remain within bounds.

```perl
    sub count_squares($matrix) {
      my $count = 0;
      my $size  = @$matrix;

      for my $r (0 .. $size - 1) {
        for my $c (0 .. $size - 1) {
          for my $edge (1 .. min($size - $r, $size - $c)) {
            $count++ if good_square($matrix, $r, $c, $edge);
          }
        }
      }

      return $count;
    }

    sub good_square($matrix, $r, $c, $edge) {
      return if ! $matrix->[$r        ][$c];
      return if ! $matrix->[$r + $edge][$c];
      return if ! $matrix->[$r + $edge][$c + $edge];
      return if ! $matrix->[$r        ][$c + $edge];
      return 1;
    }
```

However, we can optimize this base form a little bit by validating whether a given point already contains a 1 before continuing on to examine the other corners. In a randomly apportioned matrix of 1s and 0s this will avoid approximately one-half the squares right away. If the first corner isn't a 1 we can eliminate any square that references that as a base point.

[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/jaldhar-h-vyas/perl/ch-2.pl)
demonstrates:

```perl
    for my $m (0 .. scalar @matrix - 1) {
        for my $n (0 .. (scalar @{$matrix[$m]} - 1)) {
            if ($matrix[$m]->[$n] == 1) {
                for (my $side = 1; $n + $side < scalar @{$matrix[$m]}; $side++) {
                    if ($matrix[$m]->[$n + $side] == 1
                        && $m + $side < scalar @matrix
                        && $matrix[$m + $side]->[$n] == 1
                        && $matrix[$m + $side]->[$n + $side] == 1) {
                        $squares++;
                    }
                }
            }
        }
    }
```

There is one more tiny tweak that can be included, in that the smallest square edge length we're considering is 2. Thus when traversing the rows and columns it's not necessary to extend past the second-to-last index:

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/sgreen/perl/ch-2.pl)

```perl
    foreach my $row ( 0 .. $rows - 2 ) {
        foreach my $col ( 0 .. $cols - 2 ) {
            # No square if this value is zero
            next if $array[$row][$col] == 0;

            # Find the maximum square size
            my $max_size = min( $cols - $col, $rows - $row );

            for my $size ( 2 .. $max_size ) {
                my $offset = $size - 1;
                if (    $array[$row][ $col + $offset ]
                    and $array[ $row + $offset ][$col]
                    and $array[ $row + $offset ][ $col + $offset ] )
                {
                    push @squares, sprintf "row %d col %d size %d", $row + 1,
                      $col + 1, $size;
                }
            }

        }
    }
```

or here again from

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/polettix/perl/ch-2.pl)

```perl
    sub find_square (@matrix) {
       my $m     = @matrix;
       my $n     = $matrix[0]->@*;
       my $count = 0;
       for my $i (0 .. $m - 2) {    # no point in scanning last line
          for my $j (0 .. $n - 2) {    # same for last column
             next unless $matrix[$i][$j];    # only consider "1"s in upper left
             my $k = 1;
             while (($i + $k < $m) && ($j + $k < $n)) {
                ++$count
                  if $matrix[$i][$j + $k]
                  && $matrix[$i + $k][$j]
                  && $matrix[$i + $k][$j + $k];
                ++$k;
             } ## end while (($i + $k < $m) && ...)
          } ## end for my $j (0 .. $n - 2)
       } ## end for my $i (0 .. $m - 2)
       return $count;
    } ## end sub find_square (@matrix)
```

## PAIRS, SQUARED
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/alexander-pankoff/perl/ch-2.pl)
[**Myoungjin Jeon**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/jeongoon/perl/ch-2.pl)
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/ulrich-rieke/perl/ch-2.pl)

There were three outlier solutions that shared the same common idea: find a pair of points in a given row to define the top edge of a square, then look down for a matching bottom pair in the rows below. Unlike the self-similarity of the ratcheting, stepwise solutions we've been looking at so far, the actual implementations here were wildly different from each other.

[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/ulrich-rieke/perl/ch-2.pl)

Ulrich is focusing primarily on the qualities of the squares, rather than the matrix providing a backdrop. To start he filters the rows to only those containing at least two 1s, as any square present will have two of these, left and right.

Then once the rows are found, each is iterated through. The locations of the 1 indices are noted and assembled in pairs using the `combinations` routine from  `Algorithm::Combinatorics`. Then for each pair found it is determined whether the corresponding 1s exist on the opposite edge of the square. I wonder how the increased overhead of front-loading the computation, searching and patterning the rows, balances against the presumably radically reduced number of square misses examined.

```perl
    my $squaresum = 0 ;
    for my $rowIndex( @possibleStartRows ) {
        if ( $rowIndex < $#matrix ) {
            my @ones = findIndicesofOne ( $matrix[ $rowIndex ] ) ;
            my $iter = combinations (\@ones , 2 ) ;
            while ( my $p = $iter->next ) {
                if ( existCorrespondingCorners( \@matrix, $rowIndex, $p->[0] ,
                        $p->[1] ) ) {
                    $squaresum++ ;
                }
            }
        }
    }
    say "\n$squaresum" ;

    sub existCorrespondingCorners { #are there corresponding square corners ?
        my ( $matrix , $rowIndex , $firstOne , $secondOne ) = @_ ;
        my $diff = $secondOne - $firstOne ;
        return ( defined $matrix->[$rowIndex + $diff] and
            $matrix->[$rowIndex + $diff][$firstOne] == 1 and
            $matrix->[$rowIndex + $diff][$secondOne] == 1 ) ;
}
```

[**Myoungjin Jeon**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/jeongoon/perl/ch-2.pl)

Jeon takes functional abstraction to a new level here, constructing a fleet of functions to process the matrix and then assigning these functions as references to elements in an array, and then in turn mapping over that sequence of functions to create the final outer control structure.

At its heart it works in a way not dissimilar to Ulriech's: we locate pairs of 1s in a given row and project them as defining the endpoints on the edge of a square, and then these pairs are handed off to another routine that determines whether that other corner vertices of our theoretical square also contain 1s. All told in the style of Quentin Tarantino. Not the violence, mind you, just the reversed timeframe.

All this abstraction provides a highly formalized processing environment, but I dare say it can be difficult to follow. By the time we get to taking combinations of lines within  a given row to see whether they compose squares, we are no less than 5 `map` statements deep within a dispatched subroutine.

The outer shell:

```perl
    my @solutionComposed =
      (
        # pairs of function, logger in top -> bottom in the same order of exe.
       RunAndShow->new( Run  => \&readContents, Show => sub { say @_ } ),
       # ==>
       RunAndShow->new( Run  => \&getPointsAtEachRows,
                        Show => \&showPoints ),
       # ==>
       RunAndShow->new( Run  => \&getHorizLinesFromPoints,
                        Show => \&showHorizLines ),
       # ==>
       RunAndShow->new( Run  => \&getSquaresFromHlines,
                        Show => \&showSquares ),
      );

    our $debug = 1;
    my $ball;

    my @progress = map {
        $ball = $_->Run->($ball);
        if ( $debug ) { $_->Show->($ball); }
        $ball;
    } @solutionComposed;
```

The final squaring step:

```perl
    # return as an ArrayRef of PointInMat
    sub getSquaresFromHlines ($) {
        my @hls_at_all_rows = @{$_[0]}; # copy for sure
        my $row_to_scan = 0;

        [ map { # combinations of two rows
            my ( $hls_r1, $hls_r2 ) = @hls_at_all_rows[ @$_ ];

            # permutation of pairs of horizontal lines
            # which are selected from one each
            map {
                my $hl1 = $$hls_r1[$_];
                map {
                    my $hl2 = $$hls_r2[$_];
                    if ( $hl1->begin == $hl2->begin ) {
                        my ( $hlen1, $hlen2 )
                          = map { $_->end - $_->begin } ($hl1, $hl2);
                        if ( $hlen1 == $hlen2 # rectangle
                             and
                             $hlen1 == ( $hl2->row - $hl1->row ) ) {
                            # square
                            SquareInMat->new( row_NW => $hl1->row,
                                              col_NW => $hl1->begin,
                                              row_SE => $hl2->row,
                                              col_SE => $hl2->end )
                        }
                        else {
                            ()
                        }
                    }
                    else {
                        ()
                    }
                } 0 .. $#{$hls_r2}
            } 0 .. $#{$hls_r1}
        } combiIndex2( scalar @hls_at_all_rows ) ] # return as ArrayRef
    }
```

I find this whole paradigm Jeon is working in quite interesting, especially that outer shell, or whatever you want to call it. I can't say blending in [Container Theory](https://en.wikipedia.org/wiki/Container_(type_theory)) is intrinsically a very *perlish* thing to do, but I am also loathe to say that it *isn't*. Y'all are a weird lot, and who am I to judge? I'm not so normal myself.

[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/alexander-pankoff/perl/ch-2.pl)

Alexander provides us with perhaps a happy medium, with a functional core wrapped in a imperative framework. I think I'll let his opening comment speak for itself.

>we process the corners row by row. For each row we build pairs from the
possible corners and check wether we can find the same pair in the row that is
as far away from the current row as the corners in the pair are apart from each
other

There's a certain elegant grace to it I very much enjoy.

```perl
    sub find_squares ( $corners, $count = 0 ) {
        ## base case. no more squares possible
        return $count if keys @$corners < 2;

        my $row  = $corners->[0];
        my @rest = @{$corners}[ 1 .. $#{$corners} ];

        # build corner pairs from the current row, if there are less than 2
        # elements no pais will be build
        my @corner_pairs = combinations( 2, keys %{$row} );

        my $squares = sum0(
            map {
                my ( $a, $b ) = @{$_};

                # calculate the distance between the 2 corners.
                my $dist      = abs( $a - $b );
                my $check_row = $rest[ $dist - 1 ];

                # if both corners are set in check_row aswell we found a square
                $check_row && $check_row->{$a} && $check_row->{$b}
                  ? 1
                  : 0
            } @corner_pairs
        );

        return find_squares( \@rest, $count + $squares );
    }
```












## the awesome power that is the PDL

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/jo-37/perl/ch-2.pl)

This being a matrix at the heart of things, Jorg has brought out the big guns of the Perl Data Language, PDL, to, essentially,  compute all sets of points describing vertices of squares within the matrix. A built-in command, `andover` applies a logical 'AND' over the sets, and those that validate are counted.

It's rather technical code, but not very long and very well annotated. He provides two routines, a verbose explanatory version that goes to some length and a short terse version to demonstrate how the PDL allows very complex actions to be dispatched with short work. Here's the short version:

```perl
    sub count_squares {
        my $m = pdl(shift);
        my $max = $m->shape->min - 1;
        my $corner_offsets = corners->dummy(2, $max)
            * (sequence($max)->dummy(0)->dummy(1, c_dim) + 1);

        $m->indexND(
                whichND($m->slice(':-2,:-2'))->dummy(1, c_dim)->dummy(2, $max)
                    + $corner_offsets,
                'truncate')->andover->sum;
    }
```

For an explanation, have a look at the source. As I said its well commented.

---

# BLOGS {#PWC084BLOGS}

---

**That’s it for me this week, people! Resolute and unbroken by the torrential influx, I have maintained my bearings. Looking forward to next wave, the perfect wave, I am: your humble servant.**

## But if Your *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC084BLOGS}
## then *RUN* *(dont walk!)* to the *WATERING HOLE*
## and *READ* these *BLOG* *LINKS*:

***( don't think, trust your training, you're in the zone, just do it ... )***


**Adam Russell**

 * [Perl Weekly Challenge 084 - RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/2020/11/01#pwc084) ( *Perl* )

**Arne Sommer**

 * [Four Corners with Raku](https://raku-musings.com/four-corners.html) ( *Perl & Raku* )

**Colin Crain**

 * [Four Corners Off A Twenty: Get One, Reverse and Repeat &#8211; Programming Excursions in Perl and Raku](https://colincrain.com/2020/11/01/four-corners-off-a-twenty-get-one-reverse-and-repeat/) ( *Perl & Raku* )

**Flavio Poletti**

 * [PWC084 - Reverse Integer](https://github.polettix.it/ETOOBUSY/2020/10/28/pwc084-reverse-integer/) ( *Perl* )
 * [PWC084 - Find Square](https://github.polettix.it/ETOOBUSY/2020/10/29/pwc084-find-square/) ( *Perl* )

**Jaldhar H. Vyas**

 * [Perl Weekly Challenge: Week 84](https://www.braincells.com/perl/2020/11/perl_weekly_challenge_week_84.html) ( *Perl & Raku* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 84: Reverse Integer and Find Square Matrices](http://blogs.perl.org/users/laurent_r/2020/10/perl-weekly-challenge-84-reverse-integer-and-find-square-matrices.html) ( *Perl & Raku* )

**Myoungjin Jeon**

 * [Weekly Challenge #084 Task #1 :: Raku](https://dev.to/jeongoon/weekly-challenge-084-task-1-raku-31f6) ( *Raku* )
 * [Weekly Challenge #084 Task #2 :: Raku](https://dev.to/jeongoon/weekly-challenge-084-task-2-raku-241) ( *Raku* )

**Roger Bell_West**

 * [RogerBW&#39;s Blog: Perl Weekly Challenge 84: Reverse squares](https://blog.firedrake.org/archive/2020/10/Perl_Weekly_Challenge_84__Reverse_squares.html) ( *Perl & Raku* )

**Samir Parikh**

 * [Perl Weekly Challenge 084](https://samirparikh.com/blog/perl-weekly-challenge-084.html) ( *Perl* )

**Simon Green**

 * [Weekly Challenge 084](https://dev.to/simongreennet/weekly-challenge-084-559i) ( *Perl* )
