---
title: "Advent Calendar - December 23, 2025"
date: 2025-12-23T00:00:00+00:00
description: "Advent Calendar - December 23, 2025."
type: post
image: images/blog/2025-12-23.jpg
author: Kaushik Tunuguntla
tags: ["Perl"]
---

## [**Advent Calendar 2025**](/blog/advent-calendar-2025)
### | &nbsp; [**Day 22**](/blog/advent-calendar-2025-12-22) &nbsp; | &nbsp; **Day 23** &nbsp; | &nbsp; [**Day 24**](/blog/advent-calendar-2025-12-24) &nbsp; |
***

The gift is presented by `Kaushik Tunuguntla`. Today he is talking about his solutioni to [**The Weekly Challenge - 312**](/blog/perl-weekly-challenge-312). This is re-produced for `Advent Calendar 2025` from the original [**post**](https://notmondayagain.blogspot.com/2025/03/discs-and-spheres.html).

***

<br>

## Discs and Spheres

The solution to the first challenge in `TWC-312` is pretty simple and straight forward. Even for a perl one liner it's very small. The solution is just `length($str)`. Yup that's it. If there are `3 characters` then it takes `3 seconds`, `4 characters` takes `4 seconds`. That's all. You see, `Anwar` mentioned that it takes 1 sec to print a character but didn't mention in the problem statement how many seconds it takes to move from one character to another character. It must be instantaneous, otherwise it would have been mentioned.

<br>

    Hey what are you doing here?

    Nothing.

    You need to leave now!

    Let me show the perl one liner to....

    OUT!!!

<br>

Sorry guys, ignore him, that was my sarcastic pedantic version talking till now. Let's get into the first challenge. Looking at the problem, I can see why Anwar is really intelligent. He could have used a straight edge etched with the alphabets for the typewriter, but he chose to use a disc. That's more efficient. Suppose I made a typewriter with a straight edge and I had to type the word `"zap"`. After typing `'z'`, I'd have to wait `25 seconds` to move to letter `'a'`. But on this disc, I just have to blink for `1 second` before typing `'a'`. Very clever!

With great power comes great responsibility. Now it is not straight forward to calculate the shortest amount of time it takes to type something. If it was a straight edge, the time taken to move from one letter to another letter is just the difference between them obtained by calculating the absolute difference between their positions on the alphabet. There is no decision to be made. But now, on this disc, there are two possible answers. From `'a'` to `'z'`, I can take the longer route following the natural alphabetical order which takes `25 seconds`, or I can take 1 second to move in the reverse direction. But how to calculate the time taken to travel in the reverse direction?

Look at this picture, the distance from `e` to `j` is `5` in the normal direction or `21` in the reverse direction. You see any common pattern between previous example and this? The sum of distances in normal and reverse direction is always `26`. That's because it is nothing but one full rotation around the disc.

<br>

![Characters Wheel](/images/blog/2025-12-23-img-1.png)

<br>

Making use of this fact, you can calculate the reverse distance and always pick the smaller distance to solve this challenge. Just don't make the mistakes I made like forgetting to chomp after reading input from the terminal or forgetting that the starting point is always from letter 'a'. But they're very easy to debug because perl is an interpreted language, you don't have to wait for long compile times between making your changes and testing the script.

<br>

```perl
#!/usr/bin/perl

use strict;
use warnings;

sub least_distance {
    my ($char1, $char2) = @_;
    my $distance = abs(ord($char1) - ord($char2));
    if ($distance > 13) {
        $distance = 26 - $distance;
    }
    return $distance;
}

print('Enter any string: ');
my $str = <STDIN>;
chomp($str);
$str = lc $str;
my @str_chars = split //, $str;
my $total_distance = length($str);
if (substr($str,0,1) ne 'a') {
    unshift(@str_chars, 'a');
}
foreach my $i (0 .. $#str_chars - 1) {
    my $step_distance = least_distance($str_chars[$i], $str_chars[$i+1]);
    $total_distance += $step_distance;
}
print("Minimum distance: " . $total_distance . "\n");
```

<br>

One personal observation is that the second string `"bza"` that `Anwar` randomly used in this example is the railway station code for the place `Vijayawada` where I grew up in `India`. It used to be called `Bezawada` in the past, so the code stuck as `bza`.

In the second challenge, I'm using our good old friend `"the perl hash"` which does the deduplication work for us here.

I'm iterating through all the ball and box positions to create a hash which has the box as the first level key and ball colour as the second level key. Emphasis on the 'key' part for ball colur. I could have used an array as the second level datastructure and store the ball colours as elements of that array, but I would have to process the array by iterating through it again to check if all the colours are present in it or not. By using a hash, the duplicates are removed and I can check the count of unique keys (balls) per box directly.

I trust Anwar that he did not mischievously add a random coloured ball just to mess around with people. If he did, I would have to check for the presence of all colours in each box instead of depending on the count of unique ball colours in each box. i.e instead of `"scalar keys %{$count{$box}} == 3"` I have to use `"exists $count{$box}{R} and exists $count{$box}{G} and exists $count{$box}{B}"` which is very cumbersome. Alternatively, I could use `"all"` from `List::Util` to shorten it to `"all {exists $count{$box}{$_}} qw(R G B)"`. But I'll stick to the first option here.

<br>

```perl
#!/usr/bin/perl

use strict;
use warnings;

use List::Util qw(all);

print('Enter the balls and boxes string: ');
my $str = <STDIN>;
chomp($str);

my $i=0;
my @balls_boxes = split(//, $str);
my %count;
while($i <= $#balls_boxes) {
    my $ball = $balls_boxes[$i];
    my $box = $balls_boxes[$i+1];
    $count{$box}{$ball} = 1;
    $i += 2;
}
my $count = 0;
foreach my $box (keys %count) {
    if (scalar keys %{$count{$box}} == 3) {
        $count++;
    }
}
print("Number of boxes containing all three colours: $count\n");
```

<br>

![Output](/images/blog/2025-12-23-img-2.png)

<br>

***

If you have any suggestion then please do share with us **<perlweeklychallenge@yahoo.com>**.

| &nbsp; [**Advent Calendar 2025**](/blog/advent-calendar-2025) &nbsp; |
