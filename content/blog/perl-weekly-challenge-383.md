---
title: "The Weekly Challenge - 383"
date: 2026-07-20T00:00:00+00:00
description: "The Weekly Challenge - 383"
type: post
author: Mohammad Sajid Anwar
tags: ["Perl", "Raku", "Challenge"]
---

## TABLE OF CONTENTS
***

### &nbsp;&nbsp;1. [HEADLINES](#HEADLINES)
### &nbsp;&nbsp;2. [SPONSOR](#SPONSOR)
### &nbsp;&nbsp;3. [RECAP](#RECAP)
### &nbsp;&nbsp;4. [PERL REVIEW](#PERLREVIEW)
### &nbsp;&nbsp;5. [RAKU REVIEW](#RAKUREVIEW)
### &nbsp;&nbsp;6. [CHART](#CHART)
### &nbsp;&nbsp;7. [NEW MEMBERS](#NEWMEMBERS)
### &nbsp;&nbsp;8. [GUESTS](#GUESTS)
### &nbsp;&nbsp;9. [TASK #1: Similar List](#TASK1)
### 10. [TASK #2: Nearest RGB](#TASK2)

## HEADLINES {#HEADLINES}
***
Welcome to the `Week #383` of `The Weekly Challenge`.

Apology for late arrival of this week challenge. The week `#382` turned out to be least popular week of `2026`. I hope to see more energy this week.

I had really tough time to solve the task #1. It was supposed to be easy one but actually it was not something you can do in your head easily. I am not happy with my contribution either. I just did it anyway, not to break the continuity otherwise I would be gone for a long time.

We have a new guest language, `Maxima`, added to the list, thanks `Jorg Sommrey` for your contribution in [**Maxima**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-382/jo-37/maxima/ch-1.mac). We now have `125` guest languages altogether.

We have a change in rankings in guest languages. `Ruby` is now rank `#4` and pushed `Haskell` to rank `#5`. `Lua` is catching up with rank `#6`.

Below is my contributions to the `Task #1` of `Week #382`.

### Perl: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-382/mohammad-anwar/perl/ch-1.pl)
***
```perl
sub gen_all_circles {
    my $n = shift;

    my %squares = map { $_*$_ => 1 } 1 .. int(sqrt(2*$n));

    my @all_solutions;
    my @path = (1);
    my @used;
    $used[1] = 1;

    my $dfs;
    $dfs = sub {
        if (@path == $n) {
            if ($squares{$path[-1] + $path[0]}) {
                push @all_solutions, [@path];
            }
            return;
        }

        for my $next (2 .. $n) {
            next if $used[$next] || !$squares{$path[-1] + $next};

            $used[$next] = 1;
            push @path, $next;

            $dfs->();

            $used[$next] = 0;
            pop @path;
        }
    };

    $dfs->();
    return @all_solutions;
}
```

### Raku: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-382/mohammad-anwar/raku/ch-1.raku)
***
```raku
sub dfs() {
    if @path.elems == $N {
        return %squares{@path[*-1] + @path[0]} ?? True !! False;
    }

    my $last = @path[*-1];
    for 2 .. $N -> $next {
        next if @used[$next];
        next unless %squares{$last + $next};

        @used[$next] = True;
        @path.push($next);

        return True if dfs();

        @path.pop;
        @used[$next] = False;
    }

    return False;
}
```

### Python: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-382/mohammad-anwar/python/ch-1.py)
***
```python
def gen_all_circles(n):
    limit = int(math.sqrt(2 * n))
    squares = {i * i: 1 for i in range(1, limit + 1)}

    all_solutions = []
    path = [1]
    used = [0] * (n + 1)
    used[1] = 1

    def dfs():
        if len(path) == n:
            if (path[-1] + path[0]) in squares:
                all_solutions.append(list(path))
            return

        for next_val in range(2, n + 1):
            if used[next_val] or (path[-1] + next_val) not in squares:
                continue

            used[next_val] = 1
            path.append(next_val)

            dfs()

            used[next_val] = 0
            path.pop()

    dfs()
    return all_solutions
```

Thank you `Team PWC`, once again.

`Happy Hacking!!`
***

<br>

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `378` &nbsp;&nbsp;|&nbsp;&nbsp; 50 &nbsp;&nbsp;|&nbsp;&nbsp; 28 &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|
|&nbsp;&nbsp; `379` &nbsp;&nbsp;|&nbsp;&nbsp; 45 &nbsp;&nbsp;|&nbsp;&nbsp; 25 &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|
|&nbsp;&nbsp; `380` &nbsp;&nbsp;|&nbsp;&nbsp; 48 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|
|&nbsp;&nbsp; `381` &nbsp;&nbsp;|&nbsp;&nbsp; 43 &nbsp;&nbsp;|&nbsp;&nbsp; 24 &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|
|&nbsp;&nbsp; `382` &nbsp;&nbsp;|&nbsp;&nbsp; 33 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
***

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `378` &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|&nbsp;&nbsp; 89 &nbsp;&nbsp;|&nbsp;&nbsp; 31 &nbsp;&nbsp;|
|&nbsp;&nbsp; `379` &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|&nbsp;&nbsp; 80 &nbsp;&nbsp;|&nbsp;&nbsp; 27 &nbsp;&nbsp;|
|&nbsp;&nbsp; `380` &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|&nbsp;&nbsp; 93 &nbsp;&nbsp;|&nbsp;&nbsp; 29 &nbsp;&nbsp;|
|&nbsp;&nbsp; `381` &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 78 &nbsp;&nbsp;|&nbsp;&nbsp; 26 &nbsp;&nbsp;|
|&nbsp;&nbsp; `382` &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|&nbsp;&nbsp; 51 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|
***

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (4516)
     2. Rust       (1195)
     3. C          (1055)
     4. Ruby       (935)
     5. Haskell    (934)
     6. Lua        (919)
     7. C++        (737)
     8. Go         (722)
     9. JavaScript (648)
    10. Java       (532)

