import React from "react";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { name, img, description, price } = service;
  const navigate = useNavigate();

  const navigateToCheckout = () => {
    navigate(`/checkout`);
  };
  return (
    <div className="card shadow-sm border-0">
      <img src={img} className="card-img-top" style={{height: 180}} alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p>Price: {price}</p>
        <p className="card-text">{description}</p>
        <button onClick={() => navigateToCheckout()} className="btn btn-outline-primary">
          Learn Lesson
        </button>
      </div>
    </div>
  );
};

export default Service;
