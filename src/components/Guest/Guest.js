import React from "react";
import "./Guest.css";

const Guest = (props) => {
  console.log(props);
  const { name, img, age, occupation, fee, country } = props.guest;
  return (
    <div className="col guest">
      <div class="card h-100">
        <img src={img} className="card-img-top mx-auto my-3" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Name: {name}</h5>
          <p className="card-text">Age: {age} years old</p>
          <p className="card-text">Occupation: {occupation}</p>
          <p className="card-text">Fee: ${fee}</p>
          <p className="card-text">Country: {country}</p>
          <button
            onClick={() => props.handleAddToCart(props.guest)}
            className="regular-btn"
          >
            Add To Cart
          </button>
        </div>

        <div className="card-footer">
          <small className="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    </div>
  );
};

export default Guest;
