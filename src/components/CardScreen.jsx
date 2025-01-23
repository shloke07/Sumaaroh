import React from "react";
import { easeInOut, motion } from "framer-motion";
import backgroundImage from "../assets/bg.png";
import logo from "../assets/logo.svg";
import image from "../assets/image.svg";
import { useNavigate } from "react-router-dom";

const CardScreen = () => {
  const navigate = useNavigate();

  const cardScreenVariants = {
    hidden: { opacity: 0, ease: "easeInOut" },
    visible: { opacity: 1, transition: { duration: 1.5 } },
  };

  const handleHome = () => {
    navigate("/");
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="logo-container py-4 text-center mb-4 cursor-pointer"
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
            onClick={handleHome}
          />
          <p className="text-yellow-700 font-medium opacity-70">
            THE WEDDING COMPANY
          </p>
        </div>
        <div
          className="card-screen-container flex flex-col lg:flex-row bg-gradient-to-r from-white to-[#FDFDF1] h-screen w-screen"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <motion.div
            className="card-screen-content flex flex-col lg:flex-row w-full h-full"
            variants={cardScreenVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="flex justify-center items-center w-full p-4">
              <img src={image} alt="Event Planning" className="w-full max-w-lg" />
            </div>

            <div className="flex flex-col justify-center items-center w-full lg:w-1/2 px-6 lg:px-12">
              <h1 className="text-2xl lg:text-4xl font-medium leading-tight text-gray-700 mb-6 ">
                Anita, let our expert planners <br /> craft your special day
              </h1>

              <div className="bg-white rounded-3xl shadow-lg p-6 mb-6 w-full max-w-lg">
                <div className="flex items-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-yellow-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v2.25m0 4.15c0 .328-.11 
.636-.29.9-1.04.235-2.098.387-3.129.47M8.188 9.188a4.5 4.5 0 01-1.977.176A4.5 4.5 0 015.25 9.5c0 .42.17 
.812.45.118S6.5 9.94 7 10c.5.06.965.128 1.4.188M20.812 9.188a4.5 4.5 0 01-1.977.176A4.5 4.5 0 0118.75 9.5c0 .42.17.812.45.118S20 9.94 20.5 10c.5.06.965.128 1.4.188m-4.5 10h.01a9 9 0 013.138-4.162 9 9 0 01-3.138 4.162zm0-7.5h.01a2.25 2.25 0 001.586.44 2.25 2.25 0 00-1.586-.44z"
                    />
                  </svg>
                  <h2 className="text-lg lg:text-xl font-semibold text-gray-700 ml-2">
                    Unlock best venues, decors & more
                  </h2>
                </div>
                <p className="text-gray-400 font-medium text-xl">
                  Tell us about your dream day & get a perfect proposal in your
                  budget for FREE.
                </p>
              </div>

              <div className="bg-white rounded-3xl shadow-lg p-6 w-full max-w-lg">
                <div className="flex items-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-yellow-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v2.25m0 4.15c0 .328-.11 
.636-.29.9-1.04.235-2.098.387-3.129.47M8.188 9.188a4.5 4.5 0 01-1.977.176A4.5 4.5 0 015.25 9.5c0 .42.17 
.812.45.118S6.5 9.94 7 10c.5.06.965.128 1.4.188M20.812 9.188a4.5 4.5 0 01-1.977.176A4.5 4.5 0 0118.75 9.5c0 .42.17.812.45.118S20 9.94 20.5 10c.5.06.965.128 1.4.188m-4.5 10h.01a9 9 0 013.138-4.162 9 9 0 01-3.138 4.162zm0-7.5h.01a2.25 2.25 0 001.586.44 2.25 2.25 0 00-1.586-.44z"
                    />
                  </svg>
                  <h2 className="text-lg lg:text-xl font-semibold text-gray-700 ml-2">
                    800+ Flawless Celebrations
                  </h2>
                </div>
                <p className="text-gray-400 font-medium text-xl ">
                  Enjoy a perfect, stress-free wedding from the first visit to
                  the final goodbyes.
                </p>
              </div>

              {/* <button className="bg-pink-500 w-lg text-white text-lg lg:text-xl px-12 py-6 cursor-pointer rounded-full shadow-md hover:shadow-lg ring shadow-yellow-500/50 mt-8">
                Get My FREE Proposal
              </button> */}

              <button className="bg-pink-500 text-white text-lg px-6 py-4 cursor-pointer rounded-full shadow-md hover:shadow-lg ring shadow-yellow-500/50 mt-8 w-full lg:w-lg ">
                Get My FREE Proposal
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default CardScreen;
