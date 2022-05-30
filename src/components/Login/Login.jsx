import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../utilities/AuthProvider";
import { LoginForm } from "./LoginForm";
import { LoginSlider } from "./LoginSlider";

export const Login = ({ title }) => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = title;

    if (currentUser) {
      navigate("/welcome", { replace: true });
    }
  }, [title, navigate, currentUser]);

  return (
    <section className="login">
      <LoginForm />
      <LoginSlider />
    </section>
  );
};
