import React, { useEffect, useRef } from 'react';
import './HeroProject.css';
import virtualpicture from "../assets/virtual.png"
import earthpicture from "../assets/earth.png"
import binancepicture from "../assets/binance.png"
import kudapicture from "../assets/kuda.png"
import addcartpicture from "../assets/cart.png"
import calculatorpicture from "../assets/calculator.png"
import furinopicture from "../assets/furino.png"

const projects = [
  {
    title: 'Countries Fetch Using API',
    image: earthpicture,
    description: 'This project demonstrates how to fetch data from an API and convert it into JSON format to display a list of countries. The list can be filtered by various criteria such as continent, population, and more. Explore the functionality by checking out the project using the link below.',
    link: 'https://investor-wallflex.github.io/country-api-fetch/'
  },
  {
    title: 'Virtual Match Predictor',
    image: virtualpicture,
    description: 'This platform predicts virtual match outcomes and offers premium users access to real live match predictions. Additionally, it features a forum for discussions and an e-commerce site for related products and non-related products.',
    link: 'https://investor-wallflex.github.io/Virtual/'
  },
  {
    title: 'Binance Clone',
    image: binancepicture,
    description: 'This project is a clone of the Binance page, featuring simple styling for an enhanced user interface.',
    link: 'https://investor-wallflex.github.io/binance/'
  },

  {
    title: 'Kuda Clone',
    image: kudapicture,
    description: 'This project is a responsive clone of the Kuda Bank website, built to enhance my front-end development skills. By recreating the design and ensuring adaptability across different screen sizes, I aimed to improve my understanding of responsive layouts and modern CSS techniques. This project allowed me to refine my skills in structuring and styling complex user interfaces, focusing on creating a seamless experience across devices.',
    link: 'https://kuda-clone-ruby.vercel.app/'
  },
  
  {
    title: 'Add-to-Cart',
    image: addcartpicture,
    description: 'In this project, I developed an Add to Cart feature that tracks the number of items added, updates the button to display the total item count, and calculates the cumulative price based on quantity. This functionality is designed to enhance the user experience by providing real-time updates on the carts contents and total cost. Building this feature allowed me to improve my skills in state management and dynamic UI updates, focusing on creating a responsive and interactive shopping experience.',
    link: 'https://investor-wallflex.github.io/dersert/'
  },

  {
    title: 'Calculator',
    image: calculatorpicture,
    description: 'This project involved building a digital calculator that performs basic mathematical operations, including addition, subtraction, multiplication, and division. The calculator is designed to handle user input seamlessly and display real-time results, creating a smooth and responsive user experience. Developing this calculator helped me strengthen my understanding of JavaScript logic and UI design, focusing on functionality, accuracy, and ease of use.',
    link: ''
  },

  {
    title: 'Furino',
    image: furinopicture,
    description: 'This project showcases a product listing page for displaying all available couches for sale. The page is designed to present each couch with high-quality images, detailed descriptions, and pricing information, making it easy for users to browse and find their ideal furniture. This project allowed me to focus on creating a visually appealing and user-friendly layout, optimized for an engaging shopping experience.',
    link: 'https://investor-wallflex.github.io/scr/'
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
