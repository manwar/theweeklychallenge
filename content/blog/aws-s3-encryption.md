---
title: "AWS S3 Encryption"
date: 2025-06-05T00:00:00+00:00
description: "Discussion about AWS S3 Encryption."
type: post
image: images/blog/aws-s3-encryption.png
author: Mohammad Sajid Anwar
tags: ["perl", "python", "aws", "localstack"]
---

#### **DISCLAIMER:** Image is generated using `Leonardo AI`.
<br>

## AWS S3 Encryption
***

### [1. Introduction](#introduction)
### [2. Types of S3 Encryption](#types-of-s3-encryption)
### [3. Server-Side Encryption (SSE)](#server-side-encryption-sse)
### [4. Client-Side Encryption (CSE)](#client-side-encryption-cse)
### [5. AWS Managed Keys (SSE-S3)](#aws-managed-keys-sse-s3)
### [6. Using aws](#using-aws)
### [7. Using Python](#using-python)
### [8. Using Perl](#using-perl)

<br>

## Introduction
***

A week ago, I wrote a blog post about [**AWS S3**](/blog/localstack-aws-s3) using the `LocalStack` platform. It was originally intended to cover just the basic operations. However, a few days later, I updated the post to include object versioning in `AWS S3`. It was fun to experiment with that feature! If you haven't checked it out yet, I highly recommend taking a closer look.

