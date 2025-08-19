import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-[1000] bg-[#d6d6d6] h-[70px] w-full">
      <div className="flex h-full items-center justify-center">
        <Link to="/cart">
          <FaCartShopping className="w-[40px] hover:scale-130 transition ease-in duration-300" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
