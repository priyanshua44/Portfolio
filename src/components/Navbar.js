import React, { useReducer } from "react";
import Skills from "./Skills";
import $ from "jquery";
import "../style.css";
import "../contact.css";
import "../gallery.css";
import "../responsive.css";
import "../Skills.css";

const Navbar = () => {
  return (
    <div className="container-fluid" id="navbar">
      <nav className="navbar navbar-expand-md nav-color body-color">
        <a className="navbar-brand cyan-color brand-name" href="">
          Priyanshu Jain
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon navbar-dark"></span>
        </button>

        <div
          className="collapse navbar-collapse align-right align-left-responsive"
          id="navbarToggleExternalContent"
        >
          <ul className="navbar-nav align-right align-left-responsive">
            <li className="nav-item Services-btn">
              <a className="nav-link nav-color" href="#Services">
                About
              </a>
            </li>
            <li className="nav-item Skills-btn">
              <a
                className="nav-link nav-color"
                href="#Skills"
                // onClick={() => $("#SkillsAnimate").load("#SkillsAnimate")}
              >
                Skills
              </a>
            </li>
            <li className="nav-item Projects-btn">
              <a className="nav-link nav-color" href="#Projects">
                Projects
              </a>
            </li>
            <li className="nav-item Contact-btn">
              <a className="nav-link nav-color" href="#Contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
