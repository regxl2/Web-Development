const express = require("express")

// zod library is used for input validation
const zod  = require("zod")
const app = express()
const port = 3003

app.use(express.json())

// It is the schema of the request we are getting from the user
const schema1 = zod.array(zod.number())

const schema2 = zod.object({
    name: zod.string(),
    rollNo: zod.number(),
    email: zod.string().email(),
    state: zod.literal("TN").or(zod.literal("UP"))
})

app.post("/health-checkup", (req, res)=>{
    const kidneys = req.body.kidneys
    const request = schema1.safeParse(kidneys)
    if(!request["success"]){
        res.json({
            msg:"User has given wrong input"
        })
        return
    }
    res.send(request["data"])
})

app.post("/student", (req, res)=>{
    const student = schema2.safeParse(req.body)
    if(!student.success){
        res.json({
            msg: "User has given wrong input"
        })
        return
    }
    res.send(`Student Details: \nName: ${student.data.name}\n RollNo: ${student.data.rollNo}\n Email: ${student.data.email}\n state: ${student.data.state}`)
})

app.listen(port, ()=>{
    console.log(`App is listening to the port: ${port}`)
})