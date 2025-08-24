import React from "react";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="mt-[100px] flex flex-col">
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.8 }}
      >
        <Hero />
        <ProductCard />
      </motion.div>
    </div>
  );
};

export default Home;
