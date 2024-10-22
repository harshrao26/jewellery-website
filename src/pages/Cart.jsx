import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Product 1", price: 100, quantity: 1 },
    { id: 2, name: "Product 2", price: 200, quantity: 2 },
    { id: 3, name: "Product 3", price: 150, quantity: 1 },
  ]);

  const navigate = useNavigate();

  const calculateDiscount = (total) => total * 0.1; // 10% discount
  const calculateGST = (total) => total * 0.18; // 18% GST

  const calculateTotal = () => {
    const subTotal = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const discount = calculateDiscount(subTotal);
    const gst = calculateGST(subTotal - discount);
    return subTotal - discount + gst;
  };

  const handleCheckout = () => {
    navigate("/delivery");
  };

  return (
    <div className="flex flex-col lg:flex-row p-4 pt-28 gap-8">
      {/* Left Side: Cart Items */}
      <div className="w-full lg:w-2/3 p-4 bg-white rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center mb-4 border-b pb-2"
          >
            <span>{item.name}</span>
            <span>₹{item.price}</span>
            <span>Quantity: {item.quantity}</span>
          </div>
        ))}
      </div>

      {/* Right Side: Pricing Details */}
      <div className="w-full lg:w-1/3 p-4 bg-gray-100  rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Summary</h2>
        <div className="mb-2 flex justify-between">
          <span>Subtotal:</span>
          <span>
            ₹{cartItems
              .reduce((sum, item) => sum + item.price * item.quantity, 0)
              .toFixed(2)}
          </span>
        </div>
        <div className="mb-2 flex justify-between">
          <span>Discount (10%):</span>
          <span>
            ₹{calculateDiscount(
              cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
            ).toFixed(2)}
          </span>
        </div>
        <div className="mb-2 flex justify-between">
          <span>GST (18%):</span>
          <span>
            ₹{calculateGST(
              cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0) -
                calculateDiscount(
                  cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
                )
            ).toFixed(2)}
          </span>
        </div>
        <div className="mb-4 flex justify-between">
          <span className="font-bold">Total:</span>
          <span>₹{calculateTotal().toFixed(2)}</span>
        </div>
        <button
          onClick={handleCheckout}
          className="bg-zinc-800 hover:bg-zinc-700 text-white w-full px-4 py-2 rounded"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
