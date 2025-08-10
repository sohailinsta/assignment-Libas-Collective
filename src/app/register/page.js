"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "../../components/AuthContext";

export default function RegisterPage() {
  const { register } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    try {
      await register(email, password);
      router.push("/"); // Redirect to home on success
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-lg" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-control mb-3"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="form-control mb-3"
          />
          {error && <div className="alert alert-danger">{error}</div>}
          <button type="submit" className="btn btn-success w-100">
            Register
          </button>
        </form>
        <div className="text-center mt-3">
          <small>
            Already have an account?{" "}
            <Link href="/login" className="text-primary">
              Login here
            </Link>
          </small>
        </div>
      </div>
    </div>
  );
}
