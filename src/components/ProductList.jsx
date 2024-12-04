import React from "react";
import ProductCard from "@/components/ProductCard";

const ProductList = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 mt-7">
      {products.map((product) => (
        <ProductCard
          key={product._id}
          id={product._id}
          categoryId={product.categoryId}
          image={product.image}
          name={product.name}
          price={product.price}
          description={product.description}
          count={product.count}
        />
      ))}
    </div>
  );
};

export default ProductList;
