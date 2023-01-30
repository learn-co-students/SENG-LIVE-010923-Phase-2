// Take "projects" and Create a ProjectListItem Component For Each
// . => /src/components
import ProjectListItem from "./ProjectListItem";

function ProjectList({projects}) {
    // console.log(projects);

    // projects => Array of Objects
    // .map => Returns a New Array

    const ProjectListItems = projects.map(project => {
        return <ProjectListItem key={project.id} project={project}/>
    });
    
    return (
        <>
            <h1>ProjectList Component</h1>
            <ul>{ProjectListItems}</ul>
        </>
    );
}

export default ProjectList;