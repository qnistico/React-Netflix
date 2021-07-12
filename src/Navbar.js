import { Avatar } from '@material-ui/core';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import "./Navbar.css";
import { useHistory } from "react-router-dom";

function Navbar() {
    const history = useHistory();
    const [show, handleShow] = useState(false);

    const transitionNav = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        }
        else {
            handleShow(false)
        }
    }
    
    useEffect(() => {
        window.addEventListener("scroll", transitionNav);
        return () => window.removeEventListener("scroll", transitionNav);
    }, []);
    return (
        <div className={`nav ${show && "nav-color"}`}>
            <div className="nav-content-flex">
            <img src="https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png?v=8" alt="" className="nav-logo"/>
<div className="nav-avatar">
            <Avatar />
            </div>
            </div>
            </div>
    )
}

export default Navbar
