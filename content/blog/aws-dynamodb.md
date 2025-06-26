---
title: "AWS DynamoDB"
date: 2025-06-25T00:00:00+00:00
description: "Discussion about AWS DynamoDB."
type: post
image: images/blog/aws-dynamodb.jpg
author: Mohammad Sajid Anwar
tags: ["aws", "dynamodb"]
---

#### **DISCLAIMER:** Image is generated using `ChatGPT`.
<br>

### [1. Introduction](#introduction)
### [2. DynamoDB Structure](#dynamodb-structure)
### [3. Setup LocalStack](#setup-localstack)
### [4. Using CLI](#using-cli)
### [5. Using Python](#using-python)
### [6. Using Perl](#using-perl)

<br>

## Introduction
***

<br>

`AWS DynamoDB` is a fully managed `NoSQL` database service provided by `AWS`.

It is designed for high availability, scalability and low-latency performance.

It is a popular choice for modern applications that require fast and flexible data storage.

Unlike traditional relational databases, `DynamoDB` is schemaless, meaning it does not require a fixed table structure.

`DynamoDB` can handle millions of requests per second by distributing data across multiple servers.

`Horizontal` scaling refers to adding more machines or nodes to a system to handle increased load, rather than upgrading a single machine, which is `Vertical` scaling.

`AWS DynamoDB` supports automatic horizontal scaling.

<br>

## DynamoDB Structure
***

<br>

In `DynamoDB`, each table has a `primary key` that is composed of one or two parts: `Partition Key (HASH key)` and `Sort Key (RANGE key)`

There are two types of `primary keys` in `DynamoDB`.

<br>

### 1. Simple Primary Key

<br>

It consists of single attribute (partition key). It is used to distribute data across partitions.

<br>

### 2. Composite Primary Key

<br>

It consists of two attributes: `Partition Key` and `Sort Key`.

`Partition Key` determines the physical storage partition and `Sort Key` orders items within the same partition.

The `key-schema` is used to define the primary key (`partition key` and `sort key`).

The `attribute-definitions` is used to define the data types of the attributes in the table.

Optionally, we can create `Global Secondary Indexes` which helps to query the data using different attributes.

<br>

## Setup LocalStack
***

<br>

As always being a `Docker` fan, I am using this docker compose configuration to start the `LocalStack` container.

<br>

```bash
$ cat docker-compose.yml
version: '3.8'

services:
  localstack:
    image: localstack/localstack
    container_name: localstack
    ports:
      - "4566:4566"
      - "4510-4559:4510-4559"
    environment:
      - LAMBDA_EXECUTOR=docker
      - HOST_TMP_FOLDER=/host_tmp
      - LOCALSTACK_S3_STRICT_ENCRYPTION=1
      - SERVICES=s3,ec2,lambda,sts,iam,apigateway,logs,kinesis,dynamodb
      - LAMBDA_RUNTIME_ENVIRONMENT_TIMEOUT=60
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - localstack_localstack_data:/var/lib/localstack
      - /tmp/localstack_host:/host_tmp

volumes:
  localstack_localstack_data:
```

<br>

Start the container, do this:

<br>

```bash
$ docker-compose up -d
```

<br>

## Using CLI
***

<br>

For demo purpose, lets create table `Users` with attributes `id`, `name`, `age` and `sex`. We'll make `id` as primary key.

<br>

### Create Table

<br>

```bash
$ aws dynamodb create-table \
    --table-name Users \
    --billing-mode PAY_PER_REQUEST \
    --attribute-definitions \
        AttributeName=id,AttributeType=S \
        AttributeName=name,AttributeType=S \
        AttributeName=age,AttributeType=N \
        AttributeName=sex,AttributeType=S \
    --key-schema AttributeName=id,KeyType=HASH \
    --global-secondary-indexes \
        '[
            {
                "IndexName": "NameIndex",
                "KeySchema": [{"AttributeName": "name", "KeyType": "HASH"}],
                "Projection": {"ProjectionType": "ALL"}
            },
            {
                "IndexName": "AgeIndex",
                "KeySchema": [{"AttributeName": "age", "KeyType": "HASH"}],
                "Projection": {"ProjectionType": "ALL"}
            },
            {
                "IndexName": "SexIndex",
                "KeySchema": [{"AttributeName": "sex", "KeyType": "HASH"}],
                "Projection": {"ProjectionType": "ALL"}
            }
        ]'
```

