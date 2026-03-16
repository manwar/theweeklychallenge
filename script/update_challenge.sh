#!/bin/bash

# Check if week number is provided
if [ -z "$1" ]; then
    echo "Usage: ./update_challenge.sh <week_number>"
    echo "Example: ./update_challenge.sh 3"
    exit 1
fi

# 1. Format the week number with leading zeros (e.g., 3 -> 003)
WEEK_NUM=$(printf "%03d" $1)

# 2. Define file paths
INPUT_FILE="content/blog/perl-weekly-challenge-${WEEK_NUM}.md"
YAML_FILE="data/challenges.yml"
TEMP_FILE="challenge-${WEEK_NUM}.tmp"

# 3. Check if input file exists
if [ ! -f "$INPUT_FILE" ]; then
    echo "Error: File $INPUT_FILE not found."
    exit 1
fi

echo "Processing Week $WEEK_NUM..."

# 4. Run the Perl conversion
# Note: Ensure your perl script is named 'convert_challenge.pl'
perl script/convert_challenge.pl "$INPUT_FILE" "$YAML_FILE" > "$TEMP_FILE"

# 5. Check if perl script succeeded before overwriting
if [ $? -eq 0 ]; then
    mv "$TEMP_FILE" "$INPUT_FILE"
    echo "Successfully updated $INPUT_FILE with new format and titles."
else
    echo "Error: Perl script failed. Original file not modified."
    rm -f "$TEMP_FILE"
    exit 1
fi
