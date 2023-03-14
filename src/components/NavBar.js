import logo from "../assests/logo.png";
import searchIcon from "../assests/pinksearch2.png";
import { AiOutlineDown } from "react-icons/ai";
import "../styles/NavBar.css";
import Menu from "../components/Menu";
import { useState } from "react";

import Modal from "./Modal";

function NavBar({ onClose }) {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="navbar">
      <div className="navRight">
        <img className="logo" src={logo} alt="Muah Logo" />
        <button classname="modalBtn" onClick={() => setModalOpen(true)}>
          <AiOutlineDown />
        </button>
        <Modal open={modalOpen} onClose={() => setModalOpen(false)} />
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
