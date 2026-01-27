import React from "react";

const Heading_desc = ({ title, description }) => {
  return (
    <div className="flex flex-col md:gap-4 gap-2 font-serif text-center 
    md:px-40 px-4 md:py-12 py-4 md:mt-4 mt-6">
      <h1 className=" md:text-5xl text-2xl font-semibold text-white/80 ">{title}</h1>
      <p className="text-stone-500 md:text-2xl text-sm">{description}</p>
    </div>
  );
};

export default Heading_desc;