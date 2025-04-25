---
title: "Map::Tube experimental"
date: 2025-04-18T00:00:00+00:00
description: "Discussion about the experimental features in Map::Tube."
type: post
image: images/blog/map-tube-experimental.png
author: Mohammad Sajid Anwar
tags: ["perl"]
---

#### **DISCLAIMER:** Image is generated using `FREE` version of `ChatGPT`.
***

<br>

[**Map::Tube**](https://metacpan.org/dist/Map-Tube) is one of my earliest creations. It was made public on `25th October 2010` to be precise.

I've given talks on the topic at various `Perl` conferences and even contributed an article to the [**Perl Advent Calendar 2024**](https://perladvent.org/2024/2024-12-11.html).

There's also a `5-part blog series` initiated by `Pual Cochrane` on the subject. You can check out [**part one**](https://peateasea.de/building-map-tube-whatever-maps-a-howto-first-steps) and I highly recommend following the rest of the series as it gets published.

On `Apr 15th, 2025`, I received an email asking whether there were any plans to add metadata to stations links such as phyiscal distance or estimated tansit times. Honestly the idea never crossed my mind before.

That question has been on my mind ever since. I couldn't stop thinking how this could be implemented without requiring too many changes or breaking existing maps.

My initial thought was how can metadata be allowed in the map file in the simplest way possible?

I was looking for a minimalist solution.

For those who are new to `Map::Tube`, here's a sample map, from the [**cookbook**](https://metacpan.org/pod/Map::Tube::Cookbook):

<br>

```bash
    A <-> B <-> F <-> G <-> H
    A <-> C <-> F
    A <-> C <-> D <-> E <-> F
```

<br>

The same represented in a diagram as below:

<br>

```bash

             A(1)  -----  B(2)
             /               \
          C(3)   --------  F(6) --- G(7) ---- H(8)
             \               /
             D(4)  -----  E(5)

```

<br>

To keep it simple, we have used single line connecting all the stations.

The data file for the above map in `XML` format looks like below:

<br>

```bash
<?xml version="1.0" encoding="UTF-8"?>
<tube name="Sample">
    <lines>
       <line id="L1" name="L1" />
    </lines>
    <stations>
       <station id="L01" name="A" line="L1:1" link="L02,L03"         />
       <station id="L02" name="B" line="L1:2" link="L01,L06"         />
       <station id="L03" name="C" line="L1:3" link="L01,L04,L06"     />
       <station id="L04" name="D" line="L1:4" link="L03,L05"         />
       <station id="L05" name="E" line="L1:5" link="L04,L06"         />
       <station id="L06" name="F" line="L1:6" link="L02,L03,L05,L07" />
       <station id="L07" name="G" line="L1:7" link="L06,L08"         />
       <station id="L08" name="H" line="L1:8" link="L07"             />
    </stations>
</tube>
```

<br>

And the same in `JSON` format looks like below:

<br>

```bash
{
    "name"     : "Sample",
    "lines"    : { "line"    : [ { "id" : "L1", "name" : "L1" } ] },
    "stations" : { "station" : [ { "id" : "L01", "name": "A", "line": "L1:1", "link": "L02,L03"         },
                                 { "id" : "L02", "name": "B", "line": "L1:2", "link": "L01,L06"         },
                                 { "id" : "L03", "name": "C", "line": "L1:3", "link": "L01,L04,L06"     },
                                 { "id" : "L04", "name": "D", "line": "L1:4", "link": "L03,L05"         },
                                 { "id" : "L05", "name": "E", "line": "L1:5", "link": "L04,L06"         },
                                 { "id" : "L06", "name": "F", "line": "L1:6", "link": "L02,L03,L05,L07" },
                                 { "id" : "L07", "name": "G", "line": "L1:7", "link": "L06,L08"         },
                                 { "id" : "L08", "name": "H", "line": "L1:8", "link": "L07"             }
                               ]
                 }
}
```

<br>

Going back to the original question, how do I allow station metadata in the map file?

My first instinct was to include it in the `"link"` attribute of `"station"` element.

Since a station can be linked to one or more other stations, we could easily attach metadata related to each linked station.

The next question then becomes how do we add metadata for the `distance` and `duration` of each linked station?

For example, consider a station `L01` that is linked to two stations `L02` and `L03`:

<br>

```bash
    { "id" : "L01", "name": "A", "line": "L1:1", "link": "L02,L03" }
```

<br>

The linked stations of `L01` now looks like below:

<br>

```bash
    Before: "link": "L02,L03"
    After : "link": "L02|D-1.5|T-30,L03|D-1.2|T-25"
```

<br>

The whole definition would now look like below:

<br>

```bash
    { "id" : "L01", "name": "A", "line": "L1:1", "link": "L02|D-1.5|T-30,L03|D-1.2|T-25" }
```

<br>

What does this mean?

It means the distance from station `L01` to `L02` is `1.5 km` and the estimated time to reach it is `30 minutes`.

I'm not too concerned about the unit for now.

To be honest, this approach looks a bit scary.

There's a real possibility it could break existing maps.

Luckily, I have a rather large and very complicated [**London Tube Map**](https://metacpan.org/dist/Map-Tube-London) that I can use to test any changes.

To avoid issues, I should make this change optional as not every map will include this kind of metadata.

So, I decided to take the sample map above as a base and convert it into this new structure shown below:

<br>

```bash
<?xml version="1.0" encoding="UTF-8"?>
<tube name="Sample">
    <lines>
       <line id="L1" name="L1" />
       <line id="L2" name="L2" />
    </lines>

    <attributes distance="km" duration="min" />

    <stations>
       <!-- Junctions -->
       <station id="J01" name="C" line="L1:3,L2:1" link="S01|D-1.7|T-15,S04|D-1.1|T-13,J02|D-2.5|T-30" />
       <station id="J02" name="F" line="L1:6,L2:2" link="S02|D-2.2|T-25,S05|D-2.1|T-23,S07|D-2.5|T-18,J01|D-1.5|T-30" />

       <!-- Line 1 -->
       <!-- Route 1: A <-> C <-> D <-> E <-> F <-> G <-> H -->
       <!-- Route 2: A <-> B <-> E <-> F <-> G <-> H -->
       <station id="S01" name="A" line="L1:1"      link="S02|D-1.5|T-10,J01|D-1.7|T-15" />
       <station id="S02" name="B" line="L1:2"      link="S01|D-1.5|T-10,J02|D-2.2|T-25" />
       <station id="S04" name="D" line="L1:4"      link="J01|D-1.1|T-8,S05|D-1.4|T-13"  />
       <station id="S05" name="E" line="L1:5"      link="S04|D-1.4|T-13,J02|D-2.1|T-23" />

       <!-- Line 2 -->
       <!-- Route 3: C <-> F <-> G <-> H -->
       <station id="S07" name="G" line="L1:7,L2:3" link="J02|D-2.5|T-28,S08|D-1.2|T-10" />
       <station id="S08" name="H" line="L1:8,L2:4" link="S07|D-1.2|T-10" />
    </stations>
</tube>
```

<br>

If you noticed, I have two lines, `L1` and `L2`, in the above sample map.

Also we have added units in the map file like below:

<br>

```bash
    <attributes distance="km" duration="min" />
```

<br>

To make it easy to read, I have grouped the stations.

In my experiment today, I am going to use the `XML` formatted data but in case you are looking for `JSON` formatted data for the sample map, I used this one-liner to convert the `XML` data into `JSON` format.

<br>

```perl
#!/usr/bin/env perl

use v5.38;
use XML::Twig;
use JSON::MaybeXS;

say JSON::MaybeXS->new
                 ->canonical(1)
                 ->utf8
                 ->pretty
                 ->encode(XML::Twig->new
                                   ->parsefile($ARGV[0])
                                   ->simplify(keyattr => 'stations', forcearray => 0));
```

<br>

This is the result, you end up with in the end:

<br>

```bash
{
   "attributes" : {
      "distance" : "km",
      "duration" : "min"
   },
   "lines" : {
      "line" : [
         {
            "id" : "L1",
            "name" : "L1"
         },
         {
            "id" : "L2",
            "name" : "L2"
         }
      ]
   },
   "name" : "Sample",
   "stations" : {
      "station" : [
         {
            "id" : "J01",
            "line" : "L1:3,L2:1",
            "link" : "S01|D-1.7|T-15,S04|D-1.1|T-13,J02|D-2.5|T-30",
            "name" : "C"
         },
         {
            "id" : "J02",
            "line" : "L1:6,L2:2",
            "link" : "S02|D-2.2|T-25,S05|D-2.1|T-23,S07|D-2.5|T-18,J01|D-1.5|T-30",
            "name" : "F"
         },
         {
            "id" : "S01",
            "line" : "L1:1",
            "link" : "S02|D-1.5|T-10,J01|D-1.7|T-15",
            "name" : "A"
         },
         {
            "id" : "S02",
            "line" : "L1:2",
            "link" : "S01|D-1.5|T-10,J02|D-2.2|T-25",
            "name" : "B"
         },
         {
            "id" : "S04",
            "line" : "L1:4",
            "link" : "J01|D-1.1|T-8,S05|D-1.4|T-13",
            "name" : "D"
         },
         {
            "id" : "S05",
            "line" : "L1:5",
            "link" : "S04|D-1.4|T-13,J02|D-2.1|T-23",
            "name" : "E"
         },
         {
            "id" : "S07",
            "line" : "L1:7,L2:3",
            "link" : "J02|D-2.5|T-28,S08|D-1.2|T-10",
            "name" : "G"
         },
         {
            "id" : "S08",
            "line" : "L1:8,L2:4",
            "link" : "S07|D-1.2|T-10",
            "name" : "H"
         }
      ]
   }
}
```

<br>

Since this is an experimental feature, I didn't want to touch the [**master copy**](https://github.com/manwar/Map-Tube).

I could have created a branch and made the changes there but I decided against it.

Why? Because as of today, I'm not sure what the future holds for this experiment.

Instead, I chose to create a separate repository on [**GitHub**](https://github.com/manwar/Map-Tube-Experimental) purely for experimental purposes.

It's based on `Map::Tube v4.07`.

Let's get to the real work.

We've added a new optional attribute `units` to the `Map::Tube` package.

<br>

<div class="container mt-4">
    <div class="row g-4 justify-content-center">
        <img src="/images/blog/map-tube-1.png" class="img-fluid" alt="" />
    </div>
</div>

<br>

This attribute would capture the units for the `distance` and the `duration`, something like below:

<br>

```perl
    { distance => 'km', duration => 'min' }
```

<br>

Next, we have added an optional attribute `attrs` to the `Map::Tube::Node` package.

<br>

<div class="container mt-4">
    <div class="row g-4 justify-content-center">
        <img src="/images/blog/map-tube-2.png" class="img-fluid" alt="" />
    </div>
</div>

<br>

This new attribute would capture the following information for each station:

<br>

```bash
       link="S02|D-1.5|T-10,J01|D-1.7|T-15"
```

<br>

into something like below:

<br>

```bash
       {
            distance => { 'S02' => 1.5, 'J01' => 1.7 },
            duration => { 'S02' => 10,  'J01' => 15  },
       }
```

<br>

Now I have created a new subroutine `_convert_station_to_node()` as below, which would populate the new attribute `attrs` of `Map::Tube::Node` package.

<br>

<div class="container mt-4">
    <div class="row g-4 justify-content-center">
        <img src="/images/blog/map-tube-3.png" class="img-fluid" alt="" />
    </div>
</div>

<br>

Now time to plug-in the new subroutine to the `sub _init_map()`, this is core subroutine which initialises the map data.

If you noticed, I am also populating the `units` attribute of the `Map::Tube` package.

<br>

<div class="container mt-4">
    <div class="row g-4 justify-content-center">
        <img src="/images/blog/map-tube-4.png" class="img-fluid" alt="" />
    </div>
</div>

<br>

We need to make some space in the `Map::Tube::Route` package to capture the units detail. It is optional.

We have new attribute `units` as shown below:

<br>

<div class="container mt-4">
    <div class="row g-4 justify-content-center">
        <img src="/images/blog/map-tube-5.png" class="img-fluid" alt="" />
    </div>
</div>

<br>

Finally we need subroutines to calculate the distance and durations of the final route.

<br>

<div class="container mt-4">
    <div class="row g-4 justify-content-center">
        <img src="/images/blog/map-tube-6.png" class="img-fluid" alt="" />
    </div>
</div>

<br>

<div class="container mt-4">
    <div class="row g-4 justify-content-center">
        <img src="/images/blog/map-tube-7.png" class="img-fluid" alt="" />
    </div>
</div>

<br>

One final bit, we need to populate the newly added attribute `units` in the `Map::Tube::Route` package.

And the best place to do that when we calculate the shortest route in the `sub get_shortest_route()` in the `Map::Tube` package.

<br>

<div class="container mt-4">
    <div class="row g-4 justify-content-center">
        <img src="/images/blog/map-tube-8.png" class="img-fluid" alt="" />
    </div>
</div>

<br>

I think we are good to go now.

The core framework is ready to serve the new map data we have defined above.

Let's create simple script to test the workflow: `find-route.pl`

<br>

```perl
package Sample;

use v5.38;
use Moo;
use File::Spec;

has xml => (
    is      => 'ro',
    default => sub { return File::Spec->catfile('sample.xml') });

with 'Map::Tube';

package main;

my $route = Sample->new->get_shortest_route($ARGV[0], $ARGV[1]);

print "Route: $route\n";
print "Distance: ", $route->distance, "\n";
print "Duration: ", $route->duration, "\n";
```

<br>

Testing time:

<br>

```bash
$ perl find-route.pl 'C' 'G'
Route: C (L1, L2), F (L1, L2), G (L1, L2)
Distance: 5.00 km
Duration: 48 min
```

<br>

```bash
$ perl find-route.pl 'E' 'H'
Route: E (L1), F (L1, L2), G (L1, L2), H (L1, L2)
Distance: 5.80 km
Duration: 51 min
```

<br>

As I mentioned above this change in the framework is currently saved in a separate repository, feel free to play with it.

In the meantime, I will continue to explore this further.

If you have any suggestion please feel free to share with me: `mohammad.anwar@yahoo.com`

<br>

***

<br>

`Happy Hacking!!`
