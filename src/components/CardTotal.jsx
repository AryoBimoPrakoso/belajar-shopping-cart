import React from "react";
import { useCart } from "../context/CartContex";

const CardTotal = () => {
  const { cart } = useCart();
  const totalPrice = cart.reduce((price, item) => {
    return price + item.price * item.quantity;
  },0);
  const priceTotal = totalPrice.toFixed(2);
  return (
    <div className="w-full p-14">
      <div className="bg-gray-200 p-14 rounded-xl">
        <h1 className="font-bold text-3xl">Total Harga</h1>
        <div className="flex justify-between pt-14">
          <h2 className="text-xl">Total</h2>
          <p>${priceTotal}</p>
        </div>
      </div>
    </div>
  );
};

export default CardTotal;
