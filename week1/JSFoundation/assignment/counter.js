let secondsLeft = 30
function timer(){
    console.log(secondsLeft)
    secondsLeft--
    if(secondsLeft===0){
        clearInterval(myTimeOut)
    }
}
let myTimeOut = setInterval(timer, 1000)
