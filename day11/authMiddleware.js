// authMiddleware.js
const jwt = require("jsonwebtoken");

/**
 * Authentication middleware for Express
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
function authenticationMiddleware(req, res, next) {
  // Get the token from the request headers
  const token = req.header("Authorization");

  // Check if the token is present
  if (!token) {
    return res
      .status(401)
      .json({ message: "Unauthorized - No token provided" });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    // Attach the decoded user information to the request for further use
    req.user = decoded;

    // Continue with the request
    next();
  } catch (error) {
    // Token verification failed
    return res.status(401).json({ message: "Unauthorized - Invalid token" });
  }
}

module.exports = authenticationMiddleware;
