---
title: "Webhook using PAGI::FastAPI"
date: 2026-08-23T00:00:00+00:00
description: "Webhook using PAGI::FastAPI."
type: post
image: images/blog/pagi-fastapi-webhook.jpg
author: Mohammad Sajid Anwar
tags: ["Perl", "PAGI", "FastAPI", "Webhook"]
---

#### **DISCLAIMER:** Image is generated using `ChatGPT`.
***
<br>

So far, I have discussed [**API Gateway**](/blog/pagi-fastapi-apigateway) and [**Message Queue**](/blog/pagi-fastapi-queue). In this post, I will talk about `Webhook`.

Webhooks serve as the foundation for contemporary event-driven architectures. Whether it’s the integration of Stripe’s payment alerts, tracking repository push events through GitHub, or synchronizing the live user experience, webhooks provide instantaneous communication channels of connected microservices.

Picture a webhook as an automated software alarm system providing “don’t call us, we’ll call you” notifications. Rather than asking a server repeatedly if there is new data (polling), the webhook fires an HTTP POST request with payload data to a URL immediately after an occurrence takes place. For instance, if a customer buys a t-shirt from an online store, Shopify does not wait for fulfillment software to inquire if there is an order; it sends the webhook immediately with the order information to the warehouse software to commence the packing process.

In this deep dive, we walk through building a complete, lightweight, and production-grade `Webhook` using Perl's modern async framework: [**PAGI::FastAPI**](https://metacpan.org/dist/PAGI-FastAPI).

---

### Architecture Overview

Our demo application covers two fundamental webhook paradigms within a single service:

1. **Webhook Producer (Dispatcher)**
> Registers subscriber target endpoints, constructs event payloads, and dispatches them asynchronously over HTTP.
2. **Webhook Consumer (Receiver)**
> Receives incoming payloads, enforces security via **HMAC SHA-256 signature verification**, and processes domain events.
3. **Real-time Monitoring UI**
> An interactive single-page dashboard to trigger domain events and view live verification logs.

```
        [ Web Dashboard UI ]
                |
                ▼ (Trigger Event)
    +------------------------+         HTTP POST w/ Signature          +------------------------+
    |   Webhook Dispatcher   | --------------------------------------> |    Incoming Receiver   |
    |   (/events/trigger)    |    X-PAGI-Signature: 2085a17bdb...      |  (/webhooks/incoming)  |
    +------------------------+                                         +------------------------+
                                                                                   │
                                                                         (Verify HMAC SHA-256)
                                                                                   │
                                                                                   ▼
                                                                         [ Live Feed Dashboard ]
```

---

### The HMAC Signature Challenge

One of the most important aspects of webhook security is payload signature verification.

When sending a payload, the dispatcher computes a cryptographic signature:

    Signature = HMAC-SHA256 (Secret, Payload String)

When the consumer receives the `HTTP` request, it recomputes the `HMAC` signature using the shared secret and compares it to the incoming header (`X-PAGI-Signature`).

### The Problem

In `Perl` (and many dynamic languages), hash key iteration order is non-deterministic. If the dispatcher formats `JSON` as:

```json
{"data":{"user_id":101},"event_type":"user.signup"}
```

and the receiver parses it into a `HashRef` and re-serialises it as:

```json
{"event_type":"user.signup","data":{"user_id":101}}
```

the calculated `HMAC` hashes will **never match**, resulting in an artificial signature failure.

### The Solution

To guarantee bit-for-bit equivalence across `HTTP` boundaries, both the dispatcher and receiver enforce **canonical JSON sorting** via `JSON::PP`:

```perl
my $json_formatter = JSON::PP->new->canonical(1)->utf8(1);
my $canonical_json = $json_formatter->encode($payload);
```

By sorting keys alphabetically prior to signature calculation, both sender and receiver evaluate the exact same byte sequence.

### Application Code

