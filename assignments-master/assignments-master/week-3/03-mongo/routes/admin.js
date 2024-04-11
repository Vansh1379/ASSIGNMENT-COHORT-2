const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();

// Admin Routes
router.post('/signup', asynsc (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    // now we will check if the user exists in the database
    await Admin.create({
        username :username,
        password : password
    })
    res.json({
        
    })
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;