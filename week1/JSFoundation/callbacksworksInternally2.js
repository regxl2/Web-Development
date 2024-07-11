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
        }, 10000)
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
    // so, result of both statement 1 and 2 will be printed at same time after cumulative 10 seconds
    // they both will be resolved parallel on the webApi
}

handlePromise()