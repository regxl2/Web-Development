function runAfterOneSecond(fun: ()=> void){
    setTimeout(fun, 1000)
}

runAfterOneSecond(()=>{
    console.log("Hi there")
})

function addTwoNumbers(a: number, b: number):number{
    return a+b
}

function operation (x:number, y: number, fun: (a:number, b:number)=> number){
    return fun(x, y)
}

console.log(operation(1, 2, addTwoNumbers))