---
author:       Colin Crain
date:         2022-06-27T00:00:00
description:  "Colin Crain › Perl Weekly Review #165"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #165"
image:        images/blog/p5-review-challenge-165.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-164/).* )

Welcome to the Perl review pages for **Week 165** of The Weekly Challenge! Here we will take the time to discuss the  submissions offered up by the team, factor out some common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

---

### ●︎ Why do we do these challenges?

I suppose any reasonable answer to that question would be from a field as wide ranging and varied as the people who choose to join the team. One thing, though, is clear: it's not a competition, and there are no judges, even if there is a "prize" of sorts. About that -- I think of it more as an honorarium periodically awarded to acknowledge the efforts we make towards this strange goal. So there's no determination to find the *fastest*, or the *shortest*, or even, in some abstract way, the *best* way to go about things, although I'm certain the participants have their own aspirations and personal drives. As Perl is such a wonderfully expressive language, this provides quite a bit of fodder to the core idea of TMTOWTDI, producing a gamut of varied techniques and solutions.

Even the tasks themselves are often open to a certain amount of discretionary interpretation. What we end up with is a situation where each participant is producing something in the manner they find the most interesting or satisfying. Some team members focus on carefully crafted complete applications, thoroughly vetting input data and handling every use case they can think up. Others choose to apply themselves to the logic of the underlying puzzle and making it work in the most elegant way they can. Some eschew modules they would ordinarily reach for, others embrace them, bringing to light wheels perhaps invented years ago that happen to exactly solve the problem in front of them today.

I've been considering this question for some time and have found one binding commonality between all of us out solving these challenges each week, in that however we normally live our lives, the task in front of us more than likely has nothing to do with any of that. And I think this has great value. We all do what we do, in the real world, and hopefully we do it well. The Weekly Challenge provides us with an opportunity to do something germane to that life yet distinctly different; if we only do the things we already know how to do then we will only do the same things over and over. This is where the "challenge" aspect comes into play.

So we can consider The Weekly Challenge as providing a problem space outside of our comfort zone, as far out from that comfort as we wish to take things. From those reaches we can gather and learn things, pick and choose and bring what we want back into our lives. Personally, I think that's what this whole thing is about. YMMV.

---

<strong><emp>Every week there is an enormous global collective effort made by the team, analyzing and creatively coding the submissions, and that effort deserves credit due.</emp></strong>

And that, my friends, is why I'm here, to try and figure out ways to do just that.

So here we are then.

I'm ready — let’s get to it and see what we can find.

---

### For Additional Context…

before we begin, you may wish to revisit either the pages for the [**original tasks**](/blog/perl-weekly-challenge-165/) or the summary [**recap**](/blog/recap-challenge-165/) of the challenge. But don't worry about it, the challenge text will be repeated and presented as we progress from task to task.

Oh, and one ***more*** thing before we finally get started:


### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please feel free to email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

<div align= center><strong>...Enough? Fine. So without even further ado...</strong></div>

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC165TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC165TASK2)   &nbsp;  &nbsp;  &nbsp;   	•   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC165BLOGS)    &nbsp;  &nbsp;  &nbsp;   	•

---

# TASK 1 {#PWC165TASK1}

# Scalable Vector Graphics (SVG)
*Submitted by: Ryan J Thompson*

Scalable Vector Graphics (SVG) are not made of pixels, but lines, ellipses, and various curves that can be scaled to any size without any loss of quality. If you have ever tried to resize a small JPG or PNG, you know what I mean by “loss of quality”! What many people do not know about SVG files is, they are simply XML files, so they can easily be generated programmatically.

For this task, you may use external library, such as Perl’s SVG library, maintained in recent years by our very own Mohammad S Anwar. You can instead generate the XML yourself; it’s actually quite simple. The source for the example image for Task #2 might be instructive.

Your task is to accept a series of points and lines in the following format, one per line, in arbitrary order:

```
    Point: x,y
    Line:  x1,y1,x2,y2
```

**Example:**
```
    53,10
    53,10,23,30
    23,30
```
Then, generate an SVG file plotting all points, and all lines. If done correctly, you can view the output .svg file in your browser.


## about the solutions
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/adam-russell/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/athanasius/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/cheok-yin-fung/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/colin-crain/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/dave-jacoby/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/polettix/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/jo-37/perl/ch-1.pl),
[**Julien Fiegehenn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/julien-fiegehenn/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/laurent-rosenfeld/perl/ch-1.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/peter-campbell-smith/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/roger-bell-west/perl/ch-1.pl),
[**Ryan Thompson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/ryan-thompson/perl/ch-1.pl),
[**Saif Ahmed**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/saiftynet/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/ulrich-rieke/perl/ch-1.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/wlmb/perl/ch-1.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/wanderdoc/perl/ch-1.pl)

The SVG file format is a document object model for a drawing, described in an XML file. Object primitives are established on a nominally-sized canvas with relevant attributes such as fill color, line width or radius, which are taken by an external rasterizer as directives to reproduce the desired drawing on demand. Attribute dimensions are given in pixels, which are taken in the relative context to the default canvas size. This allows unlimited scaling of the final rendering, as a 10 pixel diameter circle in a 100 pixel wide canvas will always scale at 10% of the drawn width whatever it is resized to.


There were 19 submissions for our first humble task this past week.

## A SELECTION of SUBMISSIONS
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/dave-jacoby/perl/ch-1.pl),
[**Ryan Thompson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/ryan-thompson/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/cheok-yin-fung/perl/ch-1.pl),
[**Julien Fiegehenn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/julien-fiegehenn/perl/ch-1.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/adam-russell/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/laurent-rosenfeld/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/duncan-c-white/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/colin-crain/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/polettix/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/e-choroba/perl/ch-1.pl), and
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/james-smith/perl/ch-1.pl)


The SVG file format, as Ryan notes, is in its basic form straightforward to anyone familiar with XML markup: tags define elements, with balanced tags acting as logical containers passing their attributes on to whatever elements are found inside. Ultimately we end up with lists of elements to be drawn, each with a variety of attributes, specified or default, that are used to produce the stylistic choices desired.

CPAN has an excellent SVG module, which provides a nice object-oriented interface to building an image. However with the simple data provided it was not a very complicated task to concatenate an XML string directly, copying the boilerplate headers. Of course SVG can get complicated in its less common edge cases but none of that was to be seen here.

In a third way, several people built their own object interfaces with a minimal API to get the job done, providing easy expansion should the need ever arise: just write a new method for whatever element is desired.

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/dave-jacoby/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Plotting Revenge: Weekly Challenge #165 | Committed to Memory](https://jacoby.github.io/2022/05/16/plotting-revenge-weekly-challenge-165.html)

Dave will start us off today with a demonstration of using the SVG module, which provides a convenient object framework for producing the drawing code.

The instantiated object will take care of all the necessary boilerplate in the headers and such, so we can get right to adding line and point elements as we read the input data, here given as a configuration string. How we get the string isn't really important.

We get two points and a line, and Dave declares an arbitrarily-sized canvas of 100 pixels square. Looping through the input data we find two lists of 2 numbers, and one of 4, so we call `add_line()` once and `add_point()` twice. The complicated part. if you want to call it that, is building a hash of attributes to adequately describe the element we wish to draw.

When we're ready we can call `xmlify()` on our object which returns a string of XML, that in this case is printed to file. After all, it's just text.

