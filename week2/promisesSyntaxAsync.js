// Promises are syntactical sugar which makes the code more readable and still uses callbacks under the hood

const fs = require('fs')
function readFileFromSystem(){
    console.log("inside readFileFromSystem")
    return new Promise((resolve)=>{
        console.log("inside Promise")
        fs.readFile("a.txt", "utf-8", (err, data) =>{
            console.log("Before calling resolve function")
            resolve(data)
            console.log("hello after resolve")
        })
    })
}

function onDone(data){
    console.log(data)
}

readFileFromSystem().then(onDone)
console.log("Hello from outside readFileFromSystem")


