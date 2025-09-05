import { useState, useEffect } from "react";
import axios from "axios";
const Products = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setProducts(response.data);
      console.log(response.data)
    });
  };

  useEffect(fetchProducts, []);

  return (
    <div className="container">
      <h1>prodotti</h1>
    </div>
  );
};

export default Products;
