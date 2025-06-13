---
title: "AWS Bedrock"
date: 2025-06-13T00:00:00+00:00
description: "Discussion about AWS Bedrock."
type: post
image: images/blog/aws-bedrock.jpg
author: Mohammad Sajid Anwar
tags: ["perl", "python", "aws", "bedrock"]
---

#### **DISCLAIMER:** Image is generated using `ChatGPT`.
<br>

### [1. Introduction](#introduction)
### [2. What's Ollama?](#whats-ollama)
### [3. Install Ollama](#install-ollama)
### [4. Run Ollama](#run-ollama)
### [5. FastAPI](#fastapi)
### [6. Mock Bedrock - Python](#mock-bedrock-python)
### [7. Mock Bedrock - Perl](#mock-bedrock-perl)
### [8. Uvicorn](#uvicorn)
### [9. Mock Test](#mock-test)

<br>

## Introduction
***

<br>

Recently I was introduced to `AWS Bedrock` at work. Ever since, I've had many questions around it.

In this post, I am sharing my first encounter.

`AWS Bedrock` is a fully managed service offered by `Amazon Web Services`.

It provides access to high-performing `Foundation Models` from leading `AI` companies through a single `API`.

Using `AWS Bedrock` we can build and scale generative `AI` applications without managing infrastructure.

It provides access to a variety of `Foundation Models` via `API`, for example:

<br>

    Anthropic (Claude)
    AI21 Labs (Jurassic)
    Meta (Llama 2 & Llama 3)
    Mistral
    Cohere
    Stability AI
    Amazon Titan

<br>

The `Bedrock` endpoints are regional.

<br>

    https://bedrock.{region}.amazonaws.com

<br>

Below is a simple example invoking `Mistral 7B` model:

<br>

```python
import boto3

bedrock  = boto3.client('bedrock', region_name='us-west-2')
response = bedrock.invoke_model(
    modelId='mistral.mistral-7b-instruct-v0:2',
    contentType='application/json',
    accept='application/json',
    body=b'''
    {
        "prompt": "<s>[INST] Hello, what is the capital of France? [/INST]",
        "max_tokens": 100,
        "temperature": 0.7
    }
    '''
)

print(response['body'].read().decode('utf-8'))
```

<br>

`AWS Bedrock` is not included in the general `Free Tier`.

