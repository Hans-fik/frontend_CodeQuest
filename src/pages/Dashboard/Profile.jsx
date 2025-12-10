// src/pages/Profile.jsx
import React from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

// Mengimpor gambar aset yang sudah disiapkan
import trophyImg from "../../assets/trophy.png";  // Gambar trofi
import starExpImg from "../../assets/starExp.png";  // Gambar XP
import streakImg from "../../assets/sreak.png";  // Gambar streak
import emptyFileImg from "../../assets/empty_File.png";  // Gambar folder kosong
import pythonBadgeImg from "../../assets/python_Badge.png";  // Badge Python
import bannerProfile from "../../assets/background_banner_Profile.png";

const Profile = () => {
  return (
    <div className="bg-[#001433] text-white">
      <Navbar />

      {/* Profile Header Section */}
      <section
        className="relative h-[250px] bg-cover bg-center rounded-[12px]"
        style={{
          backgroundImage: `url(${bannerProfile})`,  // Contoh menggunakan gambar badge sebagai background
        }}
      >
        <div className="absolute bottom-0 left-0 p-6 flex items-center gap-6 bg-gradient-to-t from-[#000515] to-transparent rounded-b-[12px]">
          <div
            className="w-[95px] h-[95px] rounded-full bg-gray-400"
            style={{
              backgroundImage: "url('/path/to/user-avatar.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div>
            <h2 className="font-semibold text-[22px]">Namaaa</h2>
            <p className="text-[14px] text-gray-400">@username</p>
          </div>
          <button className="ml-auto py-2 px-4 bg-[#0F1E3E] rounded-[6px] text-sm">Edit Profile</button>
        </div>
      </section>

      {/* User Stats Section */}
      <section className="p-6">
        <h3 className="text-[20px] font-bold mb-6">User Stats</h3>
        <div className="flex gap-8 justify-center">
          <div className="bg-[#09173A] rounded-[18px] p-6 flex flex-col items-center w-[260px]">
            <img src={trophyImg} alt="Level" className="w-[60px] mb-4" /> {/* Gambar trofi */}
            <h4 className="font-semibold text-[18px]">Level</h4>
            <p className="text-[35px] font-bold text-yellow-400">1</p>
          </div>

          <div className="bg-[#09173A] rounded-[18px] p-6 flex flex-col items-center w-[260px]">
            <img src={starExpImg} alt="XP" className="w-[60px] mb-4" /> {/* Gambar XP */}
            <h4 className="font-semibold text-[18px]">Total XP</h4>
            <p className="text-[35px] font-bold text-yellow-400">1</p>
          </div>

          <div className="bg-[#09173A] rounded-[18px] p-6 flex flex-col items-center w-[260px]">
            <img src={streakImg} alt="Streak" className="w-[60px] mb-4" /> {/* Gambar Streak */}
            <h4 className="font-semibold text-[18px]">Streak</h4>
            <p className="text-[35px] font-bold text-yellow-400">1</p>
          </div>
        </div>
      </section>

      {/* Badges Section */}
      <section className="p-6">
        <h3 className="text-[20px] font-bold mb-6">Badges</h3>
        <div className="bg-[#0A1633] rounded-[18px] p-6 text-center">
          <h4 className="font-bold text-[20px] mb-4">Python Badge</h4>
          <img src={pythonBadgeImg} alt="Python Badge" className="mx-auto w-[150px]" />
        </div>
      </section>

      {/* Your Course Section */}
      <section className="p-6">
        <h3 className="text-[22px] font-bold mb-6">Your Course</h3>
        <div className="bg-[#0B1735] h-[300px] rounded-[18px] flex justify-center items-center">
          <div className="text-center">
            <img src={emptyFileImg} alt="No Courses" className="mx-auto text-5xl text-gray-500 mb-4" /> {/* Gambar folder kosong */}
            <p className="text-[14px] text-gray-400">You have not enrolled in any courses yet.</p>
          </div>
        </div>
      </section>

      {/* Your Practice Section */}
      <section className="p-6">
        <h3 className="text-[22px] font-bold mb-6">Your Practice</h3>
        <div className="bg-[#0B1735] h-[300px] rounded-[18px] flex justify-center items-center">
          <div className="text-center">
            <img src={emptyFileImg} alt="No Practice" className="mx-auto text-5xl text-gray-500 mb-4" /> {/* Gambar folder kosong */}
            <p className="text-[14px] text-gray-400">You have no practice activities at the moment.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Profile;