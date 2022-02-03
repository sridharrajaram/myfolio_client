import React from "react";
import "./Projects.css";

function Projects(props) {
  const myProfileDetails = props.details;

  const onProjectClicked = (id) => {
    var projObj = myProfileDetails.projects.filter(
      (project) => project.id === id
    )[0];
    window.open(projObj.link, "_blank");
  };

  return (
    <div className="container">
      <h2 className="text-center">Projects</h2>
      <br />
      <br />
      {myProfileDetails.projects.map((project) => {
        return (
          <div key={project.id} className="row">
            <div className="col-12 col-sm-6" style={{ textAlign: "center" }}>
              <img
                src={project.image}
                alt={project.title}
                width="40%"
                height="75%"
                style={{ margin: "auto" }}
              />
            </div>
            <div className="col-12 col-sm-6" style={{ padding: "10px" }}>
              <h4>{project.title}</h4>
              <p>{project.description.para1}</p>
              <p>{project.description.para2}</p>
              <button
                className="button"
                onClick={() => onProjectClicked(project.id)}
              >
                View Project
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
