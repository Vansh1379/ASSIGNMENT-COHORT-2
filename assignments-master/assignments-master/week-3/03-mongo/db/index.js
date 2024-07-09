const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://vanshkalra1379:kalra1379@cluster0.rjd2jaw.mongodb.net/cohort-2');

const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://vanshkalra1379:kalra1379@cluster0.rjd2jaw.mongodb.net/test');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username : string,
    password: string,
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
  username : string,
  password: string,
  purchasedCourses: [{
    type : mongoose.Schema.Types.ObjectId,
    ref: 'Course'
  }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
   title : string,
   Discription : string,
   imageLink : string,
   price : Number
});
 
const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}