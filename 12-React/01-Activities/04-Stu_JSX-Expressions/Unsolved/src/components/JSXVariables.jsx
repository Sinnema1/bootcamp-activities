// TODO: Create a `name` variable
const names = [
  'Justin',
  'Zachary',
  'Atouname'
]

// TODO: Create a `thoughts` variable
// This should be a string regarding what you think of React
const thoughts = 'is cool beans'

function JSXVariables() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="p-5 mb-4 bg-light">
          {/* TODO: Add your name variable */}
          <h1>Hi! My name is {names[0]}</h1>
          {/* TODO: Add your number of letters variable */}
          <h2>My name has {names[0].length} letters</h2>
          {/* TODO: Add your thoughts variable */}
          <h2>I think React {thoughts}</h2>
          <ul>
          <h2>I'm trying the map array method {names.map((name, index) => <li key={index}>{name}</li>)}</h2>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
