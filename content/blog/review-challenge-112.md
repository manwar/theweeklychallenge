
---
author:       Colin Crain
date:         2021-05-31T00:00:00
description:  "Colin Crain › Perl Weekly Review #112"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #112"
image:        images/blog/p5-review-challenge-112.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-111/).* )

Welcome to the Perl review for **Week 112** of the Weekly Challenge! Here we will take the time to discuss the  submissions offered by the team, factor out the common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

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

**<big>For context</big>**  before we begin, you may wish to revisit either of the pages for the [**original tasks**](/blog/perl-weekly-challenge-112/) or the summary [**recap**](/blog/recap-challenge-112/) of the challenge. But don't worry, the challenges themselves will be briefly summarized, presented below as we progress from task by task. Oh, and one more thing before we get started:

### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

**So finally, without further ado...**

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC112TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC112TASK2)   &nbsp;  &nbsp;  &nbsp;   	•   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC112BLOGS)    &nbsp;  &nbsp;  &nbsp;   	•

---

# TASK 1 {#PWC112TASK1}

# Canonical Path
*Submitted by: Mohammad S Anwar*<br>
You are given a string path, starting with a slash '/'.

Write a script to convert the given absolute path to the simplified canonical path.

In a Unix-style file system:

- A period '.' refers to the current directory
- A double period '..' refers to the directory up a level
- Multiple consecutive slashes ('//') are treated as a single slash '/'

The canonical path format:

- The path starts with a single slash '/'.
- Any two directories are separated by a single slash '/'.
- The path does not end with a trailing '/'.
- The path only contains the directories on the path from the root directory to the target file or directory

**Example**
```
    Input: "/a/"
    Output: "/a"

    Input: "/a/b//c/"
    Output: "/a/b/c"

    Input: "/a/b/c/../.."
    Output: "/a"
```

## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/abigail/perl/ch-1.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/arne-sommer/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/athanasius/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/cheok-yin-fung/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/dave-jacoby/perl/ch-1.pl),
[**Dimitar Dimitrov**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/kurkale6ka/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/polettix/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/jaldhar-h-vyas/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/jo-37/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/laurent-rosenfeld/perl/ch-1.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/stuart-little/perl/ch-1.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/wlmb/perl/ch-1.pl)


It was a rough bit of business, out on the streets today. In the end there proved to be only 15 seemingly unbreakable solutions for the first task this week, a unusually sordid winnowing. Again I find myself here with the need to clarify that I don't go into this work looking to wreck stuff. Sometimes it just happens, I swear. I do not gain any pleasure, sadistic or otherwise, from the events that transpire.

I *have* been told I can accomplish a very convincing, disturbing maniacal cackle. If it makes it easier to visualize things happening that way, well, so be it, and knock yourselves out. We did cut a rather brutal, indiscriminate swath through the field today.

## the TESTS

When thinking about these convoluted paths that need resolving, my mind went to how we could end up here in the first place, looking at a mess of adjacent slashes, backdirectory references and no-ops.  My conclusion was this would most likely arise by concatenating relative paths, given an irregular application of leading and trailing slashes. There are of course countless ways for an application to construct a connection to a resource, but here we'll focus on just this idea of concatenation, and how that can produce errors that need resolving.

In UNIX filesystems the ideas of leading and trailing path delimiters is somewhat loosely enforced. Both have meaning: the last element in a path can point to a directory or a file (or a link, but lets keep this simple), but if we add a trailing slash it can only be a directory. This can serve as a nice visual aide, but a directory without a slash is still a directory all the same. At the front a slash serves to tell us we're starting from the root directory, but if the current directory happens to *be* the root directory it may be omitted. As I said, there are rules but they have some loose ends as far as consistency.

A common requirement is to join together partial paths to create a complete link to a resource. Because we can't necessarily be sure a partial path either starts or end with a delimiter, the safe way is join them with a new delimiter. You can see where this is going, and this is how you can end up with a pair of delimiters in a row. But why stop there? What if we were to join three paths and the middle one was empty? In this case we could end up with `///`.

Partial, relative paths often begin with the directive to go out one level or two into the enclosing directory structure, resulting in a start from `../` or maybe even `../../`. Combine this into the mix and now that expression gets parked in the middle of your new path. Sometimes the no-op direction, the current directory — "right here" — needs to be explicitly referred to, and that gets noted with a leading `./`, usually seen before an executable of some kind.

The upshot of all of this is that through concatenation any combination of these elements can end up appearing at any point in a constructed path. So I wrote up one that incorporated as many fringe cases as I could.

    a/b/c//.///../d/    -->     /a/b/d

1. two slashes is not a limit, so we have both an odd and even number represented
2. has a trailing slash
3. the backreference appears to point to either an empty directory or the current directory placeholder
4. has no leading slash. We'll expand on this further:

On the subject of the leading slash, or lack thereof, the correct course of action here is a bit ambiguous. A canonical path is an absolute path, by definition, and without knowledge of the current working directory that can't be properly resolved. On the other hand the resolution of the internal complications is in almost all cases independant from the absolute or relative nature; the simplification remains the same.

Some solutions outright refused to process a path without a leading slash, which was an reasonable course of action. Others accepted the path given as though it were an absolute path with the leading slash omitted, which under the right conditions — the current working directory being the root directory — it might well be. This was also considered a reasonable assumption. Any script that accepted the absence of a leading slash was generally expected to deliver the same result as with a slash prepended.

As time went on I developed a second, adjunct monstrosity:

    /../../../../../b/   -->    /b

The results of all my tinkering, when things got weird, were verified by the GNU utility `realpath -m`:

```perl
    [colincrain@boris:/]$  realpath -m 'a/b/c//.///../d/'
    /a/b/d
```


## PARSE it with REGULAR EXPRESSIONS
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/dave-jacoby/perl/ch-1.pl),
[**Dimitar Dimitrov**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/kurkale6ka/perl/ch-1.pl), and
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/polettix/perl/ch-1.pl)

The path we are given is in the form of a string, directions on how to get there versus an actual linked list of nodes. As any string it can be parsed, and regular expressions excel at identifying and altering select portions of strings. As my mentor used to say: "it's all just text".

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/dave-jacoby/perl/ch-1.pl)

There are three basic actions required here, that we will see being handled over and over: the removal of no-op directory references to the current directory, the reduction of more than one delimiter to a single slash, and resolving references to the parent directory by removing the directory before the reference. This last on is tricky, as the directory before the parent directory reference may itself be a parent or current directory reference. Commonly to get this right the expression would be called repeatedly rather than doing a global search-and-replace, as this would properly reset the position counter for the regex after the substitution. Since we're doing that anyway, Dave here combines alll three substitutions into a common loop, that continues as long as there's more work to be done.

