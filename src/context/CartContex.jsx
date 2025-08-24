import React, { createContext, useState, useContext, useEffect } from "react";

// 1. Buat context
const CartContext = createContext();

// 2. Buat provider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cart');
    console.log("DEBUG : Data cart dari localStorage = ", saved); // Cek isi stringnya
    if (saved && saved !== 'undefined') {
      try {
        const parsed = JSON.parse(saved);
        console.log("DEBUG: Setelah diparse = ", parsed); // Cek hasil array
        return Array.isArray(parsed) ? parsed : [];
      } catch (error) {
        console.error("DEBUG : Error parsing localStorage : ", error);
        return[];
      }
    }
    console.log("DEBUG: Tidak ada cart di localStorage atau data invalid");
    return [];
  });

  // Sinkronkan cart ke localStorage setiap kali cart berubah
  useEffect(() => {
    console.log("DEBUG : Cart state berubah = ", cart); //Lihat isi state terbaru
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log("DEBUG: Cart disimpan ke localStorage");
  }, [cart]);

  
  // Add product ke cart
  const addToCart = (product, qty) => {
    // cek apakah sudah ada di cart
    const itemExist = cart.find((item) => item.id === product.id);
    if (itemExist) {
      // kalau sudah ada, tambahkan quantity
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + qty }
            : item
        )
      );
    } else {
      // kalau belum ada, masukkan dengan quantity = 1
      setCart([...cart, { ...product, quantity: qty }]);
    }
    alert("berhasil ditambah!");
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
    <CartContext.Provider
      value={{ cart, setCart, addToCart, updateQuantity, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

// 3. Hook supaya gampang dipakai
export const useCart = () => useContext(CartContext);
