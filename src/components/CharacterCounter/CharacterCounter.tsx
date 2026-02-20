// //Create a CharacterCounter component that combines the above components and manages the state.

import { useState, useEffect } from "react";
import type { CharacterCounterProps, TextStats } from "../../types";
import { TextInput } from "../../TextInput";
import { StatsDisplay } from "../StatsDisplay/StatsDisplay";


function CharacterCounter() {
  // Initialize state: count starts at 0
  const [count, setCount] = useState(0); // TypeScript infers 'count' is a number

  // Function to handle button click
  const increment = () => {
    // Use the setter function to update the state
    // Pass the new value directly
    setCount(count + 1);
    // Note: Avoid count++ or ++count - modify state via the setter!
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      characterCount
      wordCount
      readingTime
    </div>
  );
}

export default CharacterCounter;



     