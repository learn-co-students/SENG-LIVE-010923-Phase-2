function ProjectListItem({project}) {

    // Object Destructuring
    const { name, about, link} = project
    return (
        <li>
        <h2>ProjectListItem Component</h2>
        <p>{name}</p>
        <p>{about}</p>
        <p>{link}</p>
        </li>
    );
}

export default ProjectListItem;
