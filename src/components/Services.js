import React, { useEffect } from "react";
import Aos from "aos"
import "aos/dist/aos.css"
import "../style.css";
import "../contact.css";
import "../gallery.css";
import "../responsive.css";
import "../Skills.css";


const Services = () => {
  useEffect(() => {
    Aos.init({duration:2000, offset:200})
  }, [])

    return (
      <div id="Services">
        <div className="container">
          <div className="flexboard">
            <div className="Services-heading" data-aos="fade">
              <h4>Why Hire Me</h4>
            </div>
          </div>

          <div className="box row">
            <div className="element col-lg-4 col-sm-12 align-center" data-aos="zoom-in">
              <i className="fa-solid fa-square-check fa-3x easy-button"></i>
              <h5>Attractive Design</h5>
              <p>
              I specialize in creating visually appealing websites with a user-friendly interface, designed to attract and engage users effectively.
              </p>
            </div>
            <div className="element col-lg-4 col-sm-12 align-center" data-aos="zoom-in">
              <i className="fa-solid fa-3x fa-mobile-screen-button"></i>
              <h5>Responsive Websites</h5>
              <p>
              I excel at creating fully responsive websites that function seamlessly across all devices, including phones, computers, and TVs.
              </p>
            </div>
            <div className="element col-lg-4 col-sm-12 align-center" data-aos="zoom-in">
              <i className="fa-solid fa-server fa-3x easy-button"></i>
              <h5>Backend</h5>
              <p>
              I specialize in backend development, delivering robust, reliable, and highly efficient server-side solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }


export default Services;
