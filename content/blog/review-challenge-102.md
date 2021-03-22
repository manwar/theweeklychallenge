
---
author:       Colin Crain
date:         2021-03-22T00:00:00
description:  "Colin Crain › Perl Weekly Review #102"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #102"
image:        images/blog/p5-review-challenge-102.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-101/).* )

Welcome to the Perl review for **Week 102** of the Weekly Challenge! Here we will take the time to discuss the  submissions offered by the team, factor out the common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

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

**<big>For context</big>**  before we begin, you may wish to revisit either of the pages for the [**original tasks**](/blog/perl-weekly-challenge-102/) or the summary [**recap**](/blog/recap-challenge-102/) of the challenge. But don't worry, the challenges themselves will be briefly summarized, presented below as we progress from task by task. Oh, and one more thing before we get started:

### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

**So finally, without further ado...**

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC102TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC102TASK2)   &nbsp;  &nbsp;  &nbsp;       •   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC102BLOGS)    &nbsp;  &nbsp;  &nbsp;   	•

---

# TASK 1 {#PWC102TASK1}

# Rare Numbers
*Submitted by: Mohammad S Anwar*

You are given a positive integer $N.

Write a script to generate all Rare numbers of size $N if exists.

Please checkout the [page](http://www.shyamsundergupta.com/rare.htm) for more information about it.

**Examples**
```
    (a) 2 digits: 65
    (b) 6 digits: 621770
    (c) 9 digits: 281089082
```

## about the solutions

There were 24 submissions for the first task this past week.

Checking a candidate for rareness is a pretty straightforward operation: take the number, reverse its digits, then alternately add and subtract the reversed version from the original. If both the sum and the difference are perfect squares, then you have found a rare number.

If you do this 100 times, then you will find the number 65 fits the bill. Ok, now do it a hundred billion times. Ahh, there's the rub, and we're only up to ten digits.

There's nothing in the task specification indicating any sort of time constraints on the solution. So, if we implement the above steps in a loop, trying a value and then adding 1 and trying again, eventually we will find any rare numbers we require. Empires may rise and fall, the seas may dry up, the Sun may no longer burn, but eventually, save the coming of the heat-death of the universe, we will get our answer.

So really, the focus shifts to an unbounded problem of optimization: How far are we willing to go? How many digits can we reasonably compute?

Mr. Gupta claims to have constructed a program capable of computing values up to 10<sup>23</sup>, but perhaps wishing we should draw some favorable associations with Fermat, declines to publish it. He does, however, list a number of properties of the rare numbers that we can draw on to limit the candidates to check. There are also some known properties of perfect squares suggested, that can further filter out some expensive calculations.

Most of the examples submitted were based around those properties listed by Gupta in the suggested web page, but there were some alternate approaches taken, too, based around properties of perfect squares. The allowance for palindromic rare numbers was left an open question, with submissions offered from both perspectives. As there are known to be an infinite number of rare palindromes, it's an interesting thought experiment to consider the ramifications of calling anything that there is an infinite quantity of "rare". [Of course the idea does make sense](https://en.wikipedia.org/wiki/Cantor_set), and [even has practical applications](https://peerj.com/articles/cs-171.pdf), but I would argue the whole matter is [rather profoundly weird](https://en.wikipedia.org/wiki/Nowhere_dense_set).


## the BASIC ALGORITHM
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/arne-sommer/perl/ch-1.pl),
[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/cristian-heredia/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/dave-jacoby/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/duncan-c-white/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/lubos-kolouch/perl/ch-1.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/paulo-custodio/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/sgreen/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/ulrich-rieke/perl/ch-1.pl), and
[**Yet Ebreo**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/yet-ebreo/perl/ch-1.pl)

The basic algorithm, as outlined, involves iterating through a range of numbers, creating a digit-reversed version of each, and alternately adding and subtracting the reverse with the original. If both of these actions on a candidate produce a perfect square, then we have found a rare number.

As I said before, there is nothing wrong with stopping at the base implementation. Given enough time the run will eventually finish. Or possibly catch fire. We'll have to watch for that.

This straightforward approach was taken by a number of members.

[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/arne-sommer/perl/ch-1.pl)

Arne kept all his optimization to his Raku solution, leaving his Perl in the starting configuration. However, left this way we can quite clearly see the progression through the steps. We will see than most of the rest of the submissions will start with this basic form, adding  increasing levels of complexity on top of it but leaving the framework intact.

Looking it over, we can see establishment of some lower and upper bonds for the search range, and then iterating through the range looking at candidates. To validate we first create a reverse number and the sum and difference values. After taking the square root of a value, if the integer truncation of the result is the same as the original then we started with a perfect square.

```perl
    my $lower = 1 . 0 x ($N -1);
    my $upper = 9 x $N;

    for my $candidate ($lower .. $upper)
    {
      say $candidate if is_rare($candidate);
    }

    sub is_rare ($number)
    {
      my $reverse  = reverse $number;
      my $add      = $number + $reverse;
      my $subtract = $number - $reverse;

      return 0 if $add < 0 || $subtract < 0;

      my $add_sqrt = sqrt($add);
      my $sub_sqrt = sqrt($subtract);

      return int($add_sqrt) == $add_sqrt && int($sub_sqrt) == $sub_sqrt;
    }
```

[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/cristian-heredia/perl/ch-1.pl)

Here's Christina's versions of the same steps. She introduces the idea that should the difference go negative there is no point in continuing to the validation step. There's no room for complex roots in rare numbers.

```perl
    #First, create the array with the naumbers with size N
    sub createNumbers{
        $max .= '9' while $number > length $max;
        $min .= '0' while $number > length $min;
        @array = ($min..$max);
    }

    #R + R1 = X2 and R - R1 = Y2
    sub operation {
        for ($i = 0; $i < @array; $i++) {
            $revNumber = reverse($array[$i]);
            $check1 = $array[$i] + $revNumber;
            $check2 = $array[$i] - $revNumber;
            if ($check2 > 0) {
                perfectSquare();
            }
        }
    }

    #Check that they're perfect square
    sub perfectSquare {
        my $result1 = sqrt $check1;

        my $result2 = sqrt $check2;
        if ($result1 =~ /^\d+$/ and $result2 =~ /^\d+$/) {
          print "$array[$i]\n";
        }
    }
```

[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/lubos-kolouch/perl/ch-1.pl)

Lobos inlines his validation but the underlying logic remains the same. He starts counting up from the first number in the range and stops when we carry over into the next order of magnitude.

```perl
    sub get_rare_numbers {
        my $what = shift;

        my $pos = 1 . '0'x($what-1);

        my @output;
        while (1) {
            $pos++;
            last unless (length($pos) == $what);
            my $rev_num = reverse $pos;

            next unless $pos - $rev_num > 0;
            next unless sqrt($pos - $rev_num) == int(sqrt($pos - $rev_num));
            next unless sqrt($pos + $rev_num) == int(sqrt($pos + $rev_num));
            print "$pos \n";

            push @output, $pos;
        }

        return \@output;
    }
```

[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/ulrich-rieke/perl/ch-1.pl)

Ulrich takes a more functional approach, breaking the problem down into three base components: first a `grep` filter over the given range; this function applying an `isRare()`  validation function; which in turn uses an `isPerfectSquare()` function to see whether the square root is an integer.

```perl
    sub isPerfectSquare {
      my $num = shift ;
      if ( $num < 0 ) {
          return 0 ;
      }
      else {
          my $root = sqrt( $num ) ;
          return $root == int( $root ) ;
      }
    }

    sub isRare {
      my $num = shift ;
      my $reversed = join( '' , reverse split( // , $num ) ) ;
      return ( isPerfectSquare( $num + $reversed ) and
        isPerfectSquare( $num - $reversed ) ) ;
    }

    my $N = $ARGV[0] ;
    say grep { isRare( $_ ) } (10 ** ( $N - 1 ) .. ( 10 ** $N) - 1 ) ;
```

[**Yet Ebreo**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/yet-ebreo/perl/ch-1.pl)

Out for a quick round of golf, Yet capitalizes on default values when using `reverse`

```perl
    my @rares = grep{($_-reverse>-1)&&sqrt($_+reverse)!~/\./&&sqrt($_-reverse)!~/\./}10**~-$N..~-10**$N;
    say "Rare with $N digits: @rares"
```

Broken down, that yields, in the middle:

```perl
    grep {     ( $_ - reverse > -1 )
            && sqrt( $_ + reverse ) !~ /\./
            && sqrt( $_ - reverse ) !~ /\./
          } 10**~-$N..~-10**$N;
```