### Blogs with Creative Title
***

#### 1. [Hamiltonian Question Mark](https://raku-musings.com/hamiltonian-question-mark.html) by Arne Sommer.
#### 2. [Hamiltonian Marks](https://github.sommrey.de/the-bears-den/2026/07/17/ch-382.html) by Jorg Sommrey.
#### 3. [The Recursive Challenge](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-382/matthias-muth/README.md) by Matthias Muth.
#### 4. [The World Turned Upside Down!](https://packy.dardan.com/b/uP) by Packy Anderson.
#### 5. [Hamilton’s questions](http://ccgi.campbellsmiths.force9.co.uk/challenge/382) by Peter Campbell Smith.
#### 6. [Questioning the Cycle](https://blog.firedrake.org/archive/2026/07/The_Weekly_Challenge_382__Questioning_the_Cycle.html) by Roger Bell_West.
#### 7. [The Hamiltonian Question](https://dev.to/simongreennet/weekly-challenge-the-hamiltonian-question-4eig) by Simon Green.

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***
#### 1. Commits: 50,589 (`+79`)
#### 2. Pull Requests: 14,426 (`+25`)
#### 3. Contributors: 282 (`+1`)
#### 4. Fork: 353
#### 5. Stars: 218 (`+1`)

## SPONSOR {#SPONSOR}
***
With start of `Week #355`, we have a new sponsor `Marc Perry` until the end of year `2026`. Having said we are looking for more sponsors so that we can go back to weekly winner. If anyone interested please get in touch with us at `perlweeklychallenge@yahoo.com`. Thanks for your support in advance. You can find more informations [**here**](/sponsors).

## RECAP {#RECAP}
***
Quick recap of **[The Weekly Challenge - 382](/blog/recap-challenge-382)** by `Mohammad Sajid Anwar`.

## PERL REVIEW {#PERLREVIEW}
***
If you missed any past reviews then please check out the [**collection**](/p5-reviews).

## RAKU REVIEW {#RAKUREVIEW}
***
If you missed any past reviews then please check out the [**collection**](/p6-reviews).

## CHART {#CHART}
***
Please take a look at the [**charts**](/chart) showing interesting data.

I would like to `THANK` every member of the team for their valuable suggestions. Please do share your experience with us.

## NEW MEMBERS {#NEWMEMBERS}
***

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please try the excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member `Saif Ahmed` of **Team PWC**.

## GUESTS {#GUESTS}
***
Please check out the guest contributions for the [**Week #382**](/blog/guest-contribution/#382).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

## Task 1: Similar List {#TASK1}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given three list of strings.

Write a script to find out if the first two list are similar with the help the third list. The third list contains the similar words map.

#### Example 1

    Input: $list1 = ("great", "acting")
           $list2 = ("fine", "drama")
           $list3 = (["great", "fine"], ["acting", "drama"])
    Output: true

#### Example 2

    Input: $list1 = ("apple", "pie")
           $list2 = ("banana", "pie")
           $list3 = (["apple", "peach"], ["peach", "banana"])
    Output: false

#### Example 3

    Input: $list1 = ("perl4", "python")
           $list2 = ("raku", "python")
           $list3 = (["perl4", "perl5", "raku"])
    Output: true

#### Example 4

    Input: $list1 = ("enjoy", "challenge")
           $list2 = ("love", "weekly", "challenge")
           $list3 = (["enjoy", "love"])
    Output: false

#### Example 5

    Input: $list1 = ("fast", "car")
           $list2 = ("quick", "vehicle")
           $list3 = (["quick", "fast"], ["vehicle", "car"])
    Output: true

## Task 2: Nearest RGB {#TASK2}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given a 6-digit hex color.

Write a script to round the RGB channels to the nearest web-safe value and return the nearest RGB color.

> 00 (0), 33 (51), 66 (102), 99 (153), CC (204) and FF (255)

#### Example 1

    Input: $color = "#F4B2D1"
    Output: "#FF99CC"

    Red: F4 (Decimal 244), closer to 255 => FF
    Green: B2 (Decimal 178), closer to 153 => 99
    Blue: D1 (Decimal 209), closer to 204 => CC
    So the nearest RGB: "#FF99CC"

#### Example 2

    Input: $color = "#15E6E5"
    Output: "#00FFCC"

    Red: 15 (Decimal 21), closer to 0 => 00
    Green: E6 (Decimal 230), closer to 255 => FF
    Blue: E5 (Decimal 229), closer to 204 => CC


#### Example 3

    Input: $color = "#191A65"
    Output: "#003366"

    Red: 19 (Decimal 25), closer to 0 => 00
    Green: 1A (Decimal 26), closer to 51 => 33
    Blue: 65 (Decimal 101), closer to 102 => 66

#### Example 4

    Input: $color = "#2D5A1B"
    Output: "#336633"

    Red: 2D (Decimal 45), closer to 51 => 33
    Green: 5A (Decimal 90), closer to 102 => 66
    Blue: 1B (Decimal 27), closer to 51 => 33

#### Example 5

    Input: $color = "#00FF66"
    Output: "#00FF66"

    Red: 00 (Decimal 0), closer to 0 => 00
    Green: FF (Decimal 255), closer to 255 => FF
    Blue: 66 (Decimal 102), closer to 102 => 66

***
By submitting a response to the challenge you agree that your name or pseudonym, any photograph you supply and any other personal information contained in your submission may be published on this website and the associated mobile app. Last date to submit the solution `23:59 (UK Time) Sunday 26th July 2026`.
