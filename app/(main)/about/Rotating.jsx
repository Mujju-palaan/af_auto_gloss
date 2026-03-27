import { motion } from "framer-motion";
import Link from "next/link";

export const iconVariants = {
  hidden: {
    rotate: 0,
    scale: 1,
  },
  visible: {
    rotate: 360,
    scale: 1.15,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};


const RotatingIcon = ({ href, children }) => {
  return (
    <Link href={href} target="_blank">
      <motion.span
        variants={iconVariants}
        className="inline-flex cursor-pointer"
      >
        {children}
      </motion.span>
    </Link>
  );
};

export default RotatingIcon;
