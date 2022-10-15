import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import $ from "jquery";
import Aos from "aos";
import "aos/dist/aos.css";
import "../style.css";
import "../contact.css";
import "../gallery.css";
import "../responsive.css";
import "../Skills.css";

const Skills = () => {
  const { ref: myRef, inView: visible } = useInView();

  const handle = () => {
    // console.log("hello")
  };

  useEffect(() => {
    Aos.init({ duration: 2000, offset: 200 });
  }, []);

  return (
    <div id="Skills">
      <div className="flexboard">
        <div className="Skills-heading align-center" data-aos="fade">
          <h6>My Skills</h6>
        </div>
      </div>
      <div
        className="Skills-box flexboard"
        id="SkillsAnimate"
        data-aos="slide-up"
        ref={myRef}
      >
        <div className="skill-bars box-shadow ">
          <div className="bar">
            <div className="info">
              <span>
                HTML
                {visible ? handle() : ""}
              </span>
            </div>
            <div className="progress-line html">
              <span></span>
            </div>
          </div>
          <div className="bar">
            <div className="info">
              <span>CSS</span>
            </div>
            <div className="progress-line css">
              <span></span>
            </div>
          </div>
          <div className="bar">
            <div className="info">
              <span>BOOTSTRAP</span>
            </div>
            <div className="progress-line jquery">
              <span></span>
            </div>
          </div>
          <div className="bar">
            <div className="info">
              <span>JAVASCRIPT</span>
            </div>
            <div className="progress-line python">
              <span></span>
            </div>
          </div>
          <div className="bar">
            <div className="info">
              <span>React JS</span>
            </div>
            <div className="progress-line mysql">
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
