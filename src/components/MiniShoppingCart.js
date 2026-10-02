/*function QuantityControl({
  quantity,
  increase,
  decrease,
}) {
  return (
    <div>
      <button onClick={decrease}>
        -
      </button>

      <span> Quantity: {quantity} </span>

      <button onClick={increase}>
        +
      </button>
    </div>
  );
}

export default QuantityControl;*/
import React, { useState } from "react";

function MiniShoppingCart() {
  const [productName] = useState("Laptop");
  const [price] = useState(50000);
  const [quantity, setQuantity] = useState(1);

  const increase = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrease = () => {
    setQuantity((prev) =>
      Math.max(1, prev - 1)
    );
  };

  return (
    <div>
      <h2>Mini Shopping Cart</h2>

      <p>{productName}</p>

      <p>Price: ₹{price}</p>

      <QuantityControl
        quantity={quantity}
        increase={increase}
        decrease={decrease}
      />

      <p>
        Total: ₹{price * quantity}
      </p>
    </div>
  );
}

export default MiniShoppingCart;

