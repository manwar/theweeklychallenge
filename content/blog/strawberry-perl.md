---
title: "Strawberry Perl"
date: 2022-06-13T00:00:00+00:00
description: "Discussion about Strawwberry Perl."
type: post
image: images/blog/strawberry-perl.jpg
author: Mohammad S Anwar
tags: ["Perl"]
---

<br>

Last week I wrote blog post [**Do you want to get started with Perl v5.36?**](http://blogs.perl.org/users/mohammad_s_anwar/2022/06/do-you-want-to-get-started-with-perl-v536.html) where I shared my experience with the latest release `Perl v5.36`.

<br>

I received this email today.

<br>

***

![Request](/images/blog/request.png)

***

<br>

The reality is, I never use `Perl on Windows`. And second never bothered creating `.exe` from the source file.

I decided to give it a go, so first thing we need to download [**Strawberry Perl**](https://strawberryperl.com).

T had the choice to download [**strawberry-perl-5.32.1.1-64bit.msi**](https://strawberryperl.com/download/5.32.1.1/strawberry-perl-5.32.1.1-64bit.msi).

Do the regular install using the msi.

After the installation, this is what I got.

<br>

```perl
C:\Users\mohammad.anwar\Desktop> perl -v

This is perl 5, version 32, subversion 1 (v5.32.1) built for MSWin32-x64-multi-thread

Copyright 1987-2021, Larry Wall

Perl may be copied only under the terms of either the Artistic License or the
GNU General Public License, which may be found in the Perl 5 source kit.

Complete documentation for Perl, including FAQ lists, should be found on
this system using "man perl" or "perldoc perl".  If you have access to the
Internet, point your browser at http://www.perl.org/, the Perl Home Page.


C:\Users\mohammad.anwar\Desktop>
```

<br>

To be able to convert source into `exe`, I had to install `CPAN` module [**PAR::Packer**](https://metacpan.org/dist/PAR-Packer). To do that I opened the Windows shell as `administrator`.

<br>

```perl
C:\WINDOWS\system32> perl -MCPAN -e shell
Unable to get Terminal Size. The Win32 GetConsoleScreenBufferInfo call didn't work. The COLUMNS and LINES environment variables didn't work. at C:\Strawberry\perl\vendor\lib/Term/ReadLine/readline.pm line 410.

cpan shell -- CPAN exploration and modules installation (v2.28)
Enter 'h' for help.

cpan> install PAR::Packer
```

<br>

Time to create source file `hello.pl`

<br>

```perl
C:\Users\mohammad.anwar\Desktop> type hello.pl
#!perl

use v5.32;

say "Hello World !!!";

C:\Users\mohammad.anwar\Desktop>
```

<br>

Create an `exe` file from the source.

<br>

```perl
C:\Users\mohammad.anwar\Desktop> pp hello.pl
C:\Users\mohammad.anwar\Desktop>
```

<br>

Now we would have `a.exe`, let us run the executable.

<br>

```perl
C:\Users\mohammad.anwar\Desktop> a.exe
Hello World !!!

C:\Users\mohammad.anwar\Desktop>
```

<br>

That's it for now.
