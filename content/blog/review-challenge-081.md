
---
author:       Colin Crain
date:         2020-10-21T00:00:00
description:  "Colin Crain › Perl Weekly Review #081"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #081"
image:        images/blog/p5-review-challenge-081.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-080/).* )

Welcome to the Perl review for **Week 081** of the Weekly Challenge! Here we will take the time to discuss the  submissions offered by the team, factor out the common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

Or really, talk about pretty much anything that stands out as remarkable or noteworthy.

Every week there is an enormous global collective effort made by the team, analyzing and creatively coding the submissions, and that effort deserves credit due. And that's why I'm here, to try and figure out how to do that.

Let's have a look and see what we can find.

---

**<big>For context</big>**  before we begin, you may wish to revisit either of the pages for the [**original tasks**](/blog/perl-weekly-challenge-081/) or the summary [**recap**](/blog/recap-challenge-081/) of the challenge. But don't worry, the challenges themselves will be briefly summarized, presented below as we progress from task by task. Oh, and one more thing before we get started:

### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

**So finally, without further ado...**

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC081TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC081TASK2)   &nbsp;  &nbsp;  &nbsp;       •   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC081BLOGS)    &nbsp;  &nbsp;  &nbsp;       •

---

# TASK 1 {#PWC081TASK1}
# Common Base String
You are given 2 strings, $A and $B.
Write a script to find out common base strings in $A and $B.
A substring of a string $S is called base string if repeated concatenation of the substring results in the string.

Example 1:

```
Input:
    $A = "abcdabcd"
    $B = "abcdabcdabcdabcd"

Output:
    ("abcd", "abcdabcd")
```

Example 2:

```
Input:
    $A = "aaa"
    $B = "aa"

Output:
    ("a")

```


## ABOUT the solutions

We had a total of 29 submissions for the first task this last week. It seems we have grown and I welcome the challenge of reviewing them all. Or most. Ok, how about many -- a representative sampling -- if we really want to look at things realistically.


### making life DIFFICULT

An assortment of answers were submitted that had problems with finding all of the base strings present. I realize that this specific directive isn't explicitly stated but is certainly implied in the first example. In what is becoming my usual difficult manner, I tried to craft complex input that would challenge the algorithms, but found it remarkably hard to do. Because by definition the entirety of the strings are composed of the base string, the only difference between the two inputs will be the number of repetitions. Multiple valid common base strings will be themselves common multiples of the shortest string. The easiest way to produce numerous base strings is to make the shortest element a
single letter, as in the second example. I came up with

```perl
@ARGV = qw(aaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaa);
```

which produces the result:

```
aaaaaa
aaa
aa
a
```

If you replace the "a"s with 1s, you can see we have made a circuitous, roundabout path to determining a list of common divisors in unary representation: {1,2,3,6} is the set of common divisors for {24,18}, with each character representing a stick in a pile. Ahh, the beautiful interconnectedness of mathematics. With longer base strings the relationship remains the same, only with the multi-character string being the atomic unit. Substituting "GATTACA" for each "a", or 1, in the strings above would make for much longer strings that were in their essential nature identical, just using different graphemes to represent them.

## extract SUBSTRINGS and SEE if they FIT
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/alexander-pankoff/perl/ch-1.pl),
[**Andinus**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/andinus/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/athanasius/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/cheok-yin-fung/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/colin-crain/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/dave-jacoby/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/polettix/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/james-smith/perl/ch-1.pl),
[**Lars Thegler**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/lars-thegler/perl/ch-1.pl),
[**Myoungjin Jeon**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/jeongoon/perl/ch-1.pl),
[**Nuno Vieira**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/nunovieira220/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/pete-houston/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/roger-bell-west/perl/ch-1.pl),
[**Shawn Wagner**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/shawn-wagner/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/sgreen/perl/ch-1.pl),
[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/walt-mankowski/perl/ch-1.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/wanderdoc/perl/ch-1.pl)

Because all base strings are substrings of the input, we extract them and see if they can be repeated to assemble the complete, larger source. Once we have a set of base strings for each input, we can find common elements between the two sets.

There's three parts to this breakdown:
* extract the substrings,
* validate them, and
* compare the sets.

### acquiring substring FRAGMENTS

Because any base string by definition is anchored to the beginning of a target string, the common method was to establish a loop and use `substr`, taking from index 0 up to to the position of the iterator. This produces a triangular set of results, with first just the initial character, then the first two, then three, etc. This brute force method is of course suboptimal, as many stings are acquired that have no chance of replicating the target, so a number of strategies arose to refine the search to only divisors of the target string, or, in some cases, common divisors of both strings.

I use a simple filter in

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/colin-crain/perl/ch-1.pl)

where I only allow lengths that are even divisors of the total length before even creating  the substring to evaluate. We can use the rest of the logic to compare some of the other approaches taken.

```perl
my %subs_a = map {$_ => 1} find_base_strings($A);
for (find_base_strings($B)) {
    push @out, $_ if exists $subs_a{$_} ;
}
say $_ for @out;

sub find_base_strings {
    my $str = shift;
    my $len = length $str;
    my @out;

    for (1..$len) {
        next unless $len % $_ == 0;
        my $sub = substr $str, 0, $len/$_;
        my $res = $str =~ /^(?:$sub)+$/;
        push @out, $sub if $res;
    }
    return @out;
}
```

Its a simple algorithm: I select a substring and use a regex to see whether it can be repeated to complete the whole string. Successful matches are stored, and when returned the first set are hashed. The second set are iterated through and strings common to both sets are declared common base strings.

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/e-choroba/perl/ch-1.pl)
does something very similar, condensing the steps into a single routine:

