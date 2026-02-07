import "./Features.css";

const Features = () => {
  return (
    <section className="features-section">
      <div className="features-header">
        <h2>Powerful Safety Features</h2>
        <p>
          Smart technology that connects vehicles, people, and emergency
          services for faster response.
        </p>
      </div>

      <div className="features-grid">
        <div className="feature-card fade-up">
          <div className="icon">🚨</div>
          <h3>Automatic Accident Detection</h3>
          <p>
            Vehicle-mounted sensors detect accidents instantly and trigger
            emergency alerts without user action.
          </p>
        </div>

        <div className="feature-card fade-up delay1">
          <div className="icon">📍</div>
          <h3>Real-Time GPS Tracking</h3>
          <p>
            Live vehicle location is shared with emergency contacts and admin
            for quick navigation and response.
          </p>
        </div>

        <div className="feature-card fade-up delay2">
          <div className="icon">👥</div>
          <h3>Emergency Contact Alerts</h3>
          <p>
            Registered family members receive instant alerts with location and
            accident details.
          </p>
        </div>

        <div className="feature-card fade-up delay3">
          <div className="icon">🧑‍💻</div>
          <h3>Admin Control Panel</h3>
          <p>
            Admin monitors incidents on a live dashboard and coordinates
            emergency services efficiently.
          </p>
        </div>

        <div className="feature-card fade-up delay4">
          <div className="icon">🏥</div>
          <h3>Nearby Hospital Finder</h3>
          <p>
            Automatically identifies nearby hospitals and medical facilities
            based on accident location.
          </p>
        </div>

        <div className="feature-card fade-up delay5">
          <div className="icon">🛠</div>
          <h3>Roadside Assistance</h3>
          <p>
            Mechanics, tow services, or help teams are dispatched immediately
            from the admin panel.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
