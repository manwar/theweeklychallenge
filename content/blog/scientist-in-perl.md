---
title: "Scientist in Perl"
date: 2025-03-15T00:00:00+00:00
description: "Discussion about Scientist in Perl."
type: post
image: images/blog/scientist-in-perl.png
author: Mohammad Sajid Anwar
tags: ["Perl"]
---

#### **DISCLAIMER:** Image is generated using `FREE` version of `ChatGPT`.
***

<br>

<div class="container">
    <div class="row">
        <div class="col-12 col-sm mb-4 p-2 text-center">
            <a href="/blog/slurp-in-perl" title="Slurp in Perl">
                <img src="/images/blog/slurp-mini.png" class="img-fluid">
            </a>
        </div>
        <div class="col-12 col-sm mb-4 p-2 text-center">
            <a href="/blog/subroutine-signatures" title="Subroutine Signatures in Perl">
                <img src="/images/blog/subroutine-signatures-mini.png" class="img-fluid">
            </a>
        </div>
        <div class="col-12 col-sm mb-4 p-2 text-center">
            <a href="/blog/extraction-in-perl" title="Text Extraction in Perl">
                <img src="/images/blog/extraction-in-perl-mini.png" class="img-fluid">
            </a>
        </div>
        <div class="col-12 col-sm mb-4 p-2 text-center">
            <a href="/blog/random-in-perl" title="Random in Perl">
                <img src="/images/blog/random-in-perl-mini.png" class="img-fluid">
            </a>
        </div>
        <div class="col-12 col-sm mb-4 p-2 text-center">
            <a href="/blog/perl-regex" title="Perl Regex">
                <img src="/images/blog/perl-regex-mini.png" class="img-fluid rounded-3 border border-3">
            </a>
        </div>
        <div class="col-12 col-sm mb-4 p-2 text-center">
            <a href="/blog/read-large-file" title="Read Large File">
                <img src="/images/blog/read-large-file-mini.png" class="img-fluid">
            </a>
        </div>
        <div class="col-12 col-sm mb-4 p-2 text-center">
            <a href="/blog/welcome-to-perl" title="Welcome to Perl">
                <img src="/images/blog/welcome-to-perl-mini.png" class="img-fluid">
            </a>
        </div>
    </div>
</div>

<br>

## Scientist in Perl
***

