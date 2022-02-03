import React from "react";
import "./Education.css";

function Education(props) {
  const myProfileDetails = props.details;

  return (
    <div className="container">
      <div className="row">
        <h2 className="text-center">Education</h2>
        <br />
        <br />
        <br />
        <div
          className="col-12 col-sm-6"
          style={{ textAlign: "center", padding: "10px" }}
        >
          <img
            src={myProfileDetails.education.college.image}
            alt="College"
            width="100%"
            height="80%"
            style={{ margin: "auto" }}
          />
        </div>
        <div className="col-12 col-sm-6" style={{ padding: "20px" }}>
          <p>
            <b>Course : </b>
            {myProfileDetails.education.college.course}
          </p>
          <p>
            <b>Percentage : </b>
            {myProfileDetails.education.college.grade}
          </p>
          <p>
            <b>College Name : </b>
            {myProfileDetails.education.college.name}
          </p>
          <p>
            <b>Timeline: </b>
            {myProfileDetails.education.college.timeline}
          </p>
        </div>
        {/*<div
          className="col-12 col-sm-6"
          style={{ textAlign: "center", padding: "10px" }}
        >
          <img
            src={myProfileDetails.education.higher_secondary_school.image}
            alt="Higher Secondary School"
            width="80%"
            height="60%"
            style={{ margin: "auto" }}
          />
        </div>
        <div className="col-12 col-sm-6" style={{ padding: "20px" }}>
          <p>
            <b>Course : </b>
            {myProfileDetails.education.higher_secondary_school.course}
          </p>
          <p>
            <b>Percentage : </b>
            {myProfileDetails.education.higher_secondary_school.grade}
          </p>
          <p>
            <b>School Name : </b>
            {myProfileDetails.education.higher_secondary_school.name}
          </p>
          <p>
            <b>Timeline : </b>
            {myProfileDetails.education.higher_secondary_school.timeline}
          </p>
        </div>
        <div
          className="col-12 col-sm-6"
          style={{ textAlign: "center", padding: "10px" }}
        >
          <img
            src={myProfileDetails.education.secondary_school.image}
            alt="Secondary School"
            width="80%"
            height="60%"
            style={{ margin: "auto" }}
          />
        </div>
        <div className="col-12 col-sm-6" style={{ padding: "20px" }}>
          <p>
            <b>Course : </b>
            {myProfileDetails.education.secondary_school.course}
          </p>
          <p>
            <b>Percentage : </b>
            {myProfileDetails.education.secondary_school.grade}
          </p>
          <p>
            <b>School Name : </b>
            {myProfileDetails.education.secondary_school.name}
          </p>
          <p>
            <b>Timeline : </b>
            {myProfileDetails.education.secondary_school.timeline}
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default Education;
