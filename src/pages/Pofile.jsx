import React from 'react';
import './Profile.css';
import profileImage from '../assets/kl.png'; 

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-header">
        <div className="cover-photo">
         
        </div>
        <div className="profile-photo">
          <img src={profileImage} alt="Profile" />
        </div>
        <h1>Sharafa Wale Mustapha <span className="emoji">💋</span></h1>
        <p>Brings ideas to life with code! ✨</p>
        <p className="bio">
            Entry-level developer with a knack for creativity <br />and a strong foundation in coding principles. <br /> Committed to continuous learning and improving  <br />my skills in front-end.
        </p>
        <button className="follow-button"><a href="">Follow</a></button>
      </div>
      <div className="profile-links">
        <span className="icon">🔗</span>
        <a href="/links">/links</a>
        <span className="icon">📅</span>
        <span>Novermber 9th</span>
        <span className="icon">📅</span>
        <span>Joined Nov 2024</span>
      </div>
      <p className="footer-text">Stay updated on my latest projects and adventures!</p>
    </div>
  );
};

export default Profile;
