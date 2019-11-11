---
title: "Kian-Meng Ang Weekly Review: Challenge - 032"
date: 2019-11-10T00:00:00+00:00
description: "Kian-Meng Ang Weekly Review: Challenge - #032."
type: post
image: images/blog/p5-review-challenge-032.jpg
author: Kian-Meng Ang
tags: ["Perl"]
---
***
***
Continues from [**previous week**](/blog/review-challenge-031/).

Feel free to [**submit a merge request or open a ticket**](https://github.com/manwar/perlweeklychallenge) if you found any issues with this post. We highly appreciate and welcome your feedback.

For a quick overview, go through the [**original tasks**](/blog/perl-weekly-challenge-032/) and [**recap**](/blog/recap-challenge-032/) of the weekly challenge.

Additional feedback to the our Perl Weekly Challenge's [**Twitter account**](https://twitter.com/perlwchallenge?lang=en) is much appreciated.


***
***
## Task #1
***
***

**CPAN** modules used: [`Const::Fast`](https://metacpan.org/pod/Const::Fast), [`Data::Dumper`](https://metacpan.org/pod/Data::Dumper), [`English`](https://metacpan.org/pod/English), [`Getopt::Long`](https://metacpan.org/pod/Getopt::Long), [`Getopt::Std`](https://metacpan.org/pod/Getopt::Std), [`List::Util`](https://metacpan.org/pod/List::Util), [`Modern::Perl`](https://metacpan.org/pod/Modern::Perl), [`Term::Size::Perl`](https://metacpan.org/pod/Term::Size::Perl), [`Text::CSV_XS`](https://metacpan.org/pod/Text::CSV_XS), [`feature`](https://metacpan.org/pod/feature), [`open`](https://metacpan.org/pod/open), [`strict`](https://metacpan.org/pod/strict), [`warnings`](https://metacpan.org/pod/warnings)

A rather common (there is even a [**FAQ**](https://perldoc.pl/perlfaq6#How-can-I-print-out-a-word-frequency-or-line-frequency-summary), link via [**E. Choroba**](http://blogs.perl.org/users/e_choroba/2019/11/perl-weekly-challenge-032-frequency-table-ascii-bar-chart.html)) task to demonstrate **Perl**'s text manipulation capabilities. Common approach used by most participants can be break down into several steps consists of read each line from standard input, clean up each line, count the frequency of the word, sort the frequency count, and lastly show the result in both normal and CSV output. The solution by [**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/adam-russell/perl5/ch-1.pl) and [**Dave Cross**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/dave-cross/perl5/ch-1.pl) demonstrated this succinctly with no dependencies on **CPAN** modules or special features. And yes, start reading these solutions first before you proceed with other.

Beside that, there were other solutions in one-liner that can quickly show the approach to solve this task as shown below.

In [**Bash**](http://blogs.perl.org/users/e_choroba/2019/11/perl-weekly-challenge-032-frequency-table-ascii-bar-chart.html) by **E. Choroba**. Yes, using Unix pipe which demonstrated core concepts of [**Unix philosophy**](https://en.wikipedia.org/wiki/Unix_philosophy) of writing one program to do one thing very well and make sure all can work together through text streams.

    $ cat "$@" | sort | uniq -c | sort -n

In [**Perl**](http://46.91.236.80:81/www/Perl/PWC/20191028_32/pwc32.html) by **Burkhard Nickels**.

    $ perl -lne '$sum{$_}++; END { foreach( sort { $sum{$b} <=> $sum{$a} } keys %sum ) { print "$i\t$sum{$i}"; } }' example.txt

Unfortunately, we don't live in the perfect world. There is always this issue of [**garbage in, garbage out (GIGO)**](https://en.wikipedia.org/wiki/Garbage_in,_garbage_out) during text processing. Hence, we noticed different defensive measurements to handle possible edge cases were used by participants. And it showed that, to a certain extend, to handle numerous edges cases, **Bash** script may not be a convenient or suitable choice compare to **Perl** script.

For examples, [**Anton Fedotov**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/anton-fedotov/perl5/ch-1.pl) (UTF-8 support in both input and output), [**Duane Powell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/duane-powell/perl5/ch-1.pl) (non-alphabet characters removal and multiple words within a line support), [**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/dave-jacoby/perl5/ch-1.pl) (accept source from file or [**Standard Input (stdin)**](https://en.wikipedia.org/wiki/Standard_streams#Standard_input_(stdin))), [**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/laurent-rosenfeld/perl5/ch-1.pl) (skip empty line), [**Prajith P**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/prajith-p/perl5/ch-1.pl) (another way to skip empty line without regex and multiple source files support), [**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/e-choroba/perl5/ch-1.pl) (alternative UTF-8 support), and [**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/athanasius/perl5/ch-1.pl) (check input for different OS).

If you're new to **Perl** or favour to be more explicit, look into the solution by [**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/jaldhar-h-vyas/perl5/ch-1.pl) which used `English` **CPAN** module which avoid the use of ugly [**punctuation variables**](https://perldoc.perl.org/perlvar.html). **Ovid** wrote a [**blog post**](http://blogs.perl.org/users/ovid/2016/05/why-i-try-to-avoid-perls-punctuation-variables.html) on this subject as well. For comparison, we can see the differences of those submissions which used punctuation variables like `$!` or `$ERRNO` ([**Anton Fedotov**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/anton-fedotov/perl5/ch-1.pl)), `$~` or `$FORMAT_NAME` ([**Fabrizio Poggi**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/fabrizio-poggi/perl5/ch-1.pl)), `<>` or `ARGV` ([**Rage311**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/rage311/perl5/ch-1.pl), [**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/roger-bell-west/perl5/ch-1.pl), [**Andrezgz**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/andrezgz/perl5/ch-1.pl), [**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/e-choroba/perl5/ch-1.pl), [**Ryan Thompson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/ryan-thompson/perl5/ch-1.pl), [**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/duncan-c-white/perl5/ch-1.pl)), `$|` or `$OUTPUT_AUTOFLUSH` ([**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/athanasius/perl5/ch-1.pl)), and `$^O` or `$OSNAME` ([**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/athanasius/perl5/ch-1.pl)).

Another good comparison of **explicit** vs. **implicit** coding style was on reading a file by line and count the word frequency.

By [**Dave Cross**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/dave-cross/perl5/ch-1.pl) which was quite common style among all participants.

    my %count;

    while (<>) {
        chomp;
        $count{$_}++;
    }

By [**Andrezgz**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/andrezgz/perl5/ch-1.pl) which was short and dense code.

    my %entries;
    chomp, $entries{$_}++ while (<>); # count instances

By [**Steven Wilson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/steven-wilson/perl5/ch-1.pl) which was more explicit.

    for my $file (@ARGV) {
        open my $fh, '<', $file or die "Can't open < $file: $!";
        while ( !eof $fh ) {
            my $word = readline $fh;
            chomp $word;
            $word_count{$word} += 1;
        }
    }

For submission with heavy used of **CPAN** modules but still short and simple, the solution by [**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/e-choroba/perl5/ch-1.pl) was a good example to show case this.

Lastly, once you've familiarized yourself with all the submitted solutions of this task, read the answer by [**Burkhard Nickels**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/burkhard-nickels/perl5/ch-1.pl). **Burkhard** have submitted a comprehensive solution with numerous features for this task.

***
***
### Task #2
***
***

**CPAN** modules used: [`Const::Fast`](https://metacpan.org/pod/Const::Fast), [`Data::Dumper`](https://metacpan.org/pod/Data::Dumper), [`Function::Parameters`](https://metacpan.org/pod/Function::Parameters), [`Getopt::Long`](https://metacpan.org/pod/Getopt::Long), [`Getopt::Std`](https://metacpan.org/pod/Getopt::Std), [`JSON::PP`](https://metacpan.org/pod/JSON::PP), [`List::Util`](https://metacpan.org/pod/List::Util), [`Math::Round`](https://metacpan.org/pod/Math::Round), [`Modern::Perl`](https://metacpan.org/pod/Modern::Perl), [`Moo`](https://metacpan.org/pod/Moo), [`Term::ReadKey`](https://metacpan.org/pod/Term::ReadKey), [`Term::Size::Perl`](https://metacpan.org/pod/Term::Size::Perl), [`Types::Standard`](https://metacpan.org/pod/Types::Standard), [`autodie`](https://metacpan.org/pod/autodie), [`constant`](https://metacpan.org/pod/constant), [`experimental`](https://metacpan.org/pod/experimental), [`feature`](https://metacpan.org/pod/feature), [`namespace::clean`](https://metacpan.org/pod/namespace::clean), [`strict`](https://metacpan.org/pod/strict), [`utf8`](https://metacpan.org/pod/utf8), [`warnings`](https://metacpan.org/pod/warnings)

Another rather straightforward task where we need to sort the list of item by name or values and generate a histogram graph at the console. Due to similarity of this task with previous task, some participants decided to reuse and extend the existing code in **Task #1**.

For implementing different sorting strategies, we've observed different approaches.

[**Duane Powell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/duane-powell/perl5/ch-2.pl) used a simple if-else to sort the output.

    # sort and print lines
    if ($by_label) {
        # sort by key
        generate_bar($_[0],$_,$format) foreach (sort {lc($a) cmp lc($b)}           (keys %{$_[0]}));
    } else {
        # sort by value
        generate_bar($_[0],$_,$format) foreach (sort {$_[0]->{$a} <=> $_[0]->{$b}} (keys %{$_[0]}));
    }

[**Lars Balker**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/lars-balker/perl5/ch-2.pl), [**Javier Luque**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/javier-luque/perl5/ch-2.pl) and [**Giuseppe Terlizzi**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/giuseppe-terlizzi/perl5/ch-2.pl) used similar approach but with anonymous sorting subroutine.

For [**Lars Balker**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/lars-balker/perl5/ch-2.pl) where the if-else have been replaced with ternary operations and anonymous subroutines.

    my $sort = $order_by_label
        ? sub { $a cmp $b }
        : sub { $data->{$b} <=> $data->{$a} || $a cmp $b };
    for my $word (sort $sort keys %$data) {
        my $pct = $data->{$word} / $sum;
        printf "%*s | %s\n", $maxlength, $word,
            "#" x int($hashes * $pct);
    }

For [**Javier Luque**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/javier-luque/perl5/ch-2.pl) with flexibility to add more sorting fields.

    # Sorting function - just 2 for now
    $sort_func = sub { $data->{$::b} <=> $data->{$::a} }
        if ($params->{order_by} eq 'size');
    $sort_func = sub { fc($::a) cmp fc($::b) }
        if ($params->{order_by} eq 'name');

    # Print the chart
    for my $key (sort $sort_func keys %$data) {
    printf("%10s | %s \n",
        $key, '#' x int(scalar($data->{$key}) * 4));
    }

The more advance and Object-Oriented approach was seen in [**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/e-choroba/perl5/ch-2.pl). Instead of if-else statement, a hash was used as a lookup table to delegate to different sorting strategy subroutines.

    method generate (SortBy $sort_by = 'keys') {
        my $data = $self->data;
        my $max = max(values %$data);

        my $sort = {labels      => \&_by_key,
                    values      => \&_by_value,
                    labels_desc => \&_by_key_desc,
                    values_desc => \&_by_value_desc}->{$sort_by};

        for my $key (sort { $self->$sort } keys %$data) {
            printf '%' . $self->_max_length . "s%s%s\n",
                $key,
                $self->separator,
                '#' x ($self->_bar_width / $max * $data->{$key});
        }
    }

Another thing we've noticed where participants have put extra effort in scaling the histogram due to different range of values ([**Nazareno Delucca**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/ndelucca/perl5/ch-2.pl), [**Lars Balker**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/lars-balker/perl5/ch-2.pl), [**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/adam-russell/perl5/ch-2.pl), [**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/athanasius/perl5/ch-2.pl), [**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/laurent-rosenfeld/perl5/ch-2.pl), [**Prajith P**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/prajith-p/perl5/ch-2.pl), [**Lars Thegler**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/lars-thegler/perl5/ch-2.pl), [**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/ulrich-rieke/perl5/ch-2.pl), [**Jaldhar H Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/jaldhar-h-vyas/perl5/ch-2.pl), [**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/roger-bell-west/perl5/ch-2.pl), [**Ryan Thompson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/ryan-thompson/perl5/ch-2.pl), [**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/duncan-c-white/perl5/ch-2.pl), [**Andrezgz**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/andrezgz/perl5/ch-2.pl), [**Giuseppe Terlizzi**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/giuseppe-terlizzi/perl5/ch-2.pl), [**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/colin-crain/perl5/ch-2.pl), and [**Joelle Maslak**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/joelle-maslak/perl5/ch-2.pl)), floating numbers ([**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/ulrich-rieke/perl5/ch-2.pl), [**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/colin-crain/perl5/ch-2.pl), and [**Joelle Maslak**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/joelle-maslak/perl5/ch-2.pl)), and terminal width ([**Burkhard Nickels**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/burkhard-nickels/perl5/ch-2.pl), [**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/roger-bell-west/perl5/ch-2.pl), [**Ryan Thompson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/ryan-thompson/perl5/ch-2.pl), and [**Joelle Maslak**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/joelle-maslak/perl5/ch-2.pl)).

***
***
## SEE ALSO
***
***

(1) [**Perl Weekly Challenge 032**](https://adamcrussell.livejournal.com/10802.html) by **Adam Russell**

(2) [**The Raku Instance Bar**](https://raku-musings.com/instance-bar.html) by **Arne Sommer**

(3) [**Perl Weekly Challenge #32, Number of occurences and bar chart**](http://46.91.236.80:81/www/Perl/PWC/20191028_32/pwc32.html) by **Burkhard Nickels**

(4) [**Perl Weekly Challenge 032: Frequency Table & ASCII Bar Chart**](http://blogs.perl.org/users/e_choroba/2019/11/perl-weekly-challenge-032-frequency-table-ascii-bar-chart.html) by **E. Choroba**

(5) [**Perl Weekly Challenge: Week 32**](https://www.braincells.com/perl/2019/11/perl_weekly_challenge_week_32.html) by **Jaldhar H. Vyas**

(6) [**Perl Weekly Challenge - 32**](https://perlchallenges.wordpress.com/2019/10/31/perl-weekly-challenge-032/) by **Javier Luque**

(7) [**Perl Weekly Challenge 32: Word Histogram and ASCII Bar Chart**](http://blogs.perl.org/users/laurent_r/2019/10/perl-weekly-challenge-30-word-histogram-and-ascii-bar-chart.html) by **Laurent Rosenfeld**

(8) [**RogerBW's Blog: Perl Weekly Challenge 32**](https://blog.firedrake.org/archive/2019/11/Perl_Weekly_Challenge_32.html) by **Roger Bell_West**

***
