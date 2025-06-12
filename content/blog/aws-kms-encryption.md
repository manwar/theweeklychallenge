---
title: "AWS KMS Encryption"
date: 2025-06-12T00:00:00+00:00
description: "Discussion about AWS KMS Encryption."
type: post
image: images/blog/aws-kms-encryption.jpg
author: Mohammad Sajid Anwar
tags: ["perl", "python", "aws", "localstack"]
---

#### **DISCLAIMER:** Image is generated using `Leonardo AI`.
<br>

## AWS KMS Encryption
***

### [1. Introduction](#introduction)
### [2. Using aws](#using-aws)
### [3. Using Python](#using-python)
### [4. Using Perl](#using-perl)

<br>

## Introduction
***

<br>

This post is in continuation of the last [**post**](/blog/aws-s3-encryption) where we explored the `AWS S3 Encryption`.

In this post, I would like to talk about encryption using `AWS Key Management Service`.

`AWS Key Management Service (KMS)` is a managed service that enables easy encryption of data using cryptographic keys.

It allows you to create, manage, and control encryption keys.

Let's get our hand dirty.

<br>

## Using aws
***

<br>

### Create Key

<br>

Create `KMS` key.

<br>

```bash
(myenv) $ KEY_ARN=$(aws kms create-key --query KeyMetadata.Arn --output text)
(myenv) $ echo $KEY_ARN
arn:aws:kms:eu-west-1:000000000000:key/9df113f1-4acd-4b1b-a930-bb2e9a98e124
```

<br>

How about creating an alias for the `KMS` key?

<br>

```bash
(myenv) $ KEY_ID=$(aws kms create-key --description "My production key" --query 'KeyMetadata.KeyId' --output text)
(myenv) $ echo $KEY_ID
(myenv) $ aws kms create-alias --alias-name alias/my-prod-key --target-key-id $KEY_ID
```

<br>

Alias must start with `alias/` prefix.

Each alias name must be unique within an `AWS` account and region.

<br>

### List Keys

<br>

To list all the keys, do this.

<br>

```bash
(myenv) $ aws kms list-keys
{
    "Keys": [
        {
            "KeyId": "9df113f1-4acd-4b1b-a930-bb2e9a98e124",
            "KeyArn": "arn:aws:kms:eu-west-1:000000000000:key/9df113f1-4acd-4b1b-a930-bb2e9a98e124"
        },
        {
            "KeyId": "0ef066cd-c5f1-4ba7-bb7a-0584c71ffbba",
            "KeyArn": "arn:aws:kms:eu-west-1:000000000000:key/0ef066cd-c5f1-4ba7-bb7a-0584c71ffbba"
        },
        {
            "KeyId": "3a934579-7f29-474c-8459-8a9f749ece3d",
            "KeyArn": "arn:aws:kms:eu-west-1:000000000000:key/3a934579-7f29-474c-8459-8a9f749ece3d"
        },
        {
            "KeyId": "4cda3ec5-25a2-4146-a700-86bc54d94d48",
            "KeyArn": "arn:aws:kms:eu-west-1:000000000000:key/4cda3ec5-25a2-4146-a700-86bc54d94d48"
        },
        {
            "KeyId": "e17a3030-f92c-4eda-99d2-3826df75fa86",
            "KeyArn": "arn:aws:kms:eu-west-1:000000000000:key/e17a3030-f92c-4eda-99d2-3826df75fa86"
        },
        {
            "KeyId": "66da75e5-37f9-41dd-a3d5-2a2a3fdf57d2",
            "KeyArn": "arn:aws:kms:eu-west-1:000000000000:key/66da75e5-37f9-41dd-a3d5-2a2a3fdf57d2"
        },
        {
            "KeyId": "576243cb-2b52-490e-b707-711809874859",
            "KeyArn": "arn:aws:kms:eu-west-1:000000000000:key/576243cb-2b52-490e-b707-711809874859"
        },
        {
            "KeyId": "50631fb0-74fa-4f4b-a2e5-c11be97701b7",
            "KeyArn": "arn:aws:kms:eu-west-1:000000000000:key/50631fb0-74fa-4f4b-a2e5-c11be97701b7"
        }
    ]
}
```

<br>

To list keys with their aliases, try this:

<br>

```bash
(myenv) $ aws kms list-aliases --query 'Aliases[].{AliasName:AliasName, TargetKeyId:TargetKeyId}'
[
    {
        "AliasName": "alias/my-alias-key-1",
        "TargetKeyId": "9df113f1-4acd-4b1b-a930-bb2e9a98e124"
    }
]
```

### List Key Details

<br>

```bash
(myenv) $ aws kms describe-key --key-id "9df113f1-4acd-4b1b-a930-bb2e9a98e124"
{
    "KeyMetadata": {
        "AWSAccountId": "000000000000",
        "KeyId": "9df113f1-4acd-4b1b-a930-bb2e9a98e124",
        "Arn": "arn:aws:kms:eu-west-1:000000000000:key/9df113f1-4acd-4b1b-a930-bb2e9a98e124",
        "CreationDate": "2025-06-02T14:55:46.096049+01:00",
        "Enabled": true,
        "Description": "",
        "KeyUsage": "ENCRYPT_DECRYPT",
        "KeyState": "Enabled",
        "Origin": "AWS_KMS",
        "KeyManager": "CUSTOMER",
        "CustomerMasterKeySpec": "SYMMETRIC_DEFAULT",
        "KeySpec": "SYMMETRIC_DEFAULT",
        "EncryptionAlgorithms": [
            "SYMMETRIC_DEFAULT"
        ],
        "MultiRegion": false
    }
}
```

<br>

### Delete Key

<br>

To delete a key, you must disable it first.

<br>

```bash
(myenv) $ aws kms disable-key --key-id "9df113f1-4acd-4b1b-a930-bb2e9a98e124"
```

<br>

Then schedule it for deletion, `7-30 days` waiting period.

<br>

```bash
(myenv) $ aws kms schedule-key-deletion \
          --key-id "9df113f1-4acd-4b1b-a930-bb2e9a98e124" \
          --pending-window-in-days 7
```

<br>

### Create Bucket

<br>

Let's create the bucket first.

<br>

```bash
(myenv) $ aws s3 mb s3://sse-kms-encrypted-bucket
make_bucket: sse-kms-encrypted-bucket
```

<br>

### Enable Encryption

<br>

Here we are using `$KEY_ARN` generated above when enabling the encryption:

<br>

```bash
(myenv) aws s3api put-bucket-encryption \
  --bucket sse-kms-encrypted-bucket \
  --server-side-encryption-configuration '{
    "Rules": [{
      "ApplyServerSideEncryptionByDefault": {
        "SSEAlgorithm": "aws:kms",
        "KMSMasterKeyID": "'$KEY_ARN'"
      }
    }]
  }'
```

<br>

The `KMSMasterKeyID` can have one of the following values:

<br>

    Key ID    9df113f1-4acd-4b1b-a930-bb2e9a98e124
    Key alias alias/my-key
    Key ARN   arn:aws:kms:eu-west-1:000000000000:key/9df113f1-4acd-4b1b-a930-bb2e9a98e124
    Alias ARN arn:aws:kms:eu-west-1:000000000000:alias/my-key

<br>

It's always safe to use `Key ARN`.

However if the key is in the same region and owned by the same account then `Key ID` is sufficient.

<br>

### Upload File

<br>

Now upload the secret file.

<br>

