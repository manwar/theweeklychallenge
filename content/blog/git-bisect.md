---
title: "git bisect ..."
date: 2025-03-16T00:00:00+00:00
description: "Discussion about the git bisect command."
type: post
image: images/blog/git-bisect.png
author: Mohammad Sajid Anwar
tags: ["git"]
---

#### **DISCLAIMER:** Image is generated using `FREE` version of `ChatGPT`.
***

<br>

<div class="container">
    <div class="row g-4 justify-content-center">
        <div class="col-12 col-sm mb-3 p-2 text-center">
            <a href="/blog/github-actions" title="GitHub Actions">
                <img src="/images/blog/github-actions-mini.png" class="img-fluid"
                style="object-fit: cover; aspect-ratio: 16/9;">
            </a>
        </div>
        <div class="col-12 col-sm mb-3 p-2 text-center">
            <a href="/blog/git-show" title="git show ...">
                <img src="/images/blog/git-show-mini.png" class="img-fluid rounded-3 border border-3"
                style="object-fit: cover; aspect-ratio: 16/9;">
            </a>
        </div>
        <div class="col-12 col-sm mb-3 p-2 text-center">
            <a href="/blog/github-meets-gitlab" title="GitHub meets GitLab">
                <img src="/images/blog/github-meets-gitlab-mini.png" class="img-fluid rounded-3 border border-3"
                style="object-fit: cover; aspect-ratio: 16/9;">
            </a>
        </div>
        <div class="col-12 col-sm mb-3 p-2 text-center">
            <a href="/blog/git-refs" title="git refs ...">
                <img src="/images/blog/git-refs-mini.png" class="img-fluid rounded-3 border border-3"
                style="object-fit: cover; aspect-ratio: 16/9;">
            </a>
        </div>
    </div>
</div>

<br>

## git bisect ...
***

If you lead life of `a programmer`, no matter what language you use, you must have used one of the many versioning systems.

`CVS` was my first introduction to the life saving tool. I think it was `early 2000s` time period.

I remember a real life incident, I was working as a consultant for a web portal firm.

I noticed all the devs were working on the production code directly, so I followed the footsteps of team.

One day, while working on a particular page, I made a silly mistake in the production code.

The client noticed it before anyone of us in the team, as you can imagine, handling client wasn't easy.

That incident made us do two things straight away:

<br>

    - Setup two separate environments: dev and prod
    - Use of versioning system

<br>

And that is when I was introduced to `CVS`.

I struggled initially a bit but when I got my head around it, it became piece of cake.

Life took many turns and I ended up at another client using `SVN`.

I didn't like it, to be honest but I had no choice.

Then came a day in my life when I was introduced to `git` that changed everything for good.

Nearly more than `2 decades` now, I am still using and loving `git`.

I am learning new things in `git` every day, even now.

Like fews day ago, I shared `git grep` special use case with fellow hackers.

As most of us, use the `git grep` command to search a text in the code base, but then you can do way more than that as shown below:

The command below returns all files that contain either the word `"TODO"` or `"FIXME"`.

<br>

    $ git grep "TODO" --or "FIXME"

<br>

And the following would return all files that contain both the word `"TODO"` and `"FIXME"`.

<br>

    $ git grep "TODO" --and "FIXME"

<br>

Let's come back to the main topic of the post, `git bisect`.

As per the documentation: `Use binary search to find the commit that introduced a bug.`

That sounds very handy when you are in the middle of a mess.

A friend of mine at work, introduced this to me, I must confess.

I immediately fell for it and decided to write about it but then life takes it's own time.

After such a long wait, I finally found time to share my experience on a fine `Sunday` morning.

We need to prepare the ground to make it easy to understand the underlying magics.

Let's get the hand dirty:

<br>

    $ mkdir playground
    $ cd playground
    $ echo "Demo of git bisect command." > README
    $ mkdir lib
    $ mkdir t

<br>

Now I need code with unit test. I am a very well behave programmer, trust me.

Here is the main code: `lib/Calc.pm`

<br>

```perl
use v5.38;
use experimental 'class';

class Calc {
    field $x :param;
    field $y :param;

    method plus {
        return $x + $y;
    }
}
```

<br>

And unit test: `t/calc.t`

<br>

```perl
#!/usr/bin/env perl

use v5.38;
use Test::More;
use Calc;

my $calc = Calc->new(x => 3, y => 2);

is ($calc->plus(), 5);

done_testing;
```

<br>

Time to test the code:

<br>

    $ prove -Ilib/ t/
    t/calc.t .. ok
    All tests successful.
    Files=1, Tests=1,  0 wallclock secs ( 0.01 usr  0.00 sys +  0.02 cusr  0.00 csys =  0.03 CPU)
    Result: PASS

<br>

So far so good, time to bring `git` into the picture.

<br>

    $ git init
    $ git add .
    $ git commit -m "#1 commit."
    [master (root-commit) 5089803] #1 commit.
    3 files changed, 23 insertions(+)
    create mode 100644 README
    create mode 100644 lib/Calc.pm
    create mode 100644 t/calc.t

