---
title: "OSI Network Model"
date: 2026-09-11T00:00:00+00:00
description: "Gentle introduction to OSI network model."
type: post
image: images/blog/osi-network-model.jpg
author: Mohammad Sajid Anwar
tags: ["Network", "OSI"]
---

#### **DISCLAIMER:** Image is generated using `ChatGPT`.
***
<br>

For understanding networking in detail, one can envision **OSI Network Model** which is the universal model for networking comprising of **7 layers**, as a postal service delivering gifts worldwide.

Just like sending letters or packages requires something more than simply tossing the letters into the air and expecting it to be delivered.

To send out a letter one needs to first write it and encode it or put it in an envelope if needed, place that into the mail box, put the address on the envelope, either deliver to the actual post office or give it to the delivery boy.

Each layer in **OSI** has a separate role and is responsible for one essential aspect in the process.

## Layer 7: Application layer

This is the layer that the end users are going to see on their devices be it a browser or email application or WhatsApp.

> Example: For instance, a user might type a message on WhatsApp as **"Hello World"**

> Purpose: It plays the role of the user interface and creates the raw information that needs to be transmitted over internet.

## Layer 6: Presentation Layer

Computers communicate using different languages and formats.

This layer processes your information and gets it ready for shipment through transformation, compression, and secrecy.

> Example: Turning your text into a coded message, such as using **TLS** encryption, so that no burglar can understand if he intercepts the shipment.

> Purpose: Prepares and hides your data.

## Layer 5: Session Layer

Before data transmission, two devices have to set the line for communication.

The function of the **Session Layer** is to open, control, and stop this connection.

> Example: Calling your friend and waiting for the other person to say **"Hello?"** after which you can start your conversation.

> Purpose: Establishes the connection between the two parties and helps maintain this connection until it is needed.

## Layer 4: Transport Layer

This layer determines the shipment techniques chosen for transportation, either emphasising exactness (as in registered mail) or speed (like in live television).

Here **TCP** and **QUIC** are in use.

> Example: For instance, if you have to send a bulky book, you would divide the book into pages, put every page in individual small envelopes, and verify that every page reaches its destination.

> Purpose: Chunking large files into smaller packets and checking that every piece is present and requesting reroute if necessary.

## Layer 3: Network Layer

To ship an item around the world, addresses (IP Addresses) and routes must be known.

> Example: Put **"London, UK"** on your envelope. Routers would interpret your address and use it to find the shortest route possible.

> Purpose: Determining **IP addresses** and directing packets across other networks.

## Layer 2: Data Link Layer

When your parcel arrives at the sorting station in your area, the global **IP addresses** take a backseat to the individual address in the area, referred to as the **MAC Address**.

> Example: The carrier goes around the neighborhood delivering the letter directly into the letterbox of House number 42.

> Purpose: Making direct transfers between machines on the same local network.

## Layer 1: Physical Layer

This refers to the physical medium of transmitting the signals, the cables, radio signals, or light beams in reality.

> Example: The pavement where the truck moves on or the wire in the telephone tower.

> Purpose: Converting data to signal form, electric pulse through cable, stream of light through the fiber optics, or radio waves in the air.

---
<br>

Here is a breakdown of bash script visualises each of the **7 OSI** layers as **"Hello World"** moves down the network stack and gets verified at the receiving end.

## Script Architecture & Setup

The script begins with **#!/usr/bin/env bash** and **set -e** to halt execution if a command throws an unhandled error.

It defines **ANSI** escape codes to color-code output headers and variables.

Also defines, **pause()**, a helper function. It clears the terminal screen and waits for user input, **read -r**, turning the demo into an interactive, step-by-step walkthrough.

**File:** `osi_hello.sh`

