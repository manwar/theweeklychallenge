---
title: "AWS Lambda"
date: 2025-08-05T00:00:00+00:00
description: "Discussion about AWS Lambda."
type: post
image: images/blog/aws-lambda.jpg
author: Mohammad Sajid Anwar
tags: ["perl", "python", "aws", "localstack"]
---

#### **DISCLAIMER:** Image is generated using `ChatGPT`.
<br>

### [1. Introduction](#introduction)
### [2. Lambda Function](#lambda-function)
### [3. Using aws](#using-aws)
### [4. Using Python](#using-python)
### [5. Using Perl](#using-perl)

<br>

## Introduction
***

<br>

This post came nearly after a month and half. The last post about `AWS` related topic was about [**AWS DynamoDB**](/blog/aws-dynamodb). The break wasn't intended, though.

`AWS Lambda` is a serverless compute service that allows you to run code without having to manage servers. You simply upload your code and `Lambda` takes care of the scaling, patching and execution, charging you only for the duration your code is executed.

It would be like hiring a chef that cooks when you request them, cleans up when they are done and charges you only for the minutes that they actually cook.

<br>

## Lambda Function
***

<br>

For the purpose of this post, let's create basic `Lambda` function in `Python`.

**File:** `lambda_function.py`

<br>

```python
def handler(event, context):
    return {
        "statusCode": 200,
        "body": "Hello from Lambda!",
        "headers": {"Content-Type": "text/plain"}
    }
```

<br>

`AWS Lambda` requires code packages to be uploaded in a compressed archive format,  typically a `.zip` file.

<br>

```bash
$ zip lambda_function.zip lambda_function.py
```

<br>

## Using aws
***

<br>

Let's create `AWS Lambda` function as below:

<br>

```bash
(myenv) $ aws lambda create-function \
    --function-name my-local-lambda \
    --runtime python3.9 \
    --handler lambda_function.handler \
    --zip-file fileb://lambda_function.zip \
    --role arn:aws:iam::000000000000:role/lambda-role
```

<br>

You should see detailed response as below:

<br>

```bash
{
    "FunctionName": "my-local-lambda",
    "FunctionArn": "arn:aws:lambda:eu-west-1:000000000000:function:my-local-lambda",
    "Runtime": "python3.9",
    "Role": "arn:aws:iam::000000000000:role/lambda-role",
    "Handler": "lambda_function.handler",
    "CodeSize": 309,
    "Description": "",
    "Timeout": 3,
    "MemorySize": 128,
    "LastModified": "2025-08-05T21:35:58.309347+0000",
    "CodeSha256": "KjcYzGqZ2FlY/x0/mU4Sq5bk2kZ3mcUQp9Mq69D/3ms=",
    "Version": "$LATEST",
    "TracingConfig": {
        "Mode": "PassThrough"
    },
    "RevisionId": "4352d333-bceb-49cd-84e0-a9cf6cd7f421",
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
    "RuntimeVersionConfig": {
        "RuntimeVersionArn": "arn:aws:lambda:eu-west-1::runtime:8eeff65f6809a3ce81507fe733fe09b835899b99481ba22fd75b5a7338290ec1"
    },
    "LoggingConfig": {
        "LogFormat": "Text",
        "LogGroup": "/aws/lambda/my-local-lambda"
    }
}
```

<br>

The most important bit in the response is `"State": "Pending"`.

An `AWS Lambda` function typically becomes active within a few seconds after creation, often under `10 seconds`, but it depends on how you're deploying it and what it's doing.

We check the status like below:

<br>

