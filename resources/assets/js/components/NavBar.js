import React, { Component } from 'react';
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
            <nav className="navbar navbar-expand-sm bg-light">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="login">Login</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="register">Register</NavLink>
                  </li>
                </ul>
            </nav>
    )
}

export default NavBar;