
---
author:       Colin Crain
date:         2021-03-29T00:00:00
description:  "Colin Crain › Perl Weekly Review #103"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #103"
image:        images/blog/p5-review-challenge-103.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-102/).* )

Welcome to the Perl review for **Week 103** of the Weekly Challenge! Here we will take the time to discuss the  submissions offered by the team, factor out the common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

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

**<big>For context</big>**  before we begin, you may wish to revisit either of the pages for the [**original tasks**](/blog/perl-weekly-challenge-103/) or the summary [**recap**](/blog/recap-challenge-103/) of the challenge. But don't worry, the challenges themselves will be briefly summarized, presented below as we progress from task by task. Oh, and one more thing before we get started:

### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

**So finally, without further ado...**

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC103TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC103TASK2)   &nbsp;  &nbsp;  &nbsp;       •   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC103BLOGS)    &nbsp;  &nbsp;  &nbsp;   	•

---

# TASK #1 › Chinese Zodiac {#PWC103TASK1}

*Submitted by: Mohammad S Anwar*

You are given a year $year.

Write a script to determine the Chinese Zodiac for the given year $year. Please check out wikipage for more information about it.

The animal cycle: Rat, Ox, Tiger, Rabbit, Dragon, Snake, Horse, Goat, Monkey, Rooster, Dog, Pig.

The element cycle: Wood, Fire, Earth, Metal, Water.

**Example 1:**

    Input: 2017
    Output: Fire Rooster

**Example 2:**

    Input: 1938
    Output: Earth Tiger


## about the solutions

There were 21 working submissions for the first task this past week.

The Chinese Calendar system is based around a sexagenary year cycle, or 60 years. Within that cycle each year is denoted by a specific combination of one of twelve animals, five elements and two energies. Because of the twelve animal signs it is commonly referred to as a "zodiac", but there the correspondence ends. One might consider a link through the 12-month lunar cycle, but the Chinese system is in fact an approximation of the 12-year Jovian cycle and the numeric resemblance is better regarded as coincidence, or perhaps better labeled synchronicity.

Twelve is a kind of a go-to number in all things cosmological and astronomical, and the patterning of months into years and beyond certainly falls into that territory. More connections can be made through the Babylonian sexagenary numeral system, and of note the Babylonians originated  the 30° celestial sectioning that later evolved into the western zodiac. This repeated confluence of tens and twelves across the world is quite remarkable.

We'll stay clear of the metaphysical attributions of these three categorizations as being well outside our purview, and simply list that there are twelve animals repeated one per year in sequence, five elements that cycle in two-year intervals, and two principle energies, "yin" and "yang", that define any given year.

So we have cycles of length 12, 2 and either 5 or 10 depending on how you look at it. Cycling number sequences take the mind immediately to modulo mathematics, and with only a few exceptions this formed a basis for the solutions submitted.

## MODULO MATHS
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-103/abigail/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-103/athanasius/perl/ch-1.pl),
[**Bob Lied**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-103/bob-lied/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-103/cheok-yin-fung/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-103/colin-crain/perl/ch-1.pl),
[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-103/cristian-heredia/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-103/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-103/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-103/polettix/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-103/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-103/jo-37/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-103/lubos-kolouch/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-103/perlboy1967/perl/ch-1.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-103/paulo-custodio/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-103/pete-houston/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-103/sgreen/perl/ch-1.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-103/stuart-little/perl/ch-1.pl), and
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-103/ulrich-rieke/perl/ch-1.pl)

The basic strategy was to create arrays of each of the aspects, then access these arrays by index, computed by applying modulo division to the year. Either the date or the array is adjusted to correct any alignment issues.

So how many different ways did folks come up with to perform these tasks? Quite a few, as it were.

[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-103/pete-houston/perl/ch-1.pl)

Pete is in and out in a short 6 lines of code. However it's quite clear what's going on: two arrays are established, and referenced by placing the year through modulo arithmetic to produce an index value. The array indices doen't correspond to the  correct values? Easy, just cycle the arrays until the proper synchronization is achieved.

```perl
    my @elements = qw/Metal Water Wood Fire Earth/;
    my @animals  = qw/Monkey Rooster Dog Pig Rat Ox Tiger Rabbit Dragon Snake Horse Goat/;
    my $year     = $ARGV[0];
    my $element  = $elements[int ($year / 2) % 5];
    my $animal   = $animals[$year % 12];

    print "$element $animal\n";
```

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-103/sgreen/perl/ch-1.pl)

Simon gives us another version of this form, with metal monkeys versus wooden rats leading the charge. Phrased like that it sounds like a steampunk version of [Redwall](https://en.wikipedia.org/wiki/Redwall).

```perl
    my @zodiacs  = (qw(Monkey Rooster Dog Pig Rat Ox Tiger Rabbit Dragon Snake Horse Goat));
    my @elements = (qw(Metal Water Wood Fire Earth));

    # State the zodiac sign
    say $elements[ int( $year / 2 ) % 5 ], ' ', $zodiacs[ $year % 12 ];
```


[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-103/paulo-custodio/perl/ch-1.pl)

Paulo makes the alignment a little differently, subtracting 1924 from the input and applying the modulo math to that number instead. The animals are listed in their customary order, but the elements are doubled in the list, avoiding the messiness of deriving a cycle of five two-year periods.

```perl
    my @animals  = qw(Rat Ox Tiger Rabbit Dragon Snake Horse Goat Monkey Rooster Dog Pig);
    my @elements = qw(Wood Wood Fire Fire Earth Earth Metal Metal Water Water);

    my($year) = @ARGV || 1066;
    defined $year or $year = 1900+ (localtime(time))[5];
    my $num_years = $year-1924;
    my $element = $num_years % scalar(@elements);
    my $animal = $num_years % scalar(@animals);
```

[**Bob Lied**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-103/bob-lied/perl/ch-1.pl)

Bob follows the same method, but makes it clearer that the 1924 is not just a magic number, but any year where the sexagenary year cycle restarts. 1984 can be substituted, or 2044 for that matter. The absolute recalculated value is not important, rather the relative relationship that number has to the 60-year cycle.

```perl
    my @AnimalCycle = qw( Rat Ox Tiger Rabbit Dragon Snake Horse Goat Monkey Rooster Dog Pig );
    my @ElementCycle = qw( Wood Wood Fire Fire Earth Earth Metal Metal Water Water );

    my $BaseYear = 1924;

    my $year = shift;
    die "Usage: $0 YEAR\n" unless $year;

    my $relativeYear = $year - $BaseYear;

    my  $animal = $relativeYear % @AnimalCycle;
    my $element = $relativeYear % @ElementCycle;
```

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-103/athanasius/perl/ch-1.pl)

