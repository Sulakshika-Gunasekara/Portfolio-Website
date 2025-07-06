// components/ProjectCard.jsx

const ProjectCard = ({ title, technologies, description }) => (
  <div
    className="d-flex justify-content-center align-items-center gap-4 flex-wrap mb-5"
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
          {title}
        </h5>

        <p
          className="card-text text-center"
          style={{
            fontSize: "0.9rem",
            fontWeight: "bold",
            color: "#dcdcdc",
          }}>
          {technologies}
        </p>

        <p
          className="card-text text-justify"
          style={{ fontSize: "0.85rem", lineHeight: "1.5" }}>
          {description}
        </p>
      </div>
    </div>
  </div>
);

export default ProjectCard;
