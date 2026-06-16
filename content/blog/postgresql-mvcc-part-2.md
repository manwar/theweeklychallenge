---
title: "PostgreSQL MVCC - Part 2"
date: 2026-06-16T00:00:00+00:00
description: "Find the role of xmin and xmax in transaction."
type: post
image: images/blog/postgresql-mvcc-part-2.jpg
author: Mohammad Sajid Anwar
tags: ["PostgreSQL", "MVCC"]
---

#### **DISCLAIMER:** Image is generated using `ChatGPT`.
***
<br>

In the [**previous post**](/blog/postgresql-mvcc), I discussed the `Transaction Isolation Levels` in `PostgreSQL`. In this post, we will explore how it is managed under the hood.

One thing I learnt during the process of earlier post, in `PostgreSQL`, a row is never mutated in place. This was a revelation for me.

Instead, `PostgreSQL` manages data using tuples i.e. row versions. Every time you insert, update, or delete data, Postgres creates or modifies these versions, using hidden system columns called `xmin` and `xmax` to determine which transaction can see which version.

> xmin: The Transaction ID of the transaction that created this row version.

> xmax: The Transaction ID of the transaction that destroyed this row version. If the row is still alive and has not been deleted or updated, xmax is set to 0.

Let's trace exactly how `xmin` and `xmax` change through a row's life.

We will use the same instance of `PostgreSQL` database that we used in the previous post.

```bash
$ docker exec -it mvcc_test psql -U postgres
psql (18.4 (Debian 18.4-1.pgdg13+1))
Type "help" for help.

postgres=#
```

We will create extension `pageinspect` first as below:

```bash
postgreq=# CREATE EXTENSION IF NOT EXISTS pageinspect;
CREATE EXTENSION
```

Now let's create the demo table and insert a row.

```bash
postgres=# CREATE TABLE mvcc_demo (id INT PRIMARY KEY, balance INT);
CREATE TABLE
postgres=# INSERT INTO mvcc_demo (id, balance) VALUES (1, 100);
INSERT 0 1
```

Let's see the hidden columns, `xmin` and `xmax`.

```bash
postgres=# SELECT lp, t_xmin, t_xmax FROM heap_page_items(get_raw_page('mvcc_demo', 0));
 lp | t_xmin | t_xmax
----+--------+--------
  1 |    808 |      0
(1 row)
```

The transaction id `808` has created this row. The `xmax` is `0` i.e. the row is alive.

Now we will update the row and then check the `xmin`/`xmax`.

```bash
postgres=# UPDATE mvcc_demo SET balance = 200 WHERE id = 1;
UPDATE 1
postgres=# SELECT lp, t_xmin, t_xmax FROM heap_page_items(get_raw_page('mvcc_demo', 0));
 lp | t_xmin | t_xmax
----+--------+--------
  1 |    808 |    809
  2 |    809 |      0
(2 rows)
```

When you execute an `UPDATE`, it goes through two phases as below:

> The `"Delete"` Phase: PostgreSQL finds the existing, active row version on disk and writes the current transaction's ID into its `t_xmax` column. This effectively tells the database: "This row version is dead to any transaction that starts after me."

> The `"Insert"` Phase: PostgreSQL immediately creates a brand new row version somewhere else in the data page. This new tuple gets the current transaction's ID in its `t_xmin`, and its `t_xmax` is set to 0.

Why does it do this instead of changing the data in place?

It sounds inefficient at first, why copy the whole row just to change one number?

But this architecture is the core reason why `PostgreSQL` is so fast and reliable under heavy workloads.

> No Locking for Readers: While your `UPDATE` is running, other users can read the old version of the row seamlessly. They aren't blocked waiting for your update to finish.

> Instant Rollbacks: If your transaction fails or you type `ROLLBACK`, it doesn't have to undo any changes to the data. It simply marks your transaction ID as "aborted" in its internal log. The old row version instantly becomes valid again because its t_xmax belongs to a failed transaction, and the new row version is just ignored.

Let's delete the row now and check the states.

```bash
postgres=# DELETE FROM mvcc_demo WHERE id = 1;
DELETE 1
postgres=# SELECT lp, t_xmin, t_xmax FROM heap_page_items(get_raw_page('mvcc_demo', 0));
 lp | t_xmin | t_xmax
----+--------+--------
  1 |    808 |    809
  2 |    809 |    810
(2 rows)
```

Now both versions are dead. If we run `VACUUM`, then this would clean the dead rows.

```bash
postgres=# VACUUM mvcc_demo;
VACUUM
postgres=# SELECT t_xmin, t_xmax FROM heap_page_items(get_raw_page('mvcc_demo', 0));
ERROR:  block number 0 is out of range for relation "mvcc_demo"
```

I will probably do one more post in the series. I am enjoying the topic.

***
<br>

`Happy Hacking !!!`
