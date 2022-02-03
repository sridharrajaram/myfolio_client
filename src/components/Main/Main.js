import React, { useRef, useState } from "react";
import Home from "../Home/Home";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import "./Main.css";
import { DETAILS } from "../../Data/Details";
import About from "../About/About";
import Education from "../Education/Education";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Experience from "../Experience/Experience";
import Certification from "../Certification/Certification";
import Achievements from "../Achievements/Achievements";
import Follow from "../Follow/Follow";
import Footer from "../Footer/Footer";
import ContactMe from "../ContactMe/ContactMe";

function Main() {
  const myProfileDetails = DETAILS;
  const [toggleMenu, setToggleMenu] = useState(false);

  const aboutRef = useRef(null);
  const scrollToAbout = () => {
    setToggleMenu(false);
    // `current` points to the mounted text input element
    aboutRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  const educationRef = useRef(null);
  const scrollToEducation = () => {
    setToggleMenu(false);
    // `current` points to the mounted text input element
    educationRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  const certificateRef = useRef(null);
  const scrollToCertificate = () => {
    setToggleMenu(false);
    // `current` points to the mounted text input element
    certificateRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  const skillsRef = useRef(null);
  const scrollToSkills = () => {
    setToggleMenu(false);
    // `current` points to the mounted text input element
    skillsRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  const projectsRef = useRef(null);
  const scrollToProjects = () => {
    setToggleMenu(false);
    // `current` points to the mounted text input element
    projectsRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  const experienceRef = useRef(null);
  const scrollToExperience = () => {
    setToggleMenu(false);
    // `current` points to the mounted text input element
    experienceRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  const achievementsRef = useRef(null);
  const scrollToAchievements = () => {
    setToggleMenu(false);
    // `current` points to the mounted text input element
    achievementsRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  const contactmeRef = useRef(null);
  const scrollToContactme = () => {
    setToggleMenu(false);
    // `current` points to the mounted text input element
    contactmeRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  const openProjectsURL = () => {
    window.open(myProfileDetails.profile_links.github.link, "_blank");
  };

  return (
    <div>
      <Navbar
        light
        color="primary"
        expand="md"
        className="navbar scrollmenu"
        style={{ padding: ".5rem 1rem" }}
      >
        <NavbarBrand href="/">
          <img
            src={myProfileDetails.logo}
            alt={myProfileDetails.name}
            style={{ width: "30px", height: "30px" }}
          />
        </NavbarBrand>
        <NavbarToggler
          onClick={() => {
            setToggleMenu(!toggleMenu);
          }}
        />
        <Collapse isOpen={toggleMenu} navbar>
          <Nav className="m-auto" navbar left>
            <NavItem>
              <NavLink
                style={{ color: "black" }}
                href="#"
                onClick={scrollToAbout}
              >
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style={{ color: "black" }}
                href="#"
                onClick={scrollToEducation}
              >
                Education
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style={{ color: "black" }}
                href="#"
                onClick={scrollToCertificate}
              >
                Certifications
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style={{ color: "black" }}
                href="#"
                onClick={scrollToSkills}
              >
                Skills
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style={{ color: "black" }}
                href="#"
                onClick={scrollToProjects}
              >
                Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style={{ color: "black" }}
                href="#"
                onClick={scrollToExperience}
              >
                Experience
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style={{ color: "black" }}
                href="#"
                onClick={scrollToAchievements}
              >
                Achievements
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style={{ color: "black" }}
                href="#"
                onClick={scrollToContactme}
              >
                Contact
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <Home sTA={scrollToAbout} sTC={scrollToContactme} details={myProfileDetails}/>
      <div ref={aboutRef}>
        <About details={myProfileDetails} />
      </div>
      <br />
      <br />
      <br />
      <br />
      <div ref={educationRef}>
        <Education details={myProfileDetails} />
      </div>
      <br />
      <br />
      <div ref={certificateRef}>
        <Certification details={myProfileDetails} />
      </div>
      <br />
      <br />
      <br />
      <br />
      <div ref={skillsRef}>
        <Skills details={myProfileDetails} />
      </div>
      <br />
      <br />
      <br />
      <br />
      <div ref={projectsRef}>
        <Projects details={myProfileDetails} />
      </div>
      <br />
      <br />
      <div className="container text-center">
        <button className="button" onClick={() => openProjectsURL()}>
          More Projects
        </button>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div ref={experienceRef}>
        <Experience details={myProfileDetails} />
      </div>
      <br />
      <br />
      <br />
      <div ref={achievementsRef}>
        <Achievements details={myProfileDetails} />
      </div>
      <br />
      <br />
      <div ref={contactmeRef}>
        <ContactMe details={myProfileDetails} />
      </div>
      <br />
      <br />
      <br />
      <Follow details={myProfileDetails} />
      <Footer details={myProfileDetails} sTC={scrollToContactme} />
    </div>
  );
}

export default Main;
