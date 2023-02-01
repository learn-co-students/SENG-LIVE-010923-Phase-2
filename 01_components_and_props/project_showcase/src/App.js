import Header from "./components/Header"
import ProjectForm from "./components/ProjectForm"
import ProjectList from "./components/ProjectList"
 // import ProjectListItem from "./components/ProjectListItem"

import projects from "./projects"

function App() {

  return (
  <>
    <div>Project Showcase</div>
    <Header
      firstName="Louis"
      lastName="Medina"
      age={32}
      myObj={{
        testing: "testing"
    }}
    />
    <ProjectForm />
    <ProjectList />
  </>
  );
}

export default App;
