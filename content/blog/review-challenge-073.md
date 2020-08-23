---
author:       Colin Crain
date:         2020-08-23T00:00:00
description:  "Colin Crain › Perl Weekly Review #073"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #073"
image:        images/blog/p5-review-challenge-073.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-072/).* )

Welcome to the Perl review for **Week 073** of the Weekly Challenge! Here we will take the time to discuss the  submissions offered by the team, factor out the common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

Or really, talk about pretty much anything that stands out as remarkable or noteworthy.

Every week there is an enormous global collective effort made by the team, analyzing and creatively coding the submissions, and that effort deserves credit due. And that's why I'm here, to try and figure out how to do that.

Let's have a look and see what we can find.

---

**<big>For context</big>**  before we begin, you may wish to revisit either of the pages for the [**original tasks**](/blog/perl-weekly-challenge-073/) or the summary [**recap**](/blog/recap-challenge-073/) of the challenge. But don't worry, the challenges themselves will be briefly summarized, presented below as we progress from task by task. Oh, and one more thing before we get started:

### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

**So finally, without further ado...**

---

# •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC073TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC073TASK2)   &nbsp;  &nbsp;  &nbsp;       •   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC073BLOGS)    &nbsp;  &nbsp;  &nbsp;       •

---

# TASK #1 › Min Sliding Window {#PWC073TASK1}

You are given an array of integers @A and sliding window size $S.
Write a script to create an array of min from each sliding window.

Example
    Input: @A = (1, 5, 0, 2, 9, 3, 7, 6, 4, 8) and $S = 3
    Output: (0, 0, 0, 2, 3, 3, 4, 4)

    [(1 5 0) 2 9 3 7 6 4 8] = Min (0)
    [1 (5 0 2) 9 3 7 6 4 8] = Min (0)
    [1 5 (0 2 9) 3 7 6 4 8] = Min (0)
    [1 5 0 (2 9 3) 7 6 4 8] = Min (2)
    [1 5 0 2 (9 3 7) 6 4 8] = Min (3)
    [1 5 0 2 9 (3 7 6) 4 8] = Min (3)
    [1 5 0 2 9 3 (7 6 4) 8] = Min (4)
    [1 5 0 2 9 3 7 (6 4 8)] = Min (4)



# Solution Types:

The essence of the task here is to take an array of numbers and look at it as a collection of sub-arrays, in much the same way we can look inside a string as a collection of substrings. The “window” specified is a sub-array of length S whose lower boundary element starts at given index. By iterating over the indices, we can examine each window in turn, in this case to determine which of the elements is the smallest. The array slice is a natural fit here, and is the way almost everyone implemented the concept of a window.

The basic solution can be broken down into three parts:

* to **iterate**,
* applying a **minimum** function, on a
* **window** subset of the input array

## the TYPICAL solution

The quintessential solution used a `for` loop to iterate over an the array indices, then applied `min` from `List::Util` to obtain the minimum of an array slice ranging from the index to the size of the window. Typically this form is demonstrated in

[**Simon Green's**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/sgreen/perl/ch-1.pl) submission:

```perl
# Go through the list, and calculate the minimum value
foreach my $i ( 0 .. scalar(@list) - $s ) {
    push @result, min( @list[ $i .. $i + $s - 1 ] );
}
```

This solution does everything we need in concise, clear form.
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/cheok-yin-fung/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/jaldhar-h-vyas/perl/ch-1.pl),
[**Lance Wicks**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/lance-wicks/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/laurent-rosenfeld/perl/ch-1.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/wanderdoc/perl/ch-1.pl)
produced nearly identical solutions to this archetypical example.

## small VARIATIONS

The variations to this form used alternate loops, or hand-rolled minimum functions, but basically operate the same way. To give a few examples,

[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/perlboy1967/perl/ch-1.pl)

made a classic C-style `for` loop:

```perl
for (my $i = 0; $i < scalar(@A) - $S + 1; $i++) {
  my @s = @A[$i .. $i + $S - 1];

  push(@S, min(@s));

  printf "min(%s) = %d\n", join(', ',@s), $S[-1];
}
```

[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/cristian-heredia/perl/ch-1.pl)

Gave us a unique recursive function to accomplish her looping:

