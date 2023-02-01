import { useState } from "react";

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

// Previous Data Flow
// import projects from "./projects";

const App = () => {
  
  // Set Up State "projects" To Manage Data
  const [projects, setProjects] = useState([]);

  // Request URL => /projects

  // # Deliverable 1: Configure a <button> in our App 
  // that will use json-server to fetch projects 
  // and store them in state

  // - Add an onClick event listener to the "Load Projects" 
  // button

  // Later On, We Will Be Using the "useEffect" Hook
  // to Load Up Our Projects and Only Set State Once

  const handleProjects = () => {
    // - When the button is clicked, make a fetch 
    // request to "http://localhost:4000/projects"
    // and set the `projects` state to the value 
    // returned by the response

    // By Default, When We Omit Second Arg, GET Request Is Fired 
    fetch("http://localhost:4000/projects")

      // .json() => Converting JSON Response to JS
      .then(res => res.json())

      .then(projects => {
        
        // Update "projects" State With Array of Project Objects
        setProjects(projects);
      });
  }

  

  return (
    <div className="App">
      <Header />
      <ProjectForm />
      <button onClick={handleProjects}>Load Projects</button>
      <ProjectList projects={projects} />
    </div>
  );
};

export default App;
