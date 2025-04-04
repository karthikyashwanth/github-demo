// Load the http module
const http = require('http');

// Define the port and hostname
const hostname = '127.0.0.1';
const port = 3000;

// Create the server
const server = http.createServer((req, res) => {
  res.statusCode = 200; // Success status
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World! Welcome to Node.js server.\n');
});

// Start the server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
