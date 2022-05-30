import React, { useEffect } from "react";
import Img from "../assets/no-match.png";

export const NoMatch = ({ title }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <section className="no-match">
      <img src={Img} alt="" />
      <div>
        <h3>404 - Page Not Found!</h3>
        <p>Sorry, that page doesn't exist. What would you like to do?</p>
      </div>
    </section>
  );
};
