const fs = require("fs");


        fs.writeFile("Demo.txt", "Ab miane mara ye wala", function(err){
            if(err) throw err;
            console.log("File has been saved");
        });