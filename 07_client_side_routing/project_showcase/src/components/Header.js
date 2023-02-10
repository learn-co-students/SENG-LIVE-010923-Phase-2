// Deliverable 3: Add navigation to the application using the `Link` and 
// `NavLink` components

import { Link, NavLink } from "react-router-dom";

  // DONE - Convert any html anchor tags to `Link` or `NavLink`

  // DONE - Demonstrate the difference between `Link` and `NavLink`

  const Header = ({ isDarkMode, onToggleDarkMode }) => {
    const buttonTextContent = isDarkMode ? "Light Mode" : "Dark Mode";
  
    return (
      <header>
        <nav>
          <h1 className="branding">
            <span className="logo">{"//"}</span>
            <Link to="/">
              Project Showcase
            </Link>
          </h1>
          <div className="navigation">
            
            {/* Current Problem => Default Behavior of Clicking on <a>
            Elements is a Page Refresh */}
            
            {/* NavLink => exact to="<some URL>" */}

              {/* When we are at <some URL>, we want "active" styling
              // to kick in for our NavLink Component */}
            <NavLink className="button" exact to="/projects">
              All Projects
            </NavLink>
            <NavLink className="button" exact to="/projects/new">
              Add Project
            </NavLink>
            <button onClick={onToggleDarkMode}>{buttonTextContent}</button>
          </div>
        </nav>
      </header>
    );
  };
  
  export default Header;
  