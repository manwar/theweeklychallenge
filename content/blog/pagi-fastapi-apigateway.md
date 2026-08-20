---
title: "API Gateway using PAGI::FastAPI"
date: 2026-08-20T00:00:00+00:00
description: "API Gateway using PAGI::FastAPI."
type: post
image: images/blog/pagi-fastapi-apigateway.jpg
author: Mohammad Sajid Anwar
tags: ["Perl", "PAGI", "FastAPI", "API Gateway"]
---

#### **DISCLAIMER:** Image is generated using `ChatGPT`.
***
<br>

Just released the [**PAGI::FastAPI v1.2.0**](https://metacpan.org/dist/PAGI-FastAPI). This release brings it even more closer to `Python's FastAPI` implementation. There are still pending things, which I have documented in the [**TODO**](https://github.com/manwar/PAGI-FastAPI/blob/master/TODO.md) document.

Right now, my brain is actively thinking about `PAGI::FastAPI` all the time. I keep trying to explore what is possible to build useful utility with it.

In the [**previous post**](/blog/pagi-fastapi-websocket), I created websocket with it.

In this post, I will present a very simple `API Gateway` demo. Actually this demo app is shipped with the release of `v1.2.0`.

                                                 +-------------------+
                                                 | User Microservice |
                                                 +-------------------+
                                                /
     +----------+        +-------------+       /
     |  Client  | -----> | API Gateway | ----->
     +----------+        +-------------+       \
                                                \
                                                 +--------------------+
                                                 | Order Microservice |
                                                 +--------------------+

### User Microservice

This accepts route param, `user id` and returns the static user details (just for demo purpose).

**Source**: [https://github.com/manwar/PAGI-FastAPI/blob/master/eg/user_microservice.pl](https://github.com/manwar/PAGI-FastAPI/blob/master/eg/user_microservice.pl)

```perl
#!/usr/bin/env perl

use v5.36;
use PAGI::FastAPI;
use Future::AsyncAwait;

my $app = PAGI::FastAPI->new(
    title   => "User Microservice",
    version => "1.0.0"
);

$app->get('/users/{id}',
    handler => async sub ($c) {
        my $user_id = $c->param('id') // 1;
        return {
            data => {
                id    => 0 + $user_id,
                name  => "Alice Developer",
                role  => "Software Engineer",
                email => 'alice@example.com'
            }
        };
    });

$app->to_app;
```

### Order Microservice

This accepts route param, `user id` and returns the static user order details (just for demo purpose).

**Source**: [https://github.com/manwar/PAGI-FastAPI/blob/master/eg/order_microservice.pl](https://github.com/manwar/PAGI-FastAPI/blob/master/eg/order_microservice.pl)

```perl
#!/usr/bin/env perl

use v5.36;
use PAGI::FastAPI;
use Future::AsyncAwait;

my $app = PAGI::FastAPI->new(
    title   => "Order Microservice",
    version => "1.0.0"
);

$app->get('/orders/user/{id}',
    handler => async sub ($c) {
        my $user_id = $c->param('id') // 1;
        return {
            user_id => 0 + $user_id,
            orders  => [
                { id => 101, item => "Mechanical Keyboard", price => 120 },
                { id => 102, item => "4K Monitor",          price => 350 }
            ]
        };
    });

$app->to_app;
```

### API Gateway

Finally we build the public facing `API Gateway` that link the two microservices.

I must point out, we are using, two very important features of `PAGI::FastAPI` i.e. [**PAGI::FastAPI::Security::HTTPBearer**](https://metacpan.org/pod/PAGI::FastAPI::Security::HTTPBearer) and [**PAGI::FastAPI::Depends**](https://metacpan.org/pod/PAGI::FastAPI::Depends).

I am not fully satisfied with it as I don't like manually creating `HTTP` client. I will see if I can improve it later.

**Source**: [https://github.com/manwar/PAGI-FastAPI/blob/master/eg/api_gateway.pl](https://github.com/manwar/PAGI-FastAPI/blob/master/eg/api_gateway.pl)

```perl
use v5.36;
use JSON::PP;
use Future::HTTP;
use PAGI::FastAPI;
use Future::AsyncAwait;
use PAGI::FastAPI::Depends qw(Depends);
use PAGI::FastAPI::Security::HTTPBearer;

my $SECRET_TOKEN = 'secret-token-123';

my $app = PAGI::FastAPI->new(
    title   => "API Gateway Dashboard",
    version => "1.0.0"
);

my $html_content = do { local $/; <DATA> };

# 1. Bearer Token Extractor
my $bearer = PAGI::FastAPI::Security::HTTPBearer->new;

# 2. Token Validator Dependency
my $auth_check = async sub ($c) {
    my $token = $c->stash->{authToken} // '';
    unless (constant_time_eq($token, $SECRET_TOKEN)) {
        $c->status(401);
        return { message => 'Unauthorised Access' };
    }
    return 1;
};

# 3. Async HTTP Client Dependency
my $get_http = async sub ($c) {
    return Future::HTTP->new;
};

# 4. Service Endpoints Config Dependency
my $get_config = async sub ($c) {
    return {
        user_service_url  => 'http://127.0.0.1:3001',
        order_service_url => 'http://127.0.0.1:3002',
    };
};

$app->get('/', handler => async sub ($c) {
    return $c->html($html_content);
});

$app->get('/api/v1/dashboard/{id}',
    dependencies => [
        $bearer->depends(key => 'authToken'),
        Depends($auth_check),
        Depends($get_http,   key => 'http_client'),
        Depends($get_config, key => 'config'),
    ],
    handler => async sub ($c) {
        # Retrieve injected dependencies from stash
        my $http    = $c->stash->{http_client};
        my $config  = $c->stash->{config};
        my $user_id = $c->param('id') // 1;

        # Concurrent, non-blocking HTTP requests
        my $user_f  = $http->http_get("$config->{user_service_url}/users/$user_id");
        my $order_f = $http->http_get("$config->{order_service_url}/orders/user/$user_id");

        # Await both futures concurrently
        await Future->wait_all($user_f, $order_f);

        my $user_body  = eval { ($user_f->get)[0]        } // '{}';
        my $order_body = eval { ($order_f->get)[0]       } // '{}';

        my $user_data  = eval { decode_json($user_body)  } // {};
        my $order_data = eval { decode_json($order_body) } // {};

        return {
            user   => $user_data->{data}    // undef,
            orders => $order_data->{orders} // [],
        };
    }
);

$app->to_app;

sub constant_time_eq ($a, $b) {
    return 0 unless length($a) == length($b);
    my $diff = 0;
    $diff |= ord(substr($a, $_, 1)) ^ ord(substr($b, $_, 1)) for 0 .. length($a) - 1;
    return $diff == 0;
}
```

### Demo

Let's start the `API Gateway` first:

```bash
$ pagi-server api_gateway --port 3000
```

Then the two microservices in separate terminals:

```bash
$ pagi-server user_microservice --port 3001
```

```bash
$ pagi-server order_microservice --port 3002
```

Now visit the `API Gateway` dashboard: [**http://localhost:3000**](http://localhost:3000)

<div class="container">
    <div class="row">
        <div class="col-12 col-sm mb-4 p-2 text-center">
            <img src="/images/blog/apigateway-img-1.jpg" class="img-fluid">
        </div>
    </div>
</div>

The end result looks like this:

<div class="container">
    <div class="row">
        <div class="col-12 col-sm mb-4 p-2 text-center">
            <img src="/images/blog/apigateway-img-2.jpg" class="img-fluid">
        </div>
    </div>
</div>

***
<br>

`Happy Hacking !!!`
