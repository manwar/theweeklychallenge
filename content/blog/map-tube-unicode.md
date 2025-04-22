---
title: "Map::Tube Unicode"
date: 2025-04-21T00:00:00+00:00
description: "Discussion about the support of unicode station name in Map::Tube."
type: post
image: images/blog/map-tube-unicode.png
author: Mohammad Sajid Anwar
tags: ["perl"]
---

#### **DISCLAIMER:** Image is generated using `FREE` version of `ChatGPT`.
***

<br>

Just a few days ago, I shared an experimental feature added to the [**Map::Tube**](https://metacpan.org/dist/Map-Tube), routing framework. It involved adding metadata to stations. You can find out more about it in [**this post**](/blog/map-tube-experimental).

In the same spirit, here's one more fature that has been introduced: support for `Unicode` characters in station names.

To give you some context, when I originally wrote this framework, it was primarily for the `London Tube Map`. Later, it expanded to include maps from other cities, some of which had station names containing `Unicode` characters. In fact, some of my maps, like those for [**Barcelona**](https://metacpan.org/pod/Map::Tube::Barcelona) and [**Madrid**](https://metacpan.org/dist/Map-Tube-Madrid) had many station names using `Unicode`.

I must confess, I've never felt entirely comfortable with `Unicode` characters.

So, to keep things simple. I conveniently converted the names to their `ASCII` equivalents to keep the framework happy.

However, when I read the [**first post**](https://peateasea.de/building-map-tube-whatever-maps-a-howto-first-steps) in a `five-part series` by `Paul Cochrane`, I realised it was only a matter of time before this approach would cause issues, specially since he's working on a map for `Hannover, Germany`, which is likely to include `Unicode` characters in its station names.

I thought, why not invest a little time and see if this can be supported without a major overhaul?

To explore this, I decided to create a very basic map with just four stations and two lines.

<br>

```bash

    À  ---  Ï  ---  È

            |
            |

            Ù

```

<br>

The main purpose of this experiment was to test the station names containing `Unicode` characters.

I find it a bit tricky to type `Unicode` characters using my `US-layout` keyboard.

A quick and easy workaround is to copy the characters from online resource.

Here's what I ended up after some initial trial and error: `unicode-map.xml`

<br>

```bash
<?xml version="1.0" encoding="UTF-8"?>
<tube name="UnicodeMap">
    <lines>
       <line id="L1" name="Èà" />
       <line id="L2" name="Àé" />
    </lines>

    <stations>
       <!-- Junction -->
       <station id="J1" name="Ï" line="L1,L2" link="S1,S3,S4" />

       <!-- Line 1: À <-> Ï <-> È -->
       <station id="S1" name="À" line="L1"    link="J1"       />
       <station id="S3" name="È" line="L1"    link="J1"       />

       <!-- Line 2: Ù <-> Ï <-> È -->
       <station id="S4" name="Ù" line="L2"    link="J1"       />
    </stations>
</tube>
```

<br>

Did you notice, that I even included line names with `Unicode` characters?

For this experiment, however, I'm only interested in station names.

I want to see how the current framework, [**Map::Tube v4.07**](https://metacpan.org/dist/Map-Tube) behaves when using this map.

To test it, I wrote this simple script: `unicode-map.pl`

<br>

```perl
package UnicodeMap;

use open ':std', ':encoding(UTF-8)';
use v5.38;
use Moo;
use namespace::clean;

has xml => (is => 'ro', default => sub { return File::Spec->catfile('unicode-map.xml') });
with 'Map::Tube';

package main;

say UnicodeMap->new->get_shortest_route('À', 'Ù');
```

<br>

Time to test the code:

<br>

```bash
$ perl unicode-map.pl
Map::Tube::get_node_by_name(): ERROR: Invalid Station Name [Ã].
```

<br>

As expected, the `Unicode` characters are causing some trouble.

Here's a quick change to the framework to support the `Unicode` character in station names.

<br>

```perl
--- a/lib/Map/Tube.pm
+++ b/lib/Map/Tube.pm
@@ -13,6 +13,9 @@ Version 4.07

 =cut

+use Unicode::Normalize;
+use Encode qw(decode_utf8);
+
 use 5.006;
 use XML::Twig;
 use Data::Dumper;
@@ -874,7 +877,7 @@ sub _get_all_routes {
 sub _map_node_name {
     my ($self, $name, $id) = @_;

-    $self->{name_to_id}->{uc($name)} = $id;
+    $self->{name_to_id}->{NFC(uc($name))} = $id;
 }

 sub _validate_input {
@@ -1266,7 +1269,9 @@ sub _get_node_id {
     return unless defined $name;
     $name =~ s/^\s+//;
     $name =~ s/\s+$//;
-    return $self->{name_to_id}->{uc($name)};
+    $name = decode_utf8($name) if !utf8::is_utf8($name) && utf8::valid($name);
+    $name = NFC(uc($name));
+    return $self->{name_to_id}->{$name};
 }
```

<br>

I know, it's not foolproof yet, but it's not a bad attempt either.

With the above change to the framework, let's re-run the test:

<br>

```bash
$ perl unicode-map.pl
Route: À (Èà), Ï (Èà, Àé), Ù (Àé)
```

<br>

It's hard to believe what I just saw.

We now have support for `Unicode` characters in station names!

I'm sure `Unicode` experts might spot gaps in my approach.

I'd love to hear your thoughts if you can help me improve it further.

Feel free to reach out to me at `mohammad.anwar@yahoo.com`.

<br>

## [2025-04-22] UPDATE
***

<br>

Just a day after I published my proposed change to support `Unicode` characters in station names, I decided to extend it allow in line names too.

Before I make any changes, let's update the test script to see how the framework currently reacts with line name having `Unicode` character.

<br>

```perl
package UnicodeMap;

use open ':std', ':encoding(UTF-8)';
use v5.38;
use Moo;
use namespace::clean;

has xml => (is => 'ro', default => sub { return File::Spec->catfile('unicode.xml') });
with 'Map::Tube';

package main;

my $map = UnicodeMap->new;
say "Route   : ", $map->get_shortest_route('À', 'Ù');
say "Line    : ", $map->get_line_by_name('Èà');
say "Stations: ", join(" -> ", @{$map->get_stations('Èà')});
```

<br>

Now run the script:

<br>

```bash
$ perl unicode-map.pl
Route   : À (Èà), Ï (Èà, Àé), Ù (Àé)
Map::Tube::get_line_by_name(): ERROR: Invalid Line Name [Èà].
```

<br>

As expected, it is throwing error.

I have applied similar patch to the line name as above and it looks like this:

<br>

```perl
--- a/lib/Map/Tube.pm
+++ b/lib/Map/Tube.pm
@@ -418,6 +418,7 @@ sub get_line_by_name {
         line_number => $caller[2] }) unless defined $name;

     my $line = $self->_get_line_object_by_name($name);
+    $name = _decode_utf8_if_needed($name);
     Map::Tube::Exception::InvalidLineName->throw({
         method      => __PACKAGE__."::get_line_by_name",
         message     => "ERROR: Invalid Line Name [$name].",
@@ -935,7 +935,7 @@ sub _init_map {
     }
     my $master_line_data = {};
     foreach (@lines) {
-        $master_line_data->{lc $_->{id}} = 1;
+        $master_line_data->{NFC(lc $_->{id})} = 1;
     }

     my $has_station_index = {};
@@ -967,7 +967,8 @@ sub _init_map {
                 $has_station_index->{$_line} = 1;
             }

-            if (!exists $master_line_data->{lc $_line}) {
+            $_line = _decode_utf8_if_needed($_line);
+            if (!exists $master_line_data->{NFC(lc $_line)}) {
                 Map::Tube::Exception::InvalidStationLineId->throw({
                     method      => $method,
                     message     => "ERROR: Invalid line [$_line] for station [$name].",
@@ -1046,6 +1047,16 @@ sub _init_map {
     $self->tables($tables);
 }

+sub _decode_utf8_if_needed {
+    my ($data) = @_;
+
+    if (!utf8::is_utf8($data) && utf8::valid($data)) {
+        $data = decode_utf8($data);
+    }
+
+    return $data;
+}
+
 sub _is_directly_linked {
     my ($self, $start_station, $end_station) = @_;
     my $linked_stations = $self->get_linked_stations($start_station);
@@ -1277,7 +1288,8 @@ sub _get_node_id {
 sub _get_line_object_by_name {
     my ($self, $name) = @_;

-    $name = uc($name);
+    $name = _decode_utf8_if_needed($name);
+    $name = NFC(uc($name));
     foreach my $line_id (keys %{$self->{_lines}}) {
         my $line = $self->{_lines}->{$line_id};
         if (defined $line && defined $line->name) {
```

<br>

Let's re-run the script:

<br>

```bash
$ perl unicode-map.pl
Route   : À (Èà), Ï (Èà, Àé), Ù (Àé)
Line    : Èà
Stations: Ï (Èà, Àé) -> À (Èà) -> È (Èà)
```

<br>

Much better, right?

The combined change now looks like this:

<br>

```perl
--- a/lib/Map/Tube.pm
+++ b/lib/Map/Tube.pm
@@ -13,6 +13,9 @@ Version 4.07

 =cut

+use Unicode::Normalize;
+use Encode qw(decode_utf8);
+
 use 5.006;
 use XML::Twig;
 use Data::Dumper;
@@ -874,7 +877,7 @@ sub _get_all_routes {
 sub _map_node_name {
     my ($self, $name, $id) = @_;

-    $self->{name_to_id}->{uc($name)} = $id;
+    $self->{name_to_id}->{NFC(uc($name))} = $id;
 }

 sub _validate_input {
@@ -932,7 +935,7 @@ sub _init_map {
     }
     my $master_line_data = {};
     foreach (@lines) {
-        $master_line_data->{lc $_->{id}} = 1;
+        $master_line_data->{NFC(lc $_->{id})} = 1;
     }

     my $has_station_index = {};
@@ -964,7 +967,8 @@ sub _init_map {
                 $has_station_index->{$_line} = 1;
             }

-            if (!exists $master_line_data->{lc $_line}) {
+            $_line = _decode_utf8_if_needed($_line);
+            if (!exists $master_line_data->{NFC(lc $_line)}) {
                 Map::Tube::Exception::InvalidStationLineId->throw({
                     method      => $method,
                     message     => "ERROR: Invalid line [$_line] for station [$name].",
@@ -1043,6 +1047,16 @@ sub _init_map {
     $self->tables($tables);
 }

+sub _decode_utf8_if_needed {
+    my ($data) = @_;
+
+    if (!utf8::is_utf8($data) && utf8::valid($data)) {
+        $data = decode_utf8($data);
+    }
+
+    return $data;
+}
+
 sub _is_directly_linked {
     my ($self, $start_station, $end_station) = @_;
     my $linked_stations = $self->get_linked_stations($start_station);
@@ -1266,13 +1280,16 @@ sub _get_node_id {
     return unless defined $name;
     $name =~ s/^\s+//;
     $name =~ s/\s+$//;
-    return $self->{name_to_id}->{uc($name)};
+    $name = _decode_utf8_if_needed($name);
+    $name = NFC(uc($name));
+    return $self->{name_to_id}->{$name};
 }

 sub _get_line_object_by_name {
     my ($self, $name) = @_;

-    $name = uc($name);
+    $name = _decode_utf8_if_needed($name);
+    $name = NFC(uc($name));
     foreach my $line_id (keys %{$self->{_lines}}) {
         my $line = $self->{_lines}->{$line_id};
         if (defined $line && defined $line->name) {
```

<br>

**NOTE:** I haven't uploaded the patch to `CPAN` yet. I'll try to do it soon.

***

<br>

`Happy Hacking!!`
