import React from "react";
import { replace, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const logouthandler = () => {

    console.log("Clicked on Logout");
    localStorage.removeItem("user");
    navigate("/login", replace(true));
  };

  return (
    <div>
      <h1>Dashboard</h1>

      <h2>Welcome {user?.email}</h2>

      <button
        className="btn btn-sm btn-danger"
        onClick={logouthandler}
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;