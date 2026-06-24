---
title: "DBIx::Class vs DBIO"
date: 2026-06-24T00:00:00+00:00
description: "Comparative analysis of DBIx::Class and DBIO."
type: post
image: images/blog/dbic-vs-dbio.jpg
author: Mohammad Sajid Anwar
tags: ["DBIC", "DBIO"]
---

#### **DISCLAIMER:** Image is generated using `ChatGPT`.
***
<br>

While I have been writing the manuscript for my upcoming book on `DBIx::Class`, I must admit that I haven’t dedicated all of my focus to it. Everywhere I look I see something new and interesting and have been easily distracted. For example, just the other day I noticed that there is a new player in the `Perl ORM` space named `DBIO`.

If you are not familiar with what I am talking about, I suggest that you take a moment to investigate [**DBIO**](https://metacpan.org/pod/DBIO) more closely.

At first blush, it appears that installing `DBIO` is not easy, as I had to force my way through the installation process. I do not have enough time or effort at this moment to research why I was unable to complete the installation successfully. However, given that I am currently working on a book about `DBIx::Class` and the fact that this project is similar to `DBIx::Class`, I thought it was only fitting that I report the results of my installation attempt to the `DBIx::Class` community.

In addition, I plan to cover my project, [**DBIx::Class::Async**](https://metacpan.org/pod/DBIx::Class::Async), in a chapter within the manuscript of my book. Although it is exciting to add additional content to consider for the manuscript; it is also causing me to push the release date of the book further away.

In this post, I will write some of the standard examples that are provided in `DBIC` using `DBIO` to see how closely they resemble each other.

Let's assume we have this table structure:

```sql
CREATE TABLE author (
    id   INTEGER PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE book (
    id        INTEGER PRIMARY KEY,
    author_id INTEGER REFERENCES author(id),
    title     VARCHAR(255) NOT NULL
);
```

I have the following folder structure:

```bash
├── lib
│   └── MyApp
│       ├── DBIO
│       │   └── Result
│       │       ├── Author.pm
│       │       └── Book.pm
│       ├── DBIO.pm
│       ├── Schema
│       │   └── Result
│       │       ├── Author.pm
│       │       └── Book.pm
│       └── Schema.pm
└── t
    ├── dbic.t
    └── dbio.t
```

### Using DBIx::Class
***

<br>

**File:** `lib/MyApp/Schema.pm`

```perl
package MyApp::Schema;

use strict;
use warnings;
use base 'DBIx::Class::Schema';

__PACKAGE__->load_namespaces;

1;
```

**File:** `lib/MyApp/Schema/Result/Author.pm`

```perl
package MyApp::Schema::Result::Author;

use strict;
use warnings;
use base 'DBIx::Class::Core';

__PACKAGE__->table('author');
__PACKAGE__->add_columns(
    id   => { data_type => 'integer', is_auto_increment => 1 },
    name => { data_type => 'varchar', size => 255 },
);
__PACKAGE__->set_primary_key('id');
__PACKAGE__->has_many(books => 'MyApp::Schema::Result::Book', 'author_id');

1;
```

**File:** `lib/MyApp/Schema/Result/Book.pm`

```perl
package MyApp::Schema::Result::Book;

use strict;
use warnings;
use base 'DBIx::Class::Core';

__PACKAGE__->table('book');
__PACKAGE__->add_columns(
    id        => { data_type => 'integer', is_auto_increment => 1 },
    author_id => { data_type => 'integer' },
    title     => { data_type => 'varchar', size => 255 },
);
__PACKAGE__->set_primary_key('id');
__PACKAGE__->belongs_to(author => 'MyApp::Schema::Result::Author', 'author_id');

1;
```

### Using DBIO
***

<br>

Let's re-create the same using `DBIO` now.

**File:** `lib/MyApp/DBIO.pm`

```perl
package MyApp::DBIO;

use strict;
use warnings;
use base 'DBIO::Schema';

__PACKAGE__->load_namespaces;

1;
```

**File:** `lib/MyApp/DBIO/Author.pm`

```perl
package MyApp::DBIO::Result::Author;

use strict;
use warnings;
use base 'DBIO::Core';

__PACKAGE__->table('author');
__PACKAGE__->add_columns(
    id   => { data_type => 'integer', auto_nextval => 1 },
    name => { data_type => 'varchar', size => 255 },
);
__PACKAGE__->set_primary_key('id');
__PACKAGE__->has_many(books => 'MyApp::DBIO::Result::Book', 'author_id');

1;
```

**File:** `lib/MyApp/DBIO/Result/Book.pm`

```perl
package MyApp::DBIO::Result::Book;

use strict;
use warnings;
use base 'DBIO::Core';

__PACKAGE__->table('book');
__PACKAGE__->add_columns(
    id        => { data_type => 'integer', auto_nextval => 1 },
    author_id => { data_type => 'integer' },
    title     => { data_type => 'varchar', size => 255 },
);
__PACKAGE__->set_primary_key('id');
__PACKAGE__->belongs_to(author => 'MyApp::DBIO::Result::Author', 'author_id');

1;
```

Now that have laid down the foundation, time to create unit test.

**File:** `t/dbic.t`

```perl
#!/usr/bin/perl

use strict;
use warnings;
use Test::More;

use_ok('MyApp::Schema');

my $schema = MyApp::Schema->connect('dbi:SQLite:dbname=:memory:');
$schema->deploy();

pass("Deployed DBIx::Class schema successfully");

my $author = $schema->resultset('Author')->create({
    id => 1, name => 'J.R.R. Tolkien' });

my $book = $author->create_related('books', {
    id => 101, title => 'The Hobbit' });

isa_ok($book,
       'MyApp::Schema::Result::Book',
       'Created book instance');

my $fetched_book = $schema->resultset('Book')->find(101);
is($fetched_book->author->name,
   'J.R.R. Tolkien',
   'belongs_to relationship correctly resolved the author name');

done_testing;
```

**File:** `t/dbio.t`

```perl
!/usr/bin/perl

use strict;
use warnings;
use Test::More;

use_ok('MyApp::DBIO');

my $dbio = MyApp::DBIO->connect('dbi:SQLite:dbname=:memory:');
$dbio->deploy();
pass("Deployed DBIO schema successfully");

my $author = $dbio->resultset('Author')->create({
    id => 1, name => 'George R.R. Martin' });

my $book = $author->create_related('books', {
    id => 201, title => 'A Game of Thrones' });

isa_ok($book,
       'MyApp::DBIO::Result::Book',
       'Created DBIO book instance');

my $fetched_book = $dbio->resultset('Book')->find(201);
is($fetched_book->author->name,
   'George R.R. Martin',
   'DBIO relationship correctly resolved');

done_testing;
```

Nothing ground breaking, just scratched the surface.

Time for final testing:

```bash
$ yath
PERL_HASH_SEED not set, setting to '20260624' for more reproducible results.

** Defaulting to the 'test' command **

( PASSED )  job  1    t/dbic.t
( PASSED )  job  2    t/dbio.t

                                Yath Result Summary
-----------------------------------------------------------------------------------
     File Count: 2
Assertion Count: 8
      Wall Time: 1.28 seconds
       CPU Time: 1.02 seconds (usr: 0.13s | sys: 0.03s | cusr: 0.67s | csys: 0.19s)
      CPU Usage: 79%
    -->  Result: PASSED  <--
```

***
<br>

`Happy Hacking !!!`
