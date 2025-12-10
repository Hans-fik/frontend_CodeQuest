import React from "react";
import Button from "../../components/ui/ButtonHanif";
import CourseCard from "../../components/shared/CourseCard";
import LeaderboardPodium from "../../components/shared/LeaderboardPodium";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

import backgroundGunungBulan from "../../assets/backgroundGunungBulan_DashboardPage.png"; // Sesuaikan dengan path gambar Anda
import pythonBg from "../../assets/backgroundCourse_Python.png"; // JANGAN LUPA EKSTENSI!
import sqlBg from "../../assets/backgroundCourse_SQL.png";
import cppBg from "../../assets/backgroundCourse_C++.png";
import jsBg from "../../assets/backgroundCourse_JavaScript.png";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const courses = [
    {
      title: "Python",
      subtitle: "Beginner",
      description: "Learn Python programming",
      imageUrl: pythonBg,
    },
    {
      title: "SQL",
      subtitle: "Beginner",
      description: "Master SQL querying",
      imageUrl: sqlBg,
    },
    {
      title: "C++",
      subtitle: "Beginner",
      description: "Learn C++ programming",
      imageUrl: cppBg,
    },
    {
      title: "JavaScript",
      subtitle: "Beginner",
      description: "Master JavaScript",
      imageUrl: jsBg,
    },
  ];

  return (
    <div className="items-center">
      <Navbar />

      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-[80vh] text-white text-center pt-32 pb-12"
        style={{ backgroundImage: `url(${backgroundGunungBulan})` }}
      >
        <h1 className="text-6xl font-bold text-shadow-md">CodeQuest</h1>
        <p className="text-lg font-semibold text-shadow-sm">
          Unlock your coding skills through immersive challenges and hands-on
          missions. Start learning today — free to explore!
        </p>

        <Link to="/signup">
          <Button label="Start Now" />
        </Link>
      </section>

      {/* Dashboard Content Section */}
      <section className="px-12">
        <h2 className="text-center text-3xl text-white mb-8">
          Popular Courses
        </h2>
        <div className="flex justify-center gap-8">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              subtitle={course.subtitle}
              description={course.description}
              imageUrl={course.imageUrl}
              onClick={() => console.log(`${course.title} clicked`)}
            />
          ))}
        </div>
      </section>

      {/* Leaderboard Section */}
      <section className="px-12 bg-gray-900 py-12">
        <h2 className="text-center text-3xl text-white mb-8">Leaderboard</h2>
        <div className="flex justify-center gap-8">
          <LeaderboardPodium
            rank="1"
            username="Mihu Mahi"
            points="100,000"
            avatarUrl="/src/assets/podium_Leaderboard.jpg"
          />
          <LeaderboardPodium
            rank="2"
            username="John Doe"
            points="90,000"
            avatarUrl="/src/assets/podium_Leaderboard.jpg"
          />
          <LeaderboardPodium
            rank="3"
            username="Jane Smith"
            points="80,000"
            avatarUrl="/src/assets/podium_Leaderboard.jpg"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Dashboard;
