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
        <Link to="/" className="back-link">← Home</Link>
        <h2>Welcome Back</h2>
        <p>Login to access emergency services</p>

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
          Don't have an account? <Link to="/signup">Signup</Link>
        </span>
      </div>
    </div>
  );
};

export default Login;

