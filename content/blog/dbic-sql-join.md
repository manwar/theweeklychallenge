---
title: "SQL JOIN using DBIx::Class"
date: 2026-07-02T00:00:00+00:00
description: "Demonstrate SQL JOIN using DBIx::Class."
type: post
image: images/blog/dbic-sql-join.jpg
author: Mohammad Sajid Anwar
tags: ["DBIC", "SQL"]
---

#### **DISCLAIMER:** Image is generated using `ChatGPT`.
***
<br>

When building database driven application, one of the most crucial aspect is `SQL JOIN`. And if we are building the application with [**DBIx::Class**](https://metacpan.org/pod/DBIx::Class) then we need to be aware of all the possibilities. In this post, I am trying to explore all possible `SQL JOINs` with the help of `DBIx::Class`.

For demo purpose, we have this directory structure:

```bash
.
├── lib
│   └── MyApp
│       ├── Schema
│       │   └── Result
│       │       ├── Profile.pm
│       │       └── User.pm
│       └── Schema.pm
└── sql-join.t
```

First thing first, `Schema` class:

**File:** `lib/MyApp/Schema.pm`

```perl
package MyApp::Schema;

use strict;
use warnings;
use base qw/DBIx::Class::Schema/;

__PACKAGE__->load_namespaces;

1;
```

Followed by `Result` classes as below:

**File:** `lib/MyApp/Schema/Result/User.pm`

```perl
package MyApp::Schema::Result::User;

use strict;
use warnings;
use base qw/DBIx::Class::Core/;

__PACKAGE__->table('user');

__PACKAGE__->add_columns(
    id   => { data_type => 'integer', is_auto_increment => 1 },
    name => { data_type => 'varchar', size => 100 },
);

__PACKAGE__->set_primary_key('id');

__PACKAGE__->has_one(
    profile => 'MyApp::Schema::Result::Profile',
    'user_id',
    { join_type => 'left' }
);

1;
```

**File:** `lib/MyApp/Schema/Result/Profile.pm`

```perl
package MyApp::Schema::Result::Profile;

use strict;
use warnings;
use base qw/DBIx::Class::Core/;

__PACKAGE__->table('profile');

__PACKAGE__->add_columns(
    id      => { data_type => 'integer', is_auto_increment => 1 },
    user_id => { data_type => 'integer', is_nullable => 1 },
    website => { data_type => 'varchar', size => 100 },
);

__PACKAGE__->set_primary_key('id');

__PACKAGE__->belongs_to(
    user => 'MyApp::Schema::Result::User',
    'user_id',
    { join_type => 'left' }
);

1;
```

Now time for unit test.

**File:** `sql-join.t`

Setup schema, deploy and create test data.

```perl
#!/usr/bin/env perl

use strict;
use warnings;

use Test::More;
use List::Util qw(first);

use lib 'lib/';
use MyApp::Schema;

my $schema = MyApp::Schema->connect('dbi:SQLite:dbname=:memory:');
$schema->deploy;

my $user = $schema->resultset('User')
                  ->create({ name => 'Alice' });

$user->create_related('profile', { website => 'alice.dev' });

$schema->resultset('User')
       ->create({ name => 'Bob' });

my $orphan_profile = $schema->resultset('Profile')
                            ->create({ user_id => undef,
                                       website => 'orphan.com' });
```

### 1. INNER JOIN
***
```perl
{
    my $rs = $schema->resultset('User')
                    ->search({ 'profile.id' => { '!=' => undef } },
                             { join         => 'profile' });
    is($rs->count, 1,
        "INNER JOIN: Returns matching row");
}
```

### 2. LEFT JOIN
***
```perl
{
    my $rs = $schema->resultset('User')
                    ->search({}, { join => 'profile' });
    is($rs->count, 2,
        "LEFT JOIN: Returns all left records");
}
```

### 3. LEFT JOIN WITH NULL CHECK
***
```perl
{
    my $rs = $schema->resultset('User')
                    ->search({ 'profile.id' => undef     },
                             { join         => 'profile' });
    is($rs->count, 1,
        "LEFT JOIN NULL CHECK: Returns unique left rows");
}
```

### 4. RIGHT JOIN
***
```perl
{
    my $rs = $schema->resultset('Profile')
                    ->search({}, { join => 'user' });
    is($rs->count, 2,
        "RIGHT JOIN: Returns all right records");
}
```

### 5. RIGHT JOIN WITH NULL CHECK
***
```perl
{
    my $rs = $schema->resultset('Profile')
                    ->search({ 'user.id' => undef  },
                             { join      => 'user' });
    is($rs->count, 1,
        "RIGHT JOIN NULL CHECK: Returns unique right rows");
}
```

### 6. FULL OUTER JOIN
***
`DBIx::Class` has no native `FULL OUTER JOIN` support. There is no `join_type => 'full'` or `join_type => 'full outer'` option anywhere in [**DBIx::Class::Relationship**](https://metacpan.org/pod/DBIx::Class::Relationship) or the `join/prefetch` search attributes.

Only `inner` and `left`/`left-outer` joins are understood by the `ORM` layer.

This is confirmed directly in the DBIC docs [**DBIx::Class::SQLMaker::OracleJoins**](https://metacpan.org/pod/DBIx::Class::SQLMaker::OracleJoins#BUGS):

> Does not support full outer joins (however neither really does DBIC itself).

Some databases e.g. `PostgreSQL` always, `SQLite` since 3.39.0, support `FULL OUTER JOIN` natively at the `SQL` level, but reaching it would require dropping to literal `SQL` and bypassing `DBIC`'s join machinery entirely.

`MySQL` and older `Oracle` don't support it in `SQL` at all.


```perl
{
    my @left_join  = $schema->resultset('User')
                            ->search({},
                                     { prefetch => 'profile' })
                            ->all;

    my @right_only = $schema->resultset('Profile')
                            ->search({ 'user.id' => undef  },
                                     { join      => 'user' })
                            ->all;

    is(scalar(@left_join),  2,
        "FULL OUTER JOIN: LEFT side returns all 2 users");
    is(scalar(@right_only), 1,
        "FULL OUTER JOIN: right-only side returns the 1 orphaned profile");

    my $alice = first { $_->name eq 'Alice' } @left_join;
    my $bob   = first { $_->name eq 'Bob'   } @left_join;

    ok($alice && $alice->profile && $alice->profile->website eq 'alice.dev',
        "FULL OUTER JOIN: Alice's row carries her prefetched profile");
    ok($bob && !defined $bob->profile,
        "FULL OUTER JOIN: Bob's row has an undef profile (true LEFT JOIN, not INNER)");
    is($right_only[0]->id, $orphan_profile->id,
        "FULL OUTER JOIN: right-only row is the orphaned profile, not Alice's");

    my @left_profile_ids = grep { defined }
                           map  { $_->profile ? $_->profile->id : undef }
                           @left_join;

    ok(!(grep { $_ == $orphan_profile->id } @left_profile_ids),
        "FULL OUTER JOIN: orphaned profile is not duplicated on the LEFT side");

    my @full_outer_rows = (@left_join, @right_only);
    is(scalar(@full_outer_rows), 3,
        "FULL OUTER JOIN: Combined set contains exactly 3 distinct rows");
}
```

Finally done testing.

```perl
done_testing;
```

### TESTING
***
```bash
$ prove sql-join.t
sql-join.t .. ok
All tests successful.
Files=1, Tests=12,  0 wallclock secs ( 0.00 usr  0.01 sys +  0.12 cusr  0.05 csys =  0.18 CPU)
Result: PASS
```

***
<br>

`Happy Hacking !!!`
