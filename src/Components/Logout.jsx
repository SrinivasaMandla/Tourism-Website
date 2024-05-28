import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { useAuth } from "./Authentication";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    logout();
    navigate("/");
  }, [logout, navigate]);

  return <Navbar />;
};

export default Logout;
