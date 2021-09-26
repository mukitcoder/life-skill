import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Guest from "../Guest/Guest";
import "./LifeSkillProgram.css";

const LifeSkillProgram = () => {
  const [guests, setGuests] = useState([]);
  const [cart, setCart] = useState([])

  useEffect(() => {
    fetch(`./fakeData.JSON`)
      .then((res) => res.json())
      .then((data) => setGuests(data));
  }, []);

  const handleAddToCart = (guest) => {
      const newCart = [...cart, guest];
      setCart(newCart)
  };

  return (
    <div className="program-container row">
      <div className="guest-container col-md-9">
       <div className="row row-cols-1 row-cols-md-3 g-4">
       {guests.map((guest) => (
          <Guest key={guest.id} guest={guest} handleAddToCart={handleAddToCart}></Guest>
        ))}
       </div>
      </div>

      <div className="cart-container col-md-3">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default LifeSkillProgram;
