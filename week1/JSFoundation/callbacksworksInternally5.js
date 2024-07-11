//since this is function, its execution will be ignored. It will be executed when it will be called.
function p1(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("p1 is resolved")
        }, 10000)
    })
}
function p2(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("p2 is resolved")
        },  5000)
    })
}

async function handlePromise(){
    // on p1 function call will immediately return promise but setTimeout will  be resolved in webApi
    // but control will be stopped until p1 is not resolved
    // statement1
    const value1 = await p1()
    console.log(value1)
    // on p2 function call will immediately return promise but setTimeout will  be resolved in webApi
    // but control will only come after print statement1
    // statement2
    const value2 = await p2()
    console.log(value2)
    // Therefore, statement1 will be printed after cumulative 10 seconds first then statement2 after cumulative 15 seconds
}

handlePromise()