```bash
#!/usr/bin/env bash

set -e

PORT=9999
MESSAGE="Hello World"

BOLD="\033[1m"
CYAN="\033[1;36m"
GREEN="\033[1;32m"
YELLOW="\033[1;33m"
MAGENTA="\033[1;35m"
BLUE="\033[1;34m"
RED="\033[1;31m"
NC="\033[0m"

pause() {
    echo -e "\n${YELLOW}Press [ENTER] to see what happens at the next layer...${NC}"
    read -r
    clear
}

clear
echo -e "${BOLD}${CYAN}   TRACKING REAL-TIME 'Hello World' DISPATCH THROUGH OSI LAYERS    ${NC}"
echo -e "${BOLD}${CYAN}-------------------------------------------------------------------${NC}"
pause
```

## OSI &nbsp; Layer &nbsp; Breakdown

### Layer 7: Application Layer

At the top of the stack, the script initialises the raw string **MESSAGE="Hello World"**.

It measures payload length using **wc -c** (11 bytes + 1 byte for newline 0x0A) and displays the payload structure.

Application-level protocols (like **HTTP** or **SMTP**) deal purely with human-readable or application-native data.

```bash
echo -e "${BOLD}${MAGENTA}[LAYER 7: APPLICATION LAYER]${NC}"
echo -e "Creating application data payload...\n"

# Dynamic length calculation
PAYLOAD_LEN=$(echo -n "$MESSAGE" | wc -c | tr -d ' ')

echo -e "Raw Payload String: ${GREEN}\"${MESSAGE}\"${NC}"
echo -e "Payload Length:     ${GREEN}${PAYLOAD_LEN} bytes${NC}"
echo -e "Structure:          Unformatted ASCII String + Line Feed (0x0A)"
pause

```

### Layer 6: Presentation Layer

This layer formats, encodes, compresses, or encrypts raw data for transport.

It uses **xxd -p** (or falls back to od) to convert each **ASCII** character of **"Hello World"** into its hexadecimal byte matrix (e.g., **'H'** becomes **0x48**).

It converts abstract characters into standardisation formats (**UTF-8/ASCII bytes**) that different operating systems can parse uniformly.

```bash
echo -e "${BOLD}${MAGENTA}[LAYER 6: PRESENTATION LAYER]${NC}"
echo -e "Translating ASCII characters into raw Hexadecimal/Byte representation...\n"

echo -e "${BLUE}Character to Byte Translation Matrix:${NC}"
printf " Char: "
for (( i=0; i<${#MESSAGE}; i++ )); do
    printf "%4s" "${MESSAGE:$i:1}"
done
echo ""
printf " Hex:  "
if command -v xxd &>/dev/null; then
    echo -n "$MESSAGE" | xxd -p | sed 's/../ 0x&/g'
else
    echo -n "$MESSAGE" | od -An -tx1 | sed 's/ / 0x/g'
fi
echo ""

echo -e "\nPayload Encoding: ${GREEN}ASCII / UTF-8${NC} (No encryption applied)"
pause
```

### Layer 5: Session Layer

The session layer manages persistent connections between applications.

It cleans up **/tmp/osi_rcv.txt** and launches a background **Netcat** server (**nc -l -p 9999**) to listen on **loopback port 9999**.

It establishes and binds local socket endpoints before data exchange begins.

```bash
echo -e "${BOLD}${MAGENTA}[LAYER 5: SESSION LAYER]${NC}"
echo -e "Establishing transport socket session...\n"

# Clean temporary buffer
rm -f /tmp/osi_rcv.txt

# Bind background listener
nc -l -p $PORT > /tmp/osi_rcv.txt 2>/dev/null &
SERVER_PID=$!
sleep 0.5

# Dynamic Session Inspection
LISTEN_ADDR=$(ss -tuln 2>/dev/null | grep ":$PORT" | awk '{print $5}' | head -n1)

echo -e "Session Status:     ${GREEN}ACTIVE (PID $SERVER_PID)${NC}"
echo -e "Session Bind:       ${CYAN}${LISTEN_ADDR:-"*:$PORT"}${NC}"
echo -e "Session Control:    Socket initialised via local system API"
pause

```

### Layer 4: Transport Layer

Transport protocols manage port-to-port multiplexing, flow control, and transmission reliability.

It sends the payload using nc with cross-platform flags (**-N** or **-w 1**) to ensure socket auto-closure.

It then inspects the active socket using **ss** or **netstat**.

