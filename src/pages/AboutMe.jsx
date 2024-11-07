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
    <div id="about" className="about-meContainer"  >
    <div  className="about-me" ref={aboutMeRef} > {/* this line of code aboume ref help when the a tag of about is clicked it scroll to my about section*/}
      <section className="about-section">
        <h1>About Me</h1>
        <p>
        Hi, I'm Inyang Valentine, a dedicated and versatile full-stack developer with a passion for building 
        dynamic web applications. My expertise spans both front-end and back-end technologies, enabling me 
        to create seamless, scalable solutions that solve real-world problems.On the front-end, I specialize 
        in frameworks like React, Vue.js, and Angular, using HTML5, CSS3, and JavaScript to craft responsive, 
        interactive user interfaces.
        On the back-end, I have extensive experience with Node.js, Express, and MongoDB, building RESTful APIs 
        and server-side logic that powers modern web applications.
        I believe in clean, maintainable code and am always seeking new challenges to improve my skills. 
        Whether it's collaborating with teams, designing robust databases, or integrating third-party services, 
        I approach every project with a focus on performance, security, and user experience.
        </p>
        <p>
        As technology evolves, I’m committed to staying at the forefront of the industry through 
        continuous learning and hands-on development.
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
            <h3>Full-Stack Developer Trainee</h3>
            <span>Self Trained</span>
            <span>2023 - 2024</span>
          </li>
          
        </ul>
      </section>

      <section className="education-section">
        <h2>Education</h2>
        <ul>
          <li>
            <h3>Bachelor Degree Business Education</h3>
            <span>National Open University</span>
            <span>2020</span>
          </li>
        </ul>
      </section>
    </div>
    </div>
  );
}

export default AboutMe;
