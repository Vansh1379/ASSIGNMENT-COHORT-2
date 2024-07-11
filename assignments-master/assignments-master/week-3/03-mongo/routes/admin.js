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

    Admin.Create({
        username,
        password
    }).then((admin) => {
        res.json({
            msg: "Admin created succesfully"
        })
        next();
    })
        .catch((err) => {
            res.json({
                msg: "Admin not created"
            })
        })
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const image = req.body.image;
    // but in real world we do zod validation
    Course.Create({
        title,
        description,
        price,
        image
    })
    res.json({
        msg: " Course created Successfully",
        courseID: newCourse._id
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    Course.find({

    })
        .then(
            res.json({

                Course: response
            })
        )
});

module.exports = router;