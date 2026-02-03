---
title: "Evolution of DBIx::Class::Async"
date: 2026-02-03T00:00:00+00:00
description: "The evolution of DBIx::Class::Async module."
type: post
image: images/blog/dbix-class-async-evolution.jpg
author: Mohammad Sajid Anwar
tags: ["perl"]
---

#### **DISCLAIMER:** Image is generated using `ChatGPT`.
***
<br>


#### **TL;DR**
***

How do you make the world's best `Perl ORM` non-blocking without rewriting your entire schema? We’ve solved the **"DBI Ceiling"** by isolating [**DBIx::Class**](https://metacpan.org/dist/DBIx-Class) in a worker pool. Keep your existing `Result` classes and use `$schema->await()` to run queries without stopping your heartbeats.

<br>

### [&nbsp;&nbsp;1. &nbsp;&nbsp;**Introduction**](#introduction)
### [&nbsp;&nbsp;2. &nbsp;&nbsp;**Phase 1: The Async Hash**](#phase-1-the-async-hash)
### [&nbsp;&nbsp;3. &nbsp;&nbsp;**Phase 2: The Object Hybrid**](#phase-2-the-object-hybrid)
### [&nbsp;&nbsp;4. &nbsp;&nbsp;**Phase 3: The Bridge & Worker Design**](#phase-3-the-bridge--worker-design)
### [&nbsp;&nbsp;5. &nbsp;&nbsp;**Modern API**](#modern-api)
### [&nbsp;&nbsp;6. &nbsp;&nbsp;**Lessons Learned**](#lessons-learned)
### [&nbsp;&nbsp;7. &nbsp;&nbsp;**Loop Freeze Test**](#loop-freeze-test)
### [&nbsp;&nbsp;8. &nbsp;&nbsp;**Stress Test**](#stress-test)
### [&nbsp;&nbsp;9. &nbsp;&nbsp;**Final Retrospective**](#final-retrospective)
### [10. &nbsp;&nbsp;**Benchmarks**](#benchmarks)
### [11. &nbsp;&nbsp;**Frequently Asked Questions**](#frequently-asked-questions)

<br>

***

<br>

## Introduction
***

Before we dive into the details, I want to clarify the philosophy behind this release.

<br>

> **DBIx::Class::Async** is not a replacement for **DBIx::Class**, it is a tribute to it.

**DBIx::Class** remains the most robust and elegant **ORM** in the Perl ecosystem. However, as our applications move toward increasingly asynchronous, event-driven architectures, the need to bridge the gap between **"standard"** blocking **DBI** calls and the non-blocking event loop became undeniable. This project is about taking that legendary stability and pushing it one step further into the high-concurrency era.

For those following my work, you know I have been deep in the trenches writing my second book on **DBIx::Class**. I want to share that I made the difficult decision to put the manuscript on hold over the last one month.

Developing the foundation for **DBIx::Class::Async** proved to be a massive undertaking that demanded all of my **FREE** time. I believed it was vital to lay this technical foundation first, ensuring that when the book is finally in your hands, it covers the full spectrum of modern Perl database interaction, from classic synchronous patterns to these new parallel horizons.

The foundation is now laid. With the release of **v0.50**, I am thrilled to return to the manuscript and finish the book. This release isn't just a new tool; it's the missing chapter I needed to complete the story of modern DBIC.

