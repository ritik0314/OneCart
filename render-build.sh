#!/usr/bin/env bash
set -euo pipefail

echo "Installing root dependencies (to satisfy Tailwind plugin)..."
npm install --no-audit --no-fund || true

echo "Ensuring root detect-libc shim exists..."
node ./scripts/ensure-detect-libc-shim-root.js || true

echo "Building frontend..."
cd frontend
npm install --no-audit --no-fund

echo "Ensuring frontend detect-libc shims exist..."
node ./scripts/ensure-detect-libc-shim.cjs || true

npm run build

echo "Build finished"
