import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="made-with" aria-label="Made with love and coffee in Montreal">
          made with ❤️ in montreal
        </div>
        
        <div className="footer-links">
          <a href="mailto:support@chowboy.io" aria-label="Email support">support@chowboy.io</a>
          <Link to="/support" aria-label="Support">support</Link>
          <Link to="/privacy" aria-label="Privacy">privacy</Link>
          <Link to="/cookies" aria-label="Cookie policy">cookies</Link>
          <Link to="/terms" aria-label="Terms">terms</Link>
          <Link to="/careers" aria-label="Careers">careers</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 