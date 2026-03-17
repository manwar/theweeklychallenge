---
title: "The Weekly Challenge - 365"
date: 2026-03-16T00:00:00+00:00
description: "The Weekly Challenge - 365"
type: post
image: images/twc-logo.png
author: Mohammad Sajid Anwar
tags: ["Perl", "Raku"]
---

## TABLE OF CONTENTS
***

### &nbsp;&nbsp;1. [HEADLINES](#HEADLINES)
### &nbsp;&nbsp;2. [SPONSOR](#SPONSOR)
### &nbsp;&nbsp;3. [RECAP](#RECAP)
### &nbsp;&nbsp;4. [PERL REVIEW](#PERLREVIEW)
### &nbsp;&nbsp;5. [RAKU REVIEW](#RAKUREVIEW)
### &nbsp;&nbsp;6. [CHART](#CHART)
### &nbsp;&nbsp;7. [NEW MEMBERS](#NEWMEMBERS)
### &nbsp;&nbsp;8. [GUESTS](#GUESTS)
### &nbsp;&nbsp;9. [TASK #1: Alphabet Index Digit Sum](#TASK1)
### 10. [TASK #2: Valid Token Counter](#TASK2)

## HEADLINES {#HEADLINES}
***
Welcome to the `Week #365` of `The Weekly Challenge`.

Let us welcome `Abigail` back. I was pleasantly surprised to see him sharing his knowledge with us again. Thank you for sharing solutions in [**Awk**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-364/abigail/awk), [**Bash**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-364/abigail/bash), [**C**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-364/abigail/c), [**Perl**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-364/abigail/perl), and [**Python**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-364/abigail/python).

Welcome back, `beespider`, and thanks for your contributions in [**Uiua**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-364/beespider/uiua).

Thank you, `Niels van Dijke`, for taking the time to share your contributions with us. Your participation in past few weeks has made a positive impact on the stats. We now have `5 weeks` reaching the target in `2026` and another two weeks are very close to achieving it.

Thank you, `Paulo Custodio`, for your contiuous support and contributions. I can feel the energy you bring, and it motivates me to keep pushing the boundaries.

Thank you, `Lubos Kolouch`, for your diverse contributions. It is incredible to see such support, I am truly overwhelmed.

In the guest language rankings, I see `C` moving up to position `#5`, and giving tough competition to other guest languages. Well done and thank you all `C` contributors.

#### Sponsorship Update:
Last week I mentioned that we have a monthly prize pot sponsor but did not reveal the name at that time. Today I am very happy to share it. The sponsor is our newly joined team member `Marc Perry`. Although he is relatively new to the team, I have known him for a long time, even though we have never met in person. I truly appreciate his generosity and support for the project. Thank you, `Marc`, for helping make the monthly prizes possible.

Technically, I should have announced the monthly champion earlier, even without the prize money. Nevertheless, it is never too late. Today I am going to announce two champions: one for January and another for February. With great pride, I declare `Matthew Neleigh` as Champion of the Month for January and `Matthias Muth` as Champion of the Month for February.

Both have been champions in the past already, i.e. `Matthew Neleigh` in `April 2022` and `Matthias Muth` in `May 2023`. Many congratulations to both dedicated team members. I will send you both a personal email regarding the prize money.

By the way, I am still waiting for a response from `Mark Anderson`, the Champion of the Month for `December 2025`. I sent the email on `6th March`. I know it is very late - my apologies. Please get back to me when you can.

From next month onward, I will try to streamline everything. Promise.

#### Community Shout-out
Last week, I also shared the new look website with the team. I am grateful to all of you who sent me messages and said nice things about the new look. Even a single word of appreciation fills me with lots of energy. So thank you, `Team PWC`.

For a long time, I have been thinking about building a mobile app for `The Weekly Challenge` project, but I always faced obstacles, mainly because I am a hardcore `Perl` programmer. Unfortunately, `Perl` is not one of the supported languages for building mobile apps. At that time, I was thinking about making an app for `iPhone`, as I had the handset. Someone told me the easiest option was to learn `Swift` first. So I took a bootcamp course on `Udemy` about building `iPhone` apps using `Swift`. I even started sharing weekly challenge solutions in `Swift`, if you remember.

