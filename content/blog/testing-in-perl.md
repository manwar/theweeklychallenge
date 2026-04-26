---
title: "Testing in Perl"
date: 2026-04-26T00:00:00+00:00
description: "Explore the choices of testing in Perl."
type: post
image: images/blog/testing-in-perl.jpg
author: Mohammad Sajid Anwar
tags: ["perl", "testing"]
---

#### **DISCLAIMER:** Image is generated using `ChatGPT`.
***
<br>

If you're a fan of `Test Driven Development (TDD)` like I am, you have likely explored many different ways to test your code. I'm not ashamed to call myself an `old school student`; for a long time, I relied on my good old friend, [**Test::More**](https://metacpan.org/pod/Test::More), for most of my testing.

However, a few years ago, I started using [**Test2::V0**](https://metacpan.org/pod/Test2::V0). I've seen our team at work, upgrade our unit tests to `Test2::V0`, and one particular change that stood out to me is the default deep checking. Specifically, the fact that `is()` now handles everything `is_deeply()` used to do.

Let's set the stage for today's walkthrough:

```bash
$ cpanm -vS Test2::Suite Test2::Harness
```

We will create very basic unit test, `t/demo1.t`, using `Test::More` first:

```perl
use Test::More;

ok(1, "Basic truth check");

is_deeply(
    { name => 'Joe', age => 41 },
    { name => 'Joe', age => 41 },
    "Hash structures match exactly"
);

like("Hello World", qr/Hello/, "Regex check works");

done_testing;
```

In the `Perl` world, `prove` is the classic command-line tool used to run tests. It acts as a wrapper around [**Test::Harness**](https://metacpan.org/pod/Test::Harness).

```bash
$ prove
t/demo1.t .. ok
All tests successful.
Files=1, Tests=3,  0 wallclock secs ( 0.01 usr  0.00 sys +  0.04 cusr  0.00 csys =  0.05 CPU)
Result: PASS
```

So far so good, right?

The creator of `Test::Harness` came up with modern alternative such as [**Test2::Harness**](https://metacpan.org/pod/Test2::Harness). With this, we got another command-line tool `yath`.

So how do you use `yath` instead of `prove`?

```bash
$ yath
PERL_HASH_SEED not set, setting to '20260426' for more reproducible results.

** Defaulting to the 'test' command **

( PASSED )  job  1    t/demo1.t

                                Yath Result Summary
-----------------------------------------------------------------------------------
     File Count: 1
Assertion Count: 3
      Wall Time: 0.48 seconds
       CPU Time: 0.43 seconds (usr: 0.12s | sys: 0.03s | cusr: 0.21s | csys: 0.07s)
      CPU Usage: 90%
    -->  Result: PASSED  <--
```

Since we are using the modern framework, why not upgrade the unit test, `t/demo2.t`, to use `Test2::V0`.

```perl
use Test2::V0;

ok(1, "Basic truth check");

is(
    { name => 'Joe', age => 41 },
    { name => 'Joe', age => 41 },
    "Hash structures match exactly"
);

like("Hello World", qr/Hello/, "Regex check works");

done_testing;
```

Now run the test using `yath`.

```bash
$ yath
PERL_HASH_SEED not set, setting to '20260426' for more reproducible results.

** Defaulting to the 'test' command **

( PASSED )  job  1    t/demo1.t
( PASSED )  job  2    t/demo2.t

                                Yath Result Summary
-----------------------------------------------------------------------------------
     File Count: 2
Assertion Count: 6
      Wall Time: 0.37 seconds
       CPU Time: 0.45 seconds (usr: 0.09s | sys: 0.02s | cusr: 0.26s | csys: 0.08s)
      CPU Usage: 123%
    -->  Result: PASSED  <--
```

The magic of `yath` is in its subcommands.

```bash
$ yath test
PERL_HASH_SEED not set, setting to '20260426' for more reproducible results.
( PASSED )  job  1    t/demo1.t
( PASSED )  job  2    t/demo2.t

                                Yath Result Summary
-----------------------------------------------------------------------------------
     File Count: 2
Assertion Count: 6
      Wall Time: 0.41 seconds
       CPU Time: 0.42 seconds (usr: 0.10s | sys: 0.03s | cusr: 0.22s | csys: 0.07s)
      CPU Usage: 103%
    -->  Result: PASSED  <--
```

It doesn't stop there, try this now:

```bash
$ yath test -v
PERL_HASH_SEED not set, setting to '20260426' for more reproducible results.
( LAUNCH )  job  1    t/demo1.t
[  PASS  ]  job  1  + Basic truth check
[  PASS  ]  job  1  + Hash structures match exactly
[  PASS  ]  job  1  + Regex check works
[  PLAN  ]  job  1    Expected assertions: 3
( MEMORY )  job  1    rss:  29112kB
( MEMORY )  job  1    size: 33580kB
( MEMORY )  job  1    peak: 33584kB
( PASSED )  job  1    t/demo1.t
(  TIME  )  job  1    Startup: 0.03667s | Events: 0.00035s | Cleanup: 0.00273s | Total: 0.03975s
( LAUNCH )  job  2    t/demo2.t
(  NOTE  )  job  2    Seeded srand with seed '20260426' from local date.
[  PASS  ]  job  2  + Basic truth check
[  PASS  ]  job  2  + Hash structures match exactly
[  PASS  ]  job  2  + Regex check works
[  PLAN  ]  job  2    Expected assertions: 3
( MEMORY )  job  2    rss:  31200kB
( MEMORY )  job  2    size: 35196kB
( MEMORY )  job  2    peak: 35196kB
( PASSED )  job  2    t/demo2.t
(  TIME  )  job  2    Startup: 0.04264s | Events: 0.00068s | Cleanup: 0.00262s | Total: 0.04594s

                                Yath Result Summary
-----------------------------------------------------------------------------------
     File Count: 2
Assertion Count: 6
      Wall Time: 0.71 seconds
       CPU Time: 0.41 seconds (usr: 0.11s | sys: 0.01s | cusr: 0.23s | csys: 0.06s)
      CPU Usage: 57%
    -->  Result: PASSED  <--
```

One of the best feature of `yath` is the persistent runner. It pre-loads your environment so tests start instantly:

    Start the runner    : yath start
    Run tests against it: yath run
    Stop it when done   : yath stop

So far, we have seen tests running sequentially. How about running the test in parallel?

For that, lets create some more test to demo this feature.

```bash
$ mkdir t/parallel
$ for i in {1..4}; do
cat <<EOF > t/parallel/test_$i.t
use Test2::V0;
use Time::HiRes qw(time);

my \$start_time = time();
my \$pid = \$\$;

diag("Job $i started at \$start_time on PID \$pid");
sleep 2;
ok(1, "Job $i finished");

done_testing;
EOF
done
```

This is what we got.

```bash
$ tree
.
└── t
    ├── demo1.t
    ├── demo2.t
    └── parallel
        ├── test_1.t
        ├── test_2.t
        ├── test_3.t
        └── test_4.t

3 directories, 6 files
```

Can we use `prove` to run the test in parallel?

Yes, we can.

```bash
$ yath test t/parallel/ -v
PERL_HASH_SEED not set, setting to '20260426' for more reproducible results.
( LAUNCH )  job  1    t/parallel/test_1.t
(  NOTE  )  job  1    Seeded srand with seed '20260426' from local date.
(  DIAG  )  job  1    Job 1 started at 1777241712.9551 on PID 240015
[  PASS  ]  job  1  + Job 1 finished
[  PLAN  ]  job  1    Expected assertions: 1
( MEMORY )  job  1    rss:  31164kB
( MEMORY )  job  1    size: 35200kB
( MEMORY )  job  1    peak: 35200kB
( PASSED )  job  1    t/parallel/test_1.t
(  TIME  )  job  1    Startup: 0.07473s | Events: 2.00068s | Cleanup: 0.00319s | Total: 2.07860s
( LAUNCH )  job  2    t/parallel/test_2.t
(  NOTE  )  job  2    Seeded srand with seed '20260426' from local date.
(  DIAG  )  job  2    Job 2 started at 1777241715.02359 on PID 240016
[  PASS  ]  job  2  + Job 2 finished
[  PLAN  ]  job  2    Expected assertions: 1
( MEMORY )  job  2    rss:  31200kB
( MEMORY )  job  2    size: 35140kB
( MEMORY )  job  2    peak: 35148kB
( PASSED )  job  2    t/parallel/test_2.t
(  TIME  )  job  2    Startup: 0.04366s | Events: 2.00074s | Cleanup: 0.00350s | Total: 2.04790s
( LAUNCH )  job  3    t/parallel/test_3.t
(  NOTE  )  job  3    Seeded srand with seed '20260426' from local date.
(  DIAG  )  job  3    Job 3 started at 1777241717.09132 on PID 240017
[  PASS  ]  job  3  + Job 3 finished
[  PLAN  ]  job  3    Expected assertions: 1
( MEMORY )  job  3    rss:  31204kB
( MEMORY )  job  3    size: 35108kB
( MEMORY )  job  3    peak: 35108kB
( PASSED )  job  3    t/parallel/test_3.t
(  TIME  )  job  3    Startup: 0.04252s | Events: 2.00085s | Cleanup: 0.00329s | Total: 2.04666s
( LAUNCH )  job  4    t/parallel/test_4.t
(  NOTE  )  job  4    Seeded srand with seed '20260426' from local date.
(  DIAG  )  job  4    Job 4 started at 1777241719.15869 on PID 240018
[  PASS  ]  job  4  + Job 4 finished
[  PLAN  ]  job  4    Expected assertions: 1
( MEMORY )  job  4    rss:  31204kB
( MEMORY )  job  4    size: 35128kB
( MEMORY )  job  4    peak: 35128kB
( PASSED )  job  4    t/parallel/test_4.t
(  TIME  )  job  4    Startup: 0.04226s | Events: 2.00090s | Cleanup: 0.00369s | Total: 2.04685s

                                Yath Result Summary
-----------------------------------------------------------------------------------
     File Count: 4
Assertion Count: 4
      Wall Time: 8.79 seconds
       CPU Time: 8.71 seconds (usr: 0.11s | sys: 0.06s | cusr: 6.88s | csys: 1.66s)
      CPU Usage: 99%
    -->  Result: PASSED  <--
```

While the `prove -j` could do this, `yath` is the preferred choice because of `Job Sorting`. If you have a massive suite, `yath` tracks which tests take the longest and runs them first in the next run.

I have only scratched the surface, if you want to explore further the take a look at this [**App::Yath**](https://metacpan.org/pod/App::Yath).

***

<br>

`Happy Hacking !!!`
