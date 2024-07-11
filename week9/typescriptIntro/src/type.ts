// type also similar to interface, but it cannot implement classes, and it is used for
// union and intersection of the multiple types which interface can't do.

type Student= {
    name: string,
    rollNo: number,
    email?: string
}

function printUser(student: Student){
    console.log(`name: ${student.name} rollNo: ${student.rollNo} email: ${student.email?student.email:"NA"}`)
}

printUser({name: "Abhishek", rollNo: 205122003})

// union - you can make union of multiple datatype

type numberOrString  = number|string

function printNumberOrString(x: numberOrString){
    console.log(`Value of x: ${x}`)
}

printNumberOrString("hello")
printNumberOrString(1)

// intersection - you can make the intersection of the multiple datatype


// intersection of the interface using type
interface Employee{
    name: string,
    empId: string
}

interface Manager{
    name: string,
    manId: string
}

type EmpNMan = Employee & Manager

function printEmpNMan1(person: EmpNMan){
    console.log(`name: ${person.name} empId: ${person.empId} manId: ${person.manId}`)
}
printEmpNMan1({name: "Abhishek", empId: "205122003", manId: "1"})

// intersection of Employee of type

type Employee1 = {
    name: string,
    empId: string
}

type Manager1 = {
    name: string,
    manId: string
}

type EmployeeNManager = Employee1 & Manager1

function printEmpNMan2(person: EmployeeNManager){
    console.log(`name: ${person.name} empId: ${person.empId} manId: ${person.manId}`)
}
printEmpNMan2({name: "Abhishek", empId: "205122003", manId: "1"})


