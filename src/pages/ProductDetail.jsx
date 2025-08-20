import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { getData } from "../api/product";
import { data, useParams } from "react-router-dom";
import { useCart } from "../context/CartContex";

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
  }, [id,title]);

  return (
    <>
      <div className="mt-[110px]">
        {product ? (
          <div>
            <h1>{product.title}</h1>
            <button onClick={() => addToCart(product)}>klik ini dah</button>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default ProductDetail;
