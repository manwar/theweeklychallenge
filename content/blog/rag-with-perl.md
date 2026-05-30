---
title: "RAG with Perl"
date: 2026-05-30T00:00:00+00:00
description: "Builf RAG using Perl."
type: post
image: images/blog/rag-with-perl.jpg
author: Mohammad Sajid Anwar
tags: ["perl", "RAG"]
---

#### **DISCLAIMER:** Image is generated using `ChatGPT`.
***
<br>

The term `RAG` has bothered me for a long time. I have heard many people around me talking about it. I am not an `AI` enthusiast, but last `June` I wrote a blog post about [**AWS Bedrock**](/blog/aws-bedrock). A friend of mine at work was working with it at that time and it piqued my interest.

I looked online for an easy definition of `RAG` that I could understand.

This is the best, I found out.

> Imagine you are a student taking an open-book exam. Normally, if you have to answer a question, you have to rely only on what you have memorised in your head. If the information isn't in your memory, you cannot answer the question. This is how a standard AI model works, it relies solely on the vast amount of information it "memorised" during its training. RAG (Retrieval-Augmented Generation) changes this by letting the AI use a textbook during the exam.

As the name suggests, it is a three steps process.

## [R]etrieval

> When you ask the AI a question, it doesn't just guess from memory. Instead, it first searches through a specific set of documents to find the exact pages that contain the information relevant to your question.

## [A]ugmentation

> Once it finds those relevant passages, it gathers them up and hands them to the AI, essentially saying, "Here is some extra information I found on this topic; use this to help formulate your answer".

## [G]eneration

> Finally, the AI reads those specific passages and writes a natural, accurate response based on what it just learned, rather than relying only on its own training.

In short, `RAG` turns an `AI` from someone who is just "guessing from memory" into an expert researcher who always has the latest facts right in front of them.

It stops the `AI` from making things up because it is forced to look at your provided facts first. Also you don't have to retrain the `AI` every time you have new information. You can simply add a new document to your database, and the `AI` will be able to "read" it and answer questions about it immediately.

Now I am feeling better as far as `RAG` is concerned.

Can I see it in action?

Can I use `Perl`?

There are plenty of videos available on the subject but none for someone who just steps in.

I hope this post would help you understand `RAG` inside out.

I am using `Docker` this time as I want to keep my system clean and also because I love `Docker`.

To demo the full life cycle, I am going to use the following two models:

> `Llama 3.2` is a collection of open-weight artificial intelligence models developed by Meta.

> `nomic-embed-text` is a high-performance text embedding model.

And I would also need a vector database. `ChromaDB` is the best for what I aim to achieve.

Time to create docker compose configuration file, `docker-compose.yml` like below:

```bash
services:
  ollama:
    image: ollama/ollama:latest
    container_name: ollama
    ports:
      - 11434:11434
    entrypoint: >
      sh -c "ollama serve &
             sleep 5 &&
             ollama pull llama3.2 &&
             ollama pull nomic-embed-text &&
             wait"
    volumes:
      - ollama_data:/root/.ollama

  chroma:
    image: chromadb/chroma:latest
    container_name: chroma
    ports:
      - 8000:8000
    volumes:
      - chroma_data:/chroma/chroma

volumes:
  ollama_data:
  chroma_data:
```

As you see, we have defined two services: `ollama` and `chroma`

Inside the `ollama` container, I am pulling the two models `llama3.2` and `nomic-embed-text`

Let's start the container now:

```bash
$ docker compose up -d
```

For demo purpose, I am downloading `The Art of War` book in `PDF` format.

```bash
$ curl -L -o art_of_war.pdf https://sites.ualberta.ca/~enoch/Readings/The_Art_Of_War.pdf
```

We need to install the package `poppler-utils` as we are using tool `pdftotext`.

```bash
$ sudo apt install -y poppler-utils
```

Also some `CPAN` modules if not already installed:

```bash
$ cpanm -vS JSON HTTP::Tiny Digest::SHA Getopt::Long Pod::Usage
```

