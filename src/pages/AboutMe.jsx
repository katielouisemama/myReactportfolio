import React, { useEffect, useRef } from "react";
import "./AboutMe.css";

function AboutMe() {
  const aboutMeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-in");
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (aboutMeRef.current) {
      observer.observe(aboutMeRef.current);
    }

    return () => {
      if (aboutMeRef.current) {
        observer.unobserve(aboutMeRef.current);
      }
    };
  }, []);

  return (
    <div className="about-meContainer">
    <div id="about-me" className="about-me" ref={aboutMeRef}>
      <section className="about-section">
        <h1>About Me</h1>
        <p>
          My name is Sharafa Wale Mustapha, I’m a front-end developer based in
          Lagos, Nigeria. I love to learn and grow as a developer, and I'd love
          to connect with senior developers to gain insight and work together to
          reach both their goals and mine.
        </p>
        <p>
          I'm passionate about writing codes to craft intuitive and responsive
          user interfaces, ensuring seamless user experience across devices.
        </p>
      </section>

      <section className="experience-section">
        <h2>Work Experience</h2>
        <ul>
          <li>
            <h3>Software Developer Intern</h3>
            <span>Sail Innovation Lab</span>
            <span>2024 - Till date</span>
          </li>
          <li>
            <h3>Manager</h3>
            <span>Ardova Plc</span>
            <span>2023 - 2024</span>
          </li>
          <li>
            <h3>Customer Service</h3>
            <span>Polaris Bank</span>
            <span>2018 - 2023</span>
          </li>
        </ul>
      </section>

      <section className="education-section">
        <h2>Education</h2>
        <ul>
          <li>
            <h3>Higher National Diploma, Marketing</h3>
            <span>Yaba College Of Technology</span>
            <span>2017</span>
          </li>
        </ul>
      </section>
    </div>
    </div>
  );
}

export default AboutMe;
