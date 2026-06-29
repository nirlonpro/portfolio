import { useEffect, useState } from "react";
import "../css/about.css";

import nirlon from "../assets/image/nirlon.jpg";
import resume from "../assets/resume - Copy.pdf";

function About() {
  const typingText =
    "I'm a BCA Graduate and aspiring Full Stack Developer specializing in React.js, Node.js, Express.js, MongoDB, PHP and MySQL.I enjoy transforming ideas into modern digital products that are fast, scalable and visually engaging. My goal is to create impactful applications that combine performance, clean code, and exceptional user experiences.";
  const [displayText, setDisplayText] = useState("");

  /* =========================
     Typing Animation
  ========================= */
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
    let index = 0;
    let timeout;

    const type = () => {
      if (index <= typingText.length) {
        setDisplayText(
          typingText.slice(0, index)
        );

        index++;

        timeout = setTimeout(type, 50);
      } else {
        timeout = setTimeout(() => {
          setDisplayText("");
          index = 0;
          type();
        }, 3000);
      }
    };

    type();

    return () => clearTimeout(timeout);
  }, []);

  /* =========================
     Scroll Reveal Animation
  ========================= */

  useEffect(() => {
    const elements =
      document.querySelectorAll(".reveal-left");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    elements.forEach((element) =>
      observer.observe(element)
    );

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about_me"
      className="about"
    >
      {/* =========================
          HERO
      ========================= */}

      <div className="hero-about reveal-left">
        <div className="hero-left">
          <span className="section-label">
            ABOUT ME
          </span>

          <h1>
            Creating Modern
            <br />
            Digital Experiences
            <br />
            Through Code,
            <br />
            Design & Logic.
          </h1>

          <p>
            Full Stack Developer passionate
            about building scalable web
            applications, premium interfaces
            and meaningful user experiences.
          </p>
        </div>
      </div>

      {/* =========================
          PROFILE
      ========================= */}

      <div className="profile-section">
        <div className="profile-image reveal-left">
          <img
            src={nirlon}
            alt="Nirlon Macwan"
            loading="lazy"
          />
        </div>

        <div className="profile-content">
          {/* Name stays static */}
          <h2>Nirlon Macwan</h2>

          {/* Everything below animates */}
          <div className="profile-details reveal-left">
            <h3 className="abc">
              Full Stack Developer
            </h3>

            <p>
              
            </p>

            <div className="typing-container">
              <span className="typing-text">
                {displayText}
              </span>
            </div>

            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn"
            >
              View Resume ↗
            </a>
          </div>
        </div>
      </div>

      {/* =========================
          PHILOSOPHY
      ========================= */}

      <div className="philosophy reveal-left">
        <h2>What I Believe</h2>

        <div className="belief-grid">
          <div className="belief-card">
            <h3>Design First</h3>

            <p>
              Great products begin with
              intuitive and engaging
              user experiences.
            </p>
          </div>

          <div className="belief-card">
            <h3>Performance Always</h3>

            <p>
              Fast applications create
              better interactions and
              improve user satisfaction.
            </p>
          </div>

          <div className="belief-card">
            <h3>Never Stop Learning</h3>

            <p>
              Technology evolves every day
              and continuous learning helps
              me stay ahead.
            </p>
          </div>
        </div>
      </div>

      <div className="border"></div>

      {/* =========================
          STATS
      ========================= */}

      <div className="stats reveal-left">
        <div className="stat-card">
          <h2>02+</h2>
          <span>Projects</span>
        </div>

        <div className="stat-card">
          <h2>07+</h2>
          <span>Technologies</span>
        </div>

        <div className="stat-card">
          <h2>03+</h2>
          <span>Certificates</span>
        </div>
      </div>
    </section>
  );
}

export default About;