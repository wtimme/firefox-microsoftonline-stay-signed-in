#!/usr/bin/env bash

web-ext build --ignore-files \
    "test-page.html" \
    "CHANGELOG.md" \
    "screenshot.png" \
    "build.sh"
