import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

import projects from "./projects";

import { useState } from 'react';

const App = () => {

  // Set up State / Setter Function from header
  const [ isDarkMode, isDarkModeSetter] = useState(true);
  // Helper Function
  function handleClick() {
    isDarkModeSetter(!isDarkMode);
}
  return (
    <div className="App">
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
