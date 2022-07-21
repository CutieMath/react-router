import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  // progmatic navigation with replace
  let navigate = useNavigate();
  const handleSave = () => {
    navigate("/", { replace: true });
  };

  return (
    <div>
      <h1>Product Details - {id}</h1>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default ProductDetails;
