
---
author:       Colin Crain
date:         2020-12-30T00:00:00
description:  "Colin Crain › Perl Weekly Review #091"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #091"
image:        images/blog/p5-review-challenge-091.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-090/).* )

Welcome to the Perl review for **Week 091** of the Weekly Challenge! Here we will take the time to discuss the  submissions offered by the team, factor out the common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

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

**<big>For context</big>**  before we begin, you may wish to revisit either of the pages for the [**original tasks**](/blog/perl-weekly-challenge-091/) or the summary [**recap**](/blog/recap-challenge-091/) of the challenge. But don't worry, the challenges themselves will be briefly summarized, presented below as we progress from task by task. Oh, and one more thing before we get started:

### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

**So finally, without further ado...**

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC091TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC091TASK2)   &nbsp;  &nbsp;  &nbsp;       •   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC091BLOGS)    &nbsp;  &nbsp;  &nbsp;       •

---

# TASK 1 {#PWC091TASK1}

# Count Number
*Submitted by: Mohammad S Anwar*
You are given a positive number $N.

Write a script to count number and display as you read it.

Example 1:
```
    Input: $N = 1122234
    Output:   21321314
    (as we read "two 1 three 2 one 3 one 4")
```
Example 2:
```
    Input: $N = 2333445
    Output: 12332415

    (as we read "one 2 three 3 two 4 one 5")
```
 Example 3:
```
    Input: $N = 12345
    Output: 1112131415

    (as we read "one 1 one 2 one 3 one 4 one 5")
```

## about the solutions

There were 28 submissions for the first task this past week. As is often the case, there was a certain confusion over the precise definition of the task, so there was some variation reflected in what question was actually answered. With linguistic differences among a global community this can hardly be penalized, so we'll have a look through the whole range.

There was also an oddity, unmentioned in the text, that emerged from the structure of the challenge itself, that several people noted. Because the quantity-digit combinations are run together in pairs to produce the output, any quantity beyond 9 produces an ambiguous result, as without an explicit delimiter the specific pairings can no longer be determined. This issue was sometimes addressed, in inventive ways.


## FREQUENCIES ONLY
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/dave-jacoby/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/duncan-c-white/perl/ch-1.pl), and
[**Joel Crosswhite**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/jcrosswh/perl/ch-1.pl)

There was a minority that took the directive to display a concatenation of the digits observed prepended by their frequencies, such a "51" for "five ones", without regard for placement. It is noteworthy that in all of the examples given the digits are ordered, and in none are any digits repeated out of sequence. Thus presenting the frequency results in numerical order will produce the given correct answer. There was enough traction with this reading I feel it warrants examination.

[**Joel Crosswhite**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/jcrosswh/perl/ch-1.pl)

Joel first sanitizes his input to ensure there are only digits greater than zero, then uses a global pattern match to find the number of occurences of each successive digit.
The count and digit are then added to the output string, giving a summary of the frequencies.

```perl
    foreach my $digit (0..9) {
        my @numbers = ($input =~ /$digit/g);
        print scalar(@numbers) . $digit if scalar(@numbers) > 0;
    }
```

[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/cristian-heredia/perl/ch-1.pl)

Christina takes this reading as well, first breaking the string apart using `split` and then bagging the component digits into a hash. We will see this technique used quite a bit in the other examples.

```perl
    my @array = split(//, $N);
    $data{$_}++ for @array;
    print "Output: ";
    foreach my $key ( sort { $a <=> $b } keys %data ) {
        print "$data{$key}$key";
    }
    print "\n";
```



## SPLIT, WALK, and COUNT
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/arne-sommer/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/athanasius/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/cheok-yin-fung/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/colin-crain/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/jaldhar-h-vyas/perl/ch-1.pl),
[**Nuno Vieira**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/nunovieira220/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/pete-houston/perl/ch-1.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/wlmb/perl/ch-1.pl)

The common reading of the text was to determine the frequencies of digits in the target number in the order of occurence: a group of three 1s, followed by a single 2, then four more 1s would produce the string 311241. A popular approach to this was much like Christina's, above, only keeping a running count of whether the current digit is repeated, only writing to the output when the value changes.

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/laurent-rosenfeld/perl/ch-1.pl)
demonstrates:

```perl
    my @digits = split //, $n;
    my $start = shift @digits;
    my $count = 1;
    for my $digit (@digits) {
        if ($digit eq $start) {
            $count++;
        } else {
            $result .= $count . $start;
            $count = 1;
            $start = $digit;
        }
    }
    $result .= $count . $start;
```

Here he splits the string into a sequence of digits, taking the first one. Then he walks the array one place at a time, checking to see whether the digit examined is the same as the digit previous. If it is the counter is incremented, if it is not the count and previous digit pair is written, the new digit is substituted for comparison, and the counter reset to 1.


