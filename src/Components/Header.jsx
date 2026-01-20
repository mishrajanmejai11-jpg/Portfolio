import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaBars } from "react-icons/fa";
import "../css/header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
     <div className="header-inner">

      <div className="logo">
        <h2>JM</h2>
      </div>

      
      <div className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars />
      </div>

     
      <nav className={`nav ${menuOpen ? "active" : ""}`}>
  <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
  <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
  <Link to="/skills" onClick={() => setMenuOpen(false)}>Skills</Link>
  <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
  <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
</nav>

     
      <div className="social">
        <a
          href="https://www.linkedin.com/in/janmejai-mishra-b3762a1a8"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/mishrajanmejai11-jpg"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </div>
      </div>
    </header>
  );
};

export default Header;
