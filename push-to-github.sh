#!/bin/bash
# Run this AFTER creating the repo on GitHub (see README or steps below).

cd "$(dirname "$0")"

# Portfolio repo: nikulkumar-dabhi.github.io (GitHub: Nikulkumar-Dabhi)
USERNAME="nikulkumar-dabhi"
REPO="${USERNAME}.github.io"
URL="https://github.com/Nikulkumar-Dabhi/${REPO}.git"

if git remote get-url origin &>/dev/null; then
  git remote set-url origin "$URL"
else
  git remote add origin "$URL"
fi

echo "Pushing to $URL ..."
git push -u origin main

if [ $? -eq 0 ]; then
  echo ""
  echo "Done! Enable the site:"
  echo "1. Open: https://github.com/Nikulkumar-Dabhi/nikulkumar-dabhi.github.io/settings/pages"
  echo "   Source: Deploy from branch → main → / (root) → Save"
  echo "2. Wait 1–2 min, then visit: https://nikulkumar-dabhi.github.io"
fi
