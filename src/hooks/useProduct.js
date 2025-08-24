import React, { useEffect, useState } from 'react'
import { getData } from '../api/product'


const useProduct = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        getData()
        .then((result) => {
          if (result?.products) setProducts(result.products);
        })
        .finally(() => setLoading(false));
      }, []);
  return {products, loading};
}

export default useProduct
