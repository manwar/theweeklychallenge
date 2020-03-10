---
title: "BLOG: The Weekly Challenge #051"
date: 2020-03-10T00:00:00+00:00
description: "Blog for the weekly challenge #051."
type: post
image: images/blog/weekly-challenge-051.jpg
author: Mohammad S Anwar
tags: ["Perl", "Raku"]
---

I am really enjoying the weekly challenges, specially doing in **Raku**. The point of blogging is also about sharing my fight with **Raku**. I hardly write anything about my **Perl** solution as I don't see anything new to talk about. Having said that, I still go for **Perl** first as it is my first love and will remain so rest of my life. Even today, my brain is so tuned to **Perl**, every ideas come in form and shape of **Perl** only. I started contributing in the **[Week #46](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-046/mohammad-anwar/perl)**. I could only find time to do **Perl** solutions in the **[Week #46](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-046/mohammad-anwar/perl)**. The following **[Week #47](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-047/mohammad-anwar/perl)** was the same as I didn't get to do **Raku**. It was the **[Week #48](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-048/mohammad-anwar/perl)** when I managed to find time to do both **Perl** and **Raku** for the first time. Ever since I have been able to contribute every week in both languages. I would give the credit to the fellow **Team PWC** member, **Ryan Thompson**, for helping me with the **[Perl](https://perlweeklychallenge.org/p5-reviews)** and **[Raku](https://perlweeklychallenge.org/p6-reviews)** reviews.

***
***

# PERL

***
***

## Task #1: 3 Sum (**Perl**)

***

The **3 Sum** task is dealt with brute force method. I must admit, I loved the end result in **Perl**. It may not be the **fastest** as far as the performance is concerned but it looked like **poetry** to me.

```perl
#!/usr/bin/perl

use strict;
use warnings;

my @L = (-25, -10, -7, -3, 2, 4, 8, 10);
my $S = $#L;
my $T = 0;

foreach my $i (0 .. $S) {
    foreach my $j (0 .. $S) {
        next if ($i == $j);
        foreach my $k (0 .. $S) {
            next if (($k == $i) || ($k == $j));
            print sprintf("[%d, %d, %d]\n", $L[$i], $L[$j], $L[$k])
                if ($L[$i] + $L[$j] + $L[$k] == $T);
        }
    }
}
```

***

## Task #2: Colorful Number (**Perl**)

***

The **Colorful Number** was very fun to solve. Let me confess, when I came up with the challenge, I didn't realise it was going to be so fun. If you are active on **[Twitter](https://twitter.com/PerlWChallenge)** then you will find out what I am talking about. There was so much informative discussion going on with regard to this task, mostly from the **Raku** point of view. I followed the conversation very closely as you get to learn so much out of it.Doing the weekly challenges introduced me to the **CPAN** module **[List::Util](https://metacpan.org/pod/List::Util)**. Having the module handy makes life so easy, is unbelievable. I have high regards to all the contributors and maintainers of **CPAN** modules. You can't imagine a life without **CPAN**. Before I would come up with my own handy method to do the task but not any more.

```perl
#!/usr/bin/perl

use strict;
use warnings;

use List::Util 1.45 qw(uniq);

foreach my $i (234 .. 987) {
    my @N = split //, $i;
    # Only try if all three digits are unique.
    next if ( scalar(uniq(@N)) != scalar(@N) );

    my @S = ($N[0], $N[1], $N[2], ($N[0] * $N[1]), ($N[1] * $N[2]), ($N[0] * $N[1] * $N[2]));

    print "[$i] => [", join(", ", @S), "]\n"
        if ( scalar(uniq(@S)) == scalar(@S) );
}
```

***
***

# RAKU

***
***

Here comes the fun, **Perl** developer talking about **Raku**. I must confess that I am still learning the basics. Having said that I feel confident enough to face the challenge. Did you notice one thing, this week challenge relies heavily on the **list**. So I looked up official **Raku** documentation to get my head around and find out how to work with **list**. I noticed there is a class called **[List](https://docs.raku.org/type/List)** in **Raku**. I also found something similar, a class called **[Array](https://docs.raku.org/type/Array)**. At this point, I was confused what is the differene between **List** and **Array** in **Raku**.

I asked for advice on **[Twitter](https://twitter.com/PerlWChallenge)**.

![Difference between List and Array](/images/blog/pwc-51-01.png)

**Scimon Proctor** replied to my query first.

![First response](/images/blog/pwc-51-02.png)

Followed by another response by **Herbert Bollermann**

![Follow up](/images/blog/pwc-51-03.png)

With all the knowledge handy, I was ready to get my hand dirty. I decided to use  **Array** to deal with **3 Sum** task. I found handy method **[elems](https://docs.raku.org/type/Array#method_elems)** as described in official documentation.

    method elems(Array:D: --> Int:D)

    Returns the number of elements in the invocant.

Other than that nothing new to me.

***

## Task #1: 3 Sum (**Raku**)

***

```perl6
#!/usr/bin/env perl6

use v6;

sub MAIN() {
    my @L = (-25, -10, -7, -3, 2, 4, 8, 10);
    my $S = @L.elems - 1;
    my $T = 0;

    for 0 .. $S -> $i {
        for 0 .. $S -> $j {
            next if $i == $j;
            for 0 .. $S -> $k {
                next if ($k == $i) || ($k == $j);
                say "[" ~ @L[$i] ~ ", " ~ @L[$j] ~ ", " ~ @L[$k] ~ "]"
                    if @L[$i] + @L[$j] + @L[$k] == $T;
            }
        }
    }
}
```

***

## Task #2: Colorful Number (**Raku**)

***

The **Colorful number** task involved more as compare to the other task. I decided to split the 3 digits number, so looked up in the documentation for the help. I found **[Str](https://docs.raku.org/type/Str)** class very handy. There is a method **[comb()](https://docs.raku.org/type/Str#routine_comb)** provided by **Str** class. With the power method chaining of **Raku**, the line below does the following:

```perl6
   my $j = $i.comb.unique.join;
```

    1) split the number

    2) removes duplicate integer

    3) joins all back

Other than this, nothing new to talk about except `@S.unique.elems`, removing duplicate entry from the list and return the count.

```perl6
#!/usr/bin/env perl6

use v6;

sub MAIN() {

    for 234 .. 987 -> $i {
        my $j = $i.comb.unique.join;
        # Only try if all three digits are unique.
        next if $i != $j;

        my @N = $i.comb;
        my @S = (@N[0], @N[1], @N[2], (@N[0] * @N[1]), (@N[1] * @N[2]), (@N[0] * @N[1] * @N[2]));

        say "[$i] => [" ~ @S.join(", ") ~ "]" if @S.unique.elems == @S.elems;
    }
}
```

That's it for this week. Speak to you soon.
