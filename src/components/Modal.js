import React from "react";
import "../styles/modal.css";

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="overlay">
      <div className="modalContainer">
        <div className="users">
          <p onClick={onClose}>X</p>
          <h1>Following</h1>
          <hr />
          <h1>Followers</h1>
        </div>
      </div>
    </div>
  );
};

export default Modal;
