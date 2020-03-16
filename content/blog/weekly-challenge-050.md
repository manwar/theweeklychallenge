---
title: "BLOG: The Weekly Challenge #050"
date: 2020-03-08T00:00:00+00:00
description: "Blog for the weekly challenge #050."
type: post
image: images/blog/weekly-challenge-050.jpg
author: Mohammad S Anwar
tags: ["Perl", "Raku"]
---

I had great fun working with **Merge Intervals** task this week. I didn't know it was going to be more harder to solve than **Noble number** task. Keeping in mind the sample data provided with the task, I came up with solution very quickly. I was very happy with the result.

I then decided to share it on Twitter. Guess what happens next? The master of **Unit Test**, none other than **E. Choroba** himself pointed out that my script can't handle the follow intervals:

> [ [1, 12] [7, 8] [12, 14] [15, 19] ]

I found a bug in my code and fixed it quickly. Do you think it is bug free now?

The short answer is **"No"**.

**Choroba** then asked me to test against these:

>  cmp_deeply(merge_intervals([[1,2],[5,6],[3,4]]), [[1,2],[3,4],[5,6]]);

>  cmp_deeply(merge_intervals([[1,2],[5,6],[2,5]]), [[1,6]]);

>  cmp_deeply(merge_intervals([[1,1],[2,2],[3,3]]), [[1,1],[2,2],[3,3]]);

I found more bug when tested against the above intervals. I fixed the bug and pushed.

Then **Choroba** sent me one more test data:

> [1, 3], [4, 8], [5, 7]

Another bug found and fixed again.

Then came another test data.

> [ [2, 3], [2, 5] ]

By this time it was getting late but then I decided I have to fix it now.

The following day, **E. Choroba** shared his code with many more test data. I decided to test my code against his set of test data. I was happy that my code didn't complain. Check out the end result below:

## Challenge #050 (Task #1)

