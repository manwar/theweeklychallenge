---
title: "Advent Calendar - December 1, 2020"
date: 2020-12-01T00:00:00+00:00
description: "Advent Calendar - December 1, 2020."
type: post
image: images/blog/2020-12-01.jpg
author: Jaldhar H. Vyas
tags: ["Perl", "Raku"]
---

[**Advent Calendar 2020**](/blog/advent-calendar-2020)
***

The gift is presented by [**Jaldhar H. Vyas**](https://perlweeklychallenge.org/blog/meet-the-champion-014). Today he is talking about his solutions to [**"The Weekly Challenge - 042"**](/blog/perl-weekly-challenge-042).

***

### Octal Number System

Write a script to print decimal number 0 to 50 in Octal Number System.

For example:

    Decimal 0 = Octal 0
    Decimal 1 = Octal 1
    Decimal 2 = Octal 2
    Decimal 3 = Octal 3
    Decimal 4 = Octal 4
    Decimal 5 = Octal 5
    Decimal 6 = Octal 6
    Decimal 7 = Octal 7
    Decimal 8 = Octal 10

***

Fortunately, Mohammed has eased my re-entry with an easy task. This can be done as a one-liner. Here is the Perl version:

```perl
$ perl -e 'map { printf "Decimal %d = Octal %o\n", $_, $_ } (0 .. 50);'
```

...and this is Raku:

```perl6
$ perl6 -e '[0 .. 50].map({ printf("Deciamal %d = Octal %o\n", $_, $_) });'
```

***

### Balanced Brackets

Write a script to generate a string with random number of ( and ) brackets. Then make the script validate the string if it has balanced brackets.

For example:

    () - OK
    (()) - OK
    )( - NOT OK
    ())() - NOT OK

***

There are two interesting parts to this problem; one, randomly generating sequences of brackets, and two, finding if they are balanced or not.

I did not want to make the sequences too long as if they were purely randomly chosen, it would substantially increase the chance of the sequence being unbalanced. Also I didn't want the sequence to be of odd length as that would automatically mean it was unbalanced. So in all, what I wanted is for sequences which are 2, 4, or 6 brackets only.

In perl I did it like this:

```perl
my @brackets;

for (1 .. ((int rand 3) + 1) * 2) {
    push @brackets, (int rand 2 ? '(' : ')');
}
```

`int rand 3` gives a number between 0 to 2. Adding 1 makes it 1 to 3 and mutiplying by 2 gives 2, 4, or 6.

Inside the loop, int rand 2 gives the values 0 or 1 which are used to select the left or right bracket which is then added to the @brackets array.

This is the Raku version:

```perl6
for 1 .. (2, 4, 6).pick {
    @brackets.push(Bool.pick ?? '(' !! ')');
}
```

Raku has the nifty `.pick` method which chooses one of a list of values. Much simpler. For choosing the bracket too, `.pick` can be used. In this case, it is called directly on the `Bool` class to give a `True` or `False` value.

Now we have a sequence of brackets, we can do the second task, determining if the brackets are balanced. The simplest way to do that is with a stack. When we see a left bracket, it is pushed onto the stack. When we see a right bracket, it is popped off again. If after examining the entire sequence, the stack is empty, it means the brackets are balanced. In Perl it looks like this:

```perl
sub isBalanced {
    my ($brackets) = @_;
    my @stack;

    map {
        if ( $brackets->[$_] eq '(' ) {
            push @stack, '(';
        } else {
            if (!scalar @stack) {
                return undef;
            }
            pop @stack;
        }
    } (0 .. scalar @{$brackets} - 1);

    return scalar @stack == 0;
}
```

One small optimization is that if we attempt to pop an empty stack, we can immediately return false because we know the sequence is unbalanced. (E,g, this can happen if the sequence begins with an end bracket.) As perl does not have a true boolean data type, the function returns undef which is always a false value in boolean context.

This is the Raku version:

```perl6
sub isBalanced(@brackets) {
    my @stack;

    (0 ..^ @brackets.elems).map({
        if @brackets[$_] ~~ '(' {
            @stack.push( '(' );
        } else {
            if !@stack.elems {
                return False;
            }
            @stack.pop;
        }
    });

    return @stack.elems == 0;
}
```

it is mostly the same but Raku has small conveniences which make the code simpler and more legible such as proper function prototypes, a boolean type and the ability to exclude one or both ends of a range (^.., ..^ which is used here, or ^..^)

***
If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

[**Advent Calendar 2020**](/blog/advent-calendar-2020)
