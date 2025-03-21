// 1. Object
const nodejs = {
  name: 'Node.js',
  type: 'JavaScript runtime environment',
};

// TODO: Destructure the object 'nodejs'

const { name, type } = nodejs;

console.log(name); // <= Node.js
console.log(type); // <= JavaScript runtime environment

// 2. Nested Object
const js = {
  name: 'JavaScript',
  type: 'programming language',
  version: 'ES6',
  tools: {
    frameworks: {
      framework1: 'AngularJS',
      framework2: 'Vue.js',
    },
    libraries: {
      library1: 'jQuery',
      library2: 'React',
    },
  },
};

// TODO: Destructure the nested object 'js'
const { name: language, type: languageType, version, tools: { frameworks: { framework1, framework2 }, libraries: {library1, library2} } } = js;

console.log(framework1); // <= AngularJS
console.log(framework2); // <= Vue.js
console.log(language); // <= JavaScript
console.log(languageType); // <= programming language
console.log(version); // <= ES6
console.log(library1); // <= jQuery
console.log(library2); // <= React

// 3. Arrays
const languages = ['HTML', 'CSS', 'JavaScript'];

const [markup, style, scripting] = languages;
// TODO: Destructure the array 'languages'

console.log(markup, style, scripting); // <= HTML CSS JavaScript
console.log(markup); // <= HTML
