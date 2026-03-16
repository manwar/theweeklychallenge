#!/usr/bin/perl
use strict;
use warnings;
use utf8;
use open ':std', ':encoding(UTF-8)';

# Usage: perl transform_challenge.pl input.md data/challenges.yml > output.md

my ($md_file, $yaml_file) = @ARGV;
die "Usage: $0 <input.md> <challenges.yml>\n" unless $md_file && $yaml_file;

# 1. Parse YAML for Task Titles
my %title_map;
open my $yfh, '<', $yaml_file or die "Can't open $yaml_file: $!";
my $current_week = '';
while (my $line = <$yfh>) {
    if ($line =~ /week:\s*'(\d+)'/) {
        $current_week = int($1);
    }
    if ($line =~ /-\s+(.+)/ && $current_week) {
        my $val = $1;
        if ($val !~ /week:|date:|tasks:|members:|enable:/) {
            push @{$title_map{$current_week}}, $val;
        }
    }
}
close $yfh;

# 2. Read the Markdown File
open my $mfh, '<:encoding(UTF-8)', $md_file or die "Can't open $md_file: $!";
my $content = do { local $/; <$mfh> };
close $mfh;

# 3. Identify the Week from Front Matter
my ($this_week) = $content =~ /title:.*Challenge - (\d+)/i;
$this_week = int($this_week) if $this_week;

# 4. Extract sections
my ($front, $body) = $content =~ m/^(---\n.*?\n---\n)(.*)$/s;

# --- CHANGE AUTHOR IN FRONT MATTER ---
$front =~ s/author: .*/author: Mohammad Sajid Anwar/g;

my ($intro) = $body =~ m/^(.*?)(?=### Challenge)/s;
my ($deadline) = $body =~ m/(Last date to submit.*)$/m;

# 5. Process and Print
print $front;
print $intro;

# Iterate through challenges
my $task_count = 0;
while ($body =~ m/### Challenge #(\d+)\n>\s*(.*?)(?=\n###|\nLast date|$)/gs) {
    $task_count++;
    my $num = $1;
    my $desc = $2;

    # Clean up description
    $desc =~ s/\n/ /g;
    $desc =~ s/\s+/ /g;
    $desc =~ s/^\s+|\s+$//g;

    # Fetch title from YAML map
    my $title = $title_map{$this_week}->[$task_count - 1] // "Unknown Task";

    print "\n## Task $num: $title\n";
    # --- UPDATED AUTHOR NAME HERE TOO ---
    # print "##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)\n";
    print "***\n\n";
    print "$desc\n\n";
}

print "***\n";
print "$deadline\n" if $deadline;

__END__

#!/usr/bin/perl
use strict;
use warnings;
use utf8;

# Usage: perl transform_challenge.pl input.md data/challenges.yml > output.md

my ($md_file, $yaml_file) = @ARGV;
die "Usage: $0 <input.md> <challenges.yml>\n" unless $md_file && $yaml_file;

# 1. Parse YAML for Task Titles
my %title_map;
open my $yfh, '<', $yaml_file or die "Can't open $yaml_file: $!";
my $current_week = '';
while (my $line = <$yfh>) {
    if ($line =~ /week:\s*'(\d+)'/) {
        $current_week = int($1); # normalize to integer (e.g. 003 -> 3)
    }
    if ($line =~ /-\s+(.+)/ && $current_week) {
        my $val = $1;
        # Filter out keys, keep only actual titles
        if ($val !~ /week:|date:|tasks:|members:|enable:/) {
            push @{$title_map{$current_week}}, $val;
        }
    }
}
close $yfh;

# 2. Read the Markdown File
open my $mfh, '<:encoding(UTF-8)', $md_file or die "Can't open $md_file: $!";
my $content = do { local $/; <$mfh> };
close $mfh;

# 3. Identify the Week from Front Matter
my ($this_week) = $content =~ /title:.*Challenge - (\d+)/i;
$this_week = int($this_week) if $this_week;

#author: Mohammad S Anwar
my ($this_week) = $content =~ /title:.*Challenge - (\d+)/i;



# 4. Extract sections
my ($front, $body) = $content =~ m/^(---\n.*?\n---\n)(.*)$/s;
my ($intro) = $body =~ m/^(.*?)(?=### Challenge)/s;
my ($deadline) = $body =~ m/(Last date to submit.*)$/m;

# 5. Process and Print
print $front;
print $intro;

# Iterate through challenges found in the text
my $task_count = 0;
while ($body =~ m/### Challenge #(\d+)\n>\s*(.*?)(?=\n###|\nLast date|$)/gs) {
    $task_count++;
    my $num = $1;
    my $desc = $2;

    # Clean up description
    $desc =~ s/\n/ /g;
    $desc =~ s/\s+/ /g;
    $desc =~ s/^\s+|\s+$//g;

    # Fetch title from YAML map
    my $title = $title_map{$this_week}->[$task_count - 1] // "Unknown Task";

    print "\n## Task $num: $title\n";
    print "##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)\n";
    print "***\n\n";
    print "$desc\n\n";
}

print "***\n";
print "$deadline\n" if $deadline;


__END__
#!/usr/bin/perl
use strict;
use warnings;
use utf8;

# Usage: perl convert_challenge.pl input.md > output.md

my $input_file = shift or die "Usage: $0 <input_file>\n";
open my $fh, '<:encoding(UTF-8)', $input_file or die "Could not open file: $!";
my $content = do { local $/; <$fh> };
close $fh;

# 1. Separate Front Matter from Body
my ($front_matter, $body) = $content =~ m/^(---\n.*?\n---\n)(.*)$/s;

# 2. Extract Challenges
# Older format usually uses "### Challenge #1" followed by a blockquote "> ..."
my @tasks;
while ($body =~ m/### Challenge #(\d+)\n>\s*(.*?)(?=\n###|\nLast date|$)/gs) {
    push @tasks, {
        num  => $1,
        desc => $2
    };
}

# 3. Extract the Intro Text (everything before the first challenge)
my ($intro) = $body =~ m/^(.*?)(?=### Challenge)/s;
$intro =~ s/^\s+|\s+$//g; # trim

# 4. Extract the Deadline (usually at the very bottom)
my ($deadline) = $body =~ m/(Last date to submit.*)$/m;

# 5. Clean up Task descriptions
# Remove potential markdown links or extra newlines inside the quote
foreach my $task (@tasks) {
    $task->{desc} =~ s/\n/ /g;       # Flatten newlines
    $task->{desc} =~ s/\s+/ /g;      # Remove double spaces
    $task->{desc} =~ s/^\s+|\s+$//g; # Trim
}

# 6. Generate New Output
print $front_matter;
print "\n$intro\n\n";

foreach my $task (@tasks) {
    print "## Task $task->{num}: [Insert Title Here]\n";
    print "##### **Submitted by:** [Mohammad S Anwar](https://manwar.org)\n";
    print "***\n\n";
    print "$task->{desc}\n\n";
}

print "***\n";
print "$deadline\n" if $deadline;
