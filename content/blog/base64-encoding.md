---
title: "Base64 Encoding"
date: 2026-10-24T00:00:00+00:00
description: "Base64 encoding internals."
type: post
image: images/blog/base64-encoding.jpg
author: Mohammad Sajid Anwar
tags: ["Base64"]
---

#### **DISCLAIMER:** Image is generated using `ChatGPT`.
***
<br>

>Base64 is encoding scheme and **NOT** encryption.

I have to keep remind myself.

I am sure, being a programmer, you have come across **base64 encoding** many time in your career.

Same with me, and I always wanted to know the secret behind it.

When you are in the middle of high delivery project, you don't get time to research.

Today is the best time, Sunday raining morning. Good excuse to stay indoor infront of machine.

I have too many things on my plate already i.e. finish the manuscript for upcoming book on **DBIx::Class**.

Also thinking of submitting a talk for **London Perl Workshop 2026**. I have few topics in my mind.

I will have to choose one, soon otherwise I will miss the train. I want to keep the tradition of giving a talk at every **LPW** event.

Coming back to the main topic, **Base64 Encoding**.

Here is the simple introduction, using the tool, **base64**:

```bash
$ echo -n "Super_Secret_Password" | base64
U3VwZXJfU2VjcmV0X1Bhc3N3b3Jk
```

So, the **base64** encoding of text **"Super_Secret_Password"** is **U3VwZXJfU2VjcmV0X1Bhc3N3b3Jk**.

How about reverse engineering?

We can use the same tool to decode the encoded string.

```bash
$ base64 -d <<< U3VwZXJfU2VjcmV0X1Bhc3N3b3Jk
Super_Secret_Password
```

It looks simple, isn't it?

Let's figure out the magic behind the scene.

For this, we will use tool, **xxd**. It creates a **hexadecimal** dump of a given file or standard input.

```bash
$ echo -n abc | xxd -b
00000000: 01100001 01100010 01100011                             abc
```

So we got **3 letters, 8 bits** each as below:

    a: 0 1 1 0 0 0 0 1
    b: 0 1 1 0 0 0 1 0
    c: 0 1 1 0 0 0 1 1

First this gets converted into **4 groups, 6 bits** each.

    Group 1: 0 1 1 0 0 0
    Group 2: 0 1 0 1 1 0
    Group 3: 0 0 1 0 0 1
    Group 4: 1 0 0 0 1 1

Having done that, now we need to lookup this table for encoding.

| Binary | Value | Char | Binary | Value | Char | Binary | Value | Char | Binary | Value | Char |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 000000 | 0 | A | 010000 | 16 | Q | 100000 | 32 | g | 110000 | 48 | w |
| 000001 | 1 | B | 010001 | 17 | R | 100001 | 33 | h | 110001 | 49 | x |
| 000010 | 2 | C | 010010 | 18 | S | 100010 | 34 | i | 110010 | 50 | y |
| 000011 | 3 | D | 010011 | 19 | T | 100011 | 35 | j | 110011 | 51 | z |
| 000100 | 4 | E | 010100 | 20 | U | 100100 | 36 | k | 110100 | 52 | 0 |
| 000101 | 5 | F | 010101 | 21 | V | 100101 | 37 | l | 110101 | 53 | 1 |
| 000110 | 6 | G | 010110 | 22 | W | 100110 | 38 | m | 110110 | 54 | 2 |
| 000111 | 7 | H | 010111 | 23 | X | 100111 | 39 | n | 110111 | 55 | 3 |
| 001000 | 8 | I | 011000 | 24 | Y | 101000 | 40 | o | 111000 | 56 | 4 |
| 001001 | 9 | J | 011001 | 25 | Z | 101001 | 41 | p | 111001 | 57 | 5 |
| 001010 | 10 | K | 011010 | 26 | a | 101010 | 42 | q | 111010 | 58 | 6 |
| 001011 | 11 | L | 011011 | 27 | b | 101011 | 43 | r | 111011 | 59 | 7 |
| 001100 | 12 | M | 011100 | 28 | c | 101100 | 44 | s | 111100 | 60 | 8 |
| 001101 | 13 | N | 011101 | 29 | d | 101101 | 45 | t | 111101 | 61 | 9 |
| 001110 | 14 | O | 011110 | 30 | e | 101110 | 46 | u | 111110 | 62 | + |
| 001111 | 15 | P | 011111 | 31 | f | 101111 | 47 | v | 111111 | 63 | / |

Using the above encoding table, replace the each group with the equivalent alphabet.

    Group 1: 011000 => Y
    Group 2: 010110 => W
    Group 3: 001001 => J
    Group 4: 100011 => j

Double check, the above manual encoding with this command:

```bash
$ echo -n abc | base64
YWJj
```

It wasn't difficult to decode the magic.

Hang on, there is still one gotcha.

Let me show you another example as below:

```bash
$ echo -n ab | base64
YWI=
```

Where did this **=** appear in the output?

It's not part of the encoding table above.

This is what I was talking about earlier.

First find the hexadecimal form the text:

```bash
$ echo -n ab | xxd -b
00000000: 01100001 01100010                                      ab
```

Let's get encode the text manually first.

So far, we know **base64** works with **24 bits** at a time.

    Group 1: _ _ _ _ _ _  => []
    Group 2: _ _ _ _ _ _  => []
    Group 3: _ _ _ _ _ _  => []
    Group 4: _ _ _ _ _ _  => []

So the above dump looks like this now:

    a: 0 1 1 0 0 0 0 1
    b: 0 1 1 0 0 0 1 0

Total **16 bits** and in the group it would look like this with the help of encoding table.

    Group 1: 0 1 1 0 0 0 => [Y]
    Group 2: 0 1 0 1 1 0 => [W]
    Group 3: 0 0 1 0 _ _ => [ ]
    Group 4: _ _ _ _ _ _ => [ ]

As we see **Group 3** is missing **2 bits** and **Group 4** is completely empty.

For missing bits, we fill it with **0** and empty group gets special character **=**.

    Group 1: 0 1 1 0 0 0 => [Y]
    Group 2: 0 1 0 1 1 0 => [W]
    Group 3: 0 0 1 0 0 0 => [I]
    Group 4: _ _ _ _ _ _ => [=]

Let's prove the manual encoding.

```bash
$ echo -n ab | base64
YWI=
```

In the next post, I will share the common usecase of **base64** encoding.

***

<br>

`Happy Hacking !!!`
