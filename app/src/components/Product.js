import "../assets/CSS/layout.css";
import { useState } from "react";

export default function Product({ flowersdata, cartitems }) {
  const [quantities, setQuantities] = useState({});

  // Update quantity for the respective flower
  const handleQuantityChange = (e, name) => {
    const value = parseInt(e.target.value, 10) || 0;
    setQuantities((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      {flowersdata.map((data) => (
        <div className="grid-item" key={data.id}>
          <div className="card">
            <img src={require(`../assets/image/${data.img}`)} alt={data.name} />
            <div className="card-body">
              <h5 className="card-title">
                {data.name} - {data.price}
              </h5>
              <div className="quantity-container">
                <label>Quantity:</label>
                <input
                  type="number"
                  id={`quantity-${data.id}`}
                  value={quantities[data.id] || ""}
                  onChange={(e) => handleQuantityChange(e, data.id)}
                />
              </div>
              <button
                className="card-button"
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
