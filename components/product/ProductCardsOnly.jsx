"use client";
import React from "react";
import ProductCard from "@/components/product/ProductCard";
import { ProductData } from "@/data/ProductData";

const ProductCardsOnly = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-16 min-h-screen">
      <h2 className="text-4xl text-white font-bold text-center mb-12">
        Our Products
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {ProductData.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            // category={product.category}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductCardsOnly;
