use strict;
use warnings;
use JSON;
use File::Slurp;
use File::Path qw(make_path);

# 1. Parse Command Line Arguments
my $input = $ARGV[0];
if (!$input) {
    print "Usage:\n";
    print "  perl sync_range.pl 120       (Single week)\n";
    print "  perl sync_range.pl 1-160     (Range of weeks)\n";
    exit;
}

my @weeks;
if ($input =~ /^(\d+)$/) {
    push @weeks, $1;
} elsif ($input =~ /^(\d+)-(\d+)$/) {
    @weeks = ($1 .. $2);
} else {
    die "Invalid format. Use NNN or NNN-MMM.\n";
}

# 2. Main Execution Loop
foreach my $week (@weeks) {
    generate_json($week);
}

sub generate_json {
    my ($week_num) = @_;

    # Pad to 3 digits (e.g., 1 -> 001) for consistent naming
    my $padded_week = sprintf("%03d", $week_num);

    # Define paths using the padded variable to avoid "perl-weekly-challenge-1" errors
    my $md_file = "content/blog/perl-weekly-challenge-$padded_week.md";
    my $out_dir = "docs/blog/perl-weekly-challenge-$padded_week";

    unless (-e $md_file) {
        warn "  ✗ Week $padded_week: Markdown not found at $md_file\n";
        return;
    }

    my $raw_content = read_file($md_file);

    # Extract Front Matter (metadata) and Content
    my ($front_matter_raw, $body) = $raw_content =~ /^---\n(.*?)\n---\n(.*)/s;

    # Parse key metadata fields
    my %fm;
    while ($front_matter_raw =~ /^(\w+)\s*:\s*["']?(.*?)["']?$/mg) {
        $fm{$1} = $2;
    }

    # Extract tasks and clean up contributor/footer noise
    my ($t1_title, $t1_desc, $t1_body) = extract_task_parts($body, 1);
    my ($t2_title, $t2_desc, $t2_body) = extract_task_parts($body, 2);

    # Construct the JSON data structure
    my $data = {
        week        => int($week_num),
        title       => $fm{title} || "The Weekly Challenge - $week_num",
        url         => "https://theweeklychallenge.org/blog/perl-weekly-challenge-$padded_week/",
        pubDate     => (split /T/, ($fm{date} || ""))[0],
        task1_title => $fm{task1_title} || $t1_title || "Task 1",
        task1_desc  => $fm{task1_desc}  || $t1_desc  || "",
        task1_body  => $t1_body,
        task2_title => $fm{task2_title} || $t2_title || "Task 2",
        task2_desc  => $fm{task2_desc}  || $t2_desc  || "",
        task2_body  => $t2_body,
    };

    # Ensure the directory exists before writing
    if (! -d $out_dir) {
        make_path($out_dir);
        print "  + Created missing directory: $out_dir\n";
    }

    # Generate Pretty Print JSON for readability
    my $json_text = JSON->new->utf8->pretty->canonical->encode($data);

    write_file("$out_dir/challenge.json", $json_text);
    print "  ✓ Week $padded_week: challenge.json saved to $out_dir\n";
}

sub extract_task_parts {
    my ($text, $num) = @_;
    my $marker = qr/(?:#+\s*)?Task\s*$num:/i;
    my $next_num = $num + 1;
    my $next_marker = qr/(?:#+\s*)?Task\s*$next_num:/i;

    my @parts = split($marker, $text);
    return ("", "", "") if @parts < 2;

    my $task_content = (split($next_marker, $parts[1]))[0];

    # --- Sanitization ---
    # Remove "Submitted by" lines
    $task_content =~ s/^#*\s*\*\*Submitted by:\*\*.*?\n//mgi;
    # Remove horizontal rules (*** or ---)
    $task_content =~ s/^\*+\s*\n//mg;
    $task_content =~ s/^-+\s*\n//mg;
    # Strip the submission deadline footer common in early weeks
    $task_content =~ s/Last date to submit the solution.*//si;

    $task_content =~ s/^\s+|\s+$//g;

    # Separate title from body
    my @lines = split(/\n/, $task_content);
    my $title = shift @lines;
    $title =~ s/\{#.*?\}//g; # Strip Hugo anchors like {#TASK1}
    $title =~ s/^\s+|\s+$//g;

    my $body = join("\n", @lines);
    $body =~ s/^\s+|\s+$//g;

    # Extract first line of body for a clean description
    my $desc = "";
    foreach my $line (split(/\n/, $body)) {
        next if $line =~ /^\s*$/;
        $desc = $line;
        last;
    }
    # Strip bolding from the description for cleaner mobile display
    $desc =~ s/\*\*(.*?)\*\*/$1/g;

    return ($title, $desc, $body);
}
