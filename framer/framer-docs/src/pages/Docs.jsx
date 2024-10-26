import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { Dialog } from "daisyui"; // Import Daisy UI Dialog for better modal
import { FaRocket, FaHandPeace, FaCogs } from "react-icons/fa"; // Importing icons from react-icons

function Docs() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Parallax effect using scroll position
  const { scrollY } = useViewportScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, -150]); // Further increased parallax effect

  // Variants for modal animations
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  // Variants for staggered animations in features
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="App bg-base-100 min-h-screen">
      {/* Enhanced Navbar */}
      <motion.header
        className="fixed top-0 left-0 w-full bg-primary text-primary-content p-4 z-50 shadow-lg"
        style={{ y: yParallax }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Framer Motion Showcase</h1>
          <ul className="flex space-x-4">
            <li>
              <a href="#hero" className="hover:text-secondary">
                Home
              </a>
            </li>
            <li>
              <a href="#features" className="hover:text-secondary">
                Features
              </a>
            </li>
            <li>
              <a href="#examples" className="hover:text-secondary">
                Examples
              </a>
            </li>
            <li>
              <a href="#footer" className="hover:text-secondary">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </motion.header>

      {/* Hero Section with Gradient Background */}
      <section
        className="hero-section bg-gradient-to-r from-primary to-secondary text-primary-content py-20"
        id="hero"
      >
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-5xl font-extrabold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Welcome to Framer Motion
          </motion.h2>
          <motion.p
            className="text-xl mb-6 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Discover the power of Framer Motion to create stunning animations
            and interactive UI components seamlessly integrated with React.
          </motion.p>
          <motion.button
            className="btn btn-primary"
            whileHover={{ scale: 1.05, backgroundColor: "#2563EB" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)}
          >
            Explore Features
          </motion.button>
        </div>
      </section>

      {/* Features Section with Icons */}
      <section className="features-section bg-base-200 py-16" id="features">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Features</h3>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Feature Card 1 with Icon */}
            <motion.div
              className="card bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 flex flex-col items-center text-center"
              variants={featureVariants}
            >
              <FaRocket className="text-4xl text-primary mb-4" />
              <h4 className="text-2xl font-semibold mb-2">Smooth Animations</h4>
              <p className="text-gray-600">
                Create effortless, high-performance animations with a simple
                declarative API.
              </p>
            </motion.div>

            {/* Feature Card 2 with Icon */}
            <motion.div
              className="card bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 flex flex-col items-center text-center"
              variants={featureVariants}
            >
              <FaHandPeace className="text-4xl text-primary mb-4" />
              <h4 className="text-2xl font-semibold mb-2">Gesture Support</h4>
              <p className="text-gray-600">
                Enhance user interactions with built-in gesture handlers like
                drag, hover, and tap.
              </p>
            </motion.div>

            {/* Feature Card 3 with Icon */}
            <motion.div
              className="card bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 flex flex-col items-center text-center"
              variants={featureVariants}
            >
              <FaCogs className="text-4xl text-primary mb-4" />
              <h4 className="text-2xl font-semibold mb-2">
                Variants & Controls
              </h4>
              <p className="text-gray-600">
                Manage complex animations with ease using variants and animation
                controls.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Interactive Examples Section */}
      <section className="interactive-section py-16" id="examples">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">
            Interactive Examples
          </h3>
          <div className="space-y-12">
            {/* Modal Example */}
            <div>
              <h4 className="text-2xl font-semibold mb-4">Animated Modal</h4>
              <AnimatePresence>
                {isModalOpen && (
                  <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                    <motion.div
                      className="modal-backdrop bg-black bg-opacity-50 fixed inset-0 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onClick={() => setIsModalOpen(false)}
                    >
                      <motion.div
                        className="modal-box bg-base-100 p-6 rounded-lg shadow-lg"
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 0.3 }}
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                      >
                        <h2 className="text-2xl font-bold mb-4">
                          Get Started with Framer Motion
                        </h2>
                        <p className="text-gray-700 mb-6">
                          Framer Motion allows you to power up your React
                          projects with captivating animations and gestures.
                        </p>
                        <motion.button
                          className="btn btn-secondary"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setIsModalOpen(false)}
                        >
                          Close
                        </motion.button>
                      </motion.div>
                    </motion.div>
                  </Dialog>
                )}
              </AnimatePresence>
              <motion.button
                className="btn btn-primary mt-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsModalOpen(true)}
              >
                Open Modal
              </motion.button>
            </div>

            {/* Draggable Example */}
            <div>
              <h4 className="text-2xl font-semibold mb-4">
                Draggable Component
              </h4>
              <motion.div
                drag // Enable dragging on both axes
                dragConstraints={{
                  left: -200,
                  right: 200,
                  top: -200,
                  bottom: 200,
                }}
                dragElastic={0.2}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95, rotate: -5 }}
                className="draggable-box bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold w-32 h-32 rounded-full shadow-lg flex items-center justify-center cursor-pointer"
              >
                Drag Me
              </motion.div>
            </div>

            {/* Hover and Tap Animations */}
            <div>
              <h4 className="text-2xl font-semibold mb-4">
                Hover & Tap Effects
              </h4>
              <div className="flex space-x-6 justify-center">
                <motion.div
                  className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg cursor-pointer"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  whileTap={{ scale: 0.9, rotate: -10 }}
                >
                  <span className="text-white font-semibold">Box</span>
                </motion.div>

                <motion.button
                  className="btn btn-secondary"
                  whileHover={{ scale: 1.05, backgroundColor: "#10B981" }}
                  whileTap={{ scale: 0.95, backgroundColor: "#059669" }}
                >
                  Button
                </motion.button>
              </div>
            </div>

            {/* Staggered List Example */}
            <div>
              <h4 className="text-2xl font-semibold mb-4">
                Staggered Animations
              </h4>
              <motion.ul
                className="space-y-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.li
                  className="p-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-md shadow flex items-center"
                  variants={featureVariants}
                >
                  <FaRocket className="text-2xl text-primary mr-4" />
                  <span>Smooth Transitions</span>
                </motion.li>
                <motion.li
                  className="p-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-md shadow flex items-center"
                  variants={featureVariants}
                >
                  <FaHandPeace className="text-2xl text-primary mr-4" />
                  <span>Gesture Handling</span>
                </motion.li>
                <motion.li
                  className="p-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-md shadow flex items-center"
                  variants={featureVariants}
                >
                  <FaCogs className="text-2xl text-primary mr-4" />
                  <span>Responsive Design</span>
                </motion.li>
              </motion.ul>
            </div>

            {/* Parallax Section */}
            <section
              className="relative h-screen bg-cover bg-center"
              style={{
                backgroundImage:
                  'url("https://source.unsplash.com/random/1920x1080/?technology,abstract")',
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent to-black flex items-center justify-center"
                style={{ y: yParallax }}
              >
                <h2 className="text-4xl text-white font-bold drop-shadow-lg">
                  Parallax Scrolling
                </h2>
              </motion.div>
            </section>
          </div>
        </div>
      </section>

      {/* Enhanced Footer with Social Links */}
      <footer
        className="footer bg-primary text-primary-content py-6"
        id="footer"
      >
        <div className="container mx-auto text-center">
          <div className="flex justify-center space-x-4 mb-4">
            <a href="#" className="text-white hover:text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-facebook"
                viewBox="0 0 16 16"
              >
                <path d="M8.94 6.916v1.664h1.953l.293 2.277H8.94v5.332H6.582V10.877H4.631V8.193h1.951V6.916c0-1.931 1.184-3.314 3.06-3.314.87 0 1.618.065 1.84.094v2.134h-1.266c-1.246 0-1.488.594-1.488 1.464z" />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-twitter"
                viewBox="0 0 16 16"
              >
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.673 6.673 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.084.793A3.285 3.285 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.286 3.286 0 0 0 1.018 4.381A3.323 3.323 0 0 1 .643 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115c-.211 0-.417-.02-.62-.058a3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 0 13.58a9.29 9.29 0 0 0 5.032 1.475" />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-linkedin"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708C16 15.487 15.474 16 14.825 16H1.175C.526 16 0 15.487 0 14.854V1.146zM4.943 14.248V6.169H2.542v8.079H4.943zM3.742 5.433a2.074 2.074 0 1 1 0-4.149 2.074 2.074 0 0 1 0 4.149zM14.058 14.248V10.36c0-2.476-1.324-3.632-3.083-3.632-1.423 0-2.065.708-2.406 1.207v-1.04H7.057c.03.666 0 8.079 0 8.079h2.901V9.41c0-.255.018-.51.093-.692.204-.51.668-1.04 1.45-1.04.954 0 1.337.725 1.337 1.792v4.416h2.902z" />
              </svg>
            </a>
          </div>
          <p>&copy; 2024 Framer Motion Showcase. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Docs;
