import { useState } from 'react';
import CardBody from './CardBody';

// TODO: Add a comment explaining what export default does
// makes the Counter function available for use in other pages without needing to specifically define the page name as long as the location is correct because of "default" 
export default function Counter() {
  // TODO: Add a comment that explains how the useState hook works
  // The useState hook is used to add state to a functional component.
  // It returns an array with two elements:
    // - The current state value (count in this case).
    // - A function to update the state value (setCount in this case).
  // The initial state value is passed as an argument to useState (0 in this case).
  const [count, setCount] = useState(0);

  // TODO: Explain what is happening with this click handler
  // this handler accepts one argument (count) as the initial state value, then increases the state by 1 each time it's invoked.
  const handleIncrement = () => {
    setCount((count + 1));
  };

  // TODO: Explain what is happening with this click handler
    // this handler accepts one argument (count) as the initial state value, then decreases the state by 1 each time it's invoked.
  const handleDecrement = () => {
    if (count > 0) {
      setCount((count - 1));
    }
  };

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">Click Counter!</div>
      {/* TODO: Add a comment that explains what props are getting passed to CardBody */}
      {/* count, handleIncrement, and handleDecrement are all being passed to CardBody */}
      <CardBody
        count={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    </div>
  );
}
