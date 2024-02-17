// Problem Statement:
//  You are building a web application using Express in Node.js.
//   Create an Express route to handle GET requests to the endpoint "/greet" that takes a query parameter "name" and returns a personalized greeting.
//   If the name parameter is not provided, the default greeting should be "Hello, Guest!".

const express = require("express");
const app = express();
const port = 3000;
/**
 * Handles GET requests to "/greet" endpoint
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
function greetHandler(req, res) {
  // Extract the "name" query parameter from the request
  const name = req.query.name;

  if (name) {
    res.send(`Hello, ${name}!`);
  } else {
    res.send("Hello, Guest!");
  }
}

// Register the greetHandler function for GET requests to "/greet"
app.get("/greet", greetHandler);

// Start the Express server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
