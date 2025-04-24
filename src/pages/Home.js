import React from 'react';
import '../styles/Home.css';
import AnimatedSection from '../components/animated/AnimatedSection';
import AnimatedText from '../components/animated/AnimatedText';
import AnimatedImage from '../components/animated/AnimatedImage';
import { fadeInLeft, fadeInRight, fadeInUp } from '../utils/animations';
import appPreviewImage from '../assets/images/chowboy-app-preview.png';

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
            <a href="https://apps.apple.com" className="app-store-button">
              <div className="apple-logo">
                <svg viewBox="0 0 24 24" width="38" height="38" fill="white">
                  <path d="M16.3,10.3c0-2.1,1.7-3.2,1.8-3.2c-1-1.4-2.5-1.6-3-1.6C13.7,5.3,12.7,6,12.1,6c-0.6,0-1.5-0.6-2.5-0.6c-1.3,0-2.4,0.7-3.1,1.9 c-1.3,2.3-0.3,5.6,0.9,7.5c0.6,0.9,1.4,1.9,2.3,1.8c0.9,0,1.3-0.6,2.4-0.6c1.1,0,1.4,0.6,2.4,0.6c1,0,1.6-0.9,2.2-1.8 c0.7-1,1-2,1-2.1C17.7,12.7,16.3,12,16.3,10.3z M14.4,3C15,2.3,15.3,1.4,15.2,0.5c-0.8,0-1.7,0.5-2.2,1.2C12.5,2.3,12,3.3,12.2,4.1 C13.1,4.2,13.8,3.7,14.4,3z"/>
                </svg>
              </div>
              <div className="button-text">
                <span>Download on the</span>
                <strong>App Store</strong>
              </div>
            </a>
          </AnimatedSection>
        </div>
      </AnimatedSection>
      
      <AnimatedSection 
        className="hero-right"
        variants={fadeInRight}
        delay={0.3}
      >
        <div className="colored-circle"></div>
        <AnimatedSection 
          className="feature-image" 
          variants={fadeInRight}
          delay={0.4}
        >
          <img src={appPreviewImage} alt="Chowboy App Preview" className="feature-img iphone-screenshot" />
        </AnimatedSection>
      </AnimatedSection>
    </div>
  );
};

export default Home; 