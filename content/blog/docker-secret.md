---
title: "Docker Secret"
date: 2025-03-20T00:00:00+00:00
description: "Discussion about the docker secret."
type: post
image: images/blog/docker-secret.png
author: Mohammad Sajid Anwar
tags: ["Docker"]
---

#### **DISCLAIMER:** Image is generated using `FREE` version of `ChatGPT`.
***

<br>

## Docker Secret

<br>

Before we do anything, let's make sure we have foundation setup properly.

If you don't have `docker` and `docker-compose` installed then please follow the steps below otherwise move to the next section.

<br>

    $ sudo apt update
    $ sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

<br>

Add your user to the `Docker` group to avoid the need to use sudo on every `Docker` command:

<br>

    $ sudo usermod -aG docker $USER

<br>

Check the installation:

<br>

    $ docker --version
    Docker version 28.0.1, build 068a01e

<br>

Now install the `docker-compose`:

<br>

    $ sudo apt install -y docker-compose

<br>

`OR`

<br>

    $ sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" \
    -o /usr/local/bin/docker-compose

    $ sudo chmod +x /usr/local/bin/docker-compose

<br>

Verify the `docker-compose` installation:

<br>

    $ docker-compose --version
    docker-compose version 1.29.2, build unknown

<br>

For the demo purpose, I am going to use `mongo` db latest image.

In the post, I will explore the following options:

<br>

    1. Hard wired secrets
    2. Use of environment variables
    3. Use of --env-file flag
    4. Secret in swarm mode

<br>

## Hard wired secrets
***

Well, in this case, we just save the secrets in the configuration, not a good idea, though.

Here is the configuration file, `docker-compose-open.yml`:

<br>

```
version: '3.8'

services:
  mongodb:
    image: mongo
    ports:
      - 27017:27017
    environment:
      - MONGO_INITDB_ROOT_USERNAME=admin
      - MONGO_INITDB_ROOT_PASSWORD=supersecret
```

<br>

Let's start the container now:

<br>

    $ docker-compose -f docker-compose-open.yml up -d
    Creating docker-secret_mongodb_1 ... done

<br>

Check the container status:

<br>

    $ docker ps
    CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS          PORTS                                             NAMES
    e753a5985c96   mongo     "docker-entrypoint.s…"   34 seconds ago   Up 33 seconds   0.0.0.0:27017->27017/tcp, [::]:27017->27017/tcp   docker-secret_mongodb_1

<br>

So the container is up and running, so far so good.

Let's connect to the `mongo` db using the same credentials as in the configuration file above:

<br>

    $ docker exec -it e753a5985c96 mongosh --username admin --password supersecret

    Current Mongosh Log ID: 67dbc40b54e05a0e5e6b140a
    Connecting to:          mongodb://<credentials>@127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.4.2
    Using MongoDB:          8.0.5
    Using Mongosh:          2.4.2

    test>

<br>

So we have gone pass the first hurdle, we are inside the container and connected to the `mongo` db.

Just type `exit` at the prompt and come out of it.

Let's do the clean up so that we can move to the next option.

<br>

    $ docker stop e753a5985c96
    e753a5985c96
    $ docker rm e753a5985c96
    e753a5985c96

<br>

## Use of environment variables
***

For this, we would create another configuration file, `docker-compose-env.yml`:

<br>

```
version: '3.8'
services:
  mongodb:
    image: mongo
    ports:
      - 27017:27017
    environment:
      - MONGO_INITDB_ROOT_USERNAME=${MONGO_ADMIN_USER}
      - MONGO_INITDB_ROOT_PASSWORD=${MONGO_ADMIN_PASS}
```

<br>

You have two choices to create the environment variables, either use `EXPORT key=value` or just use when creating container:

<br>

    $ export MONGO_ADMIN_USER=admin
    $ export MONGO_ADMIN_PASS=supersecret

    $ docker-compose -f docker-compose-env.yml up -d
    Creating docker-secret_mongodb_1 ... done

<br>

`OR`

<br>

    $ MONGO_ADMIN_USER=admin MONGO_ADMIN_PASS=supersecret \
    docker-compose -f docker-compose-env.yml up -d
    Creating docker-secret_mongodb_1 ... done

<br>

Check the container status:

<br>

    $ docker ps
    CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS          PORTS                                             NAMES
    ce431be25019   mongo     "docker-entrypoint.s…"   50 seconds ago   Up 50 seconds   0.0.0.0:27017->27017/tcp, [::]:27017->27017/tcp   docker-secret_mongodb_1

<br>

So all good, let's connect to the `mongo` db now:

<br>

    $ docker exec -it ce431be25019 mongosh --username admin --password supersecret
    Current Mongosh Log ID: 67dbc7f7b8d8dedf8d6b140a
    Connecting to:          mongodb://<credentials>@127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.4.2
    Using MongoDB:          8.0.5
    Using Mongosh:          2.4.2

    test>

<br>

So that's done too, just type `exit` at the prompt and come out of it.

We will do the clean up as before:

