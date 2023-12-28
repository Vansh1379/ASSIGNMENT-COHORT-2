const fs = require("fs");

function ReadFile(){

    p = new Promise(function(resolve){
        fs.readFile("Demo.txt", "utf8", function(err,data){
            if(err) throw err;
            resolve(data);
        });
    })
    return p;
}

async function print(){
    let value = await ReadFile();
    console.log(value);
}

// function print(data){
//     console.log(data);
// }

// ReadFile().then(print);