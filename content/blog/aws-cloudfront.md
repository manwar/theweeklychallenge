---
title: "AWS CloudFront"
date: 2025-06-16T00:00:00+00:00
description: "Discussion about AWS Customer Key Encryption."
type: post
image: images/blog/aws-cloudfront.jpg
author: Mohammad Sajid Anwar
tags: ["aws", "cloudfront"]
---

#### **DISCLAIMER:** Image is generated using `Leonardo AI`.
<br>

### [1. Introduction](#introduction)
### [2. What's AWS CloudFront?](#whats-aws-cloudfront)
### [3. Setup Origin](#setup-origin)
### [4. Create Content](#create-content)
### [5. Setup Configuration](#setup-configuration)
### [6. Create Distribution](#create-distribution)
### [7. Mock CloudFront](#mock-cloudfront)
### [8. Testing Time](#testing-time)
### [9. Cleanup](#cleanup)

<br>

## Introduction
***

<br>

Imagine you're running a FastFood shop and you want to deliver food as fast as possible to customers all over the world.

But if your shop is only in, say, London, someone in Paris might have to wait a long time for their food to arrive.

`CloudFront` is like opening small FastFood centers (called `"edge locations"`) all around the world.

Instead of sending every food from your main kitchen, you keep some pre-made or frequently ordered foods at these nearby stations.

When someone orders, they get their food much faster because it comes from the closest station rather than the main kitchen.

Let's take a closer look at some of the keywords used with `CloudFront`.

<br>

### Origin

<br>

It is same as the main kitchen. In `CloudFront`, the `origin` is the original source of your content.

<br>

### Edge Locations

<br>

It is the FastFood centers around the world. In `CloudFront`, they are globally distributed servers that cache data..

<br>

### Distribution

<br>

It is the delivery network. In `CloudFront`, the `distribution` is the configuration that connects your origin to edge locations.

<br>

### Cache

<br>

It is like pre-cooked food ready to serve. The `CloudFront` caches copies of your files at edge locations so they load faster.

<br>

### TTL

<br>

It decides how long the food stays fresh. `TTL` determines how long `CloudFront` keeps a cached copy before checking the origin for updates.

<br>

### Invalidations

<br>

It is like throwing away stale foods. If you update your content, you can force `CloudFront` to clear (invalidate) the cache and fetch the latest version from the origin.

<br>

### Behaviors

<br>

It is like special delivery rules. Rules that define how `CloudFront` handles different types of requests.

<br>


## What's AWS CloudFront?
***

<br>

`AWS CloudFront` is a `Content Delivery Network (CDN)` service provided by `Amazon Web Services`.

It is designed to deliver content, such as web pages, images, videos, and APIs to users quickly, securely and with low latency by using a network of globally distributed edge locations.

`CloudFront` caches the content in data centers, called `edge locations`, around the world.

Frequently requested content is cached at `edge locations` to reduce load on the origin server and improve load times.

It can serve content from various sources, such as `Amazon S3 buckets`, `EC2 instances` etc.

<br>

## Setup Origin
***

`CloudFront` needs an `origin` e.g. `S3` bucket.

