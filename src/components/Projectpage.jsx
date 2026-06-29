import { useEffect } from "react";
import "../css/abc.css";

import project1 from "../assets/image/php.png";
import project2 from "../assets/image/portfolio.png";
import project3 from "../assets/image/mern.png";

function PortfolioPage() {
  useEffect(() => {

    const cards = document.querySelectorAll(".portfolio-project");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }else{

                entry.target.classList.remove("show");

            }

        });

    },{

        threshold:0.5

    });

    cards.forEach(card=>observer.observe(card));

    return ()=>observer.disconnect();

},[]);
  useEffect(() => {
    const projects = document.querySelectorAll(".portfolio-project");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("show");
            }, index * 150);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    projects.forEach((project) => observer.observe(project));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: "01",
      title: "Frozen Dessert Selling System",
      category: "Full Stack E-Commerce Platform",
      image: project1,
      tech: ["PHP", "MySQL", "Bootstrap"],
      description:
        "A complete e-commerce solution allowing customers to browse products, place orders, manage accounts, and track purchases efficiently.",
      link: "#",
    },
    {
      id: "02",
      title: "Developer Portfolio",
      category: "Personal Branding Website",
      image: project2,
      tech: ["React", "CSS", "GSAP"],
      description:
        "A premium portfolio website showcasing projects, skills, and experience through modern design and interactive user experiences.",
      link: "https://portfolio-blond-phi-j3o1cev2lb.vercel.app/",
    },
    {
      id: "03",
      title: "MERN E-Commerce",
      category: "Full Stack Web Application",
      image: project3,
      tech: ["React", "Node.js", "MongoDB"],
      description:
        "A modern online shopping platform with authentication, cart management, order processing, and complete admin functionality.",
      link: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="portfolio-section"
    >
      <div className="portfolio-header">
        <span className="portfolio-subtitle">
          RECENT WORK
        </span>

        <h2 className="portfolio-title">
          Projects I've
          <br />
          Built Recently
        </h2>

        <p className="portfolio-description">
          A selection of projects that highlight my
          frontend development, backend architecture,
          responsive design, and problem-solving skills.
        </p>
      </div>

      <div className="portfolio-projects">
        {projects.map((project) => (
          <article
            key={project.id}
            className="portfolio-project"
          >
            <div className="portfolio-image">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
              />
            </div>

            <div className="portfolio-content">
              <span className="portfolio-number">
                {project.id}
              </span>

              <h3>{project.title}</h3>

              <h4>{project.category}</h4>

              <div className="portfolio-tags">
                {project.tech.map((tech) => (
                  <span key={tech}>
                    {tech}
                  </span>
                ))}
              </div>

              <p>{project.description}</p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="project-btn">
                  View Project
                </button>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default PortfolioPage;