---
title: "Database Locking"
date: 2026-08-29T00:00:00+00:00
description: "Demo database locking in PostgreSQL."
type: post
image: images/blog/database-locking.jpg
author: Mohammad Sajid Anwar
tags: ["PostgreSQL", "Locking"]
---

#### **DISCLAIMER:** Image is generated using `ChatGPT`.
***
<br>

I have done multi-part series on **Multi-Version Concurrency Control (MVCC)** in **PostgreSQL** couple of months ago.

If you missed it then you can checkout here, if you are interested: [**Part 1**](/blog/postgresql-mvcc), [**Part 2**](/blog/postgresql-mvcc-part-2) and [**Part 3**](/blog/postgresql-mvcc-part-3)

In this post, I will take a closer look at **Locking** in **PostgreSQL** database.

## Pessimistic &nbsp; Locking

Pessimistic locking is based on the assumption that data contention will occur many times.

Therefore, it places an exclusive lock on the database record immediately after the transaction reads it, which blocks all other transactions from proceeding until that lock is lifted.

The method uses the built-in database approach to locking by means of **SQL** commands like:

```sql
    SELECT ... FOR UPDATE;
```

Other transactions, which want to read or alter this record, will not be able to do anything until the lock is released.

This method is best for the high-contention environment, where there are many conflicts, actions take a short time, and collision mistakes have a serious effect.

The technique eliminates the occurrence of **race conditions** but raises **latency** and **deadlock** levels.

## Optimistic &nbsp; Locking

Optimistic locking operates under the belief that instances of data conflict are unlikely to occur.

It permits several transactions to read and change the same record at the same time, i.e. does not lock the row of the database.

Instead, it verifies the existence of conflicting changes only when writing takes place.

It relies on the attribute of the record usually being the **version number**.

When doing the update, the query checks that the version has not been changed.

In case another transaction updates the row beforehand, the version count will not correspond, affecting **0 rows**, and application deals with this failure.

It is most effective for scenarios of **high-read** and **low-write** ratio such as long-lasting operation that makes keeping an ongoing database connection useless.

It has very good read throughput coupled with the absence of database locking-related issues, although it necessitates retry mechanism in the application in case of write conflicts.

## Setup &nbsp; Database

First we need docker configuration, `docker-compose.yml` as below:

```yaml
services:
  postgres-db:
    image: postgres:latest
    container_name: demo_postgres
    restart: always
    environment:
      POSTGRES_USER: demo_user
      POSTGRES_PASSWORD: demo_password
      POSTGRES_DB: demo_db
    ports:
      - "5434:5432"

volumes:
  pgdata:
```

Let's start the container now:

```bash
$ docker compose up -d
[+] up 2/2
 ✔ Network optimistic-locking_default Created                           0.0s
 ✔ Container demo_postgres            Started                           0.3s
$
```

Check the container status:

```bash
$ docker ps
CONTAINER ID   IMAGE             COMMAND                  CREATED         STATUS         PORTS                                         NAMES
52b8ce5d60de   postgres:latest   "docker-entrypoint.s…"   6 seconds ago   Up 5 seconds   0.0.0.0:5434->5432/tcp, [::]:5434->5432/tcp   demo_postgres
```

Let's get the database connection first:

```bash
$ docker exec -it demo_postgres psql -U demo_user -d demo_db
psql (18.4 (Debian 18.4-1.pgdg13+1))
Type "help" for help.

demo_db=#
```

We will create the sample table with data:

```sql
demo_db=# CREATE TABLE inventory (
    id        INT  PRIMARY KEY,
    item_name TEXT NOT NULL,
    stock     INT  NOT NULL,
    version   INT  NOT NULL DEFAULT 1
);
CREATE TABLE
demo_db=# INSERT INTO inventory (id, item_name, stock, version) VALUES (1, 'Laptop', 10, 1);
INSERT 0 1
demo_db=#
```

## Demo &nbsp; Pessimistic &nbsp; Locking

For this we need to create two sessions.

Below is the **Session 1**:

```bash
$ docker exec -it demo_postgres psql -U demo_user -d demo_db -v PROMPT1='Session 1> '
psql (18.4 (Debian 18.4-1.pgdg13+1))
Type "help" for help.

Session 1>
```

And then the **Session 2** as below:

```bash
$ docker exec -it demo_postgres psql -U demo_user -d demo_db -v PROMPT1='Session 2> '
psql (18.4 (Debian 18.4-1.pgdg13+1))
Type "help" for help.

Session 2>
```

Now that we have two sessions open, we will start with **Session 1** first.

```sql
Session 1> BEGIN;
BEGIN
Session 1> SELECT * FROM inventory WHERE id = 1 FOR UPDATE;
 id | item_name | stock | version
----+-----------+-------+---------
  1 | Laptop    |    10 |       1
(1 row)
```

In **Session 2**, we will start another transaction as below:

```sql
Session 2> BEGIN;
BEGIN
Session 2> SELECT * FROM inventory WHERE id = 1 FOR UPDATE;
```

If you noticed, we don't get the result in **Session 2** as the row is locked in **Session 1**.

Let's update the row and commit the changes in **Session 1**.

```sql
Session 1> UPDATE inventory SET stock = stock - 1 WHERE id = 1;
UPDATE 1
Session 1> COMMIT;
COMMIT
```

As soon as we commit the changes in **Session 1**, you see the updated row in **Session 2** as below:

```sql
Session 2> SELECT * FROM inventory WHERE id = 1 FOR UPDATE;
 id | item_name | stock | version
----+-----------+-------+---------
  1 | Laptop    |     9 |       1
(1 row)
```

Now, let's update the row and commit the changes in **Session 2** as well:

```sql
Session 2> UPDATE inventory SET stock = stock - 1 WHERE id = 1;
UPDATE 1
Session 2> COMMIT;
COMMIT
```

Finally we check the row now.

```sql
Session 2> SELECT * FROM inventory;
 id | item_name | stock | version
----+-----------+-------+---------
  1 | Laptop    |     8 |       1
(1 row)
```

## Demo &nbsp; Optimistic &nbsp; Locking

Let's update the row in **Session 1** first.

```sql
Session 1> SELECT * FROM inventory WHERE id = 1;
 id | item_name | stock | version
----+-----------+-------+---------
  1 | Laptop    |     8 |       1
(1 row)

Session 1> UPDATE inventory
   SET stock   = stock - 1,
       version = version + 1
 WHERE id = 1
   AND version = 1;
UPDATE 1
```

Now in **Session 2**, let's try to update the same row.

```sql
Session 2> UPDATE inventory
   SET stock   = stock - 1,
       version = version + 1
 WHERE id = 1
   AND version = 1;
UPDATE 0
```

Because the query returned **UPDATE 0**, the application detects that another transaction modified the row first.

**Session 2**'s application code can now roll back, re-fetch the latest data (**version = 2**), and re-apply its logic.

***
<br>

`Happy Hacking !!!`