As you know by now, I have used [**LocalStack**](https://www.localstack.cloud) platform to play with supported `Amazon Web Services`.

So, for `CloudFront` also, I am using `LocalStack (FREE version)`.

I am running `LocalStack` in a docker container. This is current state of the container.

<br>

```bash
Container ID: c5414ee41318
Image: localstack/localstack
Command: "docker-entrypoint.sh"
Created: 2025-06-15 02:39:36 +0100 BST
Status: Up 17 hours (healthy)
Ports: 0.0.0.0:4510-4559->4510-4559/tcp, [::]:4510-4559->4510-4559/tcp, 0.0.0.0:4566->4566/tcp, [::]:4566->4566/tcp, 5678/tcp
Names: localstack
```

<br>

Let's create `origin` for `CloudFront` first.

<br>

```bash
$ aws s3 mb s3://my-cloudfront-bucket
make_bucket: my-cloudfront-bucket
```

<br>

## Create Content
***

<br>

Now I'll create a static `HTML` page and upload to `S3` bucket 'my-cloudfront-bucket`.

<br>

```bash
$ echo "Hello, CloudFront!" > index.html
$ aws s3 cp index.html s3://my-cloudfront-bucket
upload: ./index.html to s3://my-cloudfront-bucket/index.html
```

<br>

## Setup Configuration
***

<br>

Time to create `CloudFront` configuration file: `cloudfront-config.json`

<br>

```bash
{
  "CallerReference": "my-distribution",
  "Comment": "",
  "Origins": {
    "Quantity": 1,
    "Items": [
      {
        "Id": "my-s3-origin",
        "DomainName": "my-cloudfront-bucket.s3.localhost.localstack.cloud",
        "S3OriginConfig": {
          "OriginAccessIdentity": ""
        }
      }
    ]
  },
  "DefaultCacheBehavior": {
    "TargetOriginId": "my-s3-origin",
    "ForwardedValues": {
      "QueryString": false,
      "Cookies": {
        "Forward": "none"
      }
    },
    "ViewerProtocolPolicy": "allow-all"
  },
  "Enabled": true
}
```

<br>

## Create Distribution
***

<br>

Next step is to create the distribution.

<br>

```bash
$ aws cloudfront create-distribution --distribution-config file://cloudfront-config.json
```

<br>

It seems my luck is running out today.

I got the following error when I tried to create distribution above.

<br>

```bash
    An error occurred (InternalFailure) when calling the CreateDistribution operation:
    API for service 'cloudfront' not yet implemented or pro feature -
    please check https://docs.localstack.cloud/references/coverage/ for further information
```

<br>

Apparently, the `LocalStack (FREE version)` do not support `CloudFront` service unfortunately.

I'll have to purchase the `Pro version` to be able to use `CloudFront` service.

It is a blocker for me.

<br>

## Mock CloudFront
***

<br>

There is a workaround and we can easily mock the `CloudFront` behaviour.

For basic simulation of `Caching/CDN-like` behaviour, we can use a local reverse proxy e.g. `nginx` in front of `S3` in `LocalStack`.

Let's create `nginx` configuration file: `nginx/nginx.conf`

<br>

```bash
events {}

http {
    proxy_cache_path /var/cache/nginx
                     levels=1:2
                     keys_zone=cloudfront_cache:10m
                     max_size=100m
                     inactive=60m
                     use_temp_path=off;

    server {
        listen 80;

        location / {
            proxy_pass http://172.17.0.1:4566;
            proxy_set_header Host $host;

            proxy_cache cloudfront_cache;
            proxy_cache_valid 200 302 10m;
            proxy_cache_use_stale error timeout updating;

            add_header X-Mock-CloudFront true;
            add_header Cache-Control "public, max-age=600";
        }
    }
}
```

<br>

The above `nginx` server emulates the following `CloudFront` behaviour:

<br>

```bash
1) Sets up a cache zone (cloudfront_cache) with 10MB memory and 100MB disk space
2) Caches successful responses (200, 302) for 10 minutes
3) Uses stale cache when there are errors or timeouts
4) Adds X-Mock-CloudFront header to identify this as a mock CloudFront
5) Sets Cache-Control header to public, max-age=600 (10 minutes)
6) Forwards requests to LocalStack instance (172.17.0.1:4566)
7) Preserves the original Host header
```

<br>

As a fan of `Docker`, I will run the `nginx` server in a docker container.

So here is the docker compose configuration file: `docker-compose.yml`

<br>

```bash
version: '3.8'

services:
  mock-cloudfront:
    image: nginx:alpine
    ports:
      - "8080:80"
    volumes:
      - ./nginx/nginx.conf:/etc/nginx/nginx.conf:ro
```

<br>

Time to start the `nginx` server.

<br>

```bash
$ docker-compose up -d
Creating network "cloudfront_default" with the default driver
Creating cloudfront_mock-cloudfront_1 ... done
```

<br>

The docker container status looks like below:

<br>

```bash
Container ID: 959bdf82721e
Image: nginx:alpine
Command: "/docker-entrypoint.…"
Created: 2025-06-15 19:51:01 +0100 BST
Status: Up 23 seconds
Ports: 0.0.0.0:8080->80/tcp, [::]:8080->80/tcp
Names: cloudfront_mock-cloudfront_1
```

<br>

We are good to go now.

<br>

## Testing Time
***

<br>

Let's try to access the `HTML` page we created and uploaded to `S3` bucket above.

<br>

```bash
$ curl -i http://localhost:8080/my-cloudfront-bucket/index.html
HTTP/1.1 200 OK
Server: nginx/1.27.5
Date: Sun, 15 Jun 2025 18:54:48 GMT
Content-Type: text/html
Content-Length: 19
Connection: keep-alive
Last-Modified: Sun, 15 Jun 2025 18:54:38 GMT
ETag: "ae6f164c882446d8d3eaca05c82149b3"
x-amz-server-side-encryption: AES256
x-amz-request-id: 904b2a41-ebc4-4d86-980d-237554ed341f
x-amz-id-2: s9lzHYrFp76ZVxRcpX9+5cjAnEH2ROuNkd2BHfIa6UkFVdtjf5mKR3/eTPFvsiP/XV/VLi31234=
X-Mock-CloudFront: true
Cache-Control: public, max-age=600
Accept-Ranges: bytes

Hello, CloudFront!
```

<br>

So far, so good.

<br>

## Cleanup
***

<br>

Let's stop the container.

<br>

```bash
$ docker-compose down
Stopping cloudfront_mock-cloudfront_1 ... done
Removing cloudfront_mock-cloudfront_1 ... done
Removing network cloudfront_default
```

<br>

Time to cleanup `S3` bucket finally.

<br>

```bash
$ aws s3 rm s3://my-cloudfront-bucket --recursive
delete: s3://my-cloudfront-bucket/index.html
$ aws s3 rb s3://my-cloudfront-bucket
remove_bucket: my-cloudfront-bucket
```

***

<br>

`Happy Hacking !!!`
