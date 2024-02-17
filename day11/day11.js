const express = require("express");
const authenticationMiddleware = require("./authMiddleware");

const app = express();
const port = 3000;

// Apply the authentication middleware to all routes
app.use(authenticationMiddleware);

// Your routes go here...
app.get("/protected-resource", (req, res) => {
  // Access the decoded user information attached by the middleware
  const user = req.user;

  // Perform actions specific to the authenticated user
  res.json({
    message: `Hello, ${user.username}! This is a protected resource.`,
  });
});
// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