At the end of the process a trailing slash, if present, is lopped, and a leading slash is inserted if it's not already there.

```perl
    sub canonical_path ($path) {
        while ($path =~ m{/\w+/\.\.}mix
            || $path =~ m{//}mix
            || $path =~ m{/\./}mix )
        {
            $path =~ s{/\w+/\.\.}{/}mix;
            $path =~ s{//}{/}mix;
            $path =~ s{/\./}{/}mix;
        }
        $path =~ s{/$}{}mix;
        $path = qq{/$path} unless $path =~ m{^/}mix;
        return $path;
    }
```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/polettix/perl/ch-1.pl)

The loop, resetting the position counter, is only really necessary in the final stage of resolving the parent directory links. A while loop is an effective way to acomplish the reset, with the conditional, the regex, performing all the necessary action.

```perl
    sub canonical_path ($p) {
       $p =~ s{/\K(?:\.?/)+}{}gmxs;
       $p =~ s{\A/.*\K/\z}{}mxs;
       1 while $p =~ s{/[^/]+/\.\.(/|\z)}{$1}mxs;
       return $p;
    }
```


[**Dimitar Dimitrov**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/kurkale6ka/perl/ch-1.pl)

Two of the actions, removing the current directory links and empty links, are well-suited to a global search-and-replace, so Dimitar combines these in a single alternating expression. Dimitar dispatches this processing first, followed by setting up another substitution in a compact `while` loop to process out the parent directory references.

```perl
    # squeeze /s + remove final ones and get rid of /./
    s#/\.?(?=(/|$))##gn;

    # discard /dir/.. occurrences from path
    1 while s#/([^/]+/)?\Q..##n;
    # { redo if s#/([^/]+/)?\Q..##n }

    say $_||'/'
```

Notably, Dimitar also includes a "human readable" solution that employs `split`, `push` and `pop` to get the various jobs done, even including a one-liner version:

```perl
    -E'for(split/\//,pop){/^\.$/&&next;if(/^\.\.$/){pop@path}else{push@path,$_ if length}}say"/",join"/",@path'
```

Rather than linger here in Dimitar's one-stop shopping mart, this makes a nice segue into our next section, where we'll take a deeper look at array-based techniques.

## SPLIT the path into an ARRAY and work on that
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/abigail/perl/ch-1.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/arne-sommer/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/athanasius/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/cheok-yin-fung/perl/ch-1.pl),
[**Dimitar Dimitrov**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/kurkale6ka/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/e-choroba/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/james-smith/perl/ch-1.pl), and
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/jo-37/perl/ch-1.pl)

Although presented as a string, the path is really a list of directions, each step, working left-to-right, telling us how to proceed to the next. A driving metaphor is not the worst analogy: sometimes we are told to turn on a new connecting street, others to just keep on going down the one we're on. Sometimes we're given the annoying navigator who tells us, after the fact, that we've made a wrong turn and need to go back two blocks and keep going straight instead [*rolls eyes*]. Sometimes we even go into a tunnel and come out in New Jersey.

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/cheok-yin-fung/perl/ch-1.pl)

CY presents us with the technique. After splitting on the delimiter, `/`, the resulting list is first filtered for extraneous and unhelpful information. This would be the no-ops — the empty elements and those containing a single dot. They don't actually redirect us so they can be safely removed.

To deal with the wrong turns, we need to make an optimal set of directions out of this new list. The process is simple: for every remaining path segment, we push it on to our output array, unless it's a `..` field, in which we `pop` one element off the array to get us back on track. The remaining elements in the output array are joined with the delimiter and appended to a single slash to produce our canonical form.

```perl
    my @directories = grep { $_ ne "" && $_ ne "."  } split "/", $origin;

    for (@directories) {
        if ($_ ne "..") {
            push @new_dirs, $_;
        }
        else {
            pop @new_dirs;
        }
    }
    print ( "/" . (join "/", @new_dirs));

```
The submissions by
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/abigail/perl/ch-1.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/arne-sommer/perl/ch-1.pl), and
[**Dimitar Dimitrov**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/kurkale6ka/perl/ch-1.pl)
all very closely followed this tight, compact form of alternately applying `push` or `pop`.
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/james-smith/perl/ch-1.pl) also gave us a `push`/`pop` solution, albeit a little differently shaped.

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/athanasius/perl/ch-1.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/athanasius/raku/ch-1.raku)


The monk makes a couple of judgement calls for their solution:
1. they will not process a path that does not begin with a slash
2. they will not process a path that attempts to look for a parent directory from root, which is to say `/a/../../b` will error as it's looking too far upstream.

This last criteria makes me curious, as my UNIX resolves the parent directory for root as root. To demonstrate:

```
    [colincrain@boris:/]$  cd /
    [colincrain@boris:/]$  cd ..
    [colincrain@boris:/]$  pwd
    /
```

This doesn't somehow fail, it just leaves you at the root level where you were. Similarly `realpath '/..'` resolves to '/'. But these could be regarded as hacks themselves, prioritizing results over logic. As the behavior is documented, I won't argue with it.

```perl
    for my $dir (grep { /./ } split '/', $path)
    {
        next if $dir eq '.';                        # Current directory: ignore

        if ($dir eq '..')                           # Parent directory
        {
            if (scalar @canonical_dirs == 0)        # Impossible case
            {
                $valid_path = 0;
                last;
            }
            else                                    # Go one directory "up"
            {
                pop @canonical_dirs;
            }
        }
        else                                        # Go one directory "down"
        {
            push @canonical_dirs, $dir;
        }
    }
```

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/e-choroba/perl/ch-1.pl)

The other way to traverse the list was with a index iterator, serving as a position counter. In this plan instead of `pop`, we need `splice` to remove both the `..` element at the index found and the element before it.

After filtering the list of elements an interator is set up, and the list traversed. Should a backstepping element arise the `splice` is applied and the position counter adjusted. We need to make a special case should we try and go up more levels than available, stopping at the root level without erroring.

```perl
    sub canonical_path {
        my ($path) = @_;
        my @steps = grep length && $_ ne '.', split m{/}, $path;
        for (my $pos = 0; $pos <= $#steps; ++$pos) {
            if ('..' eq $steps[$pos]) {
                if ($pos > 0) {
                    splice @steps, $pos - 1, 2;
                    $pos -= 2;
                } else {
                    splice @steps, $pos--, 1;
                }
            }
        }
        return '/' . join '/', @steps
    }
```

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/james-smith/perl/ch-1.pl)

