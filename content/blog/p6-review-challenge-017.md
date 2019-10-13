---
title: "Laurent Rosenfeld Weekly Review: Challenge - 017"
date: 2019-10-09T00:00:00+00:00
description: "Laurent Rosenfeld Weekly Review: Challenge - #017."
type: post
image: images/blog/p6-review-challenge-017.jpg
author: Laurent Rosenfeld
tags: ["Perl6"]
---
***
# Perl6 Solutions Weekly Review
***

## Task #1: Parsing URLs With a Perl 6 Grammar

This is derived from my [blog post](http://blogs.perl.org/users/laurent_r/2019/07/-perl-weekly-challenge.html) made in answer to the [Week 17 of the Perl Weekly Challenge](https://perlweeklychallenge.org/blog/perl-weekly-challenge-017/) organized by  <a href="http://blogs.perl.org/users/mohammad_s_anwar/">Mohammad S. Anwar</a> as well as answers made by others to the same challenge.

The challenge reads as follows:


*Create a script to parse URL and print the components of URL. According to Wiki page, the URL syntax is as below:*

    scheme:[//[userinfo@]host[:port]]path[?query][#fragment]

*For example: jdbc:mysql://user:password@localhost:3306/pwc?profile=true#h1*

    scheme:   jdbc:mysql
    userinfo: user:password
    host:     localhost
    port:     3306
    path:     /pwc
    query:    profile=true
    fragment: h1

## My Solution

It is quite possible to use regexes to solve this challenge (and that's what I did for my solution in Perl 5), but, in my humble opinion, the right way to parse a URL is of course to write a grammar, and this is great fun in Perl 6.

I can't explain  in detail how this works (as this would take many pages), but let me try to give an idea. First, we define a grammar, with a number of rules, regexes, or tokens. When we use a grammar with the `parse` method on a string, the parse method calls by default the TOP rule (or token) and tries to match this rule:

    rule TOP {
        <scheme> '//' <authority>? <path> [ '?' <query> ]? <fragment>?
    }

This rules looks for a `<scheme>` component, followed by `//`, followed by an optional `<authority>` component, followed by a `<path>`component, etc. A `<scheme>` component is defined by the `scheme` token:

    token scheme { \w+ [ ':' \w+]? ':'}

which is composed of a group of alphanumerical characters, followed by an optional colon and another group of alphanumerical characters, and ending with a colon.

Similarly, the optional `<authority>` component, if it exists, is defined by the `authority` token:

    token authority { [<userinfo> '@']? <host> [':' <port>]? }

An `authority` component is itself composed of an optional `<userinfo>`and `@`, followed by a `<host>`, followed by an optional colon and a `<port>`. As you probably guessed by now, these three sub-components will be defined in other tokens, and so on.

In the end, if the string is successfully parsed, the result is stored into the `$/` match object. We can then lookup for the various components with a hash-like syntax on the match object. So for example, the `<scheme>` component can be found in `$/<scheme>` or, in the code below, in `$match<scheme>`, since I assigned the parse result (the match object) to the `$match` variable.

Now the full code of the program:

``` Perl6
use v6;
# use Grammar::Tracer;

grammar URL {
    rule TOP {
        <scheme> '//' <authority>? <path> [ '?' <query> ]? <fragment>?
    }
    token scheme { \w+ [ ':' \w+]? ':'}
    token authority { [<userinfo> '@']? <host> [':' <port>]? }
    token userinfo { <user> [':' <password> ]?}
    token user { \w+ }
    token password { <-[ @ ]>+ }
    token host {
        || <hostname>
        || <ipv4>
        || <ipv6>
    }
    token hostname { \w+ [ '.' \w+ ]* }
    token ipv4 { <octet> ['.' <octet> ] ** 3 }
    token octet { (\d ** 1..3) <?{0 <= $0 <= 255 }>}
    token ipv6 { '[' <group> ** 8 ']' }
    token group { <xdigit> ** 4 }
    token port { \d+ }
    token path { '/' <segment>? [ '/' <segment> ]* }
    token segment { \w+ [ '::' \w+ ]? }
    token query {  \w+ '=' <[\w\s]>+ }
    token fragment { '#' <frag_id> }
    token frag_id { \w+ }
}
sub display (Str $label, Str $value) {
    printf "    %-15s:\t %-20s\n", $label, $value;
}

for ('jdbc:mysql://user:password@localhost:3306/pwc?profile=true#h1',
     'https://en.wikipedia.org/wiki/URL',
     'https://perlcon.eu/my',
     'https://www.perlmonks.org/?node=Seekers of Perl Wisdom',
     'https://metacpan.org/pod/Test::More'
    ) -> $url-string {
    my $match = URL.parse($url-string);
    if $match {
        say "Matched $url-string:";
        display "scheme", ~$match<scheme>;
        display "userinfo", ~$match<authority><userinfo>
            if defined $match<authority><userinfo>;
        display "host", ~$match<authority><host>
            if defined $match<authority><host>;
        display "port", ~$match<authority><port>
            if defined $match<authority><port>;
        display "path", ~$match<path>;
        display "query", ~$match<query> if defined $match<query>;
        display "fragment", ~$match<fragment> if defined $match<fragment>;
    } else {
        say "Not matched $url-string";
    }
}
```

And this is the output with our five test URLs:

    $ perl6  parse_url.p6
    Matched jdbc:mysql://user:password@localhost:3306/pwc?profile=true#h1:
        scheme         :         jdbc:mysql:
        userinfo       :         user:password
        host           :         localhost
        port           :         3306
        path           :         /pwc
        query          :         profile=true
        fragment       :         #h1
    Matched https://en.wikipedia.org/wiki/URL:
        scheme         :         https:
        host           :         en.wikipedia.org
        path           :         /wiki/URL
    Matched https://perlcon.eu/my:
        scheme         :         https:
        host           :         perlcon.eu
        path           :         /my
    Matched https://www.perlmonks.org/?node=Seekers of Perl Wisdom:
        scheme         :         https:
        host           :         www.perlmonks.org
        path           :         /
        query          :         node=Seekers of Perl Wisdom
    Matched https://metacpan.org/pod/Test::More:
        scheme         :         https:
        host           :         metacpan.org
        path           :         /pod/Test::More

Undoubtedly, many more tests would be needed, as URLs can take many forms and we tested only a few cases.


## Alternative Solutions

Since most solutions used regexes or grammars to perform the bulk of the work, it seems interesting to quote these grammars (except when they are too long) to provide a ground for comparisons.

[Arne Sommer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/arne-sommer/perl6/ch-2.p6) used a regex to parse URLs:

``` Perl6
if $url ~~
  /^
    (<[a..z]><[a..z 0..9 + . : \-]>*)\: # $0 scheme
    [\/\/                               # //
      [(.*[\:.+]?)\@]?                  # $1 userinfo (optional)
      (<[\w \. \-]>*)                   # $2 host
      [\:(\d+)]?                        # $3 port (optional)
      (\/?)                             # $4 path separator
    ]?                                  # $1-$4 are optional
    ([<[\w \d -] - [#?]>]+)?            # $5 path (optional)
    [\?(<[\w \d \- =]>*)]?              # $6 query (optional)
    [\#(.*)]?                           # $7 fragment (optional)
  $/
{ # ...
```

Note that I almost missed that Arne also wrote a [grammar-based solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/arne-sommer/perl6/url-parse-grammar).

[Noud](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/noud/perl6/ch-2.p6) also used a regex to parse the input. I can't resist showing his very compact `parse` subroutine:

``` Perl6
sub parse($url) {
    my @keys = <scheme userinfo host port path query fragment>;
    my $reg = / (\w+\:\w+)\:\/\/(\w+\:.+)\@(\w+)\:(\d+)(\/\w+)\?(.+)\#(\w+)$ /;

    return Hash.new(@keys Z ($url ~~ $reg).values);
}
```

[Francis J. Whittle](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/fjwhittle/perl6/ch-2.p6) created a full-fledged OOP program with three classes: `URL`, `URL::UserInfo`, and `A::URLish`.  Parsing itself is done with the `G::URLish` grammar:

``` Perl6
grammar G::URLish {
  regex TOP {
    ^ <scheme> < : :// >
    <userinfo>?
    [ <host> [ ':' <port> ]? '/' ]?
    <path>
    [ '?' <query> ]?
    [ '#' <fragment> ] ? $
  }
  proto regex userinfo      { * }
  regex userinfo:sym<user-pass> { <user> [ ':' <password> ]? '@'                             }
  regex user            { <.xpalpha>+                                                }
  regex password        { <.xpalpha>+                                                }
  regex host            { <.xpalpha>+                                                }
  token port            { <.digit>+                                                  }
  # For compatibility with the example, but I don't think : is valid here.
  regex scheme          { <.ialpha>+ [ ':' <.ialpha>+ ]?                             }
  regex path            { [ <.xpalpha>* ]+ % '/'                                     }
  regex query           { <param>+ % <[\&;]>                                         }
  regex param           { $<key> = [ <.xalpha>+ ] [ '=' $<value> = [ <.xalpha>+ ] ]? }
  token fragment        { <.xalpha>+                                                 }
  token xalpha          { <.alpha> | <.digit> | <.safe> | <.extra> | <.escape>       }
  token xpalpha         { <.xalpha> | '+'                                            }
  token ialpha          { <.alpha> [ <.xalpha>+ ]                                    }
  token alpha           { <[a..z A..Z]>                                              }
  token digit           { <[0..9]>                                                   }
  token safe            { <[$ \- _ @ . &]>                                           }
  token extra           { <[! * " ' ( ) ,]>                                          }
  token reserved        { <[= ; / # ? : ]> || ' '                                    }
  token escape          { '%' <[0..9 a..z A..Z]> ** 2                                }
  token national        { <[{ } | \[ \] \\ ^ ~]>                                     }
  token punctuation     { <[< >]>                                                    }
}
```

[Kevin Colyer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/kevin-colyer/perl6/ch-2.p6) created a `URL` grammar to parse the input. Kevin also wrote a voluminous test suite. And he used an actions class with a `TOP` method to populate a hash with the various components of the URL.

[Ozzy](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/ozzy/perl6/ch-2.p6) used a quite concise grammar:

``` Perl6
grammar G {
    regex TOP { ^ <scheme> ':' ['//' <authority>]? <path> ['?' <query>]? ['#' <fragment>]? $ }
    token scheme    { <+alpha-[_]> <[\w \+ \. \-]>+          }
    token authority { [<userinfo> '@']? <host> [':' <port>]? }
    token userinfo  {  <user> [':' <password>]?              }
    token user      { \w+           }
    token password  { \w*           }
    token host      { <[\w\.\[\]]>+ }
    token port      { \d+           }
    token path      { [ '/' \w+ ]+  }
    token query     { <[=\w]>+      }
    token fragment  { \w+           }
}
```

[Feng Chang](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/feng-chang/perl6/ch-2.p6) also created a `URL` grammar:


``` perl6
grammar URL {
    token TOP { ^
        <scheme> ':'
        [ '//'
            [ <userinfo> '@' ]?
            <host>
            [ ':' <port> ]?
        ]?
        <path> [ '?' <queries> ]? [ '#' <fragment> ]?
    $ }
    token       scheme { <id> }
    token     userinfo { <user> [ ':' <password> ]? }
    token         user { <id> }
    token     password { \w+ }
    token         host { [ <IPv4-address> | <domain-name> ] }
    token IPv4-address { [\d ** 1..3] ** 4 % '.' }
    token        dname { <[a..zA..Z]> <[-a..zA..Z0..9]>* }
    token  domain-name { <dname>+ % '.' }
    token         port { \d+ }
    token         path { '/' [<[a..zA..Z0..9]>+] *%% '/' }
    token          key { <id> }
    token        value { \w+ }
    token        query { <key> '=' <value> }
    token      queries { <query> +% '&' }
    token     fragment { <id> }
    token           id { <[a..zA..Z]> <[-+.a..zA..Z0..9]>* }
}
```

[Jaldhar H. Vyas](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/jaldhar-h-vyas/perl6/ch-2.p6) also created a `URL` grammar:

``` Perl6
grammar URL {
    token TOP {
        <Scheme> ':'
        [
            '//'?
            [ <Userinfo> '@' ]?
            <Host>
            [ ':' <Port> ]?
        ]?
        <Path>?  '?' <Query> ]? [ '#' <Fragment> ]?
    }
    token Scheme { <SchemeChar>+ }
    token Userinfo { <UserinfoChar>+ }
    token Host { <IPv4> | <Unreserved>+ }
    token Port { \d+ }
    token Path { <PathChar>+ }
    token Query { <QueryOrFragment>+ }
    token Fragment { <QueryOrFragment>+ }
    token SchemeChar { <[ A..Z a..z 0..9 + \- . ]> }
    token DecOctet { \d | <[1..9]>\d | 1\d\d | 2<[0..4]>\d | 25<[0..5]> }
    token HexOctet { <[ 0..9 A..F a..f ]> ** 2 }
    token IPv4 { <DecOctet> \. <DecOctet> \. <DecOctet> \. <DecOctet> }
    token PChar { <UserinfoChar> | '@' }
    token PathChar { <PChar> | '/' }
    token PctEncoded { \% <HexOctet> }
    token QueryOrFragment { <PChar> | \/ | \? }
    token SubDelim { <[ \! $ & \' \( \) * \+ \, \; \= ]> }
    token Unreserved { <[ A..Z a..z 0..9 \- . _ \~ ]> }
    token UserinfoChar { <Unreserved> | <PctEncoded> | <SubDelim> | ':' }
}
```

Jaldhar used an actions class with one method to display each of the URL components.

[Joelle Maslak](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/joelle-maslak/perl6/ch-2.p6) also defined a `URL` grammar. I like the way she used character class "subtractions" to define several of her tokens (for example `username`, `password`, etc.), leading to a fairly concise grammar:

``` Perl6
grammar URL {
    token TOP      {
        ^ <scheme> ':'
        [
            '//'
            [ <userinfo> '@' ]?
            <host>
            [ ':' <port> ]?
        ]?
        <path> [ '?' <query> ]? [ '#' <fragment> ]? $
    }
    token scheme   { <[A .. Z a .. z ]> <[ A .. Z a .. z 0 .. 9 . + - ]>* }
    token userinfo { <username> ':' <password> }
    token username { <[ \S ] - [ : ]>+ }
    token password { <[ \S ] - [ @ ]>* }
    token host     { <[ \S ] - [ : ? / \# ]>+ }
    token port     { <[ \S ] - [ ? / \# ]>+ }
    token path     { [ '/' <[ \S ] - [ ? \# ]>* ]? }
    token query    { <[ \S ] - [ \# ]>* }
    token fragment { \S* }
}
```

[Ruben Westerberg](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/ruben-westerberg/perl6/ch-2.p6) defined a relatively compact `URI` grammar:

``` Perl6
grammar URI {
    token TOP {<scheme>\:<authority>?<path>[\?<query>]?[\#<fragment>]?};##|<authority>};
    token scheme { :i(<alpha>[<[\-\.\+] + alnum>]*)};
    token path { (\/[<alnum>\/?]*)+};
    token authority { (\/\/)[<user>[\:<password>]?\@]?<host>[\:<port>]?};
    token user { (<alnum>+)};
    token password { ( <alnum> +)};
    token host { (<alnum>+)};
    token port { (<alnum>+)};
    token query { <qpair>[\&<qpair>]*};
    token qpair { (<qkey>\=<qval>)+};
    token qkey {<alnum>+};
    token qval {<alnum>+};
    token fragment { (<alnum>+)};
}
```

[Athanasius](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/athanasius/perl6/ch-2.p6) took a very different path compared to other challengers and used a Perl 5 module from the CPAN: `URI::Split`. He otherwise used regexes for validating components presumably not properly checked by the module (scheme and authority).

## SEE ALSO

Only two blogs this time:

Arne Sommer: https://perl6.eu/ackerman-url.html

Jaldar H. Vyas: https://www.braincells.com/perl/2019/07/perl_weekly_challenge_week_17.html


## Wrapping up

Please let me know if I forgot any of the challengers or if you think my explanation of your code misses something important.

If you want to participate to the Perl Weekly Challenge, please connect to [this site](https://perlweeklychallenge.org/).
