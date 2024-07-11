function greeting(name: string){
    console.log(`Hello ${name}`)
}
// You can see typescript was able to understand the return type of the
// function automatically even if we haven't explicitly mentioned. It is called type inference

greeting("Abhishek")
