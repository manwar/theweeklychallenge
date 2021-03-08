---
title: "The Weekly Challenge - 103"
date: 2021-03-08T00:00:00+00:00
description: "The Weekly Challenge - 103"
type: post
image: images/blog/pwc-base.svg
author: Mohammad S Anwar
tags: ["Perl", "Raku"]
---

## TABLE OF CONTENTS
***

### 01. [HEADLINES](#HEADLINES)
### 02. [SPONSOR](#SPONSOR)
### 03. [RECAP](#RECAP)
### 04. [PERL REVIEW](#PERLREVIEW)
### 05. [RAKU REVIEW](#RAKUREVIEW)
### 06. [CHART](#CHART)
### 07. [NEW MEMBERS](#NEWMEMBERS)
### 08. [GUESTS](#GUESTS)
### 09. [TASK #1: Chinese Zodia](#TASK1)
### 10. [TASK #2: What's playing?](#TASK2)

<br>

## HEADLINES {#HEADLINES}
***
<br>

Recently we celebrated the `100th week` of **The Weekly Challenge** and now we are moving to another celebration i.e. `2nd Anniversary`. Honestly speaking I never dreamt of coming this far. Thanks to the support and encouragement of `200+` strong members of **Team PWC**.

I have couple of  plans to make the event memorable. Please let me know your thoughts and your preferred choice.

> 1. Hold some kind video conference to let all team members interact with each other. We would give each member, say 5 minutes, to share their experiences. I have zero experience holding such event, I must confess. If we agree going this route then I would definitely need helping hands. Please come forward if you could help us organise.

<br>

> 2. Request each and every **Team PWC** members to create a short 5 minutes video sharing their experiences. I would then compile all video contributions and make it one fun video for everyone to enjoy.

Also as promised earlier, we would be declaring winners in the following categories for year `2020-21`.

##### 1. PWC Prolific Contributor Award (Perl)
##### 2. PWC Prolific Contributor Award (Raku)
##### 3. PWC Outstanding Blogger Award (Perl)
##### 4. PWC Outstanding Blogger Award (Raku)
##### 5. PWC Prolific Guest Award

<br>

Like last time, we would declare 3 winners in each category.

<br>

While we are talking about contributions, let's share some interesting stats from the [**GitHub repository**](https://github.com/manwar/perlweeklychallenge-club).

#### 1. Commits: 14,996 (+226)
#### 2. Pull Requests: 3683 (+50)
#### 3. Contributors: 160
#### 4. Fork: 201
#### 5. Stars: 90

<br>

Last but not least, I would like to thank each and every member for their support and encouragement.

<br>

## SPONSOR {#SPONSOR}
***

Our solo sponsor `Pete Sergeant` has been a great support to keep us motivated. We are lucky that he agreed to continue the journey with us in the year 2021. I would like to personally thank **Pete** and his entire team for their generosity. It would be great if we could add few more to sponsor the prize money so that we could go back and declare weekly champions as we have done in the past. I hope and wish this will become possible in 2021. The amount doesn't have to be huge. However, it would be nice to show off bunch of supporters. If an organisation comes forward and supports us then that would be the ultimate achievement.

<br>

## RECAP {#RECAP}
***

Quick recap of the [**"The Weekly Challenge - 102"**](/blog/recap-challenge-102) by `Mohammad S Anwar`.

<br>

## PERL REVIEW {#PERLREVIEW}
***

If you missed any past reviews then please check out the [**collection**](/p5-reviews).

<br>

## RAKU REVIEW {#RAKUREVIEW}
***

If you missed any past reviews then please check out the [**collection**](/p6-reviews).

<br>

## CHART {#CHART}
***

Please take a look at the [**charts**](/chart) showing interesting data.

I would like to `THANK` every member of the team for their valuable suggestions. Please do share your experience with us.

<br>

## NEW MEMBERS {#NEWMEMBERS}

***

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please try the n excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member `Saif Ahmed` of **Team PWC**.

<br>

## GUESTS {#GUESTS}

***

Please checkout the guest contributions for the [Week #102](https://perlweeklychallenge.org/blog/guest-contribution/#102).

<br>

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

***
## TASK #1 › Chinese Zodiac {#TASK1}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org/)
***

You are given a year `$year`.

Write a script to determine the `Chinese Zodiac` for the given year `$year`. Please check out [wikipage](https://en.wikipedia.org/wiki/Chinese_zodiac) for more information about it.

##### The animal cycle: Rat, Ox, Tiger, Rabbit, Dragon, Snake, Horse, Goat, Monkey, Rooster, Dog, Pig.
##### The element cycle: Wood, Fire, Earth, Metal, Water.

<br>

### Example 1:
        Input: 2017
        Output: Fire Rooster

### Example 2:
        Input: 1938
        Output: Earth Tiger

<br>

***
## TASK #2 › What's playing? {#TASK2}
##### **Submitted by:** Albert Croft
***

Working from home, you decided that on occasion you wanted some background noise while working. You threw together a network streamer to continuously loop through the files and launched it in a tmux (or screen) session, giving it a directory tree of files to play. During the day, you connected an audio player to the stream, listening through the workday, closing it when done.

For weeks you connect to the stream daily, slowly noticing a gradual drift of the media. After several weeks, you take vacation. When you return, you are pleasantly surprised to find the streamer still running. Before connecting, however, if you consider the puzzle of determining which track is playing.

After looking at a few modules to read info regarding the media, a quick bit of coding gave you a file list. The file list is in a simple CSV format, each line containing two fields: the first the number of milliseconds in length, the latter the media's title (this example is of several episodes available from the MercuryTheatre.info):

        1709363,"Les Miserables Episode 1: The Bishop (broadcast date: 1937-07-23)"
        1723781,"Les Miserables Episode 2: Javert (broadcast date: 1937-07-30)"
        1723781,"Les Miserables Episode 3: The Trial (broadcast date: 1937-08-06)"
        1678356,"Les Miserables Episode 4: Cosette (broadcast date: 1937-08-13)"
        1646043,"Les Miserables Episode 5: The Grave (broadcast date: 1937-08-20)"
        1714640,"Les Miserables Episode 6: The Barricade (broadcast date: 1937-08-27)"
        1714640,"Les Miserables Episode 7: Conclusion (broadcast date: 1937-09-03)"

For this script, you can assume to be provided the following information:

        * the value of $^T ($BASETIME) of the streamer script,
        * the value of time(), and
        * a CSV file containing the media to play consisting of the length in milliseconds and an identifier for the media (title, filename, or other).

Write a program to output which file is currently playing. For purposes of this script, you may assume gapless playback, and format the output as you see fit.

Optional: Also display the current position in the media as a time-like value.

Example:

    Input: 3 command line parameters: start time, current time, file name

        # Streamer start time: Tue Nov 24 12:22:03 2020
        1606134123

        # Current time:        Mon Mar  1 09:34:36 2021
        1614591276

        # filelist.csv

    Output:

        "Les Miserables Episode 1: The Bishop (broadcast date: 1937-07-23)"
        00:17:33

<br>

***

Last date to submit the solution **23:59 (UK Time) Sunday 14th March 2021**.

***
