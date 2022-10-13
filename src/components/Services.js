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
                I can make attractive websites which will attract users, also
                the UI is very simplified.
              </p>
            </div>
            <div className="element col-lg-4 col-sm-12 align-center" data-aos="zoom-in">
              <i className="fa-solid fa-3x fa-mobile-screen-button"></i>
              <h5>Responsive Websites</h5>
              <p>
                I can make fully responsive websites which can work easily on
                Phone, Computer, TV.
              </p>
            </div>
            <div className="element col-lg-4 col-sm-12 align-center" data-aos="zoom-in">
              <i className="fa-solid fa-heart fa-3x easy-button"></i>
              <h5>Dedication</h5>
              <p>
                My first priorty is completing the work at time, I don't believe
                in giving excuses.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }


export default Services;