To demonstrate this fact, here we have Athanasius' solution, where the monk uses the year 1984 as a starting year for the cycle. A module, `Const::Fast`, is used to implement the constants.

```perl
    use Const::Fast;

    const my @ELEMENTS   => qw( Wood  Fire Earth  Metal   Water );
    const my @ANIMALS    => qw( Rat   Ox   Tiger  Rabbit  Dragon Snake
                                Horse Goat Monkey Rooster Dog    Pig );
    const my $START_YEAR => 1984;

    my $el_index = int( ($year - $START_YEAR) / 2 ) % scalar @ELEMENTS;
    my $an_index =      ($year - $START_YEAR)       % scalar @ANIMALS;

    printf "Output: %s %s\n", $ELEMENTS[ $el_index ], $ANIMALS[ $an_index ];


```

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-103/cheok-yin-fung/perl/ch-1.pl)

Alternately, the offset adjustments can be made directly to the indices, here demonstrated by CY.

```perl
    my @animal = qw/Rat Ox Tiger Rabbit Dragon Snake
                Horse Goat Monkey Rooster Dog Pig/;

    my @element = qw/Wood Fire Earth Metal Water/;

    print "$element[ ( ($yr-4) % 10) / 2 ] $animal[$yr % 12 - 4]\n";

```

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-103/e-choroba/perl/ch-1.pl)

Choroba arrives at the same place from the opposite direction in his example. As the cycles are different lengths the offsets reflect this.

```perl
    my %START = (ANIMAL => 8, ELEMENT => 6);

    sub chinese_zodiac {
        my ($year) = @_;
        return join ' ', $ELEMENTS[ ($year + $START{ELEMENT}) / 2 %  5 ],
                         $ANIMALS[  ($year + $START{ANIMAL})      % 12 ]
    }
```

[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-103/duncan-c-white/perl/ch-1.pl)

Duncan has given us a singular manner of synchronizing the cycles using a pair of C-style `for` loops. The enumerations are made in the traditional order, and the "element" list are doubled to make a length of 10.

```perl
    my @animal = qw(Rat Ox Tiger Rabbit Dragon Snake Horse
                    Goat Monkey Rooster Dog Pig);
    my @element = qw(Wood Wood Fire Fire Earth Earth Metal Metal Water Water);

    # the whole cycle lasts 60 years.. so find start of cycle before $year
    for( ; $year < $y; $y -= 60 )
    {
    }

    for( ; $year > $y; $y++ )
    {
        $a++;
        $a %= @animal;
        $e++;
        $e %= @element;
    }
```

[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-103/cristian-heredia/perl/ch-1.pl)

Finally, Christina prompts an interesting semantic situation by doing modulo math without using the modulo operator. However it's done, though, the mathematical basis is the same.

```perl
    sub calculateAnimal {
        for ($i = 1924; $i<$year; $i++){
            if ($counter == 11){
                $counter = 0;
            }
            else {
                $counter++;
            }
        }
        print "$animals[$counter]";
    }
```


### YIN AND YANG
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-103/abigail/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-103/colin-crain/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-103/polettix/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-103/james-smith/perl/ch-1.pl), and
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-103/roger-bell-west/perl/ch-1.pl)

It's interesting to note that the aspects requested, the element and the animal sign, do not alone uniquely define a given year in the sexagenary cycle. To assign the five elements across the ten "heavenly stems" each element is repeated across two years. A further qualifier is made, that of a guiding energy, either "yin" or "yang". Together these aspects make up a attribute known as the "heavenly stem", of 10 variations.

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-103/abigail/perl/ch-1.pl)

Abigail constructs three arrays, then uses a single `map` to neatly cycle through each divided modulo by the length of that array. Adding the yin/yang attribute is as simple as adding an additional array. The arrays have been offset to line up correctly, requiring no further adjustment to the years.

```perl
    my $yin_yang         = [qw [Yang Yin]];
    my $heavenly_stems   = [map {($_) x 2} qw [Metal Water Wood Fire Earth]];
    my $earthly_branches = [qw [Monkey  Rooster  Dog    Pig   Rat    Ox
                                Tiger   Rabbit   Dragon Snake Horse  Goat]];

    while (my $year = <>) {
        $, = " ";
        say map {$$_ [$year % @$_]} $yin_yang, $heavenly_stems, $earthly_branches;
    }
```

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-103/james-smith/perl/ch-1.pl)

James, known for his brevity in code (but not in comments, a good combination), gives us another quite compact method, inserting the mod division directly into the positional index.

```perl
    ## Choose the order based on what would happen in years "0","60" -
    ## this is "Yang Metal Monkey", so we make them the first entry in
    ## the list - saves us doing a "shift" to get the right modulus key.

    ## We have added in the last "classifier" - Yang/Yin which split the
    ## element entry in two.

    sub year_name {
      return join q( ),
        qw( Yang   Yin                             )[  $_[0]    %  2 ],
        qw( Metal  Water   Wood   Fire  Earth      )[ ($_[0]/2) %  5 ],
        qw( Monkey Rooster Dog    Pig   Rat   Ox
            Tiger  Rabbit  Dragon Snake Horse Goat )[  $_[0]    % 12 ];
    }
```





### BCE, or  BEFORE the COMMON ERA
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-103/colin-crain/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-103/polettix/perl/ch-1.pl), and
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-103/roger-bell-west/perl/ch-1.pl)

The big problem with converting Gregorian calendar dates before 0 is, simply put, that there is no year 0. This discontinuity throws a wrench on the works when converting to sexagenary years, and is commonly accommodated using slightly different algorithm, adjusting to the proper cycle from the other direction.

