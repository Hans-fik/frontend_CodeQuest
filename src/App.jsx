// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import Home from "./pages/Dashboard/HomeDashboard";          // Halaman Landing Page
import Login from "./pages/Auth/Login";        // Halaman Login
import SignUp from "./pages/Auth/Register";      // Halaman SignUp
import About from "./pages/About/About";        // Halaman About
import Profile from "./pages/Dashboard/Profile"; 
import Leaderboard from "./pages/Leaderboard/Leaderboard"; 
import ChallengePacks from "./pages/Courses/ChallengePacks";
import ChourseList from "./pages/Courses/CoursesList";
import { Toaster } from "sonner";



const App = () => {
  return (
    <Router>
      <div style={{ backgroundColor: "#000926" }}>
        {/* Routing halaman utama */}
        <Routes>
          <Route path="/" element={<Home />} />          
          <Route path="/login" element={<Login />} />     
          <Route path="/signup" element={<SignUp />} />  
          <Route path="/about" element={<About />} />     
          <Route path="/profile" element={<Profile />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/challengePacks" element={<ChallengePacks />} />
          <Route path="/chourseList" element={<ChourseList />} />
        </Routes>
        <Toaster position="top-center" richColors />
      </div>
    </Router>
  );
};

export default App;
