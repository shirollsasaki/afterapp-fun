#!/usr/bin/env bash
#
# publish-post.sh — Monica's blog publishing script
#
# Usage:
#   ./scripts/publish-post.sh <slug> <path-to-markdown-file>
#
# Example:
#   ./scripts/publish-post.sh "ai-replacing-finance-apps" /tmp/article.md
#
# The markdown file MUST have frontmatter:
#   ---
#   title: "Your Title Here"
#   description: "A short description for SEO"
#   date: "2026-02-24"
#   tags: ["tag1", "tag2"]
#   author: "Monica"
#   ---
#   Your article content here...
#
# Requirements:
#   - gh CLI authenticated (gh auth login)
#   - Write access to the repo
#
# What happens:
#   1. Reads the markdown file
#   2. Pushes it to content/blog/<slug>.md via GitHub API
#   3. Vercel auto-deploys from the push
#   4. Article goes live at afterapp.fun/blog/<slug>
#

set -euo pipefail

REPO="shirollsasaki/afterapp-fun"
BRANCH="main"

if [ $# -lt 2 ]; then
  echo "Usage: $0 <slug> <path-to-markdown-file>"
  echo "Example: $0 ai-replacing-finance-apps /tmp/article.md"
  exit 1
fi

SLUG="$1"
FILE_PATH="$2"

if [ ! -f "$FILE_PATH" ]; then
  echo "Error: File not found: $FILE_PATH"
  exit 1
fi

# Validate frontmatter exists
if ! head -1 "$FILE_PATH" | grep -q '^---'; then
  echo "Error: File must start with frontmatter (---)"
  exit 1
fi

DEST_PATH="content/blog/${SLUG}.md"
CONTENT=$(base64 < "$FILE_PATH")

echo "Publishing: ${SLUG}"
echo "  Repo: ${REPO}"
echo "  Path: ${DEST_PATH}"

# Check if file already exists (for updates)
EXISTING_SHA=""
EXISTING=$(gh api "repos/${REPO}/contents/${DEST_PATH}" --jq '.sha' 2>/dev/null || true)
if [ -n "$EXISTING" ]; then
  EXISTING_SHA="$EXISTING"
  echo "  Updating existing post..."
else
  echo "  Creating new post..."
fi

# Build the JSON payload
if [ -n "$EXISTING_SHA" ]; then
  PAYLOAD=$(jq -n \
    --arg message "blog: publish ${SLUG}" \
    --arg content "$CONTENT" \
    --arg branch "$BRANCH" \
    --arg sha "$EXISTING_SHA" \
    '{message: $message, content: $content, branch: $branch, sha: $sha}')
else
  PAYLOAD=$(jq -n \
    --arg message "blog: publish ${SLUG}" \
    --arg content "$CONTENT" \
    --arg branch "$BRANCH" \
    '{message: $message, content: $content, branch: $branch}')
fi

# Push via GitHub API
RESULT=$(echo "$PAYLOAD" | gh api "repos/${REPO}/contents/${DEST_PATH}" \
  --method PUT \
  --input - \
  --jq '.content.html_url' 2>&1)

echo ""
echo "✓ Published successfully!"
echo "  GitHub: ${RESULT}"
echo "  Live at: https://afterapp.fun/blog/${SLUG}"
echo ""
echo "  Vercel will auto-deploy in ~30 seconds."