All in all, not many submissions provided this capability.

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-103/colin-crain/perl/ch-1.pl)

For my own solution I broke the problem down systematically and methodically, first creating a function to turn a Gregorian year into a point on the sexagenary cycle, then making a trio of functions to convert that cycle index into the correct animal, element and energy aspects. By taking the additional step to make the sexagenary conversion, it was relatively straightforward to accommodate dates before the common era, parsing out the era indicators with a regular expression. And more so, once you're in there looking for "BC", it's not much more work to generalize the search into a variety of other conventions, such as BCE, or adding periods between the initials.

```perl
    ($year, $era) = $year =~ /^(\d+)\s?([ABC]?)/i;
    if ( not $era or $era eq 'A' or $era eq 'C' ) {
        return 58 if $year == 1;
        return 59 if $year == 2;
        return 0  if $year == 3;
        return ($year - 3) % 60;
    }
    else {
        return 60 - abs($year+2) % 60;
    }
```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-103/polettix/perl/ch-1.pl)

Flavio starts with a rather complex regular expression to determine whether a pre-modern era date is detected, and on the basis of this one of two sexagenary equations is called to convert the year. Once this is done the correct array indices can be found using modulo division.

```perl
    sub chinese_zodiac ($year) {
       my ($s, $y, $acbc) = $year =~ m{
          \A \s*
          (-?) \s*
          ([1-9]\d*) \s*
          ((?:ad|bc)?)
          \s* \z
       }imxs;
       die "invalid input date '$year'\n"
          if (! defined $y) || ($s eq '-' && length $acbc);
       $year = $s eq '-' || lc($acbc) eq 'bc' ? -$y : $y;
       my $r = $year > 0 ? (($year + 56) % 60) : 59 - ((2 - $year) % 60);
       my $yin_yang = (qw< Yang Yin >)[$r % 2];
       my $element  = (qw< Wood Fire Earth Metal Water >)[int($r / 2) % 5];
       my $animal   = (qw< Rat Ox Tiger Rabbit Dragon Snake
          Horse Goat Monkey Rooster Dog Pig >)[$r % 12];
       return ($yin_yang, $element, $animal);
    }
```


## reach for a MODULE, or THREE
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-103/dave-jacoby/perl/ch-1.pl)

>Do Not Write Your Own Date and Time Manipulation Code!
> — [Dave Rolsky](https://presentations.houseabsolute.com/a-date-with-perl/#3)

Words to live by.

>I love it when a plan comes together! (chomps cigar)
> — John "Hannibal" Smith, *The A-Team*

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-103/dave-jacoby/perl/ch-1.pl)

Dave begins his submission with the first quote above, which sums up a very real truth. He then makes the logical connection to go, in his words, with the "mercenary solution", being the loose basis for the second quote. Much like rolling your own cryptography, there are some things sensibly left to those who have already spent great efforts in getting it all correct. Since the release of Perl 5 this is the way. Time to bring in the pros from Dover.

To this end, Dave sought out and installed [`DateTime::Calendar::Chinese`](https://metacpan.org/pod/DateTime::Calendar::Chinese). This in turn depends on [`DateTime::Astro`](https://metacpan.org/pod/DateTime::Astro) for astronomical calendar calculations, which itself, because the complexity of astronomical calculations is, well, astronomical, depends of installing the GNU multiple-precision floating-point computation library, or [`MPFR`](https://www.mpfr.org). If I'm to understand correctly the MPFR is all about getting significant digits right and from that estabishing  correct rounding. So that's a big deal.

The Chinese calendar module returns aspects of a given Chinese year, constructed from a DateTime object. The Chinese aspects are not, however, the animal and elemental derivatives that we're looking at in this task, but rather the combinations of the 10-member list of "heavenly stems" and 12 of "Earthly branches". The "heavenly stems" do have an elemental portion repeated twice, which is where that connects. The stems, though, are reported in their Chinese names, rendered in Pinyin. In short, a translation table is required:

```perl
    my %elements = (
        Jia3  => 'Wood',
        Yi3   => 'Wood',
        Bing3 => 'Fire',
        Ding1 => 'Fire',
        Ji3   => 'Earth',
        ... etc
```

Here is the part where he interacts with the module:

```perl
    sub chinese_zodiac ( $greg_year ) {

        my $dt = DateTime->now();
        $dt->set_year($greg_year);
        my $chdt = DateTime::Calendar::Chinese->from_object( object => $dt );
        $chdt->set_time_zone("Asia/Hong_Kong");

        my $animal  = ucfirst $chdt->zodiac_animal;
        my $branch  = ucfirst $chdt->terrestrial_branch_py;
        my $stem    = ucfirst $chdt->celestial_stem_py;
        my $name    = ucfirst $chdt->year_name_py;
        my $element = translate_element($stem);
        return $greg_year, $animal, $branch, $stem, $name, $element;
    }
```


## If you find no one to support you on the spiritual path, WALK ALONE
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-103/jo-37/perl/ch-1.pl) and
[**Lance Wicks**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-103/lance-wicks/perl/ch-1.pl)

***"Obstacles don’t block the path, they are the path."***

[**Lance Wicks**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-103/lance-wicks/perl/ch-1.pl)

Lance provides us with a uniquely complete and structurally thorough solution in his [`Zodiac.pm`](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-103/lance-wicks/perl/lib/Zodiac.pm) module. He first generates a complete lookup table for entire cycle, indexed 1-60 against their respective elemental and animal characteristics. He then converts the given year into its sexagenary equivalent before returning the lookup value.

The table is constructed iteratively, first cycling through the elements, then appending the animals:

```perl
    my %table;
    for ( my $i = 1; $i <= 61; $i = $i + 2 ) {
        $table{$i} = $elements[$elem_key];
        $table{ $i + 1 } = $elements[$elem_key];

        $elem_key++;
        $elem_key = 0 if $elem_key > 4;
    }

    my $animal_key = 0;
    for ( my $i = 1; $i <= 61; $i++ ) {
        $table{$i} .= ' ' . $animals[$animal_key];

        $animal_key++;
        $animal_key = 0 if $animal_key > 11;
    }
```

