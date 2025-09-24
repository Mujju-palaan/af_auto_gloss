import React from "react";

interface BlogcardProps {
  image: string;
  date: string;
  question: string;
  answer: string;
}

const Blogcard: React.FC<BlogcardProps> = ({ image, date, question, answer }) => {
  return (
    <div className="flex justify-center p-4">
      <article className="w-full max-w-[464px] md:max-w-[528px] lg:max-w-[500px] overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg bg-white">
        <img
          alt={question}
          src={image}
          className="h-52 w-full object-cover"
        />

        <div className="p-4 sm:p-6">
          <time dateTime={date} className="block text-xs text-gray-500">
            {date}
          </time>

          <a href="#">
            <h3 className="mt-0.5 text-lg font-semibold text-gray-900">
              {question}
            </h3>
          </a>

          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-gray-500">
            {answer}
          </p>

          <a href="#" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
            Find out more

            <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
              &rarr;
            </span>
          </a>
        </div>
      </article>
    </div>
  );
};

export default Blogcard;
