---
title: "Future in Perl"
date: 2025-03-12T00:00:00+00:00
description: "Discussion about future in Perl."
type: post
image: images/blog/future-in-perl.png
author: Mohammad Sajid Anwar
tags: ["Perl"]
---

#### **DISCLAIMER:** Image is generated using `FREE` version of `ChatGPT`.
***

<br>

## Future in Perl
***

Recently I have been playing with [**Concurrent and Parallel Programming**](https://github.com/manwar/Concurrent-Parallel-Programming) in `Perl`.

It is something that I don't get to do on daily basis.

Having said this exercise, gave me an opportunity to try key features and document for future reference.

In the series, today I am talking about `Futures` in my favourite programming language `Perl`.

`Futures`, also caled `Promises` represent the result of some async operation that will become available.

This helps us to carry on executing while awaiting the results of the said operation.

It serves as placeholders for the result rather than block the execution of the program, thus allowing easier juggling of multiple processes within the system.

<br>

## Features
***

    1. Non-blocking execution: program execution continued while waiting for the result
    2. Polling: can notify when the operation is done or be checked

<br>

## Pattern
***

This is the most basic pattern of `Futures`.

<br>

    fetch()
    .then(process)
    .then(save)
    .then(display)
    .catch(error);

<br>

Let's do this in `Perl` using the `CPAN` modules: [**Future**](https://metacpan.org/pod/Future) and [**IO::Async::Loop**](https://metacpan.org/pod/IO::Async::Loop).

<br>

```perl
#!/usr/bin/env perl

use v5.38;
use Future;
use IO::Async::Loop;

my $loop = IO::Async::Loop->new;

sub fetch {
    my $future = $loop->new_future;
    $loop->delay_future(after => 1)->on_done(sub {
        $future->done({ data => "Fetched data" });
    });
    return $future;
}

sub process($data) {
    my $future = $loop->new_future;
    $loop->delay_future(after => 1)->on_done(sub {
        $data->{processed} = "Processed: " . $data->{data};
        $future->done($data);
    });
    return $future;
}

sub save($data) {
    my $future = $loop->new_future;
    $loop->delay_future(after => 1)->on_done(sub {
        $data->{saved} = "Saved: " . $data->{processed};
        $future->done($data);
    });
    return $future;
}

sub display($data) {
    say "Displaying data: " . $data->{saved};
    return Future->done;
}

sub error($message) {
    say "Error: $message";
    return Future->done;
}

$loop->await(
    fetch()
    ->then( sub { return process(@_); })
    ->then( sub { return save(@_);    })
    ->then( sub { return display(@_); })
    ->catch(sub { return error(@_);   })
);
```

<br>

## Output
***

<br>

    $ perl future.pl
    Displaying data: Saved: Processed: Fetched data
