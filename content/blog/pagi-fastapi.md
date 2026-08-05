---
title: "PAGI::FastAPI + DBIx::Class::Async"
date: 2026-08-03T00:00:00+00:00
description: "Introduction to PAGI::FastAPI."
type: post
image: images/blog/pagi-fastapi.jpg
author: Mohammad Sajid Anwar
tags: ["Perl", "PAGI", "FastAPI"]
---

#### **DISCLAIMER:** Image is generated using `ChatGPT`.
***
<br>

Yesterday, I released [**PAGI::FastAPI**](https://metacpan.org/dist/PAGI-FastAPI),
the first draft of new asynchronous, type-safe micro framework with dependency
injection and OpenAPI UI.

As soon as I released `v0.0.1`, I noticed a bug in how routes are processed.
So I prepared a quick patch. While I was working on the bug fix, I thought of
adding an example that integrates with [**DBIx::Class::Async**](https://metacpan.org/dist/DBIx-Class-Async).

Just to give some context, `PAGI::FastAPI` is inspired by Python's `FastAPI`.
I used [**PAGI**](https://metacpan.org/pod/PAGI) as the foundation of this implementation.

From the official page:

> `Perl Asynchronous Gateway Interface (PAGI)` is a specification for asynchronous `Perl` web applications, designed as a spiritual successor to `PSGI`. It defines a standard interface between async-capable `Perl` web servers, frameworks, and applications, supporting `HTTP/1.1`, `WebSocket`, and `Server-Sent Events (SSE)`.

So far, we've all known `PSGI`:

> `Perl Web Server Gateway Interface (PSGI)`, a standard specification that decouples web servers from `Perl` web applications and frameworks, inspired by Python's `WSGI` and Ruby's `Rack`.

I am big fan of [**Dancer2**](https://metacpan.org/dist/Dancer2), which is a fully `PSGI-compliant web framework`.

### Key Features

**1. Asynchronous Foundation**

> Built around [**Future::AsyncAwait**](https://metacpan.org/pod/Future::AsyncAwait) and the [**PAGI**](https://metacpan.org/pod/PAGI) specification, enabling non-blocking, asynchronous handling of `web requests`, `WebSockets`, and `streaming responses`.

**2. Automatic Data Validation**

> Integrates with type constraint systems (such as [**Types::Standard**](https://metacpan.org/pod/Types::Standard) to automatically validate `query parameters`, `path variables`, and `JSON` request bodies before hitting the route handler.

**3. Dependency Injection**

> Allows modular, re-usable middleware dependencies (like database connections or authentication mechanisms) to be injected directly into endpoint signatures.

**4. Auto-Generated API Documentation**

> Generates `OpenAPI` schemas natively (`/openapi.json`) and mounts interactive `Swagger UI` documentation (`/docs`) out of the box.

**5. Built-in Middleware Support**

> Provides declarative configuration for common web needs like `Cross-Origin Resource Sharing (CORS)`.

**6. Server Compatibility & Deployment**

> Compiles to standard `PAGI` application code references (`$app->to_app`), designed to run natively under asynchronous `PAGI` servers like `pagi-server`.

The missing bit in the `PAGI::FastAPI` is the security scheme. I left it out purposely to keep it lightweight.

Today, I released dedidated companion package for the same: [**PAGI::FastAPI::Security**](https://metacpan.org/dist/PAGI-FastAPI-Security).

In this post, I will give you a quick demo:

Folder structure:

    - app.pl
    - lib/MyApp/Schema.pm
    - lib/MyApp/Schema/Result/User.pm

For demo, we have setup the schema:

**File:** `lib/MyApp/Schema.pm`

```perl
package MyApp::Schema;

use strict;
use warnings;
use base 'DBIx::Class::Schema';

__PACKAGE__->load_namespaces;

1;
```

**File:** `lib/MyApp/Schema/Result/User.pm`

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
    name => {
        data_type   => 'varchar',
        size        => 100,
        is_nullable => 0,
    },
    email => {
        data_type   => 'varchar',
        size        => 255,
        is_nullable => 1,
    },
    active => {
        data_type     => 'integer',
        is_nullable   => 0,
        default_value => 1,
    },
);

__PACKAGE__->set_primary_key('id');

__PACKAGE__->add_unique_constraint(user_email => [qw/email/]);

1;
```

### Demo Application

**File:** `app.pl`

**Create Skeleton**

```perl
use v5.36;
use FindBin;
use lib "$FindBin::Bin/lib";

use File::Temp;
use IO::Async::Loop;
use DBIx::Class::Async::Schema;

use Future::AsyncAwait;
use Types::Standard qw(Str);
use Crypt::JWT qw(decode_jwt);

use PAGI::FastAPI;
use PAGI::FastAPI::Depends qw(Depends);
use PAGI::FastAPI::Security::HTTPBearer;

# In a real app, load this from config/environment, not a literal.
use constant JWT_SECRET => 'demo-shared-secret';

my $loop   = IO::Async::Loop->new;
my $bearer = PAGI::FastAPI::Security::HTTPBearer->new;

my $app = PAGI::FastAPI->new(
    title   => 'Users API',
    version => '1.0.0',
);
```

**Enable CORS**

```perl
$app->add_cors(allow_origins => ['*']);
```

**Asynchronous Dependencies**

```perl
my $schema;  # set in on_startup, torn down in on_shutdown
my ($fh, $db_file) = File::Temp::tempfile(SUFFIX => '.db', UNLINK => 1);

$app->on_startup(async sub {
    $schema = DBIx::Class::Async::Schema->connect(
        "dbi:SQLite:dbname=$db_file", undef, undef, {},
        {
            workers      => 1,
            schema_class => 'MyApp::Schema',
            loop         => $loop,
            cache_ttl    => 0,   # opt in per-query where staleness is fine
        }
    );
    await $schema->deploy;
});

$app->on_shutdown(async sub {
    DBIx::Class::Async->disconnect($schema) if $schema;
});
```

**Dependencies**

```perl
# 1. DB Schema Injector
my $get_schema = Depends(async sub ($c) { return $schema }, key => 'schema');

# 2. JWT Verification Dependency
my $auth_deps = [
    $bearer->depends(key => 'token'),
    Depends(async sub ($c) {
        my $claims = eval {
            decode_jwt(token => $c->stash->{token}, key => JWT_SECRET);
        };
        unless ($claims) {
            $c->status(401);
            $c->set_header('WWW-Authenticate' => 'Bearer');
            return { detail => 'Invalid or expired token' };
        }
        return $claims;
    }, key => 'claims'),
];
```

**Protected `POST` Route**

```perl
$app->post('/users',
    body         => { name => Str, email => Str },
    dependencies => [ @$auth_deps, $get_schema ],
    handler      => async sub ($c) {
        my $user = await $c->stash->{schema}
                           ->resultset('User')
                           ->create({ name  => $c->body('name'), email => $c->body('email') });
        $c->status(201);
        return {
            id    => $user->id,
            name  => $user->name,
            email => $user->email
        };
    }
);
```

**Protected `GET` Route**

```perl
$app->get('/users/{id}',
    dependencies => [ @$auth_deps, $get_schema ],
    handler      => async sub ($c) {
        my $user = await $c->stash->{schema}
                           ->resultset('User')
                           ->find($c->path_param('id'));
        unless ($user) {
            $c->status(404);
            return { detail => 'User not found' };
        }
        return {
            id    => $user->id,
            name  => $user->name,
            email => $user->email
        };
    }
);
```

**Create app**

```perl
warn "PAGI::FastAPI app initialised.\n";
warn "OpenAPI Spec available at /openapi.json\n";
warn "Swagger UI available at /docs\n";

$app->to_app;
```

### Start Application

```bash
$ pagi-server app.pl
Future::IO configured for IO::Async
PAGI::FastAPI app initialised.
OpenAPI Spec available at /openapi.json
Swagger UI available at /docs
PAGI development mode - Lint middleware enabled
access_log is a terminal; this may impact performance. Consider redirecting to a file or setting access_log => undef for benchmarks.
PAGI Server listening on http://127.0.0.1:5000/ (loop: Poll, max_conn: 1000, http2: not installed, tls: not installed, future_xs: available)
```

### Test the Application

First we need to generate a token in another terminal as below:

```bash
$ TOKEN=$(perl -MCrypt::JWT=encode_jwt -E 'say encode_jwt(payload=>{sub=>"alice",role=>"admin"}, key=>"demo-shared-secret", alg=>"HS256")')
```

Let's try `POST` method first using the generated token:

```bash
$ curl -X POST http://127.0.0.1:5000/users \
       -H "Authorization: Bearer $TOKEN" \
       -d '{"name":"Grace Hopper","email":"grace@example.com"}'
{"email":"grace@example.com","id":"1","name":"Grace Hopper"}
```

Followed by `GET` method:

```bash
$ curl -H "Authorization: Bearer $TOKEN" http://127.0.0.1:5000/users/1
{"name":"Grace Hopper","id":1,"email":"grace@example.com"}
```

```bash
$ curl -H "Authorization: Bearer $TOKEN" http://127.0.0.1:5000/users/999
{"detail":"User not found"}
```

```bash
$ curl -H "Authorization: Bearer FAKETOKEN" http://127.0.0.1:5000/users/1
{"detail":"Invalid or expired token"}
```

Finally `OpenAPI` spec as below:

```bash
$ curl -H "Authorization: Bearer $TOKEN" http://127.0.0.1:5000/openapi.json | json_pp
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   628    0   628    0     0   171k      0 --:--:-- --:--:-- --:--:--  204k
{
   "info" : {
      "title" : "Users API",
      "version" : "0.0.0"
   },
   "openapi" : "3.1.0",
   "paths" : {
      "/users" : {
         "post" : {
            "parameters" : [],
            "requestBody" : {
               "content" : {
                  "application/json" : {
                     "schema" : {
                        "properties" : {
                           "email" : {
                              "type" : "string"
                           },
                           "name" : {
                              "type" : "string"
                           }
                        },
                        "type" : "object"
                     }
                  }
               },
               "required" : true
            },
            "responses" : {
               "200" : {
                  "description" : "Successful Response"
               },
               "422" : {
                  "description" : "Validation Error"
               }
            },
            "summary" : "POST /users"
         }
      },
      "/users/{id}" : {
         "get" : {
            "parameters" : [
               {
                  "in" : "path",
                  "name" : "id",
                  "required" : true,
                  "schema" : {
                     "type" : "string"
                  }
               }
            ],
            "responses" : {
               "200" : {
                  "description" : "Successful Response"
               },
               "422" : {
                  "description" : "Validation Error"
               }
            },
            "summary" : "GET /users/{id}"
         }
      }
   }
}
```


***
<br>

`Happy Hacking !!!`