<br>

Now we would ask `git` what the log looks like.

<br>

    $ git log
    commit 50898030ae671eafea66c899da562e37f3a758ad (HEAD -> master)
    Author: Mohammad Sajid Anwar <mohammad.anwar@yahoo.com>
    Date:   Sun Mar 16 11:42:25 2025 +0000

    #1 commit.

<br>

Seems fine, right?

Let's add another method to the class `Calc` in `lib/Calc.pm`.

<br>

```perl
use v5.38;
use experimental 'class';

class Calc {
    field $x :param;
    field $y :param;

    method plus {
        return $x + $y;
    }

    method minus {
        return $x - $y;
    }
}
```

<br>

Then update the unit test `t/calc.t` too.

<br>

```perl
#!/usr/bin/env perl

use v5.38;
use Test::More;
use Calc;

my $calc = Calc->new(x => 3, y => 2);
is ($calc->plus(),  5);
is ($calc->minus(), 1);

done_testing;
```

<br>

Time to test the change:

<br>

    $ prove -Ilib/ t/
    t/calc.t .. ok
    All tests successful.
    Files=1, Tests=2,  0 wallclock secs ( 0.01 usr  0.00 sys +  0.02 cusr  0.00 csys =  0.03 CPU)
    Result: PASS

<br>

Let's commit the change now.

<br>

    $ git add lib/Calc.pm
    $ git add t/calc.t
    $ git commit -m "#2 commit."
    [master b5891d9] #2 commit.
     2 files changed, 6 insertions(+), 1 deletion(-)

<br>

Let's peek into the log:

<br>

    $ git log
    commit b5891d9c7b5d0b60940119b15d00b5e9b4de1917 (HEAD -> master)
    Author: Mohammad Sajid Anwar <mohammad.anwar@yahoo.com>
    Date:   Sun Mar 16 11:48:20 2025 +0000

    #2 commit.

    commit 50898030ae671eafea66c899da562e37f3a758ad
    Author: Mohammad Sajid Anwar <mohammad.anwar@yahoo.com>
    Date:   Sun Mar 16 11:42:25 2025 +0000

    #1 commit.

<br>

Now the fun begins, we will introduce `a bug` in the code: `lib/Calc.pm`.

<br>

```perl
use v5.38;
use experimental 'class';

class Calc {
    field $x :param;
    field $y :param;

    method plus {
        return $x + $y;
    }

    method minus {
        return $x - $y - 1;
    }
}
```

<br>

As you noticed, the `method minus()` now returns one less than the actual result.

I purposely commit the change without testing the updated code.

<br>

    $ git add lib/Calc.pm
    $ git commit -m "#3 commit."
    [master a83715f] #3 commit.
     1 file changed, 1 insertion(+), 1 deletion(-)

<br>

Let's peek into the git log:

<br>

    $ git log
    commit a83715f48bd5c0d0ad41ef40eee6108d05d2aab0 (HEAD -> master)
    Author: Mohammad Sajid Anwar <mohammad.anwar@yahoo.com>
    Date:   Sun Mar 16 11:50:44 2025 +0000

    #3 commit.

    commit b5891d9c7b5d0b60940119b15d00b5e9b4de1917
    Author: Mohammad Sajid Anwar <mohammad.anwar@yahoo.com>
    Date:   Sun Mar 16 11:48:20 2025 +0000

    #2 commit.

    commit 50898030ae671eafea66c899da562e37f3a758ad
    Author: Mohammad Sajid Anwar <mohammad.anwar@yahoo.com>
    Date:   Sun Mar 16 11:42:25 2025 +0000

    #1 commit.

<br>

We will make one more change before the showdown of `git bisect`.

As you can see, we now have a new `method multiply()`:

<br>

```perl
use v5.38;
use experimental 'class';

class Calc {
    field $x :param;
    field $y :param;

    method plus {
        return $x + $y;
    }

    method minus {
        return $x - $y - 1;
    }

    method multiply {
        return $x * $y;
    }
}
```

<br>

We would now update the unit test as well:

<br>

```perl
#!/usr/bin/env perl

use v5.38;
use Test::More;
use Calc;

my $calc = Calc->new(x => 3, y => 2);
is ($calc->plus(),     5);
is ($calc->minus(),    1);
is ($calc->multiply(), 6);

done_testing;
```

<br>

We will now commit the changes without running the test.

<br>

    $ git add lib/Calc.pm
    $ git add t/calc.t
    $ git commit -m "#4 commit."
    [master d27d5c6] #4 commit.
     2 files changed, 7 insertions(+), 2 deletions(-)

<br>

Check the git log:

