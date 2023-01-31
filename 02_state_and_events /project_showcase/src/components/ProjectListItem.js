// State => Managed WITHIN Components
// Props => Managed ACROSS Components

// Set Up State / Setter Function
// Add Event Handler to Clap <button>
// Set Up Helper Function

import { useState } from 'react';

const ProjectListItem = ({ id, about, image, link, name, phase }) => {
  
  // Set Up State / Setter Function
  const [clapCount, setClapCount] = useState(0);

  // Set Up Helper Function
  function handleClick() {
    
    // How Do We Properly Increment clapCount Up By One Each Time <button> is Clicked?

    // Directly Mutating State
    // clapCount++
    // clapCount = clapCount + 1;

    // Using Setter Function
      // Not Using Any Reference to a Previous Value
    // setClapCount(clapCount + 1);
    
    // Best Practice Approach to Incrementing State
      // Previous Values of State Are Implicitly Passed In to Setter Function CBs
    setClapCount(prevCount => prevCount + 1);
  }

  return (
    <li className="card">
      <figure className="image">
        <img src={image} alt={name} />
        <button onClick={handleClick} className="claps">👏{clapCount}</button>
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
      </footer>
    </li>
  );
};

export default ProjectListItem;
