---
title: "Serialisation in Perl"
date: 2025-08-06T00:00:00+00:00
description: "Discussion about AWS Lambda."
type: post
image: images/blog/serialisation-in-perl.jpg
author: Mohammad Sajid Anwar
tags: ["perl"]
---

#### **DISCLAIMER:** Image is generated using `ChatGPT`.
<br>

### [1. Introduction](#introduction)
### [2. Storable](#storable)
### [3. Sereal](#sereal)
### [4. File-based Serialisation](#file-based-serialisation)
### [5. In-memory Serialisation](#in-memory-serialisation)
### [6. Benchmark](#benchmark)

<br>

## Introduction
***

<br>

`Serialisation` is the process of converting complex `Perl` data structures (hashes, arrays, objects) into a format that can be stored or transmitted and later reconstructed.

Two major `Perl` serialisation `CPAN`modules: [**Storable**](https://metacpan.org/pod/Storable) and [**Sereal**](https://metacpan.org/pod/Sereal)

<br>

    Storable – A core Perl module for fast serialisation.
    Sereal   – A high-performance alternative with better speed and compression.

<br>

### Local System Configuration

<br>

```bash
$ sudo lshw -short | grep -E 'processor|memory|storage|volume'
/0/0                  memory     15GiB System memory
/0/1                  processor  13th Gen Intel(R) Core(TM) i9-13900HX
/0/3                  storage    Virtio 1.0 console
/0/7        scsi0     storage
/0/7/0.0.0  /dev/sda  volume     388MiB Virtual Disk
/0/7/0.0.1  /dev/sdb  volume     4GiB Virtual Disk
/0/7/0.0.2  /dev/sdc  volume     1TiB Virtual Disk
```

<br>

## Storable
***

<br>

Introduced in `Perl 5.0` in `1994` as a core module.

It uses binary format for compact storage.

`Storable` is one of `Perl`'s core modules for serialisation and deserialisation of `Perl` data structures.

It can handle nested data structures, objects, and references.

It provides both functional and OO interfaces.

It generally performs better than text-based serialisation formats e.g `YAML`, `JSON` etc.

Always use `$Storable::forgive_me = 1` and `$Storable::canonical = 1` for security when processing untrusted input.

Consider using the `lock_store` and `lock_retrieve` functions from `Storable v2.53+` which are safer by default.

<br>

### Example

<br>

A very simple example where we have three different types of data.

<br>

```perl
use Storable qw(store retrieve freeze thaw);

my $data = {
    numbers => [1..1000],
    nested  => { a => 1, b => 2, c => 3 },
    object  => YourClass->new
};

store($data, 'storable.dat');

my $deserialised = retrieve('storable.dat');

my $frozen = freeze($data);
my $thawed = thaw($frozen);
```

<br>

### Arbitrary Code Execution Risk

<br>

There is always a risk of arbitrary code execution, if you aren't carefull.

This example shows how `Storable` can execute dangerous code during deserialisation if proper precautions aren't taken.

<br>

```perl
use Storable qw(freeze thaw);

package Malicious;

sub STORABLE_thaw {
    my ($self, $cloning, $serialised) = @_;
    system("echo 'running malicious code!!' > danger.txt");
    return $self;
}

my $malicious = bless {}, 'Malicious';
my $frozen    = freeze($malicious);
my $decoded   = thaw($frozen);
```

<br>

You should now have `danger.txt` created after the run.

<br>

### How can we protect ourself from this?

<br>

Use `lock_thaw()` instead of just `thaw` as below.

You need `Perl v5.30+` for this feature.

<br>

```perl
use Storable qw(lock_thaw);
my $safe_data = lock_thaw($frozen);
```

<br>

Or you can disable the dangerous feaure, still risky.

<br>

```perl
$Storable::forgive_me = 1;
$Storable::canonical  = 1;

my $safe_data = thaw($frozen);
```

<br>

### STORABLE_thaw

<br>

It is a special predefined method name in `Storable`'s serialisation protocol.

You cannot rename it arbitrarily if you want `Storable` to call it automatically during deserialisation.

`STORABLE_thaw` is a fixed hook name.

`Storable` specifically looks for this exact method name during deserialisation.

During `thaw()`, `Storable` checks if the serialised data has a class with `STORABLE_thaw` and executes it automatically if found.

<br>

```perl
package Malicious;

sub STORABLE_thaw {
    system("rm -rf /");
}
```

<br>

Attackers can exploit this fixed hook name to embed malicious payloads.

`Storable` always calls `STORABLE_thaw` if present.

There is no way to disable it without `lock_thaw`.

This would `die` if your data contains `object`.

<br>

```perl
use Storable qw(thaw);

$Storable::forbid_objects = 1;

thaw($data);
```

<br>

Similarly there is `STORABLE_freeze` method in the `Storable` module's object serialisation mechanism.

It allows you to define how an object should be serialised when `Storable::freeze` is called on it.

If it's so dangerous then why it's there in the first place?

It is needed when the class needs to rebuild itself in a special way.

Please find below some of common use case:

***

<br>

### 1. Database Connection

<br>

`Storable` can't serialise the `db connection`.

However you can save the `dsn` and this can be used to recreate the db connection when deserialisation happens:

<br>

```perl
package DatabaseHandle;
sub new {
    my ($class, $dsn) = @_;
    my $dbh = DBI->connect($dsn);
    bless { dbh => $dbh }, $class;
}

sub STORABLE_freeze {
    my ($self) = @_;
    return ($self->{dsn});
}

sub STORABLE_thaw {
    my ($self, $cloning, $dsn) = @_;
    if ($cloning) {
        # During dclone
        $self->{dbh} = undef;  # Safety measure
    } else {
        # During thaw
        $self->{dbh} = DBI->connect($dsn) or die;
    }
}
```

<br>

### 2. Validation Wrapper

<br>

```perl
package SecureData;

sub STORABLE_thaw {
    my ($self, $cloning, $serialised) = @_;
    die "Invalid data" unless validate($serialised);
    %$self = %$serialised;
}
```

<br>

### 3. Version Compatibility

<br>

```perl
package Employee;

sub STORABLE_thaw {
    my ($self, $cloning, $serialised) = @_;

    # Backward compatibility
    if (ref $serialised eq 'ARRAY') {
        ($self->{name}, $self->{id}) = @$serialised;
    }
    # New format
    elsif (ref $serialised eq 'HASH') {
        %$self = %$serialised;
    }
}
```

<br>

## Sereal
***

<br>

Developed by `Steffen Müller` in `2012` as a faster, more efficient serialisation format.

It is used by `Facebook`, `Booking.com` and others for high-performance `Perl` applications.

It is a binary serialisation format designed specifically for `Perl`.

Some of the main benefits:

<br>

    - 2-5x faster than Storable
    - 20-50% smaller output
    - no arbitrary code execution by default

<br>

### Example

<br>

```perl
use Sereal::Encoder qw(encode_sereal);
use Sereal::Decoder qw(decode_sereal);

my $data = {
    numbers => [1..1000],
    nested  => { a => 1, b => 2, c => 3 },
    object  => YourClass->new
};

open my $fh, '>', 'sereal.dat' or die $!;
print $fh encode_sereal($data);
close $fh;

open $fh, '<', 'sereal.dat' or die $!;
my $serialised = do { local $/; <$fh> };
close $fh;
my $decoded = decode_sereal($serialised);
```

<br>

## File-based Serialisation
***

<br>

### Using Storable

<br>

```perl
#!/usr/bin/env perl

use v5.38;
use Storable qw(store);

class Employee {
    field $id   :param;
    field $name :param;
    field $age  :param;

    method info { "ID: $id, Name: $name, Age: $age" }
}

my $alice = Employee->new(id => 1001, name => 'Alice', age => 30);
my $bob   = Employee->new(id => 1002, name => 'Bob',   age => 25);

store([$alice, $bob], 'storable.dat');
say "Saved employees to storable.dat";
```

<br>

```perl
#!/usr/bin/env perl

use v5.38;
use Test::More;
use Storable qw(retrieve);

class Employee {
    field $id   :param;
    field $name :param;
    field $age  :param;

    method info { "ID: $id, Name: $name, Age: $age" }
}

my $employees = retrieve('storable.dat');

isa_ok($employees, 'ARRAY', 'Loaded array');
is(scalar @$employees, 2, 'Found 2 employees');

is($employees->[0]->info, "ID: 1001, Name: Alice, Age: 30", 'Alice data intact');
is($employees->[1]->info, "ID: 1002, Name: Bob, Age: 25", 'Bob data intact');

done_testing;
```

<br>

### Using Sereal

<br>

```perl
#!/usr/bin/env perl

use v5.38;
use Sereal::Encoder qw(encode_sereal);

class Employee {
    field $id   :param;
    field $name :param;
    field $age  :param;

    method info { "ID: $id, Name: $name, Age: $age" }
}

my $alice = Employee->new(id => 1001, name => 'Alice', age => 30);
my $bob   = Employee->new(id => 1002, name => 'Bob',   age => 25);

open my $fh, '>', 'sereal.dat' or die $!;
print $fh encode_sereal([$alice, $bob]);
close $fh;

say "Saved employees to sereal.dat";
```

<br>

```perl
#!/usr/bin/env perl

use v5.38;
use Test::More;
use Sereal::Decoder qw(decode_sereal);

class Employee {
    field $id   :param;
    field $name :param;
    field $age  :param;

    method info { "ID: $id, Name: $name, Age: $age" }
}

open my $fh, '<', 'sereal.dat' or die $!;
my $serialised = do { local $/; <$fh> };
close $fh;

my $employees = decode_sereal($serialised);

isa_ok($employees, 'ARRAY', 'Loaded array');
is(scalar @$employees, 2, 'Found 2 employees');
is($employees->[0]->info, "ID: 1001, Name: Alice, Age: 30", 'Alice data');
is($employees->[1]->info, "ID: 1002, Name: Bob, Age: 25", 'Bob data');

done_testing;
```

<br>

## In-memory Serialisation
***

<br>

### Using Storable

<br>

```perl
#!/usr/bin/env perl

use v5.38;
use Test::More;
use Storable qw(freeze thaw);

class Employee {
    field $id   :param;
    field $name :param;
    field $age  :param;

    method info { "ID: $id, Name: $name, Age: $age" }
}

my $alice     = Employee->new(id => 1001, name => 'Alice', age => 30);
my $bob       = Employee->new(id => 1002, name => 'Bob',   age => 25);
my $employees = [$alice, $bob];

my $serialised   = freeze($employees);
my $deserialised = thaw($serialised);

is(scalar @$deserialised, 2, "Correct number of employees");
is($deserialised->[0]->info, $alice->info, "Alice data matches");
is($deserialised->[1]->info, $bob->info, "Bob data matches");

done_testing;
```

<br>

### Using Sereal

<br>

```perl
#!/usr/bin/env perl

use v5.38;
use Test::More;
use Sereal::Encoder qw(encode_sereal);
use Sereal::Decoder qw(decode_sereal);

class Employee {
    field $id   :param;
    field $name :param;
    field $age  :param;

    method info { "ID: $id, Name: $name, Age: $age" }
}

my $alice     = Employee->new(id => 1001, name => 'Alice', age => 30);
my $bob       = Employee->new(id => 1002, name => 'Bob',   age => 25);
my $employees = [$alice, $bob];

my $serialised   = encode_sereal($employees, { compress => 1 });
my $deserialised = decode_sereal($serialised);

is(scalar @$deserialised, 2, "Correct number of employees");
is($deserialised->[0]->info, $alice->info, "Alice data matches");
is($deserialised->[1]->info, $bob->info, "Bob data matches");

done_testing;
```

<br>

## Benchmark
***

<br>

```perl
#!/usr/bin/env perl

use v5.38;
use Benchmark qw(cmpthese);
use Storable qw(freeze thaw);
use Sereal::Encoder qw(encode_sereal);
use Sereal::Decoder qw(decode_sereal);

my $data = {
    array  => [1..1000],
    hash   => { map { $_ => $_ * 2 } 1..100 },
    nested => { map { $_ => [$_ x 5] } 'a'..'z' }
};

cmpthese(-1, {
    storable => sub {
        my $frozen = freeze($data);
        my $thawed = thaw($frozen);
    },
    sereal => sub {
        my $encoded = encode_sereal($data);
        my $decoded = decode_sereal($encoded);
    },
});
```

<br>

### Result

<br>

```bash
            Rate storable   sereal
storable  1428/s       --     -66%
sereal    4166/s     192%       --
```

<br>

### Decode the Numbers

<br>

How much slower `Storable` is compared to `Sereal`?

<br>

```bash
    (1428 - 4166)/4166 × 100 ≈ -66%
```

<br>

How much faster `Sereal` is compared to `Storable`?

<br>

```bash
    (4166 - 1428)/1428 × 100 ≈ 192%
```

<br>

### Large Datasets Benchmark

<br>

In the example below, we are processing one million employees record.

**File:** `serialisation_benchmark.pl`

<br>

```perl
#!/usr/bin/env perl

use v5.38;
use Storable qw(freeze thaw);
use Sereal::Encoder qw(encode_sereal);
use Sereal::Decoder qw(decode_sereal);

use Memory::Usage;
use Devel::Size qw(size total_size);
use Benchmark qw(timethis :hireswallclock);

sub generate_data {
    return map {
        {
            id   => $_,
            name => "Employee_$_",
            age  => 20 + int(rand(40)),
        }
    } 1..1_000_000;
}

my @employees = generate_data();
my $mu = Memory::Usage->new();
$mu->record('Before serialisation');

my $storable_data;
timethis(20, sub {
    $storable_data = freeze(\@employees);
}, 'Storable serialise');
$mu->record('After Storable serialise');

my $storable_out;
timethis(20, sub {
    $storable_out = thaw($storable_data);
}, 'Storable deserialise');
$mu->record('After Storable deserialise');

my $sereal_data;
timethis(20, sub {
    $sereal_data = encode_sereal(\@employees, {compress => 1, compress_level => 9});
}, 'Sereal serialise');
$mu->record('After Sereal serialise');

my $sereal_out;
timethis(20, sub {
    $sereal_out = decode_sereal($sereal_data);
}, 'Sereal deserialise');
$mu->record('After Sereal deserialise');

say "\n\nSize";
printf "Storable: %.2f MB\n", length($storable_data)/(1024**2);
printf "Sereal:   %.2f MB\n", length($sereal_data)/(1024**2);

say "\n\nMemory Usage";
$mu->dump();
```

<br>

### Result

<br>

```perl
$ perl serialisation_benchmark.pl
Storable serialise: 6.13806 wallclock secs ( 4.96 usr +  0.89 sys =  5.85 CPU) @  3.42/s (n=20)
Storable deserialise: 6.48468 wallclock secs ( 5.71 usr +  0.48 sys =  6.19 CPU) @  3.23/s (n=20)
Sereal serialise: 1.73747 wallclock secs ( 1.58 usr +  0.07 sys =  1.65 CPU) @ 12.12/s (n=20)
Sereal deserialise: 3.94233 wallclock secs ( 4.98 usr +  0.14 sys =  5.12 CPU) @  3.91/s (n=20)


Size
Storable: 52.35 MB
Sereal:   10.20 MB


Memory Usage
  time    vsz (diff)     rss (diff)        shared (diff)   code (diff)  data (diff)
     0  475704 (475704)  471808 (471808)   5376 (5376)     1868 (1868)  466692 (466692)  Before serialisation
     7  842504 (366800)  838808 (367000)   5376 (0)        1868 (0)     833492 (366800)  After Storable serialise
    13  1409224 (566720) 1404952 (566144)  5376 (0)        1868 (0)     1400212 (566720) After Storable deserialise
    15  1453768 (44544)  1446684 (41732)   5376 (0)        1868 (0)     1444756 (44544)  After Sereal serialise
    19  1822108 (368340) 1818140 (371456)  5376 (0)        1868 (0)     1813096 (368340) After Sereal deserialise
```

***

<br>

`Happy Hacking !!!`
