"use strict";
function runAfterOneSecond(fun) {
    setTimeout(fun, 1000);
}
runAfterOneSecond(() => {
    console.log("Hi there");
});
function addTwoNumbers(a, b) {
    return a + b;
}
function operation(x, y, fun) {
    return fun(x, y);
}
console.log(operation(1, 2, addTwoNumbers));
