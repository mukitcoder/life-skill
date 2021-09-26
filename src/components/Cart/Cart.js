import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";

const Cart = (props) => {
  // FonstAwesone Icon
  const speakers = <FontAwesomeIcon icon={faUserTie} />;
  const { cart } = props || {};
  let total = 0;
  for (const guest of cart) {
    total = total + guest.fee;
  }
  return (
    <div className='text-white cart-area'>
      <h4 className="text-warning"> {speakers} Total Guest Hired: {cart.length}</h4>
      <h5 className="my-4">Total fees: $ {total} </h5>
      <div className='text-white mt-4'>
        {cart.map((guest) => (<div className="cart-add-area rounded-pill">
            <p className="px-2 mx-2"><img className="mx-3 rounded my-auto" src={guest.img} alt="" /> {guest.name}</p>
        </div>
          
        ))}
      </div>
    </div>
  );
};

export default Cart;