[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/arne-sommer/perl/ch-1.pl)

here's another example of the technique from Arne:


```perl
    my @input   = split("", $N);
    my $current = shift(@input);
    my $count   = 1;

    while (@input)
    {
      if ($input[0] eq $current)
      {
          shift(@input);
          $count++;
      }
      else
      {
        print $count . $current;
        $current = shift(@input);
        $count   = 1;
      }
    }
```

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/wlmb/perl/ch-1.pl)

Luis adds a unique feature to his solution, only allowing a maximum count to 9 before writing to output. Practically this allows sequences longer than 9 digits because the counter is merely reset. So the number 66666666666666 (fourteen sixes) becomes 9656 for output. A nice solution, albeit one requiring counting by nines.

```perl
    for my $N(map {int $_} @ARGV){
        print "Input:\t$N\nOutput:\t";
        my $current_digit=""; # Initialize to something printable
        my $current_count="";
        foreach(split(//, $N), "I'm not a digit"){ # digits and a unique stop marker
        if($current_digit ne $_  || $current_count eq 9){ # string comparisons
            print "$current_count$current_digit";
            $current_count=0;
            $current_digit=$_;
        }
        ++$current_count;
        }
        say "\n";
    }
```


### use SUBSTRINGS instead
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/polettix/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/lubos-kolouch/perl/ch-1.pl), and
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/ulrich-rieke/perl/ch-1.pl)

It was possible to achieve the same traversal of the number as a string without using an intermediate array, by using `substr` instead.

[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/lubos-kolouch/perl/ch-1.pl)
shows us how:

```perl
    my $pos = 1;
    my $count = 1;
    my $last_char = substr($what, 0, 1);

    while ($pos <= length($what)) {
        if (($pos == length($what)) or (substr($what, $pos, 1) != $last_char)) {
            $solution .= $count.$last_char;
            $count = 1;
            $last_char = substr($what, $pos, 1);
        } else {
            $count++;
        }
        $pos += 1;
    }
```

We can see again the technique of walking the digits one-by-one and either incrementing the counter or writing the section to output and resetting.

[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/ulrich-rieke/perl/ch-1.pl)
give us another example:

```perl
    my $count = 1 ;
    my $pos = 0 ;
    my $num = substr( $N, $pos , 1 ) ;
    my $lastValue = $num ;
    $pos = 1 ;
    while ( $pos < length $N ) {
        $num = substr( $N , $pos , 1 ) ;
        if ( $num eq $lastValue ) {
            $count++ ;
        }
        else {
            $output .= ( $count . $lastValue ) ;
            $lastValue = $num ;
            $count = 1 ;
        }
        $pos++ ;
    }
```

## use a REGEX
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/abigail/perl/ch-1.pl),
[**Alexander Karelas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/alexander-karelas/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/colin-crain/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/polettix/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/james-smith/perl/ch-1.pl),
[**Julio de Castro**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/juliodcs/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/perlboy1967/perl/ch-1.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/paulo-custodio/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/roger-bell-west/perl/ch-1.pl), and
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/sgreen/perl/ch-1.pl)

With all this traversing and matching like with like, it was tempting to use the regular expression engine to solve the problem, and many team members rose to the challenge. A variety of approaches were presented.

[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/paulo-custodio/perl/ch-1.pl)

Paulo gives us a delightfully compact solution, wrapping a destructive substitution up into a loop.

```perl
    while ($N ne '') {
        $N =~ s/^((\d)\2*)// or die;
        print length($1), $2;
    }
```

The expression matches a number, followed by any number of duplicates, and deletes it, returning the match. The length of the match is counted and the quantity-value pair output.

[**Alexander Karelas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/alexander-karelas/perl/ch-1.pl)
gives us another version:

```perl
    while (length $number) {
        $number =~ s/^((\d)\2*)//;
        my $substr = $1;
        print length $substr;
        print substr $substr, 0, 1;
    }
```















It wasn't necessary to substitute away the original, although it was convenient. Using global matches,

[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/perlboy1967/perl/ch-1.pl)

demonstrates how:

```perl
    while ($N =~ m#((\d)\2*)#g) {
      $M .= sprintf('%d%s', length($1), $2);
    }
```

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/roger-bell-west/perl/ch-1.pl)

By giving the match operator list context all of the global matches can be pulled down in one step to an array.

```perl
    sub cn {
      my $n=shift;
      my @j=$n =~ /((.)\2*)/g;
      my @out;
      while (@j) {
        push @out,length(shift @j);
        push @out,shift @j;
      }
      return join('',@out);
    }
```

