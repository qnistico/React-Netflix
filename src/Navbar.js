import { Avatar } from "@material-ui/core";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Navbar.css";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/counter/userSlice";
import { auth } from "./firebase";
import ProfileModal from "./Components/Modal";
import logo from "./img/logo.png";

function Navbar() {
  const history = useHistory();
  const user = useSelector(selectUser);

  const [show, handleShow] = useState(false);

  const transitionNav = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNav);
    return () => window.removeEventListener("scroll", transitionNav);
  }, []);

  const [modalOpen, setModalOpen] = useState(false);
  

  return (
    <div className={`nav ${show && "nav-color"}`}>
      <div className="nav-content-flex">
        <img
          onClick={() => history.push("/")}
          src={logo}
          alt=""
          className="nav-logo"
        />

        <div className="App nav-avatar">
          <div className="nav-profile-button">
          <ProfileModal>
            
            
          </ProfileModal>
          </div>
        </div>
        {/*
        <div
          onClick={() => history.push("/ProfilePage")}
          className="nav-avatar"
        >
          <AccountCircleIcon />
          <p>{user.email}</p>
        </div>
        */}
      </div>
    </div>
  );
}

export default Navbar;
