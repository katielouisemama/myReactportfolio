import "./Header.css";
import { useState, useRef } from "react";
import { FaGithub, FaLinkedin, FaBars } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdMailOutline, MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import React from 'react';



function Header() {
  // for menu on mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = (event) => {
    if (event.target.checked) {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
};
 

 

  return (
    <div>
      <header className="top">
        <p>Welcome</p>

        {/* Hamburger Icon (Visible only on mobile) */}
        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <FaBars />
        </div>

        {/* Navigation Links */}
        <nav className={isMenuOpen ? "nav-links active" : "nav-links"}>
          <a href="">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Project</a>
          <a href="#">Contact</a>
          <a href="https://github.com/katielouisemama"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/inyang-valentine-a6b748325/"><FaLinkedin /></a>
          <a href=""><MdMailOutline /></a>
        </nav>

        {/* Dark Mode Toggle */}
        <label className="rocker rocker-small">
            <input type="checkbox" onChange={handleToggle} />
            <span className="switch-left"><MdOutlineDarkMode /></span>
            <span className="switch-right"><MdDarkMode /></span>
        </label>
      </header>
    </div>
  );
}

export default Header;
