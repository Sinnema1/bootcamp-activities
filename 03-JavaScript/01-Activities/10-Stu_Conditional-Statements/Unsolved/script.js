// Change the values and operators below to test your algorithm meets all conditions
const x = 50;
const expression1 = (x < 25); //false
const expression2 = (x > 50); //false

// Write Your JavaScript Code Here
if (!expression1 && !expression2) {
  console.log("True ✅ True ✅");
} else if (expression1 || !expression2) {
  console.log("False ❌ True ✅");
} else if (!expression1 || expression2) {
  console.log("True ✅ False ❌");
} else {
  console.log("False ❌ False ❌");
}