const express = require("express")
const port = 3002
const app = express()

app.use(express.json())

app.post("/health-checkup", (req, res)=>{
    const kidneys = req.body["kidneys"]["name"]// Here, I am creating an error explicitly to catch errors. This is done to simulate the user's wrong input
    res.send(`No. of kidneys: ${kidneys}`)
})

//Global catches
/**
 * This is a special type of middleware function in Express that has
 * four arguments instead of three ('(err, req, res, next)'). Express recognizes
 * it as an error-handling middlewares because of these four arguments.
 */
app.use((err, req, res, next)=>{
    res.status(500).send("There is something up with our server")
})

app.listen(port, ()=>{
    console.log(`App is listening to the port: ${port}`)
})