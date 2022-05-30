import React, { useEffect } from "react";
import { useAuth } from "../utilities/AuthProvider";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: {
    y: "-100vh",
  },
  visible: {
    y: 0,
    transition: {
      duration: 1,
      type: "spring",
    },
  },
};

export const Welcome = ({ title }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  const { currentUser, logout } = useAuth();

  const logoutHandler = () => {
    logout();
  };

  return (
    <section className="welcome">
      <motion.div
        className="info"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
      >
        <p className="welcome-text">
          Welcome to, <span>{currentUser}</span>
        </p>
        <button onClick={logoutHandler} className="logout">
          logout
        </button>
      </motion.div>
    </section>
  );
};
