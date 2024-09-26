/**
 * Write an arrow function where it will do the following:
 * 1. It will take an array where the array elements will be the name of your friends
 * 2. Check if the length of each elements is even, push elements with even length to a new array and return the result.
 */
const getNewArray = (friends) => {
    const nameEven = [];
    for(const friend of friends){
        if(friend.length % 2 === 0){
            nameEven.push(friend);
        }
    }
    return nameEven;
};
const friends = ["Alice", "Bob", "Charlie", "David", "Eve"]
const nameEven = getNewArray(friends)
console.log(nameEven);