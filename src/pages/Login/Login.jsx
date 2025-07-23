import "./Login.scss";

const Login = () => {
  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Login</h2>

        <div className="input-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" required />
        </div>

        <button type="submit" className="login-btn">
          Login
        </button>

        <div className="divider">or</div>

        <div className="social-login">
          <button className="google-btn">Login with Google</button>
          <button className="github-btn">Login with GitHub</button>
        </div>

        <p className="signup-link">
          Don't have an account? <a href="#">Sign up</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