```bash
(myenv) $ aws lambda get-function --function-name my-local-lambda
{
    "Configuration": {
        "FunctionName": "my-local-lambda",
        "FunctionArn": "arn:aws:lambda:eu-west-1:000000000000:function:my-local-lambda",
        "Runtime": "python3.9",
        "Role": "arn:aws:iam::000000000000:role/lambda-role",
        "Handler": "lambda_function.handler",
        "CodeSize": 309,
        "Description": "",
        "Timeout": 3,
        "MemorySize": 128,
        "LastModified": "2025-08-05T21:35:58.309347+0000",
        "CodeSha256": "KjcYzGqZ2FlY/x0/mU4Sq5bk2kZ3mcUQp9Mq69D/3ms=",
        "Version": "$LATEST",
        "TracingConfig": {
            "Mode": "PassThrough"
        },
        "RevisionId": "3081467c-a0ea-48a4-89fd-70dad2b85be2",
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
        "RuntimeVersionConfig": {
            "RuntimeVersionArn": "arn:aws:lambda:eu-west-1::runtime:8eeff65f6809a3ce81507fe733fe09b835899b99481ba22fd75b5a7338290ec1"
        },
        "LoggingConfig": {
            "LogFormat": "Text",
            "LogGroup": "/aws/lambda/my-local-lambda"
        }
    },
    "Code": {
        "RepositoryType": "S3",
        "Location": "http://s3.localhost.localstack.cloud:4566/awslambda-eu-west-1-tasks/snapshots/000000000000/my-local-lambda-e26b1bca-22be-4475-b0f8-60ce302b2524?AWSAccessKeyId=949334387222&Signature=BS5glQ8FG3sUB2OEXLLhGsumRrc%3D&Expires=1754433611"
    }
}
```

<br>

The function is now in active state as confirmed above.

Time to invoke the function.

<br>

```bash
(myenv) $ aws lambda invoke --function-name my-local-lambda output.json
```

<br>

Let's check the `output.json`.

<br>

```bash
(myenv) $ cat output.json
{"statusCode": 200, "body": "Hello from Lambda!", "headers": {"Content-Type": "text/plain"}}
```

<br>

## Using Python
***

<br>

Let's repeat the process using `Python`.

Here we will provide the script, `lambda_function.py` as input and we would zip it first, followed by deploy and invoke.

The following function to zip lambda file.

<br>

```python
def zip_lambda_file(lambda_script):
    if not os.path.exists(lambda_script):
        raise FileNotFoundError(f"Lambda script '{lambda_script}' not found")

    zip_filename = f"{os.path.splitext(lambda_script)[0]}.zip"
    with zipfile.ZipFile(zip_filename, 'w') as zipf:
        zipf.write(lambda_script, os.path.basename(lambda_script))
    return zip_filename
```

<br>

Now the function to deploy lambda function. Please note, it deletes the function first, if already deployed then deploy it fresh.

<br>

```python
def deploy_lambda_function(lambda_client, lambda_script, function_name, handler_name, runtime='python3.9'):
    zip_filename = zip_lambda_file(lambda_script)

    try:
        lambda_client.delete_function(FunctionName=function_name)
        print(f"Deleted existing function: {function_name}")
    except ClientError as e:
        if e.response['Error']['Code'] != 'ResourceNotFoundException':
            raise

    with open(zip_filename, 'rb') as f:
        try:
            response = lambda_client.create_function(
                FunctionName=function_name,
                Runtime=runtime,
                Handler=f"{os.path.splitext(lambda_script)[0]}.{handler_name}",
                Role='arn:aws:iam::000000000000:role/lambda-role',
                Code={'ZipFile': f.read()}
            )
            print(f"Successfully created function: {function_name}")

            return response
        except ClientError as e:
            print(f"Failed to create function: {e}")
            raise
```

<br>

To handle the function state, here is the function to wait until it become active.

<br>

```python
def wait_for_lambda_active(lambda_client, function_name, max_retries=10, delay=1):
    for _ in range(max_retries):
        try:
            response = lambda_client.get_function_configuration(
                FunctionName=function_name
            )
            if response['State'] == 'Active':
                return True
            time.sleep(delay)
        except ClientError as e:
            print(f"Waiting for function to become active... (Current state: {response.get('State', 'Unknown')})")
            if e.response['Error']['Code'] == 'ResourceNotFoundException':
                raise
    raise TimeoutError(f"Function {function_name} did not become active within {max_retries * delay} seconds")
```

<br>

Finally the function to invoke the lambda function.

<br>

