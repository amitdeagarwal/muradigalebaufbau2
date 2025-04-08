#!/usr/bin/env python3
"""
Simple HTTP Server for serving static files
No Flask or any other dependencies required
"""

import http.server
import socketserver
import os
import sys

def run_server(port=8000):
    """Start a simple HTTP server on the specified port"""
    handler = http.server.SimpleHTTPRequestHandler
    
    try:
        with socketserver.TCPServer(("", port), handler) as httpd:
            print(f"Serving static website at http://localhost:{port}")
            print("Press Ctrl+C to stop the server")
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.")
        sys.exit(0)
    except OSError as e:
        if "Address already in use" in str(e):
            print(f"Error: Port {port} is already in use.")
            print("Try a different port: python serve.py <port>")
        else:
            print(f"Error: {e}")
        sys.exit(1)

if __name__ == "__main__":
    # Get port from command line arguments or use default (8000)
    port = 8000
    if len(sys.argv) > 1:
        try:
            port = int(sys.argv[1])
        except ValueError:
            print("Invalid port number. Using default port 8000.")
    
    run_server(port)