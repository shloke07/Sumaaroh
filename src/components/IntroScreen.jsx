import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/bg.png";
import envelope from "../assets/letter.svg";
import card from "../assets/card.svg";

const IntroScreen = () => {
  const navigate = useNavigate();

  // Animation Variants
  const envelopeVariants = {
    hidden: { y: "100vh", opacity: 0 },
    visible: { y: "0vh", opacity: 1, transition: { type: "spring", duration: 2 } },
    exit: { y: "-50vh", opacity: 0, transition: { duration: 1 } },
  };

  const cardVariants = {
    hidden: { y: "100%", scale: 1.5, opacity: 0 },
    visible: { y: "0%", scale: 1, opacity: 1, transition: { type: "spring", duration: 2, delay: 1 } },
  };

  const handleNext = () => {
    setTimeout(() => navigate("/card"), 1500); // Delay navigation for exit animation
  };

  return (
    <motion.div
      className="intro-container flex justify-center items-center h-screen w-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <motion.div
        className="envelope-container relative flex justify-center items-center"
        variants={envelopeVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onAnimationComplete={handleNext}
      >
        <img src={envelope} alt="Envelope" className="w-64 lg:w-80" />
        <motion.div
          className="greeting-card absolute top-0 left-1/2 transform -translate-x-1/2"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          <img src={card} alt="Greeting Card" className="w-48 lg:w-64" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default IntroScreen;
