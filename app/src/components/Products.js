import "../assets/CSS/layout.css";
import Product from "./Product";
import { flowers } from "./FlowerDB";
import Cart from "./Cart";

export default function Products() {
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
            <Product flowersdata={flowers}></Product>
          }
        </div>
      </div>
      <div className="item3">
        {
          //cart
          <Cart></Cart>
        }
      </div>
    </>
  );
}
