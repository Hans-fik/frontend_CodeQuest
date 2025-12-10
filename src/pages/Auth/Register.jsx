import React, { useState } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log("Signing up with", name, email, password);
  };

  return (
    <div
      style={{
        backgroundImage: `url('/src/assets/backgroundGunung_Login&SignUp.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#FFF",
        height: "860px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Navbar />
      <section style={{ width: "486px", backgroundColor: "rgba(0, 0, 0, 0.7)", borderRadius: "12px", padding: "20px" }}>
        <h1 style={{ textAlign: "center", fontSize: "64px" }}>Sign Up</h1>

        <form onSubmit={handleSignUp} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            required
            style={{ padding: "14px", borderRadius: "16px", border: "2px solid #FFF", backgroundColor: "transparent", color: "#FFF" }}
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            style={{ padding: "14px", borderRadius: "16px", border: "2px solid #FFF", backgroundColor: "transparent", color: "#FFF" }}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            style={{ padding: "14px", borderRadius: "16px", border: "2px solid #FFF", backgroundColor: "transparent", color: "#FFF" }}
          />
          <button
            type="submit"
            style={{
              padding: "12px 0",
              background: "linear-gradient(180deg, #FFD200 0%, #F7971E 100%)",
              borderRadius: "50px",
              color: "#FFF",
              fontWeight: "700",
              fontSize: "18px",
            }}
          >
            Sign Up
          </button>
        </form>

        <p style={{ textAlign: "center", color: "#FFF" }}>
          Already have an account? <a href="/login" style={{ color: "#FFD200", textDecoration: "underline" }}>Login</a>
        </p>
      </section>
      <Footer />
    </div>
  );
};

export default SignUp;