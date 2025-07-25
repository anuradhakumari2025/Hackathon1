import "./Hero.css";
import vivekImg from "../../assets/recipe1.png";
import { Link } from "react-router-dom";

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
            <Link className="heroLink"><p>Buy Latest Recipe</p></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