```python
def invoke_lambda_function(lambda_client, function_name):
    lambda_client = boto3.client('lambda')
    try:
        response = lambda_client.invoke(
            FunctionName=function_name,
            Payload=b'{}',
            InvocationType='RequestResponse'
        )
        output = response['Payload'].read().decode('utf-8')
        print(f"Lambda invocation output:\n{output}")
        return output
    except ClientError as e:
        print(f"Failed to invoke function: {e}")
        raise
```

<br>

We are almost ready, here is the complete script: `run-lambda.py`.

<br>

```python
import argparse
import boto3
import zipfile
import os
import sys
import time
from botocore.exceptions import ClientError

def zip_lambda_file(lambda_script):
    if not os.path.exists(lambda_script):
        raise FileNotFoundError(f"Lambda script '{lambda_script}' not found")

    zip_filename = f"{os.path.splitext(lambda_script)[0]}.zip"
    with zipfile.ZipFile(zip_filename, 'w') as zipf:
        zipf.write(lambda_script, os.path.basename(lambda_script))
    return zip_filename

def wait_for_lambda_active(lambda_client, function_name, max_retries=10, delay=1):
    for _ in range(max_retries):
        try:
            response = lambda_client.get_function_configuration(
                FunctionName=function_name
            )
            if response['State'] == 'Active':
                return True
            time.sleep(delay)
        except ClientError as e:
            print(f"Waiting for function to become active: (Current state: {response.get('State', 'Unknown')})")
            if e.response['Error']['Code'] == 'ResourceNotFoundException':
                raise
    raise TimeoutError(f"Function {function_name} did not become active within {max_retries * delay} seconds")

def deploy_lambda_function(lambda_client, lambda_script, function_name, handler_name, runtime='python3.9'):
    zip_filename = zip_lambda_file(lambda_script)

    try:
        lambda_client.delete_function(FunctionName=function_name)
        print(f"Deleted existing function: {function_name}")
    except ClientError as e:
        if e.response['Error']['Code'] != 'ResourceNotFoundException':
            raise

    with open(zip_filename, 'rb') as f:
        try:
            response = lambda_client.create_function(
                FunctionName=function_name,
                Runtime=runtime,
                Handler=f"{os.path.splitext(lambda_script)[0]}.{handler_name}",
                Role='arn:aws:iam::000000000000:role/lambda-role',
                Code={'ZipFile': f.read()}
            )
            print(f"Successfully created function: {function_name}")

            print("Waiting for function to become active...")
            wait_for_lambda_active(lambda_client, function_name)
            return response
        except ClientError as e:
            print(f"Failed to create function: {e}")
            raise

def invoke_lambda_function(lambda_client, function_name):
    lambda_client = boto3.client('lambda')
    try:
        response = lambda_client.invoke(
            FunctionName=function_name,
            Payload=b'{}',
            InvocationType='RequestResponse'
        )
        output = response['Payload'].read().decode('utf-8')
        print(f"Lambda invocation output:\n{output}")
        return output
    except ClientError as e:
        print(f"Failed to invoke function: {e}")
        raise

def main():
    parser = argparse.ArgumentParser(description='Deploy and invoke AWS Lambda function')
    parser.add_argument('lambda_script',
                       help='Path to the Lambda Python script')
    parser.add_argument('--function-name', default='my-local-lambda',
                       help='Name of the Lambda function (default: my-local-lambda)')
    parser.add_argument('--handler', default='handler',
                       help='Name of the handler function (default: handler)')
    args = parser.parse_args()
    lambda_client = boto3.client('lambda')

    try:
        deploy_lambda_function(
            lambda_client,
            args.lambda_script,
            args.function_name,
            args.handler
        )
        wait_for_lambda_active(lambda_client, args.function_name)
        invoke_lambda_function(lambda_client, args.function_name)
    except Exception as e:
        print(f"Error: {e}", file=sys.stderr)
        sys.exit(1)

if __name__ == '__main__':
    main()
```

<br>

This is how the interface looks like:

<br>

```bash
(myenv) $ py run-lambda.py --help
usage: run-lambda.py [-h] [--function-name FUNCTION_NAME] [--handler HANDLER] lambda_script

Deploy and invoke AWS Lambda function

positional arguments:
  lambda_script         Path to the Lambda Python script

options:
  -h, --help            show this help message and exit
  --function-name FUNCTION_NAME
                        Name of the Lambda function (default: my-local-lambda)
  --handler HANDLER     Name of the handler function (default: handler)
```

