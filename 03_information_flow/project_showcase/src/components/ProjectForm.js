const ProjectForm = ({searchQuery}) => {
  return (
    <section>
      <form className="form">
        <h1>{searchQuery}</h1>
        <h3>Add New Project</h3>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="about">About</label>
        <textarea id="about" name="about" />
        <button type="submit">Add Project</button>
      </form>
    </section>
  );
};

export default ProjectForm;
