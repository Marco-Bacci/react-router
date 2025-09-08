import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const DetailProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((resp) => {
      setProduct(resp.data);
    });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center p-3">
          <h3>{product.title}</h3>
        </div>
        <img src={product.image} alt="image" />
        <p className="text-center"><span className="text-danger fw-bold">Category:</span>{product.category} <span className="text-success fw-bold">Price:</span> {product.price}$ </p>
        
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default DetailProduct;
