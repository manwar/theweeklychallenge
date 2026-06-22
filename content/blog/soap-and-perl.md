---
title: "SOAP and Perl"
date: 2026-06-22T00:00:00+00:00
description: "Using SOAP with Perl."
type: post
image: images/blog/soap-and-perl.jpg
author: Mohammad Sajid Anwar
tags: ["SOAP"]
---

#### **DISCLAIMER:** Image is generated using `ChatGPT`.
***
<br>

The current web software development space is dominated by `REST`, `GraphQL`, and `gRPC`. I have written about each of them recently.

`GraphQL`: | [**Mojo meets GraphQL**](/blog/mojo-meets-graphql) | [**DBIx::Class and GraphQL**](/blog/dbic-graphql) | [**CPAN and GraphQL**](/blog/cpan-graphql) | [**Mutation in GraphQL**](/blog/mutation-in-graphql) |

`gRPC`: | [**REST vs gRPC**](/blog/rest-vs-grpc) |


But there was one standard that was there before the others; `SOAP (Simple Object Access Protocol)` which was created in the late `1990s`.

At that time, `SOAP` was adopted as an industry standard by the `W3C (World Wide Web Consortium)` and is still used today as the primary protocol for developing enterprise applications, used in large-scale distributed systems, secure financial transactions and secure communications.

Both `SOAP` and `REST` are protocols that developers of applications use to transfer structured data between different computer systems. One major distinction between `SOAP` and `REST` is that the message format used in `XML` for `SOAP` and uses `HTTP` to transfer the message.

The difference between `SOAP` and `REST` could be regarded as analogous to sending a postcard compared to sending a legal document using an express mail service with delivery confirmation. Postcards are lightweight, fast, fairly easy to read, but are also at risk of getting lost or damaged if not handled properly.

In comparison, sending legal documents using a delivery service that provides verified payment for the sender, as well as a delivery receipt, must be packaged in many different ways so that the signature of the person that delivers the package can be seen at the time that he/she delivers the package and can be returned in the format specified by the sender. Also, the legal document will also be able to be received by the recipient in the same condition that the document was sent to the recipient.

### The Pillars of SOAP
***

> `SOAP` utilises `XML` exclusively for message encoding. Thus, `SOAP` is very structured, although it is also considerably more verbose than `JSON`.

> Although `SOAP` is primarily run over `HTTP`/`HTTPS` as the transport protocol, it is also capable of running over nearly any transport protocol (e.g. `SMTP`, `FTP`, or `JMS`).

> `SOAP` services are based upon a `WSDL (Web Services Description Language)`, which is an `XML` based machine-readable contract that describes the `SOAP` web service, including what functions it provides, what parameters will be used by the function, and what will be returned by the service when called.

> `SOAP` has built-in `WS-Security` and `WS-Reliability` support, making it a very good fit for banking and healthcare applications.

We have this directory structure:

```bash
.
├── calculator.wsdl
├── client.pl
├── lib
│   ├── Calculator
│   │   └── Server.pm
│   └── Calculator.pm
├── server.pl
├── soap_client.pl
└── soap_server.pl
```

Here is a simple calculator package:

**File:** `lib/Calculator.pm`

```perl
package Calculator;

use strict;
use warnings;

sub new {
    my ($class) = @_;
    return bless {}, $class;
}

sub add_numbers {
    my ($self, $num1, $num2) = @_;

    return $num1 + $num2;
}

1;
```

Here is a `SOAP` server:

**File:** `server.pl`

```perl
#!/usr/bin/env perl

use strict;
use warnings;

use lib 'lib/';

use SOAP::Transport::HTTP;

my $server = SOAP::Transport::HTTP::Daemon
    -> new (LocalPort => 8081)
    -> dispatch_to('Calculator');

print "SOAP Server is running on http://localhost:8081/ ...\n";
$server->handle;
```

Now create `SOAP` client:

**File:** `client.pl`

```perl
#!/usr/bin/env perl

use strict;
use warnings;

use SOAP::Lite;

my $soap = SOAP::Lite
    -> proxy('http://localhost:8081/')
    -> uri('Calculator');

print "Sending numbers 15 and 25 to the SOAP server...\n";
my $response = $soap->add_numbers(15, 25);

if ($response->fault) {
    print "Error occurred:\n";
    print "  Fault Code:   " . $response->faultcode   . "\n";
    print "  Fault String: " . $response->faultstring . "\n";
} else {
    print "Answer from SOAP Server: " . $response->result . "\n";
}
```

Let's start the `SOAP` server first:

```bash
$ perl server.pl
SOAP Server is running on http://localhost:8081/ ...
```

Now let the client make a request:

```bash
$ perl client.pl
Sending numbers 15 and 25 to the SOAP server...
Answer from SOAP Server: 40
```

So far so good, we will now bring `WSDL` into the picture.

