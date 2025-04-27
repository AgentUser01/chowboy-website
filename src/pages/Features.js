import React from 'react';
import '../styles/Features.css';
import AnimatedSection from '../components/animated/AnimatedSection';
import AnimatedText from '../components/animated/AnimatedText';
import AnimatedCard from '../components/animated/AnimatedCard';
// Import images
import importFromAnywhere from '../assets/images/import-from-anywhere.png';
import aiRecipeDiscovery from '../assets/images/ai-recipe-discovery.png';
import groceryListManagement from '../assets/images/chowboy_grocery-list-management.png';
import aiPoweredFeatures from '../assets/images/ai-powered-features.png';
import cookingTips from '../assets/images/cooking-tips.png';
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
          Chowboy Features
        </AnimatedText>
        <AnimatedText as="p" delay={0.2}>
          Everything you need to elevate your cooking experience
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
              Import Recipes From Anywhere
            </AnimatedText>
            <AnimatedText as="p" variants={fadeInUp} delay={0.2}>
              Transform any recipe URL into a beautiful, structured recipe card with a single tap. Import from websites, social media, blogs—literally anywhere—and have it instantly organized in your personal cookbook.
            </AnimatedText>
            {renderFeatureList([
              'Import from any URL, Instagram, TikTok, food blogs, and more',
              'Automatic transformation into beautiful, standardized recipe cards',
              'Save and organize your collection for quick access anytime'
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
              alt="Import recipes from anywhere" 
              className="feature-img iphone-screenshot" 
              style={imageStyle}
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
              AI Recipe Discovery
            </AnimatedText>
            <AnimatedText as="p" variants={fadeInUp} delay={0.2}>
              Our intelligent algorithm learns your taste preferences and dietary needs to recommend recipes you'll love. No more endless scrolling to find the perfect meal.
            </AnimatedText>
            {renderFeatureList([
              'Personalized recipe suggestions',
              'Smart filtering by ingredients or cuisine',
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
              alt="AI recipe discovery" 
              className="feature-img iphone-screenshot" 
              style={imageStyle}
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
              Grocery List Management
            </AnimatedText>
            <AnimatedText as="p" variants={fadeInUp} delay={0.2}>
              Create and manage shopping lists with ease. Add items directly from recipes or manually to stay organized on your shopping trips.
            </AnimatedText>
            {renderFeatureList([
              'Smart categorization of items',
              'Recipe-based and custom lists',
              'Check off items as you shop'
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
              alt="Grocery list management" 
              className="feature-img iphone-screenshot" 
              style={imageStyle}
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
              AI-Powered Features
            </AnimatedText>
            <AnimatedText as="p" variants={fadeInUp} delay={0.2}>
              Enhance your cooking experience with our suite of AI-powered tools, providing nutritional insights, wine pairings, and recipe variations tailored to your preferences.
            </AnimatedText>
            {renderFeatureList([
              'Nutritional analysis with macro and micronutrient breakdowns',
              'Wine pairing suggestions based on flavor profiles',
              'Recipe variations for dietary adaptations (vegan, gluten-free, etc.)',
              'Gourmet upgrades and seasonal variations of your favorite recipes'
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
              alt="AI-powered features" 
              className="feature-img iphone-screenshot" 
              style={imageStyle}
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
              Cooking Tips & Substitutes
            </AnimatedText>
            <AnimatedText as="p" variants={fadeInUp} delay={0.2}>
              Never worry about missing ingredients or techniques again. Get expert cooking tips and ingredient substitution suggestions directly in your recipes.
            </AnimatedText>
            {renderFeatureList([
              'Technique explanations and troubleshooting',
              'Smart ingredient substitutes with proper measurements',
              'Time-saving cooking hacks and tools'
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
              alt="Cooking tips and substitutes" 
              className="feature-img iphone-screenshot" 
              style={imageStyle}
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
          Ready to transform your cooking experience?
        </AnimatedText>
        <AnimatedText as="p" variants={fadeInUp} delay={0.2}>
          Download Chowboy today and start discovering recipes tailored to your taste.
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