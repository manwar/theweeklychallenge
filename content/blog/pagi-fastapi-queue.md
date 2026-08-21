---
title: "Message Queue using PAGI::FastAPI"
date: 2026-08-21T00:00:00+00:00
description: "Message Queue using PAGI::FastAPI."
type: post
image: images/blog/pagi-fastapi-queue.jpg
author: Mohammad Sajid Anwar
tags: ["Perl", "PAGI", "FastAPI", "Queue"]
---

#### **DISCLAIMER:** Image is generated using `ChatGPT`.
***
<br>

The latest release of [**PAGI::FastAPI**](https://metacpan.org/dist/PAGI-FastAPI) is `v1.2.0`. Having said, in the release `v1.1.0`, we added the support for `Message Queue` facade.

The distribution shipped with the simple memory-based message queue facade. There is even a handy demo app, i.e. [**eg/memory_queue_demo.pl**](https://github.com/manwar/PAGI-FastAPI/blob/master/eg/memory_queue_demo.pl).

Let's take you through the app source code:

First prepare the app and queue:

```perl
use v5.38;
use PAGI::FastAPI;
use PAGI::FastAPI::Queue;
use Future::AsyncAwait;

my $app = PAGI::FastAPI->new(
    title       => 'PAGI Queue Task Processing Service',
    version     => '1.0.0',
);

my $queue = PAGI::FastAPI::Queue->new( driver => 'Memory' );
```

Now define the basic app routes:

While working on this post, I found a bug in adding new task. The `job_id` was null.

I quickly patched the demo app and released `PAGI::FastAPI v1.2.5`.

**Post Task**

```perl
$app->post('/tasks',
    summary => 'Enqueue a background task',
    handler => async sub ($c) {
        my $item = $c->query_params->{item} // 'default_item';

        my $job_data = {
            task => 'process_payload',
            data => $item,
        };

        my $job_id = await $queue->push('default', $job_data);
        $job_data->{id} = $job_id;

        return {
            status => 'queued',
            job_id => $job_id,
        };
    }
);
```

**Process Task**

```perl
$app->post('/tasks/process',
    summary => 'Process the next queued task',
    handler => async sub ($c) {
        my $job = await $queue->pop('default');

        unless ($job) {
            $c->status(404);
            return { error => 'No tasks in queue' };
        }

        return {
            status => 'completed',
            job_id => $job->{id},
            result => "Processed " . $job->{data},
        };
    }
);
```

**Task Status**

```perl
$app->get('/tasks/status',
    summary => 'Get current queue status',
    handler => async sub ($c) {
        my $count = await $queue->size('default');

        return {
            pending_count => $count,
        };
    }
);
```

### ACTION TIME

**Start Server**

```bash
$ pagi-server eg/queue_demo.pl
```

**Submit Task**

```bash
$ curl -X POST "http://127.0.0.1:5000/tasks?item=report_job_1"
{"status":"queued","job_id":1}
```

**Task Status**

```bash
$ curl "http://127.0.0.1:5000/tasks/status"
{"pending_count":1}
```

**Process Task**

```bash
$ curl -X POST "http://127.0.0.1:5000/tasks/process"
{"result":"Processed default_item","job_id":1,"status":"completed"}
```

Now check the status again:

```bash
$ curl "http://127.0.0.1:5000/tasks/status"
{"pending_count":0}
```

Although, it gives you a quick introduction but it is not suitable for serious message queue.

If you are building production grade message queue, I would highly recommend this companion package: [**PAGI::FastAPI::Queue::Driver::Redis**](https://metacpan.org/dist/PAGI-FastAPI-Queue-Driver-Redis).

Luckily the distribution shipped with a demo app: [**eg/redis_queue_demo.pl**](https://github.com/manwar/PAGI-FastAPI-Queue-Driver-Redis/blob/master/eg/redis_queue_demo.pl)

We will create `app` and `queue` as before first:

```perl
use v5.38;
use PAGI::FastAPI;
use PAGI::FastAPI::Queue;
use Future::AsyncAwait;

my $app = PAGI::FastAPI->new(
    title   => 'PAGI Redis Queue Demo',
    version => '1.1.0',
);

my $queue = PAGI::FastAPI::Queue->new(
    driver  => 'PAGI::FastAPI::Queue::Driver::Redis',
    options => {
        host   => '127.0.0.1',
        port   => 6379,
        prefix => 'myapp:queue:',
    },
);

my $job_sequence = 0;
```

**Post Task**

```perl
$app->post('/tasks',
    summary => 'Enqueue a task to Redis',
    handler => async sub ($c) {
        my $item   = $c->query_params->{item} // 'default_item';
        my $job_id = "job_" . ++$job_sequence . "_" . time();

        await $queue->push('default', {
            job_id => $job_id,
            task   => 'process_payload',
            data   => $item,
        });

        return {
            status => 'queued',
            job_id => $job_id,
            item   => $item,
        };
    }
);
```

**Process Task**

```perl
$app->post('/tasks/process',
    summary => 'Process next task from Redis',
    handler => async sub ($c) {
        my $job = await $queue->pop('default');

        unless ($job) {
            $c->status(404);
            return { error => 'No tasks in Redis queue' };
        }

        return {
            status => 'completed',
            job_id => $job->{job_id},
            result => "Processed " . $job->{data},
        };
    }
);
```

**Task Status**

```perl
$app->get('/tasks/status',
    summary => 'Get Redis queue status',
    handler => async sub ($c) {
        my $count = await $queue->size('default');

        return {
            pending_count => $count,
        };
    }
);
```

For this demo, we would also need a redis work.

Here is the [**eg/redis_worker.pl**](https://github.com/manwar/PAGI-FastAPI-Queue-Driver-Redis/blob/master/eg/redis_worker.pl)

```perl
use v5.38;
use PAGI::FastAPI::Queue;
use PAGI::FastAPI::Queue::Driver::Redis;
use Future::AsyncAwait;
use Future::IO;

my $worker_id = $ARGV[0] // $$;

my $queue = PAGI::FastAPI::Queue->new(
    driver  => 'PAGI::FastAPI::Queue::Driver::Redis',
    options => {
        host   => '127.0.0.1',
        port   => 6379,
        prefix => 'myapp:queue:',
    },
);

say "Worker [$worker_id] started. Waiting for jobs...";

while (1) {
    my $job = $queue->pop('default')->get;

    if ($job) {
        my $id   = $job->{job_id} // 'N/A';
        my $data = $job->{data}   // 'N/A';

        say "Worker [$worker_id] START processing job ID: $id ($data)";
        Future::IO->sleep(1)->get;
        say "Worker [$worker_id] FINISHED job ID: $id";
    } else {
        Future::IO->sleep(0.5)->get;
    }
}
```

### ACTION TIME

Before we start the server, we need `Redis` server first.

Luckily, we have docker compose config file, [**docker_compose.yml**](https://github.com/manwar/PAGI-FastAPI-Queue-Driver-Redis/blob/master/docker-compose.yml).

Let's start the `Redis` in a docker container:

```bash
$ docker compose up -d
```

**Start Server**

Now time to start the message queue server:

```bash
$ pagi-server eg/redis_queue_demo.pl
```

**Submit Task**

In another terminal, we will push `10 tasks`:

```bash
$ for i in {1..10}; \
     do \
     curl -s -X POST "http://127.0.0.1:5000/tasks?item=job_$i" > /dev/null; \
     done
```

**Task Status**

```bash
$ curl http://127.0.0.1:5000/tasks/status
{"pending_count":10}
```

**Process Task**

To process the submitted tasks, we will use two redis worker in separate terminals at the same time, so both workers get equal opportunity to process the tasks:

```bash
$ perl eg/redis_worker.pl "A"
Worker [A] started. Waiting for jobs...
Worker [A] START processing job ID: job_1_1787353306 (default_item)
Worker [A] FINISHED job ID: job_1_1787353306
Worker [A] START processing job ID: job_2_1787353306 (default_item)
Worker [A] FINISHED job ID: job_2_1787353306
Worker [A] START processing job ID: job_3_1787353306 (default_item)
Worker [A] FINISHED job ID: job_3_1787353306
Worker [A] START processing job ID: job_5_1787353306 (default_item)
Worker [A] FINISHED job ID: job_5_1787353306
Worker [A] START processing job ID: job_7_1787353306 (default_item)
Worker [A] FINISHED job ID: job_7_1787353306
Worker [A] START processing job ID: job_9_1787353306 (default_item)
Worker [A] FINISHED job ID: job_9_1787353306
```

```bash
$ perl eg/redis_worker.pl "B"
Worker [B] started. Waiting for jobs...
Worker [B] START processing job ID: job_4_1787353306 (default_item)
Worker [B] FINISHED job ID: job_4_1787353306
Worker [B] START processing job ID: job_6_1787353306 (default_item)
Worker [B] FINISHED job ID: job_6_1787353306
Worker [B] START processing job ID: job_8_1787353306 (default_item)
Worker [B] FINISHED job ID: job_8_1787353306
Worker [B] START processing job ID: job_10_1787353306 (default_item)
Worker [B] FINISHED job ID: job_10_1787353306
```

Finally check the status:

```bash
$ curl http://127.0.0.1:5000/tasks/status
{"pending_count":0}
```

***
<br>

`Happy Hacking !!!`
