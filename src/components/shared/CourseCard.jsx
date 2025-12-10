import React from "react";

const CourseCard = ({ title, subtitle, description, imageUrl, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        display: "flex",
        flexDirection: "column",
        width: "387px",
        height: "250px",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "30px",
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        color: "#FFF",
      }}
    >
      <div style={{ fontFamily: "Montserrat", fontWeight: "700", fontSize: "31px" }}>{title}</div>
      <div style={{ fontFamily: "Montserrat", fontWeight: "400", fontSize: "14px" }}>{subtitle}</div>
      <div style={{ fontFamily: "Poppins", fontWeight: "500", fontSize: "10px", width: "319px" }}>
        {description}
      </div>
    </div>
  );
};

export default CourseCard;