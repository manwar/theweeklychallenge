---
title: "Angry at Bash"
date: 2025-03-29T00:00:00+00:00
description: "Discussion about bash misbehaviour."
type: post
image: images/blog/angry-at-bash.png
author: Mohammad Sajid Anwar
tags: ["bash"]
---

#### **DISCLAIMER:** Image is generated using `FREE` version of `ChatGPT`.
***

<br>

## Angry at Bash
***

I have noticed a very weird behavior in `bash` recently that I've never seen in my entire career of over two and a half decades.

Look at this one line to create a text file:

<br>

```bash
$ echo "Hello World!!" > hello.txt
```

<br>

This is what one do as a quick win, right?

What would you expect?

I expect a new file with just one line: `Hello World!!`

Do you know what I see when I type the following command?

<br>

```bash
$ cat hello.txt
Hello Worldls
```

<br>

**Wait, what?**

Yes, this was my reaction.

Any guesses what could be the reason behind this?

I had no clue what was going on until just now when I decided to get to the bottom of the issue.

It's so annoying.

Well, it turned out the naughty boy, `bash`, is playing a game behind my back.

**What game?**

Actually, it's replacing the `!!` with the last command from the history.

I see, now.

So what is the solution?

The easy solution is to use single quote instead of double quotes, like below:

<br>

```bash
$ echo 'Hello World!!' > hello.txt
$ cat hello.txt
Hello World!!
```

<br>

***

`Not so happy hacker!!`
