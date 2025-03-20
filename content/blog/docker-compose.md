---
title: "Docker Compose"
date: 2025-03-20T00:00:00+00:00
description: "Discussion about the docker-compose."
type: post
image: images/blog/docker-compose.png
author: Mohammad Sajid Anwar
tags: ["Docker"]
---

#### **DISCLAIMER:** Image is generated using `FREE` version of `ChatGPT`.
***

<br>

## Docker Compose
***

For this post, we will need `docker`.

<br>

### Setting Up the Environment
***

Let’s quickly set up the environment and verify the installation.

<br>

    $ sudo apt update
    $ sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
    $ sudo usermod -aG docker $USER

<br>

Verify the installation:

<br>

    $ docker --version
    Docker version 28.0.1, build 068a01e

<br>

I have created an alias `dps` for the command `docker ps`, as shown below:

<br>

    alias dps='docker ps --format "Container ID: {{.ID}}\nImage: {{.Image}}\nCommand: {{.Command}}\nCreated: {{.CreatedAt}}\nStatus: {{.Status}}\nPorts: {{.Ports}}\nNames: {{.Names}}\n"'

<br>

For this demo, I am going to use the latest `MongoDB` and `Mongo Express` images.

<br>

## Plan
***

The goal is to create a container running `Mongo Express`, linked to a `MongoDB` container.

We will start with a simple straight forward approach using just `docker` command.

<br>

### Step 1: Create a Docker Network
***

First, let's create a docker network named: `mongo-network`

<br>

    $ docker network create mongo-network
    7ca8d14845c684336d8e494515670675a8685646455e3761a0e88b0ff4e3234e

    $ docker network ls
    NETWORK ID     NAME            DRIVER    SCOPE
    1240c8ea9eb8   bridge          bridge    local
    d0b60d358dfb   host            host      local
    7ca8d14845c6   mongo-network   bridge    local

<br>

### Step 2: Create the MongoDB Container
***

Next, We will create a `MongoDB` container:

<br>

    $ docker run -d \
      -p 27017:27017 \
      -e MONGO_INITDB_ROOT_USERNAME=admin \
      -e MONGO_INITDB_ROOT_PASSWORD=supersecret \
      --network mongo-network \
      --name mongodb \
      mongo
    048833d02f2693bf7bae641611cc466698fb5857b6503ef5743054e9a5518a31

<br>

### Step 3: Create the Mongo Express Container
***

Now, we will create the `Mongo Express` container.

<br>

    $ docker run -d \
      -p 8081:8081 \
      -e ME_CONFIG_MONGODB_ADMINUSERNAME=admin \
      -e ME_CONFIG_MONGODB_ADMINPASSWORD=supersecret \
      -e ME_CONFIG_MONGODB_SERVER=mongodb \
      --network mongo-network \
      --name mongo-express \
      mongo-express
    a82c59ffbee01f0b1d466b747e8288846c1e11f187205e10fddc6637f864c878

<br>

### Step 4: Verify Both Containers
***

Check the status of both containers:

<br>

    $ dps
    Container ID: a82c59ffbee0
    Image: mongo-express
    Command: "/sbin/tini -- /dock…"
    Created: 2025-03-20 19:14:21 +0000 GMT
    Status: Up About a minute
    Ports: 0.0.0.0:8081->8081/tcp, [::]:8081->8081/tcp
    Names: mongo-express

    Container ID: 048833d02f26
    Image: mongo
    Command: "docker-entrypoint.s…"
    Created: 2025-03-20 19:11:09 +0000 GMT
    Status: Up 4 minutes
    Ports: 0.0.0.0:27017->27017/tcp, [::]:27017->27017/tcp
    Names: mongodb

<br>

### Step 5: Test the Containers and Network Connection
***

`Mongo Express` should be accessible at `http://localhost:8081` using the credential `admin/pass`.

<br>

## Observations
***

I found this process tedious and time consuming.

Imagine if you had to create multiple containers manually, it would quickly become a nightmare.

<br>

## Enter Docker Compose
***

To make your life easy and comfortable, `docker compose`, comes into the picture.

<br>

### Advantages of Docker Compose
***

<br>

- Define and manage multiple containers in a single file.

- Handles dependenciesy efficiently e.g., MongoDB starts before Mongo Express.

- Automatically creates a network for all containers.

- No need to remember long commands for running containers.

<br>

### Cleanup
***

Let's stop and remove both containers.

<br>

    $ docker stop mongodb mongo-express
    $ docker rm mongodb mongo-express
    $ docker network rm mongo-network

<br>

Re-creating `MongoDB` and `Mongo Express` containers using `docker compose`.

First, we will create the configuration file: `docker-compose.yml`

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

  mongo-express:
    image: mongo-express
    ports:
      - 8081:8081
    environment:
      - ME_CONFIG_MONGODB_ADMINUSERNAME=admin
      - ME_CONFIG_MONGODB_ADMINPASSWORD=supersecret
      - ME_CONFIG_MONGODB_SERVER=mongodb
    depends_on:
      - "mongodb"
```

<br>


That's it all, we need.

To start the containers, simply run one command:

<br>

    $ docker compose up -d
    ✔ Network docker-compose_default            Created             0.1s
    ✔ Container docker-compose-mongodb-1        Started             0.3s
    ✔ Container docker-compose-mongo-express-1  Started             0.3s

<br>

Did you notice, it automatically created the network for us!

Let's verify the status of both containers:

<br>

    $ dps
    Container ID: 4bfd8ccc3715
    Image: mongo
    Command: "docker-entrypoint.s…"
    Created: 2025-03-20 19:32:20 +0000 GMT
    Status: Up About a minute
    Ports: 0.0.0.0:27017->27017/tcp, [::]:27017->27017/tcp
    Names: docker-compose_mongodb_1

    Container ID: 2d34f54091b6
    Image: mongo-express
    Command: "/sbin/tini -- /dock…"
    Created: 2025-03-20 19:32:20 +0000 GMT
    Status: Up About a minute
    Ports: 0.0.0.0:8081->8081/tcp, [::]:8081->8081/tcp
    Names: docker-compose_mongo-express_1

<br>

`Mongo Express` is still accessible at: `http://localhost:8081`

<br>

To stop both the containers, simply run one command:

<br>

    $ docker compose down
    ✔ Container docker-compose-mongodb-1        Removed             0.7s
    ✔ Container docker-compose-mongo-express-1  Removed             0.9s
    ✔ Network docker-compose_default            Removed             0.6s

<br>

## Conclusion
***

Isn't it a lot simple and easy to manage?

This is just the `tip of the iceberg` when it comes to `docker compose`.

<br>

***

`Keep Hacking !!`
