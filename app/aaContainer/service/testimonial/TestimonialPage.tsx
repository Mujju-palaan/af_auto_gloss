'use client'
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Testimonial from "@/components/cards/testimonialCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  { id: 1, avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg", name: "Martin escobar", title: "Founder of meta", quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: 2, avatar: "https://randomuser.me/api/portraits/women/79.jpg", name: "Angela stian", title: "Product designer", quote: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet." },
  { id: 3, avatar: "https://randomuser.me/api/portraits/men/86.jpg", name: "Karim ahmed", title: "DevOp engineer", quote: "There is no one who loves pain itself, who seeks after it and wants to have it." },
  { id: 4, avatar: "https://randomuser.me/api/portraits/men/65.jpg", name: "Liam smith", title: "Backend Developer", quote: "Additional testimonial to fill 4 cards for testing grid layout." },
  { id: 5, avatar: "https://randomuser.me/api/portraits/women/50.jpg", name: "Sophia Lee", title: "UX Designer", quote: "This is another testimonial example for the slider." },
];

const TestimonialPage: React.FC = () => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const paginationRef = useRef<HTMLDivElement>(null);

  return (
    <div className="mt-12 px-4 sm:px-6 lg:px-8 relative">
      {/* Floating arrows */}
      <div
        ref={prevRef}
        className="absolute top-1/2 -left-4 z-10 transform -translate-y-1/2 cursor-pointer w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition"
      >
        <ChevronLeft className="w-5 h-5 text-gray-700" />
      </div>
      <div
        ref={nextRef}
        className="absolute top-1/2 -right-4 z-10 transform -translate-y-1/2 cursor-pointer w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition"
      >
        <ChevronRight className="w-5 h-5 text-gray-700" />
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        spaceBetween={24}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={{
          clickable: true,
          el: paginationRef.current,
        }}
        onBeforeInit={(swiper) => {
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
          // @ts-ignore
          swiper.params.pagination.el = paginationRef.current;
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((t) => (
          <SwiperSlide key={t.id}>
            <Testimonial
              id={t.id}
              avatar={t.avatar}
              name={t.name}
              title={t.title}
              quote={t.quote}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination container below slider */}
      <div
        ref={paginationRef}
        className="flex justify-center mt-6 space-x-2"
      />
    </div>
  );
};

export default TestimonialPage;
