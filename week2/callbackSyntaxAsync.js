const fs = require('fs')

function readFileFromSystem(resolve){
    console.log("inside readFileFromSystem")
    fs.readFile("a.txt", "utf-8", (err, data)=>{
        console.log("Before calling resolve function")
        resolve(data)
    })
}

function onDone(data){
    console.log(data)
}

readFileFromSystem(onDone)
console.log("Hello from outside readFileFromSystem")