import React from "react";
import './Skills.css';

function Skills(props) {
  const myProfileDetails = props.details;

  return (
    <div className="container">
      <h2 className="text-center">Skills</h2>
      <br />
      <br />
      <div className="row">
        {myProfileDetails.skills.map((skill) => {
          return (
            <div className="col-12 col-md-3 skill-tile text-center">
              <img src={skill.image} className="skillimage" alt="programming skills" />
              <p>{skill.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
