import { Avatar } from "@material-ui/core";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Navbar.css";
import { useHistory } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/counter/userSlice";
import { auth } from "./firebase";
import Modal from "./Components/Modal";


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
          src="https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png?v=8"
          alt=""
          className="nav-logo"
        />
        
        <div className="App nav-avatar">
      <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        <AccountCircleIcon />
        <p>{user.email}</p>
      </button>

      {modalOpen && <Modal setOpenModal={setModalOpen} />}
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
