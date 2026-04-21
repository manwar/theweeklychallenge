---
title: "DBIx::Class - Result Class & ResultSet Class"
date: 2026-04-20T00:00:00+00:00
description: "Use of Result class and ResultSet class with examples."
type: post
image: images/blog/dbic-resultset.jpg
author: Mohammad Sajid Anwar
tags: ["perl"]
---

#### **DISCLAIMER:** Image is generated using `ChatGPT`.
***
<br>

As you all know, I started working on my second book, tentatively titled, `"The Perl ORM Handbook: DBIx::Class"` towards the end of `2025`. With the start of the new year, my focus shifted to a related project: a CPAN module called, [**DBIx::Class::Async**](https://metacpan.org/dist/DBIx-Class-Async). As you can imagine, that project took up bulk of my spare time. Now that it has settled down a bit, I am ready to return to the book's manuscript.

The book structure looks like this as of today:

    Preface
    Who This Book Is For
    How This Book Is Structured
    Code Conventions
    Part I: Foundations
        Chapter 1: Why ORM? The Case for DBIx::Class
        Chapter 2: Core Concepts and First Schema
    Part II: The Building Blocks
        Chapter 3: Defining Your Model: Result Classes
        Chapter 4: Basic CRUD Operations
        Chapter 5: Retrieving Data with ResultSets
    Part III: Relational Mapping
        Chapter 6: Defining Relationships
        Chapter 7: Working with Related Data
    Part IV: Advanced Data Handling
        Chapter 8: Transforming Column Data (Inflate/Deflate)
        Chapter 9: Practical Custom Inflators
        Chapter 10: Complex Column Strategies
    Part V: Reusability and Modular Design
        Chapter 11: Components: Encapsulating Reusable Behaviour
        Chapter 12: Advanced Component Patterns
    Part VI: The Lifecycle and Events
        Chapter 13: Hooks: Influencing the Object Lifecycle
    Part VII: Bringing It All Together
        Chapter 14: Application Architecture Patterns
        Chapter 15: Beyond the Basics

This blog post is a glimpse into what I am currently working on. Right now, my focus is on fine-tuning the discussion of a core `DBix::Class` topic:. **ResultSet** class. However, before I dive into `ResultSet`, it is essential to start with the `Result` class.

#### Result Class

In one line, `Result` class represents a single row in a table. Each instance of this class corresponds to one record. It defines the structure of the data and the relationships. It is used to access data or modify specific data. It provides key methods: `insert`, `update`, `delete` etc.

#### ResetSet Class

A `ResultSet` class represents a collection of rows. It is not the data itself, but rather the definition of how to get that data. It handles the `SELECT` logic. It allows you to filter, sort, and group data before it ever hits the database.

#### Example

For demo purpose, we will define `users` table with columns `id`, `username`, `status`, and `deleted`.

First schema class:

```perl
package MyApp::Schema;

use strict;
use warnings;
use base 'DBIx::Class::Schema';

__PACKAGE__->load_namespaces();

1;
```

Now let's create simple `Result` class for the `users` table first.

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

Using the above `Result` class, we can search active users like this:

```perl
#!/usr/bin/env perl

use strict;
use warnings;
use MyApp::Schema;

my $schema = MyApp::Schema->connect('dbi:SQLite:dbname=:memory:');

$schema->deploy({ add_drop_table => 1 });

my @users = (
    { username => 'Alice', status => 'active',   deleted => 0 },
    { username => 'Bob',   status => 'active',   deleted => 0 },
    { username => 'John',  status => 'inactive', deleted => 1 },
);

foreach my $user (@users) {
    $schema->resultset('User')->create($user);
}

my @active_users = $schema->resultset('User')->search({
    status  => 'active',
    deleted => 0
});

print "Active Users: ", scalar @active_users, "\n";  # 2
```

If we perform this operation more than once then we have to repeat the logic again.

To avoid that, we can create `ResultSet` class and put the logic in it like below:

```perl
package MyApp::Schema::ResultSet::User;

use strict;
use warnings;
use base 'DBIx::Class::ResultSet';

sub active {
    my $self = shift;
    return $self->search({
        $self->current_source_alias . '.status'  => 'active',
        $self->current_source_alias . '.deleted' => 0,
    });
}

1;
```

Time to register this `ResultSet` class in `Result` class. Just add one line: `__PACKAGE__->resultset_class('MyApp::Schema::ResultSet::User');`

So the `Result` class now looks like below:

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

__PACKAGE__->resultset_class('MyApp::Schema::ResultSet::User');

__PACKAGE__->set_primary_key('id');

1;
```

Using the above `ResultSet` class, we can now search active users like this:

```perl
#!/usr/bin/env perl

use strict;
use warnings;
use MyApp::Schema;

my $schema = MyApp::Schema->connect('dbi:SQLite:dbname=:memory:');

$schema->deploy({ add_drop_table => 1 });

my @users = (
    { username => 'Alice', status => 'active',   deleted => 0 },
    { username => 'Bob',   status => 'active',   deleted => 0 },
    { username => 'John',  status => 'inactive', deleted => 1 },
);

foreach my $user (@users) {
    $schema->resultset('User')->create($user);
}

my @active_users = $schema->resultset('User')->active;

print "Active Users: ", scalar @active_users, "\n";
```

This is much cleaner and easy to maintain.

***

<br>

`Happy Hacking !!!`
