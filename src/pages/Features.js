import React from 'react';
import '../styles/Features.css';
import AnimatedSection from '../components/animated/AnimatedSection';
import AnimatedText from '../components/animated/AnimatedText';
import AnimatedCard from '../components/animated/AnimatedCard';
// Import images
import importFromAnywhere from '../assets/images/import-from-anywhere.png';
import aiRecipeDiscovery from '../assets/images/ai-recipe-discovery 3.png';
import groceryListManagement from '../assets/images/chowboy_grocery-list-management.png';
import aiPoweredFeatures from '../assets/images/ai-powered-features 3.png';
import cookingTips from '../assets/images/cooking-tips 3.png';
// Use the SVG component instead
import AppStoreBadge from '../components/AppStoreBadge';
import { fadeInUp, contentGroup } from '../utils/animations';

// Image style with rounded corners
const imageStyle = {
  borderRadius: '32px',
  WebkitBorderRadius: '32px',
  MozBorderRadius: '32px',
  overflow: 'hidden',
  maxWidth: '100%',
  maxHeight: '100%',
  objectFit: 'contain',
};

const Features = () => {
  // Helper function to render lists so we don't duplicate checkmarks
  const renderFeatureList = (items) => (
    <ul className="feature-list">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
  
  return (
    <div className="features-container">
      <AnimatedSection className="features-header" variants={contentGroup}>
        <AnimatedText as="h1" delay={0.1}>
          Features
        </AnimatedText>
        <AnimatedText as="p" delay={0.2}>
          Cook better, faster — with just what you need.
        </AnimatedText>
      </AnimatedSection>
      
      <section className="features-list">
        <AnimatedCard 
          className="feature-item highlight-feature" 
          delay={0.1}
          scrollEffect={true}
        >
          <div className="feature-content">
            <AnimatedText as="h2" variants={fadeInUp} delay={0.1}>
              Import from any link
            </AnimatedText>
            <AnimatedText as="p" variants={fadeInUp} delay={0.2}>
              Paste a link. Get a clean recipe card.
            </AnimatedText>
            {renderFeatureList([
              'Works with websites, Instagram, TikTok',
              'Auto-formatted into a clean card',
              'Save and organize in one place'
            ])}
          </div>
          <AnimatedSection 
            className="feature-image" 
            variants={fadeInUp}
            delay={0.2}
            parallax={true}
            parallaxFactor={0.1}
          >
            <img 
              src={importFromAnywhere} 
              alt="Import recipes from any link" 
              className="feature-img iphone-screenshot" 
              style={imageStyle}
              loading="lazy"
              decoding="async"
            />
          </AnimatedSection>
        </AnimatedCard>
        
        <AnimatedCard 
          className="feature-item" 
          delay={0.05}
          scrollEffect={true}
        >
          <div className="feature-content">
            <AnimatedText as="h2" variants={fadeInUp} delay={0.1}>
              Recipe picks you’ll love
            </AnimatedText>
            <AnimatedText as="p" variants={fadeInUp} delay={0.2}>
              Personalized to taste and diet.
            </AnimatedText>
            {renderFeatureList([
              'Smart filters by ingredients and cuisine',
              'Learns your likes over time',
              'Save favorites for quick access'
            ])}
          </div>
          <AnimatedSection 
            className="feature-image" 
            variants={fadeInUp}
            delay={0.2}
            parallax={true}
            parallaxFactor={0.1}
          >
            <img 
              src={aiRecipeDiscovery} 
              alt="AI-powered recipe discovery" 
              className="feature-img iphone-screenshot" 
              style={imageStyle}
              loading="lazy"
              decoding="async"
            />
          </AnimatedSection>
        </AnimatedCard>
        
        <AnimatedCard 
          className="feature-item reversed" 
          delay={0.05}
          scrollEffect={true}
        >
          <div className="feature-content">
            <AnimatedText as="h2" variants={fadeInUp} delay={0.1}>
              Smarter grocery lists
            </AnimatedText>
            <AnimatedText as="p" variants={fadeInUp} delay={0.2}>
              Build lists from recipes or scratch.
            </AnimatedText>
            {renderFeatureList([
              'Auto-categorized items',
              'From recipes or custom items',
              'Check off as you shop'
            ])}
          </div>
          <AnimatedSection 
            className="feature-image" 
            variants={fadeInUp}
            delay={0.2}
            parallax={true}
            parallaxFactor={0.1}
          >
            <img 
              src={groceryListManagement} 
              alt="Smart grocery list management" 
              className="feature-img iphone-screenshot" 
              style={imageStyle}
              loading="lazy"
              decoding="async"
            />
          </AnimatedSection>
        </AnimatedCard>
        
        <AnimatedCard 
          className="feature-item" 
          delay={0.05}
          scrollEffect={true}
        >
          <div className="feature-content">
            <AnimatedText as="h2" variants={fadeInUp} delay={0.1}>
              Nutrition, pairings, and more
            </AnimatedText>
            <AnimatedText as="p" variants={fadeInUp} delay={0.2}>
              On‑demand cooking intel.
            </AnimatedText>
            {renderFeatureList([
              'Nutrition breakdowns that make sense',
              'Wine pairings by flavor profile',
              'Easy dietary swaps (vegan, gluten‑free)',
              'Seasonal twists and gourmet upgrades'
            ])}
          </div>
          <AnimatedSection 
            className="feature-image" 
            variants={fadeInUp}
            delay={0.2}
            parallax={true}
            parallaxFactor={0.1}
          >
            <img 
              src={aiPoweredFeatures} 
              alt="AI cooking features" 
              className="feature-img iphone-screenshot" 
              style={imageStyle}
              loading="lazy"
              decoding="async"
            />
          </AnimatedSection>
        </AnimatedCard>

        <AnimatedCard 
          className="feature-item reversed" 
          delay={0.05}
          scrollEffect={true}
        >
          <div className="feature-content">
            <AnimatedText as="h2" variants={fadeInUp} delay={0.1}>
              Tips and swaps
            </AnimatedText>
            <AnimatedText as="p" variants={fadeInUp} delay={0.2}>
              Fixes and smart substitutes, right when you need them.
            </AnimatedText>
            {renderFeatureList([
              'Clear technique help',
              'Substitutes with correct amounts',
              'Time‑saving tips and tools'
            ])}
          </div>
          <AnimatedSection 
            className="feature-image" 
            variants={fadeInUp}
            delay={0.2}
            parallax={true}
            parallaxFactor={0.1}
          >
            <img 
              src={cookingTips} 
              alt="Cooking tips and ingredient substitutes" 
              className="feature-img iphone-screenshot" 
              style={imageStyle}
              loading="lazy"
              decoding="async"
            />
          </AnimatedSection>
        </AnimatedCard>
      </section>

      <AnimatedSection 
        className="features-cta" 
        delay={0.1}
        parallax={true}
        parallaxFactor={0.05}
      >
        <AnimatedText as="h2" variants={fadeInUp} delay={0.1}>
          Ready to cook smarter?
        </AnimatedText>
        <AnimatedText as="p" variants={fadeInUp} delay={0.2}>
          Get Chowboy and start cooking your way.
        </AnimatedText>
        <AnimatedSection className="download-buttons" variants={fadeInUp} delay={0.3}>
          <a href="https://apps.apple.com" className="official-app-store-badge">
            <AppStoreBadge />
          </a>
        </AnimatedSection>
      </AnimatedSection>
    </div>
  );
};

export default Features;