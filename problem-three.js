/**
 * Write an arrow function that will take two parameter : one parameter will come from you and other parameter will be a default parameter. Add these two parameter and return the result.
 */

const add =(a, b = 2) => a + b;
const sum = add(4);
console.log(sum);