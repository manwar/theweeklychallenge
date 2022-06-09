---
title: "Taint in Perl"
date: 2022-06-09T00:00:00+00:00
description: "Discussion on taint in Perl."
type: post
image: images/blog/taint.jpg
author: Mohammad S Anwar
tags: ["Perl"]
---

<br>

The `"taint"` always bothered me. I thought I knew it well but no. The obvious question, can I show a working example?

<br>

Before I do that, let me share an incident with you. In the year 2019, I attended `The Perl Conference in Riga`.
During the 3 days event, I gave couple of talks and one of them was `"Protect your Perl script from common security issues"`.

<br>

You can checkout my [**event report**](http://blogs.perl.org/users/mohammad_s_anwar/2019/08/the-perlcon-2019-riga---report.html), if you are interested.

<br>

In that talk, I mentioned about one of my `CPAN` module [**Map::Tube**](https://metacpan.org/dist/Map-Tube) and how taint bitten me.

<br>

I also mentioned the fix to the taint issue in the module. A friend of mine was in the audience and he correctly pointed out my fix is insufficient. It was embarassing to be honest but I am old enough to take it and correct myself.

Just for record, I haven't had time to re-visit the `"issue"` and fix it once for all. `Pull Requests` are most welcome.

<br>

### Coming back to my original question, `how to show taint behaviour?`

<br>

The official [**documentation**](https://perldoc.perl.org/perlsec) says this with some exceptions:

<br>

> You may not use data derived from outside your program to affect something else outside your program--at least, not by accident. All command line arguments, environment variables, locale information (see perllocale), results of certain system calls (readdir(), readlink(), the variable of shmread(), the messages returned by msgrcv(), the password, gcos and shell fields returned by the getpwxxx() calls), and all file input are marked as "tainted". Tainted data may not be used directly or indirectly in any command that invokes a sub-shell, nor in any command that modifies files, directories, or processes

<br>

The general idea is all user data is marked as `"taint"` and should throw error if `"taint"` is turned on.

<br>

Lets create sample `data.txt`.

<br>

```perl
manwar@VAIO:~$ cat data.txt
Line 1
Line 2
Line 3
manwar@VAIO:~$
```
<br>

### So I thought this would give me error, right?

<br>

```perl
 1 #!/usr/bin/perl -T
 2
 3 use v5.36;
 4
 5 my $input = $ARGV[0];
 6
 7 open (my $INPUT, "<", $input) or die "$input: $!\n";
 8 while (my $row = <$INPUT>) {
 9     print $row;
10 }
11 close ($INPUT);
```

<br>

### I was pleasantly surprised to see no error.

<br>

![Image-1](/images/blog/taint-1.png)

<br>

Seems `"reading"` is acceptable. I was talking to the same friend from the conference on `Telegram` when he was about to go to bed. Yes it was very late in night. He was kind enough to engage with me so late. By the way, we both work for the same company. He recommended me to join him. I am glad I listened to his advise.

<br>

He suggested I should try `"read"` from one file and `"write"` to another. It would likely trigger `"taint"` error.

<br>

He was correct, `it did`.

<br>

```perl
 1 #!/usr/bin/perl -T
 2
 3 use v5.36;
 4
 5 my $input  = $ARGV[0];
 6 my $output = $ARGV[1];
 7
 8 open (my $INPUT,  "<", $input)  or die "$input : $!\n";
 9 open (my $OUTPUT, ">", $output) or die "$output: $!\n";
10
11 while (my $row = <$INPUT>) {
12     print $OUTPUT $row;
13 }
14
15 close ($INPUT);
16 close ($OUTPUT);
```
<br>

![Image-2](/images/blog/taint-2.png)

<br>

So now I have an example that triggers "taint" error.

<br>

### How about fixing it?

<br>

There is no generic solution to be honest. It all depends what is acceptable to you.

In the example above, we want to make sure, filename don't have any `"unwanted character"`.

<br>

### So here is my solution:

<br>

```perl
 1 #!/usr/bin/perl -T
 2
 3 use v5.36;
 4
 5 my $input  = $ARGV[0];
 6 my $output = $ARGV[1];
 7
 8 sub untaint { ($_[0]) = $_[0] =~ /([A-Za-z0-9_-]+\.[A-Za-z0-9_-]+)/; }
 9 untaint $input;
10 untaint $output;
11
12 open (my $INPUT,  "<", $input)  or die "$input : $!\n";
13 open (my $OUTPUT, ">", $output) or die "$output: $!\n";
14
15 while (my $row = <$INPUT>) {
16     print $OUTPUT $row;
17 }
18
19 close ($INPUT);
20 close ($OUTPUT);
```

<br>

### Time to test

<br>

![Image-3](/images/blog/taint-3.png)

<br>

### No taint error.

<br>

I know, I have only scratched the surface. But it is enough to clear my doubts for now. I will continue to explore and share my findings with you.
