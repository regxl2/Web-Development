const express = require("express")
const port = 3002
const app = express()

function userMiddleware(req, res, next){
    // It is a foolish way of doing authentication, and for this type of authentication
    // everytime user has to give his username and password to access the resources.
    // For this, we will learn how to do Authentication.
    const username = req.headers.username
    const password = req.headers.password
    if(username!=="abhi" || password!=="pass"){
        wrongMsg(res, 403)
    }
    else{
        next()
    }
}

function kidneyMiddleware(req, res, next){
    const kidneys = req.query.kidneys
    if(kidneys!=1 && kidneys!=2){
        wrongMsg(res, 411)
    }
    else{
        next()
    }
}

function wrongMsg(res, code){
    res.status(code).json({
        msg:"Something is wrong with your input"
    })
}

function rightMsg(res){
    res.json({
        msg:"Your kidneys are fine"
    })
}

app.get("/health-checkup/", userMiddleware, kidneyMiddleware, (req, res)=>{
    rightMsg(res)
})

app.listen(port, ()=>{
    console.log(`App is listening to the port: ${port}`)
})