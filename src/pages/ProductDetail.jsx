import React, { useEffect, useState } from "react";
import { getData } from "../api/product";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContex";
import Rating from "../components/Rating";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle2Icon } from "lucide-react";

// SVG
import profileSVG from "../assets/svg/profile.svg";
import imgReviewSVG from "../assets/svg/gallery.svg";

// Icon
import { GoDotFill } from "react-icons/go";
import { FaPlus } from "react-icons/fa";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { id, title } = useParams();
  const { addToCart, alert } = useCart();

  const increaseQty = () => setQuantity((q) => q + 1);
  const decreaceQty = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

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
        <div className="">
          {alert && (
            <div className="fixed inset-0 mt-8 flex animate-pop-in justify-center z-50">
              <div>
                <Alert>
                  <CheckCircle2Icon />
                  <AlertTitle>{alert.title}</AlertTitle>
                  <AlertDescription>{alert.description}</AlertDescription>
                </Alert>
              </div>
            </div>
          )}
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
              {/* Add to cart */}
              <div className="w-full max-w-[400px] bg-[#e6e6e6] rounded-lg ml-14 justify-between flex flex-col p-14">
                <div className="flex flex-col justify-between h-full pb-8">
                  <div className="flex">
                    <div className="w-full">
                      <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="w-12"
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-md">{product.title}</p>
                      <p className="text-sm text-gray-500">
                        {product.description}
                      </p>
                    </div>
                  </div>
                  <div className="w-full bg-white items-center gap-2"></div>
                  <div className="flex flex-col">
                    <h2 className="text-gray-400">Subtotal</h2>
                    <h2 className="text-3xl">
                      ${(product.price * quantity).toFixed(2)}
                    </h2>
                  </div>
                </div>
                <div className="flex flex-col w-full gap-3">
                  <div className="flex justify-around px-4 py-2 border border-gray-400 text-black rounded-lg items-center">
                    <button className="cursor-pointer" onClick={decreaceQty}>
                      -
                    </button>
                    <span>{quantity}</span>
                    <button className="cursor-pointer" onClick={increaseQty}>
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => addToCart(product, quantity)}
                    className="px-4 py-2 bg-[#121212] text-white rounded-lg flex items-center justify-center gap-2 cursor-pointer hover:scale-105 transition ease-in-out duration-300 hover:shadow-md"
                  >
                    <span>
                      <FaPlus className="text-[12px]" />
                    </span>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex p-14 overflow-hidden">
            <div className="mx-auto flex flex-col w-full gap-4">
              <h2 className="text-2xl">Reviews</h2>
              <div className="w-full">
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
                          {review.reviewerName}{" "}
                          <GoDotFill className="text-gray-400 text-[10px]" />
                          <span className="text-gray-400 text-xs">
                            {new Date(review.date).toLocaleDateString()}
                          </span>
                        </h3>
                        <Rating rating={review.rating} />
                        <p>{review.comment}</p>
                        <img
                          src={imgReviewSVG}
                          className="w-12 py-2 opacity-50"
                          alt=""
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-full">
          <div className="flex justify-center items-center">
            <p>Loading...</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