<br>

Time for some action:

<br>

```bash
(myenv) $ py run-lambda.py lambda_function.py
Successfully created function: my-local-lambda
Waiting for function to become active:
Lambda invocation output:
{"statusCode": 200, "body": "Hello from Lambda!", "headers": {"Content-Type": "text/plain"}}
```

<br>

## Using Perl
***

<br>

Finally time to repeat the process in `Perl` now.

As before, here is function to zip the lambda function file.

<br>

```perl
sub zip_lambda_file {
    my ($script_path) = @_;

    die "Lambda script '$script_path' not found" unless -e $script_path;

    my ($name, $path, $suffix) = fileparse($script_path, qr/\.[^.]*/);
    my $zip_filename = $name . '.zip';

    my $zip = Archive::Zip->new();
    $zip->addFile($script_path, basename($script_path))
        or die "Failed to add file to zip: $!";

    unless ($zip->writeToFileNamed($zip_filename) == AZ_OK) {
        die "Failed to create zip file: $!";
    }

    return $zip_filename;
}
```

<br>

Now the function to deploy lambda.

<br>

```perl
sub deploy_function {
    my ($lambda_client, $script_path, $function_name, $handler_name) = @_;

    my $zip_file    = zip_lambda_file($script_path);
    my $zip_content = read_zip_file($zip_file);

    try {
        $lambda_client->DeleteFunction(FunctionName => $function_name);
        print "Deleted existing function: $function_name\n";
    } catch {
        unless ($_->isa('Paws::Exception') && $_->code eq 'ResourceNotFoundException') {
            die "Error deleting function: $_";
        }
        print "No existing function to delete\n";
    };

    my ($base_name) = fileparse($script_path, qr/\.[^.]*/);
    my $handler     = "$base_name.$handler_name";

    try {
        my $response = $lambda_client->CreateFunction(
            FunctionName => $function_name,
            Runtime      => $config->{runtime},
            Handler      => $handler,
            Role         => $config->{role_arn},
            Code         => { ZipFile => $zip_content }  # <-- FIXED HERE
        );

        print "Successfully created function: $function_name\n";
        return $response;
    } catch {
        die "Failed to create function: $_\n";
    };
}

sub zip_lambda_file {
    my ($script_path) = @_;

    die "Lambda script '$script_path' not found" unless -e $script_path;

    my ($name, $path, $suffix) = fileparse($script_path, qr/\.[^.]*/);
    my $zip_filename = $name . '.zip';

    my $zip = Archive::Zip->new();
    $zip->addFile($script_path, basename($script_path))
        or die "Failed to add file to zip: $!";

    unless ($zip->writeToFileNamed($zip_filename) == AZ_OK) {
        die "Failed to create zip file: $!";
    }

    return $zip_filename;
}
```

<br>

Last but not least, function to invoke the lambda.

<br>

```perl
sub invoke_function {
    my ($lambda_client, $function_name) = @_;

    sleep 2;

    try {
        my $response = $lambda_client->Invoke(
            FunctionName   => $function_name,
            Payload        => '{}',
            InvocationType => 'RequestResponse'
        );

        my $output = $response->Payload;
        print "Lambda invocation output:\n$output\n";
        return decode_json($output) if $output =~ /^{/;
        return $output;
    } catch {
        die "Failed to invoke function: $_\n";
    };
}
```

<br>

The complete source file: `run-lambda.pl`

<br>


