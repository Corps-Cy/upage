#!/bin/bash

# 1Panel app init script for UPage
# The docker-entrypoint.sh in the image already handles:
# - SQLite database initialization
# - Prisma migration
# - Prisma client generation
# So this script only needs to create necessary directories

APP_DIR="/opt/1panel/apps/upage/upage/2.0.0"

mkdir -p "${APP_DIR}/data/data"
mkdir -p "${APP_DIR}/data/logs"
mkdir -p "${APP_DIR}/data/storage"

echo "UPage directories initialized successfully"
