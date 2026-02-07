import { useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert(`Welcome to SAERS, ${fullName}!`);
    }, 1500);
  };

  return (
    <div className="auth-container">
      <div className="auth-card slide-up">
        {/* Form Section */}
        <div className="auth-form-section">
          <Link to="/" className="back-link">← Home</Link>
          <h2>Create Account</h2>
          <p>Join SAERS safety network</p>

          <form onSubmit={handleSignup}>
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit" className="auth-btn" disabled={loading}>
              {loading ? "Creating Account..." : "Signup"}
            </button>
          </form>

          <span className="switch">
            Already have an account? <Link to="/login">Login</Link>
          </span>
        </div>

        {/* Info Section */}
        <div className="auth-info-section">
          <div className="info-item">
            <h3>🛡️ Stay Safe</h3>
            <p>Get connected to emergency services in seconds</p>
          </div>
          <div className="info-item">
            <h3>👥 Emergency Contacts</h3>
            <p>Add trusted contacts for immediate alerts</p>
          </div>
          <div className="info-item">
            <h3>📱 Mobile First</h3>
            <p>Available on all devices, anytime, anywhere</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
