// Access element using id
const articlesDiv = document.getElementById('articles');
const headerDiv = document.getElementById('header');

// Change style by accessing style object's properties
console.log(articlesDiv);
console.log(articlesDiv.children[0]);
//console.log(articlesDiv.children[1]);
//console.log(articlesDiv.children[2]);
articlesDiv.children[0].style.height = '50px';
console.log(headerDiv);
console.log(headerDiv.children[0]);
console.log(headerDiv.children[1]);
//console.log(headerDiv.children[2]);
headerDiv.children[0].style.color = 'white';