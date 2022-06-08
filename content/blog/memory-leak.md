---
title: "Memory Leak in Perl"
date: 2022-06-08T00:00:00+00:00
description: "Discussion on memory leak in Perl."
type: post
image: images/blog/memory-leak.jpg
author: Mohammad S Anwar
tags: ["Perl"]
---

<br>

I always find the topic `Memory Management` very fascinating. `Perl` being the **Perl**, there is nothing you need to worry about. All memory management is done for us for `FREE`.

<br>

### Still, there was something, I always wanted to find out about memory management in Perl.

<br>

All along, I knew that there is an easy way I can force my script to leak memory.

<br>

### How?

<br>

Just create a data structure with circular reference.

<br>

### Easy?

<br>

But the question is how do I demonstrate the memory leak?

<br>

Let me take you back in the memory, in the year 2015, `Gabor Szabo` handed over the maintenance of [**PDF::Create**](https://metacpan.org/dist/PDF-Create). At that time I had no clue about the internals of the module. I was hoping to keep it alive by fixing/patching bugs as and when time permits. During my peak, I had the opportunity to look into some of the core functions of the module. At that time I noticed the use of `weaken` for the first time. After little research, I found out more about it.

<br>

So now, I had two very important informations: `circular reference` can create memory leak and `weaken` can fix the leak.

<br>

Even, then I am back to my original question, `how can I easily demonstrate the behaviour?`

<br>

So, I decided to ask for help on my [**Twitter handle**](https://twitter.com/cpan_author).

<br>

![Image-1](/images/blog/ml-1.png)

<br>

To my request, I got this [**post**](https://perlmaven.com/eliminate-circular-reference-memory-leak-using-weaken) by `Gabor Szabo`. I tried to replicate the behaviour on my box but without any luck.

<br>

### So what next?

<br>

I didn't give up this time, I wanted to get to the bottom of it, no matter what.

<br>

After couple of evenings doing research, I found this very handy **CPAN** module [**Devel::Leak::Object**](https://metacpan.org/dist/Devel-Leak-Object) by `Karen Etheridge`, famously known as `ETHER`.

<br>

At this point, I felt little better.

<br>

### So time to demonstrate the memory leak?

<br>

Just for fun, I am using `Perl v5.36`.

<br>

```perl
 1 #!/usr/bin/perl
 2
 3 package L {
 4     use Devel::Leak::Object qw{ GLOBAL_bless };
 5     $Devel::Leak::Object::TRACKSOURCELINES = 1;
 6     sub new { bless { self_ref => undef }, $_[0] }
 7 }
 8
 9 package main;
10
11 use v5.36;
12
13 my $l = L->new;
14
15 # This would leak memory.
16 $l->{self_ref} = $l;
```
<br>

### Time to see the memory leak

<br>

![Image-2](/images/blog/ml-2.png)

<br>

Thanks to the module `Devel::Leak::Object`, I can clearly see the source of leak `i.e. line 13`.

<br>

Well, it is good to know that we have memory leak.

<br>

### How to fix the memory leak?

<br>

Before `Perl v5.36`, you would take the help of **CPAN** module [**Scalar::Util**](https://metacpan.org/pod/Scalar::Util) which gives us the handy function `weaken`. Since I am playing with the latest toy, I would take the luxury and use the `experimental builtin` by the same name.

<br>

```perl
 1 #!/usr/bin/perl
 2
 3 package L {
 4     use Devel::Leak::Object qw{ GLOBAL_bless };
 5     $Devel::Leak::Object::TRACKSOURCELINES = 1;
 6     sub new { bless { self_ref => undef }, $_[0] }
 7 }
 8
 9 package main;
10
11 use v5.36;
12 use experimental qw(builtin);
13 use builtin qw(weaken);
14
15 my $l = L->new;
16
17 # Fix the memory leak.
18 $l->{self_ref} = weaken $l;
```
<br>

### Let us check, if the script still leak memory?

<br>

![Image-3](/images/blog/ml-3.png)

<br>

### Wow, no more memory leak.

<br>

Finally I have script that demonstrates the memory leak and then fix to the leak as well.

<br>

### I am very happy now.

<br>

As you know, most of my **CPAN** [**distributions**](https://metacpan.org/author/MANWAR) use [**Moo**](https://metacpan.org/dist/Moo) for OO purpose. Can I use `Moo` object to demo the memory leak and fix as well?

<br>

### Why not? I sound more confident now. :-)

<br>

```perl
 1 #!/usr/bin/perl
 2
 3 package M {
 4     use Moo;
 5     use Devel::Leak::Object qw{ GLOBAL_bless };
 6     $Devel::Leak::Object::TRACKSOURCELINES = 1;
 7     has self_ref => (is => 'rw');
 8 }
 9
10 package main;
11
12 use v5.36;
13
14 my $m = M->new;
15
16 # This would leak memory.
17 $m->self_ref($m);
```

<br>

### Lets run the script and see the memory leak.

<br>

![Image-4](/images/blog/ml-4.png)

<br>

So we have seen the memory leak, time to fix the leak. To fix the leak, we can use `weak_ref` attribute supported by `Moo`.

<br>

```perl
 1 #!/usr/bin/perl
 2
 3 package M {
 4     use Moo;
 5     use Devel::Leak::Object qw{ GLOBAL_bless };
 6     $Devel::Leak::Object::TRACKSOURCELINES = 1;
 7     has self_ref => (is => 'rw', weak_ref => 1);
 8 }
 9
10 package main;
11
12 use v5.36;
13
14 my $m = M->new;
15
16 # Fix the memory leak.
17 $m->self_ref($m);
```

<br>

### Time to check if memory leak is fixed now.

<br>

![Image-5](/images/blog/ml-5.png)

<br>

### All good, so far.