```bash
$ aws s3 cp secret-file.txt s3://sse-kms-encrypted-bucket
upload: ./secret-file.txt to s3://sse-kms-encrypted-bucket/secret-file.txt
```

<br>

### Download File

<br>

Download the file.

<br>

```bash
$ aws s3 cp s3://sse-kms-encrypted-bucket/secret-file.txt downloaded-secret-file.txt
download: s3://sse-kms-encrypted-bucket/secret-file.txt to ./downloaded-secret-file.txt
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
$ aws s3api head-object --bucket sse-kms-encrypted-bucket --key secret-file.txt
{
    "AcceptRanges": "bytes",
    "LastModified": "2025-06-02T14:04:20+00:00",
    "ContentLength": 31,
    "ETag": "\"5c1c7463b3b94cd0e204abf746a42671\"",
    "ContentType": "text/plain",
    "ServerSideEncryption": "aws:kms",
    "Metadata": {},
    "SSEKMSKeyId": "arn:aws:kms:eu-west-1:000000000000:key/9df113f1-4acd-4b1b-a930-bb2e9a98e124"
}
```

<br>

Finally, verify the encryption settings.

<br>

```bash
$ aws s3api get-bucket-encryption --bucket sse-kms-encrypted-bucket
{
    "ServerSideEncryptionConfiguration": {
        "Rules": [
            {
                "ApplyServerSideEncryptionByDefault": {
                    "SSEAlgorithm": "aws:kms",
                    "KMSMasterKeyID": "arn:aws:kms:eu-west-1:000000000000:key/9df113f1-4acd-4b1b-a930-bb2e9a98e124"
                }
            }
        ]
    }
}
```

<br>

### Cleanup

<br>

Finally cleanup now.

<br>

```bash
$ aws s3 rm s3://sse-kms-encrypted-bucket --recursive
delete: s3://sse-kms-encrypted-bucket/secret-file.txt
```

<br>

```bash
$ aws s3 rb s3://sse-kms-encrypted-bucket
remove_bucket: sse-kms-encrypted-bucket
```

<br>

## Using Python
***

Here is the `Python` implementation of the above.

For the first time, I am using decorator for parameter validation in `Python`.

I have created class `ParamValidator` for parameter validation.

File: `sse-kms.py`

<br>

