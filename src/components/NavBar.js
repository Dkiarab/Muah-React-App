import logo from "../assests/logo.png";
import searchIcon from "../assests/pinksearch2.png";
import Menu from "./Menu.js";
import dropDown from "../assests/show-more.png";

function NavBar() {
  return (
    <div className="navbar">
      <div className="container">
        <img className="logo" src={logo} alt="Muah Logo" />
        <img className="dropDown" src={dropDown} alt="" />
        <div className="search">
          <img className="searchIcon" src={searchIcon} alt="search icon" />
          <span className="searchText">Search</span>
        </div>
        <Menu />
      </div>
    </div>
  );
}

export default NavBar;
