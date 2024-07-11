//since this is statement, It will be executed immediately p1 and p2 will be executed parallel on webApi
const p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("p1 is resolved")
    }, 10000)
})
const p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("p2 is resolved")
    },  5000)
})

async function handlePromise(){
    //statement1
    const value1 = await p1
    console.log(value1)
    // since, p1 and p2 statement and not function, it will be executed parallel on webApi
    // but statement 2 will only come after print statement1
    // statement2
    const value2 = await p2
    console.log(value2)
    // Therefore, statement1 will be printed and then statement 2 will print at the sametime after cumulative 10 seconds
}

handlePromise()