For the conversion to the sexagenary year he has constructed an algorithm:

```perl
    sub sign_from_year {
        my ( $self, $year ) = @_;

        my $table = _build_zodiac_table();
        my $step1 = $year - 3;
        my $step2 = int $step1 / 60;
        my $step3 = $step1 - ( 60 * $step2 );

        return $table->{$step3};
    }
```

With these steps done requesting the zodiac data is as simple as doing a hash lookup.

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-103/jo-37/perl/ch-1.pl)

Jorg uses `pack` to compress his array data into a tight bundle of fun. Much like my rabbit, this bundle is compact, furry, energetic and more than a little terrifying. Ok maybe not furry. The rest stands.

The whole works:

```perl
    say "@{[ch_zod(shift)]}";

    {
        my (@cz, @l);

        BEGIN {
            @cz = map [map [unpack '(A2)*'], unpack '(A2/A*)*'], unpack '(A4/A*)*',
                '00080632658900561012041900111022001904170822141403080508170410' .
                '04001719070134121214131004241417141418190417060314060615080606' .
                '17001904142310190806041712170001010819120317000614131018130010' .
                '041007141718040806140019';
            @l = sub {map chr($_[0] + $_), $_[1] .. $_[2]}->($cz[0][0]->@*);
        }

        sub ch_zod ($y) {
            local $" = '';

            pairmap {"\u@l[$cz[$a][$b]->@*]"} 1, ($y % 10)/2, 2, $y % 12;
        }
    }
```

There is a ransom note attached:

>"The string" consists of three parts of the form llllxxxx... with llll
as the part's length and xxxx as the content.  Each part has the form
llyyyy... with ll as the length and yyyy as the content for a variable
number of sub parts.  Finally each sub part is split into 2-digit
decimal numbers.
>* Part #0 has one sub part containing the decimal ASCII code for ' ' and
  the offsets of 'a' and 'y' from ' ', thus keeping all of them at two
  digits.
>* Part #1 has five sub parts containing the offsets of the elements'
  characters from 'a'.
>* Part #2 has twelve sub parts containing the offsets of the animals'
  characters from 'a'.
>Part #1 and #2 can be generated by [ch-1a.pl](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-103/jo-37/perl/ch-1a.pl).  A three-dimensional array
@cz is build from these parts where the first index selects
alphabet/element/animal and the second index the item within this
category.  The letters of the alphabet are gathered in the array @l.

>The "chinese zodiac" sub assembles the year's element and animal as
title cased array slices from the letters.

Well, that's certainly a path.

---

# TASK #2 › What's playing? {#PWC103TASK2}

*Submitted by: Albert Croft*

Working from home, you decided that on occasion you wanted some background
noise while working. You threw together a network streamer to continuously loop
through the files and launched it in a tmux (or screen) session, giving it a
directory tree of files to play. During the day, you connected an audio player
to the stream, listening through the workday, closing it when done.

For weeks you connect to the stream daily, slowly noticing a gradual drift of
the media. After several weeks, you take vacation. When you return, you are
pleasantly surprised to find the streamer still running. Before connecting,
however, if you consider the puzzle of determining which track is playing.

After looking at a few modules to read info regarding the media, a quick bit of
coding gave you a file list. The file list is in a simple CSV format, each line
containing two fields: the first the number of milliseconds in length, the
latter the media's title (this example is of several episodes available from
the MercuryTheatre.info):

 1709363,"Les Miserables Episode 1: The Bishop (broadcast date: 1937-07-23)"
 1723781,"Les Miserables Episode 2: Javert (broadcast date: 1937-07-30)"
 1723781,"Les Miserables Episode 3: The Trial (broadcast date: 1937-08-06)"
 1678356,"Les Miserables Episode 4: Cosette (broadcast date: 1937-08-13)"
 1646043,"Les Miserables Episode 5: The Grave (broadcast date: 1937-08-20)"
 1714640,"Les Miserables Episode 6: The Barricade (broadcast date: 1937-08-27)"
 1714640,"Les Miserables Episode 7: Conclusion (broadcast date: 1937-09-03)"

For this script, you can assume to be provided the following information:

* the value of $^T ($BASETIME) of the streamer script,
* the value of time(), and
* a CSV file containing the media to play consisting of the length in
  milliseconds and an identifier for the media (title, filename, or other).

Write a program to output which file is currently playing. For purposes of this
script, you may assume gapless playback, and format the output as you see fit.

Optional: Also display the current position in the media as a time-like value.

Example:

UPDATED: Input parameters as reported by many members [2021-03-08 16:20 UK
TIME].

 Input: 3 command line parameters: start time, current time, file name

     # starttime
     1606134123

     # currenttime
     1614591276

     # filelist.csv

 Output:

     "Les Miserables Episode 1: The Bishop (broadcast date: 1937-07-23)"
     00:10:24


## about the solutions

There were 14 working submissions for the second task this past week. I have say making the call for what works and what doesn't was particularly problematic for me in this challange. I ended up coming up with a standard for a minimum functionality and stuck with that. This unfortunately left a certain number of folks fallen by the wayside.

The challenge text, submitted by a guest author, crafts a little scenario rather than presenting a simple, direct question; this elicited mixed responses. Several people noted that they found it confusing, one noting the narrative was longer than the solution. This was contrasted by others who expressed a liking to having a bit of backstory for context. Myself, I think I fall into both camps. Although I did find a confusing amount of detail, out in the real world, filtering to figure out what needs to be solved is quite often much more difficult than the eventual solution. But as is often true in these narratives, there remain certain loose ends that were pointed out by our members.

The central question, stripped of the narrative trimmings, is actually straightforward: given a time window and a repeating cycle of successive events, each with a fixed and specified duration, find out where in the cycle the end of the window lies and list the event underway at that moment. When reporting we need to provide the file information, but  perhaps we can also provide a relative calculation of minutes and seconds into the event, rather than the internal millisecond time format.

The narrative describes a physical process of playing media files that loop, and this serves as a fine model for finding the solution; if we literally loop through the time durations, reducing the total elapsed time as we go, eventually the total time will be less than a file's duration, and that last incomplete file will be the one still currently playing. Although this overall strategy held true, there were a couple of ways expressed to go about it.

