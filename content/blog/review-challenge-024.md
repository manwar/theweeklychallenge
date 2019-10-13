---
title: "Kian-Meng Ang Weekly Review: Challenge - 024"
date: 2019-09-15T00:00:00+00:00
description: "Kian-Meng Ang Weekly Review: Challenge - #024."
type: post
image: images/blog/p5-review-challenge-024.jpg
author: Kian-Meng Ang
tags: ["Perl5"]
---
***
Continues from [previous week](/blog/review-challenge-023/).

Feel free to [submit a merge request or open a ticket](https://github.com/manwar/perlweeklychallenge) if you found any issues with this post. We highly appreciate and welcome your feedback.

For a quick overview, go through the [original tasks](/blog/perl-weekly-challenge-024/) and [recap](/blog/recap-challenge-024/) of the weekly challenge.

***
### Task #1
***

**CPAN** modules used: [`B`](https://metacpan.org/pod/B), [`strict`](https://metacpan.org/pod/strict), [`warnings`](https://metacpan.org/pod/warnings)

Read the excellent [blog post](https://perl6.eu/small-inversions.html) by **Arne Sommer** on his investigation to find the shortest solution in both **Perl 5** and **Perl 6**.

Quite a few participants were taken aback (including the reviewer) by this task. Upon re-reading and reviewing the task and submitted solutions, perhaps this was one of those task where the solution depends solely on the interpretation of the participant and along the way, let us all learn something about the **Perl** interpreter itself (see **Arne Sommer**'s [post](https://perl6.eu/small-inversions.html)). Nevertheless, we will look at different ways used by participants to solve this task.

First off is the empty file solution. First submitted by [Joelle Maslak](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-024/joelle-maslak/perl5/ch-1.pl) and followed by [E.Choroba](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-024/e-choroba/perl5/ch-1.pl), [Simon Proctor](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-024/simon-proctor/perl5/ch-1.pl), and [Ruben Westerberg](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-024/ruben-westerberg/perl5/ch-1.pl). **Joelle Maslak** did a [comparison](https://digitalbarbedwire.com/2016/03/27/perl-is-good-for-nothing/) of parsing empty file between a few programming languages and **Perl 5** have the fastest startup time without throwing any errors at **"doing nothing"**.

Equivalent one-liner also submitted by [Colin Crain](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-024/colin-crain/perl5/ch-1.pl), [E. Choroba](http://blogs.perl.org/users/e_choroba/2019/09/perl-weekly-challenge-024-inverted-index-and-shortest-oneliner.html), [Laurent Rosenfeld](http://blogs.perl.org/users/laurent_r/2019/09/perl-weekly-challenge-24-smallest-script-and-inverted-index.html), and [Yet Ebreo](http://blogs.perl.org/users/yet_ebreo/2019/09/perl-weekly-challenge-w024---smallest-script-inverted-index.html).

Some participants ([Dave Cross](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-024/dave-cross/perl5/ch-1.pl) and [Roger Bell West](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-024/roger-bell-west/perl5/ch-1.pl)) have an alternative opinion that an empty file is not really a Perl script. Well, they are partially correct as according to [`file`](https://en.wikipedia.org/wiki/File_(command)) command, an empty file, is just an empty file.

```bash
$ file challenge-024/joelle-maslak/perl5/ch-1.pl
challenge-024/joelle-maslak/perl5/ch-1.pl: empty
```

Hence, by adding a [`shebang`](https://en.wikipedia.org/wiki/Shebang_(Unix)) as a interpreter directive, the `file` command will recognize a file as Perl executable script.

```bash
$ file challenge-024/roger-bell-west/perl5/ch-1.pl
challenge-024/roger-bell-west/perl5/ch-1.pl: Perl script text executable
```

Does that means that a text file without a Perl `shebang` interpreter directive is not a **Perl** script?

Not really.

As shown in the solution submitted by [Lubos Kolouch](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-024/lubos-kolouch/perl5/ch-1.pl), [Steven Wilson](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-024/steven-wilson/perl5/ch-1.pl), and [Andrezgz](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-024/andrezgz/perl5/ch-1.pl), we can run the script just fine although `file` command identified the file as plain [ASCII](https://en.wikipedia.org/wiki/ASCII) text file.

```bash
$ perl challenge-024/andrezgz/perl5/ch-1.pl
This script is the smallest in terms of size that on execution doesn't throw
any error, doesn't do anything special and explains what it does

$ file challenge-024/andrezgz/perl5/ch-1.pl
challenge-024/andrezgz/perl5/ch-1.pl: ASCII text
```

For those who use code linter in their development environment, [`perlcritic`](https://metacpan.org/pod/Perl::Critic), even at the most gentle setting will raise some concerns. Well, this is not part of the requirement of the task, it's good to know how `perlcritic` evaluates a basic **Perl** script.

```
$ perlcritic --gentle challenge-024/lubos-kolouch/perl5/ch-1.pl
challenge-024/lubos-kolouch/perl5/ch-1.pl: [TestingAndDebugging::RequireUseStrict]
Code before strictures are enabled at line 1, column 1 (Severity 5).
    Using strictures is probably the single most effective way to improve
    the quality of your code. This policy requires that the `'use strict''
    statement must come before any other statements except `package',
    `require', and other `use' statements. Thus, all the code in the entire
    package will be affected.

    There are special exemptions for Moose, Moose::Role, and
    Moose::Util::TypeConstraints because they enforces strictness; e.g.
    `'use Moose'' is treated as equivalent to `'use strict''.  The maximum
    number of violations per document for this policy defaults
    to 1.
```

In short, an empty file is probably the shortest and closest answer to this task that fulfil most of the requirements.

***
### Task #2
***

**CPAN** modules used: [`Carp`](https://metacpan.org/pod/Carp), [`DBI`](https://metacpan.org/pod/DBI), [`Data::Dumper`](https://metacpan.org/pod/Data::Dumper), [`English`](https://metacpan.org/pod/English), [`File::ByLine`](https://metacpan.org/pod/File::ByLine), [`File::Find::Rule`](https://metacpan.org/pod/File::Find::Rule), [`Lingua::Stem`](https://metacpan.org/pod/Lingua::Stem), [`List::MoreUtils`](https://metacpan.org/pod/List::MoreUtils), [`List::Util`](https://metacpan.org/pod/List::Util), [`Storable`](https://metacpan.org/pod/Storable), [`Syntax::Construct`](https://metacpan.org/pod/Syntax::Construct), [`Test::More`](https://metacpan.org/pod/Test::More), [`Text::Table::Tiny`](https://metacpan.org/pod/Text::Table::Tiny), [`autodie`](https://metacpan.org/pod/autodie), [`boolean`](https://metacpan.org/pod/boolean), [`constant`](https://metacpan.org/pod/constant), [`feature`](https://metacpan.org/pod/feature), [`strict`](https://metacpan.org/pod/strict), [`warnings`](https://metacpan.org/pod/warnings)

If you haven't done this task and want to learn more about implementing full text search using [Inverted Index](https://en.wikipedia.org/wiki/Inverted_index), start with submission by [Laurent Rosenfeld](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-024/laurent-rosenfeld/perl5/ch-2.pl). The solution was concise but comprehensive enough to demonstrate a working implementation of Inverted Index. Next, move to something similar with test case by [Lubos Kolouch](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-024/lubos-kolouch/perl5/ch-2.pl). If the regex on extracting words to build the indexes confuse you, you can read the submission by [Andrezgz](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-024/andrezgz/perl5/ch-2.pl), which have good written comments on the regex. Now if you still cannot grok how Inverted Index works, then look at output of the solution by [Yet Ebreo](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-024/yet-ebreo/perl5/ch-2.pl) where you can visualize the how the index works as shown below.

```bash
perl .\ch-2.pl "i sing eat and love" .\file1.txt .\file2.txt .\file3.txt .\file4.txt .\file5.txt
+-------+--------------------------------+
| Words | File(s)                        |
+-------+--------------------------------+
| and   | file1.txt file2.txt            |
| eat   | file4.txt                      |
| i     | file1.txt file2.txt file4.txt  |
| love  | file2.txt file5.txt            |
| sing  | (N/A)                          |
+-------+--------------------------------+

```

By going through all four submissions, you're now equipped with good fundamental overview of the implementation of **Inverted Index**.

The above mentioned four solutions served as a good working prototype to get things started. You must be wondering, can we improve or extend on these solutions?

Yes, there were quite a few.

Interestingly, two of the participants ([E. Choroba](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-024/e-choroba/perl5/ch-2.pl) and [Joelle Maslak](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-024/joelle-maslak/perl5/ch-2.pl)) used their own **CPAN** module in their own solution. The first we've seen so far and it caught us by surprise! First, the solution by [E. Choroba](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-024/e-choroba/perl5/ch-2.pl) used [`Syntax::Construct`](https://metacpan.org/pod/Syntax::Construct) **CPAN** module as an alternative way to manage `feature` pragma. Second, the solution by [Joelle Maslak](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-024/joelle-maslak/perl5/ch-2.pl) which used [`File::ByLine`](https://metacpan.org/pod/File::ByLine) **CPAN** module to process single a file in a parallel manner.

How about storage? Both [Duane Powell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-024/duane-powell/perl5/ch-2.pl) and [E. Choroba](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-024/e-choroba/perl5/ch-2.pl) used [`Storable`](https://metacpan.org/pod/Storable) **CPAN** module to capture the index in a persistent manner. While **Guillermo Ramos** was the only participant who used [DB](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-024/guillermo-ramos/perl5/ch-2.pl) to store the index.

What if we want to refine the word we've extracted to build the index? **Roger Bell West** [solved this](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-024/roger-bell-west/perl5/ch-2.pl) by [stemming](https://en.wikipedia.org/wiki/Stemming) through the [`Lingua::Stem`](https://metacpan.org/pod/Lingua::Stem) **CPAN** module.

How about counting the word frequency for each document? **Randy Lauen** was the only participant which [implemented this approach](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-024/randy-lauen/perl5/ch-2.pl).

Now, for some other miscellaneous we've noticed from reviewing these solutions.

If you don't like to use [`glob`](https://perldoc.perl.org/functions/glob.html) to filter and get the list of files, you can look into [`File::Find::Rule`](https://metacpan.org/pod/File::Find::Rule) as seen in [submission](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-024/duane-powell/perl5/ch-2.pl) by **Duane Powell**. In formatting the output of the result, [Adam Russell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-024/adam-russell/perl5/ch-2.pl) demonstrated that you can use the [Perl formats](https://perldoc.perl.org/perlform.html) (quite old school way) to achieve that.

***
### See Also
***

(1) [Small Inversions with Perl 6](https://perl6.eu/small-inversions.html) by **Arne Sommer**. Recommended read of the week.

(2) [Inverted Index Formatting](https://adamcrussell.livejournal.com/8285.html) by **Adam Russell**

(3) [Perl Weekly Challenge # 24: Smallest Script and Inverted Index](http://blogs.perl.org/users/laurent_r/2019/09/perl-weekly-challenge-24-smallest-script-and-inverted-index.html) by **Laurent Rosenfeld**

(4) [Perl Weekly Challenge 24](https://www.braincells.com/perl/2019/09/perl_weekly_challenge_week_24.html) by **Jaldhar H. Vyas**

(5) [RogerBW's Blog: Perl Weekly Challenge 24](https://blog.firedrake.org/archive/2019/09/Perl_Weekly_Challenge_24.html) by **Roger Bell West**

(6) [Perl Weekly Challenge W024 - Smallest Script, Inverted Index](http://blogs.perl.org/users/yet_ebreo/2019/09/perl-weekly-challenge-w024---smallest-script-inverted-index.html) by **Yet Ebreo**

(7) [Perl Weekly Challenge 024: Inverted Index and Shortest Oneliner](http://blogs.perl.org/users/e_choroba/2019/09/perl-weekly-challenge-024-inverted-index-and-shortest-oneliner.html) by **E. Choroba**

(8) [Perl is Good for Nothing](https://digitalbarbedwire.com/2016/03/27/perl-is-good-for-nothing/) by **Joelle Maslak**
