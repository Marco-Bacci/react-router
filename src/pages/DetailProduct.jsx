import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const DetailProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({})

  useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/${id}`).then((resp)=>{
      setProduct(resp.data)
    })
  },[])

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h3>{product.title}</h3>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
