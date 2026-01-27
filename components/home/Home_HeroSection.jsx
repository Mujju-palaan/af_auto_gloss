import Image from "next/image";
import React from "react";

const Home_HeroSection = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center gap-6 md:px-20 m-2">
      {/* Text Section */}
      <div className="md:w-1/2 w-full p-4">
        
        <h3 className="md:text-xl text-red-300 mt-2">
          Natural Auto Care Products Manufactured in India.
        </h3>

        <h3 className="md:text-xl text-red-300">
          Naturally Made Auto Care Products — Safe for Cars, Trusted by
          Professionals.
        </h3>

        <ul className="list-disc m-4 text-[14px]">
          <li>
            We are an Indian manufacturer of high-quality auto care products,
            developed using carefully selected raw materials and
            <strong className="text-red-300">
              {" "}
              natural formulations without harmful chemicals
            </strong>
            .
          </li>
          <li>
            Our products are designed to meet the daily needs of
            <strong className="text-red-300">
              {" "}
              car dealers, service centres, workshops, and car wash businesses,
            </strong>{" "}
            ensuring effective cleaning, superior shine, and complete safety for
            vehicle paint, interiors, and rubber parts.
          </li>
          <li>
            With a
            <strong className="text-red-300"> 1:10 dilution ratio,</strong> our
            products offer
            <strong className="text-red-300">
              {" "}
              high performance with low usage cost,
            </strong>{" "}
            helping businesses reduce expenses while delivering premium results
            to customers.
          </li>
          <li className="text-red-300">Safe for Vehicles. Smart for Business. Made in India.</li>
        </ul>
      </div>

      {/* Image Section */}
      <div className="relative md:w-1/2 w-[90%] h-[250px] md:h-[350px]">
        <Image
          src="/home/afautogloss-home-foam-wash-hero-section.jpg"
          alt="hero-section"
          fill
          className="object-cover rounded-lg"
          priority
        />
      </div>
    </div>
  );
};

export default Home_HeroSection;
