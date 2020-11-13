import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dex from "./Dex";
import Cart from "./Cart";

// import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import { CartProvider } from "./CartContext";

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Dex />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
      </Router>
    </CartProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
