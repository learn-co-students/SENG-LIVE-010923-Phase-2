// Deliverable 1: Make the `ProjectForm` component a controlled component

// DONE - Initialize state for all the form fields found in the component

// DONE - Add an `onChange` event handler to each field that will update state associated 
// with the field that is interacted with

// DONE - Provide a `value` attribute to each form field that will return the 
// associated piece of state

// - Add an `onSubmit` event handler to the form

import { useState } from "react";

const ProjectForm = ({projects, setProjects}) => {

  // Creating Separate States for Each Input
  // const [name, setName] = useState("");
  // const [about, setAbout] = useState("");
  // const [phase, setPhase] = useState("");
  // const [link, setLink] = useState("");
  // const [image, setImage] = useState("");

  const initialFormValues = {
    name: "",
    about: "",
    phase: "",
    link: "",
    image: ""
  }

  // Creating One State for Each Input (One Object)
  const [ formData, setFormData ] = useState(initialFormValues);
  
  // Setting Up Multiple Helper Functions
  // const handleName = (e) => {
  //   setName(e.target.value);
  // }

  // const handleAbout = (e) => {
  //   setAbout(e.target.value);
  // }

  // Setting Up ONE Helper Function
  const handleInput = (e) => {
    
    // console.log(e.target.name)
    // console.log(e.target.value)

    // e.target => JS Object
    // Object Destructuring => Simplifies Syntax In Setter Function Arg Below
    const { name, value } = e.target;

    // Will This Work Properly?
      // It will transform our formData State from an Object to a String
    // setFormData(e.target.value);

    // We're Going to Need to Update the Appropriate Key / Value Pair
    // While Leaving the Rest Intact
      // event.target.name
      // event.target.value
    // JS Objects Can Only Have Unique Keys
    setFormData({...formData, [name]: value });

    // What Will Happen Here? (Incorrect)
    // setFormData({...formData, name: value });
  }

  const handleSubmit = (e) => {
    // First, we want to prevent the default page refresh that occurs
    // when we submit a form.
    e.preventDefault();

    // Next, we want to take "formData" (JS Object) and add it to the "projects" state (Array)
    setProjects(projects => [...projects, formData]);

    // Clear Out Form Values Upon Successful Submission
    setFormData(initialFormValues);
  }

  return (
    <section>
      <form className="form" autoComplete="off" onSubmit={handleSubmit}>
        <h3>Add New Project</h3>

        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          onChange={handleInput}
          value={formData.name}
        />

        <label htmlFor="about">About</label>
        <textarea 
          id="about" 
          name="about" 
          onChange={handleInput}
          value={formData.about}
        />

        <label htmlFor="phase">Phase</label>
        <select 
          name="phase" 
          id="phase"
          onChange={handleInput}
          value={formData.phase}
        >
          <option>Select One</option>
          <option value="1">Phase 1</option>
          <option value="2">Phase 2</option>
          <option value="3">Phase 3</option>
          <option value="4">Phase 4</option>
          <option value="5">Phase 5</option>
        </select>

        <label htmlFor="link">Project Homepage</label>
        <input 
          type="text" 
          id="link" 
          name="link" 
          onChange={handleInput}
          value={formData.link}
        />

        <label htmlFor="image">Screenshot</label>
        <input 
          type="text" 
          id="image" 
          name="image" 
          onChange={handleInput}
          value={formData.image}
        />

        <button type="submit">Add Project</button>
      </form>
    </section>
  );
};

export default ProjectForm;
