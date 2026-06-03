---
title: "JSON-RPC with Perl"
date: 2026-06-03T00:00:00+00:00
description: "Working with JSON-RPC using Perl."
type: post
image: images/blog/jsonrpc-with-perl.jpg
author: Mohammad Sajid Anwar
tags: ["perl", "JSON-RPC"]
---

#### **DISCLAIMER:** Image is generated using `ChatGPT`.
***
<br>

Just a few days ago, `Dave Cross`, published an article titled [**Teaching AI About the British Monarchy with MCP**](https://perlhacks.com/2026/05/teaching-ai-about-the-british-monarchy-with-mcp). It reminded me to finally get started on `MCP`, something I have been delaying for so long. While reading through the article, I noticed `JSON-RPC` being discussed quite prominently.

> MCP Is Mostly JSON-RPC

So I thought, why not deal with `JSON-RPC` first?

If you remember, a couple of weeks ago, I published a post comparing [**REST vs gRPC**](/blog/rest-vs-grpc). I was deeply impressed by how `gRPC` handles data. Frankly, there is no real comparison between `REST` and `gPRC` as their purposes are entirely different. `REST` is meant for application where we need data instantly without complications. On the other hand, for critical applications, where data security and performance are vital, `gRPC` is the better option.

If you want a general refresher on `gRPC`, I highly recommend you take a look at that blog post before continuing further.

In this post, we will look at `JSON-RPC` more closely.

As is always the case, my first instinct, was to check if there is a `CPAN` module that can do the job for me?

I got lucky right away and found this module: [**JSON-RPC**](https://metacpan.org/pod/JSON::RPC).

I saw this note on `MetaCPAN`:

> This distribution is up for adoption! If you're interested then please contact the PAUSE module admins via email.

And there are [**18 issues**](https://rt.cpan.org/Public/Dist/Display.html?Name=JSON-RPC) recorded in `RT`.

I really want to help clear the outstanding issues but unfortunately, I have too many things on my plate. Most important of all is finishing my book on `DBIx::Class`. It would be great if I could finish the manuscript on time to launch it at the next London Perl Workshop event, just like I did last year when I launched my first book, [**Design Patterns in Modern Perl**](https://perlschool.com/books/design-patterns).

OK, let's get back to reality.

The `RPC` in `JSON-RPC` stands for `Remote Procedure Call`, no rocket science there.

> `JSON-RPC` is a lightweight, stateless remote procedure call (RPC) protocol encoded in JSON. It allows an application to send a request to a remote system over a network or WebSockets to execute a specific function or method and receive a structured response back.

If you are familiar with `JSON` then half the job is already done. Unlike `gRPC`, the data stays unencrypted (plain text).

Since we are using `JSON::RPC`, I noticed it relies on another `CPAN` module for routing i.e. [**Router::Simple**](https://metacpan.org/pod/Router::Simple).

For demo purpose, this is structure I created.

```bash
├── client.pl
├── lib
│   └── App
│       └── Handler.pm
└── server.psgi
```

Let's create the handler class. This is where we keep the core functions.

```perl
package App::Handler;

use strict;
use warnings;

sub new { bless {}, shift }

sub add {
    my ($self, $params) = @_;
    return $params->[0] + $params->[1];
}

sub substract {
    my ($self, $params) = @_;
    return $params->[0] - $params->[1];
}

sub multiply {
    my ($self, $params) = @_;
    return $params->[0] * $params->[1];
}

sub divide {
    my ($self, $params) = @_;
    return $params->[0] / $params->[1];
}

1;
```

Nothing complicated, just four operations as simple as that.

Time to create the server to expose these functions.

**File:** `server.psgi`

```perl
!/usr/bin/env perl

use strict;
use warnings;

use lib 'lib/';

use App::Handler;
use Router::Simple;
use JSON::RPC::Dispatch;

my $router = Router::Simple->new;

foreach my $operation (qw/add substract multiply divide/) {
    $router->connect($operation, {
        handler => App::Handler->new,
        action  => $operation
    });
}

sub {
    my $env = shift;
    return JSON::RPC::Dispatch
        ->new(router => $router)
        ->handle_psgi($env);
};
```

Let me show you the payload structure first.

```perl
{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "add",
    "params": [4, 2]
}
```

For more details, you can checkout the [**JSON-RPC 2.0 Specification**](https://www.jsonrpc.org/specification).

Here is the client finally.

```perl
#!/usr/bin/env perl

use strict;
use warnings;

use HTTP::Tiny;
use JSON::MaybeXS;

my $http = HTTP::Tiny->new;
my $json = JSON::MaybeXS->new(utf8 => 1);

my $HOST = $ENV{APP_HOST} || "127.0.0.1";
my $PORT = $ENV{APP_PORT} || 8080;

foreach my $payload ({ id => 1, method => "add"       },
                     { id => 2, method => "substract" },
                     { id => 3, method => "multiply"  },
                     { id => 4, method => "divide"    }) {
    $payload->{jsonrpc} = "2.0";
    $payload->{params}  = [4, 2];

    my $response = $http->post("http://$HOST:$PORT", {
        content => $json->encode($payload),
        headers => { 'content-type' => 'application/json' },
    });

    if (!$response->{success}) {
        warn "HTTP Request Failed for method '", $payload->{method},
             "': ", $response->{content}, "\n";
        next;
    }

    my $data = $json->decode($response->{content});
    if ($data->{error}) {
        warn "JSON-RPC Server Error on '", $payload->{method},
             "': ", $data->{error}->{message}, "\n";
    } else {
        print "Method: ", $payload->{method},
              " (", $data->{result}, ")\n";
    }
}
```

Time for some action now. Let's start the server in one terminal like below:

```bash
$ plackup server.psgi
HTTP::Server::PSGI: Accepting connections at http://0:8080/
```

And in another terminal, we run the client script as below:

```bash
$ perl client.pl
Method: add (6)
Method: substract (2)
Method: multiply (8)
Method: divide (2)
```

Your server terminal would look this after the first run:

```bash
$ plackup server.psgi
HTTP::Server::PSGI: Accepting connections at http://0:8081/
127.0.0.1 - - [03/Jun/2026:15:04:45 +0100] "POST / HTTP/1.1" 200 35 "-" "HTTP-Tiny/0.086"
127.0.0.1 - - [03/Jun/2026:15:04:45 +0100] "POST / HTTP/1.1" 200 35 "-" "HTTP-Tiny/0.086"
127.0.0.1 - - [03/Jun/2026:15:04:45 +0100] "POST / HTTP/1.1" 200 35 "-" "HTTP-Tiny/0.086"
127.0.0.1 - - [03/Jun/2026:15:04:45 +0100] "POST / HTTP/1.1" 200 35 "-" "HTTP-Tiny/0.086"
```

***

<br>

`Happy Hacking !!!`
