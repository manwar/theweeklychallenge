---
title: "PostgreSQL PGQ"
date: 2026-08-23T00:00:00+00:00
description: "Using Property Graph Queries in PostgreSQL 19."
type: post
image: images/blog/postgresql-pgq.jpg
author: Mohammad Sajid Anwar
tags: ["Perl", "PostgreSQL", "PGQ"]
---

#### **DISCLAIMER:** Image is generated using `ChatGPT`.
***
<br>

A random look around latest changes in **PostgreSQL 19** surprised me with new feature **Property Graph Queries (PGQ)**.

My understanding was graph query is best dealt using **GraphQL** and not by relational database.

But I was wrong, **PostgreSQL 19** pleasantly surprised me.

The official release note has all the details: [**https://www.postgresql.org/docs/19/release-19.html**](https://www.postgresql.org/docs/19/release-19.html)

**PGQ** is part of SQL Standard [**ISO/IEC 9075-16**](https://en.wikipedia.org/wiki/ISO/IEC_9075)

Native **SQL/PGQ** is a core feature introduced natively starting in **PostgreSQL 19**.

It bridges the graph world and the relational world.

You feed it graph visual patterns, and it outputs rows and columns that fit directly into standard SQL queries (e.g., **SELECT**, **WHERE**, **JOIN**, or **GROUP BY**).

**GRAPH_TABLE** is a table-valued function introduced in the **SQL/PGQ** standard that allows you to query a property graph using pattern-matching syntax and return the results as a standard relational table.

```sql
 SELECT *
   FROM GRAPH_TABLE ( graph_name
        MATCH pattern
        COLUMNS ( projection_list )
   ) AS alias;
```

### Key Components

**1. Graph Context (graph_name)**

Specifies which defined Property Graph (created via **CREATE PROPERTY GRAPH**) you are querying.

**2. Pattern Matching (MATCH)**

Uses visual ASCII-art style pattern expressions to traverse nodes (vertices) and relationships (edges).

> **Nodes ():** Represented by parentheses. You can filter by label (IS person) or conditions (WHERE a.name = 'Alice').

> **Edges -[]->:** Represented by arrows and brackets. Direction indicates edge orientation (-[IS follows]->).

> **Anonymous Nodes ():** Used when intermediate step properties aren't needed in the result.

**3. Column Projection (COLUMNS)**

Defines what property graph values to extract and output into the resulting table. Each expression must be aliased (a.name AS follower).

### How It Works Under the Hood

When **PostgreSQL** evaluates a **GRAPH_TABLE** expression, it performs the following steps:

>**1. Schema Resolution:** Looks up **graph_name** to find mapping rules for **vertex** and **edge** tables.

>**2. Relational Translation:** Rewrites **MATCH** patterns into standard **SQL JOIN** clauses and **WHERE** predicates.

>**3. Execution:** Runs the rewritten query against standard relational tables using existing **B-tree indexes** and query planner optimisations.

Time for some action now.

We need **PostgreSQL 19** to begin with. Don't worry, **Docker** is your friend.

We can quickly create docker container running `PostgreSQL 19` as below:

```bash
$ docker run --name pg19-demo \
             -e POSTGRES_PASSWORD=postgres \
             -p 5432:5432 \
             -d postgres:19beta1
```

Now get the SQL prompt:

```bash
$ docker exec -it pg19-demo psql -U postgres
psql (19beta1 (Debian 19~beta1-1.pgdg13+1))
Type "help" for help.

postgres=#
```

We will create the relational table, `users` first:

```sql
postgres=# CREATE TABLE users (id SERIAL PRIMARY KEY, name TEXT NOT NULL);
CREATE TABLE
postgres=#
```

Then another table `follows` as below:

```sql
postgres=# CREATE TABLE follows (
    follower_id INT NOT NULL REFERENCES users(id),
    followed_id INT NOT NULL REFERENCES users(id),
    PRIMARY KEY (follower_id, followed_id)
);
CREATE TABLE
postgres=#
```

Insert sample data now:

```sql
postgres=# INSERT INTO users (name) VALUES ('Alice'), ('Bob'), ('Carol'), ('Dave');
INSERT 0 4
postgres=# INSERT INTO follows (follower_id, followed_id) VALUES (1, 2), (2, 3), (1, 4);
INSERT 0 3
postgres=#
```

Fun starts with defining the property graph:

```sql
postgres=# CREATE PROPERTY GRAPH social_graph
  VERTEX TABLES (
    users LABEL person PROPERTIES (id, name)
  )
  EDGE TABLES (
    follows
      SOURCE KEY      (follower_id) REFERENCES users (id)
      DESTINATION KEY (followed_id) REFERENCES users (id)
      LABEL follows
  );
CREATE PROPERTY GRAPH
postgres=#
```

We got everything setup, let's query graph relationships using **GRAPH_TABLE**.

```sql
postgres=# SELECT *
FROM GRAPH_TABLE ( social_graph
  MATCH (a IS person WHERE a.name = 'Alice')-[IS follows]->(b IS person)
  COLUMNS (a.name AS follower, b.name AS following)
);
 follower | following
----------+-----------
 Alice    | Bob
 Alice    | Dave
(2 rows)

postgres=#
```

The same with relational syntax.

```sql
postgres=~ SELECT
    a.name AS follower,
    b.name AS following
FROM users a
JOIN follows f ON a.id = f.follower_id
JOIN users b   ON f.followed_id = b.id
WHERE a.name = 'Alice';
 follower | following
----------+-----------
 Alice    | Bob
 Alice    | Dave
(2 rows)

postgres=#
```

**How about Friends of Friends?**

```sql
postgres=# SELECT fof_name
FROM GRAPH_TABLE ( social_graph
  MATCH (u1 IS person WHERE u1.name = 'Alice')-[IS follows]->()-[IS follows]->(u3 IS person)
  COLUMNS (u3.name AS fof_name)
);
 fof_name
----------
 Carol
(1 row)

postgres=#
```

Same with relational syntax:

```sql
postgres=# SELECT u3.name FROM users u1
JOIN follows f1 ON u1.id = f1.follower_id
JOIN users   u2 ON f1.followed_id = u2.id
JOIN follows f2 ON u2.id = f2.follower_id
JOIN users   u3 ON f2.followed_id = u3.id
WHERE u1.name = 'Alice';
 name
-------
 Carol
(1 row)

postgres=#
```








***
<br>

`Happy Hacking !!!`
