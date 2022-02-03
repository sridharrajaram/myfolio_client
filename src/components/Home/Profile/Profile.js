import React from "react";
import "../Profile/Profile.css";
import Typical from "react-typical";

function Profile(props) {
  const myProfileDetails = props.details;
  const scrollToAbout = props.STA;
  const scrollToContactme = props.STC;

  return (
    <div className="profile_container">
      <div className="profile_parent">
        <div className="profile_details">
          <div className="colz">
            <div className="colz_icon">
              <a
                href={myProfileDetails.profile_links.linkedin.link}
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a
                href={myProfileDetails.profile_links.github.link}
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-github-square"></i>
              </a>
            </div>
          </div>
          <div className="profile_details_name">
            <span className="primary_text">
              {" "}
              Hello, I'm{" "}
              <span className="highlighted_text">{myProfileDetails.name}</span>
            </span>
          </div>
          <div className="profile_details_role">
            <span className="primary_text">
              {" "}
              <h1>
                {" "}
                <Typical steps={myProfileDetails.role} loop={Infinity} />
              </h1>
              <span className="profile_role_tagline">
                {myProfileDetails.tag_line}
              </span>
            </span>
          </div>
          <div className="profile_options">
            <button className="btn primary-btn" onClick={scrollToContactme}>
              {""}
              Hire Me{" "}
            </button>
            <a href="Sridhar Rajaram.pdf" download="Sridhar Rajaram Resume.pdf">
              <button className="btn highlighted-btn">
                Get Resume{" "}
                <span>
                  <i className="fa fa-download"></i>
                </span>
              </button>
            </a>
          </div>
          <div>
            <br />
            <br />
            <span
              onClick={scrollToAbout}
              className="know-more know-more--specs"
            >
              Know More
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