<br>

    $ git log
    commit d27d5c6e4fbc6470fa707bc1f93a97049fcddbc2 (HEAD -> master)
    Author: Mohammad Sajid Anwar <mohammad.anwar@yahoo.com>
    Date:   Sun Mar 16 11:56:41 2025 +0000

    #4 commit.

    commit a83715f48bd5c0d0ad41ef40eee6108d05d2aab0
    Author: Mohammad Sajid Anwar <mohammad.anwar@yahoo.com>
    Date:   Sun Mar 16 11:50:44 2025 +0000

    #3 commit.

    commit b5891d9c7b5d0b60940119b15d00b5e9b4de1917
    Author: Mohammad Sajid Anwar <mohammad.anwar@yahoo.com>
    Date:   Sun Mar 16 11:48:20 2025 +0000

    #2 commit.

    commit 50898030ae671eafea66c899da562e37f3a758ad
    Author: Mohammad Sajid Anwar <mohammad.anwar@yahoo.com>
    Date:   Sun Mar 16 11:42:25 2025 +0000

    #1 commit.

<br>

Let's pause here for a moment.

So far, we have `4 commits` as shown above.

And we know the good and bad commits as it is all done under supervision.

In our demo, this is all we know:

<br>

    #4 commit: good
    #3 commit: bad
    #2 commit: good
    #1 commit: good

<br>

Imagine a situation, where you have, say `5 programmers`, making changes to the code base.

On the day of production release, you noticed something is broke.

<br>

    $ prove -Ilib/ t/
    t/calc.t .. 1/?
    #   Failed test at t/calc.t line 10.
    #          got: '0'
    #     expected: '1'
    # Looks like you failed 1 test of 3.
    t/calc.t .. Dubious, test returned 1 (wstat 256, 0x100)
    Failed 1/3 subtests

    Test Summary Report
    -------------------
    t/calc.t (Wstat: 256 (exited 1) Tests: 3 Failed: 1)
      Failed test:  2
      Non-zero exit status: 1
    Files=1, Tests=3,  0 wallclock secs ( 0.01 usr  0.01 sys +  0.02 cusr  0.00 csys =  0.04 CPU)
    Result: FAIL

<br>

In the flood of commits, how would you know which commit introduced the bug?

This is when the `git bisect` comes handy.

Let's begin the journey ...

<br>

## #1 Start the operation
***

<br>

    $ git bisect start
    status: waiting for both good and bad commits

<br>

## #2 Mark the known bad commit, which is the current commit
***

<br>

    $ git bisect bad
    status: waiting for good commit(s), bad commit known

<br>

## #3 Mark the first known good commit
***

<br>

    $ git bisect good 50898030ae671eafea66c899da562e37f3a758ad
    Bisecting: 0 revisions left to test after this (roughly 1 step)
    [a83715f48bd5c0d0ad41ef40eee6108d05d2aab0] #3 commit.

<br>

## #4 Run the bisect operation
***

<br>

    $ git bisect run prove -Ilib t/
    running 'prove' '-Ilib' 't/'
    t/calc.t .. 1/?
    #   Failed test at t/calc.t line 10.
    #          got: '0'
    #     expected: '1'
    # Looks like you failed 1 test of 2.
    t/calc.t .. Dubious, test returned 1 (wstat 256, 0x100)
    Failed 1/2 subtests

    Test Summary Report
    -------------------
    t/calc.t (Wstat: 256 (exited 1) Tests: 2 Failed: 1)
      Failed test:  2
      Non-zero exit status: 1
    Files=1, Tests=2,  0 wallclock secs ( 0.01 usr  0.00 sys +  0.01 cusr  0.00 csys =  0.02 CPU)
    Result: FAIL
    Bisecting: 0 revisions left to test after this (roughly 0 steps)
    [b5891d9c7b5d0b60940119b15d00b5e9b4de1917] #2 commit.
    running 'prove' '-Ilib' 't/'
    t/calc.t .. ok
    All tests successful.
    Files=1, Tests=2,  0 wallclock secs ( 0.01 usr  0.00 sys +  0.01 cusr  0.01 csys =  0.03 CPU)
    Result: PASS
    a83715f48bd5c0d0ad41ef40eee6108d05d2aab0 is the first bad commit
    commit a83715f48bd5c0d0ad41ef40eee6108d05d2aab0
    Author: Mohammad Sajid Anwar <mohammad.anwar@yahoo.com>
    Date:   Sun Mar 16 11:50:44 2025 +0000

        #3 commit.

     lib/Calc.pm | 2 +-
     1 file changed, 1 insertion(+), 1 deletion(-)
    bisect found first bad commit

<br>

Too much information thrown to us, right?

But you are only interested in the line: `a83715f48bd5c0d0ad41ef40eee6108d05d2aab0 is the first bad commit`

Now you know what change introduced the bug.

You can deal with it accordingly.

When you are done with the operation then do this:

<br>

    $ git bisect reset
    Previous HEAD position was b5891d9 #2 commit.
    Switched to branch 'master'

***

<br>

So far, I have only scratched the surface.

If you want to find out more about it then look closely at this: `git bisect --help`

`Happy Hacking!!`