I also bought a `Mac Mini` so that I could start developing toy apps and learn the tricks. This was my first `Mac` machine. All my life, I had never touched a `Mac` device before. I liked the machine and built around 10 toy apps with the help of the bootcamp course. My twins (9 years old) would get excited every time I showed them the app on my iPhone. Then life took another twist, and I stopped participating completely. The `Mac Mini` is still sitting on my desk, switched off. Every now and then my wife reminds me about my mobile app project, and I keep avoiding the topic.

Fast forward to today. After the launch of the new look website, I decided to give the mobile app idea another try. While doing the research, I found out that to publish a mobile app for `iPhone`, I need to be a member of the `Apple Developer Program`, which costs `$99` per year. That put me off immediately because I don’t have the budget for it. However, I didn’t want to scrap the idea completely. So the other option was to build an app for `Android` devices. Later I found out that for this I only need to make a one-off payment of `$25`. This is something I can easily afford.

Now the question was: how am I going to build an `Android` app? Do I have to learn another programming language? After doing a little research, I found that the easiest option is `React Native`. And it is not that difficult to learn. I am also told that the same codebase can be used to build an app for `iPhone`.

Now that I had finalised my plan, I started building a simple interface for the weekly challenge. The most difficult part was the chart screen, as you all know how difficult it was when I did the migration earlier. I decided to make the chart simpler for the mobile app but keep the same information.

Since this was my first time, I had to set up my development environment. I downloaded `Android Studio` and installed a couple of virtual devices to test the app. In five days, I had a working prototype. I used my `iPhone` to test the app as well. It looked nice on the virtual `Android` devices too. For the first release, I am only going with the easy portable features from the new look website. In the following releases, I will add more features as I am learning too in the process.

Since I am going to build and support the mobile app, I wanted a dedicated physical `Android` device. I looked at what was available and found `Android` phones that were expensive, though still cheaper than `Apple` phones. My objective is to test the app, not to use it as my primary phone, so I started looking at tablets instead. I found one within my budget - `Samsung Galaxy Tab A11`. I ordered it on `Amazon` and the next day the device was in my hands. I started testing the app on it and immediately found an issue: the bottom icon bar was hidden behind the device navigation icons. I quickly fixed it, and everything looked fine.

Now it was time to publish the app on the `Play Store`. It was not as straightforward as I initially thought. I had to jump through many hoops to get to the point where the app was ready to be reviewed by `Google`. At that stage, I was told I needed a minimum of `12 real human testers` before `Google` would approve it for live listing.

My first thought was to create 12 new `Gmail` accounts and use them as testers. It turned out this is not acceptable. `Google` looks for real `Android` devices with each tester, and the testing period must last `14 days`. If even one person stops testing during this period, the approval may fail and the process must start again.

So now the question is: where do I find `12` real people with `Android` devices? I have one device myself, but I still need at least `11 more`. The only hope I have is to ask `Team PWC` if they can help me test the app.

I have created a dedicated `Google Group` email as suggested by the process, just for this purpose. Ideally, I would like `20+` volunteers, in case someone stops halfway through. Please write to me, `mohammad.anwar@yahoo.com`, if you are willing to be a tester for two weeks. I will then send you a personal invitation from the `Google Group` email so that `Google` can monitor how many testers are using the app. Once you become an official tester, you will receive the link to download the app on your `Android` device.

I request you to please keep the app installed on your device for at least `14 days`. You don’t need to use it every hour, but opening it occasionally to browse recent challenges or recaps will help show Google that the app has active engagement.

Thank you all in advance for helping make the first Weekly Challenge mobile app a reality.

Now that I am done with the app development, I feel really tired. I already had a lot of admin work even before the new look website went live. Now I have added more processes to feed additional data into the new look website. On top of that, I now have to manage the mobile app as well. I am excited, but also a little scared. It is still early days, but I am sure with time everything will become smoother.
***

