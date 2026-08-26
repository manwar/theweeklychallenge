---
title: "Bloom Filter"
date: 2026-08-26T00:00:00+00:00
description: "Use of Bloom filter with Perl."
type: post
image: images/blog/bloom-filter.jpg
author: Mohammad Sajid Anwar
tags: ["Perl", "Bloom Filter"]
---

#### **DISCLAIMER:** Image is generated using `ChatGPT`.
***
<br>

**Bloom** filter, I have heard about it but never got the opportunity to use it any real projects. Recently I was reading this [**research paper**](https://openaccess.city.ac.uk/id/eprint/14304/) that reminded me to give it a try.

Imagine you are running a massive website with billions of users. When someone tries to sign up with a username, you need to check if that username is already taken.

Scanning a massive database every single time is slow and expensive. That is where a **Bloom filter** comes in. It acts as a super-fast, memory-efficient gatekeeper.

## How It Works

A **Bloom filter** is essentially a bit array (a long row of zeros and ones) initialised to all **0s**, combined with a few different hash functions.

### 1. &nbsp;&nbsp;Adding a user (e.g., "Alice")

When **"Alice"** registers, her username is run through multiple hash functions.

Each hash function spits out a specific position (index) in the bit array. We flip the bits at those positions from **0** to **1**.

    Hash 1("Alice") = 3
    Hash 2("Alice") = 7
    Hash 3("Alice") = 12

Positions **3**, **7**, and **12** are now set to **1**.

### 2. &nbsp;&nbsp;Checking if a user exists

When someone looks up a **username**, the system hashes that name using the exact same functions and checks those positions.

**Scenario A: &nbsp;&nbsp;Checking for "Bob"

The hashes point to positions **2**, **7**, and **9**. Position **2** is still a **0**.

Conclusion: **"Bob"** definitively does not exist. If he did, that bit would have been flipped to **1**.

**Scenario B: &nbsp;&nbsp;Checking for "Charlie"

The hashes point to positions **3**, **7**, and **12**.

All of these are already **1**, because **Alice** flipped them earlier!

Conclusion: **"Charlie"** probably exists.

## The Catch: &nbsp;&nbsp;False Positives

Why **"probably"**? Because of collisions.

Imagine **"Charlie"** has never signed up. However, when we hash **"Charlie"**, his positions happen to be **3**, **7**, and **12**. Because **"Alice"** (and maybe other users) already flipped those exact bits to **1**, the **Bloom** filter will mistakenly say, **"Yep, Charlie is in here!"**

**Crucial Rule**: Bloom filters can have false positives (saying someone exists when they don't), but they can never have false negatives (if it says someone doesn't exist, it is a mathematical guarantee).

It sounds flawed, but it's actually a brilliant optimisation tool because it is incredibly fast and uses very little memory compared to a traditional database or hash table.

Using a **CPAN** module makes things much cleaner, faster, and production-ready.

The standard, most reliable module for this in the **Perl** ecosystem is [**Bloom::Filter**](https://metacpan.org/pod/Bloom::Filter).

It handles the bit-vector management and the mathematical hashing (using the fast [**Digest::SHA1**](https://metacpan.org/pod/Digest::SHA) algorithm under the hood) automatically.

To prove why **Bloom** filters are heavily used by companies like **Google** (in BigTable), **Medium**, and **Netflix**, we have to look at the math and the hardware benchmarks.

When you want to check if a user or an item exists, your primary choices are a **Hash Map** (or a standard database index) versus a **Bloom** filter.

## Memory Comparison

A **Hash Map** must store the actual keys (usernames or strings) to resolve collisions and guarantee answers.

A **Bloom** filter never stores the data itself, only single bits (**0** or **1**).

## Benchmark

Let's see some numbers.

[**Source**]: `benchmark.pl`

```perl
#!/usr/bin/env perl
use strict;
use warnings;
use Bloom::Filter;
use Time::HiRes qw(gettimeofday tv_interval usleep);
```

**Setup Data:**

```perl
print "Generating simulation data...\n";
my %database       = map { "user_" . int(rand(5000)) => 1 } (1..1000);
my @existing_users = keys %database;
print "Database populated with " . scalar(@existing_users) . " unique users.\n";
my @login_attempts = map { "user_" . int(rand(100000)) } (1..5000);

my $bf = Bloom::Filter->new(capacity => 1000, error_rate => 0.001);
$bf->add(@existing_users);
```

**Mock Database Lookup Function:**

This simulates a standard database query over a network with a **0.2ms (200 microseconds)** delay.

```perl
sub query_database { usleep(200); return exists $database{shift}; }
```

**TEST 1: DATABASE LOOKUP ONLY**

```perl
print "\nRunning Test 1: Database Lookup Only (Simulating 0.2ms network latency per query)...\n";
my $t0_db   = [gettimeofday];
my $db_hits = 0;
query_database($_) && $db_hits++ for @login_attempts;
my $elapsed_db = tv_interval($t0_db);
```

**TEST 2: BLOOM FILTER + DATABASE**

```perl
print "Running Test 2: Bloom Filter Guarding the Database...\n";
my $t0_bf            = [gettimeofday];
my $bf_hits          = 0;
my $saved_db_queries = 0;
foreach my $attempt (@login_attempts) {
    if ($bf->check($attempt)) {
        $bf_hits++ if query_database($attempt);
    }
    else {
        $saved_db_queries++;
    }
}
my $elapsed_bf = tv_interval($t0_bf);
```

**THE RESULTS**

```perl
print "\nPERFORMANCE RESULTS\n";
print "---------------------------------------------------------\n";
printf "Total Login Attempts Tested : %d\n", scalar(@login_attempts);
printf "Database-Only Time          : %.4f seconds\n", $elapsed_db;
printf "Bloom Filter Guarded Time   : %.4f seconds\n", $elapsed_bf;

my $speedup = (($elapsed_db - $elapsed_bf) / $elapsed_db) * 100;
printf "Speed Improvement           : %.1f%% FASTER\n", $speedup;
print "---------------------------------------------------------\n";
printf "Database Queries Prevented  : %d (%.1f%% of all traffic)\n",
    $saved_db_queries, ($saved_db_queries / scalar(@login_attempts)) * 100;
print "---------------------------------------------------------\n";
```

## Final &nbsp; Numbers

```bash
$ perl benchmark.pl
Generating simulation data...
Database populated with 903 unique users.

Running Test 1: Database Lookup Only (Simulating 0.2ms network latency per query)...
Running Test 2: Bloom Filter Guarding the Database...

PERFORMANCE RESULTS
---------------------------------------------------------
Total Login Attempts Tested : 5000
Database-Only Time          : 1.6235 seconds
Bloom Filter Guarded Time   : 0.0905 seconds
Speed Improvement           : 94.4% FASTER
---------------------------------------------------------
Database Queries Prevented  : 4957 (99.1% of all traffic)
---------------------------------------------------------
```

***
<br>

`Happy Hacking !!!`