Finally, by utilzing the /e switch, a block of code can be evaluated in the substitution block, allowing the alteration of the string into its final output form in place:


[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/e-choroba/perl/ch-1.pl)

```perl
    sub count_number {
        local ($_) = @_;
        s/((.)\2*)/length($1) . $2/ger
    }
```

which

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/abigail/perl/ch-1.pl)

manages to condense to a single line:

```perl
    print s/([0-9])\g{-1}*/length ($&) . $1/egr for <>;
```

## WRITTEN OUT as an ENGLISH PHRASE
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/cheok-yin-fung/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/colin-crain/perl/ch-1.pl),
[**Julio de Castro**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/juliodcs/perl/ch-1.pl), and
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/pete-houston/perl/ch-1.pl)

Several members of the team took a more literal and literary approach, focusing on the directive to "display as you read it". In other words, to produce a written phrase with words.

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/cheok-yin-fung/perl/ch-1.pl)

CY gives us a "split and walk the array" solution, with a twist. Rather than simply joining up and outputting the quantity and digit pair, she goes through the trouble of also doing a hash lookup for the English number words, which she substitutes in for the quantity in a written string. A few commas and she has recreated the output as read in the examples. In the end, both are displayed.
```
    11333115
    two 1, three 2, two 1, one 5.
```

```perl
    my @d_ans = split "", $ans;
    my $outp = "";
    for (my $i = 0; $i < length $ans; $i=$i+2) {
        $outp .= $NAME[$d_ans[$i]]." ".$d_ans[$i+1];
        if ($i == (length $ans) - 2) {$outp .= ".\n"} else {$outp .= ", "}
    }
    return [$ans, $outp];
```

She also addressed the issue where the quantities in the challenge as stated can only be a single digit without confusion, choosing to opt out should this be a problem:

```perl
    die "I cannot say it." if $r > 9;
```

[**Julio de Castro**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/juliodcs/perl/ch-1.pl)

```perl
    say((shift // 42) =~ s/((\d)\2*)/num2en(length $1)." $2 "/egr)
```

Julio starts with a regular expression of the type we've seen before, and then brings in the module `Lingua::EN::Numbers` to convert the quantities into written words.

```
    one 2 two 1 two 3 one 4 two 2 three 5
```

[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/pete-houston/perl/ch-1.pl)

Pete gives another split, walk and count solution, but then brings in the `Lingua::EN::Inflexion` module to help him construct a proper sentence. When all is said and done his output looks something like this:

```
    22131435
    There are two 2s, one 3, one 4 and three 5s.
```

```perl
    while (defined $char) {
        my $next = shift @digits;
        if (defined $next && $next eq $char) {
            $count++;
            next;
        }
        # A change of character so print (and maybe store) what we have
        print $count, $char;
        push @verbose, inflect ("<#w99:$count> <N:$char>") if $opts{v};
        $first //= $count;
        # Reset
        $count = 1;
        $char  = $next;
    }
```

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/colin-crain/perl/ch-1.pl)

For my own solution, I first came up with a split, walk and count method quite similar to the ones we have seen presented above. However after finishing I was left with a feeling of wanting more. So, ruminating over the problem further, and noticing the single digit quantity limitation, I decided one way to resolve my inner turmoil on both accounts would be to ignore the specific requirements for the output and "speak" the result instead, as I would read it.

I immediately reached for `Lingua::EN::Inflexion`, anticipating several problems with pluralization. Although that module does contain a `noun()->cardinal` method to convert numbers to words, combining it with the markup interface proved more trouble than it was worth, so I made a quick lookup, providing the plural forms. Then I discovered it really wanted to write the word "twoes" for some reason I couldn't fathom. Appalled, I made the lookup refer to the plurals and had the module alter them back as required. That worked out fine. Between managing the commas, the pluralization and the final "and", the construction of a proper English sentence became quite complicated.

```
    input:               17786622222222222222222222222222222
    numerically:         11271826292
    now using a regex:   11271826292
    now as she is spoke: "One one, two sevens, one eight, two sixes and twenty-nine twos."
```

Here is the final form:

```perl
    use Lingua::EN::Inflexion;
    my ($current, @digits)  = split //, shift;
    my $count = 1;
    my @output;
    my $mult = 0;
    my %cardinal = (    1 => 'ones',
                        2 => 'twos',
                        3 => 'threes',
                        4 => 'fours',
                        5 => 'fives',
                        6 => 'sixes',
                        7 => 'sevens',
                        8 => 'eights',
                        9 => 'nines',
                        0 => 'zeros'  );

    for (@digits) {
        ($count++, next) if ($_ == $current);
        my $exp = inflect("<#nfw300:$count> <N:$cardinal{$current}>");
        push @output, $exp;
        ($current, $count) = ($_, 1);
        $mult = 1;
    }

    my $str = (join ', ', @output) . ($mult? " and " : "");
    return q(") . "\u$str" . inflect("<#nw300:$count> <N:$cardinal{$current}>") . q(.");
```