```perl
#!/usr/bin/perl

use strict;
use warnings;

use Test::More;
use Test::Deep;

cmp_deeply( merge_intervals( [ [1, 12], [7, 8], [12, 14], [15, 19] ] ),
            [ [1, 14], [15, 19] ] );
cmp_deeply( merge_intervals( [ [2, 7], [3, 9], [10, 12], [15, 19], [18, 22] ] ),
            [ [2, 9], [10, 12], [15, 22] ] );
cmp_deeply( merge_intervals( [ [1, 2], [5, 6], [3, 4] ] ),
            [ [1, 2], [3, 4], [5, 6] ] );
cmp_deeply( merge_intervals( [ [1, 2], [5, 6], [2, 5] ] ),
            [ [1, 6] ] );
cmp_deeply( merge_intervals( [ [1, 1], [2, 2], [3, 3] ] ),
            [ [1, 1], [2, 2], [3, 3] ] );
cmp_deeply( merge_intervals( [ [1, 3], [4, 8], [5, 7] ] ),
            [ [1, 3], [4, 8] ] );
cmp_deeply( merge_intervals( [ [2, 3], [2, 5] ] ),
            [ [2, 5] ] );
cmp_deeply( merge_intervals( [ [2, 5], [2, 3] ] ),
            [ [2, 5] ] );

#
#
# Test case borrowed from E. Choroba contributions.
# https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-050/e-choroba/perl/ch-1.pl

cmp_deeply( merge_intervals([[1,2]]), [[1,2]]);
cmp_deeply( merge_intervals([[1,2],[3,4]]), [[1,2],[3,4]]);
cmp_deeply( merge_intervals([[3,4],[1,2]]), [[1,2],[3,4]]);

cmp_deeply( merge_intervals([[2,5],[1,2]]), [[1,5]]);
cmp_deeply( merge_intervals([[2,5],[1,3]]), [[1,5]]);
cmp_deeply( merge_intervals([[2,5],[1,5]]), [[1,5]]);
cmp_deeply( merge_intervals([[2,5],[1,6]]), [[1,6]]);
cmp_deeply( merge_intervals([[2,5],[2,3]]), [[2,5]]);
cmp_deeply( merge_intervals([[2,5],[2,5]]), [[2,5]]);
cmp_deeply( merge_intervals([[2,5],[2,6]]), [[2,6]]);
cmp_deeply( merge_intervals([[2,5],[3,4]]), [[2,5]]);
cmp_deeply( merge_intervals([[2,5],[3,5]]), [[2,5]]);
cmp_deeply( merge_intervals([[2,5],[3,6]]), [[2,6]]);
cmp_deeply( merge_intervals([[2,5],[5,6]]), [[2,6]]);

cmp_deeply( merge_intervals([[1,3],[5,7],[-1,0]]), [[-1,0],[1,3],[5,7]]);
cmp_deeply( merge_intervals([[1,3],[5,7],[-1,1]]), [[-1,3],[5,7]]);
cmp_deeply( merge_intervals([[1,3],[5,7],[-1,2]]), [[-1,3],[5,7]]);
cmp_deeply( merge_intervals([[1,3],[5,7],[-1,3]]), [[-1,3],[5,7]]);
cmp_deeply( merge_intervals([[1,3],[5,7],[-1,4]]), [[-1,4],[5,7]]);
cmp_deeply( merge_intervals([[1,3],[5,7],[-1,5]]), [[-1,7]]);
cmp_deeply( merge_intervals([[1,3],[5,7],[-1,6]]), [[-1,7]]);
cmp_deeply( merge_intervals([[1,3],[5,7],[-1,7]]), [[-1,7]]);
cmp_deeply( merge_intervals([[1,3],[5,7],[-1,8]]), [[-1,8]]);

cmp_deeply( merge_intervals([[1,3],[5,7],[1,2]]), [[1,3],[5,7]]);
cmp_deeply( merge_intervals([[1,3],[5,7],[1,3]]), [[1,3],[5,7]]);
cmp_deeply( merge_intervals([[1,3],[5,7],[1,4]]), [[1,4],[5,7]]);
cmp_deeply( merge_intervals([[1,3],[5,7],[1,5]]), [[1,7]]);
cmp_deeply( merge_intervals([[1,3],[5,7],[1,6]]), [[1,7]]);
cmp_deeply( merge_intervals([[1,3],[5,7],[1,7]]), [[1,7]]);
cmp_deeply( merge_intervals([[1,3],[5,7],[1,8]]), [[1,8]]);

cmp_deeply( merge_intervals([[1,3],[5,7],[2,2]]), [[1,3],[5,7]]);
cmp_deeply( merge_intervals([[1,3],[5,7],[2,3]]), [[1,3],[5,7]]);
cmp_deeply( merge_intervals([[1,3],[5,7],[2,4]]), [[1,4],[5,7]]);
cmp_deeply( merge_intervals([[1,3],[5,7],[2,5]]), [[1,7]]);
cmp_deeply( merge_intervals([[1,3],[5,7],[2,6]]), [[1,7]]);
cmp_deeply( merge_intervals([[1,3],[5,7],[2,7]]), [[1,7]]);
cmp_deeply( merge_intervals([[1,3],[5,7],[2,8]]), [[1,8]]);

cmp_deeply( merge_intervals([[1,3],[5,7],[3,3]]), [[1,3],[5,7]]);
cmp_deeply( merge_intervals([[1,3],[5,7],[3,4]]), [[1,4],[5,7]]);
cmp_deeply( merge_intervals([[1,3],[5,7],[3,5]]), [[1,7]]);
cmp_deeply( merge_intervals([[1,3],[5,7],[3,6]]), [[1,7]]);
cmp_deeply( merge_intervals([[1,3],[5,7],[3,7]]), [[1,7]]);
cmp_deeply( merge_intervals([[1,3],[5,7],[3,8]]), [[1,8]]);

cmp_deeply( merge_intervals([[1,3],[5,7],[4,4]]), [[1,3],[4,4],[5,7]]);
cmp_deeply( merge_intervals([[1,3],[5,7],[4,5]]), [[1,3],[4,7]]);
cmp_deeply( merge_intervals([[1,3],[5,7],[4,6]]), [[1,3],[4,7]]);
cmp_deeply( merge_intervals([[1,3],[5,7],[4,7]]), [[1,3],[4,7]]);
cmp_deeply( merge_intervals([[1,3],[5,7],[4,8]]), [[1,3],[4,8]]);

cmp_deeply( merge_intervals([[1,3],[5,7],[5,5]]), [[1,3],[5,7]]);
cmp_deeply( merge_intervals([[1,3],[5,7],[5,6]]), [[1,3],[5,7]]);
cmp_deeply( merge_intervals([[1,3],[5,7],[5,7]]), [[1,3],[5,7]]);
cmp_deeply( merge_intervals([[1,3],[5,7],[5,8]]), [[1,3],[5,8]]);

cmp_deeply( merge_intervals([[1,3],[5,7],[6,6]]), [[1,3],[5,7]]);
cmp_deeply( merge_intervals([[1,3],[5,7],[6,7]]), [[1,3],[5,7]]);
cmp_deeply( merge_intervals([[1,3],[5,7],[6,8]]), [[1,3],[5,8]]);

cmp_deeply( merge_intervals([[1,3],[5,7],[7,7]]), [[1,3],[5,7]]);
cmp_deeply( merge_intervals([[1,3],[5,7],[7,8]]), [[1,3],[5,8]]);

cmp_deeply( merge_intervals([[1,3],[5,7],[8,8]]), [[1,3],[5,7],[8,8]]);

cmp_deeply( merge_intervals([[1,2],[5,6],[3,4]]), [[1,2],[3,4],[5,6]]);
cmp_deeply( merge_intervals([[1,2],[5,6],[2,5]]), [[1,6]]);
cmp_deeply( merge_intervals([[1,1],[2,2],[3,3]]), [[1,1],[2,2],[3,3]]);

cmp_deeply( merge_intervals([[0,6],[7,8],[12,19],[3,8]]), [[0,8],[12,19]]);
cmp_deeply( merge_intervals([[12,14],[15,19],[7,8],[1,12]]), [[1,14],[15,19]]);
cmp_deeply( merge_intervals([[12,17],[18,18],[9,9],[5,17]]), [[5,17],[18,18]]);

cmp_deeply( merge_intervals([[2,7],[3,9],[10,12],[15,19],[18,22]]), [[2,9],[10,12],[15,22]]);

done_testing();

#
#
# METHODS

sub merge_intervals {
    my ($intervals) = @_;

    my $k;
    my $l;
    my $m;

    $intervals = _order_intervals($intervals);

    foreach my $interval (@$intervals) {
        my $i = $interval->[0];

        if (defined $l && defined $k) {
            if (($i <= $l) || ($k == $i)) {
                $k = $interval->[1];
                if ($m->[-1]->[1] < $k) {
                    $m->[-1]->[1] = $k;
                }
                next;
            }
        }

        my ($j, $_k) = _merge_intervals($interval->[1], $intervals);

        if ($j < $interval->[1]) {
            $j = $interval->[1];
        }

        push @$m, [$i, $j];

        $k = $_k;
        $l = $j;
    }

    return $m;
}

sub _order_intervals {
    my ($intervals) = @_;

    my @intervals = ();
    foreach my $i (@$intervals) {
        push @intervals, sprintf("%d-%d", $i->[0], $i->[1]);
    }

    # Borrowed with input from E. Choroba
    # https://stackoverflow.com/questions/27089498/sorting-arrays-of-intervals-in-perl
    my @_sorted = sort {
        my ($a1, $a2) = $a =~ /-?\d+/g;
        my ($b1, $b2) = $b =~ /-?\d+/g;
        $a1 <=> $b1 || $a2 <=> $b2;
    } @intervals;

    my $sorted = [];
    foreach (@_sorted) {
        my ($a, $b) = split /(?<=\d)-(?=\d)/, $_, 2;
        push @$sorted, [ $a+0, $b+0 ];
    }

    return $sorted;
}

sub _merge_intervals {
    my ($j, $intervals) = @_;

    my $_j = $j;
    my $_i;
    foreach my $i (@$intervals) {
        if ($i->[0] <= $j) {
            $_j = $i->[1];
            $_i = $i->[0];
        }
    }

    return ($_j, $_i);
}
```

