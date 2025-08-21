import React, { useEffect, useState } from "react";
import { getData } from "../api/product";
import { Link } from "react-router-dom";
import storeSVG from "../assets/svg/shop.svg";


const ProductCard = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    getData().then((result) => {
      if (result?.products) setProduct(result.products);
    });
  }, []);

  return (
    <>
      <div className="h-full w-4/5 mx-auto">
        <div className="p-14 w-full grid grid-flow-row grid-cols-4 gap-4">
          {products.map((product) => (
            <div
              className="border border-gray-300 rounded-xl p-4 hover:shadow-md hover:scale-102 transition ease-in duration-300"
              key={product.id}
            >
              <Link to={`/product/${product.id}/${product.title}`}>
                <div className="flex w-full p-4 bg-[#e6e6e6] rounded-xl">
                  <img src={product.thumbnail} alt={product.title} />
                </div>
                <div className="mt-6">
                  <h1 className="text-xl">{product.title}</h1>
                  <div className="rounded-lg w-max p-2">
                    <p className="text-2xl text-[#121212] font-semibold">${product.price}</p>
                  </div>

                  <div className="mt-4 flex flex-col gap-2">
                    <p className="opacity-70">⭐{product.rating}</p>
                    <div className="flex gap-1 items-center">
                      <img src={storeSVG} alt="Store Icon" className="w-6" />
                      <p className="opacity-70">{product.brand}</p>
                    </div>
                  </div>
                  
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
