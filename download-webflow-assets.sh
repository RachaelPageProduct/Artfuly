#!/bin/bash
# Downloads all Webflow CDN assets into public/images/webflow-cdn/
# Then replaces all CDN URLs in src/ with local paths

DEST="public/images/webflow-cdn"
SRC_DIR="src"

echo "=== Extracting CDN URLs ==="
grep -roh "https://cdn\.prod\.website-files\.com/[^\"' )>]*" "$SRC_DIR" | sort -u > /tmp/webflow-urls.txt
echo "Found $(wc -l < /tmp/webflow-urls.txt) unique URLs"

echo ""
echo "=== Downloading assets ==="
while IFS= read -r url; do
  # Decode %20 etc and get just the filename part after the last /
  filename=$(python3 -c "import urllib.parse, sys; print(urllib.parse.unquote(sys.argv[1].split('/')[-1]))" "$url")
  dest_file="$DEST/$filename"

  if [ -f "$dest_file" ]; then
    echo "  SKIP (exists): $filename"
  else
    echo "  Downloading: $filename"
    curl -s -L --max-time 30 -o "$dest_file" "$url"
    if [ $? -ne 0 ]; then
      echo "  FAILED: $url"
    fi
  fi
done < /tmp/webflow-urls.txt

echo ""
echo "=== Replacing CDN URLs in source files ==="
while IFS= read -r url; do
  filename=$(python3 -c "import urllib.parse, sys; print(urllib.parse.unquote(sys.argv[1].split('/')[-1]))" "$url")
  local_path="/images/webflow-cdn/$filename"

  # Escape special chars for sed
  escaped_url=$(printf '%s\n' "$url" | sed 's/[[\.*^$()+?{|]/\\&/g')

  grep -rl "$url" "$SRC_DIR" | while IFS= read -r file; do
    sed -i '' "s|$url|$local_path|g" "$file"
    echo "  Updated: $file → $local_path"
  done
done < /tmp/webflow-urls.txt

echo ""
echo "=== Done ==="
echo "Check public/images/webflow-cdn/ for downloaded files"
echo "Check src/ files — CDN URLs should now be replaced with /images/webflow-cdn/..."
