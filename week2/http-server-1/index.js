const express = require('express')
const bodyParser = require('body-parser')
const port= 3000
const app = express()

/**
 * In Express.js, the body-parser middleware is used to parse the body of incoming HTTP requests.
 * The reason why you need to use app.use(bodyParser.json()) is because Express doesn't automatically parse the request body by default.
 * When a client sends data to your server, it can be in various formats such as JSON, URL-encoded, or XML.
 * The body-parser middleware allows you to specify how you want to parse the incoming data. In this case, bodyParser.json() specifically parses incoming JSON requests.
 */
//middlewares
app.use(bodyParser.json())

app.get('/', (req, res)=>{
    res.send('Hello World')
})

app.post('/conversation', (req, res)=>{
    console.log(req.body)
    res.send({
        msg: '2+2 =4'
    })
})

// listen() is way of telling that I am taking over this port, and it starts to listen all the http request on this port.
// listen() actually starts the server.
app.listen(port, ()=>{
    console.log(`App is listening on port ${port}`)
})