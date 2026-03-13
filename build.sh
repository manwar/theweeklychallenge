#!/bin/bash
set -e

echo "Building site..."
hugo

echo "Cleaning up stray challenge.json files..."
find docs/blog -name "challenge.json" | grep -v "perl-weekly-challenge" | xargs rm -f
rm -f docs/privacy-policy/challenge.json

echo "Done! Ready to git push."
