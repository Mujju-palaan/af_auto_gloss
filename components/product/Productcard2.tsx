"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Product {
  product_id: number;
  image: string; // base64 string or URL
  title: string;
  reviews?: string;
  product_description: string;
  price: string;
  href?: string;
}

const Productcard2 = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("/api/products");
      const data = await res.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <section className="bg-white text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {products.map((product) => (  // <-- iteration variable is 'product'
            <div key={product.product_id} className="p-4 md:w-1/2 lg:w-1/4 w-full">
              <div className="h-full bg-white rounded-lg shadow-lg overflow-hidden">
                <Link
                  href={`/product/${product.product_id}`} // <-- use 'product' here
                  className="block relative w-full h-64"
                >
                  <Image
                    src={product.image || "/default-product.jpg"}
                    alt={product.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </Link>
                <div className="p-4">
                  <h3 className="text-gray-500 text-xs tracking-widest mb-1">
                    CATEGORY
                  </h3>
                  <h2 className="text-gray-900 text-lg font-medium">
                    {product.title}
                  </h2>
                  <p className="mt-2 font-semibold">₹{product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Productcard2;
