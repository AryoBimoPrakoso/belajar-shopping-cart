import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { getData } from "../api/product";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContex";
import { Star } from "lucide-react";
import Rating from "../components/Rating";

// SVG
import profileSVG from "../assets/svg/profile.svg";

// Icon
import { GoDotFill } from "react-icons/go";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const { id, title } = useParams();
  const { addToCart } = useCart();

  useEffect(() => {
    getData().then((result) => {
      if (result?.products) {
        const productDetail = result.products.find(
          (p) => p.id === parseInt(id)
        );
        setProduct(productDetail);
      }
    });
  }, [id, title]);

  return (
    <>
      {product && product ? (
        <div>
          <div className="w-full flex mt-[110px] p-14 overflow-hidden">
            <div className="mx-auto flex w-full">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-lg"
              />
              <div className="w-max flex flex-col gap-2">
                <div className="flex flex-col">
                  <h1 className="text-3xl">{product.title}</h1>
                  <p>{product.description}</p>
                  <h2 className="text-4xl py-4">${product.price}</h2>
                  <p>Stock : {product.stock}</p>
                  <div>
                    <Rating rating={product.rating} />
                  </div>
                </div>
                <div className="pt-8 flex flex-col">
                  <h2 className="text-xl border-b-1 pb-2">Details</h2>
                  <div className="pt-2">
                    <p>
                      <span className="opacity-50">Weight :</span>
                      {product.weight} g
                    </p>
                    <p>
                      <span className="opacity-50">Shipping :</span>
                      {product.shippingInformation}
                    </p>
                    <p>
                      <span className="opacity-50">Warranty :</span>
                      {product.warrantyInformation}
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full max-w-[400px] bg-[#e6e6e6] ml-14">
                <button
                  onClick={() => addToCart(product)}
                  className="px-4 py-2 bg-[#121212] text-white rounded-lg"
                >
                  klik ini dah
                </button>
              </div>
            </div>
          </div>
          <div className="w-full flex p-14 overflow-hidden">
            <div className="mx-auto flex flex-col w-full gap-4">
              <h2 className="text-2xl">Reviews</h2>
              <div className="w-full">
                <div className="">
                  <div className="flex flex-col p-4 px-4 w-full">
                    {product.reviews.map((review, index) => (
                      <div key={index} className="border-b-1 py-8 flex gap-4">
                        <div>
                          <img
                            src={profileSVG}
                            alt="ini gambar"
                            className="w-12"
                          />
                        </div>

                        <div className="flex flex-col">
                          <h3 className="flex items-center gap-2">
                            {review.reviewerName} <GoDotFill className="text-gray-400 text-[10px]" />
                            <span className="text-gray-400 text-xs">
                              {new Date(review.date).toLocaleDateString()}
                            </span>
                          </h3>
                          <Rating rating={review.rating} />
                          <p>{review.comment}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default ProductDetail;
