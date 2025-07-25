import { useEffect, useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import RippleButton from "../RippleButton/RippleButton";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
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
              <div className="cartContainer">
                <div className="close">
                  <h2>Shopping Cart (0)</h2>
                  <i
                    className="ri-close-large-line"
                    onClick={() => setShowCart(!showCart)}
                  ></i>
                </div>

                <div className="cartItems">
                  <div className="item">
                    <div className="img">
                      <img
                        src="https://images.unsplash.com/photo-1627907228175-2bf846a303b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVjaXBlJTIwYm9va3xlbnwwfHwwfHx8MA%3D%3D"
                        alt=""
                      />
                    </div>
                    <div className="det">
                      <h3>Superfood Trail Mix</h3>
                      <p>
                        Price: <span className="price">$50.00</span>
                      </p>
                      <div className="quan">
                        <i className="ri-subtract-line"></i>
                        <span>2</span>
                        <i className="ri-add-fill"></i>
                      </div>
                    </div>
                    <div className="delete">
                      <i className="ri-close-large-line"></i>
                    </div>
                  </div>
                </div>

                <div className="checkout">
                  <Link to="/cart" onClick={() => setShowCart(!showCart)}>
                    <RippleButton label="Checkout Now" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="mobileRight">
        <Link
          to="/cart"
          className="mobCartLink"
          onClick={() => setShowCart(!showCart)}
        >
          <i className="ri-shopping-cart-line"></i>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
