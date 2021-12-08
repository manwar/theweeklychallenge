---
title: "Advent Calendar - December 8, 2021"
date: 2021-12-08T00:00:00+00:00
description: "Advent Calendar - December 8, 2021."
type: post
image: images/blog/2021-12-08.jpg
author: James Smith
tags: ["Perl"]
---

[**Advent Calendar 2021**](/blog/advent-calendar-2021)
***

The gift is presented by `Colin Crain`. Today he is talking about his solution to [**"The Weekly Challenge - 112"**](/blog/perl-weekly-challenge-112). This is re-produced for **Advent Calendar 2021** from the original [**post**](https://colincrain.com/2021/05/15/after-finding-our-bearings-one-two-and-up-we-go/) by `Colin Crain`.

***

<br>

## Task #1: Canonical Path

<br>

You are given a string path, starting with a slash ‘/'.

Write a script to convert the given absolute path to the simplified canonical path.

In a Unix-style file system:

<br>

    - A period '.' refers to the current directory
    - A double period '..' refers to the directory up a level
    - Multiple consecutive slashes ('//') are treated as a single slash '/'

<br>

The canonical path format:

    - The path starts with a single slash '/'.
    - Any two directories are separated by a single slash '/'.
    - The path does not end with a trailing '/'.
    - The path only contains the directories on the path from the root directory to the target file or directory

<br>

***

<br>

> Wherein we sort through the misdirection to find the one true way to the mountain, and then, after doing so, find a bunch of different ways to make the climb.

<br>

### episode one: “Where am I? Where are my friends?”

<br>

## BACKGROUND

<br>

In a world of stuff, sometimes some of that stuff needs to find other stuff, to, you know, do stuff.

This is a profound and heady statement, to be sure, indicating we’re in for a wild ride.

I’m phrasing things in the vaguest manner possible because it doesn’t really matter exactly what is looking for what: a message may need delivering; a phone may need to ring; a human may need to find its home, or food, or a bar; a blood-lusting robot may need to find out where all the humans are hiding. A subject needs an object to perform an action, either to the object or with the object. And to do this the subject needs to find the object.

After eliminating random dumb luck as a survival strategy, to get predictability we need a generalized concept of where things are in order to find them. We may not always have the whole picture, and that’s fine; sometimes we just need to know how to get from here to there. But if either we or our stuff are likely to move about it becomes increasingly unlikely we will always be able to keep whatever it is we need close by and within reach. What we really could use in that case is a map. We can then position ourselves and the object of our desires within a common context sufficiently large to encompass both. By developing the idea of coordinates, or an address, things can then move around without the need to update what may be increasingly complex relative directions — by consulting the map we can quickly reorient our schema at any time. Third parties can even make reference to the same map as you, allowing, for example, aerial spotter drones to mark the locations of heat signatures on the map, indicating to you where the humans are likely to be gathered. Different processes can work together within a common system.

In a general-purpose computer these ideas are much less abstract. Programs, themselves stored as binary data, require resources — configuration files, input and output files, all of this more data — to act, and need a consistent way to locate all of these things. There can be multiple ways to define the location of an object: relative relationships between items, such as `"two blocks down and on the right"`, or `"right next to you"`, or absolute placements, akin to a mailing address in the memory where we can find the item: city, street, building, floor and room.

Whereas the idea of a location is a specific position on a map containing it, the idea of directions to a location is not as well fixed. Locations are often derived from a combination of absolute and positional referencing, yielding a path, that while accurately identifying a specific location, may not describe the best and clearest way to get there. Paths may end up including redundant information, backtracking or even, in the case of filesystems that support them, shortcuts cross-linking one area to another. The absolute path given may not be the best path, but there are generally ways to clarify an absolute path so that there remains a single identifier that best specifies a particular place in the filesystem. This is known as the `"canonical"` path.

<br>

## METHOD

<br>

In the world of UNIX, there are two special relative file locations: `"."` – the current directory, `"right here"`, and `".."` – the enclosing directory, which the current directory sits inside. Put another way, in an absolute path `".."` is back one level to the one before.

However converting to canonical path form is not always quite as simple as restructuring any `./` and `../` notation into real directories and normalizing superfluous chaff such as `//`, because a canonical path is always an absolute path and the given path may not be. To get an absolute path from a relative path you need an idea of where you are to center the reference. This would be the current working directory, or `cwd`.

Although there exist ways to query the operating system to obtain the cwd, fortunately for us today the task is defined as having been given an absolute path, neatly sidestepping that mess.

It also should be noted that a canonical path also resolves soft links, which remains a difficulty, as **Perl** is not in itself a shell. We do have the `-l` file test operator, and there are always ways involving a module to address this, but I’m going to assume that particular edge case is outside the scope of the problem.

That said, a partial solution is provided in **Perl**.

<br>

## PERL SOLUTION

<br>

This properly resolves the relative expressions `./` and `../`, also removing redundant and trailing slashes. We need to futz at the end to make sure we start with a leading slash, even if there’s no path left, say in the case we gave it `../../../` to resolve.

<br>

```perl
sub canonical ($path) {
    $path =~ s{//+}{/}g;
    $path =~ s{/\./}{/}g;
    $path =~ s{/$}{};

    my @parts = split '/', $path;

    my $pos = 0;
    while ($pos < @parts) {
        if ($parts[$pos] eq '..') {
            if ($pos > 0) {
                splice @parts, $pos-1, 2;
                $pos -= 2;
            }
            else {
                splice @parts, $pos, 1;
                $pos--;
            }
        }
        $pos++;
    }
    @parts = (undef, undef) unless scalar @parts;
    unshift @parts, '' if $parts[0] ne '';
    join '/', @parts;

}
```

<br>

The `Cwd` core module has a function `abs_path()` which seems quite handy, but only works relative to the current working directory. If the location given exists, and the script has sufficient privileges, we could `chdir` to the path location and then this will work to resolve soft links to reveal the canonical path:

<br>

```perl
use Cwd qw( abs_path );

sub canonical_softlinks ($path) {
    chdir $path;
    return abs_path( $path );
}
```

<br>

But that’s quite a workaround; incomplete and fraught with peril. Not really a robust way to proceed, but sometimes that’s all you get.

A better way would be to ask the system directly:

<br>

```perl
sub canon_sys ($path) {
    my $cur = `pwd`;
    chdir '/';
    my $out = `realpath -m $path` ;
    chomp $out;
    chdir $cur;
    return $out;
}
```

<br>

The only problem here is if you don’t have proper permissions to `chdir` down to root and switch back. We could avoid this detail but the `cwd` would be prepended to the result.

<br>

## COMPLETE SOLUTION

<br>

```perl
use warnings;
use strict;
use feature ":5.26";
use feature qw(signatures);
no warnings 'experimental::signatures';
use Cwd qw( abs_path );


sub canonical ($path) {
    $path =~ s{//+}{/}g;
    $path =~ s{/\./}{/}g;
    $path =~ s{/$}{};

    my @parts = split '/', $path;

    my $pos = 0;
    while ($pos < @parts) {
        if ($parts[$pos] eq '..') {
            if ($pos > 0) {
                splice @parts, $pos-1, 2;
                $pos -= 2;
            }
            else {
                splice @parts, $pos, 1;
                $pos--;
            }
        }
        $pos++;
    }
    @parts = (undef, undef) unless scalar @parts;
    unshift @parts, '' if $parts[0] ne '';
    join '/', @parts;
}

## this will resolve relative paths, and soft links, with the Cwd package, which
## doesn't really solve that problem in a general way. We need to `chdir` over to
## the place in question, which would need to both exist and have the right
## permissions. The whole thing is a bit of a mess, really, and I don't think
## that's what Mohammad is asking of us.
sub canonical_softlinks ($path) {
    chdir $path;
    return abs_path( $path );
}

## a solution using realpath from the system utilities
## we still need to chdir down to root unless we want the cwd prepended to an assumed
## relative path
sub canon_sys ($path) {
    my $cur = `pwd`;
    chdir '/';
    my $out = `realpath -m $path` ;
    chomp $out;
    chdir $cur;
    return $out;
}



use Test::More;

is canonical("/a/"), "/a"             , 'ex-1';
is canonical("/a/b//c/"), "/a/b/c"    , 'ex-2';
is canonical("/a/b/c/../.."), "/a"    , 'ex-3';
is canonical('a/b/c//.//../d/'), "/a/b/d"    , 'hateful';
is canonical("../../../b"), "/b"             , 'rogers bane';
is canonical(".."), "/"             , 'no path';
is canonical("/"), "/"             , 'no path2';


is canon_sys("/a/"), "/a"             , 'sys-ex-1';
is canon_sys("/a/b//c/"), "/a/b/c"    , 'sys-ex-2';
is canon_sys("/a/b/c/../.."), "/a"    , 'sys-ex-3';
is canon_sys('a/b/c//.//../d/'), "/a/b/d"    , 'sys-hateful';
is canon_sys("../../../b"), "/b"             , 'sys-rogers bane';
is canon_sys(".."), "/"             , 'sys-no path';
is canon_sys("/"), "/"             , 'sys-no path2';


done_testing();
```

<br>

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

[**Advent Calendar 2021**](/blog/advent-calendar-2021)
