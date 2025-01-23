import React from "react";
import { delay, motion } from "framer-motion";
import backgroundImage from "../assets/bg-2.png";
import logo from "../assets/logo.svg";
import image from "../assets/image.svg";
import { useNavigate } from "react-router-dom";

const CardScreen = () => {
  const navigate = useNavigate(); 
  const cardScreenVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const handleHome = () => {
        navigate("/");

    // setShowIntro(false);
    // setShowCardScreen(true);
  };

  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    >
      <motion.div
        // className="card-screen-content max-w-4xl p-8 bg-white shadow-lg rounded-lg"
        variants={cardScreenVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="logo-container text-center mb-8 cursor-pointer">
          <img src={logo} alt="The Wedding Company" className="h-12 mx-auto"  onClick={()=>handleHome()} />
          <p
            style={{
              color: "#a06c11",
              fontWeight: "500",
              opacity: 0.5,
            }}
          >
            THE WEDDING COMPANY
          </p>
        </div>
        {/* <div className="content-container">
          <h1 className="text-3xl font-bold mb-4">Anita, let our expert planners craft your special day</h1>
          <div className="features-container grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="feature-item">
              <div className="feature-icon bg-yellow-400 rounded-full p-3 mb-3">
                <i className="fas fa-unlock text-white"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Unlock best venues, decors & more</h3>
              <p className="text-gray-600">Tell us about your dream day & get a perfect proposal in your budget for FREE</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon bg-yellow-400 rounded-full p-3 mb-3">
                <i className="fas fa-star text-white"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">800+ Flawless Celebrations</h3>
              <p className="text-gray-600">Enjoy a perfect, stress-free wedding from the first visit to the final goodbyes</p>
            </div>
          </div>
          <div className="cta-container text-center mt-8">
            <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-lg shadow-md">
              Get My FREE Proposal
            </button>
          </div>
        </div> */}
        <div className="flex bg-gradient-to-r from-white to-#FDFDF1">
          <div
            className="flex justify-center items-center"
            style={{
              height: "100vh",
              width: "50vw",
              // background: "#fefdfe",
            }}
          >
            <img src={image} alt="image" className="w-xlg" />
          </div>
          <div className="flex flex-col">
            <div
              className="rounded-lg p-4"
              style={{
                height: "70vh",
                width: "50vw",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <div>
                <h1 className="mb-4 mt-4 text-xl font-bold leading-none tracking-tight text-center text-gray-600 md:text-4xl lg:text-4xl dark:text-gray">
                  Anita, let our expert planners <br></br>
                  craft your special day
                </h1>
              </div>

              <div className="bg-white rounded-2xl w-3xl h-4xl p-16 shadow-md">
                <div className="flex items-center mb-2">
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
                  <h2 className="text-xl font-semibold ml-2">
                    Unlock best venues, decors & more
                  </h2>
                </div>
                <p
                  style={{
                    color: "#B5B5B5",
                  }}
                  className="text-lg font-md text-gray-900"
                >
                  Tell us about your dream day & get a perfect proposal in your
                  budget for FREE
                </p>
              </div>

              <div className="bg-white rounded-2xl w-3xl h-4xl p-16 shadow-md">
                <div className="flex items-center mb-2">
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
                  <h2 className="text-xl font-semibold ml-2">
                    800+ Flawless Celebrations
                  </h2>
                </div>
                <p
                  style={{
                    color: "#B5B5B5",
                  }}
                  className="text-lg font-md text-gray-600"
                >
                  Enjoy a perfect, stress-free wedding from the first visit to
                  the final goodbyes
                </p>
              </div>
            </div>
            <div
              style={{
                height: "30vh",
                width: "50vw",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                //   flexDirection: "column",
              }}
            >
              <div>
                {/* <button
              className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-base px-8 py-3 rounded-full shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
            > */}
                <button
                  class="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-2xl px-58 py-10 rounded-full shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 cursor-pointer"
                  style={{
                    position:"relative",
                    bottom:"80px",
                    left:"60px",
                  }}
                  type="button"
                >
                  <p> Get my FREE Proposal</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CardScreen;
