---
title: "Promise in Perl"
date: 2025-03-15T00:00:00+00:00
description: "Discussion about Promise in Perl."
type: post
image: images/blog/promise-in-perl.png
author: Mohammad Sajid Anwar
tags: ["Perl"]
---

#### **DISCLAIMER:** Image is generated using `FREE` version of `ChatGPT`.
***

<br>

## Promise in Perl
***

Few days ago, I blogged about [**Future in Perl**](https://theweeklychallenge.org/blog/future-in-perl) where I mentioned `Future` aka `Promise`.

In this post, I would replicate the behaviour using `CPAN` modules: [**Promise::ES6**](https://metacpan.org/pod/Promise::ES6) and [**AE**](https://metacpan.org/pod/AE).

Since `Perl` believes in the philosophy of [**TMTOWTDI**](https://wiki.c2.com/?ThereIsMoreThanOneWayToDoIt), so let's implement the most basic pattern of `Promise`as below:

<br>

    fetch()
    .then(process)
    .then(save)
    .then(display)
    .catch(error);

<br>

```perl
#!/usr/bin/env perl

use v5.38;
use AE;
use Promise::ES6;

my $ae = AE::cv;

sub fetch {
    return Promise::ES6->new(sub {
        my ($resolve, $reject) = @_;

        my $delay = int(rand(2)) + 1;
        my $timer;
        $timer = AE::timer $delay, 0, sub {
            undef $timer;
            $resolve->("Fetch: data");
        };
    });
}

sub process($data) {
    return Promise::ES6->new(sub {
        my ($resolve, $reject) = @_;

        my $delay = int(rand(2)) + 1;
        my $timer;
        $timer = AE::timer $delay, 0, sub {
            undef $timer;
            $resolve->("Process: $data");
        };
    });
}

sub save($data) {
    return Promise::ES6->new(sub {
        my ($resolve, $reject) = @_;

        my $delay = int(rand(2)) + 1;
        my $timer;
        $timer = AE::timer $delay, 0, sub {
            undef $timer;
            $resolve->("Save: $data");
        };
    });
}

sub display($data) {
    say "Display: $data";
    $ae->send;
}

sub error($message) {
    say "Error: $message";
    $ae->send;
}

fetch()
    ->then( sub { return process(@_); })
    ->then( sub { return save(@_);    })
    ->then( sub { return display(@_); })
    ->catch(sub { return error(@_);   });

$ae->recv;
```

<br>

## Output
***

<br>

    $ perl promise.pl
    Display: Save: Process: Fetch: data

***

`Happy Hacking!!`
