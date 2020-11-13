import React, { Children, useContext } from "react";
import { Tshirt } from "./Tshirt";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useHistory } from "react-router-dom";

export const TshirtList = () => {
  const [cart, setCart] = useContext(CartContext);

  const database = [
    {
      name: "Grey Cotton Kurta",
      price: 699.0,
      color: "text-danger",
      size: "S,M,L,XL",
      image: "https://sc01.alicdn.com/kf/UT8Y7yzXWNXXXagOFbXW.jpg_350x350.jpg",
      id: 1,
    },
    {
      name: "Yellow Kurta",
      price: 324.0,
      color: "text-warning",
      size: "S,M,L,XL",
      image:
        "https://assets.ajio.com/medias/sys_master/root/h64/h5c/17015114104862/-473Wx593H-461197561-yellow-MODEL.jpg",
      id: 2,
    },
    {
      name: "Ajio Panelled Band Collar Kurta",
      price: 528.99,
      color: "text-primary",
      size: "S,M,L,XL",
      image:
        "https://assets.ajio.com/medias/sys_master/root/hbd/h06/15877320441886/-473Wx593H-461046752-white-MODEL.jpg",
      id: 3,
    },
    {
      name: "Cotton Silk Regular Fit Sel",
      price: 349.99,
      color: "text-dark",
      size: "S,M,L,XL",
      image:
        "https://imshopping.rediff.com/imgshop/800-1280/shopping/pixs/31925/1/1_5e47eae61d6e9._limited-edition-cotton-silk-regular-fit-self-design-kurta-pajama-code-akakkuset0053-.jpg",
      id: 4,
    },
  ];
  console.log(cart);

  return (
    <>
      <div className="">
        <div
          className="text-center"
          style={{
            border: "1px solid #000",
            marginBottom: "20px",
            color: "#fff",
            fontWeight: "bolder",
          }}
        >
          <h3>Nettantra Shopping Cart</h3>
        </div>
      </div>
      <div className="text-right">
        <Link to="/cart">
          <FaShoppingCart
            style={{
              fontSize: "20px",
              marginRight: "3px",
              cursor: "pointer",
            }}
            // onClick={onCart}
          />
        </Link>
        {cart.length}
      </div>
      <div className="row">
        {database.map((item) => (
          <Tshirt
            color={item.color}
            name={item.name}
            price={item.price}
            image={item.image}
            size={item.size}
            key={item.id}
          />
        ))}
      </div>
      {/* <div className="text-right">
        <Link to="/cart">
          <FaShoppingCart
            style={{
              fontSize: "20px",
              marginRight: "3px",
              cursor: "pointer",
            }}
            // onClick={onCart}
          />
        </Link>
        {cart.length}
      </div> */}
    </>
  );
};
