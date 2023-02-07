// C - Creating New Projects
// R - Reading Existing Projects
// U - Update Existing Projects
// D - Destroy Existing Projects

  // We Always Want to Update State Along With Our Data Changes

import { useEffect, useState } from "react";

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import ProjectEditForm from "./components/ProjectEditForm";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [projects, setProjects] = useState([]);
  const [projectId, setProjectId] = useState(null);

  // GET Request
  useEffect(() => {
    fetch("http://localhost:4000/projects")
      .then((resp) => resp.json())
      .then((projects) => setProjects(projects));
  }, []);

  const onToggleDarkMode = () => {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  };

  // Create
  const onAddProject = (newProj) => {
    setProjects((projects) => [...projects, newProj]);
  };

  // Update
  const onUpdateProject = (updatedProj) => {
    // .map Over Existing "projects"
    
      // Creating New Array (updatedProjectList) Which
      // Will Contain All Old Projects + Newly Updated Project
      // In Place Of Old Project With Same ID
      const updatedProjectList = projects.map(oldProject => {
        if (updatedProj.id === oldProject.id) {
          return updatedProj;
        } else {
          return oldProject;
        }
      });
      
      // Update "projects" State With Newest List
      setProjects(updatedProjectList);
  }

  // Delete  
  const onDeleteProject = (deletedProj) => {
    const updatedProjectList = projects.filter(oldProject => {  
      
      // We Want to Return All Projects Whose IDs Do NOT Match
      // oldProject.id

      return oldProject.id !== deletedProj.id;
    });

    // Update "projects" State With Newest List
    setProjects(updatedProjectList);
  }

  const completeEditing = () => {
    setProjectId(null);
  };

  const enterProjectEditModeFor = (projectId) => {
    setProjectId(projectId);
  };

  const renderForm = () => {
    if (projectId) {
      return (
        <ProjectEditForm
          projectId={projectId}
          completeEditing={completeEditing}
          onUpdateProject={onUpdateProject}
        />
      );
    } else {
      return <ProjectForm onAddProject={onAddProject} />;
    }
  };

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
      {renderForm()}
      <ProjectList
        projects={projects}
        enterProjectEditModeFor={enterProjectEditModeFor}
        onDeleteProject={onDeleteProject}
      />
    </div>
  );
};

export default App;
