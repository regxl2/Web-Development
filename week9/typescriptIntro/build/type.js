"use strict";
function printUser(student) {
    console.log(`name: ${student.name} rollNo: ${student.rollNo} email: ${student.email ? student.email : "NA"}`);
}
printUser({ name: "Abhishek", rollNo: 205122003 });
function printNumberOrString(x) {
    console.log(`Value of x: ${x}`);
}
printNumberOrString("hello");
printNumberOrString(1);
function printEmpNMan1(person) {
    console.log(`name: ${person.name} empId: ${person.empId} manId: ${person.manId}`);
}
printEmpNMan1({ name: "Abhishek", empId: "205122003", manId: "1" });
function printEmpNMan2(person) {
    console.log(`name: ${person.name} empId: ${person.empId} manId: ${person.manId}`);
}
printEmpNMan2({ name: "Abhishek", empId: "205122003", manId: "1" });