<br>

Below is my contributions to the `Task #1` of `Week #364`.

### Perl: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-364/mohammad-anwar/perl/ch-1.pl)
***
```perl
sub decrypt_string {
    my $str = shift;

    $str =~ s/(\d{2})#|(\d)/ chr(($1 || $2) + 96) /ge;
    return $str;
}
```

### Raku: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-364/mohammad-anwar/raku/ch-1.raku)
***
```raku
sub decrypt-string(Str $str --> Str) {
    return $str.subst(/(\d**2)'#' | (\d)/, { chr(($0 // $1).Int + 96) }, :g);
}
```

### Python: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-364/mohammad-anwar/python/ch-1.py)
***
```python
def decrypt_string(s: str) -> str:
    return re.sub(r'(\d{2})#|(\d)', lambda m: chr(int(m.group(1) or m.group(2)) + 96), s)
```

Thank you `Team PWC`, once again.

`Happy Hacking!!`
***

<br>

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `360` &nbsp;&nbsp;|&nbsp;&nbsp; 61 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|
|&nbsp;&nbsp; `361` &nbsp;&nbsp;|&nbsp;&nbsp; 59 &nbsp;&nbsp;|&nbsp;&nbsp; 25 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|
|&nbsp;&nbsp; `362` &nbsp;&nbsp;|&nbsp;&nbsp; 54 &nbsp;&nbsp;|&nbsp;&nbsp; 27 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|
|&nbsp;&nbsp; `363` &nbsp;&nbsp;|&nbsp;&nbsp; 45 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|
|&nbsp;&nbsp; `364` &nbsp;&nbsp;|&nbsp;&nbsp; 55 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|
***

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `360` &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|&nbsp;&nbsp; 75 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|
|&nbsp;&nbsp; `361` &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|&nbsp;&nbsp; 55 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|
|&nbsp;&nbsp; `362` &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|&nbsp;&nbsp; 68 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|
|&nbsp;&nbsp; `363` &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|&nbsp;&nbsp; 39 &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|
|&nbsp;&nbsp; `364` &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 73 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|
***

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (4215)
     2. Rust       (1119)
     3. Ruby       (877)
     4. Haskell    (873)
     5. C          (863)
     6. Lua        (856)
     7. C++        (700)
     8. Go         (658)
     9. JavaScript (626)
    10. Java       (528)

### Blogs with Creative Title
***

#### 1. [String Goal](https://raku-musings.com/string-goal.html) by Arne Sommer.
#### 2. [Alternate Codes](https://github.sommrey.de/the-bears-den/2026/03/13/ch-364.html) by Jorg Sommrey.
#### 3. [substituting strings!](https://fluca1978.github.io/2026/03/13/PerlWeeklyChallenge364.html) by Luca Ferrari.
#### 4. [Decrypted "715#15#15#112#": goooal!](https://github.com/MatthiasMuth/perlweeklychallenge-club/tree/muthm-364/challenge-364/matthias-muth#readme) by Matthias Muth.
#### 5. [Andrés Cantor Goes West](https://packy.dardan.com/b/kZ) by Packy Anderson.
#### 6. [Weird encodings](http://ccgi.campbellsmiths.force9.co.uk/challenge/364) by Peter Campbell Smith.
#### 7. [Decrypted Goals](https://blog.firedrake.org/archive/2026/03/The_Weekly_Challenge_364__Decrypted_Goals.html) by Roger Bell_West.
#### 8. [It's all about the translation](https://dev.to/simongreennet/weekly-challenge-its-all-about-the-translation-17li) by Simon Green.
***

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***
#### 1. Commits: 48,367 (`+140`)
#### 2. Pull Requests: 13,741 (`+43`)
#### 3. Contributors: 275
#### 4. Fork: 349
#### 5. Stars: 211 (`+1`)
***

## SPONSOR {#SPONSOR}
***
With start of `Week #355`, we have a new sponsor `Marc Perry` until the end of year `2026`. Having said we are looking for more sponsors so that we can go back to weekly winner. If anyone interested please get in touch with us at `perlweeklychallenge@yahoo.com`. Thanks for your support in advance. You can find more informations [**here**](/sponsors).

