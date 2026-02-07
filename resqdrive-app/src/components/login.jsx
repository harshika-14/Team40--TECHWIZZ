import { useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert(`Logged in with ${email}!`);
    }, 1500);
  };

  return (
    <div className="auth-container">
      <div className="auth-card slide-in">
        {/* Form Section */}
        <div className="auth-form-section">
          <Link to="/" className="back-link">← Home</Link>
          <h2>Welcome Back</h2>
          <p>Login to your SAERS account</p>

          <form onSubmit={handleLogin}>
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
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <span className="switch">
            New to SAERS? <Link to="/signup">Create account</Link>
          </span>
        </div>

        {/* Info Section */}
        <div className="auth-info-section">
          <div className="info-item">
            <h3>🚨 24/7 Protection</h3>
            <p>Get instant emergency alerts and real-time roadside assistance</p>
          </div>
          <div className="info-item">
            <h3>📍 Live Tracking</h3>
            <p>Share your location with emergency contacts instantly</p>
          </div>
          <div className="info-item">
            <h3>⚡ Auto Detection</h3>
            <p>Automatic accident detection with smart alerts</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

