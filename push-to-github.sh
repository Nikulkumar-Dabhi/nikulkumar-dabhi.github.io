#!/bin/bash
# Run this AFTER creating the repo on GitHub (see README or steps below).

cd "$(dirname "$0")"

# Replace YOUR_GITHUB_USERNAME with your actual GitHub username if different
USERNAME="${GITHUB_USERNAME:-nikulkumar-dabhi}"
REPO="${USERNAME}.github.io"
URL="https://github.com/${USERNAME}/${REPO}.git"

if git remote get-url origin &>/dev/null; then
  git remote set-url origin "$URL"
else
  git remote add origin "$URL"
fi

echo "Pushing to $URL ..."
git push -u origin main

if [ $? -eq 0 ]; then
  echo ""
  echo "Done! Next:"
  echo "1. GitHub repo → Settings → Pages → Source: Deploy from branch → main → / (root) → Save"
  echo "2. Profile → Edit profile → Website: https://${USERNAME}.github.io → Save"
fi
