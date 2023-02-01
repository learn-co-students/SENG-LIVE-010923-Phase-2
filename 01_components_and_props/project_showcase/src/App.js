import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
 // import ProjectListItem from "./components/ProjectListItem"

import projects from "./projects"

function App() {

  return (
  <>
    <Header
      firstName="Louis"
      lastName="Medina"
      age={32}

    />
    <ProjectForm />
    <ProjectList
    projects = {projects} />
  </>
  );
}

export default App;
