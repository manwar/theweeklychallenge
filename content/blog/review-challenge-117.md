---
author:       Colin Crain
date:         2021-07-05T00:00:00
description:  "Colin Crain › Perl Weekly Review #117"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #117"
image:        images/blog/p5-review-challenge-117.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-116/).* )

Welcome to the Perl review for **Week 117** of the Weekly Challenge! Here we will take the time to discuss the  submissions offered by the team, factor out the common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

---

### Why do we do these challenges?

I suppose any answers to that would be as wide ranging and varied as the people who choose to join the team. One thing is clear: it's not a competition, and there are no judges, even if there is a "prize" of sorts. About that -- I think of it more as an honorarium periodically awarded to acknowledge the efforts we make towards this strange goal. So there's no determination to find the *fastest*, or the *shortest*, or even, in some abstract way, the *best* way to go about things, although I'm certain the individuals have their own aspirations and personal drives. As Perl is such a wonderfully expressive language, this provides quite a bit of fodder to the core idea of TMTOWTDI, producing a gamut of wonderfully varied techniques and solutions.

Even the tasks themselves are often open to a certain amount of discretionary interpretation. What we end up with is a situation where each participant is producing something in the manner they find the most interesting or satisfying. Some team members focus on carefully crafted complete applications that thoroughly vet input data and handle every use case they can think up. Others chose to apply themselves to the logic of the underlying puzzle and making it work in the most elegant way they can. Some eschew modules they would ordinarily reach for, others embrace them, bringing to light wheels perhaps invented years ago that happen to exactly solve the problem in front of them today.

I've been considering this question for some time and have found one binding commonality between all of us solving these challenges each week, in that however we normally live our lives, the task in front of us more than likely has nothing to do with any of that . And I think this has great value. We all do what we do, out in the real world, and hopefully we do it well. The Weekly Challenge provides a opportunity to do something germane to that life yet distinctly different; if we only do the things we already know how to do we only do the same things over and over. This is where the "challenge" aspect comes into play.

So we can consider the Weekly Challenge as providing a problem space outside of our comfort zone, as far out from comfort as we wish to take things. From those reaches we can gather and learn things and bring what we want back into our lives. Personally, I think that's its greatest value of all.

---

Every week there is an enormous global collective effort made by the team, analyzing and creatively coding the submissions, and that effort deserves credit due. And that's why I'm here, to try and figure out how to do that.

Let's have a look and see what we can find.

---

**<big>For context</big>**  before we begin, you may wish to revisit either of the pages for the [**original tasks**](/blog/perl-weekly-challenge-117/) or the summary [**recap**](/blog/recap-challenge-117/) of the challenge. But don't worry, the challenges themselves will be briefly summarized, presented below as we progress from task by task. Oh, and one more thing before we get started:

### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

**So finally, without further ado...**

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC117TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC117TASK2)   &nbsp;  &nbsp;  &nbsp;   	•   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC117BLOGS)    &nbsp;  &nbsp;  &nbsp;   	•

---

# TASK 1 {#PWC117TASK1}

# Missing Row
*Submitted by: Mohammad S Anwar*<br>
You are given text file with rows numbered 1-15 in random order but there is a catch one row in missing in the file.

```
    11, Line Eleven
    1, Line one
    9, Line Nine
    13, Line Thirteen
    2, Line two
    6, Line Six
    8, Line Eight
    10, Line Ten
    7, Line Seven
    4, Line Four
    14, Line Fourteen
    3, Line three
    15, Line Fifteen
    5, Line Five
```

## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/abigail/perl/ch-1.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/arne-sommer/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/athanasius/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/cheok-yin-fung/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/colin-crain/perl/ch-1.pl),
[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/cristian-heredia/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/dave-jacoby/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/polettix/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/jaldhar-h-vyas/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/jo-37/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/laurent-rosenfeld/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/mohammad-anwar/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/perlboy1967/perl/ch-1.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/paulo-custodio/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/pete-houston/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/roger-bell-west/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/sgreen/perl/ch-1.pl),
[**Steven Wilson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/steven-wilson/perl/ch-1.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/stuart-little/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/ulrich-rieke/perl/ch-1.pl),
[**Vinod Kumar K**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/vinod-k/perl/ch-1.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/wlmb/perl/ch-1.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/wanderdoc/perl/ch-1.pl)


There were 25 working submissions for the first task this past week.

The initial task definition stands out this week, as being simultaneously both a bit vague and unusually specific. We are given a set number of lines that the file *should* have, and told that there is exactly one line missing. From there, well, it's strongly inferred that we should figure out what the missing line is and report our findings.

On the second point there wasn't much issue, most people just printed the line number, with some giving slightly more verbose answers. On the first point there wasn't too much trouble either. If one hard-coded in the parameters, 15 lines, 1 missing, then a few different ways of finding the missing data presented themselves, and we'll progress through them.

I think, though, that when hard-coding those parameters... well some people, myself included, were unsatisfied. Now in an interpreted scripting language like Perl, rapid prototyping is a feature, and quick scripts can be whipped up to solve very specific problems. I am perfectly willing to do this should circumstance demand — to *not* craft a general-purpose algorithm — to code up a very specific one-shot process towards a very specific goal. In this hypothetical case that would be identifying the data line that got dropped so we could move forward and recreate it, or relocate it, or whatnot. It's not an app, it's a problem that need to be solved. "Eye on the prize" and all that.

But then again hard-coding constants into code just doesn't feel right. Red flags *should* go up, as this often indicates something is wrong, or at minimum not well thought out. Magic numbers are bad, right? Isn't that what we've always been told?

And to come around full circle, one thing I find myself repeating, almost like a mantra, is that real life never quite perfectly fits these beautiful models we use to look at it. Life is fundamentally messy. Sometimes you just gotta do what you gotta do.

There was a little roaming outside the fence line, out on the moors at night. It's not safe out there, and I discovered a logical conundrum: if you allow an unknown number of lines, and infer the missing ones by parsing the content, what happens when the last line is the one that's missing? Doesn't it just become a complete file with 14 lines? I suppose you could pass in the expected number of lines as a separate parameter, but no one bothered to do this. Such is life.

## split the LINES, assemble the LINE NUMBERS
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/cheok-yin-fung/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/colin-crain/perl/ch-1.pl),
[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/cristian-heredia/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/jaldhar-h-vyas/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/laurent-rosenfeld/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/sgreen/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/ulrich-rieke/perl/ch-1.pl), and
[**Vinod Kumar K**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/vinod-k/perl/ch-1.pl)