The complete single-file Perl application: [**eg/webhook_demo.pl**](https://github.com/manwar/PAGI-FastAPI/blob/master/eg/webhook_demo.pl):

The demo app shipped with [**PAGI::FastAPI v1.2.6**](https://metacpan.org/dist/PAGI-FastAPI).

First the ground work:

```perl
use v5.38;
use HTTP::Tiny;
use PAGI::FastAPI;
use Future::AsyncAwait;
use JSON::PP qw(encode_json);
use Digest::SHA qw(hmac_sha256_hex);

my $SHARED_SECRET = 'my_shared_secret';

my $app = PAGI::FastAPI->new(
    title   => 'PAGI::FastAPI Webhook Dashboard',
    version => '1.0.0',
);

# In-memory data stores
my @subscribers;
my @delivery_logs;
```

The dashboard:

```perl
my $html_content = do { local $/; <DATA> };
$app->get('/',
    summary => 'Serve Webhook Management Dashboard',
    handler => async sub ($c) { $c->html($html_content); },
);
```

The subscribe route:

```perl
$app->post('/webhooks/subscribe',
    summary => 'Register a new webhook target endpoint',
    handler => async sub ($c) {
        my $body       = $c->body // {};
        my $target_url = $body->{target_url};
        my $secret     = $body->{secret} // 'default_secret';

        unless ($target_url) {
            $c->status(400);
            return { error => 'Missing target_url in request body' };
        }

        my $sub = {
            id         => scalar(@subscribers) + 1,
            target_url => $target_url,
            secret     => $secret,
            created_at => time(),
        };

        push @subscribers, $sub;

        unshift @delivery_logs, {
            timestamp  => scalar(localtime),
            event      => 'subscriber.created',
            target     => $target_url,
            status     => 200,
            status_msg => "Subscriber Registered (ID: $sub->{id})",
            details    => {
                subscriber_id => $sub->{id},
                target_url    => $target_url,
                secret_key    => '*' x length($secret),
            },
        };

        return {
            status     => 'subscribed',
            subscriber => $sub,
        };
    }
);
```

The event trigger:

```perl
$app->post('/events/trigger',
    summary => 'Simulate a domain event that dispatches webhooks to all subscribers',
    handler => async sub ($c) {
        my $body       = $c->body // {};
        my $event_type = $body->{event_type};

        my $payload = {
            event_id   => 'evt_' . time(),
            event_type => $event_type,
            timestamp  => time(),
            data       => {
                user_id => 101,
                message => "Action $event_type successfully processed",
            },
        };

        my $json_formatter = JSON::PP->new->canonical(1)->utf8(1);
        my $json_payload   = $json_formatter->encode($payload);
        my $dispatched_count = 0;
        my $ua = HTTP::Tiny->new(timeout => 5);

        for my $sub (@subscribers) {
            my $signature = hmac_sha256_hex($json_payload, $sub->{secret});

            my $res = $ua->post($sub->{target_url}, {
                headers => {
                    'Content-Type'     => 'application/json',
                    'X-PAGI-Signature' => $signature,
                    'X-PAGI-Event'     => $event_type,
                },
                content => $json_payload,
            });

            if ($res->{success}) {
                $dispatched_count++;
            }
        }

        return {
            status     => 'dispatched',
            event      => $payload,
            delivered  => $dispatched_count,
            total_subs => scalar(@subscribers),
        };
    }
);
```

The webhook incoming:

```perl
$app->post('/webhooks/incoming',
    summary => 'Endpoint that receives, verifies, and consumes incoming webhooks',
    handler => async sub ($c) {
        my $data      = $c->body // {};
        my $event     = $c->header('x-pagi-event')     // $c->header('X-PAGI-Event')     // 'unknown';
        my $signature = $c->header('x-pagi-signature') // $c->header('X-PAGI-Signature') // '';

        my $json_formatter = JSON::PP->new->canonical(1)->utf8(1);
        my $raw_body       = $json_formatter->encode($data);

        my $matched = 0;
        my $expected_sig = '';

        my @secrets = map { $_->{secret} } @subscribers;
        push @secrets, $SHARED_SECRET unless @secrets;

        for my $sec (@secrets) {
            my $candidate_sig = hmac_sha256_hex($raw_body, $sec);
            if (constant_time_eq($signature, $candidate_sig)) {
                $matched = 1;
                $expected_sig = $candidate_sig;
            }
        }

        my $status_code = $matched ? 200 : 401;
        my $status_msg  = $matched ? 'Verified & Accepted' : 'Signature Verification Failed';

        unless ($matched) {
            $c->status(401);
        }

        unshift @delivery_logs, {
            timestamp  => scalar(localtime),
            event      => $event,
            target     => '/webhooks/incoming',
            status     => $status_code,
            status_msg => $status_msg,
            details    => { payload => $data },
        };

        return { status => $status_msg, event => $event };
    }
);
```

And finally the logs:

```perl
$app->get('/webhooks/logs',
    summary => 'Retrieve current delivery logs',
    handler => async sub ($c) {
        return \@delivery_logs;
    }
);
```

### Demo Action

**Start the `pagi-server` server**
```bash
$ pagi-server eg/webhook_demo.pl
```

**Open the Web UI**

Navigate to [**http://127.0.0.1:5000**](http://127.0.0.1:5000) in your web browser.

<div class="container">
    <div class="row">
        <div class="col-12 col-sm mb-4 p-2 text-center">
            <img src="/images/blog/pagi-webhook-img-1.jpg" class="img-fluid">
        </div>
    </div>
</div>

**Register an Endpoint**

Keep the default values and click **Subscribe Endpoint**.

You should see this in the log section:

    [Sun Aug 23 11:45:34 2026] Event: subscriber.created (Subscriber Registered (ID: 1))
    Target: http://127.0.0.1:5000/webhooks/incoming
    {
        "secret_key": "****************",
        "subscriber_id": 1,
        "target_url": "http://127.0.0.1:5000/webhooks/incoming"
    }

**Trigger Events:**

Select an event type (e.g., `user.signup`, `order.created`, `payment.completed`) and click **Dispatch Event**.

You will instantly see verification logs appear in the feed confirming that the `HMAC` signature was computed, transmitted, and validated successfully!

On `user.signup` event trigger, we got this:

    [Sun Aug 23 11:48:25 2026] Event: user.signup (Verified & Accepted)
    Target: /webhooks/incoming
    {
        "payload": {
            "data": {
                "message": "Action user.signup successfully processed",
                "user_id": 101
            },
            "event_id": "evt_1787482100",
            "event_type": "user.signup",
            "timestamp": 1787482100
        }
    }

On `order.created` event trigger, we have this:

    [Sun Aug 23 11:51:40 2026] Event: order.created (Verified & Accepted)
    Target: /webhooks/incoming
    {
        "payload": {
            "data": {
                "message": "Action order.created successfully processed",
                "user_id": 101
            },
            "event_id": "evt_1787482295",
            "event_type": "order.created",
            "timestamp": 1787482295
        }
    }

amd finally on `payment.completed` event, we got this:

    [Sun Aug 23 11:53:09 2026] Event: payment.completed (Verified & Accepted)
    Target: /webhooks/incoming
    {
        "payload": {
            "data": {
                "message": "Action payment.completed successfully processed",
                "user_id": 101
            },
            "event_id": "evt_1787482384",
            "event_type": "payment.completed",
            "timestamp": 1787482384
        }
    }

### Key Takeaways

* **PAGI::FastAPI** makes writing modern, asynchronous Perl APIs intuitive and structured.
* **Security First:** Never trust unauthenticated webhooks, always require `HMAC SHA-256` signature headers.
* **Canonical JSON is Critical:** Always serialise `JSON` deterministically when performing cryptographic signature checks.

***
<br>

`Happy Hacking !!!`
