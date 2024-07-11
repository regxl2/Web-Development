const array = [1,2,3,4,5,6,7,8,9]
let i=0, j = array.length-1
while(i<j){
    let temp = array[i]
    array[i++] = array[j]
    array[j--] = temp
}
console.log(array)