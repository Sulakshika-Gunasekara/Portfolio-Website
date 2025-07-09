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
        background: "linear-gradient(to bottom, #1e3c72,rgb(66, 78, 97))",
        minHeight: "100vh",

        width: "100vw",
        display: "flex",
        overflow: "hidden",
        boxSizing: "border-box",
        fontFamily: "monospace, sans-serif",
      }}>
      {/* Mobile Navbar */}
      <nav
        className="navbar navbar-expand-lg  d-lg-none fixed-top"
        style={{ backgroundColor: "#667085" }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Sulakshika Gunasekara
          </a>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mobileNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mobileNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link " href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Navigation Bar */}
      <div
        className=" - mt-5  py-3  d-none d-lg-flex flex-column"
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          height: "100vh",
          width: "35%",

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
                  src="./me.jpg"
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover border-4 shadow-lg m-5 p-2"
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
                href="./resume.pdf"
                download="resume.pdf"
                className="btn btn-outline-primary btn-sm mt-3"
                style={{
                  color: "#dbdee4",
                  border: "2px solid #2a5298",
                }}>
                Download CV
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content Area */}
      <main
        // className="flex-1 flex items-center justify-center"
        className="col-12 offset-lg-4 col-lg-8 "
        style={{
          padding: "20px",
          marginTop: "100px",

          left: 0,
          top: 0,
          minHeight: "100vh",
          zIndex: 1,
          position: "relative",
        }}>
        {/* About Section */}
        <section
          id="about"
          className="text-white   pt-3 pr-5 pb-3 pl-5 m-3 d-flex flex-column align-items-center justify-content-center"
          style={{
            maxWidth: "800px",
            fontFamily: "Lucida Console",
            monospace: "monospace",
            fontSize: "1.2rem",
            textAlign: "justify",
            lineHeight: "1.6",
          }}>
          {/* Profile image for small screens */}
          <div className="d-block d-lg-none text-center mb-4 ">
            <img
              src="./me.jpg"
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover border-4 shadow-lg m-3"
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
            <h1 id="name" className="text-white text-4xl font-bold mb-2 pb-2 ">
              Sulakshika Gunasekara
            </h1>
          </div>

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

        {/* CV for small screens */}
        <div className="d-block d-lg-none text-center mb-4 mt-5">
          <a
            href="./resume.pdf"
            download="resume.pdf"
            className="btn btn-outline-primary btn-sm mt-3"
            style={{
              color: "#dbdee4",
              border: "2px solid #2a5298",
            }}>
            Download CV
          </a>
        </div>
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
