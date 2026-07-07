---
title: "Flatpak with Perl"
date: 2026-07-07T00:00:00+00:00
description: "Introduction to Flatpak."
type: post
image: images/blog/flatpak-with-perl.jpg
author: Mohammad Sajid Anwar
tags: ["Perl", "Flatpak"]
---

#### **DISCLAIMER:** Image is generated using `Bing`.
***
<br>

When you’ve had experience installing software on `Linux` before, you probably know how much frustration it can cause: one application wants one version of a library installed in your system, while the second one wants an incompatible one, and this disables both of them.

## What's new
***

`Flatpak` is a revolutionary new technology that will change the way we are installing and running programs on our `Linux` computers. Unlike traditional packages that need files unique to your distro, `Flatpak` packages contain both the application itself and all the dependencies it requires.

## Why It Is Important
***

1. Compatibility: Any `Flatpak` application works the same way on `Ubuntu` or `Fedora`, in other words, `Flatpak` applications are truly universal.
2. Security: Apps run in a sandbox that restricts their access to your data and hardware resources unless you give them permission.
3. No Dependency Conflicts: You may update your `Flatpak` application without worrying about breaking the rules of your system or conflicting with your existing software.

In general terms, `Flatpak` provides us with a universal, easy, and safe app store experience on `Linux`.

1. Runtimes

> Applications cannot operate autonomously; they require system programs, essential libraries, and also graphics drivers all configured together. For accomplishing this, `Flatpak` makes use of `Runtimes`.

2. Applications

> In computer jargon, an application refers to the piece of software that you wish to execute (like `Spotify` or `LibreOffice`).

3. OSTree

> If you are familiar with `Git`, you will find something similar with `OSTree`. `OSTree` can also be called `"Git for operating system binaries."`

4. The Sandbox

> In order to maintain high level protection of your system, `Flatpak` uses a special technology called `Bubblewrap` which is a low-level utility that provides separation of applications from the operating system.

It is common practice among experts to compare `Flatpak` and `Docker` owing to the use of containers and isolation of applications. Nevertheless, the tools have been created for two different worlds.

In the real world, `Flatpak` solution suits to the desktop environment, while `Docker` has the application that fits perfectly to the server environment.

`Docker` is about creating copies of server environments for the same server to work on many platforms.

`Flatpak` is focused on creating copies of applications for their usage in many different platforms.

## Flathub
***

`Flathub` is the basic repository for the applications developed along the `Flatpak` platform.

The term `Flatpak` refers to the way we create and install applications on `Linux` whereas `Flathub` is somewhat similar to that of an online store that sells the application and other products. `Flathub` could be thought of as equivalent to `Google play store` or `Apple App Store`.

If you want to know more about the importance of `Flathub`, you should know how the `Linux` software was traditionally distributed.

Previously, when a developer created a software application, he/she used to manually create a separate installer for each `Linux` distribution using different formats for `Ubuntu/Debian` package(.deb), `Fedora(RPM)`, etc.

In one of my previous blog posts, I wrote about building a [**Deb package on Linux**](/blog/cpan-deb-package).

Now with `Flathub`, developers can create an application only once using `Flatpak` and upload it to the `Flathub` store.

It allows other users from any distribution to install that application in no time.

If `Flatpak` is like the shipping container that holds the product, `Flathub` is like the world-famous shipping yard where all shipping containers are kept in order before they are shipped away to their destinations. Without `Flathub`, `Flatpak` is just another application framework; with `Flathub`, it becomes a complete shopping platform.

Let's do some real work:

## Step 1: Prepare Manifest File
***

Make sure your `org.example.cpanapp.yaml` file looks exactly like this. This consolidated version specifies the right runtime environment, pre-loads the hidden dependencies, and maps the internal `Perl` paths.

```bash
$ cat org.example.cpanapp.yaml
id: org.example.cpanapp
runtime: org.freedesktop.Sdk
runtime-version: '24.08'
sdk: org.freedesktop.Sdk
command: app.pl

build-options:
  env:
    PERL5LIB: /app/lib/perl5:/app/share/perl5

modules:
  - name: perl-module-build
    buildsystem: simple
    build-commands:
      - perl Build.PL --install_base=/app
      - ./Build
      - ./Build install
    sources:
      - type: archive
        url: https://cpan.metacpan.org/authors/id/L/LE/LEONT/Module-Build-0.4234.tar.gz
        sha256: 66aeac6127418be5e471ead3744648c766bd01482825c5b66652675f2bc86a8f

  - name: perl-text-asciitable
    buildsystem: simple
    build-commands:
      - perl Makefile.PL INSTALL_BASE=/app
      - make
      - make install
    sources:
      - type: archive
        url: https://cpan.metacpan.org/authors/id/L/LU/LUNATIC/Text-ASCIITable-0.22.tar.gz
        sha256: e4d39537db35d75eb88032d2d26a707733fe33b6baeb212f9c733fc4bff07e43

  - name: perl-main-app
    buildsystem: simple
    build-commands:
      - install -D app.pl /app/bin/app.pl
    sources:
      - type: dir
        path: src
```

## Step 2: Prepare Simple App
***

**File:** `src/app.pl`

```perl
#!/usr/bin/env perl
use strict;
use warnings;
use lib '/app/lib/perl5';
use Text::ASCIITable;

print "========================================\n";
print "   Perl Flatpak with CPAN Dependency    \n";
print "========================================\n";

# Create a table using the bundled CPAN module
my $t = Text::ASCIITable->new({ headingText => 'Flatpak Environment Sandbox' });

$t->setCols('Component', 'Status', 'Details');
$t->addRow('Perl Core', 'Loaded', $]);
$t->addRow('Text::ASCIITable', 'Loaded', $Text::ASCIITable::VERSION);
$t->addRow('Sandbox Path', 'Secure', '/app');

print $t;
```

## Step 3: Add Flathub Remote
***

To ensure your local user profile can download the required building blocks from the `Flatpak` store without needing root/sudo privileges.

```bash
$ flatpak remote-add --user --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo
```

## Step 4: Install Freedesktop SDK
***

Download the modern `24.08` environment development kit where the underlying perl runtime binary lives:

```bash
$ flatpak install --user flathub org.freedesktop.Sdk//24.08
```

## Step 5: Build / Install App
***

This command downloads the `CPAN` modules, compiles them inside the network-isolated sandbox container, registers your local `src/app.pl` file, and installs the finished app bundle cleanly into your user space:

```bash
$ flatpak-builder --user --install --force-clean build-dir org.example.cpanapp.yaml
```

## Step 6: Run App
***

Launch your newly containerised `Perl` application from anywhere in your terminal:

```bash
$ flatpak run org.example.cpanapp
========================================
   Perl Flatpak with CPAN Dependency
========================================
.--------------------------------------.
|      Flatpak Environment Sandbox     |
+------------------+--------+----------+
| Component        | Status | Details  |
+------------------+--------+----------+
| Perl Core        | Loaded | 5.040004 |
| Text::ASCIITable | Loaded |     0.22 |
| Sandbox Path     | Secure | /app     |
'------------------+--------+----------'
```

***
<br>

`Happy Hacking !!!`