## RECAP {#RECAP}
***
Quick recap of **[The Weekly Challenge - 364](/blog/recap-challenge-364)** by `Mohammad Sajid Anwar`.

## PERL REVIEW {#PERLREVIEW}
***
If you missed any past reviews then please check out the [**collection**](/p5-reviews).

## RAKU REVIEW {#RAKUREVIEW}
***
If you missed any past reviews then please check out the [**collection**](/p6-reviews).

## CHART {#CHART}
***
Please take a look at the [**charts**](/chart) showing interesting data.

I would like to `THANK` every member of the team for their valuable suggestions. Please do share your experience with us.

## NEW MEMBERS {#NEWMEMBERS}
***
Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please try the excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member `Saif Ahmed` of **Team PWC**.

## GUESTS {#GUESTS}
***
Please check out the guest contributions for the [**Week #364**](/blog/guest-contribution/#364).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

## Task 1: Alphabet Index Digit Sum {#TASK1}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given a string $str consisting of lowercase English letters, and an integer $k.

Write a script to convert a lowercase string into numbers using alphabet positions (a=1 … z=26), concatenate them to form an integer, then compute the sum of its digits repeatedly $k times, returning the final value.

#### Example 1

    Input: $str = "abc", $k = 1
    Output: 6

    Conversion: a = 1, b = 2, c = 3 -> 123
    Digit sum: 1 + 2 + 3 = 6

#### Example 2

    Input: $str = "az", $k = 2
    Output: 9

    Conversion: a = 1, z = 26 -> 126
    1st sum: 1 + 2 + 6 = 9
    2nd sum: 9

#### Example 3

    Input: $str = "cat", $k = 1
    Output: 6

    Conversion: c = 3, a = 1, t = 20 -> 3120
    Digit sum: 3 + 1 + 2 + 0 = 6

#### Example 4

    Input: $str = "dog", $k = 2
    Output: 8

    Conversion: d = 4, o = 15, g = 7 -> 4157
    1st sum: 4 + 1 + 5 + 7 = 17
    2nd sum: 1 + 7 = 8

#### Example 5

    Input: $str = "perl", $k = 3
    Output: 6

    Conversion: p = 16, e = 5, r = 18, l = 12 -> 1651812
    1st sum: 1 + 6 + 5 + 1 + 8 + 1 + 2 = 24
    2nd sum: 2+4 = 6
    3rd sum: 6

## Task 2: Valid Token Counter {#TASK2}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given a sentence.

Write a script to split the given sentence into space-separated tokens and count how many are valid words. A token is valid if it contains no digits, has at most one hyphen surrounded by lowercase letters, and at most one punctuation mark (!, ., ,) appearing only at the end.

#### Example 1

    Input: $str = "cat and dog"
    Output: 3

    Tokens: "cat", "and", "dog"

#### Example 2

    Input: $str = "a-b c! d,e"
    Output: 2

    Tokens: "a-b", "c!", "d,e"
    "a-b" -> valid (one hyphen between letters)
    "c!"  -> valid (punctuation at end)
    "d,e" -> invalid (punctuation not at end)

#### Example 3

    Input: $str = "hello-world! this is fun"
    Output: 4

    Tokens: "hello-world!", "this", "is", "fun"
    All satisfy the rules.

#### Example 4

    Input: $str = "ab- cd-ef gh- ij!"
    Output: 2

    Tokens: "ab-", "cd-ef", "gh-", "ij!"
    "ab-"   -> invalid (hyphen not surrounded by letters)
    "cd-ef" -> valid
    "gh-"   -> invalid
    "ij!"   -> valid

#### Example 5

    Input: $str = "wow! a-b-c nice."
    Output: 2

    Tokens: "wow!", "a-b-c", "nice."
    "wow!"  -> valid
    "a-b-c" -> invalid (more than one hyphen)
    "nice." -> valid

***
Last date to submit the solution `23:59 (UK Time) Sunday 22nd March 2026`.
