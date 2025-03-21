// Exercise 1
const songs = ['Creep', 'Everlong', 'Bulls On Parade', 'Song 2', 'What I Got'];

// TODO: Which operator is being used here?
const newSongs = [...songs];
//spread operator

// TODO: What do you expect to be logged in the console?
console.log(newSongs);
// all the songs in the songs array

// Exercise 2
const addition = (x, y, z) => {
  const array = [x, y, z];
  // TODO: What does the reduce() method do?
  return array.reduce((a, b) => a + b, 0); // reduces the array to a single value
};
// TODO: What do you expect to be logged in the console?
console.log(addition(1, 2, 3)); // 6

// TODO: What is this syntax that is being used as the parameter?
const additionSpread = (...array) => array.reduce((a, b) => a + b, 0);
// arrow function with rest operator

// TODO: What do you expect to be logged in the console?
console.log(additionSpread(1, 2, 3)); // 6

// TODO: What do you expect to be logged in the console?
console.log(additionSpread(1, 2, 3, 4, 100));