We see the familiar golfing tropes: eliminating temporary variables; drawing on default assignment; and the use of shorter, more exotic operations. For example, he checks for an integer value from the presence or absence of a decimal point. The last line utilizes the "[inchworm on a stick](https://metacpan.org/pod/distribution/perlsecret/lib/perlsecret.pod#Inchworm-on-a-stick)" secret operator; the `~-` decrements positive values. Thus a less baroque way to phrase this would be

```perl
    10**($N-1) .. (10**$N)-1;
```

which should be a bit more recognizable as the range span of a single number of digits.

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/sgreen/perl/ch-1.pl)

Finally, Simon adds one simple twist: before commencing he creates a lookup table of all possible perfect squares in the range, which he can then consult instead of applying two expensive `sqrt` operations per candidate. This isn't as crazy as it sounds, as there are only about
10<sup>*length/2*</sup> keys in this hash to compute. Eventually the memory footprint will become cumbersome, but not until N = 18 or so.

```perl
    while ( $counter**2 < 2 * 10**$length ) {
        ++$counter;
        $squares{ $counter**2 } = $counter;
    }

    my $r         = 10**( $length - 1 );
    while ( $r < 10**$length ) {
        my $r1 = reverse($r);
        push @solutions, $r if ( $r >= $r1 and $squares{ $r - $r1 } and $squares{ $r + $r1 } );
        ++$r;
    }
```

## the FIRST and LAST digits
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/cheok-yin-fung/perl/ch-1.pl) and
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/colin-crain/perl/ch-1.pl)

On the source page, there are a number of increasingly complex properties of rare numbers listed. These are expressed as rules, like "the first digit must be even", and "if the first digit is 2 the last digit must be 2". As they continue the rules get more complicated. I found that implementing the more complex rules introduced a tradeoff: adding the validation code increased the length of every loop cycle against shortening some loops by exiting early. The very broadest filter, that the first digit must be even, had a profound effect, but the most specific rules were muted by the added overhead.

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/cheok-yin-fung/perl/ch-1.pl)

CY demonstrates the first subset of the rules, for the first and last digit, with a slight detour into the second and second-to-last as well:

```perl
    sub check_rare {
        my $r = $_[0];
        my $a = substr($r,0,1);
        my $q = substr($r,-1,1);
        return undef if $a % 2 == 1;
        return undef if
            $a == 2
            && !( $q == 2
                  && substr($r,1,1) == substr($r,-2,1) );
        return undef if
            $a == 4 && !($q == 0);
        return undef if
            $a == 6 && !($q == 0 || $q == 5);
        return undef if
            $a == 8 && !($q == 2 || $q == 3 || $q == 7 || $q == 8);
       # above: properties of rare number, as noted in website
       # http://www.shyamsundergupta.com/rare.htm

        my $r1 = rvrse $r;
        return undef if $r1 > $r;
        return check_sq($r+$r1) && check_sq($r-$r1);
    }
```

[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/colin-crain/perl/ch-1.pl)

When optimizing my own solution, I did a test: just the simplest `for` loop iterating through 10<sup>10</sup> values, not assigning to a variable, not doing anything at all, `for ( 1..10**10 ) { ; }`, took 100 seconds. That indicated to me that using a `next` to short-circuit out of a loop cycle early wasn't going to be enough. We needed to jump the iterator ahead whole ranges of excluded values.

For example, if the first digit of a candidate was odd: rather than loop and exit early through the next 100,000 iterations, it would be better to just jump to the lowest value in the next digit range and *skip* those 100,000 loops entirely.

So I unrolled the loops, to great effect. When an invalid combination is arrived at, the value is adjusted and increased to the next valid candidate, according to an arcane set of rules I was able to calculate. It was quite tedious work, but I was able to narrow down the field 11-fold: 8999 iterations became about 800 just by applying the first and last digit checks.

It felt a lot like writing assembly code, and far from anything Perlish. I stopped after the first and last values; the second and second-to-last pairings were a thicket of logic and jumping around on that playing field was making my head hurt. And to dubious benefit, as the added checks were slowing down every loop processed even as some additional loops were eliminated. I decided I had proved my point, and wasn't going to get another digit past 10 in any reasonable time.

I can see now constructing the numbers from an iterated list *inside* valid pairs  of first and last digits is the next logical progression of this technique, without all the messy jumping mathematically. Oh well... I'm still proud of the aggressive leanness of it all. It's stripped down, sleek and fast.

And quite a unique approach to optimizing the algorithm, it appears. Kind of like stripping out the back seat, bumpers and the door panels of your hot rod to save weight.

```perl
while ($test < $end) {

    my $A = substr $test, 0, 1;
    if ($A % 2 == 1) {                  ## skip odd first ranks
        $test += 10**($order-1);
        next;
    }

    my $Z = substr $test, -1, 1;

    ## 2s
    if ($A == 2 and $Z == 0) {
        $test += 2;
    }
    elsif ($A == 2 and $Z > 2) {
        if ($tens == 9) {
            $test += 7;
            $tens = 0;
            next;
        }
        $test += 9;
        $tens++;
    }

    ## 4s
    if ($A == 4 and $Z > 0) {
        if ($tens == 9) {
            $test += 9;
            $tens = 0;
            next;
        }
        $test += 9;
        $tens++;
    }

    ## 6s
    if ($A == 6 and $Z == 1) {
        $test += 4;
    }
    elsif ($A == 6 and $Z == 6) {
        if ($tens == 9) {
            $test += 4;
            $tens = 0;
            next;
        }
        $test += 4;
        $tens++;
    }

    ## 8s
    if    ($A == 8 and $Z == 0) {
        $test += 2;
    }
    elsif ($A == 8 and $Z == 4) {
        $test += 3;
    }
    elsif ($A == 8 and $Z == 9) {
        if ($tens == 9) {
            $test += 1;
            $tens = 0;
            next;
        }
        $test +=3;
        $tens++;
    }

    my $rev = reverse $test;
    if (    $test == $rev               ## multiple opporunities to short-circuit
         or $test - $rev < 0
         or int(sqrt($test-$rev))**2 != ($test-$rev)
         or int(sqrt($test+$rev))**2 != ($test+$rev)  ) {
                $test++;
                next;
    }

    push @out, $test;
    $test++;
}
```

## more DIGIT PROPERTIES
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/james-smith/perl/ch-1.pl) and
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/roger-bell-west/perl/ch-1.pl)


Careful implementation of all the rules was fruitful in the end of course. I tried it several ways; I just couldn't make it run *faster* than the lean-running method I came up with. Others pulled out all the stops.

I wonder how many of you have ever even *heard* a pipe organ with all of the pipes unstoppered, open wide? It's a truly magnificent noise.

Here all of the first and last digit restrictions are implemented, along with the some additional filters, such as that prefect squares can only end with certain numbers.

As these two methods are themselves examples of everything, it seems wrong to section out one portion of the whole, as the whole is the point.


[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/roger-bell-west/perl/ch-1.pl)

```perl
    sub rn {
      my $d=shift;
      my @out;
      my $mxm=10**($d-2)-1;
      foreach my $a (2,4,6,8) {
        foreach my $q (0,2,3,5,7,8) {
          if ($a==2 && $q!=2) {
            next;
          }
          if ($a==4 && $q!=0) {
            next;
          }
          if ($a==6 && $q!=0 && $q!=5) {
            next;
          }
          if ($a==8 && $q!=2 && $q!=3 && $q!=7 && $q!=8) {
            next;
          }
          if ($d==2) {
            my $t="$a$q";
            if (is_rare($t)) {
              push @out,$t;
            }
          } else {
            foreach my $middledigits (map {sprintf('%0'.($d-2).'d',$_)} 0..$mxm) {
              my $b=substr($middledigits,0,1);
              my $p=substr($middledigits,-1,1);
              if ($a==2 && $b!=$p) {
                next;
              }
              if ($a==4 && abs($b-$p)%2 != 0) {
                next;
              }
              if ($a==6 && abs($b-$p)%2 != 1) {
                next;
              }
              if ($a==8) {
                if ($q==2 && $b+$p != 9) {
                  next;
                } elsif ($q==3 && $b-$p != 7 && $p-$b != 3) {
                  next;
                } elsif ($q==7 && $b+$p != 1 && $b+$p != 11) {
                  next;
                } elsif ($q==8 && $b!=$p) {
                  next;
                }
              }
              my $t="$a$middledigits$q";
              if (is_rare($t)) {
                push @out,$t;
              }
            }
          }
        }
      }
      return \@out;
    }

    sub is_rare {
      my $t=shift;
      my $d=join('',reverse(split '',$t));
      if ($d >= $t) {
        return 0;
      }
      foreach my $c ($t+$d,$t-$d) {
        if ($c =~ /[2378]$/) {
          return 0;
        }
        my $s=int(sqrt($c));
        unless ($s*$s==$c) {
          return 0;
        }
      }
      return 1;
    }
```

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/james-smith/perl/ch-1.pl)

