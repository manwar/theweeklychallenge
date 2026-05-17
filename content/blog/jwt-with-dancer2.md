---
title: "JWT with Dancer2"
date: 2026-05-17T00:00:00+00:00
description: "Demo JWT using Dancer2 app."
type: post
image: images/blog/jwt-with-dancer2.jpg
author: Mohammad Sajid Anwar
tags: ["JWT", "Dancer2"]
---

#### **DISCLAIMER:** Image is generated using `ChatGPT`.
***
<br>

I remember the good old days of web application when we used sessions to remember user because the underlying protocol of the web is completely stateless. This was the fallback mechanism when cookie support is disabled or unavailable on the client's browser.

In general, session can be either:

1. Stateful: The server remembers something about the client between requests.
2. Stateless: The server forgets everything after each request.

`JSON Web Token (JWT)` is something I never used before. I am building web application for my twins, student of year 4. They enjoy mathematics, my favourite subject. I try to keep them engage with fun maths questions. Their school promotes [**Times Tables Rock Stars (TTRS)**](https://ttrockstars.com) web application where they practice times tables. I noticed they are good in times tables but not something like `-2 + 1`. They have been taught, `1 + 2` and `3 - 1` but not `-1 + 3`. My web application would take care of this gap and many more in their knowledge.

My web application has `Dancer2` backend and `React` frontend using `JWT`.

This post is a refresher about session/token in web application in general.

### Stateful (Session)
***

<br>

**How it works:**

1. User logs in, server creates a session record in its database
2. Server generates a random session ID and sends it to the client
3. Client sends session ID with every request
4. Server looks up the session ID in its storage to find user data

**The problem:**

If you have `10 servers` handling requests, and a user's first request goes to `Server A` (which stores the session), the second request might go to `Server B` - which doesn't have that session.

**So you need:**

1. Sticky sessions, always send same user to same server
2. Shared session store (all servers talk to database), adds latency and a single point of failure

### Stateless (JWT)
***

<br>

**How it works:**

1. User logs in, server creates a `JWT` containing user data
2. Server signs the `JWT` with a secret key
3. Server sends `JWT` to client
4. Client sends `JWT` with every request
5. Server verifies the signature and trusts the data inside

**Why it scales:**

1. Any server can validate a `JWT` using the shared secret key
2. No database lookup needed per request
3. If you add `100` more servers, they all work immediately

### Comparison
***

<br>

**Data Storage**

- Stateful: Stored on the server, client only holds id
- Stateless: Stored on the client, server stores nothing

**Server Memory**

- Stateful: Server must track every active user session in database
- Stateless: Server forgets the user the moment the HTTP request finishes

**Horizontal Scaling**

- Stateful: If you have 2 servers, Server B won't know who you are if Server A created your session
- Stateless: Any server can validate the token as long as it has the secret key

**Database Overhead**

- Stateful: Every single page load requires looking up session id in database
- Stateless: Server verifies the token cryptographically in CPU memory

**Revocation**

- Stateful: Delete the session from the database
- Stateless: Once the token is issued, it is valid until it expires

### Real World Analogy
***

<br>

**Stateful (Session)**

A nightclub with a coat check. You give them your coat, they give you a ticket. Later, you give the ticket, they go to the back room, find your specific coat, and give it to you. They must remember where every coat is.

**Stateless (JWT)**

A museum ticket that says `"Joe Blog, admitted May 16, 2026"` with a `hologram`. The guard reads the ticket, sees the hologram is real, and lets you in. No need to check a database. The museum forgets you instantly after you walk in.

**Why not always stateless?**

Stateless sounds perfect, but has real downsides:

1. Cannot revoke easily, if a `JWT` is stolen, it's valid until expiry. Sessions can be killed instantly.
2. Token size, if you store lots of data, each request gets heavier.
3. Stale data, if you demote a user from `"admin"` to `"user"`, their existing `JWT` still says `"admin"` until it expires.

### Proof of Concept
***

<br>

We need [**Dancer2**](https://metacpan.org/pod/Dancer2) and [**Crypt::JWT**](https://metacpan.org/pod/Crypt::JWT) first:

```bash
$ cpanm -vS Dancer2 Crypt::JWT
```

<br>

**Source:** `app.psgi`

```perl
#!/usr/bin/env perl

package MyApp;

use strict;
use warnings;

use Dancer2;
use Try::Tiny;
use Crypt::JWT qw(encode_jwt decode_jwt);

my $JWT_SECRET = 'your-super-secure-secret-key-change-me';

post '/api/login' => sub {
    my $username = param('username') || '';
    my $password = param('password') || '';

    # A simple mock user check
    if ($username eq 'perl_dancer' && $password eq 'secret123') {

        my $payload = {
            sub  => $username,
            iat  => time,
            exp  => time + 3600,
            role => 'admin'
        };

        my $token = encode_jwt(
            payload => $payload,
            key     => $JWT_SECRET,
            alg     => 'HS256'
        );

        content_type 'application/json';
        return to_json({ success => 1, token => $token });
    }

    status 401;
    return to_json({
        success => 0,
        error   => 'Invalid username or password'
    });
};

get '/api/dashboard' => sub {
    my $auth_header = request_header 'Authorization';

    if (!$auth_header || $auth_header !~ /^Bearer\s+(.+)$/) {
        status 401;
        return to_json({
            success => 0,
            error   => 'Missing or malformed Authorization header'
        });
    }

    my $token = $1;
    my $decoded_payload;

    try {
        $decoded_payload = decode_jwt(
            token => $token,
            key   => $JWT_SECRET,
            alg   => 'HS256');
    }
    catch {
        status 401;
        $decoded_payload = undef;
    };

    return to_json({
        success => 0,
        error   => 'Invalid or expired token'
    }) unless $decoded_payload;

    return to_json({
        success   => 1,
        message   => "Welcome to your dashboard, $decoded_payload->{sub}!",
        user_role => $decoded_payload->{role}
    });
};

package main;

MyApp->to_app;
```

Time to start the server now:

```bash
$ plackup -p 6000 app.psgi
HTTP::Server::PSGI: Accepting connections at http://0:6000/
```

In another terminal, we will send a request as below:

```bash
$ TOKEN=$(curl -X POST http://localhost:6000/api/login \
               -d "username=perl_dancer" \
               -d "password=secret123" | perl -ne 'print $1 if /"token":"([^"]+)"/')
```

Now using the `JWT` received, we send the follow up request as below:

```bash
$ curl -s http://localhost:6000/api/dashboard \
       -H "Authorization: Bearer $TOKEN"
{"message":"Welcome to your dashboard, perl_dancer!","success":1,"user_role":"admin"}
```





***

<br>

`Happy Hacking !!!`