```python
#!/usr/bin/env python3

import re
import os
import sys
import boto3
import argparse
from botocore.config import Config
from botocore.exceptions import ClientError
from typing import Any, Dict, Optional, Tuple

ENDPOINT_URL      = "http://localhost:4566"
ACCESS_KEY_ID     = "test"
SECRET_ACCESS_KEY = "test"
REGION            = "eu-west-1"
DEFAULT_FILE      = 'secret-file.txt'
DEFAULT_BUCKET    = 'sse-kms-encrypted-bucket'
DEFAULT_PENDING_WINDOW_DAYS = 7

class MyArgumentParser(argparse.ArgumentParser):
    def error(self, message):
        if message:
            sys.stderr.write(f"ERROR: {message}\n\n")
        self.print_help()
        sys.exit(2)

class ParamValidator:
    VALIDATION_RULES = {
        'bucket_name': {
            'type': str,
            'regex': r'^[a-z0-9][a-z0-9\-.]*[a-z0-9]$',
            'min_len': 3,
            'max_len': 63,
            'exclude_patterns': [r'^\d+\.\d+\.\d+\.\d+$'],
            'invalid_sequences': ['..', '-.', '.-'],
            'error_msg': "Bucket name must be 3-63 chars, lowercase alphanumeric with hyphens/periods"
        },
        'key_id': {
            'type': str,
            'regex': r'^([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}|alias/[a-zA-Z0-9/_-]+|arn:aws:kms:.+:.+:key/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})$',
            'error_msg': "Key ID must be UUID, alias (starting with alias/), or ARN"
        },
        'region': {
            'type': str,
            'regex': r'^[a-z]{2}-[a-z]+-\d+$',
            'error_msg': "Region must be in format like 'us-east-1'"
        },
        'alias_name': {
            'type': str,
            'regex': r'^alias/[a-zA-Z0-9/_-]+$',
            'error_msg': "Alias must start with 'alias/' and contain alphanumeric chars"
        },
        's3': {
            'boto3_client': True,
            'service': 's3',
            'error_msg': "Must be a valid boto3 S3 client"
        },
        'kms': {
            'boto3_client': True,
            'service': 'kms',
            'error_msg': "Must be a valid boto3 KMS client"
        },
        'file': {
            'type': str,
            'error_msg': "Must be a valid file path"
        }
    }

    @staticmethod
    def _is_valid_boto3_client(client: Any, expected_service: Optional[str] = None) -> bool:
        try:
            if not all(hasattr(client, attr) for attr in ['_service_model', '_endpoint', 'meta']):
                return False

            if expected_service and getattr(client, '_service_model', None):
                return client._service_model.service_name == expected_service

            return True
        except Exception:
            return False

    @classmethod
    def validate(cls, param_name: str, param_value: Any) -> Tuple[bool, Optional[str]]:
        """Generic parameter validation method"""
        if param_name not in cls.VALIDATION_RULES:
            return True, None

        rules = cls.VALIDATION_RULES[param_name]

        # Type check
        if rules.get('boto3_client'):
            if not cls._is_valid_boto3_client(param_value, rules.get('service')):
                return False, rules.get('error_msg', f"Invalid {param_name} - must be boto3 client")
            return True, None

        # Length checks
        if 'min_len' in rules and len(param_value) < rules['min_len']:
            return False, f"{param_name} must be at least {rules['min_len']} characters"

        if 'max_len' in rules and len(param_value) > rules['max_len']:
            return False, f"{param_name} must be no more than {rules['max_len']} characters"

        # Regex pattern check
        if 'regex' in rules and not re.match(rules['regex'], str(param_value)):
            return False, rules.get('error_msg', f"Invalid {param_name} format")

        # Exclusion patterns
        if 'exclude_patterns' in rules:
            for pattern in rules['exclude_patterns']:
                if re.match(pattern, str(param_value)):
                    return False, f"{param_name} matches invalid pattern {pattern}"

        # Invalid sequences
        if 'invalid_sequences' in rules:
            for seq in rules['invalid_sequences']:
                if seq in str(param_value):
                    return False, f"{param_name} contains invalid sequence '{seq}'"

        return True, None

def validate_params(**param_specs: Dict[str, str]):
    def decorator(func):
        def wrapper(*args, **kwargs):
            params = func.__code__.co_varnames[:func.__code__.co_argcount]
            bound_args = dict(zip(params, args))
            bound_args.update(kwargs)

            for param_name, validation_type in param_specs.items():
                if param_name in bound_args:
                    is_valid, error_msg = ParamValidator.validate(
                        validation_type,
                        bound_args[param_name]
                    )
                    if not is_valid:
                        raise ValueError(f"Parameter validation failed for {param_name}: {error_msg}")

            return func(*args, **kwargs)
        return wrapper
    return decorator

def create_client(type):
    return boto3.client(
        type,
        endpoint_url = ENDPOINT_URL,
        aws_access_key_id = ACCESS_KEY_ID,
        aws_secret_access_key = SECRET_ACCESS_KEY,
        config = Config(signature_version='s3v4'),
        region_name = REGION
    )

@validate_params(
    s3='s3',
    kms='kms',
    bucket_name='bucket_name',
    region='region'
)
def make_enc_bucket(s3, kms, bucket_name, region):
    try:
        key = kms.create_key(Description='KMS Encryption Key')
        key_arn = key['KeyMetadata']['Arn']
        print(f"Created KMS key: {key_arn}")

        s3.create_bucket(Bucket=bucket_name,
            CreateBucketConfiguration={
                'LocationConstraint': region
            })
        print(f"Bucket {bucket_name} created.")

        s3.put_bucket_encryption(
            Bucket=bucket_name,
            ServerSideEncryptionConfiguration={
                'Rules': [
                    {
                        'ApplyServerSideEncryptionByDefault': {
                            'SSEAlgorithm': 'aws:kms',
                            'KMSMasterKeyID': key_arn
                        }
                    }
                ]
            }
        )
        print(f"Enabled KMS encryption on {bucket_name} using key {key_arn}.")
    except Exception as e:
        print(f"Error creating encrypted bucket: {e}")

@validate_params(
    kms='kms',
    key_id='key_id'
)
def desc_key(kms, key_id):
    try:
        response = kms.describe_key(KeyId=key_id)
        key_metadata = response['KeyMetadata']

        print(f"Key Details for {key_id}:")
        print(f"ARN: {key_metadata['Arn']}")
        print(f"Description: {key_metadata.get('Description', 'None')}")
        print(f"Creation Date: {key_metadata['CreationDate']}")
        print(f"Enabled: {key_metadata['Enabled']}")
        print(f"Key Usage: {key_metadata['KeyUsage']}")
        print(f"Key State: {key_metadata['KeyState']}")
        print(f"Origin: {key_metadata['Origin']}")
    except kms.exceptions.NotFoundException:
        print(f"Error: Key {key_id} not found")
    except Exception as e:
        print(f"Error: {str(e)}")

@validate_params(
    kms='kms',
    key_id='key_id'
)
def disable_key(kms, key_id):
    try:
        response = kms.disable_key(
            KeyId=key_id
        )
        print(f"Successfully disabled key: {key_id}")
    except ClientError as e:
        error_code = e.response['Error']['Code']
        if error_code == 'NotFoundException':
            print(f"Error: Key {key_id} not found")
        elif error_code == 'AccessDeniedException':
            print(f"Error: Permission denied to disable key {key_id}")
        else:
            print(f"Error disabling key: {e}")

@validate_params(
    kms='kms',
    key_id='key_id'
)
def schedule_key_deletion(kms, key_id, pending_window_days=7):
    try:
        response = kms.schedule_key_deletion(
            KeyId=key_id,
            PendingWindowInDays=pending_window_days
        )

        print(f"Successfully scheduled deletion for key {key_id}")
        print(f"Deletion Date: {response['DeletionDate']}")
        print(f"Key State: {response['KeyState']}")
    except ClientError as e:
        error_code = e.response['Error']['Code']
        if error_code == 'NotFoundException':
            print(f"Error: Key {key_id} not found")
        elif error_code == 'KMSInvalidStateException':
            print(f"Error: Key {key_id} is already pending deletion or incompatible")
        else:
            print(f"Error scheduling key deletion: {e}")

@validate_params(
    kms='kms'
)
def list_keys(kms):
    try:
        paginator = kms.get_paginator('list_keys')
        for page in paginator.paginate():
            for key in page['Keys']:
                print("KeyId:", key['KeyId'])
                print("KeyArn:", key['KeyArn'])
                print("---")

    except ClientError as e:
        print(f"Error listing keys: {e}")

@validate_params(
    kms='kms'
)
def list_aliases(kms):
    try:
        response = kms.list_aliases()
        for alias in response['Aliases']:
            print({
                'AliasName': alias['AliasName'],
                'TargetKeyId': alias.get('TargetKeyId', '')
            })

    except ClientError as e:
         print(f"Error listing aliases: {e}")

@validate_params(
    kms='kms',
    key_id='key_id',
    alias_name='alias_name'
)
def create_alias(kms, key_id, alias_name):
    try:
        response = kms.create_alias(
            AliasName=alias_name,
            TargetKeyId=key_id
        )
        print(f"Successfully created alias '{alias_name}' for key {key_id}")
    except ClientError as e:
        error_code = e.response['Error']['Code']
        if error_code == 'AlreadyExistsException':
            print(f"Error: Alias '{alias_name}' already exists")
        elif error_code == 'NotFoundException':
            print(f"Error: Key {key_id} not found")
        elif error_code == 'AccessDeniedException':
            print(f"Error: Permission denied to create alias")
        else:
            print(f"Error creating alias: {e}")

@validate_params(
    s3='s3',
    bucket_name='bucket_name',
    file='file'
)
def upload_file(s3, bucket_name, file):
    try:
        if not os.path.exists(file):
            print(f"Error: File '{file}' does not exist")
            return False

        key = os.path.basename(file)
        s3.upload_file(file, bucket_name, key)
        print(f"Uploaded {file} to {bucket_name}.")
    except Exception as e:
        print(f"Error uploading file: {e}")

@validate_params(
    s3='s3',
    bucket_name='bucket_name',
    file='file'
)
def download_file(s3, bucket_name, file):
    try:
        key = os.path.basename(file)
        download_path = f"new_{key}"
        s3.download_file(bucket_name, file, download_path)
        print(f"File downloaded to '{download_path}'.")

        with open(download_path, 'r') as f:
            print("File content:", f.read())
    except Exception as e:
        print(f"Error downloading file: {e}")

@validate_params(
    s3='s3',
    bucket_name='bucket_name',
    file='file'
)
def fetch_file_meta(s3, bucket_name, file):
    try:
        response = s3.head_object(
            Bucket=bucket_name,
            Key=os.path.basename(file)
        )
        encryption = response.get('ServerSideEncryption')
        if encryption:
            print(f"Object encryption: {encryption}")
        else:
            print("Object encryption: None")
    except Exception as e:
        print(f"Error fetching file meta: {e}")

@validate_params(
    s3='s3',
    bucket_name='bucket_name'
)
def fetch_bucket_meta(s3, bucket_name):
    try:
        encryption = s3.get_bucket_encryption(Bucket=bucket_name)
        rules = encryption['ServerSideEncryptionConfiguration'].get('Rules', [])
        if rules:
            sse_algorithm = rules[0].get('ApplyServerSideEncryptionByDefault', {}).get('SSEAlgorithm')
            print(f"Bucket encryption: {sse_algorithm}")
        else:
            print("Bucket encryption: None")
    except Exception as e:
        print(f"Error fetching bucket meta: {e}")

@validate_params(
    s3='s3',
    bucket_name='bucket_name'
)
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
    parser = MyArgumentParser(description="SSE-KMS Encryption")
    parser.add_argument('--bucket', default=DEFAULT_BUCKET, help=f"Bucket name, default {DEFAULT_BUCKET}")
    parser.add_argument('--file', default=DEFAULT_FILE, help=f"File to upload/download, default {DEFAULT_FILE}")
    parser.add_argument('--key-id', help="KMS key id")
    parser.add_argument('--pending-window-days', type=int, default=DEFAULT_PENDING_WINDOW_DAYS, help=f"Pending window days, default {DEFAULT_PENDING_WINDOW_DAYS}")
    parser.add_argument('--alias-name', help="Alias name")

    parser.add_argument('--make-enc-bucket', action='store_true', help="Create encrypted bucket")
    parser.add_argument('--list-keys', action='store_true', help="List KMS keys")
    parser.add_argument('--desc-key', action='store_true', help="Describe key details")
    parser.add_argument('--disable-key', action='store_true', help="Disable key")
    parser.add_argument('--schedule-key-deletion', action='store_true', help="Schedule key deletion")
    parser.add_argument('--list-aliases', action='store_true', help="List aliases")
    parser.add_argument('--create-alias', action='store_true', help="Create alias")
    parser.add_argument('--upload', action='store_true', help="Upload file")
    parser.add_argument('--download', action='store_true', help="Download file")
    parser.add_argument('--fetch-file-meta', action='store_true', help="Fetch file metadata")
    parser.add_argument('--fetch-bucket-meta', action='store_true', help="Fetch bucket metadata")
    parser.add_argument('--cleanup', action='store_true', help="Remove bucket and its content")

    args = parser.parse_args()

    # Enforce only one action is selected
    actions = [
        args.make_enc_bucket,
        args.list_keys,
        args.desc_key,
        args.disable_key,
        args.schedule_key_deletion,
        args.create_alias,
        args.list_aliases,
        args.upload,
        args.download,
        args.fetch_file_meta,
        args.fetch_bucket_meta,
        args.cleanup,
    ]

    if sum(bool(action) for action in actions) != 1:
        parser.error("You must specify exactly one of: "
                     "--make-enc-bucket, --list-keys, --desc-key, "
                     "--disable-key, --schedule-key-deletion, --list-aliases, "
                     "--upload, --download, "
                     "--fetch-file-meta, --fetch-bucket-meta, --cleanup")

    if args.desc_key and not args.key_id:
        parser.error("--desc-key requires --key-id")

    if args.create_alias and (not args.key_id or not args.alias_name):
        parser.error("--create-alias requires both --key-id and --alias-name")

    s3  = create_client('s3')
    kms = create_client('kms')

    if args.make_enc_bucket:
        make_enc_bucket(s3, kms, args.bucket, REGION)

    if args.list_keys:
        list_keys(kms)

    if args.desc_key:
        desc_key(kms, args.key_id)

    if args.disable_key:
        disable_key(kms, args.key_id)

    if args.schedule_key_deletion:
        schedule_key_deletion(kms, args.key_id, args.pending_window_days)

    if args.create_alias:
        create_alias(kms, args.key_id, args.alias_name)

    if args.list_aliases:
        list_aliases(kms)

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
    try:
        main()
    except ValueError as e:
        print(f"Error: {e}")
        sys.exit(1)
```

