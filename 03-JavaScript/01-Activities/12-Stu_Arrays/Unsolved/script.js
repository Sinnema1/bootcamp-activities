// WRITE YOUR CODE HERE

// Create an array of 5 strings and save it to a variable
const names = ["jack", "jill", "jane", "jon", "jen"];

console.log(names.length);

names.forEach(name => {
    console.log(`Welcome to the class ${name}`);
  });

names[0] = "jim";

if (names[0] === "jim") {
    console.log(`${names[0]} is in the class`);
  }