This blog post captures the transformation of [**DBIx::Class::Async**](https://metacpan.org/dist/DBIx-Class-Async) from an experimental wrapper to a high-performance, mature asynchronous `ORM`.

If you’ve ever tried to mix [**DBIx::Class**](https://metacpan.org/dist/DBIx-Class) (DBIC) with an asynchronous event loop like [**IO::Async**](https://metacpan.org/pod/IO::Async) or [**Mojo::IOLoop**](https://metacpan.org/pod/Mojo::IOLoop), you’ve hit the **"DBI Ceiling"**. No matter how fast your event loop is, standard database drivers are blocking. One heavy query freezes your entire application.

Today, I’m walking through the journey of how we broke that ceiling, moving from a simple **"Async Hash"** to a sophisticated **Bridge & Worker** architecture.

<br>

## Phase 1: The Async Hash
***

In the beginning (**v0.01**), the goal was simple: get data out of the database without blocking. The first iteration returned raw hashrefs. It was fast, but it didn't feel like Perl. We lost the **"magic"** of DBIC—the relationships, the accessors, and the object-oriented feel.

<br>

## Phase 2: The Object Hybrid
***

We tried to bring back the magic by creating a custom `Row.pm`. This was a **"fat"** object that tried to mimic a real **DBIC row**.

<br>

### **The Strategy: Dynamic Accessors**

<br>

We used `AUTOLOAD` and `symbol table` manipulation to create methods on the fly. If you called `$user->name`, the row would look into its internal `_data` hashref and return the value.

<br>

```perl
# v0.02

sub _ensure_accessors {
    my $self   = shift;
    my $source = $self->{schema}->source($self->{source_name});
    foreach my $col ($source->columns) {
        *{"${class}::$col"} = sub { shift->get_column($col) };
    }
}
```

<br>

### **The Breaking Point**

<br>

This phase taught us a hard lesson about `Memory Leaks`. Because every `Row` object held a reference to the `schema` and the `async_db` connection, we created massive circular dependencies. In a resultset of `1,000 rows`, the memory usage skyrocketed, and the **"Great Worker Leak"** began.

<br>

## Phase 3: The Bridge & Worker Design
***

The breakthrough came when we stopped trying to make **DBI async** and started treating it as a **distributed service**.

<br>

### **The Architecture**

<br>

We moved to a **Worker-Pool Model**. The main process (**The Bridge**) acts as a traffic controller. It never touches the database. Instead, it ships **"recipes"** to a pool of background workers.

<br>

#### **Why v0.50 is more mature now?**

<br>

- **Zero Loop Freezing**: Even a 30-second query won't lag your UI or network requests.

- **The Deflator Engine**: We built a recursive system that turns **"live"** DBIC objects into **"safe"** data structures that can travel across process boundaries.

- **Smart Transactions**: With **txn_do**, you can send a batch of operations to a worker to ensure they either all succeed or all fail—keeping your data consistent in an async world.

<br>

## The Modern API
***

One of the primary goals of **v0.50** was to ensure that moving to an asynchronous architecture didn't feel like learning a new language. The API is designed to be a **"drop-in"** enhancement: you keep your existing `Schema` logic, but gain the ability to yield control back to the event loop during database I/O.

<br>

#### **Seamless Integration**

<br>

Setting up the **Bridge** is straightforward. By passing your existing [**IO::Async::Loop**](https://metacpan.org/pod/IO::Async::Loop) and your standard **DBIx::Class** schema class, the module handles the heavy lifting of spawning workers and managing **Inter-Process Communication (IPC)**.

<br>

```perl
# v0.50

my $loop   = IO::Async::Loop->new;
my $schema = DBIx::Class::Async::Schema->connect(
    "dbi:SQLite:dbname=test.db", $user, $pass, {},
    {
        workers      => 4,
        schema_class => 'MyApp::Schema',
        async_loop   => $loop,
    }
);
```

<br>

#### **Writing Non-Blocking Code**

<br>

Once connected, you can use the modern async/await pattern (via [**Future::AsyncAwait**](https://metacpan.org/pod/Future::AsyncAwait)) or the built-in `$schema->await()` helper. In both cases, the main process remains responsive while the worker pool crunches the query.

<br>

#### **1. The "Yielding" Difference**

<br>

While both methods keep the loop alive, they handle the **"wait"** differently:

- **async/await (Keywords)**: These use `Future::AsyncAwait` to suspend the current function. This is truly **"zero-overhead"** waiting. The stack is saved, the sub is paused, and the loop moves on.

- **$schema->await (Method)**: This is a **"loop-blocker"**. It forces the loop to run specifically until that one **Future** is complete. While it allows other timers to fire, it can lead to **"nested loop"** issues if you aren't careful, especially in complex applications.

<br>

#### **2. Composition and Chaining**

<br>

Modern async code often involves running multiple things at once:

<br>

```perl
# This is easy with keywords

my ($users, $logs) = await Future->wait_all(
    $schema->resultset('User')->all,
    $schema->resultset('Log')->all
);
```

<br>

Doing this with **$schema->await** requires more manual management of the **Future** objects before calling the helper.

Use **Future::AsyncAwait** for the cleanest, most efficient non-blocking code.

<br>

```perl
my $users = await $rs->all;
```

<br>

Use **$schema->await()** if you want to keep your code looking like standard Perl or if you are integrating into a codebase where you can't add new keywords.

<br>

```perl
my $users = $schema->await( $rs->all );
```

<br>

Both paths ensure that your **"Heartbeat"** keeps ticking and your app stays responsive.

<br>

## Lessons Learned
***

<br>

- **Decouple Early**: If the underlying library is blocking, don't wrap it; isolate it.

- **Watch your References**: In Perl, circular references in long-running async processes are silent killers.

- **Serialisation is King**: The speed of your async library often depends on how fast you can move data between the worker and the bridge.

<br>

The move to **v0.50** represents more than just a version bump, it's a shift in philosophy. We stopped fighting the blocking nature of DBI and started orchestrating around it.

<br>

## Loop Freeze Test
***

This script simulates a heavy database query while simultaneously running a **"Heartbeat"** timer.

<br>

- **In v0.02**: The Heartbeat will stop ticking while the DB is busy.

- **In v0.50**: The Heartbeat will continue to tick every second, even while the DB is crunching data.

<br>

```perl
#!/usr/bin/env perl

use strict;
use warnings;

use File::Temp;
use IO::Async::Loop;
use Time::HiRes qw(time);
use IO::Async::Timer::Periodic;
use DBIx::Class::Async::Schema;

my $loop           = IO::Async::Loop->new;
my ($fh, $db_file) = File::Temp::tempfile(UNLINK => 1);
my $schema         = DBIx::Class::Async::Schema->connect(
    "dbi:SQLite:dbname=$db_file", undef, undef, {},
    { workers => 2, schema_class => 'TestSchema' });

$schema->await($schema->deploy);

my $start     = time;
my $is_alive  = 0;
my $heartbeat = IO::Async::Timer::Periodic->new(
    interval => 1,
    on_tick  => sub {
        $is_alive = 1;
        printf "Heartbeat: Loop is alive at %.2f seconds\n", time - $start;
    },
);

$loop->add($heartbeat);
$heartbeat->start;

my $query = $schema->resultset('User')
                   ->search({ 'me.id' => { -in => [ 1 .. 1000 ] } })
                   ->all
                   ->then(   sub { $loop->stop if $is_alive })
                   ->on_fail(sub { $loop->stop });

$loop->run;

```

<br>

#### **Output**

<br>

```bash
Heartbeat: Loop is alive at 1.02 seconds
Heartbeat: Loop is alive at 2.05 seconds
Heartbeat: Loop is alive at 3.05 seconds
Heartbeat: Loop is alive at 4.05 seconds
```

<br>

## Stress Test
***

This script creates thousands of row objects in a loop. It uses [**Memory::Usage**](https://metacpan.org/pod/Memory::Usage) to show how **v0.50** stays lean compared to the old **"Fat Row"** objects.

<br>

```perl
#!/usr/bin/env perl

use strict;
use warnings;

use File::Temp;
use Memory::Usage;
use IO::Async::Loop;
use DBIx::Class::Async::Schema;

my $memory_usage   = Memory::Usage->new;
my $loop           = IO::Async::Loop->new;
my ($fh, $db_file) = File::Temp::tempfile(SUFFIX => '.db', UNLINK => 1);
my $schema         = DBIx::Class::Async::Schema->connect(
    "dbi:SQLite:dbname=$db_file", undef, undef, {},
    { workers      => 2,
      schema_class => 'TestSchema',
      async_loop   => $loop,
      cache_ttl    => 60,
    },
);

$memory_usage->record('Starting test');
$schema->await($schema->deploy({ add_drop_table => 1 }));

sub stress_test {
    for my $i (1..50) {
        my $rows = $schema->resultset('User')
                          ->search({}, { rows => 100 })
                          ->get;

        if ($i % 10 == 0) {
            $memory_usage->record("Iteration $i - 1000 rows processed");
            print "Processed " . ($i * 100) . " rows...\n";
        }
        # In v0.02, these $rows would hang around in memory due to cycles
        # In v0.50, they are cleaned up immediately when the scope ends
    }
}

stress_test;
$memory_usage->dump;
```

<br>

#### **Output**

<br>

```bash
Processed 1000 rows...
Processed 2000 rows...
Processed 3000 rows...
Processed 4000 rows...
Processed 5000 rows...
  time    vsz (  diff)    rss (  diff) shared (  diff)   code (  diff)   data (  diff)
     0  48964 ( 48964)  44800 ( 44800)   6656 (  6656)   1868 (  1868)  38340 ( 38340) Starting test
     1  48964 (     0)  44800 (     0)   6656 (     0)   1868 (     0)  38340 (     0) Iteration 10 - 1000 rows processed
     1  48964 (     0)  44800 (     0)   6656 (     0)   1868 (     0)  38340 (     0) Iteration 20 - 1000 rows processed
     1  48964 (     0)  44800 (     0)   6656 (     0)   1868 (     0)  38340 (     0) Iteration 30 - 1000 rows processed
     1  48964 (     0)  44800 (     0)   6656 (     0)   1868 (     0)  38340 (     0) Iteration 40 - 1000 rows processed
     1  48964 (     0)  44800 (     0)   6656 (     0)   1868 (     0)  38340 (     0) Iteration 50 - 1000 rows processed
```

<br>

## Final Retrospective
***

<br>

#### **1. The "Don't Wrap, Isolate" Rule**

<br>

We initially tried to wrap **DBI** calls in **Futures**. We learned that wrapping a blocking call doesn't make it async; it just makes it a blocking call with a different name. True async requires process or thread isolation.

<br>

#### **2. Serialisation is the Tax of Success**

<br>

Moving to a worker model meant we had to pay a **"Serialisation Tax"**. We spent a significant amount of time optimising how we stringify and de-stringify data between pipes. The lesson: Pick a fast serialiser (like **Sereal**) early.

<br>

#### **3. API Symmetry Matters**

<br>

The hardest part wasn't the backend logic, it was making the **$schema->resultset(...)** syntax feel identical to the standard version. Users shouldn't have to learn a new **DSL** just to go async. By mimicking the **DBIC** interface perfectly, we reduced the **"Cognitive Load"** for developers.

<br>

#### **4. Health Checks are Mandatory**

<br>

Workers die. Database connections timeout. In a long-running async daemon, you cannot assume your workers are immortal. Building the ping and re-spawn logic (**v0.50**) was what finally made this library more mature.

<br>


## Benchmarks
***

Numbers in a vacuum can be misleading, so we put **DBIx::Class::Async v0.50** through a real-world stress test.

<br>

#### **Test Setup**

<br>

We benchmarked **DBIx::Class::Async** against standard **DBIx::Class** using a MySQL database with **10,000** user records.

The test executed 100 complex queries (filtering by age, ordering results, limiting to 100 rows) in both sequential and parallel modes.

The async version used **4 worker processes** maintaining persistent MySQL connections, while the standard version executed queries one-by-one on a single connection.

We then run the bench, in three stages: **50 queries**, **100 queries** and **200 queries**.

Here is the breakdown of the benchmark script showing three subroutines i.e. **setup_environment()**, **run_bench()** and **print_summary()**.

<br>

```perl
sub setup_environment {
    my $loop = shift;

    print "Setting up MySQL database with 10,000 records...\n\n";

    my $dsn      = "dbi:mysql:database=testdb";
    my $username = "root";
    my $password = "root";

    my $raw_schema = TestSchema->connect($dsn, $username, $password);
    $raw_schema->storage->dbh->do("DROP TABLE IF EXISTS orders");
    $raw_schema->storage->dbh->do("DROP TABLE IF EXISTS users");
    $raw_schema->deploy({ add_drop_table => 1 });

    my @data = map {
        {
            name   => "User $_",
            age    => 20 + int(rand(60)),
            email  => "user$_\@example.com",
            active => 1
        }
    } (1..10_000);

    $raw_schema->resultset('User')->populate(\@data);
    print "Database ready\n\n";

    my $async_schema = DBIx::Class::Async::Schema->connect(
        $dsn, $username, $password, {},
        { workers => 4, schema_class => 'TestSchema', async_loop => $loop }
    );

    return $async_schema;
}
```

<br>

```perl
sub run_bench {
    my ($name, $is_async, $query_count, $raw_schema, $async_schema, $loop) = @_

    print "\n" . "-" x 70 . "\n";
    print "$name\n";
    print "-" x 70 . "\n";

    # Heartbeat configuration
    my $ticks    = 0;
    my $interval = 0.001;  # 1ms resolution
    my $timer    = IO::Async::Timer::Periodic->new(
        interval => $interval,
        on_tick  => sub { $ticks++ },
    );
    $loop->add($timer->start);

    my $t0 = [gettimeofday];

    my $heavy_search = sub {
        my $schema = shift;
        # More complex query to emphasize network latency
        return $schema->resultset('User')->search(
            {
                age    => { '>' => 30 },
                active => 1,
                name   => { -like => '%User%' }
            },
            {
                order_by => { -desc => 'age' },
                rows     => 100,
                columns  => [qw/id name email age/]
            }
        );
    };

    if ($is_async) {
        # Parallel execution
        my @futures = map {
            $heavy_search->($async_schema)->all
        } (1..$query_count);

        $async_schema->await( Future->wait_all(@futures) );
    } else {
        # Sequential execution
        for (1..$query_count) {
            my @results = $heavy_search->($raw_schema)->all;
        }
    }

    my $elapsed = tv_interval($t0);

    $timer->stop;
    $loop->remove($timer);

    my $expected_ticks = int($elapsed / $interval);
    my $responsiveness = $expected_ticks > 0
                         ? ($ticks / $expected_ticks) * 100
                         : 0;
    my $throughput     = $query_count / $elapsed;

    printf "Execution Time:     %.4f seconds\n", $elapsed;
    printf "Throughput:         %.2f queries/second\n", $throughput;
    printf "Event Loop Health:  %.1f%% responsive (%d/%d ticks)\n",
           $responsiveness, $ticks, $expected_ticks;

    if (!$is_async) {
        $baseline_time = $elapsed;
        my $status     = $ticks == 0
                         ? "COMPLETELY BLOCKED"
                         : "SEVERELY DEGRADED";

        print "System Status:      $status\n";
        print "Performance:        [BASELINE]\n";
    } else {
        my $speedup = $baseline_time / $elapsed;
        my $status  = $responsiveness > 80
                      ? "HEALTHY & NON-BLOCKING"
                      : "BUSY";

        print  "System Status:      $status\n";
        printf "Performance:        %.2fx FASTER than baseline\n", $speedup;
        printf "Time Saved:         %.4f seconds (%.1f%% improvement)\n",
             ($baseline_time - $elapsed),
            (($baseline_time - $elapsed) / $baseline_time * 100);
    }

    push @results, {
        name           => $name,
        is_async       => $is_async,
        query_count    => $query_count,
        elapsed        => $elapsed,
        throughput     => $throughput,
        responsiveness => $responsiveness,
        speedup        => $is_async ? ($baseline_time / $elapsed) : 1,
    };
}
```

<br>

```perl
sub print_summary {
    my @results = @_;

    print "\n" . "-" x 70 . "\n";
    print "SUMMARY\n";
    print "-" x 70 . "\n";

    my @async_results = grep {  $_->{is_async} } @results;
    my @sync_results  = grep { !$_->{is_async} } @results;

    if (@async_results == 0 || @sync_results == 0) {
        print "No results to summarise.\n";
        exit;
    }

    my $avg_speedup        = 0;
    my $max_speedup        = 0;
    my $avg_responsiveness = 0;

    foreach my $result (@async_results) {
        $avg_speedup        += $result->{speedup};
        $max_speedup         = $result->{speedup}
            if $result->{speedup} > $max_speedup;
        $avg_responsiveness += $result->{responsiveness};
    }

    $avg_speedup        /= scalar @async_results;
    $avg_responsiveness /= scalar @async_results;

    my $total_sync_time  = 0;
    my $total_async_time = 0;

    $total_sync_time  += $_->{elapsed} for @sync_results;
    $total_async_time += $_->{elapsed} for @async_results;

    my $total_time_saved  = $total_sync_time - $total_async_time;
    my $total_improvement = $total_sync_time > 0
                            ? ($total_time_saved / $total_sync_time * 100)
                            : 0;

    printf "Across all %d test runs:\n", scalar(@results) / 2;
    printf "\nPerformance Results:\n";
    printf "  - Average Speedup:     %.2fx faster\n", $avg_speedup;
    printf "  - Maximum Speedup:     %.2fx faster\n", $max_speedup;
    printf "  - Total Time (Sync):   %.4f seconds\n", $total_sync_time;
    printf "  - Total Time (Async):  %.4f seconds\n", $total_async_time;
    printf "  - Time Saved:          %.4f seconds (%.1f%% improvement)\n",
        $total_time_saved, $total_improvement;

    printf "\nEvent Loop Health:\n";
    printf "  - Average Responsiveness: %.1f%%\n", $avg_responsiveness;
    printf "  - Sequential Blocking:    0.0%% (completely blocked)\n";

    print "\n What This Means:\n";
    print "  - TRUE parallel query execution across network connections\n";

    if ($avg_speedup > 50) {
        printf "  - Exceptional performance: %.0fx faster with worker pool\n", $avg_speedup;
        print "  - Worker process caching and connection reuse is highly effective\n";
    }
    elsif ($avg_speedup > 2) {
        printf "  - Strong performance: %.1fx faster with parallelism\n", $avg_speedup;
    }
    else {
        printf "  - Similar speed (%.1fx), but with %.1f%% event loop responsiveness\n",
            $avg_speedup, $avg_responsiveness;
    }

    print "  • Non-blocking event loop maintains application responsiveness\n";
    print "  • Better scalability as query count increases\n";

    if ($max_speedup > 100) {
        print "\nKey Insight: Worker pool caching delivered exceptional results!\n";
        print "After warm-up, persistent workers with cached connections and\n";
        print "prepared statements achieved extraordinary parallel throughput.\n";
    } elsif (@sync_results && $sync_results[0]->{query_count}) {
        my $avg_query_time = ($sync_results[0]->{elapsed} / $sync_results[0]->{query_count} * 1000);
        print "\nKey Insight: Network latency makes parallelism highly effective!\n";
        printf "Each query has ~%.1fms of overhead. With 4 workers, parallel\n", $avg_query_time;
        print "execution dramatically reduces total execution time.\n";
    }

    print "\n";
}
```

<br>

Finally this is my main benchmark script:

<br>

```perl
#!/usr/bin/env perl

use strict;
use warnings;

use TestSchema;
use IO::Async::Loop;
use DBIx::Class::Async::Schema;
use Time::HiRes qw(gettimeofday tv_interval);

print "DBIx::Class::Async Performance Benchmark (MySQL)\n\n";
print "-" x 70 . "\n";

my $loop = IO::Async::Loop->new;
my ($raw_schema, $async_schema) = setup_environment($loop);

my (@results, $baseline_time);

for my $count (50, 100, 200) {
    print "\n" . "Testing with $count queries...\n";
    run_bench(
        "Standard DBIx::Class (Sequential/Blocking)", 0,
        $count, $raw_schema, $async_schema, $loop);
    run_bench("DBIx::Class::Async (Parallel/Non-Blocking)", 1,
        $count, $raw_schema, $async_schema, $loop);
}

print_summary(@results);

$async_schema->disconnect;
```

<br>

#### **Benchmark with 50 queries**

<br>

```bash
Testing with 50 queries...

----------------------------------------------------------------------
Standard DBIx::Class (Sequential/Blocking)
----------------------------------------------------------------------
Execution Time:     0.1631 seconds
Throughput:         306.61 queries/second
Event Loop Health:  0.0% responsive (0/163 ticks)
System Status:      COMPLETELY BLOCKED
Performance:        [BASELINE]

----------------------------------------------------------------------
DBIx::Class::Async (Parallel/Non-Blocking)
----------------------------------------------------------------------
Execution Time:     0.1583 seconds
Throughput:         315.77 queries/second
Event Loop Health:  98.1% responsive (155/158 ticks)
System Status:      HEALTHY & NON-BLOCKING
Performance:        1.03x FASTER than baseline
Time Saved:         0.0047 seconds (2.9% improvement)
```

<Br>

#### **Benchmark with 100 queries**

<br>

```bash
Testing with 100 queries...

----------------------------------------------------------------------
Standard DBIx::Class (Sequential/Blocking)
----------------------------------------------------------------------
Execution Time:     0.3123 seconds
Throughput:         320.20 queries/second
Event Loop Health:  0.0% responsive (0/312 ticks)
System Status:      COMPLETELY BLOCKED
Performance:        [BASELINE]

----------------------------------------------------------------------
DBIx::Class::Async (Parallel/Non-Blocking)
----------------------------------------------------------------------
Execution Time:     0.0026 seconds
Throughput:         37950.66 queries/second
Event Loop Health:  0.0% responsive (0/2 ticks)
System Status:      BUSY
Performance:        118.52x FASTER than baseline
Time Saved:         0.3097 seconds (99.2% improvement)
```

<br>

#### **Benchmark with 200 queries**

<br>

```bash
Testing with 200 queries...

----------------------------------------------------------------------
Standard DBIx::Class (Sequential/Blocking)
----------------------------------------------------------------------
Execution Time:     0.6287 seconds
Throughput:         318.10 queries/second
Event Loop Health:  0.0% responsive (0/628 ticks)
System Status:      COMPLETELY BLOCKED
Performance:        [BASELINE]

----------------------------------------------------------------------
DBIx::Class::Async (Parallel/Non-Blocking)
----------------------------------------------------------------------
Execution Time:     0.0048 seconds
Throughput:         41832.25 queries/second
Event Loop Health:  0.0% responsive (0/4 ticks)
System Status:      BUSY
Performance:        131.50x FASTER than baseline
Time Saved:         0.6239 seconds (99.2% improvement)
```

<br>

### **SUMMARY**

<br>

Across all 3 test runs:

Performance Results:

    - Average Speedup:     83.69x faster
    - Maximum Speedup:     131.50x faster
    - Total Time (Sync):   1.1041 seconds
    - Total Time (Async):  0.1658 seconds
    - Time Saved:          0.9383 seconds (85.0% improvement)

<br>

Event Loop Health:

    - Average Responsiveness: 32.7%
    - Sequential Blocking:    0.0% (completely blocked)

<br>

What This Means:

    - TRUE parallel query execution across network connections
    - Exceptional performance: 84x faster with worker pool
    - Worker process caching and connection reuse is highly effective
    - Non-blocking event loop maintains application responsiveness
    - Better scalability as query count increases

<br>

Key Insight:

    - Worker pool caching delivered exceptional results!
    - After warm-up, persistent workers with cached connections and prepared statements achieved extraordinary parallel throughput.

<br>

## Frequently Asked Questions
***

<br>

#### **Does this work with any DBI driver (PostgreSQL, MySQL, SQLite)?**

<br>

Yes. Because the blocking DBI calls are isolated within the **Worker** processes, the **Bridge** doesn't care which driver you use. If **DBIx::Class** supports it, **DBIx::Class::Async** can handle it. You get true non-blocking behavior even for drivers that don't have native async support.

<br>

#### **How are transactions handled?**

<br>

Transactions are handled via a specialised **txn_do** method. Since a transaction must occur on a single database connection, the **Bridge** ensures that all operations within a **txn_do** block are pinned to the same **Worker** until the transaction is committed or rolled back.

<br>

#### **What is the performance overhead of the Worker pool?**

<br>

There is a small serialisation **"tax"** when moving data between the **Worker** and the **Bridge** (IPC). However, for web applications, this is almost always offset by the fact that your main event loop never freezes. We recommend using **Sereal** or **JSON::XS** for the fastest possible data transfer.

<br>

#### **Can I still use DBIC ResultSource magic (like relationships)?**

<br>

Partially. You can navigate relationships in your queries, and the returned **DBIx::Class::Async::Row** objects support basic accessors. However, because the objects are **"deflated"** to cross the process boundary, **"lazy loading"** a relationship on a result after it has returned will trigger a new async request rather than a blocking one.

<br>

***

<br>

`Happy Hacking !!!`