On top of everything James creates a filter for the digit sum of the number and a cache for the difference with the reverse, avoiding even more unnecessary calls to `sqrt`.

```perl
  const my @RARE_ENDS => ( [2,[2]], [4,[0]], [6,[0,5]], [8,[2,3,7,8]] );
  const my @F=>(0,1,0,1,1,0,1,1,0); ## rare_numbers have a digit sum
                                    ## (value mod 9) of either 9/0,2,5 or 8

  sub is_rare {
    sub is_sq {
      state %cache;
      return $cache{$_[0]} if exists $cache{$_[0]};
      return $cache{$_[0]} = $_[0] =~ m{[014569]$} &&
                             $_[0] == (int sqrt $_[0])**2;
    }

    my $x = shift;
    return () if $F[$x%9]; ## Digit sum is wrong...
    my $y = reverse $x;
    return () if $x == $y || ! is_sq($x+$y); ## Musn't be the same back and forth
    return $y if $x<$y && is_sq($y-$x);
    return $x if $y<$x && is_sq($x-$y);
    ## Check both ways round!
    return ();
  }

  my %res;
  my $low  = $size <= 4 ? '' : '0' x ($size-4);
  my $high = $size <= 4 ? '' : '9' x ($size-4);
  foreach my $tup ( @RARE_ENDS ) {
    my $s = $tup->[0];             ## first digit has to be even 2,4,6,8
    foreach my $e (@{$tup->[1]}) { ## second digit has to be in list
                                   ## defined above
      if( $size == 2 ) {           ## As our method really starts at 4
                                   ## let us deal with 2 & 3 cases first
                                   ## as the optimized code is for
                                   ## numbers of length 4 or more
        $res{$_}=1 foreach is_rare("$s$e");
        next;
      }
      if( $size == 3 ) {
        $res{$_}=1 foreach map { is_rare("$s$_$e") } 0..9;
        next;
      }

      ## Now we need to do the next group....
      foreach my $b (0..9) {    ## These are filters to apply
        foreach my $f (0..9) {  ## for each group of numbers....
          next if $s==2 && $b!=$f
            || $s==4 && ($b-$f)%2
            || $s==6 && ! ($b-$f)%2
            || $s==8 && (
                  $e==2 && $b+$f!=9
               || $e==3 && $b-$f!=7 && $f-$b !=3
               || $e==7 && $b+$f!=1 && $b+$f !=11
               || $e==8 && $b!=$f
            );
          ## Now we try all additional numbers....
          ## The sequence '000' .. '999' gives all 3 digit numbers.... !
          $res{$_}=1 foreach map { is_rare("$s$b$_$f$e") } $low..$high;
        }
      }
    }
  }
```

## a REMARKABLY efficient FILTER
[**Bob Lied**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/bob-lied/perl/ch-1.pl) and
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/jaldhar-h-vyas/perl/ch-1.pl)

All in all, the `sqrt` operation was by far the costliest part of whatever algorithm was presented. So keeping this operation from being unnecessarily executed became the primary focus. Although the mathematical oddities driving the leading and trailing digits got most of the attention, buried deep in the source page was one fact about perfect squares that was easily validated:

* If R consist of even number of digits, then R+R1 must be divisible by 11, So 121 must be a factor of X2.
* If R consist of odd number of digits, then R-R1 must be divisible by 11. Since R-R1 is always divisible by 9, So 1089 must be a factor of Y2.

[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/jaldhar-h-vyas/perl/ch-1.pl)

Jaldhar implements just this one filter and reduces the calls to `isRare()`, containing the square root checks, by 91%, an unexpectedly impressive drop.

```perl
    my $xfactor = $N < 3 ? 11 : 121;
    my $yfactor =  $N < 4 ? 11 : 1089;

    for my $n ((10 ** ($N - 1)) .. ((10 ** $N) - 1)) {
        my $r = $n;
        my $r1 = 0 + reverse "$n";

        if ($r == $r1) {
            next;
        }

        if ($N % 2 == 0) {
            if (($r + $r1) % $xfactor == 0 && isRare($r, $r1)) {
                say $r;
            }
        } else {
            if (($r - $r1) % $yfactor == 0 && isRare($r, $r1)) {
                say $r;
            }
        }
    }
```

[**Bob Lied**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/bob-lied/perl/ch-1.pl)

Bob, similarly to Jaldhar, eschews individual digit checks for the most part, however in addition to the division trick does add three others. First, he carefully constructs ranges of numbers that only start with even numbers to iterate through. After this no further validation for this requirement  is necessary within the loop. Next, as the last digit cannot be 1,4,6 or 9 he constructs a truth table, so he can look up the last digit as the index of an array and receive a 0 or 1 response. I really like the clean eficiancy of this method. Third, he has a similar table for the perfect squares, as they cannot end in 2,3,7 or 8.

```perl
    # The last digit can never be 1,4,6,9
    my @mightBeRare   = ( 1, 0, 1, 1, 0, 1, 0, 1, 1, 0 );

    # A perfect square can never end in 2,3,7,8
    my @mightBeSquare = ( 1, 1, 0, 0, 1, 1, 1, 0, 0, 1 );

    my $isNodd = $N % 2;    # Optimization possible for even or odd digits.

    # For example, if N = 3, max is 1000, but we want 100 at a time.
    my $scale = 10**($N-1);

    # Rare numbers can never start with an odd digit, so work on
    # only groups that start with an even digit.
    # Creates pairs of start and end.
    my @boundary = map { [ $_ * 2 * $scale, $_ * 2 * $scale + $scale - 1 ] } 1..4;

    # Use faster integer math everywhere except where we need the square root.
    use integer;

    for my $bound ( @boundary )
    {
        my $endOfRange = $bound->[1];   # Hoist array access out of loop processing.
        R: for ( my $r = $bound->[0] ; $r <= $endOfRange ; $r++ )
        {
            # say "$r ", scalar(time()) if $r % 10000000 == 0; # Progress mark

            # The last digit can never be 1,4,6,9
            next unless $mightBeRare[ $r%10 ];

            my $r1;
            $r1 = reverse($r);   # String beats math

            my $y2 = $r - $r1;
            next if $y2 < 0;    # No imaginary numbers.
            next unless $mightBeSquare[ $y2 % 10];

            my $x2 = $r + $r1;
            next unless $mightBeSquare[ $x2 % 10];

            if ( $isNodd )
            {
                next if $y2 % 1089;
            }
            else
            {
                next if $x2 % 121;
            }

            { no integer;
                my $x = sqrt($x2);
                next R unless int($x) == $x;
                my $y = sqrt($y2);
                next R unless int($y) == $y;
            }

            say "R: $r";
        }
    }
```


## CONSTRUCTING numbers
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/athanasius/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/e-choroba/perl/ch-1.pl), and
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/jo-37/perl/ch-1.pl)

If instead of *filtering* numbers that do not fit the leading and trailing digit requirements, another option was to synthesize sets of these segments, then only iterate  over whatever center span is required to produce the correct number of digits. The three parts are then joined somehow to form a number that is then checked. This will radically reduce the actual number of candidates evaluated to the theoretical 2.3% left over after all the digit checks with almost no overhead. At this point we've gained nearly two whole orders of magnitude over the naive implementation.

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/e-choroba/perl/ch-1.pl)

Choroba gives us an example of this constructive method. After establishing a complex hash of valid first, last, second and second-to-last digit combinations, he cycles through them, adding in a central iterator for as many digits as required to supply the correct length after concatenation.

The data structure that holds his valid leading and trailing digits is quite interesting:

```perl
    my %start_end = (
        2 => {2 => [map [$_, $_], 0 .. 9]},
        4 => {0 => [map {
                        my $x = $_;
                        map [$x, $_], grep 0 == abs($x - $_) % 2, 0 .. 9
                    } 0 .. 9 ]},
        6 => {map {$_ => [map {
                              my $x = $_;
                              map [$x, $_], grep 1 == abs($x - $_) % 2, 0 .. 9
                          } 0 .. 9]} 0, 5},
        8 => {2 => [map [$_, 9 - $_], 0 .. 9],
              3 => [map [$_, $_ + ($_ < 7 ? 3 : -7)], 0 .. 9],
              7 => [map [$_, ($_ > 1 ? 11 : 1) - $_], 0 .. 9],
              8 => [map [$_, $_], 0 .. 9]}
    );
```


[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/athanasius/perl/ch-1.pl)

The monk has broken out the box completely with their approach, creating for us a series of 7 subroutines, each one to generate a subset of the desired range of candidates, constrained by the first and last values according to the properties laid out in the source material. Pairs or quads of number combinations are generated, with a range of unconstrained digits placed between them to produce every valid combination with the correct number of digits.

