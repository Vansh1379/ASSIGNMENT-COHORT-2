const fs = require('fs');

function clearFile(){
    let p = new promise(function(resolve){
        fs.readFile("Demo2.txt", "utf-8",(err,data)=>{
            if(err) throw err;
        })
    })
}
