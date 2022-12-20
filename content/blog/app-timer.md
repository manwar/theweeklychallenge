---
title: "App::Timer"
date: 2022-12-20T00:00:00+00:00
description: "Discussion about App::Timer."
type: post
image: images/blog/app-timer.jpg
author: Mohammad S Anwar
tags: ["Perl"]
---

***

After so many years, I finally got around to contribute to [**Perl Advent Calendar 2022**](https://perladvent.org/2022). For me personally, it is an honour to be part of it. I have contributed in the past so I am aware of its reach. I grab the opportunity every time I get the offer.

This time around, `Olaf Alders`, is leading the team and managing the `Perl Advent Calendar 2022`. As always the case, this year also the calendar is full of interesting topics to keep you busy in this holiday season.

<br>

**So what is it that I am going to talk about today?**

<br>

As you all know I have [**handful of distributions**](https://metacpan.org/author/MANWAR) available on `MetaCPAN`. Although I am not actively managing any of them but I do look after them as and when needed.

If you look at the list of my distributions, you would notice that some of them are just plain application i.e. something that can be executed at the command prompt. One of them, e.g. [**App::Calendr**](https://metacpan.org/dist/App-calendr). Every time, I run an application, I always wanted to know how long it took to complete the execution.

For many years, I used to add the following snippets at the end of my command line application script.

<br>

```perl
END {
    my $time = time - $^T;
    my $mm   = $time / 60;
    my $ss   = $time % 60;
    my $hh   = $mm / 60;

    printf("The program ran for %02d:%02d:%02d.\n", $hh, $mm%60, $ss);
}
```

<br>

But then it quickly became a pain to do this to every command line application scripts.

<br>

**Can I do something that works for every command line applications?**

<br>

Well, I gave a deep thought one weekend and ended up quick and dirty solution, [**App::Timer**](https://metacpan.org/pod/App::Timer).

To be honest, there is no `Rocket Science` behind it. However it is very handy and help me with all my command line applications.

There are `2 ways` you can have the timer added to your application.

<br>

## 1. Import the module
***

You can simply add one line `use App::Timer` at the top and you are done.

<br>

## 2. Command line switch
***

Not always you want to touch the application source code, so you can use the command line switch instead as below:

<br>

```perl
$ perl -MApp::Timer your-application.pl
```

<br>

`Perl` being the `Perl`, you can get away not doing any of the above and simply do this:

<br>

```perl
$ time perl your-application.pl
```

<br>

That's it for today, have an enjoyable holiday break.
