// src/components/button/LogoutBtn.jsx
import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LogoutBtn = () => {
  const { logout } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <button onClick={handleLogout} className="logout-btn">
      Sair
    </button>
  );
};

export default LogoutBtn;
