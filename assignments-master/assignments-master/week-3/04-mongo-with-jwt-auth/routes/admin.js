const { Router } = require("express");
const { Admin, User, Course } = require("../db");
const adminMiddleware = require("../middleware/admin");
const {JWT_SECRET} = require("../consfig");
const jwt = require("jsonwebtoken");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    // now we will check if the user exists in the database
    await Admin.create({
        username :username,
        password : password
    })
    res.json({
        "message": "User created successfully",
                    "status": "success"
    })
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    console.log(JWT_SECRET);

    const isvalidated = await User.find({
        username : username,
        password : password
    })
    if(isvalidated){
       const token =  jwt.sign({
            username
        }, JWT_SECRET);

        res.json({
            token
        })
    } else{
        res.status(403).json({
            msg : "Incorrect email and pass"
        })
    }

    
});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    const tittle = req.body.tittle;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    // but in real world we do zod validation
    const newCourse = await Course.create({
        tittle : tittle,
        description : description,
        imageLink : imageLink,
        price : price
    })
    res.json({
        "message": "Course created successfully",
                    "status": "success",
                    courseID : newCourse._id
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});

    res.json({
        courses: response
    })
});

module.exports = router;