All of the `split` processing we have seen so far has been followed by an initial filtering with `grep` to remove empty segments and current directory references. The ones mentioned in passing essentially follow the same course. James, seemingly, hmm...

Is "obsessed" too strong a word? It does bear certain negative connotations I'd like to avoid...

...Let's call him a performance optimization "enthusiast" instead. A spirited enthusiast.

Well, in a very scientific effort to examine and eek out every ounce of speed from the algorithms, James constructs a suite of variations on a theme and benchmarks them, reporting the results. He gives us the `splice` pattern, as well as the `push/pop` pattern and another involving a regular expression to remove the parent directory. The fastest form proved to be something we haven't yet seen: a combination of concatenating the final path string as elements are processed and using `rindex` and `substr` to remove a parent directory when required.

```perl
    sub canonical_path_string_fast {
      my $path = shift;
      my @directories    = split m{/},               ## Split path into directory names
                           $path;

      my $canonical_path = '';                       ## Initialize canonical path

      foreach my $directory_name ( @directories ) {  ## For each directory we
        next if $directory_name eq '';               ## Remove "empty" directory names
        next if $directory_name eq '.';              ## Remove directories named "."
                                                     ## (current directory)
        if( $directory_name eq q(..) ) {             ## look to see if it is
                                                     ## ..;
          substr $canonical_path,
                 rindex( $canonical_path, '/' ),
                 ~0, '';                             ## If so remove parent directory
                                                     ## if one is set....
        } else {
          $canonical_path .= q(/) . $directory_name; ## add directory name to end
        }
      }
      return $canonical_path;
    }
```

He also provides 1-liner versions of the routines, which bring with them a modest but significant speed boost. On the other hand, they aren't what you would call human readable anymore.

```perl
sub canonical_path_fastest {
    $a='';
    '.'ne$_&&''ne$_&&('..'ne$_?$a.='/'.$_:substr$a,rindex($a,'/'),~0,'')for split'/',shift;
    $a
}
```

For a more thorough and in-depth explanation of the methods an results, consult his [official write-up of the incident](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-112/james-smith).



### a BLEND of techniques
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/duncan-c-white/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/jaldhar-h-vyas/perl/ch-1.pl), and
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/laurent-rosenfeld/perl/ch-1.pl)

Of course in general we should reach for the best tool for the job, and so consequently we also saw a mix of techniques to perform the various transformations. Enacting one change at a time leads to readable code.

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/laurent-rosenfeld/perl/ch-1.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/laurent-rosenfeld/raku/ch-1.raku)

Laurent makes one logical check against the path given — if there are too many parent directory links to resolve the routine will issue a warning and skip to the next test. I spoke to this behavior earlier when we looked at Athanasius' submission and I can't really say whether the best choice is to be practical or logical. I imagine it would in the end depend on whether we find our resource or not.

```perl
    TEST: for my $path (@tests) {
        my $p = $path;
        $path =~ s|\/\/+|/|g;
        $path =~ s!^\/|\/$!!g;
        my @path_items;
        for my $item (split /\/+/, $path) {
            next if $item eq '.';
            if ($item eq '..') {
                warn "Invalid path $p" and next TEST unless @path_items;
                pop @path_items;
            } else {
                push @path_items, $item;
            }
        };
        say "$p => /", join '/', @path_items;
    }
```

[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/jaldhar-h-vyas/perl/ch-1.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/jaldhar-h-vyas/raku/ch-1.raku)

Jaldhar takes a different approach to the steps, skipping ahead to resolving the parent directories first. When traversing the list of segments, when a `..` is found a separate position counter backtracks until a non-empty, non-current-directory segment is found and deletes it. After all is said and done `/./` directories are set to empty as well, and a `grep` is used to filter out the empty elements before joining with a slash.

Jaldhar has an [excellent writeup](https://www.braincells.com/perl/2021/05/perl_weekly_challenge_week_112.html) of his unusual process.

```perl
    $path =~ s{ /+ }   {/}gmsx;
    $path =~ s{ / \z } {}msx;

    my @dirs = split m{/}, $path;

    for my $i (0 .. scalar @dirs - 1) {
        if ($dirs[$i] eq q{..}) {
            my $j = $i - 1;
            while ($j != 0 && $dirs[$j] eq q{}) {
                $j--;
            }
            $dirs[$j] = q{};
            $dirs[$i] = q{.};
        }
        if ($dirs[$i] eq q{.}) {
            $dirs[$i] = q{};
        }
    }
```



### a UNIQUE `split` and `grep` implementation

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/jo-37/perl/ch-1.pl)

Jorg is always gifting us with unusual takes on the challenges, and this week is no different. Here are his own words on the process steps:

- Remove leading slashes or give up.
- Split the path into parts delimited by (possibly multiple) slashes.
- Reverse the parts.
- Increment the skip count if the current part is '..' and suppress
  the current part.
- Suppress the current part if it is '.' or the skip count is positive
  (decrementing it).
- Pass the current part otherwise.
- Reverse the parts.
- Give up if the skip count is still positive after all parts have
  been processed.
- Prepend an empty part to produce a leading slash.
- Provide an empty part if the given path resolves to the
  root path i.e. it has no parts.
- Join the parts with slashes.

Of note I like the idea of temporarily reversing the sliced array so the deletions are forward, not back, reversing again for output. It's a good way to sidestep a number of  issues, and allows for the technique where `grep` does the iteration, and can be set to filter  the next element according to a running "skip" counter.

```perl
```

    sub c_path {
        local $_ = shift;
        s{^/+}{} or return;

        my $skip;
        my @part = reverse grep {
            /^\.\.\z/ ? !++$skip : /^\.\z/ || $skip && $skip-- ? 0 : 1;
        } reverse split m{/+};

        $skip ? undef : join '/', '', @part, ('') x !@part;
    }

## reach for a module
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/colin-crain/perl/ch-1.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/stuart-little/perl/ch-1.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/wlmb/perl/ch-1.pl)

Cpan and the core modules provide a variety of ways to solve or help solve this problem.

[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/stuart-little/perl/ch-1.pl)

**additional languages:**
[Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/stuart-little/haskell/ch-1.hs), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/stuart-little/node/ch-1.js), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/stuart-little/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/stuart-little/raku/ch-1.p6)

