---
title: "Result Class - Components"
date: 2026-05-29T00:00:00+00:00
description: "Explore the power of components in Result class."
type: post
image: images/blog/resultclass-components.jpg
author: Mohammad Sajid Anwar
tags: ["perl", "dbic", "components"]
---

#### **DISCLAIMER:** Image is generated using `ChatGPT`.
***
<br>

For my upcoming book on `DBIx::Class`, I have been working on examples to support the thoeretical chapters. This exercise helped me fill several gaps in my narration. I started with [**DBIx::Class - Result Class & ResultSet Class**](/blog/dbic-resultset) followed by a three-part series on `Schema Class`:&nbsp; [**Part 1**](/blog/dbic-schema), &nbsp; [**Part 2**](/dbic-schema-part-2) &nbsp;and&nbsp;[**Part 3**](/blog/dbic-schema-part-3).

In this post, I am going to explore the power of `components` within `Result Class`. This will likely be another multi-part series, as components make it easy to get the job done with minimal effort.

Take a look at this result class, from the post: [**DBIx::Class - Result Class & ResultSet Class**](/blog/dbic-resultset)

```perl
package MyApp::Schema::Result::User;

use strict;
use warnings;
use base 'DBIx::Class::Core';

__PACKAGE__->table('users');

__PACKAGE__->add_columns(
    id       => { data_type => 'integer', is_auto_increment => 1   },
    username => { data_type => 'varchar', size              => 100 },
    status   => { data_type => 'varchar', size              => 20  },
    deleted  => { data_type => 'integer', default_value     => 0   },
);

__PACKAGE__->set_primary_key('id');

1;
```

The line: `use base 'DBIx::Class::Core';` is critical here.

You would say, we are just making the result class inherit from base class `DBIx::Class::Core`, right?

Yes, technically, you are spot on but what happens under the hood is even more fun.

The `DBIx::Class::Core`, brings this to your result class.

```perl
__PACKAGE__->load_components(qw/
    PK::Auto
    InflateColumn
    Relationship
    ResultSourceProxy
    Table
    Row
/);
```

Okay, but what if we want to load additional components?

We can do that easily, for example: `__PACKAGE__->load_components(qw/InflateColumn::DateTime/);`.

We have used the term `components` many times already, but what exactly are they?

From a `DBIx::Class (DBIC)` perspective, `Components` are modular "mix-ins" used to inject extra functionality into your `Result` classes.

They allow you to compose your class behaviour dynamically at runtime rather than relying on a rigid, deep inheritance tree.

In short, `Inheritance` (use base) defines what the class is, while `Components` (load_components) define what the class can do.

Let's demonstrate the use of two most common components: [**InflateColumn::DateTime**](https://metacpan.org/pod/DBIx::Class::InflateColumn::DateTime) and [**TimeStamp**](https://metacpan.org/pod/DBIx::Class::TimeStamp)

Here is the folder structure:

```bash
.
├── lib
│   └── MyApp
│       ├── Schema
│       │   └── Result
│       │       └── Member.pm
│       └── Schema.pm
└── t
    └── date-timestamp.t
```

**Schema Class**: `MyApp::Schema`

```perl
package MyApp::Schema;

use strict;
use warnings;

use base 'DBIx::Class::Schema';

__PACKAGE__->load_namespaces;

1;
```

**Result Class**: `MyApp::Schema::Result::Member`

```perl
package MyApp::Schema::Result::Member;

use strict;
use warnings;

use base 'DBIx::Class::Core';

__PACKAGE__->load_components(qw/ InflateColumn::DateTime TimeStamp /);

__PACKAGE__->table('members');

__PACKAGE__->add_columns(
    id          => { data_type => 'integer', is_auto_increment => 1 },
    name        => { data_type => 'varchar', size => 100 },
    status      => { data_type => 'varchar', size => 50, default_value => 'Active' },

    created_at  => { data_type => 'datetime', set_on_create => 1 },
    modified_at => { data_type => 'datetime', set_on_create => 1, set_on_update => 1 },
);

__PACKAGE__->set_primary_key('id');

1;
```

Let's get to the specifics of component: `InflateColumn::DateTime`.

