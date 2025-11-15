---
title: "Grafana + Prometheus"
date: 2025-11-15T00:00:00+00:00
description: "Discussion about Grafana and Prometheus."
type: post
image: images/blog/grafana-prometheus.jpg
author: Mohammad Sajid Anwar
tags: ["perl", "python", "Grafana", "Promotheus"]
---

#### **DISCLAIMER:** Image is generated using `ChatGPT`.
<br>

### [1. What is Grafana?](#what-is-grafana)
### [2. What is Prometheus?](#what-is-prometheus)
### [3. Docker Setup](#docker-setup)
### [4. Test Environment](#test-environment)
### [5. Datasource](#datasource)
### [6. Dashboard](#dashboard)

<br>

## What is Grafana?
***

`Grafana` is an open-source analytics and visualisation platform. It lets you create dashboards that visualise data from various sources such as:

    - Prometheus (metrics and monitoring)
    - InfluxDB (time-series data)
    - Elasticsearch
    - PostgreSQL / MySQL etc.

It’s very popular for monitoring servers, containers, applications especially when paired with `Prometheus`.

You can find more information here: [**https://grafana.com**](https://grafana.com)

<br>

## What is Prometheus?
***

`Prometheus` is an open-source systems monitoring and alerting toolkit originally built at `SoundCloud`. It's now a graduated project of the `Cloud Native Computing Foundation (CNCF)` which means it's a mature, production-ready tool used by thousands of companies worldwide.

`Prometheus` is the metrics collection and storage system that:

    - Scrapes metrics from your applications (Perl app, Python app) and infrastructure (node-exporter)
    - Stores the metrics in a time-series database
    - Provides a query language (PromQL) to analyse the metrics
    - Serves the metrics to Grafana for visualisation

`Prometheus Server` pulls metrics from your applications every 5 seconds (as configured in the `prometheus.yml`).

You can find more information here: [**https://prometheus.io**](https://prometheus.io)

<br>

## Docker Setup
***

Docker is the ideal choice for setting up `Grafana` and `Prometheus` in one container.

    .
    ├── docker-compose.yml
    ├── perl-app
    │   ├── Dockerfile
    │   └── app.pl
    ├── prometheus.yml
    └── python-app
        ├── Dockerfile
        └── app.py

Here we will create two applications one in `Perl` and another in `Python`.

<br>

**File:** `perl-app/app.pl`

```perl
#!/usr/bin/env perl

use strict;
use warnings;
use Prometheus::Tiny;
use Mojolicious::Lite;

my $prom = Prometheus::Tiny->new;

$prom->declare(
    'http_requests_total',
    help => 'Total HTTP requests',
    type => 'counter'
);

get '/' => sub {
    my $c = shift;
    $prom->inc('http_requests_total');
    $c->render(text => "Hello from Perl!\n");
};

get '/metrics' => sub {
    my $c = shift;
    $c->render(text => $prom->format, format => 'txt');
};

app->start('daemon', '-l', 'http://*:7000');
```

<br>

**File:** `python-app/app.py`

```python
#!/usr/bin/env python

import os
os.environ['PROMETHEUS_DISABLE_CREATED_SERIES'] = '1'

from flask import Flask, Response
from prometheus_client import Counter, generate_latest, CollectorRegistry

app = Flask(__name__)

registry = CollectorRegistry()
http_requests_total = Counter('http_requests_total', 'Total HTTP requests', registry=registry)

@app.route('/')
def hello():
    http_requests_total.inc()
    return "Hello from Python!\n"

@app.route('/metrics')
def metrics():
    return Response(generate_latest(registry), mimetype='text/plain')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)
```

<br>

It's now time to create `Dockerfile` for each of the applications.

<br>

**File:** `perl-app/Dockerfile`

```bash
FROM perl:5.38
RUN cpanm Mojolicious Prometheus::Tiny --notest
WORKDIR /app
COPY app.pl /app/
EXPOSE 7000
CMD ["perl", "app.pl"]
```

<br>

**File:** `python-app/Dockerfile`

```bash
FROM python:3.11-slim
RUN pip install flask prometheus_client
WORKDIR /app
COPY app.py /app/
EXPOSE 8000
CMD ["python", "app.py"]
```

<br>

Let's create configuration file for `Prometheus`.

<br>

**File:** `prometheus.yml`

```bash
global:
  scrape_interval: 5s

scrape_configs:
  - job_name: 'prometheus'
    static_configs:
      - targets: ['prometheus:9090']

  - job_name: 'perl-app'
    static_configs:
      - targets: ['perl-app:7000']

  - job_name: 'python-app'
    static_configs:
      - targets: ['python-app:8000']
```

<br>

Finally create the docker compose configuration file.

<br>

**File:** `docker-compose.yml`

```bash
version: '3'

services:
  grafana:
    image: grafana/grafana
    container_name: grafana
    ports:
      - "3000:3000"
    depends_on:
      - prometheus
    environment:
      - GF_SECURITY_ADMIN_USER=admin
      - GF_SECURITY_ADMIN_PASSWORD=admin
    networks:
      - monitoring

  prometheus:
    image: prom/prometheus
    container_name: prometheus
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml
    ports:
      - "9090:9090"
    networks:
      - monitoring

  perl-app:
    build: ./perl-app
    container_name: perl-app
    ports:
      - "7000:7000"
    networks:
      - monitoring

  python-app:
    build: ./python-app
    container_name: python-app
    ports:
      - "8000:8000"
    networks:
      - monitoring

networks:
  monitoring:
    driver: bridge
```

<br>

Start the container now:

<br>

```bash
$ docker-compose up -d
Creating network "grafana_monitoring" with driver "bridge"
Creating prometheus ... done
Creating python-app ... done
Creating perl-app   ... done
Creating grafana    ... done
```

Check the status of containers:

<br>

```bash
$ docker-compose ps
   Name                 Command               State                    Ports
----------------------------------------------------------------------------------------------
grafana      /run.sh                          Up      0.0.0.0:3000->3000/tcp,:::3000->3000/tcp
perl-app     perl app.pl                      Up      0.0.0.0:7000->7000/tcp,:::7000->7000/tcp
prometheus   /bin/prometheus --config.f ...   Up      0.0.0.0:9090->9090/tcp,:::9090->9090/tcp
python-app   python app.py                    Up      0.0.0.0:8000->8000/tcp,:::8000->8000/tcp
```

<br>

## Test Environment
***

Time to test the `Perl` and `Python` applications:

<br>

```bash
$ curl http://localhost:7000
Hello from Perl!
```

<br>

```bash
$ curl http://localhost:8000
Hello from Python!
```

<br>

Inspecting the perl app logs:

<br>

```bash
$ docker-compose logs perl-app
```

<br>

Similarly for python app logs:

<br>

```bash
$ docker-compose logs python-app
```

<br>

Now fetch the metrics from `Perl` application:

<br>

```bash
$ curl http://localhost:7000/metrics
# HELP http_requests_total Total HTTP requests
# TYPE http_requests_total counter
http_requests_total 1
```

<br>

From `Python` application this time:

<br>

```bash
$ curl http://localhost:8000/metrics
# HELP http_requests_total Total HTTP requests
# TYPE http_requests_total counter
http_requests_total 1.0
```

<br>

Let's check all the targets state in `Prometheus`: http://localhost:9090/targets

You should have all the state `UP`.

<br>

<div class="container">
    <div class="row">
        <div class="col-12 col-sm mb-4 p-2 text-center">
            <img src="/images/blog/graf-prom-9.png" class="img-fluid">
        </div>
    </div>
</div>

<br>

The `Grafana` should be accessible here: http://localhost:3000/

The default credentials: `admin/admin`.

<br>

<div class="container">
    <div class="row">
        <div class="col-12 col-sm mb-4 p-2 text-center">
            <img src="/images/blog/graf-prom-1.png" class="img-fluid">
        </div>
    </div>
</div>

<br>

## Datasource
***

Goto `Grafana` homepage and click the tile `Add your first data source`.

You should now see something like below:

<br>

<div class="container">
    <div class="row">
        <div class="col-12 col-sm mb-4 p-2 text-center">
            <img src="/images/blog/graf-prom-2.png" class="img-fluid">
        </div>
    </div>
</div>

<br>

Now select `Prometheus` from the list and then you should get this:

<br>

<div class="container">
    <div class="row">
        <div class="col-12 col-sm mb-4 p-2 text-center">
            <img src="/images/blog/graf-prom-3.png" class="img-fluid">
        </div>
    </div>
</div>

<br>

Here, you enter the `Prometheus server URL` as `http://prometheus:9090`.

And then click `Save & test` button.

<br>

## Dashboard
***

Go back to `Grafana` home page and click the tile: `Create your first dashboard`.

You should have this page now:

<br>

<div class="container">
    <div class="row">
        <div class="col-12 col-sm mb-4 p-2 text-center">
            <img src="/images/blog/graf-prom-4.png" class="img-fluid">
        </div>
    </div>
</div>

<br>

Click the button `Add visualisation` and you get this page:

<br>

<div class="container">
    <div class="row">
        <div class="col-12 col-sm mb-4 p-2 text-center">
            <img src="/images/blog/graf-prom-5.png" class="img-fluid">
        </div>
    </div>
</div>

<br>

Select the data source: `prometheus`

You then see this page:

<br>

<div class="container">
    <div class="row">
        <div class="col-12 col-sm mb-4 p-2 text-center">
            <img src="/images/blog/graf-prom-6.png" class="img-fluid">
        </div>
    </div>
</div>

<br>

For `perl app`, we will try this query.

Enter Metrics browser: `http_requests_total{job="perl-app"}`

Click `Run queries`

Click `Save dashboard`

Add another panel for `python app` similarly.

Enter Metrics browser: `http_requests_total{job="python-app"}`

Click `Run queries`

Click `Save dashboard`

Then you should have this page.

<br>

<div class="container">
    <div class="row">
        <div class="col-12 col-sm mb-4 p-2 text-center">
            <img src="/images/blog/graf-prom-8.png" class="img-fluid">
        </div>
    </div>
</div>

<br>


<br>

`Happy Hacking !!!`
