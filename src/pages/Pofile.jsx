import React from 'react';
import './Profile.css';
import profileImage from '../assets/kl.png'; 
import { MdVerified } from "react-icons/md";
import { FaBirthdayCake } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FaCode } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-header">
        <div className="cover-photo"></div>
        <div className="profile-photo">
          <img src={profileImage} alt="Profile" />
        </div>
        <h1>Sharafa Wale Mustapha <span className="emoji"><MdVerified />
        </span></h1>
        <p>Brings ideas to life with code! <FaCode /></p>
        <p className="bio">
            Entry-level developer with a knack for creativity <br />and a strong foundation in coding principles. <br /> Committed to continuous learning and improving  <br />my skills in front-end.
        </p>
        <button className="follow-button"><a href="https://x.com/wallflex2?s=21">Follow <FaXTwitter /></a></button>
      </div>
      <div className="profile-links">
        <span className="icon">🔗</span>
        <a href="/links">/links</a>
        <span className="icon"><FaBirthdayCake /></span>
        <span>November 9th</span>
        <span className="icon"><SlCalender /></span>
        <span>Joined Nov 2024</span>
      </div>
      <p className="footer-text">Stay updated on my latest projects and adventures!</p>

      <form className="form-container">
        <input type="email" placeholder="Email Address" />
        <button type="submit">Subscribe!</button>
      </form>
      <p className="note">No spam. Unsubscribe any time.</p>
    </div>
  );
};

export default Profile;
