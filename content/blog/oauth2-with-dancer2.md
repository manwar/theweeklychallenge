---
title: "OAuth2 with Dancer2"
date: 2026-05-17T00:00:00+00:00
description: "Demo OAuth2 using Dancer2 app."
type: post
image: images/blog/oauth2-with-dancer2.jpg
author: Mohammad Sajid Anwar
tags: ["OAuth2", "Dancer2"]
---

#### **DISCLAIMER:** Image is generated using `Google Gemini`.
***
<br>

Last night, I published a blog post about [**JWT with Dancer2**](/blog/jwt-with-dancer2). It was something that I never had chance to play with. I thoroughly enjoyed the journey.

Today, I am going to talk about `OAuth2`. This is also new to me. I have read about it many years ago but never had time to actually try it. Now that I am done with `JWT`, it is natural that I take a look at `OAuth2` now.

In a real-world scenario, you usually delegate `OAuth2` to a third-party provider (like `GitHub` or `Google`). However, to demonstrate how `OAuth2` works purely within `Dancer2`, the updated application below acts as both the `Authorisation Server` and the `Resource Server`.

### OAuth2 Workflow
***

<br>

Instead of directly exchanging a password for a token, `OAuth2` uses an intermediate step:

1) Authorisation Request

    The client redirects the user to the login/consent page.

2) Authorisation Code

    After successful login, the server redirects the user back to the client with a temporary code.

3) Token Exchange

    The client exchanges this temporary code (plus its client secret) for a secure access token

It is incredibly common to see `OAuth2` and `JWT` used together in modern web development, which often leads to the misconception that they are competing technologies.

In reality, they are completely different tools designed to solve two entirely distinct problems.

To understand the difference:

`OAuth2` is a protocol and it defines how a user can grant an application permission to access their data without handing over their password.

`JWT` is a data format. It is a secure, compact way to package and transport verified data between parties as a `JSON` string.

### Proof of Concept
***

<br>

