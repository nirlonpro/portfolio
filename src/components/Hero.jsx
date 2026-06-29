import { useEffect, useState } from "react";
import "../css/Hero.css";

function Hero() {
  const typingText =
    "";
  const [displayText, setDisplayText] = useState("");

  /* =========================
     Typing Animation
  ========================= */

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


  // another animation
  useEffect(() => {

    const hero = document.querySelector(".hero");
    const imageWrap = document.getElementById("imageWrap");
    const image = document.getElementById("heroImage");

    const leftSide = document.querySelector(".left-side");
    const rightSide = document.querySelector(".right-side");
    const bio = document.querySelector(".hero-bio");

    if (!hero || !imageWrap || !image) return;

    let current = 0;
    let target = 0;

    const handleScroll = () => {

      const rect = hero.getBoundingClientRect();

      const total =
        hero.offsetHeight -
        window.innerHeight;

      target = Math.min(
        Math.max(-rect.top / total, 0),
        1
      );
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    function animate() {

      current +=
        (target - current) * 0.08;

      const eased =
        1 - Math.pow(1 - current, 3);

      const moveY =
        350 - eased * 350;

      const scale =
        0.25 + eased * 1.15;

      const rotateZ =
        -12 + eased * 12;

      const flipStart = 0.55;
      const flipEnd = 0.8;

      let rotateY = 0;
      let flipProgress = 0;

      if (current > flipStart) {

        flipProgress = Math.min(
          (current - flipStart) /
          (flipEnd - flipStart),
          1
        );

        rotateY =
          flipProgress * 180;
      }

      imageWrap.style.transform = `
        translateY(${moveY}px)
        scale(${scale})
        rotateZ(${rotateZ}deg)
        rotateY(${rotateY}deg)
      `;

      const gray =
        100 - flipProgress * 100;

      image.style.filter = `
        grayscale(${gray}%)
        brightness(1)
      `;

      const mirror =
        Math.cos(
          flipProgress * Math.PI
        );

      image.style.transform = `
        scaleX(${mirror})
      `;

      if (leftSide) {

        leftSide.style.transform = `
    translateY(calc(-50% - ${eased * 100}px))
  `;

        leftSide.style.opacity = 1;
      }

      if (rightSide) {

        rightSide.style.transform = `
    translateY(calc(-50% + ${eased * 100}px))
  `;

        rightSide.style.opacity = 1;
      }

      if (bio) {

        bio.style.opacity =
          Math.max(
            1 - current * 1.3,
            0
          );

        bio.style.transform = `
          translateX(-50%)
          translateY(${current * 80}px)
        `;
      }

      requestAnimationFrame(
        animate
      );
    }

    image.style.transform =
      "scaleX(-1)";

    image.style.filter =
      "grayscale(100%)";

    animate();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };

  }, []);




  return (
    <>
      {/* <div className="nav">
        <h3>Nirlon</h3>
        <button>•••</button>
      </div> */}

      <section id="hero" className="hero">
        <div className="title">
          <span>SOFTWARE</span>
          <span>Developer</span>
        </div>

        <div id="self" className="side-content left-side">
          <h1>Hey!, I'm<br /> Nirlon</h1>

          <p>Full Stack Developer</p>

          <span className="typing-text">
            I transform ideas into fast, scalable, and user-friendly web applications. With expertise in PHP and the MERN Stack, I specialize in building modern digital experiences that combine performance, functionality, and clean design.
          </span>
        </div>

        <div className="image-holder">
          <div className="image-wrap" id="imageWrap">
            <div className="image-card">
              <img
                id="heroImage"
                src="/image/ni.png"
                alt="Profile"
              />
            </div>
          </div>
        </div>

        <div className="side-content right-side">
          <p>BCA Graduate • Full Stack Developer</p>

          <p>
            Seeking opportunities to contribute to innovative teams and
            impactful projects. Experienced in developing responsive frontends,
            robust backend systems, REST APIs, and e-commerce solutions.
          </p>
        </div>

        <div className="watermark">
          <span>DEVELOPER</span>
        </div>

        <div className="footer-center">
          <i className="devicon-react-original"></i>
          <i className="devicon-nodejs-plain"></i>
          <i className="devicon-mongodb-plain"></i>
          <i className="devicon-php-plain"></i>
          <i className="devicon-mysql-original"></i>
          <i className="devicon-javascript-plain"></i>
          <i className="devicon-git-plain"></i>
          <i className="devicon-github-original"></i>
        </div>
      </section>

      {/* <section className="next">
        <div className="next-content">
          <h2>Building Modern Experiences</h2>

          <p>
            Specializing in full-stack development,
            user interfaces and immersive web experiences.
          </p>
        </div>
      </section> */}
    </>
  );
}

export default Hero;