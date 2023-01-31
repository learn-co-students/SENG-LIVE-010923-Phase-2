// npm i => npm install
// npm i && npm start => Command Sequence
  // <some command> && <some other command>

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

import projects from "./projects";

// Import useState Hook
import { useState } from 'react';

const App = () => {


  // Lifting Up State / Inverse Data Flow

    // Set Up State / Setter Function
    const [isDarkMode, setDarkMode] = useState(true);

    // Helper Function
    function handleClick() {
      setDarkMode(!isDarkMode);
    }

  const appTheme = isDarkMode ? "App" : "App light";

  return (
    <div className={appTheme}>
      <Header 
        isDarkMode={isDarkMode}
        handleClick={handleClick}
      />
      <ProjectForm />
      <ProjectList projects={projects} />
    </div>
  );
};

export default App;
