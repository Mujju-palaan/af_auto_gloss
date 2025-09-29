import React from "react";

interface TestimonialProps {
  id: string | number;
  avatar: string;
  name: string;
  title: string;
  quote: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  avatar,
  name,
  title,
  quote,
}) => {
  return (
    <>
      
        <li className="bg-gray-100 p-4 rounded-xl">
          <figure>
            <div className="flex items-center gap-x-4">
              <img src={avatar} className="w-16 h-16 rounded-full" />
              <div>
                <span className="block text-gray-800 font-semibold">
                  {name}
                </span>
                <span className="block text-gray-600 text-sm mt-0.5">
                  {title}
                </span>
              </div>
            </div>
            <blockquote>
              <p className="mt-6 text-gray-700">{quote}</p>
            </blockquote>
          </figure>
        </li>

    </>
  );
};

export default Testimonial;
