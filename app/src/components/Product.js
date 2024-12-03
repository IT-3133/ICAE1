import "../assets/CSS/layout.css";
import { useState } from "react";

export default function Product({ flowersdata, cartitems }) {
  const [quantities, setqty] = useState({});

  const handlechange = (e, id) => {
    const value = parseInt(e.target.value, 10) || 0;
    setqty((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <>
      {flowersdata.map((data) => (
        <div className="grid-item" id={data.id}>
          <div class="card">
            <img src={require("../assets/image/" + data.img)} alt={data.name} />
            <div class="card-body">
              <h5 class="card-title">Price:{data.price}</h5>
              <div class="quantity-container">
                <label for="quantity">Quantity:{data.qty}</label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  onChange={(e) => handlechange(e, data.id)}
                />
              </div>
              <button
                class="card-button"
                onClick={() => cartitems(data, quantities[data.id] || 0)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