There was also the added detail that the input file list is specified in CSV format, so there's a bit of parsing required there, to get the data into the program. CSV is of course it's own thicket of complications to implement in a truly robust manner, and should realistically always be left to a module. However, because this data set is well structured, and we know the milliseconds will never contain a comma, many people just wrote their own minimal parser using `split`. Word to the wise: just be careful — someone might eventually cue up *Crosby, Stills & Nash*, and Steven Stills might be not like being truncated out.

The third optional sub-task was converting back from milliseconds to a normal human time format, like hours:minutes:seconds or such. Pretty much everyone added this to the output — we'll have a look at those methods as well.

## a TIME to PARSE

CSV is, for such a simple thing, a notorious nest of vipers when trying to get it right, and there isn't universal agreement over even what "right" means. If your data is sanitized of any form of punctuation it's a trivial format with an obvious construction. However once one starts to accommodate first commas in the fields, and then double quotes, and now choosing escape characters, then escaping the escape characters themselves... well, you get the idea. It begins to look less like a standardized format and more like a suggestion.

### using a MODULE
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-103/duncan-c-white/perl/ch-2.pl) and
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-103/e-choroba/perl/ch-2.pl)

Due to an obvious need, the venerable `Text::CSV` module has been kicking around in some form since 1997. In its current version, it automatically defaults to `Text::CSV_XS` if that compiled version is present, so a call to either one is functionally equivalent, the only practical difference being that the base form will defer to its own pure perl version without the XS code.

[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-103/duncan-c-white/perl/ch-2.pl)

`Text::CSV` provides a function, `csv`, which when given an input file path opens it and decodes it into a multidimensional array of rows and columns. This behavior is highly configurable, but the defaults work fine here. Each line of the file is broken down into an array of two elements: a number of milliseconds and a descriptive string.

Duncan provides a nicely commented summary of his processes. First he loads the CSV file into an array, then sums the times. After removing the completed cycles from the overall time with a modulo operation, the playlist array is looped over, reducing the remaining time by the track length until the currently playing song remains.

We will see these steps repeated in one form or another throughout the rest of the other submissions.

```perl
    # aop is an array of [ $duration, $title ] pairs
    my $aop = csv( in => $csvfilename );

    # find whole cycle length: sum of durations
    my $cycleduration = sum( map { $_->[0] } @$aop );

    # bring $t into the current cycle
    $t %= $cycleduration;

    # find which song $t is in..
    my $songno = 0;
    for(;;)
    {
        my $d = $aop->[$songno]->[0];
    last if $t < $d;
        $t -= $d;
        $songno++;
    }
```

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-103/e-choroba/perl/ch-2.pl)

Choroba adds explicit directions to read UTF-8 octets for his playlist file, which is a nice touch. Such things are completely unnecessary until they suddenly become entirely necessary, so it's always good to get out in front of them.

After this the script progresses in much the same line as Duncan's, only Choroba, when looping through the input tracks, adds a running sum to the track time. This allows him to compare the value to the remaining time directly; working up the list of tracks, the first track whose time exceeds the time remaining is still playing.

```perl
    sub what's_playing {
        my ($start_time, $current_time, $file) = @_;
        my @media;

        my $csv = 'Text::CSV_XS'->new({binary => 1, auto_diag => 1});
        open my $in, '<:encoding(UTF-8)', $file or die $!;
        my $sum = 0;
        while (my $row = $csv->getline($in)) {
            $row->[0] += $sum;
            push @media, $row;
            $sum = $row->[0];
        }

        my $i = 0;
        my $time = 1000 * ($current_time - $start_time) % $sum;
        ++$i while $media[$i][0] <= $time;
        return [$media[$i][1],
                format_time($i ? $time - $media[ $i - 1 ][0] : $time)]
    }
```

One loose end I noticed was that the narrative states: "After looking at a few modules to read info regarding the media, a quick bit of coding gave you a file list." If this is the case, what did we just use to *encode* the CSV in the first place? It seems pretty reasonable to me that we'd be using the same undisclosed module. But whatever.

### or ROLLING your OWN
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-103/abigail/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-103/james-smith/perl/ch-2.pl), and
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-103/pete-houston/perl/ch-2.pl)

Because of the specific formatting of the input document, we can be assured the first value, a time in milliseconds, will never contain a comma. This led some submissions to `split` on commas and be done with it. This immediately raises the question of what happens if there's a comma in the file name portion of the record? Although the CSV format is, when you get down to it, let's go with poorly defined, I would argue that in this case no assurance can be expected that any punctuation will or will not fall within the quoted string. We can't just exclude commas. Quotes, maybe this I can see. But not commas. That's too much.

There is a proper perlish way to avoid these troubles, though, that was typically employed: the second form of `split`, with a limit. `split /,/, $string, 2` places an upper bound on the number of array elements produced, so a value of 2 will split the string only once, into two parts, at the first comma found. Any further commas will be ignored.

[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-103/pete-houston/perl/ch-2.pl)

Pete demonstrates the technique. When parsing out the individual lines he takes the opportunity to alter the time data to a reflect the finishing time of the track from the start of the playlist. This change also makes the entire playlist length available as the time from the last track in the list, which can then be used to remove complete loop cycles from the total time. But we're getting ahead of ourselves.

```perl
    sub load_tracks {
        my $fname = shift;
        open my $fh, '<', $fname or die "Cannot open $fname for reading: $!";
        my ($fin, @t) = 0;
        while (my $line = <$fh>) {
            my ($len, $name) = split /,/, $line, 2;
            $fin += $len;
            push @t, { finish => $fin, title => $name };
        }
        return @t;
    }
```

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-103/abigail/perl/ch-2.pl)

Abigail brings to us another use of the "fat comma" borrowed over from its usual haunting ground in hash construction. Remember a fat comma is in the end a comma same as any other, and where one is used the other can substitute. It's all syntactic sugar. Here he uses it in the CSV `split` function:

```perl
    my ($play_time, $title) = split /\s*,\s*/ => $_, 2;
```


This to me is certainly an interesting construction. Whereas I do quite like the look of

```perl
    push @array => $value;
```


