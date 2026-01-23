import { data } from "framer-motion/client";
import React from "react";

const Content = () => {
  const ContentData = [
    {
      id: 1,
      title: "Snow Foam Shampoo",
      description: "Rich thick foam, powerful cleaning, and a glossy finish.",
      link: "",
    },
    {
      id: 2,
      title: "Dashboard Cleaner",
      description:
        "Cleans, protects, and restores shine with a non-greasy finish. Keeps your car interior looking fresh and new.",
      link: "",
    },
    {
      id: 3,
      title: "Tyre Polish",
      description:
        "Restores deep black shine, protects from cracking, and keeps tyres looking new.",
      link: "",
    },
    {
      id: 4,
      title: "Glass Cleaner",
      description:
        "Streak-free shine, crystal-clear visibility, and long-lasting protection.",
      link: "",
    },
  ];

  return (
    <div>
      <section className=" body-font ">
        <div className="container px-5 md:py-10">
          <div className="flex flex-col text-center w-full md:mb-10">
            <h2 className="text-[14px] text-red-500 tracking-widest font-semibold title-font mb-1">
              AF AUTO GLOSS
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-red-600">
              Master Cleanse Reliac Heirloom
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed md:text-[16px] text-[12px]">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom prism
              food truck ugh squid celiac humblebrag.
            </p>
          </div>
          <div className="flex flex-wrap md:mt-2 mt-10">
            {ContentData.map((data) => (
              <div
                key={data.id}
                className="xl:w-1/4 lg:w-1/2 md:w-full px-8 border-l-2
                 border-gray-200 border-opacity-60"
              >
                <h2 className="text-lg sm:text-xl text-red-600 title-font mb-2
                font-semibold">
                  {data.title}
                </h2>
                <p className="leading-relaxed md:text-[16px] text-[12px] mb-4">
                  {data.description}
                </p>
                <a className="text-red-300 inline-flex items-center md:text-[14px] text-[12px] 
                mb-4 cursor-pointer">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            ))}
          </div>
          {/* <button className="flex mx-auto mt-16 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Button</button> */}
        </div>
      </section>
    </div>
  );
};

export default Content;
