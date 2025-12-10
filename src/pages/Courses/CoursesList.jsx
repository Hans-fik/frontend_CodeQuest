// src/pages/CourseListPage.jsx
import React, { useState } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

// Import assets gambar untuk Course Packs
import pythonBeginnerImg from "../../assets/python_Badge.png"; // Gambar untuk Python for Beginners
import pythonIntermediateImg from "../../assets/python_Badge.png"; // Gambar untuk Python for Intermediate
import pythonAdvancedImg from "../../assets/python_Badge.png"; // Gambar untuk Python for Advanced
import jsBeginnerImg from "../../assets/python_Badge.png"; // Gambar untuk JavaScript for Beginners
import jsIntermediateImg from "../../assets/python_Badge.png"; // Gambar untuk JavaScript for Intermediate
import jsAdvancedImg from "../../assets/python_Badge.png"; // Gambar untuk JavaScript for Advanced
import cppBeginnerImg from "../../assets/python_Badge.png"; // Gambar untuk C++ for Beginners
import cppIntermediateImg from "../../assets/python_Badge.png"; // Gambar untuk C++ for Intermediate
import cppAdvancedImg from "../../assets/python_Badge.png"; // Gambar untuk C++ for Advanced

const CourseListPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const coursePacks = [
    { title: "Python for Beginners", imageUrl: pythonBeginnerImg, duration: "2 Weeks", students: "156 Students" },
    { title: "Python for Intermediate", imageUrl: pythonIntermediateImg, duration: "2 Weeks", students: "156 Students" },
    { title: "Python for Advanced", imageUrl: pythonAdvancedImg, duration: "2 Weeks", students: "156 Students" },
    { title: "JavaScript for Beginners", imageUrl: jsBeginnerImg, duration: "2 Weeks", students: "156 Students" },
    { title: "JavaScript for Intermediate", imageUrl: jsIntermediateImg, duration: "2 Weeks", students: "156 Students" },
    { title: "JavaScript for Advanced", imageUrl: jsAdvancedImg, duration: "2 Weeks", students: "156 Students" },
    { title: "C++ for Beginners", imageUrl: cppBeginnerImg, duration: "2 Weeks", students: "156 Students" },
    { title: "C++ for Intermediate", imageUrl: cppIntermediateImg, duration: "2 Weeks", students: "156 Students" },
    { title: "C++ for Advanced", imageUrl: cppAdvancedImg, duration: "2 Weeks", students: "156 Students" },
  ];

  return (
    <div className="bg-[#001433] text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="text-center p-12">
        <h1 className="text-[36px] font-bold mb-4">All Courses</h1>
      </section>

      {/* Course Packs Grid */}
      <section className="p-12 grid grid-cols-3 gap-8">
        {coursePacks.slice(0, 6).map((pack, index) => (
          <div key={index} className="bg-[#0B1735] rounded-[20px] shadow-lg p-6 text-center">
            <img src={pack.imageUrl} alt={pack.title} className="w-[175px] h-[175px] mb-4 rounded-[20px]" />
            <h3 className="text-[16px] font-bold">{pack.title}</h3>
            <p className="text-[14px] mb-2">{pack.duration} · {pack.students}</p>
            <button className="bg-[#FFD200] text-black py-2 px-4 rounded-[50px] mt-4">View More</button>
          </div>
        ))}
      </section>

      {/* Second Row for Courses */}
      <section className="p-12 grid grid-cols-2 gap-8">
        {coursePacks.slice(6).map((pack, index) => (
          <div key={index} className="bg-[#0B1735] rounded-[20px] shadow-lg p-6 text-center">
            <img src={pack.imageUrl} alt={pack.title} className="w-[175px] h-[175px] mb-4 rounded-[20px]" />
            <h3 className="text-[16px] font-bold">{pack.title}</h3>
            <p className="text-[14px] mb-2">{pack.duration} · {pack.students}</p>
            <button className="bg-[#FFD200] text-black py-2 px-4 rounded-[50px] mt-4">View More</button>
          </div>
        ))}
      </section>

      <Footer />
    </div>
  );
};

export default CourseListPage;
