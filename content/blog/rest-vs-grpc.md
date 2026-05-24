---
title: "REST vs gRPC"
date: 2026-05-23T00:00:00+00:00
description: "Difference between REST and gRPC architecture."
type: post
image: images/blog/rest-vs-grpc.jpg
author: Mohammad Sajid Anwar
tags: ["perl", "REST", "gRPC"]
---

#### **DISCLAIMER:** Image is generated using `ChatGPT`.
***
<br>

There was a time when I was working on a legacy, very large `monolithic` system. Then there was a change in policy, we decided to create `microservice` heavily using `Docker`. That was the first time, I was formally introduced to term `microservice`. This was about `10 years` ago, time just flies.

Everytime I need `Representational State Transfer (REST)` solution, I go with `Dancer2` framework. My [**personal website**](https://manwar.org) is a single page `Dancer2` application with `REST` interface. Five years ago, I created [**GitHub respository**](https://github.com/manwar/Dancer2-REST-API) documenting all the `REST` actions.

To a layman, `REST` treats everything as a resource that you fetch or change using standard web verbs.

OK, then what is `gRPC`?

In one line: `gRPC` treats everything as an action. It makes a remote server feel like it's just a local function running right inside your own code.

`REST` is an architectural style, not a rigid protocol. It can actually run on any version of `HTTP`.

The vast majority of `REST APIs` today run on `HTTP/1.1`. This version introduced `"keep-alive"` connections so your app doesn't have to constantly open and close connections for every single `JSON` request. You can absolutely serve a `REST API` over `HTTP/2` too.

Whereas `gRPC` strictly requires `HTTP/2` as its transport layer.

In summary:

> `REST` is like a letter. You can sent it via an old truck (`HTTP/1.1`) or high-speed bullet train (`HTTP/2`).

> `gRPC` is like a maglev train capsule. It was designed with magnets built into the bottom. It physically cannot run on old train tracks (`HTTP/1.1`). It requires special maglev track (`HTTP/2`).

I must confess, `gRPC` is a new tech for me and I don't claim to know everything about it. I am still learning and whatever little I know so far is what I found on web. My first instinct was to see if there is any `Perl` client for `gRPC` on `CPAN`.

A quick search didn't give me anything, so I decided to claim the namespace `gRPC::Client`. I have a working draft ready to be shipped. I am holding it for now, just to have well documented pod.

The `gRPC` project was open-sourced in `2015` by `Google`. I thought `g` in `gRPC` stands for `Google` where as `RPC` is just standard `Remote Procedure Call`. I looked up online and found [**this page**](https://github.com/grpc/grpc/blob/master/doc/g_stands_for.md) that has documented the meaning of `g` historically.

    v1.12: g stands for glorious
    v1.25: g stands for game
    v1.39: g stands for goofy
    v1.82: g stands for glacier

With `REST`, you can look at data flowing back and forth. Clients and servers don't need to know everything about each other's code structure.

With `gRPC`, instead of heavy, text-based `JSON`, it uses `Protocol Buffers (protobuf)`. It packs data into a highly compressed binary format. Because it uses less bandwidth and requires less `CPU` to pack/unpack, it is significantly faster than `REST`.

Back to the original topic, let me show you visual example.

Imagine you want to send user data like this:

```perl
    {
        "id": 1024,
        "name": "Alice",
        "is_active": true
    }
```

Before I share any code, we need `CPAN` module [**Google::ProtocolBuffers::Dynamic**](https://metacpan.org/dist/Google-ProtocolBuffers-Dynamic).

Installing the module wasn't straight forward unfortunately. If you also struggle then please follow these steps.

```bash
$ sudo apt update
$ sudo apt install -y build-essential cmake libprotobuf-dev libprotoc-dev protobuf-compiler
```

Then install the module now:

```bash
$ cpanm -vS Google::ProtocolBuffers::Dynamic
```

We will first create script using `REST` payload as below:

**Filename:** `using-rest.pl`

```perl
#!/usr/bin/env perl

use strict;
use warnings;
use JSON::MaybeXS;

# 1. User data
my $user = {
    id        => 1024,
    name      => "Alice",
    is_active => 1,
};

# 2. Serialise to JSON
my $json_encoder = JSON::MaybeXS->new(utf8 => 1, canonical => 1);
my $rest_payload = $json_encoder->encode($user);

print "REST (JSON)\n";
print "Payload: $rest_payload\n";
print "Size: " . length($rest_payload) . " bytes\n\n";

# 3. Deserialise
my $decoded_user = $json_encoder->decode($rest_payload);
print "Decoded User Name: " . $decoded_user->{name} . "\n";
```

Now for `gRPC` payload as below:

**Filename:** `using-grpc.pl`

```perl
#!/usr/bin/env perl

use strict;
use warnings;
use Google::ProtocolBuffers::Dynamic;

# 1. Define the strict gRPC schema
my $proto_interface = <<'EOF';
syntax = "proto3";

message UserRequest {
    int32 id = 1;
    string name = 2;
    bool is_active = 3;
}
EOF

# 2. Compile and map the schema dynamically
my $dynamic = Google::ProtocolBuffers::Dynamic->new;
$dynamic->load_string("user.proto", $proto_interface);

$dynamic->map({
    package => '',
    prefix  => 'MyAPI',
    options => {},
});

$dynamic->resolve_references();

# 3. User data matching the schema
my $user_data = {
    id        => 1024,
    name      => "Alice",
    is_active => 1,
};

# 4. Serialise to Binary
my $grpc_payload = MyAPI::UserRequest->encode($user_data);

print "gRPC (Protocol Buffers)\n";
print "Payload (Hex): " . unpack("H*", $grpc_payload) . "\n";
print "Size: " . length($grpc_payload) . " bytes\n\n";

# 5. Deserialise
my $decoded_grpc = MyAPI::UserRequest->decode($grpc_payload);
print "Decoded User Name: " . $decoded_grpc->{name} . "\n";
```

Time to test the action.

```bash
$ perl using-rest.pl
REST (JSON)
Payload: {"id":1024,"is_active":1,"name":"Alice"}
Size: 40 bytes

Decoded User Name: Alice
```

```bash
$ perl using-grpc.pl
gRPC (Protocol Buffers)
Payload (Hex): 0880081205416c6963651801
Size: 12 bytes

Decoded User Name: Alice
```

### The Takeaway
***

<br>

The `REST` Payload (`41 bytes`)

> Every time your `Perl` app makes a `REST` call, it wastes bandwidth resending the strings `"id"`, `"is_active"`, and `"name"`. It is highly readable but heavy.

The `gRPC` Payload (`12 bytes`)

> `gRPC` sends raw binary (`08800812...`). The field names are gone, compressed down to their numeric positions. It cuts network traffic by nearly `70%` for the exact same information, allowing a microservice to parse it significantly faster.










***

<br>

`Happy Hacking !!!`
