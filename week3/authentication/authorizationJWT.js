const express = require("express")
const jwt = require("jsonwebtoken")
const port = 3000
const app = express()
const serverSecretKey = "HareKrishnaHareRama"

app.use(express.json())

const ALL_USERS = [
    {
        username: "harkirat@gmail.com",
        password: "123",
        name: "harkirat singh",
    },
    {
        username: "raman@gmail.com",
        password: "123321",
        name: "Raman singh",
    },
    {
        username: "priya@gmail.com",
        password: "123321",
        name: "Priya kumari",
    },
];

function userExists(username , password){
    for(let i=0; i<ALL_USERS.length; i++){
        if(ALL_USERS[i].username === username && ALL_USERS[i].password === password){
            return true
        }
    }
    return false
}

app.post('/signin', (req, res)=>{
    const username  = req.body.username
    const password = req.body.password

    //Authentication is done before signing token. Authentication is a process of checking whether something is true or genuine
    if(!userExists(username, password)){
        res.status(401).json({
            msg: "User doesn't exist in out memory database"
        })
        return
    }

    // JSON web token is used for authorization after authentication.
    // Authorization is a process of granting permission to someone or something
    const token = jwt.sign({username: username}, serverSecretKey)
    res.json({
        token
    })
})

app.get('/users', (req, res)=>{
    const token = req.headers.authorization
    try{
        const decoded = jwt.verify(token, serverSecretKey)
        const username = decoded.username
        const allOtherUser = ALL_USERS
            .filter(user => user.username!==username)
            .map((user)=>{
                return {username: user.username}
            })
        res.json(allOtherUser)
    }
    catch(err){
        res.status(403).json({
            msg:"Invalid token"
        })
    }
})

app.listen(port, ()=>{
    console.log(`App is listening to the port: ${port}`)
})

