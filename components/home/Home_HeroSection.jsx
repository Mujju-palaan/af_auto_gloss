import Image from "next/image";
import React from "react";

const Home_HeroSection = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center gap-6 md:px-20 m-2">
      {/* Text Section */}
      <div className="md:w-1/2 w-full p-4">
        <h1 className="md:text-4xl text-xl font-semibold">
          Why is Regular Car Wash Important for your Vehicle?
        </h1>
        <p className="mt-4 text-gray-600 md:text-[16px] text-[12px] ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          doloremque saepe architecto maiores repudiandae amet perferendis
          repellendus, reprehenderit voluptas sequi.
        </p>
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
