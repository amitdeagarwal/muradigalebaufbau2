"""
Minimal Flask app for serving static website files
This file exists only to support Replit's workflow system
The actual website is built with pure HTML, CSS, and JavaScript

This lightweight server allows the static website to be served.
It also handles proper routing for direct links and refreshes.
"""
from flask import Flask, send_from_directory

app = Flask(__name__, static_url_path='', static_folder='.')

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    # Serve index.html for root, trailing slashes, or non-existent files
    # This ensures proper SPA (Single Page Application) behavior
    if path == "" or path[-1] == '/' or '.' not in path:
        return send_from_directory('.', 'index.html')
    
    # Try to serve requested file
    try:
        return send_from_directory('.', path)
    except Exception:
        # If file not found, serve index.html (helps with SPA routing)
        return send_from_directory('.', 'index.html')

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)