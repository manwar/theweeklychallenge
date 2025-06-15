---
title: "AWS Customer Key Encryption"
date: 2025-06-15T00:00:00+00:00
description: "Discussion about AWS Customer Key Encryption."
type: post
image: images/blog/aws-customer-key-encryption.jpg
author: Mohammad Sajid Anwar
tags: ["perl", "python", "aws", "localstack"]
---

#### **DISCLAIMER:** Image is generated using `ChatGPT`.
<br>

### [1. Introduction](#introduction)
### [2. Customer Provided Keys (SSE-C)](#customer-provided-keys-sse-c)
### [3. Using aws](#using-aws)
### [4. Using Python](#using-python)
### [5. Using Perl](#using-perl)

<br>

## Introduction
***

<br>

Continuing our blog series on `AWS` encryption, this post focuses on `Server-Side Encryption` using `Customer-Provided Keys`.

Previously, I covered the other two types of `Server-Side Encryption` i.e. [**S3 Encryption**](/blog/aws-s3-encryption) and [**KMS Encryption**](/blog/aws-kms-encryption).

<br>

### Key Features
***

<br>

#### Customer-Managed Keys

<br>

    Customer generates and manages the encryption key.
    AWS does not store customer keys – they must be provided with every API request.

<br>

#### Military-Grade Encryption

<br>

    Uses AES-256 (Advanced Encryption Standard with 256-bit keys).
    The same symmetric key encrypts and decrypts data.

<br>

#### Unbreakable Security

<br>

    256-bit keys offer 2²⁵⁶ possible combinations.
    It's considered virtually impervious to brute-force attacks.

<br>

## Using aws
***

<br>

Create raw key.

<br>

```bash
(myenv) $ export RAW_KEY=$(openssl rand 32)
(myenv) $ echo $RAW_KEY
-kPz0^ALGR*Ҭ>MK
```

<br>

Generate base64 encoded raw key.

<br>

```bash
(myenv) $ export BASE64_KEY=$(echo -n "$RAW_KEY" | base64)
(myenv) $ echo $BASE64_KEY
igUt1GtQyHru7aswXkGoTJmAR39/HVIqtNKsxz7hTUs=
```

<br>

Generate md5 key for raw key.

<br>

```bash
(myenv) $ export MD5_KEY=$(echo -n "$RAW_KEY" | openssl dgst -md5 -binary | base64)
(myenv) $ echo $MD5_KEY
MFY4ZCjuzXvBZfIbk2LeMQ==
```

<br>

Let's create the bucket now.

<br>

```bash
(myenv) $ aws s3 mb s3://sse-c-encrypted-bucket
make_bucket: sse-c-encrypted-bucket
```

<br>

Upload file with customer key using `AES-256` algorithm.

<br>

```bash
(myenv) $ aws s3api put-object \
  --bucket sse-c-encrypted-bucket \
  --key secret-file.txt \
  --body secret-file.txt \
  --sse-customer-algorithm AES256 \
  --sse-customer-key "$BASE64_KEY" \
  --sse-customer-key-md5 "$MD5_KEY"
{
    "ETag": "\"5c1c7463b3b94cd0e204abf746a42671\"",
    "ChecksumCRC64NVME": "QtYNnUr9Eos=",
    "ChecksumType": "FULL_OBJECT",
    "SSECustomerAlgorithm": "AES256",
    "SSECustomerKeyMD5": "MFY4ZCjuzXvBZfIbk2LeMQ=="
}
```

<br>

Fetch file meta.

<br>

```bash
(myenv) $ aws s3api head-object \
  --bucket sse-c-encrypted-bucket \
  --key secret-file.txt \
  --sse-customer-algorithm AES256 \
  --sse-customer-key "$BASE64_KEY"  \
  --sse-customer-key-md5 "$MD5_KEY"
{
    "AcceptRanges": "bytes",
    "LastModified": "2025-06-15T02:43:54+00:00",
    "ContentLength": 31,
    "ETag": "\"5c1c7463b3b94cd0e204abf746a42671\"",
    "ContentType": "binary/octet-stream",
    "Metadata": {},
    "SSECustomerAlgorithm": "AES256",
    "SSECustomerKeyMD5": "ICjoBPuHgpRhQCUQ4hCC1Q=="
}
```

<br>

Copy file with key.

<br>

