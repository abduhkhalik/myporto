import { motion } from "framer-motion";

// Variant
const stairAnimation = {
  initial: { top: "0%" },
  animate: { top: "100%" },
  exit: { top: ["100%", "0%"] },
};

// Calculate the revesrse index fat strged delay
const revesrseIndex = (index) => {
  const totalStairs = 6;
  return totalStairs - index - 1;
};

const Stairs = () => {
  return (
    <>
      {/* Render 6 motion divs */}
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: revesrseIndex(index) * 0.1,
            }}
            className="h-full w-full bg-white relative"
          />
        );
      })}
    </>
  );
};

export default Stairs;
