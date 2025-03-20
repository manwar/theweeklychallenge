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

Before we do anything, let's make sure we have the foundation setup properly.

If you don't have `docker` and `docker-compose` installed, please follow the steps below. Otherwise, proceed to the next section.

<br>

    $ sudo apt update

    $ sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

<br>

Add your user to the `docker` group to avoid the need to use sudo for every `docker` command:

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

I am going to create an alias for `docker ps` in the `~/.bashrc` file so that the output is well-formatted.

<br>

    alias dps='docker ps --format "Container ID: {{.ID}}\nImage: {{.Image}}\nCommand: {{.Command}}\nCreated: {{.CreatedAt}}\nStatus: {{.Status}}\nPorts: {{.Ports}}\nNames: {{.Names}}\n"'

<br>

For the demo, I am going to use the latest `MongoDB` image.

In this post, I will explore the following options:

<br>

    1. Hard wired secrets
    2. Use of environment variables
    3. Use of --env-file flag
    4. Secret in swarm mode

<br>

## Hard wired secrets
***

Well, in this case, we save the secrets in the configuration, though it's not a good idea.

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

Check the container status, `docker ps`:

<br>

    $ dps
    Container ID: e753a5985c96
    Image: mongo
    Command: "docker-entrypoint.s…"
    Created: 2025-03-20 09:29:16 +0000 GMT
    Status: Up 2 seconds
    Ports: 0.0.0.0:27017->27017/tcp, [::]:27017->27017/tcp
    Names: docker-secret_mongodb_1

<br>

The container is up and running, so far so good.

Let's connect to the `MongoDB` using the same credentials as in the configuration file above:

<br>

    $ docker exec -it e753a5985c96 mongosh --username admin --password supersecret

    Current Mongosh Log ID: 67dbc40b54e05a0e5e6b140a
    Connecting to:          mongodb://<credentials>@127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.4.2
    Using MongoDB:          8.0.5
    Using Mongosh:          2.4.2

    test>

<br>

We've passed the first hurdle, we're inside the container and connected to `MongoDB`.

To exit, simply type `exit` at the prompt.

Let's clean up by `stopping and removing the container`, so we can move to the next option.

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

You have two choices for creating environment variables: either use `EXPORT key=value` or define them when creating container:

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

Check the container status, `docker ps`:

<br>

    $ dps
    Container ID: e753a5985c96
    Image: mongo
    Command: "docker-entrypoint.s…"
    Created: 2025-03-20 09:32:10 +0000 GMT
    Status: Up 33 seconds
    Ports: 0.0.0.0:27017->27017/tcp, [::]:27017->27017/tcp
    Names: docker-secret_mongodb_1

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

Once that's done, type `exit` at the prompt to exit.

We'll clean up as before i.e. `stop and remove the container`.

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

Check the container status, `docker ps`:

<br>

    $ dps
    Container ID: d61324270839
    Image: mongo
    Command: "docker-entrypoint.s…"
    Created: 2025-03-20 09:35:11 +0000 GMT
    Status: Up 31 seconds
    Ports: 0.0.0.0:27017->27017/tcp, [::]:27017->27017/tcp
    Names: docker-secret_mongodb_1

<br>

Now it's up and running. Good.

Let's connect to `MongoDB` again.

<br>

    $ docker exec -it d61324270839 mongosh --username admin --password supersecret
    Current Mongosh Log ID: 67dbca84408a363eff6b140a
    Connecting to:          mongodb://<credentials>@127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.4.2
    Using MongoDB:          8.0.5
    Using Mongosh:          2.4.2

    test>

<br>

Type `exit` at the prompt to exit so that we can proceed to the final option.

Finally, `stop and remove the container`:

<br>

    $ docker stop d61324270839
    d61324270839

    $ docker rm d61324270839
    d61324270839

<br>

## Secret in swarm mode
***

This next part is a bit tricky as you'll see.

First we need to enable `Swarm` mode.

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

Good, `Swarm` mode is now active.

Next, we'll create two secrets one for the `user` and another for the `password`.

There are two ways to create secrets as shown below:

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

It's time to create the configuration, `docker-compose-secret.yml` as below:

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

To create a container in `Swarm` mode and use the secrets, we need to create the stack as follows:

<br>

    $ docker stack deploy -c docker-compose-secret.yml mongo_stack
    In a future release, --detach=false will become the default.
    Creating network mongo_stack_mongo_network
    Creating service mongo_stack_mongo

<br>

Check the container status, `docker ps`:

<br>

    $ dps
    Container ID: f85e4c9be83a
    Image: mongo
    Command: "docker-entrypoint.s…"
    Created: 2025-03-20 09:37:31 +0000 GMT
    Status: Up 19 seconds
    Ports: 0.0.0.0:27017->27017/tcp, [::]:27017->27017/tcp
    Names: docker-secret_mongodb_1

<br>

Let;s try to connect to `MongoDB`:

<br>

    $ docker exec -it f85e4c9be83a mongosh --username admin --password supersecret
    Current Mongosh Log ID: 67dbcef14a1ae204cf6b140a
    Connecting to:          mongodb://<credentials>@127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.4.2
    Using MongoDB:          8.0.5
    Using Mongosh:          2.4.2

    test>

<br>

Type `exit` at the prompt and to exit.

Finally, we'll now remove the service.

<br>

    $ docker service ls
    ID             NAME                MODE         REPLICAS   IMAGE          PORTS
    qg8b7aq1a3q3   mongo_stack_mongo   replicated   1/1        mongo:latest   *:27017->27017/tcp


    $ docker service rm qg8b7aq1a3q3
    qg8b7aq1a3q3

<br>

Last but not least, leave `Swarm` mode:

<br>

    $ docker swarm leave

***

<br>

`Keep Hacking !!`
