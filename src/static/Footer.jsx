import React from 'react';
import './Footer.css'; // Assuming you add styling here
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { CiMail } from "react-icons/ci";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {

 
    const currentYear = new Date().getFullYear();
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="brand">
          <span>Thanks for </span> <br />stopping by!


        </div>
        <div className="contact-info">
          <p><BsFillTelephoneFill />+234 902 537 5109</p>
          <p><CiMail />mustaphasharafa70@gmail.com</p>
        </div>
        <div className="social-icons">
          <a href="https://github.com/dashboard" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://x.com/wallflex2?s=21" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
          <a href="https://www.linkedin.com/in/sharafa-wale-mustapha-a20a88109?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
      </div>
      <hr className="footer-divider" />
      <nav className="footer-nav">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#technologies">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      <p className="footer-credit">

         © {currentYear} investor-wallflex.github.io. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;


<p></p>