#!/bin/bash

# Check if week number is provided
if [ $# -ne 1 ]; then
    echo "Usage: $0 <week_number>"
    echo "Example: $0 3"
    exit 1
fi

# Get the week number and format it with leading zeros to 3 digits
week_num="$1"
formatted_week=$(printf "%03d" "$week_num")

echo "Processing week ${formatted_week}..."

# Run the scripts with the formatted week number
./script/update_challenge_markdown.sh "${week_num}"
./script/build_challenge_json.py "${week_num}"
hugo

# Check if the directory exists before trying to cat files
base_dir="docs/blog/perl-weekly-challenge-${formatted_week}"

if [ -d "$base_dir" ]; then
    echo -e "\n=== Contents of index.html ==="
    cat "${base_dir}/index.html"

    echo -e "\n=== Contents of post.json ==="
    cat "${base_dir}/post.json"

    echo -e "\n=== Contents of challenge.json ==="
    cat "${base_dir}/challenge.json"
else
    echo "Error: Directory ${base_dir} does not exist"
    exit 1
fi
