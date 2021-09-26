import React from "react";
import "./Guest.css";

const Guest = (props) => {
  console.log(props);
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
            <div className="mx-auto w-50">
            <button 
            onClick={() => props.handleAddToCart(props.guest)}
            className="regular-btn btn btn-warning opacity-75"
          >
            Hire Now
          </button>
            </div>
        </div>

        <div className="card-footer">
          <small className="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    </div>
  );
};

export default Guest;
