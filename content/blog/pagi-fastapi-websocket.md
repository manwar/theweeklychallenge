---
title: "PAGI::FastAPI + WebSocket"
date: 2026-08-08T00:00:00+00:00
description: "Using WebSocket with PAGI::FastAPI."
type: post
image: images/blog/pagi-fastapi-websocket.jpg
author: Mohammad Sajid Anwar
tags: ["Perl", "PAGI", "FastAPI", "WebSocket"]
---

#### **DISCLAIMER:** Image is generated using `ChatGPT`.
***
<br>

For last week or so, I have been playing with [**PAGI::FastAPI**](https://metacpan.org/dist/PAGI-FastAPI). This is my latest creation also my first attempt in creating async micro web framework.

I have been, [**Dancer2**](https://metacpan.org/pod/Dancer2) fan all my life. It has done all I wanted without any extra effort.

While going through my old notes, I came across Python's [**FastAPI**](https://fastapi.tiangolo.com). I decided to port it to `Perl`. Using [**PAGI**](https://metacpan.org/pod/PAGI), the job was half done already.

I released the first draft on `Aug 3, 2026`. After the first release, I started looking ways to integrate [**DBIx::Class::Async**](https://metacpan.org/dist/DBIx-Class-Async). It was obvious choice when creating application with database. It helped me in integration as I am the creator of `DBIx::Class::Async`.

The best part was, no code change was needed in `PAGI::FastAPI`. I quickly had a demo application up and running. Just to record the process, I created a [**blog post**](/blog/pagi-fastapi).

**What next?**

In `Feb, 2026`, I created [**blog post**](/blog/mojo-with-websocket) about creating chat server using websocket. When I shared the post on social media, I got suggestion to re-create using `Redis` and `PostgreSQL`. At that point in time, I decided to create [**GitHub repository**](https://github.com/manwar/Mojo-with-WebSocket) so that I can keep track of different implementations.

Having done that, I didn't stop, I then re-create the chat server using `PAGI` and `Thunderhorse`. You can find working codes in the repository.

I started exploring ways to add the support of `WebSocket` to the `PAGI::FastAPI`. The idea was to create chat server using `PAGI::FastAPI` after that.

I really had to fight hard but eventually got what I wanted and released `v0.0.6` with websocket support. I released the distribution with simple [**example using websocket**](https://github.com/manwar/PAGI-FastAPI/blob/master/eg/websocket_app.pl).

You can try sample chat:

```bash
$ pagi-server websocket_app.pl
```

In the browser, visit [**http://localhost:5000**](http://localhost:5000) and start chatting.

My end goal was to re-create the original chat server using `PAGI::FastAPI`. Looking at the [**GitHub repository**](https://github.com/manwar/Mojo-with-WebSocket), I had to start the `PostgreSQL` database in docker container as other implementations also used the same.

```bash
$ docker compose up -d
```

Finally, I have a [**working example**](https://github.com/manwar/Mojo-with-WebSocket/blob/master/chat-server-v6.pl) using `PAGI::FastAPI`.

Let me share the excerpts:

**Skeleton**

```perl
my $app = PAGI::FastAPI->new(
    title   => 'PAGI::FastAPI Chat Server',
    version => '1.0.0',
);
```

**Setup Lifespan Protocol**

```perl
$app->on_startup(async sub {
    print "Server starting up...\n";

    await pg_query(q{
        CREATE TABLE IF NOT EXISTS chat_users (
            session_id TEXT PRIMARY KEY,
            username   TEXT NOT NULL,
            last_seen  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    });

    $cleanup_timer = IO::Async::Timer::Periodic->new(
        interval => 60,
        on_tick  => sub {
            (async sub {
                await pg_query(q{
                    DELETE FROM chat_users
                    WHERE last_seen < NOW() - INTERVAL '2 minutes'
                });
            })->()->else(sub { Future->done })->retain;
        }
    );
    $loop->add($cleanup_timer);
    $cleanup_timer->start;

    # Cross-process fan-out: other server processes publish here too, so a
    # message sent to the server on :3000 reaches clients connected to :3001.
    $pubsub->listen('chat_messages' => sub {
        my ($pubsub, $payload) = @_;

        my $data = ref($payload) eq 'HASH'
            ? $payload
            : eval { decode_json($payload) };
        return unless $data;

        my $from_process = delete $data->{_process_id};
        return if defined $from_process && $from_process eq $process_id;

        if ($data->{type} eq 'message') {
            push @history, $data;
            shift @history if @history > 10;
        }

        foreach my $client (values %$clients) {
            eval { $client->{ws}->send_json($data) };
        }
    });
});
```

```perl
$app->on_shutdown(async sub {
    print "Server shutting down...\n";

    $cleanup_timer->stop if $cleanup_timer;
    $loop->remove($cleanup_timer) if $cleanup_timer;
    eval { $pubsub->unlisten('chat_messages') };
    eval { $pg->db->disconnect };
});
```

Having done that, finally looking at the core:

```perl
$app->websocket('/chat',
    handler => async sub ($ws, $deps) {
        await $ws->accept;

        my $id = "$ws";
        $clients->{$id} = { ws => $ws, name => 'Anonymous' };

        # Heartbeat timer (30 seconds)
        my $heartbeat_timer = IO::Async::Timer::Periodic->new(
            interval => 30,
            on_tick  => sub {
                return unless $clients->{$id};
                # on_tick is a plain (non-async) callback, so we can't await
                # here directly, fire the query and swallow any failure.
                (async sub {
                    await pg_query(q{
                        UPDATE chat_users
                        SET last_seen = NOW()
                        WHERE session_id = ?
                    }, $id);
                })->()->else(sub { Future->done })->retain;
            }
        );
        $loop->add($heartbeat_timer);
        $heartbeat_timer->start;

        # Handle incoming messages
        while (1) {
            my $msg_text = await $ws->receive_text;
            last unless defined $msg_text;

            my $data = eval { decode_json($msg_text) };
            next unless $data;

            if ($data->{type} eq 'typing') {
                await broadcast({
                    type     => 'typing',
                    user     => $clients->{$id}{name},
                    isTyping => $data->{isTyping} ? 1 : 0
                }, $id);
            }
            elsif ($data->{type} eq 'join') {
                $clients->{$id}{name} = $data->{name};

                await pg_query(q{
                    INSERT INTO chat_users (session_id, username, last_seen)
                    VALUES (?, ?, NOW())
                    ON CONFLICT (session_id)
                    DO UPDATE SET username  = EXCLUDED.username,
                                  last_seen = NOW()
                }, $id, $data->{name});

                # Send history to new user
                foreach my $old_msg (@history) {
                    await $ws->send_text(encode_json($old_msg));
                }

                await broadcast({
                    type => 'system',
                    text => "$data->{name} joined"
                });
                await send_user_list();
            }
            elsif ($data->{type} eq 'message') {
                my (undef, $min, $hour) = localtime();
                my $timestamp = sprintf("%02d:%02d", $hour, $min);
                my $msg_out = {
                    type      => 'message',
                    user      => $clients->{$id}{name},
                    text      => $data->{text},
                    timestamp => $timestamp
                };

                push @history, $msg_out;
                shift @history if @history > 10;

                await broadcast($msg_out);
            }
        }

        # Cleanup on disconnect
        my $name = $clients->{$id}{name};
        delete $clients->{$id};
        $heartbeat_timer->stop;
        $loop->remove($heartbeat_timer);
        await pg_query(q{DELETE FROM chat_users WHERE session_id = ?}, $id);
        await broadcast({ type => 'system', text => "$name left" });
        await send_user_list();
    }
);
```

Now run the complete chat server:

```perl
$ IO_ASYNC_LOOP=EV pagi-server chat-server-v6.pl
Future::IO configured for IO::Async
PAGI development mode - Lint middleware enabled
Server starting up...
access_log is a terminal; this may impact performance. Consider redirecting to a file or setting access_log => undef for benchmarks.
PAGI Server listening on http://127.0.0.1:5000/ (loop: EV, max_conn: 1000, http2: not installed, tls: not installed, future_xs: available)
```

Open the browser and visit [**http://localhost:5000**](http://localhost:5000)

<div class="container">
    <div class="row">
        <div class="col-12 col-sm mb-4 p-2 text-center">
            <img src="/images/blog/chat-using-websocket.jpg" class="img-fluid">
        </div>
    </div>
</div>

***
<br>

`Happy Hacking !!!`
