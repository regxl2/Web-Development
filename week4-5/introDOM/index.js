const express = require("express")
const port = 3000
const app = express()

// Enable CORS for all routes
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:63342');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get("/sum", (req, res)=>{
    const num1 = parseInt(req.query.a)
    const num2 = parseInt(req.query.b)
    const sum = num1+ num2
    res.send(sum.toString())
})

app.listen(port, ()=>{
    console.log(`App is listening to the port: ${port}`)
})