## ODDITIES, ANOMALIES and UNUSUAL CIRCUMSTANCES

### FUNCTIONAL PROGRAMMING
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/alexander-pankoff/perl/ch-1.pl)

Alexander abstracts the idea of grouping adjacent elements in an array into its own function, which is passed a code block to determine whether or not to group, in this case that the two are equal.

```perl
    my @groups = group_by( sub ( $a, $b ) { $a == $b }, @digits );

    sub group_by ( $compare_fn, @xs ) {
        return @{
            (
                reduce {
                    # create new group in the first iteration and each time the
                    # result of comparing last and and cur is false
                    push @{ $a->{groups} }, []
                      if !exists $a->{last}
                      || !$compare_fn->( $a->{last}, $b );

                    # add the current element to the latest group
                    push @{ $a->{groups}[-1] }, $b;

                    # set last to the current element
                    $a->{last} = $b;
                    $a;

                }
                { groups => [] },
                @xs,
            )->{groups}
        };
    }
```

then the individual character groups are counted and transformed into successive elements in a sequence

```perl
    my @count_digits = map { scalar( @$_ ), $_->[-1] } @groups;
```

where they are then joined the produce the output string.

I find functional programming can present a quite daunting level of abstraction on first look, which can be confusing: we are often not looking at what we mean but at the underlying building blocks of what gives what we mean, meaning. Like this particular grouping function for instance, which breaks down the acts of grouping and deciding whether or not to group into discreet parts, with a separate function to handle each, each function doing one thing only.

[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/wanderdoc/perl/ch-1.pl)

Wanderdoc gives us an unusual functional solution where the quantity-value pairs are stored in array tuples before being processed for output, keeping the actions simple yet discreet, the main data manipulation being performed in a single `do { ... } for` control structure. Neat.

```perl
    sub count_number
    {
         my $num = $_[0];
         my @arr = split(//, $num);
         my @data;

         do { ( scalar @data == 0 or $_ != $data[-1][0] ) ?
                 push @data, [$_, 1] : $data[-1][1]++ }
              for @arr;
         my $output = join('',map { reverse @$_ } @data);
         return $output;
    }
```


### PDL
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/jo-37/perl/ch-1.pl)

Jorg gives us three lines of code from the Perl Data Language, with extensive commentary. I noted in [my own writeup](https://colincrain.com/2020/12/20/one-2-one-1-jump-street/) that this could be considered a form of Run Length Encoding, and here he uses the capabilities of the PDL to do just that. Some clever matrix transformation produces the joined string output in the desired form.

```perl
    sub count_number {
        # Split the given number into decimal digits and store them in a
        # byte piddle.
        my $n = byte split //, shift;

        # Create a run length encoding for $n.  The piddles $r and $s become
        # filled with the run lengths and the single numbers respectively.
        # The results have the same length as the input piddle and are zero
        # padded.
        $n->rle(my $r = null, my $s = null);

        # Select positive run lengths and the corresponding single numbers,
        # combine these to a matrix (consisting of two lists), transpose it
        # to a list of pairs, flatten the piddle and join the individual
        # elements.
        join '', cat(where $r, $s, $r > 0)->xchg(0, 1)->list;
    }
```

---

---

# TASK 2 {#PWC091TASK2}

# TASK #2 › Jump Game
*Submitted by: Mohammad S Anwar*

You are given an array of positive numbers @N, where value at each index determines how far you are allowed to jump further.

Write a script to decide if you can jump to the last index. Print 1 if you are able to reach the last index otherwise 0.

Example 1:
```
    Input: @N = (1, 2, 1, 2)
    Output: 1
```
Example 2:
```
    Input: @N = (2,1,1,0,2)
    Output: 0
```

## about the solutions

There were 28 submissions for the second task this past week.

There was some ambiguity in the task description, which manifested itself in several different ways. This lead to a range of solutions, all solving different problems.


In one case there as there was a dislocation between the description and the example. The directives speak clearly of "an array of positive numbers", yet the solution for example number 2 clearly hinges on the value of the fourth element being 0, which is not a positive number. Another focused on the use of both the words "determines" and "allowed" in describing the jumping behavior, leaving uncertainty over how movement was to occur.

In my experiences out in the real world, I have found specifications, especially those compiled from multiple sources, to be rife with inconsistencies such as these. So what do I do? I try and figure out what makes the most sense, come up with a plan based on that, and then run that past whoever needs whatever I'm doing to work: "We good?" In other words be proactive and present a solution rather than a problem, letting them rely on your expertise on the matter. It works for me. Sometimes, true, you have to go back and do it the other way, but generally it makes things go smoother for everyone involved. Which is, well, good for everybody. I find the cycle of blame, recriminations, grief and hair-pulling isn't generally helpful to getting things done, although I've seen it happen all too many times. YMMV.

Back to the task, these ambiguities can be resolved several ways, and so of course they were. In the first case either the example could be ignored, focusing on the specific text, or the "positive" descriptive could be amended to "non-negative" or similar, which we saw several times explicitly stated. I found that particular rule to ultimately not be essential at all, and to make the game more interesting ended up making a variant game based on any integer values, positive, negative or zero.

In the second case user input is required to make decisions on jump length, and the whole processs needs to be altered as the gameplay is no longer deterministic.

I general the more restrictions placed on the values and gameplay the less complicated the game became; using only positive numbers the play progresses in a very limited, inexorably forward manner, but if we allow 0 we need to also allow a case to handle losing by not being able to move, and hence to finish. But this too can produce non-intuitive complexity: allowing choice in jump length produces more potential pathways overall, but were we to combine this with only positive numbers then the game can no longer be lost, as we can always move one position forward per step to the finish line.

## the STANDARD method
[**Alexander Karelas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/alexander-karelas/perl/ch-2.pl),
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/alexander-pankoff/perl/ch-2.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/arne-sommer/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/colin-crain/perl/ch-2.pl),
[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/cristian-heredia/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/dave-jacoby/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/polettix/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/jaldhar-h-vyas/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/james-smith/perl/ch-2.pl),
[**Joel Crosswhite**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/jcrosswh/perl/ch-2.pl),
[**Julio de Castro**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/juliodcs/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/laurent-rosenfeld/perl/ch-2.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/paulo-custodio/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/roger-bell-west/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/sgreen/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/ulrich-rieke/perl/ch-2.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/wanderdoc/perl/ch-2.pl)

