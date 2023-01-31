// Set up State // Setter Function
// add event handler to clap <button>
// set up helper function

import { useState } from 'react';

const ProjectListItem = ({ id, about, image, link, name, phase }) => {

  // set up state // setter
  const [clapCount, setClapCount ] = useState(0);

  // set up helper
  function handleClick() {
    // clapCount++
    // clapCount = clapCount + 1

    // How do we properly increment clapCount Up for 1 each time <button> is clicked?
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
