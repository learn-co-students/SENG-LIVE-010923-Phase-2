
function Header({firstName, lastName, age, myObj}) {

    return (
    <>
     <h1>Hello {firstName}, welcome to the Showcase App!</h1>
     <p>Your last name is {lastName} and you are {age} years old. </p>
    </>
    );
}

export default Header;
