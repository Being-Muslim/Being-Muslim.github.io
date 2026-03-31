#!/bin/bash
# Add {base} prefix to all internal href and src attributes in .svelte files

cd "$(dirname "$0")/.."

# Find all svelte files with internal hrefs
find src/routes -name "*.svelte" | while read file; do
    # Check if file has any internal href="/..." or src="/images/..."
    if grep -qE 'href="/' "$file" || grep -qE 'src="/images/' "$file" || grep -qE 'src="/fonts/' "$file"; then

        # Add import if not already present
        if ! grep -q "import.*base.*from.*\\\$app/paths" "$file"; then
            if grep -q '<script' "$file"; then
                # Add after the first line of <script> tag
                sed -i '' '/^<script/a\
\	import { base } from '\''$app/paths'\'';
' "$file"
            fi
        fi

        # Replace href="/ with href="{base}/ (but not href="https://", href="http://", href="#", href="{")
        sed -i '' 's|href="/\([^"]*\)"|href="{base}/\1"|g' "$file"

        # Replace src="/images/ with src="{base}/images/
        sed -i '' 's|src="/images/\([^"]*\)"|src="{base}/images/\1"|g' "$file"

        # Replace src="/fonts/ with src="{base}/fonts/
        sed -i '' 's|src="/fonts/\([^"]*\)"|src="{base}/fonts/\1"|g' "$file"

        echo "Updated: $file"
    fi
done

echo "Done!"
