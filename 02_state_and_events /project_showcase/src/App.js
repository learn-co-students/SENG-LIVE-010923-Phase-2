import {useState} from 'react'

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

import projects from "./projects";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true)

  const handleClick = () =>{
    setIsDarkMode(isDarkMode => !isDarkMode)
   }
   const appTheme = isDarkMode ? "App" : "App light"
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