```perl
    use SVG;

    my $config = <<'END';

    53,10
    53,10,23,30
    23, 30

    END

    my @config = grep { /\d/ } split /\n/, $config;
    my $svg    = SVG->new(
        height => 100,
        width  => 100,
    );

    for my $entry (@config) {
        my @coords = map { int $_ } split /,/, $entry;
        add_line( $svg, \@coords )         if scalar @coords == 4;
        add_point( $svg, \@coords, 'red' ) if scalar @coords == 2;
    }

    my $output = $svg->xmlify;
    say $output;
    exit;

    sub add_line ( $svg, $coords, $color = 'black' ) {
        $svg->line(
            x1    => $coords->[0],
            y1    => $coords->[1],
            x2    => $coords->[2],
            y2    => $coords->[3],
            style => {
                stroke         => $color,
                'stroke-width' => 0.5,
                fill           => $color,
            }
        );

    }

    sub add_point ( $svg, $coords, $color = 'black' ) {
        $svg->circle(
            cx    => $coords->[0],
            cy    => $coords->[1],
            r     => 0.5,
            style => {
                stroke         => $color,
                'stroke-width' => 0.5,
                fill           => $color,
            }
        );
    }
```


[**Ryan Thompson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/ryan-thompson/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[PWC 165 › Simple SVG generator - Ryan J Thompson](https://ry.ca/2022/05/simple-svg-generator/)

Ryan introduces the group container for elements. Groups have their own style attributes, which are inherited by any elements contained within the group. Here we've decided what a "point" will look like and so we can define each as and x- and y- coordinate with a radius.

Likewise the lines are given their own group as well with their own style attributes.

You'll notice there will be a lot of hardcoding attributes into the final script, perhaps more than seems proper. After all, abstract constants and config information, right? Isn't that just good form? The problem here is that there just are a lot of attributes to consider — it's aesthetic choices we're making and there are a large number of options available to us. We could remove them to a YAML file I suppose, or even in some cases CSS, which is pretty cool — don't get me wrong — but in a sense that's just complexifying what we need to do whilst kicking the can down the road. So we may as well hard-code it for these demonstrations.


```perl
    sub plot_svg {
        my $svg = SVG->new(width => $o{width}, height => $o{height},
            $o{credits} ? () : (-nocredits => 1));

        # Style the points and lines
        my $lg = $svg->group(           id => 'lines',
                            'stroke-width' => $o{'stroke-width'},
                                    stroke => $o{'line-color'});

        my $pg = $svg->group(           id => 'points',
                                      fill => $o{'point-color'});

        # Plot points and lines
        for (@_) {
            $lg->line(  x1 => $_->[0], y1 => $_->[1],
                        x2 => $_->[2], y2 => $_->[3])                 if @$_ == 4;
            $pg->circle(cx => $_->[0], cy => $_->[1],r => $o{radius}) if @$_ == 2;
        }

        $svg->xmlify;
    }
```

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/cheok-yin-fung/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[CY's Take on The Weekly Challenge #165 ](https://e7-87-83.github.io/coding/challenge_165.html)

Let's look at one more base example using the SVG module, this time from CY. One observation that CY draws attention to is that the SVG drawing described in the XML is built up in the order that the elements are placed; later elements are stacked above those placed earlier and hence will overwrite them in the Z-dimension. The SVG module makes sure to preserve this ordering, which may not be immediately obvious using the object interface.

As such she makes sure to draw her points after her lines, as to not have the possibility of lines overwriting them. This is well-thought-out design.

```perl
    while (<>) {
        chomp;
        my @nums = split ",", $_;
        if (scalar @nums == 2) {
            push @points, [@nums];
        }
        elsif (scalar @nums == 4) {
            new_line(@nums);
        }
    }

    new_point($_->@*) foreach @points; #so that the lines won't be over points

    sub new_point {
        my ($cx, $cy) = ($_[0], $_[1]);
        $img->circle(cx => $cx, cy => $cy, r => 2, style => {fill => 'red'});
    }

    sub new_line {
        my ($x1, $y1, $x2, $y2) = ($_[0], $_[1], $_[2], $_[3]);
        $img->line( x1 => $x1, y1 => $y1, x2 => $x2, y2 => $y2,
        style => {
            'fill-opacity' => 0,
            'stroke'       => 'green'
        });
    }

    print $img->xmlify(-namespace=>'svg');
```

[**Julien Fiegehenn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/julien-fiegehenn/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Typescript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/julien-fiegehenn/typescript/ch-1.ts)

Taking the abstraction one level further we have Julien, who collects all his graphic-construction processing into a personal module, `Plot.pm`, that itself then calls `SVG` to handle the image format. Wheels within wheels, people. It's turtles all the way down.

```perl
    Plot::plot( grep ref, map { chomp; [ split /,/ ]; } <DATA> );

    __DATA__
    53,10
    53,10,23,30
    23,30
```

From `Plot.pm`:

```perl
    sub plot {
        my (@input) = @_;

        my $svg    = SVG->new;
        my $points = $svg->group(
            id    => 'points',
            style => {
                stroke => 'orange',
                fill   => 'orange'
            },
        );
        my $lines = $svg->group(
            id    => 'lines',
            style => {
                stroke         => 'blue',
                fill           => 'blue',
                'stroke-width' => 3,
            },
        );

        foreach my $record (@input) {
            if ( @$record == 2 ) {
                $points->circle( cx => $record->[0], cy => $record->[1], r => 3 );
            }
            else {
                $lines->line(
                    x1 => $record->[0],
                    y1 => $record->[1],
                    x2 => $record->[2],
                    y2 => $record->[3]
                );
            }

            # update the image size
            $size = max($size, @$record);
        }

        . . .

        # write to disk
        open my $fh, '>', 'output.svg' or die $!;
        print $fh $svg->xmlify;
    }
```


In passing I will note she also uses our own Choroba's (versus anyone else's Choroba) handy `ARGV::OrDATA` module, which will preferentially take input to the diamond operator from `STDIN` on the command line or in the absence of this open the `__DATA__` filehandle and draw from there.

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/adam-russell/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Prolog](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/adam-russell/prolog/ch-1.p)


&nbsp;&nbsp;**blog writeup:**
[SVG Plots of Points and Lines — Perl — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2022/05/22)

&nbsp;&nbsp;**blog writeup:**
[SVG Plots of Points and Lines — Prolog — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/prolog/2022/05/22)

The simple SGV image requested (Image? Design? Drawing plans? We're really blurring the lines here)  only has a few elements and is consequently not very complicated.  Thus if we can manage to properly construct only two types of element tags and a set of whatever headers are required then we can just assemble the parts in order to match the format and have our complete list of instructions.

Ok, let's have at it.

Adam modularizes the process into a collection of subroutines, with a wrapper, `svg()` to wrangle them. The first thing on making a new image is to make identifying headers, so `svg_begin()` returns these and they are saved as a string.

The data has been read in and placed in an array of arrays, one per line, and it is passed to a loop to be cycled through. A conditional on the length of the sub-array is used to determine whether a line is a point or a line and the appropriate routine is called with the array data, and the result concatenated to the SGV string. On completion, a call to `svg_end()` closes the outer tag.

That's it. That's all you need.

```
        <?xml version="1.0" encoding="UTF-8" standalone="yes"?>                                   <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.0//EN" "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">                                                                          <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<circle cx="53" cy="10" r="1" /><line x1="53" x2="23" y1="10" y2="30" style="stroke:#006600;" /><circle cx="23" cy="30" r="1" /></svg>
```

Yes it's not exactly the prettiest thing for a human to read, but the machines? They don't care. Some of the more arrogant ones among them even seem to think this makes them superior. Well, let them say that when I'm holding a power plug in my hand is all I have to say. That usually settles them down. Life, I say, is better when we can just get along.

```perl
    sub svg_begin{
        return <<BEGIN;
            <?xml version="1.0" encoding="UTF-8" standalone="yes"?>                                   <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.0//EN" "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">                                                                          <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    BEGIN
    }

    sub svg_end{
        return "</svg>";
    }

    sub svg_point{
        my($x, $y) = @_;
        return "<circle cx=\"$x\" cy=\"$y\" r=\"1\" />";
    }

    sub svg_line{
        my($x0, $y0, $x1, $y1) = @_;
        return "<line x1=\"$x0\" x2=\"$x1\" y1=\"$y0\" y2=\"$y1\" style=\"stroke:#006600;\" />";
    }

    sub svg{
        my @lines = @_;
        my $svg = svg_begin;
        for my $line (@_){
            $svg .= svg_point(@{$line}) if @{$line} == 2;
            $svg .= svg_line(@{$line})  if @{$line} == 4;
        }
        return $svg . svg_end;
    }
```

One thing though, is that since Perl 5.26 we can now say

```perl
    say <<~'BEGIN';
        ...some stuff that you don't want indented in the output...
        BEGIN
```

and this will ignore any leading whitespace before the closing delimiter on every line in the heredoc. Which is great for embedding heredocs inside structures that are themselves already indented, such as subroutines or loops. Note the placement of the added tilde. Super handy.

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/laurent-rosenfeld/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/laurent-rosenfeld/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 165: Line of Best Fit](http://blogs.perl.org/users/laurent_r/2022/05/perl-weekly-challenge-165-line-of-best-fit.html)


Here's another example of direct construction from Laurent. Again, we only have to handle two types of elements so it really isn't very complicated.

```perl
    use constant SCALE => 5;

    my ( @points, @lines);
    my $out = qq{<svg xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink" width="500" height="500">\n};
    my @input = qw<53,10 53,10,23,30  23,30  34,35,36>;
    for my $val (@input) {
        my @items = split /,/, $val;
        # say "@items";
        if (@items == 2) {
            make_point(@items)
        } elsif (@items == 4) {
            make_line(@items);
        } else {
            warn "Error on item ", @items;
        }
    }
    $out .= "</svg>";
    say $out;

    sub make_point {
        my @dots = map $_ * SCALE, @_;
        my $point = qq{<circle cx= "$dots[0]" cy="$dots[1]" r="3" fill="forestgreen"/>\n};
        $out .= $point;
    }

    sub make_line {
        my @dots = map $_ * SCALE, @_;
        my $line = qq{<line x1="$dots[0]" y1="$dots[1]" x2="$dots[2]" y2="$dots[3]" };
        $line .= qq{stroke="navy" />\n};
        $out .= $line
    }
```

[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/duncan-c-white/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/duncan-c-white/C/ch-1.c)

Duncan takes a similar stance of assembling a collection of subroutines to produce the various tags required, with the added abstraction of squirreling them away in their own module, `MySVG.pm`. The aim of this module is to print the various SVG tags directly to `STDOUT` using `say`.

The result is to divide the computational portion of the processing, which in this case comprises processing the input and gathering the maximum height and width values to properly size the canvas, and then handing these variables off to the module functions to process the output. It's just compartmentalization by use; the subroutines are exported and used directly in the main body of the script.

Duncan uses `Function::Parameters` with their `fun` keyword to get subroutines signatures.

```perl
    my( $w, $h ) = @wh{qw(W H)};
    $w += (10-$w%10);
    $h += (10-$h%10);

    my $xscale = $w < 200 ? 200/$w : 1;
    my $yscale = $h < 200 ? 200/$h : 1;

    warn "maxxy rectangle is w $w, h $h, xscale $xscale, yscale $yscale\n" if $debug;

    start_svg( $w * $xscale, $h * $yscale );

    setcolour( "blue" );
    setlinewidth( 1 );
    line( $_->[0]*$xscale, $_->[1]*$yscale,
          $_->[2]*$xscale, $_->[3]*$yscale ) foreach @ln;

    setcolour( "orange" );
    point( $_->[0]*$xscale, $_->[1]*$yscale ) foreach @pt;

    end_svg();
```

[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/colin-crain/perl/ch-1.pl)

For my own solution I choses a similar approach to structuring the processing, inlining a separate SVG package, but this time making a `Moo` object.

It was a fun exercise, albeit longer and more complicated than it needed to be to get the job done.

I think you probably get the idea by now.

```perl
    my $svg = new SVG(200,300);
    my $attr;

    $attr  = { "stroke" => "blue",  "stroke-width" => "4" };
    $svg->group( "lines", $attr);
    $svg->add( $svg->line($_->@*) ) for @lines;

    $attr = { "fill"=>"red" };
    $svg->group( "circle", $attr);
    $svg->add( $svg->circle($_->@*) ) for @points;

    my $out = $svg->make_SVG;
```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/polettix/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/polettix/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC165 - Scalable Vector Graphics (SVG) - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/05/17/pwc165-scalable-vector-graphics/)

&nbsp;&nbsp;**blog writeup:**
[PWC165 - Line of Best Fit - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/05/18/pwc165-line-of-best-fit/)

All in all, though, with all of this conceptual streamlining of the process and considering how the API can mirror the data being represented, there's always going to be a few that, shall we say, go the other way.

As you may have noticed, I have on several occasions used the term "boilerplate" in referring to the SVG header section of an image. Aside from the the specific height and width information for the canvas, this is largely accurate.

Likewise the `circle` and `line` elements are self-similar as well, only filling in the various coordinates and radius in the case of the circle.

So why not fill in a template?

Using his own `Template::Perlish` module, this is what Flavio does. Bringing in a templating framework might seem excessive, and Flavio himself would likely agree with this sentiment. But should you wish to draw a number of lines atop a field of tiny circles using fixed fill and stroke choices, then just reach for this template — it'll do just what you ask.

After the setup, of course.

```perl
    use Template::Perlish;

    my $input = shift // "53,10\n53,10,23,30\n23,30";
    say svg_for($input);

    sub svg_for ($text) {
       state $tp2 = Template::Perlish->new->compile_as_sub(
    q{<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.0//EN" "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
    <svg height="400" width="400" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
    [% for my $item (A 'lines') {
          if ($item->@* == 2) {
    %] <circle r="4" cx="[%= $item->[0] %]" cy="[%= $item->[1] %]" stroke-width="0" fill="#000000" />
    [%    } else {
    %] <polyline points="[%= join ' ', $item->@* %]" stroke="#ff0000" stroke-width="6" />
    [%    }
       }
    %]</svg>});
       $tp2->({lines => [map {[ split m{,+}mxs ]} split m{\n+}mxs, $text]});
    }
```

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/e-choroba/perl/ch-1.pl)

