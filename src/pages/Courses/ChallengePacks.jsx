// src/pages/PracticePage.jsx
import React, { useState } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

// Import assets gambar untuk Challenge Packs
import pythonBeginnerImg from "../../assets/python_Badge.png"; // Gambar untuk Python for Beginners
import pythonIntermediateImg from "../../assets/python_Badge.png"; // Gambar untuk Python for Intermediate
import pythonAdvancedImg from "../../assets/python_Badge.png"; // Gambar untuk Python for Advanced
import jsBeginnerImg from "../../assets/python_Badge.png"; // Gambar untuk JavaScript for Beginners
import jsIntermediateImg from "../../assets/python_Badge.png"; // Gambar untuk JavaScript for Intermediate
import jsAdvancedImg from "../../assets/python_Badge.png"; // Gambar untuk JavaScript for Advanced
import cppBeginnerImg from "../../assets/python_Badge.png"; // Gambar untuk C++ for Beginners
import cppIntermediateImg from "../../assets/python_Badge.png"; // Gambar untuk C++ for Intermediate
import cppAdvancedImg from "../../assets/python_Badge.png"; // Gambar untuk C++ for Advanced
import comingSoonImg from "../../assets/python_Badge.png"; // Gambar untuk Coming Soon

const PracticePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const challengePacks = [
    { title: "Python for Beginners", imageUrl: pythonBeginnerImg },
    { title: "Python for Intermediate", imageUrl: pythonIntermediateImg },
    { title: "Python for Advanced", imageUrl: pythonAdvancedImg },
    { title: "JavaScript for Beginners", imageUrl: jsBeginnerImg },
    { title: "JavaScript for Intermediate", imageUrl: jsIntermediateImg },
    { title: "JavaScript for Advanced", imageUrl: jsAdvancedImg },
    { title: "C++ for Beginners", imageUrl: cppBeginnerImg },
    { title: "C++ for Intermediate", imageUrl: cppIntermediateImg },
    { title: "C++ for Advanced", imageUrl: cppAdvancedImg },
    { title: "Coming Soon", imageUrl: comingSoonImg },
  ];

  return (
    <div className="bg-[#001433] text-white">
      <Navbar />

      {/* Title Section */}
      <section className="text-center p-12">
        <h1 className="text-[36px] font-bold mb-4">Challenge Packs</h1>
        <p className="text-[18px] font-medium mb-6 text-white text-shadow-md">
          Enhance your coding proficiency through structured practice modules designed to reinforce key programming concepts.
        </p>
      </section>

      {/* Button Filter Section */}
      <section className="flex justify-center gap-6 mb-10">
        <button
          className={`px-8 py-2 rounded-full ${
            selectedCategory === "All" ? "bg-gradient-to-r from-[#FFD200] to-[#F7971E]" : "border-2 border-white"
          }`}
          onClick={() => setSelectedCategory("All")}
        >
          All
        </button>
        <button
          className={`px-8 py-2 rounded-full ${
            selectedCategory === "Web Development" ? "bg-gradient-to-r from-[#FFD200] to-[#F7971E]" : "border-2 border-white"
          }`}
          onClick={() => setSelectedCategory("Web Development")}
        >
          Web Development
        </button>
        <button
          className={`px-8 py-2 rounded-full ${
            selectedCategory === "Data Science" ? "bg-gradient-to-r from-[#FFD200] to-[#F7971E]" : "border-2 border-white"
          }`}
          onClick={() => setSelectedCategory("Data Science")}
        >
          Data Science
        </button>
        <button
          className={`px-8 py-2 rounded-full ${
            selectedCategory === "Computer Science Foundations" ? "bg-gradient-to-r from-[#FFD200] to-[#F7971E]" : "border-2 border-white"
          }`}
          onClick={() => setSelectedCategory("Computer Science Foundations")}
        >
          Computer Science Foundations
        </button>
      </section>

      {/* Challenge Packs Section */}
      <section className="p-12 grid grid-cols-3 gap-8">
        {challengePacks.map((pack, index) => (
          <div key={index} className="bg-[#0B1735] rounded-[20px] shadow-lg p-6 text-center">
            <img src={pack.imageUrl} alt={pack.title} className="w-[175px] h-[175px] mb-4 rounded-[20px]" />
            <h3 className="text-[16px] font-bold">{pack.title}</h3>
          </div>
        ))}
      </section>

      <Footer />
    </div>
  );
};

export default PracticePage;