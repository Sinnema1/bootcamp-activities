// WRITE YOUR CODE BELOW
const students = ["classmate1", "classmate2", "classmate3", "classmate4", "classmate5"];

for (let i=0; i<students.length; i++) {
    console.log(`Great to see you, ${students[i]}`);
}

for (const student of students) {
  console.log(`Great to see you, ${student}`);
}