```perl
sub slidingWindow {
    if ($next != $max) {
        if ($counter == $S ) {
            $counter = 0;
            $next++;
            $S++;
            @window = ();
            slidingWindow();
        }
        else {
            foreach (my $i = $next; $i<$S; $i++) {
                push @window, $A[$i];
            }
            $counter = $S;
            push @outout, min(@window);
            slidingWindow();
        }
    }
    else {
        print Dumper \@outout;
    }
}
```

also

[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/lubos-kolouch/perl/ch-1.pl) and
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/mohammad-anwar/perl/ch-1.pl)

both use a `while` to get the job done, which requires the use of an external position counter in the index. Here's Mohammad's loop:

```perl
while ($index + $size - 1 <= $#$list) {
    push @min_sliding_window,
    min ( map { $list->[$_] } $index .. $index + $size - 1 );
    $index++;
}
```

But notice here Mohammad has done something else as well, in mapping the array values into a generated list of indices before computing the minimum, instead of using an array slice.
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/dave-jacoby/perl/ch-1.pl)
does the same trick to generate his windowing.



As I said, most everyone used `List::Util` to find their minimum. Now this is an XS module written in C, so can reasonably be assumed to be the fastest option. It's also core, so it's going to be there for the taking. But some of us feel unconstrained by such concepts of efficacy and common sense, and went out and wrote our own anyway. Note the pronoun here; as way of example I present

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/colin-crain/perl/ch-1.pl), because I'm really quite fond of the way it turned out.

```perl
sub minimum {
    my $min = "inf";
    $_ < $min and $min = $_ for @_;
    return $min;
}
```

I have always been a fan of artistic minimalism, and I like its clean lines, short-circuiting logic and use of the special string `inf`.

Fellow mavericks here, shouting at the Moon, were
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/laurent-rosenfeld/perl/ch-1.pl),
[**Pavel Kuptsov**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/pavel_kuptsov/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/roger-bell-west/perl/ch-1.pl),
[**Steven Wilson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/steven-wilson/perl/ch-1.pl), and
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/ulrich-rieke/perl/ch-1.pl). Dream on, dreamers, and never stop fighting for what you believe in.

## on the SUBJECT of sort()

Several people pulled out a great little trick to find the smallest element of an array: take the array, sort it, and then pull out the first element. This can be succinctly done all in a single line by wrapping the sort in parens and indexing [0]:

```perl
my $min = ( sort @array )[0];
```

The problem is that for a list of integers, the above doesn't work. In fact, it's worse than that because it *appears* to work, works for a while and then fails under select circumstances. Why? Because the default sort will be ascii-alphabetic rather than numeric. 1 through 9 will sort correctly but then 10 will insert after 1, and 100 immediately after that.

One of my biggest minor irritations in the Perl language is that sorting numerically isn't an out-of-the-box option. For some reason or another I'm always finding myself writing an explicit sort function, enough that it's just habituated by this point. This, for instance, *will* work:

```perl
my $min = ( sort {$a <=> $b} @array )[0];
```

As I said it's a minor annoyance, not a deal-breaker or anything. I've been in love with the `map`/`sort`/`grep` idiom as long as I, well, first found `map`, so maybe it's just me. Including something like

```perl
sub bynumber {$a <=> $b};
```

allows one to say

```perl
my $min = ( sort bynumber @array )[0];
```

which is really nice if you're sorting all over the place and have to use it a lot, but in the end I normally and consistently find myself, automatically at this point, writing that block yet again. This is a public service announcement: don't forget to write the block. The way it fails only after small values can make it a hard bug to spot. To those of you affected, I believe you already know who you are.

## the CONDENSED Solution

Have a look at

[**Jorg Sommrey's**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/jo-37/perl/ch-1.pl) code:

```perl
sub sliding_min {
    my $S = shift;

    # Take the minimum of a sliding window
    map min(@_[$_ .. $_ + $S - 1]), 0 .. $#_ - $S + 1;
}
```

By combining a `map` function to apply the `min` of an array slice over the relevant indices, Jorg has distilled things down into a single, condensed pass. Notice how he passes in the window size followed by the array. The window is immediately shifted off the parameter list and the remaining array is directly accessed, resulting in a very elegant solution.

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/e-choroba/perl/ch-1.pl)
[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/walt-mankowski/perl/ch-1.pl)


kudos to all of them.




## UNIQUE approaches and other THINGS THAT CAUGHT MY EYE

[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/arne-sommer/perl/ch-1.pl)

