import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Product Details - {id}</h1>
      <button onClick={this.handleSave}>Save</button>
    </div>
  );
};

export default ProductDetails;
