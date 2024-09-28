/**
 * Write an arrow function where it will do the following:
 * 1. It will take an array where the array elements will be the name of your friends
 * 2. Check if the length of each elements is even, push elements with even length to a new array and return the result.
 */
const friends = ['shuvo', 'arif', 'shohag', 'abu', 'sazzad', 'tavir', 'chayan']
const evenFriendsArray = friends.filter(friend => friend.length % 2 === 0);

console.log(evenFriendsArray);