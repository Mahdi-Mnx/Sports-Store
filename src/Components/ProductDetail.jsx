import React from "react";
import { useParams } from "react-router-dom";
import productData from "../Data/Data";

const ProductDetail = () => {
  const { id } = useParams();
  const product = productData.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto py-4 pt-20">
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      <img
        src={product.images[0]}
        alt={product.name}
        className="w-full h-auto object-cover rounded"
      />
      <p className="mt-4">${product.price.toFixed(2)}</p>
      <p className="mt-4">{product.description}</p>
    </div>
  );
};

export default ProductDetail;
