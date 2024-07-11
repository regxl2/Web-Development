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
// resolve will always be called after async call then passing resolve() implementation in then() and calling then() function

async function main(){
    const value = await readFileFromSystem()
    console.log(value) // this statement is acting as resolve(data) callback implementation.
    // You can also say, it is acting as calling then() function and passing callback as argument as done in promises syntax
}

main()
console.log("Hello from outside main")