If the `Result` class is having one or more columns with data types: `date`, `datetime` or `timestamp` then the component `InflateColumn::DateTime` let us treat the column as [**DateTime**](https://metacpan.org/pod/DateTime) object. Then adding component `TimeStamp` as well, we can set update (`set_on_update`) or create (`set_on_create`) date and time automatically.

Let's create the unit test now: `t/date-timestamp.t`

First we build the clean schema.

```perl
#!/usr/bin/env perl

use strict;
use warnings;
use lib 'lib';

use Test2::V0;
use File::Temp qw( tempfile );
use MyApp::Schema;

my ( $fh, $filename ) = tempfile( SUFFIX => '.db', UNLINK => 1 );
my $schema = MyApp::Schema->connect("dbi:SQLite:dbname=$filename");
$schema->deploy;
```

**Explicit: Row Creation Behaviour**

```perl
subtest 'Explicit: Row Creation Behaviour' => sub {
    my $row = $schema->resultset('Member')
                     ->create({ name => 'Alice Smith' });

    ok($row->created_at,  'created_at was filled automatically');
    ok($row->modified_at, 'modified_at was filled automatically');

    isa_ok($row->created_at, ['DateTime'], 'created_at is inflated into a DateTime object');
    is($row->created_at->epoch, $row->modified_at->epoch, 'Timestamps match exactly on creation');
};
```

**Explicit: Individual Object Update Behaviour**

```perl
subtest 'Explicit: Individual Object Update Behaviour' => sub {
    my $row = $schema->resultset('Member')
                     ->create({ name => 'Bob Jones' });

    my $original_created  = $row->created_at;
    my $original_modified = $row->modified_at;

    sleep 1;

    $row->update({ name => 'Bob Jones Jr.' });

    is($row->created_at->epoch, $original_created->epoch,
        'created_at remains completely static on modifications');

    ok($row->modified_at->epoch > $original_modified->epoch,
        'modified_at automatically stepped forward on object ->update()');
};
```

**Implicit Restriction vs Row Behaviour: Update Mechanics**

The test below demonstrate the subtle change in bahaviour. The component hooks only fire when we operate on the row object.

```perl
subtest 'Implicit Restriction vs Row Behaviour: Update Mechanics' => sub {
    $schema->resultset('Member')
           ->create({ name => 'Member A', status => 'Active' });
    $schema->resultset('Member')
           ->create({ name => 'Member B', status => 'Active' });

    my $row_a = $schema->resultset('Member')->find({ name => 'Member A' });
    my $timestamp_initial = $row_a->modified_at->clone;

    sleep 1;

    # BEHAVIOUR 1: resultset->search()->update() bypasses the hooks
    $schema->resultset('Member')
           ->search({ status => 'Active' })
           ->update({ status => 'Suspended' });

    my $row_a_after = $schema->resultset('Member')
                             ->find({ name => 'Member A' });

    is($row_a_after->status, 'Suspended',
        '[ResultSet Update] Column data successfully changed via ResultSet');

    is($row_a_after->modified_at->epoch, $timestamp_initial->epoch,
        '[ResultSet Update] CRITICAL: modified_at DID NOT change (bypassed hooks)');

    sleep 1;

    # BEHAVIOUR 2: resultset->find()->update() FIRES the hooks
    $schema->resultset('Member')
           ->find({ name => 'Member A' })
           ->update({ status => 'Active' });

    my $row_a_final = $schema->resultset('Member')
                             ->find({ name => 'Member A' });

    is($row_a_final->status, 'Active',
        '[Row Object Update] Column data successfully changed back via find()->update()');

    ok($row_a_final->modified_at->epoch > $timestamp_initial->epoch,
        '[Row Object Update] SUCCESS: modified_at stepped forward automatically!');
};
```

Final test, run the test suite.

```bash
$ yath
PERL_HASH_SEED not set, setting to '20260529' for more reproducible results.

** Defaulting to the 'test' command **

( PASSED )  job  1    t/date-timestamp.t

                                Yath Result Summary
-----------------------------------------------------------------------------------
     File Count: 1
Assertion Count: 13
      Wall Time: 4.07 seconds
       CPU Time: 3.88 seconds (usr: 0.11s | sys: 0.03s | cusr: 3.07s | csys: 0.67s)
      CPU Usage: 95%
    -->  Result: PASSED  <--
```

***

<br>

`Happy Hacking !!!`
