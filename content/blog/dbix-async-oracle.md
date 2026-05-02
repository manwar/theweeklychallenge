---
title: "DBIx::Class::Async - Oracle Database"
date: 2026-05-01T00:00:00+00:00
description: "Testing DBIx::Class::Async with Oracle database."
type: post
image: images/blog/dbix-async-oracle.jpg
author: Mohammad Sajid Anwar
tags: ["perl", "dbic", "async", "oracle"]
---

#### **DISCLAIMER:** Image is generated using `ChatGPT`.
***
<br>

It has been a long time since I shared an update regarding `DBIx::Class::Async`. The reason is simple: no known critical issues have been reported. While `DBIx::Class::Async v0.65` is officially still `experimental`, it is quite `stable`. I am not in a rush to declare it `production ready` just yet.

However, yesterday, I received an email regarding the project...

![Email Notice](/images/blog/email-notice.jpg)

To be honest, as of `v0.65`, I haven't done any testing against an `Oracle` database. I wasn't entirely sure how to reply to the email, but my first thought was to add basic tests for `Oracle` database interaction.

There was just one big issue: I didn't have a working `Oracle` database to begin with, and setting one up from scratch isn't something I'm willing to do right now.

So, what other options did I have then? My good old friend, the `Docker` container.

Before doing anything else, I needed to create an `Oracle` account by visiting [**this page**](https://profile.oracle.com/myprofile/account/create-account.jspx). Once that was done, I had to generate an auth token to use with the container. You can find the page to generate the token [**here**](https://container-registry.oracle.com).

With that settled, we are now ready to spin up a `Docker` container for the `Oracle` database.

```bash
$ docker run -d \
             --name oracle-test \
             -p 1521:1521 \
             -e ORACLE_PWD=testpass \
             container-registry.oracle.com/database/free:latest
```

Please give couple of minutes to let the database engine to a healthy state.

```bash
$ dps
Container ID: 1bc24c6e0738
Image: container-registry.oracle.com/database/free:latest
Command: "/bin/bash -c $ORACL…"
Created: 2026-04-30 23:51:00 +0100 BST
Status: Up 2 minutes (healthy)
Ports: 0.0.0.0:1521->1521/tcp, [::]:1521->1521/tcp
Names: oracle-test
```

Let's create test user in the docker container.

```bash
$ docker exec -it oracle-test sqlplus sys/testpass@FREEPDB1 as sysdba

SQL*Plus: Release 23.26.1.0.0 - Production on Thu Apr 30 23:53:47 2026
Version 23.26.1.0.0

Copyright (c) 1982, 2025, Oracle.  All rights reserved.


Connected to:
Oracle AI Database 26ai Free Release 23.26.1.0.0 - Develop, Learn, and Run for Free
Version 23.26.1.0.0

SQL> CREATE USER dbictest IDENTIFIED BY dbictest123;

User created.

SQL> GRANT CONNECT, RESOURCE, UNLIMITED TABLESPACE TO dbictest;

Grant succeeded.

SQL> exit
Disconnected from Oracle AI Database 26ai Free Release 23.26.1.0.0 - Develop, Learn, and Run for Free
Version 23.26.1.0.0
```

Time to setup `Oracle` client now.

```bash
$ mkdir -p ~/oracle/instantclient
$ docker cp oracle-test:/opt/oracle/product/26ai/dbhomeFree ~/oracle/instantclient
$ export ORACLE_HOME=~/oracle/instantclient/dbhomeFree
$ export LD_LIBRARY_PATH=$ORACLE_HOME/lib:$LD_LIBRARY_PATH
```

In my local setup, I had to install few missing libraries and create softlink.

```bash
$ sudo apt-get install -y libaio1t64 libaio-dev
$ sudo ln -s /usr/lib/x86_64-linux-gnu/libaio.so.1t64 /usr/lib/x86_64-linux-gnu/libaio.so.1
$ cpanm -vS Math::Base36 DBD::Oracle
```

Let's test the connection.

```bash
$ perl -e '
use DBI;
my $dbh = DBI->connect(
    "dbi:Oracle:host=localhost;port=1521;service_name=FREEPDB1",
    "dbictest", "dbictest123",
    { RaiseError => 1, AutoCommit => 1 }
);
print "Connected OK!\n";
$dbh->disconnect;
'
```

I see a, `Connected OK!` message, all good so far.

Now it's time to create a unit test that covers basic operations with the `Oracle` database.

I decided to add the unit test, `001-oracle.t`, to the `xt/` subfolder to keep it separate from the standard test suite.

You can find the complete source code for the unit test [**here**](https://github.com/manwar/DBIx-Class-Async/blob/master/xt/001-oracle.t).

Now let's `prove` the test.

```bash
$ export DBIC_ASYNC_ORACLE_DSN='dbi:Oracle:host=localhost;port=1521;service_name=FREEPDB1'
$ export DBIC_ASYNC_ORACLE_USER='dbictest'
$ export DBIC_ASYNC_ORACLE_PASS='dbictest123'
$ prove -lv xt/001-oracle.t
xt/001-oracle.t ..
ok 1 - 'Schema connected to Oracle' isa 'DBIx::Class::Async::Schema'
# Subtest: Basic CRUD — User
    ok 1 - An object of class 'DBIx::Class::Async::ResultSet' isa 'DBIx::Class::Async::ResultSet'
    ok 2 - 'create() returns a Row' isa 'DBIx::Class::Async::Row'
    ok 3 - name is correct
    ok 4 - email is correct
    ok 5 - id was assigned by Oracle sequence
    ok 6 - 'find() returns a Row' isa 'DBIx::Class::Async::Row'
    ok 7 - find() name matches
    ok 8 - update() name correct
    ok 9 - update() active correct
    ok 10 - Row is gone after delete()
    1..10
ok 2 - Basic CRUD — User
# Subtest: Search and count
    ok 1 - count() increased by 3 after creates
    ok 2 - 'search()->all() returns arrayref' isa 'ARRAY'
    ok 3 - At least 2 active users found
    ok 4 - search()->count() works on Oracle
    1..4
ok 3 - Search and count
# Subtest: Relationships — belongs_to and has_many
    ok 1 - 'order created' isa 'DBIx::Class::Async::Row'
    ok 2 - amount is correct
    ok 3 - FK user_id correct
    ok 4 - 'belongs_to returns Row' isa 'DBIx::Class::Async::Row'
    ok 5 - belongs_to correct user
    ok 6 - has_many returns 1 order
    ok 7 - has_many correct order
    1..7
ok 4 - Relationships — belongs_to and has_many
# Subtest: Transactions — txn_do
    ok 1 - txn_do committed both rows
    1..1
ok 5 - Transactions — txn_do
# Subtest: Concurrent async queries
    ok 1 - Concurrent count() returned a result
    ok 2 - 'Concurrent search()->all() returned arrayref' isa 'ARRAY'
    1..2
ok 6 - Concurrent async queries
1..6
ok
All tests successful.
Files=1, Tests=6,  1 wallclock secs ( 0.01 usr  0.00 sys +  0.18 cusr  0.09 csys =  0.28 CPU)
Result: PASS
```

Now it's time to bundle the changes and upload them to `CPAN`.

Before, I do that, I want to switch to `v-string` versioning. Consequently, the next version will be [**DBIx::Class::Async v1.0.0**](https://metacpan.org/dist/DBIx-Class-Async)`.

The updated distribution is now available in the [**GitHub repository**](https://github.com/manwar/DBIx-Class-Async).

***

`Happy Hacking !!!`