On top of this, if we consider Flavio's effort excusable due to, say, low blood sugar or perhaps an unexpected blow to the head, we have oddly enough received a *second* templating solution from none other than Choroba. Perhaps there is something airborne wafting across Europe that someone should really know about. Or aliens. Can't rule that out. It's... disturbing. I know a guy — I'll make some calls and get back to you.

In any case here we are, using the full-sized `Template` module. Boilerplate, plug in some variables, put some sections on repeat according to arrays of lines and points, and bang you're in.

Ok, I must say I'm coming around to the idea. Have to say did not see that one coming, though.

```perl
    my $TEMPLATE = << '__SVG__';
    <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.0//EN" "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
    <svg height="[% height %]" width="[% width %]" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    [% IF lines -%]
        <g id="lines" stroke="#369" stroke-width="4">
        [%- FOREACH line IN lines %]
            <line x1="[% line.0 %]" x2="[% line.2 %]" y1="[% line.1 %]" y2="[% line.3 %]" />
        [%- END %]
        </g>
    [% END- %]
    [%- IF points -%]
        <g fill="#f73" id="points">
        [%- FOREACH point IN points %]
            <circle cx="[% point.0 %]" cy="[% point.1 %]" r="3" />
        [%- END %]
        </g>
    [%- END %]
    </svg>
    __SVG__

    my $template = 'Template'->new;
    $template->process(\$TEMPLATE,
                       {height => $height,
                        width  => $width,
                        points => \@points,
                        lines  => \@lines}
    ) or die $template->error;
```

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/james-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[The Weekly Challenge 165 - straight through the point!](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-165/james-smith)

