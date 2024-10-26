import React from "react";
import { motion } from "framer-motion";

const AnimatedCatchMe = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true, amount: 0.5 }}
        drag
        dragConstraints={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
        className="text-4xl font-bold w-auto text-center"
        dragElastic={0.7}
      >
        <span className="text-blue-500 border-2 border-yellow-500 rounded-2xl py-2 px-4">
          Catch me?
        </span>
      </motion.h1>
    </div>
  );
};

export default AnimatedCatchMe;