Arne imports List::Util to get his `min` function, but prefers Perl6::Junction to import `all` for his validation check. It's an interesting little module, with its own syntax particulars; it is nice to write `all(@this) == something`. The fundamental idea is to treat the elements of the array as a single object that simultaneously exists with multiple values, in fact this object can be assigned to a scalar as any other, and overrides comparison and equality operators applicable to it. `List::Util::all` would do the work fine, but this is a different way to look at a list; not to compare each value, but to compare *the whole list*.

Meanwhile, buried deep within the code is the single phrase

```perl
map { min @A[$_ .. $_ + $S -1] } (0 .. @A - $S)
```

which does the work.

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/athanasius/perl/ch-1.pl)

Minimum sliding window, you say?

Of course there's a module for that, and this is it: [`PerlX::Window`](https://metacpan.org/pod/PerlX::Window). Athanasius' code ends up looking like this:

```perl
my   @minima;
push @minima, min(@window) while window(@A, $S);
```

The `window` function does exactly what we've been doing here. This is good reminder that after a few decades, there is a cpan module for *everything*, even this.

[**Lance Wicks**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/lance-wicks/perl/ch-1.pl)

Lance has given us a what now should be familiar technique,

```perl
for my $i (0 .. $the_end){
    my @slice = @numbers[$i .. ($i-1) + $args{window_size}];
    push @array_of_mins, min @slice;
}
```

Aside from making a comment on his slightly more verbose and hence very easy to read variable naming conventions — thank you Lance — I mention this here because his workflow seems to be to write everything in its own subroutine and then in turn pack that up in its own module. It's a very robust system that nicely catalogs and compartmentalizes the logic away from any possibility of namespace collisions. Unfortunately as the script becomes a simple wrapper, or in this case test suite, it makes the actual code, for the purposes of the PWC, a bit harder to find. So I submit to you now, for your perusal, a link to
[Sliding.pm](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/lance-wicks/perl/Sliding.pm), which you will find tucked alongside the script in the same github directory.

[**Mano Chandar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/mano-chandar/perl/ch-1.pl)

Mano doesn't shift the window frame, but rather shifts the array behind it, playing a little switcheroo on our our data sets. The code looks at the first S elements of A, finds the minimum for that set, then shifts A out from underneath before repeating for the next group.

```perl
while( @A >= $S ) #process the array upto slidiing window size match
{
    my $min;
    foreach( 0..$S - 1 )    #traverse upto size of sliding window
    {
        $min = $A[$_] if( !defined $min || $A[$_] < $min ); #find minimum value in array
    }
    push( @min, $min ); #push the minum value from siliding window array
    shift @A;
}
```

Just because everybody does it one way doesn't mean there aren't other, equally valid frames of reference. Always a good thing to remember.


[**Myoungjin Jeon**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/jeongoon/perl/ch-1.pl)

Jeon give us a brace of solution functions, `groupMinimumList` and `groupMinimumListComplex`.

The first, `groupMinimumList`, moves incrementally through the windows, but once it has found a minimum value, caches *the position* of that value. Then, in comparing further windows, first he checks whether the existing current minimum value is contained within that window. If so, the only comparison required is the newly added value to that memoized value. This saves a bit of checking when the last minimum is still within the current window. If not, then all the elements are examined and a new minimum is selected.

the second routine grapples with the question "What if comparing more complex object and comparing process is not very delightful?" Charming language aside, he continues with a
`groupMinimumListComplex` version of the routine, and both are output.



[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/pete-houston/perl/ch-1.pl)

```perl
my (@win, @mins);
(@win[0..$size-1], @a) = (undef, @a);

while ($#a > -1) {
    shift @win;
    push @win, shift @a;
    push @mins, min (@win);
}
```

In a manner similar to yet uniquely different from that of Mano, above, Pete starts by reassigning our input array into two new arrays, the window and the rest of the array elements. Well actually, *almost all* of the window and the rest of the parts. In this way he has set up his loop process properly from the beginning: to shift the window one (the `undef` element for the first pass), to shift the remainder of the array one into the window, then take the minimum of that set. After the last item has been shifted into the windowed view and examined, the process is finished. I like this approach.


[**Shawn Wagner**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/shawn-wagner/perl/ch-1.pl)

As Shawn notes in his comments, "This is really just a thin layer of perl over SQLite to solve the problems using SQL window functions." Which is most certainly is.

The result is this hilarious and wonderful solution. I must admit I did not see that one coming.

