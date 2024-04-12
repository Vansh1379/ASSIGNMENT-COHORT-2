const {JWT_SECRET} = require("../consfig");

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    // Bearer (taking token without barer)
    const tokenWithoutBarer = token.split(" ");
    const jwtToken = tokenWithoutBarer[1];
    const decodedValue = jwt.verify(jwtToken, JWT_SECRET);
    if(decodedValue.username) {
        next();
    } else {
        res.status(401).json({
            message: "Unauthorized"
        })
    }
}

module.exports = userMiddleware;