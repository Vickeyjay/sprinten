import { useState } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import "./hamburger.css";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button */}
      <button className="hamburger-btn" onClick={() => setIsOpen(true)}>
        ☰
      </button>

      {/* Sidebar Drawer */}
      <div className={`hamburger-sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <div className="logo-container">
            <img src="/images/logo.png" alt="logo" className="sidebar-logo" />
          </div>
          <button className="close-btn" onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <div className="sidebar-content">
          <h4>History</h4>
          <input type="text" placeholder="Search..." className="search-input" />
          <ul className="history-list">
            <li>Create a design system for...</li>
            <li>Create a design system for...</li>
            <li>Create a design system for...</li>
            <li>Create a design system for...</li>
          </ul>
        </div>

        <div className="profile-footer">
          <img src="/images/profile.png" alt="User" />
          <div>
            <h4>Orimadegun Promise</h4>
            <p>Free</p>
          </div>
        </div>
      </div>

      {/* Background Overlay */}
      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)}></div>}
    </>
  );
};

export default HamburgerMenu;
