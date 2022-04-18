import React from "react";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { name, img, description, price } = service;
  const navigate = useNavigate();

  const navigateToCheckout = () => {
    navigate(`/checkout`);
  };
  return (
    <div class="card shadow-sm border-0">
      <img src={img} class="card-img-top" style={{height: 180}} alt={name} />
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p>Price: {price}</p>
        <p class="card-text">{description}</p>
        <button onClick={() => navigateToCheckout()} class="btn btn-outline-primary">
          Learn Lesson
        </button>
      </div>
    </div>
  );
};

export default Service;
