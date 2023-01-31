// Set Up State / Setter Function To Manage searchQuery
// Set Up Event Handler / Helper Function
// Set Up Filtering Logic for Displaying Projects Whose Names Match searchQuery

import { useState } from 'react';

import ProjectListItem from "./ProjectListItem";

const ProjectList = ({ projects }) => {

  // Set Up State / Setter Function
  const [searchQuery, setSearchQuery] = useState("");

  // .filter + .map => Return New Arrays

  // Apply Filtering Logic
  const filteredListItems = projects.filter(project => {

    // Only Return Projects Whose Names Partially Match searchQuery
    // "project.name" vs. "searchQuery"
      // We Want to Flatten These Before We Run Our Comparisons
        // project.name => Great Outdoors Guide => great outdoors guide
        // searchQuery => Great Outdoors Guide => great outdoors guide

    return project.name.toLowerCase().includes(searchQuery.toLowerCase());
  })
   
  // Current Logic = Totally Unrestrained / Zero Filtering
  const projectListItems = filteredListItems.map(project => (
    <ProjectListItem key={project.id} {...project} />
  ));

  // Set Up Helper Function
  
  function handleSearch(e) {
    // console.log(e.target.value);

    // Invoking Setter Function
    setSearchQuery(e.target.value);
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

      <ul className="cards">{projectListItems}</ul>
    </section>
  );
};

export default ProjectList;