Using the `Path::Resolve` module will properly resolve an absolute path from the current working directory, so the nefarious example I cooked up is prepended with the cwd back to the root. This is what happens when you get proper access to the filesystem.

```perl
    use Path::Resolve;
    say Path::Resolve->new()->resolve($ARGV[0]);
```

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/wlmb/perl/ch-1.pl)

Luis doesn't exactly ask a module to do his work for him, rather he just reaches out to `Cwd` for a little assistance in resolving his location. When given a path to the current working directory, he can properly translate relative paths into absolute ones. This is perhaps the nicest way we've seen to resolve the ambiguity when given a relative path while still manually clarifying the path.

```perl
    my $cwd=cwd; # Current working directory, for relative paths
    for my $input(@ARGV){ #provide paths in @ARGV
        my $path=$input;
        $path = "$cwd/$path" unless $path=~m{^/}; # relative -> absolute path
        $path.="/"; #add temporal trailing slash as guard
        while($path=~s{//}{/}){}; # remove all //
        while($path=~s{/\./}{/}){}; # remove all /.
        while($path=~s{/[^/]+?/\.\./}{/}){}; # remove all /dir/..
        while($path=~s{^/(\.\./)+}{/}){}; # remove all leading  /..
        $path=~s{^(/.*)/$}{$1}; # remove trailing / if not first
        say "Input: $input Output: $path";
    }
```

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/colin-crain/perl/ch-1.pl)

Not quite a module, but conceptually similar: one method I haven't seen elsewhere is to actually call on UNIX to resolve the path for you. I already made allusion to this when sorting particularly thorny obfuscations, calling the system utility `realpath`. This normally requires the paths to exist on the filesystem, but setting the `-m` option allows it to work in hypothetical space. I decided to accept a relative path as a malformed absolute path, that is to say without a leading `/`, so to keep from resolving from the current directory we `chdir` down to root first and change back when we're done:

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


## Additional Submissions in Guest Languages:

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/abigail/perl/ch-1.pl)

**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/abigail/awk/ch-1.awk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/abigail/bash/ch-1.sh), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/abigail/c/ch-1.c), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/abigail/lua/ch-1.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/abigail/node/ch-1.js), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/abigail/python/ch-1.py), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/abigail/ruby/ch-1.rb)

[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/arne-sommer/perl/ch-1.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/arne-sommer/raku/ch-1.raku)

[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/colin-crain/perl/ch-1.pl)

**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/colin-crain/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/colin-crain/raku/ch-1.raku)

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/roger-bell-west/perl/ch-1.pl)

**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/roger-bell-west/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/roger-bell-west/raku/ch-1.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/roger-bell-west/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/roger-bell-west/rust/ch-1.rs)



------------------------------------------





---

# TASK 2 {#PWC112TASK2}

# Climb Stairs
*Submitted by: Mohammad S Anwar*<br>
You are given $n steps to climb

Write a script to find out the distinct ways to climb to the top. You are allowed to climb either 1 or 2 steps at a time.

**Example**
```
    Input:  $n = 3
    Output: 3
```
**Option 1:** 1 step  + 1 step<br>
**Option 2:** 1 step  + 2 steps<br>
**Option 3:** 2 steps + 1 step<br>
```
    Input:  $n = 4
    Output: 5
```
**Option 1:** 1 step  + 1 step  + 1 step  + 1 step<br>
**Option 2:** 1 step  + 1 step  + 2 steps<br>
**Option 3:** 2 steps + 1 step  + 1 step<br>
**Option 4:** 1 step  + 2 steps + 1 step<br>
**Option 5:** 2 steps + 2 steps<br>


## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/abigail/perl/ch-2.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/adam-russell/perl/ch-2.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/arne-sommer/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/athanasius/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/cheok-yin-fung/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/colin-crain/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/dave-jacoby/perl/ch-2.pl),
[**David Schwartz**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/dms061/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/polettix/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/jaldhar-h-vyas/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/james-smith/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/jo-37/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/laurent-rosenfeld/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/perlboy1967/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/roger-bell-west/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/sgreen/perl/ch-2.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/stuart-little/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/ulrich-rieke/perl/ch-2.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/wlmb/perl/ch-2.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/wanderdoc/perl/ch-2.pl)


There were 22 submissions for the second task this past week. For this task things went pretty well.

The answer to the question is unexpectedly simple: those who knew, or figured it out, found it revealed in the Fibonacci sequence value for the next higher index:

**Steps**(*n*) = **F**(*n*+1)

This fact is apparently at least somewhat well known, but I myself wasn't aware of it going in. After calculating the first few members of the sequence, however, I did recognize the pattern and figured out what was going on.

As the Fibonacci recurrence relation isn't just a coincidental side-effect but at the core of the underlying mathematics, those solutions that didn't explicitly set out to create a Fibonacci sequence ended up doing so anyways, sometimes in new and unusual ways, which is a fascinating overview of the subject. Even in manually assembling the variations, one can see the way the recurrence interacts if you look for it.

There was some ambiguity in what was expected for a result — either a number of step variations or an enumerated list of options displaying the individual ways, as in the descriptions in the examples. This became one of the prime differentiators in this task. Another, for those who chose to accept it, was in how to show the step combinations.

As for myself, having calculated out the progression of the sequence I understood full well how quickly it grows and passed on that idea. Others, either braver, more foolhardy or both, plunged right in.


## a note on the scope

It's interesting that the terms of the challenge tie it to a concrete action, that is, climbing a set of stairs. This brings with it certain questions with it about the efficacy of caring too much about optimization. Now I don't want to disparage anyone's efforts in this clearly made-up scenario, but it did get me to thinking about the combinatorics involved and the limits of human endurance. At what point do the numbers get so large as to be absurd? And a related question: at what point can we disregard the possibility of any human ever trying every combination or even most? Well, always the scientist, I ran a little experiment: where I live there are 16 steps to the street level. Walking up them, timed, averaged about 15 seconds, give or take. Now for 64 steps, then, that should take about a minute, if we disregard endurance for our climber. Next we have the solution that 64 steps can be climbed in 17,167,680,177,565 different configurations. That's trillion with a "t", or one flight a minute for the next 325 million years. Generations of human families spending their entire lives walking stair patterns would literally evolve into their own trans-human stair climbing species in that time frame.

I'm not sure why I thought of that, and think I'm going to move on and do my best to forget that image now. You know, so I can sleep tonight.