and its obvious imperitive directness, I can't say as much for the fat comma given here, especially with the additional argument. The Subject => Object grammatical relationship isn't reenforced by the arrow in the same way so it doesn't quite flow right to my eyes. I'm sorry, you're going to have to sell me on that one. I do like the idea in general of what he's working with here, don't get me wrong. That `push` construction he first brought us  is dynamite. I'm sure there's other operations that can benefit. And hell, maybe I'll come around in the end. I do change my mind sometimes.

In the rest of his well-documented solution he produces his own additions to the list of  loose ends — I think the "gradual drift in the media" is where the author lost me on first reading. I still have no idea what that was about.

Notice how he again takes the time while processing the input file lines to tally the grand total. The comments will give you an advance look at where we're going with this.

```perl
    #
    # I guess the "gradual drift of the media" must play a role
    # somehow, but I can't figure out how. Ignoring it, does
    # gives use the right answer of the single given test case though.
    #

    open my $fh, "<", $file_name or die "open '$file_name': $!";
    my @tracks;
    my $total_time = 0;  # Total time to play the entire set of tracks;
                         # in milliseconds.
    while (<$fh>) {
        my ($play_time, $title) = split /\s*,\s*/ => $_, 2;
        push @tracks => [$play_time => $title];
        $total_time += $play_time;
    }

    #
    # We're not interested in playing full loops.
    #
    $time_diff %= $total_time;

    #
    # Find the current track playing. If $time_diff is less than the
    # play time of the track, this is the track currently playing. If
    # so, print the track name (with quotes, as given in the example --
    # although they don't belong there, as they're from the CSV encoding;
    # for that reason, we won't deescape anything else either). Otherwise
    # (track length is shorter than $time_diff), we subtrack the length
    # of the track from $time_diff, and continue checking the next track.
    #
    foreach my $track (@tracks) {
        if ($time_diff - $$track [0] < 0) {
            use integer;
            $time_diff    =  $time_diff / 1000;  # Back to seconds.
            my $hours     =  $time_diff / 3600;
            my $minutes   = ($time_diff % 3600) / 60;
            my $seconds   = ($time_diff         % 60);
            say $$track [1],
                sprintf ("%02d:%02d:%02d" => $hours, $minutes, $seconds) =~
                        s/^00://r;  # Remove leading '00:' for track
                                    # shorter than an hour.
            last;
        }
        $time_diff -= $$track [0];
    }
```

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-103/james-smith/perl/ch-2.pl)

James gets around the CSV gotchas by splitting on `,"`, which he notes works for this dataset, noting that he could have used `Text::CSV` for a more robust solution. This acknowledgement is enough for me. As I said, I had a tough time making the call between working and not on this task. This should work fine in all but the most pathologically degenerate cases.

```perl
    my $tot_duration  = 0;
    open my $fh, q(<), $filename;
    $tot_duration += $_->[0]
        foreach my @episodes = map { [split m{,?"}] } <$fh>;
    close $fh;
```

As is often the case his notes are much longer than the actual lines of code, and make for interesting reading. Once you've summed the offset from the beginning ot the playlist into each track time finding the current track becomes quite easy.


## an INTERVAL in TIME

As the streaming player does its thing, each track played adds its length to the total time elapsed since the start of the session. Comparing these numbers to a window starting at the start time and ending at the current, we can grow the list of tracks played until the finish for the last track is outside the window. This will be the track still playing.

### LOOPING over the tracks
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-103/dave-jacoby/perl/ch-2.pl)

With a nicely intense Darren Aronofsky *Pi* reference to set the stage, Dave applies his madness to his art. This single-minded obsession is exercised in his willingness to grind away at the total elapsed time, one track after another on repeat, until the remaining milliseconds can no longer complete an entire track. This track is therefore the one still in play,  ∎ **Q.E.D.**


```perl
    while (1) {
        for my $c ( 0 .. -1 + scalar @data ) {
            my $row = $data[$c];
            my ( $mill, $name ) = $row->@*;
            my $length = $mill / 1000;
            my $c2     = $ctime;
            $ctime += $length;
            if ( $ctime >= $endtime && $c2 <= $endtime ) {
                my $time      = int $endtime - $c2;
                my $formatted = join ':',
                    ( int $time / 60 ),
                    ( sprintf '%02d', $time % 60 );
                my @output = ( $row->[1], $formatted );
                return \@output;
            }
        }
    }
```

### CULLING the time using a MODULO operation
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-103/athanasius/perl/ch-2.pl),
[**Bob Lied**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-103/bob-lied/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-103/cheok-yin-fung/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-103/roger-bell-west/perl/ch-2.pl), and
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-103/sgreen/perl/ch-2.pl)

A shortcut to all this looping presented itself, which generally found its way into the rest of the submissions; this was to gather up the length of the complete playlist by summing the track times within it. The original time window in milliseconds is then divided down mod this value, the modulus remaining is the last and most recent incomplete pass through the list. We need only scan through this final section to find the currently playing song.

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-103/roger-bell-west/perl/ch-2.pl)

Roger gives us an example using this technique. In the middle, `$tp`, for time-playlist, sums the first elements from each row in the output from the `csv` function, `@aoa`. The following line performs the modulo operation on the time delta, `$td`.

```perl
    sub wp {
      my $ts=shift;
      my $tn=shift;
      my $csvfile=shift;
      my $td=($tn-$ts)*1000;
      my $aoa=csv(in => $csvfile);
      my $tp=sum(map {$_->[0]} @{$aoa});
      $td %= $tp;
      foreach my $t (@{$aoa}) {
        if ($td < $t->[0]) {
          $td=int($td/1000);
          my $h=int($td/3600);
          my $m=int($td/60) % 60;
          my $s=$td % 60;
          return sprintf('%02d:%02d:%02d %s',$h,$m,$s,$t->[1]);
        } else {
          $td-=$t->[0];
        }
      }
    }
```

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-103/cheok-yin-fung/perl/ch-2.pl)

CY takes a moment to sum her total playlist length using a `for` loop. Once she's computed the total, the current track is the first row whose total elapsed time is greater than the remaining modulus.