The overwhelmingly common reading of the challenge fell upon four rules:
1. winning is by landing squarely on the last element
2. exceeding the last position loses
3. every jump length is determined by the full value on the element landed on
4. zero-value elements are allowed, so on landing on one we cannot move and lose

These rules define three conditions for winning or losing, and so the pattern was to set up a loop — move the index by adding the value of the element found to the current position and repeat until one condition or another is met, which will inevitably happen. As these conditions can be quite briefly summarized in logic, the solutions were short and succinct.

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/dave-jacoby/perl/ch-2.pl)

Dave starts us off with a nice example of the method, clearly enumerating the three conditions within the loop.

```perl
    while (1) {
        if ( !defined $n[$i] )                         { last }
        if ( $n[$i] == 0 )                             { last }
        if ( defined $n[$i] && !defined $n[ $i + 1 ] ) { return 1 }
        $i += $n[$i];
    }
    return 0;
```

[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/arne-sommer/perl/ch-2.pl)

Arne gives another example:

```perl
    while (1)
    {
      if ($index == @ARGV -1) { say 1; last; }

      if (defined $ARGV[$index] && $ARGV[$index])
      {
        $index += $ARGV[$index];
      }
      else
      {
        say 0; last;
      }
    }
```


[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/paulo-custodio/perl/ch-2.pl)

Paulo moves the determination of the output to outside the loop, waiting until the movement phase has stopped before reporting on the final state.

```perl
    my $pos = 0;
    while ($pos < $#N && $N[$pos]) {
        $pos += $N[$pos];
    }
    print((($pos == $#N) ? 1 : 0), "\n");
```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/polettix/perl/ch-2.pl)

Flavio gives us a very similar solution:

```perl
    sub jump_game ($N) {
       my $position = 0;
       $position += $N->[$position] while $position < $#$N && $N->[$position];
       return $position == $#$N ? 1 : 0;
    }
```

[**Alexander Karelas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/alexander-karelas/perl/ch-2.pl)

Karelas has a nice variation on the reporting, coercing an integer out of a conditional:

```perl
    while ($pos < $#N and $N[$pos] != 0) {
        $pos += $N[$pos];
    }

    say int($pos == $#N);
```


[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/sgreen/perl/ch-2.pl)

Terse, compact code that wastes no space can be neat and efficient, but there is a place to spend some effort laying things out clearly, one action per line, in a logical, linear fashion. Here Simon provides a sequence of `if...elsif...elsif` statements to provide a very well-defined control structure.

