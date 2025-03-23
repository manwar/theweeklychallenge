---
title: "Terraform with Docker"
date: 2025-03-23T00:00:00+00:00
description: "Discussion about Terraform with Docker."
type: post
image: images/blog/terraform-docker.png
author: Mohammad Sajid Anwar
tags: ["Terraform", "Docker"]
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
    <a href="/blog/build-docker-image" title="Build Docker Image">
        <img src="/images/blog/build-docker-image-mini.png" width="200">
    </a>
</div>

<br>

## Terraform with Docker
***

### [1. Introduction](#introduction)
### [2. Objectives](#objectives)
### [3. What is Terraform?](#what-is-terraform)
### [4. Why Terraform?](#why-terraform)
### [5. Terraform Configuration File](#terraform-configuration-file)
### [6. Terraform Workflow](#terraform-workflow)
### [7. Setup](#setup)
### [8. Action](#action)
### [9. Cleanup](#cleanup)

<br>

## Introduction
***

A few days ago, I shared my story about creating a `Docker` image for [**The Weekly Challenge**](https://theweeklychallenge.org) website in this [**blog post**](https://theweeklychallenge.org/blog/build-docker-image).

It was a great learning experience for me, I had never done it before.

Recently at work, I got the opportunity to work with `Terraform`.

Once again, it was my first time using it.

I decided to learn the basics of `Terraform` so that at least I understand what I'm doing.

<br>

## Objectives
***

The plan is to familiarise myself with `Terraform` and then use the tool to build the `Docker` image for `The Weekly Challenge` website.

Sounds easy, right?

Not for me, at least not yet, but we will see.

<br>

## What is Terraform?
***

`Terraform` is an open-source `Infrastructure as Code (IaC)` tool developed by `HashiCorp`.

It allows you to define, provision and manage infrastructure using a declarative configuration language.

Not bad so far.

<br>

## Why Terraform?
***

It automates infrastructure, eliminating manual steps.

It supports various cloud providers e.g. `AWS`, `Azure`.

It follows a declarative approach i.e. we define what we want and it figures out how to do it.

It also keeps track of the infrastructure state. Last but not least, it automatically handles dependencies.

That's enough reason for me to give `Terraform` a try.

How about you?

<br>

## Terraform Configuration File
***

`Terraform` uses `HCL (HashiCorp Configuration Language)` to define infrastructure.

The most commonly used configuration file: `main.tf`

<br>

## Terraform Workflow
***
    1. Initialise             : terraform init
    2. Preview Changes        : terraform plan
    3. Apply Configuration    : terraform apply
    4. Destroy Infrastructure : terraform destroy

Terraform tracks infrastructure using a state file: `terraform.tfstate`

<br>

## Setup
***

Since, I'm doing this for the first time, I had to setup my environment.

On my personal laptop, running `Ubuntu 24.04.1 LTS` under `WSL2`, here is what I did.

<br>

    $ wget -O - https://apt.releases.hashicorp.com/gpg | sudo gpg --dearmor -o /usr/share/keyrings/hashicorp-archive-keyring.gpg

    $ echo "deb [arch=$(dpkg \
      --print-architecture) \
      --signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] \
      https://apt.releases.hashicorp.com \
      $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/hashicorp.list

    $ sudo apt update && sudo apt install terraform

<br>

Test the installation:

<br>

    $ terraform --version
    Terraform v1.11.2
    on linux_amd64

<br>

I already have `Docker` on my machine, so I skipped that bit.

But in case you need it, please find the instructions below:

<br>

    $ sudo apt update
    $ sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
    $ sudo usermod -aG docker $USER
    $ docker --version

<br>

## Action
***

Time for some real action.

I am going to create my `Terraform` configuration file: `main.tf` in the [**GItHub repository**](https://github.com/manwar/theweeklychallenge) where I already have the [**Dockerfile**](https://github.com/manwar/theweeklychallenge/blob/master/Dockerfile) saved.

Here is my basic configuration file:

```
# Configure the Docker provider
terraform {
  required_providers {
    docker = {
      source = "kreuzwerker/docker"
      version = "3.0.2"
    }
  }
}

# Define the Docker image to be built
resource "docker_image" "theweeklychallenge" {
  name = "theweeklychallenge:latest"
  build {
    context = "."
    tag     = ["theweeklychallenge:latest"]
  }
}

# Output the image ID after creation
output "image_id" {
  value = docker_image.theweeklychallenge.image_id
}
```

<br>

Let's start the process.

As soon as I fired the first command: `terraform init`, I got encountered the following error:

<br>

    Error loading shared library libstdc++.so.6: No such file or directory (needed by /theweeklychallenge/bin/hugo)
    Error loading shared library libgcc_s.so.1: No such file or directory (needed by /theweeklychallenge/bin/hugo)

<br>

It turned out that my `Dockerfile` was missing some libraries: `libstdc++`, `libgcc`

So I updated the `Dockerfile` and now it looks like below:

<br>

```
FROM alpine:latest
LABEL maintainer="mohammad.anwar@yahoo.com"

RUN apk add --no-cache libc6-compat
RUN apk add --no-cache libstdc++ libgcc

WORKDIR /theweeklychallenge
COPY . /theweeklychallenge

EXPOSE 1414
CMD ["bin/hugo", "server", "-p", "1414", "-D", "--bind", "0.0.0.0"]
```

<br>

Let's re-run the command:

<br>

    $ terraform init
    Initializing the backend...
    Initializing provider plugins...
    - Finding kreuzwerker/docker versions matching "3.0.2"...
    - Installing kreuzwerker/docker v3.0.2...
    - Installed kreuzwerker/docker v3.0.2 (self-signed, key ID BD080C4571C6104C)
    Partner and community providers are signed by their developers.
    If you'd like to know more about provider signing, you can read about it here:
    https://www.terraform.io/docs/cli/plugins/signing.html
    Terraform has created a lock file .terraform.lock.hcl to record the provider
    selections it made above. Include this file in your version control repository
    so that Terraform can guarantee to make the same selections by default when
    you run "terraform init" in the future.

    Terraform has been successfully initialized!

    You may now begin working with Terraform. Try running "terraform plan" to see
    any changes that are required for your infrastructure. All Terraform commands
    should now work.

    If you ever set or change modules or backend configuration for Terraform,
    rerun this command to reinitialize your working directory. If you forget, other
    commands will detect it and remind you to do so if necessary.

<br>

So far so good, passed the init stage.

Now move to next stage:

<br>

    $ terraform apply
    ...
    ...
    ...
    docker_image.theweeklychallenge: Creating...
    ...
    ...
    Apply complete! Resources: 1 added, 0 changed, 0 destroyed.

    Outputs:
    image_id = "sha256:055c55d698c6455c108ead190cbd06773066c3d50dc9eceb673a006a785a4a75"

<br>

Cool, the `Docker` image has been created.

Let's verify that:

<br>

    $ docker images
    REPOSITORY                      TAG       IMAGE ID       CREATED         SIZE
    theweeklychallenge              latest    055c55d698c6   5 seconds ago   1.09GB

<br>

Indeed, we now have a `Docker` image.

<br>

Let's run the container now:

<br>

    $ docker run\
    --name theweeklychallenge \
    -p 1414:1414 \
    -d theweeklychallenge:latest
    06a5f07b26dcc1909ffa837ab507483892cf7daf2b2bd673ba50c0793e0d86de

***

<br>

We will check the status of container:

<br>

    $ dps
    Container ID: 06a5f07b26dc
    Image: theweeklychallenge:latest
    Command: "bin/hugo server -p …"
    Created: 2025-03-23 05:09:04 +0000 GMT
    Status: Up 6 seconds
    Ports: 0.0.0.0:1414->1414/tcp, [::]:1414->1414/tcp

<br>

`dps` is the alias. I created earlier for nice formatted output of the command: `docker ps`.

<br>

    alias dps='docker ps --format "Container ID: {{.ID}}\nImage: {{.Image}}\nCommand: {{.Command}}\nCreated: {{.CreatedAt}}\nStatus: {{.Status}}\nPorts: {{.Ports}}\nNames: {{.Names}}\n"'

<br>

Time to access the weekly challenge site running inside the container using the image built by `Terraform`:

`http://localhost:1414`

I got lucky, everything works fine.

<br>

## Cleanup
***

Let's do the cleaning.

We need to stop the container and then remove it too first.

<br>

    $ docker stop theweeklychallenge
    theweeklychallenge
    $ docker rm theweeklychallenge
    theweeklychallenge

<br>

Now we will ask, `Terraform` to do the destruction for me.

<br>

    $ terraform destroy
    ...
    ...
    docker_image.theweeklychallenge: Destruction complete after 0s
    Destroy complete! Resources: 1 destroyed.

<br>

However I still see some leftovers.

So I did the manually cleaning:

<br>

    $ rm -rf .terraform/ terraform.tfstate* .terraform.lock.hcl

<br>

Everything back to original state. I hope you had fun with me in this journey.

***

`Keep Hacking !!`