```perl
    my $num_of_audio = scalar @{$playlist};
    my @audio_pt = (0);
    for my $i (1 .. $num_of_audio - 1) {
        $audio_pt[$i] = $audio_pt[$i-1] + $playlist->[$i-1]->[0];
    }

    my $tot_audio_length = 0;
    for my $i (0 .. $num_of_audio - 1) {
        $tot_audio_length += $playlist->[$i]->[0];
    }

    my $seek_time = (1000*($current_time-$start_time)) % ($tot_audio_length) ;

    my $ind = 0;
    while ($audio_pt[$ind] <= $seek_time) {$ind++;}
    $ind--;
```

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-103/sgreen/perl/ch-2.pl)

Simon provides us with yet another loose end in the tale:

>Having said that, the output does not factor in any leap seconds between the start and current times.

I swear, you folks make me proud to know you.

```perl
    # Read the CSV file, and find out the total length
    my $tracks          = csv( { in => $file } );
    my $playlist_length = sum( map { $_->[0] } @$tracks );

    # Find out how far through the playlist we are
    my $playlist_position = ( $now - $start ) * 1000 % $playlist_length;

    # Work through the play list to see what song is playing
    while ( my $row = shift @$tracks ) {
        my ( $track_length, $track_name ) = @$row;
        if ( $track_length <= $playlist_position ) {
            $playlist_position -= $track_length;
            next;
        }

        # We are playing this track. Get the number of seconds we are into the track and display this
        my $secs = int( $playlist_position / 1000 );
        say sprintf '%s %02d:%02d:%02d', $track_name, int( $secs / 3_600 ), int( $secs % 3_600 / 60 ), $secs % 60;
        last;
    }

```

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-103/athanasius/perl/ch-2.pl)

The monk adds a comment on his version of taking the modulo operation:

>2. The easiest way to determine the file currently playing is to begin by
   calculating the total time elapsed modulo the total duration of the media
   files. Perl's built-in mod operator "%" does not give the desired result
   when the operands are real (i.e., floating point) numbers, so the subroutine
   POSIX::fmod() is used for this purpose.

Ok, sounds good. There's always more than one way to do it.

```perl
    use POSIX          qw( fmod );
    use enum qw( Length Name Cum_length );

    my $data       = read_data( $file );
    my $total_s    = int( $data->[ $#$data ][ Cum_length ] ) / 1e3;
    my $difference = $current - $start_time;
    my $offset     = int( fmod($difference, $total_s) * 1e3 );
    my $index      = 0;

    for (@$data)
    {
        last if $_->[ Cum_length ] > $offset;
        ++$index;
    }

    $offset -= $data->[ $index - 1 ][ Cum_length ] if $index > 0;
```

[**Bob Lied**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-103/bob-lied/perl/ch-2.pl)

Bob gives us a complete [`Playlist`](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-103/bob-lied/perl/lib/PlayList.pm) module, built, as he puts it, as "an excuse to use Moo". I approve of this reasoning. I'm a big fan of `Moo`, as lighter-weight alternative to `Moose`, and use it as my object framework of choice.

In the `Playlist` object that lies within, Bob has two methods to compute the current track. The first, `_calcLength()` sums a total time for all the track records in the Playlist. In the second, `playingAt()`, the input `$cycletime` length is first reduced by applying a modulo operation with the total playlist length. For the remaining tracks the list is iterated through, with the time reduced by each track along the way, until the remaining time is less than the current track. That is the track that will still be playing.

```perl
    sub _calcLength($self)
    {
        my $len = 0;
        for my $track ( $self->list->@* )
        {
            $len += $track->{time};
        }
        $self->length($len);
    }

    sub playingAt($self, $cycleTime)
    {
        my $len = 0;
        $cycleTime %= $self->length;
        for my $track ( $self->list->@* )
        {
            if ( $cycleTime >= $len && $cycleTime < $len + $track->{time} )
            {
                my $trackTitle = $track->{title};
                my $intoTrack = $cycleTime - $len;

                return ( $trackTitle, $intoTrack, $cycleTime);
            }
            $len += $track->{time};
        }
    }
```


## a TIME to DISPLAY
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-103/polettix/perl/ch-2.pl) and
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-103/perlboy1967/perl/ch-2.pl)


[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-103/polettix/perl/ch-2.pl)

```
    "Les Miserables, Episode 1: The Bishop (broadcast date: 1937-07-23)"
    00:10:24.160

```

To continue further on the subject of loose ends, in his [writeup](https://github.polettix.it/ETOOBUSY/2021/03/11/pwc103-what-s-playing/), Flavio raises a host of quite valid questions to the challenge as stated. For instance, perhaps due to the high precision of the timing, he questions factoring in the time needed to *execute* the streamer script, before the files start playing, and also calls out an unlikely timing correspondance between two sound-files down to the millisecond. I mean, even in our fictional scenario that does raise a red flag. The whole business reminds me of the old punch-line: "Consider a spherical chicken in a vacuum..."

Needless to say, there remains a certain amount of hand-waving over loose ends in the description, and probably, if we know what's good for us, we should just keep quiet about any details not explicitly stated and hope they stay quiet too.

This scrutiny on millisecond accuracy carries over into this final report, adding a final field in the time elapsed in the current track for tractional seconds. After all, punctuality is very important for a good impression.


```perl
   my $ms = $offset % 1000;
   $offset = int($offset / 1000);
   my $s = $offset % 60;
   $offset = int($offset / 60);
   my $m = $offset % 60;
   $offset = int($offset / 60);
   my $current_position = sprintf '%02d:%02d:%02d.%03d', $offset, $m, $s, $ms;

```

[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-103/perlboy1967/perl/ch-2.pl)

```
    start time  : 1606134123 (Mon Nov 23 07:22:03 2020)
    current time: 1614591276 (Mon Mar  1 04:34:36 2021)
    Playing: 'Les Miserables, Episode 1: The Bishop (broadcast date: 1937-07-23)'
    00:10:24

```

It seems Niels always goes out of his way to add a little extra to the output reporting, and this week is no different.

Inside his code there are few interesting techniques we haven't seen elsewhere. The first is his use of a regex to parse the CSV, capturing the first the timecode and then the string inside the double quotes following the comma. For this CSV this works well no matter what punctuation the track name may contain.

```perl
sub readPlayList($) {
  my ($filename) = @_;

  my @playList;
  my $playListDuration = 0;

  if (!open(FH,"< $filename")) {
    die "Can't open '$filename' ($!)";
  } else {
    while (<FH>) {
      s/#.*//;
      if (/^\s*(\d+)\s*,\s*"(.*?)"\s*$/) {
        push(@playList,[$1,$2]);
        $playListDuration += $1;
      }
    }
    close(FH);
  }
  return (\@playList, $playListDuration);
}
```

In the report section there are a few details as well, notably the use of `scalar localtime` to give a quick decoding of the millisecond time code.

```perl
    printf "start time  : %d (%s)\n", $START, scalar localtime($START);
    printf "current time: %d (%s)\n", $CURRENT, scalar localtime($CURRENT);

    my $inNumberS = int($inPlaylistMs / 1000);

    printf "Playing: '%s'\n", $arPlayList->[$i][1];
    printf "%02d:%02d:%02d\n",
          int($inNumberS / 3600),
          int($inNumberS / 60) % 60,
          $inNumberS % 60;
```




## TIMING the BEAT of a DIFFERENT DRUMMER

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-103/jo-37/perl/ch-2.pl)

