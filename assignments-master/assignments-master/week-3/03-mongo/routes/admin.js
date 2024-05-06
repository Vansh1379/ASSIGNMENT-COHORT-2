const express = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = express.Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    // now we will check if the user exists in the database
    await Admin.create({
        username: username,
        password: password
    })
    res.json({
        "message": "User created successfully",
        "status": "success"
    })
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const tittle = req.body.tittle;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    // but in real world we do zod validation
    const newCourse = await Course.create({
        tittle: tittle,
        description: description,
        imageLink: imageLink,
        price: price
    })
    res.json({
        "message": "Course created successfully",
        "status": "success",
        courseID: newCourse._id
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});
    res.json({
        "status": "success",
        todo: response
    })
});

module.exports = router;