```perl
    my $dbh = DBI->connect("dbi:SQLite:dbname=:memory:","","");
    $dbh->do("CREATE TABLE data(id INTEGER PRIMARY KEY, val INTEGER)");
    my $stmt = $dbh->prepare("INSERT INTO data(val) VALUES (?)");
    $stmt->execute_array({}, $A);
    $S -= 1;
    my $len = @$A - $S;
    my $nums = $dbh->selectall_arrayref(<<EOS);
SELECT min(val) OVER (ORDER BY id ROWS BETWEEN CURRENT ROW AND $S FOLLOWING)
FROM data
ORDER BY id
LIMIT $len
EOS
```


[**William West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/will-west/perl/ch-1.pl)

Breaking the task down into components in his own personal style, William strives to show the the logic flow of his programs through his distinct routine names. After adding a few newlines for clarity:

```perl
    theSmallestValue(
        fromEachWindow(
            ofAnArray()))
```


This is really the same pattern at heart to the familiar "iterate minimum of each slice" paradigm we've seen elsewhere, just phrased differently. I can almost hear his thoughts; express your goal in a complete sentence, then create the components to make that sentence happen. It's very interesting to watch the process.

Here's the side-routine he uses to calculate the individual windows. Note the `map` function is _not_ being used in void context, as the result of the function is being implicitly returned by the subroutine.


```perl
sub slideMap{
   my($aref,   #can be anything
      $span    #window size
   )=@_;

   $span = 1 unless $span;
   my $adjSpan = $span - 1; #beware off by one
   map{[@$aref[$_-$adjSpan..$_]]}$adjSpan..$#$aref
}
```

---

# TASK #2 › Smallest (Smaller) Neighbour {#PWC073TASK2}
You are given an array of integers @A.
Write a script to create an array that represents the smallest element to the left of each corresponding index. If none found then use 0.

Example 1
Input: @A = (7, 8, 3, 12, 10)
Output: (0, 7, 0, 3, 3)

    For index 0, the smallest number to the left of $A[0]      is none, so we put 0.
    For index 1, the smallest number to the left of $A[1] in (7), is 7 so we put 7.
    For index 2, the smallest number to the left of $A[2] in (7, 8) is none, so we put 0.
    For index 3, the smallest number to the left of $A[3] in (7, 8, 3) is 3, so we put 3.
For index 4, the smallest number to the left of $A[4] in (7, 8, 3, 12) is 3, so we put 3 again.

Example 2 input: @A = (4, 6, 5)
Output: (0, 4, 4)

    For index 0, the smallest number to the left of $A[0]  in none, so we put 0.
    For index 1, the smallest number to the left of $A[1]  in (4) is 4, so we put 4.
    For index 2, the smallest number to the left of $A[2]  in (4, 6) is 4, so we put 4 again.


# Solution Types:

As I said elsewhere, “Smallest Neighbor” is a somewhat misleading title for this challenge, as we are not in fact looking for the smallest element to the left of a given index, but rather the smallest element to the left of the index *that is smaller than that element*.

There were a couple of strategies that dominated the field of solutions:

As written, this challenge resembles the one before it; only in this case the size of the window is dynamic and there is some additional comparison going on. But there are some important differences that opened the door to a very swift shortcut. Many people noticed that as the window to the left of a given digit grew, unlike the previous challenge it always still encompassed every smaller window before it. Thus any given minimum will remain in the set and in its role until a smaller minimum supersedes it. This is key to the main solution, as it turns out.

Everybody figured quickly out that because there would never be any elements to the left of the first array position, the first element output would always be 0. Some people made a special case for the first window, others just started their output array as `(0)` and went forward from there. So the first real position to be *checked* is index 1, being compared to the sole other element and de facto minimum, the element at index 0. From that point, though, things diverged.

## keeping a RUNNING TALLY of the MINIMUM

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/athanasius/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/cheok-yin-fung/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/e-choroba/perl/ch-2.pl),
[**Javier Luque**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/javier-luque/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/laurent-rosenfeld/perl/ch-2.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/lubos-kolouch/perl/ch-2.pl),
[**Mano Chandar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/mano-chandar/perl/ch-2.pl),
[**Myoungjin Jeon**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/jeongoon/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/pete-houston/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/roger-bell-west/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/sgreen/perl/ch-2.pl),
[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/walt-mankowski/perl/ch-2.pl),

