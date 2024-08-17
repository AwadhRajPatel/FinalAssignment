import React, { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.example.com/data');
      const json = await response.json();
      setData(json);
    };

    fetchData();
  }, []); // The effect will run only once when the component mounts

  return (
    <div>
      {data && <p>Data: {data.name}</p>}
    </div>
  );
}

export default DataFetcher;



/**
 * 
 * useState Hook

Syntax: const [state, setState] = useState(initialState);

Purpose: useState lets you add React state to a function component. It takes an initial state value as an argument and returns an array containing two things:

The current state value.
A function to update the state.
State Management: useState provides a simple way to manage state in functional components. The setState function is responsible for updating the state, and React will automatically re-render the component whenever the state changes.

3. useEffect Hook

Syntax: useEffect(() => { /* side effect */ 