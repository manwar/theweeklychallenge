---
title: "Test::Excel"
date: 2022-07-03T00:00:00+00:00
description: "Discussion about Test::Excel."
type: post
image: images/blog/test-excel.jpg
author: Mohammad S Anwar
tags: ["Perl"]
---

***

My first contribution to `CPAN` was [**Test::Excel**](https://metacpan.org/dist/Test-Excel). It was initiated as we had requirement for such at work at that time.

It has gone through many changes, thanks to all for reporting issues and providing patches..

It even got space as topic for [**Day 18**](https://perladvent.org/2018/2018-12-18.html) in `Perl Advent Calendar 2018`.

It was a proud moment when a collegue of mine at work requested help with `Test::Excel` as it was not behaving as per her requirements. I was glad I could help her and got it patched so that it works for her.

Recently another collegue of mine at work asked me if it has support for `regex`.

Unfortunately it `didn't` have the support but I liked the idea.

I decided to get the patch ready. I had the first draft ready in no time but there was still some edge cases failing.

I needed some interrupted time to get it fixed. I then got distracted and moved away to do something else.

This morning, `Sunday 3rd July 2022`, I was feeling low and wanted to do something to boost my confidence.

I looked at my `TODO` list and found this long pending task.

Having spent non-distracted `3 hours`, I finally have cleared all pending edge cases.

It is now available on `CPAN` as [**v1.51**](https://metacpan.org/release/MANWAR/Test-Excel-1.51).

So how to use `regex`?

The `regex` is now added to be part of specification file.

The regex comparison can be applied to every cells in every sheets by having the following in the specification file.

<br>

```perl
    sheet ALL
    regex 2022\-\d\d\-\d\d
```

<br>

Or if you want to apply the rule to just a particular sheet e.g. `Demo`.

<br>

```perl
    sheet Demo
    regex 2022\-\d\d\-\d\d
```

<br>

How about just selected ranges in every sheets.

<br>

```perl
    sheet ALL
    range B2:B4
    regex  2022\-\d\d\-\d\d
```

<br>

Similary restrict to a named sheet.

<br>

```perl
    sheet Demo
    range B2:B4
    regex  2022\-\d\d\-\d\d
```

<br>

Time for some action.

<br>

```perl
#!/usr/bin/perl

use v5.36;
use Test::Excel;

compare_excel('demo-1.xls', 'demo-2.xls', { spec => 'spec.txt' })
?
(say "matched.")
:
(say "unmatched.");
```

<br>

You can use as unit testing as below:

<br>

```perl
#!/usr/bin/perl

use v5.36;
use Test::More;
use Test::Excel;

ok  compare_excel('demo-1.xls', 'demo-2.xls', { spec => 'spec.txt' });
ok !compare_excel('demo-1.xls', 'demo-3.xls', { spec => 'spec.txt' });

done_testing;
```

<br>

Or something like this:

<br>

```perl
#!/usr/bin/perl

use v5.36;
use Test::More;

use_ok('Test::Excel');
cmp_excel_ok('demo-1.xls', 'demo-2.xls', { spec => 'spec.txt' });
cmp_excel_not_ok('demo-1.xls', 'demo-3.xls', { spec => 'spec.txt' });

done_testing;
```

<br>

If you have any suggestions then please report it on [**GitHub repository**](https://github.com/manwar/Test-Excel).

That's it for now.
