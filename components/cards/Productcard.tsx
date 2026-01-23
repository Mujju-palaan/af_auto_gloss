import React from "react";

interface ProductCardProps {
  image: string;
  title: string;
  price: string | number;
  category?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  price,
  category,
}) => {
  return (
    <div
      className="flex flex-col dark:bg-gray-800 rounded-lg overflow-hidden 
      shadow-xl cursor-pointer"
    >
      {/* Product Image */}
      <div className="w-full h-full overflow-hidden">
        {" "}
        {/* ⬅️ increased from h-56 to h-80 */}
        <img
          className="w-full h-full object-contain"
          src={image}
          alt={title}
        />
      </div>

      {/* Product Details */}
      <div className="px-4 py-2">
        {category && (
          <h3 className="text-gray-500 text-xs uppercase tracking-widest mb-1">
            {category}
          </h3>
        )}
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </h2>
        <p className="mt-1 text-gray-700 dark:text-gray-300 font-bold">
          ₹{price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
