#!/bin/bash
set -e

echo "Current directory: $(pwd)"
echo "Directory contents:"
ls -la

echo "Installing dependencies..."
npm install

echo "Building project..."
npm run build

echo "Build directory contents:"
ls -la build/

echo "Build completed successfully!"