<br>

### List Tables

<br>

To list all the tables in `DynamoDB`, try this:

<br>

```bash
$ aws dynamodb list-tables --output text
TABLENAMES      Users
```

<br>

### Describe Table

<br>

To describe table definition, try this:

<br>

```bash
$ aws dynamodb describe-table --table-name Users
{
    "Table": {
        "AttributeDefinitions": [
            {
                "AttributeName": "id",
                "AttributeType": "S"
            },
            {
                "AttributeName": "name",
                "AttributeType": "S"
            },
            {
                "AttributeName": "age",
                "AttributeType": "N"
            },
            {
                "AttributeName": "sex",
                "AttributeType": "S"
            }
        ],
        "TableName": "Users",
        "KeySchema": [
            {
                "AttributeName": "id",
                "KeyType": "HASH"
            }
        ],
        ...
        ...
        ...
    }
}
```

<br>

### Add Item

<br>

Add items to the table. I am using the most basic form here.

We are adding three items as below:

<br>

```bash
$ aws dynamodb put-item \
  --table-name Users \
  --item '{
     "id": {"S": "1"},
     "name": {"S": "Joe"},
     "age": {"N": "23"},
     "sex": {"S": "m"}
   }'

$ aws dynamodb put-item \
  --table-name Users \
  --item '{
    "id": {"S": "2"},
    "name": {"S": "Kate"},
    "age": {"N": "25"},
    "sex": {"S": "f"}
  }'

$ aws dynamodb put-item \
  --table-name Users \
  --item '{
    "id": {"S": "3"},
    "name": {"S": "John"},
    "age": {"N": "28"},
    "sex": {"S": "m"}
  }'
```

<br>

### Show Items

<br>

To list all the items in the table, try this:

<br>

```bash
$ aws dynamodb scan --table-name Users --no-paginate
{
    "Items": [
        {
            "name": {
                "S": "Joe"
            },
            "id": {
                "S": "1"
            },
            "age": {
                "N": "23"
            },
            "sex": {
                "S": "m"
            }
        },
        {
            "name": {
                "S": "John"
            },
            "id": {
                "S": "3"
            },
            "age": {
                "N": "28"
            },
            "sex": {
                "S": "m"
            }
        },
        {
            "name": {
                "S": "Kate"
            },
            "id": {
                "S": "2"
            },
            "age": {
                "N": "25"
            },
            "sex": {
                "S": "f"
            }
        }
    ],
    "Count": 3,
    "ScannedCount": 3
}
```

<br>

### Query Table

<br>

Let's query table using the primary key.

<br>

```bash
$ aws dynamodb query \
    --table-name Users \
    --key-condition-expression "id = :id" \
    --expression-attribute-values '{":id": {"S": "2"}}'
{
    "Items": [
        {
            "name": {
                "S": "Kate"
            },
            "id": {
                "S": "2"
            },
            "age": {
                "N": "25"
            },
            "sex": {
                "S": "f"
            }
        }
    ],
    "Count": 1,
    "ScannedCount": 1,
    "ConsumedCapacity": null
}
```

<br>

### Update Item

<br>

Update an item using primary key.

<br>

```bash
$ aws dynamodb update-item \
  --table-name Users \
  --key '{"id": {"S": "2"}}' \
  --update-expression "SET age = :age" \
  --expression-attribute-values '{":age": {"N": "26"}}' \
  --return-values UPDATED_NEW
{
    "Attributes": {
        "age": {
            "N": "26"
        }
    }
}
```

<br>

### Delete Table

