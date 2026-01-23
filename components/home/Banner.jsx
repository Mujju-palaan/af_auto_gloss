import Link from "next/link";
import React from "react";
import MotionButton from "../MotionButton";

const Banner = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        src="/afautogloss-best-service-products.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20 flex items-center px-6 md:px-35">
        <div className="flex flex-col gap-6 text-white max-w-xl  md:items-end text-center md:text-right">
          <p className="text-sm md:text-base tracking-widest uppercase text-white/80">
            Premium Auto Care
          </p>

          <h1 className="text-2xl md:text-5xl font-bold leading-tight">
            Shine As You Drive
          </h1>

          <p className="text-sm md:text-lg text-white/80">
            Professional car detailing that protects, restores, and enhances
            your vehicle’s finish.
          </p>

          {/* CTA */}
          {/* <Link href="/book-now">
            <MotionButton className="px-6 py-3 text-lg">
              Book Now
            </MotionButton>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
