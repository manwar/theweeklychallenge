---
title: "Perl Weekly Challenge - Optional API Task"
date: 2019-07-16T00:00:00+00:00
description: "Review of optional API task."
type: post
image: images/blog/blog-header-10.jpg
author: Mohammad S Anwar
tags: ["Perl5", "Perl6"]
---
***
***
I have been thinking to do review of optional API task so far. I have now finally got the time.

***
***
# BACKGROUND
***
***

During the [**Perl Weekly challenge 005**](/blog/perl-weekly-challenge-015), **Gabor Szabo**, Chief Editor of [**Perl Weekly**](http://perlweekly.com) newsletter proposed optional API task to the weekly challenge. He even suggested list of API that I could use every week. It took me couple of weeks to figure out the format and other formalities. Finally it was introduced with the [**Perl Weekly Challenge - 008**](/blog/perl-weekly-challenge-008).

***
***
# SUMMARY
***
***

Here is the summary of API task so far at the end of [**Perl Weekly Challenge - 016**](/blog/perl-weekly-challene-016):

### [Perl Weekly Challenge - 008](/blog/perl-weekly-challenge-008)
#### [Mailgun API](https://www.mailgun.com/)

In the very first week, our super cool member, **Joelle Maslak**, took up the challenge and submitted the solutions in both **Perl5** and **Perl6**.

### [Perl Weekly Challenge - 009](/blog/perl-weekly-challenge-009)
#### [Spartpost API](https://www.sparkpost.com/features/email-api-integration/)

This time 2 more members joined **Joelle Maslak** (Perl5 and Perl6), **Veesh Goldman** (Perl5) and **Maxim Nechaev** (Perl5).

### [Perl Weekly Challenge - 010](/blog/perl-weekly-challenge-010)
#### [SendGrid API](https://sendgrid.com/solutions/email-api/)

**Joelle Maslak** holding the space alone this time with both **Perl5** and **Perl6** solutions.

### [Perl Weekly Challenge - 011](/blog/perl-weekly-challenge-011)
#### [Open Weather Map API](https://openweathermap.org/current)

This was the most popular API task so far, with 5 members submitted the solutions namely **Athanasius** (Perl5), **Dave Jacoby** (Perl5), **Feng Chang** (Perl5 and Perl6), **Joelle Maslak** (Perl5 and Perl6) and **Steven Wilson** (Perl5).

### [Perl Weekly Challenge - 012](/blog/perl-weekly-challenge-012)
#### [Synonyms API](https://www.synonyms.com/synonyms_api.php)

This time, we beat last week participations with 6 members attempting the API task. **Athanasius** (Perl5), **Feng Chang** (Perl5), **Francis Whittle** (Perl6), **Joelle Maslak** (Perl5 and Perl6), **Kian-Meng Ang** (Perl5) and **Steven Wilson** (Perl5).

### [Perl Weekly Challenge - 013](/blog/perl-weekly-challenge-013)
####  [Words API](https://www.wordsapi.com/docs/)

Not so lucky this time, just 2 members. **Joelle Maslak** (Perl5 and Perl6) and **Guillermo Ramos** (Perl5).

### [Perl Weekly Challenge - 014](/blog/perl-weekly-challenge-014)
#### [Geo DB Cities API](http://geodb-cities-api.wirefreethought.com/docs/api/get-city-time#/)

Back again with force, 6 members took the challenge. **Francis Whittle** (Perl6), **Joelle Maslak** (Perl5 and Perl6), **Kian-Meng Ang** (Perl5), **Lubos Kolouch** (Perl5), **Nikhil Prasanna** (Perl5) and **Rob Van Dam** (Perl5).

### [Perl Weekly Challenge - 015](/blog/perl-weekly-challenge-015)
#### [Language Detection API](https://detectlanguage.com/)

This week we had 7 members, best participations ever. **Athanasius** (Perl5 and Perl6), **Dave Jacoby** (Perl5), **Francis Whittle** (Perl6), **Guillermo Ramos** (Perl5), **Joelle Maslak** (Perl5 and Perl6), **Neil Bowers** (Perl5) and **Steven Wilson** (Perl5).

### [Perl Weekly Challenge - 016](/blog/perl-weekly-challenge-016)
#### [Winning Email API](https://winning.email/api/v1/docs)

None :-(

***
***
# FINAL TALLY
***
***

Final tally at the end, in the bracket shows the number of API solutions submitted.

    1)  Joelle Maslak (14)
    2)  Athanasius (4)
    3)  Feng Chang (3)
    4)  Steven Wilson (3)
    5)  Dave Jacoby (2)
    6)  Guillermo Ramos (2)
    7)  Kian-Meng Ang (2)
    8)  Lubos Kolouch (1)
    9)  Maxim Nechaev (1)
    10) Neil Bowers (1)
    11) Nikhil Prasanna (1)
    12) Rob Van Dam (1)
    13) Veesh Goldman (1)

***
***
# CONCLUSION
***
***

The current [**Perl Weekly Challenge - 017**](/blog/perl-weekly-challenge-017) has proposed [**Bhagavad Gita API**](https://bhagavadgita.io/api/) to all the members.

**Joelle Maslak** is clearly leading the chart.  One issue, I have noticed with API task, is they often need your personal detail to get the API key. I have made it clear, if ever such condition comes, feel free to skip the task.

Let me share a story with you, long time ago when I started contributing to **CPAN**, I looked up Google public API and found not many perl interface was available on **CPAN**. So I picked few and published the perl interface distributions to **CPAN**. I have had positive response to some of the API. While doing so, I noticed **Neil Bowers** also had some API interface. After looking at the code closely, I noticed there is pattern in all his API code. I started following his pattern, I refactored common code used by all API and published as a separated distribution. Now all API interface looked very light weight. One more thing, I noticed that respose to API call was converted into an object rather than raw hash. I updated all my API to return relevant object and not just raw hash.

While woring on API related distributions, every time, I come across API documentation page there would always have an example code in every language but not in **Perl**. I was wondering why there is none in **Perl**. As you know, it is not that difficult to get one in **Perl** as well. So when **Gabor Szabo** proposed the idea, I thought this would address that void. I knew **Neil Bowers** had a liking to API related work, I was waiting for him to pick one soon. He finally picked on [**Language Detection API**](https://detectlanguage.com/) and published the perl interface [**WebService::DetectLanguage**](https://metacpan.org/release/WebService-DetectLanguage) to **CPAN**. He didn't just stop there, he got it listed on their official website. So thanks to Neil for all the hard work. I hope the hard work of all other members one day get the attention of the API creator and be listed as **Perl5/Perl6** solutions.

 I would like to encourage all the members who have not tried the API task, please do give a try. If possible let the creator know your work.
