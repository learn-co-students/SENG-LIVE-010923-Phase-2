function ProjectListItem({project}) {

    // Object Destructuring
    const { name, about, link, image} = project

    return (
        <li>
        <h2>ProjectListItem Component</h2>
        <p>Title: {name}</p>
        <p>About: {about}</p>
        <a href={link}>Project Link</a>
        <p>{image}</p>
        </li>
    );
}

export default ProjectListItem;
