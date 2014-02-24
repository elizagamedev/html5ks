#!/bin/sh
if command -v zopfli; then
  :
elif command -v gzip; then
  echo >&2 "Consider obtaining zopfli (https://github.com/Hello71/zopfli) for higher"
  echo >&2 "compression ratios (about 5% decrease in size of script.json.gz)."
else
  echo >&2 "Could not find zopfli or gzip, aborting."
  exit 1
fi