Encapsulates the payload into a **TCP** segment with Source/Destination ports and control flags (e.g., **[PSH, ACK]**).

```bash
echo -e "${BOLD}${MAGENTA}[LAYER 4: TRANSPORT LAYER]${NC}"
echo -e "Encapsulating into TCP Segment (Port addressing & Sequence tracking)...\n"

# Hold TCP connection open briefly for live socket state capture
( sleep 0.1; echo "$MESSAGE" ) | nc -w 1 127.0.0.1 $PORT 2>/dev/null &
CLIENT_PID=$!

sleep 0.05

echo -e "${BLUE} Live Socket Inspection (Layer 4 State)${NC}"
if command -v ss &>/dev/null; then
    ss -tunp state established "( dport = :$PORT or sport = :$PORT )" 2>/dev/null || \
    ss -tun state established 2>/dev/null | grep ":$PORT" || true
else
    netstat -tun 2>/dev/null | grep ":$PORT" || true
fi

# Dynamic port discovery
EPHEMERAL_PORT=$(ss -tun state established "( dport = :$PORT )" 2>/dev/null | awk 'NR==2 {print $4}' | awk -F: '{print $NF}')

wait $CLIENT_PID 2>/dev/null || true

# Query kernel network sysfs to check if TCP Timestamps are enabled
TCP_BASE_HDR=20
TCP_OPTIONS_LEN=0

# Check sysctl state for TCP timestamps (1 = enabled, 0 = disabled)
TS_ENABLED=$(cat /proc/sys/net/ipv4/tcp_timestamps 2>/dev/null || echo "1")

if [ "$TS_ENABLED" -eq 1 ]; then
    # Standard TCP timestamp option header adds exactly 12 bytes (NOP + NOP + TSopt)
    TCP_OPTIONS_LEN=12
fi
DYNAMIC_TCP_HDR_LEN=$(( TCP_BASE_HDR + TCP_OPTIONS_LEN ))

echo -e "\nGenerated TCP Header Info:"
echo -e "  Source Port:      ${CYAN}${EPHEMERAL_PORT:-"Dynamic Ephemeral"}${NC}"
echo -e "  Destination Port: ${CYAN}${PORT}${NC}"
echo -e "  Control Flags:    ${GREEN}[PSH, ACK]${NC} (Push data immediately, ACK received connection)"
echo -e "  TCP Header Size:  ${DYNAMIC_TCP_HDR_LEN} bytes (${TCP_BASE_HDR}B Base + ${TCP_OPTIONS_LEN}B Timestamp Option)"
pause
```

### Layer 3: Network Layer

The network layer handles logical IP addressing and path routing.

It formats the generated IP packet header metadata, mapping local address **127.0.0.1** to destination **127.0.0.1** and marking Protocol ID 6 (**TCP**).

It wraps the TCP segment inside an IP packet frame (~64 total bytes).

```bash
echo -e "${BOLD}${MAGENTA}[LAYER 3: NETWORK LAYER]${NC}"
echo -e "Encapsulating TCP Segment into IP Packet...\n"

# Dynamic host IP resolution (falls back to active system loopback if offline)
HOST_IP=$(ip route get 1.1.1.1 2>/dev/null | awk '{print $7; exit}')
if [ -z "$HOST_IP" ]; then
    HOST_IP=$(hostname -I 2>/dev/null | awk '{print $1}')
fi
SRC_IP=${HOST_IP:-"127.0.0.1"}

# Dynamic calculation of total packet length (IP Header + TCP Header + Payload)
TCP_HDR_LEN=${DYNAMIC_TCP_HDR_LEN}
IP_HDR_LEN=20
TOTAL_PACKET_SIZE=$(( IP_HDR_LEN + TCP_HDR_LEN + PAYLOAD_LEN + 1 ))

echo -e "${BLUE}Generated IP Packet Header Info:${NC}"
echo -e "  Source IP:        ${CYAN}${SRC_IP}${NC}"
echo -e "  Destination IP:   ${CYAN}127.0.0.1${NC}"
echo -e "  IP Protocol ID:   ${GREEN}6${NC} (Explicitly specifies TCP payload)"
echo -e "  Total Packet Size: ~${TOTAL_PACKET_SIZE} bytes (${IP_HDR_LEN}B IP + ${TCP_HDR_LEN}B TCP + $((PAYLOAD_LEN + 1))B Payload)"
pause
```