```perl
sub common_base_string {
    my ($s1, $s2) = @_;
    ($s1, $s2) = ($s2, $s1) if length $s2 < length $s1;
    my @r;
    for my $d (1 .. length $s2) {
        next unless 0 == length($s2) % $d;
        my $part = substr $s2, 0, length($s2) / $d;
        unshift @r, $part
            if $s2 eq $part x $d
            && $s1 =~ /^(?:$part)+$/;
    }
    return \@r
}
```


[**Lars Thegler**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/lars-thegler/perl/ch-1.pl)

Lars gives us a nice variation on this, combining both result sets into a single hash that increments by frequency. Those keys with value equal to the number of target strings are present in all sets of base strings.

Note this technique works for more than two strings, which is nice.


```perl
sub base_strings($S)
{
    my @result;
    for my $l ( 1 .. length $S ) {
        my $substr = substr( $S, 0, $l );
        next unless $S =~ /^($substr)+?$/;
        push @result, $substr;
    }
    return @result;
}

my %base_strings;
for my $S (@ARGV) {
    my @b = base_strings($S);
    $base_strings{$_}++ for @b;
}

my @common_base_strings;
for (keys %base_strings){
    if ($base_strings{$_} == scalar @ARGV) {
        push @common_base_strings, $_;
    }
}
```

[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/alexander-pankoff/perl/ch-1.pl)

gives us an interesting approach to finding common elements in both result sets, using `any` form `List::Util`:

```perl
sub intersection ( $a, $b ) {
    grep {
        my $a_elem = $_;
        any { $_ eq $a_elem } @$b;
    } @$a;
}
```

Further refining the set of substrings to try is

[**Andinus**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/andinus/perl/ch-1.pl)

who goes as far as to compile a list of common divisors to both strings, only bothering to test substrings with lengths from that list.

```perl
# Get all common divisors.
my %divisors_of_A = divisors(length($A));
my %divisors_of_B = divisors(length($B));
my @common_divisors;
foreach my $num (sort { $a <=> $b } keys %divisors_of_A) {
    push @common_divisors, $num
        if exists $divisors_of_B{$num};
}

# Returns all divisors of a number.
sub divisors {
    my $n = shift @_;
    my %divisors;
    foreach my $i ( 1 ... $n){
        if ($n % $i == 0) {
            $divisors{$i} = 1;
        }
    }
    return %divisors;
}
```

Using a regex to match out multiples of the base string in the target proved to be effective but unnecessarily heavy-handed to the task. If the length of the candidate substring has already been determined to evenly divide the target, than that division tells us immediately how many times the substring is repeated to form the whole. Using
the `x` repetition operator we can construct a string of the correct length and directly compare it.

Several people realized this relationship and capitalized on it.

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/sgreen/perl/ch-1.pl)

expresses it well in his `is_base_string` validation function:

```perl
sub _is_base_string {
    my ( $string, $substring ) = @_;

    # It cannot be a base string if it does fit evenly
    return 0 if length($string) % length($substring);

    # Return true if the string is the base string repeated multiple times
    my $repeatations = length($string) / length($substring);
    return $substring x $repeatations eq $string;

}
```

in fact, this can even be reduced further as shown by

[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/walt-mankowski/perl/ch-1.pl)

```perl
sub is_base($prefix, $s) {
    my $cnt = length($s) / length($prefix);
    return $prefix x $cnt eq $s;
}
```

As you can see, we don't even need to check for even division. If the `x` operator is given a real, it only responds with the integer portion, and thus in this formation gives a non-matching result. It all works out in the end.

In a form that may appear exotic to the uninitiated, a casting of what is in essence the same logic in a functional programming paradigm is given to us by

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/james-smith/perl/ch-1.pl)

Here James has translated the logic of the standard solution into a single complex `map`/`grep` function:

```perl
sub common_base_string {
  my( $s, $t ) = @_;
  my $ls = length $s; ## need lengths many times so we get them
  my $lt = length $t;
  return [ map { substr $s,0,$_ }
          grep { my $x = substr $s,0,$_;
                  !($ls % $_) &&           ## false unless length of
                  !($lt % $_) &&           ## both strings a multiple of $_
                  $s eq ($x x ($ls/$_)) && ## check to see if both
                  $t eq ($x x ($lt/$_))    ## strings fit requirement!
               }
               1 .. ($ls<$lt?$ls:$lt) ];
}
```

These things are best read from the bottom up, where we have the list of lengths from 1 to the shorter of the two strings, and filter these numbers for those that evenly divide out the targets, and when repeated by the dividend equal their targets. Sound familiar? Of course it does. It is, as I said before, the same logic as we've seen many times already. It's not even particularly complex if you know how to read it.

I've tried to present here a well-rounded sampling from the submissions for you, and some of the more interesting bits I've found. There are many possible variants available on the same basic form, with the roots of that form returning again and again to the mathematics of factoring and common factors. The solutions can end up more or less complex depending on how far you want the optimization to go. I'll leave you with a very short, minimalist version from

[**Nuno Vieira**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/nunovieira220/perl/ch-1.pl)

```perl
my $len = min(length($A), length($B));

for (my $i = 0; $i < $len; $i++) {
  my $base = substr($A, 0, $i+1);

  push(@res, $base) if($A =~ /^($base)+$/ && $B =~ /^($base)+$/);
}
```

That's it. I like it. It's direct and easy on the eyes.






## use a CLEVER REGEX
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/abigail/perl/ch-1.pl) and
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/jo-37/perl/ch-1.pl)

