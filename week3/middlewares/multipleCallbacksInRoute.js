const express = require("express")
const port = 3002
const app = express()

function callback1(req, res, next){
    console.log("Hello from callback1")
    // next() will call callback2 because it is the next callback in the get function
    next()
}

function callback2(req, res, next){
    console.log("Hello from callback2")
    // next() function will call callback3 because it is the next callback in the get function
    next()
}

// In get() function we can pass multiple callbacks in a chain, and they will be called in a given sequence
// if callback calls the next callback in sequence by using next() function.
app.get("/callback-chain", callback1, callback2, function callback3(req, res, next){
    console.log("Hello from callback3")
    res.json("I am being called after execution of callback1 and callback2")
})


app.listen (port , ()=>{
    console.log(`App is listening to the port: ${port}`)
})