```bash
(myenv) $ aws s3api copy-object \
  --bucket sse-c-encrypted-bucket \
  --key copy_of_secret-file.txt \
  --copy-source "sse-c-encrypted-bucket/secret-file.txt" \
  --sse-customer-algorithm AES256 \
  --sse-customer-key "$BASE64_KEY" \
  --sse-customer-key-md5 "$MD5_KEY" \
  --copy-source-sse-customer-algorithm AES256 \
  --copy-source-sse-customer-key "$BASE64_KEY" \
  --copy-source-sse-customer-key-md5 "$MD5_KEY"
{
    "SSECustomerAlgorithm": "AES256",
    "SSECustomerKeyMD5": "qTQAjYHjCvO+vfQwrK4l8Q==",
    "CopyObjectResult": {
        "ETag": "\"5c1c7463b3b94cd0e204abf746a42671\"",
        "LastModified": "2025-06-15T03:12:23+00:00",
        "ChecksumCRC64NVME": "QtYNnUr9Eos="
    }
}
```

<br>

Fetch copied file meta.

<br>

```bash
(myenv) $ aws s3api head-object \
  --bucket sse-c-encrypted-bucket \
  --key copy_of_secret-file.txt \
  --sse-customer-algorithm AES256 \
  --sse-customer-key "$BASE64_KEY" \
  --sse-customer-key-md5 "$MD5_KEY"
{
    "AcceptRanges": "bytes",
    "LastModified": "2025-06-15T03:12:23+00:00",
    "ContentLength": 31,
    "ETag": "\"5c1c7463b3b94cd0e204abf746a42671\"",
    "ContentType": "binary/octet-stream",
    "Metadata": {},
    "SSECustomerAlgorithm": "AES256",
    "SSECustomerKeyMD5": "qTQAjYHjCvO+vfQwrK4l8Q=="
}
```

<br>

Try downloading the file without key.

<br>

```bash
(myenv) $ aws s3api get-object \
  --bucket sse-c-encrypted-bucket \
  --key secret-file.txt \
  downloaded.txt

An error occurred (InvalidRequest) when calling the GetObject operation: The object was stored using a form of Server Side Encryption. The correct parameters must be provided to retrieve the object.
```

<br>

Now download file with the customer key.

<br>

```bash
(myenv) $ aws s3api get-object \
  --bucket sse-c-encrypted-bucket \
  --key secret-file.txt \
  downloaded.txt \
  --sse-customer-algorithm AES256 \
  --sse-customer-key "$BASE64_KEY" \
  --sse-customer-key-md5 "$MD5_KEY"
{
    "AcceptRanges": "bytes",
    "LastModified": "2025-06-15T00:25:54+00:00",
    "ContentLength": 31,
    "ETag": "\"5c1c7463b3b94cd0e204abf746a42671\"",
    "ChecksumCRC64NVME": "QtYNnUr9Eos=",
    "ChecksumType": "FULL_OBJECT",
    "ContentType": "binary/octet-stream",
    "Metadata": {},
    "SSECustomerAlgorithm": "AES256",
    "SSECustomerKeyMD5": "MFY4ZCjuzXvBZfIbk2LeMQ=="
}
```

<br>

Cleanup now:

<br>

```bash
(myenv) $ aws s3 rm s3://sse-c-encrypted-bucket --recursive
delete: s3://sse-c-encrypted-bucket/copy_of_secret-file.txt
delete: s3://sse-c-encrypted-bucket/secret-file.txt
```

<br>

```bash
(myenv) $ aws s3 rb s3://sse-c-encrypted-bucket
remove_bucket: sse-c-encrypted-bucket
```

<br>

## Using Python
***

<br>

Here is the `Python` implementation of the above.

File: `sse-c.py`

<br>