```perl
#!/usr/bin/perl

use strict;
use warnings;
use Archive::Zip qw(:ERROR_CODES :CONSTANTS);
use File::Basename;
use File::Spec;
use Try::Tiny;
use Getopt::Long;
use JSON;
use MIME::Base64 ();

use Paws;

my $config = {
    function_name => 'my-local-lambda',
    handler       => 'handler',
    runtime       => 'python3.9',
    role_arn      => 'arn:aws:iam::000000000000:role/lambda-role',
    endpoint      => 'http://localhost:4566',
    region        => 'eu-west-1',
    max_retries   => 5,
    retry_delay   => 1
};

my $lambda = Paws->service('Lambda',
    region      => $config->{region},
    endpoint    => $config->{endpoint},
    retries     => $config->{max_retries},
);

my %options = (
    'function-name=s' => \$config->{function_name},
    'handler=s'       => \$config->{handler},
    'help|h'          => \my $help
);

GetOptions(%options) or die "Error in command line arguments\n";

if ($help) {
    print <<"END_USAGE";
Usage: $0 <script-file> [options]
Options:
    --function-name NAME  Set Lambda function name
    --handler NAME        Set handler name
    -h, --help            Show this help message and exit
END_USAGE
    exit;
}

my $script_file = shift @ARGV or die "Please specify a Lambda script file\n";

try {
    my $response = deploy_function(
        $lambda,
        $script_file,
        $config->{function_name},
        $config->{handler}
    );

    invoke_function($lambda, $config->{function_name});
} catch {
    print STDERR "Error: $_\n";
    exit 1;
};

#
#
# SUBROUTINES

sub zip_lambda_file {
    my ($script_path) = @_;

    die "Lambda script '$script_path' not found" unless -e $script_path;

    my ($name, $path, $suffix) = fileparse($script_path, qr/\.[^.]*/);
    my $zip_filename = $name . '.zip';

    my $zip = Archive::Zip->new();
    $zip->addFile($script_path, basename($script_path))
        or die "Failed to add file to zip: $!";

    unless ($zip->writeToFileNamed($zip_filename) == AZ_OK) {
        die "Failed to create zip file: $!";
    }

    return $zip_filename;
}

sub read_zip_file {
    my ($zip_file) = @_;
    open(my $fh, '<:raw', $zip_file) or die "Cannot open zip file: $!";
    my $content = do { local $/; <$fh> };
    close($fh);
    return MIME::Base64::encode_base64($content, '');
}

sub deploy_function {
    my ($lambda_client, $script_path, $function_name, $handler_name) = @_;

    my $zip_file    = zip_lambda_file($script_path);
    my $zip_content = read_zip_file($zip_file);

    try {
        $lambda_client->DeleteFunction(FunctionName => $function_name);
        print "Deleted existing function: $function_name\n";
    } catch {
        unless ($_->isa('Paws::Exception') && $_->code eq 'ResourceNotFoundException') {
            die "Error deleting function: $_";
        }
        print "No existing function to delete\n";
    };

    my ($base_name) = fileparse($script_path, qr/\.[^.]*/);
    my $handler     = "$base_name.$handler_name";

    try {
        my $response = $lambda_client->CreateFunction(
            FunctionName => $function_name,
            Runtime      => $config->{runtime},
            Handler      => $handler,
            Role         => $config->{role_arn},
            Code         => { ZipFile => $zip_content }  # <-- FIXED HERE
        );

        print "Successfully created function: $function_name\n";
        return $response;
    } catch {
        die "Failed to create function: $_\n";
    };
}

sub invoke_function {
    my ($lambda_client, $function_name) = @_;

    sleep 2;

    try {
        my $response = $lambda_client->Invoke(
            FunctionName   => $function_name,
            Payload        => '{}',
            InvocationType => 'RequestResponse'
        );

        my $output = $response->Payload;
        print "Lambda invocation output:\n$output\n";
        return decode_json($output) if $output =~ /^{/;
        return $output;
    } catch {
        die "Failed to invoke function: $_\n";
    };
}
```

<br>

Here is the interface looks like below:

<br>

```bash
$ perl run-lambda.pl -h
Usage: run-lambda.pl <script-file> [options]
Options:
    --function-name NAME  Set Lambda function name
    --handler NAME        Set handler name
    -h, --help            Show this help message and exit
```

<br>

Action time now:

<br>

```bash
$ perl run-lambda.pl lambda_function.py
Deleted existing function: my-local-lambda
Successfully created function: my-local-lambda
Lambda invocation output:
{"statusCode": 200, "body": "Hello from Lambda!", "headers": {"Content-Type": "text/plain"}}
```

<br>

***

<br>

`Happy Hacking !!!`
