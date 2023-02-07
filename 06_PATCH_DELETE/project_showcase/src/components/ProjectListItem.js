// Deliverable 2: Click the delete button and make a 
// DELETE request

// DONE - Attach an `onClick` event listener to the delete 
// button

// DONE - Add a `DELETE` fetch request to the event handler 
// for the delete button

// DONE - Update the `projects` state in the parent component
// `App` using the `.filter` function

  //  The goal is to return a new array with the deleted project excluded

// -----------------

  // Deliverable 3: Click the claps button and persist the updated number of claps

  // DONE - Send a `PATCH` request when the `clapsCount` is updated through a click event

  import { useState } from "react";
  import { FaPencilAlt, FaTrash } from "react-icons/fa";
  
  const ProjectListItem = ({ project, enterProjectEditModeFor, onDeleteProject }) => {
    
    const { id, image, about, name, link, phase, claps } = project;
  
    // claps => Undefined
    // claps => 5, 10, 15...

    const [clapCount, setClapCount] = useState(claps || 0);
  
    const handleClap = () => {
      // Update Clap Count Optimistically
      // setClapCount(prevCount => prevCount + 1);

      const configObj = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({claps: clapCount + 1}),
      };
  
      // PATCH Request
      fetch(`http://localhost:4000/projects/${id}`, configObj)
        .then((resp) => resp.json())
        .then(() => {
          // Only Make a State Change After Fetch Request Has Properly
          // Fired Off / We Have an Appropriate Response
          setClapCount(prevCount => prevCount + 1);
        });
    };
  
    const handleEditClick = () => {
      enterProjectEditModeFor(id);
    };
  
    const handleDeleteClick = () => {
      
      const configObj = {
        method: "DELETE"
      };
  
      // POST Request
      fetch(`http://localhost:4000/projects/${id}`, configObj)
        .then(() => {
          onDeleteProject(project);
        });
    };
  
    return (
      <li className="card">
        <figure className="image">
          <img src={image} alt={name} />
          <button onClick={handleClap} className="claps">
            👏{clapCount}
          </button>
        </figure>
  
        <section className="details">
          <h4>{name}</h4>
          <p>{about}</p>
          {link ? (
            <p>
              <a href={link}>Link</a>
            </p>
          ) : null}
        </section>
  
        <footer className="extra">
          <span className="badge blue">Phase {phase}</span>
          <div className="manage">
            <button onClick={handleEditClick}>
              <FaPencilAlt />
            </button>
            <button onClick={handleDeleteClick}>
              <FaTrash />
            </button>
          </div>
        </footer>
      </li>
    );
  };
  
  export default ProjectListItem;
  