The lines as given are composed of a leading figure, followed by a comma, followed by a bit of text that in turn labels the number of the line. From this simple structure we can plainly see that the initial figure is in fact the line number. If we can separate out that number, we can then save these numbers to a data structure, and use that to validate against when we go looking for the missing lines. Usually this structure was a hash, but arrays were also seen.

[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/ulrich-rieke/perl/ch-1.pl)

Ulrich gives us a demonstration of the technique. Here he reads in the file, line-by-line, parsing out the initial line number using `split`. The line number is then used as the key to a hash with a value set.

Iterating through the list of expected values, if a value isn't found in the hash it's determined "missing" and output.

```perl
    while ( my $line = <$fh> ) {
      chomp $line ;
      @contents = split( /,/ , $line ) ;
      $linenumbers{ $contents[ 0 ] }++ ;
    }
    close $fh ;
    for my $i( 1 .. 15 ) {
      unless ( exists $linenumbers{ $i } ) {
          say "line number $i is missing!" ;
      }
    }
```

[**Vinod Kumar K**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/vinod-k/perl/ch-1.pl)

Vinod gives us another version, substituting the built-in `__DATA__` filehandle for reading in an external file. I think whether the input file exists as its own document or not is a rather incidental aside to the demonstration.

```perl
    while(<DATA>){
        chomp (my $line = $_);
        my @contents = split(/, /, $line);
        $hash{$contents[0]} = 1;
    }

    foreach my $element (1..15){
        unless( exists $hash{$element}){
        	print "$element -> missing...\n";
        }
    }
```

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/colin-crain/perl/ch-1.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/colin-crain/raku/ch-1.raku)

For my own version, I've employed a few noteworthy refinements. First the "diamond operator": `<>` , takes a file name from standard input, looks for and opens that file,  and provides a file handle that will read the lines in list context, all in one go. Then a hash is built by using `split` on the line with an optional quantifier directive to only split the line once, into 2 parts, which in turn become the key and value components to an individual hash element.

I noted earlier about the ambiguity of using the largest found value to determine how many lines are to be expected. I know what I've done, but sort of wish I'd taken Simon's route. On the other hand this will find multiple missing lines.

At the end we use `grep` to only allow the missing lines to be output.

```perl
    my %lookup  = map  { split /,/, $_, 2 } <>;
    my @missing = grep { say $_; ! exists $lookup{$_} } (1..max(keys %lookup));
```

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/sgreen/perl/ch-1.pl)

Simon, in his efforts, avoids specifically searching a range of 15 lines by counting upwards from 1 through the file until a missing line is detected. In this case if the lines in the data hash are all consecutive, the next line counted after reading all the keys will fail the check and thus be output.

Simon also brings us the idea of using a regular expression to match out the initial line number, which becomes the hash key for the the lines seen.

```perl
    # Read the file, and get the line numbers
    while ( my $line = <$fh> ) {
        if ( my ($number) = ( $line =~ /^(\d+),/ ) ) {
            $lines{$number} = 1;
        }
    }

    # Count up from one to find the missing line
    my $number = 0;
    while ( ++$number ) {
        if ( not exists $lines{$number} ) {
            say $number;
            return;
        }
    }
```

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/cheok-yin-fung/perl/ch-1.pl)

**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/cheok-yin-fung/awk/ch-1.awk)

CY uses several of the techniques we've looked at and has reduced the logic flow to a single line.

```perl
    while(<>) {/^\s*(\d+)/; $arr{$1} = 1;} for (1..15) {print ($_, "\n") unless $arr{$_};}
```

[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/jaldhar-h-vyas/perl/ch-1.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/jaldhar-h-vyas/raku/ch-1.raku)

Jaldhar slurps all of the lines from the file at once before splitting them back into lines, extracting the leading digits, sorting and finally storing those numbers in a list. He then uses a novel way to determine the missing line: while keeping a concurrent incrementing counter, he iterates through this sorted list, and if the values from the list and the counter ever diverge then a line is missing from the list and the value from the counter is reported.

```perl
    my $contents = <$file>;

    my @lines =
        sort { $a <=> $b }
        map { / ^ (\d+) /x; int ${^CAPTURE}[0]; }
        split /\n/, $contents;

    my $counter = 1;
    for my $line (@lines) {
        if ($counter != $line) {
            say $counter;
            last;
        }
        $counter++;
    }
```


## a SUBTRACTIVE IDEAL
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/athanasius/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/dave-jacoby/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/polettix/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/jo-37/perl/ch-1.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/paulo-custodio/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/pete-houston/perl/ch-1.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/wlmb/perl/ch-1.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/wanderdoc/perl/ch-1.pl)

There's a basic dichotomy in making things: you can either add more stuff until it looks like what you want, or you can start with a big block of something and take away the parts that don't belong. In contrast to the label "additive", this is referred to as "subtractive" technique.

>“The sculpture is ... already there, I just have to chisel away the superfluous material.”
― Michelangelo

Taking a page from the exalted Italian master, the strategy here was to construct a list with placeholders for all the lines that are supposed to be there, and then read through the input, removing the lines actually found. In the end, the lines not found will remain behind to be reported.

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/polettix/perl/ch-1.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/polettix/raku/ch-1.raku)

Flavio first constructs a dummy hash, `%all`, with keys for all the line numbers. Then the actual lines are read in and parsed, and the matched out leading line numbers are used to delete keys in this hash. When the smoke clears, and the carnage is complete, the only thing remaining will be the unmatched missing lines.

```perl
    sub missing_row ($file) {
       open my $fh, '<', $file or die "open('$file'): $!\n";
       my %all = map {$_ => 1} 1 .. 15;
       delete $all{s{\A (\d+) .*}{$1}rmxs} while <$fh>;
       return keys %all;
    }
```

[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/wanderdoc/perl/ch-1.pl)

The doctor takes a set theory approach, creating two hashes; a complete ideal and a subset included within it, comprised of those lines actually found. We can then find those values not contained in the subset by removing them from the outer container in one fell swoop using `delete` on a hash slice. I love hash slices.

```perl
    while ( my $line = <DATA> )
    {
         chomp $line;
         my ($nr, $row) = split(/\s*,\s*/, $line);
         $text{$nr} = undef;
    }

    my ($min, $max) = (sort {$a <=> $b} keys %text)[0, -1];
    my %check;

    $check{$_} = undef for $min .. $max;
    delete @check{ keys %text };
```

[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/paulo-custodio/perl/ch-1.pl)

Paulo gives us what I consider a particularly artful implementation, using the leading numbers parsed from the input lines directly as indices in an array. A chain of list processing, using `map`, `grep` and `join`, results in the output report.

