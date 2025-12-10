import React from "react";

const LeaderboardPodium = ({ rank, username, points, avatarUrl }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "327px",
        height: "542px",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1E2A47",
        borderRadius: "20px",
        margin: "10px",
      }}
    >
      <div
        style={{
          width: "105px",
          height: "105px",
          borderRadius: "9px",
          backgroundColor: "#FFFAFA",
          backgroundImage: `url(${avatarUrl})`,
          backgroundSize: "cover",
        }}
      ></div>
      <div style={{ color: "#FFF", fontFamily: "Inter", fontWeight: "600", fontSize: "22px" }}>{username}</div>
      <div style={{ color: "#FFD400", fontFamily: "Inter", fontWeight: "600", fontSize: "22px" }}>{points} points</div>
    </div>
  );
};

export default LeaderboardPodium;