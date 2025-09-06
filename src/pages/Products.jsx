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
          const {id, description, image, title, category, price} = product
          return (
            <div className="col-4" key={id}>
              <div className="card p-3 h-100 bg-body-secondary position-relative" style={{ width: "18rem" }}>
                <div className="overlay position-absolute ">
                  <h3 className="text-center">Description</h3>
                <p>{description}</p>
              </div>
                <img src={image} className="card-img-top" alt="" />
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">
                    <span className="text-danger fw-bold">category:</span> {category} 
                  </p>
                  <p><span className="text-success fw-bold">price:</span> {price}$</p>
                  
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
