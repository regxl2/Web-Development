const express = require('express')
const port = 8080
const app = express()

app.get('/hello', (req, res)=>{
	res.send(`hello Abhishek ${Math.random()}`);
})

app.listen(port, (req, res, next)=>{
	console.log(`app is listening to port: ${port}`)
})