For example, one routine creates all of the valid number possibilites when the first digit
is 2 and the last digit is 2 and the second and second-to-last digits are equal: 21...12, 22...22, 23...32, etc, with all combinations of 0 through 9 placed between them to fill out the digit length. For a 7-digit number there are 10000 such central numbers.

The overall winnowing reduces the number of candidates actually checked to 2.3% of the original range: 8,999,999 7-digit numbers are reduced to 209,000.

Here is an example of one of the more complicated cases:

```perl
    sub A8_Q3
    {
        # "Consider a Rare number ABCD...MNPQ with any number of digits, then ...
        #  If A = 8 and Q = 3 then B - P =  7 for B > P
        #                      and B - P = -3 for B < P
        #                      and B can never be equal to P"

        my ($N) = @_;

        for my $b (0 .. 9)
        {
            for my $p (0 .. 9)
            {
                next if $b == $p;

                if ($b > $p)
                {
                    next unless $b - $p ==  7;
                }
                else
                {
                    next unless $b - $p == -3;
                }

                for my $m (0 .. 10 ** ($N - 4) - 1)
                {
                    my $n = sprintf '8%d%0*d%d3', $b, $N - 4, $m, $p;

                    record_rare_number( $n ) if is_rare( $n );
                }
            }
        }
    }
```


## the properties of PERFECT SQUARES
[**Gustavo Chaves**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/gustavo-chaves/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/jo-37/perl/ch-1.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/wlmb/perl/ch-1.pl)

Maybe we're going about this the wrong way way. What we examined the problem starting from the end, rather than the beginning? The last step we take is determining that the number, *num*, added to its reverse, *rev*, yield some perfect square *x*<sup>2</sup>. Likewise the difference also yields some number *y* squared. So we have the two equations:

*num* + *rev* = *x*<sup>2</sup>

*num* - *rev* = *y*<sup>2</sup>

these equations can then be combined:

—> (*num* + *rev*) + (*num* - *rev*)  = *x*<sup>2</sup> + *y*<sup>2</sup>
—> *num* = (*x*<sup>2</sup> + *y*<sup>2</sup>) / 2

—> (*num* + *rev*) - (*num* - *rev*)  = *x*<sup>2</sup> - *y*<sup>2</sup>
—> *rev* = (*x*<sup>2</sup> - *y*<sup>2</sup>) / 2

So both *x*<sup>2</sup> + *y*<sup>2</sup> and *x*<sup>2</sup> - *y*<sup>2</sup> must be even.  Further, if *rev* is even, then the last number must end in 0,2,4,6 or 8, which means *num* must start with 2,4,6,or 8, which is the explanation to why that rule exists. Now we're getting somewhere.

If we start with a list of known squares, we could try methodically combining them to find numbers that fit the criteria. This will still end up checking roughly the same number of candidates but avoid the expensive `sqrt` operation completely.

[**Gustavo Chaves**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/gustavo-chaves/perl/ch-1.pl)

Gustavo took this approach, but notes himself that it's not very efficient.

```perl
    my @squares = (0);
    while ($squares[-1] < 2*(10**$digits)) {
        push @squares, @squares * @squares;
    }

    for (my $r = $#squares; $r > 1; --$r) {
        my $xx = $squares[$r];
        for (my $l = $r-1; $l >= 1; --$l) {
            my $yy = $squares[$l];

            my $dr = $xx + $yy;
            next unless ($dr % 2) == 0;

            my $dl = $xx - $yy;
            next unless ($dl % 2) == 0;

            my $R = $dr / 2;
            next unless length("$R") == $digits;

            my $L = sprintf "%0${digits}d", $dl / 2;
            say $R if "$R" eq reverse("$L");
        }
    }
```

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/wlmb/perl/ch-1.pl)

Luis gave us an evolution of several ideas that ultimately came to this design. In his last version, he improves the idea significantly using half-numbers in the search space and modulo math. You can read his explanation on how he got to this point on his [well documented blog writeup](https://wlmb.github.io/2021/03/01/PWC102/).

```perl
    foreach my $N( @ARGV )  {
        my $min = 10**( $N - 1 );
        my $N2  = floor( $N / 2 );
        my $M   = 10**$N2;
        my %seen;                           # distinct squares mod $M

        foreach my $a( 0..10**$N2 ){
            $seen{ ( $a**2 ) % $M } = 1;
        }

        my @squares = sort { $a<=>$b } keys %seen;
        foreach my $a2( @squares ){
            foreach my $b2( @squares ){
                my $xr = ( $a2 + $b2 );
                next unless $xr % 2 == 0;
                $xr = sprintf( "%0${ N2 }d", ( $xr / 2 ) % $M );

                my $xl1 = sprintf( "%0${ N2 }d", ( ( $a2 - $b2 )/2 ) % $M );

                foreach my $mid( $N%2 == 0?( '' ):( 0..9 ) ){
                    my $x = join '', reverse( split '', $xl1 ), $mid, $xr;
                    next unless $x >= $min;
                    my $y = join '', reverse( split '', $x );
                    next unless $x > $y;
                    my $s = $x + $y;
                    my $d = $x - $y;
                    next unless floor( sqrt( $s ) )**2 == $s;
                    next unless floor( sqrt( $d ) )**2 == $d;
                    say "N = $N\tx = $x\ty = $y\tx+y = $s = ",
                        sqrt( $s ), "**2\tx-y = $d = ", sqrt( $d ), "**2";
                }
            }
        }
    }

```

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/jo-37/perl/ch-1.pl)

Jorg has as usual gone the extra mile on this one. He offers extensive extensive commentary on some of the more exotic steps he's taken, pruning the search further. And this doesn't even address the multiprocessor extensions he's added. In the end I was able to calculate the 11 digit solutions (none, btw) in about three and a half minutes.

We'll have a look at the multicore processing later. This part is well noted; it's a bit much to summarize and do justice.

```perl
    sub rare_nums_in {
        my ($low, $high, $lead) = @_;
        $lead //= 0;
        my @rare;

        # Find the smallest x, such that there is an y <= x - 2
        # with (x² + y²)/2 >= low.
        my $x = ceil(1 + sqrt($low - 1));

        my $x2 = $x**2;

        # Single limit for x².
        while ($x2 < 2 * $high) {
            # Skip nonmatching end digits.
            next unless ($x2 % 10) =~ $::l2e{$lead};

            # smallest y between current x and lower limit
            my $y = $x2 < 2*$low ? ceil(sqrt(2*$low - $x2)) : 0;

            # No more floating point operations from here.  Release the
            # handbreak.
            use integer;

            # Adjust mod 2.
            $y++ if ($x + $y) % 2;

            # smallest y ≡ x mod 2.
            my $ymin = $x % 2 ? 1 : 2;

            # Adjust if too small.
            $y = $ymin if $y < $ymin;

            my $y2 = $y**2;

            # Two limits for y²: it must be smaller than x² and the half
            # square sum must be below the upper limit.
            my $y2max = min $x2, 2 * $high - $x2;
            while ($y2 < $y2max) {
                # Check if n and r are the reverse of each other.
                # Multiple usage of the same expression is cheaper than
                # using an extra variable.
                push @rare, ($x2 + $y2)/2
                    if reverse(($x2 + $y2)/2) == ($x2 - $y2)/2;
            } continue {
                 $y2 = ($y += 2)**2;
            }
        } continue {
            $x2 = (++$x)**2;
        }

        \@rare;
    }
```





## M-M-M-MULTICORE!
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/adam-russell/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/jo-37/perl/ch-1.pl), and
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/perlboy1967/perl/ch-1.pl)

On my machine here in the lab I have 8 cores available to me, but rarely use all of them at once, and never, in my knowledge, for a single Perl interpreter. That is, until now. Three submissions went wide to spread the workload, on top of whatever other loop tweaking they had been up to.

Perl, as it's compiled by default, is single-threaded. It fires up an interpreter, and that instance in turn single-mindedly does its thing. And this is all well and good. Most processes involve a data pipeline that, however complicated the path may be, can be unrolled into a straight line from here to there. Although multithreaded perl options exist, they are generally discouraged as less efficient models, as they need to spend time  making sure things are always in sync, even when there's nothing to sync up. This ends up adding 10-15% overhead for no gain.

For any process with an evolving state, where previous actions inform the current decisions, and the current decisions will inform those made next, dividing the action up into different discreet elements that can be performed simultaneously is difficult if not impossible. Dissecting problems like this for parallelism is a whole branch of computer science unto itself.

Some problems, on the other hand, lend themselves well to the idea, and this is one of those situations. Rare numbers exist independently of each other, and the fact that this number is rare has no bearing whatsoever as to whether its neighbor is. So rather than ask one process to validate 10 billion candidates, we can ask 10 processes to handle 1 billion each, and in theory we'll be done in 1/10th the time.

