#!/usr/bin/env bash
set -euo pipefail

echo "Running root detect-libc shim creator..."
node ./scripts/ensure-detect-libc-shim-root.js || true

echo "Building frontend..."
cd frontend
npm install --no-audit --no-fund
npm run build

echo "Build finished"
