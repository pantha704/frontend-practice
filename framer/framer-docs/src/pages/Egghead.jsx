import React from "react";
import { motion } from "framer-motion";

const Egghead = () => {
  return (
    <div className="p-20 grid grid-cols-1 gap-40 min-h-screen overflow-hidden max-w-200">
      <p className="text-lg w-auto text-center font-bold underline text-purple-500">
        Basic Usage of framer motion
      </p>
      <div className="flex flex-row items-center justify-around w-auto">
        <h1 className="text-2xl font-bold">Effect</h1>
        <p className="text-2xl font-bold text-blue-500">Attributes</p>
      </div>
      <div className="flex flex-row items-start justify-between w-auto">
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: "circInOut",
            delay: 0.2,
            repeat: 2,
            repeatType: "reverse",
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
          whileDrag={{
            rotate: [0, 10, -10, 10, -10, 0],
            transition: { duration: 1 },
          }}
          drag
          dragConstraints={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
          className="text-4xl font-bold w-full"
          draggable
        >
          1. space Hello
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg w-auto"
        ></motion.p>
      </div>
      <div className="flex flex-row items-start justify-between w-auto">
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold w-full"
        >
          2. space Hello
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg w-auto"
        >
          The space attribute is used to create a space between the elements.
        </motion.p>
      </div>
      <div className="flex flex-row items-start justify-between w-auto">
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold w-full"
        >
          2. space Hello
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg w-auto"
        >
          The space attribute is used to create a space between the elements.
        </motion.p>
      </div>
    </div>
  );
};

export default Egghead;
