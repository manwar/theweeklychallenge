---
title: "QUERY in Dancer2"
date: 2026-09-27T00:00:00+00:00
description: "Proposed implementation of QUERY method in Dancer2."
type: post
image: images/blog/query-in-dancer2.jpg
author: Mohammad Sajid Anwar
tags: ["Dancer2", "QUERY"]
---

#### **DISCLAIMER:** Image is generated using `ChatGPT`.
***
<br>

Few months ago, I posted [**this**](https://www.linkedin.com/posts/mohammadanwar_http-has-a-new-verb-query-lets-see-how-share-7475088093767925761-r9mG) in my [**LinkedIn**](https://www.linkedin.com/in/mohammadanwar/) profile.

<div class="container">
    <div class="row">
        <div class="col-12 col-sm mb-4 p-2 text-center">
            <img src="/images/blog/query-in-dancer2-pic-1.jpg" class="img-fluid">
        </div>
    </div>
</div>

You can find the technical details in the official page: [**https://www.rfc-editor.org/info/rfc10008**](https://www.rfc-editor.org/info/rfc10008)

Following this,**D Ruth Holloway**, a very good friend of mine, created an [**issue #1794**](https://github.com/PerlDancer/Dancer2/issues/1794) in the official [**GitHub repository**](https://github.com/PerlDancer/Dancer2) for **Dancer2**.

Ever since, I wanted to see the support for **QUERY** method in **Dancer2**.

Five years ago, I created a [**GitHub repository**](https://github.com/manwar/Dancer2-REST-API) that demonstrate the power of **Dancer2**. In the repository, I showed all supported **HTTP** methods with simple to use example.

Looking for something to distract my mind, I decided to jump in and look for possibilities. Idea was to see, if it is easy to add the support without making any critical changes.

Surprisingly, it didn't trouble me a lot.

This is the status after my experiments:

<div class="container">
    <div class="row">
        <div class="col-12 col-sm mb-4 p-2 text-center">
            <img src="/images/blog/query-in-dancer2-pic-2.jpg" class="img-fluid">
        </div>
    </div>
</div>

Make sure, test suite is not complaining after my experiment.

<div class="container">
    <div class="row">
        <div class="col-12 col-sm mb-4 p-2 text-center">
            <img src="/images/blog/query-in-dancer2-pic-3.jpg" class="img-fluid">
        </div>
    </div>
</div>

By now, you must be wondering what exactly has changed.

Let me share the diff one by one.

#### #1: &nbsp;&nbsp; **lib/Dancer2/Core/DSL.pm**
<div class="container">
    <div class="row">
        <div class="col-12 col-sm mb-4 p-2 text-center">
            <img src="/images/blog/query-in-dancer2-pic-4.jpg" class="img-fluid">
        </div>
    </div>
</div>

#### #2: &nbsp;&nbsp; **lib/Dancer2/Core/Request.pm**
<div class="container">
    <div class="row">
        <div class="col-12 col-sm mb-4 p-2 text-center">
            <img src="/images/blog/query-in-dancer2-pic-5.jpg" class="img-fluid">
        </div>
    </div>
</div>

#### #3: &nbsp;&nbsp; **lib/Dancer2/Core/Types.pm**
<div class="container">
    <div class="row">
        <div class="col-12 col-sm mb-4 p-2 text-center">
            <img src="/images/blog/query-in-dancer2-pic-6.jpg" class="img-fluid">
        </div>
    </div>
</div>

#### #4: &nbsp;&nbsp; **lib/Dancer2/Manual/Keywords.pod**
<div class="container">
    <div class="row">
        <div class="col-12 col-sm mb-4 p-2 text-center">
            <img src="/images/blog/query-in-dancer2-pic-7.jpg" class="img-fluid">
        </div>
    </div>
</div>

I am sure, looking at the above changes, you would say, **"Easy peasy lemon squeezy"**.

Now, I just need unit test to cover the change introduced in the codebase.

My proposed unit test: **t/route_query.t**

```perl
use strict;
use warnings;
use Test::More;
use Plack::Test;
use HTTP::Request;
```

```perl
# Package 1: Standard app (no serializer) for text & form endpoints
{
    package TestApp::Standard;
    use Dancer2;

    query '/basic' => sub {
        return 'query ok';
    };

    query '/user/:id' => sub {
        return "User ID: " . route_parameters->get('id');
    };

    query '/search' => sub {
        my $q = body_parameters->get('q') // 'none';
        return "Search term: $q";
    };

    query '/query-only' => sub {
        return 'only query allowed';
    };
}
```

```perl
# Package 2: JSON-enabled app specifically for testing serializer behavior
{
    package TestApp::JSON;
    use Dancer2;

    set serializer => 'JSON';

    query '/json-search' => sub {
        my $data = request->data;
        unless ( ref $data eq 'HASH' ) {
            return status 400 => { error => 'Invalid JSON' };
        }
        return { filter => $data->{filter} // 'none' };
    };
}
```

```perl
my $test_std  = Plack::Test->create( TestApp::Standard->to_app );
my $test_json = Plack::Test->create( TestApp::JSON->to_app );
```

```perl
subtest 'Basic QUERY route dispatch' => sub {
    my $req = HTTP::Request->new( QUERY => '/basic' );
    my $res = $test_std->request($req);

    is( $res->code, 200, 'Returns 200 OK' );
    is( $res->content, 'query ok', 'Response body matches' );
};
```

```perl
subtest 'QUERY route with path parameters' => sub {
    my $req = HTTP::Request->new( QUERY => '/user/42' );
    my $res = $test_std->request($req);

    is( $res->code, 200, 'Returns 200 OK' );
    is( $res->content, 'User ID: 42', 'Route parameter correctly extracted' );
};
```

```perl
subtest 'QUERY request with form-encoded body payload' => sub {
    my $req = HTTP::Request->new(
        QUERY => '/search',
        [ 'Content-Type' => 'application/x-www-form-urlencoded' ],
        'q=dancer2+query'
    );
    my $res = $test_std->request($req);

    is( $res->code, 200, 'Returns 200 OK' );
    is( $res->content, 'Search term: dancer2 query', 'Form parameters parsed correctly' );
};
```

```perl
subtest 'QUERY request with JSON payload' => sub {
    my $json_payload = '{"filter":"active_users"}';
    my $req = HTTP::Request->new(
        QUERY => '/json-search',
        [ 'Content-Type' => 'application/json' ],
        $json_payload
    );
    my $res = $test_json->request($req);

    is( $res->code, 200, 'Returns 200 OK' );
    like( $res->content, qr/"filter"\s*:\s*"active_users"/, 'JSON body deserialized into request->data' );
};
```

```perl
subtest 'HTTP method matching isolation' => sub {
    my $req_get = HTTP::Request->new( GET => '/query-only' );
    my $res_get = $test_std->request($req_get);

    is( $res_get->code, 404, 'GET request to query-only route returns 404' );

    my $req_query = HTTP::Request->new( QUERY => '/query-only' );
    my $res_query = $test_std->request($req_query);

    is( $res_query->code, 200, 'QUERY request succeeds on query route' );
};
```

```perl
done_testing;
```

Now the real test of the above experiment, if I can demo the **QUERY** method in the repository I mentioned above.

#### #1: &nbsp;&nbsp; **lib/Schema.pm**
<div class="container">
    <div class="row">
        <div class="col-12 col-sm mb-4 p-2 text-center">
            <img src="/images/blog/query-in-dancer2-pic-9.jpg" class="img-fluid">
        </div>
    </div>
</div>

#### #2: &nbsp;&nbsp; **lib/Bookstore.pm**
<div class="container">
    <div class="row">
        <div class="col-12 col-sm mb-4 p-2 text-center">
            <img src="/images/blog/query-in-dancer2-pic-8.jpg" class="img-fluid">
        </div>
    </div>
</div>

Start the application now:

```bash
manwar@manwar:~/github/Dancer2-REST-API$ plackup bin/app.psgi
HTTP::Server::PSGI: Accepting connections at http://0:5000/
```

Test the QUERY call:

```bash
manwar@manwar:~/github/Dancer2-REST-API$ curl -X QUERY http://localhost:5000/api/books/search \
           -H "Content-Type: application/json" \
           -d '{"pub_date": "2010-01-01", "country": "England"}'
[
   {
      "author" : 1,
      "isbn" : "DMWP-DC",
      "pub_date" : "2010-01-01",
      "title" : "Data Munging with Perl",
      "id" : 1
   }
]
```

***

<br>

`Happy Hacking !!!`