### Layer 2: Data Link Layer

Data link handling manages physical node-to-node frame delivery via hardware addresses.

It performs a multi-interface check across **eth0**, **wlan0**, **en0**, and **lo** using **ip link** or **ifconfig** to fetch an active hardware **MAC address**.

It attaches Ethernet II framing (**0x0800** for **IPv4**) and MAC addressing metadata.

```bash
echo -e "${BOLD}${MAGENTA}[LAYER 2: DATA LINK LAYER]${NC}"
echo -e "Encapsulating IP Packet into Ethernet Frame...\n"

# Dynamic MAC address discovery using regex matching (excluding 00:00:00:00:00:00 loopback)
MAC_ADDR=$(ip link show 2>/dev/null | grep -E -o '([0-9a-fA-F]{2}:){5}[0-9a-fA-F]{2}' | grep -v '00:00:00:00:00:00' | head -n1)

if [ -z "$MAC_ADDR" ]; then
    for sys_iface in /sys/class/net/*; do
        ifname=$(basename "$sys_iface")
        if [ "$ifname" != "lo" ] && [ -f "$sys_iface/address" ]; then
            candidate=$(cat "$sys_iface/address")
            if [ -n "$candidate" ] && [ "$candidate" != "00:00:00:00:00:00" ]; then
                MAC_ADDR="$candidate"
                break
            fi
        fi
    done
fi

echo -e "${BLUE}Frame Metadata & Addressing:${NC}"
echo -e "  Source MAC:       ${CYAN}${MAC_ADDR:-"No active hardware NIC found"}${NC}"
echo -e "  Frame Type:       ${GREEN}0x0800${NC} (Ethernet II framing - IPv4)"
echo -e "  CRC Checksum:     Calculated at network interface driver level"
pause
```

### Layer 1: Physical Layer

The lowest level turns structured frames into electrical, optical, or radio signals.

It prints the exact hexadecimal frame stream (**48 65 6c 6c 6f 20 57 6f 72 6c 64 0a**) alongside the raw binary bit representation (**01001000 01100101...**) generated from **ASCII** bit-shifts.

It demonstrates how abstract data ultimately transmits across physical hardware as **1s** and **0s**.

```bash
echo -e "${BOLD}${MAGENTA}[LAYER 1: PHYSICAL LAYER]${NC}"
echo -e "Converting encapsulated packet into physical electrical/optical signal bits...\n"

# Dynamic Hex Stream Generation
HEX_STREAM=$(echo -n "$MESSAGE" | xxd -p 2>/dev/null || echo -n "$MESSAGE" | od -An -tx1 | tr -d ' \n')

echo -e "${BLUE}Raw Hexadecimal Frame Stream on Wire/Loopback Medium:${NC}"
echo -e "  ${YELLOW}${HEX_STREAM}0a${NC}\n"

echo -e "${BLUE}Raw Binary Signal Stream (Bits transmitted over Physical Interface):${NC}"
echo -n "  "
for (( i=0; i<${#MESSAGE}; i++ )); do
    char="${MESSAGE:$i:1}"
    printf "%08b " "'$char"
done
echo -e "\n"
pause
```

### Receiver Verification

Once the physical bits arrive at the destination, the operating system reverses the process (decapsulation).

The script reads **/tmp/osi_rcv.txt** and compares the received payload against the original **"Hello World"** string.

```bash
echo -e "${BOLD}${GREEN}                  RECEIVER END-RESULT VERIFICATION                 ${NC}"
echo -e "${BOLD}${GREEN}-------------------------------------------------------------------${NC}"

sleep 0.5
RECEIVED=$(cat /tmp/osi_rcv.txt 2>/dev/null || echo "")

echo -e "Decapsulated Data Received at Layer 7: ${CYAN}\"${RECEIVED}\"${NC}\n"

if [ "$MESSAGE" = "$RECEIVED" ]; then
    echo -e "${GREEN} SUCCESS: Physical bits correctly decoded back into 'Hello World'${NC}"
else
    echo -e "${RED} ERROR: Receiver mismatch.${NC}"
fi
```