```perl
    while (<>) {
        chomp;
        my($nr, $text) = split /,\s*/, $_;
        $rows[$nr] = $text;
    }
    say join(",", (map {$_->[0]}
                   grep {!defined $_->[1]}
                   map {[$_ => $rows[$_]]} 1..15));
```

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/e-choroba/perl/ch-1.pl)

Here's another compact version from Choroba, using the diamond operator for input. Handy for this work, that shortcut.

```perl
    my %expected;
    @expected{1 .. $MAX_NUMBER} = ();
    delete $expected{ (/^([0-9]+)/)[0] } while <>;
    say for keys %expected;
```

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/jo-37/perl/ch-1.pl)

Finally Jorg condenses several of these ideas into a quite terse solution, using one hash slice for assignment to a mockup and a second slice to prune the keys using `delete`. There's even room left over to sort the remaining rows. Did I say earlier that I love hash slices? Doing bulk assignment using hash slices is even better.

```perl
    sub find_missing_rows ($fh, $rows) {
        my %rows;
        @rows{1 .. $rows} = (1 .. $rows);
        # Row numbers shall be separated with a comma from the rest of the
        # row and may have leading zeros.
        delete @rows{do {local $/; <$fh> =~ /^0*(\d+)(?=,)/mg}};

        [sort {$a <=> $b} values %rows];
    }
```



## the DIFFERENCE from PERFECTION
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/abigail/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/james-smith/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/mohammad-anwar/perl/ch-1.pl),
[**Steven Wilson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/steven-wilson/perl/ch-1.pl), and
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/stuart-little/perl/ch-1.pl)

As the line numbers start at 1, continuing upwards in sequence, and it is known that only a single line is missing, one way to derive the number of that missing line is to sum the line numbers actually found and subtract them from an ideal total of all the lines.

The sum of the list of values from 1 to 15 can be found by the formula

*n* (*n* + 1 ) / 2, *n* = 15

or

15 x 16 ÷ 2 = 120

Any value less than that will differ by the missing summand.

[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/mohammad-anwar/perl/ch-1.pl)

Mohammad takes us through each of the steps, demonstrating the technique in a methodical manner. His solution hinges on the notion that one line is known to be missing, so the total count of lines will be one more than found. I'll let his commentary walk you through the action.

```perl
    while (my $row = <$fh>) {
        chomp $row;
        my ($line_number) = split /,/,$row;
        $line_sum += $line_number;
        $row_count++;
    }

    close($fh);

    # Assuming one missing row in the file.
    $row_count++;

    # Now find the sum of line numbers.
    my $expected = ($row_count * ($row_count + 1))/2;

    print sprintf("Missing line: %d\n", $expected - $line_sum);
```

[**Steven Wilson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/steven-wilson/perl/ch-1.pl)

**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/steven-wilson/python/ch-1.py)

Steven accomplished the same goals by compiling several lists and summing them.

```perl
    my @row_numbers;
    while (my $row = <$fh>){
        push @row_numbers, (split /,/, $row )[0];
    }

    my $sum_of_row_numbers = sum(@row_numbers);
    my $sum_of_row_range = sum(1 .. (@row_numbers + 1));

    my $missing_row = $sum_of_row_range - $sum_of_row_numbers;
```

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/james-smith/perl/ch-1.pl)

James introduces the idea of using `substr`, coupled with the `index` of the first comma, to extract the leading number from each line, which he then combines with an auto-incrementing line counter that always stays one above the number of lines currently processed. These solutions all work on the idea that there is exactly one missing line, so the relationship of lines expected to lines found will always hold.

```perl
    my( $n, $s ) = ( 1, 0 );
    open my $fh, q(<), shift;
    ++$n && ( $s += substr $_, 0, index $_, q(,) ) while <$fh>;
    close $fh;
    return ( $n + 1 ) * $n / 2 - $s;
```


[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/abigail/perl/ch-1.pl)

**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/abigail/awk/ch-1.awk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/abigail/bash/ch-1.sh), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/abigail/c/ch-1.c), [Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/abigail/go/ch-1.go), [Java](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/abigail/java/ch-1.java), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/abigail/lua/ch-1.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/abigail/node/ch-1.js), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/abigail/python/ch-1.py), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/abigail/ruby/ch-1.rb)

I think it safe to say Abigail wins the award in the minimalist category today with 47 characters, most of which bring in `sum` to total the lines from the diamond operator. Because the lines start with a digit Perl will try and read them as numbers as best it can, with the leading figure up to the comma the only thing that ends up being counted. As we know the number of lines as a given, the sum can be hardwired in as easily as the number of lines, as the two values are inextricably linked.

```perl
    use List::Util qw [sum];
    say 120 - sum <>;
```


## use a MODULE
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/arne-sommer/perl/ch-1.pl), and
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/perlboy1967/perl/ch-1.pl)

We saw a couple of uncommon module functions brought in for the task. Although the task itself is not particularly complex, these functions and the techniques that use them can be seen to generalize easily to a broader audience.

[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/arne-sommer/perl/ch-1.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/arne-sommer/raku/ch-1.raku)

Arne brings us a very interesting module today, `List::Compare`. Providing far more than its simple name might suggest, this module offers a whole raft of features. We get a complete range of set theory operations, such as intersections, unions and subsets laid out, capable of acting on two or more lists, irrespective of any ordering within those lists.

Here the `get_symmetric_difference()` function is used to find elements in the the list of all line numbers that aren't present in the assembled list of found lines. If somehow a spurious "line 100" were to find itself in the input file that would be found as well, as the range of expected lines, 15, is hard-coded in. The function finds the combined difference set from both lists, regardless of the element's origin:

|A ∪ B| - |A ∩ B|


```perl
    use List::Compare;

    my @ids = map { /^(\d+)\,/ } read_file($file, chomp => 1);
    my @all = (1..15);

    my $lc = List::Compare->new('--unsorted', \@ids, \@all);

    my @difference = $lc->get_symmetric_difference();

    say join(", ", @difference);
```

[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/perlboy1967/perl/ch-1.pl)

