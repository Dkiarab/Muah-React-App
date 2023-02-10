import logo from "../assests/logo.png";
import searchIcon from "../assests/pinksearch2.png";
import dropDown from "../assests/show-more.png";
import "../styles/NavBar.css";
import Menu from "../components/Menu";

function NavBar() {
  return (
    <div className="navbar">
      <div className="navRight">
        <img className="logo" src={logo} alt="Muah Logo" />
        <button>
          <img className="dropDown" src={dropDown} alt="" />
        </button>
      </div>
      <div className="search">
        <img className="searchIcon" src={searchIcon} alt="search icon" />
        <input type="text" placeholder="Search"></input>
      </div>
      <Menu />
    </div>
  );
}

export default NavBar;
