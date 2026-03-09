#!/usr/bin/env python3
"""
Run this script whenever guest-contribution.md is updated:
  python3 generate-guest-yaml.py

Can be run from anywhere. Locates the Hugo site root by searching
upward from the current working directory for 'config.toml'.

Reads:  <site-root>/content/blog/guest-contribution.md
Writes: <site-root>/data/guestcontributions.yaml
"""

import re, yaml, os, sys


def find_site_root():
    """Walk up from the script's own location until we find config.toml."""
    path = os.path.abspath(os.path.dirname(__file__))
    while True:
        if os.path.exists(os.path.join(path, 'config.toml')):
            return path
        parent = os.path.dirname(path)
        if parent == path:
            return None
        path = parent


ROOT = find_site_root()

if ROOT is None:
    print("ERROR: could not find Hugo site root (no config.toml found in current or parent directories)")
    print("       Run this script from within your Hugo site directory.")
    sys.exit(1)

MARKDOWN = os.path.join(ROOT, 'content', 'blog', 'guest-contribution.md')
OUTPUT   = os.path.join(ROOT, 'data', 'guestcontributions.yaml')

if not os.path.exists(MARKDOWN):
    print(f"ERROR: {MARKDOWN} not found")
    sys.exit(1)

print(f"Site root : {ROOT}")
print(f"Reading   : {MARKDOWN}")
print(f"Writing   : {OUTPUT}")
print()

with open(MARKDOWN, 'r') as f:
    content = f.read()

# Strip embedded script/style blocks
content = re.sub(r'<script>.*?</script>', '', content, flags=re.DOTALL)
content = re.sub(r'<style>.*?</style>',  '', content, flags=re.DOTALL)

# Find all week sections
week_re = re.compile(
    r'##\s+\[The Weekly Challenge\s*-\s*(\d+)\]\(([^)]+)\)\s*\{#\d+\}',
    re.MULTILINE
)
weeks = [(int(m.group(1)), m.group(2), m.start(), m.end())
         for m in week_re.finditer(content)]

contrib_re = re.compile(
    r'\*\*(.+?)\*\*\s+shared\s+solutions?\s+to\s+(.*?)\s+in\s+\*\*(.+?)\*\*'
)

all_weeks = []
errors = []

for i, (week_num, blog_url, start, end) in enumerate(weeks):
    next_start = weeks[i+1][2] if i+1 < len(weeks) else len(content)
    section = content[end:next_start]

    entries = []
    for line in section.split('\n'):
        line = line.strip().lstrip('#').strip()
        if not line or 'shared solution' not in line:
            continue
        m = contrib_re.search(line)
        if not m:
            errors.append(f"W{week_num}: {line[:80]}")
            continue
        name      = m.group(1).strip()
        tasks_str = m.group(2).strip()
        lang      = m.group(3).strip().rstrip('.')
        t1 = re.search(r'\[(?:\*\*)?Task #1(?:\*\*)?\]\(([^)]+)\)', tasks_str)
        t2 = re.search(r'\[(?:\*\*)?Task #2(?:\*\*)?\]\(([^)]+)\)', tasks_str)
        entry = {'name': name, 'language': lang}
        if t1: entry['task1'] = t1.group(1)
        if t2: entry['task2'] = t2.group(1)
        entries.append(entry)

    all_weeks.append({'week': week_num, 'blog': blog_url, 'contributions': entries})

# Sort newest first
all_weeks.sort(key=lambda w: w['week'], reverse=True)

os.makedirs(os.path.dirname(OUTPUT), exist_ok=True)
with open(OUTPUT, 'w') as f:
    yaml.dump(all_weeks, f, default_flow_style=False, allow_unicode=True, sort_keys=False)

print(f"✓ Written {len(all_weeks)} weeks, {sum(len(w['contributions']) for w in all_weeks)} entries")
if errors:
    print(f"  {len(errors)} parse error(s):")
    for e in errors[:5]: print(f"    {e}")
