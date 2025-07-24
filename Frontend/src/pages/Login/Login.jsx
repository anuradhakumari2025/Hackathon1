import { useState } from "react";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import API from "../../utils/axios";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", formData);
      setMessage("Login successful!");
      // console.log("Response:", res.data);
      if (res.data) {
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.message || "Login failed.");
    }
  };
  return (
    <div className="login-container">
      <div className="login">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>

          <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              name="username" // this must match the state key
              value={formData.username}
              placeholder="Enter your username"
              required
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>

          <div className="divider">or</div>

          <div className="social-login">
            <button className="google-btn">Login with Google</button>
            {/* <button className="github-btn">Login with GitHub</button> */}
          </div>

          <p className="signup-link">
            Don't have an account? &nbsp;
            <Link to="/register" className="loginLink">
              Register
            </Link>
          </p>
          {message && <p className="login-message">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