## Live Demo

```bash
$ sudo osi_hello.sh
   TRACKING REAL-TIME 'Hello World' DISPATCH THROUGH OSI LAYERS
-------------------------------------------------------------------

Press [ENTER] to see what happens at the next layer...
```

---

```bash
[LAYER 7: APPLICATION LAYER]
Creating application data payload...

Raw Payload String: "Hello World"
Payload Length:     11 bytes
Structure:          Unformatted ASCII String + Line Feed (0x0A)

Press [ENTER] to see what happens at the next layer...
```

---

```bash
[LAYER 6: PRESENTATION LAYER]
Translating ASCII characters into raw Hexadecimal/Byte representation...

Character to Byte Translation Matrix:
 Char:    H   e    l    l    o          W    o    r   l    d
 Hex:   0x48 0x65 0x6c 0x6c 0x6f 0x20 0x57 0x6f 0x72 0x6c 0x64


Payload Encoding: ASCII / UTF-8 (No encryption applied)

Press [ENTER] to see what happens at the next layer...
```

---

```bash
[LAYER 5: SESSION LAYER]
Establishing transport socket session...

Session Status:     ACTIVE (PID 117404)
Session Bind:       0.0.0.0:9999
Session Control:    Socket initialised via local system API

Press [ENTER] to see what happens at the next layer...
```

---

```bash
[LAYER 4: TRANSPORT LAYER]
Encapsulating into TCP Segment (Port addressing & Sequence tracking)...

Live Socket Inspection (Layer 4 State)
Netid  Recv-Q  Send-Q  Local Address:Port  Peer Address:Port  Process
tcp    0       0       127.0.0.1:9999      127.0.0.1:58748    users:(("nc",pid=117404,fd=4))
tcp    0       0       127.0.0.1:58748     127.0.0.1:9999     users:(("nc",pid=117462,fd=3))

Generated TCP Header Info:
  Source Port:      58748
  Destination Port: 9999
  Control Flags:    [PSH, ACK] (Push data immediately, ACK received connection)
  TCP Header Size:  32 bytes (20B Base + 12B Timestamp Option)

Press [ENTER] to see what happens at the next layer...
```

---

```bash
[LAYER 3: NETWORK LAYER]
Encapsulating TCP Segment into IP Packet...

Generated IP Packet Header Info:
  Source IP:        172.19.28.199
  Destination IP:   127.0.0.1
  IP Protocol ID:   6 (Explicitly specifies TCP payload)
  Total Packet Size: ~64 bytes (20B IP + 32B TCP + 12B Payload)

Press [ENTER] to see what happens at the next layer...
```

---

```bash
[LAYER 2: DATA LINK LAYER]
Encapsulating IP Packet into Ethernet Frame...

Frame Metadata & Addressing:
  Source MAC:       00:15:5d:1b:8a:5c
  Frame Type:       0x0800 (Ethernet II framing - IPv4)
  CRC Checksum:     Calculated at network interface driver level

Press [ENTER] to see what happens at the next layer...
```

---

```bash
[LAYER 1: PHYSICAL LAYER]
Converting encapsulated packet into physical electrical/optical signal bits...

Raw Hexadecimal Frame Stream on Wire/Loopback Medium:
  48656c6c6f20576f726c640a

Raw Binary Signal Stream (Bits transmitted over Physical Interface):
        'H       'e       'l       'l       'o       '        'W       'o       'r       'l       'd


Press [ENTER] to see what happens at the next layer...
```

---

```bash
                  RECEIVER END-RESULT VERIFICATION
-------------------------------------------------------------------
Decapsulated Data Received at Layer 7: "Hello World"

 SUCCESS: Physical bits correctly decoded back into 'Hello World'
```

***

<br>

`Happy Hacking !!!`
