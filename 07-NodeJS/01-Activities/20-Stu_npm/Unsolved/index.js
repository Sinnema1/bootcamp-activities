// * It's done when I see the file `package.json` in the [Unsolved](./Unsolved/) folder.

// * It's done when I set the `"type"` property to `"module"` in my `package.json` to allow for ESM style imports.

// * It's done when I have installed the `inquirer` package successfully and see it listed in the `package.json` file. 

// * It's done when I see the `node_modules` folder and `package-lock.json` file in the [Unsolved](./Unsolved/) folder.

// * It's done when I see the "Press ENTER to continue..." prompt when I execute the command `node index.js`.

import inquirer from 'inquirer';

inquirer.prompt([
  {
    message: 'Press ENTER to continue...',
    name: 'enterKey',
  },
]);