```python
#!/usr/bin/env python3

import os
import boto3
import base64
import hashlib
import argparse
from botocore.config import Config
from botocore.exceptions import ClientError

ENDPOINT_URL         = "http://localhost:4566"
ACCESS_KEY_ID        = "test"
SECRET_ACCESS_KEY    = "test"
REGION               = "eu-west-1"
DEFAULT_FILE         = 'secret-file.txt'
DEFAULT_BUCKET       = 'sse-c-encrypted-bucket'
DEFAULT_CUSTOMER_KEY = 'CustomerSecretKey'

class MyArgumentParser(argparse.ArgumentParser):
    def error(self, message):
        if message:
            sys.stderr.write(f"ERROR: {message}\n\n")
        self.print_help()
        sys.exit(2)

def create_s3_client():
    return boto3.client(
        's3',
        endpoint_url = ENDPOINT_URL,
        aws_access_key_id = ACCESS_KEY_ID,
        aws_secret_access_key = SECRET_ACCESS_KEY,
        config = Config(signature_version='s3v4'),
        region_name = REGION
    )

def generate_encryption_key(customer_key):
    return hashlib.sha256(customer_key.encode("utf-8")).digest()

def get_sse_c_headers(enc_key):
    return {
        'SSECustomerAlgorithm': 'AES256',
        'SSECustomerKey': base64.b64encode(enc_key).decode('utf-8'),
        'SSECustomerKeyMD5': base64.b64encode(hashlib.md5(enc_key).digest()).decode('utf-8'),
    }

def make_bucket(s3, bucket_name):
    try:
        s3.create_bucket(Bucket=bucket_name,
            CreateBucketConfiguration={
                'LocationConstraint': REGION
            })
        print(f"Bucket {bucket_name} created.")
    except Exception as e:
        print(f"Error creating bucket: {e}")

def upload_file(s3, bucket_name, file, enc_key):
    try:
        headers = get_sse_c_headers(enc_key)

        s3.put_object(
            Bucket = bucket_name,
            Key = file,
            Body = open(file, 'r', encoding='utf-8').read().encode('utf-8'),
            **headers
        )
        print(f"Uploaded {file} to {bucket_name}.")
    except Exception as e:
        print(f"Error uploading file: {e}")

def copy_file(s3, bucket_name, file, enc_key):
    try:
        headers = get_sse_c_headers(enc_key)
        s3.copy_object(
            Bucket=bucket_name,
            Key=f"copy_of_{file}",
            CopySource=f"{bucket_name}/{file}",
            SSECustomerAlgorithm=headers['SSECustomerAlgorithm'],
            SSECustomerKey=headers['SSECustomerKey'],
            SSECustomerKeyMD5=headers['SSECustomerKeyMD5'],
            CopySourceSSECustomerAlgorithm=headers['SSECustomerAlgorithm'],
            CopySourceSSECustomerKey=headers['SSECustomerKey'],
            CopySourceSSECustomerKeyMD5=headers['SSECustomerKeyMD5'],
        )
        print(f"Successfully copied to 'copy_of_{file}' with maintained encryption")
    except ClientError as e:
        print(f"Error copying file: {e}")

def download_file(s3, bucket_name, file, enc_key):
    try:
        headers = get_sse_c_headers(enc_key)
        response = s3.get_object(
            Bucket = bucket_name,
            Key = file,
            **headers
        )
        content = response['Body'].read().decode('utf-8')
        print(f"Downloaded content: {content}")
    except Exception as e:
        print(f"Error downloading file with key: {e}")

def download_file_without_key(s3, bucket_name, file):
    try:
        s3.get_object(
            Bucket = bucket_name,
            Key = file
        )
        print(f"ERROR: downloaded successfully without key.")
    except ClientError as e:
        if e.response['Error']['Code'] == 'InvalidRequest':
            print(f"Failed to downloaded without key.")

def fetch_file_meta(s3, bucket_name, file, enc_key):
    try:
        headers = get_sse_c_headers(enc_key)

        response = s3.head_object(
            Bucket = bucket_name,
            Key = file,
            **headers
        )
        print("Object metadata:")
        print(f"ETag: {response['ETag']}")
        print(f"Size: {response['ContentLength']} bytes")
        print(f"Encryption: {response.get('ServerSideEncryption', 'None')}")
        print(f"SSE-C Algorithm: {response.get('SSECustomerAlgorithm', 'None')}")
        print(f"SSE-C Key MD5: {response.get('SSECustomerKeyMD5', 'None')}")
    except ClientError as e:
        print(f"Error retrieving metadata: {e}")

def cleanup(s3, bucket_name):
    try:
        objects = s3.list_objects_v2(Bucket=bucket_name)
        if 'Contents' in objects:
            for obj in objects['Contents']:
                s3.delete_object(Bucket=bucket_name, Key=obj['Key'])

        s3.delete_bucket(Bucket=bucket_name)
        print(f"Bucket '{bucket_name}' deleted successfully.")
    except Exception as e:
        print(f"Error deleting bucket: {e}")

def main():
    parser = MyArgumentParser(description="SSE-C Encryption")

    # Regular arguments
    regular_args = [
        ("--bucket", DEFAULT_BUCKET, f"Bucket name, default {DEFAULT_BUCKET}"),
        ("--file", DEFAULT_FILE, f"File to upload/download, default {DEFAULT_FILE}"),
        ('--customer-key', DEFAULT_CUSTOMER_KEY, "Customer key, default {DEFAULT_CUSTOMER_KEY}"),
    ]

    for flag, default, help_text, *type_hint in regular_args:
        kwargs = {"help": help_text}
        if default is not None:
            kwargs["default"] = default
        if type_hint:
            kwargs["type"] = type_hint[0]
        parser.add_argument(flag, **kwargs)

    # Mutually exclusive action flags
    action_group = parser.add_mutually_exclusive_group(required=True)
    action_flags = [
        ("--make-bucket", "Create bucket"),
        ("--upload", "Upload file"),
        ("--copy-file", "Copy file"),
        ("--download", "Download file"),
        ("--fetch-file-meta", "Fetch file metadata"),
        ("--cleanup", "Remove bucket and its content"),
    ]

    for flag, help_text in action_flags:
        action_group.add_argument(flag, action='store_true', help=help_text)

    args    = parser.parse_args()
    s3      = create_s3_client()
    enc_key = generate_encryption_key(args.customer_key)

    if args.make_bucket:
        make_bucket(s3, args.bucket)

    if args.upload:
        upload_file(s3, args.bucket, args.file, enc_key)

    if args.copy_file:
        copy_file(s3, args.bucket, args.file, enc_key)

    if args.download:
        print(f"Downloading {args.file} with key")
        download_file(s3, args.bucket, args.file, enc_key)
        print(f"Downloading {args.file} without key")
        download_file_without_key(s3, args.bucket, args.file)

    if args.fetch_file_meta:
        fetch_file_meta(s3, args.bucket, args.file, enc_key)

    if args.cleanup:
        cleanup(s3, args.bucket)

if __name__ == '__main__':
    main()
```

