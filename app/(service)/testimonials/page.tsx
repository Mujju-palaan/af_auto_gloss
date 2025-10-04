import React from "react";
import TestimonialPage from "@/app/aaContainer/service/testimonial/TestimonialPage";

const Testimonials = () => {
  return (
    <div className="bg-white 500">
      <section className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="max-w-xl sm:text-center md:mx-auto">
            <h3 className="text-center text-gray-800 text-3xl font-semibold sm:text-4xl">
              See what others saying about us
            </h3>
            <p  className="text-center mt-3 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et
              est hendrerit, porta nunc vitae, gravida justo. Nunc fermentum
              magna lorem, euismod volutpat arcu volutpat et.
            </p>
          </div>

          <div>
            <TestimonialPage />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