We have here three examples of how to use multiple processors in Perl: threads, `MCE` and `Parallel::Subs`.

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/adam-russell/perl/ch-1.pl)

Adam brings us [`Thread`](https://metacpan.org/pod/Thread), which provides multithreading support in Perl. It requires a Perl interpreter compiled with multithreading enabled.

Adam doesn't prune his search tree, instead dividing his workload into `THREAD_COUNT` number of segments and operating on all of them simultaneously. To do this he first needs to define individual instances of the verification routine, set to operate on the partial data sets, and assign each to a different thread. When each sub-task completes it adds its results to a common list of rare numbers found.

```perl
    my $lower = "1" . 0 x ($n - 1);
    my $upper = "1" . 9 x ($n - 1);
    my $increment = $lower;
    {
        my @threads;
        for(1 .. THREAD_COUNT){
            my $t = Thread->new(\&rare_number_check, $lower, $upper);
            push @threads, $t;
            $lower = $upper + 1;
            $upper = $lower + $increment - 1;
            last if(length($upper) == ($n + 1));
        }
        foreach my $t (@threads){
            my $rares = $t->join();
            push @rares, @{$rares};
        }
        redo unless(length($upper) == ($n + 1));
    }
    return \@rares;
```

[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/perlboy1967/perl/ch-1.pl)

Niels, alternately, brings in the [`MCE`](https://metacpan.org/pod/distribution/MCE/lib/MCE.pod), which stand for "Multi-Core Engine". It does not require anything more than a standard Perl install. The `MCE` allows the spawning of worker processes that can take over subsets of the data, distributed over available cores. The `MCE` can control a pool of such workers, allocating chunks of the data set when required until the processing is complete.

```perl
    my $mce = MCE->new(
         chunk_size => 10_000,
         max_workers => MCE::Util::get_ncpu(),
         user_func => sub {
           my ($mce, $chunk_ref, $chunk_id) = @_;

           foreach (@$chunk_ref) {
             if (isRare($_)) {
               my $elapsed = tv_interval ($t0);
               printf "%6.3f rare: %d\n", $elapsed, $_;
             }
           }
         }
    );

    do {
      $r0++;

      # Small optimization
      # (skip all numbers which start with an odd number)
      my $d = substr($r0,0,1);
      if (exists $rep{$d}) {
        substr($r0,0,1,$rep{$d});
      }

      # Create dynamic chunks with a maximum of 1M
      # (to keep memory utilisation in control)
      my $step = min(1_000_000, 10**ceil(log($r0)/log(10)) - 1 - $r0);
      $mce->process([ $r0 .. $r0+$step ]);
      $r0 += $step;

    } until ($r0 > 10**$N);
```

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/jo-37/perl/ch-1.pl)

Jorg gives us yet a third way to utilize multiple cores in a Perl program: [`Parallel::Subs`](https://metacpan.org/pod/Parallel::Subs). This module uses `Parallel::ForkManager` to fork off interpreter instances to run specific subroutine calls.

Here's how the parallel instances are spawned by the module:

```perl
    sub rare_nums_len ($len) {
        my $p = Parallel::Subs->new;
        for my $lim (split_task($len)) {
            $p->add(sub{rare_nums_in($lim->[0], $lim->[1])});
        }
        $p->wait_for_all;

        grep {reverse() != $_} map $_->@*, $p->results->@*;
    }
```

The `split_task()` routine creates a list of pairs of low and high values to feed to the parallel processing. It's pretty interesting stuff too:

```perl
    sub split_task ($len) {

        my $numcpu = Sys::Info->new->device('CPU')->count;
        my $size = 10 ** ($len-1) / $numcpu;

        gather {
            for my $lead (2, 4, 6, 8) {
                my $start = $lead * 10 ** ($len-1);
                for my $s (1 .. $numcpu) {
                    take [int(($start + int(($s - 1) * $size)) / 100) * 100,
                        int(($start + int($s * $size)) / 100) * 100];
                }
            }
        };
    }
```

The algorithm itself that Jorg uses in a variation of the sum of perfect squares constructive approach.

As usual, there's more to unpack here, like the `gather`/`take` keyword syntax, and a [whole other implementation](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/jo-37/perl/ch-1a.pl) using the more common first and last digit optimizations, which apparently runs a little faster at the expense of fun.




## opting NOT TO PLAY
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/abigail/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/polettix/perl/ch-1.pl), and
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/stuart-little/perl/ch-1.pl)

There were several convincing arguments made to not reinvent the wheel at all.

Oh, and Stuart, who brought his own completely different take on the situation.

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/abigail/perl/ch-1.pl)

I have stated before that in my own pursuits on these pages, I do do not always strive to find the best, or fastest, or most efficient, or most sensible solution to a given problem when I go about solving it. As far as overarching code philosophies go, I have them; I just don't practice that behavior here. As a matter of fact, "wildly inconsistent" might well be the only guidlines I consistently obey. Here, I just enjoy the freedom do do whatever i'm thinking about at the moment, and see how it works out.

So conversely I find it refreshing and appealing when others come forth and present cold, hard practical realities while I'm off in whatever la-la-land I've created today. Yes it's contradictory, but, hey, "wildly inconsistent", right?

So, based on some previous submissions, it does not surprise me that Abigail has stepped up and carefully presented the case: "This is stupid."

Which, objectively, it is. Perl, an interpreted language, is just a remarkably poor choice to pursue the raw brutal number crunching required to find the quite sparsely located and certainly aptly named "rare numbers".

Not to belabor the point, but FORTRAN is fast. Wicked fast. Perl, crafted and honed over the years is no slouch, mind you, and still objectively reigns supreme amongst its peers, but it's not in the same room as FORTRAN.

The lack of purpose never stopped us before. In what remains of these cold winter months my lap certainly appreciates the waste heat from the processors, so there are at least some benefits, however fleeting, to all this repetitive, systematic examination. But that's just me.

There exists a list at the Online Encyclopedia of Integer Sequences of the first 124 rare numbers, covering up to 22 digits in length. Abigail has decided to use his submission to, rather than recompute the values, create a lookup table and return the relevant entries. Oh, and not only in Perl but also eight other languages.

I think the most interesting portion of the wealth of programs he's uploaded to GitHub for this task to be the [Perl-based preprocessor](https://github.com/Abigail/perlweeklychallenge-club/blob/master/challenge-102/abigail/data/preprocess) that takes the list of known rare numbers he's scraped off the OEIS site and trasforms it into code formatted to the requirements of the various lookups he aims to construct.

I always enjoy code that writes code and this is an excellent usage of Perl, far better suited to its many capabilities than simple rote number-crunching.

```perl
open my $fh, "<", "rare_numbers.txt" or die "open rare_numbers.txt: $!";

my @buckets;

while (my $rn = <$fh>) {
    chomp $rn;
    $rn =~ s/^[0-9]+\s+//;
    push @{$buckets [length $rn]} => $rn;
}

my @bs = sort {$a <=> $b} grep {$buckets [$_]} keys @buckets;


open my $awk_h,    ">", "rn.awk"   or die "open rn.awk: $!";
open my $bash_h,   ">", "rn.sh"    or die "open rn.sh: $!";
open my $basic_h,  ">", "rn.bas"   or die "open rn.bas: $!";
open my $c_h,      ">", "rn.c"     or die "open rn.c: $!";
open my $lua_h,    ">", "rn.lua"   or die "open rn.lua: $!";
open my $node_h,   ">", "rn.js"    or die "open rn.js: $!";
open my $perl_h,   ">", "rn.pl"    or die "open rn.pl: $!";
open my $python_h, ">", "rn.py"    or die "open rn.py: $!";
open my $ruby_h,   ">", "rn.rb"    or die "open rn.rb: $!";

my  $basic_ln = 1000;

say $awk_h      "BEGIN {";
say $bash_h     "declare -a rare_numbers\n";
say $basic_h    "$basic_ln INPUT length\n\n";
say $c_h        "char * rare_numbers [23];\n";
say $c_h        "int main () {";
say $lua_h      "rare_numbers = {}\n";
say $node_h     "let rare_numbers = []\n";
say $perl_h     "my \@rare_numbers;\n";
say $python_h   "rare_numbers = {}\n";
say $ruby_h     "rare_numbers = Array . new";

foreach my $bs (0 .. 22) {
    if (!$buckets [$bs]) {
        printf $c_h "    rare_numbers [%2d] =                       NULL;\n"
                    => $bs;
        next;
    }

    #
    # AWK
    #
    printf $awk_h  '    rare_numbers [%2d] = ', $bs;
    print  $awk_h  join " \\\n                        " =>
                   map {sprintf "%26s", qq {"$_\\n"}} @{$buckets [$bs]};
    print  $awk_h "\n";

    #
    # Bash
    #
    printf $bash_h 'rare_numbers[%2d]=', $bs;
    print  $bash_h join "\\\n" =>
                   map {qq {"$_\\n"}} @{$buckets [$bs]};
    print  $bash_h "\n";

    #
    # BASIC
    #
    for my $rn (@{$buckets [$bs]}) {
        printf $basic_h qq {%03d IF length = %2d THEN PRINT %24s\n}
                     =>    ($basic_ln += 10), $bs, qq {"$rn"}
    }

    #
    # C
    #
    printf $c_h    '    rare_numbers [%2d] = ', $bs;
    print  $c_h    join " \\\n                        " =>
                   map {sprintf "%26s", qq {"$_\\n"}} @{$buckets [$bs]};
    print  $c_h    ";\n";

    ...

```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/polettix/perl/ch-1.pl)

