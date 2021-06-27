---
title: "Meet The Champion: December 2020"
date: 2021-01-09T00:00:00+00:00
description: "Get to know about Niels van Dijke."
type: post
image: images/blog/meet-the-champion.jpg
author: Mohammad S Anwar
tags: ["Perl"]
---
---

# Get to know about Niels van Dijke

Welcome to the monthly series `Meet The Champion`.

Last month we spoke to **Simon Green**, the winner of **[November 2020](/blog/meet-the-champion-2020-11)**.

Today we are talking to **Niels van Dijke**, the winner of **December 2020** of `The Weekly Challenge`. I hope you are going to enjoy the interview.

---

**Mohammad:** Tell us about your technical background?

**Niels:** I started programming around the **age of 11** when my dad borrowed a **[Commodore PET computer](https://en.wikipedia.org/wiki/Commodore_PET)** from his work during a school holiday period. At the end of the school holiday I managed to code, with some help of my dad, **['tic-tac-toe'](https://en.wikipedia.org/wiki/Tic-tac-toe)**. All in **ASCII** art obviously. **40 years ago**, graphics cards where non-existing!

My dad was by far more technical than me as he learned everything himself post **World War 2** from (sparse) books from the public library and spending enormous amounts of hours experimenting with electronics (1955-ish: tubes, etc.) but I was lucky to learn by example from him. Electronics, coding, repairing bikes, etc. One of the projects I remember we did together is how we doubled the memory of our **MSX2** computer by piggy backing additional RAM and address selector chips by soldering them on top of the existing chips (**['wired-OR'](https://en.wikipedia.org/wiki/Wired_logic_connection#The_wired_OR_connection)** as far as I can remember). Software hacks are great, but (when they work!) hardware hacks are even greater! Although my dad passed away long time ago his passion for technical stuff lives further in me.

After primary school I went to a generic high school. From there I went to two technical schools in succession. The last school brought me to a **'Technical Computer Science Engineer'** grade which is a person who can design hardware, write device drivers for (real-time) operating systems (running at 32 bits **[Motorola 68000](https://en.wikipedia.org/wiki/Motorola_68000)** back then). In practice most of the students end up in a pure programming job. The troubleshooting and analytics skills in relation to hardware design and device drivers are key to the **TCSE grade** and that skill comes in handy for generic programming. At school I learned programming in: **PASCAL**, **6800/68000 assembly** (mixed with), **C**, **FORTRAN**, **awk**, **shell**.

In general I find anything that relates to technique interesting. Only time limits me to read and play with it in general (being a **Husband**, **Dad** and **'Bob the builder'** (DIY stuff to our house) as well).

---

**Mohammad:** How/When did you start using **Perl**?

**Niels:** I started my career for **Siemens** in 1994 on a big **C++** database (100+ tables) project on **Windows NT**. Due to stability reasons the project moved from **Visual C++** to **Visual Basic** and all (resource) source files had to be converted to VB resource - and template files. A real challenge in the era of **Intel 386/486**'s running at **33MHz** on **Windows NT 3.51** with a whopping **16 MiB RAM** using **[Perl 5.001](https://perldoc.perl.org/perlhist)** (19995-ish)!

Once I completed this project my reputation was established, and people started throwing **'big ASCII files'** (5 MiB+) at me for data extraction or conversion. It was the time I got my first **UNIX** account and was able to run even heavier **Perl** jobs in parallel.

From **Siemens** I moved to **BT**. First as a **UNIX sysadmin**, doing **Perl** stuff in a sysadmin role, later I became a **'Tactical Tools Developer'** writing all sorts of small tools to manage **IP networks** at a global scale. Currently I'm performing a lift/adopt/shift of all these tools from a **Solaris** to a **Linux** based platform. Which means a **Perl 5.8.x** to **5.16.x** migration, virtualization, containers, etc. etc. exercise.

---

**Mohammad:** How did you come to know about `The Weekly Challenge`?

**Niels:** Very short answer: Via the **[Perl Weekly newsletter](https://perlweekly.com/)** subscription.

---

**Mohammad:** What do you like the most about `The Weekly Challenge`?

**Niels:** You never know how much you must leave your comfort/experience zone each week. Typically, on **Task #2**. I try to be **'different'** with my solutions depending if I have the time that week. Especially on creating reports or progress output. I love to use regular expressions, map/grep, hashes or more complex multi-dimensional lists and hashes. And I look forward at the overall review performed by **Colin Crain**.

---

**Mohammad:** How much time you dedicate every week to `The Weekly Challenge`?

**Niels:** **Task #1** is on average way within an hour **Monday** evening. I have not had the moment yet that I saved **'ch-1.pl'** using **'vi'** and a **'perl -c ch-1.pl'** comes clean. Hopefully, this year!

**Task #2** is hard to estimate. I am more of a person that uses evolution style of developing stuff and do a certain number of things in parallel. Especially when there is no real pressure. If I can I add some reporting code to a solution. This can lead into a total of **3-4 hours**, through a few evenings during the week. I can still remember **[Challenge 62, Task 2: N Queens](/blog/perl-weekly-challenge-062/)**. Certainly not a `one hour job!`

Besides coding solutions, I try to submit challenges as well. One made it so far (**[Challenge 082, Task 1](/blog/perl-weekly-challenge-082/#TASK1)**) the others were maybe a bit to **'exotic'**. I will try to submit a few more in **2021!**

---

**Mohammad:** Do you checkout others solutions and who is your favorite?

**Niels:** Certainly, that was the main reason I joined **TWC!** Straight after my own submission I check what is already submitted on **GitHub** (who has beat me in time?) and indirectly via **[Colin Crain's in-depth reviews](/p5-reviews/)** when they come online. And when I have the time, I read other members blog postings when the **Perl Weekly** arrives. Unfortunately, I lack the time to write blog postings myself.... :-(

I do not have a favorite, but I do favor members who write similar **Perl** code like me (some comments, some input validation, naming variables longer than 1 or 2 characters (not for loop variables), etc.). I'll try to add `Test::More` like other members do in **2021** as well.

---

**Mohammad:** What do you suggest someone just started `The Weekly Challenge`?

**Niels:** Browse in the **TWC GitHub** repository what others have done so far. Interesting coding techniques and libraries can be found. You'll quickly see the **[TMTOWTDI](https://en.wikipedia.org/wiki/There%27s_more_than_one_way_to_do_it)** concept of **Perl** and **TWC**.

Don't be shy. You can receive some (positive) critics from people like **Colin Crain**. In general is **Colin** polite to **TWC** members and doesn't put members on the spot. All is meant to challenge you to better next time. At least, that is how I see it.

In other words: `Just do it. Nobody is perfect at first, but practice leads to perfection`.

---

**Mohammad:** Anything else you would to like to share with us?

**Niels:** Via code review of the solutions of other team members I picked up some valuable libraries. Hence I would like to thank other team members for their submissions each week! And I like to echo the words of previous **[Champions](/champions)**: Thank you **Mohammad** and all other **TWC** members for your efforts to have something like **TWC** on-going.

---

That brings the end of the conversation with **Niels van Dijke**. Please do let us know your view. We will come back next month with another champion.

---
