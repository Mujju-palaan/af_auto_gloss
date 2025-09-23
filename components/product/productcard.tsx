"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Product {
  product_id: number;
  image: string; // base64 string or URL
  title: string;
  reviews?: string;
  product_description: string;
  price: string;
  href?: string;
}

const Productcard = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <section className="bg-white text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4 gap-5 justify-between">
          {products.map((item) => (
            <div
              key={item.product_id}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden"
            >
              <Link href={`/product/${item.product_id}`}>
                <div className="relative w-full h-64">
                  <Image
                    src={item.image || "/default-product.jpg"}
                    alt={item.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </Link>

              <div className="p-5">
                <h5 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h5>

                {item.reviews && (
                  <div className="flex items-center mb-3">
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                      {item.reviews}
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">
                    ₹{item.price}
                  </span>
                  <Link
                    href={item.href || "#"}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Add to Cart
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Productcard;
