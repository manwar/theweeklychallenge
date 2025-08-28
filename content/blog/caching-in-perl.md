---
title: "Caching in Perl"
date: 2025-08-07T00:00:00+00:00
description: "Discussion about Caching in Perl."
type: post
image: images/blog/caching-in-perl.jpg
author: Mohammad Sajid Anwar
tags: ["perl"]
---

#### **DISCLAIMER:** Image is generated using `ChatGPT`.
<br>

### [&nbsp;&nbsp;1. Introduction](#introduction)
### [&nbsp;&nbsp;2. What is Valkey?](#what-is-valkey)
### [&nbsp;&nbsp;3. Setup Valkey](#setup-valkey)
### [&nbsp;&nbsp;4. Frequent Access Data](#frequent-access-data)
### [&nbsp;&nbsp;5. Publisher / Subscriber](#publisher--subscriber)
### [&nbsp;&nbsp;6. Producer / Consumer](#producer--consumer)
### [&nbsp;&nbsp;7. Job Queue System](#job-queue-system)
### [&nbsp;&nbsp;8. Key - Value Storage](#key---value-storage)
### [&nbsp;&nbsp;9. Atomic Counter](#atomic-counter)
### [10. Atomic Transaction](#atomic-transaction)
### [11. Atomic Leaderboard](#atomic-leaderboard)
### [12. Atomic vs Non-atomic](#atomic-vs-non-atomic)
### [13. Safe Counter with Lock](#safe-counter-with-lock)
### [14. Safe Counter Atomic](#safe-counter-atomic)
### [15. Inventory Reservation](#inventory-reservation)
### [16. Performance Benchmark](#performance-benchmark)

<br>

## Introduction
***

<br>

`Caching` is the process of storing frequently accessed or computed data in a temporary, high-speed storage layer.

It helps in `reduce latency` i.e. faster access than primary storage.

Also, lower load on backend systems e.g. `DBs`, `APIs` etc.

Finally, improve scalability by serving repeated requests efficiently.

In this post, I am going to talk about `Redis` only. If time permits, I will talk about `Memcached` and `CHI` in separate post.

Discussion would be limited to `Perl` only and the reason is obvious.

<br>

## What is Valkey?
***

<br>

In `March 2024`, after `Redis Inc.` announced that future versions of `Redis` would no longer be open source, the `Linux Foundation`, `Redis OSS developers` and contributors united to fork version `7.2` of `Redis OSS` and created the `Valkey` project.

It is stewarded by the `Linux Foundation` and the community is rapidly improving `Valkey` with contributions from a vibrant developer community.

