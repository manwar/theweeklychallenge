---
title: "Perl Question ???"
date: 2022-07-02T00:00:00+00:00
description: "Perl Question ???"
type: post
image: images/blog/perl-question.jpg
author: Mohammad S Anwar
tags: ["Perl"]
---

<br>

A few days ago, I received an email from someone who appears to be `Perl` hacker and asked me a question.

<br>

![Email](/images/blog/pq-1.png)

***

<br>

First, I feel honoured that somebody thinks I am capable to answer this question.

I didn't want quick reply to the email. Instead, I decided to write a short blog post and share with other `Perl` hackers, just in case.

I have seen both styles and I believe it is just a matter of personal choice and style.

Honestly speaking, I don't have any idea how the compiler would react differently.

If you ask me, personally I would do something like this:

<br>

```perl
    sub name {
       my ($self, $name) = @_;
       $self->{name} //= $name;
       return $self->{name};
    }
```

<br>

I normally don't poke into special variable `@_` i.e. `$_[0], $_[1]` in production code.

However I have used it when I am writing one-liner where readability is not important.

If you have access to latest release `Perl v5.36` then you can even try this:

<br>

```perl
    sub name($self, $name) {
       $self->{name} //= $name;
       return $self->{name};
    }
```

<br>

It is readable and easy to maintain.

That's it for now, keep hacking.
