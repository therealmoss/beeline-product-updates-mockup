#!/usr/bin/env python3
"""Static file server for local dev preview that disables all caching.

Plain `python -m http.server` only sends Last-Modified, so browsers apply
their own heuristic caching and can keep serving a stale script/stylesheet
long after the file on disk (and even the server process) has changed.
This wrapper adds Cache-Control: no-store to every response so edits are
always reflected on the next reload.
"""
import http.server
import os
import sys

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8752

# Always serve this script's own directory, regardless of the caller's cwd.
os.chdir(os.path.dirname(os.path.abspath(__file__)))


class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()


if __name__ == "__main__":
    http.server.test(HandlerClass=NoCacheHandler, port=PORT)
