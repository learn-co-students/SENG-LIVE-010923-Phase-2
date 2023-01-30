// Component Hierarchy => App (Top)

  // Russian Doll

  // Header Component
  // ProjectForm Component
  // ProjectList Component
  // ProjectListItem Component
  
  // App Component => Highest Level in Our Component Hierarchy

// Component Imports
// . => /src
import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
  // import ProjectListItem from "./components/ProjectListItem";

// Relative Path
// Why Would I Want to Import My Data Here? (App Component)
import projects from "./projects";

function App() {
  // console.log(projects);

  return (
    <>
      <Header 
        firstName="Louis"
        lastName="Medina"
        age={32}
        // myObj={{
        //   testing: "testing"
        // }}
      />
      <ProjectForm />
      <ProjectList 
        projects={projects}
      />
    </>
  );
}

export default App;