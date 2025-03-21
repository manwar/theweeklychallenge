---
title: "Docker Volume"
date: 2025-03-21T00:00:00+00:00
description: "Discussion about the docker volume."
type: post
image: images/blog/docker-volume.png
author: Mohammad Sajid Anwar
tags: ["Docker"]
---

#### **DISCLAIMER:** Image is generated using `FREE` version of `ChatGPT`.
***

<br>

## Docker Volume
***

For this post, we just need `docker`.

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

I have created a very handy alias `dps` for the command `docker ps`, as shown below:

<br>

    alias dps='docker ps --format "Container ID: {{.ID}}\nImage: {{.Image}}\nCommand: {{.Command}}\nCreated: {{.CreatedAt}}\nStatus: {{.Status}}\nPorts: {{.Ports}}\nNames: {{.Names}}\n"'

<br>

For this demo, I am going to use the `nginx` image.

<br>

## 1. Bind Mount
***

### What is bind mount?

<br>

    Bind mount directly map a directory or file from the host machine into the container.
    The host directory is referenced by its absolute path and the container has direct
    access to it.

<br>

Nothing complicated according to the definition.

Let's see in action.

We will prepare the ground first:

<br>

    $ mkdir -p html
    $ cat html/index.html
    <h1>Hello from Docker Bind Mount!!</h1>

<br>

Let's build the container and bind mount the folder in the host environment: `html/`

<br>

    $ docker run \
      -d \
      -p 8080:80 \
      -v ./html:/usr/share/nginx/html \
      --name nginx_bind_mount \
      nginx
    1e90a6a226c8b4f65b597bd85480a1d1f64bff1a02fe7407462fd3c351c2bd57

<br>

Check the container status first:

<br>

    $ dps
    Container ID: 1e90a6a226c8
    Image: nginx
    Command: "/docker-entrypoint.…"
    Created: 2025-03-21 06:00:34 +0000 GMT
    Status: Up 8 seconds
    Ports: 0.0.0.0:8080->80/tcp, [::]:8080->80/tcp
    Names: nginx_bind_mount

<br>

We are ready to test `bind mount`.

<br>

    $ curl http://localhost:8080
    <h1>Hello from Docker Bind Mount!!</h1>

<br>

How about doing the same using configuration file: `docker-compose.yml` as below?

<br>

Before we do that, let's stop and remove the container we created above:

<br>

    $ docker stop nginx_bind_mount
    nginx_bind_mount
    $ docker rm nginx_bind_mount
    nginx_bind_mount

<br>

We will now create the configuration file.

<br>

```
services:
  nginx:
    image: nginx
    container_name: ngnix_bind_mount
    volumes:
      - ./html:/usr/share/nginx/html
    ports:
      - 8080:80
```

<br>

Did you notice, I removed the line `version: '3.8'` from the configuration file?

That's because the `docker compose` command doesn't like it and throws a warning like this:

<br>

    the attribute `version` is obsolete, it will be ignored, please remove it
    to avoid potential confusion

<br>

However the `docker-compose` command is fine with it and doesn't complain.

So it's up to you to pick and choose.

Since we are going to use the `docker compose` command, I have removed the line from the configuration file.

Now, let's create the container using the configuration file this time:

<br>

    $ docker compose up -d
    [+] Running 2/2
    ✔ Network docker-volume_default  Created                            0.0s
    ✔ Container ngnix_bind_mount     Started                            0.2s

<br>

Test the container:

<br>

    $ curl http://localhost:8080
    <h1>Hello from Docker Bind Mount!!</h1>

<br>

We're about to do some magic now.

Let's update `html/index.html` on the host while the container is still running.

<br>

    $ cat html/index.html
    <h1>Hello again from Docker Bind Mount!!</h1>

<br>

We'll see, if the `ngnix` server running inside the container detects the changes.

<br>

    $ curl http://localhost:8080
    <h1>Hello again from Docker Bind Mount!!</h1>

<br>

Isn't it magical?

I am definitely loving it.

But wait, the fun doesn't stop here.

We have even more tricks up our sleeve.

And the next one is called `Docker Volume`.

Before we proceed, let's stop and remove the container we just created.

<br>

    $ docker compose down
    [+] Running 2/2
    ✔ Container ngnix_bind_mount     Removed                            0.7s
    ✔ Network docker-volume_default  Removed                            0.5s

<br>

## 2. Docker Volume
***

The main use of `Docker Volume` is to `persist and share data` between containers and the host system or among multiple containers.

It is a very useful for managing data, `independently` of a container's lifecycle.

`Docker Volume` works seamlessly across different environments such as `development`, `testing`, `production` and across platforms like `Linux`, `Windows` etc.

