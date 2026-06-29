import { useEffect, useState } from "react";
import "../css/Tech.css";



function TechStack() {

    const [filter, setFilter] = useState("all");

    const technologies = [
       {
    title: "HTML5",
    desc: "Building semantic, accessible, and SEO-friendly structures that provide a strong foundation for modern, high-performance web applications.",
    className: "html-card",
    category: "frontend"
},
{
    title: "CSS3",
    desc: "Creating responsive layouts, modern animations, and visually engaging user interfaces with a focus on design consistency and usability.",
    className: "css-card",
    category: "frontend"
},
{
    title: "JavaScript",
    desc: "Developing interactive, dynamic, and feature-rich web experiences using modern ES6+ concepts, asynchronous programming, and DOM manipulation.",
    className: "js-card",
    category: "frontend"
},
{
    title: "React.js",
    desc: "Building scalable component-based applications with efficient state management, reusable architecture, and optimized performance.",
    className: "react-card",
    category: "frontend"
},
{
    title: "Node.js",
    desc: "Creating fast and efficient server-side applications, RESTful APIs, and real-time services capable of handling modern web workloads.",
    className: "node-card",
    category: "backend"
},
{
    title: "PHP",
    desc: "Developing secure backend systems, business logic, authentication modules, and dynamic web applications with maintainable code architecture.",
    className: "php-card",
    category: "backend"
},
{
    title: "MongoDB",
    desc: "Designing flexible NoSQL database solutions that support scalability, high performance, and efficient handling of large datasets.",
    className: "mongo-card",
    category: "database"
},
{
    title: "MySQL",
    desc: "Managing relational databases with a focus on data integrity, optimized queries, normalization, and long-term reliability.",
    className: "mysql-card",
    category: "database"
},
{
    title: "Git",
    desc: "Using version control to track changes, manage development workflows, collaborate effectively, and maintain project stability.",
    className: "git-card",
    category: "tools"
},
{
    title: "GitHub",
    desc: "Leveraging collaborative development practices, pull requests, code reviews, and repository management to streamline project delivery.",
    className: "github-card",
    category: "tools"
}];

    useEffect(() => {


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
                threshold: 0.2
            }
        );

        const cards =
            document.querySelectorAll(".card");

        cards.forEach((card) => {
            observer.observe(card);
        });

        return () => {
            observer.disconnect();
        };


    }, [filter]);




    return (
    
    <div id="skills" className="wrapper">
        <aside className="sidebar">

            <div className="sidebar-content">



                {/* <h1>Tech i know</h1> */}

                <div className="carousel-container">

                    <div className="banner">

                        <div className="slider">

                            <div className="item" style={{ "--position": 1 }}>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" />
                            </div>

                            <div className="item" style={{ "--position": 2 }}>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" />
                            </div>

                            <div className="item" style={{ "--position": 3 }}>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
                            </div>

                            <div className="item" style={{ "--position": 4 }}>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                            </div>

                            <div className="item" style={{ "--position": 5 }}>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node" />
                            </div>

                            <div className="item" style={{ "--position": 6 }}>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
                            </div>

                            <div className="item" style={{ "--position": 7 }}>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" />
                            </div>

                            <div className="item" style={{ "--position": 8 }}>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" />
                            </div>

                            <div className="item" style={{ "--position": 9 }}>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
                            </div>

                            <div className="item" style={{ "--position": 10 }}>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
                            </div>

                        </div>

                    </div>

                </div>


                <h1>My Skills</h1>


                {/* <p>
                    A collection of technologies I use to design, develop, and deliver modern web applications with performance, scalability, and user experience in mind.
                </p> */}

            </div>

        </aside>

        <section className="section">

            <h2>Tech Stack</h2>
            <div className="filter-buttons">

                <button
                    className={filter === "all" ? "active" : ""}
                    onClick={() => setFilter("all")}
                >
                    All
                </button>

                <button
                    className={filter === "frontend" ? "active" : ""}
                    onClick={() => setFilter("frontend")}
                >
                    Frontend
                </button>

                <button
                    className={filter === "backend" ? "active" : ""}
                    onClick={() => setFilter("backend")}
                >
                    Backend
                </button>

                <button
                    className={filter === "database" ? "active" : ""}
                    onClick={() => setFilter("database")}
                >
                    Database
                </button>

                <button
                    className={filter === "tools" ? "active" : ""}
                    onClick={() => setFilter("tools")}
                >
                    Tools
                </button>

            </div>
            <div className="grid">

                {technologies
                    .filter(
                        tech =>
                            filter === "all" ||
                            tech.category === filter
                    )
                    .map((tech) => (

                        <div
                            key={tech.title}
                            className={`card ${tech.className}`}
                        >
                            <h3>{tech.title}</h3>
                            <p>{tech.desc}</p>
                        </div>

                    ))}

            </div>

        </section>

    </div>


    );
}

export default TechStack;
