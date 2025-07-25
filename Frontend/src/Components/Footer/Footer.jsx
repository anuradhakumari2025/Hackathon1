import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <svg
        width="100%"
        className="svg"
        viewBox="0 0 600 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <path id="fitTuberCurve" d="M 50 150 Q 300 0 550 150" />
        </defs>
        <text fontSize="70" fontWeight="600" fill="#59432d">
          <textPath href="#fitTuberCurve" startOffset="50%" textAnchor="middle">
            FIT TUBER
          </textPath>
        </text>
      </svg>

      <div className="main">
        <div className="left">
          <p>10% OFF on Your first order</p>

          <div className="email">
            <input placeholder="Your email address" />
            <span>
              <i className="ri-arrow-right-line"></i>
            </span>
          </div>

          <div className="links">
            <Link to={"https://instagram.com/fittuber"} className="navLink">
              <i className="ri-instagram-line"></i>
            </Link>
            <Link to={"https://x.com/FitTuber"} className="navLink">
              <i className="ri-twitter-x-fill"></i>
            </Link>
            <Link to={"https://www.facebook.com/fittuber"} className="navLink">
              <i className="ri-facebook-circle-fill"></i>
            </Link>
            <Link to={"https://youtube.com/fittuber"} className="navLink">
              <i className="ri-youtube-fill"></i>
            </Link>
          </div>
        </div>

        <div className="right">
          <div className="mobileUp">
            <div className="one">
              <h3>EXPLORE</h3>
              <p>Home</p>
              <p>Products</p>
              <p>Videos</p>
              <p>Shop All</p>
            </div>
            <div className="one">
              <h3>LEARN</h3>
              <p>Fitness Tips</p>
              <p>Nutrition Guides</p>
              <p>Healthy Recipes</p>
              <p>Blog</p>
            </div>
          </div>

          <div className="mobileDown">
            <div className="one">
              <h3>SUPPORT</h3>
              <p>Contact Us</p>
              <p>FAQs</p>
              <p>Shipping & Returns</p>
              <p>My Account</p>
            </div>

            <div className="one">
              <h3>CONNECT</h3>
              <p>Affiliate Program</p>
              <p>Refer a Friend</p>
              <p>Follow on YouTube</p>
              <p>Instagram</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="bottom">
        <p>
          ©2025 Fit Tuber | All rights reserved | Privacy Policy | Terms &
          Conditions
        </p>
      </div>
    </div>
  );
};

export default Footer;
