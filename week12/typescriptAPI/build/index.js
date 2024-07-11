"use strict";
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
const totalAgeSum = sumOfAge({ name: "Abhishek", age: 23 }, { name: "Abhi", age: 23 });
console.log(totalAgeSum);