<br>

To delete the table, just do this:

<br>

```bash
$ aws dynamodb delete-table --table-name Users
```

<br>

## Using Python
***

<br>

Here we will re-create the same table and play with it as a standalone script.

Standard package import as needed and created client.

Also defined table name.

<br>

```python
import boto3
from botocore.exceptions import ClientError

dynamodb = boto3.client('dynamodb', endpoint_url='http://localhost:4566', region_name='eu-west-1')
table_name = 'Users'
```

<br>

Declare function to delete the table if exists, so that we can run it multiple times.

I found something new in `Python` called `waiter`.

<br>

```python
def delete_table_if_exists(table_name):
    try:
        dynamodb.describe_table(TableName=table_name)
        response = dynamodb.delete_table(TableName=table_name)

        # create waiter of type 'table_not_exists'
        waiter = dynamodb.get_waiter('table_not_exists')
        # ask the waiter to wait until the given table reached the status
        waiter.wait(TableName=table_name)

        print(f"Table {table_name} deleted successfully.")

    except ClientError as e:
        if e.response['Error']['Code'] == 'ResourceNotFoundException':
            print(f"Table {table_name} does not exist - nothing to delete")
        else:
            print(f"Error deleting table {table_name}: {e}")
    except Exception as e:
        print(f"Unexpected error deleting table {table_name}: {e}")
```

<br>

Time to define method to create the table as below:

<br>

```python
def create_table(table_name):
    try:
        response = dynamodb.create_table(
            TableName=table_name,
            KeySchema=[
                {
                    'AttributeName': 'id',
                    'KeyType': 'HASH'
                }
            ],
            AttributeDefinitions=[
                {'AttributeName': 'id', 'AttributeType': 'S'},
                {'AttributeName': 'name', 'AttributeType': 'S'},
                {'AttributeName': 'age', 'AttributeType': 'N'},
                {'AttributeName': 'sex', 'AttributeType': 'S'}
            ],
            GlobalSecondaryIndexes=[
                {
                    'IndexName': 'NameIndex',
                    'KeySchema': [
                        {'AttributeName': 'name', 'KeyType': 'HASH'}
                    ],
                    'Projection': {
                        'ProjectionType': 'ALL'
                    },
                    'ProvisionedThroughput': {
                        'ReadCapacityUnits': 5,
                        'WriteCapacityUnits': 5
                    }
                },
                {
                    'IndexName': 'AgeIndex',
                    'KeySchema': [
                        {'AttributeName': 'age', 'KeyType': 'HASH'}
                    ],
                    'Projection': {
                        'ProjectionType': 'ALL'
                    },
                    'ProvisionedThroughput': {
                        'ReadCapacityUnits': 5,
                        'WriteCapacityUnits': 5
                    }
                },
                {
                    'IndexName': 'SexIndex',
                    'KeySchema': [
                        {'AttributeName': 'sex', 'KeyType': 'HASH'}
                    ],
                    'Projection': {
                        'ProjectionType': 'ALL'
                    },
                    'ProvisionedThroughput': {
                        'ReadCapacityUnits': 5,
                        'WriteCapacityUnits': 5
                    }
                }
            ],
            ProvisionedThroughput={
                'ReadCapacityUnits': 5,
                'WriteCapacityUnits': 5
            }
        )
        print(f"Table {table_name} created successfully.")
    except ClientError as e:
        if e.response['Error']['Code'] == 'ResourceInUseException':
            print(f"Table {table_name} already exists.")
        else:
            print(f"Error creating table: {e}")
```

<br>

So far so good, lets define function to add three items as below:

<br>

