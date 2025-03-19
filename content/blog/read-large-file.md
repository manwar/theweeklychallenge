---
title: "Read Large File"
date: 2025-03-18T00:00:00+00:00
description: "Discussion about reading a large file."
type: post
image: images/blog/read-large-file.png
author: Mohammad Sajid Anwar
tags: ["Perl"]
---

#### **DISCLAIMER:** Image is generated using `FREE` version of `ChatGPT`.
***

<br>

## Read Large File

<br>

I remember during my early days, I was asked in one job interview, `how would I process a really large text file?`.

And I answered, `by reading line by line`.

I didn't get through the interview, not sure because of my response to the above question.

When I say large file, I mean it.

How about `1GB` size?

I think that would do the job.

We can easily extend it, if we want to quickly.

First thing first, let's generate a large file, say `1GB`, in size.

Here is a quick hack `gen-large-file.pl`:

<br>

```perl
#!/usr/bin/env perl

use v5.38;

my $FILE   = $ARGV[0] || 'large-file.txt';
my $size   = 1024 * 1024 * 1024;
my $length = 80;
my $line   = 'X' x $length;

open(my $out, '>', $FILE)
    or die "ERROR: Could not open $FILE: $!";

my $current = 0;
while ($current < $size) {
    print $out $line,"\n";
    $current += length($line);
}
close($out);

say "Generated $FILE: " . int($current / (1024 * 1024)) . "MB";
```

<br>

Time to generate `large-file.txt`:

<br>

    $ time perl gen-large-file.pl
    Generated large-file.txt: 1024MB

    real    0m1.219s
    user    0m0.594s
    sys     0m0.420s

<br>

In this post, we are going to do comparative analysis of reading a very large file.

Two important factors, we are going to consider in this regard:

<br>

    - Time
    - Memory

<br>

Let's create helper functions for this task first.