It was in the year `2017`, I found out about the `CPAN` module [**Scientist**](https://metacpan.org/dist/Scientist) and guess what?

It turned out be created by a very dear friend of mine, `Lance Wicks`.

I submitted few pull requests, mostly low hanging fruits, during that period and it was kindly accepted and merged.

You might ask me, what is `Scientist`?

Well, it is inspired by [**Ruby library**](https://github.com/github/scientist) primarily to assist in refactoring critical path of the code.

Something like below:

<br>

```perl
require "scientist"

class MyWidget
  def allows?(user)
    experiment = Scientist::Default.new "widget-permissions"
    experiment.use { model.check_user(user).valid? } # old way
    experiment.try { user.can?(:read, model) } # new way

    experiment.run
  end
end
```

<br>

So why talking about it now?

Actually I was going through my old notes and came across this.

I thought it is worth re-visiting and sharing it with fellow hackers.

The core idea behind the `Scientist` is to help you refactor critical path code with confidence.

I decided to install the latest version from `CPAN`.

<br>

    $ cpanm -vS Scientist

<br>

Everything went smooth without any issues.

So am I good to go, right?

Well, the quick and easy way to test is to try running code as documented in the [**SYNOPSIS**](https://metacpan.org/pod/Scientist#SYNOPSIS).

<br>

```perl
use feature qw(say);
use Scientist;
sub old_code {
  return 10;
}
sub new_code {
  return 20;
}
my $experiment = Scientist->new(
  experiment => 'MyTest',
  use => \&old_code,
  try => \&new_code,
);
my $answer = $experiment->run;
say "The number ten is $answer";
warn 'There was a mismatch between control and candidate'
  if $experiment->result->{'mismatched'};
say 'Timings:';
say 'Control code:   ', $experiment->result->{control}{duration}, ' microseconds';
say 'Candidate code: ', $experiment->result->{candidate}{duration}, ' microseconds';
```

<br>

When I ran the above code, I got the following error, `ouch`.

<br>

    $ perl synopsis.pl
    Can't locate object method "set_column_alias" via package "Test2::Compare::Delta"
    (perhaps you forgot to load "Test2::Compare::Delta"?)

<br>

Did I miss something?

Not sure, I just installed the latest copy from `CPAN` without any issue..

What could go wrong?

I decided to look into the source code and found [**this line**](https://metacpan.org/dist/Scientist/source/lib/Scientist.pm#L114).

Quick fix would be to explicitly import `Test2::Compare::Delta`, right?

Something like below:


![Pull Request](/images/blog/scientist-in-perl-pr.png)


I fixed my local copy and I am good to go now.

<br>

    $ perl synopsis.pl
    The number ten is 10
    There was a mismatch between control and candidate at synopsis.pl line 17.
    Timings:
    Control code:   9.5367431640625e-07 microseconds
    Candidate code: 2.14576721191406e-06 microseconds

<br>

Before I move on, it would be nice if I submit the proposed change as [**pull request**](https://github.com/lancew/Scientist/pull/36) and wait for the review.

I would wait for few days and if I don't hear from `Lance Wicks` then I'll ping him through my private channel.

`[2025-03-19 21:15]` **UPDATE:** The pull request I created above now accepted and merged. Just fetched latest version and you are good to go now.

What's next now as the code from `SYNOPSIS` ran without any error?

Let's take a step back and come up with easy to follow simple use case.

I decided to extend the `Scientist` module as below to keep the interface clean and easy to follow.

<br>

```perl
package Experiment;

use v5.38;
use Moo;
extends 'Scientist';

sub publish($self) {
    my $result = $self->result;
    say "Control result    : ", $result->{observation}->{control};
    say "Control duration  : ", $result->{control}->{duration};
    say "Candidate result  : ", $result->{observation}->{candidate};
    say "Candidate duration: ", $result->{candidate}->{duration};
    say "Matched           : ", $result->{matched} ? 'Yes' : 'No';
    say "Diagnostic        : ";
    say $result->{observation}->{diagnostic};
}
```

<br>

Now we'll try the `happy path` first.

Remember, the two most important factors we are interested in is `return values` and `processing times`.

<br>

```perl
package main;

sub control_implementation($input)   { return $input + $input }
sub candidate_implementation($input) { return $input * 2      }

my $experiment = Experiment->new(
    experiment => 'Example',
    use => sub { return control_implementation(5)   },
    try => sub { return candidate_implementation(5) },
);

$experiment->run;
```

<br>

Let's run the code now:

<br>

    $ perl experiment.pl
    Control result    : 10
    Control duration  : 1.9073486328125e-06
    Candidate result  : 10
    Candidate duration: 4.05311584472656e-06
    Matched           : Yes
    Diagnostic        :

<br>

How about the `not so happy path`?

We can easily mock that too.

<br>

```perl
package main;

sub control_implementation($input)   { return $input * $input }
sub candidate_implementation($input) { return $input ^ 2      }

my $experiment = Experiment->new(
    experiment => 'Example',
    use => sub { return control_implementation(5)   },
    try => sub { return candidate_implementation(5) },
);

$experiment->run;
```

<br>

Time to test the code:

<br>

    $ perl experiment.pl
    Control result    : 25
    Control duration  : 1.9073486328125e-06
    Candidate result  : 7
    Candidate duration: 2.86102294921875e-06
    Matched           : No
    Diagnostic        :
    +------+---------+----+-----------+
    | PATH | CONTROL | OP | CANDIDATE |
    +------+---------+----+-----------+
    | [0]  | 7       | eq | 25        |
    +------+---------+----+-----------+

<br>

***

`Keep Hacking!!!`
