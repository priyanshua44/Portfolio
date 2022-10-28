import React, { useEffect } from "react";
import photo from "../images/photo.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import "../style.css";
import "../contact.css";
import "../gallery.css";
import "../responsive.css";
import "../Skills.css";

const Container = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, offset: 100 });
  }, []);

  return (
    <div className="box row" id="container-box">
      <div
        className="photo align-center col-lg-6 col-md-4 col-sm-12"
        data-aos="fade-right"
        data-aos-offset="200"
      >
        <img src={photo} alt="my_photo" />
      </div>

      <div
        className="written col-lg-6 col-md-8 col-sm-12"
        data-aos="fade-left"
        data-aos-offset="200"
      >
        <div className="flexboard">
          <div className="heading">
            <h1 className="front-end">Front-end Web Developer</h1>
          </div>
        </div>

        <div className="flexboard">
          <div className="sub-heading nav-color">
            <div className="first-sub-heading">
              <h2>Hi! I am Priyanshu</h2>
            </div>
            <div className="second-sub-heading">
              <h3>Jain</h3>
            </div>
          </div>
        </div>

        <div className="description nav-color">
          <p>
            Creative Front End Developer skilled in designing, developing and
            maintaining responsive websites in the recruiting industry.
            Specialized in ReactJS and responsive design. Very passionate about
            aesthetics and UI designs.
          </p>
        </div>

        <div className="social-button flexboard">
          <a
            href="https://www.linkedin.com/in/priyanshu-j-741915110
                    "
            target="_blank"
            className="btn btn-dark btn-lg"
            type="button"
          >
            <i className="fa-brands fa-linkedin"></i> LinkedIn
          </a>
          <a
            href="https://github.com/priyanshua44"
            target="_blank"
            className="btn btn-dark btn-lg"
            type="button"
          >
            <i className="fa-brands fa-square-github"></i> Github
          </a>
          <a
            href="https://drive.google.com/file/d/1gvE8h1cNG5W8crkmXxNlI7YLBqAkrNIG/view?usp=sharing"
            target="_blank"
            className="btn btn-dark btn-lg jj"
            type="button"
          >
            <i className="fa-regular fa-file"></i> Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Container;
