---
title: "Build Docker Image"
date: 2025-03-19T00:00:00+00:00
description: "Discussion about the journey of building docker image for the weekly challenge website."
type: post
image: images/blog/build-docker-image.png
author: Mohammad Sajid Anwar
tags: ["Perl", "Docker"]
---

#### **DISCLAIMER:** Image is generated using `FREE` version of `ChatGPT`.
***

<br>

<div style="display: flex; justify-content: center; gap: 10px;">
    <a href="/blog/docker-secret" title="Docker Secret">
        <img src="/images/blog/docker-secret-mini.png" width="200">
    </a>
    <a href="/blog/docker-compose" title="Docker Compose">
        <img src="/images/blog/docker-compose-mini.png" width="200">
    </a>
    <a href="/blog/docker-volume" title="Docker Volume">
        <img src="/images/blog/docker-volume-mini.png" width="200">
    </a>
    <a href="/blog/terraform-docker" title="Terraform with Docker">
        <img src="/images/blog/terraform-docker-mini.png" width="200">
    </a>
</div>

<br>

## Build Docker Image
***

### [1. Introduction](#introduction)
### [2. Journey](#journey)
### [3. Setup](#setup)

<br>

## Introduction
***

<br>

I know the post title is a little vague, what I meant is `building docker image for the weekly challenge website`.

