const express = require("express");

const app = express();
const PORT = 3000;

/**
 * Express route to handle requests with a positive integer parameter
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
function positiveIntegerHandler(req, res, next) {
  // Your implementation here
  const number = parseInt(req.query.number, 10);
  if (number > 0) {
    return res.send(`Sucess : The number ${number} is Positive Number`);
  } else {
    const error = new Error("The Provided number is not a Positive Number");
    error.status = 400;
    next(error);
  }
}

app.get("/positive", positiveIntegerHandler);

app.use((err, req, res, next) => {
  if (err.status === 400) {
    res.status(400).send(err.message);
  } else {
    next(err);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`);
});
