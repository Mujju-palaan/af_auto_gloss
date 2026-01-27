"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const ServiceCard = ({ image, title, description, slug }) => {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03,
        boxShadow: "0px 30px 60px rgba(0,0,0,0.22)",
      }}
      transition={{ type: "spring", stiffness: 220, damping: 20 }}
      className="md:w-1/4 w-[90%] flex flex-col gap-4 rounded-2xl  p-4 md:m-0 m-4 bg-white shadow-lg"
    >
      <div className="overflow-hidden rounded-2xl h-60 relative w-full">
        <Image src={image} fill alt="img" className="rounded-xl object-cover" />
      </div>

      <div className="text-xl font-semibold text-stone-900">{title}</div>

      <div className="text-stone-500 text-sm line-clamp-2">{description}</div>

      <motion.button
        whileHover={{ x: 6 }}
        transition={{ duration: 0.25 }}
        className="self-start text-indigo-500 font-medium cursor-pointer"
      >
        <Link href={`/services?service=${slug}`}>View More →</Link>
      </motion.button>
    </motion.div>
  );
};

export default ServiceCard;
