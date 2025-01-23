import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import backgroundImage from '../assets/bg.png';
import envelope from '../assets/letter.svg';
import card from '../assets/card.svg';
import CardScreen from './CardScreen';
import { useNavigate } from "react-router-dom";

const IntroScreen = () => {
  const navigate = useNavigate(); 
  const [showIntro, setShowIntro] = useState(true);
  const [showCardScreen, setShowCardScreen] = useState(false);

  const envelopeVariants = {
    hidden: { y: "100vh", opacity: 0 },
    visible: { y: "0vh", opacity: 1, transition: { type: "spring", duration:4 } },
    exit: { opacity: 0, y: "-50vh", transition: { duration: 1} },
  };

  const cardVariants = {
    hidden: { y: "120%", scale: 1.5, opacity: 0 },
    visible: { y: "15%", scale: 1.5, opacity: 1, transition: { type: "spring", duration: 4, delay: 2 } },
  };

  const bgFadeOut = {
    hidden: { opacity: 1 },
    visible: { opacity: 0, transition: { duration: 4, delay: 4 } }, 
  };

  const handleNext = () => {
    setTimeout(()=>{
        navigate("/card");
    },1000)
    // setShowIntro(false);
    // setShowCardScreen(true);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100vw',
        position: 'absolute',
        top: 0,
        left: 0
      }}
    >
      <AnimatePresence>
        {showIntro && (
          <motion.div
            className="intro-container flex justify-center items-center h-screen bg-yellow-50"
            variants={bgFadeOut}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div
              className="envelope-container relative flex justify-center"
              variants={envelopeVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onAnimationComplete={handleNext}
            >
              <img
                src={envelope}
                alt="Envelope"
                className="w-64"
              />
              <motion.div
                className="greeting-card absolute top-0 left-1/2 transform -translate-x-1/2"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
              >
                <img
                  src={card}
                  alt="Greeting Card"
                  className="w-64"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showCardScreen && (
          <CardScreen />
        )}
      </AnimatePresence>
    </div>
  );
};

export default IntroScreen;


// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import backgroundImage from '../assets/bg.png';
// import envelope from '../assets/letter.svg';
// import card from '../assets/card.svg';
// import { useHistory } from 'react-router-dom';

// const IntroScreen = () => {
//   const [showIntro, setShowIntro] = useState(true);
//   const history = useHistory();

//   const envelopeVariants = {
//     hidden: { y: "100vh", opacity: 0 },
//     visible: { y: "0vh", opacity: 1, transition: { type: "spring", duration:4 } },
//     exit: { opacity: 0, y: "-50vh", transition: { duration: 2} },
//   };

//   const cardVariants = {
//     hidden: { y: "120%", scale: 1.5, opacity: 0 },
//     visible: { y: "15%", scale: 1.5, opacity: 1, transition: { type: "spring", duration: 4, delay: 2 } },
//   };

//   const bgFadeOut = {
//     hidden: { opacity: 1 },
//     visible: { opacity: 0, transition: { duration: 4, delay: 4 } }, 
//   };

//   const handleNext = () => {
//     setShowIntro(false);
//     history.push('/card');
//   };

//   return (
//     <div
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         height: '100vh',
//         width: '100vw',
//         position: 'absolute',
//         top: 0,
//         left: 0
//       }}
//     >
//       <AnimatePresence>
//         {showIntro && (
//           <motion.div
//             className="intro-container flex justify-center items-center h-screen bg-yellow-50"
//             variants={bgFadeOut}
//             initial="hidden"
//             animate="visible"
//             exit="hidden"
//           >
//             <motion.div
//               className="envelope-container relative flex justify-center"
//               variants={envelopeVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               onAnimationComplete={handleNext}
//             >
//               <img
//                 src={envelope}
//                 alt="Envelope"
//                 className="w-64"
//               />
//               <motion.div
//                 className="greeting-card absolute top-0 left-1/2 transform -translate-x-1/2"
//                 variants={cardVariants}
//                 initial="hidden"
//                 animate="visible"
//               >
//                 <img
//                   src={card}
//                   alt="Greeting Card"
//                   className="w-64"
//                 />
//               </motion.div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default IntroScreen;