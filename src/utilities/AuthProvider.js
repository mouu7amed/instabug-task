import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [loginError, setLoginError] = useState("");

  const currentUser =
    !!localStorage.getItem("user") && localStorage.getItem("user");
  const navigate = useNavigate();

  const users = [
    { email: "mohamed@instabug.com", password: "A12345678" },
    { email: "mohamed1@instabug.com", password: "A12345678" },
    { email: "mohamed2@instabug.com", password: "A12345678" },
    { email: "mohamed3@instabug.com", password: "A12345678" },
    { email: "mohamed4@instabug.com", password: "A12345678" },
    { email: "mohamed5@instabug.com", password: "A12345678" },
    { email: "mohamed6@instabug.com", password: "A12345678" },
    { email: "mohamed7@instabug.com", password: "A12345678" },
  ];

  const login = (email, password) => {
    const usercheck = users.find(
      (user) => user.email === email && user.password === password
    );

    if (usercheck) {
      localStorage.setItem("user", email);
      navigate("/welcome", { replace: true });
    } else {
      setLoginError("Your email and/or password are incorrect");
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login", { replace: true });
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout, loginError }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