I have used [**LocalStack**](https://www.localstack.cloud/) for `AWS` services e.g. `S3`, `Lambda`, `DynamoDB` but unfortunately it doesn't support `AWS Bedrock` yet.

Having said, we can build `Bedrock` stack locally using `Ollama`.

<br>

## What's Ollama?
***

<br>

`Ollama` is an open-source tool designed to run large language models (LLMs) locally on your machine.

It simplifies the process of downloading, managing, and interacting with models like `Llama 3`, `Mistral`, `Gemma` without requiring cloud services.

<br>

## Install Ollama
***

<br>

```bash
$ curl -fsSL https://ollama.com/install.sh | sh
```

<br>

Verify the installation:

<br>

```bash
$ ollama --version
ollama version is 0.9.0
```

<br>

## Run Ollama
***

<br>

This starts the background server, if not already running, and opens up interactive chat session.

<br>

```bash
$ ollama run mistral
```

<br>

To exit, ``Ctrl + d``.

The model API can be reached at http://localhost:11434.

List the models:

<br>

```bash
$ ollama list
NAME              ID              SIZE      MODIFIED
mistral:latest    f974a74358d6    4.1 GB    5 minutes ago
```

<br>

Test if the server is running:

<br>

```bash
$ curl http://localhost:11434
Ollama is running
```

<br>

On system reboot, you need to restart the server in the background.

<br>

```bash
$ ollama serve &
```

<br>

## FastAPI
***

<br>

`FastAPI` is a web framework for building APIs in `Python`.

You need activate virtual environment before installing `fastapi`.

<br>

```bash
(myenv) $ pip install fastapi
```

<br>

We need to install `requests` package too.

<br>

```bash
(myenv) $ pip install requests
```

<br>

## Mock Bedrock - Python
***

<br>

File: `mock_bedrock.py`

<br>

```python
#!/usr/bin/env python3

import requests
from fastapi import FastAPI, Request

app        = FastAPI()
OLLAMA_URL = "http://localhost:11434/api/generate"

@app.post("/model/ollama.mistral/invoke")
async def mock_bedrock(request: Request):
    body   = await request.json()
    prompt = body.get("input", "")

    response = requests.post(OLLAMA_URL, json={
        "model": "mistral",
        "prompt": prompt,
        "stream": False
    })

    result = response.json()
    return {
        "model": "ollama.mistral",
        "response": result.get("response", "")
    }
```

<br>

## Mock Bedrock - Perl
***

<br>

A simple `PSGI` (Perl Server Gateway Interface) application using `Dancer2`.

File: `mock_bedrock.pl`

<br>

```perl
#!/usr/bin/env perl

use v5.38;
use Dancer2;
use boolean ();
use HTTP::Tiny;
use JSON::MaybeXS ();

my $json_encoder = JSON::MaybeXS->new(allow_blessed => 1, convert_blessed => 1);
my $ollama_url   = 'http://localhost:11434/api/generate';

post '/model/ollama.mistral/invoke' => sub {
    my $data     = request->body;
    my $json     = JSON::MaybeXS::decode_json($data);
    my $prompt   = $json->{input} // '';
    my $http     = HTTP::Tiny->new;
    my $response = $http->post($ollama_url, {
        headers => { 'Content-Type' => 'application/json' },
        content => $json_encoder->encode({
            model  => 'mistral',
            prompt => $prompt,
            stream => boolean::false,
        }),
    });

    if ($response->{success}) {
        my $res_json = JSON::MaybeXS::decode_json($response->{content});
        content_type 'application/json';
        return $json_encoder->encode({
            model    => 'ollama.mistral',
            response => $res_json->{response} // ''
        });
    }
    else {
        status '500';
        content_type 'application/json';
        return $json_encoder->encode({ error => "Failed to contact Ollama API" });
    }
};

return Dancer2->psgi_app;
```

<br>

## Uvicorn
***

<br>

`Uvicorn` (Ultra-Violeticorn) is a lightweight, `ASGI` (Asynchronous Server Gateway Interface) server for `Python`.

Activate virtual environment before installing `uvicorn`.

<br>

```bash
(myenv) $ pip install uvicorn
```

<br>

Check the version:

<br>

```bash
$ uvicorn --version
Running uvicorn 0.27.1 with CPython 3.12.3 on Linux
```

<br>

## Mock Test
***

<br>

Let's start the `ASGI` server.

<br>

```bash
$ python3 -B -m uvicorn mock_bedrock:app --reload
INFO:     Will watch for changes in these directories: ['/home/manwar/playground/bedrock']
INFO:     Uvicorn running on http://127.0.0.1:8000 (Press CTRL+C to quit)
INFO:     Started reloader process [57429] using StatReload
INFO:     Started server process [57431]
INFO:     Waiting for application startup.
INFO:     Application startup complete.
```

<br>

Now in another terminal, make a call to the server.

<br>

```bash
$ curl -X POST http://localhost:8000/model/ollama.mistral/invoke \
  -H "Content-Type: application/json" \
  -d '{"input": "What is the capital of India?"}'
{"model":"ollama.mistral","response":" The capital of India is New Delhi. Despite popular belief, it's important to note that Mumbai (formerly known as Bombay) is not the capital city, but rather its financial and entertainment hub. This common misconception might stem from the fact that prior to 1947, Bombay was the capital of British India, while New Delhi was just a small town outside of Delhi."}
```

<br>

Stop the `ASGI` server and start the `PSGI` server now with `Plack` (a `PSGI` toolkit):

`Plack` is the most widely used `PSGI` implementation.

<br>

```bash
$ plackup -p 8000 mock_bedrock.pl
HTTP::Server::PSGI: Accepting connections at http://0:8000/
```

<br>

Let's make the same call again.

<br>

```bash
$ curl -X POST http://localhost:8000/model/ollama.mistral/invoke \
  -H "Content-Type: application/json" \
  -d '{"input": "What is the capital of India?"}'
{"model":"ollama.mistral","response":" The capital of India is New Delhi. However, it's important to note that New Delhi is not a state or union territory but serves as the administrative capital for the country. India has 28 states and 9 union territories."}
```

<br>

`Happy Hacking !!!`
