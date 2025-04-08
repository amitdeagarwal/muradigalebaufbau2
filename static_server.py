#!/usr/bin/env python3
"""
Simple HTTP Server for static files that works with Replit workflows
"""
import http.server
import socketserver

PORT = 5000
Handler = http.server.SimpleHTTPRequestHandler

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Add CORS headers
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET')
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        return super().end_headers()

httpd = socketserver.TCPServer(("0.0.0.0", PORT), MyHTTPRequestHandler)
print(f"Serving at http://0.0.0.0:{PORT}")
httpd.serve_forever()