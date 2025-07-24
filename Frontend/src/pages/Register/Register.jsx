import { Link, useNavigate } from "react-router-dom";
import "./Register.scss";
import { useState } from "react";
import axios from "axios";
import API from "../../utils/axios";

const Register = () => {
  let navigate = useNavigate()
   const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/register", formData); // change URL as needed
      console.log("Registration success:", res.data);
      if(res.data){
        navigate("/login")
      }
      // alert("User registered successfully!");
    } catch (error) {
      console.error("Registration failed:", error.response?.data || error.message);
      // alert("Registration failed. Try again.");
    }
  };

  return (
    <div className="register-container">
      <div className="register">
        <form className="register-form" onSubmit={handleSubmit}>
          <h2>Register</h2>

          <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="register-btn">
            Register
          </button>
          <div className="divider">or</div>

          <div className="social-register">
            <button className="google-btn">Login with Google</button>
          </div>
          <p className="login-link">
            Already have an account? &nbsp; <Link to="/login" className="registerLink">  Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
