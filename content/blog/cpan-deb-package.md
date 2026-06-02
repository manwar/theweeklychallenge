---
title: "CPAN Debian Package"
date: 2026-06-02T00:00:00+00:00
description: "How to build debian package for CPAN module."
type: post
image: images/blog/cpan-deb-package.jpg
author: Mohammad Sajid Anwar
tags: ["perl", "CPAN", "Debian"]
---

#### **DISCLAIMER:** Image is generated using `ChatGPT`.
***
<br>

I remember when I used to work with `ActiveState Perl`, I always struggled to find a `PPM` for `CPAN` modules. I reached the point where I decided to create the missing `PPMs` myself, but I never managed to create one, not even once.

Fast forward to my previous workplace, a friend of mine, who was a `Release Manager`, would always prepare `Debian` packages for updated `CPAN` modules. It was fascinating to see how it all worked. I have always been a pure developer, never tried anything outside of programming.

That said, now I try anything and everything, and it gives me complete satisfaction.

A few days ago, while working on my CPAN module [**DBIx::Class::Async**](https://metacpan.org/pod/DBIx::Class::Async), I decided to create `Debian` package for it, just for fun. After a quick search online, I found step-by-step guide on how to do it.

In this post, I will take you through the process. At the time of experiment, I had `v1.0.3` on `CPAN`, so I started by downloading the tarball.

```bash
$ wget https://cpan.metacpan.org/authors/id/M/MA/MANWAR/DBIx-Class-Async-v1.0.3.tar.gz
```

Next step was to extract the tarball.

```bash
$ tar -xzf DBIx-Class-Async-v1.0.3.tar.gz
$ cd DBIx-Class-Async-v1.0.3
```

Time to generate the `Debian` infrastructure.

```bash
$ dh-make-perl .
```

Then check the dependencies as below:

```bash
$ dpkg-checkbuilddeps
```

Luckily no missing dependencies found but I noticed the module description was missing in the control file.

So I added the description in `debian/control` file like below:

```bash
Description: Non-blocking, multi-worker asynchronous wrapper for DBIx::Class
 DBIx::Class::Async provides a way to execute DBIx::Class database operations
 asynchronously. It allows for multi-worker support, helping to prevent blocking
 the main event loop when performing database-heavy tasks in an IO::Async
 application.
```

Finally time to build the package.

```bash
$ dpkg-buildpackage -us -uc
```

Then the fun started: I noticed a few unit tests throwing segfaults. This was unexpected as all tests had passed the last time I checked, and I hadn't changed the code recently. As you know, segfaults are notoriously difficult to debug.

However, when I ran `make test` in the local checkout repository, all tests passed.

So why was the build process complaining?

Could the `Debian` build process involve low level `C` bindings?

I didn't have a clue, but I knew that due to the async design, there had to be something missing somewhere.

To deal with this, I needed complete isolation from the outside world, something only possible late at night when everyone else was asleep.

So one night, I decided to dig deep into the source design and found a few missing pieces. I wasn't entirely sure if they were the root cause, but I investigated further.

Without getting too technical, the root cause was an incorrect teardown order in `DBIx::Class::Async::disconnect()`. During my investigation, I also found a similar issue in `DBIx::Class::Async::Schema::disconnect()`. I made a slight change to `clone()` so that it now shares the parent's worker pool by default; you only create an independent pool when you pass an explicit worker count.

Why? with many clones sharing the same loop, the concurrent teardown of multiple `IO::Async::Function` instances caused the loop `XS` destructor to `SEGV` during global destruction.

It was definitely worth getting that sorted, a happy byproduct of this random exercise in building a `Debian` package. I am glad, I chose `DBIx::Class::Async` for this task.

Once we cleared the `SEGV` issue, there was still one test file, `manifest.t` complaining about more files than expected. This was anticipated, so I decided to quiet it by modifying the `debian/rules` file as below:

```bash
$ cat > debian/rules << 'EOF'
#!/usr/bin/make -f

%:
    dh $@

override_dh_auto_test:
    PERL_DL_NONLAZY=1 prove -Iblib/lib -Iblib/arch \
        $(shell find t -name '*.t' | grep -v t/manifest.t | sort)
EOF
```

Finally, try building the package again.

```bash
$ dpkg-buildpackage -us -uc
```

No more issue, everyone is happy and I have a `Debian` package `libdbix-class-async-perl_1.0.3-1_all.deb`.

Time to test the newly built `Debian` package.

```bash
$ cp libdbix-class-async-perl_1.0.3-1_all.deb /tmp
$ cd /tmp
$ sudo apt install ./libdbix-class-async-perl_1.0.3-1_all.deb
```

Installation using the newly build `Debian` package was successful.

Finally check the installed package.

```bash
$ dpkg -s libdbix-class-async-perl
```

And with that, the job was done, mission accomplished.

By the way, I have released `DBIx::Class::Async v1.0.4` to `CPAN` with the patch included.

I plan to try this with a few more of my `CPAN` modules next time I find myself with some spare time.

***

<br>

`Happy Hacking !!!`
