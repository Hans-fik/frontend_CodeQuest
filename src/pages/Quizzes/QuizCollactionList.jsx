import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

// ✅ PERBAIKAN: Asumsi 'assets' berada di dalam 'src', maka path hanya '../assets'
import pythonBeginnerImg from "../../assets/challenge_Packs/challenge_PythonforBeginners.png"; // Gambar untuk Python for Beginners
import pythonIntermediateImg from "../../assets/python_Badge.png"; // Gambar untuk Python for Intermediate
import pythonAdvancedImg from "../../assets/python_Badge.png"; // Gambar untuk Python for Advanced
import jsBeginnerImg from "../../assets/python_Badge.png"; // Gambar untuk JavaScript for Beginners
import jsIntermediateImg from "../../assets/python_Badge.png"; // Gambar untuk JavaScript for Intermediate
import jsAdvancedImg from "../../assets/python_Badge.png"; // Gambar untuk JavaScript for Advanced
import cppBeginnerImg from "../../assets/python_Badge.png"; // Gambar untuk C++ for Beginners
import cppIntermediateImg from "../../assets/python_Badge.png"; // Gambar untuk C++ for Intermediate
import cppAdvancedImg from "../../assets/python_Badge.png"; // Gambar untuk C++ for Advanced
import comingSoonImg from "../../assets/python_Badge.png"; // Gambar untuk Coming Soon

// ❌ HAPUS IMPOR KOMPONEN: Karena komponen tidak digunakan untuk navigasi
// import QuizCollectionDetailPage from "../Quizzes/QuizCollectionDetail"; 

const PracticePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  const challengePacks = [
    // Data sudah benar, path detailPage adalah string
    { title: "Python for Beginners", imageUrl: pythonBeginnerImg, detailPage: "/quizCollectionDetail" },
    { title: "Python for Intermediate", imageUrl: pythonIntermediateImg, detailPage: "/quizCollectionDetail" },
    { title: "Python for Advanced", imageUrl: pythonAdvancedImg, detailPage: "/quizCollectionDetail" },
    { title: "JavaScript for Beginners", imageUrl: jsBeginnerImg, detailPage: "/quizCollectionDetail" },
    { title: "JavaScript for Intermediate", imageUrl: jsIntermediateImg, detailPage: "/quizCollectionDetail" },
    { title: "JavaScript for Advanced", imageUrl: jsAdvancedImg, detailPage: "/quizCollectionDetail" },
    { title: "C++ for Beginners", imageUrl: cppBeginnerImg, detailPage: "/quizCollectionDetail" },
    { title: "C++ for Intermediate", imageUrl: cppIntermediateImg, detailPage: "/quizCollectionDetail" },
    { title: "C++ for Advanced", imageUrl: cppAdvancedImg, detailPage: "/quizCollectionDetail" },
    { title: "Coming Soon", imageUrl: comingSoonImg, detailPage: "/quizCollectionDetail" },
  ];

  const handleCardClick = (detailPage) => {
    // ✅ SOLUSI: Mengarahkan ke string path yang benar
    console.log("Navigating to:", detailPage); // Tambahkan log untuk debugging
    navigate(detailPage); 
  };

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

      {/* Button Filter Section (Kode tetap) */}
      <section className="flex justify-center gap-6 mb-10">
        <button
          className={`px-8 py-2 rounded-full ${
            selectedCategory === "All" ? "bg-gradient-to-r from-[#FFD200] to-[#F7971E]" : "border-2 border-white"
          }`}
          onClick={() => setSelectedCategory("All")}
        >
          All
        </button>
        {/* ... tombol filter lainnya ... */}
      </section>

      {/* Challenge Packs Section */}
      <section className="p-12 grid grid-cols-3 gap-8">
        {challengePacks.map((pack, index) => (
          <div
            key={index}
            className="bg-[#0B1735] rounded-[20px] shadow-lg p-6 text-center cursor-pointer hover:bg-[#152345] transition"
            onClick={() => handleCardClick(pack.detailPage)} // Memanggil fungsi dengan string path
          >
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