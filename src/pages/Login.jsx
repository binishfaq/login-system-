import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handlelogin = async (e) => {
    e.preventDefault();

    try {
      const res = await loginUser({
        email,
        password,
      });

      if (res.data.success) {
        alert("Login Successful");

        localStorage.setItem("user", JSON.stringify({ email }));

        navigate("/dashboard");
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Invalid Username or Password");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width: "400px" }}>
        
        <h3 className="text-center mb-3">Login</h3>

        <form onSubmit={handlelogin}>
          
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

          <button className="btn btn-primary w-100">
            Login
          </button>

        </form>

      </div>
    </div>
  );
};

export default Login;