const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3001

//middleware
app.use(bodyParser.json())

// since we haven't learnt the databases. We are using global variable user as a sort of in memory database.
// Reason why we use databases not in memory database because if the server goes down, then the in-memory database will be lost.
const users = [
    {
        name: "John",
        kidneys: [
            {
                healthy: false
            }
        ]
    }
]

// for getting input from user through get() method is query parameter
app.get("/", (req, res)=>{
    const johnKidneys = users[0].kidneys
    const numberOfKidneys = johnKidneys.length
    const numberOfHealthyKidneys = johnKidneys.filter(johnKidney => johnKidney.healthy).length
    const numberOfUnHealthyKidneys = numberOfKidneys - numberOfHealthyKidneys
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnHealthyKidneys
    })
})

// One of the method to get input from the user through post() method is body
app.post('/', (req, res)=>{
    const isHealthy = req.body["isHealthy"]
    // inserting the kidneys
    users[0].kidneys.push({healthy: isHealthy})
    res.json({
        msg: "Done!"
    })
})

app.put('/', (req, res)=>{
    // updating all the kidneys healthy to be true
    const size = users[0].kidneys.length
    let allKidneysHealthy = true
    for(let i =0; i<size; i++){
        if(users[0].kidneys[i].healthy===false ){
            allKidneysHealthy = false
            users[0].kidneys[i].healthy = true
        }
    }
    if(allKidneysHealthy){
        // If all kidneys are already healthy.
        res.status(411).json({msg:"All kidneys are already healthy"})
    }
    else{
        res.json({msg: "Done!"})
    }
})

app.delete('/', (req, res)=>{
    //deleting all unhealthy kidneys i.e, deleting all kidneys whose isHealthy value is false
    const kidneys = users[0].kidneys.filter(kidney => kidney.healthy)
    if(users[0].kidneys.length === kidneys.length){
        // It means no unhealthy kidneys. Set status 411 for wrong user input
        // These status are really helpful for UI
        res.status(411).json({msg: "There are no unhealthy kidneys!"})
    }
    else{
        users[0].kidneys = kidneys
        res.json({msg: "Done!"})
    }
})

app.listen(port, ()=>{
    console.log(`App is listening to port ${port}`)
})