Several brave souls attempted to solve the problem with a single regular expression, with varying success. The key to total victory here was to look at all possible matches, not just the greedy match or the minimal, the basic options available. When the regular expression engine is determining what either the minimal or maximal match requested will be, it makes an effort to match and, should that match fail, backtracks to the quantifier and increases or decreases the value before trying again. Only once the engine has run out of valid options will it cease looking. This backtracking behavior looks a lot like a loop construct, and can be harnessed to serve that role by engineering side-effects within the expression as it is being evaluated.

Two steps are used to make use of this behavior: the insertion of a zero-width code block assertion with side effects, and the reserved (*FAIL) backtracking verb.

The code block assertion is in the form

```perl
(?{ code here })
```

It always matches and executes the code contained within the brackets. The `(*FAIL)` verb matches nothing and always fails. Together they can be used after a match quantifier and used to execute the code within the brackets repeatedly as the regex engine fails to match and backtracks to try a different value for the quantifier.

Perhaps it's easier to demonstrate this technique now that we've been given a basic introduction. Both Abigail's and Jorg's versions work in similar ways, and we can have a look at each of them to see how they work.

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/abigail/perl/ch-1.pl)

Abigail first sorts the two strings so that $A is the shorter, then creates a unique separator string from null characters to place between the two, and assigns the whole concatenation to the topic for convenience.

```perl
my $sep = "\x00" x (1 + length ($A) + length ($B));
$_ = "$A$sep$B";
```

Once that is ready, the regex, expanded using the `/x` switch, looks like this:

```perl
/^ (.+) \1*     # Find base strings of $A
   $sep         # Match the separator
   \1+ $        # Must be base string for $B
   (?{say $1})  # Print it
   (*FAIL)      # Backtrack so we can try other base strings.
/x;
```

As so kindly annotated, the expression is anchored to the beginning of the string and captures a group of characters that may be repeated immediately 0 or more times. This will always start by matching the entirety of the $A string section. Then our constructed separator will always match. After this it tries to match the capture group again from the end of the separator to the end of the string. If it fails to match here it backtracks to try a capture group one shorter and start over. If it succeeds, on the other hand, the next part of the expression is evaluated, the code block, which always matches. Here he prints the capture group to output. The evaluation continues to the next and final section, the verb, and the match by definition fails.

The match having failed, the engine backtracks and the next smaller value for the quantifier is tried. In this process of evaluation successively smaller character groups captured from the front of the string will be tested as first base strings for one then the other input, from the whole length of the shorter string to the single character that begins it, and capture groups that are validated are printed by the code block in the middle. The code block behavior here, where something in the middle of a complex function affects the program space outside of that process is known as a *side effect*. Sometimes discouraged for creating unusual linkages and dependancies that can produce unintuitive behavior and hard-to-track bugs, here we are explicitly capitalizing on this to look inside and grab data from a regular expression as it is being evaluated. Notice that once the last option for the quantifier is exhausted the evaluation stops with the expression having never actually matched anything, being, as they say, [born to lose](https://www.youtube.com/watch?v=TlFsXoZkamw).

Cool huh? Now let's look at Jorg's code.

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/jo-37/perl/ch-1.pl)

```perl
local $_ = shift . "\n" . shift;
my @base;

m{
    ^ (.+?) \1*+ \n \1++ \z    # capture base string for both
    (?{push @base, $1})        # collect captured base string
    (*FAIL)                	# force backtracking
}x;
```

As you can see, very similar. He's taken the liberty to just exclude newlines from the allowed characters in the input, which seems a pretty reasonable restriction, and has taken that to be his separator. It's a good choice too, because '.' does not match a newline. As you can see a minimal match quantifier works just as well with this technique, in this case growing upwards from a single character. In his code block, however, he adds any capture that makes it that far to a result array for use later. So we can see how either printing the capture outright or assigning it to an outside variable can both serve to preserve ephemeral fragments from within the matching process before it ultimately fails.

It's a good trick.

[**Jose Luis**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/jluis/perl/ch-1.pl)

While we're addressing cool regexen, in a section of a more standard solution we have the  following from Jose, who brings us a novel way of extracting substrings from his targets:

```perl
sub base {
    # bassed on Abigail's prime number regex
    # get all base strings of $_[0]
    # a base string is one that concateneted 0 or more times can generate
    # the original string
    my $orig = shift;
    my @bases;
    my $length = 1;
    while (1) {
        last unless $orig =~ /^(.{$length,}?)\1+$/;
        push @bases,$1;
        $length = 1+length($1);
    }
    return (@bases,$orig)
}
```

The regex continues to match as long as there are sections of *at least* the given length that can repeat one or more times to form the entirety. The match is made minimally, meaning the engine will first try character strings of length $length, but should that fail (which it likely will), it will backtrack to look at those of $length+1, etc, continuing until it cannot any longer.. When a match is made, the start length is incremented and we begin again. I suppose this backtracking is the inspiration for his attribution.

The aforementioned prime number regex,

```perl
/^1?$|^(11+?)\1+$/
```

has appeared on these pages before, back in PWC 076.


## ODDITIES, ADDITIONAL remarks and other SHINY THINGS


[**Bob Lied**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/bob-lied/perl/ch-1.pl)

Bob's routines are stashed in his own [`CommonBaseString.pm`](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/bob-lied/perl/lib/CommonBaseString.pm) module.

