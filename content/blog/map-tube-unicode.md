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

To explore this, I decided to created a very basic map with just four stations and two lines.

The main purpose of this experiment was to test the station names containing `Unicode` characters.

I find it a bit tricky to type `Unicode` characters using my `US-layout` keyboard.

A quick and easy workaround is to copy the characters from an online resource.

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

For this experiment, However, I'm only interested in station names.

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

![map-tube-unicode-1](/images/blog/map-tube-unicode-1.png)

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

***

<br>

`Happy Hacking!!`
