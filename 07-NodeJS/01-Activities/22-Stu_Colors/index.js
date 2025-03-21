// * It's done when I see a `package.json` file created.

// * It's done when I set the `"type"` property to `"module"` in my `package.json` to allow for ESM style imports.

// * It's done when I have installed the `colors` package successfully and see it listed in the `package.json` file.

// * It's done when I type `node index.js Sally 500` and the following is logged, with `Sally` highlighted with a bright yellow background and `500` highlighted with a bright green background, since the profit is a number greater than `0`:

//   * `My name is Sally and I made 500 dollars this quarter.`

// * It's done when I type `node index.js Bob -300` and the following is logged with `Bob` highlighted with a bright yellow background and `-300` highlighted with a bright red background since the profit is a number less than or equal to `0`:

//   * `My name is Bob and I made -300 dollars this quarter.`
import colors from 'colors';
const arg1 = process.argv[2];
const arg2 = parseInt(process.argv[3]);

if (arg2 > 0) {
    console.log(`my name is ${colors.bgBrightYellow(arg1)} and I made ${colors.bgGreen(arg2)} dollars this quarter!`);
} else {
    console.log(`my name is ${colors.bgBrightYellow(arg1)} and I made ${colors.bgRed(arg2)} dollars this quarter`)
}