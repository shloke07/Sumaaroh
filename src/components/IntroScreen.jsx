import React, { useState }  from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/bg.png";
import envelope from "../assets/letter.svg";
import card from "../assets/card.svg";
import logo from "../assets/logo.svg";

const IntroScreen = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);
  // Animation Variants
  const envelopeVariants = {
    hidden: { y: "100vh", opacity: 0 },
    visible: {
      y: "0vh",
      opacity: 1,
      transition: { type: "spring", duration: 3 },
    },
    exit: {
      y: "-100vh",
      opacity: 0,
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  };

  const cardVariants = {
    hidden: { y: "100%", scale: 0.8, opacity: 0 },
    visible: {
      y: "50%",
      scale: 1.5,
      opacity: 1,
      transition: { type: "spring", duration: 3, delay: 1 }, // Delayed to match envelope
    },
    exit: {
      y: "-100vh",
      opacity: 0,
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  };

  const handleNext = () => {
    setIsVisible(false);
    setTimeout(() => navigate("/card"), 600); // Ensure navigation happens after the exit animation
  };

  return (
    <>
              <div
              className="logo-container py-4 text-center cursor-pointer"
              style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <img
                src={logo}
                alt="The Wedding Company"
                className="h-12 mx-auto"
              />
              <p className="text-yellow-700 font-medium opacity-70">
                THE WEDDING COMPANY
              </p>
            </div>
    <AnimatePresence>
      {
        isVisible && (
          <motion.div
          className="intro-container flex justify-center items-center h-screen w-screen"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          // initial={{ opacity: 0 }}
          
          
          // animate={{ opacity: 1 }}
          
          // exit={{ opacity: 0, transition: { duration: 1 } }}
          
        >
          <motion.div
            className="envelope-container relative flex justify-center items-center"
            variants={envelopeVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onAnimationComplete={handleNext}
          >
            {/* Envelope */}
            <img src={envelope} alt="Envelope" className="w-64 lg:w-80" />
            {/* Card */}
            <motion.div
              className="greeting-card absolute top-0 left-1/2 transform -translate-x-1/2"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <img src={card} alt="Greeting Card" className="w-48 lg:w-64" />
            </motion.div>
          </motion.div>
        </motion.div>
        )
      }
    </AnimatePresence>
    </>

  );
};

export default IntroScreen;
