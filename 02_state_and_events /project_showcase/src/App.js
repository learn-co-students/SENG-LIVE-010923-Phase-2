import { useState } from 'react'

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

import projects from "./projects";

const App = () => {
const [isDarkMode, setIsDarkMode]  = useState(true)

const theme = isDarkMode ? 'App' : 'App light'

function handleClick(){
    setIsDarkMode(!isDarkMode)
  }
  return (
    <div className={theme}>
      <Header
       isDarkMode={isDarkMode}
       handleClick={handleClick}/>

      <ProjectForm />
      <ProjectList
        projects={projects}
         />
    </div>
  );
};

export default App;
