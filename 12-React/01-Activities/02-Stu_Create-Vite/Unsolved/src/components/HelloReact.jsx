// TODO: Add a comment explaining what a react component is
// creating a react element that is later exported for use. creating a variable "text".
function HelloReact() {
  const text = 'some text';

  // TODO: Add a comment explaining what JSX is and the significance of the curly braces
  // when helloReact is called, the below string is returned with the variable "text" created above.
  return <h2>Hello World! Here is {text}</h2>;
}

export default HelloReact;
