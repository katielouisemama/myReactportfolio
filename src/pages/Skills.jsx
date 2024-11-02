import './Skills.css';
import React, { useEffect, useRef } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaGitAlt, FaSass, FaGithub } from 'react-icons/fa';
import { SiRedux, SiTailwindcss, SiVisualstudiocode } from 'react-icons/si';

const Skills = () => {
  const skillRef = useRef([]);
  const containerRef = useRef(null);

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
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    skillRef.current.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="skills-container" ref={containerRef}>
      <h3>My Tech Skills</h3>
      <p>Recent tools and technologies I’ve adopted</p>

      <div className="skills-grid">
        {[
          { Icon: FaHtml5, title: "HTML5", color: "#e34f26", className: "html" },
          { Icon: FaCss3Alt, title: "CSS3", color: "#1572b6", className: "css" },
          { Icon: FaJs, title: "JavaScript", color: "#f7df1e", className: "java" },
          { Icon: FaReact, title: "React", color: "#61dafb", className: "react" },
          { Icon: SiRedux, title: "Redux", color: "#764abc", className: "redux" },
          { Icon: FaBootstrap, title: "Bootstrap", color: "#7952b3", className: "bootstrap" },
          { Icon: SiTailwindcss, title: "Tailwind CSS", color: "#06b6d4", className: "Tailwind" },
          { Icon: FaSass, title: "Sass", color: "#cc6699", className: "Sass" },
          { Icon: FaGitAlt, title: "Git", color: "#f34f29", className: "Git" },
          { Icon: SiVisualstudiocode, title: "VS Code", color: "#007acc", className: "vscode" },
          { Icon: FaGithub, title: "GitHub", color: "#181717", className: "GitHub" }
        ].map((skill, index) => (
          <div
            key={index}
            className="skill-card"
            ref={(el) => (skillRef.current[index] = el)}
          >
            <skill.Icon title={skill.title} color={skill.color} />
            <p className={skill.className}>{skill.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
