"use client";
import Image from "next/image";
import Heading_desc from "../../../components/Heading_desc";
import ServiceData from "../../../data/ServiceData";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

const ServiceDetails = () => {
  const searchParams = useSearchParams();
  const selectedSlug = searchParams.get("service");

  const refs = useRef({});

  // Scroll to selected service
  useEffect(() => {
    if (selectedSlug && refs.current[selectedSlug]) {
      const y =
        refs.current[selectedSlug].getBoundingClientRect().top +
        window.pageYOffset -
        100; // adjust for header height

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, [selectedSlug]);

  return (
    <>
      <Heading_desc
        title={`Our Services`}
        description={`We’re a crew of strategists, creators, and marketers helping fearless brands break through the noise and shine with purpose.`}
      />
      <div className="flex flex-col md:gap-4 md:px-32 px-2 font-sans">
        {ServiceData.map((e) => (
          <div
            key={e.id}
            ref={(el) => {
              if (el) refs.current[e.slug] = el;
            }}
            className="md:px-30 p-6 md:flex xs:flex-col gap-10"
          >
            <div className="flex flex-col gap-3 w-full">
              <h1 className="md:text-4xl font-semibold font-serif text-red-700"
              >{`${e.id}. ${e.title} :`}</h1>
              <p className="md:text-[14px] text-xs text-white/90 ">
                {e.description}
              </p>

              {/* If points is an ARRAY */}
              {Array.isArray(e.bestFor) && e.bestFor.length > 0 && (
                <ul className="list-disc pl-5 space-y-0 text-stone-300 mb-6 md:text-[14px] text-xs">
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
                src={e.image}
                alt={e.title}
                width={500}
                height={400}
                className="w-full h-auto rounded-2xl object-cover"
                priority={e.id === 1}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="md:mb-30 mb-10"></div>
    </>
  );
};

export default ServiceDetails;
