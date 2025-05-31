---
title: "LocalStack with AWS S3"
date: 2025-05-24T00:00:00+00:00
description: "Discussion about LocalStack and AWS S3."
type: post
image: images/blog/localstack-aws-s3.png
author: Mohammad Sajid Anwar
tags: ["perl", "python", "aws", "localstack"]
---

#### **DISCLAIMER:** Image is generated using `Leonardo AI`.
***

<br>

### [&nbsp;&nbsp;1. Introduction](#introduction)
### [&nbsp;&nbsp;2. Setup awscli](#install-awscli)
### [&nbsp;&nbsp;3. Setup LocalStack](#install-localstack)
### [&nbsp;&nbsp;4. Make Bucket](#make-bucket)
### [&nbsp;&nbsp;5. List Buckets](#list-buckets)
### [&nbsp;&nbsp;6. Upload File](#upload-file)
### [&nbsp;&nbsp;7. Download File](#download-file)
### [&nbsp;&nbsp;8. Delete File](#delete-file)
### [&nbsp;&nbsp;9. List Bucket](#list-bucket)
### [10. Remove Bucket](#remove-bucket)
### [11. S3 with Python](#s3-with-python)
### [12. S3 with Perl](#s3-with-perl)
### [13. What next?](#what-next)

<br>

## Introduction
***

Recently I got the opportunity to work with `AWS S3` at work.

For this I wanted to brush up my knowledge as last I played with it was an year ago.

I used `Free Tier` account provided by `AWS` last time.

The account trial period ended in `12 months` as expected.

So now, I had no otherway to play with `AWS S3`.