<br>

Test the code now:

<br>

```bash
(myenv) $ py sse-c.py --help
usage: sse-c.py [-h] [--bucket BUCKET] [--file FILE] [--customer-key CUSTOMER_KEY] (--make-bucket | --upload | --copy-file | --download | --fetch-file-meta | --cleanup)

SSE-C Encryption

options:
  -h, --help            show this help message and exit
  --bucket BUCKET       Bucket name, default sse-c-encrypted-bucket
  --file FILE           File to upload/download, default secret-file.txt
  --customer-key CUSTOMER_KEY
                        Customer key, default {DEFAULT_CUSTOMER_KEY}
  --make-bucket         Create bucket
  --upload              Upload file
  --copy-file           Copy file
  --download            Download file
  --fetch-file-meta     Fetch file metadata
  --cleanup             Remove bucket and its content
```

<br>

Create bucket

<br>

```bash
$ py sse-c.py --bucket sse-c-encrypted-bucket --make-bucket
Bucket sse-c-encrypted-bucket created.
```

<br>

Upload file to bucket

<br>

```bash
$ py sse-c.py --bucket sse-c-encrypted-bucket --file secret-file.txt --upload
Uploaded secret-file.txt to sse-c-encrypted-bucket.
```

<br>

Fetch file metadata

<br>

```bash
$ py sse-c.py --bucket sse-c-encrypted-bucket --file secret-file.txt --fetch-file-meta
Object metadata:
ETag: "5c1c7463b3b94cd0e204abf746a42671"
Size: 31 bytes
Encryption: AES256
SSE-C Algorithm: AES256
SSE-C Key MD5: dovR6EvoX5kk8922+aAvNQ==
```

<br>

Copy file with key

<br>

```bash
$ py sse-c.py --bucket sse-c-encrypted-bucket --file secret-file.txt --copy-file
Successfully copied to 'copy_of_secret-file.txt' with maintained encryption.
```

<br>

Download file locally with key and without key

<br>

```bash
$ py sse-c.py --bucket sse-c-encrypted-bucket --file secret-file.txt --download
Downloading secret-file.txt with key
Downloaded content: This is a secret file content.

Downloading secret-file.txt without key
Failed to downloaded without key.
```

<br>

Cleanup in the end

<br>

