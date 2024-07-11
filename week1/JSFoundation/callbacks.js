function calculateArithmetic(a, b, arithmeticFunction){
    return arithmeticFunction(a, b)
}
function sum(a, b){
    return a+b
}

function sub(a, b){
    return a-b
}

console.log("Print the sum of 12 and 46: "+calculateArithmetic(12, 46, sum))
console.log("Print the sum of 12 and 46: "+calculateArithmetic(12, 46, sub))