import "./HowItWorks.css";

const HowItWorks = () => {
  return (
    <div className="how-page">
      {/* HEADER */}
      <div className="how-hero fade-in">
        <h1>How SAERS Works</h1>
        <p>
          A smart automated flow that converts accidents into real-time
          emergency response and roadside assistance.
        </p>
      </div>

      {/* FLOW */}
      <div className="how-container">
        <div className="how-step slide-up">
          <span className="step-no">01</span>
          <h3>Accident Occurs</h3>
          <p>
            A vehicle accident or breakdown occurs on highway, rural,
            or isolated road.
          </p>
        </div>

        <div className="connector"></div>

        <div className="how-step slide-up delay1">
          <span className="step-no">02</span>
          <h3>Automatic Detection</h3>
          <p>
            Impact sensors inside the vehicle automatically detect the
            collision without driver interaction.
          </p>
        </div>

        <div className="connector"></div>

        <div className="how-step slide-up delay2">
          <span className="step-no">03</span>
          <h3>GPS Location Shared</h3>
          <p>
            Real-time GPS coordinates of the accident location are fetched
            and sent to the system.
          </p>
        </div>

        <div className="connector"></div>

        <div className="how-step slide-up delay3">
          <span className="step-no">04</span>
          <h3>Emergency Alerts</h3>
          <p>
            Alerts are sent instantly to registered family members
            and the admin panel.
          </p>
        </div>

        <div className="connector"></div>

        <div className="how-step slide-up delay4">
          <span className="step-no">05</span>
          <h3>Admin Coordination</h3>
          <p>
            Admin tracks the vehicle on live map and coordinates
            emergency medical and roadside help.
          </p>
        </div>

        <div className="connector"></div>

        <div className="how-step slide-up delay5">
          <span className="step-no">06</span>
          <h3>Help Dispatched</h3>
          <p>
            Ambulance, hospital, mechanic or tow service is dispatched
            immediately.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