In the latest full release, 0.430, of [`List::MoreUtils`](https://metacpan.org/pod/List::MoreUtils#slide-BLOCK-LIST), we find that a very cool new function has been added: `slide()`. This handy list processing aid selects out elements from a list for processing in adjacent groups, advertised as "a kind of magnifying glass that is moved along a list and calls BLOCK every time the next list item is reached."  It doesn't exhaust the list pairwise, we've had that functionality for a while in `List::Util`, but rather scoots across the list in a unique fashion, taking first the first and second elements, then the second and third, third and fourth, etc.

Niels extracts his line numbers using a regular expression, then sorts the list of results. Then, using `slide()`, he examines adjacent elements to see whether they differ by 1. If they do not, a range is used to glean the missing line numbers that would make up the span.

`List::MoreUtils` also includes more generalized companion, `slideatatime()`, should we want to look at larger groupings. I really like this idea. I can recall wishing I had it available in the past and think it will find itself useful in all kinds of situations.

```perl
    use List::MoreUtils qw(slide);

    return map { @$_ } slide {$b - $a > 1 ? [$a + 1 .. $b - 1] : [] }
                sort { $a <=> $b }
                map { /^(\d+)/; $_ = $1 }
                <$fh>;
```



## Additional Submissions in Guest Languages


[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/athanasius/perl/ch-1.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/athanasius/raku/ch-1.raku)


[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/laurent-rosenfeld/perl/ch-1.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/laurent-rosenfeld/raku/ch-1.raku)

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/roger-bell-west/perl/ch-1.pl)

**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/roger-bell-west/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/roger-bell-west/raku/ch-1.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/roger-bell-west/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/roger-bell-west/rust/ch-1.rs)

[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/stuart-little/perl/ch-1.pl)

**additional languages:**
[Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/stuart-little/haskell/ch-1.hs), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/stuart-little/node/ch-1.js), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/stuart-little/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/stuart-little/raku/ch-1.raku)



---------------------------------------------------------------------
---

# TASK 2 {#PWC117TASK2}

# Find Possible Paths
*Submitted by: E. Choroba*
You are given size of a triangle.

Write a script to find all possible paths from top to the bottom right corner.

In each step, we can either move horizontally to the right (H), or move downwards to the left (L) or right (R).

BONUS: Try if it can handle triangle of size 10 or 20.

**Example 1**:
```
    Input: $N = 2

               S
              / \
             / _ \
            /\   /\
           /__\ /__\ E

    Output: RR, LHR, LHLH, LLHH, RLH, LRH
```
**Example 2:**

Input: $N = 1
```
               S
              / \
             / _ \ E

    Output: R, LH
```

## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/abigail/perl/ch-2.pl),
[**Adam Herzog**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/adherzog/perl/ch-2.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/adam-russell/perl/ch-2.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/arne-sommer/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/athanasius/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/cheok-yin-fung/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/colin-crain/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/dave-jacoby/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/polettix/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/jaldhar-h-vyas/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/james-smith/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/jo-37/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/laurent-rosenfeld/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/perlboy1967/perl/ch-2.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/paulo-custodio/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/pete-houston/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/roger-bell-west/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/sgreen/perl/ch-2.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/stuart-little/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/ulrich-rieke/perl/ch-2.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/wlmb/perl/ch-2.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/wanderdoc/perl/ch-2.pl)


There were 23 submissions for the second task this past week. Most of the solutions worked through the triangle either recursively or iteratively, determining all the pathways to every node found along the way. This was commonly done from top to bottom, or bottom to top, level by level, but sometimes also accomplished from left to right after skewing the triangle into a more usual familiar grid.

In any case we end up with a list of all the various ways through the directed triangle.

There was another class of solutions, though, the huddled around the equivalency between a single "R" operation, from the apex to the lower right vertex, and a paired "LH" set of movements, from the apex to the lower left and then horizontally to the lower right vertex. Starting either from the direct right-hand line of "R" actions from tip to right corner, or the longest path down the left side and across, composed of nbothing but "L and "H" moves, various permutation and substitution schemes were derived to produce the results through string manipulation. This equivalence between an R move and a coupled, although not neccessarily sequential, L and H popped up in a variety of situations.

### 17 *trillion* solutions?

Many people noted that after calculating the million-odd paths for *n* = 10, their solutions were still grinding away at the *n* = 20 problem. No one actually produced the results for a triangle of that scale, at least with enumerated paths. Why is this? Without delving into the deep underlying math, let's do an experimental analysis:  as per the examples listed, for *n* = 1 and 2, the number of solutions are 2 and 6, respectively.

Once we've hammered out a solver, and worked out the kinks, we can use it to extend our list of solution counts forward:

```
    depth | solutions
    ------+----------
        1   2
        2   6
        3   22
        4   90
        5   394
        6   1806
        7   8558
        8   41586
```
We can see this is getting big quickly, growing exponentially at just about 4<sup>*x*</sup>. But lets go to the references.

Taking the list **(2, 6, 22, 90, 394, 1806, 8558, 41586)** and searching the [Online Encyclopedia of Integer Sequences](https://oeis.org/A006318) comes up with an immediate hit: **A006318**, known as the **Large Schröder numbers**. These have a number of observations attached to them, but the one we are most concerned with right now is that for **S**(20) the value is 17,518,619,320,890. That of course is with a "t" as in "trillion". Meaning it's not surprising no one listed these out.

It *was* possible to apply mathematical techniques to explore the *count* of paths in some of the largest triangles, which we did see applied. We'll also pause to have a look at some of these solutions.

## recursively WALK the WALKS
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/abigail/perl/ch-2.pl),
[**Adam Herzog**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/adherzog/perl/ch-2.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/arne-sommer/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/dave-jacoby/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/jaldhar-h-vyas/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/james-smith/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/laurent-rosenfeld/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/perlboy1967/perl/ch-2.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/paulo-custodio/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/pete-houston/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/sgreen/perl/ch-2.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/wlmb/perl/ch-2.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/wanderdoc/perl/ch-2.pl)

A recursive implementation to walk every path from every vertex is relatively straightforward. On landing on a node up to three avenues were available to explore, although in some cases this would carry one outside the boundaries of the triangle. These cases were either filtered by a conditional before descending or by a base case evaluation once inside. On each movement the aggregate path is added to a growing partial string; on landing on the target the string delineating the path to arrive there is saved or output.

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/james-smith/perl/ch-2.pl)

James gives us several algorithms today, but it's his recursive path-walker that we're going to look at now. The actual code is compact, but I have left in his lengthy commentary to help you familiarize yourselves with the pattern. James does employ a unique trick to avoid some computation at the end: any path on arriving at the last row can be known to be able to arrive at the right corner by appending a number of H routes equal to the distance to travel, so we don't need to find these paths recursively but rather can simply compute and add them to the pile.