Finally, we'll close with James, who takes the ideas we've seen today and implements *all of them*. Unsatisfied with solving this task he goes on to solve the next one as well, in the same script.

It's kind of involved.

The script itself has a lot of parts, as we have noted it includes code for finding a best-fit line as well, which we'll put aside for now. But as the second task requests that we use the code from the first, both tasks are merged together.

So let's look at the SGV code portion, shall we?

```perl
    my $DEF            = { 'margin' => 40, 'max_w' => 960, 'max_h' => 540,
                           'color' => '#000',  'stroke' => 3,
                           'fill' => '#ccc',   'radius' => 10,
                           'border' => '#000', 'bg' => '#eee' };
    my $LINE_TEMPLATE  = '<line x1="%s" y1="%s" x2="%s" y2="%s" />';
    my $POINT_TEMPLATE = '<circle cx="%s" cy="%s" r="%s" />';
    my $SVG_TEMPLATE   = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.0//EN" "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
    <svg height="%s" width="%s" viewBox="%s %s %s %s" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink">
      <rect stroke="%s" stroke-width="%s" fill="%s" x="%s" y="%s" width="%s" height="%s" />
      <g transform="scale(1,-1) translate(0,%s)">
      <g stroke="%s" stroke-width="%s">
        %s
      </g>
      <g fill="%s">
        %s
      </g>
      </g>
    </svg>';


    sub render_svg {
      my( $ps, $ls, $config          ) = @_;
      my %conf = (%{$DEF}, %{$config});
      my( $min_x, $max_x, $min_y, $max_y ) = get_ranges( $ps, $0 eq 'ch-2.pl' ? [] : $ls );
      my $margin = $conf{'margin'};

      ## Adjust height and width so it fits the size from the config.
      my($W,$H,$width,$height) = ($conf{'max_w'},$conf{'max_h'},$max_x-$min_x+2*$margin,$max_y-$min_y+2*$margin);
      ( $width/$height > $W/$H ) ? ( $H = $height/$width*$W ) : ( $W = $width/$height*$H );
      ## Calculate the scale factor so that we keep spots/lines the same size irrespective of the ranges.
      my $sf = $width/$W;

      sprintf $SVG_TEMPLATE,
        $H,              $W,               $min_x - $margin, $min_y - $margin, $width, $height,                    ## svg element
        $conf{'border'}, $sf, $conf{'bg'}, $min_x - $margin, $min_y - $margin, $width, $height,                    ## bg rect
        -$min_y-$max_y,
        $conf{'color'}, $conf{'stroke'} * $sf, join( qq(\n    ), map { sprintf $LINE_TEMPLATE,   @{$_} } @{$ls} ), ## lines
        $conf{'fill'}, join( qq(\n    ), map { sprintf $POINT_TEMPLATE,  @{$_}, $conf{'radius'}*$sf  } @{$ps}   )  ## points
    }
```

As you can see James has hit the middle ground in defining sub-templates for the individual elements as `sprintf` formats. Then after gathering all necessary data into variables, a system of nested `sprintf` statements renders the final XML code.

It's a worthy effort. Magnificent, really.


## Blogs and Additional Submissions in Guest Languages for Task 1:


[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/peter-campbell-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Dots, lines and whatever fits best](https://pjcs-pwc.blogspot.com/2022/05/dots-lines-and-whatever-fits-best.html)


[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/roger-bell-west/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/roger-bell-west/javascript/ch-1.js), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/roger-bell-west/kotlin/ch-1.kt), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/roger-bell-west/lua/ch-1.lua), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/roger-bell-west/postscript/ch-1.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/roger-bell-west/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/roger-bell-west/raku/ch-1.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/roger-bell-west/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/roger-bell-west/rust/ch-1.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: The Weekly Challenge 165: Scaling the Fits](https://blog.firedrake.org/archive/2022/05/The_Weekly_Challenge_165__Scaling_the_Fits.html)


[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/wlmb/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 165 – W. Luis Mochán](https://wlmb.github.io/2022/05/20/PWC165/)


------------------------------------------





---

# TASK 2 {#PWC165TASK2}

# Line of Best Fit
*Submitted by: Ryan J Thompson*

When you have a scatter plot of points, a line of best fit is the line that best describes the relationship between the points, and is very useful in statistics. Otherwise known as linear regression.

The method most often used is known as the least squares method, as it is straightforward and efficient, but you may use any method that generates the correct result.

Calculate the line of best fit for the following 48 points:

```
    333,129    39,189   140,156   292,134   393,52    160,166   362,122    13,193       341,104   320,113   109,177   203,152   343,100   225,110    23,186   282,102       284,98    205,133   297,114   292,126   339,112   327,79    253,136    61,169       128,176   346,72    316,103   124,162    65,181   159,137   212,116   337,86       215,136   153,137   390,104   100,180    76,188    77,181    69,195    92,186       275,96    250,147    34,174   213,134   186,129   189,154   361,82    363,89
```

Using your rudimentary graphing engine from Task #1, graph all points, as well as the line of best fit.



## about the solutions
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/adam-russell/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/athanasius/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/cheok-yin-fung/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/colin-crain/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/dave-jacoby/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/polettix/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/james-smith/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/jo-37/perl/ch-2.pl),
[**Julien Fiegehenn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/julien-fiegehenn/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/laurent-rosenfeld/perl/ch-2.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/peter-campbell-smith/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/roger-bell-west/perl/ch-2.pl),
[**Ryan Thompson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/ryan-thompson/perl/ch-2.pl),
[**Saif Ahmed**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/saiftynet/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/ulrich-rieke/perl/ch-2.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/wlmb/perl/ch-2.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/wanderdoc/perl/ch-2.pl)

The Least Squares method is a technique in linear regression for fitting a line through a plot of data such that the difference between the line points and the orignal data points is minimized across the line. As such whilst controlling one axis, the differences between the other in the points and the line model are gathered and squared, and the sum of these squares is minimized, hence the name.

For most datasets, this technique produces a very good approximation of the "best" line through the data, but that statement naturally leads to questions on the meaning of "best". The context of the data itself, and the conclusions that we wish to draw, ultimately guide the answer. For instance, a linear fit may not even be the most useful visualization at all;  parabolic or more complex curves will obviously be a better approximation for some data.

Variants to the linear least squares technique allow for schemes compensating for known properties in error ranges in the data, or when the data is affected by known constraints.

Using the least-squares approximation, the squares of the differences between the known values and those in the approximated line are used because by squaring the deviations larger values are given a higher negative weight than smaller, and the model will look for  a line with many small differences and steer away from larger gaps, providing a satisfying middle result. That said it is often beneficial to prune obviously suspect outliers, whose errors might be explained by external forces.

There were 19 submissions for the second task this past week.

## A SELECTION of SUBMISSIONS
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/colin-crain/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/athanasius/perl/ch-2.pl),
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/wanderdoc/perl/ch-2.pl),
[**Saif Ahmed**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/saiftynet/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/ulrich-rieke/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/laurent-rosenfeld/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/duncan-c-white/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/cheok-yin-fung/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/roger-bell-west/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/jo-37/perl/ch-2.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/wlmb/perl/ch-2.pl)


