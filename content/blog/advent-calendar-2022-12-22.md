---
title: "Advent Calendar - December 22, 2022"
date: 2022-12-22T00:00:00+00:00
description: "Advent Calendar - December 22, 2022."
type: post
image: images/blog/2022-12-22.jpg
author: Lance Wicks
tags: ["Perl", "Go"]
---

## [**Advent Calendar 2022**](/blog/advent-calendar-2022)
### | &nbsp; [**Day 21**](/blog/advent-calendar-2022-12-21) &nbsp; | &nbsp; **Day 22** &nbsp; |
***

The gift is presented by `Lance Wicks`. Today he is talking about his solution to [**"The Weekly Challenge - 119"**](/blog/perl-weekly-challenge-119). This is re-produced for **Advent Calendar 2022** from the original [**post**](https://perl.kiwi/tales/2021/07/04/perl-flexibility-for-the-win) by him.

***
<br>

## Perl flexibility for the win

<br>

This week I spent some time on the [**Weekly Challenge 119**](https://theweeklychallenge.org/blog/perl-weekly-challenge-119) which is always a good opportunity to get some [**deliberate practice**](https://www.sciencedirect.com/topics/psychology/deliberate-practice) in.

This week I completed task one, `"Swap Nibbles"` in both `Perl` and `GoLang`.

Now I know I am biased and my main language is `Perl`, but this was definitely easier/faster than doing it in `GoLang`.

The point of the exercise is to take a decimal integer, convert it to the binary representation, flip the two `"nibbles"` and return the resulting decimal integer.

Even with my verbose style of coding these things my solution was this:

<br>

```perl
sub swap {
    my ( $self, $n ) = @_;

    my $oct = sprintf( "%08b", $n );

    $oct =~ /^(.{4})(.{4})$/;

    return oct "0b$2$1";
}
```

<br>

I streamed myself coding this up on the [**Perl.Kiwi Twitch Channel**](https://perl.kiwi/tales/2021/07/04/perl-flexibility-for-the-win) which is also on `YouTube`:

<br>

<iframe width="560" height="315" src="https://www.youtube.com/embed/nWFeR6XfbBs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br><br>

`Perl`'s ability to allow me to take a variable `$n` and treat it like an integer, then the awesome power of `Perl`'s regex engine makes it simple to swap the nibbles. Then in the return statement auto-magically takes the strings taken in the regex and combines them into another string and oct treats it like a number and converts it to decimal.

It's helpful in a way that non-Perl people can find disconcerting. It's hugely flexible and useful. It's also one of the reasons people hate Perl; it is super easy to write code that is buggy as things are `"fluid"`.

My second attempt was in `GoLang`:

<br>

```perl
func NSwap(n int) int {
    bin := fmt.Sprintf("%08b", n)

    a := bin[0:4]
    b := bin[4:8]

    c := b + a

    d, _ := strconv.ParseInt(c, 2, 64)
    return int(d)
}
```

<br>

It's not too dissimilar to be honest, probably influenced by my `Perl` implementation (and certainly not idiomatic `Go`). It's not much more complex and follows a similar style of approach. However the conversion steps are more distinct as `GoLang` will not allow different types to interact in the way `Perl` does.

The second task was another example of how `Perl`'s flexibility can make it very easy to solve problems quickly and easily. In this task, you need to create a sequence of numbers using just `1,2,3` and that don't have the number `1` next to itself (so `11` excluded, `211` excluded).

My implementation looks like this:

<br>

```perl
sub no_one_on_one {
    my ( $self, $n ) = @_;

    my @seq;

    my $x = 0;
    while (1) {
        $x++;
        next unless $x =~ /^[123]/;
        next if $x =~ /[4567890]/g;
        next if $x =~ /11/g;
        push @seq, $x;
        last if @seq > $n - 1;
    }
    return $seq[-1];
}
```

<br>

Again, `Perl`'s regex engine for the win. And unless is super helpful here, it helps me read easily.

Rather than trying to create a sequence that obeys the rules; I just loop around incrementing `$x` by one each time. Then I skip to the next iteration if the `$x` if the number does not start with one of our numbers `(1,2,3)`. We skip if any number other than `1,2,3` appears. Finally we skip if `"11"` appears.

If we get past the `"next"` tests, we push the number onto `an array`. If that array is long enough to match the limit the user inputs `$n` we exit the loop with `last` and return the final element in the array `$seq[-1];`

I should probably point out here that I am not criticising `Go`, it's a great language. But `Perl` is a great language too. And much of the time I prefer `Perl` over `Go`, `Elm`, `Raku`, `PHP`, etc. Why? Mainly familiarity if I am being honest with you. It's a really mature, battle tested language. `Perl` is a general purpose language designed for flexibility and expressiveness. It is not the fastest (or slowest); it has some weaknesses and strengths... as do all programming languages.

`Perl` is designed to be the `"swiss-army chainsaw"` a developer reach for when they have a problem to solve. `Go` on the other hand is design to create `"simple, reliable and efficient software"`

The next post might be on last weeks challenge, I did take a crack at task #2 and it was really interesting to resolve and to do in a specific way.

<br>

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

| &nbsp; [**Advent Calendar 2022**](/blog/advent-calendar-2022) &nbsp; |