---

## Challenge #050 (Task #2)

The **Noble number** task turned out to be straight forward. I still had fun working with it.

```perl
#!/usr/bin/perl

use strict;
use warnings;

use List::Util 1.54 qw(sample);

my $COUNT = $ARGV[0] || 3;

my @L = sort { $a <=> $b } sample ($COUNT, (1 .. 50));
my $N = find_noble_number(@L);

(defined $N)
?
(print "Found Noble number $N.\n")
:
(print "None Noble number found.\n");

#
#
# METHOD

sub find_noble_number {
    my (@L) = @_;

    foreach my $N (@L) {
        return $N if (scalar( grep { $_ > $N } @L ) == $N);
    }

    return;
}
```

---

Now it is time to translate the **Perl** solutions into **Raku**. I decided to do the **Noble number** task first.

```perl
#!/usr/bin/env perl6

use v6;

sub MAIN(Int $count = 3) {
    my @L = (1..50).pick($count);
    find-noble-number(@L);
}

sub find-noble-number(@L) {
    for @L -> $N {
        say "Found noble number [$N] in the list [" ~ @L.Str ~ "]."
            if ((grep { .Int > $N }, @L).elems == $N);
    }
}
```

I must confess every time I do **Raku** solution I feel proud of myself. I am gaining confidence dealing with **Raku** every week. With the power of **Raku**, I simply used **pick** with **$count** to fetch fixed number of random elements from the list.

> my @L = (1..50).pick($count);

The above line tells how powerful is **Raku**.

I also love how you name method, e.g. **find-noble-number()**, no more **underscore** and no parenthesis around condition block. Don't you love this?

> for @L -> $N {

Also string concatenation uses **~**, I have to keep reminding myself about it.

Last but not the least **elems** to return the list count, isn't cool?

Finally I had **Raku** solution that works as expected.

That's it for this week. Speak to you soon.
