---
title: "Laurent Rosenfeld Weekly Review: Challenge - 032"
date: 2019-11-10T00:00:00+00:00
description: "Laurent Rosenfeld Weekly Review: Challenge - #032."
type: post
image: images/blog/p6-review-challenge-032.jpg
author: Laurent Rosenfeld
tags: ["Raku"]
---
***
# Raku Solutions Weekly Review
***

## Task #1: Word Histogram

This is derived in part from my [blog post](http://blogs.perl.org/users/laurent_r/2019/10/perl-weekly-challenge-30-word-histogram-and-ascii-bar-chart.html) made in answer to the [Week 32 of the Perl Weekly Challenge](https://perlweeklychallenge.org/blog/perl-weekly-challenge-032/) organized by  <a href="http://blogs.perl.org/users/mohammad_s_anwar/">Mohammad S. Anwar</a> as well as answers made by others to the same challenge.

The challenge reads as follows:

*Create a script that either reads standard input or one or more files specified on the command-line. Count the number of times and then print a summary, sorted by the count of each entry.*

*So with the following input in file example.txt:*

    apple
    banana
    apple
    cherry
    cherry
    apple

*the script would display something like:*

    apple     3
    cherry    2
    banana    1

*For extra credit, add a -csv option to your script, which would generate:*

    apple,3
    cherry,2
    banana,1

In other words, we're supposed to make an histogram reporting the frequency of various words in the input, which can be one or several files.

## My Solutions

A simple solution might be to use a hash, as we would do in Perl 5, to store the word counters. In Raku (aka Perl 6), however, we can do slightly better and use a `Bag` to directly assign frequencies when reading the input files.

Sorting the histogram can also be made simpler than it would be in Perl 5: if the code block (or subroutine) passed to the `sort` built-in function  accepts only one parameter, then the code block (or subroutine) is not a comparison block (or subroutine), but a code object implementing the transformation to be applied to the items to be sorted before using the default `cmp` comparison routine. Here, the `{$histo{$_}}` code block passed to the `sort`function takes only one parameter,; this means that `sort` should apply the standard `cmp` comparison function to the values associated with the keys that we want to sort. In addition, the default `cmp` comparison routine and `sort` built-in function are clever enough to see that they are comparing integers and should therefore apply a numeric sort to the data. Furthermore, this is also more efficient as the transformed values are not recomputed for each comparison, but cached, which means that we get the performance benefit of the the Schwartzian Transform in Perl 5 without having to implement it ourselves (although this performance advantage is probably secondary here, unless our input files have a very large number of different words).

```Perl6
use v6;

sub MAIN (*@files) {
    my $histo = @files.map({.IO.lines}).Bag;
    for reverse sort {$histo{$_}}, keys $histo -> $key {
        printf "%-20s%d\n", $key, $histo{$key};
    }
}
```

With a  `word_test.txt` input file containing the sample input data:

```
apple
banana
apple
cherry
cherry
apple
```

We obtain the following  the word counters:

```
apple     3
cherry    2
banana    1
```

If you prefer another syntax, the `histo` assignment at the beginning could also be written as follows:

```Perl6
    my $histo = (map {.IO.lines}, @files).Bag;
```

This program correctly takes into account the files passed as a parameter. For example, passing twice the same `word_test.txt` input file yields counters that are twice the original ones.:

    $ perl6 word_histo.p6 word_test.txt word_test.txt
    apple               6
    cherry              4
    banana              2

Note that there is (in Perl 6.d) a new `IO.CatHandle` class for seamlessly gathering input from multiple files, but this did not appear to be necessary here.

### Extra Credit: CSV Option

For the extra credit, we could just try to add an optional parameter (with a default value), a  Boolean flag to decide whether we want CSV output, and then change the `printf` formatting string according to its value:

    sub MAIN (Int $csv = 0, *@files) { # ...

but that does not really work as expected when no CSV flag argument is passed to the program. It appears that an optional parameter cannot be put before a mandatory one. Changing the order of the arguments does not help, because an optional parameter cannot be put after variadic parameters.

We will therefore use two multi `MAIN` subroutines to handle cases where a Boolean flag is passed and those where there is no such flag. These `MAIN` subroutines will populate a `$*format` dynamic scope variable and then call the same `readfiles` subroutine:

``` Perl6
    use v6;
    subset file of Str where *.IO.f;

    multi sub MAIN (Int $csv, *@files where all(@files) ~~ file) {
        my $*format = $csv ?? "%s,%d\n" !! "%-20s%d\n";
        readfiles @files;
    }
    multi sub MAIN (*@files where all(@files) ~~ file) {
        my $*format = "%-20s%d\n";
        readfiles @files;
    }
    sub readfiles (@files) {
        my $histo = @files.map({.IO.lines}).Bag;
        for reverse sort {$histo{$_}}, keys $histo -> $key {
            printf $*format, $key, $histo{$key};
        }
    }
```

This can be tested with or without a CSV flag:

    $ perl6 word_histo2.p6 word_test.txt word_test.txt
    apple               6
    cherry              4
    banana              2

    $ perl6 word_histo2.p6 1 word_test.txt word_test.txt
    apple,6
    cherry,4
    banana,2

    $ perl6 word_histo2.p6 0 word_test.txt word_test.txt
    apple               6
    cherry              4
    banana              2

### Using Named Parameters

So, now, this works properly, but we may still have a slight problem if the name of the file passed as an argument is a plain integer: this would become ambiguous, and the Moar virtual machine might not be able to tell correctly an integer from a file. This can be solved with *named arguments* for the Boolean CSV flag, which will also make it possible to write shorter and simpler code:

``` Perl6
use v6;
subset file of Str where *.IO.f;

sub MAIN (Bool :$csv, *@files where all(@files) ~~ file) {
    my $format = $csv ?? "%s,%d\n" !! "%-20s%d\n";
    my $histo = @files.map({.IO.lines}).Bag;
    for reverse sort {$histo{$_}}, keys $histo -> $key {
        printf $format, $key, $histo{$key};
    }

}
```

Now, we need to pass a `--csv` argument when calling the program at the CLI in order to activate the CSV format:

    $ perl6 word_histo2.p6 word_test.txt word_test.txt
    apple               6
    cherry              4
    banana              2

    $ perl6 word_histo2.p6 --csv word_test.txt word_test.txt word_test.txt
    apple,9
    cherry,6
    banana,3

## Alternative Solutions

[Arne Sommer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/arne-sommer/perl6/ch-1.p6) submitted a seemingly somewhat complex solution, but much of the complexity comes from Arne's care to output a nicely formatted output. Looking closely at his code, you'll find that most of the challenge work is actually done in the `line-counter` subroutine arguments, which do store the word counts into an anonymous `Bag` passed to the subroutine:

```Perl6
multi sub MAIN ($file where $file.IO.f && $file.IO.r, :$csv = False)
{
  line-counter($file.IO.lines.Bag, $csv);
}
multi sub MAIN (:$csv = False)
{
  line-counter($*ARGFILES.lines.Bag, $csv);
}
sub line-counter (%input, $csv)
{
  my $max = %input.keys>>.chars.max;
  for %input.keys.sort({ %input{$^b} <=> %input{$^a} || $^a cmp $^b })
  {
    say $csv
      ?? "$_,%input{$_}"
      !! "{ $_ }{ " " x ($max - .chars) } { %input{$_} }";
  }
}
```

[Kevin Colyer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/kevin-colyer/perl6/ch-1.p6) made a much shorter solution also using a `Bag`:

``` Perl6
sub MAIN($file where *.IO.f = "test.txt", Bool :$csv = False) {
    my $bag=Bag.new($file.IO.slurp.lines>>.trim);
    my $delim=$csv ?? "," !! "\t";
    say $_.antipairs.fmt("%s$delim%s") for $bag.invert.sort.reverse;
}
```

[Markus Holzer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/markus-holzer/perl6/ch-1-and-2.pl6) took advantage of the fact that the two tasks of this weekly challenge were related to provide a single solution for both.  This makes it a bit difficult for me report the part related to this challenge and the part related to the other. Let me just say that he also used a `Bag` to store the word counters and quote only the part of his code relating directly to this task:

``` Perl6
    my @words   = @files
                  ?? @files.map( |*.IO.lines )
                  !! |$*ARGFILES.lines;

    my $weights = Bag.new( @words );
```

[Noud](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/noud/perl6/ch-1.p6) used a plain `%word_count` hash to store the word frequencies:

``` Perl6
sub MAIN(*@files, Bool :$csv) {
    my %word_count;
    for @files -> $file {
        for $file.IO.words -> $word {
            %word_count{$word}++;
        }
    }
    my $infix = gather { if $csv { take "," } else { take ":\t" } };
    for %word_count.sort(-*.value)>>.kv -> ($word, $count) {
        say "$word$infix$count";
    }
}
```

[Adam Russell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/adam-russell/perl6/ch-1.p6) also used a plain hash to record the word counters:

``` Perl6
sub MAIN{
    my %word_counts;
    for $*IN.lines -> $line {
        $line.chomp;
        %word_counts{$line}+=1;
    }
    for %word_counts.sort(*.value).reverse -> $pair {
        say $pair.key ~ "\t" ~ $pair.value;
    }
}
```

Note that Adam Russell also provided a [C++ implementation](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/adam-russell/cxx/ch-1.cxx).

[Jaldhar H. Vyas](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/jaldhar-h-vyas/perl6/ch-1.p6) also used a hash (`%totals`) to store the histogram:

``` Perl6
    my %totals;

    if @files.elems {
        for @files -> $file {
            $file.IO.lines.map({ %totals{$_}++; });
        }
    } else {
        $*IN.lines.map({ %totals{$_}++; });
    }
```

[Javier Luque](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/javier-luque/perl6/ch-1.p6) also stored his word counters in a hash (`%counts`):

``` Perl6
    my %counts;

    # Increment the counts hash for each line
    for $*IN.lines() -> $line {
        %counts{$line.chomp}++
    };
    for %counts.keys.sort -> $item {
        if ($use_csv) {
            # Normally i'd use a module like Text::CSV
            say $item ~ ',' ~ %counts{$item};
        } else {
            "%-10s %d\n".printf($item, %counts{$item});
        }
    }
```

[Ruben Westerberg](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/ruben-westerberg/perl6/ch-1.p6) also used a hash to store the counters:

``` Perl6
sub MAIN(*@files,:$vsort=False) {
    my %data;

    for @files {
        for .IO.lines() {
            %data{$_}++;
        }
    }
    histogram(%data,$vsort,False);
    histogram(%data,$vsort,True);
}
```

Note that, like Markus Holzer, Ruben also provided [a solution combining task 1 and task 2](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/ruben-westerberg/perl6/ch-1_and_2.p6) of this weekly challenge. Please follow the link if you want to know more.

[Ryan Thompson](https://perlweeklychallenge.org/blog/recap-challenge-032/), a new participant to the Raku/Perl 6 challenge (welcome, Ryan!), also used a `%count` hash to store the counters.

``` Perl6
# Bit of a hack. Normal preference would be MAIN(Bool :$csv) or Getopt::Long
my $csv = (@*ARGS[0] and @*ARGS[0] eq '-csv') ?? @*ARGS.shift !! False;

my %count;
%count{ $*ARGFILES.get }++ while ! $*ARGFILES.eof;

my $key_width = %count.  keys.race.map({.chars}).max;
my $int_width = %count.values.race.map({.chars}).max;
my $fmt = $csv ?? "%s,%s\n" !! "%-{$key_width}s %{$int_width}d\n";

$fmt.printf(.key, .value) for %count.sort: { .value, .key };
```

[Simon Proctor](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/simon-proctor/perl6/ch-1.p6) used a `BagHash` rather than a `Bag`. A `BagHash` is very similar to a `Bag`, but with the difference that it is a mutable data structure, so that it can be populated progressively with individual items, pretty much like a hash, whereas a `Bag` essentially has to be populated in one shot at the time it is being constructed. His program has three `Main` subroutines, two of which use new `IO::CatHandle` type to manage multiple files and pass it to a `read-files` subroutine:

``` Perl6
    read-files( IO::CatHandle.new( $*IN ), $csv );
```

And its `read-files` subroutine looks like this:

``` Perl6
sub read-files( IO::CatHandle $files, $csv ) {
    my %results := BagHash.new();
    %results{$_}++ for $files.lines;
    my $k-dist = %results.keys.map( *.codes ).max;
    my $v-dist = %results.values.map( *.codes ).max;
    my $fmt = $csv ?? '"%s",%d' !! "% -{$k-dist+2}s%{$v-dist+2}d";
    .say for %results.sort( *.value <=> *.value ).reverse.map( { sprintf($fmt,$_.key,$_.value) } );
}
```

[Athanasius](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/athanasius/perl6/ch-1.p6) created a `read-data` subroutine to store the input words into a `@data` array, and read back the `@data` array to populate a `%count` hash, and finally sorted the hash to print out the results. The program is quite long, I will only show here the part when the hash is populated, sorted and printed out:

``` Perl6
    my UInt %count;
    ++%count{$_} for @data;

    # Sort keys by count: highest count first, equal counts in lexicographi-
    # cal order. Adapted from:
    #   https://perldoc.perl.org/5.30.0/perlfaq4.html#How-do-I-sort-a-hash-
    #           (optionally-by-value-instead-of-key)%3f
    my Str @keys = %count.keys.sort:
                   {
                       %count{$^b} <=> %count{$^a}      # Descending
                       ||
                       $^a cmp $^b                      # Lexicographical
                   };
    my Str $delimiter = $csv ?? ',' !! "\t";

    "%s%s%d\n".printf: $_, $delimiter, %count{$_} for @keys;
```
Note that Athanasius is using the Perl 5 documentation on `sort`. As mentioned earlier, the Raku `cmp` built-in function is "clever" and can decide by itself whether to perform numeric or lexicographic comparison, based on the data type. This can make the code a bit simpler.

[Joelle Maslak](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/joelle-maslak/perl6/ch-1.p6) did something similar: she stored all the input words into a `@words` array and then populated a `$bag` `Bag` structure:

``` Perl6
sub MAIN(+@filenames, Bool :$csv) {
    # Assumption: no line is blank.
    # Assumption: Files will fit into RAM simultaniously

    @filenames.push("example.txt") unless @filenames.elems;

    my @words;
    for @filenames -> $fn {
        @words.push: | $fn.IO.lines.grep( * ne '' );
    }
    my $bag = bag @words;
    my $sorted = $bag.pairs.sort( { $^a.value <=> $^b.value } ).reverse;

    if $csv {
        say $sorted.map( { "{$_.key},{$_.value}" } ).join("\n");
    } else {
        say $sorted.map( { "{$_.key}\t{$_.value}" } ).join("\n");
    }
}
```

***
***

## Task #2: ASCII Bar Chart

***
***

This is derived in part from my [blog post](http://blogs.perl.org/users/laurent_r/2019/10/perl-weekly-challenge-30-word-histogram-and-ascii-bar-chart.html) made in answer to the [Week 32 of the Perl Weekly Challenge](https://perlweeklychallenge.org/blog/perl-weekly-challenge-032/) organized by  <a href="http://blogs.perl.org/users/mohammad_s_anwar/">Mohammad S. Anwar</a> as well as answers made by others to the same challenge.

The challenge reads as follows:

*Write a function that takes a hashref where the keys are labels and the values are integer or floating point values. Generate a bar graph of the data and display it to stdout.*

*The input could be something like:*

    $data = { apple => 3, cherry => 2, banana => 1 };
    generate_bar_graph($data);

*And would then generate something like this:*

     apple | ############
    cherry | ########
    banana | ####

*If you fancy then please try this as well: (a) the function could let you specify whether the chart should be ordered by (1) the labels, or (2) the values.*

There is really nothing complicated in generating the bars of the chart: we just need to use the `x` string repetition operator with the fruit values. However, I would like to standardize somehow the size of output, irrespective of the absolute values.  For this, the program loops over the hash a first time to collect the minimum and maximum values, and  computes a scaling factor as `10 / ($max - $min)`, and then uses that `$scale_factor` for standardizing the length of the bars, so that the bar graph has about the same size for values of 4, 6, and 9 as for values of 40, 60 and 90. The hard coded value of 10 arbitrarily chosen here simply means that the spread between the smallest and the largest value will be represented by 10 units (concretely, 10 `#` characters). I could have chosen another value, but I wanted the bar graphs to keep relatively small to make sure they remain correctly formatted within the limited page width of this blog post.

This could lead to the following approach:

``` Perl6
use v6;

sub generate_chart (%data) {
    my ($max, $min);
    for keys %data -> $key {
        ($max, $min) = (%data{$key}, %data{$key}) unless defined $max;
        $max = %data{$key} if %data{$key} > $max;
        $min = %data{$key} if %data{$key} < $min;
    }
    my $scale_factor = 10 / ($max - $min);
    for sort { %data{$^b} <=> %data{$^a} }, keys %data -> $key {
        printf "%15s | %s\n", $key, "#" x (%data{$key} * $scale_factor);
    }
}
my $data = { apple => 3, cherry => 6, banana => 1, pear => 4 };
generate_chart $data;
```

Note that, compared too Perl 5, Raku has no real difference between hashes and hash references in most cases.

This produces the following output:

    $ perl6 ascii_chart.p6
             cherry | ############
               pear | ########
              apple | ######
             banana | ##



#### Ordering the Bar Chart in Accordance with Labels or Values

We will use anonymous code references as the first argument to the `sort` built-in function.

``` Perl6
use v6;

sub generate_chart (%data) {
    my ($max, $min);
    for keys %data -> $key {
        ($max, $min) = (%data{$key}, %data{$key}) unless defined $max;
        $max = %data{$key} if %data{$key} > $max;
        $min = %data{$key} if %data{$key} < $min;
    }
    my $scale_factor = 10 / ($max - $min);
    my &sort_routine = ($*sort-type ~~ m:i/val/)
        ?? { %data{$^b} <=> %data{$^a} }
        !! {$^a cmp $^b };
    for sort &sort_routine, keys %data -> $key {
        printf "%15s | %s\n", $key, "#" x (%data{$key} * $scale_factor);
    }
}
sub MAIN (Str $*sort-type) {
    my $data = { apple => 3, cherry => 6, banana => 1, pear => 4 };
    generate_chart $data;
}
```

This works as expected:

    $ perl6 ascii_chart2.p6 val
             cherry | ############
               pear | ########
              apple | ######
             banana | ##

    $ perl6 ascii_chart2.p6 lab
              apple | ######
             banana | ##
             cherry | ############
               pear | ########

## Alternative Solutions

[Arne Sommer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/arne-sommer/perl6/ch-2.p6) wrote a `generate_bar_graph` subroutine doing the sort according to the labels or the values in a `if ... else` conditional statement and storing the result in an array of keys, and then using this array to output the result:

``` Perl6
sub generate_bar_graph ($data, $sort)
{
  my $max = %($data).keys>>.chars.max;
  my @keys = %($data).keys;

  if $sort eq "values"
  {
    @keys = @keys.sort({ %($data){$^b} cmp %($data){$^a} });
  }
  elsif $sort eq "labels"
  {
    @keys = @keys.sort;
  }
  for  @keys -> $label
  {
    say "{ " " x ($max - $label.chars) }$label | { "#" x 4 * %($data){$label} }";
  }
}
```

[Noud](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/noud/perl6/ch-2.p6) similarly wrote a `generate_bar_graph` subroutine which populates a temporary array of sorted keys:

``` Perl6
sub generate_bar_graph(%data, $sort-on="value") {
    my $vmin = %data.values.min - 1;
    my $vmax = %data.values.max;
    constant $width = 79;

    my @count_array;
    if ($sort-on === "value") {
        @count_array = %data.sort(-*.value)>>.kv;
    } elsif ($sort-on === "key") {
        @count_array = %data.sort(*.key)>>.kv;
    } else {
        die "Unknown sorting argument: $sort-on";
    }

    for @count_array -> ($word, $count) {
        my $times = Int(($count - $vmin) / ($vmax - $vmin) * $width);
        say "$word:\t" ~ "#" x $times;
    }
}
```

Note that, like me, Noud is computing a scaling factor to standardize the bar graph width.

[Jaldhar H. Vyas](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/jaldhar-h-vyas/perl6/ch-2.p6) also wrote a `generate_bar_graph` subroutine that populates an array of sorted keys:

``` Perl6
sub generate_bar_graph(%data, Bool $bylabels = False) {
    constant $SCALE = 4;

    my @labels = %data.keys.sort({ %data{$^b} <=> %data{$^a} });
    my $smallest = %data{@labels[@labels.end]};

    if ($bylabels) {
        @labels = @labels.sort;
    }

    my $width = @labels.sort({$^b.chars <=> $^a.chars}).first.chars;
    my $bar_graph = q{};

    for @labels -> $label {
        my $bar = (%data{$label} / $smallest) * $SCALE;
        if %data{$label} !%% $smallest {
            $bar += $SCALE / 2;
        }
        $bar_graph ~= sprintf("% -*s | %s\n", $width, $label, '#' x $bar);
    }

    return $bar_graph;
}
```

[Kevin Colyer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/kevin-colyer/perl6/ch-2.p6) also wrote a `generate_bar_graph` subroutine which similarly populates an array with sorted keys:

``` Perl6
sub generate_bar_graph(%data, Bool :$sortByLabel=False, Bool :$sortDescending=False, Int :$graphWidth=20) {
    my $lableWidth=[max] %data.keys>>.chars;
    my $max=1+[max] %data.values;
    my $min=[min] %data.values;
    my $multiplier=1/$max*$graphWidth;

    die "not sure I want to display negative values" if $min < 0;

    my @sorted = $sortByLabel==True ?? %data.sort(*.key) !! %data.sort(*.value);
    @sorted.=reverse if $sortDescending;

    for @sorted -> (:$key,:$value) {
        say sprintf("%{$lableWidth}s | ", $key ) ~ "#" x $value*$multiplier;
    };
};
```
I especially like the simple way Kevin's program is doing the sort by passing `*.key` or `*.value` to the `sort` built-in function:

``` Perl6
my @sorted = $sortByLabel==True ?? %data.sort(*.key) !! %data.sort(*.value);
```

although comparing `$sortByLabel` to `True` isn't really needed, as the `?? ... !!` operator coerces a Boolean evaluation and this should work the same way:

``` Perl6
my @sorted = $sortByLabel ?? %data.sort(*.key) !! %data.sort(*.value);
```

[Javier Luque](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/javier-luque/perl6/ch-2.p6) also wrote a `generate_bar_graph` subroutine, which creates a `$sort_func` code object to sort according to values or names, depending on the input parameter:

``` Perl6
sub generate_bar_graph (%data, %params) {
    my $sort_func;

    # Sorting function - just 2 for now
    {
        when (%params.{'order_by'} eq 'size') {
            $sort_func = sub { %data.{$^b} <=> %data.{$^a} };
        }

        when (%params.{'order_by'} eq 'name') {
            $sort_func = sub { fc($^a) cmp fc($^b) };
        }
    }

    # Print the chart
    for %data.keys.sort($sort_func) -> $key {
        "%10s | %s \n".printf($key, '#' x (4 * %data.{$key}));
    }
}
```

[Markus Holzer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/markus-holzer/perl6/ch-1-and-2.pl6) used a nice `$format` string and `&sorter` subroutine to achieve the desired result:

``` Perl6
    my $lngst   = max $weights.keys.map( *.chars );
    my $format  = $csv   ?? "%s, %s"           !!
                  $graph ?? "%{$lngst}s | %s " !!
                  "%-{$lngst}s %s "             ;

    my &sorter  = $sort-by-label
                  ?? { $^a.key   cmp $^b.key   }
                  !! { $^b.value <=> $^a.value };

    .say for $weights
        .sort( &sorter )
        .map({ .key => $graph ?? "#" x .value !! .value })
        .map({ sprintf $format, .key, .value });
```

[Simon Proctor](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/simon-proctor/perl6/ch-2.p6) made a fairly long program that I'll quote only in part:

``` Perl6
sub draw-graph( %data, SortType $sort-type, SortDir $sort-dir ) {
    my $k-width = %data.keys.map(*.codes).max;
    my $max-val = %data.values.max;
    my $screen-width = get-screen-width();

    my &sorter = make-sorter( $sort-type, $sort-dir );

    my $available = $screen-width - $k-width - 5;
    .say for %data.sort( &sorter ).map( { sprintf( "% -{$k-width}s  |  %s", $_.key, get-bar( $available, $max-val, $_.value ) ) } );
}

sub make-sorter( SortType $sort-type, SortDir $sort-dir ) {
    given $sort-dir {
        when asc {
            -> $a, $b { $a.^lookup($sort-type)($a) cmp $b.^lookup($sort-type)($b) }
        }
        when desc {
            -> $a, $b { $b.^lookup($sort-type)($b) cmp $a.^lookup($sort-type)($a) }
        }
    }
}

sub get-bar( Int $available, $max, $value ) {
    '#' x ceiling( $available * ( $value / $max ) );
}

sub get-screen-width() {
    my $result;
    try {
        $result = run("tput","cols",:out).out.slurp.chomp;
    }
    # Fallback incase tput not available
    return $result || 100;
}

sub parse-space-sep( Str $line ) {
    if ( my $match = $line ~~ m!^ (\S+) \s+ (\S+) $! ) {
        return $match[0], $match[1];
    }
    die "Line parser didn't work on $line";
}

sub parse-csv( Str $line ) {
    if ( my $match = $line ~~ m!^ (\"?) (.+) $0 "," (.+) $! ) { #" Editor bug
       return $match[1], $match[2];
    }
    die "Lazy CSV parser didn't work on $line";
}
```

[Athanasius](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/athanasius/perl6/ch-2.p6) also wrote a lengthy program from which I'll only quote a small part:

``` Perl6
    my Str @keys = %data.keys;

    if $by-values   # Order by values
    {
        @keys = @keys.sort:
                {
                    %data{$^b} <=> %data{$^a}       # Descending
                    ||                              #    then
                    $^a cmp $^b                     # Lexicographical
                };
    }
    else            # Order by labels
    {
        @keys = @keys.sort;                         # Lexicographical only
    }

    my UInt $width = @keys.map( { .chars } ).max;
    my Str  $graph = '';

    for @keys -> Str $key
    {
        my Str $bar = $BAR-CHARACTER x ($BAR-MULTIPLIER * %data{$key});
        $graph     ~= "  %*s | %s\n".sprintf: $width, $key, $bar;
    }

    return $graph;
```

[Adam Russell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/adam-russell/perl6/ch-2.p6) used the interesting [term](https://docs.perl6.org/routine/term:%3C%3E) feature of Raku that I did not know about to populate a constant:

``` Perl6
sub term:<MAX-LENGTH> { 10 };
```

Otherwise, his program sorts the data to find the min/max values in order to scale the bar graph (using the `min` and `max` built-in functions might be more efficient, but it probably doesn't matter very much unless the data is very large):

``` Perl6
sub MAIN($input) {
    my %data = from-json $input;
    my @sorted = %data.sort(*.value);
    my $min = @sorted[0].value;
    my $max = @sorted[@sorted.end].value;
    for %data.sort(*.value).reverse -> $pair {
        print $pair.key ~ "\t| ";
        say "#" x ($pair.value - $min + 1) / ($max  - $min) * MAX-LENGTH;
    }
}
```

[Joelle Maslak](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/joelle-maslak/perl6/ch-2.p6) scaled the graph according to the spread between the min  and max values:

``` Perl6
    my $spread    = $max-value - $min-value;            # How far apart are max and min?
    my $max-bar   = $screen-width - $max-len - 4;       # How big the bar can be, we don't use last column
    my $unit-size = $max-bar ?? ($spread / $max-bar) !! 0;  # What a '#' represents

    for @words -> $ele {
        my $hashes = (($ele[1] - $min-value) / $unit-size).Int;
        $hashes = $max-bar if $unit-size == 0;

        say $ele[0].fmt("%-{$max-len}s") ~ " | " ~ "#" x $hashes;
    }
```

[Ruben Westerberg](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-032/ruben-westerberg/perl6/ch-2.p6) wrote a `histogram` subroutine that sorts the keys of the hash and then sorts them again if the `$valueSort` parameter is `True`.

``` Perl6
sub histogram(%h,$valueSort,$chart) {
    my @keys=%h.keys.sort;#(*.chars < *.chars);
    my $maxKeyLength=@keys>>.chars.max;
    put "";
    if ($valueSort) {
        @keys=%h.keys.sort(-> $a,$b {%h{$a} < %h{$b}});
    }
    for @keys {
        my $v=%h{$_}.Str;
        $v="#" x %h{$_} if $chart;
        printf("%"~$maxKeyLength~"s| %s\n",$_,$v);
    }
}
```

***
***
## SEE ALSO
***
***

Four blog posts this time:

* Arne Sommer: https://raku-musings.com/instance-bar.html;

* Adam Russell: https://adamcrussell.livejournal.com/10802.html;

* Jaldhar H. Vyas: https://www.braincells.com/perl/2019/11/perl_weekly_challenge_week_32.html;

* Javier Luque: https://perlchallenges.wordpress.com/2019/10/31/perl-weekly-challenge-032/;

## Wrapping up

Please let me know if I forgot any of the challengers or if you think my explanation of your code misses something important (send me an e-mail or just raise an issue against this GitHub page).
