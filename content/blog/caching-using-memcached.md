---
title: "Caching using Memcached"
date: 2025-08-26T00:00:00+00:00
description: "Discussion about Caching using Memcached in Perl."
type: post
image: images/blog/caching-using-memcached.jpg
author: Mohammad Sajid Anwar
tags: ["perl"]
---

#### **DISCLAIMER:** Image is generated using `ChatGPT`.
<br>

### 1. [Introduction](#introduction)
### 2. [Installation](#installation)
### 3. [Benchmark](#benchmark)
### 4. [Distributed Server](#distributed-server)

<br>

## Introduction
***

<br>

Recently I shared my experience with [**Redis/Valkey**](/blog/caching-in-perl). Continue exploring further, today I will share another very popular choice `Memcached`. My introduction to caching was through `Memcached`.

[**Memcached**](https://memcached.org) is a lightning-fast caching server that stores data in `RAM` for instant access.

It works like a `key-value` store.

`Memcached` is ideal for

<br>

    - High-traffic websites (reduce DB load)
    - Session storage (fast login checks)
    - API response caching
    - Computationally expensive operations

<br>

### Key Advantages:

<br>

    - Blazing Fast: Microsecond response times
    - Distributed: Share cache across servers
    - Simple: Just get()/set() operations

<br>

## Installation
***

<br>

On my local setup, running `Ubuntu 24.04.01 LTS`, this is what I did.

<br>

```bash
$ sudo apt install memcached libmemcached-tools
```

<br>

Let's enable and start the `memcached` service now.

<br>

```bash
$ sudo systemctl enable memcached
$ sudo systemctl start memcached
```

<br>

Now check the status.

<br>

```bash
$ systemctl status memcached
memcached.service - memcached daemon
     Loaded: loaded (/usr/lib/systemd/system/memcached.service; enabled; preset: enabled)
     Active: active (running) since Sun 2025-08-17 12:43:12 BST; 1 week 1 day ago
       Docs: man:memcached(1)
   Main PID: 221 (memcached)
      Tasks: 10 (limit: 18986)
     Memory: 2.7M (peak: 4.0M swap: 596.0K swap peak: 608.0K)
        CPU: 21.556s
     CGroup: /system.slice/memcached.service
             └─221 /usr/bin/memcached -m 64 -p 11211 -u memcache -l 127.0.0.1 -l ::1 -P /var/run/memcached/memcached.pid
```

<br>

How about checking the version of `memcached` running?

<br>

```bash
$ memcstat --servers=127.0.0.1:11211 | grep version
version: 1.6.24
```

<br>

Finally we need a `Perl` client to talk to the `memcached` server.

As always, [**MetaCPAN**](https://metacpan.org) is the place for all solutions. I found [**Cache::Memcached::Fast**](https://metacpan.org/pod/Cache::Memcached::Fast), a `Perl` client for memcached, in `C` language.

Installing the client is as simple as below:

<br>

```bash
$ cpanm -vS Cache::Memcached::Fast
```

<br>

Let's check the version installed.

<br>

```bash
$ perl -MCache::Memcached::Fast -e 'print "$Cache::Memcached::Fast::VERSION\n"'
0.28
```

<br>

## Benchmark
***

<br>

Below is a very simple script that simulate the database.

**File**: `memc.pl`

<br>

```perl
#!/usr/bin/env perl

use v5.38;
use Cache::Memcached::Fast;
use Time::HiRes qw(gettimeofday tv_interval);

my $memd = Cache::Memcached::Fast->new({
    servers => ['127.0.0.1:11211']
});

# Simulate Database
my %fake_db = (
    1001 => { name => "Widget", price => 9.99 },
    1002 => { name => "Gadget", price => 8.88 }
);

say "First Fetch (uncached)";
my $start   = [gettimeofday];
my $product = get_product(1001);
say sprintf("Took %.3f seconds\n", tv_interval($start));

say "Second Fetch (cached)";
$start   = [gettimeofday];
$product = get_product(1001);
say sprintf("Took %.3f seconds\n", tv_interval($start));

#
#
# SUBROUTINES

sub get_product($id) {
    my $key = "product:$id";

    my $data;
    if ($data = $memd->get($key)) {
        say "Cache HIT for $id.";
    }
    else {
        say "Cache MISS for $id - querying database.";
        $data = expensive_db_query($id);
        # Cache for 10 secs
        $memd->set($key, $data, 10);
    }

    return $data;
}
```

<br>

Let's test the setup now.

<br>

```bash
$ perl memc.pl
First Fetch (uncached)
Cache MISS for 1001 - querying database.
Took 1.003 seconds

Second Fetch (cached)
Cache HIT for 1001.
Took 0.001 seconds
```

<br>

## Distributed Server
***

<br>

We can setup `Memcached`'s distributed caching across multiple servers.

Let's run two more services.

<br>

```bash
$ memcached -p 11212 -d
$ memcached -p 11213 -d
```

<br>

Let's check the status of all `memcached` services.

<br>

```bash
$ ps aux | grep memcached
memcache     221  0.0  0.0 413152  4352 ?        Ssl  Aug24   0:21 /usr/bin/memcached -m 64 -p 11211 -u memcache -l 127.0.0.1 -l ::1 -P /var/run/memcached/memcached.pid
manwar    687242  0.0  0.0 412128  2480 ?        Ssl  11:27   0:00 memcached -p 11212 -d
manwar    687870  0.0  0.0 412128  2480 ?        Ssl  11:29   0:00 memcached -p 11213 -d
```

<br>

We will now create a very simple client to demonstrate the distributed caching.

**File**: `memc-client.pl`

<br>

```perl
#!/usr/bin/env perl

use v5.38;
use Data::Dumper;
use Digest::SHA qw(sha1);
use Cache::Memcached::Fast;

my @servers = (
    '127.0.0.1:11211',
    '127.0.0.1:11212',
    '127.0.0.1:11213',
);

my $memd = Cache::Memcached::Fast->new({
    servers   => \@servers,
    namespace => 'myapp:',
});

$memd->set('user:1001',  { name => 'Alice' }, 3600);
$memd->set('product:42', { name => 'Widget', price => 9.99 }, 3600);

for my $key ('user:1001', 'product:42') {
    my $value  = $memd->get($key);
    my $server = find_server_for_key('myapp:' . $key);

    say "Fetched key '$key' from server $server";
    say "Value: ", (defined $value ? Dumper($value) : 'undef');
}

#
#
# SUBROUTINES

sub find_server_for($key) {
    my $hash = unpack("N", substr(sha1($key), 0, 4));
    my $server_index = $hash % @servers;
    return $servers[$server_index];
}
```

<br>

Time for action.

<br>

```bash
$ perl memc-client.pl
Fetched key 'user:1001' from server 127.0.0.1:11213
Value: $VAR1 = {
          'name' => 'Alice'
        };

Fetched key 'product:42' from server 127.0.0.1:11212
Value: $VAR1 = {
          'name' => 'Widget',
          'price' => '9.99'
        };
```

<br>

Did you notice, the two servers in action helping with caching?

This should be a good foundation for anyone to take it further.

***

<br>

`Happy Hacking !!!`