Let's create `calculator.wsdl` file first as below:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<definitions
    name="Calculator"
    targetNamespace="urn:Calculator"
    xmlns="http://schemas.xmlsoap.org/wsdl/"
    xmlns:tns="urn:Calculator"
    xmlns:soap="http://schemas.xmlsoap.org/wsdl/soap/"
    xmlns:xsd="http://www.w3.org/2001/XMLSchema"
    xmlns:soapenc="http://schemas.xmlsoap.org/soap/encoding/">

    <types>
        <xsd:schema targetNamespace="urn:Calculator"/>
    </types>

    <message name="add_numbersRequest">
        <part name="num1" type="xsd:float"/>
        <part name="num2" type="xsd:float"/>
    </message>

    <message name="add_numbersResponse">
        <part name="return" type="xsd:float"/>
    </message>

    <portType name="CalculatorPortType">
        <operation name="add_numbers">
            <input  message="tns:add_numbersRequest"/>
            <output message="tns:add_numbersResponse"/>
        </operation>
    </portType>

    <binding name="CalculatorBinding" type="tns:CalculatorPortType">
        <soap:binding style="rpc" transport="http://schemas.xmlsoap.org/soap/http"/>
        <operation name="add_numbers">
            <soap:operation soapAction="urn:Calculator#add_numbers"/>
            <input>
                <soap:body
                    use="encoded"
                    namespace="urn:Calculator"
                    encodingStyle="http://schemas.xmlsoap.org/soap/encoding/"/>
            </input>
            <output>
                <soap:body
                    use="encoded"
                    namespace="urn:Calculator"
                    encodingStyle="http://schemas.xmlsoap.org/soap/encoding/"/>
            </output>
        </operation>
    </binding>

    <service name="CalculatorService">
        <port name="CalculatorPort" binding="tns:CalculatorBinding">
            <soap:address location="http://localhost:8081/"/>
        </port>
    </service>

</definitions>
```

Now we will create `Calculator::Server` package as below:

```perl
package Calculator::Server;

use strict;
use warnings;

use SOAP::Transport::HTTP;

my $WSDL_FILE = $ENV{'WSDL_FILE'};

sub new {
    my ($class, %args) = @_;

    my $daemon = SOAP::Transport::HTTP::Daemon->new(
        LocalPort => $args{LocalPort},
        Reuse     => 1,
    ) or die "Cannot create SOAP daemon: $!";

    return bless { _daemon => $daemon }, $class;
}

sub dispatch_to {
    my ($self, @args) = @_;

    $self->{_daemon}->dispatch_to(@args);

    return $self;
}

sub handle {
    my ($self) = @_;
    my $daemon = $self->{_daemon};

    while ( my $c = $daemon->accept ) {
        while ( my $r = $c->get_request ) {
            my $response = $self->_is_wsdl_request($r)
                ? $self->_wsdl_response
                : $self->_soap_response($daemon, $r);

            $self->_send_response($c, $response);
        }
        $self->_close_connection($c);
    }
}

sub _is_wsdl_request {
    my ($self, $r) = @_;

    return $r->method eq 'GET'
        && ( $r->uri->query // '' ) =~ /^wsdl$/i;
}

sub _wsdl_response {
    my ($self) = @_;
    my $wsdl   = $WSDL_FILE;

    if ( open my $fh, '<', $wsdl ) {
        local $/;
        my $content = <$fh>;
        close $fh;
        return HTTP::Response->new(
            200, 'OK',
            HTTP::Headers->new('Content-Type' => 'text/xml; charset=utf-8'),
            $content,
        );
    }

    return HTTP::Response->new(
        404, 'Not Found',
        HTTP::Headers->new('Content-Type' => 'text/plain'),
        "WSDL file '$wsdl' not found.\n",
    );
}

sub _soap_response {
    my ($self, $daemon, $r) = @_;

    $daemon->request($r);
    SOAP::Transport::HTTP::Server::handle($daemon);
    return $daemon->response;
}

sub _send_response {
    my ($self, $c, $response) = @_;

    eval {
        local $SIG{PIPE} = sub { die "SIGPIPE" };
        $c->send_response($response);
    };
    die $@ if $@ && $@ !~ /^SIGPIPE/;
}

sub _close_connection {
    my ($self, $c) = @_;
    $c->can('shutdown') ? $c->shutdown(2) : $c->close;
    $c->close;
}

1;
```

Finally we can now create `soap_server.pl` as below:

```perl

#!/usr/bin/env perl

use strict;
use warnings;

use lib 'lib/';
use Calculator::Server;

my $server = Calculator::Server
    ->new( LocalPort => 8081 )
    ->dispatch_to('Calculator');

print "SOAP Server is running on http://localhost:8081/\n";
print "WSDL available at:  http://localhost:8081/?wsdl\n";
$server->handle;
```

And `soap_client.pl` as below:

```perl
#!/usr/bin/env perl

use strict;
use warnings;

use SOAP::Lite;

my $soap = SOAP::Lite
    ->proxy('http://localhost:8081/')
    ->uri('urn:Calculator');

print "Sending numbers 15 and 25 to the SOAP server...\n";

my $response = $soap->add_numbers(
    SOAP::Data->name('num1')->type('float')->value(15),
    SOAP::Data->name('num2')->type('float')->value(25),
);

if ($response->fault) {
    print "Error occurred:\n";
    print "  Fault Code:   " . $response->faultcode   . "\n";
    print "  Fault String: " . $response->faultstring . "\n";
}
else {
    print "Answer from SOAP Server: " . $response->result . "\n";
}
```

Start the `SOAP` server now:

```bash
$ WSDL_FILE=calculator.wsdl perl soap_server.pl
SOAP Server is running on http://localhost:8081/
WSDL available at:  http://localhost:8081/?wsdl
```

Time to run the client:

```bash
$ perl soap_client.pl
Sending numbers 15 and 25 to the SOAP server...
Answer from SOAP Server: 40
```

We can fetch `WSDL` file too as below:

```bash
$ curl http://localhost:8081/?wsdl
````

***
<br>

`Happy Hacking !!!`
