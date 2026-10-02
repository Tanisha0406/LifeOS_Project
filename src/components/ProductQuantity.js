import React, { useState } from "react";

function ProductQuantity() {
  const [price] = useState(100);
  const [quantity, setQuantity] = useState(1);

  const decrease = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  return (
    <div>
      <h2>Product Quantity Calculator</h2>

      <p>Price: ₹{price}</p>

      <button onClick={decrease}>
        -
      </button>

      <span> Quantity: {quantity} </span>

      <button onClick={() => setQuantity(quantity + 1)}>
        +
      </button>

      <p>
        Total: ₹{price * quantity}
      </p>
    </div>
  );
}

export default ProductQuantity;