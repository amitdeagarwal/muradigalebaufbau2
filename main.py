"""
Minimal Flask app for serving static website files
This file exists only to support Replit's workflow system
The actual website is built with pure HTML, CSS, and JavaScript
"""
from flask import Flask, send_from_directory

app = Flask(__name__, static_url_path='', static_folder='.')

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    # Serve index.html for root or trailing slashes
    if path == "" or path[-1] == '/':
        return send_from_directory('.', 'index.html')
    # Serve requested file
    return send_from_directory('.', path)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)