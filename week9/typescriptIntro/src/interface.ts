// Interface is mostly used for defining the structure for the object or contract for the class implementation

interface User{
    name:string,
    rollNo: number,
    email?: string
}

function printUser1(user: User){
    console.log(`name: ${user.name} rollNo: ${user.rollNo} email: ${user.email?user.email:"NA"}`)
}
function printUser2({name, rollNo, email}: User){
    console.log(`name: ${name} rollNo: ${rollNo} email: ${email?email:"NA"}`)
}

printUser1({name: "Abhishek", rollNo: 205122003})
printUser2({name: "Abhishek", rollNo: 205122003, email:"rathourabhishekvk4@gmail.com"})