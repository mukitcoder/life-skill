import React from "react";
import "./Cart.css";

const Cart = (props) => {
  console.log(props.cart);
  const { cart } = props || {};
  let total = 0;
  for (const guest of cart) {
    total = total + guest.fee;
  }
  return (
    <div className='text-white cart-area'>
      <h4 className="text-warning">Total Guest Hired: {cart.length}</h4>
      <h5>Total fees: $ {total} </h5>
      <div className='text-white mt-4'>
        {cart.map((guest) => (<div className="cart-add-area rounded-pill">
            <p className="px-2 mx-2">{guest.name} <img className="ms-4" src={guest.img} alt="" /></p>
        </div>
          
        ))}
      </div>
    </div>
  );
};

export default Cart;
