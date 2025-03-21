// Generic function to return the first and last values of the provided array.
const getFirstAndLastArrayValues = (inputArray) => {
    if (inputArray.length == 0) {
        return [];
    }
    else if (inputArray.length == 1) {
        return [...inputArray];
    }
    const resultArray = new Array();
    resultArray[0] = inputArray[0];
    resultArray[1] = inputArray[inputArray.length - 1];
    return resultArray;
};
console.log(getFirstAndLastArrayValues([])); // []
console.log(getFirstAndLastArrayValues([99])); // [ 99, 99 ]
console.log(getFirstAndLastArrayValues([1, 2, 3, 4, 5])); // [ 1, 5 ]
console.log(getFirstAndLastArrayValues(['one', 'two', 'three', 'four', 'five'])); // [ 'one', 'five' ]
// The generic SimpleStack class provides push and pop functionality and a method to log the entire stack to the console.
class SimpleStack {
    constructor() {
        this._array = [];
    }
    push(value) {
        this._array.push(value);
    }
    pop() {
        return this._array.pop();
    }
    writeToConsole() {
        console.log(this._array);
    }
}
const stack1 = new SimpleStack();
stack1.push(3);
stack1.push(4);
stack1.push(5);
stack1.pop();
stack1.writeToConsole(); // [ 3, 4 ]
const stack2 = new SimpleStack();
stack2.push('three');
stack2.push('four');
stack2.push(5);
stack2.writeToConsole(); // [ 'three', 'four', 5 ]