Even though it was not required, nearly every submission implemented a least-squares regression for their fitting, with only one exception. We'll certainly look at that. On the other hand, seeing as we're doing data analysis we did see several submissions using the PDL . We'll have a look at those too, to spice things up a bit.

[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/colin-crain/perl/ch-2.pl)

We'll start this out with my own submission. After all, it has the basic building blocks of a  least-squares fit all laid out in what I hope is a clear manner.

You'll have to be the judge of that, though. I try, and my job is to do my best to explain it.

The least-squares line of best fit for a given set of *N* individual points can be derived using two formulas, one each for the slope (*m*) and intercept (*b*), to form a line equation of the form

*y* = *m* *x* + *b*

Those formulae require four independent summations from the x- and y-coordinates, and give a slope *m*:

```
         N Σ(xy) − Σx Σy
    m = —————————————————
         N Σ(x^2) − (Σx)^2
```

and an intercept *b*:

```
          Σy − m Σx
    b =  ———————————
              N
```

The data is delivered as an array of arrays, with each outer element a pair of x and y coordinates. Looping across this list, we compile the four sums:
* all x-values
* all y values
* for each pair, the x-value squared and the results summed
* for each pair, the x-value times the y-value

The size of the data set is already known from the scalar value of the variable `@data`.

Once we have the slope and the intercept we can calculate y-values for an appropriately-sized canvas to enclose all the points, in this case 400 (nominal) pixels wide.

A few more commands are required to plug the input data along with the result into the SVG code from task 1.


```perl
    sub best_fit (@points) {
        my ($xsum, $ysum, $sqsum, $xysum);

        for (@data) {
            $xsum  += $_->[0];
            $ysum  += $_->[1];
            $sqsum += $_->[0] ** 2;
            $xysum += $_->[0] * $_->[1];
        }

        my $slope     = ((@data * $xysum) - ($xsum * $ysum))
                            / ((@data * $sqsum) - ($xsum ** 2));
        my $intercept = ($ysum - ($slope * $xsum)) / @data;

        ## hardwired 400px canvas for now
        my $xmax = 400;

        ## x1, y1, x2, y2
        return (0, $intercept, 400, ($slope * 400 + $intercept))
    }
```

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/athanasius/perl/ch-2.pl)

In their extremely well laid-out version, the monk Athanasius really works the "one line, one action" philosophy.

I approve.

They also take a moment to gather the minimum and maximum x-values from the data set, allowing them to calculate the endpoints of the fit line with more precision, instead of simply overshooting as I did.

```perl
    MAIN:
    {
        my $sum_x    = sum( map { $_->[ 0 ]             } @POINTS );
        my $sum_y    = sum( map { $_->[ 1 ]             } @POINTS );
        my $sum_x_sq = sum( map { $_->[ 0 ] * $_->[ 0 ] } @POINTS );
        my $sum_x_y  = sum( map { $_->[ 0 ] * $_->[ 1 ] } @POINTS );
        my $N        = scalar @POINTS;
        my $m        = (($N * $sum_x_y ) - ($sum_x * $sum_y)) /
                       (($N * $sum_x_sq) - ($sum_x * $sum_x));
        my $B        = ($sum_y - ($m * $sum_x)) / $N;
        my %elements;

        push @{ $elements{ points } }, [ @$_ ] for @POINTS;

        my $x1 = (min map { $_->[ 0 ] } @POINTS) - 1;   # min x
        my $y1 = ($m * $x1) + $B;
        my $x2 = (max map { $_->[ 0 ] } @POINTS) + 1;   # max x
        my $y2 = ($m * $x2) + $B;

        push @{ $elements{ lines  } }, [ $x1, $y1, $x2, $y2 ];

        ch_1::encode_svg( \%elements, $OUTFILE );

        print qq[SVG encoded to file "$OUTFILE"\n];
    }
```

[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/wanderdoc/perl/ch-2.pl)

We haven't looked at the work from the wandering doctor in a while — here they demonstrate how to use the `reduce()` function from `List::Util` to create their own `sum()`. The `reduce()` function, if you recall, merely provides a framework for systematically accessing the elements in an array, processing each and modifying a single carried accumulator that is ultimately returned. By carefully choosing the block function that is applied, many common list functions can be created. Here they provide several examples, first to only add the first element positions from the list of points, and then in a different pass sum the second. A third version just sums the elements as found.

The common method for determiing the least-squares line calculates the slope and intercept equation; the doc then passes this data to a separate `create_line()` function to determine the two endpoints required for an SVG `line` tag.


```perl
    sub calculate_best_fit
    {
         my @points = @_;

         my $N = scalar @points;

         # Step 1: For each (x,y) point calculate x^2 and xy:
         my @x_sq = map $_->{x} * $_->{x}, @points;

         my @xy   = map $_->{x} * $_->{y}, @points;

         # Step 2: Sum all x, y, x^2 and xy:

         my $sum_x = reduce { $a + $b->{x} } 0, @points;
         my $sum_y = reduce { $a + $b->{y} } 0, @points;
         my $sum_x_sq = reduce {$a + $b } @x_sq;
         my $sum_xy = reduce {$a + $b} @xy;

         # Step 3: Calculate slope m:
         my $m =  ($N * $sum_xy - $sum_x * $sum_y) /
                  ($N * $sum_x_sq - ($sum_x * $sum_x));

         # Step 4: Calculate Intercept b:
         my $intrcpt = ($sum_y - $m * $sum_x) / $N;

         return ($m, $intrcpt);
    }

    sub create_line
    {
         my ( $x1, $x2, $slp, $itr ) = @_;
         my $y1 = int( $slp * $x1 + $itr );
         my $y2 = int( $slp * $x2 + $itr );
         return {x1 => $x1, y1 => $y1, x2 => $x2, y2 => $y2};
    }
```

[**Saif Ahmed**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/saiftynet/perl/ch-2.pl)

New member Saif focuses on the output SVG drawing, treating the calculation of the best-fit line to be another required element in the final XML to be parameterized.

As such the control flow is a little different, focusing first on the construction of the SGV drawing as an elaborate concatenated string. In a first pass over the data, a pair of regular expresions match out line and point coordiantes and append them as elements to a growing string of XML tags. As every point is added, however, its data is also handed off to an `addPoint()` routine where the sums for the least-squares calculations are gathered in global variables.

