

//// It's done when I have created a file, index.js, in the working directory.


//// It's done when I use process.argv to assign two arguments to variables.


//// It's done when I compare those two variables to see whether they are the same or not.


//// It's done if the program logs true to the console when the values are the same and false if they are not.

const args = process.argv;

const arg0 = process.argv[0];
const arg1 = process.argv[1];
const arg2 = process.argv[2];
const arg3 = process.argv[3];

// Log the variables to the console
console.log(`${arg0}`);
console.log(`${arg1}`);
console.log(`${arg2}`);
console.log(`${arg3}`);

// long hand
// if (arg2 === arg3) {
//   console.log(true);
// } else {
//   console.log(false);
// }


// short hand - teranary operator
console.log(arg2 === arg3 ? true : false);

