import React from "react";
import { useCart } from "../context/CartContex";

const CardTotal = () => {
  const { cart } = useCart();
  const totalPrice = cart.reduce((price, item) => {
    return price + item.price * item.quantity;
  }, 0);
  const priceTotal = totalPrice.toFixed(2);
  console.log("ini cart dari card total :", cart);
  return (
    <div className="w-full p-14">
      <div className="flex flex-col bg-gray-200 p-12 rounded-xl">
        <h1 className="font-bold text-3xl">Your Cart Overview</h1>
        <div className="flex justify-between pt-14">
          <h2 className="text-xl">Total</h2>
          <p className="text-2xl font-semibold">${priceTotal}</p>
        </div>
        <div className="w-full pt-8">
          <button className="px-4 py-2 bg-[#121212] text-white rounded-lg flex items-center justify-center gap-2 cursor-pointer hover:scale-105 transition ease-in-out duration-300 hover:shadow-md w-full">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardTotal;