```python
def insert_items(table_name):
    items = [
        {
            'PutRequest': {
                'Item': {
                    'id': {'S': '1'},
                    'name': {'S': 'Joe'},
                    'age': {'N': '23'},
                    'sex': {'S': 'm'}
                }
            }
        },
        {
            'PutRequest': {
                'Item': {
                    'id': {'S': '2'},
                    'name': {'S': 'Kate'},
                    'age': {'N': '25'},
                    'sex': {'S': 'f'}
                }
            }
        },
        {
            'PutRequest': {
                'Item': {
                    'id': {'S': '3'},
                    'name': {'S': 'John'},
                    'age': {'N': '28'},
                    'sex': {'S': 'f'}
                }
            }
        }
    ]

    try:
        response = dynamodb.batch_write_item(RequestItems={table_name: items})
        print(f"Items inserted successfully.")
    except ClientError as e:
        print(f"Error inserting items: {e}")
```

<br>

Now we need function to query items.

<br>

```python
def query_items(table_name, id):
    try:
        response = dynamodb.scan(
            TableName=table_name,
            FilterExpression='id = :id',
            ExpressionAttributeValues={
                ':id': {'S': id}
            }
        )

        print(f"Items where id = {id}:")
        for item in response['Items']:
            print(item)
    except ClientError as e:
        print(f"Error querying items: {e}")
```

<br>

Here is the function to update an item.

```python
def update_age(table_name, id, age):
    try:
        response = dynamodb.update_item(
            TableName=table_name,
            Key={
                'id': {'S': id }
            },
            UpdateExpression='SET age = :age',
            ExpressionAttributeValues={
                ':age': {'N': str(age)}
            },
            ReturnValues='UPDATED_NEW'
        )
        print(f"Item with id {id} updated successfully.")
        print(f"Updated attributes: {response['Attributes']}")
    except ClientError as e:
        print(f"Error updating item with id {id}: {e}")
```

<br>

How about delete an item?

<br>

```python
def delete_item(table_name, id):
    try:
        response = dynamodb.delete_item(
            TableName=table_name,
            Key={
                'id': {'S': id}
            }
        )
        print(f"Item with id {id} deleted successfully.")
    except ClientError as e:
        print(f"Error deleting item with id {id}: {e}")
```

<br>

Finally function to list the table contents.

<br>

```python
def list_table_contents(table_name):
    try:
        response = dynamodb.scan(TableName=table_name)
        print(f"Items in {table_name}:")
        for item in response['Items']:
            print(item)
    except ClientError as e:
        print(f"Error listing table contents: {e}")
```

<br>

We have covered almost all basic operations, let's get the hand dirty.

<br>

```python
if __name__ == "__main__":
    delete_table_if_exists(table_name)
    create_table(table_name)
    insert_items(table_name)
    list_table_contents(table_name)
    query_items(table_name, '2')
    delete_item(table_name, '1')
    list_table_contents(table_name)
    update_age(table_name, '2', 26)
    list_table_contents(table_name)
```

<br>

