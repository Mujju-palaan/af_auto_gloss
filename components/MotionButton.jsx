"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

const MotionButton = ({
  children,
  onClick,
  className,
  shineDuration = 1,
}) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{
        scale: 1.06,
        boxShadow: "0px 12px 30px rgba(79, 70, 229, 0.45)",
      }}
      whileTap={{ scale: 0.96 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 18,
      }}
      className={clsx(
        `
        relative overflow-hidden
        bg-indigo-600 hover:bg-indigo-700
        rounded-xl cursor-pointer
        `,
        className
      )}
    >
      {/* One-time white shine on hover */}
      <motion.span
        initial={{ x: "-120%" }}
        whileHover={{ x: "120%" }}
        transition={{
          duration: shineDuration,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute inset-0
          bg-gradient-to-r from-transparent via-white/50 to-transparent
          skew-x-12
        "
      />

      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

export default MotionButton;