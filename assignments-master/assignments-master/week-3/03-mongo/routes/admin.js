const express = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = express.Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
   
    // now we will check if the user exists in the database
    
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    
    // but in real world we do zod validation
   
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    
});

module.exports = router;