Time to run the script: [**aws-dynamodb.py**](https://gist.github.com/manwar/1eb251510192aedc5a8371f4b6aa133d)

<br>

```bash
$ py aws-dynamodb.py
Table Users deleted successfully.
Table Users created successfully.
Items inserted successfully.
Items in Users:
{'name': {'S': 'Joe'}, 'id': {'S': '1'}, 'age': {'N': '23'}, 'sex': {'S': 'm'}}
{'name': {'S': 'John'}, 'id': {'S': '3'}, 'age': {'N': '28'}, 'sex': {'S': 'f'}}
{'name': {'S': 'Kate'}, 'id': {'S': '2'}, 'age': {'N': '25'}, 'sex': {'S': 'f'}}
Items where id = 2:
{'name': {'S': 'Kate'}, 'id': {'S': '2'}, 'age': {'N': '25'}, 'sex': {'S': 'f'}}
Item with id 1 deleted successfully.
Items in Users:
{'name': {'S': 'John'}, 'id': {'S': '3'}, 'age': {'N': '28'}, 'sex': {'S': 'f'}}
{'name': {'S': 'Kate'}, 'id': {'S': '2'}, 'age': {'N': '25'}, 'sex': {'S': 'f'}}
Item with id 2 updated successfully.
Updated attributes: {'age': {'N': '26'}}
Items in Users:
{'name': {'S': 'John'}, 'id': {'S': '3'}, 'age': {'N': '28'}, 'sex': {'S': 'f'}}
{'name': {'S': 'Kate'}, 'id': {'S': '2'}, 'age': {'N': '26'}, 'sex': {'S': 'f'}}
```

<br>

## Using Perl
***

<br>

With the help of `CPAN` module [**Paws**](https://metacpan.org/pod/Paws), let's prepare the ground as below:

<br>

```perl
use v5.30;
use Try::Tiny;
use Data::Dumper;

my $dynamodb = Paws->service('DynamoDB',
    region   => 'eu-west-1',
    endpoint => 'http://localhost:4566'
);

my $table_name = 'Users';
```

<br>

No `waiter` in `Perl`, unfortunately.

<br>

```perl
sub delete_table_if_exists($table_name) {
    try {
        $dynamodb->DeleteTable(TableName => $table_name);
        say "Table $table_name deletion requested.";
        # LocalStack deletes immediately - no need to wait
    } catch {
        if ($_->isa('Paws::DynamoDB::Errors::ResourceNotFoundException')) {
            say "Table $table_name already doesn't exist.";
        } else {
            die "Error deleting table: $_\n";
        }
    };
}
```

<br>

Here is function to create table:

<br>

```perl
sub create_table($table_name) {
    try {
        my $response = $dynamodb->CreateTable(
            TableName => $table_name,
            KeySchema => [
                {
                    AttributeName => 'id',
                    KeyType       => 'HASH',
                },
            ],
            AttributeDefinitions => [
                { AttributeName => 'id',   AttributeType => 'S' },
                { AttributeName => 'name', AttributeType => 'S' },
                { AttributeName => 'age',  AttributeType => 'N' },
                { AttributeName => 'sex',  AttributeType => 'S' },
            ],
            GlobalSecondaryIndexes => [
                {
                    IndexName => 'NameIndex',
                    KeySchema => [
                        {
                            AttributeName => 'name',
                            KeyType       => 'HASH',
                        },
                    ],
                    Projection => {
                        ProjectionType => 'ALL',
                    },
                    ProvisionedThroughput => {
                        ReadCapacityUnits  => 5,
                        WriteCapacityUnits => 5,
                    },
                },
                {
                    IndexName => 'AgeIndex',
                    KeySchema => [
                        {
                            AttributeName => 'age',
                            KeyType       => 'HASH',
                        },
                    ],
                    Projection => {
                        ProjectionType => 'ALL',
                    },
                    ProvisionedThroughput => {
                        ReadCapacityUnits  => 5,
                        WriteCapacityUnits => 5,
                    },
                },
                {
                    IndexName => 'SexIndex',
                    KeySchema => [
                        {
                            AttributeName => 'sex',
                            KeyType       => 'HASH',
                        },
                    ],
                    Projection => {
                        ProjectionType => 'ALL',
                    },
                    ProvisionedThroughput => {
                        ReadCapacityUnits  => 5,
                        WriteCapacityUnits => 5,
                    },
                },
            ],
            ProvisionedThroughput => {
                ReadCapacityUnits  => 5,
                WriteCapacityUnits => 5,
            },
        );

        say "Table $table_name created successfully.";
    } catch {
        if ($_->isa('Paws::DynamoDB::Errors::ResourceInUseException')) {
            say "Table $table_name already exists.";
        } else {
            die "Error creating table: $_\n";
        }
    };
}
```

<br>

The function to insert items.

<br>

```perl
sub insert_items($table_name) {
    my @items = (
        {
            'PutRequest' => {
                'Item'   => {
                    'id'   => {'S' => '1'  },
                    'name' => {'S' => 'Joe'},
                    'age'  => {'N' => '23' },
                    'sex'  => {'S' => 'm'  }
                }
            }
        },
        {
            'PutRequest' => {
                'Item'   => {
                    'id'   => {'S' => '2'   },
                    'name' => {'S' => 'Kate'},
                    'age'  => {'N' => '25'  },
                    'sex'  => {'S' => 'f'   }
                }
            }
        },
        {
            'PutRequest' => {
                'Item'   => {
                    'id'   => {'S' => '3'   },
                    'name' => {'S' => 'John'},
                    'age'  => {'N' => '28'  },
                    'sex'  => {'S' => 'm'   }
                }
            }
        }
    );

    try {
        my $response = $dynamodb->BatchWriteItem(
            RequestItems => {
                $table_name => \@items
            }
        );
        say "Items inserted successfully.";
    } catch {
        die "Error inserting items: $_\n";
    };
}
```

<br>

Query item using primary key.

<br>

```perl
sub query_items($table_name, $id) {
    try {
        my $response = $dynamodb->Scan(
            TableName => $table_name,
            FilterExpression => 'id = :id',
            ExpressionAttributeValues => {
                ':id' => { S => $id }
            }
        );

        say "Items where id = $id:";
        foreach my $item (@{$response->Items}) {
            say Dumper($item);
        }
    } catch {
        die "Error querying items: $_\n";
    };
}
```

<br>

Update item by primary key.

<br>

```perl
sub update_age($table_name, $id, $new_age) {
    try {
        my $response = $dynamodb->UpdateItem(
            TableName => $table_name,
            Key => {
                id => { S => $id }
            },
            UpdateExpression => 'SET age = :age',
            ExpressionAttributeValues => {
                ':age' => { N => $new_age }
            },
            ReturnValues => 'UPDATED_NEW'
        );
        say "Item with id $id updated successfully.";
        say "Updated attributes: " . Dumper($response->Attributes);
    } catch {
        die "Error updating item with id $id: $_\n";
    };
}
```

<br>

Delete an item using primary key.

<br>

```perl
sub delete_item($table_name, $id) {
    try {
        $dynamodb->DeleteItem(
            TableName => $table_name,
            Key => {
                id => { S => $id }
            }
        );
        say "Item with id $id deleted successfully.";
    } catch {
        die "Error deleting item with id $id: $_\n";
    };
}
```

<br>

Finally list table contents.

<br>

```perl
sub list_table_contents($table_name) {
    try {
        my $response = $dynamodb->Scan(TableName => $table_name);
        say "Items in $table_name:";
        foreach my $item (@{$response->Items}) {
            say Dumper($item);
        }
    } catch {
        die "Error listing table contents: $_\n";
    };
}
```

<br>

Now time for quick operatios as below:

<br>

```perl
delete_table_if_exists($table_name);
create_table($table_name);
insert_items($table_name);
list_table_contents($table_name);
query_items($table_name, '2');
delete_item($table_name, '1');
list_table_contents($table_name);
update_age($table_name, '2', 26);
list_table_contents($table_name);
```

<br>

Let's run the script now: [**aws-dynamodb.pl**](https://gist.github.com/manwar/94d657cb584746b5aa6bfa814ce1081d)

<br>

```bash
$ perl aws-dynamodb.pl
Table Users deletion requested.
Table Users created successfully.
Items inserted successfully.
Items in Users:
$VAR1 = bless( {
                 'Map' => {
                            'name' => bless( {
                                               'L' => [],
                                               'S' => 'Joe'
                                             }, 'Paws::DynamoDB::AttributeValue' ),
                            'age' => bless( {
                                              'N' => '23',
                                              'L' => []
                                            }, 'Paws::DynamoDB::AttributeValue' ),
                            'id' => bless( {
                                             'S' => '1',
                                             'L' => []
                                           }, 'Paws::DynamoDB::AttributeValue' ),
                            'sex' => bless( {
                                              'L' => [],
                                              'S' => 'm'
                                            }, 'Paws::DynamoDB::AttributeValue' )
                          }
               }, 'Paws::DynamoDB::AttributeMap' );
...
...
...
...
```

<br>

***

<br>

`Happy Hacking !!!`
