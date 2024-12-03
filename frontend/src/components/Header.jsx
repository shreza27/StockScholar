import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const sidebarStyle = {
    display: "flex",
    flexDirection: "column",
    width: "250px",
    height: "100vh",
    backgroundColor: "#4b0082", // Indigo background
    color: "white",
    padding: "20px",
    position: "fixed", // Sticks the sidebar to the side
  };

  const titleStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    textAlign: "center",
  };

  const navStyle = {
    listStyleType: "none",
    padding: 0,
    flexGrow: 1,
  };

  const navItemStyle = {
    marginBottom: "15px",
  };

  const navLinkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
  };

  const footerStyle = {
    marginTop: "auto",
    textAlign: "center",
  };

  return (
    <aside style={sidebarStyle}>
      <div style={titleStyle}>
        <Link to="/" style={{ ...navLinkStyle, fontSize: "22px" }}>
          StockScholar
        </Link>
      </div>
      <ul style={navStyle}>
        <li style={navItemStyle}>
          <Link to="/dashboard" style={navLinkStyle}>
            Dashboard
          </Link>
        </li>
        <li style={navItemStyle}>
          <Link to="/portfolio" style={navLinkStyle}>
            Portfolio Insights
          </Link>
        </li>
        <li style={navItemStyle}>
          <Link to="/market" style={navLinkStyle}>
            Stock Exchange
          </Link>
        </li>
        <li style={navItemStyle}>
          <Link to="/chat" style={navLinkStyle}>
            Chat
          </Link>
        </li>
        <li style={navItemStyle}>
          <Link to="/learn" style={navLinkStyle}>
            Resources
          </Link>
        </li>
      </ul>
      <div style={footerStyle}>
        <Link to="/" style={navLinkStyle}>
          Log out
        </Link>
      </div>
    </aside>
  );
}
