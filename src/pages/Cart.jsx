import React from "react";
import { useCart } from "../context/CartContex";

const Cart = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();

  if (cart.length === 0) {
    return <h2 className="p-10 text-center mt-[70px]">Cart is empty 😢</h2>;
  }

  return (
    <div className="p-10 mt-[70px]">
      <h1 className="text-2xl mb-6">Your Cart</h1>
      {cart.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between border-b py-4"
        >
          <div className="flex items-center gap-4">
            <img src={item.thumbnail} alt="" className="w-16 h-16" />
            <div>
              <h2>{item.title}</h2>
              <p>${item.price}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className="px-2 bg-gray-300 rounded"
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="px-2 bg-gray-300 rounded"
            >
              +
            </button>
          </div>

          <button
            onClick={() => removeFromCart(item.id)}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
