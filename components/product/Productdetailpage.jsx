"use client";
import React from "react";
import ProductdetailsCard from "@/components/product/productdetailCard";
import { ProductData } from "@/data/ProductData";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

const Productdetailpage = () => {
  const searchParams = useSearchParams();
  const selectedSlug = searchParams.get("product");

  const refs = useRef({});

  // Scroll to selected service
  useEffect(() => {
    if (selectedSlug && refs.current[selectedSlug]) {
      refs.current[selectedSlug].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [selectedSlug]);
  return (
    <div>
      {ProductData.map((product) => (
        <ProductdetailsCard
          key={product.id}
          ref={(el) => (refs.current[String(product.id)] = el)}
          title={product.title}
          image={product.image}
          reviews={product.reviews}
          price={product.price}
          product_description={product.product_description}
        />
      ))}
    </div>
  );
};

export default Productdetailpage;
