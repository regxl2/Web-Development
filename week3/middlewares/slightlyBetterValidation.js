const express = require("express")
const port = 3002

const app = express()

function wrongInputMsg(res, code){
    res.status(code).json({msg: "Something is wrong with your input"})
}

function rightInputMsg(res){
    res.json({msg:"Your kidneys are fine"})
}

function userPassValidator(username, password){
    return username!=="abhi" && password!=="pass"
}
function kidneyValidator(kidneys){
    return kidneys!=1 && kidneys!=2
}

app.get('/health-checkup/', (req, res)=>{
    const username = req.headers.username
    const password = req.headers.password
    const kidneys = req.query.kidneys

    if(userPassValidator(username, password)){
        wrongInputMsg(res, 403)
        return
    }
    if(kidneyValidator(kidneys)){
        wrongInputMsg(res, 411)
        return
    }
    rightInputMsg(res)
})

app.put('health-checkup', (req, res)=>{
    const username = req.headers.username
    const password = req.headers.password
    const kidneys = req.query.kidneys

    if(userPassValidator(username, password)){
        wrongInputMsg(res, 403)
        return
    }
    if(kidneyValidator(kidneys)){
        wrongInputMsg(res, 411)
        return
    }
    rightInputMsg(res)
})

/**
 * Here, we can see we have avoided most of the boilerplate code by wrapping the repeating
 * code inside the function.
 * But we can see this below code is still repeated inside both put() and get() function
 * if(userPassValidator(username, password)){
 *         wrongInputMsg(res, 403)
 *         return
 *     }
 *     if(kidneyValidator(kidneys)){
 *         wrongInputMsg(res, 411)
 *         return
 *     }
 *     rightInputMsg(res)
 *
 * So, there is a slightly better way of handling user authentication and input checks is by using middlewares.
 */

app.listen(port, ()=>{
    console.log(`App is listening to the port: ${port}`)
})