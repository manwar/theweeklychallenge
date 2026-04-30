---
title: "DBIx::Class - Schema Class"
date: 2026-04-30T00:00:00+00:00
description: "A complete introduction to Schema class."
type: post
image: images/blog/dbic-schema.jpg
author: Mohammad Sajid Anwar
tags: ["perl", "dbic"]
---

#### **DISCLAIMER:** Image is generated using `ChatGPT`.
***
<br>

In my [**earlier post**](/blog/dbic-resultset), I discussed about `Result` and `ResultSet` class. In this post I am focussing on the `Schema` class. I know, this feels a bit backward!

While working on my first book [**Design Patterns in Modern Perl**](https://perlschool.com/books/design-patterns), I learned that nothing is truly `"complete"` until it is published. Even then, there always seem to be a few things left pending. As I progress through the manuscript for my current book on `DBIx::Class`, I've realised that something very important was missing.

I am in a bit of a dilemma: should I be sharing this before the book is published? It's a hard balance to strike, but I am going ahead with it anyway...

#### Schema Class

In the earlier post, this is how we defined the `Schema` class.

```perl
package MyApp::Schema;

use strict;
use warnings;
use base 'DBIx::Class::Schema';

__PACKAGE__->load_namespaces();

1;
```

For my upcoming book, I wanted to dig deeper to justify the context of our architectural choices.

First thing first: what is `Schema` class, and why do we need it?

In one sentence, the `Schame` class is the control center for your database. Imagine your database is a massive warehouse full of filing cabinets (tables) and folders (records); the `Schame` class is the `Manager` who holds the map, the rules, and handles all the keys.

It acts as a `Single Point of Entry`. Instead of having database passwords and connection settings scattered all over your codebase, you consolidate them within the `Schame` class.

Let's revisit that definition and look closer at `load_namespace()`. As the name suggests, this method automatically finds your `Result` and `ResultSet` classes within their default namespaces. If your schema class is `MyApp::Schema` then the default namespaces will be `MyApp::Schema::Result::*` and `MyApp::Schema::ResultSet::*` respectively.

For a database table `users`, we define the following `Result` and `ResultSet` class:

    - MyApp::Schema::Result::User
    - MyApp::Schema::ResultSet::User

Simple, right?

However, there is a slight concern - if not a problem. What if you common logic that needs to apply to more than one table? In that case, you would end up adding duplicate code to the `ResultSet` classes of both tables.

Suppose we have two tables, `users` and `managers`, which both share a column: `is_deleted`. To handle this, we have our `ResultSet` classes, `MyApp::Schema::ResultSet::User` and `MyApp::Schema::ResultSet::Manager`.

To define an `active()` method for both tables, we would normally have to add the following code to both classes.

```perl
sub active {
    my $self = shift;
    return $self->search({ is_deleted => 0 });
}
```

So we found duplication already, how do we resolve this?

We have a clean solution for this issue. We define a comman `ResultSet` class that applies to all `Result` class.

```perl
package MyApp::Schema::DefaultRS;

use strict;
use warnings;
use base 'DBIx::Class::ResultSet';

sub active {
    my $self = shift;
    return $self->search({ is_deleted => 0 });
}
1;
```

Now that we have comman `ResultSet` class i.e. `MyApp::Schema::DefaultRS`, we can configure `Schema` class like below:

```perl
package MyApp::Schema;

use strict;
use warnings;
use base 'DBIx::Class::Schema';

__PACKAGE__->load_namespaces(
    default_resultset_class => 'DefaultRS',
);

1;
```

Let's build a complete solution.

```bash
$ tree
├── lib
│   └── MyApp
│       ├── Schema
│       │   ├── DefaultRS.pm
│       │   └── Result
│       │       ├── Manager.pm
│       │       └── User.pm
│       └── Schema.pm
└── test.pl

5 directories, 5 files
```


```perl
package MyApp::Schema;

use strict;
use warnings;
use base 'DBIx::Class::Schema';

__PACKAGE__->load_namespaces(
    default_resultset_class => 'DefaultRS',
);

1;
```


```perl
package MyApp::Schema::DefaultRS;

use strict;
use warnings;
use base 'DBIx::Class::ResultSet';

sub active {
    my $self = shift;
    return $self->search({ is_deleted => 0 });
}
1;
```


```perl
package MyApp::Schema::Result::User;

use strict;
use warnings;
use base 'DBIx::Class::Core';

__PACKAGE__->table('users');

__PACKAGE__->add_columns(
    id         => { data_type => 'integer', is_auto_increment => 1   },
    name       => { data_type => 'varchar', size              => 100 },
    is_deleted => { data_type => 'integer', default_value     => 0   },
);

__PACKAGE__->set_primary_key('id');

1;
```

```perl
package MyApp::Schema::Result::Manager;

use strict;
use warnings;
use base 'DBIx::Class::Core';

__PACKAGE__->table('managers');

__PACKAGE__->add_columns(
    id         => { data_type => 'integer', is_auto_increment => 1   },
    name       => { data_type => 'varchar', size              => 100 },
    is_deleted => { data_type => 'integer', default_value     => 0   },
);

__PACKAGE__->set_primary_key('id');

1;
```

```perl
#!/usr/bin/env perl

use strict;
use warnings;
use MyApp::Schema;

my $schema = MyApp::Schema->connect('dbi:SQLite:dbname=:memory:');

$schema->deploy({ add_drop_table => 1 });

my @managers = (
    { name => 'Manager1' },
    { name => 'Manager2', is_deleted => 1 },
    { name => 'Manager3', is_deleted => 1 },
);

foreach my $manager (@managers) {
    $schema->resultset('Manager')->create($manager);
}

my @users = (
    { name => 'User1' },
    { name => 'User2' },
    { name => 'User3', is_deleted => 1 },
);

foreach my $user (@users) {
    $schema->resultset('User')->create($user);
}


print "Active managers: ", $schema->resultset('Manager')->active->count, "\n";
print "Active users: ", $schema->resultset('User')->active->count, "\n";
```

#### Result

```bash
$ perl -Ilib/ test.pl
Active managers: 1
Active users: 2
```

***

<br>

Believe me, this is just the beginning. Plenty more to it, watch this space.

`Happy Hacking !!!`
