// Middleware for handling auth
const {Admin} = require("../db");
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username = req.headers.username; // vanshkalra@gmail.com
    const password = req.headers.password; // 123456
    Admin.findOne({
        username : username,
        password : password
    }).then((value)=>{
        if(value){
            next();
        } else{
            res.status(401).json({
                message : "Admin is Unauthorized"
            })
        }
    })
}

module.exports = adminMiddleware;