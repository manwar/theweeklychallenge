---
title: "App::MCP::CLI"
date: 2026-10-16T00:00:00+00:00
description: "Introduction to App::MCP::CLI."
type: post
image: images/blog/app-mcp-cli.jpg
author: Mohammad Sajid Anwar
tags: ["MCP"]
---

#### **DISCLAIMER:** Image is generated using `ChatGPT`.
***
<br>

My formal introduction to **MCP** was by this `Dave Cross`'s post: [**Teaching AI About the British Monarchy with MCP**](https://perlhacks.com/2026/05/teaching-ai-about-the-british-monarchy-with-mcp)

In the article Dave mentioned this line:

>MCP is Mostly JSON-RPC

That gave me an idea to create a dedicated blog post: [**JSON-RPC with Perl**](/blog/jsonrpc-with-perl).

Fast forward (5 months later), I am back on the subject with another blog post.

This post is mostly about my CPAN distribution, [**App::MCP::CLI**](https://metacpan.org/release/MANWAR/App-MCP-CLI-v0.0.1).

In simple term, **Model Context Protocol (MCP)**, is a universal USB port for **AI**.

It creates a standard plugin that any AI can talk to.

For example, you can create **MCP** connector for **Google Drive** and any AI tool that supports **MCP** can use it to read or search your files.

The inspiration of creating **MCP CLI** came from this tool: [**https://pypi.org/project/mcp**](https://pypi.org/project/mcp)

I created initial draft few months ago and never got time to revisit it.

Recently I got a reminder about **Dave Cross** upcoming online talk, [**MCP - Model Context Protocol in Perl: From Web App to AI Tools**](https://luma.com/6qqyscbm)

This made me go back and finish it off.

I have an experimental **mcpcli** ready for you to play.

You just need to install the CPAN module, **App::MCP::CLI**.

The distribution comes with simple example to let you play with it.

Once you install the distribution, you have everything you need.

Here is a basic **stdio** server. You would need to install [**MCP**](https://metacpan.org/dist/MCP) to be able to use it.

This server creates a tool **add_numbers** which adds two numbers.

There can never be any simpler example than this.

**File:** `stdio_server.pl`

```perl
#!/usr/bin/env perl

use strict;
use warnings;

use utf8;
use MCP::Server;
use experimental 'signatures';

my $server = MCP::Server->new;

$server->tool(
    name        => 'add_numbers',
    description => 'Adds two numeric values together and returns the sum.',

    input_schema => {
        type       => 'object',
        properties => {
            a => { type => 'number', description => 'The first number'  },
            b => { type => 'number', description => 'The second number' },
        },
        required => ['a', 'b'],
    },

    code => sub ($tool, $args) {
        my $num1 = $args->{a};
        my $num2 = $args->{b};
        my $sum  = $num1 + $num2;

        return "The result of adding $num1 and $num2 is $sum.";
    }
);

$server->to_stdio;
```

This is how we can all the server:

```bash
$ mcpcli call add_numbers --server ./stdio_server.pl a=10 b=5
[-] Calling tool 'add_numbers'...
The result of adding 10 and 5 is 15.
```

We can make this even more simple to use.

Let's create server config now:

**File:** `server_config.json`

```json
{
  "mcpServers": {
    "perl-math-server": {
      "command": "perl",
      "args": ["stdio_server.pl"]
    }
  },
  "confirmTools": false
}
```

Now using this config, we can list the servers.

```bash
$ mcpcli servers
[-] Reading configuration from: server_config.json

Configured MCP Servers:
+------------------+-----------+----------------------+
| Server Name      | Transport | Command / URL        |
+------------------+-----------+----------------------+
| perl-math-server | stdio     | perl stdio_server.pl |
+------------------+-----------+----------------------+
```

You can list the tools defined in the server:

```bash
$ mcpcli list --server perl-math-server
[-] Reading configuration from: server_config.json
[-] Resolved server settings for 'perl-math-server' via config file.

Available MCP Tools:
+-------------+-------------------------------------------------------+
| Tool Name   | Description                                           |
+-------------+-------------------------------------------------------+
| add_numbers | Adds two numeric values together and returns the sum. |
+-------------+-------------------------------------------------------+
```

Now the above mcp call becomes this:

```bash
$ mcpcli call add_numbers --server perl-math-server a=10 b=5
[-] Reading configuration from: server_config.json
[-] Resolved server settings for 'perl-math-server' via config file.
[-] Calling tool 'add_numbers'...
The result of adding 10 and 5 is 15.
```

This is much better, in my opinion.

How about make it interactive?

We would need to install **Ollama** first.

I am using `Docker` as I am in love with it.

```bash
$ docker run -d -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama
```

Then pull the model **qwen2.5:1.5b**, the default model used by **mcpcli**.

This can be overriden by the switch `--model` flag.

```bash
$ docker exec -it ollama ollama pull qwen2.5:1.5b
```

Verify if the model in installed:

```bash
$ docker exec -it ollama ollama list
```

Once you have the setup ready.

We can now start the interactive session as below:

```bash
$ mcpcli chat --server perl-math-server
[-] Reading configuration from: server_config.json
[-] Resolved server settings for 'perl-math-server' via config file.
[-] Launching Local Pipe MCP Server: perl stdio_server.pl
[+] Connected to MCP Server. Found 1 tool(s).
[-] Connected to LLM provider 'ollama' using model 'qwen2.5:1.5b'.
[-] Starting agent loop. Type 'exit' or 'quit' to end session.

You>
```

Now you can type the message as below:

```bash
You> What is 10 plus 5?
Thinking...
 -> [Agent decided to call tool 'add_numbers' with args: {"b":5,"a":10}]
Response: The sum of 10 and 5 is 15.

You>
```

Isn't fun?

It is all happening using your favourite programming language **Perl**.

Next example is `SSE` after we have done with **stdio**.

**Source:** https://github.com/manwar/App-MCP-CLI/blob/master/examples/sse_server.pl

This is little tricky but not that complicated.

The server by default runs on **127.0.0.1** and listen to port **8080**.

You can override that using env vars **SSE_HOST** and **SSE_PORT**.

You start the server as below:

```bash
$ perl sse_server.pl
[-] Mock MCP SSE Server listening at: http://127.0.0.1:8080/sse
[-] Press Ctrl+C to stop the server
```

Now we actual test the sse server, let's update the **server_config.json** first.

```json
{
  "mcpServers": {
    "perl-math-server": {
      "command": "perl",
      "args": ["stdio_server.pl"]
    },
    "weather-sse-service": {
      "transport": "sse",
      "url": "http://localhost:8080/sse"
    }
  },
  "confirmTools": false
}
```

Let's list all the servers now:

```bash
$ mcpcli servers
[-] Reading configuration from: server_config.json

Configured MCP Servers:
+---------------------+-----------+---------------------------+
| Server Name         | Transport | Command / URL             |
+---------------------+-----------+---------------------------+
| perl-math-server    | stdio     | perl stdio_server.pl      |
| weather-sse-service | SSE       | http://localhost:8080/sse |
+---------------------+-----------+---------------------------+
```

List MCP tools supported by the SSE server:

```bash
$ mcpcli list --server weather-sse-service
[-] Reading configuration from: server_config.json
[-] Resolved server settings for 'weather-sse-service' via config file.

Available MCP Tools:
+------------------+---------------------------------------------------------+
| Tool Name        | Description                                             |
+------------------+---------------------------------------------------------+
| get_mock_weather | Returns static mock weather information for a location. |
+------------------+---------------------------------------------------------+
```

Finally start the interactive session with SSE server as below:

```bash
$ mcpcli chat --server weather-sse-service
[-] Reading configuration from: server_config.json
[-] Resolved server settings for 'weather-sse-service' via config file.
[-] Connecting to MCP Server via HTTP/SSE: http://localhost:8080/sse
[-] SSE Channel Established. Target Post Route: http://127.0.0.1:8080/message
[+] Connected to MCP Server. Found 1 tool(s).
[-] Connected to LLM provider 'ollama' using model 'qwen2.5:1.5b'.
[-] Starting agent loop. Type 'exit' or 'quit' to end session.

You>
```

Now you type the message:

```bash
You> what is the weather in London?
Thinking...
 -> [Agent decided to call tool 'get_mock_weather' with args: {"location":"London"}]
Response: The current temperature in London is 21 degrees Celsius and there are clear skies.

You>
```

***

<br>

`Happy Hacking !!!`
