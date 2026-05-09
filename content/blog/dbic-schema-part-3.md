---
title: "DBIx::Class - Schema Class (Part 3)"
date: 2026-05-09T00:00:00+00:00
description: "Introduction to Schema::Config and handling MySQL settings."
type: post
image: images/blog/dbic-schema-part-3.jpg
author: Mohammad Sajid Anwar
tags: ["perl", "dbic", "mysql"]
---

#### **DISCLAIMER:** Image is generated using `ChatGPT`.
***
<br>

This is the third part of the series post about `Schema` class. I would highly recommend you checkout the earlier posts first: [**Part 1**](/blog/dbic-schema) and [**Part 2**](/blog/dbic-schema-part-2).

In the second part of the series, I discussed `on_connect_db` and showed how this can be used to configure session settings. Since I was using the `SQLite` database for demo, I couldn't show the full power.

I decided to use `MySQL` database so that I can explore further. I have the default setup for `MySQL` having `testdb` database with user `"root"` and password `"root"`.

```bash
$ mysql --version
mysql  Ver 8.0.45-0ubuntu0.24.04.1 for Linux on x86_64 ((Ubuntu))
```

We will contiue with the following `Schema` class and `Result` class from the previous post.

```perl
package MyApp::Schema;

use strict;
use warnings;

use base 'DBIx::Class::Schema';

__PACKAGE__->load_namespaces(
    default_resultset_class => 'DefaultRS',
);

__PACKAGE__->exception_action(sub {
    my ($error) = @_;

    die "MyApp Database Error: $error";
});

sub connection {
    my $self   = shift;
    my $schema = $self->next::method(@_);

    $schema->storage->on_connect_do([
        'PRAGMA foreign_keys = ON',
    ]);

    return $schema;
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

As we are using `MySQL` database for demo, we have to update the subroutine `connection()`  in the `MyApp::Schema` package.

Currently it is setting `PRAGMA foreign_keys = ON` which is `SQLite` only feature. Let's use `MySQL` database specific settings this time.

I will try to enable support for `Unicode` now.

```perl
sub connection {
    my $self   = shift;
    my $schema = $self->next::method(@_);

    $schema->storage->dbh->{mysql_enable_utf8mb4} = 1;

    return $schema;
}
```

Do you recall how we connect to schema in the application code?

```perl
my $schema = MyApp::Schema->connect($dsn, $user, $password, \%options);
```

This mean, we have `$dsn`, `$user` and `$password` in the code hardcoded or use the environment variables.

Can we avoid this completely and get the connection by profile name?

Something like below:

```perl
my $schema = MyApp::Schema->connect('production');
```

We can achieve this exactly by using [**DBIx::Class::Schema::Config**](https://metacpan.org/pod/DBIx::Class::Schema::Config).

Normally, most of the `Schema` class, has this line at the top:

```perl
use base 'DBIx::Class::Schema';
```

That means, `MyApp::Schema` inherits from base class `DBIx::Class::Schema` and that gives us access to `connect`, `resultset`, `deploy`, etc.

We will now replace the base class to `DBIx::Class::Schema::Config` in the `MyApp::Schema`.

This is big change, right?

Are we going to loose out anything if we change the base class?

If you look at the [**source code**](https://metacpan.org/dist/DBIx-Class-Schema-Config/source/lib/DBIx/Class/Schema/Config.pm), you would notice we aren't replacing technically just adding a specialised layer on top of it.

`DBIx::Class::Schema::Config` inherits from the original base class `DBIx::Class::Schema`.

So we aren't loosing anything, we are safe.

By adding the layer, we can now remove the sensitive information from the application code completely.

But how?

First we would create a config file, `dbic.yaml`, in the application root folder.

```bash
default:
    dsn: "dbi:SQLite:dbname=testdb.db"
    user: ""
    pass: ""

production:
    dsn: "dbi:mysql:database=testdb;host=localhost"
    user: "root"
    password: "root"
```

You can find more about the config file location in the [**document here**](https://metacpan.org/pod/DBIx::Class::Schema::Config#CONFIG-FILES).

We have config file created, now we just need one line change to the `MyApp::Schema` package and it looks like this now.

```perl
package MyApp::Schema;

use strict;
use warnings;

use base 'DBIx::Class::Schema::Config';

__PACKAGE__->load_namespaces(
    default_resultset_class => 'DefaultRS',
);

__PACKAGE__->exception_action(sub {
    my ($error) = @_;

    die "MyApp Database Error: $error";
});

sub connection {
    my $self   = shift;
    my $schema = $self->next::method(@_);

    $schema->storage->dbh->{mysql_enable_utf8mb4} = 1;

    return $schema;
}

1;
```

We are good to go now, time to test the change.

**Source:** `test-schemaconfig.pl`

```perl
#!/usr/bin/env perl

use strict;
use warnings;

use utf8;
use Try::Tiny;
use open qw(:std :utf8);

use lib 'lib/';
use MyApp::Schema;

my $schema = MyApp::Schema->connect('production');

my (undef, $charset) = $schema->storage
                              ->dbh
                              ->selectrow_array("SHOW VARIABLES LIKE 'character_set_connection'");
print "Connection Charset: $charset\n\n";

$schema->deploy({ add_drop_table => 1 });

print "Testing Strict Mode... ";
try {
    $schema->resultset('User')->create({
        name => "This is a very long name that should definitely exceed the column length limit " x 10
    });
    print "FAILED (Data accepted instead of throwing error)\n";
} catch {
    print "SUCCESS (Insert blocked as expected)\n";
};

print "Testing utf8mb4 support... ";
my $emoji_name = "User 🍕 Emoji";
try {
    my $m = $schema->resultset('User')->create({ name => $emoji_name });
    my $fetched = $schema->resultset('User')->find($m->id);

    if ($fetched->name eq $emoji_name) {
        print "SUCCESS (Emoji stored and retrieved: " . $fetched->name . ")\n";
    } else {
        print "FAILED (Emoji corrupted on retrieval)\n";
    }
} catch {
    my $err = shift;
    print "FAILED (Error inserting emoji: $err)\n";
};
```

Time to see in action:

```bash
$ perl test-schemaconfig.pl
Connection Charset: utf8mb4

Testing Strict Mode... SUCCESS (Insert blocked as expected)
Testing utf8mb4 support... SUCCESS (Emoji stored and retrieved: User 🍕 Emoji)
```

We now have clean application code, no more sensitive data in the source code.

***

<br>

`Happy Hacking !!!`
