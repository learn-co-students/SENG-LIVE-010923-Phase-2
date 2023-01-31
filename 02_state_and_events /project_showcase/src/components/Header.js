
// isON / isOff

import { useState} from 'react';

const Header = ({ isDarkMode, handleClick }) => {

  // Set up State / Setter Function
  // Array Destructuring Assignment
  // useState() what does it return? answer: array
     // returns a New Array
    // First Element => State
    // Second Element => State Setter Function

  // const [ stateVariable, stateSetter ] = useState(initialValue);
   //   const [ isDarkMode, isDarkModeSetter] = useState(true);
  // Helper function
  /* function handleClick() {
      isDarkModeSetter(!isDarkMode);
} */
  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>

      {/* Add event listener */}
      <button onClick = {handleClick}>{isDarkMode ? "Light Mode": "Dark Mode"}Dark Mode</button>
    </header>
  );
}

export default Header;