```perl
    sub triangle {
    ## As asked display results - note as $n gets large storing in an
    ## array and returning values is too memory intensive - so we will
    ## just write to STDOUT...
    ##
    ## $size   - is the height of the shape remaining;
    ## $route  - is the letters we've already walked through
    ## $offset - is how far from the right-side of the triangle you are
    ##
    ## We have three options:
    ##   "L" - increase offset and move down a line
    ##   "R" - keep offset the same and move down a line
    ##   "H" - decrease offset and stay on the same row
    ##         (only available if $offset > 0)
    ##
    ## We separate out the special case when we have "height" 0
    ## We are then on the bottom row - so we can return the current
    ## string AND add "H"s to move us to the right hand corner..

      my($size,$offset,$route) = @_;
      (say $route.( 'H' x $offset )) && return unless $size;
      triangle( $size - 1, $offset + 1, $route.'L' );
      triangle( $size - 1, $offset,     $route.'R' );
      triangle( $size,     $offset - 1, $route.'H' ) if $offset;
    }
```

[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/arne-sommer/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/arne-sommer/raku/ch-2.raku)

As you can see there were various ways to label the nodes of the triangles: Jame, above, descends the triangle to its base at 0, whereas Arne works with the apex set to (0,0). The actual system used is not important, but for example here Arne counts up, where James counts down. He also applies conditionals before recursing to avoid leaving the triangle; at each level of this triangle the number of rows is equal to the number of columns and both are ultimately bounded by the number of levels.

```perl
    sub traverse ($row, $col, $path, $size)
    {
      if ($row == $col && $row == $size)
      {
        push(@result, $path);
        return;
      }

      traverse($row,    $col +1, $path . "H", $size) if $col < $row;
      traverse($row +1, $col +1, $path . "R", $size) if $col < $size;
      traverse($row +1, $col,    $path . "L", $size) if $row < $size;
    }
```

[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/pete-houston/perl/ch-2.pl)

Pete is walking backwards through his coordinate space so he can check his conditionals as he walks the parameters down to 0, which has an easy clarity to the boundary.

```perl
    sub walk {
        my ($l, $x) = @_;
        return @{$subs{$l}{$x}} if exists $subs{$l}{$x};

        my @paths;
        if ($l) {
        	# Not at the bottom yet so can go left or right
        	push @paths, map { 'L' . $_ } walk ($l - 1, $x + 1);
        	push @paths, map { 'R' . $_ } walk ($l - 1, $x);
        }
        if ($x) {
        	# Not at right edge yet, so can go horizontally right
        	push @paths, map { 'H' . $_ } walk ($l, $x - 1);
        }

        # If at the bottom right already, no paths from here
        @paths = ('') unless $l || $x;

        $subs{$l}{$x} = \@paths;
        return @paths;
    }
```

[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/paulo-custodio/perl/ch-2.pl)

Finally we have another incrementing solution from Paulo. All of these solutions share a certain self-similarity in their elegance.

```perl
    sub find_paths {
        my($paths, $size, $path, $row, $col) = @_;
        if ($row == $size && $col == $size) {   # reached end
            push @$paths, $path;
        }
        else {
            if ($row < $size) {
                find_paths($paths, $size, $path.'L', $row+1, $col);
                find_paths($paths, $size, $path.'R', $row+1, $col+1);
            }
            if ($col < $row) {
                find_paths($paths, $size, $path.'H', $row, $col+1);
            }
        }
    }
```


## something a LITTLE MORE DYNAMIC
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/adam-russell/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/athanasius/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/cheok-yin-fung/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/colin-crain/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/e-choroba/perl/ch-2.pl), and
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/roger-bell-west/perl/ch-2.pl)

Progressing through the triangle, it's possible to evaluate a vertex, say the apex, and determine every possible way to arrive at that position. In that first case of the apex, we have one way, to be there already, as that is the start point. But moving down and to the right, as in the second example, we have two paths, R and LH. To complete the level, to move down and to the left, we only have one route available, L.

By keeping track of every pathway to the last node assessed, we can systematically use those partial pathways as bases to be extended to derive the paths to the next positions, as each position can only be reached from one of a maximum of three positions: above and to the right, above and to the left, and horizontally from the left. As long as these points are already calculated for a given vertex, the paths to that vertex can be computed.

This progression, of using the data from partial solutions to inform further systematic progress across a matrix, was identified by some members by the name dynamic programming, myself included. As that paradigm is itself more of a collection of patterns than a strict protocol it can be hard to definitively label sometimes, but I think the term fits more than it doesn't, and to my own depth-first version particularly.

The actual progressions we saw either proceeded from top to bottom, in a breadth-first traversal, or left to right, using a depth-first strategy.

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/cheok-yin-fung/perl/ch-2.pl)

In her `ways()` routine, CY starts each level of her triangle with a series of L directives that deliver one to the left-most position. She then works systematically across the level rightward, calculating the paths leading to the vertices by appending new directions onto the partial paths for those positions that can precede it.

```perl
    sub ways {
        my $K = $_[0];
        my $newstp = [ [''] ];

        while (scalar @{$newstp} <= $K) {
            my $stp = $newstp;
            my $ord = scalar @{$stp};
            $newstp = [ [ 'L' x $ord ] ];
            for my $i (1.. $ord - 1) {
                push @{$newstp->[$i]}, $stp->[$i-1]->[$_] . 'R'
                    for (0.. $stp->[$i-1]->$#*);
                push @{$newstp->[$i]}, $stp->[$i]->[$_] . 'L'
                    for (0.. $stp->[$i]->$#*);
                push @{$newstp->[$i]}, $newstp->[$i-1]->[$_] . 'H'
                    for (0.. $newstp->[$i-1]->$#*);
            }

            push @{$newstp->[$ord]}, $stp->[$ord-1]->[$_] . 'R'
                for (0.. $stp->[$ord-1]->$#*);
            push @{$newstp->[$ord]}, $newstp->[$ord-1]->[$_] . 'H'
                for (0.. $newstp->[$ord-1]->$#*);
        }

        return $newstp->[-1];
    }
```

[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/colin-crain/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/colin-crain/raku/ch-2.raku)

For my own solution, I ran into the obvious truth that in progressing top to bottom down the levels of the triangle, at each level the number of subcomputations necessarily grows, as the widening base incorporates more vertices. Thus as we progress our number of nodes to calculate grows alongside the lists of individual pathways that lead to those nodes.

However we don't need to do this. As we saw in CY's solution the vertices down the left-hand side are all easily computable, as they can only be reached from the vertex immediately above.  If we compute this column of the matrix first, comprised of vertices each only containing a single growing cluster of Ls, we can then progress across the matrix moving from top to bottom down the next column to the right. At each vertex we will still already have precomputed the set of vertices to the immediate left, to the left and up a level, and immediately above, should that node exist. The beauty of this movement is that as we move rightward toward the lower right corner each new column contains one *fewer* element, until at the last iteration we are only computing the pathways to the final vertex.

