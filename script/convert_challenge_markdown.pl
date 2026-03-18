#!/usr/bin/perl

use strict;
use warnings;

use utf8;
use open ':std', ':encoding(UTF-8)';

# Usage: perl convert_challenge_markdown.pl input.md data/challenges.yml

my ($md_file, $yaml_file) = @ARGV;
die "Usage: $0 <input.md> <challenges.yml>\n" unless $md_file && $yaml_file;

# 1. Parse YAML for Task Titles
my %title_map;
if (-e $yaml_file) {
    open my $yfh, '<:encoding(UTF-8)', $yaml_file or die "Can't open $yaml_file: $!";
    my $current_week = '';
    while (my $line = <$yfh>) {
        if ($line =~ /week:\s*'?(\d+)'?/) {
            $current_week = int($1);
        }
        if ($line =~ /-\s+(.+)/ && $current_week) {
            my $val = $1;
            # Simple skip for keys
            if ($val !~ /^(?:week|date|tasks|members|enable):/) {
                push @{$title_map{$current_week}}, $val;
            }
        }
    }
    close $yfh;
}

# 2. Read the Markdown File
open my $mfh, '<:encoding(UTF-8)', $md_file or die "Can't open $md_file: $!";
my $content = do { local $/; <$mfh> };
close $mfh;

# 3. Identify the Week from Front Matter
my ($this_week) = $content =~ /title:.*Challenge - (\d+)/i;
$this_week = int($this_week) if $this_week;

# 4. Extract sections
my ($front, $body) = $content =~ m/^(---\n.*?\n---\n)(.*)$/s;
if (!$front) { die "Could not find Front Matter in $md_file\n"; }

# --- CHANGE AUTHOR IN FRONT MATTER ---
$front =~ s/author: .*/author: Mohammad Sajid Anwar/g;

# Extract intro (everything before the first challenge)
my ($intro) = $body =~ m/^(.*?)(?=### Challenge)/s;
$intro //= $body; # Fallback if no challenges found

# Extract deadline (at the very end)
my ($deadline) = $body =~ m/(Last date to submit.*)$/s;

# 5. Process and Print
print $front;
print $intro;

# 6. Iterate through challenges
my $task_count = 0;
while ($body =~ m/### (?:Task|Challenge) #(\d+)\s+((?:>\s*.*?\n)+)(?=\n###|\n\*\*\*|\nLast date|$)/gs) {
    $task_count++;
    my $num = $1;
    my $desc_block = $2;

    # Clean up description but KEEP newlines
    # 1. Remove leading '>' and any trailing whitespace from each line
    $desc_block =~ s/^>\s?//gm;
    $desc_block =~ s/\s+$//s;
    $desc_block =~ s/^\s+//s;

    # Fetch title from YAML map
    my $title = "Unknown Task";
    if (exists $title_map{$this_week} && defined $title_map{$this_week}->[$task_count - 1]) {
        $title = $title_map{$this_week}->[$task_count - 1];
        $title =~ s/^['"]|['"]$//g; # Strip quotes if present in YAML
    }

    print "\n## Task $num: $title\n";
    print "***\n\n";
    print "$desc_block\n\n";
}

print "***\n";
print "$deadline\n" if $deadline;

# 7. Helper for Common Directory Path (Optional Logic Reference)
sub get_common_path {
    my ($separator, @paths) = @_;
    return "" unless @paths;

    my @parts = map { [ split(/\Q$separator\E/, $_) ] } @paths;
    my $first = shift @parts;
    my @common;

    for my $i (0 .. $#$first) {
        my $match = 1;
        for my $p (@parts) {
            if ($i > $#$p || $p->[$i] ne $first->[$i]) {
                $match = 0;
                last;
            }
        }
        last unless $match;
        push @common, $first->[$i];
    }
    return join($separator, @common);
}
