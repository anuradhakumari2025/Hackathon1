import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./SplashScreen.scss";

const SplashScreen = ({ onFinish }) => {
  const lettersRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(onFinish, 1000);
      },
    });

    tl.from(lettersRef.current[0], { x: -100, opacity: 0, duration: 0.6 })
      .from(lettersRef.current[1], { y: -100, opacity: 0, duration: 0.6 })
      .from(lettersRef.current[2], { x: 100, opacity: 0, duration: 0.6 })
      .from(lettersRef.current[3], {
        y: 100,
        rotation: 360,
        opacity: 0,
        duration: 0.8,
      })
      .from(lettersRef.current[4], { y: -100, opacity: 0, duration: 0.6 })
      .from(lettersRef.current[5], { x: 100, opacity: 0, duration: 0.6 })
      .from(lettersRef.current[6], { y: 100, opacity: 0, duration: 0.6 })
      .from(lettersRef.current[7], { y: -100, opacity: 0, duration: 0.6 });
  }, [onFinish]);

  const letters = "FITTUBER".split("");

  return (
    <div className="splashScreen">
      {letters.map((char, i) => (
        <span key={i} ref={(el) => (lettersRef.current[i] = el)}>
          {char}
        </span>
      ))}
    </div>
  );
};

export default SplashScreen;
