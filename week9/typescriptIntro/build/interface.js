"use strict";
function printUser1(user) {
    console.log(`name: ${user.name} rollNo: ${user.rollNo} email: ${user.email ? user.email : "NA"}`);
}
function printUser2({ name, rollNo, email }) {
    console.log(`name: ${name} rollNo: ${rollNo} email: ${email ? email : "NA"}`);
}
printUser1({ name: "Abhishek", rollNo: 205122003 });
printUser2({ name: "Abhishek", rollNo: 205122003, email: "rathourabhishekvk4@gmail.com" });
