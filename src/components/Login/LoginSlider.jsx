import { faCircle, faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import ImageOne from "../../assets/slider-1.png";
import ImageTwo from "../../assets/slider-2.png";
import ImageThree from "../../assets/slider-3.png";
import { motion } from "framer-motion";

const sliderVariants = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: {
      duration: 1,
      type: "spring",
    },
  },
};

const slides = [
  {
    label: "Accelerate Your Entire Mobile Team Workflow",
    imgPath: ImageOne,
  },
  {
    label: "The Most Comprehensive Bug Reporting Tool for Mobile Apps",
    imgPath: ImageTwo,
  },
  {
    label: "Secure Crach Reporting With Real-Time Alerts",
    imgPath: ImageThree,
  },
];

export const LoginSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setIndex(index + 1);
      if (index === slides.length - 1) {
        setIndex(0);
      }
    }, 5000);
  });

  return (
    <motion.div
      className="slider"
      variants={sliderVariants}
      initial="hidden"
      animate="visible"
    >
      <img src={slides[index].imgPath} alt="Slide" />
      <p className="slide-label">{slides[index].label}</p>
      <div className="slider-nav">
        <button onClick={() => setIndex(0)}>
          {index === 0 ? (
            <FontAwesomeIcon icon={faCircle} />
          ) : (
            <FontAwesomeIcon icon={faCircleNotch} />
          )}
        </button>
        <button onClick={() => setIndex(1)}>
          {index === 1 ? (
            <FontAwesomeIcon icon={faCircle} />
          ) : (
            <FontAwesomeIcon icon={faCircleNotch} />
          )}
        </button>
        <button onClick={() => setIndex(2)}>
          {index === 2 ? (
            <FontAwesomeIcon icon={faCircle} />
          ) : (
            <FontAwesomeIcon icon={faCircleNotch} />
          )}
        </button>
      </div>
    </motion.div>
  );
};
