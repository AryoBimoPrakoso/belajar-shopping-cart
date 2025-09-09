import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";

// SVG
import cartSVG from "../assets/svg/cart.svg"

const Navbar = () => {
    const [nav, setNav] = useState(false);
  
    useEffect(() => {
      const handleBlur = () => {
        if (window.scrollY >= 100){
          setNav(true);
        } else {
          setNav(false);
        }
      };
  
      window.addEventListener("scroll", handleBlur);
  
      // Optional cleanup
      return () => window.removeEventListener("scroll", handleBlur);
    }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 z-[1000] h-[70px] w-full ${nav ? "backdrop-blur-2xl" : ""}`}>
      <div className="flex h-full items-center justify-between px-14 py-8">
        
        <Link to="/">
          <h1 className="text-5xl MonsieurFont">fragrances</h1>
        </Link>
        <Link to="/cart" className="flex gap-2">
          <img src={cartSVG} className="w-[24px]" /><p>Cart</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
