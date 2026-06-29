import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Lenis from "lenis";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StoryHighlight from "./components/StoryHighlight";
import Tech from "./components/Tech";
import Project from "./components/Projectpage";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import BioData from "./components/BioData";
import CertificatePage from "./components/CertificatePage";
import ChatBot from "./components/ChatBot";
import Loader from "./components/Loader";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <StoryHighlight />
      <Tech />
      <Project />
      <About />
      <Contact />
      <Footer />
      <ChatBot />
    </>
  );
}

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {

      setLoading(false);

    }, 2500); // 2.5 seconds

    return () => clearTimeout(timer);

  }, []);

  useEffect(() => {

    const lenis = new Lenis({

      duration:1.3,

      smoothWheel:true,

      wheelMultiplier:1,

      touchMultiplier:2,

      infinite:false,

      lerp:0.08,

    });

    function raf(time){

      lenis.raf(time);

      requestAnimationFrame(raf);

    }

    requestAnimationFrame(raf);

    return ()=>{

      lenis.destroy();

    };

  }, []);

  if (loading) {

    return <Loader />;

  }

  return (

    <Routes>

      <Route path="/" element={<Home />} />

      <Route
        path="/biodata"
        element={<BioData />}
      />

      <Route
        path="/CertificatePage"
        element={<CertificatePage />}
      />

    </Routes>

  );

}

export default App;