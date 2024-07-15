import { products } from "../../data/products";
import React from "react";
import Product from "./Product";
import { addToCart, removeFromCart } from "../../helpers/";
export default function showcase() {
  return (
    <div
      style={{
        display: "flex",
        gap: "100px",
        flexWrap: "wrap",
      }}
    >
      {/* {products.map((pro) => (
        <div key={pro.id}>
          <p>Name : {pro.name}</p>
          <p>Price : {pro.price}</p>
          <p>Amount Left : {pro.amountLeft}</p>;
          <img
            src={pro.img}
            alt="img"
            style={{
              width: "250px",
            }}
          />
        </div>
      ))}; */}
      {products.map((pro, index) => (
        <Product
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          item={pro}
          isEateble={true}
          age={100}
          key={index}
        />
      ))}
      ;
    </div>
  );
}