There are still the same massive number of pathways to compute for large numbers of levels, but we see a significant efficiency gain through better memory management.

```perl
    my $mat = [ map { ['L' x $_] } (0..$tri_size) ];

    for my $pos (1..$tri_size) {            ## horz position in the tri
        my @next;
        for my $level ($pos..$tri_size) {   ## tri level
                push $next[$level]->@*, (map { $_ . 'L' } $next[$level-1]->@*)
                    if defined $next[$level-1];
                push $next[$level]->@*, (map { $_ . 'R' } $mat->[$level-1]->@* );
                push $next[$level]->@*, (map { $_ . 'H' } $mat->[$level]->@*)
        }
        $mat = \@next;
    }
```

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/athanasius/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/athanasius/raku/ch-2.raku)

For their solution, the monk works from the lower right corner both upwards and leftwards, but also flips the triangle — the result ends up stored in what is commonly understood to be the apex, rather than the expected lower right corner. The whole process ends up reflected through the midpoint of the rightward edge, and in the direction of progress doesn't matter in the end. The apex essentially becomes the lower right corner.

One thing about walking backwards, though, is that we need to *prepend* the new connections.

```perl
    sub find_paths
    {
        my ($N) = @_;
        my  @nodes;

        for my $row (0 .. $N)
        {
            $nodes[$row][$_] = [] for 0 .. $row;
        }

        push $nodes[$N][$N]->@*, '';

        for my $r (reverse 0 .. $N)
        {
            for my $c (reverse 0 .. $r)
            {
                if ($r < $N)
                {
                    # (R) Move downwards to the right
                    push $nodes[$r][$c]->@*, "R$_" for $nodes[$r + 1][$c + 1]->@*;

                    # (L) Move downwards to the left
                    push $nodes[$r][$c]->@*, "L$_" for $nodes[$r + 1][$c    ]->@*;
                }

                if ($c < $r)
                {
                    # (H) Move horizontally to the right
                    push $nodes[$r][$c]->@*, "H$_" for $nodes[$r    ][$c + 1]->@*;
                }
            }
        }

        return $nodes[0][0];
    }
```


[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/e-choroba/perl/ch-2.pl)

**additional languages:**
[Perl5](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/e-choroba/perl5/ch-2.pl)

Choroba gives us several solutions that speak around the problem, both to provide enumerated pathways and numerical quantities of path counts in various ways. To list the actual paths he provides breath-first and depth-first solutions that focus on the paths walked and where they end up, rather than the looking at the nodes and which paths lead to them. The mechanics are similar, but end up slightly changed. Those paths that find themselves at the lower right corner are recorded.

```perl
    my %MOVE = (H => [1, 0],
                L => [0, 1],
                R => [1, 1]);

    sub bfs_show {
        my ($size) = @_;
        my @paths =  (["", 0, 0]);
        while (my @moves = grep $_->[1] != $size || $_->[2] != $size, @paths) {
            my @next;
            for my $move (@moves) {
                for my $dir (keys %MOVE) {
                    my $x = $move->[1] + $MOVE{$dir}[0];
                    my $y = $move->[2] + $MOVE{$dir}[1];

                    my $next_path = $move->[0] . $dir;
                    if ($x == $size && $y == $size) {
                        say $next_path;
                    } else {
                        push @next, [$next_path, $x, $y]
                            if $x <= $size && $y <= $size && $x <= $y;
                    }
                }
            }
            @paths = @next;
        }
    }
```


## a SYSTEM OF SHORTCUTS
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/dave-jacoby/perl/ch-1.pl), and
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/polettix/perl/ch-2.pl)

Several people noticed a string relationship between various pathways, in the interchangeability between "LH" and "R" elements. Any path that can be directly walked from top to lower right can also be walked via the lower left vertex as midpoint, and the reverse also holds true.

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/polettix/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/polettix/raku/ch-2.raku)

After first providing a nice dynamic programming solution walking downward through the levels, Flavio diverges into an analysis of the strings themselves, and the fact that any LH movement pair in a working pathway can be replaced by a single R to produce an equivalent alternative. The problem then can be broken into two halves: to first create every possible solution using only L and H, and then make a pass over these results replacing in each every combination of LH with R.

Both problems have hairy edges. Remember no matter how we solve it the actual solution has exponential growth, and there's no getting around that. The solution for a given height is the solution.

For example of the hairiness, consider that any combination of Ls and Hs to get one from the apex to the lower right of a triangle of size N must contain *N* Ls and *N* Hs, to get one down the left size and then scoot over to the right. But not every permutation will work: any path starting with LHH will immediately take one off the right side of the triangle, and we aren't allowed to stray there even if we later wander back. The rule seems to be that proceeding from left to right along the path the count of Hs must never exceed the count of Ls, which makes sense.

To deal with these problems Flavio creates an assortment of iterators to produce valid arrangements of moves. His [extensive writeup of the development process](https://github.polettix.it/ETOOBUSY/2021/06/17/pwc117-find-possible-paths/) details a blow-by-blow account, and defies easy summarization.

Here is one of two versions presented for an iterator that generates valid L and H string paths:

```perl
    sub basic_case_iterator ($N) {
       --$N;
       my $N2 = 2 * $N;
       my $cs;
       return sub {
          $cs //= combinations_iterator($N, 0 .. $N2 - 1);
          CANDIDATE:
          while (my $Ls = $cs->()) {
             my @sequence = ('H') x $N2;
             @sequence[$Ls->@*] = ('L') x $N;
             my $count = 1;  # we will force starting with an L
             for my $item (@sequence) {
                $count += $item eq 'L' ? 1 : -1;
                next CANDIDATE if $count < 0;
             }
             return join '', 'L', @sequence, 'H';
          }
          return;
       };
    }
```

Further iterators take these paths and perform R substitutions on them, and, as we observe in the routine shown, yet another produces the combinations at the root of the LH patterns. Lots of iterators out there. Some say it's iterators all the way down. I just don't know.

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/dave-jacoby/perl/ch-1.pl)

