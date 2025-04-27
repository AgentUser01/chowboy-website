import React from 'react';
import '../styles/Privacy.css';

const Support = () => {
  return (
    <div className="privacy-page">
      <div className="container">
        <header className="privacy-header">
          <h1>Support</h1>
        </header>

        <section className="privacy-section">
          <p>
            Need help or have questions? Reach out to our support team at <a href="mailto:support@chowboy.io">support@chowboy.io</a>. We typically respond within 1–2 business days.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Frequently Asked Questions</h2>
          <ul className="bullet-list">
            <li>
              <strong>How do I cancel my subscription?</strong> You can manage or cancel your subscription through your Apple ID settings under Subscriptions.
            </li>
            <li>
              <strong>Which iOS versions are supported?</strong> Chowboy requires iOS 15.0 or later on iPhone, iPad, or iPod touch.
            </li>
            <li>
              <strong>How can I provide feedback?</strong> Send your suggestions or feedback to <a href="mailto:feedback@chowboy.io">feedback@chowboy.io</a>.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Support; 