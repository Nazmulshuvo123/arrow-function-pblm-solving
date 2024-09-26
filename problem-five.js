/**
 * Write an arrow function where it will do the following: x suqre
 * 1. Square each array elements
 * 2. Calculate the sum of the square elements
 * 3. Return the average of the sum of the squared elements
 */

const sum = (numbers) => {
    const square = [];
    let sum = 0;
    for(const num of numbers){
        // console.log(num)
        const squareArray = num * num;
        square.push(squareArray);
        // console.log(square);
    }
    for( i = squareArray.length-1; i < square.length; i++){
        let sum = sum + num;
    }
}
const numbers = sum ([4, 5, 6, 8, 12, 13, 14, 15, 16])