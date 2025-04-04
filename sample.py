# Import the necessary modules
from http.server import SimpleHTTPRequestHandler, HTTPServer

# Define the server address and port
hostname = 'localhost'
port = 8000

# Create the server
server = HTTPServer((hostname, port), SimpleHTTPRequestHandler)

# Print server info and start the server
print(f"Server running at http://{hostname}:{port}")
server.serve_forever()
