/**
 * Write an arrow function where it will do the following: x ^2
 * 1. Square each array elements
 * 2. Calculate the sum of the square elements
 * 3. Return the average of the sum of the squared elements
 */


const numbers = [4, 5, 6, 8, 12]
let sum = 0
const getSquare = numbers.map(num => num * num);

for( let num of getSquare){
    sum = sum + num;
}
const aveg = sum / getSquare.length;
console.log(aveg)