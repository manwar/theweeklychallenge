---
title: "GitHub Actions"
date: 2025-03-22T00:00:00+00:00
description: "Discussion about GitHub Actions."
type: post
image: images/blog/github-actions.png
author: Mohammad Sajid Anwar
tags: ["Docker"]
---

#### **DISCLAIMER:** Image is generated using `FREE` version of `ChatGPT`.
***

<br>

# GitHub Actions
***

### [1. Introduction](#introduction)
### [2. Workflow](#workflow)
### [3. Top Level Keys](#top-level-keys)
### [4. Event Types](#event-types)
### [5. Repository Events](#repository-events)
### [6. Job Components](#job-components)
### [7. Example](#example)

<br>

## Introduction
***

I have been planning to learn `GitHub Actions` for a long time. I attended a [**talk**](https://www.youtube.com/watch?v=ol_Qk31v17g) by `Dave Cross` in `2023` at the `Perl Conference` in `Toronto` but when I came back home, I got distracted. Then came the book, [**GitHub Actions Essentials**](https://leanpub.com/githubactionsessentials) by `Dave Cross`, which reminded me again to get my act together and learn the tool.

Now, in `2025`, I have finally decided to crack the nut or at least familiarise myself with it. I haven't bought `Dave Cross`'s book yet, so I can't comment on it. However, I am pretty confident, it must be good since it is written by `Dave Cross`. If you have read the book then please let me know your thoughts.

In this post, I am sharing my learning process and documenting it for future reference.

<br>

## GitHub Actions
***

`GitHub Actions` is a platform provided by `GitHub` for automating software development workflows. It includes features like `CI/CD`, `automated testing` and many more.

<br>

## Workflow
***

A `workflow` is a specific automated process defined within `GitHub Actions`. It uses one or more actions to perform a series of tasks. Workflow files must be placed in the `.github/workflows` directory of your repository.

A workflow can include multiple jobs and each job can contain multiple steps. A step in a workflow can either use `GitHub Action` or run shell commands.

<br>

## Top Level Keys
***

There are three required top-level keys and five optional top-level keys in a workflow file.

<br>

### Required Keys
    1. name        : It defines the name of the workflow.
    2. on          : It defines the events that trigger the workflow.
    3. jobs        : The jobs that make up the workflow.

<br>

### Optional Keys
    1. env         : Environment variables available to all jobs and steps.
    2. defaults    : Default settings for all jobs.
    3. concurrency : Controls concurrent runs of the workflow or job.
    4. permissions : Configures permissions for the GITHUB_TOKEN.
    5. run-name    : A dynamic name for the workflow run.

<br>

I am skipping optional top-level keys for now.

<br>

## Event Types
***

There are four main type of events that can be part of top-level key `on`.

<br>

    1. Repository Events
    2. Scheduled Events
    3. Manual Events
    4. Webhook Events

<br>

## Repository Events
***

In this post, I will focus on just `repository events`.

<br>

     1. push               : Triggers when code is pushed to a branch or tag.
     2. pull_request       : Triggers when a pull request is opened, synchronized, or closed.
     3. pull_request_target: Similar to pull_request, but runs in the context of the base branch.
     4. issues             : Triggers when an issue is opened, edited, or closed.
     5. issue_comment      : Triggers when a comment is created, edited, or deleted on an issue or pull request.
     6. label              : Triggers when a label is created, edited, or deleted.
     7. milestone          : Triggers when a milestone is created, closed, or deleted.
     8. project            : Triggers when a project board is created, updated, or deleted.
     9. project_card       : Triggers when a project card is created, moved, or deleted.
    10. project_column     : Triggers when a project column is created, updated, or deleted.
    11. release            : Triggers when a release is published, unpublished, or deleted.
    12. watch              : Triggers when someone stars the repository.
    13. fork               : Triggers when someone forks the repository.
    14. create             : Triggers when a branch or tag is created.
    15. delete             : Triggers when a branch or tag is deleted.
    16. public             : Triggers when the repository is made public.
    17. status             : Triggers when the status of a commit changes.

<br>

## Job Components
***

For the required top-level key: `jobs`, there are two required key components and seven optional components.

<br>

### Required Components

    1. runs-on        : Specifies the type of runner (virtual environment) to use.
    2. steps          : A list of steps to execute in the job.

<br>

### Optional Components

    1. needs          : Specifies dependencies between jobs.
    2. env            : Sets environment variables for the job.
    3. if             : Adds a condition to control whether the job runs.
    4. timeout-minutes: Sets a timeout for the job (in minutes).
    5. outputs        : Defines outputs that can be used by other jobs.
    6. services       : Defines services that the job needs.
    7. container      : Runs the job in a Docker container.

<br>

## Example
***

The following workflow named, `CI/CD Pipeline`, triggers on a `push` to the `main` branch and runs a job named `build` followed by the job `test` as it has `needs: build`. After that it runs `deploy` job as it has `needs: test`.

<br>

```
name: CI/CD Pipeline

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3
      - name: Build project
        run: npm run build

  test:
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Checkout code
        uses: actions/checkout@v3
      - name: Run tests
        run: npm test

  deploy:
    runs-on: ubuntu-latest
    needs: test
    if: github.ref == 'refs/heads/main'
    steps:
      - name: Checkout code
        uses: actions/checkout@v3
      - name: Deploy to production
        run: ./deploy.sh
```

<br>

With a basic knowledge of `GitHub Actions`, I am ready to create workflow in the [**GitHub repository**](https://github.com/manwar/Map-Tube) of my `CPAN` module [**Map::Tube**](https://metacpan.org/pod/Map::Tube).

I need to create a new `Personal Access Token (PAT)` with the `workflow` scope.

<br>

    - Go to user profile settings page
    - Click: Developer settings
    - Click: Personal access tokens:
    - Click: Tokens (classic)
    - Click: Generate new token:
    - Select: Generate new token (classic)
    - Give Note a name
    - Select: Expiration
    - Select: scopes
    - Click: Generate token button

<br>

Now I have a `PAT`.

Time to create new repository secret to be used in the workflow.

<br>

    - Go to repository settings page
    - Click: Secrets and variables
    - Click: Actions
    - Click: New repository secret
    - Give secret name: WORKFLOW_PAT
    - Paste the PAT created above in the secret box
    - Click: Add secret

<br>

I have always tagged the `master` branch every time I push a new version to `CPAN`. As of today, I have [**100 tags**](https://github.com/manwar/Map-Tube/tags).

For example, when I released `v4.02`, I added the tag `v4.02`, creating a direct relationship to the version.

`GitHub` has a nice feature called `GitHub Release` that I never bothered to use. It allows developers to package and distribute a specific version of a project along with release notes, binaries and other assets.

Now, I am going to create a basic workflow file in the repository to automatically create a release every time I tag the master branch using the format `v*`.

<br>

###  **Source:** [[&nbsp; .github/workflows/release.yml &nbsp;]](https://github.com/manwar/Map-Tube/blob/master/.github/workflows/release.yml)
***
```
name: Release on Tag

on:
  push:
    tags:
      - 'v*'

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout code
      uses: actions/checkout@v3

  release:
    needs: build
    runs-on: ubuntu-latest

    steps:
    - name: Checkout code
      uses: actions/checkout@v3

    - name: Create Release
      id: create_release
      uses: actions/create-release@v1
      env:
        GITHUB_TOKEN: ${{ secrets.WORKFLOW_PAT }}
      with:
        tag_name: ${{ github.ref }}
        release_name: Release ${{ github.ref }}
        draft: false
        prerelease: false
```

<br>

I am all set now. Next time I push a new release to `CPAN`, I will tag it and see if the workflow automatically creates a release for me, `fingers crossed`.

<br>

### Proof of Concept
***

I did exactly the same for my test repository: [**Test-Workflow**](https://github.com/manwar/Test-Workflow) and it successfully created a [**release**](https://github.com/manwar/Test-Workflow/releases) for me.

<br>

***

`Keep Hacking !!`
