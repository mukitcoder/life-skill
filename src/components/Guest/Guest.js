import React from "react";
import "./Guest.css";

const Guest = (props) => {
  console.log(props);
  const { name, img, age, occupation, fee, country } = props.guest;
  return (
    <div className="guest">
      <div className="row">
          <div className="bg-info">
          <img src={img} alt="" />
      <h4 className="fs-1">Name: {name}</h4>
      <p>Age: {age} years old</p>
      <p>Occupation: {occupation}</p>
      <p>Fee: ${fee}</p>
      <p>Country: {country}</p>
      <button
        onClick={() => props.handleAddToCart(props.guest)}
        className="regular-btn"
      >
        Add To Cart
      </button>
          </div>
      </div>
    </div>
  );
};

export default Guest;
