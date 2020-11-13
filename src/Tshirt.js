import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardHeader,
  CardFooter,
} from "reactstrap";
import { FaRupeeSign } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

export const Tshirt = (props) => {
  const [cart, setCart] = useContext(CartContext);

  const addToCart = () => {
    const tshirt = {
      name: props.name,
      image: props.image,
      price: props.price,
      count: 1,
    };
    setCart((currentState) => [...currentState, tshirt]);
  };
  const handleHeart = () => {
    console.log(cart);
  };
  return (
    <div className="col-sm-6">
      <Card className="mb-3">
        {/* <CardHeader>
          <h2 className={props.color}>{props.name}</h2>
        </CardHeader> */}
        <CardBody>
          <FaRegHeart
            onClick={handleHeart}
            className="float-right"
            style={{
              fontSize: "30px",
              color: "rgb(144 137 137)",
              cursor: "pointer",
            }}
          />
          <div className="text-center">
            <img src={props.image} alert="" height="300px" />
          </div>
          <div className="text-right">
            <h5>
              <FaRupeeSign />
              {props.price}
            </h5>
          </div>
          <h5 className={props.color}>{props.name}</h5>
          <h6> Size : {props.size}</h6>
        </CardBody>
        <CardFooter>
          <div className="text-right">
            <button
              className="btn"
              style={{ backgroundColor: "#648fce", color: "#fff" }}
              onClick={addToCart}
            >
              Add to cart
            </button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};
