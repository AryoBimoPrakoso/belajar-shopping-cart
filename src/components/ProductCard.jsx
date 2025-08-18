import React from 'react'
import { getData } from "../api/product";
import { useEffect, useState } from "react";

const ProductCard = () => {
    const [products, setProduct] = useState([]);

    useEffect(() => {
        getData().then((result) => {
            if (result?.products) setProduct(result.products);
        });
    }, []);

  return (
    <>
      <div className="bg-red-500">
        <ul>
          {products.map(product => (
            <li key={product.id}>{product.brand}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default ProductCard
