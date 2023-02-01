import { useState } from 'react';
// Take "projects" and create a projectlistitem component for each
import ProjectListItem from "./ProjectListItem";

const ProjectList = ({projects}) => {
    // console.log(projects);
    // set state
    const [searchQuery, setSearchQuery] = useState("");
    // projects => Array of Objects
    // .map => Returns a New Array

    const ProjectListItems = projects.map(project => {
        return <ProjectListItem key={project.id} project={project} />
    });

    return(
        <section>
        <h2>projects</h2>

        <div className="filter">
            <button>All</button>
            <button>Phase 5</button>
            <button>Phase 4</button>
            <button>Phase 3</button>
            <button>Phase 2</button>
            <button>Phase 1</button>
        </div>
        <input
        type="text"
        placeholder="Search..."
            onChange={(e) => console.log(e.target)}
        />

        <ul className="cards">{ProjectListItems}</ul>
        </section>
    )
}

export default ProjectList;
