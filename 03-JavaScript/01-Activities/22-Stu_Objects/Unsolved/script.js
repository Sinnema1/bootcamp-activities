// WRITE YOUR CODE BELOW

// Objects are a collection of properties
const customerDrink = {
// Properties are made up of key-value pairs
name: "baja blast",
sugars: "4.543 billion grams",
isReady: false,
};
  
// To access a property's value that is a string, number or boolean, use the object's name and the associated key
console.log(`the drink is ${customerDrink.name} and has ${customerDrink.sugars} of sugar.`);

if (customerDrink.isReady) {
console.log("Ready for pick-up");
} else {
console.log("Still in the order queue");
}