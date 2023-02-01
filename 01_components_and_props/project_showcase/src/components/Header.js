
function Header(props) {

    const { firstName, lastName, age } = props;

    <>
     <h1>Hello {firstName}, welcome to the Showcase App!</h1>
     <p>Your last name is {lastName} and you are {age} years old. </p>
    </>
}

export default Header;
