---
title: "Advent Calendar - December 15, 2024"
date: 2024-12-15T00:00:00+00:00
description: "Advent Calendar - December 15, 2024."
type: post
image: images/blog/2024-12-15.jpg
author: Lance Wicks
tags: ["Perl"]
---

## [**Advent Calendar 2024**](/blog/advent-calendar-2024)
### | &nbsp; [**Day 14**](/blog/advent-calendar-2024-12-14) &nbsp; | &nbsp; **Day 15** &nbsp; | &nbsp; [**Day 16**](/blog/advent-calendar-2024-12-16) &nbsp; |
***

The gift is presented by `Lance Wicks`. Today he is talking about his solution to [**The Weekly Challenge - 221**](/blog/perl-weekly-challenge-221). This is re-produced for `Advent Calendar 2024` from the original [**post**](https://perl.kiwi/tales/2023/06/18/tdd-for-good-strings/).

***

<br>

## TDD for Good... strings
***

<br>

One of the things about `Test Driven Development (TDD)` is that it's something that takes practice. A great way to do that is via the amazing [**Weekly Challenge**](https://theweeklychallenge.org) which is led by the amazing [**Mohammad Anwar**](https://manwar.org). `Mohammad` is a force for good in the `Perl` community and this week I wanted to take the time to thank him and express how much I appreciate him and wish him well always... but especially at the moment when he faces some challenges! `Kia Kaha` my friend!

The first challenge [**this week**](https://theweeklychallenge.org/blog/perl-weekly-challenge-221/) was to develop some software to calculate a sum of the lengths of `"Good Strings"` where a good string is described as:

<br>

    A string is good if it can be formed by characters from $chars, each character can be used only once.

<br>

For me this starts with creating a `.t` test file. Yes, a test file first. I use `Test2::V0` and target a module to test, so something like this:

<br>

```perl
use Test2::V0 -target => 'Good::Strings';
ok 1;
done_testing;
```

<br>

This fails as I have not created the module file yet.

So my next step is to create a `package/module` in a `lib` directory, with this as content:

<br>

```perl
package Good::Strings;

1;
```

<br>

Then I run my tests again. I make lots of typo mistakes; so running my tests regularly/constantly and making small changes helps prevent those small mistakes causing frustration. To help me, I like to run the tests automatically. My current tooling (when working purely from terminal session) is to run my tests in a separate window like this:

<br>

```perl
git ls-files -mo | entr -s 'yath'
```

<br>

What the above does is use `entr` to watch a selection of files, which it gets from `git`. So each time I save a file, `yath` gets fired and it runs my tests.

Once I have confirmed that the test file is able to open the package, no syntax errors etc. It's time to write first test, against the first example:

<br>

```perl
use Test2::V0 -target => 'Good::Strings';

subtest "Example 1" => sub {
    my @words    = ( "cat", "bt", "hat", "tree" );
    my $chars    = "atach";
    my $expected = 6;

    is $CLASS->sum_lengths(
        words => \@words,
        chars => $chars,
    ), $expected;

};

done_testing;
```

<br>

This fails as expected as there is no `sum_lengths` method/sub in the package. So I add that `sub sum_lengths{};` this fails in a different way. This time the test calls the method successfully; but it the method itself is not returning the right answer... so I change it to `sub sum_legths { return 6; }`. At this point I am `"green"` and the code does exactly what is required for it.

It does not do any real calculations, and that is the right thing to do in a `TDD` exercise. Each steps you take wants to be tiny. You want to make the smallest step you can each time. Do the smallest thing that makes the tests pass; including hard-coding the return value as we don't need to do anything else to make the test pass. It seems silly; but it does a couple of good things. First teaches you not to try and solve the whole problem at once. As a professional software developer... we do that all too often. Rather than solving the small easy problem immediately in front of us; we will try and solve the bigger problems whilst solving small problems. The cognitive load is hard to manage. We constantly run the risk of over complicating things and is a recipe for disaster. So intentionally practising doing the smallest change that meets the immediate requirement is good for discouraging that trap. The other thing it helps with is catching the human errors; typos, spelling mistakes, syntax errors and the ever threatening missing semi-colon. As a developer you need to plan for human error; not pretend we can be perfect.

Having reached this point, I'd normally commit the change; grab your favourite beverage, take a moment and look at what the next requirement (in this case, `example 2`) and whilst hydrating it's a chance to think about how the code needs to change. Again, this is a good habit that working in a `TDD` manner encourages; stopping, thinking, moving forward.

So as you'd expect, I start by adding a new test:

<br>

```perl
subtest "Example 2" => sub {
    my @words    = ( "hello", "world", "challenge" );
    my $chars    = "welldonehopper";
    my $expected = 10;

    is $CLASS->sum_lengths(
        words => \@words,
        chars => $chars,
    ), $expected;
};
```

<br>

This test fails because the code always returns `6` so, now is the right time to change the function to make this test pass.

I'm going to skip over the repeated cycles I took to get to a working solution... why, because it was probably 50 small steps... and that would be dull. It included things like alternating between passing named parameters to using `sub signatures` (still a `Perl` feature I don't use as often so decided to use it for educational purposes). I decided not to explore using a `CPAN` module like `List::MoreUtils` and wrote a really ugly solution... but one that worked. Here it is:

<br>

```perl
sub sum_lengths ( $self, $words, $chars ) {
    my @chars_array = sort split '', $chars;
    my %chars_hash  = map { $_ => $_ } @chars_array;

    my $char_count = 0;
    for my $word (@$words) {
        my @word_array = split '', $word;

        my $built_word;
        for my $char (@word_array) {
            $built_word .= $chars_hash{$char} if $chars_hash{$char};
        }
        $char_count += @word_array if $word eq $built_word;

    }

    return $char_count;
}
```

<br>

At this point I stopped and had another coffee, coming back to the screen I realised I had stopped doing good `TDD`. I'd written a lot of code without actually having tests supporting that beyond the larger view of if it worked. I'd used `Data::Dumper` and warn to check what the code was doing rather than a test. This happens a lot in `"the real word"`, as a developer you cut corners. Mainly when you think you know what you want to do. Your intuition leads you to skipping some steps. Coming back to this code after a break, I was able to see I had `"cheated"`.

This is part of the reason to practice `TDD` on non-work code. I get that chance to see the behaviour on a exercise; not on my employers production code. It's good to remind myself that I am fallible; even when intention is to do `TDD`... I skip to intuitive coding. No harm done and it works... but the steps went from small to large. If someone was looking at this as a merge request... they have more code to understand, there is no story of what I approached, why, etc.

This is a micro demonstration; it's good for me to see it here; much better writing this poorly here than doing it at work and making my colleagues suffer a big change that is ugly. What was/is interesting also; is that I felt tired mentally after this change (hence the coffee break). That was in part because of duration; but also because without the `TDD` it was one big block of concentration without the micro-breaks that come from `TDD test`, `change`, `test`, `change`, `test`, `change` cycles.

Having `"solved"` the problem, both the examples are passing at this stage. I have met the `"business requirements"`. Now is the time to refactor and improve on what I know is a `"sub-optimal"` solution. Time to TDD this, TDD in fact makes this easier I think.

So how might we refactor this?

Well the code that build the word looks like a likely candidate, in part because a loop inside a loop is never a good look. So we can try refactoring that out into a sub, something like this:

<br>

```perl
subtest "_build_word" => sub {
    is $CLASS->_build_word(
        word  => 'cat',
        chars => {
            c => 'c',
            a => 'a',
            t => 't',
        },
        ),
        'cat';
};
```

<br>

Then we can make the `sum_lengths` sub look like this:

<br>

```perl
sub sum_lengths ( $self, $words, $chars ) {
    my @chars_array = sort split '', $chars;
    my %chars_hash  = map { $_ => $_ } @chars_array;

    my $char_count = 0;

    for my $word (@$words) {
        my @word_array = split '', $word;

        my $built_word = $self->_build_word(
            word  => $word,
            chars => \%chars_hash,
        );

        $char_count += @word_array if $word eq $built_word;
    }

    return $char_count;
}
```

<br>

So that is a little cleaner; it's perhaps easier to follow that we loop around the words. Looking at this, we can see that the only reason why we split the word into an array is to tell us how many characters to add to the count. This is a idiomatic `Perl` trick where an array in scalar context returns the number of elements of the array. It's a bit magical... and not necessary. We can use `Perl` length function to achieve the same thing. Which is both shorter and probably easier for others to understand (especially non Perl natives).

<br>

```perl
sub _build_word {
    my ( $self, %params ) = @_;

    my @word_array = split '', $params{word};

    my $built_word;
    for my $char (@word_array) {
        $built_word .= $params{chars}{$char} if $params{chars}{$char};
    }

    return $built_word;
}
```

<br>

What is important here is that because I have tests, I know immediately that I've not broken the functionality. So I can make my refactorings with confidence. Because I have confidence in not breaking the functionality, I can experiment with the code and see if I can hone it.

This freedom also lets me test a bit more thoroughly, doing a little exploration of edge cases. Such as `"what happens if we can't build any words"`, so I can add another test:

<br>

```perl
subtest "Edge case: unable to build any words" => sub {
    my @words    = ( "hello", "world", "challenge" );
    my $chars    = "xxx";
    my $expected = 0;

    is $CLASS->sum_lengths( \@words, $chars, ), $expected;
};
```

<br>

This test passes... BUT; we get a warning as we `Perl` does not like us using eq on $build_word when it is undef. Knowing this we can change our test as follows:

<br>

```perl
subtest "Edge case: unable to build any words" => sub {
    my @words    = ( "hello", "world", "challenge" );
    my $chars    = "xxx";
    my $expected = 0;

    my $got;
    ok no_warnings { $got = $CLASS->sum_lengths( \@words, $chars, ); };
    is $got, $expected;
};
```

<br>

This test fails as we would hope, so I can fix it with a simple skip in the loop if it's falsey; something like next unless `$built_word;` just above where we check if the built word and the target word are equal. You could of course do it other ways. :-)

So there you have it, my contribution to the Weekly Challenge. I wanted to make the effort to participate this week as I wanted to support `Mohammad` as he put the effort in to administer the challenge this week despite all that is going on with him at the moment. Hang in there `Mohammad!!`

<br>

***

If you have any suggestion then please do share with us **<perlweeklychallenge@yahoo.com>**.

| &nbsp; [**Advent Calendar 2024**](/blog/advent-calendar-2024) &nbsp; |