If you are new to [**The Weekly Challenge**](https://theweeklychallenge.org) then this is the perfect platform for all geeks who want to use their favourite programming language to solve the two challenges we present every week. You don't need to be an expert in the programming language, as there is always one simple challenge for beginners and a second, more advanced challenge for those with greater experience.

It was launched on `March 25, 2019`.

Yes, it has been running for nearly `6 years` now.

The primary programming languages are `Perl` and `Raku` but you are free to choose your favourite programming language.

So far, we have received solutions in `over 100` different programming languages.

We have a dedicated repository called [**Perl Weekly Challenge Club**](https://github.com/manwar/perlweeklychallenge-club) where member's contributions are stored.

For the website, we maintain  a separate [**GitHub repository**](https://github.com/manwar/theweeklychallenge).

The site is static, built using `Hugo`, hosted as `GitHub Page`.

<br>

## Journey
***

<br>

In the past, I received complaints from users that they couldn't run the site locally as it relies on a custom-built [**Hugo**](https://github.com/manwar/theweeklychallenge/blob/master/bin/hugo) binary.

To solve this issue, `Docker image` would have been an ideal solution.

However, I had never worked with `Docker` in detail before, so my lack of experience with the tool held me back.

After a sudden change of heart, I started exploring `Docker` and found myself enjoying it.

Here's the `Dockerfile`, I came up with initially:

<br>

```
FROM perl:5.38.0

EXPOSE 1414
CMD ["bin/hugo", "server", "-p", "1414", "-D"]

COPY . /theweeklychallenge
WORKDIR /theweeklychallenge
```

<br>

With this, I was able to build the image and start the container.

But, I had trouble accessing the site.

I knew that `Dave Cross`, had extensive experience with `Docker` as he had written a [**four-part series**](https://dev.to/davorg/docker-and-dancer-4m82) on it.

I decided to reach out to him for help.

He replied instantly but unfortunately, he was facing a similar issue.

In the meantime, I decided to switch the base image to `alpine` as `Dave` had suggested.

<br>

```
FROM alpine:latest

EXPOSE 1414
CMD ["bin/hugo", "server", "-p", "1414", "-D"]

COPY . /theweeklychallenge
WORKDIR /theweeklychallenge
```

<br>

However, changing the base image made things worse, as now I couldn't even start the container.

Earlier, starting the container worked fine, but accessing it was the issue.

After few days, I contacted him again for help.

He instantly identified the issue and shared the solution as well.

These are his words:

<br>

    It's because Alpine uses libc, not glibc. And your executable is built for glibc.

<br>

His advice was:

<br>

    Just add this to your Dockerfile.
    RUN apk add --no-cache libc6-compat

<br>

So as per his suggestion, my `Dockerfile` now looks like below:

<br>

```
FROM alpine:latest

RUN apk add --no-cache libc6-compat

EXPOSE 1414
CMD ["bin/hugo", "server", "-p", "1414", "-D"]

COPY . /theweeklychallenge
WORKDIR /theweeklychallenge
```

<br>

This indeed solved the issue of not being able to run the container.

It was a huge relief, thank you `Dave Cross` for your help.

However, I was still having trouble accessing the site.

A few moments later, I received another message from `Dave Cross`.

This time he found the solution to the main issue.

His advice was:

<br>

    Adding the "--bind" parameter to the Dockerfile seems to fix the problem.

<br>

So now my `Dockerfile` looks like below:

<br>

```
FROM alpine:latest

RUN apk add --no-cache libc6-compat

WORKDIR /theweeklychallenge
COPY . /theweeklychallenge

EXPOSE 1414
CMD ["bin/hugo", "server", "-p", "1414", "-D", "--bind", "0.0.0.0"]
```

<br>

Finally I can now access the site: `http://localhost:1414`

I can't thank `Dave` enough for his help and support.

May be next time when I meet him, I will present him a box of chocolate.

<br>

## Setup
***

<br>

I added the following `Dockerfile` to the [**main repository**](https://github.com/manwar/theweeklychallenge/blob/master/Dockerfile)

<br>

```
FROM alpine:latest
LABEL maintainer="mohammad.anwar@yahoo.com"

RUN apk add --no-cache libc6-compat

WORKDIR /theweeklychallenge
COPY . /theweeklychallenge

EXPOSE 1414
CMD ["bin/hugo", "server", "-p", "1414", "-D", "--bind", "0.0.0.0"]
```

<br>

Also added the configuration file, [**docker-compose.yml**](https://github.com/manwar/theweeklychallenge/blob/master/docker-compose.yml), as below:

<br>

```
version: '3.8'
services:
  theweeklychallenge:
    build:
      context: .
      dockerfile: Dockerfile
    image: manwardock/theweeklychallenge:${IMAGE_TAG:-latest}
    container_name: theweeklychallenge
    restart: unless-stopped
    ports:
      - "1414:1414"
```

<br>

So now, I wanted to build the image and push it to `Docker Hub` to make it available to general public.

I already had an account [**manwardock**](https://hub.docker.com/repositories/manwardock) on `Docker Hub`.

I created a new public repository [**theweeklychallenge**](https://hub.docker.com/repository/docker/manwardock/theweeklychallenge/general) on `Docker Hub`.

Now, it's just a matter of creating an image with a tag and pushing it to this repository.

Without any further issues, I successfully pushed the image.

As of today, we have `v3.13` as the latest tag, which represents the current week `313`.

The plan is that every `Monday` when I release a new challenge, I will also push the updated image.

<br>

## [2025-03-23] UPDATE
***

As I shared my plan above, `Dave Cross` suggested I can automate the process of building new image and pushing to `Docker Hub` on tag push.

I used my `Sunday` morning hours to figure out the process.

It took me few attempts to nail down the process, I must confess.

I created `GitHub` repository just to try things: `https://github.com/manwar/Test-Workflow`

I have a simple `Dockerfile` in the repository.

<br>

```
FROM alpine:latest
CMD echo "Hello, World!"
```

<br>

And then I created workflow configuration file: `.github/workflow/dockerhub.yml`

<br>

```
name: Docker Build and Push

on:
  push:
    tags:
      - 'dhub*'

jobs:
  build-and-push:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Log in to Docker Hub
        uses: docker/login-action@v2
        with:
          username: ${{ secrets.DOCKER_HUB_USERNAME }}
          password: ${{ secrets.DOCKER_HUB_TOKEN }}

      - name: Build and Push
        run: |
          docker build -t ${{ secrets.DOCKER_HUB_USERNAME }}/my-app:${{ github.ref_name }} .
          docker push ${{ secrets.DOCKER_HUB_USERNAME }}/my-app:${{ github.ref_name }}
```

<br>

## [2025-03-23] UPDATE
***

Another quick suggestions from `Dave Cross` with [**reference**](https://docs.docker.com/reference/cli/docker/image/push).

<br>

    docker build -t ${{ secrets.DOCKER_HUB_USERNAME }}/my-app:latest .
    docker push -a ${{ secrets.DOCKER_HUB_USERNAME }}/my-app

<br>

For this, first I created token in `Docker Hub` as below:

<br>

    1. Once logged in, click on your profile icon in the top-right corner.
    2. From the dropdown menu, select Account Settings.
    3. In the left-hand menu, click on Personal access tokens.
    4. Click on Generate new token.
    5. Enter a description for your token (e.g., "GitHub Actions Token").
    6. Choose expires: Never
    7. Choose permission: read and write

<br>

Now time to create secrets in the `GitHub` repository:

<br>

    1. Go to repository settings page
    2. Click: Secrets and variables
    3. Click: Actions
    4. Click: New repository secret
    5. Give secret name: DOCKER_HUB_USERNAME
    6. Give value: manwardock
    7. Click: Add secret

Similarly add another secret, `DOCKER_HUB_TOKEN` and set the token you created in `Docker Hub`.

We are read to test the changed i.e tag the repository and push as below:

<br>

    $ git tag dhubv1.0
    $ git push origin dhubv1.0

<br>

Go to `GitHub` repository and check if everything went OK.

When it is done without error, goto `Docker Hub` check the repository, you should have the tag listed there.

***

<br>

From now on, if anyone wants to run the website locally, they can simply grab the [**configuration file**](https://github.com/manwar/theweeklychallenge/blob/master/docker-compose.yml) and the job is done.

<br>

    $ wget https://raw.githubusercontent.com/manwar/theweeklychallenge/refs/heads/master/docker-compose.yml
    $ docker-compose up -d

<br>

You now have access to your local website: `http://localhost:1414`

And when done with it, simply do this:

<br>

    $ docker-compose down

<br>

This journey has been amazing and great learning process, thanks to `Dave Cross`.

***

`Keep Hacking !!`
