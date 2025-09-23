import React from "react";
import Image from 'next/image';


interface ProductDetailCardProps {
  product: {
    id: number;
    image: string;
    title: string;
    reviews?: string;
    product_description: string;
    price: string;
    href?: string;
  };
}

const Product_detailcard1: React.FC<ProductDetailCardProps> = ({ product }) => {
  return (
    <section className="bg-white 500 text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <Image
            src={product.image || '/default-product.jpg'}
            alt={product.title}
            width={600}
            height={600}
            className="lg:w-1/2 w-full lg:h-auto h-auto object-cover object-center rounded"
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">AF Auto Gloss</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.title}</h1>
            <p className="leading-relaxed">{product.product_description}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex ml-6 items-center">
                <span className="mr-3">Size</span>
                <div className="relative">
                  <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-500 text-base pl-3 pr-10">
                    <option>5L</option>
                    <option>10L</option>
                    <option>20L</option>
                  </select>
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">₹{product.price}</span>
              <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Buy</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product_detailcard1;
