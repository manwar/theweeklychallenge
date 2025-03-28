---
title: "GitHub meets GitLab"
date: 2025-03-28T00:00:00+00:00
description: "Discussion about GitHub and GitLab comparison."
type: post
image: images/blog/github-meets-gitlab.png
author: Mohammad Sajid Anwar
tags: ["GitHub", "GitLab"]
---

#### **DISCLAIMER:** Image is generated using `FREE` version of `ChatGPT`.
***

<br>

<div class="container">
    <div class="row g-4 justify-content-center">
        <div class="col-12 col-sm mb-4 p-2 text-center">
            <a href="/blog/git-show" title="git show ...">
                <img src="/images/blog/git-show-mini.png" class="img-fluid"
                style="object-fit: cover; aspect-ratio: 16/9;">
            </a>
        </div>
        <div class="col-12 col-sm mb-4 p-2 text-center">
            <a href="/blog/git-bisect" title="git bisect ...">
                <img src="/images/blog/git-bisect-mini.png" class="img-fluid rounded-3 border border-3"
                style="object-fit: cover; aspect-ratio: 16/9;">
            </a>
        </div>
        <div class="col-12 col-sm mb-4 p-2 text-center">
            <a href="/blog/github-actions" title="GitHub Actions">
                <img src="/images/blog/github-actions-mini.png" class="img-fluid rounded-3 border border-3"
                style="object-fit: cover; aspect-ratio: 16/9;">
            </a>
        </div>
    </div>
</div>

<br>

## GitHub meets GitLab
***

Recently at work, I had to work with a codebase that resides in `GitLab`.

I am a die-hard `GitHub` user and never considered `GitLab` for any one of my pet projects.

All my open-source work is public on [**GitHub**](https://github.com/manwar).

That said, I created an account, `@manwar`, on `GitLab` as a protest when `Microsoft` took over `GitHub`, but I never used it as much as `GitHub`.

As a trial, I did create a [**project**](https://gitlab.com/manwar/BankAccount-Validator-UK) for one of my `CPAN` module [**BankAccount::Validator::UK**](https://metacpan.org/dist/BankAccount-Validator-UK), six years ago.

<br>

## Year 2025
***

Fast forward to today, I find myself staring at `GitLab` again.

To familiarise myself with the `GitLab UI`, I created a new project called [**Hello World**](https://gitlab.com/manwar/hello-world).

I even added a simple [**pipeline**](https://gitlab.com/manwar/hello-world/-/blob/main/.gitlab-ci.yml) which is equivalent to a `workflow` in `GitHub`.

I tested it with a new `branch` and a `merge request`.

I experienced a bit of culture shock when I encountered `GitLab`'s terminology.

So, I decided to take a step back, understand everything from ground up.

In this post, I'll explore `GitLab` from a `GitHub` user's perspective to make it easier for me to grasp.

<br>

## Top-level container
***

In `GitHub` we have something called `GitHub Organisation`.

I didn't use it initially because I wasn't aware of it when I started.

By the time I learned about it, it felt too late and time consuming to restructure everything.

So I stuck with standalone repositories.

In `GitLab`, the equivalent of an `Organisation` is called a `Group`.

Just like in `GitHub`, you don't need to have a `GitHub Organisation` to create a repository; in `GitLab` also, you can create a project without a `Group`.

By the way, what `GitHub` calls a repository, `GitLab` calls a `project`.

<br>

## Teams
***

In `GitHub Organisation`, you can create multiple teams.

And each team can be granted access to one or more repositories within the `GitHub Organisation`.

Similarly, in `GitLab`, within a group, you can have multiple subgroups (forming a nested hierarchy).

**GitLab:** `https://gitlab.com/<group-name>/<subgroup-name>/<project-name>`

**GitHub:** `https://github.com/<org-name>/<repo-name>`

<br>

## Code Reviews
***

To initiate a code review in `GitHub`, we create a `pull request` after pushing the changes to a branch.

In `GitLab` this is called a `merge request`, but the process remains the same.

<br>

## CI/CD
***

In `GitHub`, we use `GitHub Actions` for workflow, configured in `.github/workflows/*.yml`.

In `GitLab`, it is called `pipeline` and the configuration file is `.gitlab-ci.yml`.

<br>

***

For now, this was enough to get me started.

I know, `GitLab` is a beast compared to `GitHub`.

I am going take one baby step at a time.

<br>

***

`Keep Hacking !!`
