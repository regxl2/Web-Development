const express = require("express")
const port = 3002
const app = express()

let numberOfRequest = 0

function calculateNumberOfRequests(req, res, next){
    ++numberOfRequest
    console.log(numberOfRequest)
    next()
}

app.get("/heart-checkup/", (req,res)=>{
    res.json({
        msg: "Heart checkup"
    })
})

// use() function will use calculateNumberOfRequest callback as middleware for every function call
// declared below it, for example for "liver-checkup" and "kidney-checkup" get request calculateNumberOfRequest will be
// used as middleware, but not for "heart-checkup" get() request declared above it.
// use() function input callback will always be treated as first callback.
app.use(calculateNumberOfRequests)

app.get("/liver-checkup/", (req,res)=>{
    res.json({
        msg: "Liver checkup"
    })
})

app.get("/kidney-checkup/", (req,res)=>{
    res.json({
        msg: "Kidney checkup"
    })
})

app.listen(port, ()=>{
    console.log(`App is listening to the port:${port}`)
})