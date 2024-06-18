---
title: "Meet The Champion: August 2021"
date: 2021-10-03T00:00:00+00:00
description: "Get to know about Jorg Sommrey."
type: post
image: images/blog/meet-the-champion.jpg
author: Mohammad S Anwar
tags: ["Perl"]
---
---

# Get to know about Jorg Sommrey

Welcome to the monthly series `Meet The Champion`.

Last month we spoke to `Flavio Poletti`, the winner of **[July 2021](/blog/meet-the-champion-2021-07)**.

Today we are talking to `Jorg Sommrey`, the winner of **August 2021** of `The Weekly Challenge`. I hope you are going to enjoy the interview.

---

**Mohammad:** Tell us about your technical background?

**Jorg:** My programming experiences started at High School. They had a transistor based "computer" the size and shape of a piano equipped with some limited drum memory. 127 data registers and 127 code registers holding 3 machine instructions each. The instructions didn't even include a division. Input came from punched tape and a numeric keypad and output went to a typewriter. The first assignment usually was to write a program that divided two numbers.

Later I wrote some programs for a Hungarian **PDP-8** clone in a language called **FOCAL**.

After High School I studied mathematics where I took some courses on **PL/I** and **JCL** and wrote some programs in **PL/I** for a Russian **System/360** clone and in **Turbo Pascal** for a machine running **CP/M**.

Sounds archaic, doesn't it?

Those were the 80s in eastern Germany.

After university I became a software developer.

I started with **PL/I** (just a coincidence), then moved to **C** and later to **Java**. Touched such strange things like **ASM**, **JCL**, **CLIST**, **Rexx**, **RAMIS** or **SAS** amongst others on the way.

---

**Mohammad:** How/When did you start using **Perl**?

**Jorg:** I had an somewhat lengthy approach to **Perl**. In 1992, shortly after I had bought my first PC (after the German reunification), I started using **Linux** with kernel version 0.98. At this time I was too stubborn to recognize the power of **Perl**. It was the time of **Perl 4**: to me it seemed to be too complicated as a *tool*, to be too limited as a *programming language* and to violate the *Unix philosophy*. For a *real* program I would use **C**, for anything else a shell script combining standard tools like **grep**, **sort**, **sed** etc. For more complex tasks there still was **awk**. Honestly, I disliked **Perl**.

My ideal world broke down when my carefully crafted backup script (performing differential backups on **QIC** tapes) failed on a file with a newline in its name.

Soon I realized that the script needed a complete rewrite to cover such case. At that time **Perl 5** had been released and I had recognized that it was an adequate programming language. So I bought myself a **Camel** and rewrote the whole script in **Perl**. (By the way: **QIC** was replaced by several generations of **DDS/DAT** drives that were replaced by **RDX**, but the script survived.)

This was the beginning of a beautiful friendship.

So basically I am a **Perl** hobbyist, though it has come in handy many times in job-related tasks.

---

**Mohammad:** How did you come to know about `The Weekly Challenge`?

**Jorg:** There was a discussion about implementations related to the Collatz Conjecture in **[week 54](/blog/perl-weekly-challenge-054/)** at **[perlmonks](https://perlmonks.org/index.pl?node_id=11115088)** that attracted my attention to `The Weekly Challenge` and I started contributing in **[week 58](/blog/perl-weekly-challenge-058/)**.

---

**Mohammad:** What do you like the most about `The Weekly Challenge`?

**Jorg:** I like the idea of solving tasks just for fun. There are no losers and everybody can make themselves a winner just by participating. From `The Weekly Challenge` I've learned more about **Perl** than ever before.

---

**Mohammad:** How much time you dedicate every week to `The Weekly Challenge`?

**Jorg:** This is hard to tell. I usually write down some initial solutions very quickly and keep the files open for review. I often go back to these when I have some spare time. Maybe I add some comments, refine some lines of code or even abandon a solution completely. These changes result in 10 to 50 git commits each week, though these are not visible im my pull requests. It is fun and learning and worth every minute (or hour) spent.

---

**Mohammad:** Do you checkout others solutions and who is your favorite?

**Jorg:** I always checkout everything and go through all **Perl** solutions that fit in the standard naming schema. Every week there are so many interesting solutions that it would be unfair to name one favorite. Maybe two special mentions: **Choroba**'s contributions are always interesting and his solution to **[task 1 of week 68](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-068/e-choroba/perl/ch-1.pl)** opened the world of **PDL** to me. I had taken several unsuccessful attempts to get into there but one single line of his code enlightened me. And I like **Colin**'s solutions very much. He always provides very profound analysis of the tasks that are a pleasure to follow.

---

**Mohammad:** What do you suggest someone just started `The Weekly Challenge`?

**Jorg:** Relax and don't take it too serious. When I started participating I really took this too doggedly. I was upset when a task was not specified "mathematically exact" and there was some room for interpretation. Now I like these ambiguities very much as they challenge the mind and fire one's imagination.

---

**Mohammad:** Anything else you would to like to share with us?

**Jorg:** First of all I'd like to thank **Pete** and **Randi** for their great support.

Then I'd like to make a personal remark: As I already said, I look through most **Perl** solutions and I've seen comments about some tasks that were not very friendly. Such are infrequent and maybe someone just had a bad day. Nevertheless, something like this saddens me.

And finally: Thank you very much for facilitating and maintaining this amazing project and special thanks to **Colin** for his brilliant **Perl** reviews.

---

That brings the end of the conversation with **Jorg Sommrey**. Please do let us know your view. We will come back next month with another champion.

---
