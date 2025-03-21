// * It's done when I have initialized my repository with a `package.json` file by running `npm init -y`.

// * It's done when I set the `"type"` property to `"module"` in my `package.json` to allow for ESM style imports.

// * It's done when I have installed inquirer and added it to my list of dependencies by running `npm i inquirer`.

// * It's done when the application asks the user, `What is your name?`, and the message is displayed with the color `bright magenta`.

// * It's done when the application asks the user, `What languages do you know?`, and the message is displayed with the color `bright magenta`.

// * It's done when the application asks the user, `What is your preferred method of communication?`, and the message is displayed with the color `bright magenta`.

// * It's done after I have written those responses to a file.

import inquirer from 'inquirer';
import colors from 'colors';
import fs from 'fs';

inquirer   
    .prompt([
        {
            type: 'input',
            message: colors.bgBrightMagenta('What is your name?'),
            name: 'name'
        },
        {
            type: 'input',
            message: colors.bgBrightMagenta('What languages do you know?'),
            name: 'language'
        },
        {
            type: 'input',
            message: colors.bgBrightMagenta('What is your preferred method of communication?'),
            name: 'comms'
        }
    ])
    .then((response) => {
        fs.writeFile('answers.txt', JSON.stringify(response), err => 
            err ? console.error(err) : console.log('Log created!')
        );
    });
// the `writeToLog` function will take in data and use it to write to a file called `log.txt`.
// const writeToLog = (data) => {
//     fs.appendFile('log.txt', data, (err) => {
//       err ? console.error(err) : console.log('Log created!');
//     });
//   };
//   writeToLog(response.text1)
//   writeToLog(response.text2)
//   writeToLog(response.text3)