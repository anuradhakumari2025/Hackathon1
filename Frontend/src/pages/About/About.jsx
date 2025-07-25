import "./About.scss";
import vivekImg from "../../assets/vivek4.jpeg";
import thumbnail1 from "../../assets/thumbnail1.jpeg";
import thumbnail2 from "../../assets/thumbnail2.jpeg";
import thumbnail3 from "../../assets/thumbnail3.jpeg";
import { gsap } from "gsap";
import thumbnail4 from "../../assets/thumbnail4.jpeg";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%", 
          toggleActions: "play none none none",
        },
        defaults: { duration: 1, ease: "power3.out" },
      });

      const section = containerRef.current;

      tl.from(section.querySelector(".img"), { opacity: 0, y: -50 })
        .from(section.querySelector(".about h2"), { opacity: 0, y: 20 })
        .from(section.querySelector(".about p"), { opacity: 0, y: 20 })
        .from(section.querySelector(".aboutPlatform h3"), { opacity: 0, y: 20 })
        .from(section.querySelectorAll(".aboutPlatform p"), {
          opacity: 0,
          y: 20,
          stagger: 0.2,
        })
        .from(section.querySelectorAll(".gridImg img"), {
          opacity: 0,
          scale: 0.8,
          stagger: 0.2,
        });
    }, containerRef);

    return () => ctx.revert(); // Cleanup on unmount
  }, []);
  return (
    <div className="aboutPage" ref={containerRef}>
      <div className="img">
        <img src={vivekImg} alt="" />
      </div>
      <div className="about">
        <h2>
          "Your health is your greatest asset, and we’re here to help you
          protect it."
        </h2>
        <p>
          Welcome to FitTuber, your go-to source for simple, natural, and
          effective wellness advice. Our mission is to bring you ancient Indian
          wisdom and combine it with modern-day science to help you live a
          healthier and more conscious life.
        </p>
      </div>

      <div className="aboutPlatform">
        <h3>On this platform, you’ll find:</h3>
        <p>Authentic home remedies & ayurvedic knowledge.</p>
        <p>Yoga, fitness, and mental wellness tips.</p>
        <p>Easy-to-follow healthy recipes.</p>
        <p> Honest reviews of food products & supplements.</p>
        <p>
          Eye-opening videos on how to avoid harmful ingredients in everyday
          products.
        </p>
      </div>
      <div className="gridImg">
        <img src={thumbnail1} alt="" />
        <img src={thumbnail2} alt="" />
        <img src={thumbnail3} alt="" />
        <img src={thumbnail4} alt="" />
      </div>
    </div>
  );
};

export default About;