Once every point in the dataset is processed the best-fit line can be calculated from the aggregate analysis variables, which happens in-place as a new SVG tag is being constructed. The tag is added, the SVG format is completed with head and tail tags and the result written to file.

```perl
    foreach (@data) {
       # find and genrate lines
       $svg.= "  <line x1=\"$2\" y1=\"$3\" x2=\"$4\" y2=\"$5\" stroke=\"red\"\/>\n"
           while (/(^|\s)([\-\=]?[\d]+\.?[\d]*),([\-\=]?[\d]+\.?[\d]*),([\-\=]?[\d]+\.?[\d]*),([\-\=]?[\d]+\.?[\d]*)($|\s)/g);
       # find and generate points adding to analysis if needed
       while (/(^|\s)([\-\=]?[\d]+\.?[\d]*),([\-\=]?[\d]+\.?[\d]*)($|\s)/g){
             addPoint($2,$3);
        	 $svg.= "  <circle cx=\"$2\" cy=\"$3\" r=\"2\" stroke=\"blue\" \/>\n"
           };
    }
    $svg.= bestFitLine();

    # top and tail the svg contents, and flip the data so that the SVG coordinate system becomes cartesian
    $svg="<svg  viewBox=\"".($minX-8)." ".($minY-8)." ".($maxX-$minX+16)." ".($maxY-$minY+16)."\" style=\"background-color:green\" xmlns=\"http://www.w3.org/2000/svg\">\n".
         "<g  transform=\"scale(1,-1) translate(0,".(-$maxY-$minY).")\">\n". # flips the points for a cartesian chart
          "  <rect x=\"".($minX-5)."\" y=\"".($minY-5)."\" width=\"".($maxX-$minX+10)."\" height=\"".($maxY-$minY+10)."\" stroke=\"blue\"  fill=\"#D5DBDB\" \/>\n".
         $svg.
         "\n</g>\n".
           "<text x=\"".(($minX+$maxX)/2)."\" y=\"".($minY+20)."\" fill=\"red\">$title</text>\n".
         "</svg>";

    # each point found is added to the stats
    sub addPoint{
      my ($x,$y)=@_;
      $maxX= $x if ($x>$maxX);
      $maxY= $y if ($y>$maxY);
      $minX= $x if ($x<$minX);
      $minY= $y if ($y<$minY);
      $sumX+=$x;
      $sumY+=$y;
      $sumX2+=$x*$x;
      $sumXY+=$x*$y;
      $number++;
      return 1;
    }
```

[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/ulrich-rieke/perl/ch-2.pl)

In an alternative to reading points from a file, or commonly the inlne `__DATA__` filehandle, Ulrich has us enter any number of points from the command line, via `<STDIN>`.

On receiving the data, he can then compute the best-fit line, which he does in a separate `findline()` routine. A number of `map` statements loop over the data to compute the various sums required. The slope and intercept are returned.

He then gets to work immediately on constructing an SVG file, opening a filehandle and then outputting the XML tags to it as they are created. The data has been parsed and readied, so after the header information, the line is output, followed by a list of points.


```perl
    sub findLine {
      my $passedPoints = shift ;
      my $sumOfX = sum( map { $_->[0] } @{$passedPoints}) ;
      my $sumOfY = sum( map { $_->[1] } @{$passedPoints}) ;
      my $sumOfXY = sum( map { $_->[0] * $_->[1] } @{$passedPoints}) ;
      my $sumOfXsquare = sum( map { $_->[0] * $_->[0] } @{$passedPoints}) ;
      my $len = scalar( @{$passedPoints} ) ;
      my $m = ($len * $sumOfXY - $sumOfX * $sumOfY ) / ( $len *
        $sumOfXsquare - $sumOfX ** 2 ) ;
      my $b = ( $sumOfY - $m * $sumOfX ) / $len ;
      return ( $m , $b ) ;
    }

    . . .

    my ( $m , $b ) = findLine( \@points ) ;
    say "The points entered are best fitted by a line with the equation y = $m x + $b!" ;
    open ( my $fh , ">> testfile.svg" ) or die "Can't append to testfile.svg! $!\n" ;
    say $fh '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' ;
    print $fh '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.0//EN"' ;
    say $fh '  "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">' ;
    print $fh '<svg height="300" width="400" xmlns="http://www.w3.org/2000/svg"' ;
    say $fh ' xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' ;
    say $fh '<g id="lines" stroke="#369" stroke-width="4">' ;
    my $startx = 0 ;
    my $endx = 400 ;
    my $starty = $m * $startx + $b ;
    my $endy = $m * $endx + $b ;
    say $fh "  <line x1=\"$startx\" x2=\"$endx\" y1=\"$starty\" y2=\"$endy\"  />" ;
    say $fh "</g>" ;
    say $fh "<g fill=\"#f73\" id=\"points\">" ;
    for my $p ( @points ) {
      say $fh "  <circle cx=\"$p->[0]\" cy=\"$p->[1]\" r=\"3\"  />" ;
    }
    say $fh " </g>" ;
    say $fh "</svg>" ;
    close $fh ;
```

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/laurent-rosenfeld/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/laurent-rosenfeld/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 165: Line of Best Fit](http://blogs.perl.org/users/laurent_r/2022/05/perl-weekly-challenge-165-line-of-best-fit.html)

&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 165: Scalable Vector Graphics](http://blogs.perl.org/users/laurent_r/2022/05/perl-weekly-challenge-165-scalable-vestor-graphics.html)

One could argue, I suppose, that the graphical output of an SVG image was only a suggestion, not a requirement. It is sort of tacked on there, at the bottom of the description, and easy to miss. As this happened several times I've decided I'll be gracious about it and look the other way. Life is... variable, as are my moods.

Without that code the computation of the least-squares line is much more compact, as demonstrated here by Laurent. Furthermore, without the need to produce (*x*,*y*) endpoints for a line we can directly report the slope/intercept equation.

```
    Slope: -0.299956500261231, intercept = 200.132272535582
    The equation of the line of best fit is: y = -0.30 x + 200.13
```

Laurent's `lsm()` routine is quite direct and to-the-point:

```perl
    sub lsm {
        my @points = @_;
        my ($s_x, $s_y, $s_xy, $s_x2) = (0, 0, 0, 0);
        for my $point (@points) {
            my ($x, $y) = ($point->[0], $point->[1]);
            $s_x += $x;
            $s_y += $y;
            $s_xy += $x * $y;
            $s_x2 += $x ** 2;
        }
        my $n = scalar @points;
        my $slope = ($n * $s_xy - $s_x * $s_y) / ($n * $s_x2 - $s_x ** 2);
        my $intercept = ($s_y - $slope * $s_x) / $n;
        return $slope, $intercept;
    }
```

[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/duncan-c-white/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/duncan-c-white/C/ch-2.c)

With his SVG creation code locked off in a separate personal module, the remaining best-fit calculation code for Duncan's submission is quite compact as well, only, you know, he actually checks all the boxes for the task. Oh well. Good for him.

Duncan, to those not familiar, is fond of `Function::Parameter` to provide subroutine signatures in his code; these structures are rebranded using the `fun` function keyword. So that's what that's all about.

TIMTOWTDI.

Carrying on, he demonstrates again is a straightforward fashion how creating his line is just an exercise of creating some aggregate data and filling it into find the slope and intercept parameters on a line equation.

The interface to his SGV creation code is quite interesting. I especially likes the bounding rectangle — that was a nice touch.

```perl
    fun bestfit( @data )
    {
        my $sumx = 0;
        my $sumy = 0;
        my $sumxy = 0;
        my $sumx2 = 0;
        foreach my $pt (@data)
        {
        	my( $x, $y ) = @$pt;
        	$sumx += $x;
        	$sumy += $y;
        	$sumxy += $x * $y;
        	$sumx2 += $x * $x;
        }
        my $n = @data;
        warn "bestfit: n=$n, sumx=$sumx, sumy=$sumy, sumxy=$sumxy, sumx^2=$sumx2\n" if $debug;

        my $m = ($n * $sumxy - $sumx * $sumy) / ($n * $sumx2 - $sumx * $sumx);
        my $c = ($sumy - $m * $sumx) / $n;

        warn "bestfit: m=$m, c=$c\n" if $debug;
        return( $m, $c );
    }

    my( $m, $c ) = bestfit( @pt );
    my $y1 = $m + $c;    		# for x==1
    my $y2 = $m * ($w-1) + $c;    	# for x==w-1

    start_svg( $w * $xscale, $h * $yscale );

    setcolour( "black" );
    setlinewidth( 1 );
    rect( 0, 0, $w-1, $h-1 );

    setcolour( "blue" );
    setlinewidth( 1 );
    line( 1, $y1*$yscale, ($w-1)*$xscale, $y2*$yscale );

    setcolour( "orange" );
    point( $_->[0]*$xscale, $_->[1]*$yscale ) foreach @pt;

    end_svg();

```

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/cheok-yin-fung/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/cheok-yin-fung/julia/ch-2.jl)