Finally we create the `Perl` script to simulate RAG operations.

**Filename:** `rag-engine`

```perl
#!/usr/bin/env perl

use strict;
use warnings;

use JSON;
use HTTP::Tiny;
use Pod::Usage;
use Getopt::Long;
use Digest::SHA qw(sha256_hex);

my $ua   = HTTP::Tiny->new();
my $json = JSON->new->utf8->canonical;

my $OLLAMA_URL = 'http://localhost:11434';
my $CHROMA_URL = 'http://localhost:8000/api/v2/tenants/default_tenant/databases/default_database';

my ($help);
my ($collection_name, $collection_id);
my ($search, $query_text, $document, $ingest_document);
my ($list_collections, $delete_collection, $create_collection);

GetOptions(
    'document=s'        => \$document,
    'ingest'            => \$ingest_document,
    'query=s'           => \$query_text,
    'search'            => \$search,
    'collection-id=s'   => \$collection_id,
    'collection-name=s' => \$collection_name,
    'list-collections'  => \$list_collections,
    'create-collection' => \$create_collection,
    'delete-collection' => \$delete_collection,
    'help|h'            => \$help,
) or pod2usage(2);

pod2usage(1) if $help;

if ($ingest_document) {
    ingest_document($document, $collection_id);
}
elsif ($search) {
    query_collection($collection_id, $query_text);
}
elsif ($list_collections) {
    list_collections();
}
elsif ($create_collection) {
    create_collection($collection_name);
}
elsif ($delete_collection) {
    delete_collection($collection_name);
}
```

**Ingest Document**

```perl
sub ingest_document {
    my ($document, $collection_id) = @_;

    die "ERROR: Missing document.\n"      unless defined $document;
    die "ERROR: Missing collection id.\n" unless defined $collection_id;

    my $full_text = ($document =~ /\.pdf$/)
                    ? `pdftotext "$document" -`
                    : do { local $/; open my $f, '<', $document; <$f> };

    my @chunks = $full_text =~ /.{1,500}/gs;

    foreach my $chunk (@chunks) {
        my $emb = get_embedding($chunk);
        $ua->post("$CHROMA_URL/collections/$collection_id/add", {
            headers => { 'Content-Type' => 'application/json' },
            content => $json->encode({ ids        => [sha256_hex($chunk)],
                                       embeddings => [[@$emb]],
                                       documents  => [$chunk],
                                    })
        });
    }

    print "Document ingested in " . scalar(@chunks) . " chunks.\n";
}
```

**List Collections**

```perl
sub list_collections {
    my $response = $ua->get("$CHROMA_URL/collections");

    if ($response->{success}) {
        my $collections = decode_json($response->{content});

        if ($collections) {
            foreach my $collection (@$collections) {
                print "Id: ", $collection->{id}, "\n";
                print "Name:", $collection->{name}, "\n";
                print "---\n";
            }
        }
    } else {
        print "Failed to retrieve collections: $response->{status} $response->{reason}";
    }
}
```

**Create Collection**

```perl
sub create_collection {
    my ($collection_name) = @_;

    my $url = "$CHROMA_URL/collections";
    my $payload = encode_json({ name => $collection_name });

    my $response = $ua->request('POST', $url, {
        headers => { 'Content-Type' => 'application/json' },
        content => $payload,
    });

    if ($response->{success}) {
        my $data = decode_json($response->{content});
        print "Successfully created collection: $collection_name (ID: $data->{id})\n";
    } else {
        print "Failed to create collection: $response->{status} $response->{reason}";
    }
}
```

**Delete Collection**

```perl
sub delete_collection {
    my ($collection_name) = @_;

    if (!$collection_name) {
        die "Error: No collection name provided for deletion.";
    }

    my $url = "$CHROMA_URL/collections/$collection_name";
    my $response = $ua->request('DELETE', $url);

    if ($response->{success}) {
        print "Successfully deleted collection: $collection_name\n";
    } else {
        print "Failed to delete collection: $response->{status} $response->{reason}";
    }
}
```

**Query Collection**

