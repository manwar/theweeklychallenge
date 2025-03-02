---
title: "MCE - How to?"
date: 2025-03-02T00:00:00+00:00
description: "Discussion about MCE."
type: post
image: images/blog/mce-how-to.png
author: Mohammad Sajid Anwar
tags: ["Perl"]
---

#### **DISCLAIMER:** Image is generated using `FREE` version of `ChatGPT`.
***

<br>

[**MCE**](https://metacpan.org/pod/MCE), Many-Core Engine provides parallel processing capabilities in `Perl`.

It is now one of my favourite `CPAN` module when it comes to parallel processing.

There is another player, [**Parallel::ForkManager**](https://metacpan.org/pod/Parallel::ForkManager), if you are interested.

Having said, `MCE` is designed primarily for `process-based parallelism`, and **NOT** `thread-based parallelism`.

`MCE` uses processes to isolate the execution of each task, allowing each process to operate independently.

It is universal fact that process is heavier than thread but provides more isolation, which can help avoid issues such as race conditions or memory sharing between tasks.

Here is an example, using `MCE` for `process-based parallelism`.

In the example below, I create one process for each task i.e. `5 processes` for `5 tasks`.

[[**Source Code**]](https://github.com/manwar/Concurrent-Parallel-Programming/blob/main/scripts/mce/mce-process.pl)

<br>

```perl
#/usr/bin/env perl

use v5.38;
use MCE;
use MCE::Shared;

my $counter = MCE::Shared->scalar(0);

my $mce = MCE->new(
    max_workers => 5,
    chunk_size  => 1,
    user_func   => sub {
        my ($mce, $chunk_ref, $chunk_id) = @_;
        my $task = $chunk_ref->[0];

        $counter->lock;
        my $value = $counter->get;
        $value += $task;
        $counter->set($value);
        $counter->unlock;

        say "Process $$: task $task";
    },
);

$mce->spawn;
$mce->process([1..5]);
$mce->shutdown;

say "Final counter: ", $counter->get;
```

<br>

Running the above code, you should see a new process, `PID`, for each task.

<br>

```perl
$ perl mce-process.pl
Process 15295: task 2
Process 15292: task 1
Process 15291: task 5
Process 15293: task 4
Process 15294: task 3
Final counter: 15
$
```

<br>

Let's use `MCE` once again but this time for `thread-based parallelism`.

In the example below, within a process, there is one thread per task i.e. `1 process` spawning `5 threads` for `5 tasks`.

[[**Source Code**]](https://github.com/manwar/Concurrent-Parallel-Programming/blob/main/scripts/mce/mce-thread.pl)

<br>

```perl
#/usr/bin/env perl

use v5.38;
use threads;
use threads::shared;
use MCE;

my $counter :shared = 0;

my $mce = MCE->new(
    max_workers => 5,
    chunk_size  => 1,
    user_func   => sub {
        my ($mce, $chunk_ref, $chunk_id) = @_;
        my $task = $chunk_ref->[0];

        {
            lock($counter);
            $counter += $task;
        }

        my $tid = threads->tid;
        say "Process $$ - Thread $tid: task $task";
    },
);

$mce->spawn;
$mce->process([1..5]);
$mce->shutdown;

say "Final counter: $counter";
```

<br>

Run the above code, you can see the `5 threads` inside `1 process` dealings with `5 tasks`.

<br>

```perl
$ perl mce-thread.pl
Process 15333 - Thread 3: task 1
Process 15333 - Thread 1: task 2
Process 15333 - Thread 5: task 3
Process 15333 - Thread 4: task 4
Process 15333 - Thread 2: task 5
Final counter: 15
$
```

<br>

#### **NOTE:** The `use MCE` should be the last import otherwise you wouldn't get the expected behaviour.
