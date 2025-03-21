import './App.css';

function App() {
  const arr1: number[] = [1, 8, 3, 9, 2];
  const arr2: string[] = ['yo-yo', 'jawbreaker', 'apple', 'quick'];
  const str: string = 'Hello, world';
  const num: number = 42;

  // TODO: Create a function that takes an array of numbers or strings, a string, or a number as an argument and returns the right most element of the array or string or the last digit of the number.
  // TODO: use union types instead of any.

  // Use union for different types
  function findRightMostValue(input: string | number | (string | number)[]): string | number {
    // If the input is a string, the function returns the last character of the string.
    // If the input is an array, the function returns the last element of the array.
    if (typeof input === 'string' || Array.isArray(input)) {
      return input[input.length - 1];
    // If the input is a number, the function converts the number to a string, gets the last character, and converts it back to a number.
    } else if (typeof input === 'number') {
      const numStr = input.toString();
      return parseInt(numStr[numStr.length - 1], 10);
    } 
    return '';
  }

  return (
    <>
      <h2><code>{`const arr1: number[] =  [${arr1}];`}</code></h2>
      {/* should be 2 */}
      <p>{`The right most value is ${findRightMostValue(arr1)}.`}</p>
      <h2><code>{`const arr2: string[] =  [${arr2}];`}</code></h2>
      {/* should be 'quick' */}
      <p>{`The right most value is ${findRightMostValue(arr2)}.`}</p>
      <h2><code>{`const str: string =  '${str}';`}</code></h2>
      {/* should be 'd' */}
      <p>{`The right most value is ${findRightMostValue(str)}.`}</p>
      <h2><code>{`const num: number =  ${num};`}</code></h2>
      {/* should be 2 */}
      <p>{`The right most value is ${findRightMostValue(num)}.`}</p>
    </>
  )
}

export default App;
