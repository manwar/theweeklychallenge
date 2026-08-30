---
title: "PAGI::FastAPI v1.7.0"
date: 2026-08-30T00:00:00+00:00
description: "Describe features in PAGI::FastAPI v1.7.0."
type: post
image: images/blog/pagi-fastapi-update.jpg
author: Mohammad Sajid Anwar
tags: ["Perl", "FastAPI"]
---

#### **DISCLAIMER:** Image is generated using `ChatGPT`.
***
<br>

I am giving an online presentation on **PAGI::FastAPI** organised by **Gabor Szabo**. It is happening on **7th September 2026 18:30 BST**. If you are interested then you can register to the online event: [**Async, Type-Safe, and Secure: Perl's Answer to FastAPI**](https://luma.com/obzvoiii).

I created the draft presentation slides as soon as the event was booked. But with every release of **PAGI::FastAPI**, I had to update the presentation slides. This is the final features update as far as Python's **FastAPI** features. The missing features added in this release: **File Uploads**, **Background Tasks** and **Per-route OpenAPI Metadata**.

I won't go into technical details in this post, instead I will talk about the demo applications that show the power of new features added.

## File Uploads

**Source:** [**eg/file_uploads_demo.pl**](https://github.com/manwar/PAGI-FastAPI/blob/master/eg/file_uploads_demo.pl)

Single file upload using **$c->form_data** and **$c->uploaded_file**.

```perl
$app->post('/profile/avatar',
    tags        => ['Uploads'],
    summary     => 'Upload a profile avatar',
    description => 'Accepts a multipart/form-data body with a "caption" '
                 . 'text field and an "avatar" file part.',
    responses   => {
        422 => { description => 'No avatar file was provided' },
    },
    handler => async sub ($c) {
        my $caption = $c->form_data('caption') // '';
        my $avatar  = $c->uploaded_file('avatar');

        unless ($avatar) {
            $c->status(422);
            return { detail => "Missing 'avatar' file" };
        }

        return {
            caption      => $caption,
            filename     => $avatar->{filename},
            content_type => $avatar->{content_type},
            size         => $avatar->{size},
        };
    }
);
```

Multiple files under one field name using **$c->uploaded_files**.

```perl
$app->post('/gallery',
    tags        => ['Uploads'],
    summary     => 'Upload several photos at once',
    description => 'Accepts a multipart/form-data body with one or more '
                  . '"photos" file parts sharing the same field name.',
    handler => async sub ($c) {
        my $photos = $c->uploaded_files('photos');
        return {
            count     => scalar(@$photos),
            filenames => [ map { $_->{filename} } @$photos ],
        };
    }
);
```

The start the app like below:

```bash
$ pagi-server eg/file_uploads_demo.pl
```

The landing page of the demo looks like this: [**http://localhost:5000**](http://localhost:5000)

<div class="container">
    <div class="row">
        <div class="col-12 col-sm mb-4 p-2 text-center">
            <img src="/images/blog/pagi-fastapi-img-1.jpg" class="img-fluid">
        </div>
    </div>
</div>

Now, uploading the single file:

<div class="container">
    <div class="row">
        <div class="col-12 col-sm mb-4 p-2 text-center">
            <img src="/images/blog/pagi-fastapi-img-2.jpg" class="img-fluid">
        </div>
    </div>
</div>

Final multiple file uploads:

<div class="container">
    <div class="row">
        <div class="col-12 col-sm mb-4 p-2 text-center">
            <img src="/images/blog/pagi-fastapi-img-3.jpg" class="img-fluid">
        </div>
    </div>
</div>

During the demo, I found a bug in multiple file uploads. It was only picking one file when I upload two files.

I had to release a quick fix **PAGI::FastAPI v1.7.1**.

## Background Tasks

**Source:** [**eg/background_demo.pl**](https://github.com/manwar/PAGI-FastAPI/blob/master/eg/background_demo.pl)

Signup route to initiate the background task:

```perl
$app->post('/signup',
    tags        => ['Onboarding'],
    summary     => 'Create an account',
    description => 'Responds immediately; the welcome email is sent '
                  . 'afterward via a background task and shows up in '
                  . 'GET /activity-log once it completes.',
    body        => { email => Str },
    responses   => {
        202 => { description => 'Account created, welcome email queued' },
    },
    handler => async sub ($c) {
        my $email = $c->body('email');
        my $entry = { email => $email, status => 'queued' };
        push @activity_log, $entry;

        $c->background(async sub {
            # Simulated slow work (an SMTP call, a templating step, ...).
            # A real handler would await that call directly instead of
            # $c->sleep, this is here purely so the demo's "queued" ->
            # "done" transition is visible for a couple of seconds.
            await $c->sleep(2);
            $entry->{status} = 'done';
        });

        $c->status(202);
        return { status => 'queued', email => $email };
    }
);
```

Activity log tracker.

```perl
$app->get('/activity-log',
    tags        => ['Onboarding'],
    summary     => 'List queued/completed welcome emails',
    description => 'Demo-only introspection endpoint backed by an '
                  . 'in-memory array, so the dashboard can show a '
                  . 'background task finishing after its request '
                  . 'already returned.',
    handler => async sub ($c) {
        return { entries => \@activity_log };
    }
);
```

The start the app like below:

```bash
$ pagi-server eg/background_demo.pl
```

The landing page of the demo looks like this: [**http://localhost:5000**](http://localhost:5000)

<div class="container">
    <div class="row">
        <div class="col-12 col-sm mb-4 p-2 text-center">
            <img src="/images/blog/pagi-fastapi-img-4.jpg" class="img-fluid">
        </div>
    </div>
</div>

Few seconds later, we see the update:

<div class="container">
    <div class="row">
        <div class="col-12 col-sm mb-4 p-2 text-center">
            <img src="/images/blog/pagi-fastapi-img-5.jpg" class="img-fluid">
        </div>
    </div>
</div>

## Per-route OpenAPI Metadata

**Source:** [**eg/docs_demo.pl**](https://github.com/manwar/PAGI-FastAPI/blob/master/eg/docs_demo.pl)

**GET /widgets** route that returns all stored widget values formatted as a JSON object.

It includes **OpenAPI metadata** (tags, summary, and custom responses) that populates interactive Swagger UI docs.

Additionally, it attaches OpenAPI links to the **200** and **422** responses.

```perl
$app->get('/widgets',
    tags      => ['Widgets'],
    summary   => 'List all widgets',
    responses => {
        200 => {
            description => 'The current widgets',
            links       => {
                CreateWidget => {
                    operationId => OP_CREATE_WIDGET,
                    description => 'Create a new widget',
                },
            },
        },
        422 => {
            description => 'Invalid query parameters',
            links       => {
                CreateWidget => {
                    operationId => OP_CREATE_WIDGET,
                    description => 'Create a new widget instead',
                },
            },
        },
    },
    handler => async sub ($c) {
        return { widgets => [ values %widgets ] };
    }
);
```

**GET /widgets/{id}** endpoint that looks up a widget in **%widgets** by its URL parameter, returning the object or a **404** JSON payload if missing.

It documents **200**, **404**, and **422** responses for **OpenAPI UI** generation.

```perl
$app->get('/widgets/{id}',
    tags        => ['Widgets'],
    summary     => 'Fetch one widget',
    description => 'Returns a single widget by its numeric ID.',
    responses   => {
        200 => {
            description => 'The requested widget',
            links       => {
                ArchiveWidget => {
                    operationId => OP_ARCHIVE_WIDGET,
                    parameters  => { id => '$response.body#/id' },
                    description => 'Archive (delete) this widget',
                },
                ListWidgets => {
                    operationId => OP_LIST_WIDGETS,
                    description => 'Back to the full widget list',
                },
            },
        },
        404 => {
            description => 'No widget with that ID',
            links       => {
                ListWidgets => {
                    operationId => OP_LIST_WIDGETS,
                    description => 'Browse existing widgets instead',
                },
                CreateWidget => {
                    operationId => OP_CREATE_WIDGET,
                    description => 'Or create one with this ID in mind',
                },
            },
        },
        422 => {
            description => 'The ID was not a valid widget ID',
            links       => {
                ListWidgets => {
                    operationId => OP_LIST_WIDGETS,
                    description => 'See a list of valid IDs',
                },
            },
        },
    },
    handler => async sub ($c) {
        my $widget = $widgets{ $c->param('id') };
        unless ($widget) {
            $c->status(404);
            return { detail => 'Widget not found' };
        }
        return $widget;
    }
);
```

**POST /widgets** endpoint to create a widget, returning **201 Created** with the new widget data or **409 Conflict** if the name is duplicated.

It explicitly overrides the framework's default **200** response metadata in favour of **201**, **409**, and **422** definitions.

```perl
$app->post('/widgets',
    tags        => ['Widgets'],
    summary     => 'Create a widget',
    description => 'Creates a new widget and returns its ID.',
    body        => { name => Str },
    responses   => {
        # Every route keeps the framework's default 200 entry unless it's
        # explicitly overridden, even one like this that never actually
        # returns a plain 200 (success here is 201). Overriding it for
        # accuracy, same as everything else in this file getting a links
        # entry instead of "No links".
        200 => {
            description => 'Not actually returned by this operation '.
                           '(success is 201); documented here only because '.
                           'every route keeps a default 200 entry unless '.
                           'overridden',
            links       => {
                ListWidgets => {
                    operationId => OP_LIST_WIDGETS,
                    description => 'See existing widgets',
                },
            },
        },
        201 => {
            description => 'Widget created',
            links       => {
                GetCreatedWidget => {
                    operationId => OP_GET_WIDGET,
                    parameters  => { id => '$response.body#/id' },
                    description => 'Fetch the widget just created',
                },
                ArchiveWidget => {
                    operationId => OP_ARCHIVE_WIDGET,
                    parameters  => { id => '$response.body#/id' },
                    description => 'Changed your mind? Archive it again',
                },
            },
        },
        409 => {
            description => 'A widget with that name already exists',
            links       => {
                ListWidgets => {
                    operationId => OP_LIST_WIDGETS,
                    description => 'See what already exists under that name',
                },
            },
        },
        422 => {
            description => 'Missing or invalid "name" field',
            links       => {
                ListWidgets => {
                    operationId => OP_LIST_WIDGETS,
                    description => 'See a valid example',
                },
            },
        },
    },
    handler => async sub ($c) {
        my $name = $c->body('name');

        if (grep { $_->{name} eq $name } values %widgets) {
            $c->status(409);
            return { detail => "A widget named '$name' already exists" };
        }

        my $id = $next_id++;
        $widgets{$id} = { id => $id, name => $name };

        $c->status(201);
        return $widgets{$id};
    }
);
```

The start the app like below:

```bash
$ pagi-server eg/docs_demo.pl
```

The landing page of the demo looks like this: [**http://localhost:5000**](http://localhost:5000)

<div class="container">
    <div class="row">
        <div class="col-12 col-sm mb-4 p-2 text-center">
            <img src="/images/blog/pagi-fastapi-img-6.jpg" class="img-fluid">
        </div>
    </div>
</div>

Clicking the button **Open Swagger UI**, gives this page:

<div class="container">
    <div class="row">
        <div class="col-12 col-sm mb-4 p-2 text-center">
            <img src="/images/blog/pagi-fastapi-img-7.jpg" class="img-fluid">
        </div>
    </div>
</div>



***
<br>

`Happy Hacking !!!`
