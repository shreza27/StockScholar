import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MainPage from "./pages/MainPage";
import Dashboard from "./pages/Dashboard";
import "./App.css";
import Portfolio from "./pages/Portfolio";
import Chat from "./pages/Chat";
import Learn from "./pages/Learn";
import Market from "./pages/Market";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="market" element={<Market />} />
        <Route path="chat" element={<Chat />} />
        <Route path="learn" element={<Learn />} />
      </Route>
      <Route index element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