## the FIBONACCI SEQUENCE
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/abigail/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/athanasius/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/colin-crain/perl/ch-2.pl),
[**David Schwartz**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/dms061/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/polettix/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/jaldhar-h-vyas/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/james-smith/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/jo-37/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/roger-bell-west/perl/ch-2.pl), and
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/stuart-little/perl/ch-2.pl)

As I said, I was unfamiliar with any background to this challenge when I first came across it, and so, in attacking the problem I did what I always do: I ran some numbers to see how they progressed. Several others members mention taking the same approach. After the first half-dozen or so values I thought I saw something I recognized, which was the Fibonacci sequence. A few more values verified this; it took a little more analysis to conclude that what I was seeing was not simply *like* the sequence, but *was* the sequence, and to then to find the recurrence relation that showed *why* this was true.

To cut to the chase,

S(*n*) = F(*n*+1)

That's it. That's the number of distinct ways to climb to the top.

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/colin-crain/perl/ch-2.pl)

**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/colin-crain/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/colin-crain/raku/ch-2.raku)

To start us off, here's my own solution. Nothing fancy; quick, to the point, in and out, no one gets hurt. Rather than going crazy wth the mechanics of the solution I spent my time on the analysis getting there. So I present to you a memoized Fibonacci generator.

[I wrote up my own reasoning](https://colincrain.com/2021/05/15/after-finding-our-bearings-one-two-and-up-we-go/) for the pattern, and why the Fibonacci sequence, for those interested.

I did, after the fact, add a little NLP prettification to the text:

```
    For 1 step there is 1 possible way to climb it.
    For 2 steps there are 2 possible ways to climb them.
    For 3 steps there are 3 possible ways to climb them.
    For 4 steps there are 5 possible ways to climb them.
    For 5 steps there are 8 possible ways to climb them.
    For 6 steps there are 13 possible ways to climb them.
    ...
```


```perl
    use Lingua::EN::Inflexion;
    use Memoize;
    memoize qw( fib );

    sub fib ($n) {
        return $n if $n < 2;
        return fib($n-1) + fib($n-2);
    }

    for (1..100) {
        my $str = inflect("<#d:$_>For $_ <N:steps> there <V:is> ");
        $str .= fib($_+1) . ' ';
        $str .= inflect("<#d:$_>possible <N:ways> to climb <N:them>.");
        say $str;
    }
```


[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/roger-bell-west/perl/ch-2.pl)

**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/roger-bell-west/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/roger-bell-west/raku/ch-2.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/roger-bell-west/ruby/ch-2.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/roger-bell-west/rust/ch-2.rs)

As a alternative, Roger has written us a nice little iterative routine to construct the sequence. This method builds on previously constructed values and is fast, clean and efficient.

```perl
    sub cs {
      my $i=shift;
      my ($a,$b,$c)=(0,1,0);
      foreach (1..$i) {
        $c=$a+$b;
        ($a,$b)=($b,$c);
      }
      return $c;
    }
```

Of note `($a,$b)=($b,$a+$b);` would work here as well, which I think is pretty cool. James did this, but we'll get to him.

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/abigail/perl/ch-2.pl)

**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/abigail/awk/ch-2.awk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/abigail/bash/ch-2.sh), [Befunge-93](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/abigail/befunge-93/ch-2.bf93), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/abigail/c/ch-2.c), [Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/abigail/go/ch-2.go), [Java](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/abigail/java/ch-2.java), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/abigail/lua/ch-2.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/abigail/node/ch-2.js), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/abigail/pascal/ch-2.p), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/abigail/python/ch-2.py), [R](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/abigail/r/ch-2.r), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/abigail/ruby/ch-2.rb), [Scheme](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/abigail/scheme/ch-2.scm)

A third basic form for generating the Fibonacci sequence is to use [Binet's formula](https://en.wikipedia.org/wiki/Fibonacci_number#Closed-form_expression), which can generate individual values without directly utilizing the recurrence relation. This closed form uses 𝜑, or phi, instead. I say "directly" because the relation is still there, cleverly hidden inside the "golden ratio" internal construction of 𝜑 and 1/𝜑.

```perl
    #
    # This is just the Fibonacci numbers. For a staircase of n steps,
    # we need F_(n + 1), where F_n is the nearest integer to
    #
    #         n
    #      phi
    #      ----
    #       1/2
    #      5
    #                         1/2
    #                    1 + 5
    # where phi equals   --------  (the golden ratio).
    #                       2
    #
    #
    my $SQRT5 = sqrt (5);
    my $PHI   = (1 + $SQRT5) / 2;
    say int (1 / 2 + $PHI ** ($_ + 1) / $SQRT5) for <>;
```

For a more complete explanation, including formulae far superior to any I can reproduce here, please look to [their excellent writeup](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-112-2.html). Although I'd also like to point out my admiration for the efforts to write them in ASCII, as above. It's a hard road, equations and ASCII.

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/james-smith/perl/ch-2.pl)

In a comparative shoot-out, James gives us no less than 10 variations on deriving values for the Fibonacci sequence, ranging from a basic iterative loop to Binet's formula to a lookup table preloaded from a file. Along the way he explores various mechanisms to cache computed values and otherwise vary the process. Benchmarks are drawn and a detailed report is made — obviously the lookup table is fastest, but there are other, more interesting results as well, such as a external global cache being faster than using a `state` variable, and that both of these are faster than Binet's formula.

Here's a sampling: the global cache, Binet and a 1-liner version of that, that apparently runs a little faster:

```perl
    sub climb_cache_glob {
      $glob_cache[$_]=$glob_cache[$_-1]+$glob_cache[$_-2] foreach @glob_cache .. $_[0];
      return $glob_cache[$_[0]];
    }

    sub climb_fib {
      my $q = ((1 + sqrt 5)/2)**($_[0]+1);
      return int(0.001+ ($q - ($_[0]&1?1:-1)/$q)*sqrt 0.2);
    }

    sub climb_fib_1liner {
      return int(0.001 + (($a = ((1+sqrt 5)/2)**($_[0]+1)) - ($_[0]&1?1:-1)/$a)*sqrt 0.2);
    }
```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/polettix/perl/ch-2.pl)

