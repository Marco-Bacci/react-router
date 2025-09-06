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
      <div className="row g-3">
        <div className="col-12">
          <h2 className="text-success">prodotti </h2>
        </div>
        {products.map((product) => {
          return (
            <div className="col-4" key={product.id}>
              <div className="card p-3 h-100 bg-body-secondary" style={{ width: "18rem" }}>
                <img src={product.image} className="card-img-top" alt="" />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">
                    <span className="text-danger fw-bold">category:</span> {product.category} 
                  </p>
                  <p><span className="text-success fw-bold">price:</span> {product.price}$</p>
                  {/* <p>{product.description}</p> */}
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
