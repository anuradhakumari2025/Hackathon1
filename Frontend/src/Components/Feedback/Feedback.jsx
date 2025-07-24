import Testimonial from "../Testimonial";
import "./Feedback.css";

const Feedback = () => {
  return (
    <div className="testimonial">
      <div className="feedback">
        <div className="feedLeft">
          <h1>Unlike Any Other Diet Plan</h1>
        </div>
        <div className="feedRight">
          <div className="left">
            <h1> 9 in 10</h1>
            <p>Fit Tuber buyers say it works</p>
            <hr />
            <div className="consumer">
              <span>#1</span>
              <h3>in Consumer Satisfaction</h3>
            </div>
            <p>
              Ranked by Fit Tuber buyers highest on taste & efficacy vs
              buyers of competitive products.
            </p>
          </div>
          <div className="right">
            <h1> 94%</h1>
            <p>Fit Tuber buyers say it works</p>
            <hr />
            <p>People switch to Fit Tuber because of:</p>
            <h3>
              <span>1</span>Easy Recipe
            </h3>
            <h3>
              <span>2</span>Healthy Recipe
            </h3>
            <h3>
              <span>3</span>Better Taste
            </h3>
          </div>
        </div>
      </div>
      <div className="slider">
        <h1> Trusted For Honest Wellness Guidance</h1>
        <Testimonial />
      </div>
    </div>
  );
};

export default Feedback;
