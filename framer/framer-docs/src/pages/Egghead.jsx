import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimationControls } from "framer-motion";

const Egghead = () => {
  const controlsHello = useAnimationControls();
  const controlsHelloDesc = useAnimationControls();
  const [displayText, setDisplayText] = useState("im a lil slippery");

  const handleClick = () => {
    setDisplayText("~ welp me TvT ~");
    controlsHelloDesc.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "circInOut" },
    });
  };

  const textVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    controlsHello.start({
      x: 0,
      y: 0,
      opacity: 1,
    });
  }, []);

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
        <div className="flex flex-col items-center justify-center">
          <motion.h1
            className="text-4xl font-bold w-auto text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.8 }}
            initial={{ scale: 0.9, opacity: 0, y: -100 }}
            animate={controlsHello}
            onClick={handleClick}
            transition={{
              duration: 0.5,
              ease: "circInOut",
              delay: 0.2,
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
            drag
            dragElastic={0.7}
            draggable
          >
            <span className="border-2 border-blue-500 rounded-2xl py-2 px-4">
              Hello There!
            </span>
            <motion.p
              key={displayText}
              className="absolute text-sm w-full text-center font-medium mt-4"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              {displayText}
            </motion.p>
          </motion.h1>
          <motion.button
            className="mt-20 px-4 py-2 text-blue-500 border-2 border-yellow-500 rounded-2xl hover:bg-blue-500 hover:text-white transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setDisplayText("im a lil slippery");
              controlsHelloDesc.start({
                opacity: 1,
                y: 0,
              });
              controlsHello.start({
                x: 0,
                y: 0,
                opacity: 1,
                transition: {
                  ease: "easeInOut",
                  type: "spring",
                  stiffness: 400,
                  damping: 25,
                },
              });
            }}
          >
            Call Back
          </motion.button>
        </div>
        <motion.div
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
          className="flex flex-row items-center justify-center text-lg w-auto text-center"
        >
          <p>
            <span className="text-blue-500">// for hello text</span>
            <br />
            {'className="text-4xl font-bold w-auto text-center" '}
            <br />
            {"whileHover={{ scale: 1.05 }}"}
            <br />
            {"whileTap={{ scale: 0.8 }}"}
            <br />
            {"initial={{ scale: 0.9, opacity: 0, y: -100 }}"}
            <br />
            {"animate={controlsHello}"}
            <br />
            {"onClick={handleClick}"}
            <br />
            {"transition={{"}
            <br />
            {"duration: 0.5,"}
            <br />
            {'ease: "circInOut",'}
            <br />
            {"delay: 0.2,"}
            <br />
            {'type: "spring",'}
            <br />
            {"stiffness: 100,"}
            <br />
            {"damping: 10,"}
            <br />
            {"}}"}
            <br />
            {"drag dragElastic={0.7}"}
            <br />
            {"draggable"}
          </p>
          <div className="m-4">
            <p>
              <span className="text-blue-500">// for reset btn</span>
              <br />
              {"whileHover={{ scale: 1.05 }}"}
              <br />
              {"whileTap={{ scale: 0.95 }}"}
              <br />
              onClick={"{() => {"}
              <br />
              controls.start{"({"}
              x: 0,
              <br />
              y: 0,
              <br />
              opacity: 1,
              <br />
              transition: {"{{"}
              <br />
              ease: "easeInOut",
              <br />
              type: "spring",
              <br />
              stiffness: 400,
              <br />
              damping: 25,
              <br />
              {"}}"}
              <br />
            </p>
          </div>
        </motion.div>

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
        <div className="flex flex-col items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ amount: 0.1 }}
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
