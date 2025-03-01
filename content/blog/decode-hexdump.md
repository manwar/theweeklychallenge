---
title: "Decode Hexdump"
date: 2022-06-18T00:00:00+00:00
description: "Decode Hexdump."
type: post
image: images/blog/decode-hexdump.jpg
author: Mohammad S Anwar
tags: ["Perl"]
---

<br>

Those who know me personally, are aware that my background is `Mathematical` as I did `Degree in Mathematics Honours` in the year `1993-95`. During my early days with `COBOL` and `Pascal`, I never dealt with `Unicode` or played with `bytes`. Even when I moved to `C`, I was still no where near it. Those with `Degree in Computer Science` always stay ahead in the understandings of these low level key aspects of programming.

Fortunately or unfortunately, I never got the opportunity to work with `Unicode`. Having said, It always was there in the back of my mind, one day I will conquer the battle. Few weeks ago, I had conversation with a senior member of `Perl Community` with regard to an issue in one of the `CPAN` module, that I currently maintain. I was pleasantly surprised to see how comfortable he was playing with `Unicode` and debugging using `hexdump`. I decided to get hold of it rather than delaying it any further.

But the matter of fact is, my plate is always full, at any given point in time. So adding anything to the overloaded plate is going to tip over something already in the pipeline. As always the case, I went back to my [**Twitter handler**](https://twitter.com/cpan_author) and request for help. I did get some nice suggestions.

In this post, I am going to share my experience with you all.

<br>

### So what exactly is the problem?

<br>

My initial blocker was that I am unable to decode the output of `hexdump`.

<br>

So for the purpose of this blog post, I created sample plain text file `sample.txt`.

<br>

![Sample File](/images/blog/dh-1.png)

<br>

Now time, to get the `hexdump` dump some garbage (to me at least).

<br>

![Hexdump output](/images/blog/dh-2.png)

<br>

Here comes the `trouble`, how the output relates to the actual text in the file?

<br>

My twitter friends again helped me with decoding.

<br>

```perl

    6548  eH
    6c6c  ll
    206f  <s>o
    6f57  oW
    6c72  lr
    2064  <s>d
    2121  !!
    0a21  <l>!

```

<br>

`<s>` means space and `<l>` is linefeed. That was all, I needed.

<br>

### But then why it is the other way around?

<br>

I am told again by my twitter friends, it is the `endianness` that is behind the order.

For me, this is another blocker that I had to deal with.

With little search on `Google`, I found this [**post**](https://www.freecodecamp.org/news/what-is-endianness-big-endian-vs-little-endian) that explains the subject in details.

In summary, `Big Endian (BE)` stores data `MSbyte first` where as `Little Endian (LE)` stores data `MSbyte last`.

<br>

Now what is `MSbyte`?

<br>

The term `Most Significant Byte (MSbyte)` is the most common method of defining `endianness`.

The `byte` holding the greatest position is called `MSbyte`. Similarly the `bit` holding the greatest position is called `MSbit`.

The `byte` holding the smallest position is called `LSbyte`. Similarly the `bit` holding the smallest position is called `LSbit`.

<br>

### Going back to the original, why the hexdump output is not in the correct order?

<br>

The answer is my machine is configured/built as `LE`.

<br>

### So how do I know what `endian` is my system build upon?

<br>

I started looking for `Perl` way of figuring out.

In no time, I found this [**solution**](https://www.perlmonks.org/?node_id=102506). It had a typo in the original solution, I fixed it here `detect-endian-ness.pl`.

<br>

```perl
#!/usr/bin/perl

use v5.36;

my @b = unpack('C*', pack('I', 0));
my $sizeof_long = scalar(@b);

my @c = (1..$sizeof_long);
my $i = pack('I', hex('0x0'.join('0',reverse @c)));
my $big = pack('C'.$sizeof_long, reverse @c);
my $lit = pack('C'.$sizeof_long, @c);

if ( substr($i, 0, $sizeof_long) eq $big ) {
   say 'big';
}
elsif ( substr($i, 0, $sizeof_long) eq $lit ) {
   say 'little';
}
else {
   say "strange";
}
```

<br>

Time to find out the `endian` of my current system.

<br>

![Endian](/images/blog/dh-3.png)

<br>

Before I end this discussion, I would like share another post that explains [**Byte Order Mark (BOM)**](https://www.ionos.co.uk/digitalguide/websites/web-development/byte-order-mark), if you are interested.

Last but not the least, I would like to thank everyone who helped me in this journey.

That's it for now.
