---
title: "The Weekly Challenge - 314"
date: 2025-03-24T00:00:00+00:00
description: "The Weekly Challenge - 314"
type: post
image: images/twc-logo.png
author: Mohammad Sajid Anwar
tags: ["Perl", "Raku"]
---

## TABLE OF CONTENTS
***

### 01. [HEADLINES](#HEADLINES)
### 02. [SPONSOR](#SPONSOR)
### 03. [RECAP](#RECAP)
### 04. [PERL REVIEW](#PERLREVIEW)
### 05. [RAKU REVIEW](#RAKUREVIEW)
### 06. [CHART](#CHART)
### 07. [NEW MEMBERS](#NEWMEMBERS)
### 08. [GUESTS](#GUESTS)
### 09. [TASK #1: Equal Strings](#TASK1)
### 10. [TASK #2: Sort Column](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

Welcome to the `Week #314` of `The Weekly Challenge`.

We have a new member, [**Darren Yates**](https://github.com/darren-yates), joining `Team PWC`.

Welcome aboard! I hope you find our group fun and entertaining while also surprising you with its magic. Thanks for your first contributions in [**Perl**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-313/darren-yates/perl).

As some of you already know, that I am also the co-editor of [**Perl Weekly newsletter**](https://perlweekly.com). I edit the newsletter every alternate week. I take the `even numbered` weeks and `Gabor Szabo`, the chief editor, takes the `odd numbered` weeks. It is always published on `Monday` morning, just like `The Weekly Challenge`.

This week is an `odd numbered` week, so I have a break. However, even when I am off, I still work on `The Weekly Challenge` section of the newsletter.

What does that mean?

It means, I go through all weekly contributions and collect all the blog posts. After that, I carefully review each one and add it to the newsletter along with my short commentary.

As you can imagine, this is a time-consuming exercise. I do this while also preparing the new weekly challenge shoutout.

The downside?, I don't get to check contributions without a blog post. Trust me, I hate this! I truly want to go through all submissions because I know personally how brilliant each one of you is.

Take, for example, `James Smith`, our former member he always comes up brilliant solutions every week but we never got to capture them in our knowledge bank, not because he stopped us from doing so, but simply because of how he shared them.

Why?

Usually he shares his creation in a `Facebook` group called `Perl Programmers` and mostly as an image. making it difficult to copy and paste, as you know.

Just like, `James Smith`, we have many other brilliant minds in our team. One day, when we look back, I am sure we will be proud of what have accomplished. The next generation of creative minds will definitely appreciate the work we are leaving behind.

I don't usually talk much because of time constraints but today is special as I am overwhemled by the quality contributions this week.

Once again, I sincerely apologise to those I miss regularly because they don't submit a blog. I truly admire your work as well!

If I name just one or two people, it would be unfair in my opinion but I can't resist.

So please forgive me, I have to mention some names today, in no particular order.

For a complete review, you can check out the [**latest newsletter**](https://perlweekly.com/archive/713.html), if it is published before ours.

<br>

**Jorg Sommrey**
***

```
sub broken_keys ($name, $typed) {
    $typed =~ /^(??{$name =~ s#.#\Q$&\E+#gr})$/;
}
```

<br>

**Mathias Muth**
***

```
sub broken_keys( $name, $typed ) {
    my $pattern = join "", map "$_+", split "", $name;
    return $typed =~ /^$pattern$/;
}
```

<br>

**Peter Campbell Smith**
***

```
sub broken_keys {

    my ($correct, $wrong, $pattern);

    ($correct, $wrong) = @_;

    # build a regular expression
    $pattern .= qq/[$_]+/ for split('', $correct);

    # use it to produce output
    say qq[\nInput:  \$correct = '$correct', \$wrong = '$wrong'];
    say qq[Output: ] . ($wrong =~ m|^$pattern$| ? 'true' : 'false');
}
```

<br>

**Simon Green**
***

```
sub main ( $name, $typed ) {
    my $r = '^' . join( '+', map { quotemeta } split //, $name ) . '+$';
    say $typed =~ $r ? 'true' : 'false';
}
```

<br>

***

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `309` &nbsp;&nbsp;|&nbsp;&nbsp; 50 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|
|&nbsp;&nbsp; `310` &nbsp;&nbsp;|&nbsp;&nbsp; 44 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|
|&nbsp;&nbsp; `311` &nbsp;&nbsp;|&nbsp;&nbsp; 42 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|
|&nbsp;&nbsp; `312` &nbsp;&nbsp;|&nbsp;&nbsp; 46 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|&nbsp;&nbsp; 26 &nbsp;&nbsp;|
|&nbsp;&nbsp; `313` &nbsp;&nbsp;|&nbsp;&nbsp; 51 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `309` &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|&nbsp;&nbsp; 56 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|
|&nbsp;&nbsp; `310` &nbsp;&nbsp;|&nbsp;&nbsp; 11 &nbsp;&nbsp;|&nbsp;&nbsp; 44 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|
|&nbsp;&nbsp; `311` &nbsp;&nbsp;|&nbsp;&nbsp; 11 &nbsp;&nbsp;|&nbsp;&nbsp; 46 &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|
|&nbsp;&nbsp; `312` &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|&nbsp;&nbsp; 56 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|
|&nbsp;&nbsp; `313` &nbsp;&nbsp;|&nbsp;&nbsp; 11 &nbsp;&nbsp;|&nbsp;&nbsp; 49 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|

<br>

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (3271)
     2. Rust       (868)
     3. Ruby       (781)
     4. Haskell    (759)
     5. Lua        (698)
     6. C++        (599)
     7. C          (590)
     8. JavaScript (544)
     9. Go         (469)
    10. BQN        (424)

<br>

### Blogs with Creative Title
***

#### 1. [Reverse Broken Keys for Letters](http://rabbitfarm.com/cgi-bin/blosxom/perl/2025/03/23) by Adam Russell.
#### 2. [Reverse Broken](https://raku-musings.com/reverse-broken.html) by Arne Sommer.
#### 3. [Broken Down Letters](https://github.sommrey.de/the-bears-den/2025/03/21/ch-313.html) by Jorg Sommrey.
#### 4. [There Is Always a Regular Expression To Solve It](https://github.com/MatthiasMuth/perlweeklychallenge-club/tree/muthm-313/challenge-313/matthias-muth#readme) by Matthias Muth.
#### 5. [Broken letters](http://ccgi.campbellsmiths.force9.co.uk/challenge/313) by Peter Campbell Smith.
#### 6. [Broken and Reversed](https://blog.firedrake.org/archive/2025/03/The_Weekly_Challenge_313__Broken_and_Reversed.html) by Roger Bell_West.
#### 7. [Broken letters](https://dev.to/simongreennet/broken-letters-462e) by Simon Green.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits: 42,822 (`+117`)
#### 2. Pull Requests: 11,751 (`+40`)
#### 3. Contributors: 257
#### 4. Fork: 327 (`+2`)
#### 5. Stars: 188 (`+1`)

<br>

## SPONSOR {#SPONSOR}
***

With start of `Week #268`, we have a new sponsor `Lance Wicks` until the end of year `2025`. Having said we are looking for more sponsors so that we can go back to weekly winner. If anyone interested please get in touch with us at `perlweeklychallenge@yahoo.com`. Thanks for your support in advance.

<br>

## RECAP {#RECAP}
***

Quick recap of **[The Weekly Challenge - 313](/blog/recap-challenge-313)** by `Mohammad Sajid Anwar`.

<br>

## PERL REVIEW {#PERLREVIEW}
***

If you missed any past reviews then please check out the [**collection**](/p5-reviews).

<br>

## RAKU REVIEW {#RAKUREVIEW}
***

If you missed any past reviews then please check out the [**collection**](/p6-reviews).

<br>

## CHART {#CHART}
***

Please take a look at the [**charts**](/chart) showing interesting data.

I would like to `THANK` every member of the team for their valuable suggestions. Please do share your experience with us.

<br>

## NEW MEMBERS {#NEWMEMBERS}
***

[**Darren Yates**](https://github.com/darren-yates), an expert `Perl` hacker joined the `Team PWC`.

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please try the excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member `Saif Ahmed` of **Team PWC**.

<br>

## GUESTS {#GUESTS}
***

Please check out the guest contributions for the [**Week #313**](/blog/guest-contribution/#313).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## Task 1: Equal Strings {#TASK1}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given three strings.

You are allowed to remove the rightmost character of a string to make all equals.

Write a script to return the number of operations to make it equal otherwise `-1`.

#### Example 1

    Input: $s1 = "abc", $s2 = "abb", $s3 = "ab"
    Output: 2

    Operation 1: Delete "c" from the string "abc"
    Operation 2: Delete "b" from the string "abb"

#### Example 2

    Input: $s1 = "ayz", $s2 = "cyz", $s3 = "xyz"
    Output: -1

#### Example 3

    Input: $s1 = "yza", $s2 = "yzb", $s3 = "yzc"
    Output: 3

<br>


## Task 2: Sort Column {#TASK2}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given a list of strings of same length.

Write a script to make each column sorted lexicographically by deleting any non sorted columns.

Return the total columns deleted.

#### Example 1

    Input: @list = ("swpc", "tyad", "azbe")
    Output: 2

    swpc
    tyad
    azbe

    Column 1: "s", "t", "a" => non sorted
    Column 2: "w", "y", "z" => sorted
    Column 3: "p", "a", "b" => non sorted
    Column 4: "c", "d", "e" => sorted

    Total columns to delete to make it sorted lexicographically.

#### Example 2

    Input: @list = ("cba", "daf", "ghi")
    Output: 1

#### Example 3

    Input: @list = ("a", "b", "c")
    Output: 0

<br>

***

Last date to submit the solution `23:59 (UK Time) Sunday 30th March 2025`.

***
