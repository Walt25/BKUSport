import { useEffect, useState } from "react";
import { getProducts } from "../api/product";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  
    useEffect(() => {
      getProducts().then(console.log);
    })
    return <></>
}

export default ProductPage