```bash
$ py sse-c.py --bucket sse-c-encrypted-bucket --cleanup
Bucket 'sse-c-encrypted-bucket' deleted successfully.
```

<br>

## Using Perl
***

<br>

Now, `Perl` implementation:

File: `sse-c.pl`

<br>

```perl
#!/usr/bin/env perl

use v5.38;
use Encode;
use Try::Tiny;
use File::Slurp;
use Getopt::Long;
use File::Basename;
use Digest::MD5 qw(md5);
use Digest::SHA qw(sha256);
use MIME::Base64 qw(encode_base64 decode_base64);

use Paws;
use Paws::Credential::Explicit;

my $REGION               = 'eu-west-1';
my $ENDPOINT             = 'http://localhost:4566';
my $ACCESS_KEY           = 'test';
my $SECRET_KEY           = 'test';
my $DEFAULT_FILE         = 'secret-file.txt';
my $DEFAULT_BUCKET       = 'sse-c-encrypted-bucket';
my $DEFAULT_CUSTOMER_KEY = 'CustomerSecretKey';

my %opts;
GetOptions(
    'bucket=s'          => \$opts{bucket},
    'file=s'            => \$opts{file},
    'customer-key=s'    => \$opts{customer_key},
    'make-bucket'       => \$opts{make_bucket},
    'upload'            => \$opts{upload},
    'copy-file'         => \$opts{copy_file},
    'download'          => \$opts{download},
    'fetch-file-meta'   => \$opts{fetch_file_meta},
    'cleanup'           => \$opts{cleanup},
    'help'              => \$opts{help},
) or show_help_and_exit(1);

show_help_and_exit(0) if $opts{help};

# Enforce only one action is selected
my @actions = qw/
    make_bucket
    upload
    copy_file
    download
    fetch_file_meta
    cleanup
/;

my $count   = grep { defined $opts{$_} } @actions;
show_help_and_exit(0, "You must specify exactly one of: --" . join(', --', @actions))
    unless $count == 1;

$opts{bucket}       = $DEFAULT_BUCKET       unless defined $opts{bucket};
$opts{file}         = $DEFAULT_FILE         unless defined $opts{file};
$opts{customer_key} = $DEFAULT_CUSTOMER_KEY unless defined $opts{customer_key};

my $s3 = create_s3_client();
my $enc_key = generate_encryption_key($opts{customer_key});

if ($opts{make_bucket}) {
    make_bucket($s3, $opts{bucket});
}

if ($opts{upload}) {
    upload_file($s3, $opts{bucket}, $opts{file}, $enc_key);
}

if ($opts{copy_file}) {
    copy_file($s3, $opts{bucket}, $opts{file}, $enc_key);
}

if ($opts{download}) {
    download_file($s3, $opts{bucket}, $opts{file}, $enc_key);
    download_file_without_enc_key($s3, $opts{bucket}, $opts{file});
}

if ($opts{fetch_file_meta}) {
    fetch_file_meta($s3, $opts{bucket}, $opts{file}, $enc_key);
}

if ($opts{cleanup}) {
    cleanup($s3, $opts{bucket});
}

#
#
# HELPER SUBROUTINES

sub show_help_and_exit($exit_code) {

    say <<"END_HELP";
usage: $0 [--help] [--bucket BUCKET] [--file FILE]
          [--customer-key CUSTOMER_KEY]
          [--make-bucket]
          [--upload] [--copy-file] [--download]
          [--fetch-file-meta] [--cleanup]

SSE-C Encryption

options:
  --help                      Show this help message and exit
  --bucket BUCKET             Bucket name, default $DEFAULT_BUCKET
  --file FILE                 File to upload/download, default $DEFAULT_FILE
  --customer-key CUSTOMER_KEY Customer key, default $DEFAULT_CUSTOMER_KEY
  --make-bucket               Create bucket
  --upload                    Upload file
  --copy-file                 Copy file
  --download                  Download file
  --fetch-file-meta           Fetch file metadata
  --cleanup                   Remove file and bucket
END_HELP

    exit $exit_code;
}

sub error_and_die($message) {
    my $level = 1;
    my ($sub_name, $line);

    while (1) {
        my @caller = caller($level++) or last;
        ($sub_name, $line) = @caller[3,2];
        last unless $sub_name =~ /^(?:Try::Tiny|eval|catch|__ANON__|try|main::)/;
    }

    my $clean_error = $message;
    $clean_error =~ s/\s+at\s+.*?line\s+\d+\.?$//;

    die "ERROR in $sub_name (at line $line): $clean_error\n";
}

sub generate_encryption_key($customer_key) {
    return sha256(Encode::encode_utf8($customer_key));
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

sub make_bucket($s3, $bucket_name) {
    error_and_die("Missing S3 client.")   unless defined $s3;
    error_and_die("Missing bucket name.") unless defined $bucket_name;

    try {
        $s3->CreateBucket(
            Bucket => $bucket_name,
            CreateBucketConfiguration => { LocationConstraint => $REGION },
        );

        say "Bucket $bucket_name created.";
    }
    catch {
        die "ERROR: unable to create bucket: $_\n";
    };
}

sub upload_file($s3, $bucket_name, $file, $enc_key) {
    error_and_die("Missing S3 client.")   unless defined $s3;
    error_and_die("Missing bucket name.") unless defined $bucket_name;
    error_and_die("Missing file.")        unless defined $file;
    error_and_die("Missing enc key.")     unless defined $enc_key;

    try {
        my $key_b64 = encode_base64($enc_key, '');
        my $md5_raw = md5($enc_key);
        my $md5_b64 = encode_base64($md5_raw, '');

        $s3->PutObject(
            Bucket => $bucket_name,
            Key    => $file,
            Body   => read_file($file, binmode => ':raw'),
            SSECustomerAlgorithm => 'AES256',
            SSECustomerKey       => $key_b64,
            SSECustomerKeyMD5    => $md5_b64,
        );
        say "File '$file' uploaded with SSE-C encryption.";
    }
    catch {
        die "Error uploading file with SSE-C encryption: $_";
    };
}

sub copy_file($s3, $bucket_name, $file, $enc_key) {
    error_and_die("Missing S3 client.")   unless defined $s3;
    error_and_die("Missing bucket name.") unless defined $bucket_name;
    error_and_die("Missing file.")        unless defined $file;
    error_and_die("Missing enc key.")     unless defined $enc_key;

    try {
        my $key_b64 = encode_base64($enc_key, '');
        my $md5_raw = md5($enc_key);
        my $md5_b64 = encode_base64($md5_raw, '');

        $s3->CopyObject(
            Bucket     => $bucket_name,
            Key        => "copy_of_$file",
            CopySource => "$bucket_name/$file",
            CopySourceSSECustomerAlgorithm => 'AES256',
            CopySourceSSECustomerKey       => $key_b64,
            CopySourceSSECustomerKeyMD5    => $md5_b64,
            SSECustomerAlgorithm           => 'AES256',
            SSECustomerKey                 => $key_b64,
            SSECustomerKeyMD5              => $md5_b64,
        );
        say "Successfully copied to 'copy_of_$file' with maintained encryption.";
    }
    catch {
        die "Error copying file with SSE-C encryption: $_";
    };
}

sub download_file($s3, $bucket_name, $file, $enc_key) {
    error_and_die("Missing S3 client.")   unless defined $s3;
    error_and_die("Missing bucket name.") unless defined $bucket_name;
    error_and_die("Missing file.")        unless defined $file;
    error_and_die("Missing enc key.")     unless defined $enc_key;

    try {
        my $key_b64 = encode_base64($enc_key, '');
        my $md5_raw = md5($enc_key);
        my $md5_b64 = encode_base64($md5_raw, '');

        my $response = $s3->GetObject(
            Bucket               => $bucket_name,
            Key                  => $file,
            SSECustomerAlgorithm => 'AES256',
            SSECustomerKey       => $key_b64,
            SSECustomerKeyMD5    => $md5_b64,
        );

        my $content;
        if (ref $response->Body eq 'SCALAR') {
            $content = ${ $response->Body };
        } elsif (ref $response->Body && $response->Body->can('getline')) {
            local $/;
            $content = $response->Body->getline();
        } else {
            $content = $response->Body;  # fallback
        }

        say "Successfully downloaded encrypted object:\n$content";
    }
    catch {
        die "ERROR: unable to download file with enc key: $_\n";
    };
}

sub download_file_without_enc_key($s3, $bucket_name, $file) {
    error_and_die("Missing S3 client.")   unless defined $s3;
    error_and_die("Missing bucket name.") unless defined $bucket_name;
    error_and_die("Missing file.")        unless defined $file;

    try {
        my $response = $s3->GetObject(
            Bucket => $bucket_name,
            Key    => $file,
        );
        say "Unexpected success downloading without SSE-C key.";
    }
    catch {
        say "Expected failure when downloading without SSE-C key.";
    };
}

sub fetch_file_meta($s3, $bucket_name, $file, $enc_key) {
    error_and_die("Missing S3 client.")   unless defined $s3;
    error_and_die("Missing bucket name.") unless defined $bucket_name;
    error_and_die("Missing file.")        unless defined $file;
    error_and_die("Missing enc key.")     unless defined $enc_key;

    try {
        my $key_b64 = encode_base64($enc_key, '');
        my $md5_raw = md5($enc_key);
        my $md5_b64 = encode_base64($md5_raw, '');

        my $resp = $s3->HeadObject(
            Bucket => $bucket_name,
            Key    => $file,
            SSECustomerAlgorithm => 'AES256',
            SSECustomerKey       => $key_b64,
            SSECustomerKeyMD5    => $md5_b64,
        );

        say "Object metadata:";
        say "ETag: " . $resp->ETag;
        say "Size: " . $resp->ContentLength . " bytes";
        say "Encryption: " . ($resp->ServerSideEncryption // 'None');
        say "SSE-C Algorithm: " . ($resp->SSECustomerAlgorithm // 'None');
        say "SSE-C Key MD5: " . ($resp->SSECustomerKeyMD5 // 'None');
    }
    catch {
        die "ERROR: unable to view file meta: $_\n";
    };
}

sub cleanup($s3, $bucket_name) {
    error_and_die("Missing S3 client.")   unless defined $s3;
    error_and_die("Missing bucket name.") unless defined $bucket_name;

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

Test the code now:

<br>

```bash
$ perl sse-c.pl --help
usage: sse-c.pl [--help] [--bucket BUCKET] [--file FILE]
          [--customer-key CUSTOMER_KEY]
          [--make-bucket]
          [--upload] [--copy-file] [--download]
          [--fetch-file-meta] [--cleanup]

