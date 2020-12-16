---
title: "Advent Calendar - December 8, 2020"
date: 2020-12-16T00:00:00+00:00
description: "Advent Calendar - December 8, 2020."
type: post
image: images/blog/2020-12-08.jpg
author: Javier Luque
tags: ["Perl","Raku"]
---

[**Advent Calendar 2020**](/blog/advent-calendar-2020)
***

The gift is presented by [**Roger Bell_West**](https://perlweeklychallenge.org/blog/meet-the-champion-026). Today he is talking about his solution to the task `Sort Email Adresses` of **["The Weekly Challenge - 062"](/blog/perl-weekly-challenge-062)**. This is re-produced for **Advent Calendar 2020** from the original [**post**](https://blog.firedrake.org/archive/2020/05/Perl_Weekly_Challenge_62__email_sorting_and_3d_queens.html) by **Roger Bell_West**.

***

> Write a script that takes a list of email addresses (one per line) and sorts them first by the domain part of the email address, and then by the part to the left of the @ (known as the mailbox).

> Note that the domain is case-insensitive, while the mailbox part is case sensitive. (Some email providers choose to ignore case, but that’s another matter entirely.)

> If your script is invoked with arguments, it should treat them as file names and read them in order, otherwise your script should read email addresses from standard input.

> BONUS: Add a -u option which only includes unique email addresses in the output, just like sort -u.

***

The trick here is to construct an easily-sortable representation. This code will fail on some of the more exotic constructs possible in a user-part.

```perl
my %o;
getopts('u',\%o);
my %l;
while (<>) {
  chomp;
  my @e=split /@/,$_;
  my $k=lc($e[1]).'@'.$e[0];
```

That's the sortable representation. billG@microSOFT.com becomes microsoft.com@billG – which I can feed to a standard sort to get the desired results.

If we're being unique, delete any previous addresses with this key.

```perl
  if ($o{u}) {
    delete $l{$k};
  }
```

Under this key, store a list of email addresses that match it.

```perl
  push @{$l{$k}},$_;
}
```

Then for output just look at each key and print the addresses stored under it.

```perl
foreach my $k (sort keys %l) {
  print map {"$_\n"} @{$l{$k}};
}
```

In Raku it was more work to sort out the option parsing than to rewrite the code. The built-in libraries will let me have command-line options, certainly – but not, at least not trivially, combined with raw filenames. So in this first part I iterate through the command-line arguments, putting any that are the names of files into the files list, and parsing "-u" separately.

(If there exists a file called "-u"… frankly, you deserve all you get.)

```perl
my $u=0;
my @fn;
for @*ARGS -> $p {
  if ($p.IO.e) {
    push @fn,$p;
  } elsif ($p eq '-u') {
    $u=1;
  }
}
unless (@fn) {
  push @fn,'-';
}
```

The rest is basically the same algorithm, with syntactic tweaks for Raku.

```perl
my %l;
for @fn -> $fn {
  my $fh=open :r,$fn;
  for $fh.lines {
    .chomp;
    my @e=comb(/<-[@]>+/,$_);
    my $k=lc(@e[1]) ~ '@' ~ @e[0];
    if ($u) {
      %l{$k}:delete;
    }
    push %l{$k},$_;
  }
  close $fh;
}

for (sort keys %l) -> $k {
  my @q=%l{$k}.flat;
  for @q -> $e {
    say $e;
  }
}
```

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

[**Advent Calendar 2020**](/blog/advent-calendar-2020)