Flavio presents us with an unusual mathematical way of producing a member of the Fibonaci sequence, based around the matrix representation. He provides a function for the matrix multiplication, with an adjunct for performing the exponentiation broken down using repeated powers of two. It's a neat way to do it, listed as a remembrance of a revisitation of a previous analysis, given a [through writeup in a blog breakdown](https://github.polettix.it/ETOOBUSY/2020/12/03/the-blessing-of-forgetting/) for those interested. Although it's certainly better to start the [trail at the source](https://github.polettix.it/ETOOBUSY/2021/05/13/pwc112-climb-stairs/).

```
    ⎛ 1 1 ⎞ⁿ = ⎛ F(n+1) F(n)   ⎞
    ⎝ 1 0 ⎠    ⎝ F(n)   F(n-1) ⎠
```

```perl
    sub fibonacci_multiply {
       my ($x, $y) = @_;
       @$x = (
          $x->[0] * $y->[0] + $x->[1] * $y->[2],
          $x->[0] * $y->[1] + $x->[1] * $y->[3],
          $x->[2] * $y->[0] + $x->[3] * $y->[2],
          $x->[2] * $y->[1] + $x->[3] * $y->[3],
       );
    } ## end sub _multiply

    sub fibonacci_power {
       my ($q, $n, $q0) = (@_[0, 1], $_[2] || [@{$_[0]}]);
       return $q if $n < 2;
       fibonacci_power($q, int($n / 2), $q0);
       fibonacci_multiply($q, $q);
       fibonacci_multiply($q, $q0) if $n % 2;
       return $q;
    } ## end sub _power

    sub fibonacci_nth ($n) {
       my ($zero, $one) = map { Math::BigInt->new($_) } 0 .. 1;
       return
           $n < 1 ? $zero
         : $n < 3 ? $one
         :          fibonacci_power([$one, $one, $one, $zero], $n - 1)->[0];
    } ## end sub nth
```


[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/jo-37/perl/ch-2.pl)

In examining the specific problem at hand, we're abstracted the particulars into a mapping of the Fibonacci sequence. Jorg now generalizes the Fibonacci sequence out one level of abstraction, into a specific case of a [Lucas sequence](https://en.wikipedia.org/wiki/Lucas_sequence). Among the hundreds of functions available in [`Math::Prime::Util`](https://metacpan.org/pod/Math::Prime::Util), of course there's one for generating a Lucas sequence by specifying the parameters of the underlying recurrence relation. I mean, why not? It is my belief there's a secret function for world peace hidden in there too, if you only know how to call it.

```perl
    use Math::Prime::Util 'lucasu';
    say lucasu 1, -1, 1 + shift;
```

The OEIS has a [nice wiki page on Lucas sequences as well](http://oeis.org/wiki/Lucas_sequences), with an extended listing of examples.


[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/stuart-little/perl/ch-2.pl)

**additional languages:**
[Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/stuart-little/haskell/ch-2.hs), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/stuart-little/node/ch-2.js), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/stuart-little/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/stuart-little/raku/ch-2.p6)

Stuart also gives us an example of the Fibonacci recurrence relation, albeit presented in a very different manner. Starting with the kernel of two sets of solutions for 1 step and 2, he then prepends an additional 1 to every pattern in the previous set of solutions and a 2 to each in those for the ones before that. As there will be 1 modified pattern for each pattern previous, the count will remain the same and in effect the count will be the sum of the previous set of patterns plus the sum for the set before that.

Or in other words, F(*n*) = F(*n*-1) + F(*n*-2).

What Stuart's double mapping also accomplishes is to produce the actual step patterns taken to ascend the staircase:

```perl
    [colincrain@boris]$  perl 112-2-StuartLittle.pl 5
    8
    ----------
    1 1 1 1 1
    1 1 1 2
    1 1 2 1
    1 2 1 1
    1 2 2
    2 1 1 1
    2 1 2
    2 2 1
```


```perl
    my %memo=(
        1 => [[1,],],
        2 => [[1,1],[2,]]
    );

    sub memoSteps($n) {
        (! exists $memo{$n}) && do {
        my @prevTot = ((map {my @ar = (1,@{$_}); \@ar} @{memoSteps($n-1)}), (map {my @ar = (2,@{$_}); \@ar} @{memoSteps($n-2)}));
        $memo{$n} = \@prevTot;
        };
        return $memo{$n};
    }

    my @res = @{memoSteps($ARGV[0])};
    say scalar @res, "\n", "-" x 10;

    for (@res) {
        say "@{$_}";
    }
```

This construction of the actual patterns, rather than mathematically computing their quantity, segues naturally into the next stage of the discussion.

## RECURSIVE counting
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/arne-sommer/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/dave-jacoby/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/duncan-c-white/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/laurent-rosenfeld/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/perlboy1967/perl/ch-2.pl), and
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/sgreen/perl/ch-2.pl)

In order to have a record of the step choices made at every juncture, a good strategy proved to keep lists of partial solutions going, handed off recursively as the various constructions were built. This allowed the script to reproduce the pattern taken, either as a sequence of 1s and 2s, or a more complete wording following the examples in the description.

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/dave-jacoby/perl/ch-2.pl)

Dave breaks the problem down into two phases: taking either 1 or 2 steps, then climbing the remaining number of steps. Repeat until clean.

```
    INPUT:  4
    OUTPUT: 5
        Option 1: 1 step + 1 step + 1 step + 1 step
        Option 2: 1 step + 1 step + 2 steps
        Option 3: 1 step + 2 steps + 1 step
        Option 4: 2 steps + 1 step + 1 step
        Option 5: 2 steps + 2 steps
```

This does provide a general purpose method of finding the variations for any number of maximum steps. By altering the `$max_steps` variable long legs or short steps can be accommodated, allowing 3 or even more steps as options. The algorithm doesn't particularly care.

```perl
    sub climb_stairs ( $v, $max_steps = 2 ) {
        my @output;
        for my $n ( 1 .. $max_steps ) {
            my $step = $n < 2 ? '1 step' : "$n steps";
            my $w    = $v - $n;
            if ( $w > 0 ) {
                push @output,
                    map { $step . ' + ' . $_ } climb_stairs( $w, $max_steps );
            }
            elsif ( $w == 0 ) { push @output, $step; }
        }
        return @output;
    }
```

[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/perlboy1967/perl/ch-2.pl)

Niels presents us with a pair of routines, a `climb_stairs()` wrapper that calls a recursive helper `_climb` to choose the various step options, 1 or 2, and push each onto a partial pattern of steps before recursing. The steps remaining are computed and passed along as well. The recursion is limited by having more steps to climb, and if there are none the routine returns.

