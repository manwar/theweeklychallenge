---
title: "Advent Calendar - December 17, 2024"
date: 2024-12-17T00:00:00+00:00
description: "Advent Calendar - December 17, 2024."
type: post
image: images/blog/2024-12-17.jpg
author: E. Choroba
tags: ["Perl"]
---

## [**Advent Calendar 2024**](/blog/advent-calendar-2024)
### | &nbsp; [**Day 16**](/blog/advent-calendar-2024-12-16) &nbsp; | &nbsp; **Day 17** &nbsp; |
***

The gift is presented by `E. Choroba`. Today he is talking about his solution to [**The Weekly Challenge - 287**](/blog/perl-weekly-challenge-287). This is re-produced for `Advent Calendar 2024` from the original [**post**](https://blogs.perl.org/users/e_choroba/2024/09/strong-password.html).

***

<br>

## Strong Password
***

<br>

    You are given a string, $str.

    Write a program to return the minimum number of steps required to make the given string very strong password. If it is already strong then return 0.

<br>

### Criteria:
***

<br>

    - It must have at least 6 characters.
    - It must contains at least one lowercase letter, at least one upper case letter and at least one digit.
    - It shouldn’t contain 3 repeating characters in a row.

<br>

### Following can be considered as one step:

<br>

    - Insert one character;
    - Delete one character;
    - Replace one character with another.

<br>

### A Simplification
***

<br>

To make the algorithm simpler, let’s ignore deletion. Instead of deleting a character, we can always replace it with a character different to the original one and its neighbours (you can easily verify that it can’t break any of the three criteria: it doesn’t shorten the password, it doesn’t remove more characters than the deletion would have deleted, and it never creates repeating characters).

<br>

### The Algorithm
***

<br>

Let’s keep a set of strings we need to check, we’ll call them the agenda. At the start of the program, the agenda contains the input string.

We run in a loop. In each iteration of the loop, we check each string in the agenda. If it’s a strong password, we are done and we return the number of iterations. Otherwise, we try to improve the string by applying one of the permitted operations, i.e. inserting a character, or replacing one; and we store the improved string(s) into the agenda for the next iteration.

How can we improve a string? If it’s shorter than `6 characters`, we can make it longer. To keep the algorithm simple, we can generate three possible longer strings: one by appending a lower case letter, one by appending an upper case letter, and one by appending a digit. Which letter or digit should we use? We can use `a`, `A`, and `0`, but if the string already ends in one of them, let’s use `b`, `B`, or `1` instead, to prevent creating a sequence of 3 repeating characters accidentally.

Now, if the string already has the required length, we can check the remaining criteria. If the string is missing a character of a required class, we can improve it by replacing one of the present characters by a character from the class. Instead of speculating which character to replace, we can simply try replacing all the characters one by one; and similarly to find which character to use as a replacement, we can try all of them. To avoid generating too many useless strings, we can only skip the ones where the character being replaced or any of its neighbours are already in the same class as the replacement, and only use one replacement from each class: e.g. in a substring `aa0`, the middle character will be replaced by A (using a lower case letter or a digit doesn’t improve the string, trying B doesn’t bring anything new).

If the string contains `3 repeating characters` in a row, we need to replace the character in the middle of the sequence by a different one. Instead of analysing the string to find out which character to replace by what, we can use the same method as described above: just try replacing all the characters by all possible characters. Again, when replacing the middle character in `aaa`, we’re skipping `aba` etc. and only trying `aAa` and `a0a`—they not only break the sequence, but also potentially introduce a missing class.

This is the resulting code:

<br>

```perl
#!/usr/bin/perl
use warnings;
use strict;
use experimental qw( signatures );

sub strong_password($str) {
    my %agenda = ($str => undef);

    my $steps = 0;
    while (1) {
        my %next;
        for my $s (keys %agenda) {

            if (6 > length $s) {
                for my $char ($s =~ /[aA0]$/ ? qw( b B 1 ) : qw( a A 0 )) {
                    undef $next{ $s . $char };
                }
            } elsif ($s !~ /[[:lower:]]/
                     || $s !~ /[[:upper:]]/
                     || $s !~ /[0-9]/
                     || $s =~ /(.)\1\1/
            ) {
                for my $l (0 .. length($s) - 1) {

                    my $this      = substr $s, $l, 1;
                    my $previous  = $l > 0 ? substr $s, $l - 1, 1 : 'a';
                    my $following = $l == length($s) - 1
                                    ? 'a'
                                    : substr $s, $l + 1, 1;

                    my $match;
                    $match .= /[a-z]/ ? 'a-z'
                            : /[A-Z]/ ? 'A-Z'
                            :           '0-9' for $previous, $this, $following;

                    undef $next{ substr($s, 0, $l) . $_ . substr($s, $l + 1) }
                        for grep /[^$match]/, qw( 0 a A );
                }
            } else {
                return $steps
            }
        }
        %agenda = %next;
        ++$steps;
    }
}
```

<br>

Here are some tests. Note that `Example 5` had a wrong answer (`3` instead of `2`) initially.

<br>

```perl
use Test::More tests => 5 + 3;

is strong_password('a'), 5, 'Example 1';
is strong_password('aB2'), 3, 'Example 2';
is strong_password('PaaSW0rd'), 0, 'Example 3';
is strong_password('Paaasw0rd'), 1, 'Example 4';
is strong_password('aaaaa'), 2, 'Example 5';

is strong_password('aaaZZZ999'), 3, 'Repeated triplets';
is strong_password('0Zaaab'), 1, 'Creating a triple';
is strong_password('000aaa000'), 3, 'Combined actions';
```

<br>

### Further Optimisation
***

<br>

The code is rather simple, but it does a lot of useless work. What benefit could we get if we analysed the string to generate fewer strings for each next step?

For the repeated characters, we can try replacing only the middle character in `each group of 3`. Again, the replacement must be of a different class than the repeated characters.

For the missing classes, we can count how many instances of each class there are in the string. We can then find the first instance of a class that appears more than once and replace it with an instance of the missing one. If two classes are missing, the second missing class will be handled in the next step. Wait, you might ask, what if there’s no class with more than one instance? Well, we still handle the length first, so we’re dealing with strings of length at least `6`, so there must be at least `one class` with at least `2` instances.

This is the final code:

<br>

```perl
sub strong_password($str) {
    my %agenda = ($str => undef);

    my $steps = 0;
    while (1) {
        my %next;
        for my $s (keys %agenda) {

            if (6 > length $s) {
                for my $char ($s =~ /[aA0]$/ ? qw( b B 1 ) : qw( a A 0 )) {
                    undef $next{ $s . $char };
                }

            } elsif ($s =~ /(.)\1\1/) {
                while ($s =~ /(.)(?=\1\1)/g) {
                    my $l = $-[0] + 1;
                    my $this = $1;
                    my $re = $this =~ tr/[a-z]// ? 'a-z'
                           : $this =~ tr/[A-Z]// ? 'A-Z'
                           :                       '0-9';

                    undef $next{ substr($s, 0, $l) . $_ . substr($s, $l + 1) }
                        for grep /[^$re]/, qw( 0 a A );
                }

            } else {
                my %count;
                $count{'a-z'} = $s =~ tr/a-z//;
                $count{'A-Z'} = $s =~ tr/A-Z//;
                $count{'0-9'} = $s =~ tr/0-9//;

                return $steps
                    if ! grep 0 == $_, values %count;

                my ($repeated, $replacement);
                for my $class (qw( a-z A-Z 0-9 )) {
                    $repeated = $class if $count{$class} > 1;
                    $replacement = substr $class, 0, 1 if 0 == $count{$class};
                }
                undef $next{ $s =~ s/[$repeated]/$replacement/r };
            }
        }
        %agenda = %next;
        ++$steps;
    }
}
```

<br>

I used the following benchmark, generating `1000 random passwords`:

<br>

```perl
my @inputs;
for (1 .. 1000) {
    my $s = join "", map +('a' .. 'z', 'A' .. 'Z', 0 .. 9)[rand 62],
                     1 .. rand 15;
    strong_password_optimised($s) == strong_password_original($s)
        or die "Diff $s.\n";
    push @inputs, $s;
}

use Benchmark qw{ cmpthese };
cmpthese(-3, {
    original  => sub { strong_password_original($_)  for @inputs },
    optimised => sub { strong_password_optimised($_) for @inputs }
});

__END__

            Rate  original optimised
original  10.8/s        --      -24%
optimised 14.2/s       31%        --
```

<br>

***

If you have any suggestion then please do share with us **<perlweeklychallenge@yahoo.com>**.

| &nbsp; [**Advent Calendar 2024**](/blog/advent-calendar-2024) &nbsp; |