It can also be used to `isolate sensitive data` e.g. `configuration files`, `certificates` from the container's filesystem.

This adds an extra layer of security by limiting access to the data.

Time for some action now:

First we will create a docker volume:

<br>

    $ docker volume create nginx_volume
    nginx_volume

<br>

Then let's list all the docker volumes:

<br>

    $ docker volume ls
    ....
    ....
    ....
    local     nginx_volume

<br>

Next, we will create a container using just the `docker` command like before:

<br>

    $ docker run -d \
    --name nginx_docker_volume \
    -p 8080:80 \
    -v nginx_volume:/usr/share/nginx/html \
    nginx
    3bf6e6cbcd5c3029702737856ddf6cba59800f155e96e44278c98fd1dcd34846

<br>

Check the status of the container:

<br>

    $ dps
    Container ID: 3bf6e6cbcd5c
    Image: nginx
    Command: "/docker-entrypoint.…"
    Created: 2025-03-21 07:06:04 +0000 GMT
    Status: Up 4 seconds
    Ports: 0.0.0.0:8080->80/tcp, [::]:8080->80/tcp
    Names: nginx_docker_volume

<br>

Now, we will jump inside the container and create a file `index.html` like this:

<br>

    $ docker exec -it nginx_docker_volume bash
    root@3bf6e6cbcd5c:/# echo '<h1>Welcome to Docker Volume!!</h1>' > /usr/share/nginx/html/index.html
    root@3bf6e6cbcd5c:/# cat /usr/share/nginx/html/index.html
    <h1>Welcome to Docker Volume!!</h1>
    root@3bf6e6cbcd5c:/# exit

<br>

After that, let's test what the `ngnix` server serves:

<br>

    $ curl http://localhost:8080
    <h1>Welcome to Docker Volume!!</h1>

<br>

Time for some real action.

Now, we will stop and remove the container to see if the data is still safe.

<br>

    $ docker stop nginx_docker_volume
    nginx_docker_volume
    $ docker rm nginx_docker_volume
    nginx_docker_volume

<br>

Next, we will re-use the same docker volume, `nginx_volume` in a new container, and the data should still be there.

<br>

    $ docker run \
    -d \
    -p 8080:80 \
    -v nginx_volume:/usr/share/nginx/html \
    --name new_nginx_docker_volume \
    nginx
    119d6dd7704463891b54cc1005daa466c903c1a681740d0a9c73d3ce87a1a4db

<br>

Let's check the status of new container:

<br>

    $ dps
    Container ID: 119d6dd77044
    Image: nginx
    Command: "/docker-entrypoint.…"
    Created: 2025-03-21 07:24:10 +0000 GMT
    Status: Up About a minute
    Ports: 0.0.0.0:8080->80/tcp, [::]:8080->80/tcp
    Names: new_nginx_docker_volume

<br>

Now, let's access the `nginx` server inside the new container:

<br>

    $ curl http://localhost:8080
    <h1>Welcome to Docker Volume!!</h1>

<br>

Super cool, right?

Let's stop and remove the container:

<br>

    $ docker stop new_nginx_docker_volume
    new_nginx_docker_volume

    $ docker rm new_nginx_docker_volume
    new_nginx_docker_volume

<br>

One last time, we will create a container using the configuration file with docker volume.

<br>

```
services:
  nginx:
    image: nginx
    container_name: ngnix_docker_volume
    volumes:
      - nginx_volume:/usr/share/nginx/html
    ports:
      - 8080:80

volumes:
  nginx_volume:
```

<br>

Start the container now:

<br>

    $ docker compose up -d
    [+] Running 3/3
    ✔ Network docker-volume_default        Created                      0.0s
    ✔ Volume "docker-volume_nginx_volume"  Created                      0.0s
    ✔ Container ngnix_docker_volume        Started                      0.2s

<br>

Check the container's status:

<br>

    $ dps
    Container ID: 0b8281ed3347
    Image: nginx
    Command: "/docker-entrypoint.…"
    Created: 2025-03-21 07:48:04 +0000 GMT
    Status: Up 48 seconds
    Ports: 0.0.0.0:8080->80/tcp, [::]:8080->80/tcp
    Names: ngnix_docker_volume

<br>

Let's access the `nginx` server inside the new container:

<br>

    $ curl http://localhost:8080
    <h1>Welcome to Docker Volume!!</h1>

<br>

Once we're done, we can now remove the container and the docker volume.

<br>

    $ docker compose down
    [+] Running 2/2
    ✔ Container ngnix_docker_volume  Removed                            0.6s
    ✔ Network docker-volume_default  Removed                            0.5s

    $ docker volume rm nginx_volume
    nginx_volume

<br>

***

`Keep Hacking !!`
