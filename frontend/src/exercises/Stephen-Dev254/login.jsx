import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { fakeLogin } from "./ProtectedRoute";
import styles from "./Login.module.css";

export default function Login() {
  const [username, setUsername] = useState("Bret");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/profile";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim()) {
      setError("Username is required.");
      return;
    }
    fakeLogin(username.trim());
    navigate(from, { replace: true });
  };

  return (
    <main className={styles.page}>
      <section className={styles.card} aria-labelledby="login-heading">
        <h1 id="login-heading">Login</h1>
        <p>Simulated login - enter any username. Demo: Bret</p>
        {error && <p role="alert" className={styles.error}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className={styles.group}>
            <label htmlFor="login-username">Username *</label>
            <input id="login-username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} required autoComplete="username" />
          </div>
          <button type="submit" className={styles.btn}>Log In</button>
        </form>
      </section>
    </main>
  );
}