<br>

Test the code now:

<br>

```bash
(myenv) $ py sse-kms.py --help
usage: sse-kms.py [-h] [--bucket BUCKET] [--file FILE] [--key-id KEY_ID]
                  [--pending-window-days PENDING_WINDOW_DAYS]
                  [--alias-name ALIAS_NAME] [--make-enc-bucket]
                  [--list-keys] [--desc-key] [--disable-key]
                  [--schedule-key-deletion] [--list-aliases]
                  [--create-alias] [--upload] [--download]
                  [--fetch-file-meta] [--fetch-bucket-meta] [--cleanup]

SSE-KMS Encryption

options:
  -h, --help            show this help message and exit
  --bucket BUCKET       Bucket namei, default sse-kms-encrypted-bucket
  --file FILE           File to upload/download, default secret-file.txt
  --key-id KEY_ID       KMS key id
  --pending-window-days PENDING_WINDOW_DAYS
                        Pending window days, default 7
  --alias-name ALIAS_NAME
                        Alias name
  --make-enc-bucket     Create encrypted bucket
  --list-keys           List KMS keys
  --desc-key            Describe key details
  --disable-key         Disable key
  --schedule-key-deletion
                        Schedule key deletion
  --list-aliases        List aliases
  --create-alias        Create alias
  --upload              Upload file
  --download            Download file
  --fetch-file-meta     Fetch file metadata
  --fetch-bucket-meta   Fetch bucket metadata
  --cleanup             Remove bucket and its content
```

<br>

Create encrypted bucket.

You can skip `--bucket sse-kms-encrypted-bucket` and it would create the default bucket.

<br>

```bash
(myenv) $ py sse-kms.py --bucket sse-kms-encrypted-bucket --make-enc-bucket
Created KMS key: 0ef066cd-c5f1-4ba7-bb7a-0584c71ffbba
Bucket sse-kms-encrypted-bucket created
Enabled KMS encryption on sse-kms-encrypted-bucket using key 0ef066cd-c5f1-4ba7-bb7a-0584c71ffbba
```

<br>

List `KMS keys`.

<br>

```bash
(myenv) $ py sse-kms.py --list-keys
KeyId: 9df113f1-4acd-4b1b-a930-bb2e9a98e124
KeyArn: arn:aws:kms:eu-west-1:000000000000:key/9df113f1-4acd-4b1b-a930-bb2e9a98e124
---
KeyId: 0ef066cd-c5f1-4ba7-bb7a-0584c71ffbba
KeyArn: arn:aws:kms:eu-west-1:000000000000:key/0ef066cd-c5f1-4ba7-bb7a-0584c71ffbba
---
KeyId: 3a934579-7f29-474c-8459-8a9f749ece3d
KeyArn: arn:aws:kms:eu-west-1:000000000000:key/3a934579-7f29-474c-8459-8a9f749ece3d
---
KeyId: 4cda3ec5-25a2-4146-a700-86bc54d94d48
KeyArn: arn:aws:kms:eu-west-1:000000000000:key/4cda3ec5-25a2-4146-a700-86bc54d94d48
---
KeyId: e17a3030-f92c-4eda-99d2-3826df75fa86
KeyArn: arn:aws:kms:eu-west-1:000000000000:key/e17a3030-f92c-4eda-99d2-3826df75fa86
---
KeyId: 66da75e5-37f9-41dd-a3d5-2a2a3fdf57d2
KeyArn: arn:aws:kms:eu-west-1:000000000000:key/66da75e5-37f9-41dd-a3d5-2a2a3fdf57d2
---
KeyId: 576243cb-2b52-490e-b707-711809874859
KeyArn: arn:aws:kms:eu-west-1:000000000000:key/576243cb-2b52-490e-b707-711809874859
---
KeyId: 50631fb0-74fa-4f4b-a2e5-c11be97701b7
KeyArn: arn:aws:kms:eu-west-1:000000000000:key/50631fb0-74fa-4f4b-a2e5-c11be97701b7
---
KeyId: 2913238b-370f-4dfd-940e-3245fce10fa4
KeyArn: arn:aws:kms:eu-west-1:000000000000:key/2913238b-370f-4dfd-940e-3245fce10fa4
---
KeyId: 36b362c0-51ca-4236-9ac2-90b7d929b745
KeyArn: arn:aws:kms:eu-west-1:000000000000:key/36b362c0-51ca-4236-9ac2-90b7d929b745
---
KeyId: f0994797-acfb-45b1-b9ee-0f7191adf50c
KeyArn: arn:aws:kms:eu-west-1:000000000000:key/f0994797-acfb-45b1-b9ee-0f7191adf50c
---
KeyId: 817fdffb-46df-47ad-973c-f6f2b7f665fc
KeyArn: arn:aws:kms:eu-west-1:000000000000:key/817fdffb-46df-47ad-973c-f6f2b7f665fc
---
```

<br>

Describe a key.

<br>

