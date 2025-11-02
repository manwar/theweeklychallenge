---
title: "OpenAPI Linter"
date: 2025-11-01T00:00:00+00:00
description: "Discussion about OpenAPI Linter."
type: post
image: images/blog/openapi-linter.jpg
author: Mohammad Sajid Anwar
tags: ["perl", "OpenAPI"]
---

#### **DISCLAIMER:** Image is generated using `ChatGPT`.
<br>

#### [&nbsp;**1. Introduction**](#introduction)
#### [&nbsp;**2. What is OpenAPI::Linter?**](#what-is-openapi-linter)
#### [&nbsp;**3. Installation**](#installation)
#### [&nbsp;**4. Basic Usage**](#basic-usage)
#### [&nbsp;**5. Validating OpenAPI Specifications**](#validating-openapi-specifications)
#### [&nbsp;**6. Finding Linting Issues**](#finding-linting-issues)
#### [&nbsp;**7. Advanced Filtering**](#advanced-filtering)
#### [&nbsp;**8. Real-World Example**](#real-world-example)
#### [&nbsp;**9. Command Line Tool**](#command-line-tool)
#### [**10. Supported OpenAPI Versions**](#supported-openapi-versions)

<br>

## Introduction
***

[**OpenAPI**](https://www.openapis.org) has become the standard for `designing`, `building` and `documenting RESTful APIs`. However, ensuring your `OpenAPI specifications` are both syntactically correct and follow best practices can be challenging. [**OpenAPI::Linter**](https://metacpan.org/dist/OpenAPI-Linter) brings comprehensive validation and linting capabilities directly into your `Perl` applications and development workflow, helping you catch issues before they impact your `API` consumers.

<br>

## What is OpenAPI::Linter?
***

`OpenAPI::Linter` is a dual-purpose tool that provides both structural validation against the official `OpenAPI JSON Schema` and custom linting for best practices. It automatically detects your `OpenAPI` version and applies the appropriate validation rules, supporting versions `3.0.x` through `3.1.x`.

<br>

## Installation
***

Install from `CPAN`:

<br>

```bash
$ cpanm -vS OpenAPI::Linter
```

<br>

The module has minimal dependencies and will automatically install `JSON::Validator` for schema validation and `YAML::XS` for `YAML` file parsing.

<br>

### Sample Spec File

<br>

**File:** `api.yml`

```bash
openapi: 3.0.3
info:
  title: Sample User API
  # version: 1.0.0  # INTENTIONALLY COMMENTED OUT to demonstrate error
  description: A sample API for user management
  # license:  # INTENTIONALLY MISSING to demonstrate warning
  contact:
    name: API Team
    email: api@example.com
servers:
  - url: https://api.example.com/v1
    description: Production server
paths:
  /users:
    get:
      summary: Get all users
      # description: Retrieve a list of all users  # INTENTIONALLY MISSING
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/User'
        '500':
          description: Internal server error
    post:
      summary: Create a new user
      description: Create a new user in the system
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/User'
      responses:
        '201':
          description: User created successfully
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/User'
        '400':
          description: Bad request
  /users/{id}:
    get:
      summary: Get user by ID
      # description: Retrieve a specific user by their ID  # INTENTIONALLY MISSING
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: string
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/User'
        '404':
          description: User not found
    put:
      summary: Update user
      description: Update an existing user's information
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: string
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/User'
      responses:
        '200':
          description: User updated successfully
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/User'
        '404':
          description: User not found
components:
  schemas:
    User:
      type: object
      properties:
        id:
          type: string
          format: uuid
          # description: User's unique identifier  # INTENTIONALLY MISSING
        name:
          type: string
          description: User's full name
        email:
          type: string
          format: email
          description: User's email address
        age:
          type: integer
          minimum: 0
          # description: User's age in years  # INTENTIONALLY MISSING
        status:
          type: string
          enum: [active, inactive, suspended]
          description: User account status
      required:
        - id
        - name
        - email
    Error:
      # type: object  # INTENTIONALLY MISSING to demonstrate warning
      properties:
        code:
          type: integer
          description: Error code
        message:
          type: string
          description: Error message
        details:
          type: string
          description: Additional error details
  responses:
    NotFound:
      description: The specified resource was not found
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/Error'
    ServerError:
      description: Internal server error
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/Error'
```

<br>

**File:** `api-valid.yml`

```bash
openapi: 3.1.0
info:
  title: Sample User API
  version: 1.0.0
  description: A sample API for user management
  license:
    name: MIT
    url: https://opensource.org/licenses/MIT
  contact:
    name: API Team
    email: api@example.com
    url: https://example.com/support
servers:
  - url: https://api.example.com/v1
    description: Production server
  - url: https://staging-api.example.com/v1
    description: Staging server
paths:
  /users:
    get:
      summary: Get all users
      description: Retrieve a paginated list of all users in the system
      parameters:
        - name: page
          in: query
          description: Page number for pagination
          schema:
            type: integer
            minimum: 1
            default: 1
        - name: limit
          in: query
          description: Number of items per page
          schema:
            type: integer
            minimum: 1
            maximum: 100
            default: 20
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
                properties:
                  users:
                    type: array
                    items:
                      $ref: '#/components/schemas/User'
                  pagination:
                    $ref: '#/components/schemas/Pagination'
        '500':
          $ref: '#/components/responses/ServerError'
    post:
      summary: Create a new user
      description: Create a new user in the system with the provided information
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/UserInput'
      responses:
        '201':
          description: User created successfully
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/User'
        '400':
          description: Bad request - invalid input data
        '500':
          $ref: '#/components/responses/ServerError'
  /users/{id}:
    get:
      summary: Get user by ID
      description: Retrieve a specific user by their unique identifier
      parameters:
        - name: id
          in: path
          required: true
          description: User's unique identifier
          schema:
            type: string
            format: uuid
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/User'
        '404':
          $ref: '#/components/responses/NotFound'
        '500':
          $ref: '#/components/responses/ServerError'
components:
  schemas:
    User:
      type: object
      description: A user object containing all user information
      properties:
        id:
          type: string
          format: uuid
          description: User's unique identifier
        name:
          type: string
          description: User's full name
        email:
          type: string
          format: email
          description: User's email address
        age:
          type: integer
          minimum: 0
          maximum: 150
          description: User's age in years
        status:
          type: string
          enum: [active, inactive, suspended]
          description: User account status
        createdAt:
          type: string
          format: date-time
          description: When the user was created
        updatedAt:
          type: string
          format: date-time
          description: When the user was last updated
      required:
        - id
        - name
        - email
        - status
    UserInput:
      type: object
      description: Input data for creating or updating a user
      properties:
        name:
          type: string
          description: User's full name
        email:
          type: string
          format: email
          description: User's email address
        age:
          type: integer
          minimum: 0
          maximum: 150
          description: User's age in years
      required:
        - name
        - email
    Pagination:
      type: object
      description: Pagination metadata
      properties:
        page:
          type: integer
          description: Current page number
        limit:
          type: integer
          description: Number of items per page
        total:
          type: integer
          description: Total number of items
        pages:
          type: integer
          description: Total number of pages
    Error:
      type: object
      description: Standard error response
      properties:
        code:
          type: integer
          description: HTTP status code
        message:
          type: string
          description: Error message
        details:
          type: string
          description: Additional error details
        timestamp:
          type: string
          format: date-time
          description: When the error occurred
      required:
        - code
        - message
        - timestamp
  responses:
    NotFound:
      description: The specified resource was not found
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/Error'
    ServerError:
      description: Internal server error occurred
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/Error'
```

<br>

## Basic Usage
***

Let's start with a simple validation example.

<br>

### File: `validate.pl`

```perl
use OpenAPI::Linter;

my $linter = OpenAPI::Linter->new(spec => $ARGV[0]);

my @schema_errors = $linter->validate_schema;

if (@schema_errors) {
    print "Schema validation failed:\n";
    foreach my $error (@schema_errors) {
        print "  - $error->{message}\n";
    }
} else {
    print "Schema validation passed!\n";
}

my @linting_issues = $linter->find_issues;

if (@linting_issues) {
    print "Linting issues found:\n";
    foreach my $issue (@linting_issues) {
        print "  [$issue->{level}] $issue->{message}\n";
    }
} else {
    print "No linting issues found!\n";
}
```

<br>

### Output

<br>

```bash
$ perl validate.pl api.yml
Schema validation failed:
  - /info/version: /info/version: Missing property.
  - /paths/~001users~001{id}/get/parameters/0/$ref: /paths/~001users~001{id}/get/parameters/0/$ref: /oneOf/1 Missing property.
  - /paths/~001users~001{id}/put/parameters/0/$ref: /paths/~001users~001{id}/put/parameters/0/$ref: /oneOf/1 Missing property.
  - /paths/~1users~1{id}/get/parameters/0/in: /paths/~1users~1{id}/get/parameters/0/in: /oneOf/0/allOf/2/oneOf/1 Not in enum list: query.
  - /paths/~1users~1{id}/get/parameters/0/in: /paths/~1users~1{id}/get/parameters/0/in: /oneOf/0/allOf/2/oneOf/2 Not in enum list: header.
  - /paths/~1users~1{id}/get/parameters/0/in: /paths/~1users~1{id}/get/parameters/0/in: /oneOf/0/allOf/2/oneOf/3 Not in enum list: cookie.
  - /paths/~1users~1{id}/get/parameters/0/required: /paths/~1users~1{id}/get/parameters/0/required: /oneOf/0/allOf/2/oneOf/0 Not in enum list: true.
  - /paths/~1users~1{id}/put/parameters/0/in: /paths/~1users~1{id}/put/parameters/0/in: /oneOf/0/allOf/2/oneOf/1 Not in enum list: query.
  - /paths/~1users~1{id}/put/parameters/0/in: /paths/~1users~1{id}/put/parameters/0/in: /oneOf/0/allOf/2/oneOf/2 Not in enum list: header.
  - /paths/~1users~1{id}/put/parameters/0/in: /paths/~1users~1{id}/put/parameters/0/in: /oneOf/0/allOf/2/oneOf/3 Not in enum list: cookie.
  - /paths/~1users~1{id}/put/parameters/0/required: /paths/~1users~1{id}/put/parameters/0/required: /oneOf/0/allOf/2/oneOf/0 Not in enum list: true.
Linting issues found:
  [ERROR] Missing info.version
  [WARN] Missing info.license
  [WARN] Missing description for get /users/{id}
  [WARN] Missing description for get /users
  [WARN] Schema User.id missing description
  [WARN] Schema User.age missing description
  [WARN] Schema Error missing type
```

<br>

```bash
$ perl validate.pl api-valid.yml
Schema validation passed!
No linting issues found!
```

<br>

## Validating OpenAPI Specifications
***

`validate_schema` performs structural validation against the official `OpenAPI JSON Schema`. This ensures your specification conforms to the `OpenAPI` standard.

<br>

**File:** `schema-validation.pl`

```perl
use OpenAPI::Linter;

my $linter = OpenAPI::Linter->new(spec => {
    openapi => '3.0.0',
    info => {
        title   => 'My API',
        version => '1.0.0'
    },
    paths => {}
});

my $errors = $linter->validate_schema;

if (@$errors) {
    die "Invalid OpenAPI specification:\n" . join("\n", @$errors);
}

print "Specification is structurally valid!\n";
```

<br>

### Output

<br>

```bash
$ perl schema-validation.pl
Specification is structurally valid!
```

<br>

## Finding Linting Issues
***

`find_issues` performs best-practice checks beyond basic schema validation. It identifies common issues that can affect API usability and documentation quality.

<br>

**File:** `linting.pl`

```perl
use OpenAPI::Linter;

my $spec = {
    openapi => '3.0.0',
    info => {
        title   => 'My API',
        version => '1.0.0'
        # Missing description and license
    },
    paths => {
        '/users' => {
            'get' => {
                responses => {
                    '200' => {
                        description => 'OK'
                    }
                }
                # Missing operation description
            }
        }
    }
};

my $linter = OpenAPI::Linter->new(spec => $spec);
my @issues = $linter->find_issues;

foreach my $issue (@issues) {
    printf "[%-5s] %s\n", $issue->{level}, $issue->{message};
}
```

<br>

### Output

<br>

```bash
$ perl linting.pl
[WARN ] Missing info.description
[WARN ] Missing info.license
[WARN ] Missing description for get /users
```

<br>

## Advanced Filtering
***

`find_issues` supports filtering by `severity level` and message patterns, making it easy to focus on specific types of issues.

**File:** `filtering.pl`

```perl
use OpenAPI::Linter;

my $linter = OpenAPI::Linter->new(spec => $ARGV[0]);

# Get only errors (no warnings)
my @errors = $linter->find_issues(level => 'ERROR');

# Get warnings related to descriptions
my @description_warnings = $linter->find_issues(
    level => 'WARN',
    pattern => qr/description/i
);

# Get path-related issues
my @path_issues = $linter->find_issues(
    pattern => qr/^Missing description for \w+/
);

print "Critical errors: " . scalar(@errors) . "\n";
print "Description warnings: " . scalar(@description_warnings) . "\n";
print "Path issues: " . scalar(@path_issues) . "\n";
```

<br>

### Output

<br>

```bash
$ perl filtering.pl api.yml
Critical errors: 1
Description warnings: 4
Path issues: 2
```

<br>

## Real-World Example
***

Here's a complete example that validates a realistic API specification and handles both schema and linting issues.

<br>

**File:** `complete-validation.pl`

```perl
use JSON;
use OpenAPI::Linter;

eval {
    my $linter = OpenAPI::Linter->new(spec => $ARGV[0]);

    my @schema_errors = $linter->validate_schema;

    if (@schema_errors) {
        print "Schema validation failed:\n";
        foreach my $error (@schema_errors) {
            print "   • $error->{message}\n";
        }
        exit 1;
    }

    print "Schema validation passed\n";

    my @issues = $linter->find_issues;

    my ($errors, $warnings) = (0, 0);
    foreach my $issue (@issues) {
        if ($issue->{level} eq 'ERROR') {
            $errors++;
            print "$issue->{message}\n";
        } else {
            $warnings++;
            print "$issue->{message}\n";
        }
    }

    if ($errors) {
        print "\n$errors error(s), $warnings warning(s) found - please fix errors\n";
        exit 1;
    } elsif ($warnings) {
        print "\n$warnings warning(s) found - consider addressing these\n";
        exit 0;
    } else {
        print "No issues found! Specification looks great!\n";
        exit 0;
    }
};

if ($@) {
    die "Failed to process $spec_file: $@\n";
}
```

<br>

### Output

<br>

```bash
$ perl complete-validation.pl api.yml
Schema validation failed:
   • /info/version: /info/version: Missing property.
   • /paths/~001users~001{id}/get/parameters/0/$ref: /paths/~001users~001{id}/get/parameters/0/$ref: /oneOf/1 Missing property.
   • /paths/~001users~001{id}/put/parameters/0/$ref: /paths/~001users~001{id}/put/parameters/0/$ref: /oneOf/1 Missing property.
   • /paths/~1users~1{id}/get/parameters/0/in: /paths/~1users~1{id}/get/parameters/0/in: /oneOf/0/allOf/2/oneOf/1 Not in enum list: query.
   • /paths/~1users~1{id}/get/parameters/0/in: /paths/~1users~1{id}/get/parameters/0/in: /oneOf/0/allOf/2/oneOf/2 Not in enum list: header.
   • /paths/~1users~1{id}/get/parameters/0/in: /paths/~1users~1{id}/get/parameters/0/in: /oneOf/0/allOf/2/oneOf/3 Not in enum list: cookie.
   • /paths/~1users~1{id}/get/parameters/0/required: /paths/~1users~1{id}/get/parameters/0/required: /oneOf/0/allOf/2/oneOf/0 Not in enum list: true.
   • /paths/~1users~1{id}/put/parameters/0/in: /paths/~1users~1{id}/put/parameters/0/in: /oneOf/0/allOf/2/oneOf/1 Not in enum list: query.
   • /paths/~1users~1{id}/put/parameters/0/in: /paths/~1users~1{id}/put/parameters/0/in: /oneOf/0/allOf/2/oneOf/2 Not in enum list: header.
   • /paths/~1users~1{id}/put/parameters/0/in: /paths/~1users~1{id}/put/parameters/0/in: /oneOf/0/allOf/2/oneOf/3 Not in enum list: cookie.
   • /paths/~1users~1{id}/put/parameters/0/required: /paths/~1users~1{id}/put/parameters/0/required: /oneOf/0/allOf/2/oneOf/0 Not in enum list: true.
```

<br>

## Command Line Tool
***

`OpenAPI::Linter` comes with a convenient command-line tool `openapi-lint` for quick validation during development and `CI/CD` pipelines.

<br>

### Basic Linting

```bash
$ openapi-lint --spec api.yml
[ERROR] Missing info.version
[WARN] Missing info.license
[WARN] Missing description for get /users
[WARN] Missing description for get /users/{id}
[WARN] Schema User.age missing description
[WARN] Schema User.id missing description
[WARN] Schema Error missing type

Summary: 1 ERROR, 6 WARNs
```

<br>

### Schema Validation Mode

```bash
$ openapi-lint --spec api.yml --validate
Running schema validation for api.yml...
[ERROR] /info/version: Missing property.
[ERROR] /paths/~001users~001{id}/get/parameters/0/$ref: /oneOf/1 Missing property.
[ERROR] /paths/~001users~001{id}/put/parameters/0/$ref: /oneOf/1 Missing property.
[ERROR] /paths/~1users~1{id}/get/parameters/0/in: /oneOf/0/allOf/2/oneOf/1 Not in enum list: query.
[ERROR] /paths/~1users~1{id}/get/parameters/0/in: /oneOf/0/allOf/2/oneOf/2 Not in enum list: header.
[ERROR] /paths/~1users~1{id}/get/parameters/0/in: /oneOf/0/allOf/2/oneOf/3 Not in enum list: cookie.
[ERROR] /paths/~1users~1{id}/get/parameters/0/required: /oneOf/0/allOf/2/oneOf/0 Not in enum list: true.
[ERROR] /paths/~1users~1{id}/put/parameters/0/in: /oneOf/0/allOf/2/oneOf/1 Not in enum list: query.
[ERROR] /paths/~1users~1{id}/put/parameters/0/in: /oneOf/0/allOf/2/oneOf/2 Not in enum list: header.
[ERROR] /paths/~1users~1{id}/put/parameters/0/in: /oneOf/0/allOf/2/oneOf/3 Not in enum list: cookie.
[ERROR] /paths/~1users~1{id}/put/parameters/0/required: /oneOf/0/allOf/2/oneOf/0 Not in enum list: true.

Summary: 11 ERRORs, 0 WARNs
```

<br>

### JSON Output for Automation

```bash
$ openapi-lint --spec api.yml --json
{
   "issues" : [
      {
         "level" : "ERROR",
         "message" : "Missing info.version"
      },
      {
         "message" : "Missing info.license",
         "level" : "WARN"
      },
      {
         "message" : "Missing description for get /users/{id}",
         "level" : "WARN"
      },
      {
         "level" : "WARN",
         "message" : "Missing description for get /users"
      },
      {
         "message" : "Schema User.id missing description",
         "level" : "WARN"
      },
      {
         "level" : "WARN",
         "message" : "Schema User.age missing description"
      },
      {
         "message" : "Schema Error missing type",
         "level" : "WARN"
      }
   ],
   "summary" : {
      "warnings" : 6,
      "errors" : 1
   }
}
```

<br>

## Supported OpenAPI Versions
***

`OpenAPI::Linter` automatically detects and supports:

<br>

    OpenAPI 3.0.x: 3.0.0, 3.0.1, 3.0.2, 3.0.3
    OpenAPI 3.1.x: 3.1.0, 3.1.1

<br>

The version is auto-detected from the openapi field, but you can explicitly specify it:

<br>

```perl
my $linter = OpenAPI::Linter->new(
    spec    => $spec,
    version => '3.1.0'  # Override auto-detection
);
```

<br>

`OpenAPI::Linter` helps you maintain high-quality `API specifications` by catching issues early in the development process. Whether you're using it in your `CI/CD` pipeline, as a `pre-commit` hook or integrated directly into your application, it ensures your `OpenAPI` specifications are both valid and follow best practices.

***

<br>

`Happy Hacking !!!`
