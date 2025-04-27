import React from 'react';
import '../styles/Privacy.css';

const CookiePolicy = () => {
  return (
    <div className="privacy-page">
      <div className="container">
        <header className="privacy-header">
          <h1>Cookie Policy</h1>
        </header>

        <section className="privacy-section">
          <h2>Our iOS App</h2>
          <p>
            Our iOS app does not use cookies or similar tracking technologies. We do not employ tracking cookies for analytics or advertising purposes.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Our Website</h2>
          <p>
            This website does not set any cookies or use any tracking technologies at this time. If this changes in the future, we will update this policy accordingly.
          </p>
        </section>
      </div>
    </div>
  );
};

export default CookiePolicy; 