/**
 * Write an arrow function where it will do the following:
 * 1. It will take two array input
 * 2. Combine the two arrays and assign them in a new array
 * 3. Find the maximum number from the new array and return the result
 
 */
const arrayOne = [3, 4, 5, 6, 7];
const arrayTwo = [8, 9, 10, 11, 12];

const newArray = (arrayOne, arrayTwo) =>{
    const combinedArray = [...arrayOne, ...arrayTwo]
    // console.log(combinedArray)
    const maxNum = Math.max(...combinedArray)
    return maxNum;
}

const result = newArray(arrayOne, arrayTwo);
console.log(result)

