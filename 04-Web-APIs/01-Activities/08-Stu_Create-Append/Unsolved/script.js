const body = document.body;
const h1El = document.createElement('h1');
const infoEl = document.createElement('div');
const imgEl = document.createElement('img');
const kittenEl = document.createElement('div');
const nameEl = document.createElement('div');
const favoriteEl = document.createElement('div');
// Create ordered list element
const listEl = document.createElement('ol');
// Create ordered list items
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
const li4 = document.createElement('li');

h1El.textContent = 'Welcome to my page';
kittenEl.textContent = 'This is my kitten 🐱.';
nameEl.textContent = 'His name is Jax.';
favoriteEl.textContent = 'My favorite foods are:';

body.appendChild(h1El);
body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(kittenEl);
infoEl.appendChild(nameEl);
body.appendChild(favoriteEl);
// Append ordered list
favoriteEl.appendChild(listEl);

h1El.setAttribute('style', 'margin:auto; width:50%; text-align:center;');
infoEl.setAttribute('style', 'margin:auto; width:50%; text-align:center;');
imgEl.setAttribute('src', 'http://placekitten.com/200/300');
nameEl.setAttribute('style', 'font-size:25px; text-align:center;');
kittenEl.setAttribute('style', 'font-size:25px; text-align:center;');
favoriteEl.setAttribute('style', 'font-size:20px;');

// TODO: Add ordered list items containing four favorite foods
li1.textContent = 'Apples';
li2.textContent = 'Pizza';
li3.textContent = 'Dumplings';
li4.textContent = 'Cupcakes';

listEl.style.backgroundColor = "#333333";
listEl.style.padding = "20px";
li1.setAttribute('style',
    'color:white; padding: 5px; margin-left: 35px; background-color: #666666;'
);
li2.setAttribute('style',
    'color:white; padding: 5px; margin-left: 35px; background-color: #66666;'
);
li3.setAttribute('style',
    'color:white; padding: 5px; margin-left: 35px; background-color: #6666;'
);
li4.setAttribute('style',
    'color:white; padding: 5px; margin-left: 35px; background-color: #666;'
);

listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);

// const favoriteFoods = ['Apples', 'Pizza', 'Dumplings', 'Cupcakes'];
// const tag = document.createElement('div');
// for (const food of favoriteFoods) {
//   const li = document.createElement('li');
//   li.textContent = food;
//   tag.appendChild(li);
// }
// document.body.appendChild(tag);