import React from "react";
import { motion } from "framer-motion";

const Egghead = () => {
  return (
    <div className="p-20 grid grid-cols-1 gap-32 min-h-screen overflow-hidden max-w-screen">
      {/* Title */}
      <h1 className="text-3xl w-auto text-center font-bold">
        Basic usage of{" "}
        <span className="text-blue-500 underline">Framer Motion</span>
      </h1>

      {/* Content */}
      <div className="grid grid-cols-2 gap-20 min-h-auto">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold">Effects</h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl font-bold text-blue-500">Attributes / Props</p>
        </div>

        {/* Effect */}
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: "circInOut",
            delay: 0.2,
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
          drag
          //   dragConstraints={{
          //     top: 0,
          //     left: 0,
          //     right: 0,
          //     bottom: 0,
          //   }}
          dragElastic={0.7}
          className="text-4xl font-bold w-full text-center
          p-32"
          draggable
        >
          <span className="text-blue-500 border-2 border-blue-500 rounded-2xl p-2">
            Hello There!
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: "circInOut",
            delay: 0.2,
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
          className="text-lg w-auto text-center"
        >
          initial=(( opacity: 0, y: -100 ))
          <br /> animate=(( opacity: 1, y: 0 ))
          <br />
          transition= ((
          <br />
          duration: 0.5,
          <br />
          ease: "circInOut",
          <br />
          delay: 0.2,
          <br />
          <span className="text-blue-500">type: "spring"</span>,
          <br />
          stiffness: 100,
          <br />
          damping: 10, ))
          <br />
          <span className="text-blue-500">drag</span>
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold w-full text-center"
        >
          can you
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg w-auto"
        >
          The space attribute is used to create a space between the elements.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold w-full text-center"
        >
          <span className="text-blue-500 bg-yellow-500 rounded-2xl p-2">
            Catch me?
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg w-auto"
        >
          The space attribute is used to create a space between the elements.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold w-full text-center"
        >
          using framer
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg w-auto"
        >
          The space attribute is used to create a space between the elements.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold w-full text-center"
        >
          looks like
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
