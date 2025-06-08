import React from 'react';
import '../styles/Home.css';
import AnimatedSection from '../components/animated/AnimatedSection';
import AnimatedText from '../components/animated/AnimatedText';
import { fadeInLeft, fadeInRight, fadeInUp } from '../utils/animations';

// Import main app preview image
import appPreviewImage from '../assets/images/chowboy-app-preview.png';

// Use the SVG component instead of importing it directly
import AppStoreBadge from '../components/AppStoreBadge';

const Home = () => {
  return (
    <div className="home-container">
      <AnimatedSection 
        className="hero-left"
        variants={fadeInLeft}
      >
        <div className="hero-content">
          <AnimatedText 
            as="h1"
            delay={0.2}
          >
            The Smartest Cooking Companion
          </AnimatedText>
          <AnimatedText 
            as="p"
            delay={0.4}
          >
            Chowboy is an app utilizing artificial intelligence to help you discover, plan, and prepare meals tailored to your preferences.
          </AnimatedText>
          <AnimatedText 
            as="div"
            className="import-highlight"
            delay={0.3}
          >
            <span className="tag">Effortless</span>
            <h3>Import recipes from anywhere</h3>
            <p>Turn any recipe URL into a beautiful recipe card. Save from websites, Instagram, TikTok—you name it!</p>
          </AnimatedText>
          <AnimatedSection 
            className="download-button-container"
            variants={fadeInUp}
            delay={0.6}
          >
            <a href="https://apps.apple.com" className="official-app-store-badge">
              <AppStoreBadge />
            </a>
          </AnimatedSection>
        </div>
      </AnimatedSection>
      
      <AnimatedSection 
        className="hero-right"
        variants={fadeInRight}
        delay={0.3}
      >
        <div className="hero-image">
          <img 
            src={appPreviewImage} 
            alt="Chowboy App Preview" 
            className="app-preview-image"
          />
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Home;