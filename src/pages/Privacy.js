import React from 'react';
import '../styles/Privacy.css';

const Privacy = () => {
  return (
    <div className="privacy-page">
      <div className="container">
        <header className="privacy-header">
          <h1>Privacy Policy</h1>
          <p className="last-updated">Last updated October 22, 2024</p>
        </header>

        <section className="privacy-summary">
          <h2>Summary in Plain Words</h2>
          <div className="summary-points">
            <div className="summary-point">
              <div className="check-icon">✓</div>
              <p>We prioritize your privacy. We don't include any tracking from Facebook or Google in the app.</p>
            </div>
            <div className="summary-point">
              <div className="check-icon">✓</div>
              <p>We don't require personally identifiable information (PII) to use Chowboy. If you choose to create an account, your information is securely stored and never sold.</p>
            </div>
            <div className="summary-point">
              <div className="check-icon">✓</div>
              <p>We use anonymous analytics solely to improve the app experience.</p>
            </div>
          </div>
        </section>

        <section className="privacy-section">
          <h2>Introduction</h2>
          <p>
            Chowboy ('we', 'our', or 'us') is committed to respecting your privacy and processing personal data in accordance with 
            applicable privacy laws, including the EU GDPR. This Privacy Policy applies to all services we provide through our iOS application.
          </p>
          <p>
            We want to make it clear how we use your data because that's what we would want from services we use. By using our app, 
            you accept this privacy policy.
          </p>
          <p>
            No private information is required to use Chowboy's core recipe features. In most cases, we collect minimal data about you.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Personal Data We Collect</h2>
          <p className="section-intro">Purpose and Lawful Basis for Processing:</p>
          
          <div className="data-category">
            <h3>Account Information (name, email)</h3>
            <p>Used to create your account, provide access to features, and identify you within the app. This processing is necessary for the performance of our contract with you.</p>
          </div>
          
          <div className="data-category">
            <h3>Profile Information (profile photo, bio)</h3>
            <p>Optional information you can provide to personalize your experience. This processing is based on your consent.</p>
          </div>
          
          <div className="data-category">
            <h3>User Preferences</h3>
            <p>Dietary restrictions, favorite cuisines, skill level: Used to personalize recipe recommendations. This processing is based on legitimate interest in providing relevant content.</p>
          </div>
          
          <div className="data-category">
            <h3>Recipe Data</h3>
            <p>If you create, save, or share recipes, we store this information to provide core app functionality. This processing is necessary for the performance of our contract with you.</p>
          </div>
          
          <div className="data-category">
            <h3>Device Data</h3>
            <p>We collect basic technical information like device type and IP address for security and troubleshooting. This processing is based on our legitimate interest in maintaining app security and functionality.</p>
          </div>
          
          <div className="data-category">
            <h3>Location Data</h3>
            <p>Only if you explicitly allow and only when using location-specific features. This processing is based on your consent, which you can withdraw at any time.</p>
          </div>
          <div className="data-category">
            <h3>Purchase Information</h3>
            <p>We do not collect or store your payment method or billing information. All transactions are handled by Apple's In-App Purchase system. We only receive confirmation of your subscription status and do not have access to your payment details.</p>
          </div>
        </section>

        <section className="privacy-section">
          <h2>Analytics</h2>
          <p>Chowboy uses Firebase Analytics to collect anonymized usage statistics for improving the app experience. We collect events such as feature usage, session duration, and crash reports. We do not collect any personally identifiable information through analytics.</p>
          <p>Analytics data is retained in Firebase for up to 90 days, after which it is aggregated or deleted.</p>
        </section>

        <section className="privacy-section">
          <h2>Third-Party Services</h2>
          <p>We share your data with certain third parties to provide our services:</p>
          <ul className="bullet-list">
            <li><strong>Cloud storage providers (Firebase Storage, Cloud Firestore):</strong> To securely store and back up your account and recipe data.</li>
            <li><strong>Analytics providers (Firebase Analytics):</strong> To help us improve and optimize the app. These providers receive device data and anonymous usage data.</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>App Tracking Transparency</h2>
          <p>Our iOS app uses Apple's App Tracking Transparency framework to request permission before tracking you across apps and websites owned by other companies. We will only track you if you grant permission and you can change this at any time in your device's Settings under Privacy &gt; Tracking.</p>
        </section>

        <section className="privacy-section">
          <h2>How Information is Used</h2>
          <p>We use the information we collect to:</p>
          <ul className="bullet-list">
            <li>Provide and maintain the app's functionality</li>
            <li>Create and manage your account</li>
            <li>Deliver personalized recipe recommendations</li>
            <li>Improve our services and develop new features</li>
            <li>Communicate with you about app updates or changes</li>
            <li>Protect the security and integrity of our services</li>
          </ul>
          <p>
            We do not share personal information with outside parties except to the extent necessary to accomplish 
            Chowboy's functionality.
          </p>
          <p>
            We may disclose your information in response to legal requirements, to exercise our legal rights, to investigate 
            suspected illegal activities or violations of our terms, or to protect our rights and property.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Security Measures</h2>
          <p>
            We have implemented appropriate technical and organizational security measures to protect your personal data from 
            accidental or unlawful destruction, loss, alteration, unauthorized disclosure, or access.
          </p>
          <p>
            These measures include encryption, secure data storage, and restricted access controls. All communication with our 
            servers requires HTTPS with certificate pinning.
          </p>
          <p>
            We carefully select our service providers with security considerations in mind and ensure they maintain appropriate 
            security standards.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Data Retention</h2>
          <p>
            We retain your personal data for as long as necessary to provide you with our services and for legitimate business 
            purposes such as maintaining the performance of the app, making data-driven decisions about new features, complying 
            with our legal obligations, and resolving disputes.
          </p>
          <p>
            After account deletion or upon receiving a valid deletion request, we will delete or anonymize your personal data 
            within 30 days, except where we have legal obligations that require longer retention periods.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Your Rights</h2>
          <p>Under applicable privacy laws, you have several rights regarding your personal data:</p>
          <ul className="bullet-list">
            <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
            <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
            <li><strong>Erasure:</strong> Request deletion of your personal data (except where we have legal obligations)</li>
            <li><strong>Data Portability:</strong> Receive your data in a structured, commonly used format</li>
            <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
            <li><strong>Objection:</strong> Object to processing based on legitimate interests</li>
            <li><strong>Withdraw Consent:</strong> Withdraw previously given consent for specific processing</li>
          </ul>
          <p>
            To exercise these rights, contact us at <a href="mailto:support@chowboyapp.com">support@chowboyapp.com</a>. 
            We may request verification of your identity before fulfilling your request.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Children's Privacy</h2>
          <p>
            Our services are not directed to children under 13 years of age. We do not knowingly collect personal information 
            from children under 13. If you become aware that a child has provided us with personal information without parental 
            consent, please contact us, and we will take steps to remove such information.
          </p>
        </section>

        <section className="privacy-section">
          <h2>International Data Transfers</h2>
          <p>
            Your information may be transferred to and processed in countries other than your country of residence. 
            These countries may have different data protection laws.
          </p>
          <p>
            When we transfer your personal data to other countries, we use appropriate safeguards such as Standard Contractual 
            Clauses approved by relevant authorities and implement additional measures to protect your data when necessary.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, 
            legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy in the app 
            and updating the 'Last Updated' date.
          </p>
          <p>
            Continued use of our services after such changes constitutes your acceptance of the revised Privacy Policy.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Contact Us</h2>
          <p>
            If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
          </p>
          <p className="contact-email">
            <a href="mailto:support@chowboyapp.com">support@chowboyapp.com</a>
          </p>
          <p>
            You have the right to lodge a complaint with your local data protection authority if you believe we have not 
            complied with applicable data protection laws.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Privacy; 