While looking for an alternative, I found out, [**LocalStack**](https://www.localstack.cloud).

`LocalStack` is a cloud service emulator that provides a local environment for developing and testing `AWS (Amazon Web Services)` applications without connecting to the real `AWS` cloud.

<br>

## Setup awscli
***

<br>

To prepare the ground, I needed `aws` command line utility.

So this is how I got it installed.

<br>

```bash
$ curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
$ unzip awscliv2.zip
$ sudo ./aws/install
$ aws --version
aws-cli/2.25.6 Python/3.12.9 Linux/5.15.167.4-microsoft-standard-WSL2 exe/x86_64.ubuntu.24
```

<br>

Let's configure the `aws` client now:

<br>

```bash
$ aws configure
AWS Access Key ID [None]: test
AWS Secret Access Key [None]: test
Default region name [None]: eu-west-1
Default output format [None]: json
```

<br>

List the configuration:

<br>

```bash
$ aws configure list
      Name                    Value             Type    Location
      ----                    -----             ----    --------
   profile                <not set>             None    None
access_key     ****************VW55              env
secret_key     ****************+ljT              env
    region                eu-west-1      config-file    ~/.aws/config
```

<br>

Verify the config file:

<br>

```bash
$ cat ~/.aws/config
[default]
region = eu-west-1
output = json
```

<br>

And the credentials as well:

<br>

```bash
$ cat ~/.aws/credentials
[default]
aws_access_key_id = test
aws_secret_access_key = test
```

<br>

## Setup LocalStack
***

Being a docker fan, I decided to create container using the following configuration file.

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
    volumes:
      - localstack_data:/var/lib/localstack
    environment:
      - PERSISTENCE=1
      - LAMBDA_PERSISTENCE=1
      - LOCALSTACK_PERSISTENCE=1
      - LOCALSTACK_HOST=127.0.0.1
      - LAMBDA_DOCKER_NETWORK=bridge
    restart: unless-stopped

volumes:
  localstack_data:
```

<br>

Let's start the service now:

<br>

```bash
$ docker-compose up -d
```

<br>

Check the status of container:

<br>

```bash
$ dps
Container ID: 59d9d7c80571
Image: localstack/localstack
Command: "docker-entrypoint.sh"
Created: 2025-05-24 00:18:48 +0100 BST
Status: Up 2 minutes (healthy)
Ports: 0.0.0.0:4510-4559->4510-4559/tcp, [::]:4510-4559->4510-4559/tcp, 0.0.0.0:4566->4566/tcp, [::]:4566->4566/tcp, 5678/tcp
Names: localstack
```

<br>

I have created alias `dps` as below:

<br>

```bash
alias dps='docker ps --format "Container ID: {{.ID}}\nImage: {{.Image}}\nCommand: {{.Command}}\nCreated: {{.CreatedAt}}\nStatus: {{.Status}}\nPorts: {{.Ports}}\nNames: {{.Names}}\n"'
```

<br>

Let's find out the version of `LocalStack`.

<br>

```bash
$ docker logs localstack | grep -i "version"
LocalStack version: 4.3.1.dev3
```

<br>

## Make Bucket
***

<br>

We need to set the env var `AWS_ENDPOINT_URL` first.

<br>

```bash
$ export AWS_ENDPOINT_URL=http://localhost:4566
```

<br>

Let's make the first bucket in `S3` using `aws` utility.

<br>

```bash
$ aws s3 mb s3://bucket-1
make_bucket: bucket-1
```

<br>

### Object Versioning

<br>

After creating the bucket, we can enable the versioning for the bucket.

What does that mean?

It means, any object saved in the bucket after enabling the versioning will have unique version assgined.

To enable the versioning we do this:

<br>

```bash
$ aws s3api put-bucket-versioning --bucket bucket-1 --versioning-configuration Status=Enabled
```

<br>

Once the versioning is enabled for `S3` bucket, it can't be disabled permanently.

However, it can be suspended.

This is how you can do it:

<br>

```bash
$ aws s3api put-bucket-versioning --bucket bucket-1 --versioning-configuration Status=Suspended
```

<br>

Objects uploaded before enabling versioning will have their version id set to `null`.

Objects uploaded after will get unique version id.

After the versioning is suspended, all existing objects with version id remain intact but new object wouldn't get version id.

Deleting a versioned object doesn't actually delete the object, instead adds a `delete marker`.

Those with `delete marker`, then disappears from the listing i.e. `aws s3 ls`.

You can still access the object if you know their version id.

The `delete marker` can be removed if you know the version id.

You can permanently delete a specific version as below:

<br>

```bash
$ aws s3api delete-object --bucket bucket-1 --key test.txt --version-id <object version id>
```

<br>

## List Buckets
***

<br>

List all `S3` buckets.

<br>

```bash
$ aws s3 ls
2025-05-24 13:00:34 bucket-1
```

<br>

## Upload File
***

<br>

We will create local file `test.txt` first:

<br>

```bash
$ echo 'Hello from LocalStack!!' > test.txt
```

<br>

Time to upload the file, `test.txt`, to the bucket.

<br>

```bash
$ aws s3 cp test.txt s3://bucket-1
upload: ./test.txt to s3://bucket-1/test.txt
```

<br>

Since, the bucket `bucket-1` has versioning enabled, we can list the versioned objects like this:

<br>

```bash
$ aws s3api list-object-versions --bucket bucket-1
{
    "Versions": [
        {
            "ETag": "\"4a55761ef4480141238eeb4fe69d3b95\"",
            "ChecksumAlgorithm": [
                "CRC64NVME"
            ],
            "ChecksumType": "FULL_OBJECT",
            "Size": 56,
            "StorageClass": "STANDARD",
            "Key": "test.txt",
            "VersionId": "AZcC8UinjmtEDvAEOUOMh3FQMmmBVbOh",
            "IsLatest": true,
            "LastModified": "2025-05-24T15:37:36+00:00",
            "Owner": {
                "DisplayName": "webfile",
                "ID": "75aa57f09aa0c8caeab4f8c24e99d10f8e7faeebf76c078efc7c6caea54ba06a"
            }
        }
    ],
    "RequestCharged": null,
    "Prefix": ""
}
```

<br>

Let's modify the file `test.txt` and upload again to the same bucket `bucket-1`.

<br>

```bash
$ echo "Add another line." >> test.txt
$ aws s3 cp test.txt s3://bucket-1
upload: ./test.txt to s3://bucket-1/test.txt
```

<br>

Now, let's list object version again:

<br>

```bash
$ aws s3api list-object-versions --bucket bucket-1
{
    "Versions": [
        {
            "ETag": "\"c14953d2f24898e979c75c72b0ca4cf6\"",
            "ChecksumAlgorithm": [
                "CRC64NVME"
            ],
            "ChecksumType": "FULL_OBJECT",
            "Size": 74,
            "StorageClass": "STANDARD",
            "Key": "test.txt",
            "VersionId": "AZcC8Uio9aDWHsR_0SWRIBB5eslHp4kX",
            "IsLatest": true,
            "LastModified": "2025-05-24T15:39:12+00:00",
            "Owner": {
                "DisplayName": "webfile",
                "ID": "75aa57f09aa0c8caeab4f8c24e99d10f8e7faeebf76c078efc7c6caea54ba06a"
            }
        },
        {
            "ETag": "\"4a55761ef4480141238eeb4fe69d3b95\"",
            "ChecksumAlgorithm": [
                "CRC64NVME"
            ],
            "ChecksumType": "FULL_OBJECT",
            "Size": 56,
            "StorageClass": "STANDARD",
            "Key": "test.txt",
            "VersionId": "AZcC8UinjmtEDvAEOUOMh3FQMmmBVbOh",
            "IsLatest": false,
            "LastModified": "2025-05-24T15:37:36+00:00",
            "Owner": {
                "DisplayName": "webfile",
                "ID": "75aa57f09aa0c8caeab4f8c24e99d10f8e7faeebf76c078efc7c6caea54ba06a"
            }
        }
    ],
    "RequestCharged": null,
    "Prefix": ""
}
```

<br>

## Download File
***

<br>

Let's delete the local file first.

<br>

```bash
$ rm test.txt
```

<br>

Now, download the file from the `S3` bucket.

```bash
$ aws s3 cp s3://bucket-1/test.txt .
download: s3://bucket-1/test.txt to ./test.txt
```

<br>

We can even download the file and save it with a new name.

<br>

```bash
$ aws s3 cp s3://bucket-1/test.txt test-1.txt
download: s3://bucket-1/test.txt to ./test-1.txt
```

<br>

## Delete File
***

<br>

Delete file from the `S3` bucket.

<br>

```bash
$ aws s3 rm s3://bucket-1/test.txt
delete: s3://bucket-1/test.txt
```

<br>

If the file `test.txt` is a versioned object then it isn't deleted permanently yet.

Instead, it is assigned `DeleteMarkers` and hide from listing.

<br>

```bash
$ aws s3api list-object-versions --bucket bucket-1
{
    "Versions": [
        {
            "ETag": "\"c14953d2f24898e979c75c72b0ca4cf6\"",
            "ChecksumAlgorithm": [
                "CRC64NVME"
            ],
            "ChecksumType": "FULL_OBJECT",
            "Size": 74,
            "StorageClass": "STANDARD",
            "Key": "test.txt",
            "VersionId": "AZcmqb_JvtzcqY6aLIzZM4I31ydynMux",
            "IsLatest": false,
            "LastModified": "2025-05-31T16:39:29+00:00",
            "Owner": {
                "DisplayName": "webfile",
                "ID": "75aa57f09aa0c8caeab4f8c24e99d10f8e7faeebf76c078efc7c6caea54ba06a"
            }
        },
        {
            "ETag": "\"c14953d2f24898e979c75c72b0ca4cf6\"",
            "ChecksumAlgorithm": [
                "CRC64NVME"
            ],
            "ChecksumType": "FULL_OBJECT",
            "Size": 74,
            "StorageClass": "STANDARD",
            "Key": "test.txt",
            "VersionId": "AZcmqb_IltL0mnl324IHtaUhm0L5AMvH",
            "IsLatest": false,
            "LastModified": "2025-05-31T16:39:04+00:00",
            "Owner": {
                "DisplayName": "webfile",
                "ID": "75aa57f09aa0c8caeab4f8c24e99d10f8e7faeebf76c078efc7c6caea54ba06a"
            }
        }
    ],
    "DeleteMarkers": [
        {
            "Owner": {
                "DisplayName": "webfile",
                "ID": "75aa57f09aa0c8caeab4f8c24e99d10f8e7faeebf76c078efc7c6caea54ba06a"
            },
            "Key": "test.txt",
            "VersionId": "AZcmqb_KNCmI5BHzE3nR5t6YgmYLGw_B",
            "IsLatest": true,
            "LastModified": "2025-05-31T16:41:50+00:00"
        }
    ],
    "RequestCharged": null,
    "Prefix": ""
}
```

<br>


To list all delete markers in a bucket, you do this:

<br>

```bash
$ aws s3api list-object-versions --bucket bucket-1 --query 'DeleteMarkers[*]'
[
    {
        "Owner": {
            "DisplayName": "webfile",
            "ID": "75aa57f09aa0c8caeab4f8c24e99d10f8e7faeebf76c078efc7c6caea54ba06a"
        },
        "Key": "test.txt",
        "VersionId": "AZcmqb_KNCmI5BHzE3nR5t6YgmYLGw_B",
        "IsLatest": true,
        "LastModified": "2025-05-31T16:41:50+00:00"
    }
]
```

<br>


```bash
$ aws s3api list-object-versions --bucket bucket-1 --query 'Versions[?IsLatest==`false`] || DeleteMarkers[]'
[
    {
        "ETag": "\"c14953d2f24898e979c75c72b0ca4cf6\"",
        "ChecksumAlgorithm": [
            "CRC64NVME"
        ],
        "ChecksumType": "FULL_OBJECT",
        "Size": 74,
        "StorageClass": "STANDARD",
        "Key": "test.txt",
        "VersionId": "AZcmqb_JvtzcqY6aLIzZM4I31ydynMux",
        "IsLatest": false,
        "LastModified": "2025-05-31T16:39:29+00:00",
        "Owner": {
            "DisplayName": "webfile",
            "ID": "75aa57f09aa0c8caeab4f8c24e99d10f8e7faeebf76c078efc7c6caea54ba06a"
        }
    },
    {
        "ETag": "\"c14953d2f24898e979c75c72b0ca4cf6\"",
        "ChecksumAlgorithm": [
            "CRC64NVME"
        ],
        "ChecksumType": "FULL_OBJECT",
        "Size": 74,
        "StorageClass": "STANDARD",
        "Key": "test.txt",
        "VersionId": "AZcmqb_IltL0mnl324IHtaUhm0L5AMvH",
        "IsLatest": false,
        "LastModified": "2025-05-31T16:39:04+00:00",
        "Owner": {
            "DisplayName": "webfile",
            "ID": "75aa57f09aa0c8caeab4f8c24e99d10f8e7faeebf76c078efc7c6caea54ba06a"
        }
    }
]
```

<br>

To delete any delete markers, do this:

<br>

```bash
$ aws s3api delete-object --bucket bucket-1 --key test.txt --version-id "AZcmqb_KNCmI5BHzE3nR5t6YgmYLGw_B"
{
    "DeleteMarker": true,
    "VersionId": "AZcmqb_KNCmI5BHzE3nR5t6YgmYLGw_B"
}
```

<br>

## List Bucket
***

<br>

List the content of the `S3` bucket.

<br>

```bash
$ aws s3 ls s3://bucket-1
2025-05-24 01:03:49         24 test.txt
```

## Remove Bucket
***

<br>

To remove the bucket, we need to empty the bucket first or use `--force` to remove with contents.

<br>

```bash
$ aws s3 rb s3://bucket-1 --force
delete: s3://bucket-1/test.txt
remove_bucket: bucket-1
```

<br>

## S3 with Python
***

<br>

We would need `boto3` module if we want to use `Python`.

However, to install `boto3` module, we need to create virtual environment.

And for virtual environment, we need to install `python3-venv` package first.

<br>

```bash
$ sudo apt install python3-venv
$ mkdir ~/python-venv
$ cd ~/python-venv
$ python3 -m venv myenv
$ alias aenv='source ~/python-venv/myenv/bin/activate'
$ alias denv='deactivate'
```

<br>

We have created two aliases `aenv` to activate the virtual environment and `denv` to deactive the virtual environment.

Let's install the `boto3` module.

<br>

```bash
$ aenv
(myenv) ~/$ pip3 install boto3
```

<br>

Below is the `Python` script to manage `S3` buckets.

**File**: `manage-s3.py`

<br>

```python
import os
import sys
import boto3
import argparse
from botocore.config import Config

ENDPOINT_URL      = "http://localhost:4566"
ACCESS_KEY_ID     = "test"
SECRET_ACCESS_KEY = "test"
DEFAULT_BUCKET    = "bucket-1"
DEFAULT_FILE      = "test.txt"
REGION            = "eu-west-1"

def create_s3_client():
    return boto3.client(
        's3',
        endpoint_url = ENDPOINT_URL,
        aws_access_key_id = ACCESS_KEY_ID,
        aws_secret_access_key = SECRET_ACCESS_KEY,
        config = Config(signature_version='s3v4'),
        region_name = REGION
    )

def make_bucket(s3, bucket_name, enable_versioning=False):
    try:
        s3.create_bucket(
            Bucket=bucket_name,
            CreateBucketConfiguration={
                'LocationConstraint': REGION
            }
        )

        if enable_versioning:
            s3.put_bucket_versioning(
                Bucket=bucket_name,
                VersioningConfiguration = { 'Status': 'Enabled' }
            )

        print(f"Bucket '{bucket_name}' created successfully")
        return True
    except Exception as e:
        print(f"Error creating bucket: {e}")
        return False

def suspend_versioning(s3, bucket_name):
    try:
        s3.put_bucket_versioning(
            Bucket=bucket_name,
            VersioningConfiguration = { 'Status': 'Suspended' }
        )

        print(f"Bucket '{bucket_name}' versioning suspended")
        return True
    except Exception as e:
        print(f"Error suspending versioning: {e}")
        return False

def check_bucket_versioning(s3, bucket_name):
    try:
        response = s3.get_bucket_versioning(Bucket=bucket_name)
        status = response.get('Status', 'Not enabled')
        print(f"Versioning: {status}")
        return True
    except Exception as e:
        print(f"Error checking bucket versioning: {e}")
        return False

def list_buckets(s3):
    try:
        response = s3.list_buckets()

        print("S3 Bucket List:")
        for bucket in response['Buckets']:
            print(f"- {bucket['Name']}")

        return True

    except Exception as e:
        print(f"Error listing buckets: {e}")
        return False

def list_object_versions(s3, bucket_name):
    try:
        response = s3.list_object_versions(Bucket=bucket_name)
        print(f"Versions in bucket: {bucket_name}")
        for version in response.get('Versions', []):
            print(f"- Key: {version['Key']}")
            print(f"  VersionId: {version['VersionId']}")
            print(f"  IsLatest: {version['IsLatest']}")
            print(f"  LastModified: {version['LastModified']}")
            print(f"  Size: {version['Size']}")
            print()

        return True

    except Exception as e:
        print(f"Error listing object versions: {e}")
        return False

def upload_file(s3, bucket_name, file_path, object_name=None):
    if not os.path.exists(file_path):
        print(f"Error: File '{file_path}' does not exist")
        return False

    if object_name is None:
        object_name = os.path.basename(file_path)

    try:
        s3.upload_file(file_path, bucket_name, object_name)
        print(f"File '{file_path}' uploaded as '{object_name}'")
        return True
    except Exception as e:
        print(f"Error uploading file: {e}")
        return False

def download_file(s3, bucket_name, object_name, download_path=None):
    if download_path is None:
        download_path = f"new_{object_name}"

    try:
        s3.download_file(bucket_name, object_name, download_path)
        print(f"File downloaded to '{download_path}'")

        # Verify content
        with open(download_path, 'r') as f:
            print("File content:", f.read())
        return True
    except Exception as e:
        print(f"Error downloading file: {e}")
        return False

def delete_file(s3, bucket_name, object_key, version_id):
    try:
        if version_id:
            s3.delete_object(Bucket=bucket_name, Key=object_key, VersionId=version_id)
        else:
            s3.delete_object(Bucket=bucket_name, Key=object_key)
        print(f"Successfully deleted {object_key} from {bucket_name}")
        return True
    except Exception as e:
        print(f"Error deleting {object_key}: {e}")
        return False

def delete_all(s3, bucket_name, object_key):
    try:
        response = s3.list_object_versions(Bucket=bucket_name, Prefix=object_key)

        for version in response.get('Versions', []):
            if version['Key'] == object_key:
                print(f"Deleting version: {version['VersionId']}")
                s3.delete_object(
                    Bucket=bucket_name,
                    Key=object_key,
                    VersionId=version['VersionId']
                )

        for marker in response.get('DeleteMarkers', []):
            if marker['Key'] == object_key:
                print(f"Deleting delete marker: {marker['VersionId']}")
                s3.delete_object(
                    Bucket=bucket_name,
                    Key=object_key,
                    VersionId=marker['VersionId']
                )
    except Exception as e:
        print(f"Error deleting versioned {object_key}: {e}")
        return False

def list_bucket_contents(s3, bucket_name):
    try:
        response = s3.list_objects_v2(Bucket=bucket_name)
        if 'Contents' in response:
            print(f"Bucket '{bucket_name}' contents:")
            for obj in response['Contents']:
                print(f"- {obj['Key']}")
        else:
            print(f"Bucket '{bucket_name}' is empty")
        return True
    except Exception as e:
        print(f"Error listing bucket contents: {e}")
        return False

def remove_bucket(s3, bucket_name):
    try:
        # Delete all objects first
        objects = s3.list_objects_v2(Bucket=bucket_name)
        if 'Contents' in objects:
            for obj in objects['Contents']:
                s3.delete_object(Bucket=bucket_name, Key=obj['Key'])

        # Delete bucket
        s3.delete_bucket(Bucket=bucket_name)
        print(f"Bucket '{bucket_name}' deleted successfully")
        return True
    except Exception as e:
        print(f"Error deleting bucket: {e}")
        return False

def create_test_file(file_path):
    if not os.path.exists(file_path):
        with open(file_path, 'w') as f:
            f.write(f"This is a test file created at {datetime.datetime.now()}\n")
        print(f"Created test file: {file_path}")

def main():
    parser = argparse.ArgumentParser(description="S3 Bucket Operations")
    parser.add_argument('--bucket', default=DEFAULT_BUCKET, help="Bucket name")
    parser.add_argument('--file', default=DEFAULT_FILE, help="File to upload/download")

    # Operation flags
    parser.add_argument('--make-bucket', action='store_true', help="Create bucket")
    parser.add_argument('--enable-versioning', action='store_true', help="Enable object versioning")
    parser.add_argument('--suspend-versioning', action='store_true', help="Suspend object versioning")
    parser.add_argument('--check-versioning', action='store_true', help="Check object versioning")
    parser.add_argument('--list-buckets', action='store_true', help="List buckets")
    parser.add_argument('--list-object-versions', action='store_true', help="List object versions")
    parser.add_argument('--upload', action='store_true', help="Upload file")
    parser.add_argument('--download', action='store_true', help="Download file")
    parser.add_argument('--delete', action='store_true', help="Delete file")
    parser.add_argument('--delete-all', action='store_true', help="Delete all")
    parser.add_argument('--version-id', help="Object version id")
    parser.add_argument('--list', action='store_true', help="List bucket contents")
    parser.add_argument('--remove-bucket', action='store_true', help="Delete bucket")

    args = parser.parse_args()

    s3 = create_s3_client()

    if args.upload:
        create_test_file(args.file)

    if args.make_bucket:
        make_bucket(s3, args.bucket, args.enable_versioning)

    if args.suspend_versioning:
        suspend_versioning(s3, args.bucket)

    if args.check_versioning:
        check_bucket_versioning(s3, args.bucket)

    if args.list_buckets:
        list_buckets(s3)

    if args.list_object_versions:
        list_object_versions(s3, args.bucket)

    if args.upload:
        upload_file(s3, args.bucket, args.file)

    if args.download:
        download_file(s3, args.bucket, os.path.basename(args.file))

    if args.delete:
        delete_file(s3, args.bucket, os.path.basename(args.file), args.version_id)

    if args.delete_all:
        delete_all(s3, args.bucket, os.path.basename(args.file))

    if args.list:
        list_bucket_contents(s3, args.bucket)

    if args.remove_bucket:
        remove_bucket(s3, args.bucket)

if __name__ == "__main__":
    import datetime
    main()
```

<br>

This is what it looks like:

<br>

```bash
(myenv) $ py manage-s3.py --help
usage: manage-s3.py [-h] [--bucket BUCKET] [--file FILE] [--make-bucket] [--enable-versioning]
                    [--suspend-versioning] [--check-versioning] [--list-buckets]
                    [--list-object-versions] [--upload] [--download] [--delete] [--delete-all]
                    [--version-id VERSION_ID] [--list] [--remove-bucket]

S3 Bucket Operations

options:
  -h, --help            show this help message and exit
  --bucket BUCKET       Bucket name
  --file FILE           File to upload/download
  --make-bucket         Create bucket
  --enable-versioning   Enable object versioning
  --suspend-versioning  Suspend object versioning
  --check-versioning    Check object versioning
  --list-buckets        List buckets
  --list-object-versions
                        List object versions
  --upload              Upload file
  --download            Download file
  --delete              Delete file
  --delete-all          Delete all
  --version-id VERSION_ID
                        Object version id
  --list                List bucket contents
  --remove-bucket       Delete bucket
```

<br>

### Make Bucket

<br>

```bash
(myenv) $ py manage-s3.py --bucket bucket-2 --make-bucket
Bucket 'bucket-2' created successfully.
```

<br>

Now make bucket with versioning enabled:

<br>

```bash
(myenv) $ py manage-s3.py --bucket bucket-3 --make-bucket --enable-versioning
Bucket 'bucket-3' created successfully.
```

<br>

Check the versioning now:

<br>

```bash
(myenv) $ py manage-s3.py --bucket bucket-3 --check-versioning
Versioning: Enabled
(myenv) $ py manage-s3.py --bucket bucket-2 --check-versioning
Versioning: Not enabled
```

<br>

### List Buckets

<br>

```bash
(myenv) $ py manage-s3.py --list-buckets
S3 Bucket List:
- bucket-2
```

<br>

### Upload File

<br>

```bash
(myenv) $ py manage-s3.py --bucket bucket-2 --file test.txt --upload
File 'test.txt' uploaded as 'test.txt'.
```

<br>

### Download File

<br>

```bash
(myenv) $ py manage-s3.py --bucket bucket-2 --file test.txt --download
File downloaded 'test.txt' to 'downloaded_test.txt'.
```

<br>

### Delete File

<br>

```bash
(myenv) $ py manage-s3.py --bucket bucket-2 --file test.txt --delete
Successfully deleted test.txt from bucket-2.
```

<br>

### List Bucket

<br>

```bash
(myenv) $ py manage-s3.py --bucket bucket-2 --list
Bucket 'bucket-2' contents:
- test.txt
```

<br>

### Remove Bucket

<br>

```bash
(myenv) $ py manage-s3.py --bucket bucket-2 --remove-bucket
Bucket 'bucket-2' deleted successfully.
```

<br>

## S3 with Perl
***

<br>

We need `CPAN` module [**Paws**](https://metacpan.org/dist/Paws) for the script.

<br>

```bash
$ cpanm -vS Paws
```

<br>

Below is the `Perl` script to manage `S3` buckets.

**File**: `manage-s3.pl`

<br>

```perl
#!/usr/bin/env perl

use v5.38;
use Try::Tiny;
use File::Slurp;
use Getopt::Long;
use File::Basename;

use Paws;
use Paws::Credential::Explicit;

my $ENDPOINT   = 'http://localhost:4566';
my $ACCESS_KEY = 'test';
my $SECRET_KEY = 'test';
my $REGION     = 'eu-west-1';

my %opts;
GetOptions(
    'help'                 => \$opts{help},
    'bucket=s'             => \$opts{bucket},
    'file=s'               => \$opts{file},
    'make-bucket'          => \$opts{make_bucket},
    'enable-versioning'    => \$opts{enable_versioning},
    'suspend-versioning'   => \$opts{suspend_versioning},
    'check-versioning'     => \$opts{check_versioning},
    'list-buckets'         => \$opts{list_buckets},
    'list-object-versions' => \$opts{list_object_versions},
    'upload'               => \$opts{upload},
    'download'             => \$opts{download},
    'delete'               => \$opts{delete},
    'delete-all'           => \$opts{delete_all},
    'version-id=s'         => \$opts{version_id},
    'list'                 => \$opts{list},
    'remove-bucket'        => \$opts{remove_bucket},
) or show_help_and_exit(1);

show_help_and_exit(0) if $opts{help};

my $s3 = create_s3_client();

make_bucket($s3, $opts{bucket}, $opts{enable_versioning})       if $opts{make_bucket};
suspend_versioning($s3, $opts{bucket})                          if $opts{suspend_versioning};
list_buckets($s3)                                               if $opts{list_buckets};
list_object_versions($s3, $opts{bucket})                        if $opts{list_object_versions};
check_versioning($s3, $opts{bucket})                            if $opts{check_versioning};
upload_file($s3, $opts{bucket}, $opts{file})                    if $opts{upload};
download_file($s3, $opts{bucket}, $opts{file})                  if $opts{download};
delete_file($s3, $opts{bucket}, $opts{file}, $opts{version_id}) if $opts{delete};
delete_all($s3, $opts{bucket}, $opts{file})                     if $opts{delete_all};
list_bucket_contents($s3, $opts{bucket})                        if $opts{list};
remove_bucket($s3, $opts{bucket})                               if $opts{remove_bucket};

#
#
# HELPER SUBROUTINES

sub show_help_and_exit {
    my ($exit_code) = @_;
    print <<"END_HELP";
usage: $0 [-h] [--bucket BUCKET] [--file FILE] [--make-bucket] [--enable-versioning] [--suspend-versioning] [--check-versioning] [--list-buckets] [--list-object-versions] [--upload] [--download] [--delete] [--delete-all] [--version-id] [--list] [--remove-bucket]

S3 Bucket Operations

options:
  -h, --help             Show this help message and exit
  --bucket BUCKET        Bucket name
  --file FILE            File to upload/download
  --make-bucket          Create bucket
  --enable-versioning    Enable object versioning
  --suspend-versioning   Suspend object versioning
  --check-versioning     Check object versioning
  --list-buckets         List buckets
  --list-object-versions List object versions
  --upload               Upload file
  --download             Download file
  --delete               Delete file
  --delete-all           Delete all versioned file
  --version-id           Object version id
  --list                 List bucket contents
  --remove-bucket        Delete bucket
END_HELP
    exit $exit_code;
}

sub create_s3_client {
    return Paws->service('S3',
        region      => $REGION,
        credentials => Paws::Credential::Explicit->new(
            access_key => $ACCESS_KEY,
            secret_key => $SECRET_KEY,
        ),
        endpoint => $ENDPOINT,
    );
}

sub make_bucket($s3, $bucket, $enable_versioning) {
    die "ERROR: Missing S3 client."   unless defined $s3;
    die "ERROR: Missing bucket name." unless defined $bucket;

    $enable_versioning = 0 unless defined $enable_versioning;
    try {
        $s3->CreateBucket(
            Bucket => $bucket,
            CreateBucketConfiguration => {
                LocationConstraint => $REGION,
            },
        );
        if ($enable_versioning) {
            $s3->PutBucketVersioning(
                Bucket => $bucket,
                VersioningConfiguration => {
                    Status => 'Enabled'
                }
            );
        }
        say "Bucket '$bucket' created successfully.";
    }
    catch {
        die "Error creating bucket: $_\n";
    };
}

sub suspend_versioning($s3, $bucket) {
    die "ERROR: Missing S3 client."   unless defined $s3;
    die "ERROR: Missing bucket name." unless defined $bucket;

    try {
        $s3->PutBucketVersioning(
            Bucket => $bucket,
            VersioningConfiguration => {
                Status => 'Suspended'
            }
        );
        say "Bucket '$bucket' versioning suspended.";
    }
    catch {
        die "Error suspending versioning: $_\n";
    };
}

sub check_versioning($s3, $bucket) {
    die "ERROR: Missing S3 client."   unless defined $s3;
    die "ERROR: Missing bucket name." unless defined $bucket;

    my $versioning = $s3->GetBucketVersioning(Bucket => $bucket);

    if ($versioning->Status) {
        say "Versioning is enabled: " . $versioning->Status;
    } else {
        say "Versioning is not enabled.";
    }
}

sub list_buckets($s3) {
    die "ERROR: Missing S3 client."   unless defined $s3;

    try {
        my $resp = $s3->ListBuckets;
        say "S3 Bucket List:";
        say "- $_->{Name}" for @{ $resp->Buckets };
    }
    catch {
        die "Error listing buckets: $_\n";
    };
}

sub list_object_versions($s3, $bucket) {
    die "ERROR: Missing S3 client."   unless defined $s3;
    die "ERROR: Missing bucket name." unless defined $bucket;

    try {
        my $response = $s3->ListObjectVersions(Bucket => $bucket);

        say "Object Versions in bucket '$bucket':";

        for my $version (@{ $response->Versions }) {
            say "- Key: ",          $version->Key;
            say "  VersionId: ",    $version->VersionId;
            say "  IsLatest: ",     $version->IsLatest ? "Yes" : "No";
            say "  LastModified: ", $version->LastModified;
            say "  Size: ",         $version->Size;
            say "";
        }
    }
    catch {
        die "Error listing object versions in bucket: $_\n";
    };
}

sub upload_file($s3, $bucket, $key) {
    die "ERROR: Missing S3 client."   unless defined $s3;
    die "ERROR: Missing bucket name." unless defined $bucket;

    $key = basename($key);
    return warn "File '$key' does not exist\n" unless -e $key;

    my $content = read_file($key, binmode => ':raw');
    try {
        $s3->PutObject(
            Bucket => $bucket,
            Key    => $key,
            Body   => $content,
        );
        say "Successfully uploaded '$key'.";
    }
    catch {
        die "Error uploading file: $_\n";
    };
}

sub download_file($s3, $bucket, $key) {
    die "ERROR: Missing S3 client."   unless defined $s3;
    die "ERROR: Missing bucket name." unless defined $bucket;
    die "ERROR: Missing key."         unless defined $key;

    $key = basename($key);
    my $dest = "downloaded_$key";

    try {
        my $resp = $s3->GetObject(Bucket => $bucket, Key => $key);
        write_file($dest, { binmode => ':raw' }, $resp->Body);
        say "Successfully downloaded '$key' to '$dest'.";
    }
    catch {
        die "Error downloading file: $_\n";
    };
}

sub delete_file($s3, $bucket, $key, $version_id) {
    die "ERROR: Missing S3 client."   unless defined $s3;
    die "ERROR: Missing bucket name." unless defined $bucket;
    die "ERROR: Missing key."         unless defined $key;

    try {
        $key = basename($key);
        if (defined $version_id) {
            $s3->DeleteObject(
                Bucket    => $bucket,
                Key       => $key,
                VersionId => $version_id,
            );

            say "Deleted version '$version_id' of object '$key' in bucket '$bucket'.";
        }
        else {
            $s3->DeleteObject(Bucket => $bucket, Key => $key);
            say "Successfully deleted '$key' from '$bucket'.";
        }
    }
    catch {
        die "Error deleting file: $_\n";
    };
}

sub delete_all($s3, $bucket, $key) {
    die "ERROR: Missing S3 client."   unless defined $s3;
    die "ERROR: Missing bucket name." unless defined $bucket;
    die "ERROR: Missing key."         unless defined $key;

    try {
        my $resp = $s3->ListObjectVersions(Bucket => $bucket);
        $key = basename($key);
        for my $version (@{ $resp->Versions }) {
            if ($version->Key eq $key) {
                $s3->DeleteObject(
                    Bucket    => $bucket,
                    Key       => $key,
                    VersionId => $version->VersionId,
                );
            }
        }

        for my $marker (@{ $resp->DeleteMarkers }) {
            if ($marker->Key eq $key) {
                $s3->DeleteObject(
                    Bucket    => $bucket,
                    Key       => $key,
                    VersionId => $marker->VersionId,
                );
            }
        }

        say "Deleted versions of '$key' from bucket '$bucket'.";
    }
    catch {
        die "Error deleting all file versions: $_\n";
    };
}

sub list_bucket_contents($s3, $bucket) {
    die "ERROR: Missing S3 client."   unless defined $s3;
    die "ERROR: Missing bucket name." unless defined $bucket;

    try {
        my $resp = $s3->ListObjectsV2(Bucket => $bucket);
        say "Bucket '$bucket' contents:";
        say "- $_->{Key}" for @{ $resp->Contents };
    }
    catch {
        warn "Error listing contents: $_\n";
    };
}

sub remove_bucket($s3, $bucket) {
    die "ERROR: Missing S3 client."   unless defined $s3;
    die "ERROR: Missing bucket name." unless defined $bucket;

    try {
        my $resp = $s3->ListObjectsV2(Bucket => $bucket);
        for my $obj (@{ $resp->Contents }) {
            say " Delete key: ", $obj->{Key};
            $s3->DeleteObject(Bucket => $bucket, Key => $obj->{Key});
        }
        $s3->DeleteBucket(Bucket => $bucket);
        say "Bucket '$bucket' deleted successfully.";
    }
    catch {
        die "Error deleting bucket: $_\n";
    };
}
```

<br>

This is what it looks like:

<br>

```bash
(myenv) $ perl manage-s3.pl --help
usage: manage-s3.pl [-h] [--bucket BUCKET] [--file FILE] [--make-bucket] [--enable-versioning] [--suspend-versioning] [--check-versioning] [--list-buckets] [--list-object-versions] [--upload] [--download] [--delete] [--delete-all] [--version-id] [--list] [--remove-bucket]

S3 Bucket Operations

options:
  -h, --help             Show this help message and exit
  --bucket BUCKET        Bucket name
  --file FILE            File to upload/download
  --make-bucket          Create bucket
  --enable-versioning    Enable object versioning
  --suspend-versioning   Suspend object versioning
  --check-versioning     Check object versioning
  --list-buckets         List buckets
  --list-object-versions List object versions
  --upload               Upload file
  --download             Download file
  --delete               Delete file
  --delete-all           Delete all versioned file
  --version-id           Object version id
  --list                 List bucket contents
  --remove-bucket        Delete bucket
```

<br>

### Make Bucket

<br>

```bash
(myenv) $ perl manage-s3.pl --bucket bucket-2 --make-bucket
Bucket 'bucket-2' created successfully.
```

<br>

If you want to enable versioning too after creating the bucket then do this:

<br>

```bash
(myenv) $ perl manage-s3.pl --bucket bucket-2 --make-bucket --enable-versioning
Bucket 'bucket-2' created successfully.
```

<br>

Incase, you want to suspend versioning later then try this:

<br>

```bash
(myenv) $ perl manage-s3.pl --bucket bucket-2 --suspend-versioning
Bucket 'bucket-2' versioning suspended.
```

<br>

### List Buckets

<br>

```bash
(myenv) $ perl manage-s3.pl --list-buckets
S3 Bucket List:
- bucket-2
```

<br>

### Upload File

<br>

```bash
(myenv) $ perl manage-s3.pl --bucket bucket-2 --file test.txt --upload
Successfully uploaded 'test.txt' (56 bytes) as 'test.txt'.
```

<br>

### Download File

<br>

```bash
(myenv) $ perl manage-s3.pl --bucket bucket-2 --file test.txt --download
Successfully downloaded 'test.txt' to 'downloaded_test.txt'.
```

<br>

### Delete File

<br>

```bash
(myenv) $ perl manage-s3.pl --bucket bucket-2 --file test.txt --delete
Successfully deleted test.txt from bucket-2.
```

<br>

### List Bucket

<br>

```bash
(myenv) $ perl manage-s3.pl --bucket bucket-2 --list
Bucket 'bucket-2' contents:
- test.txt
```

<br>

### Remove Bucket

<br>

```bash
(myenv) $ perl manage-s3.pl --bucket bucket-2 --remove-bucket
Bucket 'bucket-2' deleted successfully.
```

<br>

## What next?
***

Now we have done with `AWS S3`.

The next would be about `AWS DynamoDB` very soon.

***

<br>

`Happy Hacking !!!`
