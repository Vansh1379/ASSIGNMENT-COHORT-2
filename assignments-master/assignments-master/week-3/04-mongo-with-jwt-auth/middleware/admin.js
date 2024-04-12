// Middleware for handling auth
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../consfig");
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    // Bearer (taking token without barer)
    const tokenWithoutBarer = token.split(" ");
    const jwtToken = tokenWithoutBarer[1];
    try{
        const decodedValue = jwt.verify(jwtToken, JWT_SECRET);
    if(decodedValue.username) {
        next();
    } else {
        res.status(401).json({
            message: "Unauthorized"
        })
    }
    } catch(e){
        res.json({
            msg : "Incorrect Inputs"
        })
    }
}

module.exports = adminMiddleware;