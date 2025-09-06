import React from "react";

const ProductCard = ({info}) => {
  const { id, description, image, title, category, price } = info;
  return (
    <div className="col-4">
      <div
        className="card p-3 h-100 bg-body-secondary position-relative"
        style={{ width: "18rem" }}
      >
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
          <p>
            <span className="text-success fw-bold">price:</span> {price}$
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
