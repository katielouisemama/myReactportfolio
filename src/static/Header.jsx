import "./Header.css";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaBars } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdMailOutline, MdDarkMode, MdOutlineDarkMode } from "react-icons/md";

function Header() {
  // for menu on mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 

  // Toggle theme background color
 

 

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
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#project">Project</a>
          <a href="#contact">Contact</a>
          <a href="https://github.com/dashboard"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/sharafa-wale-mustapha-a20a88109?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><FaLinkedin /></a>
          <a href="https://x.com/wallflex2?s=21"><FaXTwitter /></a>
          <a href=""><MdMailOutline /></a>
        </nav>

        {/* Dark Mode Toggle */}
        <label className="rocker rocker-small"  >
          <input type="checkbox"  />
          <span  className="switch-left"><MdOutlineDarkMode /></span>
          <span  className="switch-right"><MdDarkMode /></span>
        </label>
      </header>
    </div>
  );
}

export default Header;
