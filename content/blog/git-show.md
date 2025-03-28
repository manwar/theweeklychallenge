---
title: "git show ..."
date: 2025-03-17T00:00:00+00:00
description: "Discussion about the git show command."
type: post
image: images/blog/git-show.png
author: Mohammad Sajid Anwar
tags: ["git"]
---

#### **DISCLAIMER:** Image is generated using `FREE` version of `ChatGPT`.
***

<br>

<div class="container">
    <div class="row g-4 justify-content-center">
        <div class="col-12 col-sm mb-4 p-2 text-center">
            <a href="/blog/github-actions" title="GitHub Actions">
                <img src="/images/blog/github-actions-mini.png" class="img-fluid"
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
            <a href="/blog/github-meets-gitlab" title="GitHub meets GitLab">
                <img src="/images/blog/github-meets-gitlab-mini.png" class="img-fluid rounded-3 border border-3"
                style="object-fit: cover; aspect-ratio: 16/9;">
            </a>
        </div>
    </div>
</div>

<br>

## git show ...
***

I would say, `git show`, is the most used git command in the life of a programmer after `git commit`.

Believe it or not, we do so many commits in a day and we peek into a commit if we are investigating an issue.

This is what we do actually: `git show <commit_id>`, to be precise.

Yeah, so we all know that, what's the point of this post?

Well, you `may` or `may not` know this special use of `git show` command, I only found out last night.

Let me prepare the ground, so that I can show you `live action`.

<br>

    $ mkdir -p playground
    $ cd playground
    $ git init

<br>

Now we would create `3 text files` in the folder `playground`:

<br>

    $ echo "File 1." > file1.txt
    $ echo "File 2." > file2.txt
    $ echo "File 3." > file3.txt

<br>

We would now add the files and commit the changes.

<br>

    $ git add file1.txt file2.txt file3.txt
    $ git commit -m "initial commit"

<br>

Let's check log now:

<br>

    $ git log --oneline
    c7e9320 (HEAD -> master) initial commit

<br>

Now we would change `file1.txt` and `file3.txt` only as below:

<br>

    $ echo "UPDATE: File 1." > file1.txt
    $ echo "UPDATE: File 3." > file3.txt

<br>

Commit the follow up changes.

<br>

    $ git add file1.txt file3.txt
    $ git commit -m "follow up commit"

<br>

Let's check log again:

<br>

    $ git log --oneline
    59a59fe (HEAD -> master) follow up commit
    c7e9320 initial commit

<br>

`Now the fun starts ...`

Usually if we are looking for all the changes in a given commit, this is what we do:

<br>

    $ git show 59a59fe
    commit 59a59fe838d783db14ab6b7650922a98da9d4734 (HEAD -> master)
    Author: Mohammad Sajid Anwar <mohammad.anwar@yahoo.com>
    Date:   Mon Mar 17 13:18:00 2025 +0000

        follow up commit

    diff --git a/file1.txt b/file1.txt
    index 757e51a..3cd8782 100644
    --- a/file1.txt
    +++ b/file1.txt
    @@ -1 +1 @@
    -File 1.
    +UPDATE: File 1.
    diff --git a/file3.txt b/file3.txt
    index 642c879..57b392c 100644
    --- a/file3.txt
    +++ b/file3.txt
    @@ -1 +1 @@
    -File 3.
    +UPDATE: File 3.

<br>

In the above example, it serves the purpose as not many files changed.

It's still too much noise for me in the log, even though not many files were changed.

But think of a situation where say, `10 files`, were affected.

What would you do then?

You can't just search the entire log, if you are only interested in the change to a particular file.

This is where the magic happens as shown below:

<br>

    $ git show 59a59fe:file1.txt
    UPDATE: File 1.

<br>

So this is the command: `git show <commit_id>:<file_name>`

Isn't it much better than before?

It is for me, I am just loving it.

You might ask, what if I don't know how many files have changed and their names in the given commit?

Well we have an answer to that as well, the following command would list all of them:

<br>

    $ git show --name-only 59a59fe
    commit 59a59fe838d783db14ab6b7650922a98da9d4734 (HEAD -> master)
    Author: Mohammad Sajid Anwar <mohammad.anwar@yahoo.com>
    Date:   Mon Mar 17 13:18:00 2025 +0000

        follow up commit

    file1.txt
    file3.txt

<br>

***

<br>

Now you pick and choose, which file you want to look at first.

<br>

`Enjoy !!`
