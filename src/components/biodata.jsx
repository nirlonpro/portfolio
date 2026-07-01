import { useNavigate } from "react-router-dom";
import "../css/biodata.css";
import Nirlon from "../assets/image/ni.png";

function MarriageBio() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/#footer");
  };
  return (
    <section className="bioPage">
      <button
        className="bioBackBtn"
        onClick={handleBack}
      >
        ← Back to Footer
      </button>
      {/* ── LEFT SIDEBAR — full-bleed portrait panel ── */}

      <aside className="bioSidebar">

        {/* contact card floats at the top */}
        <div className="bioContact">
          <h4>Contact</h4>
          <p>📞 +91 96870 07744</p>
          <p>✉️ nirlonmacwan27@gmail.com</p>
          <p>📍 Anand, Gujarat</p>
        </div>

        {/* hero fills the rest */}
        <div className="bioHero">
          <img
            src={Nirlon}
            alt="Nirlon Macwan"
            className="bioHeroImage"
          />

          {/* name overlaid on the gradient */}
          <div className="bioHeroContent">
            <h1 className="bioName">
              Nirlon<br />Macwan
            </h1>
            <p className="bioProfession">Software Developer</p>
          </div>
        </div>

      </aside>

      {/* ── RIGHT MAIN CONTENT ── */}

      <main className="bioContent">

        {/* INTRODUCTION */}
        <section className="bioStorySection">
          <span className="bioSectionTag">Introduction</span>
          <h2>My Story</h2>
          <p>
            Born and raised in Anand, Gujarat, I have always believed in
            balancing professional aspirations with strong family values.
            Currently pursuing my Master of Computer Applications while
            building my career in software development, I enjoy learning,
            creating and continuously growing as a person.
          </p>
          <p style={{ marginTop: '18px' }}>
            I believe that life is a journey best shared with someone who
            values trust, understanding and mutual respect.
          </p>
        </section>

        {/* PERSONAL DETAILS */}
        <section className="bioStorySection">
          <span className="bioSectionTag">Personal</span>
          <h2>A Glimpse About Me</h2>

          <div className="bioElegantInfo">
            <div className="bioInfoRow">
              <span>Date of Birth</span>
              <p>27<sup>th</sup> October, 2005</p>
            </div>
            <div className="bioInfoRow">
              <span>Age</span>
              <p>21 Years</p>
            </div>
            <div className="bioInfoRow">
              <span>Height</span>
              <p>5′ 8″</p>
            </div>
            <div className="bioInfoRow">
              <span>Weight</span>
              <p>53 kg</p>
            </div>
            <div className="bioInfoRow">
              <span>Location</span>
              <p>Anand, Gujarat</p>
            </div>
            <div className="bioInfoRow">
              <span>Languages</span>
              <p>Gujarati · Hindi · English</p>
            </div>
            <div className="bioInfoRow">
              <span>Nationality</span>
              <p>Indian</p>
            </div>
          </div>
        </section>

        {/* EDUCATION & CAREER */}
        <section className="bioStorySection">
          <span className="bioSectionTag">Journey</span>
          <h2>Education &amp; Career</h2>

          <div className="bioJourney">
            <div className="bioJourneyItem">
              <span>2023</span>
              <div>
                <h4>Higher Secondary Education</h4>
                <p>Completed Higher Secondary School.</p>
              </div>
            </div>
            <div className="bioJourneyItem">
              <span>2026</span>
              <div>
                <h4>Bachelor of Computer Applications</h4>
                <p>CVM University</p>
              </div>
            </div>
            <div className="bioJourneyItem">
              <span>2028</span>
              <div>
                <h4>Master of Computer Applications</h4>
                <p>GTU — Pursuing</p>
              </div>
            </div>
          </div>

          <div className="bioCareerBox">
            <h4>Professional Interests</h4>
            <p>
              Passionate about Full Stack Web Development and modern
              technologies. I enjoy building digital products, learning new
              skills and solving real-world problems through technology.
            </p>
          </div>
        </section>

        {/* FAMILY */}
        <section className="bioStorySection">
          <span className="bioSectionTag">Family</span>
          <h2>Family Background</h2>
          <p>
            Family is the foundation of my life. I have been raised in a
            loving and supportive environment where values such as honesty,
            respect and togetherness are deeply cherished.
          </p>

          <div className="bioFamilyGrid">
            <div className="bioFamilyCard">
              <span>Father</span>
              <h4>Macwan Nileshbhai</h4>
              <h4>Service at Clintha Research Centre</h4>
              <h4>+91 99259 99264</h4>
            </div>
            <div className="bioFamilyCard">
              <span>Mother</span>
              <h4>Macwan Nilaben</h4>
              <h4>Retired Government Teacher</h4>
              <h4>+91 99795 34959</h4>
            </div>
            <div className="bioFamilyCard">
              <span>Siblings</span>
              <h4>Only Child</h4>
            </div>
          </div>
        </section>

        {/* PERSONALITY */}
        <section className="bioStorySection">
          <span className="bioSectionTag">Personality</span>
          <h2>Who I Am</h2>

          <div className="bioTraits">
            <div>Tech Enthusiast</div>
            <div>Responsible</div>
            <div>Honest</div>
            <div>Respectful</div>
            <div>Ambitious</div>
          </div>
        </section>

        {/* LIFESTYLE */}
        <section className="bioStorySection">
          <span className="bioSectionTag">Lifestyle</span>
          <h2>Interests &amp; Lifestyle</h2>
          <p>
            I enjoy exploring technology, learning new skills, spending
            quality time with family, travelling, personal development and
            maintaining a balanced lifestyle.
          </p>
        </section>

        {/* LOOKING FORWARD */}
        <section className="bioStorySection">
          <span className="bioSectionTag">Future</span>
          <h2>Looking Forward To</h2>
          <p>
            I look forward to finding a kind-hearted, understanding and
            family-oriented life partner with whom I can build a happy,
            respectful and meaningful future together.
          </p>
        </section>

        {/* APPEARANCE / PHOTO */}
        <section className="bioStorySection">
          <span className="bioSectionTag">Appearance</span>
          <h2>Photograph</h2>

          <div className="ProfileImageFrame">
            <img
              src={Nirlon}
              alt="Nirlon Macwan"
              className="ProfileImage"
            />
          </div>
        </section>

        {/* CLOSING QUOTE */}
        <div className="bioClosingQuote">
          <p>
            "The best relationships are built on trust, friendship, respect
            and growing together through every stage of life."
          </p>
        </div>

      </main>

    </section>
  );
}

export default MarriageBio;
