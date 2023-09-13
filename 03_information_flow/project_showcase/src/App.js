import { useState } from "react";

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

const App = () => {
  const [projects, setProjects] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");


  const handleProjects = () => {
    fetch("http://localhost:4000/projects")
    .then((response) => response.json())
    .then((projects) => setProjects(projects))
    .catch((error) => console.error(error))
  }

  const handleClick = () => setIsDarkMode(!isDarkMode);
  const handleOnChange = (e) => setSearchQuery(e.target.value);

  const searchResults = projects.filter((project) => {
    return project.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const appTheme = isDarkMode ? 'App' : 'App light'
  return (
    <div className={appTheme}>
      <Header
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        handleClick={handleClick}
         />
      <ProjectForm />
      <button onClick={handleProjects}>Load Projects</button>
      <ProjectList
        handleOnChange={handleOnChange}
        searchResults ={searchResults}
        />
    </div>
  );
};

export default App;
