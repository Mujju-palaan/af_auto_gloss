import React from "react";

const Hero = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
          <div>
            <div className="max-w-prose md:max-w-none">
              <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                Why is Regular Car Wash Important for your Vehicle?
              </h2>

              <p className="mt-4 text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloremque saepe
                architecto maiores repudiandae amet perferendis repellendus, reprehenderit voluptas
                sequi.
              </p>
            </div>
          </div>

          <div>
            <img
              src="https://www.slashgear.com/img/gallery/5-of-the-best-car-wash-soaps-for-your-vehicle/l-intro-1705512855.jpg"
              className="rounded-2xl "
              alt="img"
            />
          </div>
        </div>
      </div>
    </section>

  );
};

export default Hero;
