#!/usr/bin/perl

use v5.36;

my $week = $ARGV[0];
die "ERROR: Invalid week $week.\n" unless ($week > 0);

my $max     = 19;
my $counter = 1;
my $links   = "";

my $wk = $week;
while ($week >= 1) {

    $links .= "####" if ($counter == 1);

    if ($counter < $max) {
        $links .= sprintf(" &nbsp; * &nbsp; [[%03d](#%03d)]", $week, $week);
        $counter++;
    }
    elsif ($counter == $max) {
        $links .= sprintf(" &nbsp; * &nbsp; [[%03d](#%03d)] &nbsp; *\n\n", $week, $week);
        $counter = 1;
    }

    $week--;
}

$links .= "\n\n----\n## ";
$links .= sprintf("[The Weekly Challenge - %03d](/blog/perl-weekly-challenge-%03d) {#%03d}", $wk, $wk, $wk);
$links .= "\n<br>\n";
say $links;