Jorg, as a general rule, does not do things like everybody else. Cue [The Chocolate Watchband](https://www.youtube.com/watch?v=4-CT605A0p0) next on the playlist.

Which is not to say he likes to do things the hard way. In fact the tools he uses generally make short work of whatever is in front of him.

Today he brings out his CSV module of choice, `Mojo::CSV`. This, when initialized with a file and `slurp`-ed, produces a `Mojo::Collection` object. This in turn has a `reduce` method, which he whips out to to quickly sum the times from the playlist to produce, or rather reduce, a total. Now observe carefully because in the process of this reduction he also adds two new fields to each row, a start time and end time offset. The playlist time can be used to mod the elapsed window in the way we've seen before, and then another method from `Mojo::Collection`, `first()` is used to find the first row whose end time is greater than the remainder from the modulo operation. Finally a `DateTime::Format::Duration` object is used to display the milliseconds into the current track.

See? Easy-peasy.

```perl
    use Mojo::CSV;
    use DateTime::Format::Duration;

    use constant DT_D_FMT => DateTime::Format::Duration->new(
        pattern => '%r', normalize => 1);

    sub playing_now ($start, $now, $file) {
        # Read the playlist from a CSV file or file handle.
        # Presume two fields: track duration in ms and track title.
        my $playlist = Mojo::CSV->new->slurp($file);

        # Calculate the total running time of the playlist and append the
        # individual start and end time offsets to each track along the way.
        my $total = $playlist->reduce(
            sub {
                $b->[2] = $a;           # start
                $b->[3] = $a + $b->[0]; # end
            }, 0);

        # Calculate the time from the recent playlist start till now (in
        # milliseconds).
        my $listtime = ($now - $start) * 1000 % $total;

        # Find the currently running track.
        my $current = $playlist->first(sub {$_->[3] > $listtime});

        # Return the current track's title and running time.
        ($current->[1],
            DT_D_FMT->format_duration_from_deltas(
                seconds => ($listtime - $current->[2]) / 1000));
    }
```













---

# BLOGS {#PWC103BLOGS}

---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, I somehow continue to maintain my bearings. Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC093BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *READ* these *BLOG* *LINKS*:

**( *don't think, trust your training, you're in the zone, just do it ...* )**


**Aaron Smith**

 * [Perl Weekly Challenge 103 - Aaron Smith](https://aaronreidsmith.github.io/blog/perl-weekly-challenge-103/) ( *Raku* )

**Abigail**

 * [Perl Weekly Challenge 103: Chinese Zodiac — Abigail's Programming Blog](https://wp.me/pcxd30-uS) ( *Perl* )
 * [Perl Weekly Challenge 103: What&#8217;s playing? — Abigail's Programming Blog](https://wp.me/pcxd30-v6) ( *Perl* )

**Adam Russell**

 * [The Weekly Challenge 103: Astrology and Audio — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2021/03/14) ( *Perl* )

**Arne Sommer**

 * [Playing the Zodiac with Raku](https://raku-musings.com/playing-zodiac.html) ( *Raku* )

**Dave Jacoby**

 * [The Miserable Metal Ox: Perl Weekly Challenge #103 | Committed to Memory](https://jacoby.github.io/2021/03/09/the-miserable-metal-ox-perl-weekly-challenge-013.html) ( *Perl* )

**Flavio Poletti**

 * [PWC103 - Chinese Zodiac - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/03/10/pwc103-chinese-zodiac/) ( *Perl* )
 * [PWC103 - What's playing? - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/03/11/pwc103-what-s-playing/) ( *Perl* )

**James Smith**

 * [Perl weekly challenge 103 | James Curtis-Smith](http://blogs.perl.org/users/james_curtis-smith/2021/03/perl-weekly-challenge-103.html) ( *Perl* )

**Lance Wicks**

 * [Chinese Zodiac calculation in Perl and Elm - Perl 🐪.🥝 Kiwi](https://perl.kiwi/tales/2021/03/13/chinese-zodiac-calculation-in-perl-and-elm/) ( *Perl* )

**Luca Ferrari**

 * [Perl Weekly Challenge 103: Chinese Calendar and streaming players – Luca Ferrari](https://fluca1978.github.io/2021/03/08/PerlWeeklyChallenge103.html#task1) ( *Raku* )
 * [Perl Weekly Challenge 103: Chinese Calendar and streaming players – Luca Ferrari](https://fluca1978.github.io/2021/03/08/PerlWeeklyChallenge103.html#task2) ( *Raku* )

**Roger Bell_West**

 * [RogerBW's Blog: Perl Weekly Challenge 103: Playing Zodiac](https://blog.firedrake.org/archive/2021/03/Perl_Weekly_Challenge_103__Playing_Zodiac.html) ( *Perl & Raku* )

**Simon Green**

 * [Weekly Challenge 103](https://dev.to/simongreennet/weekly-challenge-103-1hpm) ( *Perl* )


