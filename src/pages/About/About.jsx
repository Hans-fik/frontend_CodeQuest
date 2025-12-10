// src/pages/AboutPage.jsx
import React from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

// Import assets gambar
import aboutIcon from "../../assets/logo2.png";  // Ikon besar { }
import teamMember1 from "../../assets/anonymous_Person.png"; // Gambar anggota tim
import teamMember2 from "../../assets/anonymous_Person.png"; 
import teamMember3 from "../../assets/anonymous_Person.png"; 
import teamMember4 from "../../assets/anonymous_Person.png"; 
import teamMember5 from "../../assets/anonymous_Person.png"; 

const AboutPage = () => {
  return (
    <div className="bg-[#001433] text-white">
      <Navbar />

      {/* About CodeQuest Section */}
      <section className="flex items-center justify-between p-10">
        <div className="flex items-center gap-6">
          <div className="w-[180px] h-[180px] bg-[#fafafb] rounded-full flex justify-center items-center drop-shadow-lg">
            <img src={aboutIcon} alt="CodeQuest Icon" className="w-[120px]" />
          </div>
          <div className="text-left">
            <h1 className="text-[40px] font-bold mb-4">About CodeQuest</h1>
            <p className="text-[16px] font-medium leading-[1.6] w-[570px] text-justify">
              CodeQuest is a gamified learning platform designed to make programming engaging, practical, and enjoyable. 
              We combine interactive lessons, real-world coding challenges, and reward-based progression to help learners 
              stay motivated and build strong technical skills. Whether you're just starting out or leveling up your coding 
              journey, CodeQuest guides you step by step with a hands-on, game-like experience.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="text-center mt-10">
        <h2 className="text-[36px] font-bold mb-8">Meet the Team Behind CodeQuest</h2>
        <div className="grid grid-cols-3 gap-8 justify-items-center">
          <div className="bg-[#2E4EA3] p-6 rounded-[20px] shadow-lg">
            <img src={teamMember1} alt="Team Member 1" className="w-[150px] h-[150px] rounded-[12px] mb-4" />
            <h3 className="text-[20px] font-bold">Nama</h3>
            <p className="text-[14px] opacity-80">Role</p>
            <p className="text-[13px] italic opacity-70">University</p>
          </div>

          <div className="bg-[#2E4EA3] p-6 rounded-[20px] shadow-lg">
            <img src={teamMember2} alt="Team Member 2" className="w-[150px] h-[150px] rounded-[12px] mb-4" />
            <h3 className="text-[20px] font-bold">Nama</h3>
            <p className="text-[14px] opacity-80">Role</p>
            <p className="text-[13px] italic opacity-70">University</p>
          </div>

          <div className="bg-[#2E4EA3] p-6 rounded-[20px] shadow-lg">
            <img src={teamMember3} alt="Team Member 3" className="w-[150px] h-[150px] rounded-[12px] mb-4" />
            <h3 className="text-[20px] font-bold">Nama</h3>
            <p className="text-[14px] opacity-80">Role</p>
            <p className="text-[13px] italic opacity-70">University</p>
          </div>

          <div className="bg-[#2E4EA3] p-6 rounded-[20px] shadow-lg">
            <img src={teamMember4} alt="Team Member 4" className="w-[150px] h-[150px] rounded-[12px] mb-4" />
            <h3 className="text-[20px] font-bold">Nama</h3>
            <p className="text-[14px] opacity-80">Role</p>
            <p className="text-[13px] italic opacity-70">University</p>
          </div>

          <div className="bg-[#2E4EA3] p-6 rounded-[20px] shadow-lg">
            <img src={teamMember5} alt="Team Member 5" className="w-[150px] h-[150px] rounded-[12px] mb-4" />
            <h3 className="text-[20px] font-bold">Nama</h3>
            <p className="text-[14px] opacity-80">Role</p>
            <p className="text-[13px] italic opacity-70">University</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;