// Set Up State / Setter Function
  // isOn / isOff
  // isDarkMode => true / false
// Set Up Our Helper Function
// Set Up Our Event Listener on <button>

// Import the useState Hook
  // Boiler Plate / Built-In Function
// import { useState } from 'react';

const Header = ({ isDarkMode, handleClick }) => {
  
  // Set Up State / Setter Function

  // Array Destructuring Assignment
    // useState() => What Does It Return? (Array) 
  
  // const [ stateVariable, stateSetter ] = useState(initialValue);

  // console.log(useState());

    // Returns a New Array
      // First Element => State
      // Second Element => State Setter Function

  // const [isDarkMode, isDarkModeSetter] = useState(true);

  // // Helper Function
  // function handleClick() {
  //   isDarkModeSetter(!isDarkMode);
  // }
  
  const buttonContent = isDarkMode ? "Light Mode" : "Dark Mode";

  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      
      {/* Add Event Listener */}
      
      {/* Ternary Operator */}
        {/* CONDITION ? IF TRUE : IF FALSE */}
      <button onClick={handleClick}>{buttonContent}</button>
    </header>
  );
}

export default Header;
