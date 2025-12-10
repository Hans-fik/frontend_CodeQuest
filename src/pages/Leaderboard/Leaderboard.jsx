// src/pages/LeaderboardPage.jsx
import React from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

// Import assets gambar untuk podium
import podiumAvatar from "../../assets/anonymous_Person.png"; // Avatar placeholder

const LeaderboardPage = () => {
  const podiumData = [
    { rank: "🥇", username: "Mihu Mahi", points: "2,000", totalXP: "100,000", avatarUrl: podiumAvatar },
    { rank: "🥈", username: "John Doe", points: "2,000", totalXP: "100,000", avatarUrl: podiumAvatar },
    { rank: "🥉", username: "Jane Smith", points: "2,000", totalXP: "100,000", avatarUrl: podiumAvatar },
  ];

  const rankingData = [
    { rank: 4, username: "Lorem Ipsum", totalXP: "1,000" },
    { rank: 5, username: "Lorem Ipsum", totalXP: "1,000" },
    { rank: 6, username: "Lorem Ipsum", totalXP: "1,000" },
    { rank: 7, username: "Lorem Ipsum", totalXP: "1,000" },
    { rank: 8, username: "Lorem Ipsum", totalXP: "1,000" },
    { rank: 9, username: "Lorem Ipsum", totalXP: "1,000" },
    { rank: 10, username: "Lorem Ipsum", totalXP: "1,000" },
    { rank: 11, username: "Lorem Ipsum", totalXP: "1,000" },
  ];

  return (
    <div className="bg-[#001433] text-white">
      <Navbar />

      {/* Leaderboard Section */}
      <section className="p-6 text-center">
        <h1 className="text-[36px] font-bold mb-6 text-shadow-lg">Leaderboard</h1>

        {/* Top 3 Podium */}
        <div className="flex justify-center gap-8 mb-10">
          {podiumData.map((podium, index) => (
            <div
              key={index}
              className="bg-[#0F1E3E] rounded-[20px] p-6 shadow-lg w-[327px] h-[542px] flex flex-col items-center"
            >
              <div
                className="w-[105px] h-[105px] rounded-full bg-[#FFFAFA] mb-6"
                style={{
                  backgroundImage: `url(${podium.avatarUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <h3 className="text-[22px] font-semibold mb-2">{podium.username}</h3>
              <p className="text-[18px]">Earned Points: {podium.points}</p>
              <p className="text-[18px]">Total XP: {podium.totalXP}</p>
              <p className="text-[40px] font-bold text-yellow-400">{podium.rank}</p>
            </div>
          ))}
        </div>

        {/* Ranking Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-center">
            <thead>
              <tr>
                <th className="text-[18px] font-bold p-2">Rank</th>
                <th className="text-[18px] font-bold p-2">Username</th>
                <th className="text-[18px] font-bold p-2">Total XP</th>
              </tr>
            </thead>
            <tbody>
              {rankingData.map((user, index) => (
                <tr key={index} className={`bg-${index % 2 === 0 ? "blue-800" : "blue-900"}`}>
                  <td className="p-2">{user.rank}</td>
                  <td className="p-2">{user.username}</td>
                  <td className="p-2">{user.totalXP}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LeaderboardPage;