const express = require("express")
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const app = express()
const serverSecretKey = "HareKrishnaHareRama"
const port = 3000

app.use(express.json())
async function connectDatabase(){
    // using await because (auth) is enabled
   await mongoose.connect("mongodb+srv://admin:4wIDQ9KVP1tpE3n5@cluster0.zustewt.mongodb.net/user_app")
}
connectDatabase()

const User = mongoose.model('users',{
    username: String,
    password: String,
    name: String
})

app.post("/signup", async (req, res)=>{
    const username = req.body.username
    const password = req.body.password
    const name = req.body.name
    const existingUser = await User.findOne({username: username})
    if(existingUser){
        res.status(400).json({
            msg:"User already exist with this username"
        })
        return
    }
    const user = new User({
        username: username,
        password: password,
        name: name
    })
    await user.save()
    res.json({
        msg: "User has successfully signed up"
    })
})

app.post("/login", async(req, res)=>{
    const username = req.body.username
    const password = req.body.password
    const existingUser = await User.findOne({username: username, password: password})
    if(!existingUser){
        res.status(401).json({
            msg: "User doesn't exist in our database"
        })
        return
    }
    const token = jwt.sign({username: username},serverSecretKey)
    res.json({
        token
    })
})

app.get("/users", async (req, res)=>{
    const token = req.headers.authorization
    try{
        const decoded = jwt.verify(token, serverSecretKey)
        const username = decoded.username
        const users = await User.find()
        const allOtherUsername = users
            .filter(user => user.username!==username)
            .map((user)=>{
                return {username: user.username}
            })
        res.json({
            allOtherUsername
        })
    }
    catch (err){
        res.status(403).json({
            msg:"Invalid token"
        })
    }
})


app.listen(port, ()=>{
    console.log(`App is listening to the port: ${port}`)
})

