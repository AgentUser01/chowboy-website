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
import { fadeInUp, fadeInLeft, fadeInRight } from '../utils/animations';

const Features = () => {
  // Helper function to render lists so we don't duplicate checkmarks
  const renderFeatureList = (items, delay = 0.5, staggerDelay = 0.1) => (
    <ul className="feature-list">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
  
  return (
    <div className="features-container">
      <AnimatedSection className="features-header">
        <AnimatedText as="h1" delay={0.1}>
          Chowboy Features
        </AnimatedText>
        <AnimatedText as="p" delay={0.3}>
          Everything you need to elevate your cooking experience
        </AnimatedText>
      </AnimatedSection>
      
      <section className="features-list">
        <AnimatedCard className="feature-item highlight-feature" delay={0.1}>
          <div className="feature-content">
            <AnimatedText as="h2" variants={fadeInUp} delay={0.2}>
              Import Recipes From Anywhere
            </AnimatedText>
            <AnimatedText as="p" variants={fadeInUp} delay={0.3}>
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
            variants={fadeInRight}
            delay={0.3}
          >
            <img src={importFromAnywhere} alt="Import recipes from anywhere" className="feature-img iphone-screenshot" />
          </AnimatedSection>
        </AnimatedCard>
        
        <AnimatedCard className="feature-item" delay={0.2}>
          <div className="feature-content">
            <AnimatedText as="h2" variants={fadeInUp} delay={0.3}>
              AI Recipe Discovery
            </AnimatedText>
            <AnimatedText as="p" variants={fadeInUp} delay={0.4}>
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
            variants={fadeInRight}
            delay={0.4}
          >
            <img src={aiRecipeDiscovery} alt="AI recipe discovery" className="feature-img iphone-screenshot" />
          </AnimatedSection>
        </AnimatedCard>
        
        <AnimatedCard className="feature-item reversed" delay={0.3}>
          <div className="feature-content">
            <AnimatedText as="h2" variants={fadeInUp} delay={0.3}>
              Grocery List Management
            </AnimatedText>
            <AnimatedText as="p" variants={fadeInUp} delay={0.4}>
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
            variants={fadeInLeft}
            delay={0.4}
          >
            <img src={groceryListManagement} alt="Grocery list management" className="feature-img iphone-screenshot" />
          </AnimatedSection>
        </AnimatedCard>
        
        <AnimatedCard className="feature-item" delay={0.4}>
          <div className="feature-content">
            <AnimatedText as="h2" variants={fadeInUp} delay={0.3}>
              AI-Powered Features
            </AnimatedText>
            <AnimatedText as="p" variants={fadeInUp} delay={0.4}>
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
            variants={fadeInRight}
            delay={0.4}
          >
            <img src={aiPoweredFeatures} alt="AI-powered features" className="feature-img iphone-screenshot" />
          </AnimatedSection>
        </AnimatedCard>

        <AnimatedCard className="feature-item reversed" delay={0.5}>
          <div className="feature-content">
            <AnimatedText as="h2" variants={fadeInUp} delay={0.3}>
              Cooking Tips & Substitutes
            </AnimatedText>
            <AnimatedText as="p" variants={fadeInUp} delay={0.4}>
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
            variants={fadeInLeft}
            delay={0.4}
          >
            <img src={cookingTips} alt="Cooking tips and substitutes" className="feature-img iphone-screenshot" />
          </AnimatedSection>
        </AnimatedCard>
      </section>

      <AnimatedSection className="features-cta" delay={0.8}>
        <AnimatedText as="h2" variants={fadeInUp} delay={0.3}>
          Ready to transform your cooking experience?
        </AnimatedText>
        <AnimatedText as="p" variants={fadeInUp} delay={0.4}>
          Download Chowboy today and start discovering recipes tailored to your taste.
        </AnimatedText>
        <AnimatedSection className="download-buttons" variants={fadeInUp} delay={0.5}>
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
      </AnimatedSection>
    </div>
  );
};

export default Features; 