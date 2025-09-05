import { useState, useEffect } from "react";
import axios from "axios";
const Products = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setProducts(response.data);
      console.log(response.data);
    });
  };

  useEffect(fetchProducts, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>prodotti </h1>
        </div>
        {products.map((product) => {
          return (
            <div className="col-3">
              <div className="card" style={{ width: "18rem" }}>
                <img src={product.image} className="card-img-top" alt="" />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">
                    {products.category} {product.price}
                  </p>
                  <p>{product.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
