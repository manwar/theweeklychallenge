---
title: "Get started with Perl v5.36"
date: 2022-06-11T00:00:00+00:00
description: "All about Perl v5.36"
type: post
image: images/blog/p536.jpg
author: Mohammad S Anwar
tags: ["Perl"]
---

<br>

### Do you want to get started with Perl v5.36?

<br>

Honestly speaking I never bothered about any of the Perl releases before. But `Perl v5.36` is very special and close to me.

<br>

### Why?

<br>

Recently I have been sharing new features introduced in `Perl` dating back to `v5.10`, inspired by the book [**Perl new features v5.10 to v5.34**](https://leanpub.com/perl_new_features) by `brain d foy`.

I received a `FREE` copy of the book, a big thank you to `brian d foy`.

I have a Windows box running WSL (`Ubuntu 20.04`). Earlier, I was using `Virtual Machine` but then latest Windows update stopped the support. I had no choice but to switch over. I was reluctant initially but I am happy now.

<br>

### Going back to the topic about `Perl v5.36`.

<br>

I have been using Perl for little over `2 decades` now. And in all these days, I never dared compile Perl binary from source. I know some of my friends do this for fun and they are really hardcore guys. I always wonder how it feels to get everything done from scratch.

As I was playing with the `Perl` features, I found myself limited to my system `Perl`, which is `v5.30`. That means there is no way I can't try new features from the book beyond `v5.30`.

<br>

### Is it time get new Perl binary installed?

<br>

Even today, I don't feel comfortable doing it. I was looking for an alternative. I ended up using [**Perlbrew**](https://perlbrew.pl). I followed the instructions in the [**blog post**](https://blog.geekuni.com/2015/05/how-to-install-different-versions-of-perl.html) by `Andrew Solomon`.

In no time, I had `Perl v5.32`, `Perl v5.34` and `Perl v5.35`. I begin my journey and documented by experience in the dedicated [**GitHub repository**](https://github.com/manwar/perl-cool-snippets) as suggested by `Dave Cross`.

<br>

But the real fun begin only when we had `Perl v5.36` released.

<br>

### So can I use Perlbrew to install the lastest Perl v5.36?

<br>

Unfortunately not, out of the box.

<br>

So I started exploring ways to get Perl v5.36 installed using Perlbrew and I ended up doing this in the order.

<br>

#### Step 1: Download the tar ball

<br>

```perl
    $ wget https://cpan.metacpan.org/authors/id/R/RJ/RJBS/perl-5.36.0.tar.gz
```

<br>

#### Step 2: Copy the tar ball to correct folder

<br>

```perl
    $ cp ~/perl-5.36.0.tar.gz ~/perl5/perlbrew/dists/
```

<br>

#### Step 3: Install Perl v5.36 now

<br>

```perl
    $ perlbrew install perl-5.36.0
```

<br>

It didn't go as per the plan and failed with test failures

<br>

#### Step 4: Retried with --force

<br>

```perl
    $ perlbrew --force install perl-5.36.0
```

<br>

Even this failed miserably with test failures.

<br>

#### Step 5: One last attemp, like below:

<br>

```perl
    $ perlbrew --notest install perl-5.36.0
```

<br>

Got lucky third time, finally.

<br>

#### Step 6: Create an alias p536

<br>

```perl
    $ alias p536='~/perl5/perlbrew/perls/perl-5.36.0/bin/perl'
```

<br>

#### Step 7: Test the install

<br>

```perl
    $ perl536 -V:version
    version='5.36.0';
```

<br>

Now I have all the power in the world. I did it, after all the obstacles.

Time to explore all the new features of `Perl v5.36`. I continued doing daily post of Perl features mostly focussing now on `Perl v5.36`.

You can checkout all I have covered so far [**here**](https://github.com/manwar/perl-cool-snippets#perl-v536).

<br>

### Some of my favourite features

<br>

##### 1. [Method signature](https://github.com/manwar/perl-cool-snippets/blob/main/v536/method-signature.pl)
##### 2. [Try/Catch/Finally](https://github.com/manwar/perl-cool-snippets/blob/main/v536/try-catch-finally.pl)
##### 3. [Multiple Values](https://github.com/manwar/perl-cool-snippets/blob/main/v536/multiple-values.pl)
##### 4. [isa](https://github.com/manwar/perl-cool-snippets/blob/main/v536/isa.pl)
##### 5. [Indirect object syntax (dropped)](https://github.com/manwar/perl-cool-snippets/blob/main/v536/indirect.pl)

<br>

#### Watch this space as I continue exploring the new toy.