>"How concerned should we be for the carbon footprint required by our search?"

I once worked in a shop that had an SGI Onyx2 down in the basement, on loan to do some VR work. The black beast was the size of a refrigerator and took 3-phase power just to fire it up. As it was right below the shop floor we would sometime turn it on in the winter as a space heater, albeit a noisy one.

So, Flavio has come up with his own rationale for an alternative methodology. Seem reasonable to me. Similar to Abigail, he choses to scrape the OEIS page, only he has chosen to leave the data mostly in place, using `Mojo::UserAgent` to fetch the list when required. He then selects whichever results are requested, only keeping the first five values cached locally.

This approach has the advantage that should the 125th value ever be found, the users of this fine application would have immediate access to the value.

```perl
    sub get_rn_web {
       my $ua = Mojo::UserAgent->new(connect_timeout => 5, max_redirects => 5);
       my $res = $ua->get('http://oeis.org/A035519/b035519.txt')->res;
       die "web is not collaborating, sorry!\n" unless $res->is_success;
       return [
          map { my ($i, $n) = split m{\s+}; $n } split m{\n}mxs, $res->body
       ];
    }
```

Oh, and Flavio, that would be "he", by the way. Thanks for asking. Feel free to email me at any time. Carry on and have a nice day.

[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/stuart-little/perl/ch-1.pl)

Stuart takes a truly tangental, hybrid approach to getting his results. Starting with a lookup table of pre-calculated, non-palindromic rare numbers — presumably scraped from the OEIS, but that doesn't matter here — he than takes these values and adds palindromic rare numbers.

Ok, sure, why not?

Searching the set of palindrome candidates is considerably easier, as rather than being directly computed they are constructed from an iterated list of numbers half the length, reversed and coupled. Meaning the ranges we're dealing with are not 9 x 10<sup>N</sup>, but rather the square root of that, so generally everything moves along quite a bit quicker. Furthermore the rarity test is only applied once, for the additive case, as the subtractive case is always 0.

Here's his constructor for the palindromes. I like the way it neatly handles both odd and even numbers of digits.

```perl
    sub rarePals($d) {
        my $halfDigs = ceil($d/2);
        my $rest = $d - $halfDigs;
        my @res = grep { isSq(2*$_) }
            map { $_ . (scalar reverse substr($_,0,$rest)) }
                (10**($halfDigs-1)..10**$halfDigs-1);
        return \@res;
    }
```



---

# TASK 2 {#PWC102TASK2}

# Hash-counting String
*Submitted by: Stuart Little*

You are given a positive integer $N.

Write a script to produce Hash-counting string of that length.

The definition of a hash-counting string is as follows:

- the string consists only of digits 0-9 and hashes, ‘#’
- there are no two consecutive hashes: ‘##’ does not appear in your
  string
- the last character is a hash
- the number immediately preceding each hash (if it exists) is the
  position of that hash in the string, with the position being counted
  up from 1

It can be shown that for every positive integer N there is exactly one such length-N string.

**Examples:**
```
    (a) "#" is the counting string of length 1
    (b) "2#" is the counting string of length 2
    (c) "#3#" is the string of length 3
    (d) "#3#5#7#10#" is the string of length 10
    (e) "2#4#6#8#11#14#" is the string of length 14
```

## about the solutions

There were 26 submissions for the second task this past week. Whereas in Task 1 the open-ended quality to the optimizations produced a wide range of methodologies, here the situation is reversed: once one figured out the "trick", a very straightforward solution presented itself, leading in turn to a surfeit of self-similarity. There was still some variation to be found, of course, so we'll still have something to talk about, but almost every solution followed the same overarching pattern.

## drive there in REVERSE
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/abigail/perl/ch-2.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/adam-russell/perl/ch-2.pl),
[**Alexander Karelas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/alexander-karelas/perl/ch-2.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/arne-sommer/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/athanasius/perl/ch-2.pl),
[**Bob Lied**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/bob-lied/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/cheok-yin-fung/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/colin-crain/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/dave-jacoby/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/polettix/perl/ch-2.pl),
[**Gustavo Chaves**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/gustavo-chaves/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/jaldhar-h-vyas/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/james-smith/perl/ch-2.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/lubos-kolouch/perl/ch-2.pl),
[**Maxim Kolodyazhny**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/maxim-kolodyazhny/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/perlboy1967/perl/ch-2.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/paulo-custodio/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/sgreen/perl/ch-2.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/stuart-little/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/ulrich-rieke/perl/ch-2.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/wlmb/perl/ch-2.pl),
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/wanderdoc/perl/ch-2.pl), and
[**Yet Ebreo**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/yet-ebreo/perl/ch-2.pl)

The aforementioned trick starts with the third rule, that the very last character is a hash. This fixes one known character in the string, and so makes a good starting point. From rule 2 we then know the character before that cannot be a hash, so we must instead have a number. As we know the overall string length, then it immediately follows that that number is the length of the string. So far so good: we have successfully constructed a number-hashmark couplet at the end of our string. The big leap is then to realize that the substring before what we've just filled in is just another slightly shorter hash-string, and we can repeat the process unaltered.

Either by looping or recursion we will soon find ourselves at the beginning of the string, writing in segments from the back forward. The only remaining challenge is to know when to stop. Generally the entire function can be wrapped up in a few lines.

### RECURSION
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/adam-russell/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/athanasius/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/cheok-yin-fung/perl/ch-2.pl),
[**Maxim Kolodyazhny**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/maxim-kolodyazhny/perl/ch-2.pl), and
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/stuart-little/perl/ch-2.pl)

The way I've described the process above nearly screams recursion, as once we've finished our first segment we are confronted with the exact same processing to derive the next. The only thing remaining is finding a base case.

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/athanasius/perl/ch-2.pl)

The monk will start us off with a clear, concise example of the method. They establish two base cases for a single leading hash and a clean finish. At each instantiation a hash character is combined with a numeric representation of the current length of the string and returned, prefixed by the return value of the calling the routine to create a new, shorter hash-string with the remaining length.

Because for large values of N, that is over 100, Perl will begine to complain about a possible runaway deep recursion, those particular warnings are expressly disabled for this situation.

```perl
    sub make_hash_counting_string
    {
        no warnings qw( recursion );

        my ($N) = @_;

        return ''  if $N == 0;
        return '#' if $N == 1;

        my $tail    = $N . '#';
        my $new_len = $N - length $tail;
        my $head    = make_hash_counting_string( $new_len );

        return $head . $tail;
    }
```

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/cheok-yin-fung/perl/ch-2.pl)

CY give us an example of the same technique condensed a bit into a tighter package.

```perl
    sub hcs {
        my $N = $_[0];
        return "#"  if $N == 1;
        return "2#" if $N == 2;
        my $p = length $N;
        return (hcs($N-$p-1) . "$N" . "#");
    }
```

[**Adam Russell's**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/adam-russell/perl/ch-2.pl) and **Stuart Little's** submissions end up using different names (of course!) for nearly the same constructions.

[**Maxim Kolodyazhny**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/maxim-kolodyazhny/perl/ch-2.pl)

Maxim delivers us a recursive solution that operates what amounts to the same algorithm in a completely different manner. First of all he passes everything he needs with every instance: an evolving version of the hash-string, a running position count and the finished string length.

The elephant in the room, however, is the recursion itself: the `__SUB__` token, since 5.20, will return a coderef for the currently executing subroutine, whether or not is has a name. Calling `goto __SUB__` essentially exits and restarts the *same* subroutine rather than spawning a child, so issues of deep recursion are neatly sidestepped, as there is only ever, at any one moment, one subroutine instance in existence. Of course to change the data the stack needs to be rewritten before restarting, so `@_` is assigned to with the new values before the call, and Perl re-executes the routine with the new data.

As the position is always attached to new segment, a string with a hash in the first position will have an extra 1 prepended to it, throwing off the count everywhere. The `substr` truncates the final string to the requested length from the end, neatly removing the leading 1 and setting everything right again. The following final pass through the routine will return the string in its correct length.

All of the recursion, nearly none of the overhead. I like it. A lot.

```perl
    sub h( $c, $s = '', $n = $c ) {

        return $s if $c < 1;

        $s = substr "$c#$s", -$n;
        @_ = ( $n - length( $s ), $s, $n );

        goto __SUB__
    }
```

### ITERATION
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/arne-sommer/perl/ch-2.pl),
[**Bob Lied**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/bob-lied/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/colin-crain/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/dave-jacoby/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/duncan-c-white/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/polettix/perl/ch-2.pl),
[**Gustavo Chaves**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/gustavo-chaves/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/james-smith/perl/ch-2.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/lubos-kolouch/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/perlboy1967/perl/ch-2.pl), and
[**Yet Ebreo**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/yet-ebreo/perl/ch-2.pl)

