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
### [&nbsp;&nbsp;7. List Bucket](#list-bucket)
### [&nbsp;&nbsp;8. Download File](#download-file)
### [&nbsp;&nbsp;9. Delete File](#delete-file)
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

## List Bucket
***

<br>

List the content of the `S3` bucket.

<br>

```bash
$ aws s3 ls s3://bucket-1
2025-05-24 01:03:49         24 test.txt
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
import boto3
import argparse
from botocore.config import Config
import os
import sys

LOCALSTACK_ENDPOINT = "http://localhost:4566"
ACCESS_KEY_ID = "test"
SECRET_ACCESS_KEY = "test"
DEFAULT_BUCKET = "bucket-1"
DEFAULT_FILE = "test.txt"
REGION = "eu-west-1"

def create_s3_client():
    return boto3.client(
        's3',
        endpoint_url = LOCALSTACK_ENDPOINT,
        aws_access_key_id = ACCESS_KEY_ID,
        aws_secret_access_key = SECRET_ACCESS_KEY,
        config = Config(signature_version='s3v4'),
        region_name = REGION
    )

def make_bucket(s3, bucket_name):
    try:
        s3.create_bucket(
            Bucket=bucket_name,
            CreateBucketConfiguration={
                'LocationConstraint': REGION
            }
        )
        print(f"Bucket '{bucket_name}' created successfully.")
        return True
    except Exception as e:
        print(f"Error creating bucket: {e}")
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

def upload_file(s3, bucket_name, file_path, object_name=None):
    if not os.path.exists(file_path):
        print(f"Error: File '{file_path}' does not exist")
        return False

    if object_name is None:
        object_name = os.path.basename(file_path)

    try:
        s3.upload_file(file_path, bucket_name, object_name)
        print(f"File '{file_path}' uploaded as '{object_name}'.")
        return True
    except Exception as e:
        print(f"Error uploading file: {e}")
        return False

def download_file(s3, bucket_name, object_name, download_path=None):
    if download_path is None:
        download_path = f"downloaded_{object_name}"

    try:
        s3.download_file(bucket_name, object_name, download_path)
        print(f"Successfully downloaded '{file_path}' to '{download_path}'.")
        return True
    except Exception as e:
        print(f"Error downloading file: {e}")
        return False

def delete_file(s3, bucket_name, object_key):
    try:
        s3.delete_object(Bucket=bucket_name, Key=object_key)
        print(f"Successfully deleted {object_key} from {bucket_name}.")
        return True
    except Exception as e:
        print(f"Error deleting {object_key}: {e}")
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
        print(f"Bucket '{bucket_name}' deleted successfully.")
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
    parser = argparse.ArgumentParser(description="LocalStack S3 Operations")
    parser.add_argument('--bucket', default=DEFAULT_BUCKET, help="Bucket name")
    parser.add_argument('--file', default=DEFAULT_FILE, help="File to upload/download")

    # Operation flags
    parser.add_argument('--make-bucket', action='store_true', help="Make bucket")
    parser.add_argument('--list-buckets', action='store_true', help="List buckets")
    parser.add_argument('--upload', action='store_true', help="Upload file")
    parser.add_argument('--download', action='store_true', help="Download file")
    parser.add_argument('--delete-file', action='store_true', help="Delete file")
    parser.add_argument('--list', action='store_true', help="List bucket contents")
    parser.add_argument('--remove-bucket', action='store_true', help="Remove bucket")

    args = parser.parse_args()

    s3 = create_s3_client()

    if args.upload:
        create_test_file(args.file)

    if args.make_bucket:
        make_bucket(s3, args.bucket)

    if args.list_buckets:
        list_buckets(s3)

    if args.upload:
        upload_file(s3, args.bucket, args.file)

    if args.list:
        list_bucket_contents(s3, args.bucket)

    if args.download:
        download_file(s3, args.bucket, os.path.basename(args.file))

    if args.delete_file:
        delete_file(s3, args.bucket, os.path.basename(args.file))

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
usage: manage-s3.py [-h] [--bucket BUCKET] [--file FILE] [--make-bucket] [--list-buckets] [--upload] [--download] [--list] [--delete-file] [--remove-bucket]

LocalStack S3 Operations

options:
  -h, --help       show this help message and exit
  --bucket BUCKET  Bucket name
  --file FILE      File to upload/download
  --make-bucket    Make bucket
  --list-buckets   List buckets
  --upload         Upload file
  --download       Download file
  --delete-file    Delete file
  --list           List bucket contents
  --remove-bucket  Remove bucket
```

