const fs = require("fs");

function ReadFile(){

    let p = new Promise(function(resolve){
        fs.readFile("Demo.txt", "utf8", function(err,data){
            if(err) throw err;
            resolve(data);
        });
    })
    return p;
}

function print(data){
    console.log(data);
}

ReadFile().then(print);