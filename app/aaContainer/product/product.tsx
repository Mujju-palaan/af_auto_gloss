"use client";
import React, { useState } from "react";
import ProductCard from "@/components/cards/Productcard";
import Productdetails from "@/components/cards/productdetail";
import { ProductData } from "@/data/ProductData";

interface Product {
  id: number;
  title: string;
  price: string;
  image: string;
  reviews?: string;
  product_description: string;
}

const Productall: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <>
    

      {!selectedProduct ? (
      // ✅ Show Product Grid
      <section className="py-12 px-4 sm:px-6 lg:px-16 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
        Our Products
      </h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {ProductData.map((product, index) => (
            <div
              key={index}
              onClick={() => setSelectedProduct(product)} // 👈 open details
              className="cursor-pointer"
            >
              <ProductCard
                title={product.title}
                price={product.price}
                image={product.image}
              />
            </div>
          ))}
        </div>
      </section>

      ) : (
        // ✅ Show Product Detail for selected product
      <section className="py-8 px-4 sm:px-6 lg:px-16 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
        Product details
      </h2>
        <div>
          <button
            onClick={() => setSelectedProduct(null)} // 👈 go back to grid
            className="mb-6 text-blue-600 hover:underline"
          >
            ← Back
          </button>

          <Productdetails
            title={selectedProduct.title}
            image={selectedProduct.image}
            reviews={selectedProduct.reviews}
            price={selectedProduct.price}
            product_description={selectedProduct.product_description}
          />
        </div>
      </section>
      )}
    </>
  );
};

export default Productall;