```perl
    my $position = 0;
    my $target   = $#numbers;

    while (1) {
        if ( $position == $target ) {
            # We've reached the target
            return 1;
        }
        elsif ( $position > $target ) {
            # We've gone to far. No solution is possible
            return 0;
        }
        elsif ( $numbers[$position] == 0 ) {
            # We're going nowhere. No solution is possible
            return 0;
        }

        # Move forward by the position in this value
        $position += $numbers[$position];
    }
```


[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/alexander-pankoff/perl/ch-2.pl)

In a small variation, Pankoff presents us with a nicely commented example of a recursive routine, making one jump forward per instance. It still functions the same way, with the conditionals providing base cases.

```perl
    sub jump_game(@jumps) {

        # we reached the end!
        return 1 if @jumps == 1;

        my $cur = $jumps[0];

        # we cannot jump further or we jumped over the end of the list.
        # an empty input list will also be considered as *jumped over the end*
        return 0 if !@jumps || $cur == 0;

        # assuming we are allowed to jump exactly $cur positions and no less.
        return jump_game( @jumps[ $cur ... $#jumps ] );
    }
```















## BACKWARDS and BACKTRACKING - allowing CHOICE in jump length
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/athanasius/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/cheok-yin-fung/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/jo-37/perl/ch-2.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/lubos-kolouch/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/pete-houston/perl/ch-2.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/wlmb/perl/ch-2.pl)

The alternate reading of the task as allowing any amount of movement up to but not exceeding the limit available at each jump introduces complexity into the possible outcomes, and several people decided on this interpretation.

As Jorg Sommery puts it:

>The task states: "[the] value at each index determines how far you are
allowed to jump further".  So I'll regard shorter jumps as valid.
There wouldn't be much fun otherwise - and it's called a game!

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/athanasius/perl/ch-2.pl)

Athanasius sidesteps the larger question of whether one need to jump every space allotted by providing two solutions, one based on exact jumps, the other any amount up to the value of the index.

In his `jump_up_to` version, he incorporates recursion, with the familiar three conditionals as base cases. Trying the longest jumps first, he then recurses and attempts a completion again.

```perl
    if    ($index == $#$N)              # Base case 1: Success (target reached)
    {
        _log('Success: reached index %d', $index);
        $result = 1;
    }
    elsif ($index >  $#$N)              # Base case 2: Failure (jumped too far)
    {
        _log('Failure: reached index %d, backtracking...', $index);
    }
    elsif ($N->[$index] == 0)           # Base case 3: Failure (zero jump)
    {
        _log('Failure: jump at index %d is 0, ' .
             ($index ? 'backtracking...' : 'search ended'), $index);
    }
    else
    {
        for my $i (reverse 1 .. $N->[$index])             # Prefer longer jumps
        {
            _log('At index %d, jumping %d', $index, $i);

                                        # Recursive case 1: Success

            last if $result = jump_up_to($N, $index + $i);
        }

        unless ($result)                # Recursive case 2: Failure
        {
            _log('Failure: all jumps failed at index %d, ' .
                 ($index ? 'backtracking...' : 'search ended'), $index);
        }
    }
```

[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/pete-houston/perl/ch-2.pl)

Pete gives us another version of the same recursive method.

```perl
    sub solve {
        my @nodelist = @_;

        # Are we beyond the end?
        return 0 unless defined $nodelist[0];

        # Are we at the end?
        return 1 if $#nodelist == 0;

        # 0 is a tarpit
        return 0 if $nodelist[0] == 0;

        # Try the allowed jumps starting with the largest
        for my $step (reverse (1 .. $nodelist[0])) {
            return 1 if solve (@nodelist[$step .. $#nodelist]);
        }
        return 0;
    }
```

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/jo-37/perl/ch-2.pl)

Jorg adds a feature to his version of this method, in that should a path forward from a given index prove to be untenable, that index is given the value of -1, allowing pruning from future searches. Here is his well-commented solution:

```perl
    sub jump_game {
        my @maxjump = @_;

        # Convert the given numbers into references to them.  This enables
        # the modification of the original values through array slices.
        # Transform only once.
        @maxjump = map \$_, @maxjump unless ref $maxjump[0];

        local $level = ($level // -1) + 1;
        trace "at (@{[map $$_, @maxjump]})";

        # Jump length from max down to 1.
        for my $jump (reverse 1 .. ${$maxjump[0]}) {
            # If we can jump beyond the end, we can hit it as well.
            if ($jump > $#maxjump) {
                $jump = $#maxjump
            }
            # Don't ride a dead horse.
            elsif (${$maxjump[$jump]} <= 0) {
                trace "avoid jump $jump";
                next;
            }

            trace "jump $jump:";
            trace('hit the end'), return 1 if $jump == $#maxjump;

            # Recurse into the remaining numbers from the jump target
            # onwards.
            return 1 if jump_game @maxjump[$jump .. $#maxjump];
        }
        trace 'failed';

        # Record current failure by setting max to a negative value.  Any
        # value <= 0 would do, but this visibly preserves the structure of
        # the data when the trace is enabled.
        ${$maxjump[0]} *=  -1;
        0;
    }
```


