import React, { useState, useEffect, useContext, createContext } from "react";
import { CartContext } from "./CartContext";
import { RiAddLine } from "react-icons/ri";
import { RiSubtractFill } from "react-icons/ri";
const CartIncrementer = () => {
  const [counts, setCounts] = useState(1);
  const [cart, setCart] = useContext(CartContext);

  const subCount = () => {
    setCounts(counts - 1);
  };

  const addCount = () => {
    // console.log("object");
    setCounts(counts + 1);
    console.log(cart);
  };

  return (
    <div>
      <RiSubtractFill
        onClick={subCount}
        style={{
          marginRight: "7px",
          cursor: "pointer",
          fontSize: "25px",
        }}
      />
      {counts}
      <RiAddLine
        onClick={addCount}
        style={{
          marginLeft: "7px",
          cursor: "pointer",
          fontSize: "25px",
        }}
      />
    </div>
  );
};

export default CartIncrementer;
