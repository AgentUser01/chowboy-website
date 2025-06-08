import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="made-with">
          Made with ❤️ and ☕️ in Montreal
        </div>
        
        <div className="footer-links">
          <a href="mailto:support@chowboy.io">support@chowboy.io</a>
          <Link to="/support">support</Link>
          <Link to="/privacy">privacy</Link>
          <Link to="/cookies">cookie policy</Link>
          <Link to="/terms">terms</Link>
          <Link to="/careers">careers</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 