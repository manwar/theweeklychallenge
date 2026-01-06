---
title: "DBIx::Class::Async - UPDATE"
date: 2026-01-06T00:00:00+00:00
description: "Update to DBIx::Class::Async module."
type: post
image: images/blog/dbix-class-async-update.jpg
author: Mohammad Sajid Anwar
tags: ["perl"]
---

#### **DISCLAIMER:** Image is generated using `ChatGPT`.
***
<br>

Few days ago, I shared a blog post about [**Introduction to DBIx::Class::Async**](/blog/dbix-class-async). It was well received and got many encouraging comments about `DBIx::Class::Async`.

<br>

#### **Dave Cross asked ...**
> Do you have plans to move the async stuff into the schema or resultset classes, so you can make it more of a drop-in replacement for standard DBIC?

#### **Daniel Bohmer asked ...**
> Do you think you could support cursors in a future release?

Apart from that, there was some very important features missing in the first release:

- **search with prefetch**
- **create related**

As of today, we have [**DBIx::Class::Async v0.12**](https://metacpan.org/dist/DBIx-Class-Async) released to `CPAN` that addressed the above issues.

The latest release now have these packages:

- [**DBIx::Class::Async::Schema**](https://metacpan.org/pod/DBIx::Class::Async::Schema)
- [**DBIx::Class::Async::ResultSet**](https://metacpan.org/pod/DBIx::Class::Async::ResultSet)
- [**DBIx::Class::Async::Row**](https://metacpan.org/pod/DBIx::Class::Async::Row)
- [**DBIx::Class::Async::Storage**](https://metacpan.org/pod/DBIx::Class::Async::Storage)
- [**DBIx::Class::Async::Cursor**](https://metacpan.org/pod/DBIx::Class::Async::Cursor)

In this post, I will try to take you through the changes.

For the demo purpose, I have created the following schema exactly how you would for `DBIx::Class`:

    lib/
    └── MyApp
        ├── Schema
        │   └── Result
        │       ├── Post.pm
        │       └── User.pm
        └── Schema.pm

<br>

#### **MyApp::Schema**
```perl
package MyApp::Schema;

use strict;
use warnings;
use base 'DBIx::Class::Schema';

__PACKAGE__->load_namespaces;

1;
```

***

<br>

#### **MyApp::Schema::Result::User**
```perl
package MyApp::Schema::Result::User;

use strict;
use warnings;
use base 'DBIx::Class::Core';

__PACKAGE__->table('users');
__PACKAGE__->add_columns(
    id => {
        data_type         => 'integer',
        is_auto_increment => 1,
        is_nullable       => 0,
    },
    username => {
        data_type   => 'varchar',
        size        => 50,
        is_nullable => 0,
    },
    email => {
        data_type   => 'varchar',
        size        => 100,
        is_nullable => 0,
    },
    active => {
        data_type     => 'integer',
        default_value => 1,
        is_nullable   => 0,
    },
);

__PACKAGE__->set_primary_key('id');
__PACKAGE__->add_unique_constraint(['email']);
__PACKAGE__->add_unique_constraint(['username']);

__PACKAGE__->has_many(
    'posts',
    'MyApp::Schema::Result::Post',
    'user_id'
);

1;
```

***

<br>

#### **MyApp::Schema::Result::Post**
```perl
package MyApp::Schema::Result::Post;

use strict;
use warnings;
use base 'DBIx::Class::Core';

__PACKAGE__->table('posts');
__PACKAGE__->add_columns(
    id => {
        data_type         => 'integer',
        is_auto_increment => 1,
        is_nullable       => 0,
    },
    user_id => {
        data_type      => 'integer',
        is_nullable    => 0,
        is_foreign_key => 1,
    },
    title => {
        data_type   => 'varchar',
        size        => 255,
        is_nullable => 0,
    },
);

__PACKAGE__->set_primary_key('id');
__PACKAGE__->add_unique_constraint(['user_id', 'title']);

__PACKAGE__->belongs_to(
    'user',
    'MyApp::Schema::Result::User',
    'user_id'
);

1;
```

<br>

### **Using DBIx::Class::Async**
***

First I will show you some asynchronous action from `DBIx::Class::Async`.

Let's create `async db` handler first as below:

```perl
use IO::Async::Loop;
use DBIx::Class::Async;

my $loop = IO::Async::Loop->new;
my $db   = DBIx::Class::Async->new(
    schema_class => 'MyApp::Schema',
    connect_info => ['dbi:SQLite:dbname=myapp.db', undef, undef, {}],
    workers      => 2,
    loop         => $loop,
);
```

<br>

Now I will create a `user` and a `post` for the newly created user.

<br>

```perl
my $user = await $db->create(
   'User',
   { username => 'New User', email => 'new@example.com' }
);
my $user_id = $user->{id};

my $post = await $db->create(
   'Post',
   { user_id => $user_id,
     title   => 'My First Post',
   });
my $post_id = $post->{id};

say "User Id: $user_id";
say "Post Id: $post_id";
```

<br>

**NOTE:** The `DBIx::Class::Async` returns a hash for the newly create object.

I am using keyword `await` for each operation and for this you will have to `use Future::AsyncAwait;`.

You can checkout other functions as documented in the [**pod document**](https://metacpan.org/pod/DBIx::Class::Async). I want to focus more on the updates to `DBIx::Class::Async` in this post.

<br>

### **Using DBIx::Class::Async::Schema**
***

Here I will create `async schema` as below:

```perl
use IO::Async::Loop;
use DBIx::Class::Async::Schema;

my $loop   = IO::Async::Loop->new;
my $schema = DBIx::Class::Async::Schema->connect(
    "dbi:SQLite:dbname=myapp.db", undef, undef, {},
    {
        workers      => 2,
        schema_class => 'MyApp::Schema',
        loop         => $loop
    }
);
```

<br>

I will now create `user` and `post` like below:

<br>

```perl
my $user = await $schema->resultset('User')
    ->create({
        username => 'Test User',
        email    => 'test@example.com',
        active   => 1,
});

my $post = await $schema->resultset('Post')
    ->create({
        user_id  => $user->id,
        title    => 'My First Post',
});

say $user->id;
say $post->id;
```

<br>

Here `$user` is an object of type `DBIx::Class::Async::Row::User` and `$post` is an object of type `DBIx::Class::Async::Row::Post`.

<br>

#### **This is a big improvement (imho).**

<br>

Let's do the same using `create_related` function.

```perl
my $user = await $schema->resultset('User')
    ->create({
        username => 'john_doe',
        email    => 'john@example.com',
        active   => 1,
});

my $post = await $user->create_related('posts',
    {
        title    => 'My First Post',
    });

say $user->id;
say $post->id;
```

<br>

I will now show you `prefetch` function.

<br>

```perl
my $user = await $schema->resultset('User')
    ->prefetch('posts')
    ->find({ active => 1 });

my $posts = $user->posts->all->get;
foreach my $post (@$posts) {
    say $post->title;
}
```

<br>

and one more variant of `prefetch` as below:

<br>

```perl
my $posts = $schema->resultset('Post')
    ->search(
    {},
    { prefetch => 'user' }
)->all->get;

foreach my $post (@$posts) {
    say $post->title;
}
```

<br>

Let me show you `next` function.

<br>

```perl
my $user = $schema->resultset('User')
    ->search({ active => 1 });

while (my $row = $user->next) {
    say "User Id:", $row->get_column('id');
}
```

<br>

Finally `cursor` in action as below:

<br>

```perl
my $cursor = $schema->resultset('User')->cursor;

while (my $user = await $cursor->next) {
    say "Processing user: " . $user->id;

    #
    # Do some async work with the user
    #
}
```

<br>

#### **This is still experimental but I would love to hear your views. I am open to suggestions.**

***

<br>

`Happy Hacking !!!`
