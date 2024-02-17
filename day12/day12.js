// Express Rate Limiting
// Problem Statement: Implement a rate-limiting middleware for an Express application.
// The middleware should limit the number of requests from a single IP address to a specified rate,
// and return a 429 Too Many Requests status if the limit is exceeded.
const express  = require('express');
const app = express();
const ratelimit = require('express-rate-limit');
function rateLimitMiddleware(req,res,next){
    limiter(req,res,next);
}
const limiter = ratelimit({
    window: 60*1000,
    max: 100,
    message:'Too many requests from this IP. Please try again later'
});
module.export = rateLimitMiddleware;
app.use(rateLimitMiddleware);
const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`Server is up and running on port ${PORT}`)
})
