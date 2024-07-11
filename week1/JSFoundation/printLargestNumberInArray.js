const nums = [1,3,5,23,432,134,135,643,99]
let largest = 0
for(let i=0; i<nums.length; i++){
    largest = Math.max(largest,nums[i])
}
console.log("Largest number in an array: "+ largest)