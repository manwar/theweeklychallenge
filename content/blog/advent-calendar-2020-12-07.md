---
title: "Advent Calendar - December 7, 2020"
date: 2020-12-07T00:00:00+00:00
description: "Advent Calendar - December 7, 2020."
type: post
image: images/blog/2020-12-07.jpg
author: Javier Luque
tags: ["Perl","Raku"]
---

[**Advent Calendar 2020**](/blog/advent-calendar-2020)
***

The gift is presented by [**Javier Luque**](https://perlweeklychallenge.org/blog/meet-the-champion-037). Today he is talking about his solution to the task `IPv4 Partition` of **["The Weekly Challenge - 061"](/blog/perl-weekly-challenge-061)**. This is re-produced for **Advent Calendar 2020** from the original [**post**](https://perlchallenges.wordpress.com/2020/05/18/perl-weekly-challenge-061/) by **Javier Luque**.

***

## IPv4 Partition

You are given a string containing only digits **(0..9)**. The string should have between **4** and **12** digits.

Write a script to print every possible valid **IPv4** address that can be made by partitioning the input string.

For the purpose of this challenge, a valid **IPv4** address consists of **four "octets"** i.e. **A**, **B**, **C** and **D**, separated by dots (`.`).

Each octet must be between **0** and **255**, and must not have any leading zeroes. (e.g., `0` is OK, but `01` is not.)

### Example

Input: `25525511135`,

Output:

```
255.255.11.135
255.255.111.35
```

***

For this challenge I brute forced the solution my finding all the possible locations of the . then checking the string if its a valid IP address.

so a string like: 12345

Will produce these combinations

```
    1.2.3.45
    1.2.34.5
    1.23.4.5
    12.3.4.5
```

## Perl

```perl
#!/usr/bin/perl
# Test: ./ch-2.pl
use strict;
use warnings;
use feature qw /say/;
use Algorithm::Combinatorics qw(combinations);

my $ip_address = $ARGV[0] || '25525511135';
partition_ip_string($ip_address);

# Partition the ip string
sub partition_ip_string {
    my $string = shift;
    my $length = length($string) - 2;

    # Validate string
    return undef if
    	( length($string) < 4  ||
    	  length($string) > 12 ||
    	  !($string =~ /^\d+$/)
    	);

    # Find all the combinations for the possible ips
    my @dot_positions = (0 .. $length);
    my $iter = combinations(\@dot_positions, 3);

    # Process the combinations
    while (my $combos = $iter->next) {
    	my $to_test = $string;
    	my $offset = 0;

    	for my $dot_position (@$combos) {
    		my $position =
    			($dot_position + $offset) + 1;

    		# Append to the test string;
    		$to_test =
    			(substr $to_test, 0, $position)
    			. '.' .
    			(substr $to_test, $position);

    		# Offset the string
    		$offset++;
    	}

    	say $to_test
    		if (validate_ip_string($to_test));
    }
}

# Validate the IP String
sub validate_ip_string {
    for my $digit (split('\.', shift)) {
    	return 0 if ($digit > 255);
    	return 0 if ($digit =~ /^0\d+$/);
    }

    return 1;
}
```

Output perl ch-2.pl

```
255.255.11.135
255.255.111.35
```

## Raku

```perl6
# Test: perl6 ch-2.p6
multi MAIN() {
    MAIN('25525511135');
}

multi MAIN(Str $str) {
    partition-ip-string($str);
}

# Partition the ip string
sub partition-ip-string (Str $str) {
    my $length = $str.chars - 2;

    # Find all the combinations for the possible ips
    my @dot_positions = (0 .. $length);
    my @combos = @dot_positions.combinations: 3;

    # Process the combinations
    for @combos -> @combo {
    	my $to_test = $str;
    	my $offset = 0;

    	for (@combo) -> $dot_position {
    		my $position =
    			($dot_position + $offset) + 1;

    		# Append to the test string;
    		$to_test =
    			$to_test.substr(0, $position)
    			~ '.' ~
    			$to_test.substr($position);

    		# Offset the string
    		$offset++;
    	}

    	say $to_test
    		if (validate-ip-string($to_test));
    }
}

# Validate the IP String
sub validate-ip-string(Str $str) {
    for $str.split('.') -> $digit {
    	return False if ($digit > 255);
    	return False if ($digit ~~ /^0\d+$/);
    }
    return True;
}
```

Output perl6 ch-2.p6

```
255.255.11.135
255.255.111.35
```

***
If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

[**Advent Calendar 2020**](/blog/advent-calendar-2020)