Here we are using `CPAN` module [**Linux::Smaps**](https://metacpan.org/pod/Linux::Smaps) for memory usage data.

And for time, the good old friend, [**Time::HiRes**](https://metacpan.org/pod/Time::HiRes).

<br>

```perl
#!/usr/bin/env perl

use v5.38;
use Linux::Smaps;
use Time::HiRes qw(gettimeofday tv_interval);



#
#
# Helper Functions

sub perform($operation, $file) {
    my $start_time   = [gettimeofday];
    my $start_memory = memory_usage();

    $operation->($file);

    my $end_memory = memory_usage();
    my $end_time   = [gettimeofday];

    return {
        time   => tv_interval($start_time, $end_time),
        memory => $end_memory - $start_memory,
    };
}

sub memory_usage {
    return Linux::Smaps->new($$)->size;
}
```

<br>

Now we need another function to display the performance analysis.

<br>

```perl
sub display_performance_analysis($results) {
    say "\n## Comparative Analysis";
    say sprintf "%-20s %-10s %-10s", "Approach", "Time (s)", "Memory (MB)";
    foreach my $approach (@$results) {
        say sprintf "%-20s %-10.2f %-10.2f",
            $approach->{title},
            $approach->{stats}->{time},
            $approach->{stats}->{memory} / (1024 * 1024);
    }
}
```

<br>

We have prepared the ground for the big battle.

Let's decide the different paths we would take to perform the task.

One thing is for sure, we are `NOT` going to do `file slurping`, right?

So here is the plan:

<br>

    1. Line by Line Reading
    2. Buffered Reading
    3. Memory Mapping
    4. Parallel Processing

<br>

Let's start with the first approach i.e. `line by line reading`.

It should be pretty straight forward, we do this day-in day-out.

<br>

```perl
sub line_by_line_reading($file) {
    open(my $fh, '<', $file)
        or die "ERROR: Could not open $file: $!";
    while (my $line = <$fh>) {
        # simulate processing
    }
    close($fh);
}
```

<br>

Now we would do `buffered reading` as below:

<br>

```perl
sub buffered_reading($file) {
    open(my $fh, '<', $file)
        or die "ERROR: Could not open $file: $!";
    my $buffer;
    my $size = 1024 * 1024;
    while (read($fh, $buffer, $size)) {
        # simulate processing
        my @lines = split /\n/, $buffer;
    }
    close($fh);
}
```

<br>

Next is `memory mapping` like below:

For this task, we are going to use `CPAN` module [**Sys::Mmap**](https://metacpan.org/pod/Sys::Mmap).

<br>

```perl
sub memory_mapping($file) {
    open(my $fh, '<', $file) or
        die "ERROR: Could not open $file: $!";
    mmap(my $mapped_file, 0, PROT_READ, MAP_SHARED, $fh);
    my @lines = split /\n/, $mapped_file;
    foreach my $line (@lines) {
        # simulate processing
    }
    munmap($mapped_file);
    close($fh);
}
```

<br>

Now the last approach i.e. `parallel processing`.

Here we are going to create `10 workers` to do the task.

For parallel processing, we are using `CPAN` module [**Parallel::ForkManager**](https://metacpan.org/dist/Parallel-ForkManager).

<br>

```perl
sub parallel_processing($file) {
    my $pfm  = Parallel::ForkManager->new(10);
    my $size = 1024 * 1024;
    my $buffer;
    my $remaining = '';

    open(my $fh, '<', $file)
        or die "ERROR: Could not open $file: $!";
    while (read($fh, $buffer, $size)) {
        $buffer = $remaining . $buffer;
        my $last_newline = rindex($buffer, "\n");

        if ($last_newline == -1) {
            $remaining = $buffer;
            next;
        }

        my $complete_chunk = substr($buffer, 0, $last_newline + 1);
        $remaining = substr($buffer, $last_newline + 1);

        $pfm->start and next;
        process_chunk($complete_chunk);
        $pfm->finish;
    }

    if ($remaining) {
        $pfm->start and next;
        process_chunk($remaining);
        $pfm->finish;
    }

    $pfm->wait_all_children;
    close($fh);
}

sub process_chunk($chunk) {
    my @lines = split /\n/, $chunk;
    foreach my $line (@lines) {
        # simulate processing
    }
}
```

<br>

Finally we would bind all the operations together as below:

<br>

```perl
my $file = $ARGV[0] || 'large-file.txt';

my $operations = [
    { title => 'Line-by-Line Reading', method => \&line_by_line_reading },
    { title => 'Buffered Reading',     method => \&buffered_reading     },
    { title => 'Memory Mapping',       method => \&memory_mapping       },
    { title => 'Parallel Processing',  method => \&parallel_processing  },
];

my $results = [];
foreach my $operation (@$operations) {
    print "$operation->{title} ... ";
    push @$results, {
        title => $operation->{title},
        stats => perform($operation->{method}, $file)
    };
    print "done.\n";
}

display_performance_analysis($results);
```

<br>

Last but not least, the complete solution, `read-large-file.pl`:

<br>

```perl
#!/usr/bin/env perl

use v5.38;
use Sys::Mmap;
use Linux::Smaps;
use Parallel::ForkManager;
use Time::HiRes qw(gettimeofday tv_interval);

my $file = $ARGV[0] || 'large-file.txt';

my $operations = [
    { title => 'Line-by-Line Reading', method => \&line_by_line_reading },
    { title => 'Buffered Reading',     method => \&buffered_reading     },
    { title => 'Memory Mapping',       method => \&memory_mapping       },
    { title => 'Parallel Processing',  method => \&parallel_processing  },
];

my $results = [];
foreach my $operation (@$operations) {
    print "$operation->{title} ... ";
    push @$results, {
        title => $operation->{title},
        stats => perform($operation->{method}, $file)
    };
    print "done.\n";
}

display_performance_analysis($results);

#
#
# Helper Functions

sub perform($operation, $file) {
    my $start_time   = [gettimeofday];
    my $start_memory = memory_usage();

    $operation->($file);

    my $end_memory = memory_usage();
    my $end_time   = [gettimeofday];

    return {
        time   => tv_interval($start_time, $end_time),
        memory => $end_memory - $start_memory,
    };
}

sub memory_usage {
    return Linux::Smaps->new($$)->size;
}

sub line_by_line($file) {
    open(my $fh, '<', $file)
        or die "ERROR: Could not open $file: $!";
    while (my $line = <$fh>) {
        # simulate processing
    }
    close($fh);
}

sub buffered_reading($file) {
    open(my $fh, '<', $file)
        or die "ERROR: Could not open $file: $!";
    my $buffer;
    my $size = 1024 * 1024;
    while (read($fh, $buffer, $size)) {
        # simulate processing
        my @lines = split /\n/, $buffer;
    }
    close($fh);
}

sub memory_mapping($file) {
    open(my $fh, '<', $file)
        or die "ERROR: Could not open $file: $!";
    mmap(my $mapped_file, 0, PROT_READ, MAP_SHARED, $fh);
    my @lines = split /\n/, $mapped_file;
    foreach my $line (@lines) {
         # simulate processing
    }
    munmap($mapped_file);
    close($fh);
}

sub parallel_processing($file) {
    my $pfm  = Parallel::ForkManager->new(10);
    my $size = 1024 * 1024;
    my $buffer;
    my $remaining = '';

    open(my $fh, '<', $file)
        or die "ERROR: Could not open $file: $!";
    while (read($fh, $buffer, $size)) {
        $buffer = $remaining . $buffer;
        my $last_newline = rindex($buffer, "\n");

        if ($last_newline == -1) {
            $remaining = $buffer;
            next;
        }

        my $complete_chunk = substr($buffer, 0, $last_newline + 1);
        $remaining = substr($buffer, $last_newline + 1);

        $pfm->start and next;
        process_chunk($complete_chunk);
        $pfm->finish;
    }

    if ($remaining) {
        $pfm->start and next;
        process_chunk($remaining);
        $pfm->finish;
    }

    $pfm->wait_all_children;
    close($fh);
}

sub process_chunk($chunk) {
    my @lines = split /\n/, $chunk;
    foreach my $line (@lines) {
        # simulate processing
    }
}

sub display_performance_analysis($results) {
    say "\n## Comparative Analysis";
    say sprintf "%-20s %-10s %-10s", "Approach", "Time (s)", "Memory (MB)";
    foreach my $approach (@$results) {
        say sprintf "%-20s %-10.2f %-10.2f",
            $approach->{title},
            $approach->{stats}->{time},
            $approach->{stats}->{memory} / (1024 * 1024);
    }
}
```

<br>

Time for some action:

<br>

    $ perl read-large-file.pl
    Line-by-Line Reading ... done.
    Buffered Reading ... done.
    Memory Mapping ... done.
    Parallel Processing ... done.

    ## Comparative Analysis
    Approach             Time (s)   Memory (MB)
    Line-by-Line Reading 1.12       0.00
    Buffered Reading     0.79       0.00
    Memory Mapping       1.90       1.91
    Parallel Processing  109.23     0.00

<br>

Does this number surprise you?

Please do let me know, if I can improve my approach.

***

<br>

`Happy Hacking !!`