We need [**String::Random**](https://metacpan.org/pod/String::Random) as well first:

```bash
$ cpanm -vS String::Random
```

**Source:** `app-oauth2.psgi`

```perl
#!/usr/bin/env perl
package MyApp;

use strict;
use warnings;

use Dancer2;
use Try::Tiny;
use String::Random qw(random_string);
use Crypt::JWT qw(encode_jwt decode_jwt);

# Mock Configuration
my $CLIENT_ID     = 'my_dancer_client';
my $CLIENT_SECRET = 'super_secret_client_credential';
my $REDIRECT_URI  = 'http://localhost:7000/client/callback';
my $JWT_SECRET    = 'your-super-secure-token-signing-key';

# Temporary in-memory storage for valid Authorisation Codes
our %auth_codes;

# 1. AUTHORISATION SERVER: Consent / Login Page
get '/oauth/authorize' => sub {
    my $client_id     = param('client_id')    || '';
    my $redirect_uri  = param('redirect_uri') || '';
    my $response_type = param('response_type')|| '';

    if ($client_id ne $CLIENT_ID || $redirect_uri ne $REDIRECT_URI || $response_type ne 'code') {
        status 400;
        return "OAuth2 Error: Invalid client, redirect_uri, or response_type.";
    }

    content_type 'text/html';
    return <<HTML;
    <h2>Authorise Access?</h2>
    <p>Application <strong>$client_id</strong> wants to access your dashboard profile data.</p>
    <form action="/oauth/approve" method="POST">
        <input type="hidden" name="client_id" value="$client_id">
        <input type="hidden" name="redirect_uri" value="$redirect_uri">
        <label>Username: <input type="text" name="username" value="perl_dancer"></label><br><br>
        <label>Password: <input type="password" name="password" value="secret123"></label><br><br>
        <input type="submit" value="Approve & Authorise">
    </form>
HTML
};

# 2. AUTHORISATION SERVER: Generate Temporary Auth Code
post '/oauth/approve' => sub {
    my $username     = param('username')     || '';
    my $password     = param('password')     || '';
    my $client_id    = param('client_id')    || '';
    my $redirect_uri = param('redirect_uri') || '';

    if ($username eq 'perl_dancer' && $password eq 'secret123') {
        # Generate a random, temporary Authorisation Code (valid once)
        my $code = random_string('cccccccnnn');

        # Link the temporary code to the authenticated user identity
        $auth_codes{$code} = { user => $username, client => $client_id };

        # Redirect the user back to the client application with the code
        return redirect "$redirect_uri?code=$code";
    }

    status 401;
    return "Authentication Failed.";
};

# 3. AUTHORISATION SERVER: Exchange Code for Access Token
post '/oauth/token' => sub {
    my $grant_type    = param('grant_type')    || '';
    my $code          = param('code')          || '';
    my $client_id     = param('client_id')     || '';
    my $client_secret = param('client_secret') || '';
    my $redirect_uri  = param('redirect_uri')  || '';

    content_type 'application/json';

    if ($grant_type ne 'authorization_code') {
        status 400;
        return to_json({ error => 'unsupported_grant_type' });
    }

    if ($client_id ne $CLIENT_ID || $client_secret ne $CLIENT_SECRET) {
        status 401;
        return to_json({ error => 'invalid_client' });
    }

    my $session_info = delete $auth_codes{$code};
    if (!$session_info) {
        status 400;
        return to_json({
            error   => 'invalid_grant',
            message => 'Code expired or invalid.'
        });
    }

    # Issue Access Token (JWT)
    my $payload = {
        sub    => $session_info->{user},
        client => $session_info->{client},
        iat    => time,
        exp    => time + 3600,
        scope  => 'read_dashboard'
    };

    my $access_token = encode_jwt(
        payload => $payload,
        key     => $JWT_SECRET,
        alg     => 'HS256'
    );

    return to_json({
        access_token => $access_token,
        token_type   => 'Bearer',
        expires_in   => 3600
    });
};

# 4. RESOURCE SERVER: Protected Data Endpoint
get '/api/dashboard' => sub {
    my $auth_header = request_header 'Authorization';

    content_type 'application/json';

    if (!$auth_header || $auth_header !~ /^Bearer\s+(.+)$/) {
        status 401;
        return to_json({
            error   => 'access_denied',
            message => 'Missing Bearer token.'
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
        error => 'invalid_token' }
    ) unless $decoded_payload;

    return to_json({
        success           => 1,
        message           => "Hello $decoded_payload->{sub}! This data is secure via OAuth2.",
        authorised_client => $decoded_payload->{client}
    });
};

# MOCK CLIENT: Simple callback endpoint to view the results
get '/client/callback' => sub {
    my $code = param('code') || 'No code received';
    content_type 'text/html';
    return <<HTML;
    <h3>Client App Received Callback!</h3>
    <p><strong>Authorisation Code:</strong> <code>$code</code></p>
    <p>The client app can now exchange this code server-to-server for an access token via <code>/oauth/token</code>.</p>
HTML
};

package main;
MyApp->to_app;
```

Follow the process now to see the live action.

### STEP 1

Boot your application on port 7000:

```bash
$ plackup -p 7000 app-oauth2.psgi
HTTP::Server::PSGI: Accepting connections at http://0:7000/
```

### STEP 2

Open your web browser and navigate to the initial `Authorisation Request URL` simulating a client application initiating authorisation:

    http://localhost:7000/oauth/authorise?client_id=my_dancer_client&redirect_uri=http://localhost:7000/client/callback&response_type=code

### STEP 3

Click Approve & Authorise.

### STEP 4

You will be redirected to the client callback, displaying your temporary code, e.g. `yzizoas151`.

### STEP 5

Open your terminal and copy that code to exchange it for an access token:

```bash
$ TOKEN=$(curl -X POST http://localhost:7000/oauth/token \
               -d "grant_type=authorization_code" \
               -d "client_id=my_dancer_client" \
               -d "client_secret=super_secret_client_credential" \
               -d "redirect_uri=http://localhost:7000/client/callback" \
               -d "code=yzizoas151"  | perl -ne 'print $1 if /"access_token":"([^"]+)"/')
```

### STEP 6

Use the generated `JWT` for further request as below:

```bash
$ curl -s http://localhost:7000/api/dashboard \
       -H "Authorization: Bearer $TOKEN"
{"success":1,"message":"Hello perl_dancer! This data is secure via OAuth2.","authorised_client":"my_dancer_client"}
```

***

<br>

`Happy Hacking !!!`