Of course recursion isn't necessary by any means, and the same processes can be gracefully implemented with a loop.

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/colin-crain/perl/ch-2.pl)

I'll start the demonstration with my own version. At each iteration the position counter is set to the length of remaining hash-string to be computed. A hash character is prepended to the `$str` string, and if the position is 1, that was the final character and we are done. Otherwise we add the position number in front and loop.

When the remaining string length falls below 10, the positional labels on the added hash marks will invariably become single digits. Thus the position counter will decrement by 2 until the counter reaches either 1 or 0, and we will either add an additional hash and return or the loop condition will fail and we will return the complete hash-string as-is.

```perl
    sub get_hash_string ( $num ) {
        my $str = '';

        while ( my $pos = $num - length $str )  {
            $str = '#' . $str;
            return $str if $pos == 1;
            $str = $pos . $str;
        }

        return $str;
    }
```

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/dave-jacoby/perl/ch-2.pl)

Dave moves to logic around a little bit, on every pass prepending first a single hash and then a positional counter unless it's the last character. The counter is reset to the remaining length, and when it reaches 0 we are done.

```perl
    sub hash_count( $i ) {
        my $output = '';
        my $j      = $i;
        while ( $j > 0 ) {
            $output = '#' . $output;
            $output = $j . $output if length $output < $i;
            $j = $i - length $output;
        }
        return $output;
    }
```

[**Yet Ebreo**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/yet-ebreo/perl/ch-2.pl)

```perl
    while ($N) {
        $out = ($N>1?"$N":"")."#$out";
        $N   = $ARGV[0] - length $out;
    }
```

Yet's compact contribution to the task is not terribly cryptic this time, albeit it still quite dense. If we unpack it:

```perl
    while ( $N ) {
            $out = ( $N > 1 ? "$N"
                            : ""   ) . "#$out";
            $N     = $ARGV[0] - length $out;
    }
```

we can see a ternary decision to either add a number of not in front of every hash placed, terminating when `$N` reaches 0.

[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/arne-sommer/perl/ch-2.pl)

Arne breaks out his loop when the position is greater than 1, and then uses a ternary operator to decide whether or not to add a final leading hash before output.

```perl
    while ($position > 1)
    {
      my $prefix = $position . '#';

      $string = $prefix . $string;
      $position -= length($prefix);
    }

    length($string) == $N
        ? say $string
        : say "#$string";
```

[**Gustavo Chaves**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/gustavo-chaves/perl/ch-2.pl)

And Gustavo takes that form and tightens is up even further.

```perl
    my $string = '#';

    while ($N > 1) {
        $string = "$N$string";
        $N -= 1 + length "$N";
        $string = "#$string" if $N > 0;
    }
```


[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/james-smith/perl/ch-2.pl)

James reconfigures things into a list-processing problem, iterating over the tranformation until the character count remaining is either 0 or 1. Instead of a ternary switch, a little trick involving the string repetition operator prepends either 0 or 1 '#' characters before returning.

```perl
    sub hash_count_string {
      my ( $s, $n ) = ( '',      @_            );
         ( $s, $n ) = ( "$n#$s", $n-1-length$n ) while $n > 1;
      return '#'x$n.$s;
    }
```

[**Flavio Poletti's**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/polettix/perl/ch-2.pl) submission was very similarly structured.

[**Bob Lied**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/bob-lied/perl/ch-2.pl)

Bob's technique works a little differently, continually looping and conditionally altering the action at each pass, building us a curious little state machine to oscillate back and forth between adding hash marks and position numbers.

This use of a flag to keep track of which element to add next will pop up again later, being somewhat popular with the list-assembly crowd, which we'll look at next.

```perl
    use constant HASH  => 1;
    use constant PLACE => 2;

    # Build backwards, last character will be #
    my $str = "#";
    my $prev = HASH;

    while ( $place > 1 )
    {
        if ( $prev == HASH ) { $str = "$place$str"; $place -= length($place); $prev = PLACE; }
        else                 { $str = "#$str"     ; $place--                ; $prev = HASH; }

        say "N=[$N] place=[$place] str=[$str]" if $verbose;
    }
```

### using an INTERMEDIATE ARRAY
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/abigail/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/jaldhar-h-vyas/perl/ch-2.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/paulo-custodio/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/ulrich-rieke/perl/ch-2.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/wlmb/perl/ch-2.pl)

A few members chose to gather their individual components into an array, which is then joined into the finished string. The components are either placed onto the array from one end or the other; as there is no additional expense to the `unshift` operation in Perl, the choice came down to personal preference.

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/wlmb/perl/ch-2.pl)

There need be little difference in the end between concatenating onto a string and adding elements to a list which is later concatenated together. Luis gives us a familiar technique done with a twist, gathering the individual components he creates before assembling them at the end.

```perl
    foreach my $length( @ARGV ) {
        my $remaining = $length;
        my @pieces;
        while( $remaining > 0 ) {
            unshift @pieces, $remaining == 1 ? "#" : "$remaining#";
            $remaining-=length $pieces[0];
        }
        say "Length: $length\tString: ", join '', @pieces;
    }
```

[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/jaldhar-h-vyas/perl/ch-2.pl)

Earlier we said we would see this idea again, of alternating actions in a loop using a flag. Although there are twice as many passes through the loop, there is a certain appeal to the clarity of performing exactly one action in each iteration.

```perl
    while ($pos > 0) {
        if ($wasHash) {
            unshift @hashCounting, "$wasHash";
            $pos -= length "$wasHash";
            $wasHash = 0;
        } else {
            unshift @hashCounting, '#';
            $wasHash = $pos;
            $pos--;
        }
    }

```

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/abigail/perl/ch-2.pl)

Abigail tightens up this idea a bit, introducing a few idiosyncratic variations. Remember a "fat comma" is just another form of the comma, so there's nothing fundamentally different about those `push` statements. The toggle is clever, assigning it to its binary negation serves to switch the value at every reading, and as the assigned value is returned by an assignment the condition alternately passes and fails.

I'll say that form of `push` is starting to grow on me.

```perl
    my $hash = 0;
    while ($index) {
        if ($hash = !$hash) {
            push @out => "#";
            $index --;
        }
        else {
            push @out =>      $index + 1;
            $index -= length ($index + 1);
        }
    }
```



### substring INSERTION
[**Alexander Karelas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/alexander-karelas/perl/ch-2.pl) ,
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/e-choroba/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/sgreen/perl/ch-2.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/wanderdoc/perl/ch-2.pl)


A curious method arose in two distinct forms, involving starting from a dummy string of the correct length and then inserting numbers, and sometimes hashes, into it using `substr`.

[**Alexander Karelas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/alexander-karelas/perl/ch-2.pl)

In the first form of this technique, Karelas starts with a dummy string of the proper length composed of dashes. He then uses a positional counter and a pair of `substr` functions to overwrite the hash-string as it is computed.  In many ways this follows the iterative loop patterns we have seen before.

```perl
    my $ret = '-' x $n;
    my $pos = $n - 1;
    while ($pos >= 0) {
        substr($ret, $pos, 1, '#');
        my $number = $pos + 1;
        $pos -= length($number);
        if ($pos >= 0) {
            substr($ret, $pos, length($number), $number);
        }
        $pos--;
    }
```

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/sgreen/perl/ch-2.pl)

In Simon's variation, however, he starts with a string of hashes. Careful adjustment of the position tracker allows overwriting with only the numeric components of hash-string.

```perl
    my $string   = '#' x $length;
    my $position = $length - 1;     # The last character

    while ( $position - length( $position + 1 ) >= 0 ) {
        my $char = length( $position + 1 );
        substr( $string, $position - $char, $char, $position + 1 );
        $position -= ( $char + 1 );
    }
```


[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/e-choroba/perl/ch-2.pl)

The in the other form of the method, no running positional counter is employed. Rather, `rindex` is used to locate the next number placement.

