import { useState } from "react";

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

const App = () => {
  const [projects, setProjects] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");



  // # Deliverable 1: Configure a <button> in our App
  // that will use json-server to fetch projects
  // and store them in state

  // - Add an onClick event listener to the "Load Projects"
  // button
  const handleProjects = () => {
    fetch("http://localhost:4000/projects")
      .then(res => res.json())
      .then(projects => {
        setProjects(projects)
      })
  }

  const handleClick = () => setIsDarkMode(!isDarkMode);
  const handleOnChange = (e) => setSearchQuery(e.target.value);


  const ProjectTheme = isDarkMode ?  "App" : "App light"

  return (
    <div className={ProjectTheme}>
      <Header
        isDarkMode={isDarkMode}
        handleClick={handleClick} />
      <ProjectForm searchQuery={searchQuery} />
      <button onClick={handleProjects}>Load Projects</button>
      <ProjectList
        projects={projects}
        searchQuery={searchQuery}
        handleOnChange={handleOnChange} />
    </div>
  );
};

export default App;
