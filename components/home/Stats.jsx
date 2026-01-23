"use client";
import {
  motion,
  useMotionValue,
  animate,
  useMotionValueEvent,
  useInView,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Status() {
  /* ---------------- Counter ---------------- */
  const Counter = ({ to, suffix }) => {
    const motionValue = useMotionValue(0);
    const [value, setValue] = useState(0);

    useMotionValueEvent(motionValue, "change", (latest) => {
      setValue(Math.round(latest));
    });

    useEffect(() => {
      const controls = animate(motionValue, to, {
        duration: 2.5,
        ease: "easeOut",
      });

      return controls.stop;
    }, [motionValue, to]);

    return (
      <p className="text-xl md:text-4xl font-bold">
        {value}
        {suffix}
      </p>
    );
  };

  /* ---------------- Stat Item ---------------- */
  const StatItem = ({ to, suffix, label, delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-120px" });
    const [key, setKey] = useState(0);

    useEffect(() => {
      if (isInView) {
        setKey((prev) => prev + 1); // restart counter + animation
      }
    }, [isInView]);

    return (
      <motion.span
        ref={ref}
        key={key}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay }}
        className="flex flex-col items-center gap-1"
      >
        <Counter to={to} suffix={suffix} />
        <p>{label}</p>
      </motion.span>
    );
  };

  /* ---------------- Layout ---------------- */
  return (
    <div className="relative md:h-[420px] w-full overflow-hidden">
      <Image
        src="/afautogloss-products-cleaning-service-image-stats.jpg"
        alt="About Us"
        width={800}
        height={420}
        className="h-full w-full object-cover"
        priority
      />

      <div className="absolute inset-0 flex gap-3 items-center justify-around bg-black/30 
      text-white/90 text-center font-sans tracking-widest text-sm md:text-3xl font-semibold">
        <StatItem to={100} suffix="+" label="Events Organised" />
        <StatItem to={100} suffix="%" label="Clients Satisfied" delay={0.1} />
        <StatItem to={60} suffix="+" label="Dance Floors" delay={0.1} />
      </div>
    </div>
  );
}