<br>

### Make Bucket

<br>

```bash
(myenv) $ py manage-s3.py --bucket bucket-2 --make-bucket
Bucket 'bucket-2' created successfully.
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

### List Bucket

<br>

```bash
(myenv) $ py manage-s3.py --bucket bucket-2 --list
Bucket 'bucket-2' contents:
- test.txt
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
(myenv) $ py manage-s3.py --bucket bucket-2 --file test.txt --delete-file
Successfully deleted test.txt from bucket-2.
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

We need `CPAN` module [**Net::Amazon::S3**](https://metacpan.org/dist/Net-Amazon-S3) for the script.

<br>

```bash
$ cpanm -vS Net::Amazon::S3
```

<br>

Below is the `Perl` script to manage `S3` buckets.

**File**: `manage-s3.pl`

<br>

```perl
#!/usr/bin/env perl

use v5.38;
use File::Slurp;
use Getopt::Long;
use File::Basename;
use Net::Amazon::S3;

my $LOCALSTACK_ENDPOINT = 'localhost:4566';
my $ACCESS_KEY_ID       = 'test';
my $SECRET_ACCESS_KEY   = 'test';
my $DEFAULT_BUCKET      = 'bucket-1';
my $DEFAULT_FILE        = 'test.txt';
my $REGION              = 'eu-west-1';

sub create_s3_client {
    return Net::Amazon::S3->new(
        aws_access_key_id     => $ACCESS_KEY_ID,
        aws_secret_access_key => $SECRET_ACCESS_KEY,
        host                  => $LOCALSTACK_ENDPOINT,
        secure                => 0,
    );
}

sub make_bucket {
    my ($s3, $bucket_name) = @_;
    eval {
        $s3->add_bucket($bucket_name, { location_constraint => $REGION });
        print "Bucket '$bucket_name' created successfully.\n";
        return 1;
    };
    if ($@) {
        print "Error creating bucket: $@\n";
        return 0;
    }
}

sub list_buckets {
    my ($s3) = @_;
    eval {
        my $response = $s3->buckets;
        print "S3 Bucket List:\n";
        foreach my $bucket ( @{ $response->{buckets} } ) {
            print "- " . $bucket->bucket . "\n";
        }
        return 1;
    };
    if ($@) {
        print "Error listing buckets: $@\n";
        return 0;
    }
}

sub upload_file {
    my ($s3, $bucket_name, $file_path) = @_;

    unless (-e $file_path) {
        print "Error: File '$file_path' does not exist\n";
        return 0;
    }

    my $object_name = basename($file_path);
    my $bucket      = $s3->bucket($bucket_name);

    eval {
        my $content   = read_file($file_path, binmode => ':raw');
        my $temp_file = "/tmp/s3upload_$$.tmp";
        write_file($temp_file, { binmode => ':raw' }, $content);
        $bucket->add_key_filename($object_name, $temp_file);
        unlink $temp_file;

        print "Successfully uploaded '$file_path' (".length($content)." bytes) as '$object_name'.\n";
        return 1;
    };
    if ($@) {
        print "Error uploading file: $@\n";
        return 0;
    }
}

sub download_file {
    my ($s3, $bucket_name, $object_name) = @_;
    my $download_path = "downloaded_$object_name";

    eval {
        my $bucket  = $s3->bucket($bucket_name);
        my $key     = $bucket->get_key($object_name) or die "Key '$object_name' not found";
        my $content = $key->{value};

        open(my $fh, '>', $download_path) or die "Cannot write file: $!";
        binmode($fh);
        print $fh $content;
        close($fh);

        print "Successfully downloaded '$object_name' to '$download_path'.\n";
        return 1;
    };
    if ($@) {
        print "Error downloading file: $@\n";
        return 0;
    }
}

sub delete_file {
    my ($s3, $bucket_name, $object_name) = @_;
    eval {
        my $bucket  = $s3->bucket($bucket_name);
        $bucket->delete_key($object_name) or die $s3->err . ": " . $s3->errstr;
        print "Successfully deleted '$object_name' from '$bucket_name'.\n";
        return 1;
    };
    if ($@) {
        print "Error deleting file: $@\n";
        return 0;
    }
}

sub list_bucket_contents {
    my ($s3, $bucket_name) = @_;

    eval {
        my $bucket   = $s3->bucket($bucket_name);
        my $response = $bucket->list_all or return 0;
        print("Bucket '$bucket_name' contents:\n");
        foreach my $key (@{$response->{keys}}) {
            print "- ", $key->{key}, "\n";
        }
    };
    if ($@) {
        print "Error listing bucket contents: $@\n";
        return 0;
    }
}

sub remove_bucket {
    my ($s3, $bucket_name) = @_;

    eval {
        my $bucket   = $s3->bucket($bucket_name);
        my $response = $bucket->list_all or return 0;
        foreach my $key (@{$response->{keys}}) {
            print " Delete key:", $key->{key}, "\n";
            $bucket->delete_key($key->{key});
        }

        $bucket->delete_bucket;
        print "Bucket '$bucket_name' deleted successfully.\n";
        return 1;
    };
    if ($@) {
        print "Error deleting bucket: $@\n";
        return 0;
    }
}

sub create_test_file {
    my ($file_path) = @_;

    unless (-e $file_path) {
        write_file($file_path, "This is a test file created at " . localtime() . "\n");
        print "Created test file: $file_path\n";
    }
}

my %opts;
GetOptions(
    'bucket=s'       => \$opts{bucket},
    'file=s'         => \$opts{file},
    'make-bucket'    => \$opts{make_bucket},
    'list-buckets'   => \$opts{list_buckets},
    'upload'         => \$opts{upload},
    'download'       => \$opts{download},
    'delete-file'    => \$opts{delete_file},
    'list'           => \$opts{list},
    'remove-bucket'  => \$opts{remove_bucket},
    'help'           => \$opts{help},
) or show_help_and_exit(1);  # Show help on invalid options

# Show help if requested
show_help_and_exit(0) if $opts{help};

# [Rest of your script implementation]

sub show_help_and_exit {
    my ($exit_code) = @_;

    print <<"END_HELP";
usage: $0 [--help] [--bucket BUCKET] [--file FILE] [--make-bucket] [--list-buckets] [--upload] [--download] [--delete-file] [--list] [--remove-bucket]

LocalStack S3 Operations

options:
  --help           show this help message and exit
  --bucket BUCKET  Bucket name
  --file FILE      File to upload/download
  --make-bucket    Create bucket
  --list-buckets   List buckets
  --upload         Upload file
  --download       Download file
  --delete-file    Delete file
  --list           List bucket contents
  --remove-bucket  Delete bucket
END_HELP

    exit $exit_code;
}

$opts{bucket} ||= $DEFAULT_BUCKET;
$opts{file}   ||= $DEFAULT_FILE;

my $s3 = create_s3_client();

if ($opts{upload}) {
    create_test_file($opts{file});
}

if ($opts{make_bucket}) {
    make_bucket($s3, $opts{bucket});
}

if ($opts{list_buckets}) {
    list_buckets($s3);
}

if ($opts{upload}) {
    upload_file($s3, $opts{bucket}, $opts{file});
}

if ($opts{list}) {
    list_bucket_contents($s3, $opts{bucket});
}

if ($opts{download}) {
    download_file($s3, $opts{bucket}, basename($opts{file}));
}

if ($opts{delete_file}) {
    delete_file($s3, $opts{bucket}, basename($opts{file}));
}

if ($opts{remove_bucket}) {
    remove_bucket($s3, $opts{bucket});
}
```

<br>

This is what it looks like:

<br>

```bash
(myenv) $ perl manage-s3.pl --help
usage: manage-s3.pl [--help] [--bucket BUCKET] [--file FILE] [--make-bucket] [--list-buckets] [--upload] [--download] [--delete-file] [--list] [--remove-bucket]

LocalStack S3 Operations

options:
  --help           show this help message and exit
  --bucket BUCKET  Bucket name
  --file FILE      File to upload/download
  --make-bucket    Create bucket
  --list-buckets   List buckets
  --upload         Upload file
  --download       Download file
  --delete-file    Delete file
  --list           List bucket contents
  --remove-bucket  Delete bucket
```

<br>

### Make Bucket

<br>

```bash
(myenv) $ perl manage-s3.pl --bucket bucket-2 --make-bucket
Bucket 'bucket-2' created successfully.
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

### List Bucket

<br>

```bash
(myenv) $ perl manage-s3.pl --bucket bucket-2 --list
Bucket 'bucket-2' contents:
- test.txt
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
(myenv) $ perl manage-s3.pl --bucket bucket-2 --file test.txt --delete-file
Successfully deleted test.txt from bucket-2.
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

The next would be about `AWS Dynamo DB` very soon.

***

<br>

`Happy Hacking !!!`
