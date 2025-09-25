"use client";
import React from "react";
import ProductCard from "@/components/cards/Productcard";
import { ProductData } from "@/data/ProductData";

const Productcardpage = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-16 bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
        Our Products
      </h2>

      {/* ✅ Responsive grid layout */}
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {ProductData.map((product, index) => (
          <ProductCard
            key={index}
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

export default Productcardpage;