SSE-C Encryption

options:
  --help                      Show this help message and exit
  --bucket BUCKET             Bucket name, default sse-c-encrypted-bucket
  --file FILE                 File to upload/download, default secret-file.txt
  --customer-key CUSTOMER_KEY Customer key, default CustomerSecretKey
  --make-bucket               Create bucket
  --upload                    Upload file
  --copy-file                 Copy file
  --download                  Download file
  --fetch-file-meta           Fetch file metadata
  --cleanup                   Remove file and bucket
```

<br>

Create bucket

<br>

```bash
$ perl sse-c.pl --bucket sse-c-encrypted-bucket --make-bucket
Bucket sse-c-encrypted-bucket created.
```

<br>

Upload file to bucket

<br>

```bash
$ perl sse-c.pl --bucket sse-c-encrypted-bucket --file secret-file.txt --upload
File 'secret-file.txt' uploaded with SSE-C encryption.
```

<br>

Fetch file metadata

<br>

```bash
$ perl sse-c.pl --bucket sse-c-encrypted-bucket --file secret-file.txt --fetch-file-meta
Object metadata:
ETag: "5c1c7463b3b94cd0e204abf746a42671"
Size: 31 bytes
Encryption: None
SSE-C Algorithm: AES256
SSE-C Key MD5: dovR6EvoX5kk8922+aAvNQ==
```

<br>

Copy file with key

<br>

```bash
$ perl sse-c.pl --bucket sse-c-encrypted-bucket --file secret-file.txt --copy-file
Successfully copied to 'copy_of_secret-file.txt' with maintained encryption.
```

<br>

Download file locally with key and without key

<br>

```bash
$ perl sse-c.pl --bucket sse-c-encrypted-bucket --file secret-file.txt --download
Successfully downloaded encrypted object:
This is a secret file content.

Expected failure when downloading without SSE-C key.
```

<br>

Cleanup in the end

<br>

```bash
$ perl sse-c.pl --bucket sse-c-encrypted-bucket --cleanup
 Delete key: copy_of_secret-file.txt
 Delete key: secret-file.txt
Bucket 'sse-c-encrypted-bucket' deleted successfully.
```

<br>

## What next?
***

The next post would be about `AWS S3 Client-Side Encryption`.

***

<br>

`Happy Hacking !!!`
