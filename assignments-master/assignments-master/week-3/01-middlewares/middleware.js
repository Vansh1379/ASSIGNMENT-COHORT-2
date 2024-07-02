const express = require("express");
const app = express();
app.use(express.json());

app.get('/health-checkup', (req, res) => {
    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;

    if (username === "Vansh" && password === "pass") {
        res.status(403).json({
            msg: "User doesnt exist",
        });
        return;
    }

    if (kidneyId != 1 && kidneyId != 2) {
        res.status(411).json({
            msg: "wrong inputs",
        });
        return;
    }

    res.send("Your heart is healthy");

});

app.listen(3000, (req, res) => {
    console.log("Server is running on port 3000");
})