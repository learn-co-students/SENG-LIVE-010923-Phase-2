function ProjectListItem({project}) {
    
    

    // Object Destructuring
    // project => JS Object 
    // Does Ordering Matter?
        // Yes?
        // No?
    
    // const image = project.image;
    // const name = project.name;
    // const phase = project.phase;
    // const about = project.about;
    // const link = project.link;
    const { image, name, phase, about, link } = project;
    
    // const projectName = name;

    return (
        <li>
            <br />
            <h2>ProjectListItem Component</h2>
            <p>Title: {name}</p>
            <p>About: {about}</p>
            <a href={link}>Project Link</a>
            {/* <img src={image} /> */}
            {/* <p>{image}</p> */}
        </li>
    );
}

export default ProjectListItem;