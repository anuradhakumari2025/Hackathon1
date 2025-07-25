import { useEffect, useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import AnimatedLink from "../AnimatedLink/AnimatedLink";
const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShowNavbar(false); // scroll down → hide
    } else {
      setShowNavbar(true); // scroll up → show
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);
  const [showMenu, setShowMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);

  return (
    <nav className={`${showNavbar ? "show" : "hide"}`}>
      <div className="navLeft">
        <div>
          <Link to="/products" className="navLink">
            <h3>Shop</h3>
          </Link>
        </div>
        <div>
          <Link to="/about" className="navLink">
            <h3>About</h3>
          </Link>
        </div>
      </div>

      <div className="mobileLeft">
        <i className="ri-menu-line" onClick={() => setShowMenu(!showMenu)}></i>

        {showMenu && (
          <div className="menu">
            <div className="close">
              <i
                className="ri-close-large-line"
                onClick={() => setShowMenu(!showMenu)}
              ></i>
            </div>
            <Link
              to="/products"
              className="navLink"
              onClick={() => setShowMenu(!showMenu)}
            >
              <h3>Shop</h3>
            </Link>
            <Link
              to="/about"
              className="navLink"
              onClick={() => setShowMenu(!showMenu)}
            >
              <h3>About</h3>
            </Link>
            <Link
              to="/login"
              className="navLink"
              onClick={() => setShowMenu(!showMenu)}
            >
              <h3>Login</h3>
            </Link>
          </div>
        )}
      </div>

      <div className="logo">
        <svg
          className="svg"
          viewBox="0 0 600 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <path id="fitTuberCurve" d="M 50 150 Q 300 0 550 150" />
          </defs>
          <text fontSize="50" fontWeight="600" fill="#59432d">
            <textPath
              href="#fitTuberCurve"
              startOffset="50%"
              textAnchor="middle"
            >
              <Link to="/">FIT TUBER</Link>
            </textPath>
          </text>
        </svg>
      </div>

      <div className="navRight">
        <i className="ri-search-line"></i>
        <div>
          <Link to="/login" className="navLink">
            <h3>Login</h3>
          </Link>
        </div>
        <div className="">
          <i
            className="ri-shopping-cart-line"
            onClick={() => setShowCart(!showCart)}
          ></i>
          {showCart && (
            <div className="cart">
              <div className="close">
                <h2>Shopping Cart (0)</h2>
                <i
                  className="ri-close-large-line"
                  onClick={() => setShowCart(!showCart)}
                ></i>
              </div>

            </div>
          )}
        </div>
      </div>
      <div className="mobileRight">
        <i className="ri-shopping-cart-line"></i>
      </div>
    </nav>
  );
};

export default Navbar;
