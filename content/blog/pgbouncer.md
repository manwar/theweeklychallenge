---
title: "PgBouncer - PostgreSQL"
date: 2026-07-23T00:00:00+00:00
description: "Implementation of IoC using Perl."
type: post
image: images/blog/pgbouncer.jpg
author: Mohammad Sajid Anwar
tags: ["PgBouncer", "PostgreSQL"]
---

#### **DISCLAIMER:** Image is generated using `ChatGPT`.
***
<br>

`PgBouncer` is simply a connection management tool for `PostgreSQL`.

In a way, it functions like an efficient bartender in a busy bar. Instead of giving every client the right to have a direct connection to the database, `PgBouncer` acts as an intermediary and controls a small group of connections among many clients.

### Why use PgBouncer?

`PostgreSQL` connects clients by creating a new backend each time a client connects, which is great but costly.

If your application grows and seeks to create dozens of simultaneous connections, your database may not have enough memory to manage all the connection overhead instead of actually processing queries.

`PgBouncer` solves the connection problem by making the application believe that it is connected to the database directly while the actual connections are managed through a small pool of optimally designed connections.

### The Three Pooling Modes

Depending on the needs of your application, `PgBouncer` can recycle connections at three different levels:

1. Transaction Pooling

> A database connection is granted to a client only for the length of a single transaction. When the transaction is over (`COMMIT` or `ROLLBACK`), the database connection is immediately released to another client.

2. Session Pooling

> `PgBouncer` gives the client a connection for the time period during which he or she remains connected. Once the client disconnects, the connection is returned to the pool.

3. Statement Pooling

> The connection is assigned for just one `SQL` statement. This type of pooling is rarely used except for specific read intensive analytical tasks as it makes it impossible to process transactions.

### Step 1: The Docker Setup

Create a file named `docker-compose.yml` and paste the following configuration. This spins up a `Postgres database`, limited to a tiny max connection limit of 10 for demonstration purposes and a `PgBouncer` instance in front of it.

```yaml
version: '3.8'

services:
  postgres:
    image: postgres:15
    container_name: pgbouncer-postgres
    environment:
      POSTGRES_PASSWORD: supersecretpassword
      POSTGRES_USER: myuser
      POSTGRES_DB: mydb
      POSTGRES_HOST_AUTH_METHOD: trust
    command: ["postgres", "-c", "max_connections=10"]
    ports:
      - "5432:5432"

  pgbouncer:
    image: edoburu/pgbouncer:latest
    container_name: pgbouncer
    environment:
      - DB_HOST=postgres
      - DB_USER=myuser
      - DB_PASSWORD=supersecretpassword
      - DB_NAME=mydb
      - POOL_MODE=transaction
      - AUTH_TYPE=trust
      - MAX_CLIENT_CONN=100
      - DEFAULT_POOL_SIZE=5
    ports:
      - "6432:6432"
    depends_on:
      - postgres
```

**Start the container:**

```bash
$ docker compose up -d
```

**Initialise `pgbench` tables:**

```bash
$ docker exec -it pgbouncer-postgres pgbench -h localhost -U myuser -d mydb -i
```

### Step 2: Watch Postgres Fail

We will use `pgbench` to simulate `25` concurrent clients trying to talk to `Postgres` at the exact same time.

Remember, we capped `Postgres` at `max_connections=10`.

**Let's attack Postgres directly:**

```bash
$ docker exec -it pgbouncer-postgres pgbench -h localhost -U myuser -d mydb -c 25 -t 100
```

It will instantly crash with an error looking like this:

> FATAL: sorry, too many clients already

`Postgres` ran out of worker processes and flat-out rejected the extra clients.

### Step 3: Watch PgBouncer

Now, let's route the exact same test, `25` concurrent clients, through `PgBouncer`.

`PgBouncer` will take those `25` incoming requests, queue them up, and funnel them through its small pool of actual database connections.

```bash
$ docker exec -it pgbouncer-postgres pgbench -h pgbouncer -p 5432 -U myuser -d mydb -c 25 -t 100
```

The benchmark completes successfully!

Even though `Postgres` only has a handful of actual connections open, `PgBouncer` seamlessly juggled the `25` clients at the transaction level so quickly that the clients didn't even notice they were sharing.

***
<br>

`Happy Hacking !!!`
