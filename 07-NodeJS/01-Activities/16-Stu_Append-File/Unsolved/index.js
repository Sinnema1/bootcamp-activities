// TODO: What are we importing?
// filesystem library/module/package/etc
import fs from 'fs';

// TODO: Add comments to explain each of the three arguments of appendFile()
// First arg is the file to append new data to. if it doesn't already exist, create it.
// second arg is the content that we define
// third arg is a callback function, throwing an error if something goes wrong
fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
  // TODO: Describe how this ternary operator works
  // If/else statement
  // if error, print error (truthy)
  // TEST ? true case : false case
  err ? console.error(err) : console.log('Commit logged!')
);
