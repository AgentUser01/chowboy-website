import React from 'react';
import '../styles/Home.css';
import AnimatedSection from '../components/animated/AnimatedSection';
import AnimatedText from '../components/animated/AnimatedText';
import { fadeInLeft, fadeInRight, fadeInUp } from '../utils/animations';

// Import main app preview image
import appPreviewImage from '../assets/images/ai-recipe-discovery 3.png';

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
            Smarter cooking, zero fuss
          </AnimatedText>
          <AnimatedText 
            as="p"
            delay={0.4}
          >
            Find, plan, and cook recipes you’ll love — personalized by AI.
          </AnimatedText>
          <AnimatedText 
            as="div"
            className="import-highlight"
            delay={0.3}
          >
            <span className="tag">Effortless</span>
            <h3>Import recipes from anywhere</h3>
            <p>Paste a link. Get a clean recipe card — from websites, Instagram, or TikTok.</p>
          </AnimatedText>
          <AnimatedSection 
            className="download-button-container"
            variants={fadeInUp}
            delay={0.6}
          >
            <a href="https://apps.apple.com/ca/app/chowboy/id6741332753" className="official-app-store-badge" target="_blank" rel="noopener noreferrer" aria-label="Download on the App Store">
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