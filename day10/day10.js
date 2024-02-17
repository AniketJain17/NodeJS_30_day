// Problem Statement: Create an Express application that serves static files (e.g., HTML, CSS, images) from a "public" directory.
// Ensure that accessing the root ("/") returns the "index.html" file from the "public" directory.

// server.js
const express = require("express");
const path = require("path");

const app = express();
const port = 3000;
/**
 * Express application serving static files from the "public" directory
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
function staticFileServer(req, res) {
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
  });
}

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
