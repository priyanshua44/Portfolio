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
              <span>Java</span>
            </div>
            <div className="progress-line java">
              <span></span>
            </div>
          </div>

          <div className="bar">
            <div className="info">
              <span>
                HTML + CSS + Bootstrap
              </span>
            </div>
            <div className="progress-line html">
              <span></span>
            </div>
          </div>

          <div className="bar">
            <div className="info">
              <span>Javascript</span>
            </div>
            <div className="progress-line javascript">
              <span></span>
            </div>
          </div>
         
          <div className="bar">
            <div className="info">
              <span>ReactJs, Redux</span>
            </div>
            <div className="progress-line reactjs">
              <span></span>
            </div>
          </div>
          <div className="bar">
            <div className="info">
              <span>MERN Stack</span>
            </div>
            <div className="progress-line mern">
              <span></span>
            </div>
          </div>
          <div className="bar">
            <div className="info">
              <span>Springboot</span>
            </div>
            <div className="progress-line springboot">
              <span></span>
            </div>
          </div>
          <div className="bar">
            <div className="info">
              <span>NodeJs</span>
            </div>
            <div className="progress-line nodejs">
              <span></span>
            </div>
          </div>
          <div className="bar">
            <div className="info">
              <span>MongoDB</span>
            </div>
            <div className="progress-line mongodb">
              <span></span>
            </div>
          </div>
          <div className="bar">
            <div className="info">
              <span>SQL</span>
            </div>
            <div className="progress-line sql">
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
