import React from "react";
import "./About.css";

function About(props) {
  const myProfileDetails=props.details;
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div
            className="col-12 col-sm-6"
            style={{ textAlign: "center", padding: "20px" }}
          >
            <div className="profile_picture">
              <div className="profile_picture_background"></div>
            </div>
          </div>
          <div className="col-12 col-sm-6" style={{ padding: "30px" }}>
            <h2>About</h2>
            <br />
            <h5>{myProfileDetails.about_me.para1}</h5>
            <p>{myProfileDetails.about_me.para2}</p>
            <p>{myProfileDetails.about_me.para3}</p>
            <p>{myProfileDetails.about_me.para4}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
