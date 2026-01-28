import React from "react";

const PolicyBanner = ({title, date}) => {
  return (
    <div className="relative w-full overflow-hidden bg-white">
      {/* Text Content */}
      <div
        className="
          absolute inset-0 z-10
          flex flex-col md:gap-4 gap-2 items-center justify-center
          text-white text-center
          pointer-events-none
        "
      >
        <h1 className="text-3xl md:text-5xl font-semibold">
          {title}
        </h1>
        <p className="text-sm md:text-base opacity-90 mt-2">
          {date}
        </p>
      </div>

      {/* Wave SVG */}
      <svg
        className="block md:h-[200px] h-30 w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
          className="fill-red-600"
        />
      </svg>
    </div>
  );
};

export default PolicyBanner;