```bash
(myenv) $ py sse-kms.py --desc-key --key-id 0ef066cd-c5f1-4ba7-bb7a-0584c71ffbba
Key Details for 0ef066cd-c5f1-4ba7-bb7a-0584c71ffbba:
ARN: arn:aws:kms:eu-west-1:000000000000:key/0ef066cd-c5f1-4ba7-bb7a-0584c71ffbba
Description: LocalStack S3 Encryption Key
Creation Date: 2025-06-02 15:22:12.516666+01:00
Enabled: True
Key Usage: ENCRYPT_DECRYPT
Key State: Enabled
Origin: AWS_KMS
```

<br>

Disable a key.

<br>

```bash
(myenv) $ py sse-kms.py --disable-key --key-id 0ef066cd-c5f1-4ba7-bb7a-0584c71ffbba
Successfully disabled key: 0ef066cd-c5f1-4ba7-bb7a-0584c71ffbba
```

<br>

Check the status post disabling key.

<br>

```bash
(myenv) $ py sse-kms.py --desc-key --key-id 0ef066cd-c5f1-4ba7-bb7a-0584c71ffbba
Key Details for 0ef066cd-c5f1-4ba7-bb7a-0584c71ffbba:
ARN: arn:aws:kms:eu-west-1:000000000000:key/0ef066cd-c5f1-4ba7-bb7a-0584c71ffbba
Description: LocalStack S3 Encryption Key
Creation Date: 2025-06-02 15:22:12.516666+01:00
Enabled: False
Key Usage: ENCRYPT_DECRYPT
Key State: Disabled
Origin: AWS_KMS
```

<br>

Schedule deletion of disabled key.

<br>

```bash
(myenv) $ py sse-kms.py --schedule-key-deletion --key-id 0ef066cd-c5f1-4ba7-bb7a-0584c71ffbba
Successfully scheduled deletion for key 0ef066cd-c5f1-4ba7-bb7a-0584c71ffbba
Deletion Date: 2025-06-17 13:23:27.038130+01:00
Key State: PendingDeletion
```

<br>

List aliases.

<br>

```bash
(myenv) $ py sse-kms.py --list-aliases
{'AliasName': 'alias/my-alias-key-1', 'TargetKeyId': '9df113f1-4acd-4b1b-a930-bb2e9a98e124'}
```

<br>

Create alias for a given `KMS` key.

<br>

```bash
(myenv) $ py sse-kms.py --create-alias --alias-name "alias/my-alias-key-2" --key-id 36b362c0-51ca-4236-9ac2-90b7d929b745
Successfully created alias 'alias/my-alias-key-2' for key 36b362c0-51ca-4236-9ac2-90b7d929b745
```

<br>

Now list all aliases again.

<br>

```bash
(myenv) $ py sse-kms.py --list-aliases
{'AliasName': 'alias/my-alias-key-1', 'TargetKeyId': '9df113f1-4acd-4b1b-a930-bb2e9a98e124'}
{'AliasName': 'alias/my-alias-key-2', 'TargetKeyId': '36b362c0-51ca-4236-9ac2-90b7d929b745'}
```

<br>

Upload file to bucket.

You can skip `--bucket sse-kms-encrypted-bucket` and `--file secret-file.txt` as it would upload the default file to the default bucket.

<br>

```bash
(myenv) $ py sse-kms.py --bucket sse-kms-encrypted-bucket --file secret-file.txt --upload
Uploaded secret-file.txt to sse-kms-encrypted-bucket.
```

<br>

Download file locally.

You can skip `--bucket sse-kms-encrypted-bucket` and `--file secret-file.txt` as it would download the default file from the default bucket.

<br>

```bash
(myenv) $ py sse-kms.py --bucket sse-kms-encrypted-bucket --file secret-file.txt --download
File downloaded to 'new_secret-file.txt'
File content: This is a secret file content.
```

<br>

Fetch file meta.

You can skip `--bucket sse-kms-encrypted-bucket` and `--file secret-file.txt` as it would fetch the default file meta from the default bucket.

<br>

```bash
(myenv) $ py sse-kms.py --bucket sse-kms-encrypted-bucket --file secret-file.txt --fetch-file-meta
Object encryption: aws:kms
```

<br>

Fetch bucket meta.

You can skip `--bucket sse-kms-encrypted-bucket` as it would fetch the default bucket meta.

<br>

```bash
(myenv) py sse-kms.py --bucket sse-kms-encrypted-bucket --fetch-bucket-meta
Bucket encryption: aws:kms
```

<br>

Cleanup in the end.

You can skip `--bucket sse-kms-encrypted-bucket` as it would empty the default bucket first and then remove it.

<br>

```bash
(myenv) $ py sse-kms.py --bucket sse-kms-encrypted-bucket --cleanup
Bucket 'sse-kms-encrypted-bucket' deleted successfully
```

<br>

## Using Perl
***

<br>

Now, `Perl` implementation:

File: `sse-kms.pl`

<br>