[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/wlmb/perl/ch-2.pl)

Luis on the other hand, walks *backwards* down his list of indices from the last element, at each stop looking for a value that will allow a jump from there to the end. If one is found, he places a "stepping stone", which becomes the new target position. He then continues downward, now looking for a viable jump to the last stone placed. Once reaching index 0, we see whether a stone has been placed there. If so, there exists a path, and the list of stepping stones is reported.

```perl
    my @stepping_stones;
    push @stepping_stones, $#stones;
    foreach(reverse (0..$#stones-1)){ # add stepping stones from right to left
        unshift @stepping_stones, $_ if $stepping_stones[0] <= $_+$stones[$_];
    }
    say $stepping_stones[0]==0
        ?"1 Success\nPath: " . join "->", @stepping_stones
        :"0 Failure";
```

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/cheok-yin-fung/perl/ch-2.pl)

CY gives another version of essentially the same algorithm, albeit with less colorful language. She also simplifies things by simply moving the target position backwards with every successful jump step. When she has finished, she determines whether she has reset the position target to index 0.

```perl
sub backtrack {
    my @arr = @_;
    my $position = $#arr;
    while ($position > 0) {
        my $index = $position - 1;
        while ($index >= 0) {
            if ($arr[$index] >= $position-$index) {
                $position = $index;
                last;
            } else {
                $index--;
            }
        }
        if ($index < 0) {last;}
    }

    return ($position == 0 ? 1 : 0);
}
```



## ICONOCLASTS and DREAMERS, RENEGADES and FOOLS
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/abigail/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/colin-crain/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/perlboy1967/perl/ch-2.pl), and
[**Nuno Vieira**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/nunovieira220/perl/ch-2.pl)


I will allow each to assign the category they feel most fitting for themselves.

### TARANTINO style

[**Nuno Vieira**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/nunovieira220/perl/ch-2.pl)

Walking backwards from the target, with a fixed jump length, Nuno identifies indices that either jump directly to the end, or jump to an index that jumps to the end, or an index that jumps to another successful index, keeping a record of those successful positions in a hash. After finishing, if $hash{0} exists, there exists a path.

```perl
    my %targets = ($len - 1, 1);
    for(my $i = $len - 2; $i > 0; $i--) {
      my $jump = $i + $A[$i];

      $targets{$i} = 1 if (defined $targets{$jump});
    }
    my $res = defined $targets{$A[0]} ? 1 : 0;
```

### DISALLOWING zero

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/abigail/perl/ch-2.pl)

Taking the spec as gospel, Abigail has no time for red herrings nor spurious examples and so eschews any zeros whatsoever in his input, for, as he states: "0 ain't no positive number".

As such the forward progress is relentless, and either the goal is landed on or exceeded. There is no need for an exit clause on 0.

```perl
    while ($index < @N - 1) {
        $index += $N [$index];
    }
    say $index == $#N ? 1 : 0;
```

### allowing NEGATIVE numbers

Although Duncan broached the subject, no one actually implemented this varient. No one, that is, besides me.

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/colin-crain/perl/ch-2.pl)

```perl
    sub jump_around {
    ## a more robust game allowing negative values.
    ## fails on
    ##   exceeding array bounds,
    ##   landing on 0 (cannot jump further)
    ##   landing on position twice (signifying a closed loop)
    ## wins
    ##   by landing on last element
    ## returns on determination
        my @array = @_;
        my $idx = 0;
        my $last = scalar @array - 1;
        my %visited;
        while (1) {
            my $next = $idx + $array[$idx];
            return 1 if $next == $last;              ## win
            return 0 if $next == $idx;               ## stuck
            return 0 if $next < 0 or $next > $last;  ## out of bounds
            return 0 if exists $visited{$next};      ## looping
            $idx = $next;
            $visited{$idx} = 1;
        }
    }
```

Following the trend of allowing zero, even though the specification states "positive numbers", it occurred to me that there was no overarching rationale for excluding negative numbers either. That would mean that progress walking the line could be made forwards or backwards. Allowance would need to be made for overstepping the boundaries on both ends of the array, and a decision would have to be made on the meaning of a negative index. I decided that going below zero would be the same as exceeding the last element: it would set us down in undefined limbo, never to return. The case could be made, however, for negative indices wrapping around to the end of the array, working backwards, which would open up a whole new can of worms. The one novel failure mode was the potential of a closed loop. In this case we can detect the pattern by noting all of the indices we've already visited. If we return to one, then we know that the path forward from there eventually brought us to that point, and will again. Thus we are trapped in an endless cycle and can never reach the finish line.

