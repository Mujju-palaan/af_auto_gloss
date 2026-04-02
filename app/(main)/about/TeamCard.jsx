"use client";

import Image from "next/image";
import { FaInstagram, FaWhatsapp, FaPhone, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { motion } from "framer-motion";
import RotatingIcon from "./Rotating";

const TeamCard = ({
  avatar,
  name,
  title,
  instagram,
  linkedin,
  phone,
  whatsapp,
  mail,
}) => {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03,
        boxShadow: "0px 30px 60px rgba(0,0,0,0.22)",
      }}
      transition={{ type: "spring", stiffness: 220, damping: 20 }}
      className="
        flex flex-col items-center gap-1
        w-[250px]
        p-4 rounded-xl
        bg-white
        shadow-md
        cursor-pointer
      "
    >
      {/* Image */}
      <div className="w-full overflow-hidden rounded-xl">
        <motion.div
          whileHover={{ scale: 1.3 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Image
            className="rounded-xl object-cover"
            src={avatar}
            width={250}
            height={250}
            alt={name}
          />
        </motion.div>
      </div>

      {/* Name */}
      <span className="font-semibold text-stone-800 text-xl text-center mt-2">{name}</span>

      {/* Rank */}
      <span className="font-medium text-sm text-red-500">{title}</span>

      {/* Social Icons */}
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }} // 👈 starts when 40% visible
        transition={{ staggerChildren: 0.12 }} // 👈 smooth sequence
        className="flex gap-3 text-xl mt-2"
      >
        <RotatingIcon href={instagram}>
          <FaInstagram className="text-[#ee2a7b]" />
        </RotatingIcon>

        <RotatingIcon href={linkedin}>
          <FaLinkedin className="text-blue-800" />
        </RotatingIcon>

        <RotatingIcon href={phone}>
          <FaPhone className="text-blue-500" />
        </RotatingIcon>

        <RotatingIcon href={whatsapp}>
          <FaWhatsapp className="text-green-700" />
        </RotatingIcon>

        <RotatingIcon href={mail}>
          <FiMail className="text-blue-500" />
        </RotatingIcon>
      </motion.span>
    </motion.div>
  );
};

export default TeamCard;