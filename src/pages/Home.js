import React from 'react';
import '../styles/Home.css';
import AnimatedSection from '../components/animated/AnimatedSection';
import AnimatedText from '../components/animated/AnimatedText';
import FeatureRotator from '../components/FeatureRotator';
import { fadeInLeft, fadeInRight, fadeInUp } from '../utils/animations';

// Import images for feature rotation
import appPreviewImage from '../assets/images/chowboy-app-preview.png';
import profilePageImage from '../assets/images/profile-page.png';
import aiRecipeDiscoveryImage from '../assets/images/ai-recipe-discovery 3.png';
import groceryListManagementImage from '../assets/images/chowboy_grocery-list-management.png';

// Use the SVG component instead of importing it directly
import AppStoreBadge from '../components/AppStoreBadge';

// Define features for the rotator
const features = [
  {
    title: "Chowboy App",
    description: "Your smart cooking companion",
    image: appPreviewImage
  },
  {
    title: "User Profile",
    description: "Track your cooking journey and saved recipes",
    image: profilePageImage
  },
  {
    title: "AI Recipe Discovery",
    description: "Find recipes tailored to your taste preferences",
    image: aiRecipeDiscoveryImage
  },
  {
    title: "Grocery List Management",
    description: "Organize shopping with smart categorization",
    image: groceryListManagementImage
  }
];

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
        <div className="colored-circle"></div>
        <AnimatedSection 
          className="feature-image-container" 
          variants={fadeInRight}
          delay={0.4}
        >
          <FeatureRotator 
            features={features} 
            interval={6000} 
            showButtons={true}
          />
        </AnimatedSection>
      </AnimatedSection>
    </div>
  );
};

export default Home;