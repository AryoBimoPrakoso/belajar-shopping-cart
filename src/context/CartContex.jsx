import React, { createContext, useState, useContext } from "react";

// 1. Buat context
const CartContext = createContext();

// 2. Buat provider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add product ke cart
  const addToCart = (product) => {
    // cek apakah sudah ada di cart
    const itemExist = cart.find((item) => item.id === product.id);
    if (itemExist) {
      // kalau sudah ada, tambahkan quantity
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // kalau belum ada, masukkan dengan quantity = 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    alert('berhasil ditambah!')
  };

  // Update jumlah
  const updateQuantity = (id, newQty) => {
    if (newQty <= 0) {
      removeFromCart(id);
    } else {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, quantity: newQty } : item
        )
      );
    }
  };

  // Remove product
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// 3. Hook supaya gampang dipakai
export const useCart = () => useContext(CartContext);
