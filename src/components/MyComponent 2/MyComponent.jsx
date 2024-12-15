import React, { useState } from "react";
import "./MyComponent.css";

function MyComponent() {
  const [name, setName] = useState("Guest");
  const [payment, setPayment] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [shipping, setShipping] = useState("Delivery");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleQuatityChange(e) {
    setQuantity(e.target.value);
  }
  function handleCommentChange(e) {
    setComment(e.target.value);
  }
  function handlePaymentChange(e) {
    setPayment(e.target.value);
  }
  function handleShippingChange(e) {
    setShipping(e.target.value);
  }

  return (
    <div>
      <input value={name} onChange={handleNameChange} />
      <p>Name: {name}</p>

      <input type="number" value={quantity} onChange={handleQuatityChange} />
      <p>Quantity: {quantity}</p>

      <textarea
        value={comment}
        onChange={handleCommentChange}
        placeholder="Enter delivery Instructions"
      />
      <p>Comment: {Comment}</p>
      <select value={payment} onChange={handlePaymentChange}>
        <option value="">select an option</option>
        <option value="visa">Visa</option>
        <option value="Mastercard">MasterCard</option>
        <option value="Giftcard">Giftcard</option>
      </select>
      <p>Payment: {payment}</p>

      <label>
        <input
          type="radio"
          value="Pick up"
          checked={shipping === "Pick up"}
          onChange={handleShippingChange}
        />
        Pick Up
      </label>

      <label>
        <input
          type="radio"
          value="Delivery"
          checked={shipping === "Delivery"}
          onChange={handleShippingChange}
        />
        Delivery
      </label>

      <p>Shipping: {shipping}</p>
    </div>
  );
}
export default MyComponent;