```perl
sub commonPrefix($s, $t)
{
    my @s1 = split("", $s);
    my @s2 = split("", $t);
    my $prefix = "";
    my @possiblePrefixes = ();

    while ( @s1 && @s2 && ($s = shift @s1) eq ($t = shift @s2) )
    {
        $prefix .= $s;
        push @possiblePrefixes, $prefix;
    }
    return \@possiblePrefixes;
}

sub run($self)
{
    my ($A, $B) = @{$self}{qw(_a _b)};
    my ($lenA, $lenB) = ( length($A), length($B) );
    my @thisWorks = ();

    my $prefixes = commonPrefix($A, $B);

    for my $prefix ( @$prefixes )
    {
        my $lenP = length($prefix);
        # Only prefixes that can be repeated to the length of both strings
        # are candidates.
        next unless $lenA % $lenP == 0;
        next unless $lenB % $lenP == 0;

        # Number of repetitions required for each string.
        my $repA = $lenA / $lenP;
        my $repB = $lenB / $lenP;

        my $buildsA = ( ($prefix x $repA) eq $A );
        my $buildsB = ( ($prefix x $repB) eq $B );
        push @thisWorks, $prefix if ( $buildsA && $buildsB );
    }

    return \@thisWorks;
}
```

Bob takes a quite different approach to the task, first creating a list of common prefixes by shifting characters off the two strings one-by-one and comparing them. If they are the same, they're aggregated to the previous characters, if any, and the combined string is added to the list. In this way he creates something akin to the triangular list of substrings, only these have been pre-evaluated to match both target already.

Once this list is determined, each prefix string has its length compared to the lengths of the targets, and only allowed to pass if it is evenly divisible. If it *is* divisible, that dividend is taken as a multiplier and an new potential match string is created by repetition for each string. Finally the fabricated strings are compared to the targets, and if they match the prefix is declared a base string.



[**Myoungjin Jeon**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/jeongoon/perl/ch-1.pl)

I'll just leave this here.

I liked the use of `all` in this code, that's all. It stuck out. Have a look at the source for further context.

