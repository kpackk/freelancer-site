#!/bin/bash
set -e

PROJECT_DIR="/root/freelancer-site"
APP_NAME="freelancer-site"
BUILD_DIR=".next_build"

echo "=== Zero-downtime deploy: freelancer-site ==="
echo "$(date): Starting deploy..."

cd "$PROJECT_DIR"

# 1. Install deps if needed
if [ ! -d "node_modules" ] || [ "package.json" -nt "node_modules/.package-lock.json" ]; then
  echo "Installing dependencies..."
  npm ci --production=false
fi

# 2. Build into separate directory (old .next keeps serving)
echo "Building Next.js into $BUILD_DIR..."
rm -rf "$BUILD_DIR"
NEXT_BUILD_DIR="$BUILD_DIR" NODE_ENV=production npx next build

if [ ! -f "$BUILD_DIR/BUILD_ID" ]; then
  echo "ERROR: Build failed — $BUILD_DIR/BUILD_ID not found"
  rm -rf "$BUILD_DIR"
  exit 1
fi

echo "Build successful: $(cat "$BUILD_DIR/BUILD_ID")"

# 3. Atomic swap: .next_build → .next
echo "Swapping build directories..."
rm -rf .next_old
if [ -d ".next" ]; then
  mv .next .next_old
fi
mv "$BUILD_DIR" .next

# 4. Graceful reload PM2 (zero-downtime)
echo "Reloading PM2..."
if pm2 describe "$APP_NAME" > /dev/null 2>&1; then
  pm2 reload "$APP_NAME"
else
  pm2 start ecosystem.config.js
fi
pm2 save

# 5. Cleanup old build after brief delay (nginx static drain)
sleep 5
rm -rf .next_old

echo "$(date): Deploy complete!"
pm2 list