&nbsp;&nbsp;**blog writeup:**
[CY's Take on The Weekly Challenge #165 ](https://e7-87-83.github.io/coding/challenge_165.html)


Mathematical equations are CY's bread-and-butter, so she was quite at home with this little foray into statistics and implementing equations, right? Ok, sure. No problem. The mathematical realm is a uniquely complicated place, full of incomprehensible beauty and speechless terror. Perhaps statistics is not exactly in her wheelhouse, as she says.

How true her statement is remains uncertain to me, as she makes short work of the required calculations in any case.

In truth I ws hoping for an explanation as to how squaring the data seems to hit an ideal "sweet spot" in weighting towards small divergences and against outlier data far from the model projection. We could, after all, use cubes and get more compression, or logs and get less, but the least *squares* method seems to be universally accepted. I really haven't had time to study this question myself, and at the moment, much as I'd like to go down that rabbit-hole I need to exercise some discipline and get this review published.

Maybe next time, or maybe someone could point me to a paper.

```perl
    my $n = scalar @points;

    my $slope =
         (  $n * sum(map {$_->[0]*$_->[1]} @points)  # n sum(xy) - sum(x) sum(y)
          - sum(map{$_->[0]} @points) * sum(map{$_->[1]} @points) )
        / ( $n * sum(map{$_->[0]**2} @points)        # n sum(sq x) - sq(sum x)
             - (sum( map { $_->[0]} @points ))**2) ;


    my $intercept =
         ( sum( map {$_->[1]} @points )             # sum(y) - slope * sum(x)
        - $slope * sum( map {$_->[0]} @points) )
        / $n ;

    sub y_best_fit {
        my $x = $_[0];
        return $slope*$x + $intercept;
    }

    my $minx = min( map {$_->[0]} @points );
    my $maxx = max( map {$_->[0]} @points );

    my $line_of_best_fit =
        join ",", $minx,y_best_fit($minx),$maxx,y_best_fit($maxx);

    open FH, "> BEST_FIT_DATA" or die $!;
    say FH $line_of_best_fit;
    say FH $_->[0],",",$_->[1] for @points;
```





[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/roger-bell-west/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/roger-bell-west/javascript/ch-2.js), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/roger-bell-west/kotlin/ch-2.kt), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/roger-bell-west/lua/ch-2.lua), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/roger-bell-west/postscript/ch-2.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/roger-bell-west/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/roger-bell-west/raku/ch-2.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/roger-bell-west/ruby/ch-2.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/roger-bell-west/rust/ch-2.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: The Weekly Challenge 165: Scaling the Fits](https://blog.firedrake.org/archive/2022/05/The_Weekly_Challenge_165__Scaling_the_Fits.html)

The only submission to stray from the Least Squares technique when fitting their lines was Roger, who brings us something known as the "Theil–Sen estimator".

And what is that? No idea. Let's find out.

The [Theil–Sen estimator](https://en.wikipedia.org/wiki/Theil–Sen_estimator) works by calculating the slope between every pair of two points in the dataset and then calculating  the median of all of these slopes.

Well that does sound like it will work, doesn't it? And it does, and well. It is both efficient and apparently particularly robust in tolerating outlier points, compared to a standard least squares calculation.

```perl
    use List::Util qw(min max);

    foreach my $i (0..$#points-1) {
      foreach my $j ($i+1..$#points) {
        if ($points[$i][0] != $points[$j][0]) {
          push @slope,($points[$j][1]-$points[$i][1])/($points[$j][0]-$points[$i][0])
        }
      }
    }

    my $m = median(\@slope);

    my $c = median([map {$_->[1] - $m*$_->[0]} @points]);

    my @x=map {$_->[0]} @points;
    my @l;
    foreach my $xb (min(@x),max(@x)) {
      push @l,$xb;
      push @l,$xb*$m+$c;
    }

    print join(',',@l),"\n";

    sub median($s0) {
      my @s=sort {$a <=> $b} @{$s0};
      return $s[int((scalar @s)/2)];
    }
```

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/jo-37/perl/ch-2.pl)

Jorg brings us `PDL::Slatec` - a PDL interface to the slatec numerical programming library.

Despite the Perl Data Language being built for data processing, it will not do a least-squares analysis out-of-the-box. There are however several module options to supply this functionality, and as noted Jorg has picked `PDL::Slatec`, a perl interface to the FORTRAN SLATEC statistical library. For those curious, SLATEC is derived from "Sandia, Los Alamos, [Air Force Weapons Laboratory] Technical Exchange Committee".

The library provides a method, `polyfit()`, which given the point data set, an array of weights, and a maximum exponent to allow, will find the best line available through the points. Note we could for instance give this function a 2 and it would look for the best parabolic curve.

Here though, we are asking for straight line, so we pass it 1.

The `polyfit()` function returns a solution in an internal representation to describe the line. We can then gather the two points with minimal and maximal x-coordinates using the `minmax` function, and hand them to a second SLATEC function, `polyvalue()` to get a vector of y values from the `$fit` line function. Very nice.

Now that we have our line as 2 coordinate endpoints, we can draw it.

```perl
    sub least_square_linear_regression ($fh) {
        # Slurp the file content, remove trailing whitespace, convert
        # whitespace to semicolons and use the resulting string as a piddle
        # constructor argument.  This results in a 2xN piddle of coordinate
        # pairs.
        my $points = do {
            local $/;
            pdl <$fh> =~ s/\s+\z//r =~ s/\s+/;/gr
        };
        # Split the points' coordinates in separate piddles along the first
        # dimension resulting in piddles for x and y values as required by
        # "polyfit".  Then find the best fit with a polynomial of degree one
        # (i.e. a line).  Here only the solution's internal representation
        # is needed as the result.
        my $fit = (polyfit $points->xchg(0, 1)->dog, ones($points->dim(1)), 1)[3];
        # Get the x range.
        my $x = pdl minmax $points->slice(0);
        # Get the corresponding y values.
        my $y = (polyvalue(1, 0, $x, $fit))[0];
        # Create a line piddle having x and y as endpoint coordinates.
        my $line = pdl($x, $y)->xchg(0, 1);

        if (wantarray) {
            # Flatten the line piddle.
            return $line->list;
        } else {
            # Convert the line endpoints (2x2) into the shape expected by
            # gen_svg (2x2x1) from task 1 and generate an SVG from the given
            # points and the regression line.
            return gen_svg($points, $line->dummy(2));
        }
    }
```

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/wlmb/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 165 – W. Luis Mochán](https://wlmb.github.io/2022/05/20/PWC165/)

And finally we'll end with Luis, with a different approach to using the PDL.

Luis simply builds the required variables from scratch and installs them into equations to find slope and intercept coordinates for our line. Given these he can then plug minimal and maximal x-values into the results to calculate the related ys. Luis has opted not to draw the graphic, but delivered us a list of points and lines that can be fed to the previous program.

```perl
    use PDL;
    my $input=pdl($ARGV[0]);
    my $N=$input->dim(1); # number of points

    my $sum=$input->transpose->sumover;
    my ($sum_x, $sum_y)=$sum->list;
    my $sum_2=($input**2)->transpose->sumover; # sum of squares
    my ($sum_x_2, $sum_y_2)=$sum_2->list;
    my $sum_xy=$input->prodover->sumover; # sum of xy
    my $det=$N*$sum_x_2-$sum_x**2;
    die "Singular system" if $det==0;

    my $slope=($N*$sum_xy-$sum_x*$sum_y)/$det;
    my $intercept=($sum_x_2*$sum_y-$sum_x*$sum_xy)/$det;

    say join ",", @$_ for @{$input->unpdl}; # output points
    my $x=$input->slice("(0)"); # x coords
    my ($y0, $y1)=map {$slope*$_+$intercept} (my ($x0,$x1)=($x->minimum,$x->maximum));
    say "$x0, $y0, $x1, $y1";
```


## Blogs and Additional Submissions in Guest Languages for Task 2:


[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/adam-russell/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Prolog](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/adam-russell/prolog/ch-2.p)

&nbsp;&nbsp;**blog writeup:**
[SVG Plots of Points and Lines — Perl — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2022/05/22)

&nbsp;&nbsp;**blog writeup:**
[SVG Plots of Points and Lines — Prolog — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/prolog/2022/05/22)

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/dave-jacoby/perl/ch-2.pl)