```perl
for my $cdv ( unsafe_commonDivisors( length $A, length $B ) ) {
    my $mcb = substr( $A, 0, $cdv ); # (m)aybe (c)ommon (b)ase string
    ( all
         { my @m = /$mcb/g;

           say STDERR "`$_' contains `$mcb'", ": ",
               (scalar @m), ", must be ", (length($_) / $cdv) if $d;

           scalar( @m ) == (length($_) / $cdv)

         } $A, $B
    ) and push @commonBaseWords, $mcb;
}
```


---

# TASK 2 {#PWC081TASK2}
# Frequency Sort
You are given file named input.
Write a script to find the frequency of all the words.
It should print the result as first column of each line should be the frequency of the the word followed by all the words of that frequency arranged in lexicographical order. Also sort the words in the ascending order of frequency.

For the sake of this task, please ignore the following in the input file:

```
. " ( ) , 's --
```

## about the solutions: a BAG OF WORDS

There were 30 submissions for the second task this last week. A good haul. I'd say.

As I've [spoken about elsewhere](https://colincrain.wordpress.com/2020/10/10/finding-common-basis-with-a-bag-of-sharks/), this sort of frequency analysis applied to words in a text is a common model used in Natural Language Programming known as a "Bag of Words". In its most basic form a word list, sorted by frequency, can be used to infer to some degree what the source text is about.

With an eye towards that goal, it is common to preprocess the text to standardize the data, so that slightly different representations of the same word are counted together. Here we are given a list of specific punctuation marks to ignore, for example. We are also instructed to remove a specific possessive case ending, so "Tony" and "Tony's" will be counted as the same entity. A double-hyphen long dash is out, but we must make sure to include a single hyphen to maintain the integrity of compound words.

The preprocessing requested here is minimal, more of a sampling of the sorts of alterations to the text that can be made rather than a robust working over of the data. In a real-world analysis much more complicated and intricate steps would improve the final report. For example, one very basic step I noticed in its absence was to lowercase all the lettering. As it stands, in the sample text the words "There" and "there" will be counted separately, which is not likely to be what we want. Yes, this would cause problems with Maria and Tony, the names of our protagonists, but this is really an offshoot of what is known as Named Entity Recognition, and these elements can be identified in other ways and isolated out. I did use the words "complicated" and "intricate" before.

The thoroughness of processing for NLP is ultimately guided by the planned end-use of the data. There are a myriad of relationships between words in a text and between individual texts within a larger corpus that can be analysed and have information extracted, and this simple bag-of-words is only the most basic introduction. Yet by examining the report, one might infer that the text has something to do with a tragedy involving Maria and Tony, and you would be right.


## the TYPICAL process
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/abigail/perl/ch-2.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/adam-russell/perl/ch-2.pl),
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/alexander-pankoff/perl/ch-2.pl),
[**Andinus**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/andinus/perl/ch-2.pl),
[**Bob Lied**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/bob-lied/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/cheok-yin-fung/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/colin-crain/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/dave-jacoby/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/polettix/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/james-smith/perl/ch-2.pl),
[**Lars Thegler**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/lars-thegler/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/laurent-rosenfeld/perl/ch-2.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/lubos-kolouch/perl/ch-2.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/mohammad-anwar/perl/ch-2.pl),
[**Myoungjin Jeon**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/jeongoon/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/perlboy1967/perl/ch-2.pl),
[**Nuno Vieira**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/nunovieira220/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/pete-houston/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/roger-bell-west/perl/ch-2.pl),
[**Shawn Wagner**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/shawn-wagner/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/sgreen/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/ulrich-rieke/perl/ch-2.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/wanderdoc/perl/ch-2.pl)

Most submissions, overwhelmingly so, followed a very similar construction.
With the bag-of-word NLP analysis as our model, the typical process was to:

* ( input )
* preprocess the text using substitutions or translations and divide the result into a list of words
* hash the words to their absolute frequency in the text
* invert the hash into frequencies mapped to a list of words with a given value
* ( print the results )

This pattern repeated consistently throughout the submission pool.

### the ARCHITYPICAL FORM

[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/lubos-kolouch/perl/ch-2.pl)

To get the ball rolling, Lubos's submission contains all the elements discussed above, laid out in a very systematic fashion. I think his code makes a fine demonstation of the typical form:

```perl
    # sanitize the input as per the challenge
    $arg =~ s/[."\(\),]/ /g;
    $arg =~ s/(?:'s)/ /g;
    $arg =~ s/(?:--)/ /g;

    my %count;

    # First split the array and create hash of counts of each word
    for (split ' ', $arg) {
        $count{$_}++;
    }

    my %rev_count;

    # create reverse hash with counts as key and the words as array
    my @result;
    for my $key (keys %count) {
        push @{$rev_count{$count{$key}}}, $key;
    }

    # sort the arrays and put them to the result output
    for my $key (keys %rev_count) {
        push @result, $key.' '.join(' ', sort @{$rev_count{$key}});
    }
```

You can plainly see how the text is first standardized, then divided into words, then those words hashed, then that hash inverted. Each of the final hash keys is a frequency, and these are assembled with a joined string of the words gathered for that count.

There was bit of variation in each of the steps as each member put their personal style on this logic flow, but the systematic linear progression between stages was always there, even in the most unique solutions. We can consider the above a template of sorts, and break down some of those variations according to their step in the big picture.

### INPUT

Aside from the oddity of seeing so many references to a mysterious, extensionless file named "input", I didn't pay too much mind to this part of the puzzle. Most took a file, most of those were looking for the aforementioned "input", although the `__DATA__` filehandle was another popular choice, as was `STDIN`.

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/polettix/perl/ch-2.pl)

gives us the best of both worlds, accepting either a default file named "input" or an open filehandle, so he can place the example text in the `__DATA__` section.

```perl
sub frequency_sort ($input = 'input') {

   # Allow for getting an open filehandle as input
   my $fh = ref($input) ? $input : do {open my $fh, '<', $input; $fh};

    ...

}

frequency_sort(\*DATA);
```

The omitted parts are pretty cool, too.
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/jo-37/perl/ch-2.pl)
does a similar trick, but we'll get to him.

### PREPROCESING

For the text preprocessing, a few substitutions or translations generally made do. One particularly noteworthy implementation of this step was made by

[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/mohammad-anwar/perl/ch-2.pl)

Mohammad breaks each of the alterations down into a list of lines, one substitution per line. At first glance this may look long-winded and inefficient, and perhaps it is, but practical experience has shown me that when purifying and standardizing strange texts this is often a very good strategy. Obviously indiscriminately whacking all punctuation is coming on too strong, because sometimes non-word characters wind their way into proper words. The rules to purify the word data can get rather complicated: take for example the apostrophe. We want to remove the \<'s> possessive ending, but want to preserve contractions like \<wasn't> or names like <O'Shea>. This last gotcha might not present itself immediately and require a fine-tuning adjustment, so we might want to be able to easily go in and recast the substitution as

    s/'s / /g

or such, matching at the end of a word only. But wait! What about <let's> ? Oh, we're probably not going to look at these small words anyway, let it get munged. These are the kind of endless case-dependent decisions that pepper this sort of work, and there's always one more. Setting up long lists of easily modified transformations can definitely help keep track of what's being changed.

```perl
    while (my $line = <$fh>) {
        chomp $line;
        $line =~ s/\.//g;
        $line =~ s/\"//g;
        $line =~ s/\(//g;
        $line =~ s/\)//g;
        $line =~ s/\,//g;
        $line =~ s/\'s//g;
        $line =~ s/\-\-/ /g;
        foreach my $word (split /\s/, $line) {
            $words{$word} += 1;
        }
    }
```

At the other end of the spectrum many people absorbed the list of struck out characters and sequences into the list of `split` separators. Although not as easily extensible as Mohammad's version, this did serve to remove a few steps, leading to some very compact forms.

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/abigail/perl/ch-2.pl)

Abigail takes this road, here shown in its simplicity:

```perl
#
# Split into words and count them.
#
my %words;
$words {$_} ++ for split /(?:[\s."(),]|'s|--)+/;

#
# Bucket them
#
my %buckets;
while (my ($word, $count) = each %words) {
    push @{$buckets {$count}} => $word;
}
```

Even more compact is the example of this woven into the solution by

[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/perlboy1967/perl/ch-2.pl)

```perl
map { $input{$_}++ } grep /../, split(/[^A-Za-z]+/, $input);
foreach my $count (sort { $a <=> $b } uniq(values %input)) {
  printf "$count %s\n", join(' ', sort grep { $input{$_} == $count } keys %input);
}
```

There's a lot going on here in a very few lines, but in the first the input is a string when it goes in and a frequency hash when it comes out.

I'm of two minds on the subject of using `map` in void context, utilized solely for some function side-effects in the loop. Myself, I would use a `for` construct as being more clearly directed at the looping aspect, rather than piecewise modifying the elements in the list, but as far as I can tell the jury is still out on this one. I have found functional purists can get quite touchy about side-effects, but sometimes they can be a quite valuable tool. YMMV.

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/e-choroba/perl/ch-2.pl)

Also gives us a very compact version using the common-separator `split`:

```perl
while (<>) {
    ++$freq{$_} for split ' ', s/'s|--|[."(),]+/ /gr;
}

my $previous = 0;
my $eol = "";
for my $word (sort { $freq{$a} <=> $freq{$b} || $a cmp $b } keys %freq) {
    print "$eol", $previous = $freq{$word} unless $freq{$word} == $previous;
    $eol = "\n";
    print " $word";
}
```


### the FREQUENCY hash

Once the text has been split into a list of words, a frequency hash is constructed by iterating over the standardized words, using an auto-incrementing function to keep count of occurrences. Sometimes the standardization preprocessing was applied to the words *after* the split, as demonstrated by

[**Myoungjin Jeon**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/jeongoon/perl/ch-2.pl)

```perl
{
    local $/ = undef;
    @words = split /\s/, <$fh>;
};

# filtering and add to bag
my %prada;
for my $w (@words) {
    $w =~ s/'s|--|[^a-zA-Z_0-9\-]//g;
    ++$prada{$w};
}

# invert frequency and word
my %evilWares;
for my $pair ( pairs %prada ) {
    push @{$evilWares{$pair->value}}, $pair->key;
}
```


Here, let me pull the frequency counts out of my bag of evil wares... Jeon's a funny guy.

### INVERTING the frequency data, and OUTPUT

This step found the most variants, most notably with some people incorporating the output report phase directly into the work. The most common way to go about the inversion was to create a hash of with frequencies as keys and array references as values, containing a list of all applicable words.

[**Bob Lied**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/bob-lied/perl/ch-2.pl)
demonstrates the basic form:

```perl
my %countList;
for my $word ( keys %counts )
{
    push @{$countList{ $counts{$word} }}, $word;
}
```

As we're iterating through the keys and values of a hash, this naturally lends itself to use of `each` to grab the pair with one go. In

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/colin-crain/perl/ch-2.pl)
I pull out this technique:

```perl
while (my ($key, $value) = each %bag) {
    push $freq{$value}->@*, $key;
}
```

I think it makes things a little cleaner. I like clean code. Several other people came to the same conclusion. `each` is pretty-much super handy if you remember to use it.

These methods are simple, direct and to the point. But if the word list is sorted, there's no pressing need to keep the frequency values as arrays, and instead we can concatenate the words found immediately into a string list for output.

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/cheok-yin-fung/perl/ch-2.pl)
gives an example of this style:

```perl
foreach my $word (sort keys %wordcount) {
    $wordfreq{$wordcount{$word}} .= " $word";
}
```

Now the words are ready to for output.

The next step is to get rid of the hash altogether. Several people observed that the frequencies are positive integers, and can be directly used as indices in an output array. Although this array could potentially be quite sparse, e.g. "All work and no play makes Jack a dull boy" from *The Shining*, this result is (fortunately for us) rather unlikely.

[**Jose Luis**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/jluis/perl/ch-2.pl)
takes this approach, leading to the construction of an array of string lists indexed by frequency:

```perl
for my $key (sort keys %freq) {
    $results[$freq{$key}] = "$freq{$key}" unless defined $results[$freq{$key}];
    $results[$freq{$key}] .= " $key";
}

defined($_) and say for @results;
```

By starting the instantation of a new string with the value of the index before proceeding, the string already contains the number followed by a list of all the words that come up at that frequency. All that is left is to print any defined elements of the array.

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/james-smith/perl/ch-2.pl) does this as well.

Finally,

[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/walt-mankowski/perl/ch-2.pl)

combines the frequency inversion and printing steps by first sorting his frequency hash keys on value and then as strings, printing a new left-hand column with the count every time the frequency changes. This prints out all of the 1-count words, then all of the 2-count words, etc. It's elegant work.

```perl
my $last = 0;
for my $k (sort { $h{$a} <=> $h{$b} || $a cmp $b } keys %h) {
    if ($h{$k} != $last) {
        print "\n" unless $last == 0;
        print $h{$k};
        $last = $h{$k};
    }
    print " $k";
}
```


### a more FUNCTIONAL approach

The linearity of the logic flow lent itself well to a functional programming pardigm, breaking the problem down into chunks of processing, with a multi-line input text going into the pipeline at one end and a sorted frequency analysis emerging from the other.

[**Julio de Castro**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/juliodcs/perl/ch-2.pl)

```perl
use List::AllUtils qw(reduce uniq);
use Const::Fast;
use experimental 'signatures';

const my $rx_words => qr/
    (?<!\p{L}')            # Don't match if preceded by word + ｢'｣
                           # (avoids matching ｢s｣ in ｢word's｣)
    \p{L}++ (?>-\p{L}+)*   # Match dash-separated words
    (?>'(?!s\b)\p{L}+)?    # It may end with ｢'｣ + word (except for ｢'s｣)
/ix;
const my @words    => read_file('input') =~ m/$rx_words/g;
const my %scores   => %{ +reduce { $a->{$b}++; $a } {}, @words };
const my $add      => sub($h, $w) { push $h->{$scores{$w}}->@*, $w; $h };
const my %inverse  => %{ +reduce { $add->($a, $b) } {}, keys %scores };

printf "$_ %s\n\n", join q( ), sort @{$inverse{$_}} for sort keys %inverse;
```

Here Julio takes the typical logic flow and presents it in a decidedly atypical manner. However close examination will reveal all of the same constructs. The regular expression that snatches out the words at the beginning is perhaps the most foreign, but it's well annotated. I do like that he was able to produce this, although it's extremely special purpose to this specific task. But it does what waas asked, and is commendable work.


[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/alexander-pankoff/perl/ch-2.pl)

Alexander similarly breaks each logical component down into its own subroutine function. It can be difficult to follow the program flow in constructs like this, but this is made easier by careful naming of the functions, allowing a quick read of `run_challenge` to get the idea, followed up by examination of the components to get particulars.

```perl
run_challenge();

sub run_challenge() {
    my ($input_file) = @ARGV;
    my $frequencies_to_words =
      frequency_sort( words( sanitize_input( read_file($input_file) ) ) );
    print_word_frequencies($frequencies_to_words);
}

sub print_word_frequencies($frequencies) {
    say join( ' ', $_, @{ $frequencies->{$_} } )
      for sort { $a <=> $b } keys %{$frequencies};
}

sub frequency_sort(@words) {
    my %word_count;
    $word_count{$_}++ for @words;
    my %frequencies;
    push @{ $frequencies{ $word_count{$_} } }, $_ for sort keys %word_count;

    return \%frequencies;
}

# split the given string into words
sub words($str) {
    return split( /\s+/, $str );
}

# replace illegal chars with whitespace
sub sanitize_input($input) {
    return $input =~ s/[\."\(\),]|--|'s/ /rg;
}

# read the whole file
sub read_file($filename) {
    local $/ = undef;
    open( my $fh, '<', $filename );
    my $out = <$fh>;
    close($fh);
    return $out;
}
```

## the search for a LEXICOGRAPHIC SORT

The directives clearly call for the output to be sorted in lexicographical order. I'm aware that this is the sort of nitpick-y thing that seemingly only bothers me, but the problem is that for the example given, and the default Perl `sort` for that matter, the result is not, no matter how many people incorrectly label it as such, a lexicographic sort. In what dictionary does "B" come before 'a'?

The default `cmp` string sort in Perl does a sort on the characters by ASCII bit value. Thus "0-9" is ordered before "A-Z", which is fine, but all of these come before "a-z", which is not. Fortunately the occasional remaining diacritical marks in the language have seemingly become stylistically optional by the 21st century, but good luck getting "Zoë" to sort before "Zoo".

That last one, the proper placement of accented letters, really is a pain. There *is* a module, `Unicode::Collate` which seems to help navigate that particular perilous coast. But we can at least *pretend* to do things properly by calling

    sort { lc($a) cmp lc($b) }

or, if we want to be more efficient, doing  a full-blown [Schwartzian Transform](https://en.wikipedia.org/wiki/Schwartzian_transform). Although I doubt a simple `lc()` is worth the trouble.

Needless to say almost no one did this. Except me, because I lowercased everything, because that's the way you preprocess a bag-of-words. And

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/james-smith/perl/ch-2.pl)

```perl
sub get_words {
  my $string = shift;
  my $words = {};
  foreach ( grep {$_ }
            map { s{([."\(\),]|--|'s$)}{}msgr }
            $string =~ m{(\S+)}mxg ) {
    $words->{lc $_} ||= [ $_, 0 ];
    $words->{lc $_}[1]++;
  }
  return $words;
}

sub print_words {
  my $struct = shift;
  my @words;
  ## Use array rather than hash as avoids one of the two sorts and
  ## shouldn't be too sparse
  push @{ $words[$_->[1]] }, $_->[0] foreach (values %{$struct});
  foreach ( 0..(@words-1) ) {
    next unless $words[$_];
    print "$_ @{[ sort { lc $a cmp lc $b } @{$words[$_]} ]}\n";
  }
}
```

because that's the way he rolls. Thank you James, well spotted and well done.

## the TYPOGRAPHICAL ERROR

In the example text, which everybody who gave default data ended up using, a classic text-translation error found its way in. In the line

                                             Then the Sharks and Jets plan
    a rumble under the highway--whoever wins gains control of the streets.

the em dash which is typographically and grammatically correct has been replaced with a double hyphen, the standard typewriter formation of yore. But when used as a separator like this, that is, as an em dash, the mark should be itself surrounded by whitespace " -- ", and somehow in the act of copying from whatever original source this was cribbed from that whitespace has been lost. Grammatically, this is intuitive: the hyphen combines words to make longer, compound formations, and as such physically touches the words on either side. The em dash separates out a clause to isolate it and reflect on the previous part of the sentence, so it itself is isolated from those word groups it's separating.

In any case in those scripts that strictly followed the directives and "ignored" the proscribed punctuation by pretending it never existed, this error propagated forward, producing the nonsense word "highwaywhoever". On the other hand, those who translated the punctuation into spaces and split the text on `/\s+/` would never see this lexical monstrosity. As this was an error in the input data it's hard for me to fault people for it's existence, but on the other hand actually reading the output should have notified everyone who caused it. I'll just leave it open for anyone to decide on how this error, once pointed out, applies to them and what they might do to address it. Those brave souls still learning English as a second language are of course forgiven. It's a crazy language, fun and forgiving, but "highwaywhoever" just doesn't work. It doesn't, shall we say, roll off the tongue.

Noticing this brought me back to my first Perl job chasing down transcription errors in document translations. I first fell in love with the power of regular expressions doing the complicated substitution passes that task entailed, cleaning up and standardizing documents from Word or Corel or whatnot from some scientific journal or another, fixing all the myriad things that can go wrong along the way. Then we made portals to put them up on the nascent web and the rest, they say, was history.



## some MODULES that made things HARD TO CLASSIFY, and other THINGS THAT CAUGHT MY EYE

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/athanasius/perl/ch-2.pl)

```perl
    # The text is first edited by replacing trailing 's and _ with spaces, then
    # any remaining apostrophes are converted to underscores. This is done
    # because \w matches the underscore character but not the apostrophe: which
    # makes it easy to identify "words" using the zero-width assertion \b that
    # matches on word boundaries (\w\W and \W\w). Note: It is not necessary to
    # remove the other non-word characters [."(),] from the text, as these are
    # automatically excluded by the match logic of the regex.

    $text =~ s{ 's \b }{ }gx;
    $text =~ s{   _   }{ }gx;
    $text =~ s{   '   }{_}gx;

    # (2) Create a dictionary of words (keys) and their frequencies (values)

    my %by_word;

    for my $word ($text =~ m{ \b (\w+?) \b }gx)
    {
        # Once a word has been identified, its apostrophes (if any) are
        # restored, then it is recorded in the dictionary

        $word =~ s{ _ }{'}gx;

        ++$by_word{ $word };
    }
```

Athanasius uses a regex to directly match out words from the text, obviating the need for preprocessing as the chaff is merely left behind. Its a nice approach, combining the input and preprocessing stages into one. Have a look to
[**Julio de Castro**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/juliodcs/perl/ch-2.pl),
above, for a similar technique. I cannot decide whose I like better.




[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/jo-37/perl/ch-2.pl)

Using the functions `pairkeys` and `pairgrep` from `List::Util`,
Jorg gives us a concise, well documented work of art that demands a spotlight of its own:

```perl
# Use the input data provided by the DATA filehandle if no file name
# is given.
*ARGV = *DATA{IO} unless @ARGV;

# Override some defaults: line endings, field separator and slurp mode
local ($\, $,, $/) = ("\n\n", ' ');

# Build a hash of word/frequency pairs from input data.  Incorporate
# specified exceptions into the split expression.
my %freq;
$freq{$_}++ foreach split qr{[\."),]*\s+[("]*|--|'s\s+}, <>;

# For each frequency, extract the corresponding words from %freq, sort
# and print them.
# Note: "pairkeys" needs to be protected from being interpreted as a
# comparator sub name by sort.
print $_, sort +(pairkeys pairgrep {$b == $_} %freq)
    foreach uniqnum sort {$a <=> $b} values %freq;
```

The output phase really warrants a close look, inverting the frequency hash in a novel way.


[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-081/pete-houston/perl/ch-2.pl)

Pete follows the natural logic flow in his solution, but gives us the `occurances` function from `List::MoreUtils` to jump over the step of making the intermediate frequency hash. `occurances()` takes a list and immediately returns a hash of frequencies as keys associated to arrays populated with a list of items. This is of course exactly what we want done, and it does the job well.

```perl
while (<$fh>) {
    s/[."(),]|'s|--//g;
    push @words, split;
}

my @occ = occurrences (@words);
for my $i (0 .. $#occ) {
    print "$i: " . join (' ', sort @{$occ[$i]}) . "\n" if defined $occ[$i];
}
```


---

<br>

# BLOGS {#PWC080BLOGS}

***

**That’s it for me this week, people!
Unbroken by the torrential influx, I have maintained my bearings and continue forward into the unknown. Waiting for the perfect wave, I am,
--your humble servant**

## But if Your *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC081BLOGS}
## then *RUN* *(dont walk!)* to the *WATERING HOLE*
## and *READ* these *BLOG* *LINKS*:

***( don't think, trust your training, you're in the zone, just do it ... )***


**Adam Russell**

 * [RabbitFarm - Perl Weekly Challenge 081](http://www.rabbitfarm.com/cgi-bin/blosxom/2020/10/11#pwc081) ( *Perl* )

**Andinus**

 * [Challenge 081 - Task 1 - Common Base String](https://andinus.tilde.institute/pwc/challenge-081/#orgec70af1) ( *Perl* )
 * [Challenge 081 - Task 2 - Frequency Sort](https://andinus.tilde.institute/pwc/challenge-081/#orgea1463f) ( *Perl* )

**Arne Sommer**

 * [Common Frequency with Raku](https://raku-musings.com/common-frequency.html) ( *Raku* )

**Colin Crain**

 * [Finding Common Basis with a Bag of Sharks &#8211; Programming Excursions in Perl and Raku](https://colincrain.wordpress.com/2020/10/10/finding-common-basis-with-a-bag-of-sharks/) ( *Perl & Raku* )

**Flavio Poletti**

 * [PWC081 - Common Base String](https://github.polettix.it/ETOOBUSY/2020/10/08/pwc081-common-base-string/) ( *Perl* )
 * [PWC081 - Frequency Sort](https://github.polettix.it/ETOOBUSY/2020/10/09/pwc081-frequency-sort/) ( *Perl* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 81: Frequency Sort](http://blogs.perl.org/users/laurent_r/2020/10/perl-weekly-challenge-81-frequency-sort.html) ( *Perl & Raku* )

**Mohammad S Anwar**

 * [BLOG: The Weekly Challenge #081](https://perlweeklychallenge.org/blog/weekly-challenge-081/) ( *Perl & Raku* )

**Myoungjin Jeon**

 * [Weekly Challenge #081 Task #1 :: Raku](https://dev.to/jeongoon/weekly-challenge-081-task-1-422l) ( *Raku* )
 * [Weekly Challenge #081 Task #2 :: Raku](https://dev.to/jeongoon/weekly-challenge-081-task-2-1lbj) ( *Raku* )

**Roger Bell_West**

 * [RogerBW&#39;s Blog: Perl Weekly Challenge 81: Base Frequency](https://blog.firedrake.org/archive/2020/10/Perl_Weekly_Challenge_81__Base_Frequency.html) ( *Perl & Raku* )

**Simon Green**

 * [The Weekly Challenge 081](https://dev.to/simongreennet/the-weekly-challenge-081-1jje) ( *Perl* )

**Walt Mankowski**

 * [Perl Weekly Challenge #81 - Walt Mankowski](http://www.mawode.com/blog/blog/2020/10/10/perl-weekly-challenge-81/) ( *Perl* )