I also made another significant update to the post by switching the `Perl` implementation to use the `CPAN` module [**Paws**](https://metacpan.org/pod/Paws). Initially, I used `Net::Amazon::S3`, but I quickly discovered that it doesn't yet support some low-level operations. The transition wasn't smooth, I had a hard time installing the `Paws` module. Generally, my `Ubuntu` setup is very accommodating and rarely gives me trouble, but this time I had to dig deep to get it working. Once installed, though, it was a breeze to use.

While working on `object versioning`, I stumbled upon another `AWS S3` feature, `bucket encryption`. I decided to create a dedicated blog post to cover this topic. I know I promised to discuss `AWS DynamoDB` at the end of the earlier post, I’ll get to that next, unless something else comes up in the meantime.

Following the same pattern as the previous post, we'll first go through the `aws` command and `s3api` sub-command, and then look at implementations in `Python` and `Perl`.

Now, let’s get back to the main topic of this post.

`AWS S3` provides multiple layers of encryption to protect the data.

<br>

## Types of S3 Encryption
***

<br>

In general, there are two types of encryptions:

<br>

    1. Server-Side Encryption (SSE)
    2. Client-Side Encryption (CSE)

<br>

## Server-Side Encryption (SSE)
***

<br>

`Server-Side Encryption (SSE)` is a process where `AWS` encrypts the data automatically after uploading it to `S3` bucket.

The encryption and decryption are managed by `AWS` completely.

There are three types of Server Side Encryption.

<br>

    1. AWS Managed Keys    (SSE-S3)
    2. KMS Managed Keys    (SSE-KMS)
    3. Client Managed Keys (SSE-C)

<br>

## Client-Side Encryption (CSE)
***

<br>

`Client-Side Encryption (CSE)` is a process where encryption and decryption happen outside of `AWS`.

The client manages encryption keys, either `symmetric` or `asymmetric`.

Data is encrypted before being sent to `S3` and `AWS` stores only the encrypted content.

Keys are generated and stored by the client e.g. `KMS`.

<br>

## AWS Managed Keys (SSE-S3)
***

<br>

In this post, I am going to talk about `AWS Managed Keys` only.

Here `S3` manages the encryption keys using `AES-256` encryption.

<br>

## Using aws
***

<br>

We will use the `aws` command and `s3api` sub-command here.

<br>

### Create Bucket

<br>

Let's create the bucket first.

<br>

```bash
$ aws s3 mb s3://sse-s3-encrypted-bucket
make_bucket: sse-s3-encrypted-bucket
```

<br>

### Enable Encryption

<br>

Now we will enable the encryption as below:

<br>

```bash
$ aws s3api put-bucket-encryption \
  --bucket sse-s3-encrypted-bucket \
  --server-side-encryption-configuration '{
    "Rules": [
      {
        "ApplyServerSideEncryptionByDefault": {
          "SSEAlgorithm": "AES256"
        }
      }
    ]
  }'
```

<br>

### Upload File

<br>

Let's create a secret file.

<br>

```bash
$ echo 'This is a secret file content.' > secret-file.txt
```

<br>

Now upload the secret file.

<br>

```bash
$ aws s3 cp secret-file.txt s3://sse-s3-encrypted-bucket
upload: ./secret-file.txt to s3://sse-s3-encrypted-bucket/secret-file.txt
```

<br>

### Download File

<br>

Download the file.

<br>

```bash
$ aws s3 cp s3://sse-s3-encrypted-bucket/secret-file.txt downloaded-secret-file.txt
download: s3://sse-s3-encrypted-bucket/secret-file.txt to ./downloaded-secret-file.txt
```

<br>

Verify the content.

<br>

```bash
$ cat downloaded-secret-file.txt
This is a secret file content.
```

<br>

### Object Metadata

<br>

Retrieves metadata about the stored object.

<br>

```bash
$ aws s3api head-object --bucket sse-s3-encrypted-bucket --key secret-file.txt
{
    "AcceptRanges": "bytes",
    "LastModified": "2025-06-02T02:28:07+00:00",
    "ContentLength": 31,
    "ETag": "\"5c1c7463b3b94cd0e204abf746a42671\"",
    "ContentType": "text/plain",
    "ServerSideEncryption": "AES256",
    "Metadata": {}
}
```

<br>

Finally, verify the encryption settings.

<br>

```bash
$ aws s3api get-bucket-encryption --bucket sse-s3-encrypted-bucket
{
    "ServerSideEncryptionConfiguration": {
        "Rules": [
            {
                "ApplyServerSideEncryptionByDefault": {
                    "SSEAlgorithm": "AES256"
                }
            }
        ]
    }
}
```

<br>

### Cleanup

<br>

Cleanup now:

<br>

```bash
$ aws s3 rm s3://sse-s3-encrypted-bucket --recursive
delete: s3://sse-s3-encrypted-bucket/secret-file.txt
```

<br>

```bash
$ aws s3 rb s3://sse-s3-encrypted-bucket
remove_bucket: sse-s3-encrypted-bucket
```

<br>

## Using Python
***

<br>

Here is the `Python` implementation of the above.

File: `sse-s3.py`

<br>

```python
#!/usr/bin/env python3

import os
import sys
import boto3
import argparse
from botocore.config import Config

ENDPOINT_URL      = "http://localhost:4566"
ACCESS_KEY_ID     = "test"
SECRET_ACCESS_KEY = "test"
REGION            = "eu-west-1"
DEFAULT_FILE      = 'secret-file.txt'
DEFAULT_BUCKET    = 'sse-s3-encrypted-bucket'

def create_s3_client():
    return boto3.client(
        's3',
        endpoint_url = ENDPOINT_URL,
        aws_access_key_id = ACCESS_KEY_ID,
        aws_secret_access_key = SECRET_ACCESS_KEY,
        config = Config(signature_version='s3v4'),
        region_name = REGION
    )

def make_enc_bucket(s3, bucket_name):
    try:
        s3.create_bucket(Bucket=bucket_name,
            CreateBucketConfiguration={
                'LocationConstraint': 'eu-west-1'
            })
        print(f"Bucket {bucket_name} created.")

        s3.put_bucket_encryption(
            Bucket=bucket_name,
            ServerSideEncryptionConfiguration={
                'Rules': [
                    {
                        'ApplyServerSideEncryptionByDefault': {
                            'SSEAlgorithm': 'AES256'
                        }
                    }
                ]
            }
        )
        print(f"Enabled AES-256 encryption on {bucket_name}.")
        return True
    except Exception as e:
        print(f"Error creating encrypted bucket: {e}")
        return False

def upload_file(s3, bucket_name, file):
    try:
        if not os.path.exists(file):
            print(f"Error: File '{file}' does not exist")
            return False

        key = os.path.basename(file)
        s3.upload_file(file, bucket_name, key)
        print(f"Uploaded {file} to {bucket_name}.")
        return True
    except Exception as e:
        print(f"Error uploading file: {e}")
        return False

def download_file(s3, bucket_name, file):
    try:
        key = os.path.basename(file)
        download_path = f"new_{key}"
        s3.download_file(bucket_name, file, download_path)
        print(f"File downloaded to '{download_path}'")

        with open(download_path, 'r') as f:
            print("File content:", f.read())
        return True
    except Exception as e:
        print(f"Error downloading file: {e}")
        return False

def fetch_file_meta(s3, bucket_name, file):
    try:
        key = os.path.basename(file)
        response = s3.head_object(
            Bucket=bucket_name,
            Key=file
        )
        encryption = response.get('ServerSideEncryption')
        if encryption:
            print(f"Object encryption: {encryption}")
        else:
            print("Object encryption: None")
        return True
    except Exception as e:
        print(f"Error fetching file meta: {e}")
        return False

def fetch_bucket_meta(s3, bucket_name):
    try:
        encryption = s3.get_bucket_encryption(Bucket=bucket_name)
        rules = encryption['ServerSideEncryptionConfiguration'].get('Rules', [])
        if rules:
            sse_algorithm = rules[0].get('ApplyServerSideEncryptionByDefault', {}).get('SSEAlgorithm')
            print(f"Bucket encryption: {sse_algorithm}")
        else:
            print("Bucket encryption: None")
        return True
    except Exception as e:
        print(f"Error fetching bucket meta: {e}")
        return False

def cleanup(s3, bucket_name):
    try:
        objects = s3.list_objects_v2(Bucket=bucket_name)
        if 'Contents' in objects:
            for obj in objects['Contents']:
                s3.delete_object(Bucket=bucket_name, Key=obj['Key'])

        s3.delete_bucket(Bucket=bucket_name)
        print(f"Bucket '{bucket_name}' deleted successfully")
        return True
    except Exception as e:
        print(f"Error deleting bucket: {e}")
        return False

class MyArgumentParser(argparse.ArgumentParser):
    def error(self, message):
        if message:
            sys.stderr.write(f"ERROR: {message}\n\n")
        sys.stderr.write(f"ERROR: {message}\n\n")
        self.print_help()
        sys.exit(2)

def main():
    parser = MyArgumentParser(description="SSE-S3 Encryption")
    parser.add_argument('--bucket', default=DEFAULT_BUCKET, help=f"Bucket namei, default {DEFAULT_BUCKET}")
    parser.add_argument('--file', default=DEFAULT_FILE, help=f"File to upload/download, default {DEFAULT_FILE}")

    parser.add_argument('--make-enc-bucket', action='store_true', help="Create encrypted bucket")
    parser.add_argument('--upload', action='store_true', help="Upload file")
    parser.add_argument('--download', action='store_true', help="Download file")
    parser.add_argument('--fetch-file-meta', action='store_true', help="Fetch file metadata")
    parser.add_argument('--fetch-bucket-meta', action='store_true', help="Fetch bucket metadata")
    parser.add_argument('--cleanup', action='store_true', help="Remove bucket and its content")

    args = parser.parse_args()

    # Enforce only one action is selected
    actions = [
        args.make_enc_bucket,
        args.upload,
        args.download,
        args.fetch_file_meta,
        args.fetch_bucket_meta,
        args.cleanup,
    ]

    if sum(bool(action) for action in actions) != 1:
        parser.error("You must specify exactly one of: "
                     "--make-enc-bucket, --upload, --download, "
                     "--fetch-file-meta, --fetch-bucket-meta, --cleanup")

    s3 = create_s3_client()

    if args.make_enc_bucket:
        make_enc_bucket(s3, args.bucket)

    if args.upload:
        upload_file(s3, args.bucket, args.file)

    if args.download:
        download_file(s3, args.bucket, args.file)

    if args.fetch_file_meta:
        fetch_file_meta(s3, args.bucket, args.file)

    if args.fetch_bucket_meta:
        fetch_bucket_meta(s3, args.bucket)

    if args.cleanup:
        cleanup(s3, args.bucket)

if __name__ == '__main__':
    main()
```

<br>

This is how we can use the script:

<br>

```bash
(myenv) $ py sse-s3.py --help
usage: sse-s3.py [-h] [--bucket BUCKET] [--file FILE] [--make-enc-bucket] [--upload] [--download] [--fetch-file-meta] [--fetch-bucket-meta] [--cleanup]

SSE-S3 Encryption

options:
  -h, --help           show this help message and exit
  --bucket BUCKET      Bucket namei, default sse-se-encrypted-bucket
  --file FILE          File to upload/download, default secret-file.txt
  --make-enc-bucket    Create encrypted bucket
  --upload             Upload file
  --download           Download file
  --fetch-file-meta    Fetch file metadata
  --fetch-bucket-meta  Fetch bucket metadata
  --cleanup            Remove bucket and its content
```

<br>

### Create Bucket

<br>

Let's create encrypted bucket.

<br>

```bash
(myenv) $ py sse-s3.py --bucket sse-s3-encrypted-bucket --make-enc-bucket
Bucket sse-s3-encrypted-bucket created.
Enabled AES-256 encryption on sse-s3-encrypted-bucket.
```

<br>

### Upload File

<br>

Upload file to bucket

<br>

```bash
(myenv) $ py sse-s3.py --bucket sse-s3-encrypted-bucket --file secret-file.txt --upload
Uploaded secret-file.txt to sse-s3-encrypted-bucket.
```

<br>

### Download File

<br>

Download file locally

<br>

```bash
(myenv) $ py sse-s3.py --bucket sse-s3-encrypted-bucket --file secret-file.txt --download
File downloaded to 'new_secret-file.txt'
File content: This is a secret file content.
```

<br>

### Object Metadata

<br>

Fetch file meta

<br>

```bash
(myenv) $ py sse-s3.py --bucket sse-s3-encrypted-bucket --file secret-file.txt --fetch-file-meta
File encryption: AES256
```

<br>

Fetch bucket meta

<br>

```bash
(myenv) $ py sse-s3.py --bucket sse-s3-encrypted-bucket --fetch-bucket-meta
Bucket encryption: AES256
```

<br>

### Cleanup

<br>

Cleanup in the end

<br>

```bash
(myenv) $ py sse-s3.py --bucket sse-s3-encrypted-bucket --cleanup
Bucket 'sse-s3-encrypted-bucket' deleted successfully.
```

<br>

## Using Perl
***

<br>

Now, `Perl` implementation:

File: `sse-s3.pl`

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

my $REGION         = 'eu-west-1';
my $ENDPOINT       = 'http://localhost:4566';
my $ACCESS_KEY     = 'test';
my $SECRET_KEY     = 'test';
my $DEFAULT_FILE   = 'secret-file.txt';
my $DEFAULT_BUCKET = 'sse-s3-encrypted-bucket';

my %opts;
GetOptions(
    'bucket=s'          => \$opts{bucket},
    'file=s'            => \$opts{file},
    'make-enc-bucket'   => \$opts{make_enc_bucket},
    'upload'            => \$opts{upload},
    'download'          => \$opts{download},
    'fetch-file-meta'   => \$opts{fetch_file_meta},
    'fetch-bucket-meta' => \$opts{fetch_bucket_meta},
    'cleanup'           => \$opts{cleanup},
    'help'              => \$opts{help},
) or show_help_and_exit(1);

show_help_and_exit(0) if $opts{help};

# Enforce only one action is selected
my @actions = qw(make_enc_bucket upload download fetch_file_meta fetch_bucket_meta cleanup);
my $count   = grep { defined $opts{$_} } @actions;
show_help_and_exit(0, "You must specify exactly one of: --" . join(', --', @actions))
    unless $count == 1;

my $s3 = create_s3_client();

$opts{bucket} = $DEFAULT_BUCKET unless defined $opts{bucket};
$opts{file}   = $DEFAULT_FILE   unless defined $opts{file};

make_enc_bucket($s3, $opts{bucket})              if ($opts{make_enc_bucket});
upload_file($s3, $opts{bucket}, $opts{file})     if ($opts{upload});
download_file($s3, $opts{bucket}, $opts{file})   if ($opts{download});
fetch_file_meta($s3, $opts{bucket}, $opts{file}) if ($opts{fetch_file_meta});
fetch_bucket_meta($s3, $opts{bucket})            if ($opts{fetch_bucket_meta});
cleanup($s3, $opts{bucket})                      if ($opts{cleanup});

#
#
# HELPER SUBROUTINES

sub show_help_and_exit($exit_code, $message=undef) {

    my $help =<<"END_HELP";
usage: $0 [--help] [--bucket BUCKET] [--file FILE] [--make-enc-bucket]
          [--upload] [--download]
          [--view-file-meta] [--view-bucket-meta]
          [--cleanup]

SSE-S3 Encryption

options:
  --help              Show this help message and exit
  --bucket BUCKET     Bucket name, default $DEFAULT_BUCKET
  --file FILE         File to upload/download, default $DEFAULT_FILE
  --make-enc-bucket   Create encrypted bucket
  --upload            Upload file
  --download          Download file
  --fetch-file-meta   Fetch file metadata
  --fetch-bucket-meta Fetch bucket metadata
  --cleanup           Remove file and bucket
END_HELP

    $help = "ERROR: $message\n\n$help" if defined $message;
    print $help and exit $exit_code;
}

sub create_s3_client {
    return Paws->service('S3',
        region      => $REGION,
        endpoint    => $ENDPOINT,
        credentials => Paws::Credential::Explicit->new(
            access_key => $ACCESS_KEY,
            secret_key => $SECRET_KEY,
        ),
    );
}

sub make_enc_bucket($s3, $bucket_name) {
    die "ERROR: Missing S3 client."   unless defined $s3;
    die "ERROR: Missing bucket name." unless defined $bucket_name;

    try {
        say "Creating enc bucket: $bucket_name";
        $s3->CreateBucket(
            Bucket => $bucket_name,
            CreateBucketConfiguration => {
                LocationConstraint => $REGION
            }
        );

        $s3->PutBucketEncryption(
            Bucket => $bucket_name,
            ServerSideEncryptionConfiguration => {
                Rules => [
                    {
                        ApplyServerSideEncryptionByDefault => {
                            SSEAlgorithm => 'AES256'
                        }
                    }
                ]
            }
        );
        say "Enabled AES-256 encryption on $bucket_name";
    }
    catch {
        die "ERROR: unable to create encrypted bucket: $_\n";
    };
}

sub upload_file($s3, $bucket_name, $file) {
    die "ERROR: Missing S3 client."   unless defined $s3;
    die "ERROR: Missing bucket name." unless defined $bucket_name;
    die "ERROR: Missing file."        unless defined $file;

    try {
        $file = basename($file);
        say "Uploading file: $file";

        $s3->PutObject(
            Bucket => $bucket_name,
            Key    => $file,
            Body   => read_file($file, binmode => ':raw')
        );

        say "Uploaded $file to $bucket_name";
    }
    catch {
        die "ERROR: unable to upload file: $_\n";
    };
}

sub download_file($s3, $bucket_name, $file) {
    die "ERROR: Missing S3 client."   unless defined $s3;
    die "ERROR: Missing bucket name." unless defined $bucket_name;
    die "ERROR: Missing file."        unless defined $file;

    try {
        $file = basename($file);
        my $downloaded = $s3->GetObject(
            Bucket => $bucket_name,
            Key    => $file
        );

        my $content = $downloaded->Body;
        say "Downloaded content: $content";
    }
    catch {
        die "ERROR: unable to download file: $_\n";
    };
}

sub fetch_file_meta($s3, $bucket_name, $file) {
    die "ERROR: Missing S3 client."   unless defined $s3;
    die "ERROR: Missing bucket name." unless defined $bucket_name;
    die "ERROR: Missing file."        unless defined $file;

    try {
        $file = basename($file);
        my $head = $s3->HeadObject(
            Bucket => $bucket_name,
            Key    => $file
        );

        say "Object encryption: ", ($head->ServerSideEncryption // 'None');
    }
    catch {
        die "ERROR: unable to view file meta: $_\n";
    };
}

sub fetch_bucket_meta($s3, $bucket_name) {
    die "ERROR: Missing S3 client."   unless defined $s3;
    die "ERROR: Missing bucket name." unless defined $bucket_name;

    try {
        my $encryption = $s3->GetBucketEncryption(Bucket => $bucket_name);

        say "Bucket encryption:";
        my $config = $encryption->ServerSideEncryptionConfiguration;
        foreach my $rule (@{ $config->Rules }) {
            my $default = $rule->ApplyServerSideEncryptionByDefault;
            say "  SSE Algorithm: ", $default->SSEAlgorithm;
        }
    }
    catch {
        die "ERROR: unable to view bucket meta: $_\n";
    };
}

sub cleanup($s3, $bucket_name) {
    die "ERROR: Missing S3 client."   unless defined $s3;
    die "ERROR: Missing bucket name." unless defined $bucket_name;

    try {
        my $resp = $s3->ListObjectsV2(Bucket => $bucket_name);
        for my $obj (@{ $resp->Contents }) {
            say " Delete key: ", $obj->{Key};
            $s3->DeleteObject(Bucket => $bucket_name, Key => $obj->{Key});
        }
        $s3->DeleteBucket(Bucket => $bucket_name);
        say "Bucket '$bucket_name' deleted successfully.";
    }
    catch {
        die "ERROR: unable to cleanup: $_\n";
    };
}
```

<br>

This is how we can use the script:

<br>

```bash
$ perl sse-s3.pl --help
usage: sse-s3.pl [--help] [--bucket BUCKET] [--file FILE] [--make-enc-bucket]
          [--upload] [--download]
          [--view-file-meta] [--view-bucket-meta]
          [--cleanup]

SSE-S3 Encryption

options:
  --help              Show this help message and exit
  --bucket BUCKET     Bucket namei, default sse-se-encrypted-bucket
  --file FILE         File to upload/download, default secret-file.txt
  --make-enc-bucket   Create encrypted bucket
  --upload            Upload file
  --download          Download file
  --fetch-file-meta   Fetch file metadata
  --fetch-bucket-meta Fetch bucket metadata
  --cleanup           Remove file and bucket
```

<br>

### Create Bucket

<br>

Let's create encypted bucket.

<br>

```bash
$ perl sse-s3.pl --bucket sse-s3-encrypted-bucket --make-enc-bucket
Creating enc bucket: sse-s3-encrypted-bucket
Enabled AES-256 encryption on sse-s3-encrypted-bucket.
```

<br>

### Upload File

<br>

Upload file to bucket

<br>

```bash
$ perl sse-s3.pl --bucket sse-s3-encrypted-bucket --file secret-file.txt --upload
Uploading file: secret-file.txt
Uploaded secret-file.txt to sse-s3-encrypted-bucket.
```

<br>

### Download File

<br>

Download file locally

<br>

```bash
$ perl sse-s3.pl --bucket sse-s3-encrypted-bucket --file secret-file.txt --download
Downloaded content: This is a secret file content.
```

<br>

### Object Metadata

<br>

Fetch file meta

<br>

```bash
$ perl sse-s3.pl --bucket sse-s3-encrypted-bucket --file secret-file.txt --fetch-file-meta
Object encryption: AES256
```

<br>

Fetch bucket meta

<br>

```bash
$ perl sse-s3.pl --bucket sse-s3-encrypted-bucket --fetch-bucket-meta
Bucket encryption:
  SSE Algorithm: AES256
```

<br>

### Cleanup

<br>

Cleanup in the end

<br>

```bash
$ perl sse-s3.pl --bucket sse-s3-encrypted-bucket --cleanup
Delete key: secret-file.txt
Bucket 'sse-s3-encrypted-bucket' deleted successfully.
```

<br>


## What next?
***

The next post would be about `Server-Side Encryption` using `KMS Managed Keys`.

***

<br>

`Happy Hacking !!!`
