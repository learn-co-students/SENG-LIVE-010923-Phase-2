import { useState} from 'react'
import ProjectListItem from "./ProjectListItem";

const ProjectList = ({ projects }) => {

    const [searchQuery, setSearchQuery] = useState('')

    const filteredItems = projects.filter((project) => {
      return project.name.toLowerCase().includes(searchQuery.toLowerCase())
    })
  const projectListItems = filteredItems.map((project) => (
    <ProjectListItem key={project.id} {...project} />
  ));

  const handleSearch = (e) => {
    return(
      setSearchQuery(e.target.value)
    );
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
      <input onChange={handleSearch}
        type="text"
        placeholder="Search..."
      />

      <ul className="cards">{projectListItems}</ul>
    </section>
  );
};

export default ProjectList;
