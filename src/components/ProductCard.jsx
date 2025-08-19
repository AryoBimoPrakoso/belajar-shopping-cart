import React, { useEffect, useState } from 'react'
import { getData } from "../api/product";
import { useCart } from '../context/CartContex';

const ProductCard = () => {
    const [products, setProduct] = useState([]);
    // Ambil dari context
    const { addToCart } = useCart();

    useEffect(() => {
        getData().then((result) => {
            if (result?.products) setProduct(result.products);
        });
    }, []);

  return (
    <>
      <div className="h-full">
        <div className='p-14'>
          {products.map(product => (
            <div className='bg-red-500 flex flex-col text-center items-center w-max' key={product.id}>
              <img src={product.thumbnail} alt="" />
              <h1>{product.title}</h1>
              <p>{product.price}</p>
              <button onClick={() => addToCart(product)} className='bg-white px-4 py-2 rounded-md cursor-pointer hover:scale-110 transition ease-in-out duration-300 mt-4'>Add to cart!</button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
} 

export default ProductCard
