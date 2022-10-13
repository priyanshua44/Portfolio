import React, { useState } from "react";
import "../style.css";
import "../contact.css";
import "../gallery.css";
import "../responsive.css";
import "../Skills.css";

const Contact = () => {
  const [input, setinput] = useState("SEND YOUR MESSAGE");

  const onFormSubmit = (event) => {
    event.preventDefault();
    setinput("SUBMITTING !!!");
    fetch(
      "https://script.google.com/macros/s/AKfycbxFsBJTY1KB3hAOr0cXQjHznz71reKzviP73OkomaxOJghiO_ZYY2Bd-uSF_dZVZzmQ/exec",
      { method: "POST", body: new FormData(document.forms["contactform"]) }
    )
      .then((response) =>
        alert("Thank you! your form is submitted successfully.")
      )
      .then(() => {
        window.location.reload();
      })
      .catch((error) => console.error("Error!", error.message));
  };

  return (
    <div id="Contact">
      <div className="flexboard">
        <div className="Contact-heading">
          <h1>Connect With Me</h1>
        </div>
      </div>

      <div id="form">
        <div className="fish" id="fish"></div>
        <div className="fish" id="fish2"></div>

        <form
          method="post"
          action="https://script.google.com/macros/s/AKfycbxFsBJTY1KB3hAOr0cXQjHznz71reKzviP73OkomaxOJghiO_ZYY2Bd-uSF_dZVZzmQ/exec"
          name="contactform"
          onSubmit={onFormSubmit}
        >
          <div className="formgroup" id="name-form">
            <label htmlFor="name">Your name*</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="formgroup" id="email-form">
            <label htmlFor="email">Your e-mail*</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="formgroup" id="message-form">
            <label htmlFor="message">Your message</label>
            <textarea id="message" name="message" required></textarea>
          </div>

          <input type="submit" id="submit-btn" value={input} />
        </form>
      </div>
    </div>
  );
};

export default Contact;
