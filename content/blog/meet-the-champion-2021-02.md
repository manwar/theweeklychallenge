---
title: "Meet The Champion: February 2021"
date: 2021-03-14T00:00:00+00:00
description: "Get to know about James Smith."
type: post
image: images/blog/meet-the-champion.jpg
author: Mohammad S Anwar
tags: ["Perl", "Raku"]
---
---

# Get to know about James Smith

Welcome to the monthly series `Meet The Champion`.

Last month we spoke to **Stuart Little**, the winner of **[January 2021](https://perlweeklychallenge.org/blog/meet-the-champion-2021-01)**.

Today we are talking to **James Smith**, the winner of **February 2021** of `The Weekly Challenge`. I hope you are going to enjoy the interview.

---

**Mohammad:** Tell us about your technical background?

**James:** I have been programming now for about **40 years**, my first experience was when I was at school using a **Teletype** linked to the local college, and then with a **Sinclair ZX81** - and **Basic**. This may be one of the reasons I like writing compact code - when you only have **1K** to play with you have to make your code small. My background is as a **Mathematician** and **Academic Stastician**, but the choices I made were often computer related, statistics, probablistic modelling, numerical analysis, so I got to learn a number of different languages - including **APL** (which makes **Perl** golf look readable), **Simula 67** (The original OO language), **C**, **C++** (argh!), **S** and of course **Perl**, with a dalliance into **Pascal**, **Forth** and **Fortran** thrown in as well.

It also meant that I grew up with the nascent Internet and started developing an interest in web technologies, when **NCSA mosaic** was the only option, and most of the sites on the `"World Wide Web"` were based in Universities.

Eventually my interest in the Internet drove me into becoming a **Web Developer**, and I've now been doing that for nearly **30 years** now. First as a side job in my University departments and as a volunteer role for **The Scout Association**.

I'm in my **20th** year at the [Wellcome Sanger Institute](https://www.sanger.ac.uk/), the institute started out as part of effort to sequence the **Human Genome Project** in the late **1990s**, and we have been in the news a lot recently having sequenced more **COVID-19** genomes than any other institute - allowing us to be in the forefront of the analysis and search for variants.

I have made comments about my "day job" in previous commits and blogs about the **"Perl Weekly Challenge"** - for the first seven years I worked and headed up the [Ensembl](https://www.ensembl.org/) web team, a genome browser allowing scientists to dive into the vast array of genomic data around, and later moved on to working in the core webteam enabling scientists to give access to the data and analyses we have available at the institute. So my work day is now taken up with **Perl**, **PHP** and **Javascript**, and managing the infrastructure that secures our applications and network.

The amount of data we produce and distribute is mind-blowing, we have peta-bytes of raw data, and peta-byte scale databases which have billions of small data records. So working with large data is part of our "day-job". Many of our applications are developed to give people ways of drilling into those large data sources or visualising summaries of them.

I suppose a lot of my experience has driven me to try and write small compact code - whether it because of being limited to 1K of RAM, or sending data over 14.4K modems (or in my first use of the network - an accoustic coupler to and from a teletype with rates recorded more as seconds/character!), or making data available to scientists in developing countries, optimisation has been one thing I've been really interested in.

I use less **Perl** in my volunteer web-dev role, the main web-code I'm currently looking after is 19 year old **PHP** - although I programmed it more like a Perl developer - so it is still going strong! Most of the data manipulation and management on the backend is written in trusty **Perl**.

---

**Mohammad:** How/When did you start using **Perl**/**Raku**?

**James:** I started using **Perl** as a glue script to process (for the time) large amounts of data during a **Post Doc** project I was working on (probably around 1992ish). It involved a series of **C** and **S** scripts that manipulated and processed the data. When I moved into web development **Perl** was the first language I used to handle **CGI** coding, and then I learnt **mod_perl** and all the advantages that gave me for a number of different projects - allowing for customisation, authentication etc in the core of the **Apache** process. Code I wrote nearly **20 years** ago is still running strong on a number of projects.

**Perl** stood out as a language which worked the way my brain worked, it was a simple selection of building blocks that you could tack on one after the other - e.g. using reverse sort grep map chains just clicks for me - much like **LEGO** one of my other passions. I often like coding to building models, you just need to write the blocks and then it is just a case of clicking those bits together in the write way to get the whole. It is also a "minimalist" language - but doesn't suffer from using whitespace to tell the computer how to read the code - white space is for human's (one of the reasons I can't get on with things like **Ruby** and **Python**)

I write full blown apps in **Perl** - but I'm infamous at work for my 1-liners for analysing large data-structures or log files down into something meaningful in seconds - digging into bugs/DoS attacks etc... `perl -pi -E`, sort, grep etc is in my psyche as the solution for most problems when it comes to analysing data we have...

---

**Mohammad:** How did you come to know about `The Weekly Challenge`?

**James:** I'm not sure how I came to know about it - it was probably in **Gabor**'s *Perl Weekly* email. I know I started in week one - and early on I tried both writing solutions in **Perl** and **Raku**, but eventually I just stuck to **Perl**, as many of my **Raku** solutions were just syntactic re-writes of **Perl** - I need to learn **Raku** enough to see if there is an advantage of its capabilities rather than writing **Perl** code in another language. I do like the idea of generators so I may dig back in when I have time.

I then had a barren patch where I was struggling to find time to write solutions, but now I have got back into the swing of things it is getting easier to slot it into the week...

---

**Mohammad:** What do you like the most about `The Weekly Challenge`?

**James:** I like that it is a nice distraction. Something which can be looked at put down and can walk away from - with work related problems that is not always possible. I find that trying to explain my solutions is useful now - whether it be in the code comments (which tend to be longer than the code), in my "blog" on [blogs.perl.org](http://blogs.perl.org/users/james_curtis-smith/) or on [Facebook](https://www.facebook.com/groups/perlprogrammers).

I suppose I've spent more time on it more recently I think after finding the **Perl Programmers** group on **Facebook**, as there is an opportunity to talk about and share thoughts. I would have hoped it would open up more opportunity for discussion on there of the finer? points of proramming and **Perl**.

I also like to see others solutions - and their comments on mine - as it is a shared learning experience - picking up new tips and tricks that I can use day to day.

---

**Mohammad:** How much time you dedicate every week to `The Weekly Challenge`?

**James:** Most weeks I read the challenges when I'm up getting the children ready for the school day and try and come up with a solution in my head. Then, I try and squeeze in about 30 minutes to come up with first pass solutions (I try and solve everything from scratch to begin with).

The rest of the day it will sit in the back of my brain - and I will occassionally dig in and put in some ideas of how to improve it either aesthetically or performance wise. Some weeks it will niggle and I will make the odd change here and there all week - especially if is a "one-liner". So some weeks it will be an hour - others two or three for the coding.

Then there is the blog post & comments which probably account to another hour or two.

---

**Mohammad:** Do you checkout others solutions and who is your favorite?

**James:** I tend to have a look around to see if anyone has an interesting solution to the problems. I will checkout random **Raku** ones to see if I can understand the syntax/logic of them, they look interesting - but I thought **Raku** was supposed to make **Perl** more readable - I'm not sure that it does - it seems to be even more sigil-tastic.

Often the ones I look at are the ones with early pull requests, like **Stuart**, **Dave** and **Simon**; I do like to disect the shorter solutions as it is a coding style that interests me.... When your class or library file is over 2-3000 lines long then it is always nice to find ways to make individual parts of it shorter.

---

**Mohammad:** What do you suggest someone just started `The Weekly Challenge`?

**James:** Just go for it - as with **Perl** it's a case of **TIMTOWTDI** - come up with your own solution - even if it is unique. Submit it. Then look at others solutions and see what you can learn about the language or techniques. Last week for me it was using (*FAIL) regexs.

Use `Test::More` or something similar to build the test examples if you can - it's easier when iterating your solution. If you are interested in performance then it's usually a case of `use Benchmark` for faster functions, `use Time::Hires qw(time)` to get accurate timings of methods (often if looking for the bottleneck in the code by distributing `print time-$time0` through out the code) or just running `time perl ch-1.pl` to see how long the script takes to run.

---

**Mohammad:** Anything else you would to like to share with us?

**James:** I just want to say thank you for running this, it has kept me occupied for the last couple of years, and hope that it will spark people to realise **Perl** isn't dead - and that it is good for many things!

---

That brings the end of the conversation with **James Smith**. Please do let us know your view. We will come back next month with another champion.

---
