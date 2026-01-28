import React from "react";

const Heading_desc = ({ title, description, tClass, pClass }) => {
  return (
    <div
      className="flex flex-col md:gap-4 gap-2 font-serif text-center 
    md:px-40 px-4 md:py-12 py-4 md:mt-4 mt-6"
    >
      <h1
        className={`md:text-5xl text-2xl font-semibold ${tClass ? "" : "text-white/80"}`}
      >
        {title}
      </h1>
      <p className={` md:text-2xl text-sm ${pClass ? "" : "text-stone-500"}`}>
        {description}
      </p>
    </div>
  );
};

export default Heading_desc;