Dave explores a similar strategy in his extended challenge writeup: [Perl Challenge 117 Redux: Permutations!](https://jacoby.github.io/2021/06/15/perl-challenge-117-redux-permutations.html)

In this case he starts with a right-hand direct chain of Rs and starts substituting in LH combinations.

```perl
    sub solve_triangle ( $n ) {
        my @output;
        my $string = 'R' x $n;
        push @output, $string;
        my %hash;
        my $c = 1;
        while ( $string =~ /R/ ) {
            $string =~ s/R/LH/;
            my @list = split //, $string;
            my $p    = Algorithm::Permute->new( \@list );
            while ( my @res = $p->next ) {
                my $x = join '', @res;
                next if $x =~ m{^H|L$};
                # push @output, $x;
                next if $hash{$x}++;
                say join "\t", $c, $x ;
                $c++;
            }
        }
        return sort { length $b <=> length $a } uniq @output;
    }
```



## the SCHRÖDER NUMBERS
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/athanasius/perl/ch-2.pl), and
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/james-smith/perl/ch-2.pl)

Computing the actual pathways for large triangle heights was a daunting task, and everybody ran out of memory somewhere along the line to 17 trillion. But there were ways to approach the calculation of *how many* pathways there were, without actually enumerating them.

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/james-smith/perl/ch-2.pl)

James shares with us several ways to count Schröder numbers. In his writeup he explores methods using a modification of the recursive traversal, the iterative dynamic progression and a technique using a recurrence relation.

The first two involve modifying algorithms similar to what we've seen before, only not actually storing the paths, but only counting them. As such the actual code is greatly simplified; we can directly sum the counts from all connected locations in one action if we don't care which path directive R, L or H needs to be appended:

```
        T0,m = 1
    n = Tn,0 = Tn-1,0 + Tn-1,1
        Tn,m = Tn-1,m + Tn-1,m+1 + Tn,m-1
```

The resulting code for a dynamic walk through the nodes:

```perl
    sub schröder_non_recursive {
      my $size = shift;
      my @x = map {1} 0..$size;
      foreach my $s (1..$size) {
        my @y = $x[1] + $x[0];
        push @y, $x[$_+1] + $x[$_] + $y[-1] foreach 1 .. $size-$s;
        @x=@y;
      }
      return $x[0];
    }
```

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/athanasius/perl/ch-2.pl)

The Schröder Numbers can also be computed directly without a triangle, using a recurrence relation:

```
        S[0] = 1
        S[1] = 2

    n >= 2:

        S[n] = 3 × S[n - 1] + ∑ ( k = 1 .. (n - 2) ) { S[k] × S[n - k - 1] }
```

The monk provides the following implementation:

```perl
    sub S
    {
        my ($N) = @_;

        return 1 if $N == 0;
        return 2 if $N == 1;

        my $S = 3 * S( $N - 1 );

        for my $k (1 .. $N - 2)
        {
            $S += S( $k ) * S( $N - $k - 1 );
        }

        return $S;
    }
```



## the UNCLASSIFIABLE leading the UNCLASSIFIABLE
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/jo-37/perl/ch-2.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/stuart-little/perl/ch-2.pl), and
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/ulrich-rieke/perl/ch-2.pl)

Sometimes the square peg doesn't fit.

[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/ulrich-rieke/perl/ch-2.pl)

Ulrich has brought us a curious hybrid approach, walking the triangle level by level, constructing a list all paths to get to any point on that level. This list is necessarily quite large, but on reaching the last level a numerical counting validation scheme filters out those pathways that either walk off the triangle or don't end up at the right boundary vertex.

Here is his validation routine, which, using `grep`, filters the final list of strings created.

```perl
    ##  we check the validity of a letter combination. We start out with an array
    ##  of (0 , 0 ). An R increases the first value by 1 and the second value by 1,
    ##  a L just the second value and a H just the first value. In $N is the input
    ##  given we must arrive at ($N - 1 , $N - 1 ). At no time must the first
    ##  element of the array be greater than the second element. If that occurs
    ##  we would have "walked off" the right limit of the triangle.
    ##  that means that the routine that checks the validity must receive a
    ##  string and the corresponding level

    sub checkValidity {
      my $lettercombi = shift ;
      my $level = shift ;
      my @startarray = (0 , 0 ) ;
      my $len = length $lettercombi ;
      for my $pos( 0 .. $len - 1 ) {
          my $letter = substr( $lettercombi, $pos , 1 ) ;
          if ( $letter eq "H" ) {
        $startarray[0] += 1 ;
          }
          elsif ( $letter eq "R" ) {
        $startarray[0] += 1 ;
        $startarray[1] += 1 ;
          }
          elsif ( $letter eq "L" ) {
        $startarray[1] += 1 ;
          }
          if ( $startarray[0] > $startarray[1] ) {
        return 0 ;
          }
      }
      if ( $startarray[ 0 ] == $level and $startarray[ 1 ] == $level ) {
          return 1 ;
      }
      else {
          return 0 ;
      }
    }
```

[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/stuart-little/perl/ch-2.pl)

**additional languages:**
[Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/stuart-little/haskell/ch-2.hs), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/stuart-little/node/ch-2.js), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/stuart-little/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/stuart-little/raku/ch-2.raku)

There's a lot to unpack in Stuart's dense piece of recursive combinatorics. He imports `Math::Cartesian::Product` to give him a handy `cartesian()` function, which does pretty much what you'd expect it to. The block, `{1}` is a filter you get free with the function; like `grep` this should return true for combinations to be passed along.

It's not the easiest thing to follow but we're starting at the last level of the triangle and computing what would happen should we add directional components to the level one smaller. We do this by adding R movements, the easy part, and then using the cartesian product of levels smaller than the current to produce the interior combinations of moving one step L and then at some point one step H to complete the move. Because we always either add one R or a LH combination in some form we always stay in the rightmost position. It's quite remarkable.

```perl
    my @memo=([''],['R','LH']);

    sub mkPaths($size) {
        ($size > $#memo) && do {
        my @res = map {'R' . $_} @{mkPaths($size-1)};
        for my $nr (0..$size-1) {
            my @gluedPairs = map {'L' . $_->[0] . 'H' . $_->[1]} cartesian {1}     mkPaths($nr), mkPaths($size -1 - $nr);
            push @res, @gluedPairs;
        }
        push @memo, \@res;
        };
        return $memo[$size];
    }

```

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/jo-37/perl/ch-2.pl)

Finally, Jorg, unsatisfied with merely computing the pathways in our given triangular structures has decided to use the `Graph` framework to create a generalized solver for arbitrarily defined Directed Acyclic Graphs, or DAGs, given a start and end point.

Each edge is defined as a start vertex and an end vertex, along the direction of travel, and a label to attach to that edge, such as L, R or H. An example triangle might be:

```
    a-b-L a-c-R b-c-H b-d-L b-e-R c-e-L c-f-R d-e-H e-f-H
```