### a GOLD STAR for DATA VISUALIZATION

[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-091/perlboy1967/perl/ch-2.pl)

Several times now I recall having made mention of Niels' efforts in providing clear visual representations of his process. A picture is worth a thousand words, they say, and *showing* the results artfully is a far better demonstration of an idea than simply *listing* the progress. Niels gives to us a `printLocation()` subroutine which, longer than the code itself, provides just that demonstration. Enjoy.

```
    Input: (2,6,1,2,12,1,100)

    2 6 1 2 12 1 100
    ^
    2 6 1 2 12 1 100
        ^
    2 6 1 2 12 1 100
          ^
    2 6 1 2 12 1 100
               ^
    2 6 1 2 12 1 100
                 ^^^

    Output: 1
```

Here is his code:

```perl
    while ($i < scalar(@N) - 1 and $N[$i] != 0) {
      my $c = ($i + $N[$i] >= scalar(@N) ? '!' : '^');
      printLocation($i, $c);
      $i += $N[$i];
    }
    printLocation($i, '^') if ($i == scalar(@N) - 1);

    sub printLocation {
      my ($i, $c) = @_;

      printf "%s\n", join(' ', @N);
      printf "%s\n", join(' ',
                          @S[0 .. $i-1],
                          $c x length($N[$i]),
                          @S[$i+1 .. -1]);
    }
```

---

# BLOGS {#PWC091BLOGS}

---

**That’s it for me this week, people! Resolute and unbroken by the torrential influx, I have maintained my bearings. Looking forward to next wave, the perfect wave, I am: your humble servant.**

## But if Your *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC091BLOGS}
## then *RUN* *(dont walk!)* to the *WATERING HOLE*
## and *READ* these *BLOG* *LINKS*:

***( don't think, trust your training, you're in the zone, just do it ... )***


**Aaron Smith**

 * [Perl Weekly Challenge 91 - Aaron Smith](https://aaronreidsmith.github.io/blog/perl-weekly-challenge-091/) ( *Raku* )

**Abigail**

 * [Perl Weekly Challenge 91, Part 1 &#8211; Abigail's Programming Blog](https://wp.me/pcxd30-j2) ( *Perl* )
 * [Perl Weekly Challenge 91, Part 2 &#8211; Abigail's Programming Blog](https://wp.me/pcxd30-jq) ( *Perl* )

**Andrew Shitov**

 * [Raku Challenge Week 91 — Andrew Shitov](https://andrewshitov.com/2020/12/14/raku-challenge-week-91/) ( *Raku* )

**Arne Sommer**

 * [Count and Jump with Raku and Perl](https://raku-musings.com/count-jump.html) ( *Perl & Raku* )

**Colin Crain**

 * [One (2) One (1) Jump Street](https://colincrain.com/2020/12/20/one-2-one-1-jump-street/) ( *Perl & Raku* )

**Dave Jacoby**

 * [Perl Challenge 91: Jumping Numbers and Counting Numbers | Committed to Memory](https://jacoby.github.io/2020/12/14/perl-challenge-91-jumping-numbers-and-counting-numbers.html) ( *Perl* )

**Flavio Poletti**

 * [PWC091 - Count Number - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2020/12/15/pwc091-count-number/) ( *Perl* )
 * [PWC091 - Jump Game - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2020/12/16/jump-game/) ( *Perl* )

**Jaldhar H. Vyas**

 * [Perl Weekly Challenge: Week 91](https://www.braincells.com/perl/2020/12/perl_weekly_challenge_week_91.html) ( *Perl & Raku* )

**Kang-min Liu**

 * [解 Perl Weekly Challenge 091 -- 數數字與跳格子](https://gugod.org/2020/12/pwc-091/) ( *Raku* )
 * [Solving Perl Weekly Challenge 091 -- Count numbers and Jump game.](https://gugod.org/2020/12/pwc-091-en/) ( *Raku* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 91: Count Numbers and Jump Games](http://blogs.perl.org/users/laurent_r/2020/12/perl-weekly-challenge-91-count-numbers.html) ( *Perl & Raku* )

**Roger Bell_West**

 * [RogerBW's Blog: Perl Weekly Challenge 91: Number Jump](https://blog.firedrake.org/archive/2020/12/Perl_Weekly_Challenge_91__Number_Jump.html) ( *Perl & Raku* )

**Simon Green**

 * [Weekly Challenge 091](https://dev.to/simongreennet/weekly-challenge-091-12l) ( *Perl* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 91](https://wlmb.github.io/2020/12/14/PWC91/) ( *Perl* )
