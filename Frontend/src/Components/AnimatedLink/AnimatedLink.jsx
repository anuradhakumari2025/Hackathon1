import React, { useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import "./AnimatedLink.css";

const AnimatedLink = ({ text, href }) => {
  const underlineRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.from(underlineRef.current, {
      scaleX: 0,
      duration: 0.4,
      ease: "power4.out",
    });
    gsap.to(underlineRef.current, {
      scaleX: 1,
      duration: 0.4,
      ease: "power4.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.from(underlineRef.current, {
      scaleX: 1,
      duration: 0.4,
      ease: "power3.in",
    });
    gsap.to(underlineRef.current, {
      scaleX: 0,
      duration: 0.4,
      ease: "power3.in",
    });
  };

  return (
    <Link
      to={href}
      className="animated-link"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text}
      <span className="underline" ref={underlineRef}></span>
    </Link>
  );
};

export default AnimatedLink;
