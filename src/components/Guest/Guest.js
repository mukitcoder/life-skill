import React from "react";
import "./Guest.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

const Guest = (props) => {
  // FonstAwesome Icons
  const coin = <FontAwesomeIcon icon={faCoins} />;
  const fb = <FontAwesomeIcon icon={faFacebookSquare} />;
  const insta = <FontAwesomeIcon icon={faInstagramSquare} />;
  const twitter = <FontAwesomeIcon icon={faTwitterSquare} />;
  // Distructiong
  const { name, img, age, occupation, fee, country } = props.guest;
  return (
    <div className="col guest">
      <div className="card h-100 guest-card text-center fw-bolder">
        <img src={img} className="card-img-top mx-auto my-3" alt="..." />
        <div className="card-body text-white">
          <h5 className="card-title text-warning">Name: {name}</h5>
          <p className="card-text">Age: {age} years old</p>
          <p className="card-text">Occupation: {occupation}</p>
          <p className="card-text">Fee: ${fee}</p>
          <p className="card-text">Country: {country}</p>
          <div className="mx-auto w-100">
            <button
              onClick={() => props.handleAddToCart(props.guest)}
              className="regular-btn btn btn-warning opacity-75"
            >
              {coin} Hire Now
            </button>
          </div>
        </div>
        
        <div className="card-footer fs-3 d-flex mx-auto p-0">
          <p className="text-white social-icon">{fb}</p>
          <p className="text-white px-5 social-icon">{twitter}</p>
          <p className="text-white social-icon">{insta}</p>
        </div>
      </div>
    </div>
  );
};

export default Guest;
