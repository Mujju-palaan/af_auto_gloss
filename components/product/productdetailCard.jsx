import Link from "next/link";
import React, { forwardRef } from "react";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";

const ProductdetailsCard = forwardRef(
  ({ image, title, price, category, reviews, product_description }, ref) => {
    return (
      <div ref={ref}>
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-4 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                className="lg:w-1/2 w-full lg:h-auto sm:h-full object-cover object-center rounded"
                src={image}
                alt={title}
              />

              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-red-300 tracking-widest">
                  AF AUTOGLOSS
                </h2>

                <h1 className="text-red-700 text-2xl sm:text-3xl md:text-4xl font-semibold mb-1">
                  {title}
                </h1>

                <div className="flex mb-4">
                  <span className="flex items-center">
                    {/* stars */}
                    <span className="flex gap-1 text-yellow-500">
                      {Array.from({ length: 5 }).map((_, i) =>
                        i < reviews ? (
                          <IoIosStar key={i} />
                        ) : (
                          <IoIosStarOutline key={i} />
                        ),
                      )}
                    </span>
                    <span className="text-gray-600 ml-3">{`${reviews} Star Rating`}</span>
                  </span>
                </div>

                <p className="leading-relaxed text-white/60 text-[12px] sm:text-base md:text-lg">
                  {product_description}
                </p>

                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                  <div className="flex md:ml-6 items-center md:text-base">
                    <span className="mr-3 text-white">Liters</span>
                    <select className="rounded border border-gray-300 py-2 pl-3 pr-10">
                      <option>10L</option>
                      <option>20L</option>
                      <option>50L</option>
                      <option>100L</option>
                    </select>
                  </div>
                </div>

                <div className="flex">
                  <span className="font-semibold text-2xl text-white">
                    ₹{price}
                  </span>

                  <Link
                    href="https://wa.me/9966004662"
                    target="_blank"
                    className="ml-auto text-white bg-red-700 py-2 px-6 hover:bg-red-800 rounded"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  },
);

ProductdetailsCard.displayName = "ProductdetailsCard";

export default ProductdetailsCard;
