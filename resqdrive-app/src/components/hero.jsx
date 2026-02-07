import "./hero.css";
import carImg from "../assets/car.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-left animate-left">
        <span className="tag pulse">
          Advanced Safety Technology
        </span>

        <h1>
          Your Safety, <br />
          <span>Always Within Reach</span>
        </h1>

        <p>
          Smart accident emergency response with automatic detection,
          real-time GPS tracking and instant roadside assistance.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn glow">Get Started</button>
          <button className="secondary-btn">Emergency Alert</button>
        </div>

        <div className="stats">
          <div className="stat fade-up">
            <h3>24/7</h3>
            <p>Protection</p>
          </div>
          <div className="stat fade-up delay1">
            <h3>30s</h3>
            <p>Auto Alerts</p>
          </div>
          <div className="stat fade-up delay2">
            <h3>GPS</h3>
            <p>Live Tracking</p>
          </div>
        </div>
      </div>

      <div className="hero-right animate-right">
        <div className="mock-card floating">
          <img src={carImg} alt="Emergency Response Car" className="car-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
