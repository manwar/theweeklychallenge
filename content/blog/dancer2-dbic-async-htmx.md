---
title: "Dancer2 + Dancer2::Plugin::DBIC::Async + HTMX"
date: 2026-02-05T00:00:00+00:00
description: "The grand union of Dancer2 with DBIC Async pluing and HTMX."
type: post
image: images/blog/dancer2-dbic-async-htmx.jpg
author: Mohammad Sajid Anwar
tags: ["perl"]
---

#### **DISCLAIMER:** Image is generated using `ChatGPT`.
***
<br>

As you all know, I released a significant update (**v0.50**) to [**DBIx::Class::Async**](https://metacpan.org/dist/DBIx-Class-Async). The latest version included some breaking changes, which means I needed to revisit its plugin, [**Dancer2::Plugin::DBIC::Async**](https://metacpan.org/dist/Dancer2-Plugin-DBIC-Async). I've applied the necessary patches to ensure compatibility with the latest **DBIx::Class::Async** release. The updated plugin is now available as version **v0.05**.

Now that I have both tools, **DBIx::Class::Async** and **Dancer2::Plugin::DBIC::Async** working in harmony, I wanted to put them to use. Recently I came across the term **HTMX** and began exploring what it offers. As someone who leans more toward backend development and only touches frontend when necessary, **HTMX** caught my attention.

I decided to build something that brings all these pieces together, **DBIX::Class::Async** for asynchronous database operations, **Dancer2::Plugin::DBIC::Async** for seamless integration with **Dancer2**, and **HTMX** for a modern, lightweight frontend experience. It’s a chance to see how these tools behave in a real-world scenario.

This is a modern, high-performance Perl web application demonstrating how to build a reactive user interface without a complex JavaScript framework.

<br>

### **Key Features**
***

<br>

#### **1. Non-Blocking DB Operations**

Uses IO::Async and Dancer2::Plugin::DBIC::Async to handle database queries without stalling the server.

<br>

#### **2. Reactive UI**

Powered by HTMX for seamless, partial page updates (No full page reloads!).

<br>

#### **3. Parallelism**

Executes search and count queries simultaneously using **Future->wait_all**.

<br>

#### **4. Clean API**

Returns deflated HashRefs, making data handling simple and fast.

<br>

### **Prerequisites**
***

<br>

Ensure you have the following dependencies:

<br>

```bash
$ cpanm -vS Dancer2
$ cpanm -vS DBIx::Class::Async
$ cpanm -vS Dancer2::Plugin::DBIC::Async
```

<br>

### Project Structure
***

The project looks like this:

<br>

```bash
    ├── app.pl
    ├── bin
    │   └── deploy.pl
    ├── config.yml
    ├── contacts.db
    ├── lib
    │   └── MyApp
    │       ├── Schema
    │       │   └── Result
    │       │       └── Contact.pm
    │       └── Schema.pm
    └── views
        └── index.tt
```

<br>

    config.yml: Application configuration file.
    app.pl: The Dancer2 application logic and routes.
    bin/deploy.pl: Deployment script to create SQLite database.
    lib/: Contains your DBIx::Class schema.
    views/index.tt: The main dashboard containing the HTMX attributes.
    contacts.db: SQLite database.

<br>

### **Quick Start**
***

<br>


#### **1. Database Setup**

<br>

Create your SQLite database and deploy the schema:

<br>

```bash
$ perl bin/deploy.pl
```

<br>

#### **2. Configuration**

<br>

Ensure your config.yml points to the correct schema:

<br>

    logger: "console"
    log: "core"
    show_errors: 1
    startup_info: 1
    template: "template_toolkit"

    # Plugin Settings
    plugins:
        "DBIC::Async":
        default:
            schema_class: "MyApp::Schema"
            dsn: "dbi:SQLite:dbname=contacts.db"
            async:
                workers: 4

<br>

#### **3. Template**

<br>

```html
<!DOCTYPE html>
<html>
<head>
    <title>Async Contact Manager</title>
    <script src="https://unpkg.com/htmx.org@1.9.10"></script>
</head>
<body>
    <h1>Contact Manager</h1>

    <form hx-post="/contacts"
      hx-target="#contact-list"
      hx-swap="innerHTML"
      onaddcontact="this.reset()">
        <input type="text" name="name" placeholder="Name" required>
        <input type="email" name="email" placeholder="Email" required>
        <button type="submit">Add Contact</button>
    </form>

    <hr>

    <div class="search-box">
        <input type="text"
            name="q"
            placeholder="Search contacts..."
            hx-get="/contacts"
            hx-target="#contact-list"
            hx-trigger="keyup changed delay:500ms"
            hx-indicator=".loader">
        <span class="loader htmx-indicator">Searching...</span>
    </div>

    <h2>Active Contacts (<span id="total-count">0</span>)</h2>
    <div id="contact-list" hx-get="/contacts" hx-trigger="load">
        Loading contacts...
    </div>
</body>
</html>
```

<br>

#### **4. Application**

<br>

```perl
#!/usr/bin/env perl

use strict;
use warnings;

use lib 'lib';

use Dancer2;
use Dancer2::Plugin::DBIC::Async;

get '/' => sub {
    template 'index';
};

post '/contacts' => sub {
    my $name  = body_parameters->get('name');
    my $email = body_parameters->get('email');

    async_create('Contact', { name => $name, email => $email }, 'default')->get;

    redirect '/contacts';
};

get '/contacts' => sub {
    my $query = query_parameters->get('q');
    my $cond  = $query ? { name => { -like => "%$query%" } } : {};

    my $search_f = async_search('Contact', $cond, 'default');
    my $count_f  = async_count('Contact', 'default');

    Future->wait_all($search_f, $count_f)->get;

    my $contacts = $search_f->get;
    my $total    = $count_f->get;

    my $html = '<ul class="list-group shadow-sm">';
    if (@$contacts) {
        foreach my $c (@$contacts) {
            $html .= sprintf(
                '<li class="list-group-item d-flex justify-content-between align-items-center">
                    <div>
                        <h6 class="my-0">%s</h6>
                        <small class="text-muted">%s</small>
                    </div>
                </li>',
                $c->{name},
                $c->{email}
            );
        }
    } else {
        $html .= '<li class="list-group-item text-muted text-center py-4">No contacts found</li>';
    }
    $html .= '</ul>';

    $html .= qq|<span id="total-count" hx-swap-oob="innerHTML">$total</span>|;

    content_type 'text/html';
    return $html;
};

dance;
```

<br>

#### **5. Launch the App**

<br>

```bash
perl app.pl
```

<br>

Visit [**http://localhost:3000**](http://localhost:3000) in your browser.

<br>

### How it Works
***

<br>

#### **The Frontend (HTMX)**

<br>

The search bar uses **hx-get** to trigger a request to the server as you type. It waits **500ms** after your last keystroke to avoid overloading the DB.

<br>

```html
<input type="text" name="q"
       hx-get="/contacts"
       hx-trigger="keyup changed delay:500ms"
       hx-target="#contact-list"
       placeholder="Search contacts...">
```

<br>

#### **The Backend (Asynchronous Perl)**

<br>

When the request hits **/contacts**, the server fires **two** database queries in **parallel**.

<br>

```perl
get '/contacts' => sub {
    my $query = query_parameters->get('q');
    my $cond  = $query ? { name => { -like => "%$query%" } } : {};

    my $search_f = async_search('Contact', $cond, 'default');
    my $count_f  = async_count('Contact', 'default');

    Future->wait_all($search_f, $count_f)->get;

    my $contacts = $search_f->get;
    my $total    = $count_f->get;

    #
    # prepare the html contents
    #

    content_type 'text/html';
    return $html;
};
```

<br>

The complete source code is available here: [**https://github.com/manwar/Dancer2-DBIC-Async-HTMX**](https://github.com/manwar/Dancer2-DBIC-Async-HTMX)

So what are you waiting for, go and play.

***

<br>

`Happy Hacking !!!`
