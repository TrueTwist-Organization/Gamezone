#!/usr/bin/env python3
"""Run this game only — no menu, no other games."""

import http.server
import os
import socket
import sys
import webbrowser
from pathlib import Path

PORT = 8080
ROOT = Path(__file__).parent.resolve()


class GameHandler(http.server.SimpleHTTPRequestHandler):
    extensions_map = {
        **http.server.SimpleHTTPRequestHandler.extensions_map,
        ".wasm": "application/wasm",
        ".unityweb": "application/octet-stream",
        ".data": "application/octet-stream",
        ".webp": "image/webp",
        ".woff2": "font/woff2",
        ".ttf": "font/ttf",
        ".js": "application/javascript",
        ".mjs": "application/javascript",
    }

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Cache-Control", "no-cache")
        super().end_headers()


def port_free(port):
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
        sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        try:
            sock.bind(("127.0.0.1", port))
            return True
        except OSError:
            return False


def main():
    if not (ROOT / "index.html").exists():
        print("Error: index.html not found. Extract zip fully first.")
        sys.exit(1)

    url = "http://localhost:{}/".format(PORT)
    if not port_free(PORT):
        print("Port {} in use. Open: {}".format(PORT, url))
        webbrowser.open(url)
        return

    os.chdir(ROOT)
    server = http.server.ThreadingHTTPServer(("127.0.0.1", PORT), GameHandler)
    print("=" * 50)
    print("  GAME RUNNING (this game only)")
    print("=" * 50)
    print("  URL: {}".format(url))
    print("=" * 50)
    webbrowser.open(url)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        server.server_close()


if __name__ == "__main__":
    main()
