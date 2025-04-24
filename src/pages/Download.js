import React from 'react';
import '../styles/Download.css';

const Download = () => {
  return (
    <div className="download-container">
      <section className="download-header">
        <h1>Download Chowboy</h1>
        <p>Get started with Chowboy on your favorite device</p>
      </section>
      
      <section className="download-options">
        <div className="download-card ios">
          <div className="download-icon">
            <i className="apple-icon">iOS</i>
          </div>
          <h2>iOS App</h2>
          <p>Available on iPhone and iPad</p>
          <ul className="requirements">
            <li>iOS 15.0 or later</li>
            <li>iPhone, iPad, and iPod touch</li>
            <li>Optimized for iPhone 13 and later</li>
          </ul>
          <a href="#" className="download-button">
            <span>Download on the</span>
            <strong>App Store</strong>
          </a>
        </div>
        
        <div className="download-card android">
          <div className="download-icon">
            <i className="android-icon">Android</i>
          </div>
          <h2>Android App</h2>
          <p>Available on all Android devices</p>
          <ul className="requirements">
            <li>Android 8.0 or later</li>
            <li>Optimized for Samsung, Google, and OnePlus</li>
            <li>50 MB free storage space</li>
          </ul>
          <a href="#" className="download-button">
            <span>Get it on</span>
            <strong>Google Play</strong>
          </a>
        </div>
      </section>
      
      <section className="download-features">
        <h2>Why Download Chowboy?</h2>
        <div className="features-grid">
          <div className="feature">
            <h3>Personalized Experience</h3>
            <p>Get recipe recommendations tailored to your taste preferences and dietary needs.</p>
          </div>
          <div className="feature">
            <h3>Offline Access</h3>
            <p>Save your favorite recipes for offline access anytime, anywhere.</p>
          </div>
          <div className="feature">
            <h3>Meal Planning</h3>
            <p>Plan your meals for the week with our intuitive calendar interface.</p>
          </div>
          <div className="feature">
            <h3>Shopping Lists</h3>
            <p>Automatically generate shopping lists from your meal plans.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Download; 