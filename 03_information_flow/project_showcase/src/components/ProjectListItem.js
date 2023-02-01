import { useState } from "react";

const ProjectListItem = ({ id, about, image, link, name, phase }) => {

  // Why Would We Not Want to Move State From Here?
    // clapCount => Is This Something That We Need Elsewhere in Our Component Hierarchy?
    // Not Something That Would Be Shared Amongst Components
  const [clapCount, setClapCount] = useState(0);

  const handleClap = () => setClapCount(prevCount => prevCount + 1);

  return (
    <li className="card">
      <figure className="image">
        <img src={image} alt={name} />
        <button className="claps" onClick={handleClap}>
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
      </footer>
    </li>
  );
}

export default ProjectListItem;
