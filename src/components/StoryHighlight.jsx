import { useEffect } from "react";
import "../css/StoryHighlight.css";

function StoryHighlight() {

  useEffect(() => {

    const text =
      document.querySelector(".story-text");

    const words =
      text.textContent.trim().split(" ");

    text.innerHTML = words
      .map(
        word =>
          `<span class="word">${word}</span>`
      )
      .join(" ");

    const wordElements =
      document.querySelectorAll(".word");

    const handleScroll = () => {

      const section =
        document.querySelector(
          ".story-wrapper"
        );

      const rect =
        section.getBoundingClientRect();

      const total =
        section.offsetHeight -
        window.innerHeight;
      const isMobile = window.innerWidth <= 767;
      const progress = Math.min(
        Math.max(-rect.top / total, 0),
        1
      );

      const activeWords =
        Math.floor(
          progress *
          wordElements.length
        );

      wordElements.forEach(
        (word, index) => {

          if (
            index <= activeWords
          ) {
            word.classList.add(
              "active"
            );
          } else {
            word.classList.remove(
              "active"
            );
          }
        }
      );
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };

  }, []);

  return (
    <>
      <section id="story" className="story-wrapper">

        <div className="story-sticky">

          <h2 className="story-text">
            I create exceptional digital experiences through modern
            web development, combining elegant design, optimized
            performance, and scalable architecture. From interactive
            frontends to powerful backend systems, I build solutions
            that are fast, scalable, and built for real-world impact.
          </h2>

        </div>

      </section>


    </>
  );
}

export default StoryHighlight;