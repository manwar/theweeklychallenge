---
title: "git refs ..."
date: 2025-04-06T00:00:00+00:00
description: "Discussion about the git refs command."
type: post
image: images/blog/git-refs.png
author: Mohammad Sajid Anwar
tags: ["git"]
---

#### **DISCLAIMER:** Image is generated using `FREE` version of `ChatGPT`.
***

<br>

<div class="container">
    <div class="row g-4 justify-content-center">
        <div class="col-12 col-sm mb-3 p-2 text-center">
            <a href="/blog/github-actions" title="GitHub Actions">
                <img src="/images/blog/github-actions-mini.png" class="img-fluid"
                style="object-fit: cover; aspect-ratio: 16/9;">
            </a>
        </div>
        <div class="col-12 col-sm mb-3 p-2 text-center">
            <a href="/blog/git-bisect" title="git bisect ...">
                <img src="/images/blog/git-bisect-mini.png" class="img-fluid rounded-3 border border-3"
                style="object-fit: cover; aspect-ratio: 16/9;">
            </a>
        </div>
        <div class="col-12 col-sm mb-3 p-2 text-center">
            <a href="/blog/github-meets-gitlab" title="GitHub meets GitLab">
                <img src="/images/blog/github-meets-gitlab-mini.png" class="img-fluid rounded-3 border border-3"
                style="object-fit: cover; aspect-ratio: 16/9;">
            </a>
        </div>
        <div class="col-12 col-sm mb-3 p-2 text-center">
            <a href="/blog/git-show" title="git show ...">
                <img src="/images/blog/git-show-mini.png" class="img-fluid rounded-3 border border-3"
                style="object-fit: cover; aspect-ratio: 16/9;">
            </a>
        </div>
    </div>
</div>

***

## [1. Introduction](#introduction)
## [2. Types of refs](types-of-refs)
## [3. List refs](#list-refs)
## [4. Useful Commands](#useful-command)
## [5. HEAD shortcuts](#head-shortcuts)
## [6. Types of HEAD](#types-of-head)
## [7. trunk in Git](#trunk-in-git)
## [8. Git Remotes](#git-remotes)
## [9. Types of Remote refs](#types-of-remote-refs)

<br>

## Introduction
***

Today is such a fine and sunny `Sunday` morning to do some brain dumping and share it with you.

It's exactly one week since the end of `Ramadan` and this is my first blog after `Ramadan`.

As predicted, I went into my shell after `Ramadan`, which isn't a good sign.

I'll try and keep breaking the cycle and come out of it as much as I can.

This is something I never bothered to look into in detail and because of that, I’ve ended up in a big mess a few times.

Today, I decided to understand it from the ground up, so that during difficult times, I’ll be able to navigate my way out.

So, what are `git references` or `git refs`?

As the name suggests, they are pointers to commits in your repository.

They are fundamental to how `Git` tracks and organizes changes.

<br>

## Types of refs
***

<br>

### 1. Branches
<br>

These are refs that move forward as you commit e.g. `.git/refs/heads/master`

<br>

### 2. Tags
<br>

These are typically static refs that mark specific points e.g. `.git/refs/tags/wk-001`

<br>

### 3. Remotes
<br>

These track branches from remote repositories e.g. `.git/refs/remotes/origin/master`

<br>

## List refs
***

<br>