and told to run from 'a' to 'f'.

This is perhaps a bit of a lot to ask from a task that said to enter a height of a triangle, so he kindly offers up a little routine that when invoked will generate such a spec for a triangle of a given height.

Once the graph is described, the edges are fed to `Graph` and, once validated as a DAG through a built-in routine, a graph object is returned.

As the graph is at this point known to be a DAG, the vertices can be sorted topologically from start to finish. We then can build a hash of paths to each vertex, with a the vertex as a key and the paths as an attached array of paths.

After sorting, we walk through this ordering and, for every vertex, we can take the list of paths to it and by using the `$g->successors($vertex)` function, append the appropriate label to each outgoing path to each linked vertex. When we arrive at the end vertex we have compiled a list of all the paths to it.

```perl
    # Find all paths in the given DAG starting in vertex $from and ending in
    # vertex $to and collect the concatenated edges' labels.
    sub paths_from_to ($g, $from, $to) {
        # Apply a single empty prefix to the start vertex.
        my %paths = ($from => ['']);
        # Process vertices in topological order.
        for my $vertex ($g->topological_sort) {
            # At the end vertex all paths from the start vertex are known
            # due to the topological ordering.
            return $paths{$vertex} if $vertex eq $to;
            # For every outgoing edge append the edge's label to the label
            # sequence for all paths leading to the current vertex and then
            # append this list to the path list for the edge's tail vertex.
            # This is a no-op until the start vertex is hit.
            for my $succ ($g->successors($vertex)) {
                my $label = $g->get_edge_attribute($vertex, $succ, 'label');
                push $paths{$succ}->@*, map $_ . $label, $paths{$vertex}->@*;
            }
        }
    }
```

The graphs don't need to be triangular, only properly directed and acyclic. For example we have this unusual test example:

```
        a
       ⇙ ⇘
      b   c   d
     ⇙ ⇘ ⇙ ⇘ ⇙ ⇘
    e ⇐ f   g ⇐ h
     ⇘ ⇙ ⇘ ⇙ ⇘ ⇙
      i   j   k
       ⇘ ⇙
        l

```

```perl
    my $g = graph_from_edges([qw(
         a-b-L a-c-R
         b-e-L b-f-R c-f-L c-g-R d-g-L d-h-R
         e-i-R f-e-H f-i-L f-j-R g-j-L g-k-R h-g-H h-k-L
         i-l-R j-l-L)]);

```

Neat.

## Additional Submissions in Guest Languages
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/abigail/perl/ch-2.pl)

**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/abigail/awk/ch-2.awk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/abigail/bash/ch-2.sh), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/abigail/c/ch-2.c), [Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/abigail/go/ch-2.go), [Java](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/abigail/java/ch-2.java), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/abigail/lua/ch-2.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/abigail/node/ch-2.js), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/abigail/python/ch-2.py), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/abigail/ruby/ch-2.rb)

[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/jaldhar-h-vyas/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/jaldhar-h-vyas/raku/ch-2.raku)

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/laurent-rosenfeld/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/laurent-rosenfeld/raku/ch-2.raku)

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/roger-bell-west/perl/ch-2.pl)

**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/roger-bell-west/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/roger-bell-west/raku/ch-2.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/roger-bell-west/ruby/ch-2.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/roger-bell-west/rust/ch-2.rs)




------------------------------------------







---

# BLOGS {#PWC117BLOGS}

---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, I somehow continue to maintain my bearings. Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC093BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *READ* these *BLOG* *LINKS*:

**( *don't think, trust your training, you're in the zone, just do it ...* )**


**Abigail**

 * [Perl Weekly Challenge 117: Missing Row](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-117-1.html) ( *Perl* )
 * [Perl Weekly Challenge: Find Possible Paths](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-117-2.html) ( *Perl* )

**Adam Russell**

 * [A List with One Missing Line and Too Many Lines to List: The Weekly Challenge 117 - Perl - RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2021/06/20) ( *Perl* )
 * [A List with One Missing Line and Too Many Lines to List: The Weekly Challenge 117- Prolog - RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/prolog/2021/06/20) ( *Perl* )

**Arne Sommer**

 * [The Rowdy Path with Raku and Perl](https://raku-musings.com/rowdy-path.html) ( *Perl & Raku* )

**Colin Crain**

 * [Who Went Missing on the Triangular Tour? — Programming Excursions in Perl and Raku](https://colincrain.com/2021/06/19/who-went-missing-on-the-triangular-tour/) ( *Perl & Raku* )

**Dave Jacoby**

 * [Trees and Rows: Perl Weekly Challenge 117 | Committed to Memory](https://jacoby.github.io/2021/06/14/trees-and-rows-perl-weekly-challenge-117.html) ( *Perl* )
 * [Perl Challenge 117 Redux: Permutations! | Committed to Memory](https://jacoby.github.io/2021/06/15/perl-challenge-117-redux-permutations.html) ( *Perl* )

**Flavio Poletti**

 * [PWC117 - Missing Row - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/06/16/pwc117-missing-row/) ( *Perl & Raku* )
 * [PWC117 - Find Possible Paths - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/06/17/pwc117-find-possible-paths/) ( *Perl & Raku* )

**Jaldhar H. Vyas**

 * [Perl Weekly Challenge: Week 117](https://www.braincells.com/perl/2021/06/perl_weekly_challenge_week_117.html) ( *Perl & Raku* )

**James Smith**

 * [Perl Weekly Challenge #117](https://github.com/drbaggy/perlweeklychallenge-club/blob/master/challenge-117/james-smith/) ( *Perl* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 117: Missing Row and Possible Paths](http://blogs.perl.org/users/laurent_r/2021/06/perl-weekly-challenge-117-missing-row-and-possible-paths.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 117: quick and dirty – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2021/06/15/PerlWeeklyChallenge117.html#task1) ( *Raku* )
 * [Perl Weekly Challenge 117: quick and dirty – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2021/06/15/PerlWeeklyChallenge117.html#task2) ( *Raku* )

**Roger Bell_West**

 * [RogerBW's Blog: Perl Weekly Challenge 117: Missing Possibilities](https://blog.firedrake.org/archive/2021/06/Perl_Weekly_Challenge_117__Missing_Possibilities.html) ( *Perl & Raku* )

**Simon Green**

 * [Weekly Challenge 117](https://dev.to/simongreennet/weekly-challenge-117-36cn) ( *Perl* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 117 – W. Luis Mochán](https://wlmb.github.io/2021/06/15/PWC117/) ( *Perl* )
