#!/usr/bin/env python3
"""
build_challenge.py - Generate challenge.json for one or more weeks

Usage:
  python3 build_challenge.py 362
  python3 build_challenge.py 360 361 362
  python3 build_challenge.py --all
"""

import sys
import re
import json
import glob
import os
from pathlib import Path

# FIX: resolve path properly to work from any directory
SITE_ROOT  = Path(__file__).resolve().parent.parent
CONTENT    = SITE_ROOT / "content" / "blog"
OUTPUT     = SITE_ROOT / "docs" / "blog"
API_OUT    = SITE_ROOT / "docs" # Where current.json will live
BASE_URL   = "https://theweeklychallenge.org"

def get_latest_week():
    search_pattern = str(CONTENT / "perl-weekly-challenge-*.md")
    files = glob.glob(search_pattern)
    nums = []
    for f in files:
        m = re.search(r'perl-weekly-challenge-(\d+)\.md$', f)
        if m:
            nums.append(int(m.group(1)))
    return max(nums) if nums else 0

def parse_front_matter(text):
    fm = {}
    m = re.match(r'^---\s*\n(.*?)\n---\s*\n', text, re.DOTALL)
    if not m:
        return fm, text
    yaml_block = m.group(1)
    body = text[m.end():]
    for line in yaml_block.splitlines():
        kv = re.match(r'^(\w+):\s*"?(.+?)"?\s*$', line)
        if kv:
            fm[kv.group(1)] = kv.group(2)
    return fm, body

def extract_task(raw, task_num):
    marker = f"Task {task_num}:"
    parts = raw.split(marker, 1)
    if len(parts) < 2:
        return "", "", ""

    after = parts[1]
    next_marker = f"## Task {task_num + 1}:"
    task_raw = after.split(next_marker)[0]

    first_line = task_raw.split("\n")[0].strip()
    title = re.sub(r'\s*\{[^}]*\}', '', first_line).strip()

    body_lines = task_raw.split("\n")[1:]
    body = "\n".join(body_lines)
    body = re.sub(r'(?m)^#{1,6}\s*\*\*Submitted by:\*\*.*\n?', '', body)
    body = re.sub(r'(?m)^\*{3,}\s*\n?', '', body)
    body = body.strip("\n\r\t ")

    desc = ""
    for line in body.splitlines():
        line = line.strip()
        if line:
            desc = line
            break
    return title, desc, body

def build_week(week_num, latest_week):
    md_file = CONTENT / f"perl-weekly-challenge-{week_num:03d}.md"
    if not md_file.exists():
        print(f"  ✗ Week {week_num}: markdown file not found")
        return False

    text = md_file.read_text(encoding='utf-8')
    fm, body = parse_front_matter(text)

    title = fm.get('title', f"The Weekly Challenge - {week_num}")
    date  = fm.get('date', '')[:10]
    url   = f"{BASE_URL}/blog/perl-weekly-challenge-{week_num}/"

    ext_t1_title, ext_t1_desc, t1_body = extract_task(body, 1)
    ext_t2_title, ext_t2_desc, t2_body = extract_task(body, 2)

    data = {
        "week":        week_num,
        "title":       title,
        "url":         url,
        "pubDate":     date,
        "latest_week": latest_week,
        "prev_week":   week_num - 1 if week_num > 1 else None,
        "next_week":   week_num + 1 if week_num < latest_week else None,
        "task1_title": fm.get('task1_title', ext_t1_title),
        "task1_desc":  fm.get('task1_desc', ext_t1_desc),
        "task1_body":  t1_body,
        "task2_title": fm.get('task2_title', ext_t2_title),
        "task2_desc":  fm.get('task2_desc', ext_t2_desc),
        "task2_body":  t2_body,
    }

    out_dir = OUTPUT / f"perl-weekly-challenge-{week_num}"
    out_dir.mkdir(parents=True, exist_ok=True)
    out_file = out_dir / "challenge.json"
    out_file.write_text(json.dumps(data, indent=2, ensure_ascii=False), encoding='utf-8')
    print(f"  ✓ Week {week_num}: {out_file}")

    # NEW: Link previous week to this one
    if week_num > 1:
        prev_f = OUTPUT / f"perl-weekly-challenge-{week_num - 1}" / "challenge.json"
        if prev_f.exists():
            with open(prev_f, 'r+') as f:
                p_data = json.load(f)
                p_data['next_week'] = week_num
                f.seek(0)
                json.dump(p_data, f, indent=2)
                f.truncate()

    return True

def main():
    args = sys.argv[1:]
    if not args:
        print(__doc__)
        sys.exit(1)

    latest_week = get_latest_week()
    print(f"Latest week detected: {latest_week}")

    if args == ['--all']:
        weeks = list(range(1, latest_week + 1))
    else:
        weeks = [int(a) for a in args]

    print(f"Building {len(weeks)} week(s)...")
    ok = sum(build_week(w, latest_week) for w in weeks)

    # NEW: Generate the current.json for the App
    (API_OUT / "current.json").write_text(json.dumps({"latest": latest_week}))
    print(f"  ✓ Updated current.json to {latest_week}")
    print(f"\nDone: {ok}/{len(weeks)} built successfully.")

if __name__ == '__main__':
    main()
