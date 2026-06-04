import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../services/api";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  const navigate = useNavigate();

  const handlesignup = async (e) => {
    e.preventDefault();

    try {
        const res = await registerUser({email, password})

        if(res.data.success){
            alert("user register successfully")
            navigate("/login")
        }else{
            alert(res.data.message)
        }
    } catch (error) {
        alert("server error")

        
    }

   
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width: "400px" }}>

        <h3 className="text-center mb-3">Register Form</h3>

        <form onSubmit={handlesignup}>
          
          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Confirm password"
              onChange={(e) => setConfirmpassword(e.target.value)}
            />
          </div>

          <button className="btn btn-primary w-100">
            Register
          </button>

        </form>

        <p className="text-center mt-3">
          Already have an account? <Link to="/login">Login</Link>
        </p>

      </div>
    </div>
  );
};

export default Register;