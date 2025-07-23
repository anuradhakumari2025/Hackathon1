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
        <text
          fontSize="50"
          fontWeight="500"
          fill="#42210b"
        >
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
            <span>--</span>
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
          <div className="one">
            <h3>Shop</h3>
            <p>Coffees & Creamers</p>
            <p>Proteins</p>
            <p>Supplement</p>
            <p>Shop All</p>
          </div>

          <div className="one">
            <h3>Shop</h3>
            <p>Coffees Creamers</p>
            <p>Proteins</p>
            <p>Supplement</p>
            <p>Shop All</p>
          </div>

          <div className="one">
            <h3>Shop</h3>
            <p>Coffees & Creamers</p>
            <p>Proteins</p>
            <p>Supplement</p>
            <p>Shop All</p>
          </div>

          <div className="one">
            <h3>Shop</h3>
            <p>Coffees & Creamers</p>
            <p>Proteins</p>
            <p>Supplement</p>
            <p>Shop All</p>
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
