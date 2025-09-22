"use client";
import React, { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useSwipeable } from "react-swipeable";

/* Example testimonials — replace with your full list */
const testimonials = [
  {
    quote:
      "The platform has revolutionized how we handle our business operations. Exceptional service and support!",
    name: "John Doe",
    designation: "CEO, TechCorp",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9",
  },
  {
    quote:
      "Outstanding experience! The team's dedication to excellence is truly remarkable.",
    name: "Sarah Wilson",
    designation: "CTO, Innovation Labs",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9",
  },
  {
    quote:
      "This solution has helped us scale our operations efficiently. Highly recommended!",
    name: "Michael Chen",
    designation: "Director, Global Solutions",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9",
  },
  {
    quote:
      "Incredible platform that delivers real results. We've seen remarkable improvements.",
    name: "Emma Thompson",
    designation: "VP Marketing, Future Brands",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9",
  },
];

export default function Testimonialspage() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // responsive slides per view (tweak breakpoints if you want)
  const [slidesPerView, setSlidesPerView] = useState<number>(1);
  const [viewportWidth, setViewportWidth] = useState<number>(0);

  // clone-based infinite carousel variables
  const N = testimonials.length;
  const s = Math.min(slidesPerView, N); // actual clones count (clamped)

  // build clones: prepend last `s`, append first `s`
  const slides = [
    ...testimonials.slice(-s),
    ...testimonials,
    ...testimonials.slice(0, s),
  ];

  // current index in 'slides' array (start at first real slide = index `s`)
  const [currentIndex, setCurrentIndex] = useState<number>(s);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(true);

  const TRANSITION_MS = 500;

  // measure container and set slidesPerView based on width
  useEffect(() => {
    function resolveSlidesPerView(width: number) {
      // Tailwind-like breakpoints: >=1024 -> 3, >=640 -> 2, else 1
      if (width >= 1024) return 3;
      if (width >= 640) return 2;
      return 1;
    }

    function update() {
      const w = containerRef.current?.clientWidth ?? window.innerWidth;
      setViewportWidth(w);
      setSlidesPerView(resolveSlidesPerView(window.innerWidth));
    }

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // when slidesPerView (s) changes, re-align to first real slide and disable animation briefly
  useEffect(() => {
    setIsTransitioning(false);
    setCurrentIndex(s);
    // small timeout to re-enable transitions
    const id = setTimeout(() => setIsTransitioning(true), 20);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [s]);

  // compute per-slide pixel width (guard against zero)
  const slideWidth = viewportWidth && slidesPerView ? Math.floor(viewportWidth / slidesPerView) : 0;

  // navigation actions (card-by-card)
  const nextSlide = () => {
    if (N <= slidesPerView) return; // nothing to slide
    setIsTransitioning(true);
    setCurrentIndex((c) => c + 1);
  };
  const prevSlide = () => {
    if (N <= slidesPerView) return;
    setIsTransitioning(true);
    setCurrentIndex((c) => c - 1);
  };

  // autoplay
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  useEffect(() => {
    if (!isAutoPlaying || N <= slidesPerView) return;
    const id = setInterval(() => nextSlide(), 3000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAutoPlaying, slidesPerView, N, viewportWidth]);

  // swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    trackMouse: true,
    preventScrollOnSwipe: true,
  });

  // keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prevSlide();
    if (e.key === "ArrowRight") nextSlide();
  };

  // When we move into the clones area, snap (without transition) back to the corresponding real index
  useEffect(() => {
    // Only do the snap when transition just finished (we set timeout to mirror animation)
    // if currentIndex moved into appended clones (right side)
    if (currentIndex === s + N) {
      const id = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(s); // jump to first real slide
        // re-enable transition a tick later
        setTimeout(() => setIsTransitioning(true), 20);
      }, TRANSITION_MS);
      return () => clearTimeout(id);
    }
    // if we moved into prepended clones (left side)
    if (currentIndex === s - 1) {
      const id = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(s + N - 1); // jump to last real slide
        setTimeout(() => setIsTransitioning(true), 20);
      }, TRANSITION_MS);
      return () => clearTimeout(id);
    }
  }, [currentIndex, s, N]);

  // clamp currentIndex if slidesPerView >= N (show all, no sliding)
  useEffect(() => {
    if (slidesPerView >= N) {
      setIsTransitioning(false);
      setCurrentIndex(s);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slidesPerView, N]);

  // transform calculation (pixel-precise)
  const trackStyle: React.CSSProperties = {
    transform: slideWidth ? `translateX(-${currentIndex * slideWidth}px)` : undefined,
    transition: isTransitioning ? `transform ${TRANSITION_MS}ms ease` : "none",
    display: "flex",
  };

  return (
    <div
      className="relative w-full overflow-hidden py-12 px-4"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Testimonials carousel"
      {...handlers}
    >
      <div ref={containerRef} className="max-w-7xl mx-auto">
        <div className="relative">
          {/* TRACK */}
          <div style={trackStyle}>
            {slides.map((testimonial, idx) => (
              <div
                key={idx}
                // width in pixels and box-sizing ensures padding is included
                style={{
                  flex: `0 0 ${slideWidth}px`,
                  maxWidth: `${slideWidth}px`,
                  boxSizing: "border-box",
                  padding: "0 0.75rem",
                }}
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 h-full">
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src =
                          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9";
                      }}
                    />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {testimonial.designation}
                      </p>
                    </div>
                  </div>
                  <blockquote>
                    <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                  </blockquote>
                </div>
              </div>
            ))}
          </div>

          {/* prev / next */}
            <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 
                            bg-white dark:bg-gray-700 
                            p-2 sm:p-3   /* smaller padding on mobile, larger on sm+ */
                            rounded-full shadow-lg"
                aria-label="Previous testimonial"
                >
                <FiChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-gray-600 dark:text-gray-200" />
            </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 
                        bg-white dark:bg-gray-700 
                        p-2 sm:p-3 
                        rounded-full shadow-lg"
            aria-label="Next testimonial"
            >
            <FiChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-gray-600 dark:text-gray-200" />
          </button>
        </div>
      </div>
    </div>
  );
}
