// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#000515",
        padding: "84px 182px 83px 183px",
        width: "100%",
        color: "#FFF",
        flexWrap: "wrap",
      }}
    >
      <div style={{ textAlign: "center", width: "100%" }}>
        <div style={{ fontFamily: "DM Sans", fontSize: "40px", fontWeight: "700" }}>CodeQuest</div>
        <div
          style={{
            fontFamily: "Inter",
            fontSize: "14px",
            fontWeight: "400",
            opacity: "0.75",
            marginTop: "10px",
          }}
        >
          CodeQuest empowers learners to master real programming skills through fun, interactive, and gamified learning experiences.
        </div>
        <button
          style={{
            padding: "10px 30px",
            background: "#131313",
            borderRadius: "20px",
            color: "#FFF",
            fontSize: "14px",
            fontWeight: "500",
            marginTop: "20px",
          }}
        >
          Contact
        </button>
      </div>

      <div style={{ display: "flex", justifyContent: "center", width: "100%", marginTop: "20px" }}>
        <div style={{ fontFamily: "DM Sans", fontSize: "14px", fontWeight: "400", opacity: "0.7" }}>
          © 2025 CodeQuest. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;