import React, { useEffect, useRef } from 'react';
import './HeroProject.css';

const projects = [
  {
    title: 'Countries Fetch Using API',
    image: 'image/c.jpg',
    description: 'This project demonstrates how to fetch data from an API and convert it into JSON format to display a list of countries. The list can be filtered by various criteria such as continent, population, and more. Explore the functionality by checking out the project using the link below.',
    link: 'https://investor-wallflex.github.io/country-api-fetch/'
  },
  {
    title: 'Virtual Match Predictor',
    image: 'image/b.jpg',
    description: 'This platform predicts virtual match outcomes and offers premium users access to real live match predictions. Additionally, it features a forum for discussions and an e-commerce site for related products and non-related products.',
    link: 'https://investor-wallflex.github.io/Virtual/'
  },
  {
    title: 'Binance Clone',
    image: 'image/a.jpg',
    description: 'This project is a clone of the Binance page, featuring simple styling for an enhanced user interface.',
    link: 'https://investor-wallflex.github.io/binance/'
  },
];

const HeroProject = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Stop observing once animated
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="projects-section" ref={sectionRef}>
      <h1>My Portfolio</h1>
      <p>Some of my recent projects</p>
      <section className="projects-list" id="projects">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h4>{project.title}</h4>
            <img src={project.image} alt={project.title} />
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </section>
    </div>
  );
};

export default HeroProject;
