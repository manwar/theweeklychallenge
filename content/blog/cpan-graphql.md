---
title: "CPAN and GraphQL"
date: 2026-06-07T00:00:00+00:00
description: "Using DBIx::Class::Schema::GraphQL with GraphQL."
type: post
image: images/blog/cpan-graphql.jpg
author: Mohammad Sajid Anwar
tags: ["perl", "DBIC", "GraphQL"]
---

#### **DISCLAIMER:** Image is generated using `ChatGPT`.
***
<br>

On the subject of `GraphQL`, I have written two blog posts so far:

1) [**Mojo meets GraphQL**](/blog/mojo-meets-graphql)
2) [**DBIx::Class and GraphQL**](/blog/dbic-graphql)

In the first post, I used a plain `hash` as mock data store. In the second, I upgrade to a real `database` using a `DBIx::Class` layer.

It was a big improvement, but there were still a lot of moving parts scattered all over the place.

While working on that second post, I decided to clean things up and hide the complexity inside a separate module.

I was also nudged by fellow `Perl` enthusiasts who noted:

> It will be nice if the some way could be found automate derive the GraphQL Types from the Schema definations

Thanks to that push, I have finally released a new `CPAN` module: [**DBIx::Class::Schema::GraphQL**](https://metacpan.org/dist/DBIx-Class-Schema-GraphQL)

Using this module, we can rewrite the example from the previous post as shown below:

Note, we are keeping the exact same structure as before.

```bash
lib/
└── Library
    ├── Schema
    │   └── Result
    │       ├── Author.pm
    │       └── Book.pm
    └── Schema.pm
```

**Schema Class:** `lib/Library/Schema.pm`

```perl
package Library::Schema;

use strict;
use warnings;
use base 'DBIx::Class::Schema';

__PACKAGE__->load_namespaces;

1;
```

**Result Class:** `lib/Library/Schema/Result/Author.pm`

```perl
package Library::Schema::Result::Author;

use base qw(DBIx::Class::Core);

__PACKAGE__->table('authors');

__PACKAGE__->add_columns(
    id   => { data_type => 'integer', is_auto_increment => 1 },
    name => { data_type => 'varchar', size => 255 },
);

__PACKAGE__->set_primary_key('id');

__PACKAGE__->has_many(books => 'Library::Schema::Result::Book', 'author_id');

1;
```

**Result Class:** `lib/Library/Schema/Result/Book.pm`

```perl
package Library::Schema::Result::Book;

use base qw(DBIx::Class::Core);

__PACKAGE__->table('books');

__PACKAGE__->add_columns(
    id        => { data_type => 'integer', is_auto_increment => 1 },
    title     => { data_type => 'varchar', size => 255 },
    author_id => { data_type => 'integer' },
);

__PACKAGE__->set_primary_key('id');

__PACKAGE__->belongs_to(author => 'Library::Schema::Result::Author', 'author_id');

1;
```

We just need to install the module now:

```bash
$ cpanm -vS DBIx::Class::Schema::GraphQL
```

### Setup

Let's setup the application first:

**File:** `mojo-app-v3.pl`

```perl
#!/usr/bin/env perl

use Mojolicious::Lite -signatures;

use JSON::PP;
use GraphQL::Execution qw(execute);

use lib 'lib/';
use Library::Schema;
use DBIx::Class::Schema::GraphQL;

my $db = Library::Schema->connect('dbi:SQLite:dbname=:memory:', '', '');
$db->deploy;

$db->resultset('Author')->create({
    name  => "J.R.R. Tolkien",
    books => [{ title => "The Hobbit" }]
});

$db->resultset('Author')->create({
    name  => "Isaac Asimov",
    books => [{ title => "Foundation" }]
});

$db->resultset('Author')->create({
    name  => "Damian Conway",
    books => [{ title => "Perl Best Practices" }]
});
```

Nothing much changed, just less imports.

### Build the GraphQL schema

```perl
my $gql    = DBIx::Class::Schema::GraphQL->to_graphql($db);
my $schema = $gql->{schema};
my $ctx    = $gql->{context};
```

### Define Web Route

```perl
post '/graphql' => sub ($c) {
    my $payload   = $c->req->json;
    my $query     = $payload->{query}     // '';
    my $variables = $payload->{variables} // {};
    my $operation = $payload->{operationName};

    unless ($query) {
        return $c->render(
            status => 400,
            json   => { errors => [{ message => 'No query provided' }] },
        );
    }

    my $result = execute(
        $schema,
        $query,
        undef,       # root value
        $ctx,        # contexti, passed to every resolver
        $variables,
        $operation,
    );

    # HTTP 200 even for GraphQL errors (per spec); only 500 on a completely
    # unexpected exception where $result itself is undef.
    my $status = $result ? 200 : 500;
    $result //= { errors => [{ message => 'Internal server error' }] };

    $c->res->headers->content_type('application/json');
    $c->render(status => $status, text => JSON::PP->new->pretty->encode($result));
};

get '/graphql' => sub ($c) {
    $c->render(inline => <<'EOF');
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>GraphiQL Playground</title>
  <style>
    body { height: 100vh; margin: 0; overflow: hidden; }
    #graphiql { height: 100%; }
  </style>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/graphiql/3.0.7/graphiql.min.css" />
  <script src="https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/graphiql/3.0.7/graphiql.min.js"></script>
</head>
<body>
  <div id="graphiql">Loading...</div>
  <script>
    window.addEventListener('load', function() {
      const fetcher = GraphiQL.createFetcher({ url: '/graphql' });
      const root = ReactDOM.createRoot(document.getElementById('graphiql'));
      root.render(
        React.createElement(GraphiQL, {
          fetcher: fetcher,
          defaultEditorToolsVisibility: true
        })
      );
    });
  </script>
</body>
</html>
EOF
};
```

The application looks so light and easy to follow.

### Start App

```perl
app->start;
```

Let's start the application as below:

```bash
$ perl mojo-app-v3.pl daemon
[2026-06-07 15:13:22.85508] [702292] [info] Listening at "http://*:3000"
Web application available at http://127.0.0.1:3000
```

For testing, you can use `GraphiQL`, in-browser IDE by visiting `http://127.0.0.1:3000/graphql`.

Let's show the result using command prompt:

**Find a Book**

```bash
$ curl -X POST http://127.0.0.1:3000/graphql \
       -H "Content-Type: application/json" \
       -d '{"query": "{ book(id: 2) { title author { id name } } }"}'
{
   "data" : {
      "book" : {
         "title" : "Foundation",
         "author" : {
            "id" : 2,
            "name" : "Isaac Asimov"
         }
      }
   }
}
```

For `GraphiQL`, you can use this:

> { book(id: 2) { title author { id name } } }


**List all Books**

```bash
$ curl -X POST http://127.0.0.1:3000/graphql \
       -H "Content-Type: application/json" \
       -d '{"query": "{ allBooks { total nodes { id title author { id name } } } }"}'
{
   "data" : {
      "allBooks" : {
         "total" : 3,
         "nodes" : [
            {
               "id" : 1,
               "author" : {
                  "id" : 1,
                  "name" : "J.R.R. Tolkien"
               },
               "title" : "The Hobbit"
            },
            {
               "author" : {
                  "id" : 2,
                  "name" : "Isaac Asimov"
               },
               "id" : 2,
               "title" : "Foundation"
            },
            {
               "title" : "Perl Best Practices",
               "id" : 3,
               "author" : {
                  "name" : "Damian Conway",
                  "id" : 3
               }
            }
         ]
      }
   }
}
```

For `GraphiQL`, you can use this:

> { allBooks { total nodes { id title author { id name } } } }

**Find an Author**

```bash
$ curl -X POST http://127.0.0.1:3000/graphql \
       -H "Content-Type: application/json" \
       -d '{"query": "{ author(id: 1) { id name books { id title } } }"}'
{
   "data" : {
      "author" : {
         "books" : [
            {
               "title" : "The Hobbit",
               "id" : 1
            }
         ],
         "name" : "J.R.R. Tolkien",
         "id" : 1
      }
   }
}
```

For `GraphiQL`, you can use this:

> { author(id: 1) { id name books { id title } } }

**List all Authors**

```bash
$ curl -X POST http://127.0.0.1:3000/graphql \
     -H "Content-Type: application/json" \
     -d '{"query": "{ allAuthors { total nodes { id name books { id title } } } }"}'
{
   "data" : {
      "allAuthors" : {
         "total" : 3,
         "nodes" : [
            {
               "id" : 1,
               "name" : "J.R.R. Tolkien",
               "books" : [
                  {
                     "id" : 1,
                     "title" : "The Hobbit"
                  }
               ]
            },
            {
               "books" : [
                  {
                     "title" : "Foundation",
                     "id" : 2
                  }
               ],
               "name" : "Isaac Asimov",
               "id" : 2
            },
            {
               "id" : 3,
               "name" : "Damian Conway",
               "books" : [
                  {
                     "title" : "Perl Best Practices",
                     "id" : 3
                  }
               ]
            }
         ]
      }
   }
}
```

For `GraphiQL`, you can use this:

> { allAuthors { total nodes { id name books { id title } } } }

***

<br>

`Happy Hacking !!!`