```perl
    sub _climb {
      my ($height,$arStepOptions,$arSteps,$arSolutions) = @_;

      my @steps = @$arSteps;

      foreach my $step (@$arStepOptions) {
        if ($height-$step >= 0) {
          push(@steps,$step);
          _climb($height-$step,$arStepOptions,\@steps,$arSolutions);
          push(@$arSolutions,[@steps])
            if ($height-$step == 0);
          pop(@steps);
        }
      }
    }
```

[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/arne-sommer/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/arne-sommer/raku/ch-2.raku)

To calculate the number of patterns available to ascend, Arne implements a counter within a recursive routine, incremented after the exit case. At each recursion, a pair new routines are spawned with a running sum incremented by 1 or 2 steps respectively. The base case is when the routines bottom out and return when the sum exceeds the target.

As the counter is incremented after the base case is evaluated, it finds the number of recursions that don't immediately return. This is one for every variation in the pattern.

He does acknowledge this is going to bog down for large numbers of steps.

```perl
    sub climb ($sum)
    {
      return if $sum > $n;
      if ($sum == $n)
      {
        $matches++;
        return;
      }

      climb($sum +1);
      climb($sum +2);
    }
```

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/sgreen/perl/ch-2.pl)

And for anyone who is still a bit hazy on the process here, I found Simon's example to be exceptionally well laid out and easy to follow. It's amazing what a few comments an some whitespace can accomplish.

```perl
    sub _climb {
        my ( $remaining, $this_climb, $climbs ) = @_;
        if ( $remaining == 1 ) {
            # Add the last step to the list of climbs
            push @$climbs, [ @$this_climb, 1 ];
        }
        elsif ( $remaining == 2 ) {
            # Add the two possible ways to climb two slips to the list
            #  of climbs
            push @$climbs, [ @$this_climb, 1, 1 ];
            push @$climbs, [ @$this_climb, 2 ];
        }
        else {
            # Call the recursive function again
            _climb( $remaining - 1, [ @$this_climb, 1 ], $climbs );
            _climb( $remaining - 2, [ @$this_climb, 2 ], $climbs );
        }
    }
```


## count the TWOS and FILL IN THE BLANKS
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/ulrich-rieke/perl/ch-2.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/wlmb/perl/ch-2.pl)

A novel way to approach the problem was from the number of 2s involved: The stairs can be ascended in some number up to *n*/2 moves, with the remainder, no matter how many, made up in single steps. Each quantity of 2s and 1s that adds to the number of steps can be considered one class of combinations, and by filtering out unique permutations of these we reveal the distinct patterns.

[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/ulrich-rieke/perl/ch-2.pl)

**additional languages:**
[Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/ulrich-rieke/haskell/ch-2.hs)

Ulrich lays out his plan for us:

>the strategy is to combine as many 2's as possible and to then sequentially reduce the numbers of 2, all summing up to the number of steps. Then we add the number of all possible permutations we convert the permutations to strings in order to hash them in this way, we can tell different permutations from each other

Sounds good. Because we're only using 1s and 2s, permuting the values will result in many duplicate patterns, and hashing them as keys in string form is an effective way to filter them for uniqueness.

```perl
    while ( $stepnumber <= $steps ) {
      my @numbers ;
      for my $i ( 0 .. $maxtwonumber - 1 ) { #add as many 2's as possible
          push @numbers, 2 ;
      }
      for my $i ( 0 .. ($steps - $maxtwonumber * 2) - 1 ) {
          push @numbers , 1 ; #for the rest, add 1's
      }
      if ( all { $_ == $numbers[ 0 ] } @numbers ) {
          $output++ ; #all numbers are equal, we found one combination of steps
      }
      else {
          my $iter = permutations( \@numbers ) ;
          while ( my $p = $iter->next ) {
            my $numberstring ;
            for my $num ( @$p ) {
                if ( $num > 10 ) {
                  $numberstring .= join('-' , split(// , $num ) ) ;
                }
                else {
                  $numberstring .= $num ;
                }
            }
            $allcombis{ $numberstring }++ ;
          }
      }
      $maxtwonumber-- ; #we reduce the numbers of 2 stepwise and replace them with 1's
      $stepnumber += 1 ;
    }
```


[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/wlmb/perl/ch-2.pl)

Luis starts with an elegant mathematical solution, built around the equations for permuting all the sequences created by enumerating all of the number of 2s that can be used to start a variation and filling each out with 1s to produce the correct number of steps.

This is

∑ (*ones* + *twos*)! / (*ones*)! (*twos*)!

summed over floor(*steps*/2), all possible values of *twos*.

The marvelous logic produces the answer in a manner we haven't seen before. Unsatisfied, though, he continues on to provide two more submissions for producing the actual final permuted groups. First he gives us a [naive solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/wlmb/perl/ch-2a.pl), followed by one [more sophisticated](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/wlmb/perl/ch-2b.pl). His output even has his own take on things:

```
    Input: 1
    Combinations:
    single

    Input: 2
    Combinations:
    single,single
    double

    Input: 3
    Combinations:
    single,single,single
    single,double
    double,single

    Input: 4
    Combinations:
    single,single,single,single
    single,single,double
```

```perl
    sub combinator { # produces combinations of n taken k at a time
          my ($n,$k)=@_;
          my @number=((1) x $k, (0) x ($n-$k)); # binary $n-bit number as array
          my $done=0;
          my $iter=0;
          sub {
              return if $done;
              return @number if $iter++==0; #first time through
              @number=following(@number);
              return @number if @number;
              $done=1;
              return;
          }
      }

    sub following {
        my @number=@_;
        my $first_10=first {$number[$_]==1 && $number[$_+1]==0} (0..@number-2);
        return unless defined $first_10;
        @number[$first_10, $first_10+1]=(0,1);
        restart (@number[0..$first_10-1]);
        return @number;
    }

    sub restart {
        return unless @_;
        my $ones=sum0 @_;
        @_[0..$ones-1]=(1)x$ones;
        @_[$ones..@_-1]=(0)x(@_-$ones);
    }
```


## use a COMBINATORICS MODULE
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/adam-russell/perl/ch-2.pl), and
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/cheok-yin-fung/perl/ch-2.pl)

There has been quite a lot of discussion of permutations, combinations and variations today, and rather than using them interchangeably I've been trying to keep them within their larger combinatoric definitions. With all of this rearranging one might well fall back of some trusted tools to help do the job, and this lead to several unique takes on solving the problem.

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/adam-russell/perl/ch-2.pl)

**additional languages:**
[Prolog](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/adam-russell/prolog/ch-2.p)

Adam brings in two modules, `Algorithm::Combinatorics` for its `variations_with_repetition` iterator and `Array::Compare` for its `compare` function.

