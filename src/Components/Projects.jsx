import { useState } from "react";
import "./Project.css";
import { useNavigate } from "react-router-dom";

import exp1 from "../assets/images/exp1.png";
import exp2 from "../assets/images/exp2.png";
import exp3 from "../assets/images/exp3.png";
import cm1 from "../assets/images/cm1.png";
import cm2 from "../assets/images/cm2.png";
import cm3 from "../assets/images/cm3.png";
import tht1 from "../assets/images/tht1.png";
import tht2 from "../assets/images/tht2.png";
import tht3 from "../assets/images/tht3.png";
import img1 from "../assets/images/img1.webp";
import img2 from "../assets/images/img2.webp";
import img3 from "../assets/images/img3.webp";

const projects = [
  {
    number: "01",
    name: "Chennai Maratha",
    tech: ["Wordpress", "Html", "Css"],
    img1: cm1,
    img2: cm2,
    img3: cm3,
    live: "https://www.chennaimaratha.com/",
  },
  {
    number: "02",
    name: "79 Degree Experiences",
    tech: ["Wordpress", "Html", "Css"],
    img1: exp1,
    img2: exp2,
    img3: exp3,
    live: "https://www.79exp.com/",
  },
  {
    number: "03",
    name: "THT Global Consultancy",
    tech: ["Wordpress", "Html", "Css"],
    img1: tht1,
    img2: tht2,
    img3: tht3,
    live: "https://www.thtglobalconsulting.com/",
  },
  {
    number: "04",
    name: "World Facts",
    tech: ["React.js", "Html", "Css", "Bootstrap", "API"],
    img1: img1,
    img2: img2,
    img3: img3,
    live: "https://worldsfact.netlify.app/",
  },
];

export const Projects = () => {
  const navigate = useNavigate();

  return (
    <div id="projects" className="projects-section">

      {/* Heading */}
      <h2 className="projects-heading">PROJECTS</h2>
      <p className="projects-sub">Some of my recent work</p>

      <button className="back-btn" onClick={() => navigate("/")}>
        Go back to Home
      </button>

      {/* Grid */}
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

/* 🔥 Separate Card Component (Performance Boost) */
const ProjectCard = ({ project }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="project-card">

      {/* Main Image */}
      <img
        src={project.img1}
        alt={project.name}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`main-img ${loaded ? "loaded" : ""}`}
      />

      {/* Small Images */}
      <div className="small-imgs">
        <img src={project.img2} loading="lazy" alt="" />
        <img src={project.img3} loading="lazy" alt="" />
      </div>

      {/* Content */}
      <div className="card-content">
        <div className="title-row">
          <span className="card-number">{project.number}</span>
          <span className="card-title">{project.name}</span>
        </div>

        <div className="tech-list">
          {project.tech.map((t, i) => (
            <span key={i} className="tech-badge">{t}</span>
          ))}
        </div>

        <a href={project.live} target="_blank" rel="noreferrer" className="live-btn">
          Live ↗
        </a>
      </div>
    </div>
  );
};