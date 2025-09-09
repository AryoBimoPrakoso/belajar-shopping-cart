import React from "react";
import { Link } from "react-router-dom";
import storeSVG from "../assets/svg/shop.svg";
import useProduct from "../hooks/useProduct";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const ProductCard = () => {
  const { products, loading } = useProduct();

  return (
    <>
      {loading ? (
        <div className="h-full w-4/5 mx-auto">
          <div className="p-14 w-full grid grid-flow-row grid-cols-4 gap-4">
            {Array(8)
              .fill()
              .map((_, index) => (
                <div
                  key={index}
                  className="border border-gray-300 rounded-xl p-4"
                >
                  <SkeletonTheme baseColor="#e0e0e0" highlightColor="#f5f5f5">
                    <div className="flex w-full p-4 bg-gray-200 rounded-xl">
                      <Skeleton height={150} width="100%" />
                    </div>
                    <div className="mt-6">
                      <Skeleton height={24} width="80%" />
                      <Skeleton height={20} width="40%" className="mt-2" />
                      <Skeleton height={20} width="60%" className="mt-2" />
                    </div>
                  </SkeletonTheme>
                </div>
              ))}
          </div>
        </div>
      ) : (
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
                      <p className="text-2xl text-[#121212] font-semibold">
                        ${product.price}
                      </p>
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
      )}
    </>
  );
};

export default ProductCard;