The variations with repetition are the tuples of length `$k` assembled from all options of the data at each position. Of course we don't know the length offhand beyond a lower and an upper bound, but Adam gets around this by providing 0 as an option as well, and using the number of steps for the length. A pass is made to count the steps taken and see if the patterns add to the number of stairs. Then the 0s are removed and `Array::Compare` is used to remove any duplicate patterns.

```perl
    sub steps{
        my($k) = @_;
        my @data = (0, 1, 2);
        my @steps;
        my $comparison = new Array::Compare();
        my $iterator = variations_with_repetition(\@data, $k);
        while(my $combination = $iterator->next()){
            if(unpack("%32C*", pack("C*", @{$combination})) == $k){
                my $step = [grep {$_ != 0} @{$combination}];
                push @steps, $step if(!grep {$comparison->compare($_, $step)} @steps);
            }
        }
        return @steps;
    }
```

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/cheok-yin-fung/perl/ch-2.pl)

CY also uses `Algorithm::Combinatorics`. It's a great module, a favorite around here. I'm a big fan myself. Here she's using `combinations`, which is different.

Her algorithm uses the module to find all combinations of index locations for 2s, for all quantities of 2s up to 1/2 the number of stairs. The total sum, filled out with 1s, determines the sequence length and the combinations place the 2s. We've seen this focusing on the 2s before but not like this. I really like it.

```perl
    for my $i ($n%2+$n/2 .. $n-1) {
        my $iter = combinations([0..$i-1] , ($n-$i) );
        my $str = "1" x $i;
        while (my $c = $iter->next) {
            my $str_clone = $str;
            substr($str_clone, $_, 1) = "2" for (@{$c});
            push @all, $str_clone;
        }
    }
```


## do that THING — you know, that OTHER THING, with the GLOB, *THAT* THING
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/wanderdoc/perl/ch-2.pl)

`glob`, the function, not the data type, can be used to assemble a cross-product of combinations. Here the doc uses this to create lists of all variations with repetition for *n*-digit selections of 1 or 2, merged together as a string. Wait, what? Let me demonstrate:

```perl
    $n = 3;
    @d = glob '{1,2}' x $n;
    say "@d";

    111 112 121 122 211 212 221 222
```

Pretty neat, huh? What we're really doing here is theoretically providing a list of filenames, listing 1 and 2 as alternate options for every character in an *n*-length string, but, hey, we don't need to open up files with the strings we create, do we?

Instead we could `split` them and see whether they total to our desired step-count. That'd work.

```perl
    for my $m ( $n/2 .. $n )
    {
         my @steps =
              grep { sum(@$_) == $n }
              map { [split(//,$_)] }
              glob q[{1,2}] x $m;

         for my $step ( @steps )
         {
              @$step = map {$_ == 1 ? $_ . ' step' : $_ . ' steps'} @$step;

              print "Option ${opt}: ", join(' + ', @$step), $/;
              $opt++;
         }
    }
```

## Additional Guest Language Submissions

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/athanasius/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/athanasius/raku/ch-2.raku)

[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/jaldhar-h-vyas/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/jaldhar-h-vyas/raku/ch-2.sh)

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/laurent-rosenfeld/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-112/laurent-rosenfeld/raku/ch-2.raku)



---------------------------------------------------------------------


---

# BLOGS {#PWC112BLOGS}

---

**That's it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, I somehow continue to maintain my bearings. Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC093BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *READ* these *BLOG* *LINKS*:

**( *don't think, trust your training, you're in the zone, just do it ...* )**


**Aaron Smith**

 * [Perl Weekly Challenge 112 - Aaron Smith](https://aaronreidsmith.github.io/blog/perl-weekly-challenge-112/) ( *Raku* )

**Abigail**

 * [Perl Weekly Challenge 112: Canonical Path](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-112-1.html) ( *Perl* )
 * [Perl Weekly Challenge 112: Climb Stairs](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-112-2.html) ( *Perl* )

**Adam Russell**

 * [The Weekly Challenge 112 - Perl - RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2021/05/16) ( *Perl* )
 * [The Weekly Challenge 112 - Prolog -RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/prolog/2021/05/16) ( *Prolog* )

**Arne Sommer**

 * [Canonical Stairs with Raku and Perl](https://raku-musings.com/canonical-stairs.html) ( *Perl & Raku* )

**Cheok-Yin Fung**

 * [CY's Take on The Weekly Challenge #112](https://e7-87-83.github.io/coding/challenge_112.html) ( *Perl* )

**Colin Crain**

 * [After Finding Our Bearings: One, Two and Up We Go! — Programming Excursions in Perl and Raku](https://colincrain.com/2021/05/15/after-finding-our-bearings-one-two-and-up-we-go/) ( *Perl & Raku* )

**Dave Jacoby**

 * [One Step Beyond: Perl Weekly Challenge #112 | Committed to Memory](https://jacoby.github.io/2021/05/10/one-step-beyond-perl-weekly-challenge-112.html) ( *Perl* )

**Flavio Poletti**

 * [PWC112 - Canonical Path - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/05/12/pwc112-canonical-path/) ( *Perl* )
 * [PWC112 - Climb Stairs - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/05/13/pwc112-climb-stairs/) ( *Perl* )

**Jaldhar H. Vyas**

 * [Perl Weekly Challenge: Week 112](https://www.braincells.com/perl/2021/05/perl_weekly_challenge_week_112.html) ( *Perl & Raku* )

**James Smith**

 * [Perl Weekly Challenge #112](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-112/james-smith) ( *Perl* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 112: Canonical Path and Climb Stairs | laurent_r](http://blogs.perl.org/users/laurent_r/2021/05/perl-weekly-challenge-112-canonical-path-and-climb-stairs.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 112: Climbing the canonical path! - Luca Ferrari - Open Source advocate, human being](https://fluca1978.github.io/2021/05/10/PerlWeeklyChallenge112.html) ( *Raku* )

**Roger Bell_West**

 * [RogerBW's Blog: Perl Weekly Challenge 112: Canonical Stairs](https://blog.firedrake.org/archive/2021/05/Perl_Weekly_Challenge_112__Canonical_Stairs.html) ( *Perl & Raku* )

**Simon Green**

 * [Weekly Challenge 112](https://dev.to/simongreennet/weekly-challenge-112-27l0) ( *Perl* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 112  W. Luis Mochan](https://wlmb.github.io/2021/05/12/PWC112/) ( *Perl* )
