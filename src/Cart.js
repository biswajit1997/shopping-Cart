import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { useHistory } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
//  import { CartProvider } from "./CartContext";
import { Card, CardBody, Button, CardHeader, CardFooter } from "reactstrap";
import { FaShoppingCart } from "react-icons/fa";
import { RiAddLine } from "react-icons/ri";
import { RiSubtractFill } from "react-icons/ri";
import CartIncrementer from "./CartIncrementer";

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
  const [add, setAdd] = useState(1);
  const handleClick = (e) => {
    let history = useHistory();
  };
  const onToken = (token) => {
    console.log(token);
    alert("Payment Successfully");
  };

  const subCount = (item, index) => {
    let temp = cart;

    temp[index].count = item - 1;
    setCart(temp);
    setAdd(temp[index].count);
    console.log(add);
  };

  const addCount = (item, index) => {
    let temp = cart;

    temp[index].count = item + 1;
    setCart(temp);
    // console.log(temp[index].count);
    setAdd(temp[index].count);
    console.log(add);
  };

  const handleRemove = (index) => {
    const values = [...cart];
    console.log(values);
    values.splice(index, 1);
    setCart(values);
  };
  return (
    <div className="col-sm-8 offset-sm-2 text-center mt-3">
      <div>
        <Card>
          <CardHeader className="text-right">
            <div>
              <FaShoppingCart
                style={{ fontSize: "20px", marginRight: "3px" }}
              />
              {cart.length}
            </div>
          </CardHeader>
          {cart.map((item, index) => (
            <CardBody style={{ borderBottom: "1px solid #ddd" }}>
              <div className="row">
                <div className="col-4">
                  <img src={item.image} alt="" height="100px" width="100px" />
                </div>
                <div className="col-4">{item.name}</div>
                <div className="col-4 text-left">Price : {item.price} /-</div>
                <div className="col-12 text-right mt-2">
                  <div className="row text-right">
                    <div className="col-4 text-right"></div>
                    <div className="col-8">
                      {/* <CartIncrementer /> */}
                      <RiSubtractFill
                        onClick={() => subCount(item.count, index)}
                        style={{
                          marginRight: "7px",
                          cursor: "pointer",
                          fontSize: "25px",
                        }}
                      />
                      {item.count}
                      <RiAddLine
                        onClick={() => addCount(item.count, index)}
                        style={{
                          marginLeft: "7px",
                          cursor: "pointer",
                          fontSize: "25px",
                        }}
                      />
                      <Button
                        onClick={() => handleRemove(index)}
                        className="ml-3"
                        type="submit"
                      >
                        remove
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardBody>
          ))}
          <CardFooter>
            <div className="row">
              <div className="col-6">
                Total price : {totalPrice * add}.00 /-
              </div>
              <div className="col-6 text-right">
                <StripeCheckout
                  token={onToken}
                  amount={totalPrice * add * 100}
                  currency="INR"
                  stripeKey="pk_test_51HgpZYBnx8e6AZN4k6CZJsf26GxX7zF9iO0glUZUgyiMyRnbigcaRC7Yi0TNaP9GLDDq3goleH5Q9ut8pbbgO2gs005KMa1h5h"
                />
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Cart;