I am using this [**repository**](https://github.com/manwar/perlweeklychallenge-club) for reference in the post below.

The command `git show-ref` lists all refs in the repository.

<br>

```bash
$ git show-ref
aca905aa8d68c769bcd9a8fd532458398024ed11 refs/heads/master
aca905aa8d68c769bcd9a8fd532458398024ed11 refs/remotes/origin/HEAD
aca905aa8d68c769bcd9a8fd532458398024ed11 refs/remotes/origin/master
9f6decc59edcef202bfddc3d662400a0ad611156 refs/tags/wk-001
7f358d36c3f71f78707ea2149d05a8a646a95282 refs/tags/wk-002
...
...
```

<br>

All refs are stored in the `.git/refs/` subfolder as below:

<br>

```bash
$ tree .git/refs/
.git/refs/
├── heads
│   └── master
├── remotes
│   └── origin
│       ├── HEAD
│       └── master
└── tags
    ├── wk-306
    ├── wk-307
    ├── wk-308
    ├── wk-309
    ├── wk-310
    ├── wk-311
    ├── wk-312
    ├── wk-313
    ├── wk-314
    └── wk-315
```

<br>


There is a special ref i.e. `HEAD`, which points to your current branch or commit: `.git/HEAD`

<br>

```bash
$ cat .git/HEAD
ref: refs/heads/master
```

<br>

## Useful Commands
***

<br>

### git show HEAD

<br>

It shows the commit that `HEAD` currently points to.

<br>

```bash
$ git show HEAD
commit aca905aa8d68c769bcd9a8fd532458398024ed11 (HEAD -> master, origin/master, origin/HEAD)
Author: Mohammad Sajid Anwar <mohammad.anwar@yahoo.com>
Date:   Sun Apr 6 01:37:15 2025 +0100

    - Added solutions by Arne Sommer.
    - Added solutions by Jan Krnavek.
    - Added solutions by Kjetil Skotheim.

diff --git a/stats/pwc-challenge-310.json b/stats/pwc-challenge-310.json
index 89a729bc16..8c017f3efb 100644
--- a/stats/pwc-challenge-310.json
+++ b/stats/pwc-challenge-310.json
@@ -1,184 +1,30 @@
 {
+   "legend" : {
+      "enabled" : 0
+   },
    "yAxis" : {
       "title" : {
          "text" : "Total Solutions"
       }
    },
```

<br>

The first line: `commit aca905aa8d68c769bcd9a8fd532458398024ed11 (HEAD -> master, origin/master, origin/HEAD)` is particularly very handy.

It tells the `HEAD` is currently pointing to local `master` branch as well as remote `master` and `HEAD`.

This mean, my local repository is in good health.

<br>

### git symbolic-ref HEAD

<br>

It shows which branch `HEAD` is pointing to.

<br>

```bash
$ git symbolic-ref HEAD
refs/heads/master
```

<br>


<br>

### git diff HEAD~1 HEAD

<br>

It compares the previous commit with the current one.

<br>

```bash
$ git diff HEAD~1 HEAD
diff --git a/stats/pwc-challenge-310.json b/stats/pwc-challenge-310.json
index 89a729bc16..8c017f3efb 100644
--- a/stats/pwc-challenge-310.json
+++ b/stats/pwc-challenge-310.json
@@ -1,184 +1,30 @@
 {
+   "legend" : {
+      "enabled" : 0
+   },
    "yAxis" : {
       "title" : {
          "text" : "Total Solutions"
       }
    },
...
...
...
```

<br>

You can also use this instead to get the same result: `git diff HEAD^1 HEAD`

<br>

## HEAD shortcuts
***

<br>

**HEAD~ / HEAD^** - Parent of `HEAD`.

**HEAD@{n}** - The `nth` prior position of `HEAD` (useful with `reflog`).

<br>

```bash
$ git diff HEAD@{7} HEAD
diff --git a/challenge-310/kjetillll/perl/ch-1.pl b/challenge-310/kjetillll/perl/ch-1.pl
new file mode 100644
index 0000000000..c6fa2056a2
--- /dev/null
+++ b/challenge-310/kjetillll/perl/ch-1.pl
@@ -0,0 +1,13 @@
+sub f {
+    my @arr = @_;
+    my %elem;
+    for my $i ( 0 .. $#arr ){
+        $elem{$_}{$i}++ for @{ $arr[$i] };
+    }
+    sort{ $a <=> $b } grep @_ == keys %{ $elem{$_} }, keys %elem
+}
+
+use Test::More tests => 3;
+is_deeply [ f( [1, 2, 3, 4], [4, 5, 6, 1], [4, 2, 1, 3] ) ], [1, 4];
+is_deeply [ f( [1, 0, 2, 3], [2, 4, 5] )                  ], [2];
+is_deeply [ f( [1, 2, 3], [4, 5], [6] )                   ], [];
```

<br>

The command: `git reflog` keeps track of changes to the tips of branches and other references in the local repository.

It is essentially a safety net that records when the tips of branches were updated in the local repository.

It maintains history of:

<br>

    - Branch checkouts
    - Resets
    - Rebases
    - Commits

<br>

Unlike `git log`, which shows the commit history, the `reflog` shows the history of your `refs` and `HEAD`.

<br>

```bash
$ git reflog
aca905aa8d (HEAD -> master, origin/master, origin/HEAD) HEAD@{0}: checkout: moving from 68323c4b8f9cd1240b453d353c019470086799a4 to master
68323c4b8f HEAD@{1}: checkout: moving from master to 68323c4b8
aca905aa8d (HEAD -> master, origin/master, origin/HEAD) HEAD@{2}: commit: - Added solutions by Arne Sommer.
68323c4b8f HEAD@{3}: merge refs/remotes/origin/master: Fast-forward
d077b4b0d2 HEAD@{4}: commit: - Added solutions by Jorg Sommrey.
9c04e8a9a8 HEAD@{5}: merge refs/remotes/origin/master: Fast-forward
...
...
```

<br>

Always remember, it exists only in your local repository and isn't shared when you `push`/`pull`.

It expires after `90 days` by default and configurable.

It helps recover lost commits and branches.

<br>

### Common Use Cases

<br>

**Recover Lost Work**

<br>

Use `git reflog` to find the commit before the error then use this to recover: `git reset --hard HEAD@{3}`

<br>

```bash
$ git reflog
aca905aa8d (HEAD -> master, origin/master, origin/HEAD) HEAD@{0}: checkout: moving from 68323c4b8f9cd1240b453d353c019470086799a4 to master
68323c4b8f HEAD@{1}: checkout: moving from master to 68323c4b8
aca905aa8d (HEAD -> master, origin/master, origin/HEAD) HEAD@{2}: commit: - Added solutions by Arne Sommer.
68323c4b8f HEAD@{3}: merge refs/remotes/origin/master: Fast-forward
d077b4b0d2 HEAD@{4}: commit: - Added solutions by Jorg Sommrey.
9c04e8a9a8 HEAD@{5}: merge refs/remotes/origin/master: Fast-forward
...
...
```

<br>

**Reflog of Branch**

<br>

Show `reflog` for a specific branch: `git reflog show <branch_name>`

<br>

```bash
$ git reflog show master
aca905aa8d (HEAD -> master, origin/master, origin/HEAD) master@{0}: commit: - Added solutions by Arne Sommer.
68323c4b8f master@{1}: merge refs/remotes/origin/master: Fast-forward
d077b4b0d2 master@{2}: commit: - Added solutions by Jorg Sommrey.
9c04e8a9a8 master@{3}: merge refs/remotes/origin/master: Fast-forward
1be16da34e master@{4}: commit: - Added solutions by Peter Pentchev.
fc88fe7ab3 master@{5}: merge refs/remotes/origin/master: Fast-forward
c458ab51a3 master@{6}: merge refs/remotes/origin/master: Fast-forward
...
...
```

<br>

**More details than the `git log`**

<br>

```bash
$ git reflog --format=fuller
commit aca905aa8d (HEAD -> master, origin/master, origin/HEAD)
Reflog: HEAD@{0} (Mohammad Sajid Anwar <mohammad.anwar@yahoo.com>)
Reflog message: checkout: moving from 68323c4b8f9cd1240b453d353c019470086799a4 to master
Author:     Mohammad Sajid Anwar <mohammad.anwar@yahoo.com>
AuthorDate: Sun Apr 6 01:37:15 2025 +0100
Commit:     Mohammad Sajid Anwar <mohammad.anwar@yahoo.com>
CommitDate: Sun Apr 6 01:37:15 2025 +0100

    - Added solutions by Arne Sommer.
    - Added solutions by Jan Krnavek.
    - Added solutions by Kjetil Skotheim.

...
...
```

<br>

## Types of HEAD
***

<br>

### 1. Attached HEAD

<br>

When `HEAD` points to a branch, it is called `attached HEAD`.

<br>

```bash
$ git status
On branch master
Your branch is up to date with 'origin/master'.
nothing to commit, working tree clean
```

<br>

### 2. Detached HEAD

<br>

When `HEAD` points directly to a commit, it is called `detached HEAD`.

<br>

```bash
$ git checkout 68323c4b8
Note: switching to '68323c4b8'.

You are in 'detached HEAD' state. You can look around, make experimental
changes and commit them, and you can discard any commits you make in this
state without impacting any branches by switching back to a branch.

If you want to create a new branch to retain commits you create, you may
do so (now or later) by using -c with the switch command. Example:

  git switch -c <new-branch-name>

Or undo this operation with:

  git switch -

Turn off this advice by setting config variable advice.detachedHead to false

HEAD is now at 68323c4b8f Merge pull request #11828 from arnesom/branch-for-challenge-315
```

<br>

## trunk in Git
***

<br>

Have you heard of the `trunk` in `Git`?

The term `trunk` refers to the `primary branch` where main development happens.

It’s borrowed from older version control systems like `Subversion (SVN)`.

In `Git`, there's no official branch called `trunk`, but the idea maps to the `main` or `master` branch, the default `primary branch` in most repositories.

<br>

## Git Remotes
***

<br>

`Remotes` (or `remote repositories`) are references to versions of your project hosted on another server.

They allow collaboration by `pushing` and `pulling` changes between your `local` repo and the `remote`.

The `default remote` name is `origin`, which is created when you `clone` a repository.

Remote configurations are stored in `.git/config` and `.git/refs/remotes/`.

Common `remote hosts` include `GitHub`, `GitLab`, `Bitbucket` etc.

<br>

```bash
$ cat .git/config
[core]
        repositoryformatversion = 0
        filemode = true
        bare = false
        logallrefupdates = true
[remote "origin"]
        url = https://github.com/manwar/perlweeklychallenge-club
        fetch = +refs/heads/*:refs/remotes/origin/*
[branch "master"]
        remote = origin
        vscode-merge-base = origin/master
        merge = refs/heads/master
```

<br>

```bash
$ tree .git/refs/remotes/
.git/refs/remotes/
└── origin
    ├── HEAD
    └── master

2 directories, 2 files
```

<br>

## Types of Remote refs
***

<br>

### 1. Remote Branch

<br>

These track the state of branches on the remote server.

<br>

```bash
$ cat .git/refs/remotes/origin/master
aca905aa8d68c769bcd9a8fd532458398024ed11
```

<br>

### 2. Remote HEAD

<br>

It points to the default branch on the remote repository.

<br>

```bash
$ cat .git/refs/remotes/origin/HEAD
ref: refs/remotes/origin/master
```

<br>

### Common remote commands

<br>

To lists all remotes and their URLs: `git remote -v`

<br>

```bash
$ git remote -v
origin  https://github.com/manwar/perlweeklychallenge-club (fetch)
origin  https://github.com/manwar/perlweeklychallenge-club (push)
```

<br>

To add new remote: `git remote add <remote_name> <remote_url>`

To remove a remote: `git remote remove <remote_name>`

To fetch changes from a remote: `git fetch <remote_name>`

To Fetch and merge changes from a remote branch into your current branch: `git pull <remote_name> <branch>`

<br>

***

<br>

`Don't stop learning !!!`
