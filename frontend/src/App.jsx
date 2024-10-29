import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MainPage from "./pages/MainPage";
import Dashboard from "./pages/Dashboard";
import "./App.css";
import Profile from "./pages/Profile";
import Portfolio from "./pages/Portfolio";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}>
        <Route index element={<Dashboard />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="market" element={<div>Market Page</div>} />
        <Route path="budget" element={<div>Budget Page</div>} />
        <Route path="learn" element={<div>Learn Page</div>} />
        <Route path="profile" element={<Profile />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
