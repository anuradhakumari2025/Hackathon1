import { useRef } from "react";
import { gsap } from "gsap";
import "./RippleButton.css";

const RippleButton = ({ label, onClick, className = "" }) => {
  const btnRef = useRef(null);

  const handleMouseEnter = (e) => {
    const circle = document.createElement("span");
    circle.classList.add("ripple");

    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
    btnRef.current.appendChild(circle);

    gsap.fromTo(
      circle,
      { scale: 0, opacity: 1,width:0 },
      {
        scale: 4,
        opacity: 0,
        duration: 3,
        width:"100%",
        ease: "power4.out",
        onComplete: () => {
          circle.remove();
        },
      }
    );
  };

  return (
    <button
      ref={btnRef}
      className={`ripple-btn ${className}`}
      onMouseEnter={handleMouseEnter}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default RippleButton;
