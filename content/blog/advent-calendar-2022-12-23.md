---
title: "Advent Calendar - December 23, 2022"
date: 2022-12-23T00:00:00+00:00
description: "Advent Calendar - December 23, 2022."
type: post
image: images/blog/2022-12-23.jpg
author: Lance Wicks
tags: ["Python"]
---

## [**Advent Calendar 2022**](/blog/advent-calendar-2022)
### | &nbsp; [**Day 22**](/blog/advent-calendar-2022-12-22) &nbsp; | &nbsp; **Day 23** &nbsp; |
***

The gift is presented by `E. Alvarez`. Today he is talking about his solution to [**"The Weekly Challenge - 191"**](/blog/perl-weekly-challenge-191). This is re-produced for **Advent Calendar 2022** from the original [**post**](https://alvar3z.com/posts/lambdas--printf) by him.

***
<br>

## Lambdas & Printf

<br>

### Task I: Binary String
***

Ok, another great week and I was glad that it did not require too much effort on my part, as I’ve started participating in [**AoC**](https://adventofcode.com/2022), [**AoCyber**](https://tryhackme.com/christmas), and also doing [**Gabor Szabo’s 2022 December CI Challenge**](https://dev.to/szabgab/the-2022-december-ci-challenge-5dof). Thus without further ado, let’s get into the code.

<br>

```python
#!/usr/bin/env python3

def bit_str(n):
    limit = 1 << n
    for i in range(limit):
        value = i
        width = f'0{n}'
        print(f'{value:{width}b}')


if __name__ == "__main__":
    bit_str(2)
    print('\n')
    bit_str(3)
```

<br>

It was a very straightforward implementation using [**Python**](https://docs.python.org/3/library/string.html#format-specification-mini-language) & [**Go’s mini string formatting language**](https://pkg.go.dev/fmt).

<br>

### Task II: Odd String
***

<br>

For this task, it was simply a matter of giving `Python`’s builtin `sort()` function, an anonymous comparison function, in which we compare the difference of each of the following ordinal values of the individual chars in `words` list.

<br>

```python
#!/usr/bin/env python3

def odd_str(_list):
    def diff(x): return [ord(x[i]) - ord(x[i - 1]) for i in range(1, len(x))]
    _list.sort(key=diff)

    fst = _list[0]
    snd = _list[1]
    last = _list[-1]

    return fst if diff(fst) != diff(snd) else last


def main():
    words = ["adc", "wzy", "abc"]
    print(odd_str(words))


if __name__ == "__main__":
    exit(main())
```

<br>

## Happy hacking!

<br>

P.S: I originally had a lambda function for `diff()` a la:

<br>

```python
diff = lambda x: [ord(x[i]) = ord(x[i - 1]) for i in range(1, len(x))]
```

<br>

However, my linter was screaming at me for not following some weird `PEP-8` rule.

<br>

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

| &nbsp; [**Advent Calendar 2022**](/blog/advent-calendar-2022) &nbsp; |