**Source**: [**https://aws.amazon.com/elasticache/what-is-valkey**](https://aws.amazon.com/elasticache/what-is-valkey)

<br>

## Setup Valkey
***

<br>

`Valkey` is a drop-in replacement for `Redis OSS`.

`Valkey` can run as either a standalone daemon or in a cluster, with options for replication and high availability.

Being a docker fan, I would like to run `Valkey` in a docker container.

Here is the docker compose configuration file: `docker-compose.yml`

<br>

```bash
version: '3.8'

services:
  valkey:
    image: valkey/valkey:latest
    container_name: valkey
    ports:
      - "6379:6379"
    restart: unless-stopped
```

<br>

### Start the Valkey container

<br>

``` bash
$ docker-compose up -d
Creating valkey ... done
```

<br>

### Check the container status

<br>

```bash
$ dps
Container ID: c88f9ad8e0dd
Image: valkey/valkey:latest
Command: "docker-entrypoint.s…"
Created: 2025-08-07 11:30:00 +0100 BST
Status: Up 1 minutes
Ports: 0.0.0.0:6379->6379/tcp, [::]:6379->6379/tcp
Names: valkey
```

<br>

### Test the connection

<br>

```bash
$ docker exec -it valkey valkey-cli ping
PONG
```

<br>

## Frequent Access Data
***

<br>

Time for some action, let's start with basic frequent access data.

**NOTE:** Throughout the post, I will use the term `Redis`, although technically `Valkey` is in action.

**File:** `frequent-access-data.pl`

<br>

```perl
#!/usr/bin/env perl

use v5.38;
use JSON;
use Redis::Fast;
use Data::Dumper;

my $redis = Redis::Fast->new(server => '127.0.0.1:6379');

# Test the cache
say "First request (uncached):";
my $user = get_user(42);
say Dumper($user);

say "\nSecond request (cached):";
$user = get_user(42);
say Dumper($user);

#
#
# SUBROUTINES

sub fetch_user_from_db {
    my ($user_id) = @_;
    say "Fetching user $user_id from database...";
    sleep 2;  # Simulate delay
    return {
        id    => $user_id,
        name  => "User_$user_id",
        email => "user$user_id\@example.com"
    };
}

sub get_user {
    my ($user_id) = @_;
    my $key = "user:$user_id";

    # Check Redis cache first
    my $cached_data = $redis->get($key);
    if ($cached_data) {
        say "Cache hit for user $user_id!";
        return eval { JSON::decode_json($cached_data) };  # Deserialize
    }

    # Cache miss: fetch from DB and store in Redis
    say "Cache miss for user $user_id.";
    my $user_data = fetch_user_from_db($user_id);
    $redis->set($key, JSON::encode_json($user_data));     # Serialize
    $redis->expire($key, 3600);  # Set TTL (1 hour)
    return $user_data;
}
```

<br>

### Let's run the script:

<br>

```bash
$ perl frequent-access-data.pl
First request (uncached):
Cache miss for user 42.
Fetching user 42 from database...
$VAR1 = {
          'id' => 42,
          'name' => 'User_42',
          'email' => 'user42@example.com'
        };


Second request (cached):
Cache hit for user 42!
$VAR1 = {
          'id' => '42',
          'name' => 'User_42',
          'email' => 'user42@example.com'
        };
```

<br>

## Publisher / Subscriber
***

<br>

`Redis`'s pub/sub model allows `Perl` scripts to act as `publishers` or `subscribers` for real-time messaging.

**File:** `publisher.pl`

<br>

```perl
#!/usr/bin/env perl

use v5.38;
use Redis::Fast;

my $redis = Redis::Fast->new(server => '127.0.0.1:6379');

while (1) {
    print "Enter message to publish (or 'quit' to exit): ";
    my $message = <STDIN>;
    chomp $message;
    last if $message eq 'quit';

    $redis->publish("news_channel", $message);
    say "Published: '$message'";
}
```

<br>

**File:** `subscriber.pl`

<br>

```perl
#!/usr/bin/env perl

use v5.38;
use Redis::Fast;

my $redis = Redis::Fast->new(server => '127.0.0.1:6379');

say "Subscribed to 'news_channel'. Waiting for messages...";

$redis->subscribe(
    "news_channel",
    sub {
        my ($message, $channel) = @_;
        say "Received: '$message'" if $channel eq 'news_channel';
    }
);

$redis->wait_for_messages();
```

<br>

To test this model, we need two separate terminals next to each other, so that we can publish a message and see the same in another.

First we would start the publisher:

<br>

```bash
$ perl publisher.pl
│Enter message to publish (or 'quit' to exit):
```

<br>

Go to the second terminal and start the subscriber:

<br>

```bash
$ perl subscriber.pl
Subscribed to 'news_channel'. Waiting for messages...
```

<br>

Now go back to the publisher terminal and type a message, you should see the same message appeared in the subscriber terminal.

So much fun with so little coding.

<br>

## Producer / Consumer
***

<br>

The `Publisher/Subscriber` model lacks persistence (messages are lost if no subscriber is active).

So if a message is published and no active subscriber found then the message is lost.

If there is an active subcriber and a new message is published, he would receive it.

To resolve this, we can use `Redis Streams`.

**File:** `producer-stream.pl`

<br>

```perl
#!/usr/bin/env perl

use v5.38;
use JSON;
use Redis::Fast;

my $redis = Redis::Fast->new(server => '127.0.0.1:6379');

while (1) {
    print "Enter message (or 'quit' to exit): ";
    my $message = <STDIN>;
    chomp $message;
    last if $message eq 'quit';

    my $data = {
        time => time,
        msg  => $message,
        from => 'producer'
    };

    # Add to stream with automatic ID
    my $id = $redis->xadd('message_stream', '*', %$data);
    say "Published message ID: $id";
}
```

<br>

**File:** `consumer-stream.pl`

<br>

```perl
#!/usr/bin/env perl

use v5.38;
use Redis::Fast;
use Time::Piece;

my $redis = Redis::Fast->new(
    server    => '127.0.0.1:6379',
    reconnect => 2,
    every     => 1000
);

my $last_id = '0-0';
say "Subscriber ready. Waiting for messages from ID: $last_id...";

while (1) {
    my $messages = eval {
        $redis->xread(
            'COUNT', 5,
            'BLOCK', 5000,
            'STREAMS', 'message_stream', $last_id
        );
    };

    if ($@) {
        warn "ERROR: $@";
        sleep 1;
        next;
    }

    unless ($messages) {
        say "No new messages (timeout)";
        next;
    }

    foreach my $stream (@$messages) {
        my ($stream_name, $entries) = @$stream;
        foreach my $entry (@$entries) {
            my ($id, $data) = @$entry;
            $last_id = $id;

            my %msg;
            for (my $i = 0; $i < @$data; $i += 2) {
                $msg{$data->[$i]} = $data->[$i+1];
            }

            my $timestamp = localtime($msg{time} || time);
            say "# Message";
            say "ID: $id";
            say "Time: $timestamp";
            say "From: $msg{from}" if exists $msg{from};
            say "Content: $msg{msg}\n";
        }
    }
}
```

<br>

We would again need two terminals, one for producer and another for consumer.

Let's start the producer and submit a message immediately.

Please note at this point, no consumer is assgined to this producer yet.

<br>

```bash
$ perl producer-stream.pl
Enter message (or 'quit' to exit): Hello
Published message ID: 1754566447313-0
Enter message (or 'quit' to exit):
```

<br>

### Let's start the consumer in the other terminal.

<br>

```bash
$ perl consumer-stream.pl
Subscriber ready. Waiting for messages from ID: 0-0...
# Message
ID: 1754566447313-0
Time: Thu Aug  7 12:34:07 2025
From: producer
Content: Hello
```

<br>

As soon as the consumer is assigned, it pulled the message from the producer.

I am having fun with this.

<br>

## Job Queue System
***

<br>

`Redis` lists can be used as lightweight job queues, similar to `RabbitMQ`.

**File:** `job-queue-producer.pl`

<br>

```perl
#!/usr/bin/env perl

use v5.38;
use Redis::Fast;

my $redis      = Redis::Fast->new(server => '127.0.0.1:6379');
my $queue_name = 'job_queue';

# Optional: Clear previous queue
$redis->del($queue_name);

my @jobs = ('process_image.jpg', 'generate_report', 'send_emails', 'cleanup');

foreach my $job (@jobs) {
    $redis->rpush($queue_name, $job);
    say "Produced job: $job";
    sleep(1); # Simulate job arrival rate
}
```

<br>

**File:** `job-queue-worker.pl`

<br>

```perl
#!/usr/bin/env perl

use v5.38;
use Redis::Fast;
use Parallel::ForkManager;

my $workers    = 3;
my $queue_name = 'job_queue';
my $pfm        = Parallel::ForkManager->new($workers);

for my $id (1..$workers) {
    $pfm->start and next;
    worker($id);
    $pfm->finish;
}

$pfm->wait_all_children;
say "All workers finished.";

#
#
# SUBROUTINES

sub worker {
    my ($worker_id) = @_;
    my $redis = Redis::Fast->new(server => '127.0.0.1:6379');

    say "Worker $worker_id started";

    while (1) {
        # 5 seconds timeout
        my $job = $redis->blpop($queue_name, 5);

        if ($job) {
            my ($qname, $job_data) = @$job;
            say "Worker $worker_id processing: $job_data";

            # Simulate work (1-2 seconds)
            sleep(1 + rand(2));

            say "Worker $worker_id completed: $job_data";
        } else {
            say "Worker $worker_id idle";

            # Exit if the queue if empty
            last if $redis->llen($queue_name) == 0;
        }
    }
}
```

<br>

### We will start the job queue producer first.

<br>

```bash
$ perl job-queue-producer.pl
Produced job: process_image.jpg
Produced job: generate_report
Produced job: send_emails
Produced job: cleanup
```

<br>

### Now let the worker pick the job and process.

<br>

```bash
$ perl job-queue-worker.pl
Worker 1 started
Worker 2 started
Worker 1 processing: process_image.jpg
Worker 2 processing: generate_report
Worker 3 started
Worker 3 processing: send_emails
Worker 2 completed: generate_report
Worker 2 processing: cleanup
Worker 3 completed: send_emails
Worker 1 completed: process_image.jpg
Worker 2 completed: cleanup
Worker 3 idle
Worker 1 idle
Worker 2 idle
All workers finished.
```

<br>

## Key - Value Storage
***

<br>

`Redis`'s key-value storage is ideal for `Perl` applications needing fast access.

**File:** `key-value-storage.pl`

<br>

```perl
#!/usr/bin/env perl

use v5.38;
use JSON;
use Redis::Fast;
use Data::Dumper;

my $redis = Redis::Fast->new(
    server    => '127.0.0.1:6379',
    reconnect => 2,
    every     => 500_000, # 500ms
);

say "\nFirst access:";
my $user = get_user_profile(1001);
say Dumper($user);

say "\nSecond access:";
$user = get_user_profile(1001);
say Dumper($user);

benchmark(1001, 5);

while (1) {
    print "\nEnter user ID to lookup (or 'quit'): ";
    my $input = <STDIN>;
    chomp $input;
    last if $input eq 'quit';

    if ($input =~ /^\d+$/) {
        my $data = get_user_profile($input);
        say "User $input:";
        say "Name: $data->{name}";
        say "Email: $data->{email}";
        say "Last login: " . scalar(localtime($data->{last_login}));
    } else {
        say "Invalid user ID";
    }
}

#
#
# SUBROUTINES

sub fetch_user_from_db {
    my ($user_id) = @_;
    say "DEBUG: Fetching user $user_id from database...";
    sleep 2; # Simulate database latency

    return {
        id    => $user_id,
        name  => "User_$user_id",
        email => "user$user_id\@example.com",
        roles => ['member', (rand > 0.7 ? 'premium' : ())],
        last_login => time - int(rand(86400 * 30)) # Random timestamp (0-30 days ago)
    };
}

sub get_user_profile {
    my ($user_id) = @_;
    my $cache_key = "user:$user_id:profile";

    # 1. Try Redis cache first
    if (my $cached = $redis->get($cache_key)) {
        say "DEBUG: Cache HIT for user $user_id";
        return decode_json($cached);
    }

    say "DEBUG: Cache MISS for user $user_id";

    # 2. Fetch from DB if not in cache
    my $profile = fetch_user_from_db($user_id);

    # 3. Store in Redis (with expiration)
    $redis->set($cache_key => encode_json($profile));
    $redis->expire($cache_key => 3600); # Expire in 1 hour

    return $profile;
}

sub benchmark {
    my ($user_id, $iterations) = @_;

    say "Benchmarking $iterations iterations:";

    # Without cache
    my $start = time;
    for (1..$iterations) {
        fetch_user_from_db($user_id);
    }
    say sprintf("Without cache: %0.2f seconds", time - $start);

    # With cache
    $start = time;
    for (1..$iterations) {
        get_user_profile($user_id);
    }
    say sprintf("With Redis cache: %0.2f seconds", time - $start);
}
```

<br>

### Let's run the script:

<br>

```bash
$ perl key-value-storage.pl

First access:
DEBUG: Cache MISS for user 1001
DEBUG: Fetching user 1001 from database...
$VAR1 = {
          'email' => 'user1001@example.com',
          'last_login' => 1752035569,
          'id' => 1001,
          'name' => 'User_1001',
          'roles' => [
                       'member'
                     ]
        };


Second access:
DEBUG: Cache HIT for user 1001
$VAR1 = {
          'id' => '1001',
          'name' => 'User_1001',
          'roles' => [
                       'member'
                     ],
          'last_login' => 1752035569,
          'email' => 'user1001@example.com'
        };

Benchmarking 5 iterations:
DEBUG: Fetching user 1001 from database...
DEBUG: Fetching user 1001 from database...
DEBUG: Fetching user 1001 from database...
DEBUG: Fetching user 1001 from database...
DEBUG: Fetching user 1001 from database...
Without cache: 10.00 seconds
DEBUG: Cache HIT for user 1001
DEBUG: Cache HIT for user 1001
DEBUG: Cache HIT for user 1001
DEBUG: Cache HIT for user 1001
DEBUG: Cache HIT for user 1001
With Redis cache: 0.00 seconds

Enter user ID to lookup (or 'quit'): 1001
DEBUG: Cache HIT for user 1001
User 1001:
Name: User_1001
Email: user1001@example.com
Last login: Wed Jul  9 05:32:49 2025
```

<br>

### How this is different from cache frequently accessed data?

<br>

`Key-Value` provides persistent storage with fast access where as caching frequent access data provides temporary storage to reduce backend load.

<br>

## Atomic Counter
***

<br>

`Redis`'s atomic operations (like `INCR`) can help in counting requests or tracking user activity.

**File:** `atomic-counter.pl`

<br>

```perl
#!/usr/bin/env perl

use v5.38;
use Redis::Fast;

my $redis = Redis::Fast->new(server => '127.0.0.1:6379');

# Concurrent simulation (safe across multiple processes)
say "Homepage views: " . record_page_view('home');
say "Homepage views: " . record_page_view('home');
say "Product views : " . record_page_view('product');

sub record_page_view {
    my ($page_id) = @_;

    # INCR is atomic - safe for concurrent access
    my $views = $redis->incr("page:views:$page_id");

    # Set expiry only on first view (using SETNX)
    $redis->setnx("page:views:$page_id:expiry", 1) &&
        $redis->expire("page:views:$page_id", 86400); # Expire in 24h

    return $views;
}
```

<br>

### Let's run the script:

<br>

```bash
$ perl atomic-counter.pl
Homepage views: 1
Homepage views: 2
Product views : 1

$ perl atomic-counter.pl
Homepage views: 3
Homepage views: 4
Product views : 2

$ perl atomic-counter.pl
Homepage views: 5
Homepage views: 6
Product views : 3
```

<br>

## Atomic Transaction
***

<br>

**File:** `atomic-transaction.pl`

<br>

```perl
#!/usr/bin/env perl

use v5.38;
use Redis::Fast;

my $redis = Redis::Fast->new(server => '127.0.0.1:6379');

$redis->setnx("inventory:widget_123", 100);

# Try reserve 5 units
if (reserve_inventory('widget_123', 5)) {
    say "Inventory reserved successfully!";
} else {
    say "Failed - not enough stock or race condition.";
}

# Show inventory
my $remaining = $redis->get("inventory:widget_123");
say "Remaining inventory: $remaining";

sub reserve_inventory {
    my ($item_id, $quantity) = @_;

    $redis->watch("inventory:$item_id");

    my $available = $redis->get("inventory:$item_id") // 0;
    return 0 unless $available >= $quantity;

    # Start transaction
    $redis->multi;
    $redis->decrby("inventory:$item_id", $quantity);

    # Execute transaction
    my $result = $redis->exec;

    # exec() returns undef if watched key changed => transaction aborted
    return $result ? 1 : 0;
}
```

<br>

### Let's run the script:

<br>

```bash
$ perl atomic-transaction.pl
Inventory reserved successfully!
Remaining inventory: 95

$ perl atomic-transaction.pl
Inventory reserved successfully!
Remaining inventory: 90
```

<br>

## Atomic Leaderboard
***

<br>

**File:** `atomic-leaderboard.pl`

<br>

```perl
#!/usr/bin/env perl

use v5.38;
use Redis::Fast;

my $redis = Redis::Fast->new(server => '127.0.0.1:6379');

update_score('player_1', 50);
update_score('player_2', 75);
update_score('player_1', 25);

my $leaders = get_leaderboard();
say "Top Players:";
while (my ($player, $score) = splice(@$leaders, 0, 2)) {
    say "$player: $score points";
}

#
#
# SUBROUTINES

sub update_score {
    my ($player_id, $points) = @_;

    $redis->zincrby("game_leaderboard", $points, $player_id);
}

sub get_leaderboard {
    return $redis->zrevrange("game_leaderboard", 0, 4, 'WITHSCORES');
}
```

<br>

### Run the script:

<br>

```bash
$ perl atomic-leaderboard.pl
Top Players:
player_2: 75 points
player_1: 75 points

$ perl atomic-leaderboard.pl
Top Players:
player_2: 150 points
player_1: 150 points
```

<br>

## Atomic vs Non-atomic
***

<br>

Let's do some benchmarking `Atomic vs Non-atomic`.

**File:** `atomic-vs-non-atomic.pl`

<br>

```perl
#!/usr/bin/env perl

use v5.38;
use Redis::Fast;
use Benchmark qw(:hireswallclock cmpthese);

my $redis = Redis::Fast->new(server => '127.0.0.1:6379');

cmpthese(-1, {
    atomic     => \&safe_counter,
    non_atomic => \&unsafe_counter,
});

#
#
# SUBROUTINES

# Non-atomic
sub unsafe_counter {
    my $val = $redis->get("counter");
    $redis->set("counter", $val + 1);
}

# Atomic
sub safe_counter {
    $redis->incr("counter");
}
```

<br>

### Let's see the result.

<br>

```bash
$ perl atomic-vs-non-atomic.pl
              Rate non_atomic     atomic
non_atomic 22974/s         --       -53%
atomic     49104/s       114%         --
```

<br>

## Safe Counter with Lock
***

<br>

How `Redis` is `thread-safe`?

Here is the script that starts `10` processes each incrementing the counter by one.

**File:** `safe-counter-with-lock.pl`

<br>

```perl
#!/usr/bin/env perl

use v5.38;
use Fcntl qw(:flock);
use Parallel::ForkManager;

my $COUNTER_FILE   = "counter.txt";
my $TEST_PROCESSES = 10;

open(my $fh, ">", $COUNTER_FILE) or die $!;
print $fh "0";
close $fh;

my $pm = Parallel::ForkManager->new($TEST_PROCESSES);

for (1..$TEST_PROCESSES) {
    $pm->start and next;

    open(my $fh, "+<", $COUNTER_FILE) or die $!;
    flock($fh, LOCK_EX) or die "Cannot lock";
    my $file_count = <$fh>;
    seek($fh, 0, 0);
    print $fh ++$file_count;
    truncate($fh, tell($fh));
    close($fh);

    $pm->finish;
}

$pm->wait_all_children;

open($fh, "<", $COUNTER_FILE);
my $final_file_count = <$fh>;
close($fh);

say sprintf("File counter (with locking): %2d (should be %d)", $final_file_count, $TEST_PROCESSES);
```

<br>

### Run the script.

<br>

```bash
$ perl safe-counter-with-lock.pl
File counter (with locking): 10 (should be 10)
```

<br>

## Safe Counter Atomic
***

<br>

**File:** `safe-counter-atomic.pl`

<br>

```perl
#!/usr/bin/env perl

use v5.38;
use Redis::Fast;
use Parallel::ForkManager;

my $redis = Redis::Fast->new(
    server    => '127.0.0.1:6379',
    reconnect => 2,
    every     => 500_000
);

$redis->del("safe_counter");
say "Counter reset to 0";

my $pm = Parallel::ForkManager->new(10);
say "Starting 10 parallel increments...";

for (1..10) {
    $pm->start and next;
    increment_counter();
    $pm->finish;
}

$pm->wait_all_children;

my $final_count = $redis->get("safe_counter");
say "Final counter value: $final_count (should be 10)";

#
#
# SUBROUTINES

sub increment_counter {
    my $count = $redis->incr("safe_counter");
    say "Process $$ incremented counter to $count";
}
```

<br>

### Run the script:

<br>

```bash
$ perl safe-counter-atomic.pl
Counter reset to 0
Starting 10 parallel increments...
Process 79419 incremented counter to 1
Process 79418 incremented counter to 2
Process 79421 incremented counter to 4
Process 79420 incremented counter to 3
Process 79422 incremented counter to 5
Process 79423 incremented counter to 6
Process 79424 incremented counter to 7
Process 79427 incremented counter to 9
Process 79428 incremented counter to 8
Process 79425 incremented counter to 10
Final counter value: 10 (should be 10)
```

<br>

## Inventory Reservation
***

<br>

**File:** `inventory-reservation.pl`

<br>

```perl
#!/usr/bin/env perl

use v5.38;
use Redis::Fast;

my $redis = Redis::Fast->new(server => '127.0.0.1:6379');

$redis->set("inventory:widget", 100) unless $redis->exists("inventory:widget");

# Simulate 5 concurrent reservations
my @pids;
for (1..5) {
    my $pid = fork();
    die "fork failed" unless defined $pid;
    if ($pid == 0) {
        say "Process $$: " . reserve_stock("widget", 30);
        exit;
    }
    push @pids, $pid;
}
waitpid($_, 0) for @pids;

say "Remaining stock: " . $redis->get("inventory:widget");

#
#
# SUBROUTINES

sub reserve_stock {
    my ($item, $quantity) = @_;

    $redis->watch("inventory:$item");
    my $available = $redis->get("inventory:$item");

    if ($available >= $quantity) {
        $redis->multi;
        $redis->decrby("inventory:$item", $quantity);
        my $result = $redis->exec;
        return $result ? "Reserved $quantity" : "Retry needed";
    }
    return "Out of stock";
}
```

<br>

### Test the script.

<br>

```bash
$ perl inventory-reservation.pl
Process 81059: Reserved 30
Process 81060: Retry needed
Process 81062: Retry needed
Process 81061: Retry needed
Process 81063: Retry needed
Remaining stock: 70

$ vim inventory-reservation.pl
Process 81086: Reserved 30
Process 81089: Retry needed
Process 81088: Retry needed
Process 81087: Retry needed
Process 81090: Retry needed
Remaining stock: 40

$ perl inventory-reservation.pl
Process 81092: Reserved 30
Process 81093: Retry needed
Process 81096: Out of stock
Process 81094: Retry needed
Process 81095: Retry needed
Remaining stock: 10

$ perl inventory-reservation.pl
Process 81100: Out of stock
Process 81098: Out of stock
Process 81099: Out of stock
Process 81101: Out of stock
Process 81102: Out of stock
Remaining stock: 10
```

<br>

## Performance Benchmark
***

<br>

**File:** `performance-benchmark.pl`

<br>

```perl
#!/usr/bin/env perl

use v5.38;
use Redis::Fast;
use Benchmark qw(:hireswallclock cmpthese);

my $redis = Redis::Fast->new(server => '127.0.0.1:6379');

$redis->del("bench_counter");
$redis->set("bench_counter", 0);

cmpthese(50_000, {
    redis_atomic => sub { $redis->incr("bench_counter") },
    perl_shared  => sub {
        require threads::shared;
        my $lock :shared;
        { lock($lock); $redis->get("bench_counter") + 1 }
    },
});
```

<br>

### Test Result:

<br>

```bash
$ perl performance-benchmark.pl
                Rate  perl_shared redis_atomic
perl_shared  40984/s           --         -15%
redis_atomic 48077/s          17%           --
```

<br>

***

<br>

`Happy Hacking !!!`
