"""
Minimal Flask app for serving static HTML files
This file exists only to support Replit's workflow system
The actual site is static HTML, CSS and JS
"""
from flask import Flask, send_from_directory

app = Flask(__name__, static_url_path='', static_folder='.')

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and path[-1] == '/':
        path = path[:-1]
    if path == "":
        return send_from_directory('.', 'index.html')
    return send_from_directory('.', path)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)