import { useEffect, useState } from "react";
import "../css/Loader.css";

function Loader() {

  const [progress, setProgress] = useState(0);

  useEffect(() => {

    let value = 0;

    const interval = setInterval(() => {

      value += Math.floor(Math.random() * 2) + 1;

      if (value >= 100) {

        value = 100;

        clearInterval(interval);

      }

      setProgress(value);

    }, 35);

    return () => clearInterval(interval);

  }, []);

  return (

    <div className="loader-page">

      <div className="loader-glow glow-1"></div>

      <div className="loader-glow glow-2"></div>

      <div className="loader-grid"></div>

      <div className="loader-content">

        <div className="loader-circle">

          <span>N</span>

        </div>

        <h1 className="loader-name">

          NIRLON

        </h1>

        <p className="loader-subtitle">

          Full Stack Developer

        </p>

        <div className="loader-line">

          <div
            className="loader-progress"
            style={{ width: `${progress}%` }}
          ></div>

        </div>

        <div className="loader-percent">

          {progress}%

        </div>

        <div className="loader-text">

          {progress === 100
            ? "Welcome"
            : "Loading Portfolio"}

        </div>

      </div>

      <div className="loader-footer">

        Crafting Premium Digital Experiences

      </div>

    </div>

  );

}

export default Loader;