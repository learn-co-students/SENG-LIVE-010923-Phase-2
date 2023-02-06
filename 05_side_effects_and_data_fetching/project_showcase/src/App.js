import { useState, useEffect } from "react";
import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import Timer from "./components/Timer";

// Deliverable 1: Implement useEffect in App component 
// to load projects

  // DONE - Import the `useEffect` hook from the React library

  // DONE - Invoke `useEffect` and make a `GET` request using 
  // the `fetch` method

  // DONE - Update `projects` state upon successful response 
  // from the server (PESSIMISTIC)

// Deliverable 2: Demonstrate the order of operations 
// between rendering a component and running the side 
// effect

  // DONE - Place a console.log() inside the `App` component as 
  // well as the `useEffect` method

  // DONE - Open up the devtools to observe when each phase of 
  // the component will occur 

const App = () => {
  // console.log("Component Rendered!");
  
  const [projects, setProjects] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isTimerVisible, setIsTimerVisible] = useState(false);

  const onAddProject = newProject => {
    const newProjectCollection = [...projects, newProject];
    setProjects(newProjectCollection);
  }


  // Problem? => Component Will Continue Infinitely Re-Rendering
    // Unconstrained Re-Rendering Behavior Due to Changes to "projects" State
  
  // const handleClick = () => {
  useEffect(() => {
    // console.log("useEffect Behavior Fired!")
    
    // Optimistic Rendering
    // setProjects(projects);

    fetch("http://localhost:4000/projects")
      .then((res) => res.json())
      .then((projects) => { 
        
        // Pessimistic Rendering
        setProjects(projects);
      });

      // 3 Basic Phases of Component Lifecycle
        // 1. Mounting (Initial Render)
        // 2. Updating (Re-Rendering)
        // 3. Unmounting (Removal of the Component from the DOM)

      // Clean Up Function
      return () => {
        // Add Additional Behaviors to Fire Off Once Component
        // Is Unmounted From the DOM
      }
  }, []);
  // }

  // Dependency Array
    // Omit => Behavior Fires Off On Initial Render + With Each Subsequent Re-Render
    // [] => Behavior Fires Off On Initial Render and Only ONCE
    // [some, variable] => Behavior Fires Off On Initial Render + With Each Change to "some" / "variable"
      // PATCH REQUESTS 
  
  // };

  const onToggleDarkMode = () => setIsDarkMode(!isDarkMode);

  // Update "projects" State With Filtered List When Error Occurs
  // With POST Request
  const onError = filteredList => { setProjects(filteredList) };

  const handleClick = () => {
    setIsTimerVisible(!isTimerVisible);
  }

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <button onClick={handleClick}>Toggle Timer</button>

      {/* Conditional Rendering */}
      { isTimerVisible ? <Timer /> : null } 

      <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
      <ProjectForm 
        onAddProject={onAddProject} 
        onError={onError}
        projects={projects}
      />
      <ProjectList projects={projects} />
    </div>
  );
};

export default App;