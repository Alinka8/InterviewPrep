import React, { useState } from "react";

import "./NavBar.css";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <nav className="nav">
        <div className="nav__logo">Interview Prep</div>
        <div
          className="nav__hamburger"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <span className="nav__hamburger__line"></span>
          <span className="nav__hamburger__line"></span>
          <span className="nav__hamburger__line"></span>
        </div>
        <div className={`nav__menu ${menuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href="#signin">Sign in</a>
            </li>
            <li>
              <a href="#login">Log in</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="bg"></div>
    </div>
  );
};

export default NavBar;