```perl
#!/usr/bin/env perl

use v5.38;
use Try::Tiny;
use File::Slurp;
use Getopt::Long;
use File::Basename;
use POSIX qw(strftime);

use Paws;
use Paws::Credential::Explicit;

my $REGION         = 'eu-west-1';
my $ENDPOINT       = 'http://localhost:4566';
my $ACCESS_KEY     = 'test';
my $SECRET_KEY     = 'test';
my $DEFAULT_FILE   = 'secret-file.txt';
my $DEFAULT_BUCKET = 'sse-kms-encrypted-bucket';
my $DEFAULT_PENDING_WINDOW_DAYS = 7;

my %opts;
GetOptions(
    'bucket=s'              => \$opts{bucket},
    'file=s'                => \$opts{file},
    'key-id=s'              => \$opts{key_id},
    'pending-window-days=i' => \$opts{pending_window_days},
    'alias-name=s'          => \$opts{alias_name},
    'make-enc-bucket'       => \$opts{make_enc_bucket},
    'desc-key'              => \$opts{desc_key},
    'disable-key'           => \$opts{disable_key},
    'schedule-key-deletion' => \$opts{schedule_key_deletion},
    'list-keys'             => \$opts{list_keys},
    'list-aliases'          => \$opts{list_aliases},
    'create-alias'          => \$opts{create_alias},
    'upload'                => \$opts{upload},
    'download'              => \$opts{download},
    'fetch-file-meta'       => \$opts{fetch_file_meta},
    'fetch-bucket-meta'     => \$opts{fetch_bucket_meta},
    'cleanup'               => \$opts{cleanup},
    'help'                  => \$opts{help},
) or show_help_and_exit(1);

show_help_and_exit(0) if $opts{help};

# Enforce only one action is selected
my @actions = qw/
    make_enc_bucket
    desc_key
    disable_key
    schedule_key_deletion
    list_keys
    list_aliases
    create_alias
    upload download
    fetch_file_meta
    fetch_bucket_meta
    cleanup
/;

my $count = grep { defined $opts{$_} } @actions;
show_help_and_exit(0, "You must specify exactly one of: --" . join(', --', @actions))
    unless $count == 1;

if ($opts{desc_key} and !$opts{key_id}) {
    show_help_and_exit(0, "--desc-key requires --key-id");
}

if ($opts{create_alias} and (!$opts{key_id} or !$opts{alias_name})) {
    show_help_and_exit(0, "--create-alias requires both --key-id and --alias-name");
}

my $s3  = create_client('S3');
my $kms = create_client('KMS');

$opts{bucket} = $DEFAULT_BUCKET unless defined $opts{bucket};
$opts{file}   = $DEFAULT_FILE   unless defined $opts{file};
$opts{pending_window_days} = $DEFAULT_PENDING_WINDOW_DAYS
    unless defined $opts{pending_window_days};

if ($opts{make_enc_bucket}) {
    make_enc_bucket($s3, $kms, $opts{bucket});
}

if ($opts{desc_key}) {
    desc_key($kms, $opts{key_id});
}

if ($opts{disable_key}) {
    disable_key($kms, $opts{key_id});
}

if ($opts{schedule_key_deletion}) {
    schedule_key_deletion($kms, $opts{key_id}, $opts{pending_window_days});
}

if ($opts{list_keys}) {
    list_keys($kms);
}

if ($opts{list_aliases}) {
    list_aliases($kms);
}

if ($opts{create_alias}) {
    create_alias($kms, $opts{key_id}, $opts{alias_name});
}

if ($opts{upload}) {
    upload_file($s3, $opts{bucket}, $opts{file});
}

if ($opts{download}) {
    download_file($s3, $opts{bucket}, $opts{file});
}

if ($opts{fetch_file_meta}) {
    fetch_file_meta($s3, $opts{bucket}, $opts{file});
}

if ($opts{fetch_bucket_meta}) {
    fetch_bucket_meta($s3, $opts{bucket});
}

if ($opts{cleanup}) {
    cleanup($s3, $opts{bucket});
}

#
#
# HELPER SUBROUTINES

sub show_help_and_exit($exit_code, $message=undef) {

    my $help =<<"END_HELP";
usage: $0 [--help] [--bucket BUCKET] [--file FILE]
          [--pending-window-days DAYS] [--alias-name ALIAS_NAME]
          [--make-enc-bucket]
          [--desc-key] [--disable-key] [--schedule-key-deletion]
          [--list-keys] [--list-aliases] [--create-alias]
          [--upload] [--download]
          [--view-file-meta] [--view-bucket-meta]
          [--cleanup]

SSE-KMS Encryption

options:
  --help                     Show this help message and exit
  --bucket BUCKET            Bucket name, default $DEFAULT_BUCKET
  --file FILE                File to upload/download, default $DEFAULT_FILE
  --key-id KEY_ID            KMS key id
  --pending-window-days DAYS Pending window days, default $DEFAULT_PENDING_WINDOW_DAYS
  --alias-name ALIAS_NAME    Alias name
  --make-enc-bucket          Create encrypted bucket
  --desc-key                 Describe key
  --disable-key              Disable key
  --schedule-key-deletion    Schedule key deletion
  --list-keys                List keys
  --list-aliases             List aliases
  --upload                   Upload file
  --download                 Download file
  --fetch-file-meta          Fetch file metadata
  --fetch-bucket-meta        Fetch bucket metadata
  --cleanup                  Remove file and bucket
END_HELP

    $help = "ERROR: $message\n\n$help" if defined $message;
    print $help and exit $exit_code;
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

sub create_client($type) {
    return Paws->service($type,
        region      => $REGION,
        endpoint    => $ENDPOINT,
        credentials => Paws::Credential::Explicit->new(
            access_key => $ACCESS_KEY,
            secret_key => $SECRET_KEY,
        ),
    );
}

sub create_kms_key($kms) {
    return $kms->CreateKey(Description => 'KMS Encryption Key')
               ->KeyMetadata
               ->KeyId;
}

sub make_enc_bucket($s3, $kms, $bucket_name) {
    error_and_die("Missing S3 client.")   unless defined $s3;
    error_and_die("Missing KMS client.")  unless defined $kms;
    error_and_die("Missing bucket name.") unless defined $bucket_name;

    try {
        say "Creating KMS enc bucket: $bucket_name";
        my $key_id = create_kms_key($kms);
        say "Created KMS key: $key_id";

        $s3->CreateBucket(
            Bucket => $bucket_name,
            CreateBucketConfiguration => { LocationConstraint => $REGION },
        );

        say "Bucket $bucket_name created.";

        $s3->PutBucketEncryption(
            Bucket => $bucket_name,
            ServerSideEncryptionConfiguration => {
                Rules => [
                    {
                        ApplyServerSideEncryptionByDefault => {
                            SSEAlgorithm   => 'aws:kms',
                            KMSMasterKeyID => $key_id,
                        }
                    }
                ],
            }
        );

        say "Enabled KMS encryption on $bucket_name using key $key_id.";
    }
    catch {
        error_and_die("Unable to create encrypted bucket: $_");
    };
}

sub desc_key($kms, $key_id) {
    error_and_die("Missing KMS client.") unless defined $kms;
    error_and_die("Missing key id.")     unless defined $key_id;

    try {
        my $response = $kms->DescribeKey(KeyId => $key_id);
        my $metadata = $response->KeyMetadata;

        say "Key Details for $key_id";
        say "ARN: " . $metadata->Arn;
        say "Description: " . ($metadata->Description || 'None');

        my $timestamp = $metadata->CreationDate;
        my ($sec, $msec) = split(/\./, $timestamp);
        my $date_str = strftime('%Y-%m-%d %H:%M:%S', localtime($sec));
        say "Creation Date: $date_str.$msec";
        say "Enabled: " . ($metadata->Enabled ? 'true' : 'false');
        say "Key Usage: " . $metadata->KeyUsage;
        say "Key State: " . $metadata->KeyState;
        say "Origin: " . $metadata->Origin;
    }
    catch {
        my $e = $_;
        if (ref($e) && $e->isa('Paws::Exception')) {
            if ($e->code eq 'NotFoundException') {
                error_and_die("Key $key_id not found");
            } else {
                error_and_die($e->message);
            }
        } else {
            chomp(my $msg = "$e");
            error_and_die("Unexpected error: $msg");
        }
    };
}

sub disable_key($kms, $key_id) {
    error_and_die("Missing KMS client.") unless defined $kms;
    error_and_die("Missing key id.")     unless defined $key_id;

    try {
        my $response = $kms->DisableKey(
            KeyId => $key_id
        );

        say "Successfully disabled key: $key_id";
    }
    catch {
        my $e = $_;

        if (ref($e) && $e->isa('Paws::Exception')) {
            if ($e->code eq 'NotFoundException') {
                error_and_die("Key $key_id not found");
            } elsif ($e->code eq 'AccessDeniedException') {
                error_and_die("Permission denied to disable key $key_id");
            } else {
                error_and_die($e->message);
            }
        }
        else {
            error_and_die("Unable to disable key: $e");
        }
    };
}

sub schedule_key_deletion($kms, $key_id, $pending_window_days=7) {
    error_and_die("Missing KMS client.") unless defined $kms;
    error_and_die("Missing key id.")     unless defined $key_id;

    try {
        my $response = $kms->ScheduleKeyDeletion(
            KeyId               => $key_id,
            PendingWindowInDays => $pending_window_days
        );

        my $timestamp = $response->DeletionDate;
        my ($sec, $msec) = split(/\./, $timestamp);
        my $date_str = strftime('%Y-%m-%d %H:%M:%S', localtime($sec));

        say "Successfully scheduled deletion for key $key_id";
        say "Deletion Date: $date_str.$msec";
        say "Key State: " . $response->KeyState;

        return $response;
    }
    catch {
        my $e = $_;

        if (ref($e) && $e->isa('Paws::Exception')) {
            if ($e->code eq 'NotFoundException') {
                error_and_die("Key $key_id not found");
            } elsif ($e->code eq 'KMSInvalidStateException') {
                error_and_die("Key $key_id is already pending deletion or incompatible");
            } else {
                error_and_die($e->message);
            }
        }
        else {
            error_and_die("Unable to schedule key deletion: $e");
        }
    };
}

sub list_keys($kms, $limit = 100) {
    error_and_die("Missing KMS client.") unless defined $kms;

    try {
        my $marker = '';

        do {
            my $response = $kms->ListKeys(
                Limit  => $limit,
                Marker => $marker,
            );

            foreach my $key (@{$response->Keys}) {
                say "KeyId: " . $key->KeyId;
                say "KeyArn: " . $key->KeyArn;
                say "---";
            }

            $marker = $response->NextMarker;
        } while (defined $marker);
    }
    catch {
        error_and_die("Unable to list keys: $_");
    };
}

sub list_aliases($kms) {
    error_and_die("Missing KMS client.") unless defined $kms;

    try {
        my $response = $kms->ListAliases();

        foreach my $alias (@{$response->Aliases}) {
            say "AliasName: ", $alias->AliasName;
            say "TargetKeyId: ", $alias->TargetKeyId || '';
            say "---";
        }
    }
    catch {
        error_and_die("Unable to list aliases: $_");
    };
}

sub create_alias($kms, $key_id, $alias_name) {
    error_and_die("Missing KMS client.") unless defined $kms;
    error_and_die("Missing key id.")     unless defined $key_id;
    error_and_die("Missing alias name.") unless defined $alias_name;

    try {
        my $response = $kms->CreateAlias(
            AliasName   => $alias_name,
            TargetKeyId => $key_id
        );

        say "Successfully created alias '$alias_name' for key $key_id";
    }
    catch {
        my $e = $_;

        if (ref($e) && $e->isa('Paws::Exception')) {
            if ($e->code eq 'AlreadyExistsException') {
                error_and_die("Alias '$alias_name' already exists");
            } elsif ($e->code eq 'NotFoundException') {
                error_and_die("Key $key_id not found");
            } elsif ($e->code eq 'AccessDeniedException') {
                error_and_die("Permission denied to create alias");
            } else {
                error_and_die($e->message);
            }
        }
        else {
            error_and_die("Unable to create alias: $e");
        }
    };
}

sub upload_file($s3, $bucket_name, $file) {
    error_and_die("Missing S3 client.")   unless defined $s3;
    error_and_die("Missing bucket name.") unless defined $bucket_name;
    error_and_die("Missing file.")        unless defined $file;

    try {
        $file = basename($file);
        say "Uploading file: $file";

        $s3->PutObject(
            Bucket => $bucket_name,
            Key    => $file,
            Body   => read_file($file, binmode => ':raw')
        );

        say "Uploaded $file to $bucket_name.";
    }
    catch {
        error_and_die("Unable to upload file: $_");
    };
}

sub download_file($s3, $bucket_name, $file) {
    error_and_die("Missing S3 client.")   unless defined $s3;
    error_and_die("Missing bucket name.") unless defined $bucket_name;
    error_and_die("Missing file.")        unless defined $file;

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
        error_and_die("Unable to download file: $_");
    };
}

sub fetch_file_meta($s3, $bucket_name, $file) {
    error_and_die("Missing S3 client.")   unless defined $s3;
    error_and_die("Missing bucket name.") unless defined $bucket_name;
    error_and_die("Missing file.")        unless defined $file;

    try {
        $file = basename($file);
        my $head = $s3->HeadObject(
            Bucket => $bucket_name,
            Key    => $file
        );

        say "Object encryption: ", ($head->ServerSideEncryption // 'None');
    }
    catch {
        error_and_die("Unable to view file meta: $_");
    };
}

sub fetch_bucket_meta($s3, $bucket_name) {
    error_and_die("Missing S3 client.")   unless defined $s3;
    error_and_die("Missing bucket name.") unless defined $bucket_name;

    try {
        my $encryption = $s3->GetBucketEncryption(Bucket => $bucket_name);

        say "Bucket enc configuration:";
        my $config = $encryption->ServerSideEncryptionConfiguration;
        foreach my $rule (@{ $config->Rules }) {
            my $default = $rule->ApplyServerSideEncryptionByDefault;
            say "  SSE Algorithm: ", $default->SSEAlgorithm;
            say "  KMS Key ID: ", ($default->KMSMasterKeyID // 'N/A');
        }
    }
    catch {
        error_and_die("Unable to view bucket meta: $_");
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
        error_and_die("Unable to cleanup: $_");
    };
}
```

