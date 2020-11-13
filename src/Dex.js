import React, { Component } from "react";
// import { render } from "react-dom";
import "./style.css";
import { TshirtList } from "./TshirtList";
import Cart from "./Cart";
import { CartProvider } from "./CartContext";
import "bootstrap/dist/css/bootstrap.css";
import Nav from "./Nav";

const Dex = () => {
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)",
      }}
    >
      <div className="text-center mb-3">
        <Nav />
      </div>
      <div className="container">
        <div className="">
          <TshirtList />
          {/* <Cart /> */}
        </div>
      </div>
    </div>
  );
};

export default Dex;
