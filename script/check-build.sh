#!/bin/bash

DOCS="$(dirname "$0")/../docs"
DATA="$(dirname "$0")/../data"
ERRORS=0

check_file() {
    local file="$DOCS/$1"
    local desc="$2"
    local min_size="${3:-0}"

    if [ ! -f "$file" ]; then
        echo "❌ MISSING: $1 ($desc)"
        ERRORS=$((ERRORS + 1))
    elif [ "$min_size" -gt 0 ] && [ "$(wc -c < "$file")" -lt "$min_size" ]; then
        echo "❌ TOO SMALL: $1 ($desc) - expected at least ${min_size} bytes"
        ERRORS=$((ERRORS + 1))
    else
        echo "✅ OK: $1 ($desc)"
    fi
}

check_count() {
    local actual="$1"
    local min="$2"
    local desc="$3"
    if [ "$actual" -lt "$min" ]; then
        echo "❌ COUNT DROPPED: $actual $desc (must be at least $min)"
        ERRORS=$((ERRORS + 1))
    else
        echo "✅ OK: $actual $desc (min: $min)"
    fi
}

echo "Build Check .... "
echo ""
echo "Core files .... "
check_file "index.html"               "Homepage"                    10000
check_file "index.json"               "Site search index"         1000000
check_file "index.xml"                "RSS feed"                    10000
check_file "sitemap.xml"              "Sitemap"                      1000
check_file "404.html"                 "404 page"                     1000
check_file "CNAME"                    "CNAME"                           1

echo ""
echo "JSON API files .... "
check_file "blogs.json"               "Blogs JSON"                   1000
check_file "champions.json"           "Champions JSON"               1000
check_file "current.json"             "Current challenge JSON"        500
check_file "about.json"               "About JSON"                    500
check_file "regulars.json"            "Regulars JSON"                 500
check_file "guests-list.json"         "Guests list JSON"              500
check_file "perl-reviews.json"        "Perl reviews JSON"             500
check_file "raku-reviews.json"        "Raku reviews JSON"             500
check_file "guest-contributions.json" "Guest contributions JSON"     1000

echo ""
echo "Section pages .... "
check_file "about/index.html"              "About"                   1000
check_file "blog/index.html"               "Blog"                    1000
check_file "champions/index.html"          "Champions"               1000
check_file "challenges/index.html"         "Challenges"              1000
check_file "chart/index.html"              "Chart"                   1000
check_file "contact/index.html"            "Contact"                 1000
check_file "faq/index.html"                "FAQ"                     1000
check_file "guests/index.html"             "Guests"                  1000
check_file "guest-contributions/index.html" "Guest contributions"    1000
check_file "p5-reviews/index.html"         "Perl reviews"            1000
check_file "p6-reviews/index.html"         "Raku reviews"            1000
check_file "recaps/index.html"             "Recaps"                  1000
check_file "search/index.html"             "Search"                  1000
check_file "sponsors/index.html"           "Sponsors"                1000
check_file "team/index.html"               "Team"                    1000
check_file "privacy-policy/index.html"     "Privacy policy"          1000
check_file "license/index.html"            "License"                 1000
check_file "license/post.json"             "License JSON"             500

echo ""
echo "File count checks .... "
HTML_COUNT=$(find "$DOCS" -name "*.html" | wc -l)
JSON_COUNT=$(find "$DOCS" -name "*.json" | wc -l)
XML_COUNT=$(find "$DOCS"  -name "*.xml"  | wc -l)
YML_COUNT=$(find "$DATA"  -name "*.yml" -o -name "*.yaml" | wc -l)

check_count "$HTML_COUNT" 1482 "HTML pages  (baseline: 1482)"
check_count "$JSON_COUNT" 2466 "JSON files  (baseline: 2466)"
check_count "$XML_COUNT"   151 "XML files   (baseline: 151)"
check_count "$YML_COUNT"    16 "YML files   (baseline: 16)"

echo ""
if [ "$ERRORS" -eq 0 ]; then
    echo "✅ All checks passed!"
else
    echo "❌ $ERRORS check(s) failed!"
    exit 1
fi
