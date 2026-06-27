---
title: "What is Middleware?"
date: 2026-06-27T00:00:00+00:00
description: "Explain middleware using Perl and Python."
type: post
image: images/blog/what-is-middleware.jpg
author: Mohammad Sajid Anwar
tags: ["Perl", "Python", "Middleware"]
---

#### **DISCLAIMER:** Image is generated using `ChatGPT`.
***
<br>

In the early `2000s`, I was exposed to middleware, but I have never used it on a work project in my career.

When I was introduced to middleware while building a [**Dancer2**](https://metacpan.org/pod/Dancer2) application and learned about [**Plack**](https://metacpan.org/pod/Plack), I saw it used in the real world for the first time through the [**Plack::Middleware**](https://metacpan.org/pod/Plack::Middleware) module.

Since then, `Plack` has been my top choice; for example, my personal website, [**https://manwar.org**](https://manwar.org), is a `Dancer2` application and is built with the help of `Plack`.

1. [**History of Middleware**](#history-of-middleware)
2. [**Advantages**](#advantages)
3. [**Install Prerequisite**](#install-prerequisite)
4. [**Build Middleware**](#build-middleware)
5. [**Build Application**](#build-application)
6. [**Build Test Environment**](#build-test-environment)
7. [**Moment of Truth**](#moment-of-truth)

## History of Middleware
***

### Early Development of Computing (1960 and 1970)

At the beginning of the computing era, the software operated on the same hardware and in order to communicate with other systems, it had to be coded from the bottom up to match the two systems.

### The Rise of Distributed Computing (1980 and 1990)

As companies started to move away from using just one computer, more and more computers were different types of networked systems therefore, creating the need for one entire dedicated connection between these networks. The phrase "middleware" became popularized during this time period. The remote procedure call (RPC) enabled a program running on one computer to execute a program on another computer as if it was running on the same computer.

### The Internet/SOA Era (2000 and onwards)

With the explosion of the internet, middleware began shifting to web-based standards. The entire industry moved towards SOA (service oriented architecture).

***

<br>

Middleware hasn't disappeared, rather, it has become so seamless and foundational that it operates largely behind the scenes.

In today’s world of cloud computing, mobile apps, and instant data, middleware has evolved in three major ways:

- The Microservices and API Economy
- Cloud and Hybrid Integration
- Web Development Frameworks

***

        [ Client Request ]
               │
               v
        +------------------------------+
        | Middleware 1: Logger         │ ---> Logs the incoming request
        +------------------------------+
               │
               v
        +------------------------------+
        | Middleware 2: Authentication | ---> Checks if user is logged in
        +------------------------------+
               │
               v
        +------------------------------+
        | Middleware 3: Body Parser    | ---> Converts raw JSON into object
        +------------------------------+
               │
               v
        +------------------------------+
        | Core Route Handler           | ---> Fetches data from database
        +------------------------------+
               │
               v
        [ Client Response ]

## Advantages
***

> The Separation of Responsibilities (or the DRY principle): By writing your authentication logic once as a middleware and applying it either globally or to a specific route group, you avoid having to repeat the same public authentication, fault handling and logging code for all 50 of your API routes.

> Pluggable (modular) architecture: You can take advantage of existing middleware from the developer ecosystem, so you won’t need to develop everything from scratch. For instance, if you want to enable file uploads, use multer; if you want to secure your HTTP headers, use helmet.

> Ability to "Short-Circuit": As demonstrated in the code sample below, middleware allows you to immediately reject a bad/invalid/unauthenticated request before it has a chance to waste CPU cycles on your database or significant business logic processing.

## Install Prerequisite
***

```bash
$ cpanm -vS Plack
$ pip install pytest httpx starlette
```

## Build Middleware
***

### Logger Middleware

**Perl:** `lib/MyApp/Middleware/Logger.pm`

```perl
package MyApp::Middleware::Logger;

use strict;
use warnings;

use parent 'Plack::Middleware';
use Time::HiRes qw(gettimeofday tv_interval);

sub call {
    my ($self, $env) = @_;

    my $start_time = [gettimeofday];
    print "[LOG] Incoming: $env->{REQUEST_METHOD} $env->{PATH_INFO}\n";

    # Pass down the pipeline to get the response array
    my $res = $self->app->($env);

    my $elapsed = tv_interval($start_time);
    printf "[LOG] Outgoing Status: %d (Processed in %.4f seconds)\n", $res->[0], $elapsed;

    return $res;
}

1;
```

**Python:** `middleware/logger.py`

```python
import time
from starlette.middleware.base import BaseHTTPMiddleware

class LoggerMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request, call_next):
        start_time = time.time()
        print(f"[LOG] Incoming: {request.method} {request.url.path}")

        # Pass down the pipeline to get the response
        response = await call_next(request)

        elapsed = time.time() - start_time
        print(f"[LOG] Outgoing Status: {response.status_code} (Processed in {elapsed:.4f} seconds)")

        return response
```

### Authenticator Middleware


**Perl:** `lib/MyApp/Middleware/Authenticator.pm`

```perl
package MyApp::Middleware::Authenticator;

use strict;
use warnings;

use parent 'Plack::Middleware';
use Plack::Request;

sub call {
    my ($self, $env) = @_;
    my $req = Plack::Request->new($env);

    my $token = $req->header('X-Auth-Token');

    if ($token && $token eq 'secret-password-123') {
        print "[AUTH] Valid token. Granting access to User #456.\n";
        $env->{'custom.user_id'} = 456;

        return $self->app->($env); # Pass to next middleware
    }

    print "[AUTH] Access Denied. Short-circuiting.\n";
    return [ 401, [ 'Content-Type' => 'text/plain' ], [ 'Unauthorized' ] ];
}

1;
```

**Python:** `middleware/authenticator.py`

```python
from starlette.middleware.base import BaseHTTPMiddleware
from starlette.responses import PlainTextResponse

class AuthenticatorMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request, call_next):
        # Look for the custom header mimicking our token
        token = request.headers.get("X-Auth-Token")

        if token == "secret-password-123":
            print("[AUTH] Valid token. Granting access to User #456.")

            # Inject state data into the request context for later stages
            request.state.user_id = 456

            return await call_next(request) # Pass to next middleware

        print("[AUTH] Access Denied. Short-circuiting.")
        return PlainTextResponse("Unauthorized", status_code=401)
```

### ProfileRouter Middleware


**Perl:** `lib/MyApp/Middleware/ProfileRouter.pm`

```perl
package MyApp::Middleware::ProfileRouter;

use strict;
use warnings;

use parent 'Plack::Middleware';
use Plack::Request;
use JSON::MaybeXS qw(encode_json);

sub call {
    my ($self, $env) = @_;
    my $req = Plack::Request->new($env);

    # Check if this middleware should handle this specific route
    if ($req->path_info eq '/api/profile') {
        my $user_id = $env->{'custom.user_id'} // 'Guest';
        print "[ROUTER] Handling /api/profile directly inside middleware.\n";

        my $data = {
            user_id => $user_id,
            name    => "Alice Perl",
            status  => "Fully Delegated Architecture"
        };

        return [ 200, [ 'Content-Type' => 'application/json' ], [ encode_json($data) ] ];
    }

    # If the route doesn't match, pass it to the next app/middleware
    return $self->app->($env);
}

1;
```

**Python:** `middleware/profile_router.py`

```python
import json
from starlette.middleware.base import BaseHTTPMiddleware
from starlette.responses import JSONResponse

class ProfileRouterMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request, call_next):
        # Check if this middleware should handle this specific route
        if request.url.path == "/api/profile":
            # Safely fetch the user_id injected by the Authenticator
            user_id = getattr(request.state, "user_id", "Guest")
            print("[ROUTER] Handling /api/profile directly inside middleware.")

            data = {
                "user_id": user_id,
                "name": "Alice Python",
                "status": "Fully Delegated Python Architecture"
            }
            return JSONResponse(data, status_code=200)

        # If the route doesn't match, pass it to the next app/middleware down the line
        return await call_next(request)
```

## Build Application
***

### Using Perl

**File:** `app.psgi`

```perl
#!/usr/bin/env perl

use strict;
use warnings;

use Plack::Builder;

use lib 'lib/';

my $default_404_fallback = sub {
    return [
        404,
        [ 'Content-Type' => 'text/plain' ],
        [ 'Resource Not Found' ]
    ];
};

builder {
    # Layer 1: Global Performance Diagnostics
    enable '+MyApp::Middleware::Logger';

    # Layer 2: Global Security and Context Injection
    enable '+MyApp::Middleware::Authenticator';

    # Layer 3: Endpoint Routing & Controller Logic
    enable '+MyApp::Middleware::ProfileRouter';

    # Fallback endpoint target
    $default_404_fallback;
};
```

### Using Python

**File:** `app.py`

```python
from starlette.applications import Starlette
from starlette.middleware import Middleware
from starlette.responses import PlainTextResponse

from middleware.logger import LoggerMiddleware
from middleware.authenticator import AuthenticatorMiddleware
from middleware.profile_router import ProfileRouterMiddleware

async def default_404_fallback(scope, receive, send):
    response = PlainTextResponse("Resource Not Found", status_code=404)
    await response(scope, receive, send)

middleware_stack = [
    Middleware(LoggerMiddleware),
    Middleware(AuthenticatorMiddleware),
    Middleware(ProfileRouterMiddleware)
]

app = Starlette(middleware=middleware_stack, on_startup=[], routes=[])
```

## Build Test Environment
***

### Using Perl

**File:** `t/authenticator.t`

```perl
#!/usr/bin/env perl

use strict;
use warnings;

use Test::More;
use Plack::Test;
use HTTP::Request::Common;

use lib 'lib/';

use MyApp::Middleware::Authenticator;

my $mock_inner_app = sub {
    my $env = shift;
    return [
        200,
        [ 'Content-Type' => 'text/plain' ],
        [ "Success: User ID " . $env->{'custom.user_id'} ]
    ];
};

my $app_to_test = MyApp::Middleware::Authenticator->wrap($mock_inner_app);

test_psgi $app_to_test, sub {
    my $cb = shift;

    # TEST CASE 1: No Token
    {
        my $res = $cb->(GET '/api/profile');
        is($res->code, 401, "Missing token returns 401 Unauthorized");
        is($res->content, "Unauthorized", "Error message matches expected output");
    }

    # TEST CASE 2: Wrong Token
    {
        my $res = $cb->(GET '/api/profile', 'X-Auth-Token' => 'wrong-password');
        is($res->code, 401, "Invalid token returns 401 Unauthorized");
    }

    # TEST CASE 3: Correct Token
    {
        my $res = $cb->(GET '/api/profile', 'X-Auth-Token' => 'secret-password-123');
        is($res->code, 200, "Valid token returns 200 OK");
        like($res->content, qr/Success: User ID 456/, "Context variable was correctly injected and passed down");
    }
};

done_testing;
```

### Using Python

**File:** `test_authenticator.py`

```python
#!/usr/bin/env python3

import pytest
from starlette.applications   import Starlette
from starlette.middleware     import Middleware
from starlette.responses      import PlainTextResponse
from starlette.testclient     import TestClient
from middleware.authenticator import AuthenticatorMiddleware

@pytest.fixture
def test_app():
    async def mock_inner_endpoint(request):
        user_id = getattr(request.state, "user_id", "Unknown")
        return PlainTextResponse(f"Success: User ID {user_id}", status_code=200)

    app = Starlette(
        middleware=[Middleware(AuthenticatorMiddleware)],
        routes=[]
    )
    app.router.add_route("/{path:path}", mock_inner_endpoint, methods=["GET"])

    return app

# TEST CASE 1: No Token
def test_missing_token_returns_401(test_app):
    client = TestClient(test_app)
    response = client.get("/api/profile")

    assert response.status_code == 401
    assert response.text == "Unauthorized"

# TEST CASE 2: Wrong Token
def test_invalid_token_returns_401(test_app):
    client = TestClient(test_app)
    response = client.get("/api/profile", headers={"X-Auth-Token": "wrong-password"})

    assert response.status_code == 401

# TEST CASE 3: Correct Token
def test_valid_token_allows_request(test_app):
    client = TestClient(test_app)
    response = client.get("/api/profile", headers={"X-Auth-Token": "secret-password-123"})

    assert response.status_code == 200
    assert "Success: User ID 456" in response.text
```

## Moment of Truth
***

### Using Perl

```bash
$ yath test
PERL_HASH_SEED not set, setting to '20260627' for more reproducible results.
( PASSED )  job  1    t/authenticator.t

                                Yath Result Summary
-----------------------------------------------------------------------------------
     File Count: 1
Assertion Count: 5
      Wall Time: 0.48 seconds
       CPU Time: 0.51 seconds (usr: 0.12s | sys: 0.05s | cusr: 0.26s | csys: 0.08s)
      CPU Usage: 105%
    -->  Result: PASSED  <--
```

### Using Python

```bash
$ PYTHONWARNINGS="ignore" pytest test_authenticator.py
=============================== test session starts ===============================
platform linux -- Python 3.12.3, pytest-9.1.1, pluggy-1.6.0
rootdir: /home/manwar/playground/middleware
plugins: anyio-4.9.0, dash-3.0.4
collected 3 items

test_authenticator.py ...                                                    [100%]

================== 3 passed in 0.07s ==============================================
```

***
<br>

`Happy Hacking !!!`
