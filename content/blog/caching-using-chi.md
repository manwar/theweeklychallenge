---
title: "Caching using CHI"
date: 2025-09-08T00:00:00+00:00
description: "Discussion about Caching using CHI in Perl."
type: post
image: images/blog/caching-using-chi.jpg
author: Mohammad Sajid Anwar
tags: ["perl"]
---

#### **DISCLAIMER:** Image is generated using `ChatGPT`.
<br>

### [**1. Introduction**](#introduction)
### [**2. Installation**](#installation)
### [**3. Examples**](#examples)
### [**4. CHI::Cache**](#chicache)
### [**5. CHI::Tiered**](#chitiered)
### [**6. Conclusion**](#conclusion)

<br>

## Introduction
***

This is the third and last post in the series `Caching in Perl`. If you missed the first two then please follow the links below:

<br>

#### [**1. Caching using Redis/Valkey**](https://theweeklychallenge.org/blog/caching-in-perl)

#### [**2. Caching using Memcached**](https://theweeklychallenge.org/blog/caching-using-memcached)

<br>

In this post, I'm sharing my experience with [**CHI**](https://metacpan.org/pod/CHI).

While working on my previous post for `Redis`, I fell in love with it as I had never used it before.

Then when I started my second post about [**Memcached**](https://memcached.org), I discovered new things about it, even though I had worked with it in the past.

To be honest, I'm really enjoying this process as I'm learning a lot on this journey.

I saved `CHI` for last in this series specifically to demonstrate the power of all the caching systems we've covered so far.

I must admit, I had never used `CHI` before, so everything was new to me.

I only knew that it provided some kind of caching layer.

The best part of `CHI` is that it offers a unified interface for working with multiple caching services.

It is the `Swiss Army knife` for caching needs and one of the most valuable tools in a modern `Perl` developer's toolkit.

`CHI` helps you decouple your application code from a specific cache implementation.

You write your code to the `CHI` interface.

And then, you can switch your cache backend from `in-memory` to `memcached` to a `FastMmap` file.

Or even a multi-level cache, by changing just a single line of configuration.

There's no need to rewrite your `get/set` calls.

<br>

## Installation
***

For the purpose of this post, we would need `Valkey` and `Memcached`.

With regard to installation, you can find the details in the post above.

Please find below, quick recaps.

Here is the docker configuration, `docker-compose.yml`, to create docker container running `Valkey`.

**NOTE**: `Valkey` is the new open source project name for `Redis`.

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

Now, we can start the container like below:

<br>

```bash
$ docker-compose up -d
Creating valkey ... done
```

<br>

We can now install the `memcached` if missing as below:

<br>

```bash
$ sudo apt install memcached libmemcached-tools
$ sudo systemctl enable memcached
$ sudo systemctl start memcached
$ sudo systemctl status memcached
```

<br>

We can now install the `Perl` client as below:

<br>

```bash
$ cpanm -vS CHI Cache::Memcached::Fast Redis::Fast
```

<br>

## Examples
***

Here is a very simple example showing file-based caching using `CHI`.

**File:** `chi-file.pl`

<br>

```perl
#!/usr/bin/env perl

use v5.38;
use CHI;

my $cache = CHI->new(driver => 'File', root_dir => '/tmp/my_cache');
my $key   = 'key';

# Clear cache.
$cache->clear;

get($cache, $key);
get($cache, $key);

#
#
# SUBROUTINES

sub get($cache, $key) {
    my $val = $cache->get($key);
    if (!defined $val) {
        say "Cache MISS, fetching from database.";
        sleep 1; # Simulate slow query
        $val = 'val';
        $cache->set($key, $val);
    }
    else {
        say "Cache HIT, serving from cache.";
    }
}
```

<br>

Let's check the result:

<br>

```bash
$ perl chi-file.pl
Cache MISS, fetching from database.
Cache HIT, serving from cache.
```

<br>

So far, so good.

But did you notice something new in the code above? The use of `driver`.

It is the storage backends for `CHI`. Below is some of the most commonly used backends:

<br>

    Memory            - Volatile, in-process memory.
    File              - On-disk storage.
    Memcached / Redis - Distributed caches for multi-process/multi-server environments.
    FastMmap          - Shared memory via mmap'd files.
    and many more

<br>

The killer feature of `CHI` in my opinion is the support for tiered cache.

<br>

### How about tiered cache?

<br>

Using `CHI`, we can have 2 levels cache i.e. setting up `l1_cache` infront of primary cache.

Here is a simple example showing the power of `CHI` layered caches i.e. `Memory` and `File`.

**File:** `chi-l1-cache.pl`

<br>

```perl
#!/usr/bin/env perl

use v5.38;
use Test::More;
use CHI;

my $cache = CHI->new(
    driver   => 'File',
    root_dir => '/tmp/file_cache',
    l1_cache => { driver => 'Memory', global => 1 },
);

$cache->clear;

my $key = 'key';
my $val = 'val';

is($cache->get($key), undef, 'First get miss');

$cache->set($key, $val);
is($cache->get($key), $val, 'Found key after set');

my $file_cache = CHI->new(driver => 'File', root => '/tmp/file_cache');
$file_cache->remove($key);
is($file_cache->get($key), undef, 'Key missing in file cache');

is($cache->get($key), $val, 'Found key in L1 cache');

done_testing;
```

<br>

Time for some action now.

<br>

```bash
$ perl chi-l1-cache.pl
ok 1 - First get miss
ok 2 - Found key after set
ok 3 - Key missing in file cache
ok 4 - Found key in L1 cache
1..4
```

<br>

## CHI::Cache
***

During my research, one thing keep bothering me about cache operation stats.

It would be handy to know, how many hits and miss per cache.

I found [**CHI::Stats**](https://metacpan.org/pod/CHI::Stats) on `MetaCPAN`.

Unfortunately it didn't answer any one of my questions.

May be, it's time to re-invent the wheel.

This is my initial draft.

**File:** `chi-cache.pl`

<br>

```perl
package CHI::Cache;

use CHI;
use Moo;
use Time::HiRes qw(time);

has 'cache' => (is => 'ro', required => 1);
has 'stats' => (
    is      => 'ro',
    lazy    => 1,
    builder => '_build_stats',
);

sub _build_stats {
    my ($self) = @_;

    my $stats = CHI->stats;
    $stats->enable;

    return $stats;
}

sub label {
    my ($self) = @_;

    return $self->cache->label;
}

sub get {
    my ($self, @args) = @_;

    my $t0   = time;
    my $val  = $self->cache->get(@args);
    my $t1   = time;
    my $data = $self->data;

    $data->{gets}++;
    (defined $val) ? ($data->{hits}++) : ($data->{misses}++);
    $data->{get_time_ms} += int(($t1 - $t0) * 1000);

    return $val;
}

sub set {
    my ($self, @args) = @_;

    my $t0   = time;
    my $val  = $self->cache->set(@args);
    my $t1   = time;
    my $data = $self->data;

    $data->{sets}++;
    $data->{set_time_ms} += int(($t1 - $t0) * 1000);

    return $val;
}

sub data {
    my ($self) = @_;

    return $self->stats->stats_for_driver($self->cache);
}

sub AUTOLOAD {
    our $AUTOLOAD;
    my ($self, @args) = @_;

    my $method = $AUTOLOAD;
    $method =~ s/.*:://;

    return if $method eq 'DESTROY';
    return $self->cache->$method(@args);
}

package main;

use v5.38;
use CHI;
use CHI::Cache;
use Data::Dumper;

my $caches = [
    CHI->new(driver => 'Memory', global   => 1),
    CHI->new(driver => 'File',   root_dir => '/tmp/chi_file_cache'),
];

foreach (@$caches) {
    my $cache = CHI::Cache->new(cache => $_);
    $cache->set('foo', 'bar');
    $cache->get('foo');
    $cache->get('baz');
    say "Cache: ", $cache->label;
    say Dumper($cache->data);
}
```

<br>

Let's test the script.

<br>

```bash
$ perl chi-cache.pl
Cache: Memory
$VAR1 = {
          'hits' => 1,
          'set_time_ms' => 0,
          'sets' => 1,
          'misses' => 1,
          'start_time' => 1757341995,
          'gets' => 2,
          'get_time_ms' => 0
        };

Cache: File
$VAR1 = {
          'gets' => 2,
          'get_time_ms' => 0,
          'set_time_ms' => 3,
          'start_time' => 1757341995,
          'sets' => 1,
          'misses' => 1,
          'hits' => 1
        };
```

<br>

Decent result, not a perfect one though.

<br>

## CHI::Tiered
***

I was wondering, why limit to just `l1_cache`.

I decided to work on solution where user can choose how many layers and type of cache to pick.

<br>

### GitHub Repository: [CHI::Tiered](https://github.com/manwar/CHI-Tiered)

<br>

There are two ways to work with `CHI::Tiered` as below:

First passing list of hashrefs.

<br>

```perl
my $cache = CHI::Tiered->new(
    [driver => 'Memory',    global   => 1                  ],
    [driver => 'File',      root_dir => '/tmp/cache'       ],
    [driver => 'Memcached', servers  => ['127.0.0.1:11211']],
);
```

<br>

Or passing list of `CHI` objects.

<br>

```perl
my $memory    = CHI->new(driver => 'Memory',    global   => 1);
my $file      = CHI->new(driver => 'File',      root_dir => '/tmp/cache');
my $memcached = CHI->new(driver => 'Memcached', servers  => ['127.0.0.1:11211']);

my $cache = CHI::Tiered->new($memory, $file, $memcached);
```

<br>

The order of cache is important, fastest to slowest. You can decide the order.

Standard operations are as below:

<br>

```perl
$cache->set($key, $val, '1 hour');
my $value = $cache->get($key);
$cache->remove($key);
$cache->clear;
```

<br>

Let's build and test the package `CHI::Tiered`.

<br>


```bash
$ perl Makefile.PL
Checking if your kit is complete...
Looks good
Generating a Unix-style Makefile
Writing Makefile for CHI::Tiered
Writing MYMETA.yml and MYMETA.json

$ make
cp lib/CHI/Tiered.pm blib/lib/CHI/Tiered.pm
Manifying 1 pod document

$ make test
PERL_DL_NONLAZY=1 "/usr/bin/perl" "-MExtUtils::Command::MM" "-MTest::Harness" "-e" "undef *Test::Harness::Switches; test_harness(0, 'blib/lib', 'blib/arch')" t/*.t
t/00-load.t ............. 1/1 # Testing CHI::Tiered 0.01, Perl 5.038002, /usr/bin/perl
t/00-load.t ............. ok
t/01_driver_name.t ...... ok
t/02_driver_obj.t ....... ok
t/03_driver_extended.t .. ok
t/manifest.t ............ ok
t/pod.t ................. ok
All tests successful.
Files=6, Tests=39,  0 wallclock secs ( 0.01 usr  0.00 sys +  0.40 cusr  0.07 csys =  0.48 CPU)
Result: PASS
```

<br>



## Conclusion
***

This exercise was worth it. In the end, I have got two solutions: `CHI::Cache` and `CHI::Tiered`.

I will try it few times before pushing it to `CPAN`.

If you have any suggestions, please do share with me: `mohammad.anwar@yahoo.com`.

***

<br>

`Happy Hacking !!!`