<br>

Time to test the code.

<br>

```bash
$ perl sse-kms.pl -h
usage: sse-kms.pl [--help] [--bucket BUCKET] [--file FILE]
          [--pending-window-days DAYS] [--alias-name ALIAS_NAME]
          [--make-enc-bucket]
          [--desc-key] [--disable-key] [--schedule-key-deletion]
          [--list-keys] [--list-aliases] [--create-alias]
          [--upload] [--download]
          [--view-file-meta] [--view-bucket-meta]
          [--cleanup]

SSE-KMS Encryption

options:
  --help                     Show this help message and exit
  --bucket BUCKET            Bucket name, default sse-kms-encrypted-bucket
  --file FILE                File to upload/download, default secret-file.txt
  --key-id KEY_ID            KMS key id
  --pending-window-days DAYS Pending window days, default 7
  --alias-name ALIAS_NAME    Alias name
  --make-enc-bucket          Create encrypted bucket
  --desc-key                 Describe key
  --disable-key              Disable key
  --schedule-key-deletion    Schedule key deletion
  --list-keys                List keys
  --list-aliases             List aliases
  --upload                   Upload file
  --download                 Download file
  --fetch-file-meta          Fetch file metadata
  --fetch-bucket-meta        Fetch bucket metadata
  --cleanup                  Remove file and bucket
```

<br>

Create encrypted bucket.

You can skip `--bucket sse-kms-encrypted-bucket` and it would create the default bucket.

<br>

```bash
$ perl sse-kms.pl --bucket sse-kms-encrypted-bucket --make-enc-bucket
Creating KMS enc bucket: sse-kms-encrypted-bucket
Created KMS key: 3a934579-7f29-474c-8459-8a9f749ece3d
Bucket sse-kms-encrypted-bucket created.
Enabled KMS encryption on sse-kms-encrypted-bucket using key 3a934579-7f29-474c-8459-8a9f749ece3d.
```

<br>

List `KMS keys`.

<br>

