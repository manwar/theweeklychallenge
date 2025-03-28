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

<div class="container">
    <div class="row">
        <div class="col-12 col-sm mb-4 p-2 text-center">
            <a href="/blog/slurp-in-perl" title="Slurp in Perl">
                <img src="/images/blog/slurp-mini.png" class="img-fluid">
            </a>
        </div>
        <div class="col-12 col-sm mb-4 p-2 text-center">
            <a href="/blog/scientist-in-perl" title="Scientist in Perl">
                <img src="/images/blog/scientist-in-perl-mini.png" class="img-fluid">
            </a>
        </div>
        <div class="col-12 col-sm mb-4 p-2 text-center">
            <a href="/blog/extraction-in-perl" title="Text Extraction in Perl">
                <img src="/images/blog/extraction-in-perl-mini.png" class="img-fluid">
            </a>
        </div>
        <div class="col-12 col-sm mb-4 p-2 text-center">
            <a href="/blog/random-in-perl" title="Random in Perl">
                <img src="/images/blog/random-in-perl-mini.png" class="img-fluid">
            </a>
        </div>
        <div class="col-12 col-sm mb-4 p-2 text-center">
            <a href="/blog/perl-regex" title="Perl Regex">
                <img src="/images/blog/perl-regex-mini.png" class="img-fluid rounded-3 border border-3">
            </a>
        </div>
        <div class="col-12 col-sm mb-4 p-2 text-center">
            <a href="/blog/subroutine-signatures" title="Subroutine Signatures in Perl">
                <img src="/images/blog/subroutine-signatures-mini.png" class="img-fluid">
            </a>
        </div>
        <div class="col-12 col-sm mb-4 p-2 text-center">
            <a href="/blog/welcome-to-perl" title="Welcome to Perl">
                <img src="/images/blog/welcome-to-perl-mini.png" class="img-fluid">
            </a>
        </div>
    </div>
</div>

<br>

## Read Large File
***

<br>

I remember during my early days, I was asked in one job interview, `how would I process a really large text file?`.

And I answered, `by reading line by line`.

I didn't get through the interview, not sure because of my response to the above question.

When I say large file, I mean it.

