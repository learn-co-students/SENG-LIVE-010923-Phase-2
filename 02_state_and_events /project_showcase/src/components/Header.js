

const Header = ({isDarkMode,handleClick}) => {
const buttonContent = isDarkMode ? "Light Mode" : "Dark Mode"
  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <button onClick={handleClick}>{buttonContent}</button>
    </header>
  );
}

export default Header;