```bash
$ perl sse-kms.pl --list-keys
KeyId: 9df113f1-4acd-4b1b-a930-bb2e9a98e124
KeyArn: arn:aws:kms:eu-west-1:000000000000:key/9df113f1-4acd-4b1b-a930-bb2e9a98e124
---
KeyId: 0ef066cd-c5f1-4ba7-bb7a-0584c71ffbba
KeyArn: arn:aws:kms:eu-west-1:000000000000:key/0ef066cd-c5f1-4ba7-bb7a-0584c71ffbba
---
KeyId: 3a934579-7f29-474c-8459-8a9f749ece3d
KeyArn: arn:aws:kms:eu-west-1:000000000000:key/3a934579-7f29-474c-8459-8a9f749ece3d
---
KeyId: 4cda3ec5-25a2-4146-a700-86bc54d94d48
KeyArn: arn:aws:kms:eu-west-1:000000000000:key/4cda3ec5-25a2-4146-a700-86bc54d94d48
---
KeyId: e17a3030-f92c-4eda-99d2-3826df75fa86
KeyArn: arn:aws:kms:eu-west-1:000000000000:key/e17a3030-f92c-4eda-99d2-3826df75fa86
---
KeyId: 66da75e5-37f9-41dd-a3d5-2a2a3fdf57d2
KeyArn: arn:aws:kms:eu-west-1:000000000000:key/66da75e5-37f9-41dd-a3d5-2a2a3fdf57d2
---
KeyId: 576243cb-2b52-490e-b707-711809874859
KeyArn: arn:aws:kms:eu-west-1:000000000000:key/576243cb-2b52-490e-b707-711809874859
---
KeyId: 50631fb0-74fa-4f4b-a2e5-c11be97701b7
KeyArn: arn:aws:kms:eu-west-1:000000000000:key/50631fb0-74fa-4f4b-a2e5-c11be97701b7
---
KeyId: 2913238b-370f-4dfd-940e-3245fce10fa4
KeyArn: arn:aws:kms:eu-west-1:000000000000:key/2913238b-370f-4dfd-940e-3245fce10fa4
---
KeyId: 36b362c0-51ca-4236-9ac2-90b7d929b745
KeyArn: arn:aws:kms:eu-west-1:000000000000:key/36b362c0-51ca-4236-9ac2-90b7d929b745
---
KeyId: f0994797-acfb-45b1-b9ee-0f7191adf50c
KeyArn: arn:aws:kms:eu-west-1:000000000000:key/f0994797-acfb-45b1-b9ee-0f7191adf50c
---
KeyId: 817fdffb-46df-47ad-973c-f6f2b7f665fc
KeyArn: arn:aws:kms:eu-west-1:000000000000:key/817fdffb-46df-47ad-973c-f6f2b7f665fc
---
KeyId: 8910801e-1184-4eb4-8f8a-7d33a4110282
KeyArn: arn:aws:kms:eu-west-1:000000000000:key/8910801e-1184-4eb4-8f8a-7d33a4110282
---
KeyId: 7db86d2b-4de5-4c6e-b482-9f7fcc95dc55
KeyArn: arn:aws:kms:eu-west-1:000000000000:key/7db86d2b-4de5-4c6e-b482-9f7fcc95dc55
---
```

<br>

Describe a key.

<br>

```bash
$ perl sse-kms.pl --desc-key --key-id 66da75e5-37f9-41dd-a3d5-2a2a3fdf57d2
Key Details for 66da75e5-37f9-41dd-a3d5-2a2a3fdf57d2
ARN: arn:aws:kms:eu-west-1:000000000000:key/66da75e5-37f9-41dd-a3d5-2a2a3fdf57d2
Description: Auto-created key for KMS encryption
Creation Date: 2025-06-04 14:43:52.08327
Enabled: true
Key Usage: ENCRYPT_DECRYPT
Key State: Enabled
Origin: AWS_KMS
```

<br>

Disable a key.

<br>

```bash
$ perl sse-kms.pl --disable-key --key-id 66da75e5-37f9-41dd-a3d5-2a2a3fdf57d2
Successfully disabled key: 66da75e5-37f9-41dd-a3d5-2a2a3fdf57d2
```

<br>

Check the status post disabling key.

<br>

```bash
$ perl sse-kms.pl --desc-key --key-id 66da75e5-37f9-41dd-a3d5-2a2a3fdf57d2
Key Details for 66da75e5-37f9-41dd-a3d5-2a2a3fdf57d2
ARN: arn:aws:kms:eu-west-1:000000000000:key/66da75e5-37f9-41dd-a3d5-2a2a3fdf57d2
Description: Auto-created key for KMS encryption
Creation Date: 2025-06-04 14:43:52.08327
Enabled: false
Key Usage: ENCRYPT_DECRYPT
Key State: Disabled
Origin: AWS_KMS
```

<br>

Schedule deletion of disabled key.

<br>

```bash
$ perl sse-kms.pl --schedule-key-deletion --key-id 66da75e5-37f9-41dd-a3d5-2a2a3fdf57d2
Successfully scheduled deletion for key 66da75e5-37f9-41dd-a3d5-2a2a3fdf57d2
Deletion Date: 2025-06-17 17:27:42.32577
Key State: PendingDeletion
```

<br>

List aliases.

<br>

```bash
$ perl sse-kms.pl --list-aliases
AliasName: alias/my-alias-key-1
TargetKeyId: 9df113f1-4acd-4b1b-a930-bb2e9a98e124
---
AliasName: alias/my-alias-key-2
TargetKeyId: 36b362c0-51ca-4236-9ac2-90b7d929b745
---
```

<br>

Create alias for a given `KMS` key.

<br>

```bash
$ perl sse-kms.pl --create-alias --alias-name "alias/my-alias-key-3"  --key-id 4cda3ec5-25a2-4146-a700-86bc54d94d48
Successfully created alias 'alias/my-alias-key-3' for key 4cda3ec5-25a2-4146-a700-86bc54d94d48
```

<br>

Now list all aliases again.

<br>

```bash
$ perl sse-kms.pl --list-aliases
AliasName: alias/my-alias-key-1
TargetKeyId: 9df113f1-4acd-4b1b-a930-bb2e9a98e124
---
AliasName: alias/my-alias-key-2
TargetKeyId: 36b362c0-51ca-4236-9ac2-90b7d929b745
---
AliasName: alias/my-alias-key-3
TargetKeyId: 4cda3ec5-25a2-4146-a700-86bc54d94d48
---
```

<br>

Upload file to bucket.

You can skip `--bucket sse-kms-encrypted-bucket` and `--file secret-file.txt` as it would upload the default file to the default bucket.

<br>

```bash
$ perl sse-kms.pl --bucket sse-kms-encrypted-bucket --file secret-file.txt --upload
Uploading file: secret-file.txt
Uploaded secret-file.txt to sse-kms-encrypted-bucket.
```

<br>

Download file locally.

You can skip `--bucket sse-kms-encrypted-bucket` and `--file secret-file.txt` as it would download the default file from the default bucket.

<br>

```bash
$ perl sse-kms.pl --bucket sse-kms-encrypted-bucket --file secret-file.txt --download
Downloaded content: This is a secret file content.
```

<br>

Fetch file meta.

You can skip `--bucket sse-kms-encrypted-bucket` and `--file secret-file.txt` as it would fetch the default file meta from the default bucket.

<br>

```bash
$ perl sse-kms.pl --bucket sse-kms-encrypted-bucket --file secret-file.txt --fetch-file-meta
Object encryption: aws:kms
```

<br>

Fetch bucket meta.

You can skip `--bucket sse-kms-encrypted-bucket` as it would fetch the default bucket meta.

<br>

```bash
$ perl sse-kms.pl --bucket sse-kms-encrypted-bucket --fetch-bucket-meta
Bucket enc configuration:
  SSE Algorithm: aws:kms
  KMS Key ID: 3a934579-7f29-474c-8459-8a9f749ece3d
```

<br>

Cleanup in the end.

You can skip `--bucket sse-kms-encrypted-bucket` as it would empty the default bucket first and then remove it.

<br>

```bash
$ perl sse-kms.pl --bucket sse-kms-encrypted-bucket --cleanup
 Delete key: secret-file.txt
Bucket 'sse-kms-encrypted-bucket' deleted successfully.
```

<br>

## What next?
***

The next post would be about `Server-Side Encryption` using `Client Managed Keys`.

***

<br>

`Happy Hacking !!!`