How about `1GB` in size?

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
    say sprintf "%-44s %-10s %-10s", "Approach", "Time (s)", "Memory (MB)";
    say '-' x 67;
    foreach my $approach (@$results) {
        say sprintf "%-44s %-10.2f %-10.2f",
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
    3. Memory Mapping using Sys::Mmap
    4. Memory Mapping using File::Map (suggested by Tom Hukins)
    5. Parallel Processing using Parallel::ForkManager
    6. Parallel Processing using MCE::Loop (suggested by Wil Blake)

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

## [2025-03-22] UPDATE
***

`Ferenc Erki` noticed a comment on [**Reddit**](https://www.reddit.com/r/perl/comments/1jgenwp/comment/mj37f8d/?rdt=53633) about a potential bug in the `sub buffered_reading()` implementation as it is above.

I decided to work on it, in isolation to investigate.

The sample large text file, `large-file.txt` has a total `13421773` lines.

<br>

    $ wc -l large-file.txt
    13421773

<br>

So the new implementation should read that many lines, right?

Let's count the lines as we read:

<br>

```perl
#!/usr/bin/env perl

use v5.38;

my $FILE = $ARGV[0] || 'large-file.txt';
buffered_reading($FILE);

sub buffered_reading($file) {
    open(my $fh, '<', $file)
        or die "ERROR: Could not open $file: $!";
    my $buffer;
    my $size  = 1024 * 1024;
    my $lines = 0;
    while (read($fh, $buffer, $size)) {
        # simulate processing
        my @lines = split /\n/, $buffer;
        $lines   += @lines;
    }
    close($fh);
    say "Total lines read: $lines";
}
```

<br>

Let's see what do we get:

<br>

    $ perl buffered-reading.pl
    Total lines read: 13422797

<br>

This number doesn't match with real line count `13421773`.

So what's going on?

Could it be that we are ignoring the incomplete or blank lines?

Let's catch that too.

<br>

```perl
#!/usr/bin/env perl

use v5.38;

my $FILE = $ARGV[0] || 'large-file.txt';
buffered_reading($FILE);

sub buffered_reading($file) {
    open(my $fh, '<', $file)
        or die "ERROR: Could not open $file: $!";
    my $buffer;
    my $size  = 1024 * 1024;
    my $lines = 0;
    my $line  = '';
    while (read($fh, $buffer, $size)) {
        # simulate processing
        $buffer   = $line . $buffer;
        my @lines = split /\n/, $buffer, -1;
        $line     = pop @lines;
        $lines   += @lines;
    }
    close($fh);
    say "Total lines read: $lines";
}
```

<br>

Let me explain what has changed now:

We now have a new scalar `$line` which would hold any incomplete line.

And inside the `while loop`, I am adding the incomplete line to buffer before `split` happens.

Last but very important change, added `-1`, the third parameter to `split` function.

What does that do?

Well, it helps to keep empty line.

After the split happens, take the last line element, `$line = pop @lines`, as it might be an incomplete line.

Let's re-run the code one more time:

<br>

    $ perl buffered-reading.pl
    Total lines read: 13421773

<br>

So this matches the real line count of the `large-file.txt`.

So now it's better, if I use the new implementation of `sub burrered_reading()`.

`Mission accomplished`.

***

<br>

Next is `memory mapping` like below:

For this task, we are going to use `CPAN` module: [**Sys::Mmap**](https://metacpan.org/pod/Sys::Mmap)

<br>

```perl
sub memory_mapping_mmap($file) {
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

## [2025-03-19] UPDATE
***

`Tom Hukins` suggested another memory mapping option using `CPAN` module: [**File::Map**](https://metacpan.org/pod/File::Map)

<br>

```perl
sub memory_mapping_fmap($file) {
    map_file my $mapped_file, $file, '<';
    my @lines = split /\n/, $mapped_file;
    foreach my $line (@lines) {
         # simulate processing
    }
    unmap $mapped_file;
}
```

<br>

Now the last approach i.e. `parallel processing`.

Here we are going to create `10 workers` to do the task.

For parallel processing, we are using `CPAN` module [**Parallel::ForkManager**](https://metacpan.org/dist/Parallel-ForkManager).

<br>

```perl
sub parallel_processing_pfm($file) {
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

## [2025-03-25] UPDATE
***

`Wil Blake` suggested in `The Perl Community` Facebook group about the use of `MCE::Loop` for parallel processing.

You can find his comment [**here**](https://www.facebook.com/groups/perlcommunity/permalink/1889120141895603).

Here I am going to create `10 workers` similar to `Parallel::ForkManager` to have similar ground.

<br>

```perl
sub parallel_processing_mce_loop($file) {
    MCE::Loop->init(max_workers => 10, chunk_size => '1m');
    mce_loop_f {
        my ($mce, $chunk_ref, $chunk_id) = @_;
        foreach my $line (@$chunk_ref) {
            # simulate processing
        }
    } $file;
    MCE::Loop->finish;
}
```

<br>

Finally we would bind all the operations together as below:

<br>

```perl
my $file = $ARGV[0] || 'large-file.txt';

my $operations = [
    {
      title  => 'Line-by-Line Reading',
      method => \&line_by_line_reading
    },
    {
      title  => 'Buffered Reading',
      method => \&buffered_reading
    },
    {
      title  => 'Memory Mapping (Sys::Mmap)',
      method => \&memory_mapping_mmap
    },
    {
      title  => 'Memory Mapping (File::Map)',
      method => \&memory_mapping_fmap
    },
    {
      title  => 'Parallel Processing (Parallel::ForkManager)',
      method => \&parallel_processing_pfm
    },
    {
      title  => 'Parallel Processing (MCE::Loop)',
      method => \&parallel_processing_mce_loop
    },
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
use MCE::Loop;
use Linux::Smaps;
use Parallel::ForkManager;
use File::Map qw/map_file unmap/;
use Time::HiRes qw(gettimeofday tv_interval);

my $file = $ARGV[0] || 'large-file.txt';

my $operations = [
    {
        title  => 'Line-by-Line Reading',
        method => \&line_by_line_reading,
    },
    {
        title  => 'Buffered Reading',
        method => \&buffered_reading,
    },
    {
        title  => 'Memory Mapping (Sys::Mmap)',
        method => \&memory_mapping_mmap,
    },
    {
        title  => 'Memory Mapping (File::Map)',
        method => \&memory_mapping_fmap,
    },
    {
        title  => 'Parallel Processing (Parallel::ForkManager)',
        method => \&parallel_processing_pfm,
    },
    {
        title  => 'Parallel Processing (MCE::Loop)',
        method => \&parallel_processing_mce_loop,
    }
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

sub display_performance_analysis($results) {
    say "\n## Comparative Analysis";
    say sprintf "%-44s %-10s %-10s", "Approach", "Time (s)", "Memory (MB)";
    say '-' x 67;
    foreach my $approach (@$results) {
        say sprintf "%-44s %-10.2f %-10.2f",
            $approach->{title},
            $approach->{stats}->{time},
            $approach->{stats}->{memory} / (1024 * 1024);
    }
}

sub line_by_line_reading($file) {
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
    my $size  = 1024 * 1024;
    my $line  = '';
    while (read($fh, $buffer, $size)) {
        # simulate processing
        $buffer   = $line . $buffer;
        my @lines = split /\n/, $buffer, -1;
        $line     = pop @lines;
    }
    close($fh);
}

sub memory_mapping_mmap($file) {
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

sub memory_mapping_fmap($file) {
    map_file my $mapped_file, $file, '<';
    my @lines = split /\n/, $mapped_file;
    foreach my $line (@lines) {
         # simulate processing
    }
    unmap $mapped_file;
}

sub parallel_processing_pfm($file) {
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

sub parallel_processing_mce_loop($file) {
    MCE::Loop->init(max_workers => 10, chunk_size => '1m');
    mce_loop_f {
        my ($mce, $chunk_ref, $chunk_id) = @_;
        foreach my $line (@$chunk_ref) {
            # simulate processing
        }
    } $file;
    MCE::Loop->finish;
}
```

<br>

Time for some action:

<br>

    $ perl read-large-file.pl
    Line-by-Line Reading ... done.
    Buffered Reading ... done.
    Memory Mapping (Sys::Mmap) ... done.
    Memory Mapping (File::Map) ... done.
    Parallel Processing (Parallel::ForkManager) ... done.
    Parallel Processing (MCE::Loop) ... done.

    ## Comparative Analysis
    Approach                                     Time (s)   Memory (MB)
    -------------------------------------------------------------------
    Line-by-Line Reading                         1.40       0.00
    Buffered Reading                             0.74       0.00
    Memory Mapping (Sys::Mmap)                   1.85       1.91
    Memory Mapping (File::Map)                   1.29       0.10
    Parallel Processing (Parallel::ForkManager)  113.78     0.00
    Parallel Processing (MCE::Loop)              1.11       0.00

<br>

Does this number surprise you?

Please do let me know, if I can improve my approach.

***

<br>

`Happy Hacking !!`
