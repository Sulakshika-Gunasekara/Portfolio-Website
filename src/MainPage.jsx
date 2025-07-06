import { FaLinkedin, FaPhoneAlt, FaGithub, FaEnvelope } from "react-icons/fa";
import ProjectCard from "./ProjectCards";
import projectsData from "./ProjectData";

const skills = {
  Frontend: ["HTML", "JavaScript", "CSS", "PHP", "React", "C#"],
  Frameworks: [
    "Spring Boot",
    "Java",
    "NodeJS",
    "PHP",
    "MySQL",
    "MongoDB",
    "Firebase",
  ],
  Others: ["Git & GitHub", "Figma", "Blender", "AWS", "Postman"],
};

function MainPage() {
  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #1e3c72,rgb(31, 82, 172))",
        minHeight: "100vh",

        width: "100vw",
        display: "flex",
        overflow: "hidden",
        boxSizing: "border-box",
        fontFamily: "monospace, sans-serif",
      }}>
      {/* Navigation Bar */}
      <div
        className=" - mt-5  py-3  d-none d-lg-flex"
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          height: "100vh",
          width: "40%",

          overflowY: "hidden",
          zIndex: 1000,

          flex: "0 0 auto",
          textAlign: "center",
          fontFamily: "monospace, sans-serif",
        }}>
        <div className="container mt-1 flex justify-between items-center">
          <ul className="flex gap-6  items-center flex-wrap  " type="none">
            <li type="none">
              <div className="flex flex-col items-center">
                <h1
                  id="name"
                  className="text-white text-4xl font-bold mb-2 pb-2 ">
                  Sulakshika Gunasekara
                </h1>
                <h3
                  className="text-white text-xl font-semibold  mb-2"
                  style={{
                    fontSize: "1.5rem",
                    lineHeight: "1.5",
                    color: "#3C4457",
                  }}>
                  Full Stack Developer
                </h3>
                <img
                  src="src/assets/me.jpg"
                  alt="Profile"
                  className="w-20 h-20 rounded-full object-cover border-4 shadow-lg m-5 p-2"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%",
                  }}
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/80x80/4A90E2/FFFFFF?text=SG";
                  }}
                />
              </div>
            </li>
            <li>
              <a href="#about" className="nav-link fs-4 text-white mb-3">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="nav-link fs-4 text-white mb-3">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="nav-link fs-4 text-white mb-3">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link fs-4 text-white mb-3">
                Contact
              </a>{" "}
            </li>
            <li>
              <a
                href="assets/Resume_c (10).pdf"
                class="btn  btn-sm mt-3 font-bold p-3 "
                style={{
                  border: "2px solid #2a5298",
                  color: "#dbdee4",
                  hover: {
                    background: "#fffff",
                  },
                  transition: "background 0.5s ease",
                }}
                role="button"
                download>
                Download CV
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content Area */}
      <main
        className="flex-1 flex items-center justify-center"
        style={{
          padding: "20px",
          marginTop: "200px",
          marginLeft: "40%",
          minHeight: "100vh",
          zIndex: 1,
          position: "relative",
        }}>
        {/* About Section */}
        <section
          id="about"
          className="text-white   p-5"
          style={{
            maxWidth: "800px",
            fontFamily: "Lucida Console",
            monospace: "monospace",
            fontSize: "1.2rem",
            textAlign: "justify",
            lineHeight: "1.6",
          }}>
          <p>
            I am a passionate and results-driven software engineer with strong
            skills in full-stack development, including technologies like React,
            Node.js, Spring Boot, MongoDB, and MySQL. I have hands-on experience
            in building scalable web and mobile applications, from e-commerce
            platforms to smart parking systems. I thrive in collaborative
            environments and enjoy tackling real-world challenges with
            innovative tech solutions. I am always eager to learn, contribute to
            dynamic teams, and turn ideas into impactful digital products.
          </p>
        </section>
        {/* Skills Section */}

        <section id="skills" className="p-4">
          <div className="container text-white text-center">
            <h2
              className="mb-5"
              style={{
                background:
                  "linear-gradient(to right,rgb(64, 83, 102),rgb(202, 222, 226))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: "2.5rem",
                fontFamily: "monospace",
                fontWeight: "bold",
              }}>
              Skills
            </h2>

            {Object.entries(skills).map(([category, items]) => (
              <div className="mb-4" key={category}>
                <h4
                  className="mb-3"
                  style={{
                    fontSize: "1.5rem",
                    fontFamily: "monospace",
                    fontWeight: "semibold",
                    color: "#dcdcdc",
                  }}>
                  {category}
                </h4>
                <div
                  className="d-flex flex-wrap justify-content-center gap-3"
                  style={{
                    fontSize: "1.2rem",
                    fontFamily: "monospace",
                    color: "#dcdcdc",
                  }}>
                  {items.map((skill) => (
                    <span
                      className="badge   px-3 py-2 rounded-pill"
                      style={{
                        border: "2px solid #2a5298",
                        color: "#dcdcdc",
                        fontSize: "1rem",
                      }}
                      key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        {/* <section id="projects" className="p-3 m-3">
          <div className="container">
            <h2
              class="mb-4 text-center"
              style={{
                background:
                  "linear-gradient(to right,rgb(64, 83, 102),rgb(202, 222, 226))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: "2.5rem",
                fontFamily: "monospace",
                fontWeight: "bold",
              }}>
              Projects
            </h2>

            {/* Project 1  */}

        {/* <div
              className="d-flex justify-content-center align-items-center gap-4 flex-wrap  mb-5"
              style={{ fontFamily: "Lucida Console" }}>
              <div
                className="card shadow-lg border-0"
                style={{
                  background:
                    "linear-gradient(145deg,rgb(102, 122, 163),rgb(40, 67, 113))",
                  color: "white",
                  borderRadius: "1rem",
                  overflow: "hidden",
                }}>
                <div className="card-body">
                  <h5
                    className="card-title text-center"
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                      borderBottom: "1px solid white",
                      paddingBottom: "10px",
                    }}>
                    Bicycle Sharing System
                  </h5>

                  <p
                    className="card-text text-center"
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: "bold",
                      color: "#dcdcdc",
                    }}>
                    HTML, CSS, JavaScript, Bootstrap, PHP, MySQL
                  </p>

                  <p
                    className="card-text text-justify"
                    style={{ fontSize: "0.85rem", lineHeight: "1.5" }}>
                    The Bicycle Sharing System allows users to register, log in,
                    and rent bikes at multiple docking stations with real-time
                    availability tracking. It supports seamless rentals and
                    returns, integrated payment processing, and subscription
                    plans. An admin panel manages bike inventory, monitors
                    usage, and oversees station maintenance—promoting
                    eco-friendly urban mobility.
                  </p>
                </div>
              </div>
            </div> */}

        {/* </div>
        </section>  */}

        <section id="projects" className="p-3 m-3">
          <div className="container">
            <h2
              className="mb-4 text-center"
              style={{
                background:
                  "linear-gradient(to right,rgb(64, 83, 102),rgb(202, 222, 226))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: "2.5rem",
                fontFamily: "monospace",
                fontWeight: "bold",
              }}>
              Projects
            </h2>

            {projectsData.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                technologies={project.technologies}
                description={project.description}
              />
            ))}
          </div>
        </section>
        {/* Contact Section */}

        <section
          id="contact"
          className="m-2 p-3 d-flex flex-column align-items-center justify-content-center">
          <div className="container text-center">
            {/* <h3
              className="mb-4"
              style={{
                color: "linear-gradient(to right, #ff7e5f, #feb47b)",
                fontSize: "2.5rem",
                fontFamily: "monospace",
                fontWeight: "bold",
              }}>
              Contact Me
            </h3> */}
            <h3
              className="mb-4"
              style={{
                background:
                  "linear-gradient(to right,rgb(64, 83, 102),rgb(202, 222, 226))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: "2.5rem",
                fontFamily: "monospace",
                fontWeight: "bold",
              }}>
              Contact Me
            </h3>

            <div className="d-flex justify-content-center align-items-center gap-4 flex-wrap">
              <a href="tel:+94703508617" aria-label="Phone">
                <FaPhoneAlt
                  style={{
                    color: "black",
                    width: "60px",
                    height: "60px",
                    padding: "10px",
                  }}
                />
              </a>

              <a
                href="mailto:sulakshikagunasekara2001@gmail.com"
                aria-label="Email">
                <FaEnvelope
                  style={{
                    color: "black",
                    width: "60px",
                    height: "60px",
                    padding: "10px",
                  }}
                />
              </a>

              <a
                href="https://www.linkedin.com/in/sulakshika-gunasekara-2a0454283/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn">
                <FaLinkedin
                  style={{
                    color: "black",
                    width: "60px",
                    height: "60px",
                    padding: "10px",
                  }}
                />
              </a>

              <a
                href="https://github.com/Sulakshika-Gunasekara"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub">
                <FaGithub
                  style={{
                    color: "black",
                    width: "60px",
                    height: "60px",
                    padding: "10px",
                  }}
                />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default MainPage;
