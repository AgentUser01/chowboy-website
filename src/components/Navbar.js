import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Prevent scrolling when menu is open
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" aria-label="Chowboy home">
          <img src="/chowboy-logo.png" alt="" aria-hidden="true" className="navbar-icon" />
          chowboy
        </Link>
        
        {/* Desktop Navigation Menu */}
        <ul className="nav-menu desktop-menu">
          <li className="nav-item">
            <Link to="/features" className="nav-link features" aria-label="View features">
              features
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/careers" className="nav-link hiring" aria-label="View careers">
              careers
            </Link>
          </li>
        </ul>
        
        <div className={`hamburger-menu ${menuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Open menu" role="button" aria-expanded={menuOpen} aria-controls="mobile-nav">
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
        </div>
        
        <div className={`menu-overlay ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>
        
        <div className={`nav-drawer ${menuOpen ? 'active' : ''}`} id="mobile-nav" role="dialog" aria-modal="true">
          <div className="nav-drawer-header">
            <Link to="/" className="drawer-logo" onClick={() => setMenuOpen(false)} aria-label="Chowboy home">
              <img src="/chowboy-logo.png" alt="" aria-hidden="true" className="navbar-icon" />
              chowboy
            </Link>
            <button className="close-menu" onClick={toggleMenu} aria-label="Close menu">
              <span className="close-icon"></span>
            </button>
          </div>
          
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/features" className="nav-link features" onClick={() => setMenuOpen(false)} aria-label="View features">
                features
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/careers" className="nav-link hiring" onClick={() => setMenuOpen(false)} aria-label="View careers">
                careers
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 