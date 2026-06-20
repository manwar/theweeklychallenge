---
title: "PostgreSQL MVCC - Part 3"
date: 2026-06-20T00:00:00+00:00
description: "Explicit locking in transaction."
type: post
image: images/blog/postgresql-mvcc-part-3.jpg
author: Mohammad Sajid Anwar
tags: ["PostgreSQL", "MVCC"]
---

#### **DISCLAIMER:** Image is generated using `ChatGPT`.
***
<br>

Having done two parts, [**Part 1**](/blog/postgresql-mvcc) and [**Part 2**](/blog/postgresql-mvcc-part-2), of the series on `PostgreSQL MVCC`, here is the final post of the series.

In this post, I will talk about `Row Locking` and how we can use `xmin`/`xmax` to decode the process.

1. [**Implicit Row Lock**](#implicit-row-lock)
2. [**Explicit Exclusive Lock**](#explicit-exclusive-lock)
3. [**Explicit Shared Lock**](#explicit-shared-lock)

Just like in other posts, we will use the `PostgreSQL` database running inside the `Docker` container. Also we will use the same table `mvcc_demo`.

We need two sessions, `Session A` and `Session B` for demo purpose.

### Session A
***

```bash
$ docker exec -it mvcc_test psql -U postgres
psql (18.4 (Debian 18.4-1.pgdg13+1))
Type "help" for help.

postgres=#
```

### Session B
***

```bash
$ docker exec -it mvcc_test psql -U postgres
psql (18.4 (Debian 18.4-1.pgdg13+1))
Type "help" for help.

postgres=#
```

Now let's setup the demo table and extension as below in `Session A`:

```bash
postgreq=# CREATE EXTENSION IF NOT EXISTS pageinspect;
CREATE EXTENSION
postgres=# CREATE TABLE mvcc_demo (id INT PRIMARY KEY, balance INT);
CREATE TABLE
postgres=# INSERT INTO mvcc_demo (id, balance) VALUES (1, 100);
INSERT 0 1
```

Right after your insert, let's see what `PostgreSQL` stored in `Session A`:

```bash
postgres=*# SELECT xmin, xmax, id, balance FROM mvcc_demo;
 xmin | xmax | id | balance
------+------+----+---------
  831 |    0 |  1 |     100
(1 row)
```

> `xmin = 831`: The row was born in transaction `831`.

> `xmax = 0`  : The row is fresh and completely unlocked.

Before we proceed, let's confirm, we have only one version of the row in the heap page.

```bash
postgres=# SELECT lp, t_xmin, t_xmax, t_ctid FROM heap_page_items(get_raw_page('mvcc_demo', 0));
 lp | t_xmin | t_xmax | t_ctid
----+--------+--------+--------
  1 |    831 |      0 | (0,1)
(1 row)
```

> `t_ctid = (0,1)`: Meaning disk block `0` and line pointer `(lp = 1)`.

`t_ctid` value is represented as a pair of integers, `(page number, line pointer index)`.

### Implicit Row Lock
***

When you update a row, `PostgreSQL` implicitly locks it so no other transaction can modify it simultaneously.

In `Session A`, let's start a new transaction and update the balance.

```bash
postgres=# BEGIN;
BEGIN
postgres=*# UPDATE mvcc_demo SET balance = 150 WHERE id = 1;
UPDATE 1
```

Let's check what we see in `Session B`:

```bash
postgres=# SELECT xmin, xmax, id, balance FROM mvcc_demo;
 xmin | xmax | id | balance
------+------+----+---------
  831 |  832 |  1 |     100
(1 row)
```

So what has changed?

We now have `xmax = 832` for `id = 1`.

What does that mean?

It means, `Session A`, created a new transaction `(id = 832)` and assigned to `xmax` so no other transaction can touch this row until we `COMMIT` or `ROLLBACK` in `Session A`.

Do you remember, `UPDATE` is internally treated as `DELETE + INSERT`?

So we must have `2 versions` of this row.

```bash
postgres=# SELECT lp, t_xmin, t_xmax, t_ctid FROM heap_page_items(get_raw_page('mvcc_demo', 0));
 lp | t_xmin | t_xmax | t_ctid
----+--------+--------+--------
  1 |    831 |    832 | (0,2)
  2 |    832 |      0 | (0,2)
(2 rows)
```

Here `lp = 1`, is the `DELETE` and `lp = 2` is the `INSERT`. The important bit is, transaction `(id = 832)`, lock this row.

Let's end the transaction in `Session A` now:

```bash
postgres=*# COMMIT;
COMMIT
```

We will check the row in `Session B` now:

```bash
postgres=# SELECT xmin, xmax, id, balance FROM mvcc_demo;
 xmin | xmax | id | balance
------+------+----+---------
  832 |    0 |  1 |     150
(1 row)
```

If you remember, earlier we had, `(xmin = 831, xmax = 832)` and after completing the transaction, we have `(xmin = 832, xmax = 0)`.

> `xmin = 832`, means row created by transaction `(id = 832)`.

> `xmax = 0`, means it is active and unlocked row.

### Explicit Exclusive Lock
***

Sometimes you want to lock a row to prevent modifications, but you aren't ready to change the data yet.

In `Session A`, let's lock the row explicitly.

```bash
postgres=# BEGIN;
BEGIN
postgres=*# SELECT id, balance FROM mvcc_demo WHERE id = 1 FOR UPDATE;
 id | balance
----+---------
  1 |     150
(1 row)
```

In `Session B`, we will inspect the row:

```bash
postgres=# SELECT xmin, xmax, id, balance FROM mvcc_demo;
 xmin | xmax | id | balance
------+------+----+---------
  832 |  833 |  1 |     150
(1 row)
```

We now have `xmax = 833`, the transaction where we take exclusive lock by `SELECT .... FOR UPDATE` statement in `Session A`.

Let's release the lock in `Session A` and then check what we have.

```bash
postgres=*# ROLLBACK;
ROLLBACK
postgres=# SELECT xmin, xmax, id, balance FROM mvcc_demo;
 xmin | xmax | id | balance
------+------+----+---------
  832 |  833 |  1 |     150
(1 row)
```

Why we still have `xmax = 833`, although we released the lock?

To get, `xmax = 0`, we need to vacuum the table first.

```bash
postgres=# VACUUM mvcc_demo;
VACUUM
postgres=# SELECT xmin, xmax, id, balance FROM mvcc_demo;
 xmin | xmax | id | balance
------+------+----+---------
  832 |    0 |  1 |     150
(1 row)
```

### Explicit Shared Lock
***

What if you want to lock a row so nobody can change it, but you don't mind if other transactions read or share the lock?

Let's start a new transaction in `Session A` as below:

```bash
postgres=# BEGIN;
BEGIN
postgres=*# SELECT id, balance FROM mvcc_demo WHERE id = 1 FOR SHARE;
 id | balance
----+---------
  1 |     150
(1 row)
```

Let's check the internals for the lock:

```bash
postgres=*# SELECT xmin, xmax, id, balance FROM mvcc_demo;
 xmin | xmax | id | balance
------+------+----+---------
  832 |  833 |  1 |     150
(1 row)
```

So the row has shared lock by transaction `(id = 833)`.

Now we will try to take shared lock of the same row `(id = 1)` in `Session B`.

```bash
postgres=# BEGIN;
BEGIN
postgres=*# SELECT id, balance FROM mvcc_demo WHERE id = 1 FOR SHARE;
 id | balance
----+---------
  1 |     150
(1 row)
```

Check again the internals:

```bash
postgres=*# SELECT xmin, xmax, id, balance FROM mvcc_demo;
 xmin | xmax | id | balance
------+------+----+---------
  832 |    4 |  1 |     150
(1 row)
```

This is odd looking `xmax`?

Earlier in `Session A` when we took shared lock of row `(id = 1)`, we got the transaction `(id = 833)` from the `Session A`.

But when we took shared lock of the same in `Session B`, we didn't get transaction id, something like `834`.

Instead, we got `xmax = 4`.

If multiple transactions hold a shared lock on the same row, `PostgreSQL` can't just write a single transaction id into `xmax`.

Instead, it creates a `MultiXact ID (mxid)`.

So, `xmax` column gets `mxid` rather than two transaction ids.

How do I know if the `xmax` column has `transaction id` or `mxid`?

There is another internal column `t_infomask` that we can use to check that.

```bash
postgres=# SELECT
    lp,
    t_xmin,
    t_xmax,
    t_infomask,
    (t_infomask & 4096) > 0 AS is_multixact
FROM heap_page_items(get_raw_page('mvcc_demo', 0));
 lp | t_xmin | t_xmax | t_infomask | is_multixact
----+--------+--------+------------+--------------
  1 |    832 |      4 |       4560 | t
(1 row)
```

How to find out all the transaction ids this `mxid = 4` contains?

```bash
postgres=# SELECT * FROM pg_get_multixact_members('4');
 xid | mode
-----+------
 833 | sh
 834 | sh
(2 rows)
```

The mode `sh` means `shared`.

So now, we know the row `(id = 1)` has shared lock by two transactions `833` and `834`.

There are still more to explore but I will stop for now.

Please check the official document for more information: [**https://www.postgresql.org/docs/18/explicit-locking.html**](https://www.postgresql.org/docs/18/explicit-locking.html)

***
<br>

`Happy Hacking !!!`
