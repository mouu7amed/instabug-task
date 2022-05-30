import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utilities/AuthProvider";

export const Main = ({ title }) => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = title;
    if (currentUser) {
      navigate("/welcome");
    } else {
      navigate("/login");
    }
  }, [title, currentUser, navigate]);
  return <></>;
};