Commonly people looked at the window, an the minimum, and realized that if a minimum was found, it would remain the minimum until something smaller came around. Add to this that the dataset is only expanded one element at a time as well, as each new index is evaluated, and the rule becomes: if the value at the current index is less than minimum, replace the minimum and write 0. Otherwise write the minimum to output. This is nice and clearly laid out in

[**Walt Mankowski's**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/walt-mankowski/perl/ch-2.pl) submission:

```perl
my @output = (0);
my $min = $A[0];

for my $x (@A[1..$#A]) {
    push @output, $min < $x ? $min : 0;
    $min = $x if $x < $min;
}
```

Or perhaps this one by

[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/lubos-kolouch/perl/ch-2.pl)

```perl
for my $i (1 .. scalar @$a_ref-1) {
   if ($min < $a_ref->[$i]) {
       push @return_array, $min;
   } else {
       push @return_array, 0;
   }
   $min = $a_ref->[$i] if @$a_ref[$i] < $min;
}
```

is clearer to you.

As you can see, because of the logical simplicity there really isn't a lot of room for variation in implementing this algorithm. One notable exception to this would be the solution submitted by

[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/pete-houston/perl/ch-2.pl)

The short-circuit logic of Pete's answer is a beauty to behold. Taking the basic form of the running tally  on the minimum, he evaluates each iterated element: is it less than the minumum? If not, keep the old minimum. If so, then evaluate a boolean expression: first
set the minimum to $_, which evaluates to the value being set (generally True but it really isn't important), and then evaluate the expression 0, which is by definition False. The `and` expression thus evaluates to False and a 0 is pushed onto `@mins`. Lovely.

```perl
push @mins, $_ < $min ? ($min = $_ and 0) : $min for @ARGV;
```

## ITERATING across the array and CHECKING ARRAY SLICES

[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/arne-sommer/perl/ch-2.pl),
[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/cristian-heredia/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/dave-jacoby/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/jaldhar-h-vyas/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/jo-37/perl/ch-2.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/mohammad-anwar/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/perlboy1967/perl/ch-2.pl),
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/wanderdoc/perl/ch-2.pl), and
[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/colin-crain/perl/ch-2.pl).


In the second form, the process is very similar to the previous challenge: iterate acrosss the field, selecting a slice for each index, and determine the minimum value within that slice. Instead of just taking the minimum value, though, we add some additional processing when we hand over the partition, to make sure it's smaller than the indexed element.

I think
[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/colin-crain/perl/ch-2.pl)
may be the most systematically laid out example of this approach.

```perl
for (1..@input-1) {
    my @slice = @input[0..$_];
    my $smallest = smallest_neighbor( @slice );
    push @output, $smallest;
}

sub smallest_neighbor {
## find the minimum value to the left and return it if
## min < given value, else 0
    my $value = pop @_;
    my $min = "inf";
    $_ < $min and $min = $_ for @_;
    $min < $value ? $min : '∅';
}
```

I think it's pretty easy to follow; I've rolled the check against the index value into the minimum function, renaming it `smallest_neighbor`. For a discussion on why I went with the null sign for output, look down to my comments on [Myoungjin Jeon's](#MYOUNGJINTASK2) efforts, below.

For a more representative, condensed version, have a look at

[**Mohammad S Anwar's**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/mohammad-anwar/perl/ch-2.pl) example:

```perl
my @smallest_neighbour = (0);
foreach my $i (1 .. $#$list) {
    my $min = min( map { $list->[$_] } 0..$i-1 );
    push @smallest_neighbour, ($min < $list->[$i])?($min):(0);
}
```

[**Jaldhar H. Vyas's**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/jaldhar-h-vyas/perl/ch-2.pl) submission looked a lot like this as well.


Taking the condensation and code tightening to its logical conclusion ends up in basically a three-way tie between
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/arne-sommer/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/jo-37/perl/ch-2.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/wanderdoc/perl/ch-2.pl). Because they're all so short, why don't we just list them all?

  **Arne**

```perl
say "(0, ",
  join (", ",
      map { my $c = min @A[0 .. $_ -1]; $c < $A[$_] ? $c : 0 } (1 .. @A -1)),
     ")";
```

  **Jorg**

```perl
      map {my $e = $_[$_]; min(grep {$_ < $e} @_[0 .. $_-1]) // 0} 0 .. $#_;
```

  **Wanderdoc**

```perl
 for my $i ( 1 .. $#arr )
 {
      push @small, min(@arr[0..$i-1]) < $arr[$i] ? min(@arr[0..$i-1]) : 0;
 }
```

as you can see, they all operate the same way

## UNIQUE approaches and other THINGS THAT CAUGHT MY EYE

[**Myoungjin Jeon**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/jeongoon/perl/ch-2.pl) {#MYOUNGJINTASK2}

The algorithm used beneath Jeon's code is essentially to keep a running tally of the minimum, comparing new elements as they are added to the pool. But Jeon obviously wants more out of life, and has decided to lay an explicit boolean logic structure over the decision making, by importing the `boolean.pm` module. What's the difference? Practically, not a lot, as the idea of Truth is straightforward and well-defined in Perl. But having "real" Boolean types, or things that act just like them, is nice, and I do see the case for adding them in. One of the more interesting side-effect of doing things this what to do when when there is no smaller number to the left of a given index.

```perl
sub gen_smallest_( $$ ) {
    my ( $s, $c ) = @_;         # (s)mallest (c)urrent
    # return true               if we couldn't find the smallest
    #                                   because we found new one
    # return false              if we couldn't find the smallest
    # return current smallest   if we find the one
    if ( isBoolean( $s ) || $s > $c ) {
        true                        # 0         && new smallest
    }
    else {
        ( $s < $c ) ? $s            # smallest  && keep smallest
                    : false         # 0         && keep smallest
    }
}
```

Per the challenge description, we are supposed to return 0 in this instance. But then again the action we are documenting is that the match missed and failed. Thus it makes sense to record, instead of 0, False. Which is what Jeon has done, internally. This value is in turn recorded in the output string as 0, in accordance with the directives. We come full circle to exactly the same place, but in a different and pleasantly internally consistant manner.

```perl
sub processSmallest ( @ ) {
    my $smallest = boolean( not 'given' );
    map {
        my $current_is_smallest_or_just = gen_smallest_ $smallest, $_;
        isTrue( $current_is_smallest_or_just )     and $smallest = $_;
        isBoolean( $current_is_smallest_or_just )  ? 0 : $smallest;
      } @_;
}
```

I do like the idea of returning False for a miss, and in my own solution I unilaterally decided to ignore the directive to report a 0, choosing to instead return ∅, the null sign. Which looks a whole lot like a zero in the font I'm using right now, but quite definitely is not. My own thinking centered around negative numbers never being excludied, and 0 thus being right in the middle of possible valid outcomes, and the possibility of confusion. No one else seemed to care enough to make a fuss, but I believe me and Jeon here are seeing eye to eye on this. The thing being reported is False, not 0, so using 0 muddies the logic.

[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/perlboy1967/perl/ch-2.pl)

Although Niels' "iterate and check" algorithm follows the standard progression, I cannot help but notice his impressively loquacious output. He doesn't just tell you what the answer is, but gives you a *very* thorough blow-by-blow on how exactly he gets there, writing out the variables and logic employed at every step along the way. Definitely above and beyond the call of duty, and very informative. This draws attention to one of the best things about these challenges: it's not about doing it in the fastest time, or the shortest script, or even the fastest execution. It's about whatever you want to make of it, and sharing that insight with the world. I very much applaude this extra effort and encourage people to run this to see what it does.

```perl
printf "Input:\n\t\@A = (%s)\n\n", join(', ', @A);

for (my $i = 1; $i < scalar(@A); $i++) {
  my @s = @A[0 .. $i-1];
  my $min = min(@s);

  push(@N, $min < $A[$i] ? $min : 0);

  printf "%d\tmin(%s) = %d, %d < %d ? %d : 0 => %d\n",
    $A[$i], join(', ',@s), $min, $A[$i], $min, $min, $N[-1];
}

printf "\nOutput:\n\t\@S = (%s)\n", join(', ', @N);
```

[**Shawn Wagner**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/shawn-wagner/perl/ch-2.pl)

Mr. Wagner has presented us with another mutant hybrid Perl/SQL solution that answers the important question: "Yea, yea, that's great, whatever. Now can we solve it in the database?"

Well, I'm glad you asked because of course we can. I'm just going to include the whole thing in all its glory:

```perl
sub task2 {
  my @A = @_;
  my $dbh = DBI->connect("dbi:SQLite:dbname=:memory:","","");
  $dbh->do("CREATE TABLE data(id INTEGER PRIMARY KEY, val INTEGER)");
  my $stmt = $dbh->prepare("INSERT INTO data(val) VALUES (?)");
  $stmt->execute_array({}, \@A);

  my $nums = $dbh->selectall_arrayref(<<EOS);
SELECT CASE
         WHEN min(val) OVER w < val THEN min(val) OVER w
         ELSE 0
       END
FROM data
WINDOW w AS (ORDER BY id ROWS BETWEEN UNBOUNDED PRECEDING AND 1 PRECEDING)
ORDER BY id
EOS
  say "Task 2:\t", join(", ", map { $_->[0] } @$nums);
}
```

Forget Elmer's, Perl still makes the best glue. And for those interested, SQL with Common Table Expressions and Windowing is [apparently Turing complete](http://assets.en.oreilly.com/1/event/27/High%20Performance%20SQL%20with%20PostgreSQL%20Presentation.pdf). So I look forward to more of these from Shawn in the future. Perhaps a complier.

<br>

# BLOGS {#PWC073BLOGS}

***

**That's it for me this week, people!**

## *But if Your THIRST for KNOWLEDGE is not SLAKED*,
## then *RUN (dont walk!)* to the WATERING HOLE
## and READ these BLOG LINKS:

***( don't think, trust your training, you're in the zone, just do it ... )***


**Andrew Shitov**
 * [Raku challenge week 73 ](https://andrewshitov.com/2020/08/10/raku-challenge-week-73/) ( *Raku* )

**Arne Sommer**
 * [Sliding Neighbour with Raku & Perl](https://raku-musings.com/sliding-neighbour.html) ( *Perl & Raku* )

**Cheok-Yin Fung**
 * [CY's Recent Submission for PWC(068-073)](http://blogs.perl.org/users/c_y_fung/2020/08/cys-recent-submission-for-pwc068-073.html) ( *Perl* )

**Colin Crain**
 * [Open the Window Just a Little Bit so Your Smallest Smaller Neighbor Can Get In](https://colincrain.wordpress.com/2020/08/15/open-the-window-just-a-little-bit-so-your-smallest-smaller-neighbor-can-get-in/) ( *Perl & Raku* )

**Jaldhar H. Vyas**
 * [Perl Weekly Challenge: Week 73](https://www.braincells.com/perl/2020/08/perl_weekly_challenge_week_73.html) ( *Perl & Raku* )

**Javier Luque**
 * [PERL WEEKLY CHALLENGE &#8211; 073](https://perlchallenges.wordpress.com/2020/08/12/perl-weekly-challenge-073/) ( *Perl & Raku* )

**Lance Wicks**
 * [#Perl Weekly Challenge #73](https://lancewicks.com/2020/08/16/perl-weekly-challenge-73/) ( *Perl* )
 * [Live Programming #Perl... Perl Weekly Challenge #72 - YouTube](https://www.youtube.com/watch?v=OA7dCY7vDJo) ( *Perl* )

**Laurent Rosenfeld**
 * [Perl Weekly Challenge 73: Min Sliding Window and Smallest Neighbor](http://blogs.perl.org/users/laurent_r/2020/08/perl-weekly-challenge-73-min-sliding-window-and-smallest-neighbor.html) ( *Perl & Raku* )

**Luca Ferrari**
 * [Perl Weekly Challenge 73: reduction to min Task 1](https://fluca1978.github.io/2020/08/16/PerlWeeklyChallenge73.html#task1) ( *Raku* )
 * [Perl Weekly Challenge 73: reduction to min Task 2](https://fluca1978.github.io/2020/08/16/PerlWeeklyChallenge73.html#task2) ( *Raku* )

**Mohammad S Anwar**
 * [BLOG: The Weekly Challenge #073](https://perlweeklychallenge.org/blog/weekly-challenge-073/) ( *Perl & Raku* )
 * [Perl Weekly Challenge - 073 (Task #1: Perl) - YouTube](https://www.youtube.com/watch?v=uMK6_sMF-AI) ( *Perl & Raku* )
 * [Perl Weekly Challenge - 073 (Task #2: Perl) - YouTube](https://www.youtube.com/watch?v=20FEroDZjw0) ( *Perl & Raku* )

**Simon Green**
 * [Perl Weekly Challenge 073](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/sgreen/README.md) ( *Perl* )

**Walt Mankowski**
 * [Perl Weekly Challenge #73](http://www.mawode.com/blog/blog/2020/08/15/perl-weekly-challenge-73/) ( *Perl* )
