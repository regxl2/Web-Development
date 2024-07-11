const express = require("express")
const port = 3002

const app = express()

function wrongInputMsg(res, code){
    res.status(code).json({msg: "Something is wrong with your input"})
}

app.get('/health-checkup/', (req, res)=>{
    const username = req.headers.username
    const password = req.headers.password
    const kidneys = req.query.kidneys

    if(username!=="abhi" && password!=="pass"){
        wrongInputMsg(res, 403)
        return
    }
    if(kidneys!=1 && kidneys!=2){
        wrongInputMsg(res, 411)
        return
    }
    res.json({
        msg: "Your kidney is fine"
    })
})

app.put('health-checkup', (req, res)=>{
    const username = req.headers.username
    const password = req.headers.password
    const kidneys = req.query.kidneys

    if(username!=="abhi" && password!=="pass"){
        wrongInputMsg(res, 403)
        return
    }
    if(kidneys!=1 && kidneys!=2){
        wrongInputMsg(res, 411)
        return
    }
    res.json({
        msg: "Your kidney is fine"
    })
})

/**
 * Here, you can see duplication of the code for user authentication and input checks in get and put method.
 * This is the ugliest way of doing checks. There is a slightly better way of doing this is by wrapping
 * inside the functions.
 */

app.listen(port, ()=>{
    console.log(`App is listening to the port: ${port}`)
})