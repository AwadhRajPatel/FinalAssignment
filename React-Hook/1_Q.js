import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default Counter;



/**
 * 
 * 1. What are Hooks?

Hooks are functions that let you "hook into" React state and lifecycle features from functional components. Before hooks, state and lifecycle methods were only accessible in class components.

How do hooks differ from class components?

No more "this": You don't need to bind methods or manage "this" in functional components.

Composed Functionality: 

Hooks let you split your components into smaller, reusable pieces of logic,
 making code more maintainable.
Improved Readability: Functional components with hooks are often easier to read and understand compared 
to class-based components, especially when dealing with complex logic.

 */