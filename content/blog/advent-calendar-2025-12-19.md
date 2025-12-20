---
title: "Advent Calendar - December 19, 2025"
date: 2025-12-19T00:00:00+00:00
description: "Advent Calendar - December 19, 2025."
type: post
image: images/blog/2025-12-19.jpg
author: Ryan Thompson
tags: ["Perl"]
---

## [**Advent Calendar 2025**](/blog/advent-calendar-2025)
### | &nbsp; [**Day 18**](/blog/advent-calendar-2025-12-18) &nbsp; | &nbsp; **Day 19** &nbsp; | &nbsp; [**Day 20**](/blog/advent-calendar-2025-12-20) &nbsp; |
***

The gift is presented by `Ryan Thompson`. Today he is talking about his solutioni to [**The Weekly Challenge - 341**](/blog/perl-weekly-challenge-341). This is re-produced for `Advent Calendar 2025` from the original [**post**](https://ry.ca/2025/10/brken-keybards-reverse-prefixes/).

***

<br>

## PWC 341 › Brken Keybards and Reverse Prefixes

> This post is part of a series on Mohammad Anwar’s excellent [**Weekly Challenge**](https://theweeklychallenge.org/challenges), where hackers submit solutions in `Perl`, `Raku`, or any other language, to two different challenges every week. (It’s a lot of fun, if you’re into that sort of thing.)

I’ve recently moved all the sites I host to a new server, including `ry.ca`, and realized it’s been far too long since I wrote a blog post. And, indeed, far too long since I’ve had time for any sort of recreational programming. So let’s fix that!

<br>

## Task 1: My Keyboard is Broken

This task posits that age old question: which words could I still type if my keyboard was broken? For example, if the o key on your keyboard is broken, you can (correctly) type help, but not keyboard or broken.

The solution (made possible to code without an o for your convenience):

<br>

```perl
sub pssible($str, @brken) {
    grep !/[@brken\0]/i, split /\s+/, $str
}
```

<br>

I’m using subroutine signatures, but they’re not necessary:

<br>

```perl
sub pssible { grep !/[@_\0]/i, split /\s+/, shift }
```

<br>

Otherwise the only slightly weird thing I’m doing is interpolating an array inside a regex. The `\0 (NUL)` in the regex is there to prevent an edge case where `@brken` is empty. In that case, the regex would be `/[]/i`, and Perl doesn’t like having empty square brackets:

<br>

```bash
$ perl -e '/[]/'
Unmatched [ in regex; marked by &lt;-- HERE in m/[ &lt;-- HERE ]/ at -e line 1.
```

<br>

`Perl` assumes the `]` is the first character you want to match, but then there is no closing ]. If you were to instead try `perl -e '/[]]/'`, you’d have a valid regex that matches strings containing `]`.

<br>

[**ch-1.pl source code**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-341/ryan-thompson/perl/ch-1.pl)

<br>

## Task 2: Reverse Prefix

This task asks us to take a `$string` and a `$char` as input. Find the `$char`, and reverse everything up to (and including!) `$char`, but leave the rest alone. Thus, the name is a bit of a misnomer, because we’re reversing more than just the prefix.

An example:

<br>

```bash
rev_prefix('programming', 'g'); # gorpramming

# PRE CH POST
# pro g  ramming
# g orp  ramming
```

<br>

And, my solution:

<br>

```perl
sub rev_prefix { $_[0] =~ s/^(.+?\Q$_[1]\E)/reverse $1/er }
```

<br>

Here I match the beginning of the string `(^)`, followed by a capturing non-greedy number of arbitrary characters plus the first `CH ($_[1])`. I do not match the POST section of the string at all.

Then in the replacement (with `/e` active, so everything is executed as a `Perl` expression), I simply `reverse($1)`. Since this is a substitution, the original `PRE` and `CH` parts of the string are replaced by their reversed version, and the `POST` part is left alone. And thanks to `/r`, the resulting string is returned, avoiding the need for a temp variable.

## Security (\Q and \E)

The `\Q` and `\E` around `$_[1]` are necessary if that input can come from a user, file, or other untrusted source, and is not fully validated. I’d argue the `\Q` and `\E` are pretty cheap insurance even when you think your input is safe. Why is that, exactly? Well, did you know you can run arbitrary code in a regex?

<br>

```perl
rev_prefix('lol', qr/(?{ die })/)
```

<br>

This will actually execute the code in the `{ ... }` section, and kill the program. And that’s me being nice!

You might now think Task 1 has a similar vulnerability. So what happens if we try this?

<br>

```perl
pssible('foo', 'a](?{ die })[');
```

<br>

That would produce a regex like this:

<br>

```perl
qr/[a](?{ die })[\0]/
```

<br>

However, in this case, Perl refuses compilation:

<br>

```bash
Eval-group not allowed at runtime, use re 'eval'
in regex m/[a](?{ die })[\0]/ at ...
```

<br>

This may be safe enough for a contrived `Perl` challenge task, but a crafty attacker can still crash your program, exploit your innocent-looking regex to grind your processor to a halt, or even expose enough program internals to compromise your system. A deep dive would be out of scope for this blog post, but suffice to say, if you’re dealing with user input, validate it!

<br>

```perl
@chars = grep /^\w$/, @chars;
```

<br>

[**ch-2.pl source code**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-341/ryan-thompson/perl/ch-2.pl)

<br>

## Tests

I left my tests in the `t/` subdirectory, so running prove from the `ryan-thompson/perl/` directory will run the tests, and they should all pass.

## On Github

You can see all of my solutions (and the solutions of everyone else) on [**Github**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-341/ryan-thompson).

<br>

***

If you have any suggestion then please do share with us **<perlweeklychallenge@yahoo.com>**.

| &nbsp; [**Advent Calendar 2025**](/blog/advent-calendar-2025) &nbsp; |
