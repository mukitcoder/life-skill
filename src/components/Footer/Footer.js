import React from "react";
import "./Footer.css";

// Footer Section
const Footer = () => {
  return (
    <div className=" row bg-dark opacity-75 mt-4 footer-style text-white">
      <div className="col-md-12 text-center mt-4">
        <h5 className="mt-3">Search for more SkillsYouNeed:</h5>
        <div className="input-group mb-3 w-50 mx-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Search for new event"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <button className="btn btn-warning">New Event</button>
        </div>
        <p>© 2011 - 2021 SkillsYouNeed.com</p>
      </div>
    </div>
  );
};

export default Footer;
