import Link from "next/link";
import React from "react";

const ProductCard = ({ id, image, title, price, category }) => {
  return (
    <div
      className="flex flex-col bg-white rounded-lg overflow-hidden 
      shadow-xl cursor-pointer"
    >
      {/* Product Image */}
      <div className="w-full h-full overflow-hidden">
        {" "}
        {/* ⬅️ increased from h-56 to h-80 */}
        <img className="w-full h-full object-contain" src={image} alt={title} />
      </div>

      {/* Product Details */}
      <div className="px-4 py-2 text-black">
        {category && (
          <h3 className="text-gray-500 text-xs uppercase tracking-widest mb-1">
            {category}
          </h3>
        )}
        <h2 className="text-lg font-semibold ">
          {title}
        </h2>
        <div className="flex justify-between mt-1 text-gray-700 font-bold">
          <p>₹{price}</p>
          <p className="text-red-700">
            <Link href={`/product?product=${id}`}>Show More →</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