Choroba constructs his dummy string from hashes, then searches the string from the right for incidences of two adjacent marks, an expressly disallowed state in the final form. On finding a match the relevant position number is directly inserted into the string, overwriting the existing hashes up to but not including the second of the two hashes found.

```perl
    sub hash_counting_string {
        my ($length) = @_;
        my $s = '#' x $length;
        while (-1 != (my $pos = rindex $s, '##')) {
            my $n = $pos + 2;
            substr $s, $pos + 1 - length $n, length $n, $n;
        }
        return $s
    }
```

[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/wanderdoc/perl/ch-2.pl)

Finally, in the doctor's version of this second form, they use the second form of `rindex`, where an offset is provided. This version of the function will find the first instance of the given substring searching leftward from the offset. By feeding the previously found position to `rindex`, they can continuously find, after overwriting the previous hashes with a number, the next remaining instance of a hash for numbering.

```perl
    my $string = '#' x $length;

    return $string  if $length == 1;
    return '2#'     if $length == 2;

    my $offset = $length - 1;

    while ( $offset > 1 )
    {
         my $hash_sign_idx = rindex($string, '#', $offset);
         my $idx_1_based = $hash_sign_idx + 1;
         my $idx_width = length($idx_1_based);
         my $begin = $hash_sign_idx - $idx_width;

         substr($string, $begin, $idx_width, $idx_1_based);
         $offset = $begin;
    }
```



## look FORWARD into the future
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/roger-bell-west/perl/ch-2.pl)

Bucking the trend, one holdout did solve the problem from the front forward. After such a consistent field of backwards solutions, I'm sure more than one of you is curious as to even how one would proceed from the beginning of the string, as it it quickly becomes clear how dependent earlier positions and labels are to events that happen further down the line. I certainly was.

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/roger-bell-west/perl/ch-2.pl)

```perl
    sub hcs {
      my $n=shift;
      my @s;
      my @t;
      while (1) {
        @s=();
        my $l=0;
        if (@t) {
          @s=@{pop @t};
          $l=sum(map {($_==1?0:length($_))+1} @s);
        }
        if ($l==$n) {
          last;
        }
        if ($l > $n) {
          next;
        }
        my $c=$l;
        while (1) {
          my $tt=($c==1?0:length($c))+$l+1;
          if ($c==$tt) {
            push @t,[@s,$c];
          }
          if ($c > $tt) {
            last;
          }
          $c++;
        }
      }
      return join('',map {($_==1?'':$_).'#'} @s);
    }
```


## noteworthy GOINGS-ON ABOUT TOWN
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-102/jo-37/perl/ch-2.pl)

Jorg brings us a gift from Raku, in the form of [`Syntax::Keyword::Gather`](https://metacpan.org/pod/Syntax::Keyword::Gather), a module that brings the `gather/take` control structure over to Perl 5.

From the module documentation:
>Within the block/closure controlled by a `gather` any call to `take` pushes that call's argument list to an implicitly created array. `take` returns the number of elements it took.  ... At the end of the block's execution, the `gather` returns the list of values stored in the array (in a list context) or a reference to the array (in a scalar context).

Sound useful? You betcha.

Implementing a looping iterative solution, we can `gather` the created elements into a list, reverse the list and join it to create a the hash-string. Neat!

```perl
    sub hashcountingstring ($n) {
        join('#', reverse gather {
                take '';
                for (; $n > 0; $n -= length($n) + 1) {
                    take $n x ($n > 1);
                }
            });
    }
```

I think I'm gonna like this one. Keep 'em coming, Jorg, Keep 'em coming.

## PROOF? You want PROOF?

In the task description it states:

>It can be shown that for every positive integer N there is exactly one such length-N string.

Several people made comment on this last line. Flavio suggested that

>it would have been a plus to have a link to the demonstration that such a string can always be produced. I tried a very superficial search, but to no avail.

And Roger tersely moves on with

>I'll take your word for it

So in the absence of further elucidation, I took a stab at it. Note that I felt it necessary to add a fifth rule. This behavior was fully clarified in the examples given, but if we formalize it into a proper rule the examples are no longer necessary. The only remaining loose end falls in the definition of what constitutes a number, which I make note of in the second conjecture.

I can't recall making an inductive proof exactly like this before, as it's not quite math, but I believe I've covered it rigorously. Comments are welcome.

---

#### Given:

a positive number *N*

#### Posit:

1. For each value N there exists a hash-string *hs* conforming to the **rules**:
    1. the string consists only of digits 0-9 and hashes, ‘#’
    2. there are no two consecutive hashes: ‘##’ does not appear
    3. the last character is a hash
    4. the number immediately preceding each hash is the position of that
        hash in the string
    5. **a hash in the first position is self-referential, and does not
        need a 1 to indicate position**
2. There exists only one such string.

#### First Conjecture:

Assume the existence of a string *hs*, of unknown characters, of length *N*.

The string *hs* can be said to be composed of *head* and *tail* substrings, which, when joined make up *hs*.

The *tail* segment is defined as the characters:
1. **from rule 3:**
    * The last character of *tail* is '#'
2. **from rule 4:**
    * The characters immediately before the last character compose the number *N*

The remaining *head* is a hash-string of length (*N* - length *tail*) and this hash-string is subject to the same recursive definition as *hs*.

**Three cases define the recursion:**

1. If *head* has length 0 further subdivision is meaningless and the original string *hs* has been defined.
2. If *head* has length 1 it is '#', **from rule 5**.
3. If *head* has length 2 or more it can continue to be recursively reduced.

Thus the recursion will always finish.

The hash-string *hs* is by induction defined by concatenating the final *head* and any number of *tail* substrings in the order going forward as they were created.

#### Second Conjecture:

All segments to the string *hs* are rigidly defined as all times directly from the rules.

By rule 2 the string *hs* will be composed only of alternating numbers and single '#' characters. Each number is uniquely determined by the position of its following hash.

If we allow that in a given ordinal base there exists only one unique representation for each numeric value, then there can only be one unique number representation describing the position of each hash. [**Allowing leading 0s would invalidate this conjecture.**]

The last hash position is determined by rule 3, which fixes its preceding number representation. There exists only one such substring. By the First Conjecture the recursive fixing of the other numerical representations follow.

There can only be one such string because there exist no freedoms for any other form to exist.

---

# BLOGS {#PWC102BLOGS}

---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, I somehow continue to maintain my bearings. Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC093BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *READ* these *BLOG* *LINKS*:

**( *don't think, trust your training, you're in the zone, just do it ...* )**


**Aaron Smith**

 * [Perl Weekly Challenge 102 - Aaron Smith](https://aaronreidsmith.github.io/blog/perl-weekly-challenge-102/) ( *Raku* )

**Abigail**

 * [Perl Weekly Challenge 102: Rare Numbers — Abigail's Programming Blog](https://wp.me/pcxd30-t7) ( *Perl* )
 * [Perl Weekly Challenge 102: Hash-counting String — Abigail's Programming Blog](https://wp.me/pcxd30-tZ) ( *Perl* )

**Adam Russell**

 * [The Weekly Challenge 102: Threads and Recursion — Perl — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2021/03/07) ( *Perl* )
 * [The Weekly Challenge 102: Threads and Recursion — Prolog — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/prolog/2021/03/07) ( *Prolog* )

**Arne Sommer**

 * [Rare Counting with Raku and Perl](https://raku-musings.com/rare-counting.html) ( *Perl & Raku* )

**Dave Jacoby**

 * [Rare Numbers and Hash: Perl Challenge #102 | Committed to Memory](https://jacoby.github.io/2021/03/01/rare-numbers-and-hash-perl-challenge-102.html) ( *Perl* )

**Flavio Poletti**

 * [PWC102 - Rare Numbers - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/03/03/pwc102-rare-numbers/) ( *Perl* )
 * [PWC102 - Hash-counting String - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/03/04/pwc102-hash-counting-string/) ( *Perl* )

**Jaldhar H. Vyas**

 * [Perl Weekly Challenge: Week 102](https://www.braincells.com/perl/2021/03/perl_weekly_challenge_week_102.html) ( *Perl & Raku* )

**James Smith**

 * [Perl weekly challenge 102 | James Curtis-Smith](http://blogs.perl.org/users/james_curtis-smith/2021/03/perl-weekly-challenge-102.html) ( *Perl* )

**Roger Bell_West**

 * [RogerBW's Blog: Perl Weekly Challenge 102: Rare Hash](https://blog.firedrake.org/archive/2021/03/Perl_Weekly_Challenge_102__Rare_Hash.html) ( *Perl & Raku* )

**Simon Green**

 * [Weekly Challenge 102](https://dev.to/simongreennet/weekly-challenge-102-57jb) ( *Perl* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 102 – W. Luis Mochán](https://wlmb.github.io/2021/03/01/PWC102/) ( *Perl* )
