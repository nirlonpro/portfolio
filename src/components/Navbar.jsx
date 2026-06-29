import { useState } from "react";
import "../css/Navbar.css";
import resume from "../assets/resume - Copy.pdf";

function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setOpen(false);
  };

  return (
    <div className={`nav-card ${open ? "open" : ""}`}>

      <div className="nav-header">

        <h2>Nirlon</h2>

        <button
          className="toggle-btn"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "•••"}
        </button>

      </div>

      <div className={`dropdown-wrapper ${open ? "show" : ""}`}>

        <div className="nav-links">

          <button onClick={() => scrollTo("hero")}>
            Home
          </button>

          <button onClick={() => scrollTo("self")}>
            Developer
          </button>

          <button onClick={() => scrollTo("skills")}>
            Skills
          </button>

          <button onClick={() => scrollTo("projects")}>
            Projects
          </button>

          <button onClick={() => scrollTo("about_me")}>
            About Me
          </button>

          <button onClick={() => scrollTo("contact")}>
            Contact
          </button>

        </div>

        <div className="dropdown-intro">

          <span className="dropdown-tag">
            WELCOME TO MY PORTFOLIO
          </span>

          <h3>
            Crafting Modern
            Digital Experiences
          </h3>

          <p>
            Full Stack Developer focused on
            scalable applications, premium
            interfaces, and immersive web
            experiences.
          </p>
          <a
            href={ resume }
            target="_blank"
            rel="noopener noreferrer"
            className="resume-bt"
          >
            View Resume ↗
          </a>
        </div>

      </div>

    </div>
  );
}

export default Navbar;