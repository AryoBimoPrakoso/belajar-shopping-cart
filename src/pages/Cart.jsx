import React from "react";
import { useCart } from "../context/CartContex";
import CardTotal from "../components/cardTotal";
import { motion } from "framer-motion";

// SVG
import cartSVG from "../assets/svg/cart.svg";
import { div } from "motion/react-client";

const Cart = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();

  return (
    <>
      {cart.length === 0 ? (
        <div className="h-screen flex items-center justify-center">
          <div className="w-full flex items-center justify-center p-10 h-full">
            <h2 className="flex justify-center items-center gap-4 text-5xl w-full text-center">
              <span>
                <img src={cartSVG} alt="Cart" className="w-14" />
              </span>
              Cart is empty🤷‍♂️
            </h2>
          </div>
        </div>
      ) : (
        <div className="p-10 mt-[70px]">
          <h1 className="text-2xl mb-6">Your Cart</h1>
          <div className="flex">
            <div className="flex flex-col w-full">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b py-4"
                >
                  <div className="flex items-center gap-4 w-full">
                    <img src={item.thumbnail} alt="" className="w-16 h-16" />
                    <div>
                      <h2>{item.title}</h2>
                      <p>${item.price}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 w-full ">
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
            <div className="w-1/2">
              <CardTotal />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