<br>

    $ docker stop ce431be25019
    ce431be25019
    $ docker rm ce431be25019
    ce431be25019

<br>

## Use of --env-file flag
***

Let's create env file first, `docker-compose.env` as below:

<br>

    $ echo "MONGO_ADMIN_USER=admin" > docker-compose.env
    $ echo "MONGO_ADMIN_PASS=supersecret" >> docker-compose.env

<br>

Time to start the container with `--env-file` flag:

<br>

    $ docker-compose --env-file docker-compose.env -f docker-compose-env.yml up -d
    Creating docker-secret_mongodb_1 ... done

<br>

Check the container status:

<br>

    $ docker ps
    CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS          PORTS                                             NAMES
    d61324270839   mongo     "docker-entrypoint.s…"   31 seconds ago   Up 30 seconds   0.0.0.0:27017->27017/tcp, [::]:27017->27017/tcp   docker-secret_mongodb_1

<br>

So it's up and running, good.

Let's connect to the `mongo` db again.

<br>

    $ docker exec -it d61324270839 mongosh --username admin --password supersecret
    Current Mongosh Log ID: 67dbca84408a363eff6b140a
    Connecting to:          mongodb://<credentials>@127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.4.2
    Using MongoDB:          8.0.5
    Using Mongosh:          2.4.2

    test>

<br>

Just type `exit` at the prompt and come out of it, so that we can do the last option.

<br>

    $ docker stop d61324270839
    d61324270839
    $ docker rm d61324270839
    d61324270839

<br>

## Secret in swarm mode
***

I find this a bit tricky as you will see now.

We have to enable the `swarm` mode first.

<br>

    $ docker swarm init

<br>

`OR`

<br>

    $ docker swarm init --advertise-addr 172.19.28.199
    Swarm initialized: current node (qz8w8ns05xvtmpsewhhsp9qiq) is now a manager.

<br>

Check if the swarm mode is active:


    $ docker info | grep -i swarm
    Swarm: active

<br>

Good, the `swarm` mode is now active.

We would now create two secrets one for `user` and another for `password`.

There are two ways, you can create secrets as shown below:

<br>

    $ echo "admin" > mongo-user.txt
    $ docker secret create mongo_user mongo-user.txt
    x3lswvc8mkwh0x5opoyvkucca

<br>

`and`

<br>

    $ echo "supersecret" | docker secret create mongo_pass -
    5efjagekw2driudrs5z7j6ezc

<br>

We have created the two secrets, let's list them first:

<br>

    $ docker secret ls
    ID                          NAME         DRIVER    CREATED              UPDATED
    5efjagekw2driudrs5z7j6ezc   mongo_pass             42 seconds ago       42 seconds ago
    x3lswvc8mkwh0x5opoyvkucca   mongo_user             About a minute ago   About a minute ago

<br>

Time to create the configuration, `docker-compose-secret.yml` as below:

<br>

```
version: '3.8'

services:
  mongo:
    image: mongo
    secrets:
      - mongo_user
      - mongo_pass
    ports:
      - 27017:27017
    environment:
      MONGO_INITDB_ROOT_USERNAME_FILE: /run/secrets/mongo_user
      MONGO_INITDB_ROOT_PASSWORD_FILE: /run/secrets/mongo_pass
    networks:
      - mongo_network

secrets:
  mongo_user:
    external: true
  mongo_pass:
    external: true

networks:
  mongo_network:
    driver: overlay
    attachable: true
```

<br>

In order to create container in `swarm` mode so that we can use the secrets, we have to create the stack as below:

<br>

    $ docker stack deploy -c docker-compose-secret.yml mongo_stack
    In a future release, --detach=false will become the default.
    Creating network mongo_stack_mongo_network
    Creating service mongo_stack_mongo

<br>

Check the container status

<br>

    $ docker ps
    CONTAINER ID   IMAGE          COMMAND                  CREATED          STATUS          PORTS       NAMES
    f85e4c9be83a   mongo:latest   "docker-entrypoint.s…"   19 seconds ago   Up 19 seconds   27017/tcp   mongo_stack_mongo.1.8961hbyc0d02ykwscdhzl4pq2

<br>

We will try to connect to the `mongo` db now:

<br>

    $ docker exec -it f85e4c9be83a mongosh --username admin --password supersecret
    Current Mongosh Log ID: 67dbcef14a1ae204cf6b140a
    Connecting to:          mongodb://<credentials>@127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.4.2
    Using MongoDB:          8.0.5
    Using Mongosh:          2.4.2

    test>

<br>

Just type `exit` at the prompt and come out of it.

We will now remove the service:

<br>

    $ docker service ls
    ID             NAME                MODE         REPLICAS   IMAGE          PORTS
    qg8b7aq1a3q3   mongo_stack_mongo   replicated   1/1        mongo:latest   *:27017->27017/tcp

    $ docker service rm qg8b7aq1a3q3
    qg8b7aq1a3q3

<br>

Last but not least, leave the `swarm` mode:

<br>

    $ docker swarm leave

***

<br>

`Keep Hacking !!`
