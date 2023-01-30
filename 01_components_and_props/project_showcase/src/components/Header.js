function Header({firstName, lastName, age, myObj}) {
    // console.log(props);

    // const firstName = props.firstName;
    // const lastName = props.lastName;
    // const age = props.age;

    // const { firstName, lastName, age } = props;
    
    // console.log(myObj);

    const newFirstName = firstName + "XYZ";

    return (
        <>
            <h1>Hello {newFirstName}, welcome to the Showcase App!</h1>
            <p>Your last name is {lastName} and you are {age} years old.</p>
        </>
    ); 
}

export default Header;