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
      <h2>Guest Added {cart.length}</h2>
      <p>Guest Added:{total} </p>
      <div className='text-white cart-add-area mx-5'>
        {cart.map((guest) => (
          <p>{guest.name} <img src={guest.img} alt="" /></p>
        ))}
      </div>
    </div>
  );
};

export default Cart;
