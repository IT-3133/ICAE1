import "../assets/CSS/layout.css";
import Product from "./Product";
import { flowers } from "./FlowerDB";
import Cart from "./Cart";
import { useState } from "react";

export default function Products() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (flower, quantity) => {
    if (quantity > 0) {
      setCartItems((prev) => {
        const existing = prev.find((item) => item.id === flower.id);
        if (existing) {
          return prev.map((item) =>
            item.id === flower.id ? { ...item, qty: item.qty + quantity } : item
          );
        }
        return [...prev, { ...flower, qty: quantity }];
      });
    }
  };
  return (
    <>
      <div className="item1">
        <h1>Flower Shop</h1>
      </div>
      <div className="item2">
        <h4 className="card-title">Buy flowers</h4>
        <div className="grid-container">
          {
            //product
            <Product flowersdata={flowers} cartitems={addToCart}></Product>
          }
        </div>
      </div>
      <div className="item3">
        {
          //cart
          <Cart cartItems={cartItems}></Cart>
        }
      </div>
    </>
  );
}
