// Set up State / Setter Function to Manage searchQuery
// Set up Event Handler / Helper Function
// Set up Filtering Logic for Displaying Projects that Match searchQuery

import { useState } from 'react';
import ProjectListItem from "./ProjectListItem";

const ProjectList = ({ projects }) => {


  // set up state
  const [ searchQuery, setsearchQuery ] = useState("");

  const filteredlistItems = projects.filter(project => {
    // only return projects whose names partially match search

    return project.name.toLowerCase.includes(searchQuery.toLowerCase())
  })

  const projectListItems = filteredlistItems.map((project) => (
    <ProjectListItem key={project.id} {...project} />
  ));

  function handleSearch(e) {
    setsearchQuery(e.target.value);
  }

  return (
    <section>
      <h2>Projects</h2>

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
            onChange={handleSearch}
        />

        <ul className="cards">{ProjectListItems}</ul>
        </section>
  );
};

export default ProjectList;
