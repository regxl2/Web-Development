function p1(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("p1 is resolved")
        }, 5000)
    })
}
function p2(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("p2 is resolved")
        },  10000)
    })
}

function handlePromise(){
    // on p1 function call will immediately return promise but setTimeout will  be resolved in webApi
    // statement1
    p1().then((data)=>{
        console.log(data)
    })
    // on p2 function call will immediately return promise but setTimeout will  be resolved in webApi
    // statement2
    p2().then((data)=>{
        console.log(data)
    })
    // since, both are running parallel on webApi
    // promise1 will be resolved first . so, it will be queued first than promise2
    // Therefore, statement1 will be printed after cumulative 5 seconds first then statement2 after cumulative 10 seconds
}

handlePromise()