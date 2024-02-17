// Problem Statement: Implement an Express middleware function that logs the 
// timestamp and the HTTP method of every incoming request to the server.

const express =require("express");
const app = express();
Port = 3000
/**
 * Express middleware to log incoming requests
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
function requestLoggerMiddleware(req, res, next) {
    const timestamp = new Date().toISOString();
    console.log(`${timestamp} - ${req.method} request received`);
    next();
  }

  app.use(requestLoggerMiddleware);

  app.get("/",(req,res)=>{
    res.send("hello");
  })


  app.listen(Port,()=> {
    console.log(`Server is running on port ${Port}`)
  })


  