&nbsp;&nbsp;**blog writeup:**
[Plotting Revenge: Weekly Challenge #165 | Committed to Memory](https://jacoby.github.io/2022/05/16/plotting-revenge-weekly-challenge-165.html)

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/polettix/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/polettix/raku/ch-2.raku)

&nbsp;&nbsp;**blog writeup:**
[PWC165 - Line of Best Fit - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/05/18/pwc165-line-of-best-fit/)

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/james-smith/perl/ch-2.pl)

&nbsp;&nbsp;**blog writeup:**
[The Weekly Challenge 165 - straight through the point!](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-165/james-smith)


[**Julien Fiegehenn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/julien-fiegehenn/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Typescript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/julien-fiegehenn/typescript/ch-2.ts)



[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/peter-campbell-smith/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Dots, lines and whatever fits best](https://pjcs-pwc.blogspot.com/2022/05/dots-lines-and-whatever-fits-best.html)


[**Ryan Thompson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-165/ryan-thompson/perl/ch-2.pl)

&nbsp;&nbsp;**blog writeup:**
[PWC 165 › Simple SVG generator - Ryan J Thompson](https://ry.ca/2022/05/simple-svg-generator/)


















------------------------------------------





---

<p> &nbsp; </p>
<p> &nbsp; </p>
<p> &nbsp; </p>
<p> &nbsp; </p>

<center>
<h1 id="PWC165BLOGS">_________ THE BLOG PAGES _________</h1>
</center>


---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, by some miracle I somehow continue to maintain my bearings.**

**Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your Unquenchable *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC165BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *FOLLOW* these *BLOG* *LINKS*:

**( ...*don't think, trust your training, you're in the zone, just do it ...* )**


**Adam Russell**

 * [SVG Plots of Points and Lines — Perl — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2022/05/22) ( *Perl* )
 * [SVG Plots of Points and Lines — Prolog — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/prolog/2022/05/22) ( *Prolog* )

**Arne Sommer**

 * [Doubly Scalable with Raku - Arne Sommer](https://raku-musings.com/doubly-scalable.html) ( *Raku* )

**Cheok-Yin Fung**

 * [CY's Take on The Weekly Challenge #165 ](https://e7-87-83.github.io/coding/challenge_165.html) ( *Perl* )

**Dave Jacoby**

 * [Plotting Revenge: Weekly Challenge #165 | Committed to Memory](https://jacoby.github.io/2022/05/16/plotting-revenge-weekly-challenge-165.html) ( *Perl* )

**Flavio Poletti**

 * [PWC165 - Scalable Vector Graphics (SVG) - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/05/17/pwc165-scalable-vector-graphics/) ( *Perl & Raku* )
 * [PWC165 - Line of Best Fit - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/05/18/pwc165-line-of-best-fit/) ( *Perl & Raku* )

**James Smith**

 * [The Weekly Challenge 165 - straight through the point!](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-165/james-smith) ( *Perl* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 165: Line of Best Fit](http://blogs.perl.org/users/laurent_r/2022/05/perl-weekly-challenge-165-line-of-best-fit.html) ( *Perl & Raku* )
 * [Perl Weekly Challenge 165: Scalable Vector Graphics](http://blogs.perl.org/users/laurent_r/2022/05/perl-weekly-challenge-165-scalable-vestor-graphics.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 165: SVG](https://fluca1978.github.io/2022/05/18/PerlWeeklyChallenge165.html#task1) ( *Raku* )
 * [Perl Weekly Challenge 165: SVG](https://fluca1978.github.io/2022/05/18/PerlWeeklyChallenge165.html#task1plperl) ( *PL/Perl* )
 * [Perl Weekly Challenge 165: SVG](https://fluca1978.github.io/2022/05/18/PerlWeeklyChallenge165.html#task1plpgsql) ( *PL/PostgreSQL* )

**Peter Campbell Smith**

 * [Dots, lines and whatever fits best](https://pjcs-pwc.blogspot.com/2022/05/dots-lines-and-whatever-fits-best.html) ( *Perl* )

**Roger Bell_West**

 * [RogerBW's Blog: The Weekly Challenge 165: Scaling the Fits](https://blog.firedrake.org/archive/2022/05/The_Weekly_Challenge_165__Scaling_the_Fits.html) ( *Perl & Raku* )

**Ryan Thompson**

 * [PWC 165 › Simple SVG generator - Ryan J Thompson](https://ry.ca/2022/05/simple-svg-generator/) ( *Perl* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 165 – W. Luis Mochán](https://wlmb.github.io/2022/05/20/PWC165/) ( *Perl* )
