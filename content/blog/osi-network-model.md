---
title: "OSI Network Model"
date: 2026-09-12T00:00:00+00:00
description: "Gentle introduction to OSI network model."
type: post
image: images/blog/osi-network-model.jpg
author: Mohammad Sajid Anwar
tags: ["Network", "OSI"]
---

#### **DISCLAIMER:** Image is generated using `ChatGPT`.
***
<br>

To understand how networking works from the ground up, imagine the **OSI Model**, the standard 7-layer framework for networking as a postal service delivering an international gift package.

When sending a letter or package, you don't just throw an item into the air and hope it arrives.

You write a message, translate or wrap it if needed, put it in an envelope, write addresses, hand it to a driver, and ship it over roads or cables.

Each layer handles one specific step of the journey.

## Layer 7: Application Layer (The Writer)

This is what you actually interact with on your device—your web browser, email app, or WhatsApp.

> Practical Example: You type a message into WhatsApp: "Happy Birthday!"

> Role: It acts as the user interface and creates the raw request or data you want to send across the internet.

## Layer 6: Presentation Layer (The Translator & Gift Wrapper)

Computers speak in different languages and formats.

This layer takes your message and gets it ready for transport by translating, compressing, and encrypting it.

> Practical Example: Translating your message into a secret code (like using TLS encryption) so no thief can read it if they steal the package on its way.

> Role: Formats, encrypts, and compresses data (e.g., converting text into binary code or encrypting a password).

## Layer 5: Session Layer (The Phone Call Operator)

Before sending data, two devices need an open line of communication.

The Session Layer opens, manages, and closes this connection.

> Practical Example: Calling a friend and waiting for them to say "Hello?" before speaking, keeping the line open while you chat, and saying "Goodbye" before hanging up.

> Role: Coordinates the connection, ensuring two devices stay connected for as long as they need to exchange information.

## Layer 4: Transport Layer (The Logistics & Delivery Strategy)

This layer decides how your data gets shipped—whether it prioritises absolute accuracy (like a registered letter) or pure speed (like a live TV broadcast).

This is where **TCP** and **QUIC** live.

> Practical Example: If you are sending a huge book, you cut the book up into individual numbered pages, put each page into its own small envelope, and track whether every single page arrives safely.

> Role: Breaks big files into smaller pieces (called "packets"), checks for missing pieces, and requests redelivery if something gets lost.

## Layer 3: Network Layer (The GPS & Postal Addresses)

To get a package across the world, you need global addresses (IP Addresses) and a map to figure out the best highways to take.

> Practical Example: Writing "London, UK" on the envelope. Routers along the way read this address to decide which highway gets your envelope closer to the UK.

> Role: Assigns IP addresses and routes packets across different networks across the globe.

## Layer 2: Data Link Layer (The Local Delivery Driver)

Once your package reaches your local neighborhood sorting office, global IP addresses don't matter as much as the specific local house address (known as a MAC Address).

> Practical Example: The local mail carrier drives from house to house within your specific neighborhood to drop the envelope directly into your mailbox at House #42.

> Role: Handles direct machine-to-machine transfers on the exact same local network (like your home Wi-Fi network).

## Layer 1: Physical Layer (The Road & Cables)

This is the physical medium that carries the actual signals—the physical cables, radio waves, or light beams.

> Practical Example: The asphalt road the delivery truck drives on, or the copper wires inside a telephone pole.

> Role: Converts data into raw physical signals—electrical pulses through copper cables, flashes of light through fiber optics, or radio waves through the air (Wi-Fi).

    Layer       Name            Simple Analogy                  Real World Example
    7           Application     Writing the message             Web browsers (HTTP), Email (SMTP)
    6           Presentation    Encrypting & translating        TLS encryption, JPEG images
    5           Session         Opening/closing the call        Keeping you logged into a website
    4           Transport       Splitting into tracked pages    TCP, UDP, QUIC
    3           Network         The GPS & country addresses     IP Addresses, Routers
    2           Data Link       Local delivery to house #       MAC Addresses, Wi-Fi switches
    1           Physical        Roads & airwaves                Ethernet cables, Fiber, 5G waves

To see real networking layers moving live on your machine, you can run a receiver server and a sender client in two terminal windows while capturing the live traffic with tcpdump.

## Step 1: Start a Live Server (Terminal 1)

Open your first terminal window and run a netcat listener.

This listens at Layer 4 (Transport, Port 8080) for incoming application data:

```bash
$ nc -l -p 8080
```

## Step 2: Start the Live Packet Sniffer (Terminal 2)

Open a second terminal window and run **tcpdump**.

This hooks directly into **Layer 2 (Network Interface)** to display raw binary bytes and headers passing over your **loopback network (lo)**:

```bash
$ echo "Hello Layer World" | nc 127.0.0.1 8080
```

## What You Will See

In Terminal 2, **tcpdump** will instantly print the intercepted frame.

The output reveals the exact structure of the nested layers:

```bash
12:00:01.123456 IP 127.0.0.1.52341 > 127.0.0.1.8080: Flags [P.], seq 1:18, ack 1
  0x0000:  4500 0x003d 1a2b 4000 4006 7cce 7f00 0001  E..=..@.@.|.....   <-- Layer 3 (IP Header)
  0x0010:  7f00 0001 cc75 1f90 0000 0001 0000 0001  .....u..........     <-- Layer 4 (TCP Ports 52341 -> 8080)
  0x0020:  8018 01f5 fe31 0000 0101 080a 0102 0304  .....1..........
  0x0030:  4865 6c6c 6f20 4c61 7965 7220 576f 726c  Hello Layer Worl     <-- Layer 7 (Application Payload)
  0x0040:  640a                                     d.
```

## How the packet is structured in hex:

Layer 3 (Network)

> 4500 indicates IPv4 version and 20-byte length; **7f00 0001** is hex for **127.0.0.1**.

Layer 4 (Transport)

> **1f90** converts to port **8080** in decimal.

Layer 7 (Application)

> **48 65 6c 6c 6f...** translates directly to ASCII **"Hello Layer World"**.

***

<br>

`Happy Hacking !!!`
