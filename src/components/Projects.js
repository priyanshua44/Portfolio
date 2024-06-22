import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import weather from "../images/weather.png";
import flipkart from "../images/flipkart.png";
import virtual from "../images/Virtual-Piano.png";
import facebook from "../images/facebook.png";
import youtube from "../images/youtube.png";
import shoptohome from "../images/shoptohome.png"
import farmlink from "../images/farmlink-web-icon.webp";
import "../style.css";
import "../contact.css";
import "../gallery.css";
import "../responsive.css";
import "../Skills.css";

const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, offset: 100 });
  }, []);

  return (
    <div id="Projects">
      <div className="flexboard">
        <div className="Projects-heading box-shadow" data-aos="fade-up">
          <h1>My Projects</h1>
        </div>
      </div>

      <div className="Projects-gallery row">

      <div
          className="Project-element pe2 col-lg-4 col-sm-12 align-center"
          data-aos="slide-up"
        >
          <div className="Project-img">
            <a href="https://farmlinkv2.vercel.app/" target="_blank">
              <img src={farmlink} alt="" />
            </a>
          </div>
          <h2>Farmlink</h2>
        </div>

        <div
          className="Project-element pe2 col-lg-4 col-sm-12 align-center"
          data-aos="slide-up"
        >
          <div className="Project-img">
            <a href="https://priyanshua44.github.io/shoptohome/" target="_blank">
              <img src={shoptohome} alt="" />
            </a>
          </div>
          <h2>Ecommerce Site</h2>
        </div>

        <div
          className="Project-element pe2 col-lg-4 col-sm-12 align-center"
          data-aos="slide-up"
        >
          <div className="Project-img">
            <a href="https://priyanshua44.github.io/weather/" target="_blank">
              <img src={weather} alt="" />
            </a>
          </div>
          <h2>Weather App</h2>
        </div>

        {/* <div
          className="Project-element pe2 col-lg-4 col-sm-12 align-center"
          data-aos="slide-up"
        >
          <div className="Project-img">
            <a href="https://flipkartclone-pj.netlify.app" target="_blank">
              <img src={flipkart} alt="" />
            </a>
          </div>
          <h2>Flipkart clone</h2>
        </div>

        <div
          className="Project-element pe3 col-lg-4 col-sm-12 Project-element-Other-Row align-center"
          data-aos="slide-up"
        >
          <div className="Project-img">
            <a href="https://virtual-piano-pj.netlify.app" target="_blank">
              <img src={virtual} alt="" />
            </a>
          </div>
          <h2>Virtual Piano</h2>
        </div>

        <div
          className="Project-element pe1 col-lg-4 col-sm-12 Project-element-Other-Row align-center"
          data-aos="slide-up"
        >
          <div className="Project-img">
            <a href="https://facebookclone-pj.netlify.app" target="_blank">
              <img src={facebook} alt="" />
            </a>
          </div>
          <h2>Facebook clone</h2>
        </div>

        <div
          className="Project-element pe3 col-lg-4 col-sm-12 Project-element-Other-Row align-center"
          data-aos="slide-up"
        >
          <div className="Project-img">
            <a href="https://youtubeclone-pj.netlify.app" target="_blank">
              <img src={youtube} alt="" />
            </a>
          </div>
          <h2>Youtube clone</h2>
        </div> */}
      </div>
    </div>
  );
};

export default Projects;
