---
title: "AWS S3 Bucket Events"
date: 2025-11-07T00:00:00+00:00
description: "Discussion about AWS S3 Bucket Events."
type: post
image: images/blog/aws-s3-bucket-events.jpg
author: Mohammad Sajid Anwar
tags: ["perl", "python", "aws", "localstack", "s3"]
---

#### **DISCLAIMER:** Image is generated using `ChatGPT`.
<br>

### [1. Introduction](#introduction)
### [2. Setup Environment](#setup-environment)
### [3. Using aws](#using-aws)
### [4. Using Python](#using-python)
### [5. Using Perl](#using-perl)

<br>

## Introduction
***

Recently I shared my experience with [**Amazon S3**](https://theweeklychallenge.org/blog/localstack-aws-s3) and [**Amazon Lambda**](https://theweeklychallenge.org/blog/aws-lambda).

Today I am playing with `S3 Bucket Events` and how it can be triggered and captured.

In this post, I will take a closer look at the following events.

#### **- s3:ObjectCreated:Put**
#### **- s3:ObjectCreated:Copy**
#### **- s3:ObjectRemoved:Delete**
#### **- s3:ObjectCreated:Post**
#### **- s3:ObjectCreated:CompleteMultipartUpload**

<br>

## Setup Environment
***

As with all other `AWS` related experiments, I want `LocalStack` running in a docker container. Here is the docker configuration file, `docker-compose.yml`.

<br>

```bash
version: '3.8'

services:
  localstack:
    image: localstack/localstack
    container_name: localstack
    ports:
      - "4566:4566"
      - "4510-4559:4510-4559"
    environment:
      - PERSISTENCE=1
      - SERVICES=s3,lambda,logs
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - localstack_localstack_data:/var/lib/localstack
      - /tmp/localstack_host:/host_tmp

volumes:
  localstack_localstack_data:
```

<br>

Let's start the container now.

<br>

```bash
$ docker-compose up -d
Starting localstack ... done
```

<br>

Check the status of the container.

<br>

```bash
$ docker-compose ps
   Name            Command             State                           Ports
localstack   docker-entrypoint.sh   Up (healthy)   0.0.0.0:4510->4510/tcp,:::4510->4510/tcp,
                                                   0.0.0.0:4511->4511/tcp,:::4511->4510/tcp,
                                                   0.0.0.0:4511->4511/tcp,:::4511->4510/tcp,
                                                   0.0.0.0:4511->4511/tcp,:::4511->4510/tcp,
                                                   ...
                                                   ...
                                                   0.0.0.0:4566->4566/tcp,:::4511->4566/tcp,
                                                   5678/tcp
```

<br>

We need `S3` bucket for testing the event trigger.

<br>

```bash
$ aws s3 mb s3://test-bucket
make_bucket: test-bucket
```

<br>

Now, we want a test file as well.

<br>

```bash
$ echo 'S3 events trigger demo file.' > test.txt
```

<br>

Time to create `Lambda Function` handler: `event_handler.py`

<br>

```python
def handler(event, context):
    for record in event.get('Records', []):
        event_name   = record.get('eventName',   'UnknownEvent' )
        event_time   = record.get('eventTime',   'UnknownTime'  )
        event_source = record.get('eventSource', 'UnknownSource')

        s3_data   = record.get('s3', {})
        bucket    = s3_data.get('bucket', {}).get('name', 'UnknownBucket')
        key       = s3_data.get('object', {}).get('key', 'UnknownKey')
        size      = s3_data.get('object', {}).get('size', 0)
        etag      = s3_data.get('object', {}).get('eTag', '')
        operation = event_name.split(':')[-1]

        current_timestamp = datetime.datetime.now().strftime("%Y-%m-%dT%H:%M:%S")

        print(f"""
{current_timestamp} S3 Event Detected
{current_timestamp} -------------------------------
{current_timestamp} Event Type: {event_name} ({operation})
{current_timestamp} Timestamp:  {event_time}
{current_timestamp} Bucket:     {bucket}
{current_timestamp} Object:     {key}
{current_timestamp} Size:       {size} bytes
{current_timestamp} ETag:       {etag}
{current_timestamp} -------------------------------
        """)

    return {
        "statusCode": 200,
        "body": f"Processed {len(event.get('Records', []))} events"
    }
```

<br>

We need code package in a compressed archive format, typically a `.zip` file.

<br>

```bash
$ zip event_handler.zip event_handler.py
```

<br>

To capture the `S3 events`, we meed to create lambda function.

<br>

```bash
$ aws lambda create-function \
  --function-name event-handler \
  --runtime python3.9 \
  --handler event_handler.handler \
  --zip-file fileb://event_handler.zip \
  --role arn:aws:iam::000000000000:role/lambda-role
{
    "FunctionName": "event-handler",
    "FunctionArn": "arn:aws:lambda:eu-west-1:000000000000:function:event-handler",
    "Runtime": "python3.9",
    "Role": "arn:aws:iam::000000000000:role/lambda-role",
    "Handler": "event_handler.handler",
    "CodeSize": 652,
    "Description": "",
    "Timeout": 3,
    "MemorySize": 128,
    "LastModified": "2025-11-07T09:36:30.640522+0000",
    "CodeSha256": "Wx0djcKvlM4f9JPbAWD/mcl+2gPMEvyK9QC2dSdeStU=",
    "Version": "$LATEST",
    "TracingConfig": {
        "Mode": "PassThrough"
    },
    "RevisionId": "30349dd4-dc3c-4ccb-bce6-4be7ac219dad",
    "State": "Pending",
    "StateReason": "The function is being created.",
    "StateReasonCode": "Creating",
    "PackageType": "Zip",
    "Architectures": [
        "x86_64"
    ],
    "EphemeralStorage": {
        "Size": 512
    },
    "SnapStart": {
        "ApplyOn": "None",
        "OptimizationStatus": "Off"
    },
    ...
    ...
    ...
}
```

<br>

Let's find the status of the lambda function.

<br>

```bash
$ aws lambda get-function --function-name event-handler
{
    "Configuration": {
        "FunctionName": "event-handler",
        "FunctionArn": "arn:aws:lambda:eu-west-1:000000000000:function:event-handler",
        "Runtime": "python3.9",
        "Role": "arn:aws:iam::000000000000:role/lambda-role",
        "Handler": "event_handler.handler",
        "CodeSize": 652,
        "Description": "",
        "Timeout": 3,
        "MemorySize": 128,
        "LastModified": "2025-11-07T09:36:30.640522+0000",
        "CodeSha256": "Wx0djcKvlM4f9JPbAWD/mcl+2gPMEvyK9QC2dSdeStU=",
        "Version": "$LATEST",
        "TracingConfig": {
            "Mode": "PassThrough"
        },
        "RevisionId": "83aaa06c-1d99-4cf1-aa19-47df60de28cd",
        "State": "Active",
        "LastUpdateStatus": "Successful",
        "PackageType": "Zip",
        "Architectures": [
            "x86_64"
        ],
        "EphemeralStorage": {
            "Size": 512
        },
        "SnapStart": {
            "ApplyOn": "None",
            "OptimizationStatus": "Off"
        },
        ...
        ...
        ...
    },
    ...
    ...
    ...
}
```

<br>

OK, we now have a lambda function in `Active` state.

Finally, we need to setup notification to capture the events we listed above for the `S3` bucket as below:

<br>

```bash
$ aws s3api put-bucket-notification-configuration \
  --bucket test-bucket \
  --notification-configuration '{
    "LambdaFunctionConfigurations": [
      {
        "LambdaFunctionArn": "arn:aws:lambda:eu-west-1:000000000000:function:event-handler",
        "Events": ["s3:ObjectCreated:*"]
      },
      {
        "LambdaFunctionArn": "arn:aws:lambda:eu-west-1:000000000000:function:event-handler",
        "Events": ["s3:ObjectRemoved:*"]
      }
    ]
  }'
```

<br>

Let's check the bucket notification.

<br>

```bash
$ aws s3api get-bucket-notification-configuration --bucket test-bucket
{
    "LambdaFunctionConfigurations": [
        {
            "Id": "e82e19f0",
            "LambdaFunctionArn": "arn:aws:lambda:eu-west-1:000000000000:function:event-handler",
            "Events": [
                "s3:ObjectCreated:*"
            ]
        },
        {
            "Id": "511f09ba",
            "LambdaFunctionArn": "arn:aws:lambda:eu-west-1:000000000000:function:event-handler",
            "Events": [
                "s3:ObjectRemoved:*"
            ]
        }
    ]
}
```

<br>

Finally, we are ready to test the `S3 Bucket Events`.

<br>

## Using aws
***

Let's trigger the `PUT event` first and for that we just need to copy a file to `S3` bucket.

<br>

```bash
$ aws s3 cp test.txt s3://test-bucket
upload: ./test.txt to s3://test-bucket/test.txt
```

<br>

Now check the logs.

<br>

```bash
$ aws logs tail /aws/lambda/event-handler | grep -oP '\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2} .*'
2025-11-07T09:41:24 S3 Event Detected
2025-11-07T09:41:24 -------------------------------
2025-11-07T09:41:24 Event Type: ObjectCreated:Put (Put)
2025-11-07T09:41:24 Timestamp:  2025-11-07T09:41:23.870Z
2025-11-07T09:41:24 Bucket:     test-bucket
2025-11-07T09:41:24 Object:     test.txt
2025-11-07T09:41:24 Size:       29 bytes
2025-11-07T09:41:24 ETag:       b72a05983f663132daaf4688bb919f80
2025-11-07T09:41:24 -------------------------------
```

<br>

Log proves, the successfull `PUT event` trigger.

Time for next, `COPY event`.

And to trigger it, we need to copy file from the `S3` bucket.

<br>

```bash
$ aws s3 cp s3://test-bucket/test.txt s3://test-bucket/copy_test.txt
copy: s3://test-bucket/test.txt to s3://test-bucket/copy_test.txt
```

<br>

Let's check the logs again.

<br>

```bash
$ aws logs tail /aws/lambda/event-handler | grep -oP '\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2} .*'
...
...
...
2025-11-07T09:42:15 S3 Event Detected
2025-11-07T09:42:15 -------------------------------
2025-11-07T09:42:15 Event Type: ObjectCreated:Copy (Copy)
2025-11-07T09:42:15 Timestamp:  2025-11-07T09:42:15.335Z
2025-11-07T09:42:15 Bucket:     test-bucket
2025-11-07T09:42:15 Object:     copy_test.txt
2025-11-07T09:42:15 Size:       29 bytes
2025-11-07T09:42:15 ETag:       b72a05983f663132daaf4688bb919f80
2025-11-07T09:42:15 -------------------------------
```

<br>

Let's trigger the next event i.e. `DEL event`.

We just need to delete file as below:

<br>

```bash
$ aws s3 rm s3://test-bucket/copy_test.txt
delete: s3://test-bucket/copy_test.txt
```

<br>

This is what we see in the logs:

<br>

```bash
$ aws logs tail /aws/lambda/event-handler | grep -oP '\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2} .*'
...
...
...
2025-11-07T09:43:12 S3 Event Detected
2025-11-07T09:43:12 -------------------------------
2025-11-07T09:43:12 Event Type: ObjectRemoved:Delete (Delete)
2025-11-07T09:43:12 Timestamp:  2025-11-07T09:43:12.527Z
2025-11-07T09:43:12 Bucket:     test-bucket
2025-11-07T09:43:12 Object:     copy_test.txt
2025-11-07T09:43:12 Size:       0 bytes
2025-11-07T09:43:12 ETag:
2025-11-07T09:43:12 -------------------------------
```

<br>

Moving on to the next event i.e. `POST`.

We can just use `curl` to post a file to `S3` bucket.

<br>

```bash
$ curl -X POST \
  -F "key=test.txt" \
  -F "file=@test.txt" \
  http://localhost:4566/test-bucket
```

<br>

Let's check the log now.

<br>

```bash
$ aws logs tail /aws/lambda/event-handler | grep -oP '\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2} .*'
...
...
...
2025-11-07T09:46:29 S3 Event Detected
2025-11-07T09:46:29 -------------------------------
2025-11-07T09:46:29 Event Type: ObjectCreated:Post (Post)
2025-11-07T09:46:29 Timestamp:  2025-11-07T09:46:29.853Z
2025-11-07T09:46:29 Bucket:     test-bucket
2025-11-07T09:46:29 Object:     test.txt
2025-11-07T09:46:29 Size:       29 bytes
2025-11-07T09:46:29 ETag:       b72a05983f663132daaf4688bb919f80
2025-11-07T09:46:29 -------------------------------
```

<br>

So far so good.

Now last but not least event i.e. `MultipartUpload event`.

It's a bit tricky to demonstrate.

For this, we have to create two large files.

<br>

```bash
$ PART1="part1.bin"
$ PART2="part2.bin"

$ dd if=/dev/urandom of=$PART1 bs=5M count=1
1+0 records in
1+0 records out
5242880 bytes (5.2 MB, 5.0 MiB) copied, 0.0143711 s, 365 MB/s

$ dd if=/dev/urandom of=$PART2 bs=5M count=1
1+0 records in
1+0 records out
5242880 bytes (5.2 MB, 5.0 MiB) copied, 0.0143298 s, 366 MB/s

$ ls -l part*.bin
-rw-r--r-- 1 manwar manwar 5242880 Nov 07 09:48 part1.bin
-rw-r--r-- 1 manwar manwar 5242880 Nov 07 09:48 part2.bin
```

<br>

Let's create multipart upload and get the `UploadId`.

<br>

```bash
$ BUCKET="test-bucket"
$ KEY="bigfile.bin"

$ UPLOAD_ID=$(aws s3api create-multipart-upload \
    --bucket "$BUCKET" \
    --key "$KEY" \
    --query 'UploadId' \
    --output text)
```

<br>

Time to upload individual parts using the `UploadId` and get the `ETag`.

<br>

```bash
$ ETAG1=$(aws s3api upload-part \
    --bucket "$BUCKET" \
    --key "$KEY" \
    --part-number 1 \
    --body "$PART1" \
    --upload-id "$UPLOAD_ID" \
    --query 'ETag' \
    --output text)

$ ETAG2=$(aws s3api upload-part \
    --bucket "$BUCKET" \
    --key "$KEY" \
    --part-number 2 \
    --body "$PART2" \
    --upload-id "$UPLOAD_ID" \
    --query 'ETag' \
    --output text)
```

<br>

Let's complete the multipart upload now.

<br>

```bash
$ aws s3api complete-multipart-upload \
    --bucket "$BUCKET" \
    --key "$KEY" \
    --upload-id "$UPLOAD_ID" \
    --multipart-upload "{\
        \"Parts\": [\
            {\"ETag\": $ETAG1, \"PartNumber\": 1},\
            {\"ETag\": $ETAG2, \"PartNumber\": 2}\
        ]\
    }"
{
    "ServerSideEncryption": "AES256",
    "Location": "http://test-bucket.s3.localhost.localstack.cloud:4566/bigfile.bin",
    "Bucket": "test-bucket",
    "Key": "bigfile.bin",
    "ETag": "\"8c3c902f7dbe017b83fe23b4a1de0f6b-2\"",
    "ChecksumCRC64NVME": "4aKLvJVsCwI=",
    "ChecksumType": "FULL_OBJECT"
}
```

<br>

Checking the log as below:

<br>

```bash
$ aws logs tail /aws/lambda/event-handler | grep -oP '\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2} .*'
...
...
...
2025-11-07T09:50:38 S3 Event Detected
2025-11-07T09:50:38 -------------------------------
2025-11-07T09:50:38 Event Type: ObjectCreated:CompleteMultipartUpload (CompleteMultipartUpload)
2025-11-07T09:50:38 Timestamp:  2025-11-07T09:50:38.037Z
2025-11-07T09:50:38 Bucket:     test-bucket
2025-11-07T09:50:38 Object:     bigfile.bin
2025-11-07T09:50:38 Size:       10485760 bytes
2025-11-07T09:50:38 ETag:       8c3c902f7dbe017b83fe23b4a1de0f6b-2
2025-11-07T09:50:38 -------------------------------
```

<br>

This completes all the events, finally.

Finally empyty the bucket, so that we have clean setup for further run.

<br>

```bash
$ aws s3 rm s3://test-bucket --recursive
delete: s3://test-bucket/bigfile.bin
delete: s3://test-bucket/test.txt
```

<br>

## Using Python
***

<br>

Having done this using `aws` CLI, we can now define each operation easily.

First `PUT event`, here is the function that takes in `S3` client, bucket name and file to put.

<br>

```python
def put_object(s3, bucket, key):
    print(f"PUT object {key} to bucket {bucket}")
    try:
        with open(key, 'rb') as file:
            content = file.read()

        s3.put_object(Bucket=bucket, Key=key, Body=content)
        print(f"Done. Uploaded {len(content)} bytes from file: {key}")

    except FileNotFoundError:
        print(f"Error: File '{key}' not found.")
        raise
    except PermissionError:
        print(f"Error: Permission denied to read file '{key}'.")
        raise
    except Exception as e:
        print(f"Error uploading file: {e}")
        raise
```

<br>

Next is `COPY event`.

For this, we have `S3` client, source and destination bucket/key.

<br>

```python
def copy_object(s3, src_bucket, src_key, dest_bucket, dest_key):
    print(f"COPY object {src_key} from {src_bucket} to {dest_key} in {dest_bucket}")
    copy_source = {'Bucket': src_bucket, 'Key': src_key}
    s3.copy_object(CopySource=copy_source, Bucket=dest_bucket, Key=dest_key)
    print("Done.")
```

<br>

Here is the simplest of all, `DEL event`.

<br>

```python
def delete_object(s3, bucket, key):
    print(f"DELETE object {key} from bucket {bucket}")
    s3.delete_object(Bucket=bucket, Key=key)
    print("Done.")
```

<br>

For `POST event`, we generate `pre-signed URL` first and use it to post the file.

<br>

```python
def post_object(s3, bucket, key):
    post = s3.generate_presigned_post(
        Bucket=bucket,
        Key=key,
        Fields={"acl": "private"},
        Conditions=[
            {"acl": "private"},
            ["content-length-range", 0, 1048576]
        ],
        ExpiresIn=3600
    )

    with open(key, 'rb') as f:
        files = {'file': (key, f)}
        response = requests.post(post["url"], data=post["fields"], files=files)

    if response.status_code == 204:
        print("Upload successful. S3 POST trigger should fire.")
    else:
        print("Upload failed!")
        print("Status:", response.status_code)
        print(response.text)
```

<br>

For the tricky, `MultipartUpload event`, we will generate large file and then upload it.

In this function, we have `S3` client, bucket and file.

```python
def multipart_upload(s3, bucket, key, file_size_mb=6):
    print(f"MULTIPART upload {key} to bucket {bucket}")

    # Create a temporary file
    filename = f"/tmp/{uuid.uuid4().hex}.bin"
    with open(filename, "wb") as f:
        f.write(os.urandom(file_size_mb * 1024 * 1024))

    config = TransferConfig(multipart_threshold=5*1024*1024, multipart_chunksize=5*1024*1024)
    s3.upload_file(filename, bucket, key, Config=config)
    os.remove(filename)
    print("Done.")
```

<br>

Putting together everything and created simple application as below:

**File:** `s3_event_trigger.py`

<br>

```python
#!/usr/bin/env python3

import os
import uuid
import requests
import argparse

import boto3
from boto3.s3.transfer import TransferConfig

REGION       = 'eu-west-1'
ENDPOINT_URL = os.environ.get("AWS_ENDPOINT_URL", "http://localhost:4566")

def put_object(s3, bucket, key):
    print(f"PUT object {key} to bucket {bucket}")
    try:
        with open(key, 'rb') as file:
            content = file.read()

        s3.put_object(Bucket=bucket, Key=key, Body=content)
        print(f"Done. Uploaded {len(content)} bytes from file: {key}")

    except FileNotFoundError:
        print(f"Error: File '{key}' not found.")
        raise
    except PermissionError:
        print(f"Error: Permission denied to read file '{key}'.")
        raise
    except Exception as e:
        print(f"Error uploading file: {e}")
        raise

def copy_object(s3, src_bucket, src_key, dest_bucket, dest_key):
    print(f"COPY object {src_key} from {src_bucket} to {dest_key} in {dest_bucket}")
    copy_source = {'Bucket': src_bucket, 'Key': src_key}
    s3.copy_object(CopySource=copy_source, Bucket=dest_bucket, Key=dest_key)
    print("Done.")

def delete_object(s3, bucket, key):
    print(f"DELETE object {key} from bucket {bucket}")
    s3.delete_object(Bucket=bucket, Key=key)
    print("Done.")

def post_object(s3, bucket, key):
    post = s3.generate_presigned_post(
        Bucket=bucket,
        Key=key,
        Fields={"acl": "private"},
        Conditions=[
            {"acl": "private"},
            ["content-length-range", 0, 1048576]
        ],
        ExpiresIn=3600
    )

    with open(key, 'rb') as f:
        files = {'file': (key, f)}
        response = requests.post(post["url"], data=post["fields"], files=files)

    if response.status_code == 204:
        print("Upload successful. S3 POST trigger should fire.")
    else:
        print("Upload failed!")
        print("Status:", response.status_code)
        print(response.text)

def multipart_upload(s3, bucket, key, file_size_mb=6):
    print(f"MULTIPART upload {key} to bucket {bucket}")

    # Create a temporary file
    filename = f"/tmp/{uuid.uuid4().hex}.bin"
    with open(filename, "wb") as f:
        f.write(os.urandom(file_size_mb * 1024 * 1024))

    config = TransferConfig(multipart_threshold=5*1024*1024, multipart_chunksize=5*1024*1024)
    s3.upload_file(filename, bucket, key, Config=config)
    os.remove(filename)
    print("Done.")

def main():
    parser = argparse.ArgumentParser(description="S3 Trigger Events")
    parser.add_argument("--bucket", required=True, help="S3 bucket name")
    parser.add_argument("--put", help="Key for PUT operation")
    parser.add_argument("--copy", nargs=3, metavar=('DEST_BUCKET', 'SRC_KEY', 'DEST_KEY'), help="Copy operation")
    parser.add_argument("--delkey", help="Key to DELETE")
    parser.add_argument("--post", help="Key for POST operation")
    parser.add_argument("--multipart", help="Key for MULTIPART UPLOAD")
    parser.add_argument("--size", type=int, default=6, help="File size in MB for multipart upload, default 6")

    args = parser.parse_args()

    s3 = boto3.client(
        's3',
        endpoint_url=ENDPOINT_URL,
        region_name = REGION)

    try:
        s3.create_bucket(Bucket=args.bucket,
            CreateBucketConfiguration={
                'LocationConstraint': REGION
            })
        print(f"Bucket {args.bucket} created.")
    except Exception as e:
        pass

    if args.put:
        put_object(s3, args.bucket, args.put)

    if args.copy:
        src_bucket, src_key, dest_key = args.copy
        copy_object(s3, src_bucket, src_key, args.bucket, dest_key)

    if args.delkey:
        delete_object(s3, args.bucket, args.delkey)

    if args.post:
        post_object(s3, args.bucket, args.post)

    if args.multipart:
        multipart_upload(s3, args.bucket, args.multipart, file_size_mb=args.size)

if __name__ == "__main__":
    main()
```

<br>

To use this script, we have to activate virtual environment since I am using module `boto3`.

<br>

```bash
(myenv) $ py s3_event_trigger.py --help
usage: s3_event_trigger.py [-h] --bucket BUCKET [--put PUT] [--copy SRC_BUCKET SRC_KEY DEST_KEY] [--delkey DELKEY] [--post POST] [--multipart MULTIPART] [--size SIZE]

S3 Trigger Events

options:
  -h, --help            show this help message and exit
  --bucket BUCKET       S3 bucket name
  --put PUT             Key for PUT operation
  --copy DEST_BUCKET SRC_KEY DEST_KEY
                        Copy operation
  --delkey DELKEY       Key to DELETE
  --post POST           Key for POST operation
  --multipart MULTIPART
                        Key for MULTIPART UPLOAD
  --size SIZE           File size in MB for multipart upload, default 6
```

<br>

Let's play with the `Python` script.

### PUT event:

<br>

```bash
$ py s3_event_trigger.py --bucket test-bucket --put test.txt
PUT object test.txt to bucket test-bucket
Done. Uploaded 29 bytes from file: test.txt
```

<br>

### Check Log:

<br>

```bash
$ aws logs tail /aws/lambda/event-handler | grep -oP '\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2} .*'
2025-11-07T10:18:46 S3 Event Detected
2025-11-07T10:18:46 -------------------------------
2025-11-07T10:18:46 Event Type: ObjectCreated:Put (Put)
2025-11-07T10:18:46 Timestamp:  2025-11-07T10:18:45.901Z
2025-11-07T10:18:46 Bucket:     test-bucket
2025-11-07T10:18:46 Object:     test.txt
2025-11-07T10:18:46 Size:       29 bytes
2025-11-07T10:18:46 ETag:       b72a05983f663132daaf4688bb919f80
2025-11-07T10:18:46 -------------------------------
```

<br>

### COPY event:

<br>

```bash
$ py s3_event_trigger.py --bucket test-bucket --copy test-bucket test.txt copy_test.txt
COPY object test.txt from test-bucket to copy_test.txt in test-bucket
Done.
```

<br>

### Check Log:

<br>

```bash
$ aws logs tail /aws/lambda/event-handler | grep -oP '\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2} .*'
...
...
...
2025-11-07T10:24:23 S3 Event Detected
2025-11-07T10:24:23 -------------------------------
2025-11-07T10:24:23 Event Type: ObjectCreated:Copy (Copy)
2025-11-07T10:24:23 Timestamp:  2025-11-07T10:24:23.049Z
2025-11-07T10:24:23 Bucket:     test-bucket
2025-11-07T10:24:23 Object:     copy_test.txt
2025-11-07T10:24:23 Size:       29 bytes
2025-11-07T10:24:23 ETag:       b72a05983f663132daaf4688bb919f80
2025-11-07T10:24:23 -------------------------------
```

<br>

### DEL event:

<br>

```bash
$ py s3_event_trigger.py --bucket test-bucket --delkey copy_test.txt
DELETE object copy_test.txt from bucket test-bucket
Done.
```

<br>

### Check Log:

<br>

```bash
$ aws logs tail /aws/lambda/event-handler | grep -oP '\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2} .*'
...
...
...
2025-11-07T10:31:23 S3 Event Detected
2025-11-07T10:31:23 -------------------------------
2025-11-07T10:31:23 Event Type: ObjectRemoved:Delete (Delete)
2025-11-07T10:31:23 Timestamp:  2025-11-07T10:31:23.815Z
2025-11-07T10:31:23 Bucket:     test-bucket
2025-11-07T10:31:23 Object:     copy_test.txt
2025-11-07T10:31:23 Size:       0 bytes
2025-11-07T10:31:23 ETag:
2025-11-07T10:31:23 -------------------------------
```

<br>

### POST event:


<br>

```bash
$ py s3_event_trigger.py --bucket test-bucket --post test.txt
Upload successful. S3 POST trigger should fire.
Done.
```

<br>

### Check Log:

<br>

```bash
$ aws logs tail /aws/lambda/event-handler | grep -oP '\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2} .*'
...
...
...
2025-11-07T10:38:34 S3 Event Detected
2025-11-07T10:38:34 -------------------------------
2025-11-07T10:38:34 Event Type: ObjectCreated:Post (Post)
2025-11-07T10:38:34 Timestamp:  2025-11-07T10:38:34.267Z
2025-11-07T10:38:34 Bucket:     test-bucket
2025-11-07T10:38:34 Object:     test.txt
2025-11-07T10:38:34 Size:       29 bytes
2025-11-07T10:38:34 ETag:       b72a05983f663132daaf4688bb919f80
2025-11-07T10:38:34 -------------------------------
```

<br>

### MultipartUpload event:

<br>

This creates file `bigfile.bin` with default size `6MB` and then multipart upload.

<br>

```bash
$ py s3_event_trigger.py --bucket test-bucket --multipart bigfile.bin
MULTIPART upload bigfile.bin to bucket test-bucket
Done.
```

<br>

### Check Log:

<br>

```bash
$ aws logs tail /aws/lambda/event-handler | grep -oP '\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2} .*'
...
...
...
2025-11-07T10:47:03 S3 Event Detected
2025-11-07T10:47:03 -------------------------------
2025-11-07T10:47:03 Event Type: ObjectCreated:CompleteMultipartUpload (CompleteMultipartUpload)
2025-11-07T10:47:03 Timestamp:  2025-11-07T10:47:03.826Z
2025-11-07T10:47:03 Bucket:     test-bucket
2025-11-07T10:47:03 Object:     bigfile.bin
2025-11-07T10:47:03 Size:       6291456 bytes
2025-11-07T10:47:03 ETag:       e987a1a3c3017758f83dd34f9f8db424-2
2025-11-07T10:47:03 -------------------------------
```

<br>

That's it, we have done with `Python` script.

Time to clean up the bucket:

<br>

```bash
$ aws s3 rm s3://test-bucket --recursive
delete: s3://test-bucket/test.txt
delete: s3://test-bucket/bigfile.bin
```

<br>

## Using Perl
***

Let's re-create the same features in `Perl`.

For `POST event`, I had to generate policy and signing key.

<br>

```perl
sub _generate_policy($bucket, $key) {
    my $expire_in  = 3600;
    my $expiration = strftime("%Y-%m-%dT%H:%M:%SZ", gmtime(time + $expire_in));
    my $policy     = {
        expiration => $expiration,
        conditions => [
            { bucket => $bucket },
            ["starts-with", '$key', ""],
        ],
    };

    return encode_base64(encode_json($policy), "");
}

sub _derive_signing_key($secret, $date, $region, $service) {
    my $k_date    = _sign("AWS4$secret", $date);
    my $k_region  = _sign($k_date, $region);
    my $k_service = _sign($k_region, $service);
    return _sign($k_service, "aws4_request");
}

sub _sign($key, $message) {
    return hmac_sha256($message, $key);
}
```

<br>

Here is the complete solution.

**File:** `s3_event_trigger.pl`

<br>

```perl
#!/usr/bin/env perl

use v5.38;

use Paws;
use Try::Tiny;
use Data::UUID;
use File::Temp;
use Getopt::Long;
use File::Basename;
use POSIX qw(strftime);
use JSON qw(encode_json);
use MIME::Base64 qw(encode_base64);
use Digest::SHA qw(hmac_sha256_hex hmac_sha256);

use LWP::UserAgent;
use HTTP::Request::Common;

my $ENDPOINT   = $ENV{AWS_ENDPOINT_URL} || 'http://localhost:4566';
my $REGION     = 'eu-west-1';
my $SECRET_KEY = 'test';
my $ACCESS_KEY = 'test';

my %args;
GetOptions(
    'bucket=s'    => \$args{bucket},
    'put=s'       => \$args{put},
    'copy=s{3}'   => \my @copy_args,
    'delkey=s'    => \$args{delkey},
    'post=s'      => \$args{post},
    'multipart=s' => \$args{multipart},
    'size=i'      => \$args{size},
    'help'        => \$args{help},
) or show_help_and_exit(1);

show_help_and_exit(0) if $args{help};

die "Bucket name is required" unless $args{bucket};

my $s3 = Paws->service('S3', region => $REGION, endpoint => $ENDPOINT);

my $bucket = $args{bucket};
try {
    $s3->HeadBucket(Bucket => $bucket);
    say "Bucket '$bucket' exists and is accessible.";
}
catch {
    try {
        $s3->CreateBucket(
            Bucket => $bucket,
            CreateBucketConfiguration => {
                LocationConstraint => $REGION
            }
        );
        say "Bucket '$bucket' created successfully.";
    }
    catch {
        die "Failed to create bucket: $_";
    };
};

if ($args{put}) {
    put_object($s3, $bucket, $args{put});
}

if (@copy_args) {
    my ($src_bucket, $src_key, $dest_key) = @copy_args;
    copy_object($s3, $src_bucket, $src_key, $bucket, $dest_key);
}

if ($args{delkey}) {
    delete_object($s3, $bucket, $args{delkey});
}

if ($args{post}) {
    post_object($s3, $bucket, $args{post});
}

if ($args{multipart}) {
    multipart_upload($s3, $bucket, $args{multipart}, $args{size}||6);
}

#
#
# SUBROUTINES

sub show_help_and_exit($exit_code, $message=undef) {

    my $help =<<"END_HELP";
usage: $0 [--help] [--bucket BUCKET]
          [--put KEY]
          [--copy DEST_BUCKET SRC_KEY DEST_KEY]
          [--delkey KEY]
          [--post KEY]
          [--multipart KEY]
          [--size SIZE]

S3 Trigger Events

options:
  --help              Show this help message and exit
  --bucket BUCKET     S3 Bucket name, required
  --put KEY           Key for PUT operation
  --copy DEST_BUCKET SRC_KEY DEST_KEY Copy operation
  --delkey KEY        Key to DELETE
  --post KEY          Key for POST operation
  --multipart KEY     Key for MULTIPART UPLOAD
  --size SIZE         File size in MB for multipart upload, default 6
END_HELP

    $help = "ERROR: $message\n\n$help" if defined $message;
    say $help and exit $exit_code;
}

sub put_object($s3, $bucket, $key) {

    say "PUT object $key to bucket $bucket";

    try {
        open(my $file, '<:raw', $key) or die "Cannot open file '$key': $!";
        my $content;
        {
            local $/;
            $content = <$file>;
        }
        close($file);

        $s3->PutObject(
            Bucket => $bucket,
            Key    => $key,
            Body   => $content
        );

        my $size = length($content);
        say "Done. Uploaded $size bytes from file: $key";
    }
    catch {
        my $error = $_;

        if ($error =~ /Cannot open file.*No such file or directory/) {
            say "Error: File '$key' not found.";
        }
        elsif ($error =~ /Cannot open file.*Permission denied/) {
            say "Error: Permission denied to read file '$key'.";
        }
        else {
            say "Error uploading file: $error";
        }
        die $error;
    };
}

sub copy_object($s3, $src_bucket, $src_key, $dest_bucket, $dest_key) {

    say "COPY object $src_key from $src_bucket to $dest_key in $dest_bucket";
    $s3->CopyObject(
        CopySource => "$src_bucket/$src_key",
        Bucket     => $dest_bucket,
        Key        => $dest_key
    );
    say "Done.";
}

sub delete_object($s3, $bucket, $key) {

    say "DELETE object $key from bucket $bucket";
    $s3->DeleteObject(
        Bucket => $bucket,
        Key    => $key
    );
    say "Done.";
}

sub post_object($s3, $bucket, $file) {

    my $key         = basename($file);
    my $policy      = _generate_policy($bucket, $key);
    my $date        = strftime("%Y%m%d", gmtime());
    my $amz_date    = strftime("%Y%m%dT%H%M%SZ", gmtime());
    my $credential  = "$ACCESS_KEY/$date/$REGION/s3/aws4_request";
    my $signing_key = _derive_signing_key($SECRET_KEY, $date, $REGION, "s3");
    my $signature   = hmac_sha256_hex($policy, $signing_key);

    my %form = (
        key                => $key,
        bucket             => $bucket,
        "X-Amz-Algorithm"  => "AWS4-HMAC-SHA256",
        "X-Amz-Credential" => $credential,
        "X-Amz-Date"       => $amz_date,
        Policy             => $policy,
        "X-Amz-Signature"  => $signature,
        file               => [$file],
    );

    my $ua  = LWP::UserAgent->new;
    my $url = "$ENDPOINT/$bucket";
    my $res = $ua->request(
        POST $url, Content_Type => 'form-data', Content => [%form]);

    if ($res->is_success) {
        say "Upload successful (S3 POST event trigger).";
    } else {
        say "Upload failed!";
        say "Status: " . $res->code;
        say "Message: " . $res->status_line;
        say "Response body:\n" . $res->decoded_content;
    }
}

sub _generate_policy($bucket, $key) {
    my $expire_in  = 3600;
    my $expiration = strftime("%Y-%m-%dT%H:%M:%SZ", gmtime(time + $expire_in));
    my $policy     = {
        expiration => $expiration,
        conditions => [
            { bucket => $bucket },
            ["starts-with", '$key', ""],
        ],
    };

    return encode_base64(encode_json($policy), "");
}

sub _derive_signing_key($secret, $date, $region, $service) {
    my $k_date    = _sign("AWS4$secret", $date);
    my $k_region  = _sign($k_date, $region);
    my $k_service = _sign($k_region, $service);
    return _sign($k_service, "aws4_request");
}

sub _sign($key, $message) {
    return hmac_sha256($message, $key);
}

sub multipart_upload($s3, $bucket, $key, $file_size_mb) {

    say "MULTIPART upload $key to bucket $bucket.";

    my $ug = Data::UUID->new;
    my $temp_filename   = "/tmp/" . $ug->create_str() . ".bin";
    my $file_size_bytes = $file_size_mb * 1024 * 1024;

    open my $fh, '>', $temp_filename or die "Cannot create temp file: $!";
    print $fh map { chr(int(rand(256))) } 1..$file_size_bytes;
    close $fh;

    my $create_response = $s3->CreateMultipartUpload(
        Bucket => $bucket,
        Key    => $key
    );

    my $upload_id = $create_response->UploadId;
    my $parts     = _create_parts($bucket, $key, $temp_filename, $upload_id);

    $s3->CompleteMultipartUpload(
        Bucket          => $bucket,
        Key             => $key,
        UploadId        => $upload_id,
        MultipartUpload => { Parts => $parts }
    );

    unlink $temp_filename or warn "Could not delete temp file: $!";

    say "Done. Upload completed with ", scalar(@$parts), " parts.";
}

sub _create_parts($bucket, $key, $filename, $upload_id) {

    my $part_number = 1;
    my $part_size   = 5 * 1024 * 1024;
    my @parts;

    open my $file_fh, '<:raw', $filename or die "Cannot open file: $!";

    while (my $bytes_read = read($file_fh, my $chunk, $part_size)) {
        say "Uploading part $part_number ($bytes_read bytes)";

        my $part_response = $s3->UploadPart(
            Bucket     => $bucket,
            Key        => $key,
            PartNumber => $part_number,
            UploadId   => $upload_id,
            Body       => $chunk
        );

        push @parts, {
            PartNumber => $part_number,
            ETag       => $part_response->ETag
        };

        $part_number++;
    }

    close $file_fh;

    return \@parts;
}
```

<br>

This is the interface of the application.

<br>

```bash
$ perl s3_event_trigger.pl --help
usage: s3_event_trigger.pl [--help] [--bucket BUCKET]
          [--put KEY]
          [--copy DEST_BUCKET SRC_KEY DEST_KEY]
          [--delkey KEY]
          [--post KEY]
          [--multipart KEY]
          [--size SIZE]

S3 Trigger Events

options:
  --help              Show this help message and exit
  --bucket BUCKET     S3 Bucket name, required
  --put KEY           Key for PUT operation
  --copy DEST_BUCKET SRC_KEY DEST_KEY Copy operation
  --delkey KEY        Key to DELETE
  --post KEY          Key for POST operation
  --multipart KEY     Key for MULTIPART UPLOAD
  --size SIZE         File size in MB for multipart upload, default 6
```

<br>

Let's play with the `Perl` script.

### PUT event:

<br>

```bash
$ perl s3_event_trigger.pl --bucket test-bucket --put test.txt
Bucket 'test-bucket' exists and is accessible.
PUT object test.txt to bucket test-bucket
Done. Uploaded 29 bytes from file: test.txt
```

<br>

### Check Log:

<br>

```bash

$ aws logs tail /aws/lambda/event-handler | grep -oP '\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2} .*'
...
...
...
2025-11-07T10:54:19 S3 Event Detected
2025-11-07T10:54:19 -------------------------------
2025-11-07T10:54:19 Event Type: ObjectCreated:Put (Put)
2025-11-07T10:54:19 Timestamp:  2025-11-07T10:54:19.394Z
2025-11-07T10:54:19 Bucket:     test-bucket
2025-11-07T10:54:19 Object:     test.txt
2025-11-07T10:54:19 Size:       29 bytes
2025-11-07T10:54:19 ETag:       b72a05983f663132daaf4688bb919f80
2025-11-07T10:54:19 -------------------------------
```

<br>

### COPY event:

<br>

```bash
$ perl s3_event_trigger.pl --bucket test-bucket --copy test-bucket test.txt copy_test.txt
Bucket 'test-bucket' exists and is accessible.
COPY object test.txt from test-bucket to copy_test.txt in test-bucket
Done.
```

<br>

### Check Log:

<br>

```bash
$ aws logs tail /aws/lambda/event-handler | grep -oP '\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2} .*'
...
...
...
2025-11-07T11:02:50 S3 Event Detected
2025-11-07T11:02:50 -------------------------------
2025-11-07T11:02:50 Event Type: ObjectCreated:Copy (Copy)
2025-11-07T11:02:50 Timestamp:  2025-11-07T11:02:50.187Z
2025-11-07T11:02:50 Bucket:     test-bucket
2025-11-07T11:02:50 Object:     copy_test.txt
2025-11-07T11:02:50 Size:       29 bytes
2025-11-07T11:02:50 ETag:       b72a05983f663132daaf4688bb919f80
2025-11-07T11:02:50 -------------------------------
```

<br>

### DEL event:

<br>

```bash
$ perl s3_event_trigger.pl --bucket test-bucket --delkey copy_test.txt
Bucket 'test-bucket' exists and is accessible.
DELETE object copy_test.txt from bucket test-bucket
Done.
```

<br>

### Check Log:

<br>

```bash
$ aws logs tail /aws/lambda/event-handler | grep -oP '\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2} .*'
...
...
...
2025-11-07T11:05:01 S3 Event Detected
2025-11-07T11:05:01 -------------------------------
2025-11-07T11:05:01 Event Type: ObjectRemoved:Delete (Delete)
2025-11-07T11:05:01 Timestamp:  2025-11-07T11:05:01.757Z
2025-11-07T11:05:01 Bucket:     test-bucket
2025-11-07T11:05:01 Object:     copy_test.txt
2025-11-07T11:05:01 Size:       0 bytes
2025-11-07T11:05:01 ETag:
2025-11-07T11:05:01 -------------------------------
```

<br>

### POST event:

<br>


```bash
$ perl s3_event_trigger.pl --bucket test-bucket --post test.txt
Bucket 'test-bucket' exists and is accessible.
Upload successful (S3 POST event trigger).
```

<br>

### Check Log:

<br>

```bash
$ aws logs tail /aws/lambda/event-handler | grep -oP '\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2} .*'
...
...
...
2025-11-07T11:06:14 S3 Event Detected
2025-11-07T11:06:14 -------------------------------
2025-11-07T11:06:14 Event Type: ObjectCreated:Post (Post)
2025-11-07T11:06:14 Timestamp:  2025-11-07T11:06:14.177Z
2025-11-07T11:06:14 Bucket:     test-bucket
2025-11-07T11:06:14 Object:     test.txt
2025-11-07T11:06:14 Size:       29 bytes
2025-11-07T11:06:14 ETag:       b72a05983f663132daaf4688bb919f80
2025-11-07T11:06:14 -------------------------------
```

<br>

### MultipartUpload event:

<br>

```bash
$ perl s3_event_trigger.pl --bucket test-bucket --multipart bigfile.bin
Bucket 'test-bucket' exists and is accessible.
MULTIPART upload bigfile.bin to bucket test-bucket.
Uploading part 1 (5242880 bytes)
Uploading part 2 (1048576 bytes)
Done. Upload completed with 2 parts.
```

<br>

### Check Log:

<br>

```bash
$ aws logs tail /aws/lambda/event-handler | grep -oP '\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2} .*'
...
...
...
2025-11-07T11:07:25 S3 Event Detected
2025-11-07T11:07:25 -------------------------------
2025-11-07T11:07:25 Event Type: ObjectCreated:CompleteMultipartUpload (CompleteMultipartUpload)
2025-11-07T11:07:25 Timestamp:  2025-11-07T11:07:25.949Z
2025-11-07T11:07:25 Bucket:     test-bucket
2025-11-07T11:07:25 Object:     bigfile.bin
2025-11-07T11:07:25 Size:       6291456 bytes
2025-11-07T11:07:25 ETag:       98637b481c8a3c836bab1d9df673204a-2
2025-11-07T11:07:25 -------------------------------
```

<br>

`Happy Hacking !!!`