```perl
sub query_collection {
    my ($collection_id, $query_text) = @_;

    die "ERROR: Missing collection id.\n" unless defined $collection_id;
    die "ERROR: Missing query text.\n"    unless defined $query_text;

    my $q_emb = get_embedding($query_text);
    my $res   = $ua->post("$CHROMA_URL/collections/$collection_id/query", {
        headers => { 'Content-Type' => 'application/json' },
        content => $json->encode({ query_embeddings => [[@$q_emb]],
                                   n_results        => 3,
                                   include          => ["documents"],
                                })
    });

    my $data = $json->decode($res->{content});

    if (defined $data->{documents} && @{$data->{documents}}) {
        print generate_with_llm(join("\n", @{$data->{documents}[0]}), $query_text) . "\n";
    }
    else {
        print "No relevant documents found.\n";
    }
}

sub get_embedding {
    my ($text) = @_;

    my $res = $ua->post("$OLLAMA_URL/api/embed", {
        headers => { 'Content-Type' => 'application/json' },
        content => $json->encode({ model => 'nomic-embed-text', input => $text })
    });

    if (!$res->{success}) {
        die "Embedding API failed: $res->{status} - $res->{content}\n";
    }

    my $data = $json->decode($res->{content});

    if (defined $data->{embeddings} && ref($data->{embeddings}) eq 'ARRAY') {
        return $data->{embeddings}[0];
    }
    else {
        die "Unexpected API response structure: " . $res->{content} . "\n";
    }
}

sub generate_with_llm {
    my ($context, $question) = @_;

    my $payload = {
        model  => 'llama3.2',
        prompt => "Context: $context\n\nQuestion: $question\n\nAnswer:",
        stream => JSON::false
    };

    my $res = $ua->post("$OLLAMA_URL/api/generate", {
        headers => { 'content-type' => 'application/json' },
        content => $json->encode($payload)
    });

    if (!$res->{success}) {
        die "LLM generation request failed: $res->{status} $res->{reason}";
    }

    my $data = $json->decode($res->{content});

    return $data->{response};
}
```

Finally some usage pod.

```perl
__END__

=head1 NAME

rag-engine - A CLI tool for RAG managing ChromaDB collections.

=head1 SYNOPSIS

./rag-engine [options]

 Options:
   --document <full path> --collection-id <id> --ingest Ingest document in collection id
   --query <text> --collection-id <id> --search         Search text in collection id
   --list-collections                                   List all collections
   --create-collection --collection-name <name>         Create a new collection name
   --delete-collection --collection-name <name>         Delete the named collection
   --help                                               Show this help message

=head1 DESCRIPTION

This tool allows you to manage vector database collections for your RAG engine.

=cut
```

The application looks like this:

```bash
$ ./rag-engine --help
Usage:
    ./rag-engine [options]

     Options:
       --document <full path> --collection-id <id> --ingest Ingest document in collection id
       --query <text> --collection-id <id> --search         Search text in collection id
       --list-collections                                   List all collections
       --create-collection --collection-name <name>         Create a new collection name
       --delete-collection --collection-name <name>         Delete the named collection
       --help                                               Show this help message
```

Time for some action now:

```bash
$ ./rag-engine --list-collections
Id: a9261eca-0106-4464-a78c-66ae20787ce9
Name:my_docs
---
Id: ec0869a5-355e-48f6-b0d2-f1e912e11469
Name:test_1
---
```

```bash
$ ./rag-engine --document art_of_war.pdf \
               --collection-id ec0869a5-355e-48f6-b0d2-f1e912e11469 \
               --ingest
```

```bash
$ ./rag-engine --query "What is the best way to win a war according to Sun Tzu?" \
               --collection-id ec0869a5-355e-48f6-b0d2-f1e912e11469 \
               --search
```

```bash
$ ./rag-engine --create-collection --collection-name test_1
```

```bash
$ ./rag-engine --delete-collection --collection-name test_1
```

## Stop Services

```bash
$ docker compose stop
```

***

<br>

`Happy Hacking !!!`
