import "./Hero.css";
import vivekImg from "../../assets/vivek2.jpeg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="main">
        <div className="left">
          <img src={vivekImg} alt="" />
        </div>
        <div className="tagline">
          <h1>
            Start Your Health Journey with <br />
            <span>Fit Tuber</span>
          </h1>
          <p>Simple, natural wellness tips backed by evidence</p>
          <div>
            <p>Watch Latest Video</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
