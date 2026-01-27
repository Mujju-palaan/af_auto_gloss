"use client";
import Image from "next/image";
import Heading_desc from "../../../components/Heading_desc";
import ServiceData from "../../../data/ServiceData";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

const ServicePage = () => {
  const searchParams = useSearchParams();
  const selectedSlug = searchParams.get("service");

  const refs = useRef({});

  // Scroll to selected service
  useEffect(() => {
    if (selectedSlug && refs.current[selectedSlug]) {
      refs.current[selectedSlug].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [selectedSlug]);

  return (
    <>
      <Heading_desc
        title={`Our Services`}
        description={`We’re a crew of strategists, creators, and marketers helping fearless brands break through the noise and shine with purpose.`}
      />
      <div className="flex flex-col md:gap-4 ">
        {ServiceData.map((e) => (
          <div
            key={e.id}
            ref={(el) => (refs.current[e.slug] = el)}
            className="md:px-30 p-6 md:flex xs:flex-col md:gap-18"
          >
            <div className="flex flex-col gap-3 w-full">
              <h1 className="md:text-2xl font-semibold">{`${e.id}. ${e.title} :`}</h1>
              <p className="md:text-[16px] text-xs text-stone-600 ">
                {e.description}
              </p>

              {/* If points is an ARRAY */}
              {Array.isArray(e.bestFor) && e.bestFor.length > 0 && (
                <ul className="list-disc pl-5 space-y-0 text-gray-700 mb-6 md:text-[14px] text-xs">
                  {e.bestFor.map((li, i) => (
                    <li key={i} className="leading-relaxed">
                      {li}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="md:w-1/2 rounded-2xl object-cover md:mt-0 mt-2">
              <Image
                className="object-cover md:h-auto h-50 rounded-2xl"
                src={e.image}
                width={250}
                height={250}
                alt={e.title}
              ></Image>
            </div>
          </div>
        ))}
      </div>

      <div className="md:mb-30 mb-10"></div>
    </>
  );
};

export default ServicePage;