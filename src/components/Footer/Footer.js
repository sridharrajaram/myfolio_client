import React from "react";
import "./Footer.css";

function Footer(props) {
  const myProfileDetails = props.details;
  const scrollToContactme = props.sTC;
  return (
    <div className="footer text-center">
      <p className="text-color">
        © Made with ❤️ by{" "}
        <a
          className="text-color"
          href={myProfileDetails.profile_links.linkedin.link}
          target="_blank"
          rel="noreferrer"
        >
          Sridhar Rajaram
        </a>
        <br />
        Looking for Job opportunity, click to {" "}
        
          <span onClick={scrollToContactme} style={{cursor:"pointer"}} className="text-color">
            <u>Contact Me</u>
          </span>
      </p>
    </div>
  );
}

export default Footer;
