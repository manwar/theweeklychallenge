---
title: "Explain act"
date: 2026-05-10T00:00:00+00:00
description: "Gentle introduction to act."
type: post
image: images/blog/explain-act.jpg
author: Mohammad Sajid Anwar
tags: ["GitHub", "workflow"]
---

#### **DISCLAIMER:** Image is generated using `ChatGPT`.
***
<br>

Just to give you context, `Gabor Szabo`, while working on opensource projects recently, he picked up my latest creation [**DBIx::Class::Async**](https://metacpan.org/dist/DBIx-Class-Async). He noticed, I didn't have workflow configuration file. He kindly created pull request and submitted: [**PR #3**](https://github.com/manwar/DBIx-Class-Async/pull/3). Without wasting a moment, I accepted the pull request and merged.

So now we have this [**Workflow Configuration File**](https://github.com/manwar/DBIx-Class-Async/blob/master/.github/workflows/ci.yaml) and it currently runs on every `push`, `pull_request` and `workflow_dispatch`.

Recently I noticed, it is failing with error everytime I pushed changes to the [**repository**](https://github.com/manwar/DBIx-Class-Async). For my personal projects, I normally avoid `CI/CD` as I am too busy in core project. Therefore, I was always ignoring failed report emails. Just few days ago, I decided to fix the issue. But I didn't want to push the patch to workflow configuration file and see if it works.

It would have been much better, if I can run it locally and test before pushing the working configuration file.

Quick search and I found the tool, [**act**](https://github.com/nektos/act). You can find more about it in the [**user guide**](https://nektosact.com/usage).

#### Why it is called `act`?

I guess, it is called `act` because it allows you to run `GitHub Actions`.

#### What is `act`?

`act` is an open-source tool that allows you to run your `GitHub Actions` workflows locally on your own machine. It provides a fast way to test, debug, and iterate on your `CI/CD` pipelines without the need to push code to `GitHub` every time you make a change.

At its heart, `act` uses `Docker` to create an environment that mimics a GitHub-hosted runner.

Being a big `Docker` fan, I already have it running locally.

```bash
$ docker info --format '{{.ServerVersion}}'
29.4.2
```

Installing `act` is just one command away:

```bash
$ curl -s https://raw.githubusercontent.com/nektos/act/master/install.sh | sudo bash
$ act --version
act version 0.2.88
```

So when you run `act`, it pulls a `Docker` image that contains the necessary tools. Each job in your workflow runs in its own isolated container, ensuring that your local system’s files and settings don't interfere with the test. It automatically sets up internal networks also.

#### But why `act`?

You get fast feedback, instead of waiting minutes for a `GitHub` runner to pick up your job and report a syntax error, you get results in seconds on your terminal. It uses your local `CPU` and `RAM`, which helps avoid consuming `GitHub Actions` minute quotas, especially for private repositories.

The best is that, you can run `act` with the `-i` flag to stay inside the container after a failure, allowing you to poke around and see why it is failing.

When you first run `act`, it asks you to choose an image size: `Micro`, `Medium` or `Large`

    Micro : Just Node.js (~200 MB)
    Medium: Most standard CI tasks (~500 MB)
    Large : Enterprise workflows with many complex dependencies (~20 GB)

Before you run, you need to have workflow configuration file in this folder: `.github/workflows/`

Now that we have everything setup, time to run `act` locally. I found one missng dependency and quickly fixed the configuration file. But soon it started complaining about existing unit test which runs happily otherwise. I had to tweak it a bit to keep it happy. I learned new trick in the process.

Finally no more error and last report is [**green**](https://github.com/manwar/DBIx-Class-Async/actions/runs/25448984043).

Here is some commonly used commands:

    act                       Runs the default push event workflows.
    act -l                    Lists all the jobs available in your workflows.
    act -j <job_id>           Runs only a specific job.
    act --secrets-file <file> Loads local secrets to fill ${{ secrets.VAR }} placeholders.
    act -m perl:5.38          Runs only the specific matrix combination for Perl 5.38.

***

<br>

`Happy Hacking !!!`
