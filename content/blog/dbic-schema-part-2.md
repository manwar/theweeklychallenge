---
title: "DBIx::Class - Schema Class (Part 2)"
date: 2026-05-03T00:00:00+00:00
description: "Introduction to Schema class features connection() and exception_action()."
type: post
image: images/blog/dbic-schema-part-2.jpg
author: Mohammad Sajid Anwar
tags: ["perl", "dbic"]
---

#### **DISCLAIMER:** Image is generated using `ChatGPT`.
***
<br>

In my [**previous post**](/blog/dbic-schema), I discussed about `Schema` class ability to assign `default_resultset_class`. In this post I am focussing on two more features i.e. `connection()` and `exception_class()`.

The `Schema` class and `Result` class from the previous post looks like below:

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

Now in order to demo the two features I mentioned above, I have to add few things.

    1) Add Result class (Post)
    2) Update Result class (User) to link to Result class (Post)

To demonstrate the relationship, which is where the real power of a `Schema` class lies. The most important bit is a post belongs to a user.

This is the `Result` class for post.

```perl
package MyApp::Schema::Result::Post;

use strict;
use warnings;
use base 'DBIx::Class::Core';

__PACKAGE__->table('posts');

__PACKAGE__->add_columns(
    id         => { data_type => 'integer', is_auto_increment => 1 },
    user_id    => { data_type => 'integer'                         },
    title      => { data_type => 'varchar', size          => 255   },
    body       => { data_type => 'text',    is_nullable   => 1     },
    is_deleted => { data_type => 'integer', default_value => 0     },
);

__PACKAGE__->set_primary_key('id');

__PACKAGE__->belongs_to(
    'author',
    'MyApp::Schema::Result::User',
    'user_id'
);

1;
```

To complement the above `Result` class, we need to add relationship where a user can have many posts.

We also add unique constraint `user_name_unique` to stop duplicate user name.

And this looks like this.

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

__PACKAGE__->add_unique_constraint(
    user_name_unique => [ 'name' ],
);

__PACKAGE__->has_many(
    'posts',
    'MyApp::Schema::Result::Post',
    'user_id'
);

1;
```

Now that that we have setup the relationship needed to demo the features, we will now configure the `Schema` class.

First we assign the package attribute `exception_action`.

It sits there like a `"trap"` waiting to catch any error that occurs anywhere in your `ResultSet` or `Result` classes.

For example, if I try to create a post and assign to unknown user, we generate exception, `FOREIGN KEY constraint failed`.

The database engine returns an error code to `Perl`.

`DBIx::Class` catches the error and checks: `Does this user have an exception_class defined?`

If yes then it runs your sub otherwise throws the standard messy error.

```perl
__PACKAGE__->exception_action(sub {
    my ($error) = @_;

    die "MyBlog Database Error: $error";
});
```

Let's move to the second feature, overriding `connection()` in the `Schema` class.

For example, when we call `MyApp::Schema->connect()`, it eventually calls the internal `connection()` of base class `DBIx::Class::Schema`.

With this, we trap that call to `connection()`.

In `DBIx::Class`, `on_connect_do` is an attribute of the `Storage` engine that allows you to execute a list of `SQL` statements immediately after the database connection is established.

When you connect to a database, the server starts a new `"session"` with default settings. Often, those defaults aren't what you need for your application to run correctly. Instead of manually running setup queries every time you call `connect()`, you tell `DBIx::Class` to handle it for you automatically.

`SQLite` disables foreign key checks by default. To ensure your `Post` always has a valid `User`, you must turn this on every time you connect.

```perl
sub connection {
    my $self = shift;

    my $schema = $self->next::method(@_);

    $schema->storage->on_connect_do([
        'PRAGMA foreign_keys = ON',
    ]);

    return $schema;
}
```

We have everything we need to test the features.

**Source:** `test-features.pl`

```perl
#!/usr/bin/env perl

use strict;
use warnings;

use lib 'lib/';
use Test::More;
use MyApp::Schema;

my $schema = MyApp::Schema->connect('dbi:SQLite:dbname=:memory:');

$schema->deploy;

# Feature 1: Testing connection() & Foreign Key Enforcement

my $fk_error;
eval {
    $schema->resultset('Post')->create({
        user_id => 99,
        title   => 'Orphan Post',
        body    => 'This post has no valid author.'
    });
};
$fk_error = $@;

ok($fk_error, "Database prevented insertion of an orphan post");
like(
    $fk_error,
    qr/FOREIGN KEY constraint failed/,
    "SQLite PRAGMA is successfully enforcing data integrity");

# Feature 2: Testing exception_action()

$schema->resultset('User')->create({
    name  => 'UniqueUser',
});

# Now, try to create another user with the same name.

my $custom_error;
eval {
    $schema->resultset('User')->create({
        name  => 'UniqueUser'
    });
};
$custom_error = $@;

like(
    $custom_error,
    qr/MyBlog Database Error:/,
    "The exception_action hook correctly caught and reformatted the error");

done_testing;
```

Time to see in action:

```bash
$ prove -lvr test-features.pl
test-features.pl ..
ok 1 - Database prevented insertion of an orphan post
ok 2 - SQLite PRAGMA is successfully enforcing data integrity
ok 3 - The exception_action hook correctly caught and reformatted the error
1..3
ok
All tests successful.
Files=1, Tests=3,  0 wallclock secs ( 0.01 usr  0.01 sys +  0.10 cusr  0.05 csys =  0.17 CPU)
Result: PASS
```

There are still more to `Schema` class, so watch this space. Hopefully there will be another post in the series.

I am happy with what I achieved on a `Sunday` afternoon sitting alone in the corner of my bedroom home office.

***

<br>

`Happy Hacking !!!`
